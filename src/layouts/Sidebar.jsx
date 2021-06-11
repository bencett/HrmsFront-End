import React from "react";
import { Menu } from 'semantic-ui-react'

export default function Sidebar() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item name="İş ilanı" />
        <Menu.Item name="Şirket ismi" />
        <Menu.Item name="İş pozisyonu" />
      </Menu>
    </div>
  );
}