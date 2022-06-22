import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./Views/Home'));
const Movies = lazy(() => import('./Views/Movies'));
const MoviePage = lazy(() => import('./Views/MovieDetails'));
const NotFound = lazy(() => import('./Views/NotFound'));
const Reviews = lazy(() => import('./Views/Reviews'));
const Cast = lazy(() => import('./Views/Cast'));
const Navigation = lazy(() => import('../components/Navigation/Navigation'));

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback="">
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
