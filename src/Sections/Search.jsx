import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

const Search = ({ setData, setLoading, setNocontent }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const change = (e) => {
    if (e.target.value) {
      setError(false);
    }
    setValue(e.target.value);
  };

  const keyDown = async (e) => {
    if (e.key == "Enter") {
      if (value) {
        setLoading(false);
        setNocontent(false);
        try {
          const res = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
          );
          console.log(res.status);
          if (res.status == 200) {
            const data = await res.json();
            setData(data);
          } else {
            setData([]);
            setNocontent(true);
          }
        } catch (error) {
          console.log(res.status);
        }
        setLoading(false);
      } else {
        setError(true);
      }
    }
  };

  return (
    <section id="search-section">
      <div className="container search-content relative">
        <input
          type="text"
          value={value}
          onChange={change}
          onKeyDown={keyDown}
          className="
            search-input 
"
        />
        <button onKeyDown={keyDown} className="search-button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        {error && (
          <span className="absolute text-[#FF5252] -bottom-8 left-0">
            Whoops, can’t be empty…
          </span>
        )}
      </div>
    </section>
  );
};

export default Search;
