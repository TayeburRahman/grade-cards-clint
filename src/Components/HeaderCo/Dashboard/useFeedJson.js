import { useEffect, useState } from "react";

const useFeedJson = () => {
    const [rows, setRows] = useState([]); 
  
    useEffect(() => {
      fetch("./Pockmon.json")
        .then((res) => res.json())
        .then((data) => setRows(data));
    }, []);

  return {
    rows,
  };
};
export default useFeedJson;