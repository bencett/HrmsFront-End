import React from "react";
import { Route } from "react-router";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import CandidateList from "../pages/CandidateList";
import EmployerList from "../pages/EmployerList";
import JobAdvertDetail from "../pages/JobAdvertDetail";
import JobAdvertList from "../pages/JobAdvertList";
import ResumeList from "../pages/ResumeList";

export default function Section() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn>
            <Route exact path="/homepage" component={JobAdvertList} />
            <Route exact path="/candidates" component={CandidateList} />
            <Route exact path="/employers" component={EmployerList} />
            <Route exact path="/jobAdverts" component={JobAdvertList} />
            <Route exact path="/jobAdverts/:id" component={JobAdvertDetail} />
            <Route exact path="/resumes" component={ResumeList} />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
