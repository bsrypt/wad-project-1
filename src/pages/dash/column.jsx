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
      return car.models.length > 0 ? (
        <table id="models">
          <tr>
            <th>Model</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
          {car.models.map((model, index) => (
            <tr key={index}>
              <td>{model.name}</td>
              <td>{model.count}</td>
              <td>{model.price.toLocaleString()}</td>
            </tr>
          ))}
        </table>
      ) : (
        <div>No Models</div>
      );
    },
  },

  {
    accessorKey: "Total Amount",
    header: () => <div className="text-left">Total Amount</div>,
    cell: ({ row }) => {
      const car = row.original;
      let carAmount = 0;
      car.models.map((model) => {
        console.log(model.price, model.count);
        carAmount += model.count;
      });
      return (
        <div>
          {car.models.length > 0 ? (
            <div className="">{carAmount.toLocaleString()}</div>
          ) : (
            <div></div>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "Total Value",
    header: () => <div className="text-left">Total Value (Baht)</div>,
    cell: ({ row }) => {
      const car = row.original;
      let total = 0;
      car.models.map((model) => {
        console.log(model.price, model.count);
        total += model.price * model.count;
      });
      return (
        <div>
          {car.models.length > 0 ? (
            <div className="">{total.toLocaleString()}</div>
          ) : (
            <div></div>
          )}
        </div>
      );
    },
  },
];
