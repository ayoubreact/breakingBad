import { Input } from "@mantine/core";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
function Serach({ getQuery }) {
  const [inputVal, setInputVal] = useState("");
  const hundelInput = (e) => {
    setInputVal(e.target.value);
    getQuery(e.target.value);
  };
  return (
    <div className="searchInput">
      <Input
        placeholder="Search ..."
        size="md"
        radius={10}
        value={inputVal}
        onChange={hundelInput}
        icon={<BiSearch className="SearchIcon" />}
      />
    </div>
  );
}

export default Serach;
