import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Anjana!";
const bio1 = "A frontend developer";
const bio2 = "Skills : JavaScript, React, HTML/CSS, Figma";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    backgroundColor="#2A4365"
    isDarkBackground
  >
    <VStack>
    {/* <Avatar src="https://i.pravatar.cc/150?img=7"></Avatar> */}
    <Heading as='h2' size='sm'>{greeting}</Heading>
    <br></br>
    <Heading as='h2' size='xl'>{bio1}</Heading>
    <Heading as='h2' size='l' color="#959595">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
