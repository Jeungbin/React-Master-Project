import React, { useState } from "react";
import data from "./data";

function App() {
  const [clear, setClear] = useState(false);
  return (
    <div className="big-box">
      <h2>{data.length} birthdays today</h2>
      <section>
        {clear === true
          ? ""
          : data.map((item) => {
              return (
                <div key={item.id}>
                  <img src={item.image} />
                  <p>{item.name}</p>
                  <p>{item.age}</p>
                </div>
              );
            })}
      </section>
      <button onClick={() => setClear(true)}>Clear All</button>
    </div>
  );
}

export default App;
