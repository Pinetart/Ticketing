import { useState } from "react";
import "./FormFilter.css";

export default function FormFilter({ changeFilter, requests }) {
  const [currentFilter, setCurrentFilter] = useState("all");
  const filterList = ["open", "pending", "solved", "closed"];

  const handleClick = (newFilter) => {
    setCurrentFilter(newFilter);
    changeFilter(newFilter);
  };

  return (
    <div className="project-filter">
      {requests && (
        <nav>
          <button
            onClick={() => handleClick("all")}
            className={currentFilter === "all" ? "active" : ""}
          >
            <div className="filters">
              <div className="filter-name">All Requests</div>
              <div className="count">{requests.length}</div>
            </div>
          </button>
          {filterList.map((f) => (
            <button
              key={f}
              onClick={() => handleClick(f)}
              className={currentFilter === f ? "active" : ""}
            >
              <div className="filters">
                <div className="filter-name">
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </div>
                <div className="count">
                  {
                    requests.filter((request) => {
                      return request.status === f;
                    }).length
                  }
                </div>
              </div>
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
