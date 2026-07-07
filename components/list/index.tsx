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

interface IList<T> {
  columns: Column<T>[];
  rows: T[];
  cell?: (row: T, index?: number) => React.ReactNode;
}

// function getNestedValue(obj: Record<string, any>, path: string):string | boolean | null | undefined {
//   return path?.split(".").reduce((acc, curr) => {
//     return acc[curr] !== undefined ? acc[curr] : undefined;
//   }, obj);
// }
// function getNestedValue(
//   obj: Record<string, unknown>,
//   path: string,
// ): string | boolean | null | undefined {
//   // .reduce<any> थपेर TypeScript लाई ढुक्क बनाउने
//   return path?.split(".").reduce((acc, curr) => {
//     return acc && acc[curr] !== undefined ? acc[curr] : undefined;
//   }, obj);
// }

function getNestedValue<T>(
  // obj: Record<string, unknown>,
  obj: T,
  path: string,
): string | boolean | null | undefined {
  const result = path
    ?.split(".")
    .reduce<Record<string, unknown> | unknown>((acc, curr) => {
      if (acc && typeof acc === "object" && curr in acc) {
        return (acc as Record<string, unknown>)[curr];
      }
      return undefined;
    }, obj);

  return result as string | boolean | null | undefined;
}

export function List<T extends object>({ columns, rows }: IList<T>) {
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
                  : getNestedValue(row, col?.accessorKey as string)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
