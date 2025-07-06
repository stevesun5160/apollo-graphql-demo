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

export type Director = {
  __typename?: 'Director';
  age?: Maybe<Scalars['Int']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Movie = {
  __typename?: 'Movie';
  detail?: Maybe<MovieDetail>;
  director?: Maybe<Director>;
  genre?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  img?: Maybe<Scalars['String']['output']>;
  releaseYear?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MovieDetail = {
  __typename?: 'MovieDetail';
  boxOffice?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMovie?: Maybe<Movie>;
};


export type MutationAddMovieArgs = {
  directorName: Scalars['String']['input'];
  genre: Scalars['String']['input'];
  releaseYear: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  allGenres?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  allMovies?: Maybe<Array<Maybe<Movie>>>;
  movieDetail?: Maybe<MovieDetail>;
};


export type QueryMovieDetailArgs = {
  id: Scalars['ID']['input'];
};

export type GetMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoviesQuery = { __typename?: 'Query', allMovies?: Array<{ __typename?: 'Movie', genre?: string | null, id: string, releaseYear?: number | null, title?: string | null, img?: string | null, director?: { __typename?: 'Director', name?: string | null, age?: number | null, gender?: string | null } | null } | null> | null };

export type GetAllGenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllGenresQuery = { __typename?: 'Query', allGenres?: Array<string | null> | null };

export type GetMovieDetailQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetMovieDetailQuery = { __typename?: 'Query', movieDetail?: { __typename?: 'MovieDetail', boxOffice?: string | null, duration?: number | null } | null };

export type AddMovieMutationVariables = Exact<{
  title: Scalars['String']['input'];
  releaseYear: Scalars['Int']['input'];
  genre: Scalars['String']['input'];
  directorName: Scalars['String']['input'];
}>;


export type AddMovieMutation = { __typename?: 'Mutation', addMovie?: { __typename?: 'Movie', id: string, title?: string | null, releaseYear?: number | null, genre?: string | null, director?: { __typename?: 'Director', name?: string | null } | null } | null };


export const GetMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"director"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"img"}}]}}]}}]} as unknown as DocumentNode<GetMoviesQuery, GetMoviesQueryVariables>;
export const GetAllGenresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllGenres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allGenres"}}]}}]} as unknown as DocumentNode<GetAllGenresQuery, GetAllGenresQueryVariables>;
export const GetMovieDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMovieDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movieDetail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boxOffice"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}}]}}]} as unknown as DocumentNode<GetMovieDetailQuery, GetMovieDetailQueryVariables>;
export const AddMovieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddMovie"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"releaseYear"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"genre"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"directorName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addMovie"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"releaseYear"},"value":{"kind":"Variable","name":{"kind":"Name","value":"releaseYear"}}},{"kind":"Argument","name":{"kind":"Name","value":"genre"},"value":{"kind":"Variable","name":{"kind":"Name","value":"genre"}}},{"kind":"Argument","name":{"kind":"Name","value":"directorName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"directorName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"releaseYear"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"director"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AddMovieMutation, AddMovieMutationVariables>;