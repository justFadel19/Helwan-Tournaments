import Footer from "../../footer/footer"
import Header from "../../header/header"
import { Link } from "react-router-dom"
import "./profile.css"
function Profile() {
    return (<>
        <Header />


        <div className="" style={{ backgroundColor: '#181c23' }}>
            <div className="main-body">

                {/* Breadcrumb */}

                {/* /Breadcrumb */}

                <div className="row " style={{ backgroundColor: '#181c23' }}>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body" style={{ backgroundColor: '#181c23' }}>
                                <div style={{ color: '#fff' }} className="d-flex flex-column align-items-center text-center-">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                    <div className="mt-3">
                                        <h4 style={{ color: '#FFF' }}>Fego</h4>
                                        <p className="text-secondary mb-1"> Valorant Player </p>
                                        <p className="text-secondary mb-1"> ID:147258369 </p>
                                        <p className="text-muted font-size-sm">Rank</p>
                                        {/* <button className="btn btn-primary">Follow</button> */}
                                        <button className="btn btn-outline-primary">Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-8" style={{ backgroundColor: '#181c23 !important' }}>
                        <div className="card mb-3" style={{ backgroundColor: '#181c23' }}>
                            <div className="card-body">
                                <div style={{ color: '#fff' }} className="row">
                                    <div style={{ color: '#fff' }} className="col-sm-3">
                                        <h6 className="mb-0" style={{ color: '#fff' }}>Full Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary" style={{ color: '#fff' }}>
                                        Fegoo
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0" style={{ color: '#fff' }}>Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        pro@lol.lol
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0" style={{ color: '#fff' }}>Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        0123456789
                                    </div>
                                </div>

                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0" style={{ color: '#fff' }}>Teame</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        demo
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-12">
                                        <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row gutters-sm"  >

                            <div className="col-sm-6 mb-2" style={{ color: '#fff', }}>
                                <div className="card h-100" >
                                    <div className="card-body" style={{ float: ' ', backgroundColor: '#181c23' }}>
                                        <h6 className="d-flex align-items-center mb-"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                        <small>Valo</small>
                                        <div className="progress mb-3" style={{ height: '5px' }}>
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>pubg</small>
                                        <div className="progress mb-3" style={{ height: '5px' }}>
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>Lege of Leagend</small>
                                        <div className="progress mb-3" style={{ height: '5px' }}>
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '89%' }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <small>CS Go</small>
                                        <div className="progress mb-3" style={{ height: '5px' }}>
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        <br />
        <div className="secc_2" style={{}}>
            <center> <h2 style={{}}> <b> UR tournaments </b>  </h2>  </center>
            <center> <h1 style={{ color: '#05ea64' }}> <b> ــــــــــــ </b>   </h1>  </center>
            <div className="URtornments">

                <div class="">
                    <div class="row">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <table id="tablee" class="table ">
                                        <thead >
                                            <tr >
                                                <th scope="col">ID</th>
                                                <th scope="col">tournaments Name</th>
                                                <th scope="col">description</th>
                                                <th scope="col">start-date</th>
                                                <th scope="col">end-date</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr >
                                                <td scope="row">1</td>
                                                <td>tournaments 1</td>
                                                <td>Deth Mach</td>
                                                <td>5/5</td>
                                                <td>6/5</td>
                                                <td>

                                                <Link to={"/runningMatches"}> <button type="button" class="btn btn-success"><i class="fas fa-plus"></i> details</button> </Link> 


                                                </td>
                                            </tr>
                                            <tr >
                                                <td scope="row">1</td>
                                                <td>tournaments 1</td>
                                                <td>Deth Mach</td>
                                                <td>5/5</td>
                                                <td>6/5</td>
                                                <td>

                                                <Link to={"/runningMatches"}> <button type="button" class="btn btn-success"><i class="fas fa-plus"></i> details</button> </Link> 

                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

            </div>

        </div>

        <div className="URTeame">

            <div className="tit_teme">
                <br />
                <br />
                <center> <h2> <b> UR Teame Member </b>  </h2>  </center>
                <center> <h1 style={{ color: '#05ea64' }} > <b> ــــــــــــ </b>  </h1>  </center>
            </div>
            <div className="row"> 
            
            </div>
            <div className="teame_card_">
                <span class="cont">
                    <div class="card">
                        <div class="image">
                            <img href="#" src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg" />
                        </div>
                        <div class="content">
                            <h3 style={{color:'#fff'}}>Member1</h3>
                            <p>DIn publishing and graphic design,Lorem ipsum is a placeholder text commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                        </div>
                    </div>
                </span>
                <div class="cont">
                    <div class="card">
                        <div class="image">
                            <img href="#" src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg" />
                        </div>
                        <div class="content">
                        <h3 style={{color:'#fff'}}>Member2</h3>
                            <p>DIn publishing and graphic design,Lorem ipsum is a placeholder text commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                        </div>
                    </div>
                </div>
                <div class="cont">
                    <div class="card">
                        <div class="image">
                            <img href="#" src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg" />
                        </div>
                        <div class="content">
                        <h3 style={{color:'#fff'}}>Member2</h3>
                            <p>DIn publishing and graphic design,Lorem ipsum is a placeholder text commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
<div className="">
   <Footer/>
</div>
    </>)
}
export default Profile