import{createApi, fakeBaseQuery} from "@reduxjs/toolkit/query/react"
const tbdbApiKey= process.env.REACT_APP_IMDB_KEY;
export const tmdbApi=createApi({})