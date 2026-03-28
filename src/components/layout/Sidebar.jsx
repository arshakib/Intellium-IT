import { BriefcaseIcon, SettingsIcon, HelpCircleIcon, LogOutIcon } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-56 min-h-screen bg-white border-gray-200 flex flex-col mt-2 ml-6">
      <div className="px-5 pt-5 pb-8">
        <span className="text-[30px] font-geist font-bold text-[#212B36]">LOGO HERE</span>
      </div>
      <p className="px-5 pt-2 pb-1 text-xs font-jakarta text-gray-400 uppercase tracking-wider">
        Menu
      </p>

     <button className="relative flex items-center gap-3 pl-7 pr-5 py-2.5 text-sm font-semibold text-gray-900 bg-gray-50">
  <div className="absolute left-0 top-0 bottom-0 w-[5px] font-jakarta text-lg bg-gray-900 rounded-full"></div>
  <BriefcaseIcon size={19} />
  Work Orders
</button>
      <p className="px-5 pt-5 pb-1 text-xs font-jakarta text-gray-400 uppercase tracking-wider">
        General
      </p>
      <button className="flex items-center gap-3 px-5 py-2.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 border-l-2 border-transparent">
        <SettingsIcon size={15} />
        Settings
      </button>
      <button className="flex items-center gap-3 px-5 py-2.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 border-l-2 border-transparent">
        <HelpCircleIcon size={15} />
        Help
      </button>
      <button className="flex items-center gap-3 px-5 py-2.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 border-l-2 border-transparent">
        <LogOutIcon size={15} />
        Logout
      </button>
    </aside>
  );
}