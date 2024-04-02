import {Link, NavLink, useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';


function Header() {

    const [show, setShow] = useState(false);
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
    const navigate = useNavigate();
    
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        if (darkMode) {
            document.documentElement.classList.add('dark')
        }else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    function handleSubmit (event) {
        event.preventDefault();
        const queryTerm = event.target.search.value;
        event.target.reset();

        return navigate(`/search?q=${queryTerm}`);
    }

    function isShown() {
        setShow(!show)
    }
    
    return (
        <header className='dark:bg-gray-900 dark:text-white p-2'>
            <nav className='flex justify-between items-center max-sm:mx-4 mx-10 mt-2'>
            <Link to="/" className='text-3xl font-bold'>Cinema</Link>

            <div className='lg:hidden md:hidden flex justify-between items-center'>
                <button className={`text-2xl cursor-pointer border-2 border-gray-500 rounded`} onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? (<i className="bi bi-moon"></i>) : (<i className="bi bi-brightness-low-fill"></i>) }
                </button>
                <button className={`text-3xl cursor-pointer`} onClick={isShown}><i className="bi bi-list"></i></button>
            </div>

            <div className={`${show?'flex' : 'hidden'} justify-between items-center absolute top-24 right-0 left-0 mx-auto w-96 bg-white shadow-2xl border p-2 rounded-md lg:hidden md:hidden dark:bg-gray-900` }>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='search here...' name='search' className='outline-none w-full  dark:bg-gray-900'/>
                </form>
                <i className="bi bi-search cursor-pointer"></i>
            </div>
            <ul className={`${show ? 'block':'hidden'} max-sm:dark:bg-slate-600  lg:flex md:flex 2xl:flex justify-between items-center gap-4  max-sm:absolute right-0 left-0 top-40 max-sm:w-96 mx-auto max-sm:bg-[#f9fafb] max-sm:border-2 max-sm:p-2`}>
                <li className='text-xl font-semibold max-sm:mt-4'><NavLink to="/" end>Home</NavLink></li>
                <li className='text-xl font-semibold max-sm:mt-4'><NavLink to="movies/popular">Popular</NavLink></li>
                <li className='text-xl font-semibold max-sm:mt-4'><NavLink to="movies/top">Top Rated</NavLink></li>
                <li className='text-xl font-semibold max-sm:mt-4'><NavLink to="movies/upcoming">Upcomig</NavLink></li>
            </ul>

            <button className={`text-2xl cursor-pointer max-sm:hidden p-1 border-2 border-gray-500 rounded`} onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? (<i className="bi bi-moon"></i>) : (<i className="bi bi-brightness-low-fill"></i>) }
            </button>

            <div className='flex items-center gap-2 bg-white shadow-2xl border dark:border-none p-2 rounded-md max-sm:hidden dark:bg-gray-800'>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='search here...' name='search' className='outline-none dark:bg-gray-800 '/>
                </form>
                <i className="bi bi-search cursor-pointer"></i>
            </div>


            </nav>
        </header>
    )
}

export default Header