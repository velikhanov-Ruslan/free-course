import { AboutPage } from 'pages/AboutPage';
import path from 'path';
import { RouteProps } from 'react-router-dom';

export const enum paths {
  main = '/',
  about = '/about',
}

export const routes: RouteProps[] = [
    {
        path: paths.about,
        element: <AboutPage />,
    },
];
