import { Flex } from "@chakra-ui/react";
import React, { Component } from 'react';
import MovieItem from './MovieItem'
import { connect } from 'react-redux'

class MovieSection extends Component {

  state = {

  } 



  render(){
    const { curr_movies } = this.props
    let movieTiles = <p>...loading</p>
    if (curr_movies != null ){
    movieTiles = curr_movies.map((item, index) => {
        return(
        <MovieItem item={item} index={index} key={index}/>
    )});}
    
    return(  
  <Flex  color="white" wrap="wrap" w ="100%" padding="1rem"  margin="1rem" basis="320px" textAlign="center" grow="1"  pt ="70" pl="50" pr="50"> 
    { movieTiles}
  </Flex>
)
}
}

const mapStateToProps = (state)=> {
    return{
        curr_movies: state.curr_movies 
    }
}


export default connect(mapStateToProps)(MovieSection);
