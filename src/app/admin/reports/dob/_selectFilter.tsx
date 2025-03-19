"use client";

interface FilterOption {
  key: string;
  value: string;
}

interface FilterSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: FilterOption[];
}
const FilterSelect: React.FC<FilterSelectProps> = ({ label, value, onChange, options }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 border rounded"
    >
      {options.map((option) => (
        <option key={option.key} value={option.key}>
          {option.value}
        </option>
      ))}
    </select>
  </div>
);

export default FilterSelect;
