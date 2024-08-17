import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedInMenu({
  setAuth,
}: {
  setAuth: (value: boolean) => void;
}) {
  const navigate = useNavigate();

  function handleSignOut() {
    setAuth(false);
    navigate("/");
  }

  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/user.png" />
      <Dropdown pointing="top left" text="John Doe">
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item
            text="Sign Out"
            icon="power"
            onClick={() => handleSignOut()}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
