import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import "./hostRegister.css";
import "../components/regFormComponents/imgSubmit.css";
import Navbar from "../components/Navbar";
import RegistrationFooter from "../components/RegistrationFooter";
import ortho from "../photos/ortho.png";
import Round2_Page1 from "../components/regFormComponents/Round2_Page1";
import Round2_Page2 from "../components/regFormComponents/Round2_Page2";
import Round2_Page3 from "../components/regFormComponents/Round2_Page3";
import Round2_Page4 from "../components/regFormComponents/Round2_Page4";
import APIHostApp from "../api/APIHostApp";
import APIUser from "../api/APIUser";

class HostRegister_Round2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {hostId: null, dateRange: null, files: []},
      counter: 1,
      progress: 25,
    };

    this.handleDateRange = this.handleDateRange.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let user = APIUser.getCurrentUser();
    this.setState(prevState => {
      return {
        data: {
          ...prevState.data,
          hostId: user.hostId
        }
      }
    });
  }

  goNext = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1,
        progress: prevState.progress + 25,
        goNext: false
      }
    }, this.handleSubmit);
  }
  goPrev = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1,
        progress: prevState.progress - 25,
        goPrev: false
      }
    }, this.handleSubmit);
  }

  handleDateRange(dateRange) {
    this.setState(prevState => {
        return {
          data: {
            ...prevState.data,
            dateRange: dateRange
          }
        }
    }, () => {
      console.log(this.state.data);
    });
  }

  handleFileUpload(file, index) {
    this.setState(prevState => {
        prevState.data.files[index] = file;
        return {
          data: {
            ...prevState.data,
          }
        }
    }, () => {
      console.log(this.state.data);
    });
  }

  handleSubmit() {
    if (this.state.counter == 4) {
      console.log("Submit API called");

      let data = this.state.data;
      console.log(data);

      data.hostId = 'test123'; // overwrite hostId for testing

      APIHostApp.submitAppRound2(data);
    }
  }

  handlePageRender(counter) {
    switch(counter) {
      case 1:
        return <Round2_Page1 handleDateRange={this.handleDateRange} goNext={this.goNext} goPrev={this.goPrev} data={this.state.data} />;
        break;
      case 2:
        return <Round2_Page2 handleFileUpload={this.handleFileUpload} goNext={this.goNext} goPrev={this.goPrev} data={this.state.data} />;
        break;
      case 3:
        return <Round2_Page3 handleFileUpload={this.handleFileUpload} goNext={this.goNext} goPrev={this.goPrev} data={this.state.data} />;
        break;
      case 4:
        return <Round2_Page4 goNext={this.goNext} goPrev={this.goPrev} data={this.state.data} />;
        break;
    }
  }

  render() {
    return (
      <div className="container-fluid app">

        <Helmet>
            <title>Apply to be a host | YoloShadow</title>
        </Helmet>

        <div className="nav pb-5">
          <Navbar textColor={"black"} />
        </div>

        <div className="container pt-5 mt-5 mb-5">
          <div className="top row">
            <div className="col-md-4">
              <img
                src={ortho}
                alt="photo of orthodontist"
                className="chefimage"
              />
            </div>
            <div className="col apply ml-5">
              <p>Apply To Be A Host</p>
            </div>
          </div>
        </div>

        <div className="main container">
          {/*Progress Bar*/}

          <div onSubmit={this.handleSubmit}>
            <div className="row mt-5">
              <div className="col-sm-2" style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"140%","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"#F61067"}}>
                <p>PROGRESS</p>
              </div>

              <div className="col-sm-10 progress" style={{ height: "2px" }}>
                <div
                  className={"progress-bar  w-" + this.state.progress}
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            {/*Components go here: replace with components */}

            <div className="insert">
              {this.handlePageRender(this.state.counter)}
            </div>
          </div>
        </div>

        <div className="footerpages">
          <RegistrationFooter />
        </div>
      </div>
    );
  }
}

export default HostRegister_Round2;
