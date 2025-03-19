import React from "react";
import TrainersList from "./_trainersList";

const TrainersLayout = () => {
  return (
    <div className="relative flex justify-start items-start w-full gap-6">
      <TrainersList />
    </div>
  );
};
export default TrainersLayout;
