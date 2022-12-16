import React from "react";
import JobPostingList from "../pages/JobPostingList";
import Navi from "./Navi";
import { Container } from "@mui/system";
import ApplicantList from "../pages/ApplicantList";
import ApplicantSingle from "../pages/ApplicantSingle";
import Grid from "@mui/material/Grid";
import JobTitleList from "../pages/JobTitleList";
import UserList from "../pages/UserList";
import ResumeSingle from "../pages/ResumeSingle";
import CityList from "../pages/CityList";

export default function Dashboard() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Navi />
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <JobPostingList />
                </Grid>
                <Grid item xs={3}>
                  <JobTitleList />
                </Grid>
                <Grid item xs={3}>
                  {" "}
                  <CityList />
                </Grid>
              </Grid>

              <ResumeSingle />
            </Grid>
            <Grid item xs={12}>
              <ApplicantList />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
