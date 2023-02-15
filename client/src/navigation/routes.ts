const MoviePagePath = '/movie-page/' as const;

const routes = {
  MoviesPage: '/',
  MoviePage: {
    routePath: `${MoviePagePath}:id`,
    createLink: (id: string | number) => `${MoviePagePath}${id}`,
  },
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
