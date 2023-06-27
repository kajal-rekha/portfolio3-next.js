import Image from "next/image";
import Link from "next/link";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="hero wrapper py-10 grid grid-cols-1 md:grid-cols-2 gap-20 mt-32 overflow-hidden">
      <div class="hero-left">
        <Image
          src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1683005288/her_o2_msb5gs.jpg"
          alt="hero image"
          width={500}
          height={500}
        />
      </div>
      <div class="hero-right ">
        <div className="space-y-5">
          <p className="text-3xl  font-semibold">Hello there, my name is</p>
          <h1 className="text-6xl font-semibold text-orange-300 uppercase">
            Kajal Rekha{" "}
          </h1>
          <p className="text-xl text-gray-300">
            {`I'm mern stack  developer specializing in developing exceptional
          and unique websites. Currently, I'm focused on building accessible,
          human-centered interactive web apps.`}
          </p>
        </div>
        <div className="mt-10">
          {" "}
          <Link
            href="/about"
            className="font-semibold py-3 px-6 rounded-lg bg-orange-400 hover:bg-orange-300 duration-300"
          >
            Learn More
          </Link>
        </div>
        <div className="social-links mt-32 flex gap-5 text-xl  ">
          <Link
            href="https://www.facebook.com/anowar.kajal"
            className="bg-orange-400 rounded-full py-1 px-1 "
          >
            <BiLogoFacebookCircle />
          </Link>
          <Link
            href="https://twitter.com/KajalRekha14"
            className="rounded-full py-1 px-1 bg-orange-400"
          >
            <BiLogoTwitter />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kajal-rekha-81262b264/"
            className="rounded-full py-1 px-1 bg-orange-400"
          >
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
