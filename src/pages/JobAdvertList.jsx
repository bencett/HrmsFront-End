import React, { useEffect, useState } from "react";
import { Card, Button, Pagination } from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";
import { Link } from "react-router-dom";

export default function JobAdvertList() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getActiveAdverts()
      .then((result) => setJobAdverts(result.data.data));
  }, []);

  return (
    <div>
      {jobAdverts.map((jobAdvert) => (
        <Card fluid style={{ marginTop: "2em" }}>
          <Card.Content>
            <Card.Header>
              <Link to={`/jobAdverts/${jobAdvert.id}`}>
                {jobAdvert.jobPosition.title}
              </Link>
            </Card.Header>
            <Card.Meta>{jobAdvert.city?.cityName}</Card.Meta>
            <Card.Description>{jobAdvert.jobDetail}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Başvur
              </Button>
              <Button basic color="blue">
                Favorilere Ekle
              </Button>
            </div>
          </Card.Content>
        </Card>
      ))}
      <Pagination
        defaultActivePage={1}
        firstItem={null}
        lastItem={null}
        pointing
        secondary
        totalPages={3}
      />
    </div>
  );
}
