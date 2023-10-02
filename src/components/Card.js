import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
    return (
     <HStack>
        <VStack>
          <br></br>
          <Box rounded='xl'
               boxShadow='dark-lg' p='6' bg='#2A4365'>
            <HStack>
              <Image src={imageSrc} rounded='2xl'></Image>
              <VStack>
                <Heading as='h2' size='s' p='5' alignContent='center'>{title}</Heading>
                <Text size='xs' p='5'>{description}</Text>
                <a href = {link} target="_blank" style={{color:'#44A7BA'}}
                  alt="Little Lemon GitHub - Anjana">Little Lemon GitHub - Anjana</a>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </HStack>
    );
};

export default Card;
