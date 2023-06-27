import ProjectItem from "@/components/ProjectItem";
import SectionTitle from "@/components/SectionTitle";

const data = [
  {
    id: 1,
    title: "Cordemy - An Online Learning Platform",
    img: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1687459898/Screenshot_53_lcf8zk.png",

    description:
      "Cordemy is an innovative online learning platform that provides a unique and immersive educational experience. It leverages a powerful tech stack, including Next.js, React, Prisma, Stripe, NextAuth, Tailwind CSS, clsx, and Axios, to deliver a feature-rich platform for learners and instructors.",
    tools: [
      "Next.js",
      "Prisma",
      "Stripe",
      "NextAuth",
      "Axios",
      "Mongodb",
      "Tailwind CSS",
      "Clsx",
      "Aos",
    ],
    liveLink: "https://cordemy-theta.vercel.app",
    frontEndLink: "https://github.com/kajal-rekha/cordemy.git",
    backendLink: "https://github.com/kajal-rekha/cordemy.git",
  },
  {
    id: 2,
    title: "Proxima - A Powerful Project Management App",
    img: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1677934511/Screenshot_33_b3fq76.png",

    description:
      "Proxima is a secure and powerful project management system built with React, Express, Tailwind CSS, Node.js, and MongoDB. It features JWT authentication, easy project creation, task assignment, and progress tracking. Proxima is highly customizable, responsive, and scalable.",
    tools: [
      "React",
      "Nodejs",
      "Express",
      "Jwt",
      "Mongodb",
      "Tailwind CSS",
      "Context-api",
    ],
    liveLink: "https://proxima-app-project.netlify.app",
    frontEndLink: "https://github.com/kajal-rekha/proxima-client.git",
    backendLink: "https://github.com/kajal-rekha/proxima-server.git",
  },
  {
    id: 3,
    title: "Tech Alph _ An Ecommerce Website",
    img: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1677934825/Screenshot_36_efvmrv.png",

    description:
      "This is an e-commerce project built using React, Redux, and Tailwind CSS. It is a modern, fast and responsive web application designed for an optimal shopping experience. The project makes use of Redux for state management and Tailwind CSS for styling to deliver an efficient and visually appealing user interface. ",
    tools: [
      "React",
      "Redux",
      "Redux Thunk",
      "Redux Toolkit",
      "Axios",
      "Tailwind CSS",
    ],
    liveLink: "https://tech-alpha-ecommerce.netlify.app/",
    frontEndLink: "https://github.com/kajal-rekha/tech-alpha.git",
  },
  {
    id: 4,
    title: "Foodvarse _ A Recipe Finder Web Application",
    img: "https://res.cloudinary.com/dh0ado2ir/image/upload/v1675278752/Screenshot_4_rfupr3.png",

    description:
      "Foodverse is an innovative recipe web app that allows users to explore a wide range of recipes and easily find the essential ingredients for each dish. Seamlessly save your favorite recipes to your browser's local storage, ensuring quick access and a personalized cooking experience. Get inspired and create culinary masterpieces!",
    tools: ["React.js", " React Router", "Tailwind CSS"],
    liveLink: "https://foodvarse.netlify.app/",
    frontEndLink: "https://github.com/kajal-rekha/foodvarse.git",
  },
];
const Projects = () => {
  return (
    <div className="wrapper mt-20 py-10">
      <SectionTitle h2="Projects" />
      <div className="projects-wrapper mt-32 flex flex-col gap-40">
        {data.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
