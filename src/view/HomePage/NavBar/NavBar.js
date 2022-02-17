import React from "react";
import "../Home/Home.css";
// import Testimonial from "../Testimonial/Testimonial";

function Navbar() {
    return (
    <div class="body">
        <nav id="nav" class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a id="nav-brand" class="navbar-brand" href="#">Mr.Cooks</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#testimonials">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Cart</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#aboutus">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#footer">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"></a>
                        </li>
                    </ul>                  
                </div>
            </div>
        </nav>
    </div>

    );
}

export default Navbar;