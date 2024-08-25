
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import carsData from "@/assets/taladrod-cars.json";
import { Button } from "@/components/ui/button";
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
export default function AddHighlightButton({
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
                {carsData.Cars.map((item) => {
                  if (highlightCar.find((highlight) => highlight.Cid === item.Cid)) {
                    return null; // Return null instead of just return
                  }
                  return (
                    <SelectItem key={item.Cid} value={item.Cid}>
                      {item.NameMMT}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button
            // type="submit"
            onClick={() => {
              //check if empty
              if (!selectedCar) {
                return;
              }
              setHighlightCar([...highlightCar, selectedCar]);
              localStorage.setItem(
                "cars",
                JSON.stringify([...highlightCar, selectedCar]),
              );
              setSelectedCar();
            }}
          >
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  );
}
