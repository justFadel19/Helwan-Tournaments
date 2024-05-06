import Header from "../../header/header"
import tornment from "../../img/tornment.png"
function RunningMatch() {
    return (<>

        <Header />
        <br />

        <div style={{ backgroundColor: 'black', height: '100%' }} className="matchees">
            <div className="tit_running">
                <center> <b> <h2 style={{ color: '#fff' }}>Running Mathcs</h2> </b> </center>
                <center> <b> <h2 style={{ color: '#05ea64' }}>  ــــــــ</h2> </b> </center>
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
            <br />
            <br />
            <center><h1 style={{ color: '#fff' }}>ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ</h1></center>
            <div className="next_m">
                <center> <b> <h2 style={{ color: '#fff' }}>next Mathcs</h2> </b> </center>
                <center> <b> <h2 style={{ color: '#05ea64' }}>  ــــــــ</h2> </b> </center>
                <div className="">
                    <div className="card_continer">
                        <div className="cardd">
                            <center>     </center>
                            < span id="space3"></span>
                            <img id="tornment_imge" src={tornment} alt="" />
                            <span id="team_namee"> team1 name </span>
                            < span id="space3"></span>
                            <span id="num1">  <b></b>  </span>
                            <span id="vs"> <b>VS</b>  </span>

                            <span id="num2"> <b></b>   </span>
                            <span id="space3"></span>
                            <span id="team_namee"> team2 name </span>
                           
                            <span>   <img id="tornment_imge" src={tornment} alt="" />  </span>
                            <span id="team_namee" style={{ color: '#05ea64' }}> <br /> <center>8:00 pm </center> </span>
                            <br />
                        </div>
                        <br />
                    </div>
                    
                </div>
            </div>

        </div>


    </>)
}
export default RunningMatch