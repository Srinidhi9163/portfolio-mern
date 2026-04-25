import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="section text-center">
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
        Hi, I'm Srinidhi 👩‍💻
      </h1>

      <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
        MERN Stack Developer | Passionate about building real-world applications
      </p>

      <div className="mt-4">
        <button
          className="btn btn-info mx-2"
          onClick={() => navigate("/projects")}
        >
          View Projects
        </button>

        <button
          className="btn btn-outline-light mx-2"
          onClick={() => navigate("/contact")}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}
function About() {
  return (
    <div className="container section">

      <div className="card-custom p-4">

        <div className="row align-items-center">

          {/* IMAGE */}
          <div className="col-md-4 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
              style={{
                width: "160px",
                borderRadius: "50%",
                border: "3px solid #38bdf8",
                boxShadow: "0 0 20px #38bdf8"
              }}
            />
          </div>

          {/* CONTENT */}
          <div className="col-md-8">

            <h2 style={{ color: "#38bdf8", fontWeight: "bold" }}>
              About Me
            </h2>

            <p>
              Hi 👋 I’m <strong>Srinidhi</strong>, a passionate Information Technology  student
              who loves building modern web applications and solving real-world problems.
            </p>

            <p>
              I specialize in <strong>MERN Stack Development</strong> and enjoy creating
              responsive, user-friendly applications with clean UI and efficient backend systems.
            </p>

            <p>
              My major project <strong>"Gesture Controlled Virtual Mouse"</strong> uses
              computer vision to control system operations using hand gestures — making
              interaction more natural and futuristic.
            </p>

            {/* INFO BOXES */}
            <div className="row mt-4">

              <div className="col-6 mb-3">
                <div className="p-3 bg-dark rounded text-center">
                  <h5>4+</h5>
                  <p>Projects</p>
                </div>
              </div>

              <div className="col-6 mb-3">
                <div className="p-3 bg-dark rounded text-center">
                  <h5>MERN</h5>
                  <p>Stack</p>
                </div>
              </div>

              <div className="col-6 mb-3">
                <div className="p-3 bg-dark rounded text-center">
                  <h5>Strong</h5>
                  <p>Problem Solving</p>
                </div>
              </div>

              <div className="col-6 mb-3">
                <div className="p-3 bg-dark rounded text-center">
                  <h5>Fast</h5>
                  <p>Learner</p>
                </div>
              </div>

            </div>

            {/* SKILLS */}
            <div className="mt-3">
              <span className="badge bg-info m-1">React</span>
              <span className="badge bg-success m-1">Node.js</span>
              <span className="badge bg-warning text-dark m-1">MongoDB</span>
              <span className="badge bg-primary m-1">Java</span>
              <span className="badge bg-danger m-1">Python</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/skills")
      .then(res => setSkills(res.data))
      .catch(err => console.log(err));
  }, []);

  const courses = [
    "Full Stack Web Development (MERN)",
    "Data Structures & Algorithms",
    "Java Programming",
    "Python Programming",
    "Database Management Systems",
    "Computer Networks"
  ];

  return (
    <div className="container section">

      {/* Title */}
      <h1 className="text-center mb-5">My Skills</h1>

      {/* Technical Skills */}
      <h3>Technical Skills</h3>
      {skills.map((skill, index) => (
        <div key={index} className="mb-3">
          <h5>{skill.name}</h5>

          <div className="progress">
            <div
              className="progress-bar bg-info"
              style={{ width: `${skill.level}%` }}
            >
              {skill.level}%
            </div>
          </div>
        </div>
      ))}

      {/* Programming Languages */}
      <div className="mt-5">
        <h3>Programming Languages</h3>
        <div className="d-flex flex-wrap gap-3 mt-3">
          <span className="badge bg-primary p-2">Java</span>
          <span className="badge bg-success p-2">Python</span>
          <span className="badge bg-warning p-2 text-dark">JavaScript</span>
          <span className="badge bg-danger p-2">C++</span>
        </div>
      </div>

      {/* Tools */}
      <div className="mt-5">
        <h3>Tools & Technologies</h3>
        <div className="d-flex flex-wrap gap-3 mt-3">
          <span className="badge bg-secondary p-2">Git</span>
          <span className="badge bg-dark p-2">GitHub</span>
          <span className="badge bg-info p-2">MongoDB</span>
          <span className="badge bg-primary p-2">VS Code</span>
        </div>
      </div>

      {/* Courses */}
      <div className="mt-5">
        <h3>Courses & Learning</h3>
        <ul className="list-group mt-3">
          {courses.map((course, index) => (
            <li key={index} className="list-group-item">
              {course}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
function Projects() {
  const projects = [
    {
      title: "Gesture Controlled Virtual Mouse",
      description:
        "A system that enables users to control mouse operations using hand gestures captured through a webcam using computer vision techniques.",
      tech: "Python, OpenCV"
    },
    {
      title: "Smart Hospital Management System",
      description:
        "Developed a system to manage hospital operations including patient records, doctor scheduling, and appointment handling efficiently.",
      tech: "MERN Stack"
    },
    {
      title: "Civic Reporting System",
      description:
        "A web platform where citizens can report local issues like road damage, garbage, and infrastructure problems to authorities.",
      tech: "React, Node.js, MongoDB"
    },
    {
      title: "Emergency Dispatch System",
      description:
        "Designed a system to manage and dispatch emergency services like ambulance, police, and fire services efficiently.",
      tech: "Java / Web Technologies"
    }
  ];

  return (
    <div className="container section">
      <h1 className="text-center mb-4">My Projects</h1>

      <div className="row">
        {projects.map((p, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card-custom">
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              <p><strong>Tech:</strong> {p.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://127.0.0.1:5000/api/contact", form)
      .then(() => {
        alert("Message Sent Successfully ✅");
        setForm({ name: "", email: "", mobile: "", message: "" });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container section">
      <div className="row">

        {/* LEFT SIDE - INFO */}
        <div className="col-md-5 mb-4">
          <div className="card-custom p-4">
            <h3 style={{ color: "#38bdf8" }}>Contact Info</h3>

            <p className="mt-3">📧 Email: srinidhi@email.com</p>
            <p>📱 Phone: 7989804793</p>
            <p>📍 Location: India</p>

            <p className="mt-4">
              Feel free to reach out for collaborations, projects, or opportunities!
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="col-md-7">
          <div className="card-custom p-4">

            <h3 className="mb-4">Send Message</h3>

            <form onSubmit={handleSubmit}>

              <input
                className="form-control mb-3"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                className="form-control mb-3"
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                className="form-control mb-3"
                name="mobile"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={handleChange}
                required
              />

              <textarea
                className="form-control mb-3"
                rows="4"
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              />

              <button className="btn btn-info w-100">
                Send Message
              </button>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
}
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
            <Footer />
    </Router>
  );
}

export default App;