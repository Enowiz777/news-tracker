import {React, useState, useEffect} from "react";


function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=8c63e5b631f3491aa7a9db8d04c969c3');
      const json = await data.json();
      setNews(json.articles);
      setLoading(false);
    }
    fetchData();
    
   }, []);
  return (
    <>
        {
          loading ? (
          <h1>Data is loading...</h1>
          ): (
          news.map((data) =>
              <div>
                <h1>{data.title}</h1>
                <h3>{data.author}</h3>
                <p>{data.content}</p>
              </div>
          ))
        }
    </>
  );
}

/*
      loading ? {
          <h1>Data is loading...</h1>
      }: {
          news.map((data) =>
            {
              <div>
                <h1>data.title</h1>
                <h3>data.author</h3>
                <p>data.content</p>
              </div>
            }
          )
      }
 
*/

export default App;
