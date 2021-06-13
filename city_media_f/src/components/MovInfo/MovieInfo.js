import {  Text, Heading, Flex, Select} from "@chakra-ui/react";
import {
    FormLabel,
    Button
  } from "@chakra-ui/react"
import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { updateMovieSaga } from "../../store/actions";

class MovieInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit( movie, updateMoviesSaga, updateMovies) {  
        updateMoviesSaga(movie, this.state.value)
      }
    

    render(){

    const { movie, updateMoviesSaga, updateMovies } = this.props    
    
    let movieInfo =<Heading  as="h2" size="2xl" align="Center" color="tomato">Access denied</Heading>

    if(movie != null){
        movieInfo = (
            <div>
            <Heading  as="h2" size="2xl" align="Center" color="tomato">Movie Information</Heading>
            <Flex pt="100px"   justifyContent="center" alignItems="center" >
            <Flex  background="gray.100" p={12} rounded={5} direction="column">
            <Text fontSize="3xl" color="Black" >Movie name: {movie.name} <br/></Text>
            <Text fontSize="3xl" color="Black">Release year: {movie.release_year}<br/></Text>
            <Text fontSize="3xl" color="Black">Genre: {movie.genre_name}<br /></Text>
            <Text fontSize="3xl" color="Black" pb="10px">Rating: {movie.rating}  </Text>
            <form  onSubmit={e => e.preventDefault()}>
            <FormLabel as="label">Update Genre</FormLabel>
            <Select as="select" name="Genre" placeholder="Select genre" onChange={this.handleChange}>
              <option value="1">Action</option>
              <option value="2">Drama</option>
              <option value="3">Biography</option>
              <option value="4">Comedy</option>
              <option value="5">Animation</option>
              <option value="6">Mystery</option>
              <option value="7">Adventure</option>
              <option value="8">Crime</option>
            </Select>
            <br/>
            <Button onClick={()=>{this.handleSubmit(movie, updateMoviesSaga, updateMovies)}} >Update </Button>
          </form>
            </Flex>
            </Flex>
            </div>
           ) }

    return(  
        <div>
            {movieInfo}
        </div>
       )
}} 


const mapStateToProps = state => {
    return {
        movie: state.movie,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        updateMoviesSaga: (item, value) => dispatch(updateMovieSaga(item, value))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);
