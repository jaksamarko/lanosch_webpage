import { Scene, Types } from 'phaser';
import { KeyboardControls, PlayerData } from './MenuScene';

export interface GameData {
	players: PlayerData[];
}

function shuffle(a: any[]) {
	for (var j, i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
}

class Player {
	body: Types.Physics.Arcade.SpriteWithDynamicBody;
	data: PlayerData;
	constructor(playerData: PlayerData) {
		this.body = GameScene.scene.physics.add.sprite(0, 0, 'player');

		this.data = playerData;
	}

	changeAnim(key: string) {
		if (this.body.anims.currentAnim?.key !== key) this.body.play(key);
	}

	step() {
		const scene = GameScene.scene;
		const control = scene.input.keyboard.addKeys('W,A,S,D') as KeyboardControls;
		if (control.D.isDown) {
			this.body.setVelocityX(150).flipX = false;
			this.changeAnim('walk');
		} else if (control.A.isDown) {
			this.body.setVelocityX(-150).flipX = true;
			this.changeAnim('walk');
		} else {
			this.body.setVelocityX(0);
			this.changeAnim('idle');
		}

		const mW = scene.map.widthInPixels,
			mH = scene.map.heightInPixels;
		this.body.x = (this.body.x + mW) % mW;
		this.body.y = (this.body.y + mH) % mH;

		const justPressed = Phaser.Input.Keyboard.JustDown(control.W);

		if (justPressed && this.body.body.blocked.down) {
			this.body.setVelocityY(-500);
		}
	}

	addCollider(object: Phaser.GameObjects.GameObject) {
		GameScene.scene.physics.add.collider(this.body, object);
	}
}

class Arrow {
	body: Types.Physics.Arcade.SpriteWithDynamicBody;

	constructor(x: number, y: number) {
		this.body = GameScene.scene.physics.add.sprite(x, y, 'arrow');
	}
}

export class GameScene extends Scene {
	static scene: GameScene;
	map!: Phaser.Tilemaps.Tilemap;
	players: Player[] = [];
	constructor() {
		super('GameScene');
	}

	init(data: GameData) {
		for (const playerData of data.players) this.players.push(new Player(playerData));
	}

	preload() {
		this.load.tilemapTiledJSON('map', '/assets/m1.json');
		this.load.image('tileset', '/assets/tileset.png');
		this.load.image('arrow', '/assets/arrow.png');
	}

	resize(gameSize: { width: number; height: number }) {
		this.cameras.resize(gameSize.width, gameSize.height);
	}

	create() {
		GameScene.scene = this;
		console.log('asd');

		this.map = this.make.tilemap({ key: 'map' });
		let tileset = this.map.addTilesetImage('tileset', 'tileset');
		let layer = this.map.createLayer('0', tileset);
		//layer.setScale(2);
		layer.setCollisionBetween(0, 21);
		const spawnpointLayer = this.map.getLayer('spawnpoint').data;
		const spawnpoints: { x: number; y: number }[] = [];
		for (let i in spawnpointLayer) {
			for (let j in spawnpointLayer[i]) {
				if (spawnpointLayer[i][j].index !== -1)
					spawnpoints.push({
						x: parseInt(j) * this.map.tileWidth,
						y: parseInt(i) * this.map.tileHeight,
					});
			}
		}

		this.scene.scene.scale.setGameSize(this.map.widthInPixels, this.map.heightInPixels);

		/* this.game.scale.on('leavefullscreen', function () {
			console.log('XD');
		});
		this.game.scale.on('enterfullscreen', () => {
			//this.scene.scene.scale.setGameSize()
		}); */

		//this.cam.shake(250, 0.01);

		shuffle(spawnpoints);

		for (const index in this.players) {
			this.players[index].body.setPosition(spawnpoints[index].x, spawnpoints[index].y);
			this.players[index].addCollider(layer);
		}

		const FKey = this.input.keyboard.addKey('F');
		FKey.on('down', () => {
			this.scale.toggleFullscreen();
		});

		this.scene.scene.events.on('update', () => {
			for (const player of this.players) {
				player.step();
			}
		});

		this.scale.on('resize', this.resize, this);
	}
}
