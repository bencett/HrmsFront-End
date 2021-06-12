import React, { useEffect, useState } from "react";
import ResumeService from "../services/resumeService";
import { Table } from "semantic-ui-react";

export default function ResumeList() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    let resumeService = new ResumeService();
    resumeService.getResumes().then((result) => setResumes(result.data.data));
  }, []);

  return (
    <div>
      <Table celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Github</Table.HeaderCell>
            <Table.HeaderCell>LinkedIn</Table.HeaderCell>
            <Table.HeaderCell>Teknolojiler</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {resumes.map((resume) => (
            <Table.Row key={resume.id}>
              <Table.Cell>{resume.coverLetter}</Table.Cell>
              <Table.Cell>{resume.githubLink}</Table.Cell>
              <Table.Cell>{resume.linkedInLink}</Table.Cell>
              <Table.Cell>{resume.technologies.description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
