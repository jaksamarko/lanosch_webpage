const { writeFileSync, readFileSync, readdirSync, statSync } = require('fs');
const {join} = require('path');

/* fetch("https://git.sch.bme.hu/api/v4/projects/4027/repository/tree/?path=pages&recursive=true",{
    method: "GET"
}).then((response)=>response.json()).then(async (res)=>{
    const pages = await Promise.all(res.map(async ({path})=>{
        return await fetch(`https://git.sch.bme.hu/api/v4/projects/4027/repository/files/${encodeURIComponent(path)}?ref=master`,{
            method: "GET"
        }).then((file)=>file.json())
    }));

    const json = pages.map(({content,file_path})=>{
        const html = Buffer.from(content,'base64').toString();
        const title = html.split('<title>').pop().split('</title>')[0];
        return {html,title,path: 'events/'+encodeURIComponent(`${
            file_path.split("/").slice(1).join("/").split('.').slice(0,-1).join('.')}`)};
    });

    writeFileSync(__dirname+"/src/data/pages.json",JSON.stringify(json,null,2));
}); */
function openFolder(path) {
    try {
        const files = readdirSync(path);
        return files.map((file)=>{
            const filePath = join(path,file)
            const stat = statSync(filePath);
            if(stat.isDirectory()) {
                return openFolder(filePath);
            }

            const fileData = readFileSync(filePath,{encoding:'utf-8'});
            const fileStat = statSync(filePath);

            return {path: encodeURIComponent(filePath.slice(0,filePath.lastIndexOf('.'))), title: fileData.split('<title>').pop().split('</title>')[0], date: fileStat.ctimeMs};
        })
    } catch(err) {
        console.error(err);
        return [];
    }
}
const pages = openFolder("./pages").flat();
pages.sort((a,b)=>b.date-a.date);
writeFileSync(join(__dirname,"src/data/pages.json"),JSON.stringify(pages,null,2));