import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import TicketCreation from "./component/TicketCreation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ticket-creation" element={<TicketCreation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
