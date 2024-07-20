import { Routes, Route } from "react-router-dom";
import "./App.css";
// Pages
import Tasks from "./pages/Tasks/Tasks";
import AddTask from "./pages/AddTask/AddTask";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Tasks />} />
      <Route path="/add" element={<AddTask />} />
    </Routes>
  );
}

export default App;
