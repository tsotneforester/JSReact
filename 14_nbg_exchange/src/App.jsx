import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "./Context";
import Eu from "./assets/eu.png";
import axios from "axios";
import { ThemeToggler, Header, Select, InputAmount, Swap, Available, Calendar, VersusRates, Container, ConvertedAmount } from "./components";
import { georgia, excludeCurr, countryData, url } from "./data";

function App() {
  const navigate = useNavigate();
  const { date, setDate } = useContext(AppContext);
  const [data, setData] = useState([]);

  //curencies
  const [amount, setAmount] = useState({ string: "100", number: 100 });

  const [fromCur, setFromCur] = useState("USD");
  const [toCur, setToCur] = useState("GEL");
  //result
  const [converted, setConverted] = useState(0);
  const [singleRates, setSingleRates] = useState([]);

  async function jsonData(date) {
    try {
      const res = await axios(`${url}?date=${date}`);

      let filtered = res.data[0].currencies.filter((e) => {
        for (let key in excludeCurr) {
          if (excludeCurr[key] === e.code) return false;
        }
        return true;
      });

      let filteredOut = res.data[0].currencies.filter((e) => {
        for (let key in excludeCurr) {
          if (excludeCurr[key] === e.code) return true;
        }
        return false;
      });

      let tempData = [...filteredOut, ...filtered];

      for (let i = 0, n = data.length; i < n; i++) {
        ["rateFormated", "diffFormated", "diff", "date", "validFromDate"].forEach((e) => delete data[i][e]);
      }

      for (let i = 0, n = tempData.length; i < n; i++) {
        for (let ii = 0, n = countryData.length; ii < n; ii++) {
          if (tempData[i].code == countryData[ii].currencyCode) {
            tempData[i].nameENG = countryData[ii].currencyName;
            tempData[i].countryCode3 = countryData[ii].countryCode3;
            tempData[i].countryCode2 = countryData[ii].countryCode2;
            tempData[i].countryName = countryData[ii].country;
            tempData[i].currencySymbol = countryData[ii].currencySymbol;
            tempData[i].flag = `https://flagsapi.com/${countryData[ii].countryCode2}/flat/64.png`;
          }
        }
      }

      tempData.splice(0, 0, georgia);

      for (let i = 0, n = tempData.length; i < n; i++) {
        if (tempData[i].code == "EUR") {
          tempData[i].nameENG = "EU Euro";
          tempData[i].flag = Eu;
          tempData[i].currencySymbol = "€";
        }
      }

      setData(tempData);

      let fromRate =
        tempData.filter((e) => {
          return e.code == fromCur;
        })[0].rate /
        tempData.filter((e) => {
          return e.code == fromCur;
        })[0].quantity;

      let toRate =
        tempData.filter((e) => {
          return e.code == toCur;
        })[0].rate /
        tempData.filter((e) => {
          return e.code == toCur;
        })[0].quantity;

      setConverted((amount.number * fromRate) / toRate);

      setSingleRates([(fromRate / toRate).toFixed(4), (toRate / fromRate).toFixed(4)]);
    } catch (e) {
      console.log("ERROR", e);
    }
  }

  function handleSwap() {
    setFromCur(toCur);
    setToCur(fromCur);
  }

  useEffect(() => {
    jsonData(date);
    navigate({
      pathname: "/",
      search: `?Date=${date}&Amount=${amount.number}&From=${fromCur}&To=${toCur}`,
    });
  }, [amount, fromCur, toCur, date]);

  return (
    <>
      <ThemeToggler />
      <Header />
      <Container>
        <Available />
        <Calendar date={date} setDate={setDate} />
        <Select data={data} setFromCur={setFromCur} curr={fromCur}>
          <InputAmount amount={amount.string} setter={setAmount} />
        </Select>
        <Swap handler={handleSwap} />
        <Select data={data} setFromCur={setToCur} curr={toCur}>
          <ConvertedAmount value={converted} />
        </Select>

        <VersusRates curr1={fromCur} rate={singleRates[0]} curr2={toCur} />
        <VersusRates curr1={toCur} rate={singleRates[1]} curr2={fromCur} />
      </Container>
    </>
  );
}

export default App;
