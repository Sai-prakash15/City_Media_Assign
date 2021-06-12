import {  Flex } from "@chakra-ui/react";
import GenreSection from "../Genre/GenreSection"
import MovieSection from "../Movie/MovieSection"
const IndexPage = () => (
  <Flex  direction="column" > 
    <GenreSection/>
    <MovieSection/>
  </Flex>
  );

export default IndexPage;
// <Flex direction="column"  p={12} rounded={6}>
    //     <Heading mb={6}>Log in</Heading>
    //     <Input placeholder="mail" variant="filled" mb={3} type="email"/>
    //     <Input placeholder="***" variant="filled" mb={6} type = "password" />
    //     <Button colorScheme="teal">Login</Button>
    // </Flex>