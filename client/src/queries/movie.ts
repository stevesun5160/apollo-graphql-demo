import { useLazyQuery, useQuery } from "@apollo/client";

import { gql } from "../__generated__/gql";

const FETCH_ALL_MOVIES = gql(/* GraphQL */ `
  query GetMovies {
    allMovies {
      director {
        name
        age
        gender
      }
      genre
      id
      releaseYear
      title
      img
    }
  }
`);

export const useMovies = () => {
  const { data, loading, error, refetch } = useQuery(FETCH_ALL_MOVIES);

  return {
    movies: data?.allMovies || [],
    loading,
    error,
    refetch,
  };
};

const FETCH_ALL_GENRES = gql(/* GraphQL */ `
  query GetAllGenres {
    allGenres
  }
`);

export const useGenres = () => {
  const { data, loading, error } = useQuery(FETCH_ALL_GENRES);

  return {
    genres: data?.allGenres || [],
    loading,
    error,
  };
};

const FETCH_TARGET_DETAIL = gql(/* GraphQL */ `
  query getMovieDetail($id: ID!) {
    movieDetail(id: $id) {
      boxOffice
      duration
    }
  }
`);

export const useMovieDetail = (id: string) => {
  const [fetchDetail, { data, loading, error }] = useLazyQuery(
    FETCH_TARGET_DETAIL,
    {
      variables: { id },
    },
  );

  return {
    fetchDetail,
    detail: data?.movieDetail,
    loading,
    error,
  };
};
