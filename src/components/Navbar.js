/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import logoWhite from "../photos/Logo_white.png";
import logoColored from "../photos/Logo_colored.png";
import { BrowserRouter as Router } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    const styles = {
      color: "",

    };
    const styleLi = {
      marginLeft:'15%',
      marginRight:'15%'

    };
    const styles2 = {
      color: "",
      whiteSpace:"pre"

    };
    let classVal=""
    let logoValue=[]
    if (this.props.textColor === "black") {
      styles.color = "black";
      styles2.color = "black";
      classVal="navbar navbar-expand-lg navbar-light bg-transparent "
      logoValue.push(<img src={logoColored} />)
    } else {
      styles.color = "white";
      styles2.color = "white";
      classVal="navbar navbar-expand-lg navbar-dark bg-transparent "
      logoValue.push(<img src={logoWhite} />)
    }
    return (
      <div className={classVal} style={{position:'', background:''}}>
        <a className="navbar-brand" href="/" style={{ color: "#F2C94C" }}>
          {logoValue}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active" style={styleLi}>
              <a className="nav-link" style={styles} href="/explore">
                Explore <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active"  style={styleLi}>
              <a className="nav-link" style={styles} href="story">
                Story
              </a>
            </li>
            {/*   <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Dropdown
           </a>
           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
             <a className="dropdown-item" href="#">Action</a>
             <a className="dropdown-item" href="#">Another action</a>
             <div className="dropdown-divider"></div>
             <a className="dropdown-item" href="#">Something else here</a>
           </div>
         </li> */}
            <li className="nav-item active"  style={styleLi}>
              <a className="nav-link " style={styles2} href="hostexperience">
                Host an Experience
              </a>
            </li>
            <li className="nav-item active"  style={styleLi}>
              <a className="nav-link " style={styles} href="about">
                About
              </a>
            </li>
            <li className="nav-item active"  style={styleLi}>
              <a className="nav-link " style={styles2} href="#footerOfEachPage">
                Contact Us
              </a>
            </li>
          </ul>
          {/*} <div className="form-inline my-2 my-lg-0">
         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
       </div>*/}
        </div>
      </div>
    );
  }
}

export default Navbar;
