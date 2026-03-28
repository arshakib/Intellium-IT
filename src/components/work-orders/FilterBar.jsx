import { useState } from "react";
import { SearchIcon, LayoutGridIcon, SlidersHorizontalIcon, PlusIcon } from "lucide-react";
import { filterTabs } from "../../data/workOrdersData";
 
export default function FilterBar() {
  const [activeTab, setActiveTab] = useState("All");
 
  return (
    <div className="flex items-center gap-3 flex-wrap">

      <div className="relative">
        <SearchIcon size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search Here..."
          className="pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 w-44"
        />
      </div>

      <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
        {filterTabs.map((tab) => (
          <button
            onClick={() => setActiveTab(tab)}
            className={
              "px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap " +
              (activeTab === tab
                ? "bg-gray-900 text-white"
                : "text-gray-500 hover:text-gray-800 hover:bg-gray-200")
            }
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex-1" />

      <div className="flex items-center  p-1 bg-white gap-3.5">
        <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-100">
          <LayoutGridIcon size={14} className="text-gray-500" />
        </button>
        <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-100">
          <SlidersHorizontalIcon size={14} className="text-gray-500" />
        </button>
      </div>
      <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg bg-white hover:bg-gray-50">
        Advanced Filter
      </button>
      <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800">
        <PlusIcon size={13} strokeWidth={2.5} />
        Add New
      </button>
 
    </div>
  );
}