import React, { useState } from "react";

function ApplyModal({ job, setSelectedJob }) {
  const [form, setForm] = useState({ name: "", email: "", resume: "" });

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Apply for {job.title}</h2>
        <input type="text" placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="text" placeholder="Resume Link"
          onChange={(e) => setForm({ ...form, resume: e.target.value })} />
        <button className="apply-btn">Submit</button>
        <button className="close-btn" onClick={() => setSelectedJob(null)}>Close</button>
      </div>
    </div>
  );
}

export default ApplyModal;