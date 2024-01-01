import { currencies } from "./Currencies.jsx";
import { useId } from "react";

export function Dropdown({
  setCurrency,
  input,
  setInput,
  open,
  setOpen,
}) {

  function setDropdown() {
    return currencies
      .filter((option) =>
        option.toLowerCase().startsWith(input.toLowerCase())
      )
      .map((item) => (
        <div key={item} className="option" onClick={() => onOptionClicked(item)}>
          {item}
        </div>
      ));
  }

  function onOptionClicked(selectedCurrency) {
    setInput(selectedCurrency);
    setCurrency(selectedCurrency);
    setOpen(false);
  }

  function toggleDropdown() {
    setOpen(prev => !prev);
  }

  const id = useId();

  return (
    <div className="dropdown-container">
      <div className="input-container">
        <input
          type="text"
          value={input}
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
          onClick={() => toggleDropdown()}
          className="search"
          id={id}
        />
        <div className="arrow-container">
          <i onClick={() => toggleDropdown()} className="arrow" />
        </div>
        {input ? (
          <div onClick={() => setInput("")} className="clear-container">
            x
          </div>
        ) : null}
      </div>
      <div className={`dropdown ${open ? "visible" : ""}`}>{setDropdown()}</div>
    </div>
  );
}
