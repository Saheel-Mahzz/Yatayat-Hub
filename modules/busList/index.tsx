import { getBuslist } from "./api/getBuslist";
import { Column } from "../myBookings";
import { Buses } from "./definitions/buses.definitions";
import { List } from "@/components/list";

export default async function BusList() {
  const response = await getBuslist();

  const allBuses = response?.data?.results || [];
  const totalCount = response?.data?.count;
  console.log("response", response);

  const columns: Column<Buses>[] = [
    {
      header: "S.N",
      accessorKey: "",
      cell: (_, index) => {
        return <span>{(index || 0) + 1}</span>;
      },
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Number Plate",
      accessorKey: "number_plate",
    },
    {
      header: "Bus Type",
      accessorKey: "bus_type",
    },
    {
      header: "Total Seats",
      accessorKey: "total_seats",
    },
  ];
  return (
    // <div className="space-y-6">
    //   <div className="flex justify-between items-center">
    //     <div>
    //       <h1 className="text-2xl font-bold">Buses</h1>

    //       <p className="text-muted-foreground">Manage your buses</p>
    //     </div>

    //     <CreateBusbutton />
    //   </div>

    //   <Card>
    //     <CardHeader>
    //       <CardTitle>Bus List</CardTitle>
    //     </CardHeader>

    //     <CardContent>
    //       <div className=" grid grid-cols-3 gap-5">
    //         {[
    //           {
    //             name: "Deluxe Express",
    //             type: "AC",
    //             seat: 40,
    //             plate: "BA 2 KHA 1234",
    //           },

    //           {
    //             name: "Mountain Rider",
    //             type: "Tourist",
    //             seat: 35,
    //             plate: "BA 1 PA 2222",
    //           },
    //         ].map((bus) => (
    //           <Card key={bus.plate} className="rounded-xl">
    //             <CardContent className="p-5 space-y-3">
    //               <div className="flex justify-between">
    //                 <Bus />

    //                 <span className="text-sm text-muted-foreground">
    //                   {bus.type}
    //                 </span>
    //               </div>

    //               <h2 className="font-semibold">{bus.name}</h2>

    //               <p>Seats: {bus.seat}</p>

    //               <p>
    //                 Plate:
    //                 {bus.plate}
    //               </p>
    //             </CardContent>
    //           </Card>
    //         ))}
    //       </div>
    //     </CardContent>
    //   </Card>
    // </div>
    <>
      <h1 className="text-2xl font-bold">Buses</h1>
      <List columns={columns} rows={allBuses} />
    </>
  );
}
