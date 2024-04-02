import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card"
import useFetch from "../hooks/useFetch"


function Search({apiPath}) {
    const [useSearch] = useSearchParams()
    const queryTerm = useSearch.get('q')

    const {data: movies} = useFetch(apiPath, queryTerm);


    useEffect(() => {
        document.title = `Search results for ${queryTerm} /cinema`
    })

    return (
        <>
            <section className={`py-7 ${movies.length < 0 ? "h-screen" : "h-fit"}`}>
                <p className="text-4xl text-gray-700 dark:text-white">{movies.length < 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'`}</p>
            </section>
            <section className='max-w-7xl mx-auto py-7'>
                <div className="flex justify-start flex-wrap">
                    {movies.map((movie) => (
                        <Card key={movie.id}  movie={movie} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Search