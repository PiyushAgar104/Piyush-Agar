import SectionHeading from "@/components/SectionHeading";
import { SKILLS } from "@/lib/data";

import {
  SiPython,
  SiJavascript,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiOpencv,
  SiReact,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiFirebase,
  SiVercel,
} from "react-icons/si";
import { FaJava, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa6";
import { Brain, BarChart3, Crosshair, Film, Smartphone, Braces } from "lucide-react";

const ICONS = {
  python: SiPython,
  java: FaJava,
  javascript: SiJavascript,
  sql: SiMysql,
  brain: Brain,
  chart: BarChart3,
  pandas: SiPandas,
  numpy: SiNumpy,
  sklearn: SiScikitlearn,
  opencv: SiOpencv,
  yolo: Crosshair,
  film: Film,
  react: SiReact,
  html: FaHtml5,
  css: FaCss3Alt,
  mobile: Smartphone,
  node: FaNodeJs,
  express: SiExpress,
  api: Braces,
  fastapi: SiFastapi,
  mongo: SiMongodb,
  mysql: SiMysql,
  firebase: SiFirebase,
  git: FaGitAlt,
  github: FaGithub,
  vercel: SiVercel,
  docker: FaDocker,
};

export default function Skills() {
  return (
    <section id="skills" className="relative bg-ink text-bone py-24 md:py-36 scheme-dark">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="Technology Stack"
          lines={["Tools of", "the trade"]}
          meta="Working stack — grouped by what I actually use it for"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {SKILLS.map((group, gi) => (
            <div key={group.id} data-testid={`skills-group-${group.id}`} className="border-t border-white/10 pt-8">
              <p data-anim="reveal" className="font-mono text-[11px] uppercase tracking-[0.3em] text-flame flex items-center gap-3">
                <span>{`0${gi + 1}`}</span>
                {group.label}
              </p>
              <div data-anim="stagger" className="flex flex-wrap gap-x-8 gap-y-4 mt-7">
                {group.items.map((item) => {
                  const Icon = ICONS[item.icon];
                  return (
                    <span
                      key={item.label}
                      data-anim-child
                      className="group/item inline-flex items-center gap-3 font-display font-medium uppercase tracking-tight text-lg md:text-xl text-bone/85 hover:text-flame transition-colors duration-300 cursor-default"
                    >
                      {Icon && (
                        <Icon
                          className="w-5 h-5 text-bone/45 group-hover/item:text-flame transition-colors duration-300"
                          aria-hidden="true"
                        />
                      )}
                      {item.label}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
