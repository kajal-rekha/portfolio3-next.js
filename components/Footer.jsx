import Link from "next/link";

const Footer = () => {
  return (
    <footer className="wrapper py-10 md:py-20 text-center text-white/50 overflow-hidden md:text-lg">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <Link href="/" className="link-item hover:text-white duration-500">
          Kajal Rekha
        </Link>
        . Crafted by yours truly
      </p>
    </footer>
  );
};

export default Footer;
