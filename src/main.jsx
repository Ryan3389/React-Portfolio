import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

/*Added code here */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import HomePage from './pages/HomePage';
import ContactPage from '../src/pages/ContactPage'
import PortfolioPage from '../src/pages/PortfolioPage'
import Resume from '../src/pages/Resume'
import ErrorPage from '../src/pages/ErrorPage'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
            {
                path: 'portfolio',
                element: <PortfolioPage />,
            },
            {
                path: 'resume',
                element: <Resume />
            }
        ],
    },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
// ReactDOM.createRoot(document.getElementById('root')).render(<App />)