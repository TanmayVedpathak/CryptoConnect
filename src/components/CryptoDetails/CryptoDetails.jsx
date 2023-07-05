import { useState } from "react";
import { useParams } from "react-router-dom";
import millify from "millify";
import {
  AiOutlineThunderbolt,
  AiOutlineTrophy,
  AiOutlineInfoCircle,
  AiOutlineCheck,
} from "react-icons/ai";
import { BiChart } from "react-icons/bi";
import { FaExchangeAlt } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { PiHashStraightBold } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import LineChart from "./../LineChart/LineChart";
import { Loader } from "../index";
import "./cryptodetails.css";

import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../../services/cryptoApi";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <Loader />;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <HiOutlineCurrencyDollar />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <PiHashStraightBold /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <HiOutlineCurrencyDollar />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <AiOutlineTrophy />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <BiChart />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <FaExchangeAlt />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <AiOutlineCheck />
      ) : (
        <RxCross1 />
      ),
      icon: <AiOutlineInfoCircle />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <AiOutlineInfoCircle />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <AiOutlineInfoCircle />,
    },
  ];

  // console.log(cryptoDetails);
  return (
    <div className="cryptoDetails-conatiner">
      <div className="detailsHeader">
        <h1>{`${cryptoDetails?.name} Price`}</h1>
        <p>{`${cryptoDetails?.name}  live price in US dollars. View value statistics, market cap and supply.`}</p>
      </div>
      <select
        className="coinCategory"
        onChange={(e) => setTimePeriod(e.target.value)}
        defaultValue="7d"
      >
        {time.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails.price)}
        coinName={cryptoDetails.name}
      />
      <div className="coinStatistics">
        <div className="statsInfo">
          <h3>{cryptoDetails.name} Value Statistics</h3>
          <p>An overview showing the stats of {cryptoDetails.name}</p>
          <table className="statsTable">
            <tbody>
              {stats.map(({ title, value, icon }, i) => (
                <tr className="statsRow" key={i}>
                  <td className="statsCell statsIcon">{icon}</td>
                  <td className="statsCell">{title}</td>
                  <td className="statsCell statsValue">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="statsInfo">
          <h3>Other Statistics</h3>
          <p>An overview showing the stats of all cryptocurrencies</p>
          <table className="statsTable">
            <tbody>
              {genericStats.map(({ title, value, icon }, i) => (
                <tr className="statsRow" key={i}>
                  <td className="statsCell statsIcon">{icon}</td>
                  <td className="statsCell">{title}</td>
                  <td className="statsCell statsValue">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="coinInfo">
        <div className="infoDiv">
          <h2 className="infoHead">What is {cryptoDetails.name}</h2>
          <p className="infoDesc">{cryptoDetails.description}</p>
        </div>
        <div className="infoDiv">
          <h2 className="infoHead">{cryptoDetails.name} Links</h2>
          <table className="infoTable">
            <tbody>
              {cryptoDetails.links.map((link) => (
                <tr className="infoRow" key={link.name}>
                  <td className="infoCell">{link.type}</td>
                  <td className="infoCell">
                    <a className="infoLink" href={link.url} target="_blank">
                      {link.name}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
