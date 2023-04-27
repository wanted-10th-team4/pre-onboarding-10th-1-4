import Layout from '@pages/_layout';
import React, { lazy } from 'react';

const Main = lazy(() => import('@pages/Main'));
const SignIn = lazy(() => import('@pages/SignIn'));
const SignUp = lazy(() => import('@pages/SignUp'));
const Todo = lazy(() => import('@pages/Todo'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/signin', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/todo', element: <Todo /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export const pages = [{ route: '/' }];
