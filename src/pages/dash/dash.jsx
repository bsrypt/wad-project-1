import { useState } from "react";
import { useEffect } from "react";
import { columns } from "./column";
import DataTable from "./data-table";
import { MyPieChart } from "./piechart";
import { MyBarChart } from "./barchart";

export default function Dash() {
  const [cars, setCars] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/taladrod-cars.min.json")
      .then((response) => response.json())
      .then((jsonData) => {
        const carsData = jsonData.Cars;
        const brandsData = jsonData.MMList;
        setCars(carsData);

        const result = brandsData.map((brand) => {
          const cars = carsData.filter((car) => car.MkID === brand.mkID);
          return {
            brand: brand.Name,
            count: cars.length,
            fill: `hsl(${Math.random() * 360}, 70%, 50%)`,
          };
        });
        setData(result);
        console.log(result);
        // setCars(jsonData.Cars);
        // setBrands(jsonData.MMList);
        // console.log(jsonData);
        // console.log(brands);
        // for (let i = 0; i < jsonData.Cars.length; i++) {
        //   console.log(jsonData.Cars[i].Brand);
        // }
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);
  return (
    <div className="p-6 gap-4 flex min-h-screen w-full flex-col">
      <p className="text-2xl font-semibold">Dashboard</p>

      <div className="flex gap-4">
        <MyPieChart data={data} />
        {/* <MyBarChart brands={brands} /> */}
      </div>

      <p className="mt-6 text-2xl font-semibold">Cars</p>
      <DataTable columns={columns} data={cars} />
    </div>
  );
}
