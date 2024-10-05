import React, { useState, useEffect } from 'react';

const Index = () => {
  const [rate, setRate] = useState(0);
  const getRate = () => {
    fetch('https://utils-api.meritt.dev/currency?to=LBP&amount=1&from=USD')
      .then((res) => res.json())
      .then((data) => {
        setRate(data.value);
      });
  };
  useEffect(() => {
    getRate();
  }, []);

  return (
    <div>
      1 $ is equal to
      {rate.toLocaleString()} LBP
      <br />
      <button onClick={getRate}>Refresh</button>
    </div>
  );
};

export default Index;
