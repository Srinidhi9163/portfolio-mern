import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="d-flex justify-content-between align-items-center px-4 py-3"
         style={{ background: "#020617" }}>

      <h4 style={{ color: "#38bdf8", fontWeight: "bold" }}>
        Srinidhi
      </h4>

      <div>
        <NavLink className="mx-3 text-white" to="/">Home</NavLink>
        <NavLink className="mx-3 text-white" to="/about">About</NavLink>
        <NavLink className="mx-3 text-white" to="/skills">Skills</NavLink>
        <NavLink className="mx-3 text-white" to="/projects">Projects</NavLink>
        <NavLink className="mx-3 text-white" to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;