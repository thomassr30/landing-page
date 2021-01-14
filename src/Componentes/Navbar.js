import React from "react";

const Navbar = () =>{
    return (
        <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
            
  <a class="navbar-brand" href="#">Navbar w/ text</a>
  <button class="navbar-toggler  " type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarText">
    <ul class="navbar-nav ml-auto">
      
      <li class="nav-item active">
        <h5 class="nav-link" href="#">Home <span class="sr-only">(current)</span></h5>
      </li>
      <li class="nav-item">
        <h5 class="nav-link" href="#">About</h5>
      </li>
      <li class="nav-item">
        <h5 class="nav-link" href="#">Service</h5>
      </li>
      <li class="nav-item">
        <h5 class="nav-link" href="#">Contact</h5>
      </li>
    </ul>
      </div>
</nav>



        
    );
}
export default Navbar;