import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Welcome } from "./Welcome";
import { Budget } from "./Budget";

export const Routing = () => (
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} /> 
        <Route path="/Budget/" element={<Budget />} /> 
      </Routes>
    </BrowserRouter>
  );
  
