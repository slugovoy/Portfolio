import React from "react";
//  Footer component
function Footer() {
  return (
    <footer className="footer text-center fixed-bottom">
      <div
        className="footerText text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color: '#fff'  }}
      >
        © 2020 Copyright: Sergey Lugovoy
      </div>
    </footer>
  );
}

export default Footer;
