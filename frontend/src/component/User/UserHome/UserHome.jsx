 import "./../../../style/style.css"
 import "../../../style/style.min.css"
 import "./UserHome.css"
import { Link } from "react-router-dom"
function UserHome (){
    return(
        <>
         <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
            <a >
                <h1 class="m-0 text-uppercase text-primary"><i class="fa-solid fa-gamepad-modern"></i>tournaments  </h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div class="navbar-nav mx-auto py-0">
                   <Link>  <a  class="nav-item nav-link active">Home</a></Link>  
                   <Link><a href="" class="nav-item nav-link"> Tournaments</a></Link>  
                   <Link><a href="#courses" class="nav-item nav-link">Teams</a></Link>  
                  
                     
                    
                   <Link> <a href="contact.html" class="nav-item nav-link">Contact</a> </Link>
                   
                </div>
                <Link to={"/"}><a class="btn btn-danger py-2 px-4 d-none d-lg-block">Log out</a></Link> 
            </div>
        </nav>
    </div>
  
    <div id="first_sec" class="jumbotron jumbotron-fluid position-relative overlay-bottom" >
        <div class="container text-center my-5 py-5">
            <h1 class="text-white mt-4 mb-4"> Home</h1>
            <h1 class="text-white display-1 mb-5">tournaments</h1>
            <div class="mx-auto mb-5">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-light bg-white text-body px-4 dropdown-toggle" type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Courses</button>
                       
                    </div>
                    <input type="text" class="form-control border-light " placeholder="Keyword"/>
                    <div class="input-group-append">
                        <button class="btn btn-secondary px-4 px-lg-5">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* table */}
    <div class="container-fluid bg-image" id="courses">
        <div class="container">
            <div class="row">
                <div class="center">
                    <center><h2>avilable tournaments</h2> </center>
                    {/* <br> */}
                </div>
              
               
                <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <table class="table table-bordered">
                          <thead >
                            <tr >
                              <th scope="col">ID</th>
                              <th scope="col">tournaments Name</th>
                              <th scope="col">type</th>
                              <th scope="col">Date</th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr >
                              <th scope="row">1</th>
                              <td>tournaments 1</td>
                              <td>Deth Mach</td>
                              <td>5/5/2024</td>
                              <td>
                               
                                <button type="button" class="btn btn-success"><i class="fas fa-plus"></i></button>
                             
                              </td>
                            </tr>
                            <tr >
                              <th scope="row">1</th>
                              <td>tournaments 1</td>
                              <td>Deth Mach</td>
                              <td>5/5/2024</td>
                              <td>
                               
                                <button type="button" class="btn btn-success"><i class="fas fa-plus"></i></button>
                             
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
        </>
    )
}
export default UserHome