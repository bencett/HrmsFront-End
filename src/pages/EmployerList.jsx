import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import EmployerService from "../services/employerService";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);
  return (
    <div>
      <Table celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Web Adresi</Table.HeaderCell>
            <Table.HeaderCell>Mail Adresi</Table.HeaderCell>
            <Table.HeaderCell>Telefon</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {employers.map((employer) => (
            <Table.Row key={employer.id}>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.webAdress}</Table.Cell>
              <Table.Cell>{employer.email}</Table.Cell>
              <Table.Cell>{employer.phoneNumber}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
