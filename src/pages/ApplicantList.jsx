import React, { useEffect, useState } from "react";
import ApplicantService from "../services/applicantService";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";

let isLoaded = false;

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "nationalId", headerName: "National ID", width: 130 },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    valueGetter: (params) => params.row.user.email,
  },
];

const ApplicantList = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    let applicantService = new ApplicantService();
    applicantService
      .getApplicants()
      .then((result) => setApplicants(result.data.data), (isLoaded = true));
  }, []);

  return (
    <div style={{ height: "631px", width: "100%" }}>
      {isLoaded ? (
        <DataGrid
          rows={applicants}
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

export default ApplicantList;
