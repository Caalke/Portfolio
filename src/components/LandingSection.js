import React from "react";
import { Avatar, Heading } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hey! Im Cameron!";
const bio1 = "A frontend developer";
const bio2 = "and designer";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#7600BC"
    
  >
    <Avatar
      name='PH'
      size="xl"
      src='https://media.licdn.com/dms/image/C5603AQEuykbpZTplUQ/profile-displayphoto-shrink_100_100/0/1562740346325?e=1685577600&v=beta&t=qJ7BiAa95MgmYfPszePFeGqIJ94RskiAqQWK2me7rI0' />

    <Heading as='h2' size='xs'>{greeting}</Heading>
    <Heading as='h2' size='xl'>{bio1}</Heading>
    <Heading as='h2' size='xl'>{bio2}</Heading>



  </FullScreenSection>
);

export default LandingSection;
