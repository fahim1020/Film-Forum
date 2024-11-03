import React from "react";

export const Diff = () => {
  return (
    <div className="diff aspect-[16/9]">
      <div className="diff-item-1">
        <div className="bg-amber-400 text-primary-content grid place-content-center text-9xl font-black">
          FILM-FORUM
        </div>
      </div>
      <div className="diff-item-2">
        <div className="bg-base-200 grid place-content-center text-9xl font-black">
          FILM-FORUM
        </div>
      </div>
      <div className="diff-resizer"></div>
    </div>
  );
};
