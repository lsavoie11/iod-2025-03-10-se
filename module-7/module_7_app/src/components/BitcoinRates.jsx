import React, { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // for cleanup
    setLoading(true);
    setError(null);

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setRate(data.bitcoin ? data.bitcoin[currency.toLowerCase()] : null);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError("Failed to fetch rate");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <div style={{ marginTop: "1em" }}>
        {loading && <span>Loading...</span>}
        {error && <span style={{ color: "red" }}>{error}</span>}
        {rate !== null && !loading && !error && (
          <span>
            1 BTC = {rate} {currency}
          </span>
        )}
      </div>
    </div>
  );
}

export default BitcoinRates;
