import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Column } from "@/modules/myBookings";

interface IList {
  columns: Column[];
  rows: any[];
  cell?: (row: any, index?: number) => React.ReactNode;
}

function getNestedValue(obj: any, path: any) {
  return path?.split(".").reduce((acc, curr) => {
    return acc[curr] !== undefined ? acc[curr] : undefined;
  }, obj);
}

export function List({ columns, rows }: IList) {
  if (rows.length === 0)
    return (
      <div className="flex items-center justify-center text-3xl mt-7">
        No bookings yet...
      </div>
    );
  return (
    <Table>
      <TableCaption>A list of Bookings.</TableCaption>
      <TableHeader>
        <TableRow>
          {columns.map((col, index) => (
            <TableHead key={index}>{col?.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((col, colIndex) => (
              <TableCell key={colIndex}>
                {col?.cell
                  ? col.cell?.(row, rowIndex)
                  : getNestedValue(row, col?.accessorKey)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
