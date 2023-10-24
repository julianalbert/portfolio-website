"use client";

import React from "react";
import SectionHeading from "./section_heading";
import { motion } from "framer-motion";

export default function About() {

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
    <SectionHeading>About me</SectionHeading>
    <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Statistics</span>, I decided to pursue my
        passion for data. I entered the working world through{" "}
        <span className="font-medium">data and analytics</span> where I found a need to become
        more <span className="font-medium">full-stack</span>.{" "} I subsequently sought to learn
        as much about the modern data stack as I could, from <span className="font-medium">wrangling data </span>
        to implementing <span className="font-medium">ml models</span> and developing <span className="font-medium">UI</span>.
    </p>
    <p>
        My favorite part of working with data is the problem-solving and creativity. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack is{" "}
        <span className="font-medium">
        Python, SQL, AWS, and React/Next.js
        </span>
        . I am also familiar with Airflow, MLFlow, Docker and Pyspark. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Data Scientist or ML Engineer.
    </p>
    <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, playing sport, and eating out. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Next.js and Kubernetes/Docker deployment</span>.
    </p>
    </motion.section>
  );
}