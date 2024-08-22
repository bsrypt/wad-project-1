import { useState } from "react";
import { useEffect } from "react";
import { columns } from "./column";
import DataTable from "./data-table";

export default function Dash() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/taladrod-cars.min.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);
  const test = () => {
    console.log(data);
  };
  return (
    <h1
      onClick={() => {
        test();
      }}
    >
      <DataTable columns={columns} data={data} />
    </h1>
  );
}
