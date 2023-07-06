import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero wrapper grid grid-cols-1 lg:grid-cols-2 gap-10 overflow-hidden mt-20 md:mt-40 ">
      <div className="hero-left">
        <div
          className="space-y-5"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <p className="text-2xl md:text-3xl  font-semibold">
            Hello there, my name is
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold  uppercase">
            Kajal Rekha
          </h1>
          <h1 className="text-2xl md:text-3xl text-orange-300">
            <Typewriter
              options={{
                strings: [
                  "I am a MERN stack  developer.",
                  "Crafting uniquely creative websites is my specialty.",
                  "I can also  engineer modern, innovative MERN solutions.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="md:text-lg">
            I am a skilled MERN stack developer with expertise in building web
            applications. I am passionate about creating efficient and
            user-friendly solutions, leveraging my strong knowledge of MongoDB,
            Express.js, Next.js, React, and Node.js.
          </p>
          <div className="py-10" data-aos="fade-right" data-aos-duration="1000">
            <Link
              href="/about"
              className="py-4 px-7 text-lg font-medium border rounded-full border-white/20 hover:bg-orange-400/70 duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div
        className="hero-right md:ml-28"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Image
          src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1683005288/her_o2_msb5gs.jpg"
          alt="hero image"
          width={450}
          height={450}
          priority
          className="rounded-full "
        />
      </div>
    </div>
  );
};

export default Hero;
