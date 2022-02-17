import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Links from './Pages/Links';
import Error from './Pages/Error';

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home/>} />
                <Route path='/links' element={<Links/>} />
                <Route path="*" element={<Error/>} />

            </Routes>
        
        </BrowserRouter>
    )
};

export default RoutesApp;