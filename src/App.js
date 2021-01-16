import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // NOTE: Use your username below
    fetch("https://gitconnected.com/v1/portfolio/slugovoy")
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
      });
  }, []);

  if (!user) {
    return <div />;
  }
  console.log(user);
  return (
    <div  className="topDiv">
      <Main user={user} />
    </div>
  );
}

export default App;
