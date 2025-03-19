import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch }) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="flex gap-2 w-full">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search by company name, country, or comments..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
      </div>
      <button
        onClick={onSearch}
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
      >
        Search
      </button>
    </div>
  );
};
