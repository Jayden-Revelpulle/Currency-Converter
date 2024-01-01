import { useState, useEffect } from "react";
//import {searchTerm} from "./Dropdown";

export function Result({ amount, srcCurrency, tarCurrency }) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function updateResult() {
      const convertedAmount = await convert();
      //console.log('fetched');
      const roundedAmount = convertedAmount.toFixed(2);
      setResult(roundedAmount);
    }

    updateResult();
  }, [amount, srcCurrency, tarCurrency]);

  async function fetchExchangeRates() {
    const apiKey = "98b5e9d846e936f77cf9db0f";
    const api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    try {
      const res = await fetch(api);
      const data = await res.json();
      return data.conversion_rates;
    } catch (err) {
      alert("ERROR: Failed to fetch exchange rates");
      return null;
    }
  }

  async function convert() {
    try {
      const exchangeRates = await fetchExchangeRates();
      if (!exchangeRates) return null;

      const sourceExchangeRate = exchangeRates[srcCurrency];
      const targetExchangeRate = exchangeRates[tarCurrency];
      const convertedAmount =
        (amount / sourceExchangeRate) * targetExchangeRate;

      return convertedAmount;
    } catch (error) {
      alert("Error during conversion");
      return null;
    }
  }

  function displayResult() {
    if (result !== null) {
      return `${amount} ${srcCurrency} = ${result} ${tarCurrency}`;
    } else {
      return "Loading...";
    }
  }

  return (
    <>
      <div className="result">
        <p>{displayResult()}</p>
      </div>
    </>
  );
}
