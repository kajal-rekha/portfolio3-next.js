import SectionTitle from "@/components/SectionTitle";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    //emailjs integration

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        () => {
          console.log("message sent!");
        },
        () => {
          console.log("message not sent!");
        }
      );

    //rest
    e.target.querySelector(".name").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="contact wrapper mt-40">
      <SectionTitle h2={"Contact"} />
      <form
        onSubmit={sendEmail}
        className="contact-form grid grid-cols md:grid-cols-2 gap-14 py-10 mx-auto mt-20"
        ref={formRef}
      >
        <div className="form-control flex flex-col gap-2">
          <input
            type="text"
            name="name"
            placeholder="write your name"
            required
            className="name border border-gray-600 focus:border-gray-500 bg-transparent py-10 px-14 rounded-xl outline-none duration-300"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </div>
        <div className="form-control flex flex-col gap-2">
          <input
            type="email"
            name="email"
            placeholder="write your email"
            required
            className=" email border border-gray-600 focus:border-gray-500 bg-transparent py-10 px-14 rounded-xl outline-none duration-300"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <textarea
            placeholder="Write your message"
            required
            name="message"
            rows="1"
            cols="30"
            className="message border border-gray-600 focus:border-gray-500 bg-transparent rounded-xl outline-none py-10 px-14 resize-none duration-300"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </div>
        <div
          className="submit  rounded-xl  py-10 px-14 text-center overflow-hidden border border-gray-600 bg-transparent  duration-300"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <button role="link" type="submit" className=" text-white uppercase">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
