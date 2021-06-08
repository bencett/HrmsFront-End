import React from "react";
import { Header, Image, Table } from 'semantic-ui-react';

export default function CandidateList() {
  return (
    <div>
      <Table celled collapsing>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell>Profil</Table.HeaderCell>
            <Table.HeaderCell>Ad Soyad</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Telefon</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Image
                  src="/images/avatar/small/lena.png"
                  rounded
                  size="mini"
                />
              </Header>
            </Table.Cell>
            <Table.Cell>22</Table.Cell>
            <Table.Cell>22</Table.Cell>
            <Table.Cell>22</Table.Cell>
            <Table.Cell>22</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
