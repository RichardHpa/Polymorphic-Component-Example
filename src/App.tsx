import './App.css';
import { Outlet, createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

import { ElementPage } from './pages/Element';
import { MuiPage } from './pages/Mui';
import { ButtonPage } from './pages/Button';
import type { ReactNode } from 'react';

export const Page = ({ title, children }: { title: string; children?: ReactNode }) => {
  return (
    <div>
      <h1>{title}</h1>

      {children}
    </div>
  );
};

const Layout = () => {
  return (
    <div>
      <h1>Testing Overloads</h1>
      <hr />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/button">Button</Link>
        </li>
        <li>
          <Link to="/element">Element</Link>
        </li>
        <li>
          <Link to="/mui">Mui</Link>
        </li>
        <li>
          <Link to="matterial">Matterial UI</Link>
        </li>
      </ul>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Page title="Home" />,
      },
      { path: 'button', element: <ButtonPage /> },
      { path: 'element', element: <ElementPage /> },
      { path: 'mui', element: <MuiPage /> },
    ],
  },
]);

export const Fallback = () => {
  return <p>Performing initial data load</p>;
};

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} fallbackElement={<Fallback />} />
    </div>
  );
}

export default App;
