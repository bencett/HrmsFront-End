import React, { useState } from "react";
import { Container, Dropdown, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { NavLink, useHistory } from "react-router-dom";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();

  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item name="Anasayfa" as={NavLink} to="/" />
          <Menu.Item name="İş İlanları" as={NavLink} to="/jobAdverts" />
          <Menu.Item name="İşverenler" as={NavLink} to="/employers" />
          <Menu.Item name="İş arayanlar" as={NavLink} to="/candidates" />

          <Menu.Menu position="right">
            <Dropdown item text="Language"></Dropdown>
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
