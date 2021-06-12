import { Box,Spacer } from "@chakra-ui/react";
import React, { Component, Fragment } from 'react';

class MovieItem extends Component {

  state = {
  } 
  render(){
    let { item } = this.props 

    return(
      <Fragment>
    <Box as="button" flexBasis={{ base: "320px" }}   bg="gray.500" borderWidth="1px" height= "320px" mt="30px" borderRadius="md" >{item.name}</Box>
    <Spacer />
    </Fragment>)
}
}

export default MovieItem;
