import Results from "@/app/Components/Results";

export default async function searchTerm({params}){
  const searchTerm =  params.searchTerm;
   const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`);
   const data = await res.json();
   const result = data.results;
  return (
    <div>
        {
            result && result.length === (
                <h1 className='text-center pt-6'>No results found</h1>
            )
        }
        {result && <Results results={result} />}
    </div>
  )
}