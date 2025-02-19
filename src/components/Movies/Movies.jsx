import React, { useState } from "react";
import { useGetMoviesQuery } from "../../services/TMDB";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import MovieList from "../MovieList/MovieList";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import FeaturedMovie from "../FeaturedMovie/FeatureMovie";
const Movies = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });
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
      <FeaturedMovie movie={data.results[0]} />
      <MovieList movies={data} />
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_page}
      />
    </div>
  );
};

export default Movies;
