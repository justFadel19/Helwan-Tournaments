import "./../../../style/style.css"
import "../../../style/style.min.css"
import "./UserHome.css"
import { Link } from "react-router-dom"
import tornment from "../../img/tornment.png"
import MatchList from "../../match/matchList"
import Footer from "../../footer/footer"
import Header from "../../header/header"
function UserHome() {
  return (
    <>

      <Header />
      <div className="sec_1">
        <div id="first_sec" class="jumbotron jumbotron-fluid position-relative overlay-bottom" >
          <div class="container text-center my-5 py-5">
            <h1 class=" mt-4 mb-4" id="home" >Player Home </h1>
            <h1 class="text-white display-1 mb-5">tournaments</h1>
            <div class="mx-auto mb-5">
              <div class="input-group">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-light bg-white text-body px-4 dropdown-toggle" type="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">tournaments</button>

                </div>
                <input type="text" class="form-control border-light " placeholder="Keyword" />
                <div class="input-group-append">
                  <button class="btn btn-secondary px-4 px-lg-5">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* tournaments table */}
      <div id="sec1" class="" >
        <div class="tit">
          <br />
          <center> <b><h5> TOURNAMENT LIST </h5></b>  </center>
          <center> <b><h2>ACTIVE TOURNAMENT </h2></b>  </center>
          <center> <b><h2>ـــــــــــ</h2></b>  <br /> </center>
        </div>

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

                          <button type="button" class="btn btn-success"><i class="fas fa-plus"></i></button>

                        </td>
                      </tr>
                      <tr >
                        <td scope="row">1</td>
                        <td>tournaments 1</td>
                        <td>Deth Mach</td>
                        <td>5/5</td>
                        <td>6/5</td>
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
        <br />
        <br />
        <div className="live-match">
          <div className="tit">
            <center> <h2>Live match</h2></center>
            <center> <h2>ـــــــــــ</h2></center>
          </div>
          <div className="card_continer">

            <div className="cardd">
              < span id="space3"></span>
              <img id="tornment_imge" src={tornment} alt="" />
              <span id="team_namee"> team1 name </span>
              < span id="space3"></span>
              <span id="num1">  <b>2</b>  </span>
              <span id="vs"> <b>VS</b>  </span>
              <span id="num2"> <b>4</b>   </span>
              <span id="space3"></span>
              <span id="team_namee"> team2 name </span>
              <span>   <img id="tornment_imge" src={tornment} alt="" />  </span>

              <br />
            </div>
            <br />
          </div>
          <div className="card_continer">

            <div className="cardd">
              <center>     </center>
              < span id="space3"></span>
              <img id="tornment_imge" src={tornment} alt="" />
              <span id="team_namee"> team1 name </span>
              < span id="space3"></span>
              <span id="num1">  <b>2</b>  </span>
              <span id="vs"> <b>VS</b>  </span>
              <span id="num2"> <b>4</b>   </span>
              <span id="space3"></span>
              <span id="team_namee"> team2 name </span>
              <span>   <img id="tornment_imge" src={tornment} alt="" />  </span>
              <br />
            </div>
            <br />

          </div>
        </div>

      </div>
      <div className="matchess">
        <br />
        {/* <MatchList/> */}

      </div>
      <div className="footerr">
        <Footer />
      </div>
    </>
  )
}
export default UserHome