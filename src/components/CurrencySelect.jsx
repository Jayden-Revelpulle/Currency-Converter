import { Dropdown } from "./Dropdown.jsx";
import { useState } from "react";

export function CurrencySelect({
  srcCurrency,
  setSrcCurrency,
  tarCurrency,
  setTarCurrency,
}) {
  const [srcInput, setSrcInput] = useState("");
  const [srcOpen, setSrcOpen] = useState(false);

  const [tarInput, setTarInput] = useState("");
  const [tarOpen, setTarOpen] = useState(false);

  function swapCurrency() {
    setSrcCurrency(tarCurrency);
    setSrcInput(tarInput);

    setTarCurrency(srcCurrency);
    setTarInput(srcInput);
  }

  return (
    <div className="currency-select-container">
      <Dropdown
        setCurrency={setSrcCurrency}
        input={srcInput}
        setInput={setSrcInput}
        open={srcOpen}
        setOpen={setSrcOpen}
      ></Dropdown>
      <a href=""></a>
      <button onClick={() => swapCurrency()} className="swapBtn"></button>
      <Dropdown
        setCurrency={setTarCurrency}
        input={tarInput}
        setInput={setTarInput}
        open={tarOpen}
        setOpen={setTarOpen}
      ></Dropdown>
    </div>
  );
}
