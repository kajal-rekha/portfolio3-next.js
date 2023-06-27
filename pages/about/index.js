import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

const About = () => {
  return (
    <div className="about container mx-auto mt-40 " id="about">
      <SectionTitle h2={"About"} />

      <div className="about-wrapper mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left">
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1683005077/109305530_mjokbs.jpg"
            alt="hero image"
            width={450}
            height={450}
            className="rounded-sm "
          />
        </div>
        <div className="about-right">
          <p className="mb-10">
            I am a mern stack developer with a passion for creating
            user-friendly and visually appealing websites. I have expertise in
            HTML, CSS, JavaScript, and React, and have a strong understanding of
            responsive design and cross-browser compatibility. I stay up-to-date
            with the latest development trends and techniques to ensure that my
            projects are up to industry standards. My goal is to deliver a
            seamless user experience that meets and exceeds the needs of my
            clients and their users.
          </p>
          <p>
            I stay up-to-date with the latest development trends and techniques
            to ensure that my projects are up to industry standards. My goal is
            to deliver a seamless user experience that meets and exceeds the
            needs of my clients and their users.
          </p>
          <a
            href="https://drive.google.com/file/d/1knbRijme6r34D5vzKZbxV0PLugGKBHrL/view?usp=drive_link"
            target="_blank"
            rel="noreferrrer"
            className="inline-block mt-10 uppercase py-8 px-14 border border-white/20 rounded-full hover:border-cyan-400/20 hover:bg-cyan-400/20 duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
