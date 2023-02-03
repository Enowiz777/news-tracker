import {React, useState, useEffect} from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const Article = styled.div`
  margin: 50px;
  display: flex;

`;

const NewsImage =styled.img`
  border-radius: 15px;
  width: 280px;
  height: 180px;
  margin-bottom: 15px;
`;
const TextContainer = styled.div`
  margin-left: 50px;
`;

const ArticleLink = styled.a``;

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const APIkey = "pub_16508fbf5b182f5a8c6b3eaa272a8852f15a7";
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://newsdata.io/api/1/news?apikey=${APIkey}&country=us,gb`);
      const json = await data.json();
      const results = json.results;
      console.log(results);
      setNews(results);
      setLoading(false);
      
    }
    fetchData();
    
   }, []);
  return (
    <>
    <Title>
      <h1>Welcome to the Newsroom</h1>
    </Title>
        {
          loading ? (
          <h1>Data is loading...</h1>
          ): (
          news.map((data) =>
              <Article>
                <NewsImage src={data.image_url}></NewsImage>
                <TextContainer>
                  <h1>{data.title}</h1>
                  <h3>{data.source_id} | {data.pubDate}</h3>
                  <p>{data.description}</p>
                  {/* <a target="_blank" href={data.url}>Read</a> */}

                </TextContainer>
                {/* <img src={data.urlToImage}></img> */}
              </Article>
          ))
        }

    </>
  );
}

export default App;
