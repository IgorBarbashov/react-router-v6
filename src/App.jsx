import { Routes, Route } from "react-router-dom";
import { MainLayout } from './layouts/MainLayout';
import { Homepage } from './pages/Homepage';
import { Aboutpage } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Notfoundpage } from "./pages/Notfoundpage";

function App() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Homepage />}/>
                <Route path='/about' element={<Aboutpage />}/>
                <Route path='/blog' element={<Blogpage />}/>
                <Route path='*' element={<Notfoundpage />}/>
            </Route>
        </Routes>
    );
}

export default App;
