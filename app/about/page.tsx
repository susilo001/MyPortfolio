import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import technologies from "../../data/technologies.json";

export default function About() {
  return (
    <div className="max-w-5xl">
      <div className="flex gap-8">
        <div className="space-y-8 w-3/5">
          <div>
            <h1 className="text-2xl font-bold">Susilo Suharsono</h1>
            <span className="opacity-75">Fullstack Web Developer</span>
            <p className="text-justify">
              I am a fullstack web developer. As a recent graduate with a strong
              enthusiasm for programming and web development, I&apos;m excited
              to kickstart my journey in the world of technology. While I may
              not have formal job experience, my passion for web development and
              my commitment to personal growth have equipped me to create a
              meaningful impact in this field.
            </p>
            <p className="mt-2 text-justify">
              I&apos;m currently seeking opportunities to apply and enhance my
              skills in web development. If you&apos;re looking for a dedicated
              team member who is eager to learn, grow, and contribute, please
              feel free to connect with me. I&apos;m open to networking and
              exploring possibilities for collaboration.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">Adaptability:</h2>
            <p>
              I&apos;m adaptable and open to embracing new technologies and
              changes in the fast-paced world of web development. Learning and
              staying up-to-date are essential parts of my professional journey.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">Collaboration:</h2>
            <p>
              I strongly believe in the strength of collaboration. I&apos;m
              eager to collaborate with diverse teams, bringing my unique
              perspective to the table to accomplish shared objectives.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">Passion for Programming:</h2>
            <p>
              My love for programming is the driving force behind my motivation
              to excel and create a positive impact in the web development
              landscape.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">Educations:</h2>
            <p>
              I&apos;ve recently earned my Bachelor&apos;s degree in Information
              Systems from the University Amikom Yogtakarta.
            </p>
          </div>
          <div>
            <h2 className="font-semibold">Experiences:</h2>
            <p> - </p>
          </div>
          <div className="space-y-2">
            <h2 className="font-semibold">Technologies:</h2>
            <ul className="flex items-center gap-4 flex-wrap">
              {technologies.map((technology, index) => (
                <li key={index}>
                  <Icon
                    iconName={technology.name}
                    className="h-[2rem] w-[2rem]"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-2/5">
          <Image
            src="https://picsum.photos/500"
            width={500}
            height={500}
            alt="Susilo Suharsono"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
