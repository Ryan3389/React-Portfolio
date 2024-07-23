//Added code here
import { Outlet } from 'react-router-dom';
import Header from './components/UI/Header';
import Footer from './components/Footer';
import '../src/App.css'


function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )

}

export default App