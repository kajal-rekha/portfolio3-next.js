import Image from "next/image";

const ProjectItem = ({ project }) => {
  return (
    <div className="project grid grid-cols-1 xl:grid-cols-5 overflow-hidden gap-20">
      <div className="project-left xl:col-span-3 flex flex-col gap-3">
        <span className="text-8xl text-white">
          {String(project.id).padStart(2, 0)}
        </span>
        <h3 className="uppercase text-5xl leading-relaxed text-orange-300">
          {project.title}
        </h3>
        <p className="text-gray-300">{project.description}</p>
        <span className="text-orange-300 flex gap-5 flex-wrap">
          {project.tools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}
        </span>

        <div className="flex gap-8 flex-wrap">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="uppercase py-6 px-10 border border-white/20 rounded-full hover:border-cyan-400/20 duration-500 hover:bg-cyan-400/20"
          >
            Live Site
          </a>

          <a
            href={project.frontEndLink}
            target="_blank"
            rel="noreferrer"
            className="uppercase py-6 px-10 border border-white/20 rounded-full hover:border-cyan-400/20 duration-500 hover:bg-cyan-400/20"
          >
            Front-End Code
          </a>

          {project.backendLink && (
            <a
              href={project.backendLink}
              target="_blank"
              rel="noreferrer"
              className="uppercase py-6 px-10 border border-white/20 rounded-full hover:border-cyan-400/20 duration-500 hover:bg-cyan-400/20"
            >
              Back-End Code
            </a>
          )}
        </div>
      </div>

      <div className="project-right xl:col-span-2 xl:justify-self-end row-start-1 xl:row-auto">
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
