import Image from "next/image";

const data = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1687881127/images_3_ko6aut.png",
    title: "HTML",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1687867554/180841_ovpctt.png",
    title: "CSS",
  },

  {
    id: 3,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1687881030/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4_utjz6j.png",
    title: "JavaScript",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1687867569/communityIcon_4g1uo0kd87c61_jdvoki.png",
    title: "React.js",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683273058/next_cii95q.png",
    title: "Next.js",
  },

  {
    id: 6,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683321277/node2_hl5spv.webp",
    title: "Node.js",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683321470/express_2_nzyefz.webp",
    title: "Express.js",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683317058/mongodb_grmibx.svg",
    title: "Mongodb",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1687881025/images_2_wakm2f.png",
    title: "Redux",
  },
  {
    id: 10,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1687867491/17219288_ywzvec.png",
    title: "Prisma",
  },
  {
    id: 11,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1687867476/1_iA-WRbWcbYd3BFAzzFypWg_dsfmdc.png",
    title: "TypeScript",
  },
  {
    id: 12,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1687867464/icon-256x256_qpbtwi.png",
    title: "Stripe",
  },
  {
    id: 13,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1687880005/jwt-token-2023-01-04_00-00-00-2023-06-09_14-27-45_lp2wrk.png",
    title: "JWT",
  },
  {
    id: 14,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1687880011/5e22427b60a395fba7707b2d_apple-webclip_k6b7dp.png",
    title: "Axios",
  },

  {
    id: 15,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1687867959/c09b16f5_gflh14.webp",
    title: "Tailwind CSS",
  },
  {
    id: 16,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1683272953/bootstrap_oucwec.png",
    title: "Bootstrap",
  },

  {
    id: 17,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1687880165/greensock-animation-platform_tbelys.webp",
    title: "GSAP",
  },
  {
    id: 18,
    image:
      "https://res.cloudinary.com/dh0ado2ir/image/upload/v1687867508/download_1_mszagw.png",
    title: "Firebase",
  },
];

const Skills = () => {
  return (
    <div className="skills wrapper py-10 mt-40" id="skills">
      <h2>Skills</h2>
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 mt-20">
        <ul className="skills-left flex flex-col gap-10">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill) => (
              <li key={skill.id} className="skill-item overflow-hidden">
                <div className="flex gap-10 items-baseline">
                  <div>
                    <Image
                      src={skill.image}
                      alt="images"
                      width={45}
                      height={45}
                      className="rounded-full"
                    />
                  </div>

                  <div className="skill-title ">
                    <span className="skill-name text-xl"> {skill.title}</span>
                  </div>
                </div>
              </li>
            ))}
        </ul>

        <ul className="skills-right flex flex-col gap-10">
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill, i) => (
              <li key={skill.id} className="skill-item reveal overflow-hidden">
                <div className="flex gap-10 items-baseline">
                  <div>
                    <Image
                      src={skill.image}
                      alt="images"
                      width={45}
                      height={45}
                      className="rounded-full"
                    />
                  </div>
                  <div className="skill-title">
                    <span className="skill-name text-xl"> {skill.title}</span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
