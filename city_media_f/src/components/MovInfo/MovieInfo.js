import {  Text, Heading, Flex} from "@chakra-ui/react";

import React  from 'react';
import { connect } from 'react-redux'

function MovieInfo (props) {

    const { movie } = props    

    let movieInfo = ( <Heading  as="h2" size="2xl" align="Center" color="tomato">Access denied</Heading>)

    if(movie){
        movieInfo = (
            <div>
            <Heading  as="h2" size="2xl" align="Center" color="tomato">Movie Information</Heading>
            <Flex pt="100px"   justifyContent="center" alignItems="center" >
            <Flex  background="gray.100" p={12} rounded={5} direction="column">
            <Text fontSize="3xl" color="Black" >Movie name: {movie.name} <br/></Text>
            <Text fontSize="3xl" color="Black">Release year: {movie.release_year}<br/></Text>
            <Text fontSize="3xl" color="Black">Genre: {movie.genre_name}<br /></Text>
            <Text fontSize="3xl" color="Black">Rating: {movie.rating}  </Text>
            </Flex>
            </Flex>
            </div>
           ) 
    }

    return(  
        <div>
            {movieInfo}
        </div>
       )
} 


const mapStateToProps = state => {
    return {
        movie: state.movie,
    }
}


export default connect(mapStateToProps)(MovieInfo);
