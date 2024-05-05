import { Link } from "react-router-dom"
import "../Login/Login.css"
function Regester (){
    return(
        <>

<div id="login">
                <section class="ftco-section">
                    <div class="container">
                        <div class="row justify-content-center">

                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-12 col-lg-10">
                                <div class="wrap d-md-flex">
                                    <div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                                        <div class="text w-100">
                                            <h2>Welcome to Sign IN</h2>
                                            <p> have an account?</p>
                                            <Link to={"/"}><a href="#" class="btn btn-white btn-outline-white">Login</a>  </Link> 
                                        </div>
                                    </div>
                                    <div class="login-wrap p-4 p-lg-5">
                                        <div class="d-flex">
                                            <div class="w-100">
                                                <h3 class="mb-4">Sign IN</h3>
                                            </div>
                                            <div class="w-100">
                                                <p class="social-media d-flex justify-content-end">
                                                    <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class=""><i class="fa-brands fa-google"></i></span></a>
                                                    <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class=""><i class="fa-brands fa-facebook"></i></span></a>
                                                </p>
                                            </div>
                                        </div>
                                        <form action="#" class="signin-form">
                                            <div class="form-group mb-3">
                                                <label class="label" for="name">Username</label>
                                                <input type="text" class="form-control" placeholder="Username" required />
                                            </div>
                                            <div class="form-group mb-3">
                                                <label class="label" for="name">Email</label>
                                                <input type="email" class="form-control" placeholder="Email" required />
                                            </div>
                                            <div class="form-group mb-3">
                                                <label class="label" for="password">Password</label>
                                                <input type="password" class="form-control" placeholder="Password" required />
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" class="form-control btn btn-primary submit px-3">Sign In</button>
                                            </div>
                                            <div class="form-group d-md-flex">
                                                <div class="w-50 text-left">  <input type="checkbox"  />  
                                                    <label class="">Remember Me
                                                      
                                                       
                                                    </label>
                                                </div>
                                                <div class="w-50 text-md-right">
                                                    <a href="#">Forgot Password</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>


        </>
    )
}
export default Regester 