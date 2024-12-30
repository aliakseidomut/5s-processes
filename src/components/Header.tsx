import { NavLink } from "react-router";

export default function Header() {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/tasks"}>Tasks</NavLink>
      <NavLink to={"/contacts"}>Contacts</NavLink>
    </div>
  );
}
