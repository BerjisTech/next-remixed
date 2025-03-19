import React from "react";

const Pagination = () => {
  return (
    <div className="self-stretch flex justify-center items-center gap-2.5 py-4">
      <button className="px-3 py-2 bg-accent text-primary rounded">Previous</button>
      <button className="px-3 py-2 bg-accent text-primary rounded">1</button>
      <button className="px-3 py-2 bg-accent text-primary rounded">2</button>
      <button className="px-3 py-2 bg-accent text-primary rounded">3</button>
      <button className="px-3 py-2 bg-accent text-primary rounded">4</button>
      <button className="px-3 py-2 bg-accent text-primary rounded">5</button>
      <button className="px-3 py-2 bg-accent text-primary rounded">6</button>
      <button className="px-3 py-2 bg-accent text-primary rounded">7</button>
      <button className="px-3 py-2 bg-accent text-primary rounded">8</button>
      <button className="px-3 py-2 bg-accent text-primary rounded">9</button>
      <button className="px-3 py-2 bg-accent text-primary rounded">10</button>
      <button className="px-3 py-2 bg-accent text-primary rounded">Next</button>
    </div>
  );
};

export default Pagination;
