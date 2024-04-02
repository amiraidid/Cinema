import { useEffect } from "react";
import Card from "../components/Card"
import useFetch from "../hooks/useFetch"


function MoviesList({apiPath, title}) {
    const {data: movies} = useFetch(apiPath);

    useEffect(() => {
        document.title = `${title} /cinema`
    });

    return (
        <section className='max-w-7xl mx-auto py-7'>
            <div className="flex justify-start flex-wrap md:justify-evenly max-sm:justify-evenly">
                {movies.map((movie) => (
                    <Card key={movie.id}  movie={movie} />
                ))}
            </div>
        </section>
        
    )
}

export default MoviesList