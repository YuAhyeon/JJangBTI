import { createBrowserRouter } from 'react-router-dom';
import Root from './route';
import Home from '../pages/Home';
import Result from '../pages/Result';
import Question from '../pages/Question';

export default createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/question',
        element: <Question />,
      },
      {
        path: '/question/:quesionId',
        element: <Question />,
      },
      {
        path: '/result',
        element: <Result />,
      },
    ],
  },
]);
