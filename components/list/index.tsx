import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Column } from "@/modules/myBookings";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

interface IList {
  columns: Column[];
  rows: any[];
}

function getNestedValue(obj: any, path: any) {
  return path?.split(".").reduce((acc, curr) => {
    return acc[curr] !== undefined ? acc[curr] : undefined;
  }, obj);
}

export function List({ columns, rows }: IList) {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          {columns.map((col, index) => (
            <TableHead key={index}>{col?.header}</TableHead>
          ))}
          {/* <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* {rows.map((row, i) => (
           <TableRow key={i}>

           columns.map((col) => (
              <TableCell>{getNestedValue(row, col?.accessorKey)}</TableCell>
          ))
            </TableRow>

        ))} */}
        {rows.map((row, i) => (
          <TableRow key={i}>
            {
              /* 1. Yahan curly brace '{' start gara */
              columns.map((col, i) => (
                <TableCell key={i}>
                  {getNestedValue(row, col?.accessorKey)}
                </TableCell>
              ))
              /* 2. Yahan curly brace '}' close gara */
            }
          </TableRow>
        ))}
        {/* {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))} */}
      </TableBody>
    </Table>
  );
}
