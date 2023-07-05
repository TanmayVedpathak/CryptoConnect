import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Loader } from "../index";
import "./cryptocurrencies.css";

import { useGetCryptosQuery } from "../../services/cryptoApi";

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptoList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className="cryptoInputDiv">
          <input
            type="text"
            placeholder="Search CryptoCurrencies"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <div className="cryptoContainer">
        {cryptos?.map((currency) => {
          return (
            <div key={currency.uuid} className="cryptoCard">
              <Link to={`/crypto/${currency.uuid}`}>
                <div className="cryptoCardHeader">
                  <h3 className="cryptoCardTitle">
                    {currency.rank}. {currency.name}
                  </h3>
                  <img
                    className="cryptoCardIcon"
                    src={currency.iconUrl || demoImage}
                    alt="coin-icon"
                  />
                </div>
                <hr />
                <div className="cryptoCardStats">
                  <p className="CardStatsContent">
                    Price: {millify(currency.price)}
                  </p>
                  <p className="CardStatsContent">
                    Market Cap {millify(currency.marketCap)}
                  </p>
                  <p className="CardStatsContent">
                    daily Change: {currency.change}%
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CryptoCurrencies;
