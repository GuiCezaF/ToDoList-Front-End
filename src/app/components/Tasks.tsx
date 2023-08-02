"use client";
import { useState } from "react";

const Tasks = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex mx-auto ml-5 p-2 flex-col ">
      <div className="flex">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleOnChange}
          className="relative peer shrink-0 appearance-none w-7 h-7 mr-2 border-2 border-blackLight rounded-sm bg-blackLight checked:bg-checkedRed checked:border-0"
        />
        <label className={`text-lg ${isChecked ? "line-through" : ""}`}>
          Tarefa
        </label>
      </div>
      <div className="flex bg-blackLight rounded-full mx-5">
        <div className={`text-lg ${isChecked ? "line-through" : ""}`}>
          <p className="p-2">Descrição</p>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
