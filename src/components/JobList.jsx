import React from "react";
import JobCard from "./JobCard";

const jobs = [
  { id: 1, title: "Frontend Developer", location: "Bangalore", salary: "₹8 LPA", skills: "React, JavaScript", category: "Frontend", description: "Build modern UIs with React." },
  { id: 2, title: "Backend Developer", location: "Hyderabad", salary: "₹10 LPA", skills: "Node.js, Express", category: "Backend", description: "Develop scalable APIs." },
  { id: 3, title: "UI/UX Designer", location: "Delhi", salary: "₹6 LPA", skills: "Figma, Photoshop", category: "Design", description: "Design user-friendly interfaces." },
  { id: 4, title: "Fullstack Developer", location: "Remote", salary: "₹12 LPA", skills: "React, Node.js", category: "Fullstack", description: "Work on both frontend & backend." },
  { id: 5, title: "DevOps Engineer", location: "Bangalore", salary: "₹11 LPA", skills: "AWS, Docker", category: "Backend", description: "Automate and deploy systems." },
  { id: 6, title: "Mobile Developer", location: "Hyderabad", salary: "₹9 LPA", skills: "React Native, Flutter", category: "Frontend", description: "Build cross-platform mobile apps." },
  { id: 7, title: "Data Scientist", location: "Delhi", salary: "₹15 LPA", skills: "Python, ML, AI", category: "Backend", description: "Analyze data and build ML models." },
  { id: 8, title: "QA Engineer", location: "Remote", salary: "₹7 LPA", skills: "Selenium, Jest", category: "Backend", description: "Test software for quality." },
  { id: 9, title: "Cloud Engineer", location: "Bangalore", salary: "₹13 LPA", skills: "Azure, AWS", category: "Backend", description: "Manage cloud infrastructure." },
  { id: 10, title: "System Analyst", location: "Hyderabad", salary: "₹8 LPA", skills: "SQL, UML", category: "Backend", description: "Analyze business systems." },
  { id: 11, title: "AI Engineer", location: "Remote", salary: "₹18 LPA", skills: "TensorFlow, PyTorch", category: "Backend", description: "Develop AI-based applications." },
  { id: 12, title: "Cybersecurity Analyst", location: "Delhi", salary: "₹12 LPA", skills: "Networking, Security", category: "Backend", description: "Secure systems from threats." },
  { id: 13, title: "Graphic Designer", location: "Remote", salary: "₹5 LPA", skills: "Illustrator, Photoshop", category: "Design", description: "Create visuals and graphics." },
  { id: 14, title: "Content Writer", location: "Hyderabad", salary: "₹4 LPA", skills: "English, SEO", category: "Design", description: "Write blogs and marketing content." },
  { id: 15, title: "Project Manager", location: "Bangalore", salary: "₹14 LPA", skills: "Agile, Scrum", category: "Backend", description: "Manage software projects." },
];

function JobList({ search, filter }) {
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase());
    const matchesLocation = filter.location ? job.location === filter.location : true;
    const matchesCategory = filter.category ? job.category === filter.category : true;
    return matchesSearch && matchesLocation && matchesCategory;
  });

  return (
    <div className="job-list">
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
}

export default JobList;

