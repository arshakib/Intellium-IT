/* eslint-disable no-unused-vars */
export default function StatsCard({ label, value, change, subtitle, iconBgColor, icon: Icon }) {
  return (
    <div className="flex-1 bg-white rounded-xl border border-gray-200 px-5 py-4">
      <div className="flex items-center gap-2.5 mb-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${iconBgColor}`}>
          <Icon size={14} className="text-white" />
        </div>
        <span className="text-sm font-medium text-[#212B36]">{label}</span>
      </div>

      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        {change && (
          <span className="text-xs font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
            {change}
          </span>
        )}
      </div>
 
      {/* Subtitle */}
      <span className="text-xs text-[#212B36]">{subtitle}</span>
 
    </div>
  );
}