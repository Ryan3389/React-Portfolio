//Added code here
import { Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage'
import '../src/App.css'


function App() {
    //WORKING COE
    // return <HomePage />
    //Added code here

    return <Outlet />
}

export default App