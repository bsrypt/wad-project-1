import { useState } from "react";
import { useEffect } from "react";
import { columns } from "./column";
import DataTable from "./data-table";
import { MyPieChart } from "./piechart";
import { MyBarChart } from "./barchart";

export default function Dash() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/taladrod-cars.min.json")
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData.Cars);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);
  return (
    <div className="p-6 gap-4 flex min-h-screen w-full flex-col">
      <p className="text-2xl font-semibold">Dashboard</p>
      <div className="flex gap-4">
        <MyPieChart />
        <MyBarChart />
      </div>

      <p className="mt-6 text-2xl font-semibold">Cars</p>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
