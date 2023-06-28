import Image from "next/image";

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
            <h2 className="text-6xl text-gray-300 leading-none typewriter">
              a passionate <span className="">mern stack</span> enthusiast and
              aspiring developer, proudly representing Bangladesh.
            </h2>
          </div>
          {/* <div className="mt-10">
          {" "}
          <Link
            href="/about"
            className="font-semibold py-3 px-6 rounded-lg bg-orange-400 hover:bg-orange-300 duration-300"
          >
            Learn More
          </Link>
        </div> */}
          {/* <div className="social-links mt-32 flex gap-5 text-xl  ">
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
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
