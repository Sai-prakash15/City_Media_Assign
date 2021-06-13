import {  Flex } from "@chakra-ui/react";
import React, { Component } from 'react';
import { connect } from 'react-redux'
import GenreItem from './GenreItem'


class GenreSection extends Component {

  render(){
    const { genres, curr_genre } = this.props
    let active = false;
    let genres_list = <p> Loading</p>
    if(genres != null){
    genres_list = genres.map((item, index) => {
        if(item.name === curr_genre){
            active = true
        }
        else{
            active=false
        }
        return(
        <GenreItem item={item} index={index} key={index} active={active} />
    )});}
    

    return(  
    <Flex  color="white" w ="100%"  textAlign="center"  pt ="10" > 
        {genres_list}
    </Flex>
)
} 
}

const mapStateToProps = state => {
    return {
        genres: state.genres,
        curr_genre: state.curr_genre
    }
}


export default connect(mapStateToProps)(GenreSection);
