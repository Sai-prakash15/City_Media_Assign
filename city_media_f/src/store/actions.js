export const CHANGE = "CHANGE";
export const UPDATEM = "UPDATEM";
export const FETCHM = "FETCHM";
export const UPDATEG = "UPDATEG";
export const MOVIE = "MOVIE"

export const getMovies = (genre)=> {
    return{
        type: FETCHM,
        name: genre
    }
}

