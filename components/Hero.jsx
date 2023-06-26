import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero wrapper py-10 grid grid-cols-1 md:grid-cols-2 gap-20 mt-32 overflow-hidden">
      <div class="hero-left">
        <Image
          src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1687806487/hr-removebg-preview_segcts.png"
          alt="hero image"
          width={500}
          height={500}
        />
      </div>
      <div class="hero-right ">
        <div className="space-y-5">
          <p className="text-3xl  font-semibold">Hello there, my name is</p>
          <h1 className="text-6xl font-semibold text-orange-300">
            Kajal Rekha{" "}
          </h1>
          <p className="text-xl text-gray-300">
            {`I'm a mern stack  developer specializing in developing exceptional
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
      </div>
    </div>
  );
};

export default Hero;
