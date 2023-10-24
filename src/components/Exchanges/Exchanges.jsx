import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import millify from "millify";
import { Loader } from "../index";
import "./exchanges.css";

import { useGetCryptosQuery } from "../../services/cryptoApi";

const Exchanges = () => {
  const { pathname } = useLocation();
  const { data, isFetching } = useGetCryptosQuery(100);
  const exchangeList = data?.data?.coins;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (isFetching) return <Loader />;

  return (
    <div className="exchanges-container">
      <table className="exchangeTable">
        <thead className="tableHeader">
          <tr className="tableHeaderRow">
            <th className="tableHeading">Exchanges</th>
            <th className="tableHeading">24h Trade Volume</th>
            <th className="tableHeading">Markets</th>
            <th className="tableHeading">Change</th>
          </tr>
        </thead>
        <tbody>
          {exchangeList.map((exchange) => (
            <tr className="tableRow" key={exchange.uuid}>
              <td className="tableCell">
                <span className="tableIndex">{exchange?.rank}.</span>
                <img className="tableIcons" src={exchange?.iconUrl} />
              </td>
              <td className="tableCell">${millify(exchange["24hVolume"])}</td>
              <td className="tableCell">{millify(exchange?.marketCap)}</td>
              <td className="tableCell">{millify(exchange?.change)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exchanges;
