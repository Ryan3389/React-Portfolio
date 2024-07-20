//Added code here
import { Outlet } from 'react-router-dom';
import Header from './components/UI/Header';
import '../src/App.css'


function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )

}

export default App