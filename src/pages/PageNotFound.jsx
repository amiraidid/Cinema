import { useEffect } from 'react'
import {Link} from 'react-router-dom'

function PageNotFound() {

    useEffect(() => {
        document.title = `Page Not Found /cinema`
    })

    return (
        <section className='h-screen flex justify-center items-center'>
            <div>
                
                <p className='text-7xl text-gray-700 dark:text-white py-4'>404, OOPS!!</p>
                <Link to='/'>
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Back to Home Page</button>
                </Link>
            </div>
        </section>
    )
}

export default PageNotFound