// Library imports
import { FC } from "react";
import { Routes, Route } from "react-router-dom";

// Local imports
import { Home, CreateAccount, LogIn } from "./components";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <a href="https://wajid.me/" target="_blank" className="watermark">
        &copy; 2023 - Abdul Wajid
      </a>
    </>
  );
};

export default App;
