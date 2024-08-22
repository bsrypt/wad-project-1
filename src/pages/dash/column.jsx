// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns = [
  {
    accessorKey: "NameMMT",
    header: "Name",
  },
  {
    accessorKey: "Prc",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const car = row.original;
      return <div className="text-right">{car.Prc}</div>;
    },
  },
];
