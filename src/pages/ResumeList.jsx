import React, { useEffect, useState } from "react";
import ResumeService from "../services/resumeService";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "coverLetter", headerName: "coverLetter", width: 130 },
  { field: "linkedinId", headerName: "linkedinId", width: 130 },
  { field: "githubId", headerName: "githubId", width: 130 },
];

const ResumeList = () => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    let resumeService = new ResumeService();
    resumeService
      .getResumesByApplicantId(28)
      .then((result) => setResumes(result.data.data));
  }, []);

  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <DataGrid
        rows={resumes}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        isRowSelectable={() => false}
        initialState={{
          sorting: {
            sortModel: [{ field: "id", sort: "asc" }],
          },
        }}
      />
    </div>
  );
};

export default ResumeList;
