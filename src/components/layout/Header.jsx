import { BellIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-5 mr-10 bg-white border-gray-200">
      <h1 className="text-xl font-geist font-medium text-gray-900">Work Order</h1>

      <div className="flex items-center gap-3">
        <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100">
          <BellIcon size={18} className="text-gray-600" />
        </button>
        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-sm font-semibold text-gray-600">U</span>
        </div>
      </div>
    </header>
  );
}