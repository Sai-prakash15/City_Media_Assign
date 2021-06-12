import {  Box } from "@chakra-ui/react";
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import { getMovies } from '../../store/actions'

class Genre extends Component{ 
    state = {

    }

    render(){
    let {item, active, onGenreChange, updateMovies} = this.props;
    return(
    <Box as="button" w="100%" onClick={()=>{onGenreChange(item);updateMovies(item);}} color={active ? "red":"white"} > {item.name}</Box>
    )};
}

const mapDispatchToProps = dispatch => {
    return{
        onGenreChange: (item) => dispatch({type: actionTypes.CHANGE,name:item.name}),
        updateMovies: (item) => dispatch(getMovies(item.name))
    }
}


export default connect(null, mapDispatchToProps)(Genre);
