import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div className="socials flex gap-10 text-2xl fixed right-5 top-[30%] -rotate-90 origin-right p-5  z-50">
      <div className="rotate-90">
        <Link href="https://www.facebook.com/anowar.kajal">
          <FaFacebookF className="text-orange-300   hover:text-orange-400 duration-500" />
        </Link>
        <Link href="https://www.linkedin.com/in/kajal-rekha-81262b264/">
          <FaLinkedinIn className="text-orange-300   hover:text-orange-400 duration-500 mt-4" />
        </Link>
        <Link href="https://twitter.com/KajalRekha14">
          <FaTwitter className="text-orange-300   hover:text-orange-400 duration-500 mt-4" />
        </Link>
        <Link href="https://github.com/kajal-rekha">
          <FaGithub className="text-orange-300   hover:text-orange-400 duration-500 mt-4" />
        </Link>
      </div>
    </div>
  );
};

export default Social;
