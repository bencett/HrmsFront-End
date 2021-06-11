import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from 'semantic-ui-react'
import JobAdvertService from "../services/jobAdvertService";

export default function JobAdvertDetail() {
  let { id } = useParams();

  const [jobAdvert, setJobAdvert] = useState({});

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getById(id)
      .then(result => setJobAdvert(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>{jobAdvert.jobPosition?.title}</Card.Header>
            <Card.Meta>{jobAdvert.city?.cityName}</Card.Meta>
            <Card.Description>
              {jobAdvert.jobDetail}
            </Card.Description>
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
      </Card.Group>
    </div>
  );
}
