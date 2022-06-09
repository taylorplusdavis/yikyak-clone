import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { AdjustmentsIcon } from "@heroicons/react/outline";

function MainTopBar() {
  return (
    <div className="main__top_wrapper">
      {/* left */}
      <div className="searchbar__wrapper">
        <SearchIcon height={28} />
        <input
          className="searchbar"
          placeholder="Enter your search request..."
        ></input>
      </div>

      {/* right */}
      <div className="main__right_wrapper">
        <div className="main__right_container">
          <AdjustmentsIcon height={32} />
          <div className="main__top_button_wrapper">
            <button className="main__top_button">Go to Premium</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTopBar;
