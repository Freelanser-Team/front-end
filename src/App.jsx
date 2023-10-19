import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Header,
  Footer,
  Home,
  Login,
  Register,
  Testpage,
  QuraanDay,
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Testpage" element={<Testpage />}></Route>
        <Route path="/QuraanDay" element={<QuraanDay />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
