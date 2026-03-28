import FilterBar from "../components/work-orders/FilterBar";
import StatsGrid from "../components/work-orders/StatsGrid";
 
export default function WorkOrdersPage() {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 p-6 flex flex-col gap-5">
      <StatsGrid />
      <FilterBar />
    </main>
  );
}