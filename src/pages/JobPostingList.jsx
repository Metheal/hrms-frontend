import React, { useEffect, useState } from "react";
import JobPostingService from "../services/jobPostingService";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";

let isLoaded = false;

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "minSalary", headerName: "minSalary", width: 130 },
  { field: "maxSalary", headerName: "maxSalary", width: 130 },
  { field: "releaseDate", headerName: "releaseDate", width: 130 },
  { field: "deadLine", headerName: "deadLine", width: 130 },
  {
    field: "jobTitle",
    headerName: "jobTitle",
    width: 130,
    valueGetter: (params) => params.row.jobTitle.name,
  },
  {
    field: "city",
    headerName: "city",
    width: 130,
    valueGetter: (params) => params.row.city.name,
  },
];

const JobPostingList = () => {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getJobPostings()
      .then((result) => setJobPostings(result.data.data), (isLoaded = true));
  }, []);

  return (
    <div style={{ height: "631px", width: "100%" }}>
      {isLoaded ? (
        <DataGrid
          rows={jobPostings}
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
      ) : (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={5}>
          <i>Loading...</i>
          <LinearProgress color="info" />
        </Stack>
      )}
    </div>
  );
};

export default JobPostingList;
