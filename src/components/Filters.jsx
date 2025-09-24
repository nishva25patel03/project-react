import React from "react";

function Filters({ filter, setFilter }) {
  return (
    <div className="filters">
      <select
        value={filter.location}
        onChange={(e) => setFilter({ ...filter, location: e.target.value })}
      >
        <option value="">All Locations</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Delhi">Delhi</option>
        <option value="Remote">Remote</option>
      </select>

      <select
        value={filter.category}
        onChange={(e) => setFilter({ ...filter, category: e.target.value })}
      >
        <option value="">All Categories</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Design">Design</option>
        <option value="Fullstack">Fullstack</option>
      </select>
    </div>
  );
}

export default Filters;
