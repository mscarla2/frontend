/*jshint esversion: 6 */
import React from "react"
import ReactDOM from "react-dom"
// import "./Home.css"
import Navbar from "../components/Navbar"
import midSectionHome from '../components/midSectionHome.js'
import Slider from '../components/Slider'
import homeArrow from '../photos/homeArrow.png'
import ScrollArrow from '../photos/ScrollForMore.png'
import Background from '../photos/CoverPhoto.png'
import Bottom from "../components/bottom"
import FooterPage from "../components/footer"
import icon1 from '../photos/Icon1.png'
import icon2 from '../photos/Icon2.png'
import icon3 from '../photos/Icon3.png'
import icon4 from '../photos/Icon4.png'
import icon5 from '../photos/Icon5.png'
import icon6 from '../photos/Icon6.png'
import  Link  from "react-router-dom";



export default class Homepage extends React.Component{

  render(){

    const Link = require("react-router-dom").Link;

  return(




      <div className='pb-0 mb-0' >
                  <div style={{backgroundImage: "url(" + Background + ")"}}>
                                  <div className='col-12  pt-4 pl-5'>

                                      <Navbar textColor={"white"}/>

                                  </div>
                                  <div className='row '>
                                        <div className='col-lg-9 col-10 offset-1 pt-4'>
                                        <h4 className="" style={{color:"white"}}> Are You Ready? </h4>

                                        <h3 className='' style={{fontSize:'600%', color:"white"}}>Your next career<br/><span style={{color:"#F2C94C"}}> starts with an <br/> adventure </span>  </h3>
                                        </div>
                                        <div className='col-lg-2 col-2 pt-4' id="scrollForMore">

                                          <h3 className='' style={{"position":"absolute", top:"50%","width":"272px","height":"28px","fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"12.6px","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"#FCFCFC","transform":"rotate(90deg)"}}>
                                          Scroll For More </h3>


                                          <a href="#homepageSlider" style={{"position":"absolute", top:"77%", left:'53%'}}>  <img src={ScrollArrow}></img></a>

                                        </div>
                                  </div>

                                  <Link to="explore" className='row pb-5 '>
                                        <div className=' row offset-1 ' style={{background: "rgba(255, 255, 255, 0.31)",border: "5px solid #ffffff", height:"5%", width:"50%", boxSizing:"border-box"}}>
                                                   <div className="col-lg-10 col-sm-8 pt-1">
                                                    <a href="#" className='' style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"normal","fontSize":"32px","lineHeight":"163.35%","display":"flex","alignItems":"center","color":"#FCFCFC"}}
                                                    >Where is your next adventure going to be? </a>
                                                  </div>
                                                  <div className="col-lg-2 col-sm-4 pt-1" >
                                                      <a href="#">  <img src={homeArrow}></img></a>
                                                  </div>
                                        </div>
                                 </Link>
                    </div>


          <div id="homepageSlider" className='row mt-5'>
                <Slider/>
          </div>

              <div className='pt-5' style={{background: "#150433"}} >

                                    <div className='row d-flex justify-content-center pt-5 '>
                                       <h2 style={{fontFamily:"Mplus 1p","fontStyle":"normal","fontWeight":"500","fontSize":"55px","lineHeight":"67px","textAlign":"center","color":"#FCFCFC"}}
                                        > Why Yolo </h2>
                                    </div>
                                    <div className='row d-flex justify-content-center  ' >
                                        <h3 style={{fontSize:"18px", fontFamily:"Mplus 1p",fontStyle:"normal",fontWeight:"800",lineHeight:"29px",textAlign:"center",color:"#FCFCFC"}}
                                        >       YOLO empowers me to become an adventurer. </h3>

                                    </div>
                                    <div className='container pt-3  ' >
                                      <div className="row">
                                        <div className="col-4">
                                            <img src={icon1} alt="hammer"/>
                                          <h2 style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"27px","color":"#00F0B5"}}
                                          > Adventurous </h2>
                                          <h3 style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"normal","fontSize":"18px","lineHeight":"29px","color":"#FCFCFC"}}
                                          >Yolo empowers me to become an adventurer </h3>
                                        </div>

                                        <div className='col-4 ' >
                                          <img src={icon2} alt="logo2"/>
                                          <h2 style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"27px","color":"#F61067"}}
                                          > Trustworthy </h2>
                                          <h3 style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"normal","fontSize":"18px","lineHeight":"29px","color":"#F2F2F2"}}
                                          >Learn directly from experts who can inspire you to pursue your passions </h3>
                                        </div>

                                         <div className="col-4">
                                         <img src={icon3} alt="logo3"/>
                                         <h2 style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"27px","color":"#F67110"}}
                                         > Connections </h2>
                                         <h3 style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"normal","fontSize":"18px","lineHeight":"29px","color":"#FCFCFC"}}
                                         > Connect with inspiring professionals across a variety of industries </h3>
                                         </div>
                                       </div>
                                    </div>

                              <div className='container pt-3 pb-5  ' >
                                  <div className="row ">
                                    <div className="col-4">
                                    <img src={icon4} alt="logo4"/>
                                  <h2 style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"27px","color":"#F67110"}}
                                  > Resources </h2>
                                  <h3 style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"normal","fontSize":"18px","lineHeight":"29px","color":"#FCFCFC"}}
                                  >Learn directly from experts who can inspire you to pursue your passions </h3>
                                </div>

                                <div className='col-4 ' >
                                  <img src={icon5} alt="logo5"/>
                                  <h2 style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"27px","color":"#00F0B5"}}
                                  > Discover Passions </h2>
                                  <h3 style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"normal","fontSize":"18px","lineHeight":"29px","color":"#F2F2F2"}}
                                  >Discover new passions and learn from experts who inspire you to pursue them </h3>
                                </div>

                                 <div className="col-4">
                                 <img src={icon6} alt="logo6"/>
                                 <h2 style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"27px","color":"#F61067"}}
                                 > Accessibility </h2>
                                 <h3 style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"normal","fontSize":"18px","lineHeight":"29px","color":"#FCFCFC"}}
                                 > Connect with inspiring professionals across a variety of industries </h3>
                                 </div>
                               </div>
                            </div>
                    </div>



                    <div className='container'>
                                      <div className='row pt-5 d-flex justify-content-center'>

                                          <h2 className="text-center  d-flex justify-content-center" style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"12.6px","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"#F61067"}}
                                          > WHAT WE DO </h2>
                                      </div>
                                      <div className='row d-flex justify-content-center'>
                                          <h3 className=" text-center d-flex justify-content-center" style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"normal","fontSize":"45px","lineHeight":"67px","color":"#30233D"}}
                                          > What we do is more than you can imagine </h3>
                                      </div>

                                      <div className='row pt-5'>
                                          <div className='col-4 d-flex justify-content-center'>
                                            <h1 style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"900","fontSize":"99px","lineHeight":"118px","textAlign":"center","color":"#F61067"}}
                                            > 35 </h1>
                                          </div>

                                          <div className='col-4'>
                                              <h1 style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"900","fontSize":"99px","lineHeight":"118px","textAlign":"center","color":"#5E239D"}}
                                              > 142 </h1>

                                          </div>

                                          <div className='col-4'>
                                              <h1 style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"900","fontSize":"99px","lineHeight":"118px","textAlign":"center","color":"#00F0B5"}}
                                              > 12 </h1>

                                          </div>
                                      </div>
                                      <div className='row pt-1'>
                                          <div className='col-4 d-flex justify-content-center'>
                                            <h1 style={{fontSize:"15px"}}  > HOSTS </h1>
                                          </div>

                                          <div className='col-4 d-flex justify-content-center'>
                                              <h1 style={{fontSize:"15px"}}  > SHADOWERS </h1>

                                          </div>

                                          <div className='col-4 d-flex justify-content-center'>
                                              <h1 style={{fontSize:"15px"}}  > COUNTRIES </h1>

                                          </div>
                                      </div>
                    </div>


                    <Bottom/>
                    <FooterPage />



      </div>






  );
}
}
