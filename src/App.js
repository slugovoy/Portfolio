import React, { useState, useEffect } from "react";
import Main from "./pages/Main";
// Renders main component
function App() {

  // API call to get informayion in json format
  const [user, setUser] = useState(null);
  useEffect(() => {
    // NOTE: Use your username below
    fetch("https://gitconnected.com/v1/portfolio/slugovoy")
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
      });
  }, []);
//  If no json - render empty div
  if (!user) {
    return <div />;
  }
  return (
    <div  className="topDiv">
      <Main user={user} />
    </div>
  );
}

export default App;
