import React, { useState, useEffect } from "react";

interface YearSelectorProps {
  label: string;
  year: number;
  onChange: (year: number) => void;
}

const YearSelector: React.FC<YearSelectorProps> = ({ label, year, onChange }) => {
  // Controls whether the decade-based year panel is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Keep track of which decade's range is currently displayed
  // e.g. if year=2023, decadeStart = 2020
  const [decadeStart, setDecadeStart] = useState(Math.floor(year / 10) * 10);

  useEffect(() => {
    // Whenever `year` changes from outside, recompute the displayed decade
    setDecadeStart(Math.floor(year / 10) * 10);
  }, [year]);

  const handlePrevDecade = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setDecadeStart((prev) => prev - 10);
  };

  const handleNextDecade = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setDecadeStart((prev) => prev + 10);
  };

  const handleYearClick = (selectedYear: number) => {
    onChange(selectedYear);
    setIsOpen(false); // Close the panel after selection
  };

  // Generate 10 years for the current decade (e.g. 2020...2029)
  const yearsInDecade = Array.from({ length: 10 }, (_, i) => decadeStart + i);

  return (
    <div style={{ marginBottom: "10px", position: "relative" }}>
      <label>{label}</label>

      {/* The "dropdown-like" display field */}
      <div
        style={{
          display: "inline-block",
          marginLeft: 8,
          border: "1px solid #ccc",
          padding: "4px 8px",
          cursor: "pointer",
          userSelect: "none",
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {/* If year is 0 or null, show some placeholder */}
        {year ? year : "Select Year"}
      </div>

      {/* The decade-based year panel */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "8px",
            marginTop: "4px",
            zIndex: 999,
          }}
        >
          <div style={{ marginBottom: "8px", textAlign: "center" }}>
            <button onClick={handlePrevDecade}>Prev Decade</button>
            <span style={{ margin: "0 8px" }}>
              {decadeStart} - {decadeStart + 9}
            </span>
            <button onClick={handleNextDecade}>Next Decade</button>
          </div>

          {/* Grid of the 10 years */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 40px)", gap: "4px" }}>
            {yearsInDecade.map((y) => (
              <div
                key={y}
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "4px 0",
                  border: "1px solid #ccc",
                  backgroundColor: y === year ? "#c9e1ff" : "transparent",
                }}
                onClick={() => handleYearClick(y)}
              >
                {y}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default YearSelector;
