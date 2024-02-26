import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(1);

  function handleCountPlusClick() {
    setCount((prev) => prev + 1);
  }

  function handleCountMinusClick() {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  }

  return (
    <div className="flex items-center gap-4 mt-2">
      <button
        className="border border-solid border-gray-dark rounded-md p-1"
        onClick={handleCountMinusClick}
      >
        <ChevronLeftIcon />
      </button>
      <span className="text-xl">{count}</span>

      <button
        className="border border-solid border-gray-dark rounded-md  p-1"
        onClick={handleCountPlusClick}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
