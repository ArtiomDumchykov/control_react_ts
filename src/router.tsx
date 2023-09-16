import { Navigate, createBrowserRouter } from "react-router-dom";

import { ROUTES } from "routes";

import { MainLayuot } from "layouts";
import { MoviesPage, MoviePage, NotFoundPage, GenresPage } from "pages";



export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <MainLayuot/>,
        children: [
            {
                index: true,
                element: <Navigate to={ROUTES.MOVIES_LIST}/>
            },
            {
                path: ROUTES.MOVIES_LIST,
                element: <MoviesPage/>,
            },
            {
                path: ROUTES.MOVIE_ID,
                element: <MoviePage/>,
            },
            {
                path: ROUTES.MOVIES_GENRES,
                element: <GenresPage/>,
            },
        ]
    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
])