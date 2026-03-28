import {
  ClockIcon,
  CheckCircleIcon,
  DollarSignIcon,
  BriefcaseIcon,
} from "lucide-react";
import StatsCard from "./StatsCard";
import { statsData } from "../../data/workOrdersData";
const iconMap = {
  clipboard: BriefcaseIcon,
  clock: ClockIcon,
  check: CheckCircleIcon,
  dollar: DollarSignIcon,
  alert: BriefcaseIcon,
};

export default function StatsGrid() {
  return (
    <div className="flex gap-4">
      {statsData.map((stat) => (
        <StatsCard
          key={stat.id}
          label={stat.label}
          value={stat.value}
          change={stat.change}
          subtitle={stat.subtitle}
          iconBgColor={stat.iconBgColor}
          icon={iconMap[stat.iconName]}
        />
      ))}
    </div>
  );
}