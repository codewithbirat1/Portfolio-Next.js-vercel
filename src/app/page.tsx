import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
    <span className="text-4xl">👋</span>
    <Heading className="font-black">Hello there! I&apos;m Birat</Heading>
    <Paragraph className="max-w-xl mt-4">
      I&apos;m a Frontend Developer passionate about{" "}
      <Highlight>building interactive websites</Highlight> and web applications
      that enhance user experience.
    </Paragraph>
    <Paragraph className="max-w-xl mt-4">
      I have a deep interest in frontend development and design, with{" "}
      <Highlight>a growing experience in technologies like React and Next.js</Highlight>,
      as well as a commitment to constantly learning new tools and improving my skills.
    </Paragraph>
    <Heading
      as="h2"
      className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
    >
      What I&apos;ve been working on
    </Heading>
    <Products />
    <TechStack />
  </Container>
  
  );
}
