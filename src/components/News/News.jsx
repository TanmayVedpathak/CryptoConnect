import { useState } from "react";
import moment from "moment";
import { Loader } from "../index";
import "./news.css";

import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 10,
  });

  if (isFetching) return <Loader />;

  return (
    <div className="news-container">
      {!simplified && (
        <div className="newsInput">
          <select
            className="coinCategory"
            onChange={(e) => setNewsCategory(e.target.value)}
          >
            <option className="coinDefault" value="" selected disabled hidden>
              Select a Crypto
            </option>
            {data?.data?.coins.map((currency) => (
              <option key={currency.uuid} value={currency.name}>
                {currency.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="newsList">
        {cryptoNews?.value.map((news, i) => (
          <div key={i} className="newsCard">
            <div className="newsHeader">
              <h2 className="newsTitle">{news.name}</h2>
              <img
                className="newsImage"
                src={news?.image?.thumbnail?.contentUrl || demoImage}
                alt="news-img"
              />
            </div>
            <p className="newsDescription">
              {news.description.substring(0, 100)}...
            </p>
            <div className="newsFooter">
              <img
                src={news.provider[0]?.image?.thumbnail?.contentUrl}
                alt="icon"
              />
              <p>{news.provider[0].name}</p>
              <p>{moment(news.datePublished).startOf("ss").fromNow()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
