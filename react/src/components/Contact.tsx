import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import ContactField, {
  ContactFieldProps,
  emailRegex,
} from "./Contact/ContactField";
import Alert from "./Misc/Alert";

function convertDate(date: Date) {
  return date.toISOString().split("T")[0];
}

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [fullname, setFullname] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [consoleId, setConsoleId] = useState<string>("def");
  const [from, setFrom] = useState<Date>(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );
  const [until, setUntil] = useState<Date>(
    new Date(new Date().setDate(new Date().getDate() + 2))
  );
  const [extra, setExtra] = useState<string>("");

  const [alertState, setAlertState] = useState<any[]>([]);

  const fields: ContactFieldProps[] = [
    {
      name: "fullname",
      placeholder: "Név",
      displayName: "Teljes Név",
      value: fullname,
      setValue: setFullname,
    },
    {
      name: "email",
      placeholder: "email@cimed.ide",
      displayName: "Email",
      value: email,
      type: "email",
      setValue: setEmail,
    },
    {
      name: "roomId",
      placeholder: "616",
      displayName: "Szobaszám",
      value: roomId,
      setValue: setRoomId,
    },
    {
      name: "console",
      value: consoleId,
      displayName: "Konzol",
      setValue: setConsoleId,
      type: "option",
      options: ["XBOX ONE + KINECT", "XBOX ONE", "XBOX 360", "PS5"],
    },

    {
      name: "from",
      placeholder: convertDate(new Date()),
      displayName: "Mettől",
      value: from,
      type: "date",
      setValue: setFrom,
    },
    {
      name: "until",
      displayName: "Meddig",
      value: until,
      type: "date",
      setValue: setUntil,
      minDate: from,
    },
    {
      name: "extra",
      type: "textarea",
      notRequired: true,
      displayName: "Megjegyzés",
      value: extra,
      setValue: setExtra,
      maxLength: 250,
    },
  ];
  /*   []
  ); */

  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      fullname.length === 0 ||
      email.length === 0 ||
      roomId.length === 0 ||
      consoleId === "def" ||
      !emailRegex.test(email)
    ) {
      console.log(consoleId);
      if (!alertState.length) {
        setAlertState([
          <Alert
            key="only"
            spanText="Űrlap"
            color="red"
            text="kitöltetlen"
            dismiss={() => {
              setAlertState([]);
            }}
          />,
        ]);
      }
      return;
    }
    emailjs
      .sendForm(
        "service_eflj8ip",
        "template_wazkvrg",
        form.current!,
        "IAKISS8NCji-DGSTy"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (!alertState.length) {
            setAlertState([
              <Alert
                key="only"
                spanText="Email"
                text="elküldve"
                dismiss={() => {
                  setAlertState([]);
                }}
              />,
            ]);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="ud-contact relative py-20 md:py-[120px]">
      <div className="absolute top-0 left-0 z-[-1] h-1/2 w-full bg-[#f3f4fe] lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <span className="font-headingFont mb-5 text-base font-semibold text-dark">
                  BÉRELJ KONZOLT,
                </span>
                <h2 className="text-[35px] font-semibold">
                  Ha nyitásokon kívül
                  <br />
                  is szeretnél játszani
                </h2>
              </div>
              <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                {/* <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[16px] w-[30px] text-primary">
                    <img src={sch_logo} alt="logo" />
                  </div>
                  <div>
                    <h5 className="mb-6 text-lg font-semibold">
                      Helyünk az sch-ba
                    </h5>
                    <p className="text-base text-body-color">1519</p>
                  </div>
                </div> */}
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary">
                    <svg
                      width="34"
                      height="25"
                      viewBox="0 0 34 25"
                      className="fill-current"
                    >
                      <path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-6 text-lg font-semibold">
                      Egyéb kérdésed van?
                    </h5>

                    <a
                      className="text-base text-body-color underline"
                      href="mailto:konzol@sch.bme.hu"
                    >
                      konzol@sch.bme.hu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div
              className="wow fadeInUp rounded-lg bg-white py-10 px-8 shadow-testimonial sm:py-12 sm:px-10 md:p-[60px] lg:p-10 lg:py-12 lg:px-10 2xl:p-[60px]"
              data-wow-delay=".2s"
            >
              {/*  <h3 className="mb-8 text-2xl font-semibold md:text-[26px]">
                Bérelj konzolt itt!
              </h3> */}
              <form ref={form} onSubmit={sendMail}>
                {fields.map((v) => {
                  return <ContactField key={v.name} {...v} />;
                })}
                <div className="mb-0">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark"
                  >
                    Bérlés elküldése
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {alertState}
    </section>
  );
};

export default Contact;
