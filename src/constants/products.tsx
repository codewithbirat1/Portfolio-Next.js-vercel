import Projects from "public/images/project.jpg";
import Nexolinx1 from "public/images/Nexolinx.jpeg";
import Nexolinx2 from "public/images/image1.png"
import Nexolinx3 from "public/images/nexo-logo.jpg"
import Crimson1 from "public/images/crimson.png"
import Crimson2 from "public/images/crimson1.png"
import Crimson3 from "public/images/crimson2.png"
import Gyan from "public/images/gyan.jpg"
import Gyan1 from "public/images/gyan1.png"
import Graphics from "public/images/graphics.jpg"
import Gfx1 from "public/images/Graphics/gfx.jpg";
import Gfx2 from "public/images/Graphics/starting.jpg";
import Gfx3 from "public/images/Graphics/purnima.jpg";
import Gfx4 from "public/images/Graphics/logo.png";
import Gfx5 from "public/images/Graphics/krishna.jpg";
import Gfx6 from "public/images/Graphics/eid.jpg";
import Gfx7 from "public/images/Graphics/ble3.jpg";
import Gfx8 from "public/images/Graphics/ble2.jpg";
import Gfx9 from "public/images/Graphics/pro.jpg";

export const products = [
  {
    href: "https://www.nexolinx.com/",
    title: "Nexolinx Website",
    description:
      "A dynamic and modern website for Nexolinx, designed to showcase a wide array of services, projects, and expertise. Nexolinx offers 24/7 website development, ensuring seamless online performance. Our team promptly handles issues and implements updates efficiently, guaranteeing exceptional results. With proactive communication and expert support, we ensure uninterrupted success, giving our clients peace of mind.",
    thumbnail: Nexolinx3,
    images: [Nexolinx1, Nexolinx2],
    stack: ["HTML", "Tailwind CSS", "JS"],
    slug: "nexolinx-website",
    content: (
      <div>
        <p>
          The Nexolinx website serves as a comprehensive platform to showcase
          our design and development services, along with a portfolio of past
          projects. Built with Next.js and Tailwind CSS, it ensures a responsive
          and user-friendly experience. Our platform emphasizes features like 24/7
          support, clean and maintainable code, easy customization, and dynamic app
          development. Our website and services help businesses grow online while
          receiving consistent support from our team.
        </p>
      </div>
    ),
  },
  {
    href: "https://crimson-consultancy.com/",
    title: "Crimson Consultancy Website",
    description:
      "A professional and sleek website for Crimson Consultancy that effectively delivers information while enhancing user engagement. It helps students in Nepal plan their education abroad in countries like Canada, Japan, and Australia.",
    thumbnail: Crimson1,
    images: [Crimson2, Crimson3],
    stack: ["WordPress", "Figma"],
    slug: "crimson-consultancy-website",
    content: (
      <div>
        <p>
          The Crimson Universal Consultancy website is designed to help students
          who want to study abroad by providing visa guidance, test preparation,
          and admission assistance. The website is focused on delivering important
          information in a clear, accessible way. Its clean design and efficient
          navigation ensure a smooth experience for students seeking career counseling
          and migration support.
        </p>
      </div>
    ),
  },
  {
    href: "",
    title: "Graphic Designs",
    description:
      "A diverse collection of graphic design projects, showcasing my creativity in branding, marketing materials, and digital graphics for different clients. These designs highlight attention to detail, visual storytelling, and creativity.",
    thumbnail: Graphics,
    images: [Gfx1, Gfx2, Gfx3, Gfx4, Gfx5, Gfx6, Gfx7, Gfx8, Gfx9],
    stack: ["Canva", "Photoshop", "Visme"],
    slug: "graphic-designs",
    content: (
      <div>
        <p>
          This collection showcases various graphic design works I have created for
          different clients, focusing on branding, marketing campaigns, and digital
          media assets. Each piece is tailored to the specific needs of the client
          and reflects a balance of creativity and functionality. My designs span
          logos, brochures, social media graphics, and more, all of which demonstrate
          my proficiency with tools like Adobe Illustrator, Photoshop and Visme.
        </p>
      </div>
    ),
  },
  {
    href: "/components/NotFound.tsx",
    title: "GyanJyoti Website",
    description:
      "An educational website that provides access to various school-level books, science fiction, and mind games. It also includes interactive features like live chat for student support and a section dedicated to science fun and experiments.",
    thumbnail: Gyan,
    images: [Gyan1],
    stack: ["HTML", "CSS", "JavaScript"],
    slug: "gyan-jyoti-website",
    content: (
      <div>
        <p>
          The GyanJyoti website is an all-in-one educational platform that offers
          students access to PDF versions of books across different school levels.
          It features a wide range of educational resources including science fiction,
          fun science activities, and mind games designed to challenge and engage
          young minds. The website also provides real-time live chat support, enabling
          students to get help instantly. Whether you're looking for textbooks,
          mind games, or interactive learning, GyanJyoti is a comprehensive educational
          platform.
        </p>
      </div>
    ),
  },
];
