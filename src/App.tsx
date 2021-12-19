import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationCenter from "./components/RegistrationCenter";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/regForm" element={<RegistrationForm />} />
          <Route path="/regCenter" element={<RegistrationCenter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
