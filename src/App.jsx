import "./style.css";
import { AmountForm } from "./components/AmountForm.jsx";
import { CurrencySelect } from "./components/CurrencySelect.jsx";
import { Result } from "./components/Result.jsx";

import { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(100);
  const [srcCurrency, setSrcCurrency] = useState("CAD");
  const [tarCurrency, setTarCurrency] = useState("USD");

  return (
    <>
      <div className="container">
        <h2>Currency Converter</h2>
        <AmountForm amount={amount} setAmount={setAmount}></AmountForm>
        <CurrencySelect
          srcCurrency={srcCurrency}
          setSrcCurrency={setSrcCurrency}
          tarCurrency={tarCurrency}
          setTarCurrency={setTarCurrency}
        ></CurrencySelect>
        <Result
          amount={amount}
          srcCurrency={srcCurrency}
          tarCurrency={tarCurrency}
        ></Result>
      </div>
    </>
  );
}
