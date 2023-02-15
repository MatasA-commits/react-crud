import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layout/navbar-layout';
import MoviesPage from 'pages/movies-page';
import MoviePage from 'pages/movie-page';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.MoviesPage,
        element: <MoviesPage />,
      },
      {
        path: routes.MoviePage.routePath,
        element: <MoviePage />,
      },
    ],
  },
]);

export default router;
