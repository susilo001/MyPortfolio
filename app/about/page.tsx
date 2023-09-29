import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import technologies from "../../data/technologies.json";
import educations from "../../data/educations.json";
import experiences from "../../data/experiences.json";

export default function About() {
  return (
    <div className="flex flex-col sm:flex-row-reverse gap-4">
      <div>
        <Image
          src="https://picsum.photos/500"
          width={500}
          height={500}
          alt="Susilo Suharsono"
          className="rounded-lg"
        />
      </div>
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold">Susilo Suharsono</h1>
          <span className="opacity-75">Fullstack Web Developer</span>
          <div className="space-y-2">
            <p className="text-justify">
              I am a recent graduate, specializing in full-stack web
              development. My passion for programming and web development,
              combined with my dedication to personal growth, fuels my desire to
              make a significant impact in the technology field.
            </p>
            <p className="text-justify">
              Currently, I am actively seeking opportunities to apply and
              further refine my web development skills. Despite my lack of
              formal work experience, I approach every task with unwavering
              enthusiasm and a commitment to excellence. If you are in search of
              a dedicated team member who is not only eager to learn and grow
              but also eager to contribute effectively, I encourage you to
              connect with me. I am open to networking and exploring potential
              avenues for collaboration.
            </p>
            <p className="text-justify">
              Adaptability is a cornerstone of my professional ethos. In the
              dynamic world of web development, I embrace new technologies and
              eagerly anticipate change. I view learning and staying updated as
              indispensable elements of my journey.
            </p>
            <p className="text-justify">
              Collaboration is another core value I hold dear. I firmly believe
              in the power of collaboration and am enthusiastic about working
              with diverse teams. I bring a unique perspective to the table,
              aiming to unite our strengths and accomplish shared objectives
              effectively.
            </p>
            <p className="text-justify">
              My passion for programming is the driving force behind my desire
              to excel and leave a lasting, positive impact on the web
              development landscape. It is this love for coding that propels me
              forward and motivates me to continually push the boundaries of
              what is possible.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-semibold">Educations :</h2>
          <ul className="list-disc pl-5">
            {educations.map((education, index) => (
              <li key={index}>
                <div className="flex flex-col">
                  <h3 className="font-semibold">{education.name}</h3>
                  <span className="opacity-75 text-xs">
                    {education.start} - {education.end}
                  </span>
                  <p>{education.school}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Experiences :</h2>
          <ul className="list-disc pl-5">
            {experiences.map((experience, index) => (
              <li key={index}>
                <div className="flex flex-col">
                  <h3 className="font-semibold">
                    {experience.name} - {experience.company}
                  </h3>
                  <span className="opacity-75 text-xs">
                    {experience.start} - {experience.end}
                  </span>
                  <p>{experience.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="font-semibold">Technologies :</h2>
          <ul className="flex items-center gap-4 flex-wrap">
            {technologies.map((technology, index) => (
              <li key={index}>
                <Icon
                  iconName={technology.name}
                  className="h-[1.5rem] w-[1.5rem]"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
