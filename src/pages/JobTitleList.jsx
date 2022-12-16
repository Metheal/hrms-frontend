import React, { useEffect, useState } from "react";
import JobTitleService from "../services/jobTitleService";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";

let isLoaded = false;

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "name", width: 250 },
];

const JobTitleList = () => {
  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getJobTitles()
      .then((result) => setJobTitles(result.data.data), (isLoaded = true));
  }, []);

  return (
    <div style={{ height: "631px", width: "100%" }}>
      {isLoaded ? (
        <DataGrid
          rows={jobTitles}
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

export default JobTitleList;
