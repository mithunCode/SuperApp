import React, { useEffect, useState } from "react";

const NewsCard = () => {
  // 607bc642ed834272827558c49edf8b46
  const [news, setnews] = useState({});
  const getNews = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=607bc642ed834272827558c49edf8b46"
    );
    const data = await res.json();
    setnews(data.articles[8]);
  };
  useEffect(() => {
    getNews();
  }, []);

  const publisheddate = news?.publishedAt?.split("T0");
  if (publisheddate) {
    var publishedtime = publisheddate[1]?.slice(0, -4);
  }

  return (
    <div className="news-container">
      <div
        className="news-bg"
        style={{ backgroundImage: `url(${news.urlToImage})` }}
      >
        <img src={news.urlToImage} width={350} alt="" className="news-img" />
        <div className="title-bg-news">
          {news.title}
          <p>
            {publisheddate && publisheddate[0]} |{" "}
            {publishedtime && publishedtime}
          </p>
        </div>
      </div>
      <div className="news-content">{news.description}</div>
    </div>
  );
};

export default NewsCard;
