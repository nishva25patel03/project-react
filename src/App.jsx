import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import JobList from "./components/JobList";

function App() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ location: "", category: "" });

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/jobs"
            element={
              <div className="page">
                <h1 className="page-title">Available Jobs</h1>
                <SearchBar search={search} setSearch={setSearch} />
                <Filters filter={filter} setFilter={setFilter} />
                <JobList
                  search={search}
                  filter={filter}
                  setSelectedJob={setSelectedJob}
                />
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;




