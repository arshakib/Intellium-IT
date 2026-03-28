import React from "react";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = Array(15).fill({
  status: "Assigned",
  wo: "1234",
  dateDue: "25-04-26",
  dateReceived: "24-10-25",
  client: "Client Company",
  customer: "-",
  loan: "-",
  address: "110 Ritchie Mews, Florin",
  city: "Florin",
  state: "Poland",
  zip: "23512",
  contractor: "Marion",
  admin: "-",
  workType: "Initial Secure",
  photos: "19",
});

export default function WorkOrderTable() {
  return (
    <div className="w-full bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
      <Table className="w-full table-fixed border-collapse font-geist text-[12px]">
        <TableHeader className="bg-[#F9FAFB]">
          <TableRow className="hover:bg-transparent border-b border-gray-100 sticky top-0 z-10 bg-white">
            <TableHead className="w-[7%] font-jakarta font-bold text-gray-900 h-11 px-2">Status</TableHead>
            <TableHead className="w-[4%] font-jakarta font-bold text-gray-900 px-2">WO#</TableHead>
            <TableHead className="w-[6%] font-jakarta font-bold text-gray-900 px-2">Due</TableHead>
            <TableHead className="w-[7%] font-jakarta font-bold text-gray-900 px-2">Received</TableHead>
            <TableHead className="w-[9%] font-jakarta font-bold text-gray-900 px-2">Client</TableHead>
            <TableHead className="w-[4%] font-jakarta font-bold text-gray-900 px-2">Cust.</TableHead>
            <TableHead className="w-[4%] font-jakarta font-bold text-gray-900 px-2">Loan</TableHead>
            <TableHead className="w-[12%] font-jakarta font-bold text-gray-900 px-2">Address</TableHead>
            <TableHead className="w-[6%] font-jakarta font-bold text-gray-900 px-2">City</TableHead>
            <TableHead className="w-[6%] font-jakarta font-bold text-gray-900 px-2">State</TableHead>
            <TableHead className="w-[6%] font-jakarta font-bold text-gray-900 px-2">ZIP</TableHead>
            <TableHead className="w-[7%] font-jakarta font-bold text-gray-900 px-2">Contr.</TableHead>
            <TableHead className="w-[4%] font-jakarta font-bold text-gray-900 px-2">Admin</TableHead>
            <TableHead className="w-[8%] font-jakarta font-bold text-gray-900 px-2">Work Type</TableHead>
            <TableHead className="w-[5%] font-jakarta font-bold text-gray-900 px-1 text-center">Photo.</TableHead>
            <TableHead className="w-[5%] font-jakarta font-bold text-gray-900 text-right pr-4">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} className="hover:bg-gray-50/50 border-b border-gray-50 last:border-0 transition-colors">
              <TableCell className="py-2 px-2">
                <Badge className="bg-[#E7F7EF] text-[#0D9444] hover:bg-[#E7F7EF] border-none shadow-none font-semibold px-1.5 py-0.5 rounded-sm text-[10px] uppercase truncate">
                  {row.status}
                </Badge>
              </TableCell>
              <TableCell className="text-gray-600 px-2 truncate">{row.wo}</TableCell>
              <TableCell className="text-gray-600 px-2 truncate">{row.dateDue}</TableCell>
              <TableCell className="text-gray-600 px-2 truncate">{row.dateReceived}</TableCell>
              <TableCell className="text-gray-600 px-2 truncate font-medium">{row.client}</TableCell>
              <TableCell className="text-gray-600 px-2 truncate">{row.customer}</TableCell>
              <TableCell className="text-gray-600 px-2 truncate">{row.loan}</TableCell>
              <TableCell className="text-gray-600 px-2 truncate" title={row.address}>{row.address}</TableCell>
              <TableCell className="text-gray-600 px-2 truncate">{row.city}</TableCell>
              <TableCell className="text-gray-600 px-2 truncate">{row.state}</TableCell>
              <TableCell className="text-gray-600 px-2 truncate">{row.zip}</TableCell>
              <TableCell className="text-gray-600 px-2 truncate">{row.contractor}</TableCell>
              <TableCell className="text-gray-600 px-2 truncate">{row.admin}</TableCell>
              <TableCell className="text-gray-600 px-2 truncate">{row.workType}</TableCell>
              <TableCell className="text-gray-600 px-1 text-center">{row.photos}</TableCell>
              <TableCell className="text-right pr-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full">
                      <MoreVertical size={14} className="text-gray-400" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="font-geist">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end px-6 py-3 border-t border-gray-100 gap-8 bg-white font-geist">
        <div className="flex items-center gap-2">
          <span className="text-[12px] text-gray-500">Rows Per Page :</span>
          <Select defaultValue="100">
            <SelectTrigger className="w-[65px] h-7 text-[12px] border-gray-200 shadow-none focus:ring-0 rounded">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="font-geist text-[12px]">
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
              <SelectItem value="200">200</SelectItem>
              <SelectItem value="500">500</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-[12px] text-gray-500 hover:text-gray-900">Previous</button>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded bg-white text-[12px] font-bold shadow-sm">1</button>
            <button className="w-7 h-7 flex items-center justify-center text-[12px] text-gray-400">2</button>
            <button className="w-7 h-7 flex items-center justify-center text-[12px] text-gray-400">3</button>
            <span className="text-gray-300 px-1 text-[12px]">...</span>
            <button className="w-7 h-7 flex items-center justify-center text-[12px] text-gray-400">10</button>
          </div>
          <button className="text-[12px] text-gray-500 hover:text-gray-900">Next</button>
        </div>
      </div>
    </div>
  );
}