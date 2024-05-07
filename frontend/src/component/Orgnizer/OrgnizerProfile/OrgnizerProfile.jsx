import Header from "../../header/header"
import { Link } from "react-router-dom"
import "./OrgnizerProfile.css"
import Button from 'react-bootstrap/Button';
function OrgnizerProfile() {
    return (<>

        <div className="sec_header">

        </div>
        <div class="container-fluid p-0">
            <nav class="navbar navbar-expand-lg bg- navbar-light py-3 py-lg-0 px-lg-5">
                <a >
                    <h1 class="m-0 text-uppercase text-white">tournaments DEV  </h1>
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                    <div id="uls" class="navbar-nav mx-auto py-0">
                        <Link to={""} >  <a class="nav-item nav-link text-white active ">Home</a></Link>
                        <Link to={"/AddForm"} >  <a class="nav-item nav-link text-white active ">Add Tournaments</a></Link>
                        <Link> <a href="contact.html" class="nav-item nav-link text-white">Contact</a> </Link>

                    </div>

                    <Link to={"/"}><a id="logOut" class="btn btn- py-2 px-4 d-none d-lg-block">Log out</a></Link>
                </div>
            </nav>
        </div>
        <div className="Orgnizer_sec_1">
            <br />
            <center>
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body" style={{ backgroundColor: '#0e0437' }}>
                            <div style={{ color: '#fff' }} className="d-flex flex-column align-items-center text-center-">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                <div className="mt-3">
                                    <h4 style={{ color: '#FFF' }}>Fego</h4>
                                    <p className="text-secondary mb-1"> Orgnizer </p>
                                    <p className="text-secondary mb-1"> Orgnizer@lol </p>
                                    <p className="text-secondary mb-1"> 0123456987</p>
                                    <p className="text-secondary mb-1"> ID:147258369 </p>
                                    <p className="text-muted font-size-sm">  </p>
                                    {/* <button className="btn btn-primary">Follow</button> */}
                                    <button className="btn btn-outline-primary">Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
            <br />
            <center> <h1 style={{ color: '#fff' }}>ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ</h1> </center>
            <br />
            <center> <h2><b> Added Tournaments </b></h2> </center>
            <center> <h2 style={{ color: '#05ea64' }}><b> ــــــــــــــــــــــــــ </b></h2> </center>

            <div className="">
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

                                                    <Link to={""}> <button type="button" class="btn btn-success"><i class="fas fa-plus"></i> details</button> </Link>
                                                    <Link to={""}> <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i>  delete</button> </Link>


                                                </td>
                                            </tr>
                                            <tr >
                                                <td scope="row">1</td>
                                                <td>tournaments 1</td>
                                                <td>Deth Mach</td>
                                                <td>5/5</td>
                                                <td>6/5</td>
                                                <td>

                                                    <Link to={""}> <button type="button" class="btn btn-success"><i class="fas fa-plus"></i> details</button> </Link>
                                                    <Link to={""}> <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i>  delete</button> </Link>


                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    <Link to={"/AddForm"} >    <Button id="add_button" variant="" size="lg"> Add Tournaments </Button>{' '}  </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </>)
}
export default OrgnizerProfile