import { Routes, Route } from "react-router-dom";
import "./App.css";
// Pages
import Tasks from "./pages/Tasks/Tasks";
import Calendar from "./pages/Calendar/Calendar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Tasks />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}

export default App;
