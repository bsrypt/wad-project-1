import { useState } from "react";
import { useEffect } from "react";
import { columns } from "./column";
import DataTable from "./data-table";
import { MyPieChart } from "./piechart";
import { MyBarChart } from "./barchart";
import {
  tomato,
  red,
  ruby,
  crimson,
  pink,
  plum,
  purple,
  violet,
  iris,
  indigo,
  blue,
  cyan,
  teal,
  jade,
  green,
  grass,
  orange,
  amber,
  yellow,
  lime,
  mint,
  sky,
  bronze,


} from "@radix-ui/colors";
export default function Dash() {
  const [cars, setCars] = useState([]); const [data, setData] = useState([]);
  const colors = [
    tomato.tomato9,
    red.red9,
    ruby.ruby9,
    crimson.crimson9,
    pink.pink9,
    plum.plum9,
    purple.purple9,
    violet.violet9,
    iris.iris9,
    indigo.indigo9,
    blue.blue9,
    cyan.cyan9,
    teal.teal9,
    jade.jade9,
    green.green9,
    grass.grass9,
    bronze.bronze9,
    orange.orange9,
    amber.amber9,
    yellow.yellow9,
    lime.lime9,
    mint.mint9,
    sky.sky9,
  ];
  useEffect(() => {
    fetch("/taladrod-cars.json")
      .then((response) => response.json())
      .then((jsonData) => {
        const carsData = jsonData.Cars;
        const brandsData = jsonData.MMList;
        setCars(carsData);

        const result = brandsData.map((brand, index) => {
          const cars = carsData.filter((car) => car.MkID === brand.mkID);
          return {
            brand: brand.Name,
            count: cars.length,
            fill: colors[index],


          };
        });
        setData(result);
        console.log(result);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);
  return (
    <div className="p-6 gap-4 flex min-h-screen w-full flex-col">
      <p className="mt-16 text-2xl font-semibold">Dashboard</p>

      <div className="flex gap-4">
        <MyPieChart data={data} />
        <MyBarChart />
      </div>

      <p className="mt-6 text-2xl font-semibold">Cars</p>
      <DataTable columns={columns} data={cars} />
    </div>
  );
}
