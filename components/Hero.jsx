import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-wrape mx-auto mt-20 ">
      <div className="hero wrapper grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden ">
        <div className="hero-left">
          <div
            className="space-y-5"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <p className="text-2xl  font-semibold">Hello there, my name is</p>
            <h1 className="text-7xl font-semibold  uppercase">Kajal Rekha</h1>
            <h1 className="text-4xl">
              <Typewriter
                options={{
                  strings: [
                    "I am  mern stack  developer.",
                    "I build amazing things for the web.",
                    "I can also design creative & unique websites.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="text-lg">
              I am a highly skilled MERN stack developer with a strong passion
              for building robust and innovative web applications. My expertise
              lies in utilizing cutting-edge technologies such as Next.js,
              React.js, Express.js, Node.js, MongoDB, Prisma, Redux, Tailwind
              CSS, JavaScript, TypeScript, Axios, JWT, NextAuth, Stripe, and
              Google Cloud Platform.
            </p>
            <div
              className="py-10"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
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
          className="hero-right ml-28"
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
    </div>
  );
};

export default Hero;
