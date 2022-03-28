import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <header>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
            </header>

            <div className='container'>
                <Outlet />
            </div>

            <footer>2022</footer>
        </>
    );
}

export { MainLayout };
