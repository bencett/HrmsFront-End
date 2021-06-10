import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";

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
      <Table celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Konum</Table.HeaderCell>
            <Table.HeaderCell>Minimum Ücret</Table.HeaderCell>
            <Table.HeaderCell>Maksimum Ücret</Table.HeaderCell>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>İletişim</Table.HeaderCell>
            <Table.HeaderCell>İlan Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {jobAdverts.map((jobAdvert) => (
            <Table.Row key={jobAdvert.id}>
              <Table.Cell>{jobAdvert.jobPosition.title}</Table.Cell>
              <Table.Cell>{jobAdvert.jobDetail}</Table.Cell>
              <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
              <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
              <Table.Cell>{jobAdvert.minWage}</Table.Cell>
              <Table.Cell>{jobAdvert.maxWage}</Table.Cell>
              <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvert.employer.email}</Table.Cell>
              <Table.Cell>{jobAdvert.releaseDate}</Table.Cell>
              <Table.Cell>{jobAdvert.applicationDeadline}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
