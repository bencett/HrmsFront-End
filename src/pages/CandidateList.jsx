import React, { useState, useEffect } from "react";
import { Header, Image, Table } from "semantic-ui-react";
import CandidateService from "../services/candidateService";

export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(()=>{
    let candidateService = new CandidateService()
    candidateService.getCandidates().then(result=>setCandidates(result.data.data))
  },[])
  return (
    <div>
      <Table celled collapsing align="right">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Profil</Table.HeaderCell>
            <Table.HeaderCell>Ad</Table.HeaderCell>
            <Table.HeaderCell>Soyad</Table.HeaderCell>
            <Table.HeaderCell>Tc No</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {candidates.map((candidate) => (
            <Table.Row key={candidate.id}>
              <Table.Cell>
                <Header as="h4" image>
                  <Image
                    src="/images/avatar/small/lena.png"
                    rounded
                    size="mini"
                  />
                </Header>
              </Table.Cell>
              <Table.Cell>{candidate.firstName}</Table.Cell>
              <Table.Cell>{candidate.lastName}</Table.Cell>
              <Table.Cell>{candidate.nationalIdentity}</Table.Cell>
              <Table.Cell>{candidate.email}</Table.Cell>
              <Table.Cell>{candidate.dateOfBirth}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
