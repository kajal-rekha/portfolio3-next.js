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

  <div className="contact wrapper mt-40">
    <SectionTitle h2={"Contact"} />

    <form
      onSubmit={sendEmail}
      className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20"
      ref={formRef}
    >
      <div className="form-control overflow-hidden">
        <input
          type="text"
          placeholder="Write your name"
          name="name"
          required
          className="fullname bg-transparent border outline-none  py-16 px-28 rounded-full border-cyan-400 duration-500 w-full"
        />
      </div>
      <div className="form-control overflow-hidden">
        <input
          type="email"
          placeholder="Write your email"
          name="email"
          required
          className="email bg-transparent border py-16 px-28 outline-none rounded-full border-cyan-400 duration-500 w-full"
        />
      </div>
      <div className="form-control overflow-hidden">
        <textarea
          placeholder="Write your message"
          name="message"
          required
          rows="1"
          cols="30"
          className="message bg-transparent border py-16 px-28 rounded-full border-cyan-400  outline-none duration-500 w-full "
        />
      </div>

      <div className="form-control overflow-hidden">
        <input
          type="submit"
          value="Send message"
          className="uppercase border bg-transparent py-16 px-28 rounded-full border-cyan-400 duration-500 w-full hover:bg-cyan-400/20 hover:border-cyan-400/20"
        />
      </div>
    </form>
  </div>;
  return (
    <div className="contact wrapper mt-40">
      <SectionTitle h2={"Contact"} />

      {/* <form
        onSubmit={sendEmail}
        className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20"
      >
        <div className="form-control overflow-hidden">
          <input
            type="text"
            placeholder="Write your name"
            name="fullname"
            required
            className="fullname bg-transparent border outline-none  py-12 px-28 rounded-lg border-white/70 focus:border-white  duration-500 w-full"
          />
        </div>
        <div className="form-control overflow-hidden">
          <input
            type="email"
            placeholder="Write your email"
            name="email"
            required
            className="email bg-transparent border py-12 px-28 outline-none rounded-lg border-white/70 focus:border-white duration-500 w-full"
          />
        </div>
        <div className="form-control overflow-hidden">
          <textarea
            placeholder="Write your message"
            name="message"
            required
            rows="1"
            cols="30"
            className="message resize-none bg-transparent border py-12 px-28 rounded-lg border-white/70 focus:border-white outline-none duration-500 w-full "
          />
        </div>
        <div className="form-control overflow-hidden">
          <input
            type="submit"
            value="Send message"
            className="uppercase border bg-transparent py-12 px-28 rounded-lg border-white/70 duration-500  focus:border-white w-full"
          />
        </div>
      </form> */}

      <form
        onSubmit={sendEmail}
        className="contact-form flex flex-col gap-5 py-10 mx-auto max-w-screen-sm"
        ref={formRef}
      >
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="name" className="cursor-pointer">
            Name
          </label>
          <input
            type="name"
            name="name"
            placeholder="write your name"
            required
            className=" name border border-gray-300 focus:border-gray-600 py-4 px-6 rounded-xl outline-none duration-300"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </div>
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="email" className="cursor-pointer ">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="write your email"
            required
            className=" email border border-gray-300 focus:border-gray-600 py-4 px-6 rounded-xl outline-none duration-300"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="message" className="cursor-pointer">
            Message
          </label>
          <textarea
            placeholder="Write your message"
            required
            name="message"
            rows="1"
            cols="30"
            className="message border border-gray-300 focus:border-gray-600 h-40 rounded-xl outline-none py-5 px-5 resize-none duration-300"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </div>
        <div
          className="submit px-2 py-5  rounded-xl bg-black text-center overflow-hidden hover:bg-gray-700 duration-300"
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
