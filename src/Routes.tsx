import Layout from '@pages/_layout';
import React, { lazy } from 'react';

const Main = lazy(() => import('@pages/Main'));
const TodoPage = lazy(() => import('@pages/Todo'));

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/todo', element: <TodoPage /> },
    ],
  },
];

export const pages = [{ route: '/' }];
