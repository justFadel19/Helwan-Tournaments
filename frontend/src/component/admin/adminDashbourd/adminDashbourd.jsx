import { Link } from "react-router-dom"
import "./adminDashbourd.css"
import Button from "react-bootstrap/esm/Button"

function AdminDashboard() {
    return (<>


        <div className="sec_header">

        </div>
        <div class="container-fluid p-0">
            <nav class="navbar navbar-expand-lg bg- navbar-light py-3 py-lg-0 px-lg-5">
                <a >
                    <h1 class="m-0 text-uppercase text-white">tournaments Admin  </h1>
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                    <div id="uls" class="navbar-nav mx-auto py-0">
                        <Link to={""} >  <a class="nav-item nav-link text-white active "></a></Link>
                    </div>

                    <Link to={"/"}><a id="logOut" class="btn btn- py-2 px-4 d-none d-lg-block">Log out</a></Link>
                </div>
            </nav>
        </div>

        <div className="admin_sec1">
            <br />
            <div className="tournaments_List ">
                <center> <b> <h2> TOURNAMENTS List </h2> </b> </center>
                <center> <b> <h2 style={{ color: '#45f882' }} > ــــــــــــــــــــ</h2> </b> </center>
                <div className="tournaments_table1">
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


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="player_table">
                <center> <b> <h2> plyer List </h2> </b> </center>
                <center> <b> <h2 style={{ color: '#45f882' }} > ــــــــــــــــــــ</h2> </b> </center>
                <div class="row">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <table id="tablee" class="table ">
                                    <thead >
                                        <tr >
                                            <th scope="col">ID</th>
                                            <th scope="col"> Name</th>
                                            <th scope="col">phone number</th>
                                            <th scope="col">email</th>
                                            <th scope="col">team</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td scope="row">1</td>
                                            <td>name</td>
                                            <td>012345678</td>
                                            <td>player@lol</td>
                                            <td>demo</td>
                                            <td>

                                                {/* <Link to={""}> <button type="button" class="btn btn-success"><i class="fas fa-plus"></i> details</button> </Link> */}
                                                <Link to={""}> <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i>  delete</button> </Link>


                                            </td>
                                        </tr>


                                    </tbody>
                                </table>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="orgnizer_List0">
                    <br />
                    <br />
                    <div className="player_table">
                        <center> <b> <h2> Orgnizer List </h2> </b> </center>
                        <center> <b> <h2 style={{ color: '#45f882' }} > ــــــــــــــــــــ</h2> </b> </center>
                        <div class="row">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <table id="tablee" class="table ">
                                            <thead >
                                                <tr >
                                                    <th scope="col">ID</th>
                                                    <th scope="col"> Name</th>
                                                    <th scope="col">email</th>
                                                    <th scope="col">phone number</th>
                                                    
                                                    
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr >
                                                    <td scope="row">1</td>
                                                    <td>name</td>
                                                 
                                                    <td>orgnizer@lol</td>
                                                    <td>0123456897</td>
                                                    <td>

                                                        {/* <Link to={""}> <button type="button" class="btn btn-success"><i class="fas fa-plus"></i> details</button> </Link> */}
                                                        <Link to={""}> <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i>  delete</button> </Link>


                                                    </td>
                                                </tr>


                                            </tbody>
                                        </table>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default AdminDashboard