import { Heading,Image, Text, VStack, Stack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
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
          <Text>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
      </Stack>
     
    </VStack>
    
 )
};

export default Card;
