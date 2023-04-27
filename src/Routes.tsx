import Layout from '@pages/_layout';
import React, { lazy } from 'react';


const Main = lazy(() => import('@pages/Main'));

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Main /> },
    ],
  },
];

export const pages = [{ route: '/' }];
