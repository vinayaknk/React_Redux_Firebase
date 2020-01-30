import React from "react";
// import moment from "moment";

function ProjectSummary({ project }) {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>
          Posted By {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">{project.createdAt.toDate().toDateString()}</p>
      </div>
    </div>
  );
}

export default ProjectSummary;
