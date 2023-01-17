import React, { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import { useParams, useHistory } from "react-router-dom";
import "./Edit.css";
import { useState } from "react";

function Edit() {
  const history = useHistory();
  const { id } = useParams();

  const { data, error, isLoading } = useFetch(
    `http://localhost:8000/requests/${id}`
  );

  const [request, setRequest] = useState("");

  const [requestor, setRequestor] = useState("");
  const [owner, setOwner] = useState("");
  const [description, setDescription] = useState("");
  const [justification, setjustification] = useState("");
  const [bimpact, setBimpact] = useState("");
  const [date, setDate] = useState("");
  const [implementation, setImplementation] = useState("");
  const [backout, setBackout] = useState("");
  const [risk, setRisk] = useState("");
  const [cimpact, setCimpact] = useState("");
  const [urgency, setUrgency] = useState("");
  const [verification, setVerification] = useState("");
  const [status, setStatus] = useState("");
  const [timeCreated, setTimeCreated] = useState("");
  const [approvalTime, setApprovalTime] = useState("");
  const [denialTime, setDenialTime] = useState("");

  useEffect(() => {
    setRequest(data);
    if (request) {
      setRequestor(request.requestor);
      setOwner(request.owner);
      setDescription(request.description);
      setjustification(request.justification);
      setBimpact(request.bimpact);
      setDate(request.date);
      setImplementation(request.implementation);
      setBackout(request.backout);
      setRisk(request.risk);
      setCimpact(request.cimpact);
      setUrgency(request.urgency);
      setVerification(request.verification);
      setStatus(request.status);
      setTimeCreated(request.timecreated);
      setApprovalTime(request.approvaltime);
      setDenialTime(request.denialtime);
    }
  }, [data, request]);

  const [buttonLoading, setButtonLoading] = useState(false);

  const users = ["Zane Birkett", "Marc Smith", "David Chan", "Derrick Agdomar"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonLoading(true);
    const [rfirst, rlname] = requestor.split(" ");
    const [ofirst, olname] = owner.split(" ");
    const editedrequest = {
      id,
      requestor,
      requestoremail: `${rfirst}.${rlname}@caricom.org`.toLowerCase(),
      owner,
      owneremail: `${ofirst}.${olname}@caricom.org`.toLowerCase(),
      description,
      justification,
      bimpact,
      date,
      implementation,
      backout,
      risk,
      cimpact,
      urgency,
      verification,
      status,
      timecreated: timeCreated,
      denialtime: denialTime,
      approvaltime: approvalTime,
    };
    fetch(`http://localhost:8000/requests/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...editedrequest,
      }),
    }).then(() => {
      history.goBack();
    });
  };
  return (
    <div>
      {isLoading && <div style={{ marginTop: "10px" }}>Please Wait...</div>}
      {error && <div style={{ marginTop: "10px" }}>{error}</div>}
      {request && (
        <div className="create">
          <h1>Edit Change Request Submission Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="grid-container">
              <div className="grid-item">
                <label>Change Requestor: *</label>
                <select
                  required
                  className="textinput"
                  value={requestor}
                  onChange={(e) => setRequestor(e.target.value)}
                >
                  <option value={""} hidden disabled>
                    Select Requestor..
                  </option>
                  {users.map((user) => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid-item">
                <label>Change Owner: *</label>
                <select
                  required
                  className="textInput"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                >
                  <option value={""} hidden disabled>
                    Select Owner..
                  </option>
                  {users.map((user) => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid-item">
                <label>Change Description: *</label>
                <input
                  required
                  value={description}
                  className="textinput"
                  onChange={(e) => setDescription(e.target.value)}
                ></input>
              </div>
              <div className="grid-item">
                <label>Change Date/Time/Duration: *</label>
                <input
                  type="date"
                  className="textinput"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                ></input>
              </div>
              <div className="grid-item">
                <label>Change Justification: *</label>
                <textarea
                  required
                  className="textinput"
                  value={justification}
                  rows="4"
                  onChange={(e) => setjustification(e.target.value)}
                ></textarea>
              </div>
              <div className="grid-item">
                <label>Change Back-Out Procedures/Tasks: *</label>
                <textarea
                  required
                  className="textinput"
                  value={backout}
                  rows="4"
                  onChange={(e) => setBackout(e.target.value)}
                ></textarea>
              </div>
              <div className="grid-item">
                <label>Change Implementation Procedures/Tasks: *</label>
                <textarea
                  required
                  className="textinput"
                  value={implementation}
                  rows="4"
                  onChange={(e) => setImplementation(e.target.value)}
                ></textarea>
              </div>
              <div className="grid-item">
                <label>Change Verification: *</label>
                <textarea
                  required
                  className="textinput"
                  value={verification}
                  rows="4"
                  onChange={(e) => setVerification(e.target.value)}
                ></textarea>
              </div>
              <div className="grid-item">
                <label>Change Risk: *</label>
                <div className="radio">
                  <input
                    className="radiobutton"
                    type="radio"
                    name="risk"
                    value="Low"
                    checked={risk === "Low" ? true : false}
                    required
                    onChange={(e) => setRisk(e.target.value)}
                  />
                  <p className="radiobutton">Low</p>
                </div>
                <div className="radio">
                  <input
                    className="radiobutton"
                    type="radio"
                    name="risk"
                    value="Medium"
                    checked={risk === "Medium" ? true : false}
                    onChange={(e) => setRisk(e.target.value)}
                  />
                  <p className="radiobutton">Medium</p>
                </div>
                <div className="radio">
                  <input
                    className="radiobutton"
                    type="radio"
                    name="risk"
                    checked={risk === "High" ? true : false}
                    value="High"
                    onChange={(e) => setRisk(e.target.value)}
                  />
                  <p className="radiobutton">High</p>
                </div>
              </div>
              <div className="grid-item">
                <label>Change Impact: *</label>
                <div className="radio">
                  <input
                    className="radiobutton"
                    type="radio"
                    name="cimpact"
                    value="Low"
                    checked={cimpact === "Low" ? true : false}
                    required
                    onChange={(e) => setCimpact(e.target.value)}
                  />
                  <p className="radiobutton">Low</p>
                </div>
                <div className="radio">
                  <input
                    className="radiobutton"
                    type="radio"
                    name="cimpact"
                    value="Medium"
                    checked={cimpact === "Medium" ? true : false}
                    onChange={(e) => setCimpact(e.target.value)}
                  />
                  <p className="radiobutton">Medium</p>
                </div>
                <div className="radio">
                  <input
                    className="radiobutton"
                    type="radio"
                    name="cimpact"
                    value="High"
                    checked={cimpact === "High" ? true : false}
                    onChange={(e) => setCimpact(e.target.value)}
                  />
                  <p className="radiobutton">High</p>
                </div>
              </div>
              <div className="grid-item" style={{ marginTop: "20px" }}>
                <label>Change Urgency: *</label>
                <div className="radio">
                  <input
                    className="radiobutton"
                    type="radio"
                    name="urgency"
                    value="Low"
                    checked={urgency === "Low" ? true : false}
                    required
                    onChange={(e) => setUrgency(e.target.value)}
                  />
                  <p className="radiobutton">Low</p>
                </div>
                <div className="radio">
                  <input
                    className="radiobutton"
                    type="radio"
                    name="urgency"
                    value="Emergency"
                    checked={urgency === "Emergency" ? true : false}
                    onChange={(e) => setUrgency(e.target.value)}
                  />
                  <p className="radiobutton">Emergency</p>
                </div>
                <div className="radio">
                  <input
                    className="radiobutton"
                    type="radio"
                    name="urgency"
                    value="Expedite"
                    checked={urgency === "Expedite" ? true : false}
                    onChange={(e) => setUrgency(e.target.value)}
                  />
                  <p className="radiobutton">Expedite</p>
                </div>
              </div>
              <div className="grid-item" style={{ marginTop: "20px" }}>
                <label>Business Impact: *</label>
                <textarea
                  required
                  className="textinput"
                  value={bimpact}
                  rows="4"
                  onChange={(e) => setBimpact(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="buttons">
              <div className="back">
                <p
                  onClick={(e) => {
                    history.goBack();
                  }}
                >
                  Back
                </p>
              </div>
              {!buttonLoading && <button>Edit Request</button>}
              {buttonLoading && (
                <button style={{ pointerEvents: "none" }}>
                  Editing Request..
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Edit;
