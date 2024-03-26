<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<template>
  <div class="grid">
    <div class="centered-flex">
      <div class="intro">
        <h2 class="mb-3 text-white">Scopri</h2>
      </div>
      <div class="page animate slide">
        <div class="bubble">
          <img src="/img/oscar-panoramic.jpg" alt="panoramica" class="discover">
          <div class="content">
            <p>Oscar spiaggia 298 è uno stabilimento balneare a misura di famiglie e ideale per giovani che vengono in riviera per divertirsi e per l'ottima cucina a base di prodotti freschi e di stagione.</p>
          </div>
        </div>
      </div>
    </div>
    <hr class="separate extra">
    <!------------------------------------------------------------------------------------------------------->
    <div class="centered-flex">
      <div class="title">
        <h2 class="informazioni mb-3">Servizi</h2>
      </div>
      <div class="page animate slide">
        <div class="bubble">
          <img src="/img/beach-volley.jpg" alt="" class="info-img-volley">
          <div class="info">
            <ul>
              <li>Area gioco per <em class="text-danger">bambini</em></li>
              <li>Campi:</li>
              <ul class="inner-ul">
                <li class="inner"><img class="list-icon" src="/svg/racchettoni.svg" alt="">Racchettoni</li>
                <li class="inner"><img class="list-icon" src="/svg/volley.svg" alt="">Beach Volley</li>
                <li class="inner"><img class="list-icon" src="/svg/basket.svg" alt="">Basket</li>
                <li class="inner"><img class="list-icon" src="/svg/ping.svg" alt="">Ping Pong</li>
                <li class="inner"><img class="list-icon" src="/svg/bocce.svg" alt="">Bocce</li>
              </ul>
              <li><em class="text-success">Wi-Fi</em> Gratuito</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="separate extra">
    <!------------------------------------------------------------------------------------------------------->
    <div class="centered-flex">
      <div class="title">
        <h2 class="informazioni mb-3">Social</h2>
      </div>
      <div class="page animate slide">
        <div class="bubble">
          <img src="/img/cann.jpg" alt="panoramica" class="info-img">
          <div class="info">
            <p>Rimani aggiornato riguardo occasioni ed eventi!</p>
            <div class="social-links">
              <a class="social" href="https://www.instagram.com/oscar_spiaggia298?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><img class="social-img" src="/svg/instagram.svg" alt="Instagram"> oscar_spiaggia298</a>
              <a class="social" href="https://www.facebook.com/OscarSpiaggia298/?locale=it_IT" target="_blank"><img class="social-img" src="/svg/facebook.svg" alt="Facebook"> OscarSpiaggia298</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="separate extra">
    <!------------------------------------------------------------------------------------------------------->
    <div class="centered-flex">
      <div class="title">
        <h2 class="informazioni mb-3">Info & Prenotazioni</h2>
      </div>
      <div class="page animate slide">
        <div class="bubble">
          <img src="/img/asciuga.jpg" alt="panoramica" class="info-img">
          <div class="info">
            <div class="place">
              <p><i class="bi bi-geo-alt"></i> Via VIII Traversa<br><span class="location">(Milano Marittima)</span></p>
            </div>
            <p><i class="bi bi-telephone"></i> 0544 992598</p>
            <hr class="sep-info">
            <p><i class="bi bi-star"></i> Valutazione · <span class="val">4,7</span></p>
            <p><i class="bi bi-wallet2"></i> Fascia di prezzo · <span class="eur">€€</span></p>
          </div>
        </div>
      </div>
    </div>
    <hr class="separate extra">
    <!------------------------------------------------------------------------------------------------------->
    <div class="centered-flex">
      <div class="title">
        <h2 class="informazioni mb-3">Staff</h2>
      </div>
      <div class="page animate slide">
        <div class="bubble-staff">
          <div class="info">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate {
    animation-duration: 0.45s;
    animation-duration: 0.7s;
    /*running slower to show effect*/
    animation-delay: 0.1s;
    animation-name: animate-fade;
    animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
    animation-fill-mode: backwards;
  }

  /* Slide In */
  .animate.slide {
    animation-name: animate-slide;
  }
  
  @keyframes animate-slide {
    0% {
      opacity: 0;
      transform: translate(0, 20px);
    }
  
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  
  /* Animation Delays */
  .delay-1 {
    animation-delay: 0.6s;
  }
  
  .delay-2 {
    animation-delay: 0.7s;
  }
  
  .delay-3 {
    animation-delay: 0.8s;
  }
  
  @media screen and (prefers-reduced-motion: reduce) {
    .animate {
      animation: none !important;
    }
  }

/*-------------------------------------------------------------------------------------------------------------------------------------------- */

@media only screen and (min-width: 1000px) {
  li {
    text-align: start;
    font-family: 'Comfortaa', sans-serif;
    color: #23417a;
    font-weight: 900;
  }

  li.inner {
    line-height: 1.8;
  }

  ul.inner-ul {
    text-align: start;
  }

  .list-icon {
    width: 27px;
    margin-right: 8px
  }

  html {
    scroll-behavior: smooth;
  }

  .extra {
    display: none;
  }

  hr.sep-info {
    width: 80%;
    border: 1px solid #2f59a644;
    border-radius: 50px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  
  img.discover {
    width: 75%;
    border: 1px solid transparent;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.425) 0px 2px 50px 4px;
  }

  img.info-img {
    width: 60%;
    border: 1px solid transparent;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.425) 0px 2px 50px 4px;
    margin-bottom: 15px;
  }

  img.info-img-volley {
    width: 45%;
    border: 1px solid transparent;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.425) 0px 2px 50px 4px;
    margin-bottom: 8px;
  }

  .social-img {
    width: 25px;
    border: 1px solid transparent;
    border-radius: 8px;
  }

  .intro, .informazioni {
    text-align: center;
    text-shadow: #ffffff 1px 0 6px;
    font-family: "Comfortaa", sans-serif;
    color: white;
  }

  .intro>h2, .title>h2 {
    font-size: 35px;
  }

  .page {
    position: relative;
    z-index: 3;
    border: 1px solid white;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.521);
    /* Sfondo semi-trasparente */
    box-shadow: rgba(0, 0, 0, 0.56) 0px 8px 35px 4px;
    width: 95%;
    min-height: 88%;
    margin: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    transition: all 0.3s ease-in-out;
  }

  .page:hover {
    transform: scale(1.04);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 60px
  }

  .centered-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  .bubble {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .bubble-staff {
    min-height: 100%;
    min-width: 100%;
  }

  .content {
    position: relative;
    z-index: 3;
    border-radius: 20px;
    padding: 8px;
    width: 90%;
    border: 1px solid rgba(68, 67, 67, 0.075);
    background-color: rgba(255, 255, 255, 0.76);
    box-shadow: rgba(0, 0, 0, 0.56) 0px 2px 70px 4px;
    text-align: center;
    margin-top: 10px;
  }

  p {
    color: #23417a;
    font-weight: 800;
    font-family: "Comfortaa", sans-serif;
    margin-bottom: 5px;
  }

  .info {
    position: relative;
    z-index: 3;
    text-align: center;
    border-radius: 20px;
    padding: 8px;
    width: 80%;
    border: 1px solid rgba(68, 67, 67, 0.075);
    background-color: rgba(255, 255, 255, 0.76);
    /* Sfondo semi-trasparente */
    box-shadow: rgba(0, 0, 0, 0.56) 0px 2px 70px 4px;
    margin-bottom: 5px;
  }

  .social-links {
    display: flex;
    flex-direction: column;
  }

  i {
    color: #4fa1ca;
  }
  
  .eur {
    color: rgb(25, 185, 4);
    font-style: italic;
    font-weight: bolder;
  }
  
  .val {
    color: #ce9d0a;
    font-weight: bolder;
    font-style: italic;
  }
  
  span.location {
    color: #23417a;
    font-size: 13px;
  }

  a.social {
    font-size: 16px;
    margin-bottom: 5px;
    color: #2f59a6;
    font-family: "Comfortaa", sans-serif;
    font-weight: 700;
    text-shadow: #4fa1ca 1px 0 10px;
    transition: all 0.18s ease-in-out;
  }

  a.social:hover {
    text-decoration: none;
    transform: scale(1.08);
  }
}
/*--------------------------------------------------------------------------------------------------------------------------------------- */

@media only screen and (max-width: 999px) {
  li {
    text-align: start;
    font-family: 'Comfortaa', sans-serif;
    color: #23417a;
    font-weight: 900;
  }

  li.inner {
    line-height: 1.8;
  }

  .list-icon {
    width: 27px;
    margin-right: 8px
  }

  img.info-img-volley {
    width: 75%;
    border: 1px solid transparent;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.425) 0px 2px 50px 4px;
    margin-bottom: 15px;
  }

  .separate {
    background-color: transparent;
    border: 1px solid transparent;
    margin-bottom: 30px;
  }

  .html {
    -webkit-overflow-scrolling: touch;
  }

  .social-links {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;
  }
  
  .social {
    background-color: transparent;
    color: #2f59a6;
    font-size: 16px;
  }
  
  .social-img {
    width: 25px;
    box-shadow: 0;
  }
  
  * {
    color: white;
  }
  
  .title{
    text-align: center;
  }
  
  .place {
    line-height: 0.8;
    margin-bottom: 10px;
  }
  
  .page {
    position: relative;
    z-index: 3;
    border: 1px solid white;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.521);
    /* Sfondo semi-trasparente */
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    width: 95%;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  
  img {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }

  img.info-img {
    width: 75%;
    border: 1px solid transparent;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.425) 0px 2px 50px 4px;
    margin-bottom: 15px;
  }
  
  .bubble {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  h2 {
    color: #ffffff;
    /* text-shadow: #2f59a6 1px 0 8px; */
    text-shadow: #ffffff 1px 0 10px;
    font-weight: bold;
    font-family: "Comfortaa", sans-serif;
  }
  
  h2.informazioni {
    color: #ffffff;
    text-shadow: #2f59a6 1px 0 8px;
    /* text-shadow: #ffffff 1px 0 10px; */
    font-weight: bold;
  }
  
  hr.sep {
    border: 10px solid transparent;
  }
  
  .intro {
    text-align: center;
  }
  
  .discover {
    position: relative;
    width: 80%;
    z-index: 3;
    border: 1px solid transparent;
    border-radius: 30px;
    box-shadow: rgb(33, 34, 34) 0px 10px 20px -10px;
    filter: opacity(95%);
  }
  
  .content {
    position: relative;
    z-index: 3;
    border-radius: 20px;
    padding: 8px;
    width: 90%;
    border: 1px solid rgba(68, 67, 67, 0.075);
    background-color: rgba(255, 255, 255, 0.76);
    /* Sfondo semi-trasparente */
    box-shadow: rgba(0, 0, 0, 0.425) 0px 12px 20px 4px;
    text-align: center;
    margin-top: 10px;
  }
  
  p {
    margin: 0;
    font-weight: 100;
    color: #2f59a6;
    font-weight: bold;
  }
  
  hr {
    border: 1px solid #4fa1ca;
    border-radius: 20px;
    width: 90%;
  }
  
  .info {
    position: relative;
    z-index: 3;
    text-align: center;
    border-radius: 20px;
    padding: 8px;
    width: 80%;
    border: 1px solid rgba(68, 67, 67, 0.075);
    background-color: rgba(255, 255, 255, 0.76);
    /* Sfondo semi-trasparente */
    box-shadow: rgba(0, 0, 0, 0.56) 0px 2px 70px 4px;
    margin-bottom: 5px;
  }
  
  i {
    color: #4fa1ca;
  }
  
  .eur {
    color: rgb(25, 185, 4);
    font-style: italic;
    font-weight: bolder;
  }
  
  .val {
    color: #ce9d0a;
    font-weight: bolder;
    font-style: italic;
  }
  
  span.location {
    color: #2f59a6;
    font-size: 13px;
  }
}

</style>