export function AmountForm({ amount, setAmount }) {
  return (
    <>
      <form>
        <label htmlFor="amount">Amount:</label>
        <br></br>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="amount"
          type="number"
          name="amount"
          id="amount"
        ></input>
      </form>
    </>
  );
}
