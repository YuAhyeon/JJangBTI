import { createBrowserRouter } from 'react-router-dom';
import { Root } from './route';
import MainPage from '../pages/MainPage';

export default createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
]);
