/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { SearchIcon, LayoutGridIcon, SlidersHorizontalIcon, PlusIcon } from "lucide-react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { filterTabs } from "../../data/workOrdersData";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const COLUMNS = [
  { id: "status", label: "Status" },
  { id: "wo", label: "WO#" },
  { id: "dateDue", label: "Date Due" },
  { id: "dateReceived", label: "Date Received" },
  { id: "client", label: "Client" },
  { id: "customer", label: "Customer" },
  { id: "loan", label: "Loan" },
  { id: "address", label: "Address" },
  { id: "city", label: "City" },
  { id: "state", label: "State" },
  { id: "zip", label: "ZIP" },
  { id: "contractor", label: "Contractor" },
  { id: "admin", label: "Admin" },
  { id: "workType", label: "Work Type" },
  { id: "photos", label: "Photos" },
];

export default function FilterBar() {
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState("All");
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const { data: settingsData, isLoading } = useQuery({
    queryKey: ["userSettings"],
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/settings-data`);
      return response.data.data;
    },
  });

  const mutation = useMutation({
    mutationFn: (newColumns) => {
      return axios.post(`${import.meta.env.VITE_API_URL}/settings`, {
        userId: "user_1",
        columns: newColumns,
      });
    },
      onSuccess: () => {
    queryClient.invalidateQueries(["workOrders"]); 
  },
  });

  useEffect(() => {
    if (settingsData?.selectedColumns) {
      const cols = settingsData.selectedColumns.split(",").filter(c => c !== "");
      setSelectedColumns(cols);
    } else {
        setSelectedColumns([]); 
    }
  }, [settingsData]);

  const handleCheckboxChange = (columnId) => {
    setSelectedColumns((prev) =>
      prev.includes(columnId)
        ? prev.filter((id) => id !== columnId)
        : [...prev, columnId]
    );
  };

  const handleconform = () => {
    const columnsString = selectedColumns.join(",");
    mutation.mutate(columnsString);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center gap-3 flex-wrap font-geist">
      <div className="relative">
        <SearchIcon size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Search Here..." className="pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg w-44" />
      </div>

      <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
        {filterTabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={"px-3 py-1.5 text-xs font-medium rounded-md " + (activeTab === tab ? "bg-gray-900 text-white" : "text-gray-500")}>
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1" />

      <div className="flex items-center p-1 bg-white gap-3.5">
        <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-100">
          <LayoutGridIcon size={14} className="text-gray-500" />
        </button>
        <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-100">
          <SlidersHorizontalIcon size={14} className="text-gray-500" />
        </button>
      </div>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 flex items-center gap-2">
            Advanced Filter
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] font-geist">
          <DialogHeader>
            <DialogTitle className="font-jakarta text-xl">Table Columns</DialogTitle>
            <DialogDescription>
              Choose which columns to show. Changes will be saved to your profile.
            </DialogDescription>
          </DialogHeader>

          {isLoading ? (
            <div className="py-10 text-center text-sm text-gray-500">Loading your settings...</div>
          ) : (
            <div className="grid grid-cols-2 gap-4 py-4">
              {COLUMNS.map((col) => (
                <div key={col.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={col.id}
                    checked={selectedColumns.includes(col.id)}
                    onCheckedChange={() => handleCheckboxChange(col.id)}
                  />
                  <Label htmlFor={col.id} className="text-sm font-medium cursor-pointer">
                    {col.label}
                  </Label>
                </div>
              ))}
            </div>
          )}

          <DialogFooter>
            <Button
              onClick={handleconform}
              disabled={mutation.isPending}
              className="bg-gray-900 hover:bg-gray-800 w-full"
            >
              {mutation.isPending ? "Saving..." : "conform Selection"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg">
        <PlusIcon size={13} strokeWidth={2.5} />
        Add New
      </button>
    </div>
  );
}