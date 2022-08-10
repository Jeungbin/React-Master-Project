import React, { useState } from "react";

const Tour = ({ id, image, name, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <h1>{name}</h1>
      <p>
        {readMore ? info : `${info.substring(1, 30)}...`}
        <button onClick={() => setReadMore(!readMore)}>Read More</button>
      </p>

      <button onClick={() => removeTour(id)}>remove</button>
    </>
  );
};

export default Tour;
