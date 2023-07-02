import React from "react";
import { useState } from "react";
import Loading from "./Companents/Loading";
import Nocontent from "./Companents/Nocontent";
import Main from "./Sections/Main";
import Search from "./Sections/Search";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nocontent, setNocontent] = useState(false);

  return (
    <>
      <Search
        setData={setData}
        setLoading={setLoading}
        setNocontent={setNocontent}
      ></Search>
      {/* <Main></Main> */}
      {data.length > 0 ? <Main word={data[0]}></Main> : null}

      {nocontent && <Nocontent></Nocontent>}
      {loading && <Loading></Loading>}
    </>
  );
};

export default App;
