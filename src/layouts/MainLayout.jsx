import { Outlet } from "react-router-dom";
import { CustomLink } from '../components/CustomLink';

const MainLayout = () => {
    const getClassName = ({ isActive }) => isActive ? 'active-link' : '';

    return (
        <>
            <header>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/blog">Blog</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </header>

            <div className='container'>
                <Outlet />
            </div>

            <footer>2022</footer>
        </>
    );
}

export { MainLayout };
