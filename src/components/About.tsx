"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";
import { TechStack } from "./TechStack";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
        
      </div>

      <div className="max-w-4xl">
  <Paragraph className="mt-4">
    Hello, I'm Birat Pandey, and I am a driven front-end developer, an avid lifelong learner in web technologies, currently exploring Python and Django for back-end development. My interest lies in developing effective, responsive, and user-friendly digital solutions where functionality meets aesthetics.
  </Paragraph>

  <Paragraph className="mt-4">
    The driving force behind my career has always been an ardent desire to excel in web development. I am proficient in a wide range of technologies including but not limited to React, Next.js, JavaScript, SQL, C, C++, and MongoDB. My goal is not only to write clean, efficient code but also to create intuitive and creative interfaces that significantly enhance user experience.
  </Paragraph>

  <Paragraph className="mt-4">
    Beyond coding, I hold a deep appreciation for design. Proficient in tools like Figma, Photoshop, and Illustrator, I understand that great digital experiences come from the harmony of form and function. Whether it's designing a website interface or crafting graphics, I pay close attention to detail to deliver an optimal user experience.
  </Paragraph>

  <Paragraph className="mt-4">
    My commitment to continuous learning has driven me to expand my skillset. Alongside my work in front-end development, I am acquiring knowledge in data structures, algorithms, and database management. My recent focus on Python further enhances my capabilities, allowing me to build more complex and scalable web applications.
  </Paragraph>

  <Paragraph className="mt-4">
    Through this platform, I aim to share my journey, insights, and expertise in web development and design. Whether you're a fellow developer, a student exploring the world of code, or someone passionate about creating beautiful digital experiences, you'll find valuable content here.
  </Paragraph>

  <Paragraph className="mt-4">
    Thank you for visiting my site, and I look forward to collaborating with you as we push the boundaries of technology and design together.
  </Paragraph>

  <TechStack />
</div>

    </div>
  );
}
