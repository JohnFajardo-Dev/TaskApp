// CSS
import "./App.css";
// Librarys
import { Routes, Route } from "react-router-dom";
// Pages
import Tasks from "./pages/Tasks/Tasks";
import AddTask from "./pages/AddTask/AddTask";
// Modules
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
