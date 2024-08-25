import { useState } from "react";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash, X } from "lucide-react";
import AddHighlightButton from '../components/add-highlight-button.jsx';
import carsData from "@/assets/taladrod-cars.json";

export default function Highlight() {
  const [selectedCar, setSelectedCar] = useState();
  const [highlightCar, setHighlightCar] = useState([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  useEffect(() => {
    console.log("highlightCar", carsData.Cars[0]);
    setHighlightCar(JSON.parse(localStorage.getItem("cars") || "[]"));
  }, []);

  return (
    <div className=" p-6 flex flex-col items-center min-h-screen">
      <div className="mt-16 flex justify-between w-full">
        <p className="text-2xl font-semibold">Highlight</p>
        <div className="flex gap-2">
          {
            highlightCar.length > 0 && (
              <Button
                variant="destructive"
                className="flex items-center gap-1"
                onClick={() => {
                  setHighlightCar([]);
                  localStorage.setItem("cars", JSON.stringify([]));
                  setIsDeleteMode(false);
                }}
              >
                <Trash className="h-4 w-4" /> Clear
              </Button>
            )
          }
          <AddHighlightButton
            setHighlightCar={setHighlightCar}
            highlightCar={highlightCar}
            setSelectedCar={setSelectedCar}
            selectedCar={selectedCar}
          />
        </div>
      </div>
      {highlightCar.length > 0 ? (
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 justify-center mt-6 gap-4">
          {highlightCar.map((item, index) => {
            return (
              <Card key={index} className="rounded-2xl flex flex-col">
                <div className="h-48 w-full">
                  <img
                    src={item.Img600}
                    className="object-cover rounded-t-2xl w-full h-full"
                    alt={item.Name}
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-primary font-semibold">{carsData.MMList.find((car) => car.mkID === item.MkID).Name}</p>
                  <p className="text-lg font-bold">{item.Model}</p>
                  <p className="text-sm text-muted-foreground mt-2">{item.NameMMT}</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-lg text-foreground">฿ {item.Prc}</p>
                    <Button variant='destructive'
                      onClick={() => {
                        const newCars = highlightCar.filter(
                          (highlight) => highlight.Cid !== item.Cid,
                        );
                        setHighlightCar(newCars);
                        localStorage.setItem("cars", JSON.stringify(newCars));
                      }}
                      className='mt-2 rounded-lg'
                    >
                      <X className="h-4 text-white" />
                      <p>Remove</p>
                    </Button>
                  </div>
                </div>

              </Card>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-1 w-full items-center mt-4 justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You don&apos;t have any highlight car
            </h3>
            <p className="text-sm text-muted-foreground">
              Add your favorite cars to highlight
            </p>
            {/* <div className="mt-2"> */}
            {/*   <AddHighlightButton */}
            {/*     setHighlightCar={setHighlightCar} */}
            {/*     highlightCar={highlightCar} */}
            {/*     setSelectedCar={setSelectedCar} */}
            {/*     selectedCar={selectedCar} */}
            {/*   /> */}
            {/* </div> */}
          </div>
        </div>
      )
      }
    </div >
  );
}

