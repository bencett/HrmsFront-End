import React, { useState } from "react";
import { Container, Menu, Button } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { NavLink, useHistory } from "react-router-dom";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();

  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/homepage");
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted color="violet">
        <Container>
          <Menu.Item>
            <Button color="violet" as={NavLink} to="/homepage">
              Anasayfa
            </Button>
            <Button color="violet" style={{marginLeft:'0.3em'}} as={NavLink} to="/jobAdverts">
              İş İlanları
            </Button>
            <Button color="violet" style={{marginLeft:'0.3em'}} as={NavLink} to="/employers">
              İşverenler
            </Button>
            <Button color="violet" style={{marginLeft:'0.3em'}} as={NavLink} to="/candidates">
              İş Arayanlar
            </Button>
          </Menu.Item>
          
          {/* <Menu.Item name="Anasayfa" as={NavLink} to="/homepage" />
          <Menu.Item name="İş İlanları" as={NavLink} to="/jobAdverts" />
          <Menu.Item name="İşverenler" as={NavLink} to="/employers" />
          <Menu.Item name="İş arayanlar" as={NavLink} to="/candidates" /> */}

          <Menu.Menu position="right">
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
