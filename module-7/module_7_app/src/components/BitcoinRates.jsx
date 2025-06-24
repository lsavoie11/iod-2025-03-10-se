import React, { useState } from "react";
import { useMood } from "./MoodContext";

// Custom hook for fetching Bitcoin rate
function useBitcoinRate(currency) {
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    let isMounted = true;
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
      .catch(() => {
        if (isMounted) {
          setError("Failed to fetch rate");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [currency]);

  return { rate, loading, error };
}

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { rate, loading, error } = useBitcoinRate(currency);
  const { happy } = useMood();

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate {happy ? "😊" : "😢"}</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {currencies.map((curr) => (
            <option value={curr} key={curr}>
              {curr}
            </option>
          ))}
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
