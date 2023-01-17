import { useState } from "react";
import { Link } from "react-router-dom";
import "./RequestList.css";
import editIcon from "../assets/Edit-Icon.png";
import deleteIcon from "../assets/Delete-Icon.png";
import loadingIcon from "../assets/Loading-Icon.png";

const Requestlist = ({ requests, updateDashboard, allRequest }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (id) => {
    updateDashboard(allRequest.filter((request) => request.id !== id));
  };

  return (
    <table className="tablelist">
      <thead>
        <tr>
          <th>Requestor</th>
          <th>Title</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {requests.map((request) => (
          <tr className="loadedrequests" key={request.id}>
            <td>
              <Link to={`/requests/${request.id}`}>
                <p style={{ fontWeight: "500" }}>{request.requestor}</p>
                <p style={{ fontWeight: "300", color: "#9B9B9B" }}>
                  {request.requestoremail}
                </p>
              </Link>
            </td>
            <td>{request.description}</td>
            <td
              className={
                (request.status === "open" || request.status === "pending"
                  ? "open"
                  : null) ||
                (request.status === "solved" ? "solved" : null) ||
                (request.status === "closed" ? "closed" : null)
              }
            >
              <button>{request.status}</button>
            </td>
            <td style={{ paddingLeft: "35px" }}>{request.urgency}</td>
            <td style={{ paddingLeft: "25px" }}>{request.date}</td>
            <td style={{ textAlign: "center" }}>
              {!isLoading && (
                <div>
                  <Link to={`/editrequest/${request.id}`}>
                    <img src={editIcon} alt="edit request" />
                  </Link>
                  <img
                    src={deleteIcon}
                    onClick={(e) => {
                      setIsLoading(true);
                      fetch(`http://localhost:8000/requests/${request.id}`, {
                        method: "DELETE",
                      }).then(() => {
                        handleClick(request.id);
                        setIsLoading(false);
                      });
                    }}
                    alt="add request"
                  />
                </div>
              )}
              {isLoading && (
                <img src={loadingIcon} className="loading" alt="loading" />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Requestlist;
