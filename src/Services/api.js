const API_KEy = "903a0d1a1ad875af1a0b24a3827762fb"
const Base_url = "https://api.themoviedb.org/3"

export const Getpopular = async () =>
{
    const response = await fetch(`${Base_url}/movie/popular?api_key=${API_KEy}`);
    const data = await response.json();
    console.log(data)
    return data.results
}

export const GetSearch = async (query) =>
{
    const response = await fetch(`${Base_url}/search/movie?api_key=${API_KEy}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results
}