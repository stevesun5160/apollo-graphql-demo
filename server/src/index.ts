import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Fake data
const genreList = {
  FICTION: '虛構',
  NON_FICTION: '非虛構',
  MYSTERY: '懸疑',
  FANTASY: '奇幻',
  SCIENCE_FICTION: '科幻',
} as const;

const directors = [
  { name: '克里斯多福·諾蘭', age: 52, gender: '男' },
  { name: '葛莉塔·葛薇', age: 40, gender: '女' },
  { name: '史蒂芬·史匹柏', age: 77, gender: '男' },
  { name: '趙婷', age: 41, gender: '女' },
  { name: '昆汀·塔倫提諾', age: 61, gender: '男' },
  { name: '丹尼斯·維勒納夫', age: 56, gender: '男' },
];

const movies = [
  {
    id: '1',
    title: '全面啟動',
    director: directors[0],
    releaseYear: 2010,
    genre: '虛構',
    img: 'https://upload.wikimedia.org/wikipedia/zh/7/7f/Inception_ver3.jpg',
    detail: { boxOffice: '8.36億美元', duration: 148 },
  },
  {
    id: '2',
    title: '她們',
    director: directors[1],
    releaseYear: 2019,
    genre: '虛構',
    img: 'https://upload.wikimedia.org/wikipedia/zh/c/c9/Little_Women_%282019_film%29.jpg',
    detail: { boxOffice: '2.18億美元', duration: 135 },
  },
  {
    id: '3',
    title: '侏羅紀公園',
    director: directors[2],
    releaseYear: 1993,
    genre: '奇幻',
    img: 'https://upload.wikimedia.org/wikipedia/zh/e/e7/Jurassic_Park_poster.jpg',
    detail: { boxOffice: '10.46億美元', duration: 127 },
  },
  {
    id: '4',
    title: '游牧人生',
    director: directors[3],
    releaseYear: 2020,
    genre: '非虛構',
    img: 'https://upload.wikimedia.org/wikipedia/zh/f/f0/Nomadland.jpg',
    detail: { boxOffice: '3900萬美元', duration: 108 },
  },
  {
    id: '5',
    title: '黑色追緝令',
    director: directors[4],
    releaseYear: 1994,
    genre: '懸疑',
    img: 'https://upload.wikimedia.org/wikipedia/zh/8/82/Pulp_Fiction_cover.jpg',
    detail: { boxOffice: '2.13億美元', duration: 154 },
  },
  {
    id: '6',
    title: '沙丘',
    director: directors[5],
    releaseYear: 2020,
    genre: '科幻',
    img: 'https://upload.wikimedia.org/wikipedia/zh/7/76/Dune_%282021_film%29_poster.jpg',
    detail: { boxOffice: '4.02億美元', duration: 155 },
  },
];

const typeDefs = `#graphql
  type Director {
    name: String
    age: Int
    gender: String
  }

  type Movie {
    id: ID!
    title: String
    director: Director
    releaseYear: Int
    genre: String
    img: String
    detail: MovieDetail
  }

  type MovieDetail {
    boxOffice: String
    duration: Int
  }

  type Query {
    allMovies: [Movie]
    movieDetail(id: ID!): MovieDetail
    allGenres: [String]
  }

  type Mutation {
    addMovie(title: String!, releaseYear: Int!, genre: String!, directorName: String!): Movie
  }
`;

const resolvers = {
  Query: {
    allMovies: () => movies,
    movieDetail: (parent, { id }) => {
      const movie = movies.find((movie) => movie.id === id);
      return movie?.detail || null;
    },
    allGenres: () => Object.values(genreList),
  },
  Mutation: {
    addMovie: (parent, { title, releaseYear, genre, directorName }) => {
      const newId = String(movies.length + 1);
      const newDirector = { name: directorName, age: 0, gender: '' };
      const newMovie = {
        id: newId,
        title,
        director: newDirector,
        releaseYear,
        genre,
        img: '',
        detail: { boxOffice: '', duration: 0 },
      };
      movies.push(newMovie);
      return newMovie;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 5171 },
});

console.log(`🚀  Server ready at: ${url}`);
