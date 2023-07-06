import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="about wrapper mt-20 md:mt-40 " id="about">
      <SectionTitle h2={"About"} />

      <div
        className="about-wrapper mt-20  md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 overflow-hidden"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="about-left">
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1683005077/109305530_mjokbs.jpg"
            alt="hero image"
            width={500}
            height={500}
            priority
            className="rounded-sm "
          />
        </div>
        <div className="about-right">
          <div>
            <p
              className="md:text-lg text-gray-300 mb-7"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              I am a mern stack developer with a passion for creating
              user-friendly and visually appealing websites. I have expertise in
              HTML, CSS, JavaScript, and React, and have a strong understanding
              of responsive design and cross-browser compatibility. I stay
              up-to-date with the latest development trends and techniques to
              ensure that my projects are up to industry standards. My goal is
              to deliver a seamless user experience that meets and exceeds the
              needs of my clients and their users.
            </p>

            <p
              className="md:text-lg text-gray-300 mb-20"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              I stay up-to-date with the latest development trends and
              techniques to ensure that my projects are up to industry
              standards. My goal is to deliver a seamless user experience that
              meets and exceeds the needs of my clients and their users.
            </p>
          </div>

          <div className="mb-10" data-aos="fade-up" data-aos-duration="1000">
            <Link
              href="https://drive.google.com/file/d/1knbRijme6r34D5vzKZbxV0PLugGKBHrL/view?usp=drive_link"
              className="py-4 px-7 md:text-lg font-medium border rounded-full border-white/20 hover:bg-orange-400/70 duration-300"
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
