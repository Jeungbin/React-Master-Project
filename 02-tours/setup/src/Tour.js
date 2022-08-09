import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadmore] = useState(false);
  return (
    <section>
      <img src={image} alt="" />
      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setReadmore(!readMore)}>
          {readMore ? "readless" : "readmore"}
        </button>
      </p>
      <button onClick={() => removeTour(id)}>not interested</button>
    </section>
  );
};

export default Tour;
