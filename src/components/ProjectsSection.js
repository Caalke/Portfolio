import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "BENT HALO",
    linked:"https://cam0nz.wixsite.com/my-site",
    description:
      "A simple E-commerce site designed in Wix",
    getImageSrc: () => require("../assets/images/photo1.png"),
  },
  {
    title: "Hype-ER",
    description:
      "Fully responsive car company landing page demo",
    getImageSrc: () => require("../assets/images/photo2.png"),
  },
  // {
  //   title: "Photo Gallery",
  //   description:
  //     "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
  //   getImageSrc: () => require("../assets/images/photo3.jpg"),
  // },
  // {
  //   title: "Event planner",
  //   description:
  //     "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
  //   getImageSrc: () => require("../assets/images/photo4.jpg"),
  // },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#CE7180"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            linked={project.linked}
          />
        
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
