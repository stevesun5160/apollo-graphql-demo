
import { gql } from '../__generated__/gql';

export const ADD_MOVIE = gql(/* GraphQL */ `
  mutation AddMovie($title: String!, $releaseYear: Int!, $genre: String!, $directorName: String!) {
    addMovie(title: $title, releaseYear: $releaseYear, genre: $genre, directorName: $directorName) {
      id
      title
      releaseYear
      genre
      director {
        name
      }
    }
  }
`);
