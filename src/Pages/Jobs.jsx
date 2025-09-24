import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import JobList from "../components/JobList";

function Jobs({ setSelectedJob }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ location: "", category: "" });

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">Available Jobs</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <Filters filter={filter} setFilter={setFilter} />
      <JobList search={search} filter={filter} setSelectedJob={setSelectedJob} />
    </div>
  );
}

export default Jobs;
