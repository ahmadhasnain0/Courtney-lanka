<template>
  <div class="container-fluid bg-primary pb-5">
    <div class="container px-3 px-sm-0 w-100 align-items-center">
      <div class="row">
        <div class="col-12 px-0 px-sm-2">
          <h1 class="text-white roboto-black f-170">FREELANCERS</h1>
        </div>
        <div class="col-12 col-lg-6">
          <div class="row">
            <div class="col-11 px-0">
              <div class="bar bg-white align-items-center">
                <img
                  class="voice mb-3"
                  src="../assets/images/header/svg/search-svgrepo-com.svg"
                  title="Search by Voice"
                />
                <input
                  class="searchbar border-0 w-75 ms-3"
                  type="text"
                  title="Search"
                  placeholder="search"
                />
                <a
                  href="#"
                  class="float-end btn bg-black text-white me-1 mt-1 px-2 next-button border border-black rounded-circle d-none d-xl-inline"
                  >→</a
                >
                <a class="float-end me-3 me-lg-3 mt-1"
                  ><img
                    class="voice"
                    src="../assets/images/header/svg/mic-svgrepo-com.svg"
                    title="Search by Voice"
                /></a>
              </div>
            </div>
            <div class="col-11 px-0">
              <div class="row px-2 mt-2 ">
                <div class="col-4 col-sm-3">
                  <p class="text-nowrap f-18">Popular Skills:</p>
                </div>
                <div class="col-4 col-sm-3 px-1">
                  <a
                    href="#"
                    class="btn bg-secondary px-3 px-md-4 py-1 border-0 rounded-pill text-nowrap"
                    > Graphics</a
                  >
                </div>
                <div class="col-4 col-sm-3 px-1">
                  <a
                    href="#"
                    class="btn bg-secondary px-3 px-md-4 py-1 border-0 rounded-pill text-nowrap"
                    >UI design </a
                  >
                </div>
                <div class="col-4 col-sm-3 px-1">
                  <a
                    href="#"
                    class="btn bg-secondary px-3 px-md-4 py-1 border-0 rounded-pill text-nowrap"
                    >database</a
                  >
                </div>
                
              </div>
            </div>
            <div class="col-10 px-0 mt-3">
                <p>A freelancers web portal connect bussiness with freelancers, help in hiring and project collaboration </p>
            </div>
            <div class="col-12 col-md-9 px-0 mt-3">
                <div class="card rounded-4">
      <div class="card-body p-3 pb-0">
<div class="row">
<div class="col-12 col-sm-8"><h5 class="card-title">Special title treatment</h5>
<img src="../assets/images/header/card1.png" width="auto" height="auto" alt="persons-pic" class="mt-2">

</div>
<div class="col-12 col-sm-4 mt-2">
    <div>
    <span class="fa fa-star checked mx-1"></span>
<span class="fa fa-star checked mx-1"></span>
<span class="fa fa-star checked mx-1"></span>
<span class="fa fa-star checked mx-1"></span>
<span class="fa fa-star checked mx-1"></span></div>

<div class=" mt-4">
   <h4 class="fw-bold">200+</h4> 
   <p class="f-12">satisfied customer</p>
</div>
</div>

</div>

    </div>
</div>
          </div>
          </div>
        </div>
        <div class="col-12 col-md-6 d-none d-lg-inline px-0">
            
<img src="../assets/images/header/pic-header.png" width="100%" height="100%" alt="header-pic" class="header-pic position-absolute">

<div class="card rounded-5 bg-light-gray w-50 float-end mt-150">
            <div class="card-body p-3 pt-1 pb-0" >
              <div class="w-100 float-start">
                    <img
                      src="../assets/images/header/profile.png"
                      width="auto"
                      height="auto"
                      alt="pic"
                      class="my-3 float-start me-2"
                    />
                    <div class="ps-5 mt-4">@jenny</div>
                    <h6 class="fw-bold text-uppercase  mb-0">UX/UI Designer</h6>
                  </div>
                  <hr class="w-100">
                  <div class="w-100 float-start">
                    <img
                      src="../assets/images/header/completed-project.png"
                      width="auto"
                      height="auto"
                      alt="pic"
                      class=" float-start me-2"
                    />
                    <div class="ps-5 mt-2"><span class="fw-bold">80+</span> project completed</div>

                  </div>
                  <div class="w-100 float-start">
                    <img
                      src="../assets/images/header/hour.png"
                      width="auto"
                      height="auto"
                      alt="pic"
                      class=" float-start my-3 me-2"
                    />
                    <div class="ps-5 mt-4">
                      <span class="fw-bold">$30</span> per hour</div>
                  </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import "@/src/assets/scss/components/_header.scss";
</script>