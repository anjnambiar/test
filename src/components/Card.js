import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

const Card = ({ title, description, imageSrc, link }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  //return null;
    return (
      <HStack>
        <VStack>
          <Box bg='white' rounded='2xl'>
              <Image src={imageSrc} rounded='2xl'></Image>
              <Heading as='h2' size='xs' color="black" p='5'>{title}</Heading>
              <Text size='xs' color="grey" p='5'>{description}</Text>
              <a href = {link} target="_blank" style={{color:'#008080' , decoration:'underline'}}
                 alt="Little Lemon GitHub - Anjana">Little Lemon GitHub - Anjana</a>
          </Box>
        </VStack>
      </HStack>
    );
};

export default Card;
