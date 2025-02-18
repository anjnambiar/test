import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
    return (
     <HStack>
        <VStack>
          <br></br>
          <Box rounded='xl'
                width={{sm:'28em', md:'40em',lg:'55em',xl:'70em'}}
               boxShadow='dark-lg' p='6' bg='#2A4365'>
            <HStack>
              <Image src={imageSrc} rounded={{sm:'xl', md:'xl',lg:'2xl',xl:'2xl'}}
                    height={{base:'5em', md:'10em',lg:'15em'}}></Image>
              <VStack p='20'>
                <Heading as='h2' size='md'>{title}</Heading>
                <Text size='xs' >{description}</Text>
                <a href = {link} target="_blank" style={{color:'#44A7BA'}}
                  alt="">GitHub - {title}</a>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </HStack>
    );
};

export default Card;
