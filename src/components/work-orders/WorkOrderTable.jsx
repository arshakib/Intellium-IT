import React, { useState } from "react";
import { MoreVertical, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
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

const COLUMN_MAP = {
  status: { label: "Status", width: "w-[8%]" },
  wo: { label: "WO#", width: "w-[5%]" },
  dateDue: { label: "Due Date", width: "w-[8%]" },
  dateReceived: { label: "Received", width: "w-[8%]" },
  client: { label: "Client", width: "w-[10%]" },
  customer: { label: "Customer", width: "w-[7%]" },
  loan: { label: "Loan", width: "w-[6%]" },
  address: { label: "Address", width: "w-[14%]" },
  city: { label: "City", width: "w-[6%]" },
  state: { label: "State", width: "w-[6%]" },
  zip: { label: "ZIP", width: "w-[6%]" },
  contractor: { label: "Contractor", width: "w-[8%]" },
  admin: { label: "Admin", width: "w-[5%]" },
  workType: { label: "Work Type", width: "w-[8%]" },
  photos: { label: "Photos", width: "w-[5%]" },
};

export default function WorkOrderTable() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(100);

  // 1. FETCH DATA FROM BACKEND
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["workOrders", page, limit],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/work-orders?page=${page}&limit=${limit}`
      );
      return response.data;
    },
  });

//   console.log(import.meta.env.VITE_API_URL);

 if (isLoading) return (
    <div className="w-full h-96 flex items-center justify-center bg-white rounded-xl border border-gray-100 font-geist">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
        <p className="text-sm text-gray-500">Initializing Dashboard...</p>
      </div>
    </div>
  );
  if (isError) return <div className="p-20 text-center text-red-500">Backend Error. Check terminal.</div>;

  const firstRow = data?.data?.[0] || {};
  const visibleColumns = Object.keys(firstRow).filter(
    (key) => key !== "id" && key !== "createdAt" && COLUMN_MAP[key]
  );

  return (
    <div className="w-full bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col font-geist">
           {isFetching && (
        <div className="absolute inset-0 z-50 bg-white/50 backdrop-blur-[1px] flex items-center justify-center transition-all">
          <div className="bg-white px-6 py-4 rounded-lg shadow-xl border border-gray-100 flex items-center gap-3">
            <Loader2 className="h-5 w-5 animate-spin text-gray-900" />
            <span className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Updating Table...
            </span>
          </div>
        </div>
      )}

      <div className={`overflow-x-auto transition-opacity duration-300 ${isFetching ? 'opacity-50' : 'opacity-100'}`}>
        <Table className="w-full table-fixed border-collapse text-[12px]">
          <TableHeader className="bg-[#F9FAFB]">
            <TableRow className="hover:bg-transparent border-b border-gray-100">
              {visibleColumns.map((key) => (
                <TableHead key={key} className={`${COLUMN_MAP[key].width} font-jakarta font-bold text-gray-900 h-11 px-3`}>
                  {COLUMN_MAP[key].label}
                </TableHead>
              ))}
              <TableHead className="w-[5%] font-jakarta font-bold text-gray-900 text-right pr-6">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.data.map((row) => (
              <TableRow key={row.id} className="hover:bg-gray-50/50 border-b border-gray-50 transition-colors">
                {visibleColumns.map((key) => (
                  <TableCell key={key} className="py-2.5 px-3 truncate">
                    {key === "status" ? (
                      <Badge className="bg-[#E7F7EF] text-[#0D9444] border-none shadow-none font-semibold px-2 py-0.5 rounded-sm text-[10px] uppercase">
                        {row[key]}
                      </Badge>
                    ) : (
                      <span className={key === "client" ? "font-semibold text-gray-900" : "text-gray-600"}>
                        {row[key] || "-"}
                      </span>
                    )}
                  </TableCell>
                ))}
                <TableCell className="text-right pr-6">
                   <MoreVertical size={16} className="text-gray-300 ml-auto" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end px-6 py-4 border-t border-gray-100 gap-10 bg-white">
        <div className="flex items-center gap-2">
          <span className="text-[13px] text-gray-500">Rows Per Page :</span>
          <Select 
            defaultValue={limit.toString()} 
            onValueChange={(val) => { setLimit(Number(val)); setPage(1); }}
          >
            <SelectTrigger className="w-[70px] h-8 text-[13px] border-gray-200 focus:ring-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
              <SelectItem value="200">200</SelectItem>
              <SelectItem value="500">500</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setPage(p => p - 1)} 
            disabled={page === 1}
            className="text-[13px] text-gray-500 hover:text-gray-900 disabled:opacity-30 flex items-center gap-1"
          >
            <ChevronLeft size={16} /> Previous
          </button>
          
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded font-bold text-[13px] text-gray-900 shadow-sm">
              {page}
            </span>
            <span className="text-[13px] text-gray-400">of {data.totalPages}</span>
          </div>

          <button 
             onClick={() => setPage(p => p + 1)} 
             disabled={page >= data.totalPages}
             className="text-[13px] text-gray-500 hover:text-gray-900 disabled:opacity-30 flex items-center gap-1"
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}