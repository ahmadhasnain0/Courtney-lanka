<template>
     <nav class="navbar  navbar-expand-lg  m-0 w-100  bg-primary">
          <div class="container px-3 px-sm-0 w-100 align-items-center">
            <a class="navbar-brand " href="#">
              <img src="../assets/images/logo.png " width="auto" height="auto" alt="Logo" loading="lazy"
                class="  object-fit-cover">
            </a> <button class="navbar-toggler border-0 p-1 navbar-button" type="button" data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
              </svg>
            </button>
            <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header justify-content-end ">

                <button type="button" class="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-center flex-grow-1  ">
                  <li class="nav-item mx-0 mx-lg-2">
                    <a class="nav-link   " href="#">Find freelancers</a>
                  </li>
                  <li class="nav-item mx-0 mx-lg-2">
                    <a class="nav-link  " href="#">Find job</a>
                  </li>
                  <li class="nav-item mx-0 mx-lg-2">
                    <a class="nav-link  " href="#">Solution</a>
                  </li>
                  <li class="nav-item mx-0 mx-lg-2">
                    <a class="nav-link  " href="#">Project</a>
                  </li>
                </ul>
                <div class="navbar-nav justify-content-end flex-grow-1 gap-2 ">
                    <a href="#" class="btn bg-primary px-3 px-md-4 py-2 border border-black rounded-pill ">log in</a>
                    <a href="#" class="btn bg-black text-white px-3 px-md-4 py-2 border border-black rounded-pill ">Join us</a>
                    </div>
              </div>
            </div>
          </div>
        </nav>
</template>
