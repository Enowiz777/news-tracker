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

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=8c63e5b631f3491aa7a9db8d04c969c3');
      const json = await data.json();
      console.log(json.articles);
      setNews(json.articles);
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
                <NewsImage src={data.urlToImage}></NewsImage>
                <TextContainer>
                  <h1>{data.title}</h1>
                  <h3>{data.author}</h3>
                  <p>{data.description}</p>
                  <a target="_blank" href={data.url}>Read</a>

                </TextContainer>
                {/* <img src={data.urlToImage}></img> */}
              </Article>
          ))
        }
        <div class="jumbotron">
          <h1 class="display-4">Hello, world!</h1>
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
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
