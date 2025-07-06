/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetMovies {\n    allMovies {\n      director {\n        name\n        age\n        gender\n      }\n      genre\n      id\n      releaseYear\n      title\n      img\n    }\n  }\n": typeof types.GetMoviesDocument,
    "\n  query GetAllGenres {\n    allGenres\n  }\n": typeof types.GetAllGenresDocument,
    "\n  query getMovieDetail($id: ID!) {\n    movieDetail(id: $id) {\n      boxOffice\n      duration\n    }\n  }\n": typeof types.GetMovieDetailDocument,
    "\n  mutation AddMovie($title: String!, $releaseYear: Int!, $genre: String!, $directorName: String!) {\n    addMovie(title: $title, releaseYear: $releaseYear, genre: $genre, directorName: $directorName) {\n      id\n      title\n      releaseYear\n      genre\n      director {\n        name\n      }\n    }\n  }\n": typeof types.AddMovieDocument,
};
const documents: Documents = {
    "\n  query GetMovies {\n    allMovies {\n      director {\n        name\n        age\n        gender\n      }\n      genre\n      id\n      releaseYear\n      title\n      img\n    }\n  }\n": types.GetMoviesDocument,
    "\n  query GetAllGenres {\n    allGenres\n  }\n": types.GetAllGenresDocument,
    "\n  query getMovieDetail($id: ID!) {\n    movieDetail(id: $id) {\n      boxOffice\n      duration\n    }\n  }\n": types.GetMovieDetailDocument,
    "\n  mutation AddMovie($title: String!, $releaseYear: Int!, $genre: String!, $directorName: String!) {\n    addMovie(title: $title, releaseYear: $releaseYear, genre: $genre, directorName: $directorName) {\n      id\n      title\n      releaseYear\n      genre\n      director {\n        name\n      }\n    }\n  }\n": types.AddMovieDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMovies {\n    allMovies {\n      director {\n        name\n        age\n        gender\n      }\n      genre\n      id\n      releaseYear\n      title\n      img\n    }\n  }\n"): (typeof documents)["\n  query GetMovies {\n    allMovies {\n      director {\n        name\n        age\n        gender\n      }\n      genre\n      id\n      releaseYear\n      title\n      img\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllGenres {\n    allGenres\n  }\n"): (typeof documents)["\n  query GetAllGenres {\n    allGenres\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getMovieDetail($id: ID!) {\n    movieDetail(id: $id) {\n      boxOffice\n      duration\n    }\n  }\n"): (typeof documents)["\n  query getMovieDetail($id: ID!) {\n    movieDetail(id: $id) {\n      boxOffice\n      duration\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddMovie($title: String!, $releaseYear: Int!, $genre: String!, $directorName: String!) {\n    addMovie(title: $title, releaseYear: $releaseYear, genre: $genre, directorName: $directorName) {\n      id\n      title\n      releaseYear\n      genre\n      director {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddMovie($title: String!, $releaseYear: Int!, $genre: String!, $directorName: String!) {\n    addMovie(title: $title, releaseYear: $releaseYear, genre: $genre, directorName: $directorName) {\n      id\n      title\n      releaseYear\n      genre\n      director {\n        name\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;