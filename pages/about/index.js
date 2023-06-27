import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="about wrapper mt-40 " id="about">
      <SectionTitle h2={"About"} />

      <div className="about-wrapper mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left">
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1683005288/her_o2_msb5gs.jpg"
            alt="hero image"
            width={500}
            height={500}
            className="rounded-sm "
          />
        </div>
        <div className="about-right">
          <p className="text-xl text-gray-300 mb-7">
            I am a mern stack developer with a passion for creating
            user-friendly and visually appealing websites. I have expertise in
            HTML, CSS, JavaScript, and React, and have a strong understanding of
            responsive design and cross-browser compatibility. I stay up-to-date
            with the latest development trends and techniques to ensure that my
            projects are up to industry standards. My goal is to deliver a
            seamless user experience that meets and exceeds the needs of my
            clients and their users.
          </p>

          <p className="text-xl text-gray-300 mb-20">
            I stay up-to-date with the latest development trends and techniques
            to ensure that my projects are up to industry standards. My goal is
            to deliver a seamless user experience that meets and exceeds the
            needs of my clients and their users.
          </p>

          <div className="">
            <Link
              href="https://drive.google.com/file/d/1knbRijme6r34D5vzKZbxV0PLugGKBHrL/view?usp=drive_link"
              className="py-4 px-7 text-lg font-medium rounded-lg bg-orange-400 hover:bg-orange-500 duration-300"
            >
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
