import React from "react";
import {
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiLaravel,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiExpress,
  SiInertia,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiMongodb,
  SiSequelize,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

interface IconProps {
  className?: string;
  iconName: string;
}

const iconMappings: {
  [key: string]: { title: string; icon: any; color: string };
} = {
  php: { title: "PHP", icon: SiPhp, color: "text-[#777BB4]" },
  javascript: {
    title: "Javascript",
    icon: SiJavascript,
    color: "text-[#F7DF1E]",
  },
  typescript: {
    title: "Typescript",
    icon: SiTypescript,
    color: "text-[#007ACC]",
  },
  laravel: { title: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]" },
  reactjs: { title: "React", icon: SiReact, color: "text-[#61DAFB]" },
  nodejs: { title: "NodeJS", icon: SiNodedotjs, color: "text-[#339933]" },
  nextjs: {
    title: "NextJS",
    icon: SiNextdotjs,
    color: "text-[#000000] dark:text-[#E8E8E8]",
  },
  tailwindcss: {
    title: "TailwindCSS",
    icon: SiTailwindcss,
    color: "text-[#38B2AC]",
  },
  expressjs: {
    title: "ExpressJS",
    icon: SiExpress,
    color: "text-[#000000] dark:text-[#E8E8E8]",
  },
  inertiajs: { title: "InertiaJS", icon: SiInertia, color: "text-[#9553E9]" },
  postgresql: {
    title: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-[#336791]",
  },
  mysql: { title: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
  docker: { title: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
  mongodb: { title: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  sequelize: { title: "Sequelize", icon: SiSequelize, color: "text-[#52B0E7]" },
};

export function Icon({ className, iconName }: IconProps) {
  const normalizedIconName = iconName.toLowerCase();
  const iconData = iconMappings[normalizedIconName] || iconMappings["php"]; // Default to PHP if iconName is not found

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <iconData.icon
            className={`${iconData.color} ${className} inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none`}
          />
        </TooltipTrigger>
        <TooltipContent>
          <span>{iconData.title}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
