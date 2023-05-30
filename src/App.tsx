import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import route from './routes';

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={route} />
      <ToastContainer />
    </RecoilRoot>
  );
}

export default App;
