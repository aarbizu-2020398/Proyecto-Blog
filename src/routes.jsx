import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import PostDetail from './pages/PostDetail.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/posts/:id', element: <PostDetail /> }
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
