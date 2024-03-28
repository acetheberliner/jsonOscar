<template>
  <!-- <div class="overlay"></div> -->
  <div class="full-page">
    <main>
      <div class="container-fluid">
        <div class="row nav d-flex align-items-center">
          <nav class="navbar">
            <div class="logo col-12 col-md-12">
              <div class="col-2 col-md-1">
                <router-link to="/" class="rlink"><img src="/svg/vect-white.svg" alt="Logo" class="nav-logo" loading="lazy"></router-link>
              </div>
              <div class="col-6 col-md-5">
                <h1>
                  <router-link to="/" class="rlink osc">Oscar Spiaggia <span class="extra">· </span><span class="text298">298<span class="placeholder-298"> sss</span></span></router-link>
                </h1>
              </div>
              <div class="col-1 col-md-4"></div>
              <div class="col-2 col-md-2 menu-ss">
                <h3 class="menu-text">Menù <i class="bi bi-caret-right"></i></h3>
                <button class="btn navbar-toggler menu-button" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <img src="/svg/menusvg.svg" class="menu bi bi-list logo-menu" alt="Menu icon" loading="lazy">
                  <h6 class="extra-in-desk">Menù</h6>
                </button>
              </div>
              <div class="col-2 col-md-1 posta"></div>
            </div>
          </nav>
          <div class="container d-flex justify-content-center text-center">
            <div class="col-12 col-md-12">
              <div class="collapse text-center m-2" id="navbarToggleExternalContent">
                <h4 class="text-white">Menù</h4>
                <div class="links">
                  <router-link to="/rist" class="routerlink shad">Ristorante</router-link>
                  <router-link to="/coffee" class="routerlink shad">Bar</router-link>
                  <router-link to="/wine" class="routerlink shad">Cantina</router-link>
                  <router-link to="/cocktail" class="routerlink shad">Cocktail</router-link>
                </div>
              </div>
            </div>
          </div>
          <hr>
        </div>
      </div>
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from 'vue-router';

export default defineComponent({
  methods: {
  },
  mounted() {
    const routerLinks = document.querySelectorAll('.routerlink');

    routerLinks.forEach(link => {
      link.addEventListener('click', () => {
        const navbarToggle = document.getElementById('navbarToggleExternalContent');

        if (navbarToggle?.classList.contains('show')) {
          navbarToggle?.classList.remove('show');
        }
      });
    });
  }
});
</script>

<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"); */
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

@font-face {
  font-family: font298;
  src: url(/fonts/alex-brush.regular.ttf);
}

/*----------------------------------------------------------------------------------------------------------------------------------------- */
@media only screen and (min-width: 1000px) {
  .menu-ss {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .text298 {
    background: -webkit-linear-gradient(#0364ff, #061c41);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: font298;
    font-weight: bold;
    font-size: 70px;
    text-shadow: #ffffff00 2px 0 8px;
    text-shadow: #ffffff 1px 0 50px;
    width: 10%;
  }
  
  .placeholder-298 {
    background: red;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: font298;
    font-weight: bold;
    font-size: 70px;
    text-shadow: #ffffff00 2px 0 8px;
    text-shadow: #ffffff 1px 0 50px;
    width: 10%;
    opacity: 0;
  }

  html {
    scroll-behavior: smooth;
  }
  
  .col-12 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
  }

  .extra-in-desk {
    display: none;
  }

  .col-md-1 {
    text-align: center;
    padding: 0;
  }

  .col-2 {
    padding: 0;
  }

  .discover {
    width: 30px;
  }

  .full-page {
    position: relative; /* Posiziona l'overlay in modo relativo rispetto a questo elemento */
    height: 100vh;
    overflow-y: auto;
    background: linear-gradient(to bottom, rgba(14, 14, 14, 0.295), rgba(22, 22, 22, 0.219)), url(/img/backumbr.webp);
    background-size:cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: 1;
    filter: opacity(100%);
  }

  .nav-logo {
    width: 5em;
    filter: grayscale(0%);
  }

  .logo-menu {
    width: 0.8em;
    filter: grayscale(0%);
  }

  .rlink {
    text-decoration: none;
    color: white;
    width: 100%;
  }

  h1 {
    margin: 0;
    font-size: 22px;
    text-shadow: #ffffff 1px 0 6px;
    
  }

  h1>.rlink {
    font-weight: 300;
    font-size: 50px;
    white-space: nowrap;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
  }

  .col-md-2 {
    margin-left: 50px;
  }

  .col-md-12{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .navbar-toggler {
    position: relative;
    right: 0;
    /* transition: transform 0.5s ease; */
    display: flex;
    align-items: center;
  }

  .menu-text {
    font-family: 'Comfortaa', sans-serif;
    margin: 0;
    color: #fff;
    width: fit-content;
    animation: blink 4s infinite alternate;
  }

  @keyframes blink {
    from {
      color: transparent; /* inizia con il testo trasparente */
    }
    to {
      color: #fff; /* transizione al bianco */
      text-shadow: #fff 2px 0 8px;
    }
  }

  .bi-list {
    text-shadow: #fff 2px 0 8px;
    transition: all 0.1s ease-in-out;
  }

  .bi-list:hover {
    /* transform: rotate(20deg) rotate(-40deg) scale(1.1); */
    animation: bouncers 0.3s infinite alternate;
    outline-color: transparent;
  }

  @keyframes bouncers {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-20deg);
    }
  }

  .menu {
    color: white;
    font-size: 60px;
    position: relative;
    float: right;
  }

  .navbar-toggler:after, .navbar-toggler:focus {
    /* transform: rotate(90deg); */
    outline: none;
  }

  .navbar {
    padding-left: 20px;
    padding-top: 40px;
    padding-right: 0;
    min-width: 95%;
    justify-content: center;
    align-items: center;
    z-index: 3;
    margin-left: auto;
    margin-right: auto;
  }

  hr {
    border: 1px solid white;
    border-radius: 20px;
    box-shadow: #1d2c3b 0px 10px 20px -10px;
    width: 95%;
    margin-top: 15px;
    margin-bottom: 40px
  }

  .container {
    z-index: 3;
    margin-bottom: 25px;
    max-width: 100%; /* O imposta una larghezza massima appropriata */
    margin-left: auto;
    margin-right: auto;
  }

  .nav {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2.5%;
    max-width: 100%;
    margin-top: 15px;
  }
  
  .links>.routerlink {
    border: 1px solid rgba(255, 255, 255, 0.329);
    /* background-color: rgba(255, 255, 255, 0.192); */
    /* backdrop-filter: blur(20px); */
    box-shadow: #ffffff9f 0px 8px 40px 1px;
    border-radius: 10px;
    padding: 18px;
    min-width: 20%;
    padding-bottom: 5px;
    padding-top: 5px;
    font-size: bolder;
    font-size: 35px;
    background-color: rgba(61, 60, 60, 0.123);
    color: rgba(255, 255, 255, 0.781);
    text-shadow: #204075 1px 0 6px;
    z-index: 3;
    transition: all 0.1s ease-in-out;
    font-weight: 500;
    font-family: "Comfortaa", sans-serif;
  }
  
  
  .rlink {
    text-decoration: none;
    color: white;
  }
  
  .osc {
    transition: all 0.1s ease-in-out;
  }

  .osc:hover {
    transform: scale(1.02);
  }

  .shad:hover, .shad:focus {
    text-decoration: none;
    transform: scale(1.06);
    text-shadow: #fff 2px 0 8px;
    box-shadow: #fff 0px 8px 40px 1px;
    color: #fff;
  }

  h4{
    text-shadow: #ffffff 1px 0 6px;
    font-size: 45px;
    font-family: "Comfortaa", sans-serif;
  }

  .collapsed-navbar {
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 6px;
    width: 100%; 
  }

  div#navbarToggleExternalContent {
    width: 100%;
  }
}

/*----------------------------------------------------------------------------------------------------------------------------------------- */
@media only screen and (max-width: 999px) {
  .menu-button {
    outline: none;
  }

  .text298 {
  color: white;
  font-family: font298;
  font-weight: bold;
  font-size: 38px;
  text-shadow: #ffffff00 2px 0 8px;
  text-shadow: #ffffff 1px 0 10px;
  width: 10%;
  max-height: 10px;
}

.posta {
  max-height: 0;
}

.placeholder-298 {
  display: none;
}

  .menu-text {
    font-family: 'Comfortaa', sans-serif;
    margin: 0;
    color: #fff;
    width: 100%;
    font-size: 16px;
    animation: blink 7s infinite alternate;
    display: none;
  }

  .logo-menu {
    width: 2em;
    filter: grayscale(0%);
    margin-bottom: 5px;
  }

  .extra {
    display: none;
  }

  html {
    scroll-behavior: touch;
  }

  .extra-in-desk {
    margin: 0;
    font-family: 'Comfortaa', sans-serif;
  }

  .col-2 {
    padding: 0;
    text-align: center;
  }

  * {
    font-family: "Comfortaa", sans-serif;
    font-weight: bold;
    color: white;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }
  
  .container {
    z-index: 3;
    margin-bottom: 25px;
  }
  
  hr {
    border: 1px solid white;
    border-radius: 20px;
    margin-top: 0;
    box-shadow: rgb(29, 44, 59) 0px 10px 20px -10px;
    width: 90%;
  }
  
  .full-page {
    position: relative; /* Posiziona l'overlay in modo relativo rispetto a questo elemento */
    height: 100vh;
    overflow-y: auto;
    background: linear-gradient(to bottom, rgba(14, 14, 14, 0.295), rgba(22, 22, 22, 0.311)), url(/img/oscar2.webp);
    background-size: cover;
    background-repeat: repeat;
    background-attachment: fixed;
    z-index: 1;
    filter: opacity(95%);
  }
  
  .navbar {
    padding-left: 20px;
    padding-top: 30px;
    padding-bottom: 0;
    min-width: 100%;
    justify-content: center;
    align-items: center;
    z-index: 3;
  }
  
  h1 {
    margin: 0;
    padding: 1px;
    padding-left: 0;
    font-size: 22px;
    text-shadow: #ffffff 1px 0 10px;
  }
  
  h1>.rlink {
    font-weight: 100;
  }
  
  h4{
    text-shadow: #ffffff 1px 0 6px;
    font-size: 30px;
    font-family: "Comfortaa", sans-serif;
  }
  
  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 0;
  }
  
  .nav-logo {
    width: 55px;
    filter: grayscale(0%);
  }
  
  i {
    font-size: 40px;
    padding: 0;
  }
  
  .button {
    padding: 0px;
  }
  
  .btn {
    padding: 0;
  }
  
  .btn:focus {
    box-shadow: 0 0 0 0.2rem rgba(235, 235, 235, 0.25);
  }
  
  .collapsed-navbar {
    margin-left: auto;
    margin-right: auto;
    margin-top: 6px;
    width: 100%;
    
  }
  
  .overlay {
    position:relative; /* Posiziona l'overlay in modo assoluto */
    left: 3%;
    top: 2%;
    width: 94%;
    height: 96%;
    z-index: 2; /* Assicura che l'overlay sia sopra il contenuto */
    background-color: rgba(255, 255, 255, 0.356); /* Sfondo semi-trasparente */
    border-radius: 20px;
  }
  
  .mario {
    justify-content: center;
  }
  
  .links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  
  .links>.routerlink {
    border: 1px solid #ffffff;
    border-radius: 15px;
    padding: 6px;
    box-shadow: rgb(29, 44, 59) 0px 10px 20px -10px;
    background-color: rgba(255, 255, 255, 0.253); /* Sfondo semi-trasparente */
    font-size: bolder;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
    font-size: 22px;
    color: #fdfeff;
    text-shadow: #ffffff 1px 0 6px;
    z-index: 3;
    font-weight: 100;
    transition: all 0.1s ease-in-out;
  }
  
  .rlink {
    text-decoration: none;
    color: white;
  }
  
  .routerlink:hover, .rlink:focus {
    text-decoration: none;
    transform: scale(1.06);
  }
}

</style>
