import { Heading,Image, Text, VStack, Stack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import React from "react";

const Card = ({ title, description, imageSrc, linked }) => {
  return(
   
    <VStack background="white" color="black"  borderRadius='lg' >

      <Image
        objectFit='cover'
        maxW={{ base: '100%'}}
        src={imageSrc}
        alt={title}
        borderRadius='lg'
        padding="2px"
      />
      
      <Stack mt='6' spacing='3'padding="8px">
        <Heading size='md'>{title}</Heading>
          <Text>{description}</Text>
          
          <Text> <a href={linked}>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></a></Text>
      </Stack>
      
    </VStack>
    
 )
};

export default Card;
