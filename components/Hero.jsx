import Image from "next/image";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="hero-wrape mx-auto mt-20 ">
      <div className="hero wrapper grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden ">
        <div className="hero-left  ">
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1683005077/109305530_mjokbs.jpg"
            alt="hero image"
            width={450}
            height={450}
            className="rounded-full "
          />
        </div>
        <div className="hero-right">
          <div className="space-y-5">
            <p className="text-2xl  font-semibold">Hello there, my name is</p>
            <h1 className="text-7xl font-semibold  uppercase">Kajal Rekha,</h1>
            <h1 className="text-4xl">
              i am
              <Typewriter
                options={{
                  strings: [
                    "web developer",
                    "mern stack developer",
                    "frontend developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
