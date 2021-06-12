import React from "react";
import { Grid } from "semantic-ui-react";
import Sidebar from "./Sidebar";
import Section from "./Section";
import Header from "./Header";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4} style={{ marginTop: "75px" }}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={10} style={{ marginLeft: "100px" }}>
            <Section />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
