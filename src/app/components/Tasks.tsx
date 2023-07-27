const Tasks = () => {
  return (
    <div className="flex mx-auto ml-5 p-2">
      <input
        type="checkbox"
        className=" relative peer shrink-0 appearance-none w-7 h-7 border-2 border-blackLight rounded-sm bg-blackLight checked:bg-checkedRed checked:border-0"
      />
      <label className="ml-2">Tarefa</label>

      <svg
        className=" absolute w-6 h-6 hidden peer-checked:block"
        xmlns="/CheckBox.svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

export default Tasks;
