export const CHANGE = "CHANGE";
export const UPDATEM = "UPDATEM";
export const FETCHM = "FETCHM";
export const UPDATEG = "UPDATEG";
export const MOVIE = "MOVIE";
export const MOVIESAGA = "MOVIESAGA";

export const getMovies = (genre)=> {
    return{
        type: FETCHM,
        name: genre
    }
}

export const updateMovieSaga = (movie, genre)=> {
    return{
        type: MOVIESAGA,
        movie: movie,
        genre: genre
    }
}
