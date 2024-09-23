"use client";
import { title } from "process";
import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaFigma,
  FaReact,
  FaJs,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import SVg from "@/Public/badge.svg";
const about = {
  title: "About me",
  description: `Heyyyy-yo! Akkaoui here, I hold a bachelor's degree in Physics and
              recently graduated from a dynamic program called Arkx, where I
              specialized in Full Stack Development with a focus on the MERN
              stack. Before diving into the world of full-stack development, I
              honed my skills in Software Engineering at ALX. 
              Currently, I'm bringing my passion and expertise to 2peerfect as a
              Full Stack Developer intern. Coding is not just a job for me—it's
              a source of joy and excitement. I love creating, learning, and
              exploring new technologies and methodologies that push the
              boundaries of what's possible..  Beyond the screen,
              I'm an avid reader who finds inspiration in books, and I love the
              challenge and teamwork involved in playing basketball. These
              interests keep me balanced and fueled with fresh ideas and
              perspectives.  I'm always eager to take on new
              challenges, contribute to exciting projects, and make things
              better. If you're looking for someone who combines technical
              prowess with a passion for continuous learning and personal
              growth, let's connect!`,
  info: [
    { fileName: "Name", fieldValue: "Mohamed akkaoui" },
    { fileName: "Phone", fieldValue: "(+212)631603723" },
    { fileName: "Experience", fieldValue: "1 Year" },
    { fileName: "Nationality", fieldValue: "Moroccan" },
    { fileName: "Email", fieldValue: "akkaouimohamed00@gmail.com" },
    { fileName: "Status", fieldValue: "Available" },
    { fileName: "Languages", fieldValue: "Arabic, French, English" },
  ],
};

const experience = {
  icon: "",
  title: "My experience",
  description:
    "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ea eligendi modi aut alias ",
  items: [
    {
      company: "2Peerfect",
      position: "Full Stack Developer",
      duration: "June 2024 - Present 2024",
    },
    {
      company: "ARK-X Talent Factory",
      position: "Mern Developer",
      duration: "January 2024 - June 2024",
    },
    {
      company: "Digisell",
      position: "Conseiller Commercial",
      duration: "June 2022 - January 2023",
    },
  ],
};

const education = {
  icon: "",
  title: "My education",
  description:
    "orem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, iste? ",
  items: [
    {
      institution: "JobinTech",
      degree: "Mern Full Stack",
      duration: "January 24 - June 24",
    },
    {
      institution: "Alx",
      degree: "Software Enginering",
      duration: "June 23 - january 24",
    },
    {
      institution: "University Ibno Tofail",
      degree: "Chemistry-Physics License",
      duration: "2017 - 2022",
    },
    {
      institution: "American Language School Access",
      degree: "English Access Microscholarship",
      duration: "2016 - 2018",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, laborum perspiciatis enim officiis ",
  skillList: [
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <FaGithub />,
      name: "Git/Github",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};
function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fileName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
