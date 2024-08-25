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
import carsData from "@/assets/taladrod-cars.json";
export default function Dash() {
  const [pieData, setPieData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [tableData, setTableData] = useState([]);
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
    const pie = carsData.MMList.map((brand, index) => {
      const cars = carsData.Cars.filter((car) => car.MkID === brand.mkID);
      return {
        brand: brand.Name,
        count: cars.length,
        fill: colors[index % colors.length],
      };
    });
    setPieData(pie);

    const bar = carsData.MMList.map((brand, index) => {
      const cars = carsData.Cars.filter((car) => car.MkID === brand.mkID);
      const modelsCount = {};
      cars.forEach((car) => {
        if (modelsCount[car.Model]) {
          modelsCount[car.Model] += 1; // Increment count if model already exists
        } else {
          modelsCount[car.Model] = 1; // Initialize count if model is not in the object
        }
      });
      return {
        brand: brand.Name,
        ...modelsCount, // Spread the models count into the object
      };

    });
    setBarData(bar);

    const table = carsData.MMList.map((brand, index) => {
      const cars = carsData.Cars.filter((car) => car.MkID === brand.mkID);
      const modelsCount = {};
      cars.forEach((car) => {
        if (modelsCount[car.Model]) {
          modelsCount[car.Model] += 1; // Increment count if model already exists
        } else {
          modelsCount[car.Model] = 1; // Initialize count if model is not in the object
        }
      });
      const models = Object.keys(modelsCount).map((model) => ({
        name: model,
        count: modelsCount[model],
      }));
      return {
        brand: brand.Name,
        models: models,
      };

    });
    setTableData(table);
  }, []);

  return (
    <div className="p-6 gap-4 flex min-h-screen w-full flex-col">
      <p className="mt-16 text-2xl font-semibold">Dashboard</p>
      <MyPieChart data={pieData} />
      <MyBarChart data={barData} colors={colors} />
      <p className="mt-6 text-2xl font-semibold">Cars</p>
      <DataTable columns={columns} data={tableData} />
    </div>
  );
}
