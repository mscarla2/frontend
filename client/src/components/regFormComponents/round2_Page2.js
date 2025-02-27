import React from "react";

class Round2_Page2 extends React.Component {
  constructor(props) {
    super(props);
    if (props.data.files[0]) {
      this.state = {
        fileName: props.data.files[0].name,
        selectedFile: props.data.files[0],
       workingImagePath: URL.createObjectURL(props.data.files[0])
      };
    } else {
      this.state = {
        selectedFile: null,
        fileName: "",
        workingImagePathL: null
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleFileUpload(event) {
    event.preventDefault();
    this.setState({
      selectedFile: event.target.files[0],
      fileName: event.target.files[0].name,
      workingImagePath: URL.createObjectURL(event.target.files[0])
      //loaded: 0,
    }, () => {
      //console.log(event.target.files[0]);
      this.props.handleFileUpload(this.state.selectedFile, 0);
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
                  Upload your government-issued ID or work ID.
                </h3>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col text-center">
                <label className="imgSubmit">
                <form enctype="multipart/form-data">
                  <input type="file" name="imgCollection" accept="image/*" onChange={this.handleFileUpload} />
                </form> 
                  <div className="box">
                    <div className="hl"></div>
                    <div className="vl"></div>
                  </div>
                </label>
                <img src={this.state.workingImagePath}/>
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
                  type="button"
                  value="Next Step"
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

export default Round2_Page2;