import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class AdminHeader extends React.Component {
  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "50px",
            backgroundImage:
              "url(" + require("assets/img/theme/profile.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
        </div>
      </>
    );
  }
}

export default AdminHeader;
