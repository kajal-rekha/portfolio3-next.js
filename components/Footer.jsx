import Link from "next/link";

const Footer = () => {
  return (
    <footer className="my-40 text-center text-white/50 overflow-hidden text-lg">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <Link href="#" className="link-item hover:text-white duration-500">
          Kajal Rekha
        </Link>
        . Crafted by yours truly
      </p>
    </footer>
  );
};

export default Footer;
