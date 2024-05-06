
function OrgnizerHeader(){
    return(<>
    
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
        <Link to={""} >  <a class="nav-item nav-link text-white active ">Add Tournaments</a></Link>
        <Link> <a href="contact.html" class="nav-item nav-link text-white">Contact</a> </Link>
      </div>
        
      <Link to={"/"}><a id="logOut" class="btn btn- py-2 px-4 d-none d-lg-block">Log out</a></Link>
    </div>
  </nav>
</div>
    
    </>)
}
export default OrgnizerHeader