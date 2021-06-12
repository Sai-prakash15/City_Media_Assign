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