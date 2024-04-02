import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import BackUp from '../assets/backup.jpg'


function MovieDetail() {
    const params = useParams();
    const [movie, setMovie] = useState([]);
    const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : BackUp;


    useEffect(() => {
        async function fetcMovie() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`)
            const data = await response.json()
            setMovie(data)
        }
        fetcMovie()
    }, [params.id]);

    useEffect(() => {
        document.title = `${movie.title} /cinema`
    })

    return (
        <section className="flex justify-around flex-wrap py-4">
            <div className="max-w-sm">
                <img src={image} alt={movie.title} className=" rounded" />
            </div>
            <div className="max-w-2xl text-gray-700 dark:text-white py-4 text-center lg:text-left">

                <h1 className="text-2xl my-3">{movie.title}</h1>
                <p className="">{movie.overview}</p>
                
                {movie.genres ? ( 
                    <p className="flex flex-wrap py-4">
                    {
                    movie.genres.map((genre) => (
                        <span className="border border-gray-200 rounded p-2 mr-2" key={genre.id}>{genre.name}</span>
                    ))
                }
                </p>

                ) : "" }

                <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <p className="ms-2 text-gray-900 dark:text-white">{movie.vote_average}</p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <span href="#" className=" text-gray-900 dark:text-white">{movie.vote_count} reviews</span>
                </div>
                
                <p className="pt-2 mr-2"> <span className="font-bold text-xl">Runtime:</span> <span>{movie.runtime} min.</span> </p>
                <p className="pt-2 mr-2"> <span className="font-bold text-xl">Budget:</span> <span>{movie.budget}</span> </p>
                <p className="pt-2 mr-2"> <span className="font-bold text-xl">Revenue:</span> <span>{movie.revenue}</span> </p>
                <p className="pt-2 mr-2"> <span className="font-bold text-xl">Release Date:</span> <span>{movie.release_date}</span> </p>
                <p className="pt-2 mr-2"> <span className="font-bold text-xl">IMDP Code:</span> <a href={`https://www.imdb.com/title/${movie.imdb_id}`}  target="_blank" rel="noreferrer">{movie.imdb_id}</a> </p>


            </div>
        </section>
    )
}

export default MovieDetail