import React from "react";
import { useGetMoviesQuery } from "../../services/TMDB";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import MovieList from "../MovieList/MovieList";
const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery();
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          There are no movies that match the name
          <br />
          Please search for something else
        </Typography>
      </Box>
    );
  }
  if (error) return "An Error has Ocurred";
  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
