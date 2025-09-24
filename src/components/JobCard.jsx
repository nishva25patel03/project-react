import React from "react";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p><b>Location:</b> {job.location}</p>
      <p><b>Salary:</b> {job.salary}</p>
      <p><b>Skills:</b> {job.skills}</p>
      <p>{job.description}</p>
    </div>
  );
}

export default JobCard;

