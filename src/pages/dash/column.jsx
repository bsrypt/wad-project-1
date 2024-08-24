// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns = [
  {
    accessorKey: "brand",
    header: "Brand",
  },
  {
    accessorKey: "models",
    header: "Models",
    cell: ({ row }) => {
      const car = row.original;
      return (
        <div>
          {car.models.length > 0 ? (
            car.models.map((model, index) => (
              <div key={index}>
                {model.name} ({model.count})
              </div>
            ))
          ) : (
            <div>No Models</div>
          )}
        </div>
      );
    },
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
