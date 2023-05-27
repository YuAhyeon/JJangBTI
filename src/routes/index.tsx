import { createBrowserRouter } from 'react-router-dom';
import { Root } from './route';
import Home from '../pages/Home';

export default createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
