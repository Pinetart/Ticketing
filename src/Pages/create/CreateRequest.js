import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./CreateRequest.css";

const CreateRequest = () => {
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

  const [buttonLoading, setButtonLoading] = useState(false);

  const history = useHistory();
  const users = ["Zane Birkett", "Marc Smith", "David Chan", "Derrick Agdomar"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonLoading(true);
    const [rfirst, rlname] = requestor.split(" ");
    const [ofirst, olname] = owner.split(" ");
    const request = {
      id: uuidv4(),
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
      status: "open",
      timecreated: new Date(),
      denialtime: null,
      approvaltime: null,
    };
    fetch(`http://localhost:8000/requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    }).then(() => {
      setButtonLoading(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h1>Change Request Submission Form</h1>
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
                onChange={(e) => setRisk(e.target.value)}
              />
              <p className="radiobutton">Medium</p>
            </div>
            <div className="radio">
              <input
                className="radiobutton"
                type="radio"
                name="risk"
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
            <Link to="/">Back</Link>
          </div>
          {!buttonLoading && <button>Add Request</button>}
          {buttonLoading && (
            <button style={{ pointerEvents: "none" }}>Adding Request..</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateRequest;
