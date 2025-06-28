/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Detail = {
  __typename?: 'Detail';
  boxOffice: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
};

export type Director = {
  __typename?: 'Director';
  age: Scalars['Int']['output'];
  gender: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Movie = {
  __typename?: 'Movie';
  detail: Detail;
  director: Director;
  genre: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  img: Scalars['String']['output'];
  releaseYear: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  allDirectors: Array<Director>;
  allGenres: Array<Scalars['String']['output']>;
  allMovies: Array<Movie>;
  movieDetail: Detail;
};


export type QueryMovieDetailArgs = {
  id: Scalars['ID']['input'];
};

export type GetMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoviesQuery = { __typename?: 'Query', allMovies: Array<{ __typename?: 'Movie', genre: string, id: string, releaseYear: number, title: string, img: string, director: { __typename?: 'Director', name: string, age: number, gender: string } }> };

export type GetAllGenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllGenresQuery = { __typename?: 'Query', allGenres: Array<string> };

export type GetMovieDetailQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetMovieDetailQuery = { __typename?: 'Query', movieDetail: { __typename?: 'Detail', boxOffice: string, duration: number } };


export const GetMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"director"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"img"}}]}}]}}]} as unknown as DocumentNode<GetMoviesQuery, GetMoviesQueryVariables>;
export const GetAllGenresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllGenres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allGenres"}}]}}]} as unknown as DocumentNode<GetAllGenresQuery, GetAllGenresQueryVariables>;
export const GetMovieDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMovieDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movieDetail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boxOffice"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}}]}}]} as unknown as DocumentNode<GetMovieDetailQuery, GetMovieDetailQueryVariables>;