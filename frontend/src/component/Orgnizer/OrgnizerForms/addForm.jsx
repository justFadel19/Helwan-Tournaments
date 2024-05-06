import Header from "../../header/header"
import "./addform.css"
function AddForm(){
    return(<>
{/* <Header/> */}
    
    <div className="add_form1"> 
    <br />
    <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="mb-3">
                    <h3 style={{color:''}}>Add tournaments </h3>
                </div>
                <form id="form1" accept="" class="shadow p-4">
                    <div class="mb-3">
                        <label for="username">ID</label>
                        <input type="email" class="form-control" name="username" id="username" placeholder="User ID"/>
                    </div>
                    <div class="mb-3">
                        <label for="username">Tournaments name
</label>
                        <input type="text" class="form-control" name="username" id="username" placeholder="tournaments name
"/>
                    </div>
                    <div class="mb-3">
                        <label for="username" style={{textTransform:'lowercase'}}> DESCRIPTION</label>
                        <input type="text" class="form-control" name="username" id="DESCRIPTION"
                            placeholder="DESCRIPTION"/>
                    </div>

                    <div class="mb-3">
                        <label for="">Date of start</label>
                        <input type="text" class="form-control" name="Date of start" id="D_of_B"
                            placeholder="Date of start" />
                    </div>

                    <div class="mb-3">
                        <label for="">Date of end</label>
                        <input type="text" class="form-control" name="Date of end" id="D_of_B"
                            placeholder="Date of end" />
                    </div>


                    <div class="butt_10">
                        <button className="butt_10"  type="submit" class="">ADD</button>
                    </div>

                  



                </form>
            </div>
        </div>
    </div>
    
   

    </>)
}
export default AddForm