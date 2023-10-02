import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Little Lemon Restaurant",
    description:
      "Developed the home page of Little Lemon Restaurant and the Reserve a Table section using React.js",
    getImageSrc: () => require("../images/logo_big.png"),
    link: "https://github.com/anjnambiar/littlelemon",
  },
  {
      title: "Calculator",
      description:
        "Developed some basic calculator functionalities using vanilla javascript.",
      getImageSrc: () => require("../images/calculator_logo.png"),
      link: "https://github.com/anjnambiar/littlelemon",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#2A4365"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" color="#FEFEFE">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8} p='9'
        boxShadow='dark-lg' rounded='md' bg='white'
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
