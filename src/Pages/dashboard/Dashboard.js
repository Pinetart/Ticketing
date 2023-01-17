import { useEffect, useState } from "react";
import Requestlist from "../../Components/RequestList";
import useFetch from "../../Hooks/useFetch";
import FormFilter from "./FormFilter";
import addIcon from "../../assets/Add-Icon.png";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const { data, error, isLoading } = useFetch("http://localhost:8000/requests");
  const [filter, setFilter] = useState("all");
  const [requests, setRequests] = useState(null);

  useEffect(() => {
    setRequests(data);
  }, [data]);

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };
  const updateDashboard = (array) => {
    setRequests(array);
    console.log(array);
  };

  const filteredRequests = requests
    ? requests.filter((request) => {
        switch (filter) {
          case "all":
            return true;
          case "open":
          case "pending":
          case "solved":
          case "closed":
            return request.status === filter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div>
      <h2>All Requests</h2>
      {isLoading && <div style={{ marginTop: "10px" }}>Please Wait...</div>}
      {error && <div style={{ marginTop: "10px" }}>{error}</div>}
      {requests && (
        <div className="filters">
          <FormFilter changeFilter={changeFilter} requests={requests} />
          <NavLink to="/create">
            <img src={addIcon} alt="add request" />
          </NavLink>
        </div>
      )}
      {filteredRequests && requests && (
        <Requestlist
          requests={filteredRequests
            .slice()
            .sort((a, b) => new Date(b.timecreated) - new Date(a.timecreated))}
          allRequest={requests}
          updateDashboard={updateDashboard}
        />
      )}
    </div>
  );
};

export default Dashboard;
