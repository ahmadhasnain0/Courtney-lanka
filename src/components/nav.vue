<template>
  <nav class="navbar navbar-expand-lg m-0 w-100 bg-white">
    <div class="container px-3 px-sm-0 w-100 align-items-center">
      <a class="navbar-brand" href="#">
        <img
          src="@/src/assets/images/logo.png "
          width="150px"
          height="65px"
          alt="Logo"
          loading="lazy"
          class="object-fit-contain"
        />
      </a>
      <button
        class="navbar-toggler border-0 p-1 navbar-button"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header justify-content-end">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-center flex-grow-1 text-blue">
            <li class="nav-item mx-0 mx-lg-2">
              <a class="nav-link text-blue"  href="#">How to start</a>
            </li>
            <li class="nav-item mx-0 mx-lg-2 dropdown">
              <a
                class="nav-link dropdown-toggle  text-blue"
                type="button"
                data-bs-toggle="dropdown"
                >Services</a
              >
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Services 1</a></li>
                <li><a class="dropdown-item" href="#">Services 2</a></li>
                <li><a class="dropdown-item" href="#">Services 3</a></li>
              </ul>
            </li>
            <li class="nav-item mx-0 mx-lg-2 dropdown">
              <a
                class="nav-link dropdown-toggle  text-blue"
                type="button"
                data-bs-toggle="dropdown"
                >Technologies</a
              >
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Technologies 1</a></li>
                <li><a class="dropdown-item" href="#">Technologies 2</a></li>
                <li><a class="dropdown-item" href="#">Technologies 3</a></li>
              </ul>
            </li>
            <li class="nav-item mx-0 mx-lg-2">
              <a class="nav-link  text-blue" href="#">Careers</a>
            </li>
          </ul>
          <div class="navbar-nav justify-content-end gap-2">
            <a
              href="#"
              class="btn bg-white text-black fw-bold px-3 py-auto border-blue-button rounded"
              >BUILD A TEAM <img src="@/src/assets/images/Vector.png"
            /></a>
            <a class="nav-link text-blue" href="#">Contact us</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import "@/src/assets/scss/components/_nav.scss";
</script>