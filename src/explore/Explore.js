/*jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/Navbar";
import "./Explore.css";
import data from "../explore/data.json";
import Card from "../components/Card";
import mapImage from "../photos/map.png";
import searchArrow from "../photos/searchArrow.png";
import  Link  from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Explore extends React.Component{
  constructor(props) {
    super(props)
    let  Cards=[];
    this.state = {
      Cards:Cards,
      valueFromSearch:'',
      valueFromStartDate: '',
      valueFromEndDate: '',
      startDate: new Date()
    }
    this.handleChange = this.handleChange.bind(this);


    for(var i=0; i<data.length;i+=2){
        if(i+1<data.length){
        Cards.push(
        <div className="row " >

        <div className="card col-lg-4 col-sm-6" style={{padding:'2%'}}>
        <Card image={data[i].image} id={data[i].id} location={data[i].location} profession={data[i].profession} price={data[i].price} duration={data[i].duration}/>
        {console.log(data[i].image)}
        </div>


        <div className="card col-lg-4 col-sm-6 offset-1 " style={{padding:'2%'}}>
        <Card image={data[i+1].image} id={data[i+1].id} location={data[i+1].location} profession={data[i+1].profession} price={data[i+1].price} duration={data[i+1].duration}/>
        </div>

        </div>);

        }else{
          Cards.push(
          <div className="row ">
          <div className="card col ">
          <div className=''>
          <Card image={data[i].image} id={data[i].id} location={data[i].location} profession={data[i].profession} price={data[i].price} duration={data[i].duration}/>
          </div>
          </div>

          </div>)
        }
    }
  }

  handleChange = date => {
  this.setState({
    startDate: date
  });
  };


  render(){

    return (
      <div>

        <Navbar textColor={'black'} auth={this.props.auth}/>


          <div className="row mt-3 pt-5">
                <div className="col-8">
                    <div className="search">
                        <h1 className="pl-5 pt-4" style={{color:"white", fontSize:"200%"}}>Start Your next Journey </h1>
                        <div class="input-group pt-2">
                            <input type="text" class="form-control" placeholder="Search"/>
                            <div class="input-group-append">
                              <button class="btn btn-secondary" type="button">
                                <i class="fa fa-search"></i>
                              </button>
                            </div>
                        </div>
                        <div className='row pt-5'>
                              <div className='col-lg-2 offset-1'>
                                  <div class="btn-group">
                                    <button style={{background:'#F2C94C'}} type="button" id="bvAtt" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      Sort By Price
                                    </button>
                                    <div class="dropdown-menu" id="dd1">
                                        <a className='dropdown-item' onclick='filterIndustry(event)'> Low to High </a>
                                        <a className='dropdown-item' onclick='filterIndustry(event)'> High to Low </a>


                                    </div>
                                  </div>
                              </div>
                              <div className='col-lg-2'>
                                <div class="btn-group">
                                  <button style={{background:'#F2C94C'}} type="button" id="bvAtt" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Filter By Industry
                                  </button>
                                  <div class="dropdown-menu" id="dd1">
                                      <a className='dropdown-item' onclick='filterIndustry(event)'> Education </a>
                                      <a className='dropdown-item' onclick='filterIndustry(event)'> Engineering </a>
                                      <a className='dropdown-item' onclick='filterIndustry(event)'> Art & Design </a>
                                      <a className='dropdown-item' onclick='filterIndustry(event)'> Healthcare </a>
                                      <a className='dropdown-item' onclick='filterIndustry(event)'> Food </a>

                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-3'>
                                <div class="btn-group">
                                  <button style={{background:'#F2C94C'}} type="button" id='bsAtt' class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                     Filter By Duration
                                  </button>
                                  <div class="dropdown-menu" id="dd2">
                                      <a className='dropdown-item' onclick='filterDuration(event)'> Less than 3 days </a>
                                      <a className='dropdown-item' onclick='filterDuration(event)'> 3 to 5 days </a>
                                      <a className='dropdown-item' onclick='filterDuration(event)'> 5 to 7 days </a>
                                      <a className='dropdown-item' onclick='filterDuration(event)'> 7 to 9 days </a>
                                      <a className='dropdown-item' onclick='filterDuration(event)'> Greater than 9 days </a>
                                  </div>
                                </div>
                              </div>


                          </div>
                          <div className='row pt-4'>
                                <div className='col-lg-1 offset-1'>
                                  <h3 style={{fontSize:"160%"}} className='pt-1 pr-5'>Date:</h3>

                                </div>
                                <div className='col-lg-3'>
                                    <button type="button">From:</button>
                                      <DatePicker
                                       selected={this.state.startDate}
                                       onChange={this.handleChange}
                                     />
                                </div>

                                <div className='col-lg-3'>
                                      <button type="button">To:</button>
                                      <DatePicker
                                       selected={this.state.startDate}
                                       onChange={this.handleChange}
                                     />
                                </div>





                            </div>
                    </div>
                    <div style={{paddingLeft:'10%'}}>
                    {this.state.Cards}
                    </div>
                </div>
                <div className='col-4'>
                  <img src={mapImage} />
                </div>

          </div>





      </div>

    );



}
}
