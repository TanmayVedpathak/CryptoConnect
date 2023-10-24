import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { CryptoCurrencies, News, Loader } from "../index";
import { Link } from "react-router-dom";
import millify from "millify";

import { useGetCryptosQuery } from "../../services/cryptoApi";
import "./homepage.css";

const HomePage = () => {
  const { pathname } = useLocation();
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (isFetching) return <Loader />;

  return (
    <div className="homeConatiner">
      <h1 className="homeTitle">Global Crypto Stats</h1>
      <div className="homeStats">
        <div className="totalStats">
          <p className="statsTitle">Total Cryptocurrencies</p>
          <h2 className="statsCount">{millify(globalStats?.total)}</h2>
        </div>
        <div className="totalStats">
          <p className="statsTitle">Total Coins</p>
          <h2 className="statsCount">{millify(globalStats.totalCoins)}</h2>
        </div>
        <div className="totalStats">
          <p className="statsTitle">Total 24h Volume</p>
          <h2 className="statsCount">{millify(globalStats.total24hVolume)}</h2>
        </div>
        <div className="totalStats">
          <p className="statsTitle">Total Exchanges</p>
          <h2 className="statsCount">{millify(globalStats.totalExchanges)}</h2>
        </div>
        <div className="totalStats">
          <p className="statsTitle">Total Market Cap</p>
          <h2 className="statsCount">{millify(globalStats.totalMarketCap)}</h2>
        </div>
        <div className="totalStats">
          <p className="statsTitle">Total Markets</p>
          <h2 className="statsCount">{millify(globalStats.totalMarkets)}</h2>
        </div>
      </div>

      <div className="home-heading-container">
        <h1 className="homeTitle">Top 10 Cryptocurrencies in the World</h1>
        <h2 className="showLink">
          <Link to="/cryptocurrencies">Show More</Link>
        </h2>
      </div>
      <CryptoCurrencies simplified />

      <div className="home-heading-container">
        <h1 className="homeTitle">Latest Cryptocurrencies News</h1>
        <h2 className="showLink">
          <Link to="/news">Show More</Link>
        </h2>
      </div>
      <News simplified />
    </div>
  );
};

export default HomePage;
