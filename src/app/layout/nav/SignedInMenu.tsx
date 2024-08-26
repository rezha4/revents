import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { useAppSelector } from "../../store/store";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function SignedInMenu() {
  const { currentUser } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  async function handleSignOut() {
    await signOut(auth);
    navigate("/");
  }

  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={currentUser?.photoUrl || "/user.png"} />
      <Dropdown pointing="top left" text={currentUser?.displayName as string}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item as={Link} to="/account" text="My Account" icon="settings" />
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
