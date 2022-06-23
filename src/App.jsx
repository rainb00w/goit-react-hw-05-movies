import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './views/Loader';
import Navigation from './components/Navigation/Navigation';

const Home = lazy(() => import('./views/Home'));
const Movies = lazy(() => import('./views/Movies'));
const MoviePage = lazy(() => import('./views/MovieDetails'));
const NotFound = lazy(() => import('./views/NotFound'));
const Reviews = lazy(() => import('./views/Reviews'));
const Cast = lazy(() => import('./views/Cast'));

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:itemId" element={<MoviePage />}>
            <Route path="cast" element={<Cast />} replace={true} />
            <Route path="reviews" element={<Reviews />} replace={true} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
