import React from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu inverted>
            <Container>
            
        <Menu.Item name='Anasayfa'/>
        <Menu.Item name='İş İlanları'/>
        <Menu.Item name='İşverenler'/>
        <Menu.Item name='İş arayanlar'/>

        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
            <Button secondary>Login</Button>
          </Menu.Item>
        </Menu.Menu>
            </Container>
            </Menu>
            
        </div>
    )
}
