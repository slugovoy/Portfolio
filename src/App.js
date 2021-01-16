import React, { useState, useEffect } from "react";
function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    // NOTE: Use your username below
    fetch('https://gitconnected.com/v1/portfolio/slugovoy')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);

  if (!user) {
    return <div />;
  }
  console.log(user)
  return (
    <div className="App">
    <h1>Hello World!</h1>
    </div>
  );
}

export default App;
