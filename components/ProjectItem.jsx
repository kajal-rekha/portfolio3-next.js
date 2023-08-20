import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ project }) => {
  return (
    <div className="wrapper project grid grid-cols-1 lg:grid-cols-5 overflow-hidden gap-20">
      <div
        className="project-left lg:col-span-3 flex flex-col gap-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="project-id text-4xl md:text-6xl lg:text-7xl text-white">
          {String(project.id).padStart(2, 0)}
        </span>
        <h3
          className="uppercase text-2xl md:text-3xl leading-relaxed text-orange-300"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {project.title}
        </h3>
        <p
          className="text-gray-300 md:text-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {project.description}
        </p>
        <span
          className="md:text-lg text-orange-300 flex gap-5 flex-wrap"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {project.tools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}
        </span>

        <div
          className=" flex gap-8 flex-wrap md:text-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Link
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="uppercase py-5 px-10 border border-white/20 rounded-full hover:bg-orange-400/70 duration-500"
          >
            Live Site
          </Link>

          <Link
            href={project.frontEndLink}
            target="_blank"
            rel="noreferrer"
            className="uppercase py-5 px-10 border border-white/20 rounded-full hover:bg-orange-400/70 duration-500 "
          >
            Front-End Code
          </Link>

          {project.backendLink && (
            <Link
              href={project.backendLink}
              target="_blank"
              rel="noreferrer"
              className="uppercase py-5 px-10 border border-white/20 rounded-full duration-500 hover:bg-orange-400/70"
            >
              Back-End Code
            </Link>
          )}
        </div>
      </div>

      <div
        className="project-right lg:col-span-2 lg:justify-self-end row-start-1 lg:row-auto"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <Image
          src={project.img}
          alt="project image"
          height={500}
          width={600}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default ProjectItem;
