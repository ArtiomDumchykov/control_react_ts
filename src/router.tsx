import { Navigate, createBrowserRouter } from "react-router-dom";

import { ROUTES } from "routes";

import { MainLayuot } from "layouts";
import { MoviesPage, MoviePage, NotFoundPage, LoginPage } from "pages";
import { AuthRequired } from "HOC";



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
                path: ROUTES.AUTH_LOGIN,
                element: <LoginPage />
            },
            {
                path: ROUTES.AUTH_REGISTER,
                element: <LoginPage />
            },
            {
                path: "/favorites",
                element: <AuthRequired><div>Favorites Page</div></AuthRequired>,
               
            }

        ]
    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
])