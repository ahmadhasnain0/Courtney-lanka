<template>
  <div class="container-fluid pb-5">
    <div class="container px-3 px-sm-0 w-100 align-items-center">
      <div class="row">
        <div class="col-12 col-md-8 d-none d-md-inline">
          <img
            src="../assets/images/connect-with-us/Rectangle 34.png"
            width="100%"
            height="100%"
            class="object-fit-stretech"
          />
        </div>
        <div class="col-12 col-md-4 pt-auto pt-sm-5">
          <div class="card border-0 bg-white">
            <div
              class="card-body px-0 px-sm-5 py-0 py-sm-4 position-absolute bg-white card-connect border-0"
            >
              <h1 class="fw-bolder text-uppercase text-blue mt-3 pe-0 pe-sm-2">
                Connect With Your Next Great Hire Today!
              </h1>

              <form class="custom-form">
                <div class="row mb-3">
                  <div class="col-12 col-sm-6">
                    <label for="Company" class="col-form-label text-blue"
                      >Company</label
                    >
                    <input
                      type="Company"
                      class="form-control py-3"
                      id="Name"
                      placeholder="Company"
                    />
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="Name" class="col-form-label text-blue"
                      >Name</label
                    >
                    <input
                      type="Name"
                      class="form-control py-3"
                      id="Name"
                      placeholder="Jhon"
                    />
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="inputEmail" class="col-form-label text-blue"
                      >Email</label
                    >
                    <input
                      type="email"
                      class="form-control py-3"
                      id="inputEmail"
                      placeholder="peter@example.com"
                    />
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="inputPassword" class="col-form-label text-blue"
                      >Password</label
                    >

                    <input
                      type="password"
                      class="form-control py-3"
                      id="inputPassword"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div class="col-12">
                    <label for="Detail" class="col-form-label text-blue"
                      >Project Detail</label
                    >
                    <textarea
                      class="form-control py-3"
                      id="Detail"
                      placeholder="Detail"
                    ></textarea>
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="checkRemember"
                    />
                    <label
                      class="form-check-label text-blue"
                      for="checkRemember"
                      >By sending this form I confirm that I have read and
                      accept the <span class="fw-bold">Privacy Policy</span>
                    </label>
                  </div>
                </div>
              </form>
              <button class="btn bg-gradient-primary px-3 text-white mt-3 mb-1">
                GET CONSULTATION
                <img src="../assets/images/header/arrow_forward.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import "../assets/scss/components/_connect-with-us.scss";
</script>