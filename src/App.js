import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [rate, setRate] = useState(0);

  return (
    <div className="App">
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage percentage={tip} setPercentage={setTip}>
        How did you like the service
      </SelectPercentage>
      <SelectPercentage percentage={rate} setPercentage={setRate}>
        How did you friend like the service?
      </SelectPercentage>
      <Output bill={bill} tip={tip} rate={rate} />
      <Reset
        setReset={() => {
          setBill(0);
          setTip(0);
          setRate(0);
        }}
      />
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <>
      <p>How much was the bill?</p>
      <input
        type="text"
        placeholder="Bill..."
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </>
  );
}

function SelectPercentage({ setPercentage, children, percentage }) {
  return (
    <>
      <p>{children}</p>
      <select
        value={percentage}
        onChange={(e) => setPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutly Amazing (20%)</option>
      </select>
    </>
  );
}

function Output({ tip, rate, bill }) {
  let finalBill;

  function percentageCalculator(bill, percentage) {
    return (bill * percentage) / 100;
  }

  function setFinalBill(tip, rate, bill) {
    return (finalBill =
      percentageCalculator(bill, tip) +
      percentageCalculator(bill, rate) +
      bill);
  }

  setFinalBill(tip, rate, bill);

  return (
    <>
      <p>{`You pay $${finalBill}  ($${bill} bill + $${
        percentageCalculator(bill, tip) + percentageCalculator(bill, rate)
      }  tip)`}</p>
    </>
  );
}
function Reset({ setReset }) {
  return (
    <>
      <button onClick={setReset}>Reset</button>
    </>
  );
}
export default App;
