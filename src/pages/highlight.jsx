import { useState } from "react";
import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Trash, X } from "lucide-react";
import carsData from '@/assets/taladrod-cars.json';

export default function Highlight() {
  const [selectedCar, setSelectedCar] = useState();
  const [highlightCar, setHighlightCar] = useState([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  useEffect(() => {
    setHighlightCar(JSON.parse(localStorage.getItem("cars") || "[]"));
  }, []);

  return (
    <div className=" p-6 flex flex-col items-center min-h-screen">
      <div className="mt-16 flex justify-between w-full">
        <p className="text-2xl font-semibold">Highlight</p>
        {highlightCar.length > 0 && (
          <div className="flex gap-2">
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
            <AddHighlight
              cars={carsData}
              setHighlightCar={setHighlightCar}
              highlightCar={highlightCar}
              setSelectedCar={setSelectedCar}
              selectedCar={selectedCar}
            />
          </div>
        )}
      </div>
      {highlightCar.length > 0 ? (
        <div className="grid grid-cols-4 justify-center mt-6 gap-4">
          {highlightCar.map((item, index) => {
            return (
              <Card key={index} className="rounded-2xl relative">
                <img
                  src={item.Img600}
                  className="object-contain  rounded-t-2xl "
                  alt={item.Name}
                />
                <div className="p-2">
                  <div className=" ">
                    <p>{item.NameMMT}</p>
                  </div>

                  <Button onClick={() => {
                    const newCars = highlightCar.filter(
                      (highlight) => highlight.Cid !== item.Cid,
                    );
                    setHighlightCar(newCars);
                    localStorage.setItem("cars", JSON.stringify(newCars));
                  }}
                    className='mt-2'
                  >
                    <X className="h-4 text-white" />
                    Remove</Button>
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
            <div className="mt-2">
              <AddHighlight
                cars={carsData}
                setHighlightCar={setHighlightCar}
                highlightCar={highlightCar}
                setSelectedCar={setSelectedCar}
                selectedCar={selectedCar}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AddHighlight({
  setHighlightCar,
  highlightCar,
  setSelectedCar,
  selectedCar,
}) {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button>Add Highlight Car</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Highlight</DialogTitle>
          <DialogDescription>
            Add highlight car to the highlight page
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <div className="flex items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Cars
            </Label>
            <Select
              onValueChange={(e) => {
                setSelectedCar(carsData.Cars.find((item) => item.Cid === e));
              }}
            >
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="Choose a car" />
              </SelectTrigger>
              <SelectContent>
                {carsData.Cars.map((item, index) => {
                  if (
                    highlightCar.find((highlight) => highlight.Cid === item.Cid)
                  ) {
                    return null;
                  }
                  return (
                    <SelectItem key={index} value={item.Cid}>
                      {item.NameMMT}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              // type="submit"
              onClick={() => {
                //check if duplicate
                if (highlightCar.find((item) => item.Cid === selectedCar.Cid)) {
                  return;
                }
                setHighlightCar([...highlightCar, selectedCar]);
                localStorage.setItem(
                  "cars",
                  JSON.stringify([...highlightCar, selectedCar]),
                );
              }}
            >
              Add
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  );
}
