import React, { useEffect, useState } from "react";
import ApplicantService from "../services/applicantService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import moment from "moment";
import Grid from "@mui/material/Grid";
import ResumeList from "./ResumeList";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";

let imageUrlStrip = (url) => url.split("/").pop().split(".")[0];

let isLoaded = false;

const ApplicantSingle = () => {
  const [applicant, setApplicant] = useState([]);

  useEffect(() => {
    let applicantService = new ApplicantService();
    applicantService
      .getApplicant(30)
      .then((result) => setApplicant(result.data.data), (isLoaded = true));
  }, []);

  return (
    <div className="container">
      {isLoaded ? (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TableContainer component={Paper}>
              <div className="img">
                {applicant.profilePicture.url === undefined ? (
                  <img alt="No img found"></img>
                ) : (
                  <CloudinaryContext cloudName="metheal">
                    <Image
                      publicId={imageUrlStrip(applicant.profilePicture?.url)}
                    >
                      <Transformation
                        height="250"
                        width="250"
                        crop="pad"
                        dpr="auto"
                        radius="max"
                        responsive_placeholder="blank"
                      />
                    </Image>
                  </CloudinaryContext>
                )}
              </div>
            </TableContainer>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell variant="head">
                      <strong>#</strong>
                    </TableCell>
                    <TableCell>{applicant.id}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell variant="head">
                      <strong>First Name</strong>
                    </TableCell>
                    <TableCell>{applicant.firstName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell variant="head">
                      <strong>Last Name</strong>
                    </TableCell>
                    <TableCell>{applicant.lastName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell variant="head">
                      <strong>National ID</strong>
                    </TableCell>
                    <TableCell>{applicant.nationalId}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell variant="head">
                      <strong>Email Address</strong>
                    </TableCell>
                    <TableCell>
                      <a href={"mailto:" + applicant.user?.email}>
                        {applicant.user?.email}
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell variant="head">
                      <strong>Age</strong>
                    </TableCell>
                    <TableCell>
                      {moment(applicant.dateOfBirth).fromNow().split(" ")[0]}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={8}>
            <ResumeList />
          </Grid>
        </Grid>
      ) : (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={5}>
          <i>Loading...</i>
          <LinearProgress color="info" />
        </Stack>
      )}
    </div>
  );
};

export default ApplicantSingle;
