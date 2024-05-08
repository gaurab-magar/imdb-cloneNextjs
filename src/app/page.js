import Image from "next/image";
import Results from "./Components/Results";
import SearchBox from "./Components/SearchBox";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  
  const genre = searchParams.genre || 'fetchTrending';

  try {
    const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`);
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    
    const data = await res.json();
    return (
      <main>
        <section className="relative h-[400px] w-100 overflow-hidden">
          <Image className="absolute inset-0 h-full w-full object-cover" src={'/images/hero.png'} alt="hero.png" height={400} width={100} />
          {/* <img
            alt="Hero Image"
            className="absolute inset-0 h-full w-full object-cover"
            height="400"
            src="./hero.png"
            style={{
              aspectRatio: "1200/600",
              objectFit: "cover",
            }}
            width="full"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-4 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Discover the Best Movies</h1>
            <p className="max-w-[600px] text-lg">Search and explore a vast collection of movies, TV shows, and more.</p>
          </div>
        </section>
        <div>
          <Results results={data.results} />
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <main>
        <div>
          <h2>Oops! Something went wrong while fetching data.</h2>
        </div>
      </main>
    );
  }
}
