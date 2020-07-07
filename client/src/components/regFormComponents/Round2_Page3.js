import React from "react";

class Round2_Page3 extends React.Component {
  constructor(props) {
    super(props);

    if (props.data.files[1]) {
      this.state = {
        fileName: props.data.files[1].name
      };
    } else {
      this.state = {
        selectedFile: null,
        fileName: ""
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleFileUpload(event) {
    this.setState({
      selectedFile: event.target.files[0],
      fileName: event.target.files[0].name,
      //loaded: 0,
    }, () => {
      //console.log(event.target.files[0]);
      this.props.handleFileUpload(this.state.selectedFile, 1);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <div className="row mt-5 mb-4">
              <div className="col">
                <h3>
                  Snap some pictures of you at work!
                </h3>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col text-center">
                <label className="imgSubmit">
                  <input type="file" name="file_photoFromWork" accept="image/*" onChange={this.handleFileUpload} />
                  <div className="box">
                    <div className="hl"></div>
                    <div className="vl"></div>
                  </div>
                </label>
                <p>{this.state.fileName}</p>
              </div>
            </div>
            <div className="row mt-5 mb-4">
              <div className="col text-right">
                <input
                  className="btn nextBtn"
                  type="submit"
                  value="Previous Step"
                  onClick={this.props.goPrev}
                />
              </div>
              <div className="col text-left">
                <input
                  className="btn nextBtn"
                  type="submit"
                  value="Submit"
                  onClick={this.props.goNext}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Round2_Page3;
