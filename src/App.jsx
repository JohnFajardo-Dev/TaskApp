import { Routes, Route } from "react-router-dom";
import "./App.css";
// Pages
import Tasks from "./pages/Tasks/Tasks";
import AddTask from "./pages/AddTask/AddTask";
import NavBar from "./modules/NavBar/NavBar";
function App() {
  return (
    <main>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/add" element={<AddTask />} />
      </Routes>
    </main>
  );
}

export default App;
