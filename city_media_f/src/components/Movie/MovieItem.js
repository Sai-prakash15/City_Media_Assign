import { Box,Spacer } from "@chakra-ui/react";
import React, {  Fragment } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import { getMovies } from '../../store/actions'
import history from "../../history";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from "@chakra-ui/react"


function MovieItem (props) {

    let { item, onMovieSelect } = props 
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
    <Fragment>
    <Box as="button" flexBasis={{ base: "320px" }}   bg="gray.500" borderWidth="1px" height= "320px" mt="30px" borderRadius="md" onClick={onOpen}>{item.name}</Box>
    <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Movie Information</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Movie name: {item.name} <br/>
              Release year: {item.release_year}<br/>
              Genre: {item.genre_name}<br />
              Rating: {item.rating}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
             { <Button variant="ghost" onClick= {()=>{onMovieSelect(item); history.push('/MovieInfo')}}>More info</Button>}
            </ModalFooter>
          </ModalContent>
    </Modal>
    <Spacer />
    </Fragment>)
}

const mapDispatchToProps = dispatch => {
  return{
      onMovieSelect: (item) => dispatch({type: actionTypes.MOVIE,item:item}),
      updateMovies: (item) => dispatch(getMovies(item.name))
  }
}

export default connect(null, mapDispatchToProps)(MovieItem);
