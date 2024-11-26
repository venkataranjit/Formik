import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import NavBar from "./NavBar";
import Home from "./Home";
import BasicForm from "./BasicForm";
import Form2 from "./Form2";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basicForm" element={<BasicForm />} />
          <Route path="/form2" element={<Form2 />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
