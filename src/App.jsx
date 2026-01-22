import "./App.css";
import Header from "./componentsMain/Header";
import FirstDiv from "./componentsMain/FirstDiv";
import Features from "./componentsMain/Features";
import Func from "./componentsMain/func";
import Users from "./componentsMain/users";
import Footer from "./componentsMain/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./ComponentsSignIn/SignIn";
import SignUp from "./ComponentsSignIn/Signup";
import NameTable from "./componentsTable/NameTable";
import Board from "./componentsBoard/Board";

function Home() {
  return (
    <div className="main-page">
      <Header />
      <FirstDiv />
      <Features />
      <Func />
      <Users />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/nametable" element={<NameTable />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
