export const CHANGE = "CHANGE";
export const UPDATEM = "UPDATEM";


export const getMovies = (genre)=> {
    return{
        type: UPDATEM,
        name: genre
    }
}