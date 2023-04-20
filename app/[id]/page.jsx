import Image from "next/image"
export default async function MovieCard({params}){
    const imagePath="https://image.tmdb.org/t/p/original"
    const data=await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}`,{next: { revalidate: 10 }})

    const movie=await data.json()
    return (
        <div>
        <div>
            <h2 className="text-4xl">{movie.title}</h2>
            <h2 className="text-lg my-5">{movie.release_date}</h2>
            <h2>Runtime: {movie.runtime} minutes</h2>
            <h2 className="text-sm bg-green-500 inline-block my-2 py-2 px-4 rounded-xl">{movie.status}</h2>
            <div className="flex justify-center items-center">
            <Image className="my-12" src={imagePath+movie.poster_path} alt={movie.title} width={600} height={600} priority/>
            </div>
            
        </div>
        </div>
    )
}