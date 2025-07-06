import { useState } from "react";
import { Search, Calendar, Film, User, Filter, Plus } from "lucide-react";
import { useMutation } from "@apollo/client";
import { useGenres, useMovieDetail, useMovies } from "./queries/movie";
import { ADD_MOVIE } from "./queries/mutations";

// Types
type Director = {
  name: string;
  age: number;
  gender: string;
};

type Movie = {
  id: string;
  title: string;
  director: Director;
  releaseYear: number;
  genre: string;
  img: string;
};

const MovieCard = ({ movie }: { movie: Movie }) => {
  const [imageError, setImageError] = useState(false);
  const { fetchDetail, detail } = useMovieDetail(movie.id);

  const onClick = () => {
    fetchDetail({ variables: { id: movie.id } });
  };

  return (
    <div
      className="transform overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      onClick={onClick}
    >
      <div className="relative h-80 bg-gray-200">
        {!imageError ? (
          <img
            src={movie.img}
            alt={movie.title}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Film className="h-16 w-16 text-gray-400" />
          </div>
        )}
        <div className="bg-opacity-70 absolute top-4 right-4 rounded-md bg-black px-2 py-1 text-sm text-white">
          {movie.releaseYear}
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 line-clamp-2 text-xl font-bold text-gray-900">
          {movie.title}
        </h3>

        <div className="mb-2 flex items-center text-gray-600">
          <User className="mr-2 h-4 w-4" />
          <span className="text-sm">{movie.director.name}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
            {movie.genre}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="mr-1 h-4 w-4" />
            {movie.releaseYear}
          </div>
        </div>
      </div>
      {detail && (
        <div className="border-t border-gray-200 bg-gray-50 p-4">
          <p className="text-sm text-gray-600">
            <strong>Box Office:</strong> {detail.boxOffice || "未知"}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Duration:</strong> {detail.duration} 分鐘
          </p>
        </div>
      )}
    </div>
  );
};

// Filter Component
const FilterBar = ({
  genres,
  selectedGenre,
  onGenreChange,
  searchTerm,
  onSearchChange,
}: {
  genres: string[];
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}) => {
  return (
    <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          <input
            type="text"
            placeholder="搜尋電影標題..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Genre Filter */}
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-400" />
          <select
            value={selectedGenre}
            onChange={(e) => onGenreChange(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
          >
            <option value="">所有類型</option>
            {genres.map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

// Add Movie Form
const AddMovieForm = ({ genres, onMovieAdded }) => {
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [genre, setGenre] = useState("");
  const [directorName, setDirectorName] = useState("");
  const [addMovie, { loading, error }] = useMutation(ADD_MOVIE, {
    onCompleted: () => {
      onMovieAdded();
      setTitle("");
      setReleaseYear("");
      setGenre("");
      setDirectorName("");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ variables: { title, releaseYear: parseInt(releaseYear), genre, directorName } });
  };

  return (
    <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">新增電影</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="電影標題"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-lg border border-gray-300 p-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="number"
          placeholder="上映年份"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          className="rounded-lg border border-gray-300 p-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
          required
        />
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="rounded-lg border border-gray-300 p-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">選擇類型</option>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="導演名稱"
          value={directorName}
          onChange={(e) => setDirectorName(e.target.value)}
          className="rounded-lg border border-gray-300 p-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600 disabled:bg-gray-400 md:col-span-2"
        >
          <Plus className="mr-2 h-5 w-5" />
          {loading ? "新增中..." : "新增電影"}
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">新增失敗: {error.message}</p>}
    </div>
  );
};

// Loading Component
const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center py-12">
    <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"></div>
  </div>
);

// Main App Component
const App = () => {
  const { movies, loading: iseMoviesLoading, refetch: refetchMovies } = useMovies();
  const { genres, loading: isGenresLoading } = useGenres();
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const isLoading = iseMoviesLoading || isGenresLoading;

  // Handle genre change
  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
  };

  // Filter movies by search term
  const filteredMovies = movies.filter(
    (movie) =>
      movie?.title?.toLowerCase().includes(searchTerm.toLowerCase()) &&
      movie?.director?.name?.toLowerCase().includes(searchTerm.toLowerCase()) &&
      movie?.genre?.toLowerCase().includes(selectedGenre.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-6xl">
            🎬 電影收藏
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            探索精彩的電影世界，發現你的下一部最愛電影
          </p>
        </div>

        {/* Add Movie Form */}
        <AddMovieForm genres={genres || []} onMovieAdded={refetchMovies} />

        {/* Filter Bar */}
        <FilterBar
          genres={genres || []}
          selectedGenre={selectedGenre}
          onGenreChange={handleGenreChange}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Stats */}
        <div className="mb-8">
          <div className="rounded-lg bg-white p-4 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">
                顯示 {filteredMovies.length} 部電影
                {selectedGenre && ` · ${selectedGenre}`}
              </span>
              {searchTerm && (
                <span className="text-sm text-blue-600">
                  搜尋: "{searchTerm}"
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Movies Grid */}
        {isLoading ? (
          <LoadingSpinner />
        ) : filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie?.id} movie={movie as Movie} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <Film className="mx-auto mb-4 h-16 w-16 text-gray-400" />
            <h3 className="mb-2 text-xl font-semibold text-gray-600">
              沒有找到電影
            </h3>
            <p className="text-gray-500">
              {searchTerm
                ? `沒有找到包含 "${searchTerm}" 的電影`
                : "目前沒有電影資料"}
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500">
          <p>
            © 2025 電影收藏 - 使用 React + TypeScript + TailwindCSS + Apollo
            GraphQL
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
