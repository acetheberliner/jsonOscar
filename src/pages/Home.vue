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
          <img src="/oscar-panoramic.jpg" alt="panoramica" class="discover">
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet diam eget arcu molestie vulputate.</p>
          </div>
        </div>
      </div>
    </div>
    <!------------------------------------------------------------------------------------------------------->
    <div class="centered-flex">
      <div class="title">
        <h2 class="informazioni mb-3">Info & Prenotazioni</h2>
      </div>
      <div class="page animate slide">
        <div class="bubble">
          <img src="/asciuga.jpg" alt="panoramica" class="info-img">
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
    <!------------------------------------------------------------------------------------------------------->
    <div class="centered-flex">
      <div class="title">
        <h2 class="informazioni mb-3">Social</h2>
      </div>
      <div class="page animate slide">
        <div class="bubble">
          <img src="/cann.jpg" alt="panoramica" class="info-img">
          <div class="info">
            <p>Rimani aggiornato riguardo occasioni ed eventi!</p>
            <div class="social-links">
              <a class="social" href="https://www.instagram.com/oscar_spiaggia298?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img class="social-img" src="/instagram.svg" alt="Instagram"> oscar_spiaggia298</a>
              <a class="social" href="https://www.facebook.com/OscarSpiaggia298/?locale=it_IT"><img class="social-img" src="/facebook.svg" alt="Facebook"> OscarSpiaggia298</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (min-width: 768px) {
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
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    width: 95%;
    min-height: 85%;
    margin: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    transition: all 0.2s ease-in-out;
  }

  .page:hover {
    transform: scale(1.05);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
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
    color: #2f59a6;
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
    color: #2f59a6;
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

@media only screen and (max-width: 768px) {
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
  
  /*-.-----------------------------------------------------------------------------------------------------*/
  .animate {
    animation-duration: 0.45s;
    animation-duration: 0.7s;
    /*running slower to show effect*/
    animation-delay: 0.1s;
    animation-name: animate-fade;
    animation-timing-function: cubic-bezier(.26, .53, .74, 1.48);
    animation-fill-mode: backwards;
  }
  
  /* Fade In */
  .animate.fade {
    animation-name: animate-fade;
    animation-timing-function: ease;
  }
  
  @keyframes animate-fade {
    0% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
  }
  
  /* Pop In */
  .animate.pop {
    animation-name: animate-pop;
  }
  
  @keyframes animate-pop {
    0% {
      opacity: 0;
      transform: scale(0.5, 0.5);
    }
  
    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
  
  /* Blur In */
  .animate.blur {
    animation-name: animate-blur;
    animation-timing-function: ease;
  }
  
  @keyframes animate-blur {
    0% {
      opacity: 0;
      filter: blur(15px);
    }
  
    100% {
      opacity: 1;
      filter: blur(0px);
    }
  }
  
  /* Glow In */
  .animate.glow {
    animation-name: animate-glow;
    animation-timing-function: ease;
  }
  
  @keyframes animate-glow {
    0% {
      opacity: 0;
      filter: brightness(3) saturate(3);
      transform: scale(0.8, 0.8);
    }
  
    100% {
      opacity: 1;
      filter: brightness(1) saturate(1);
      transform: scale(1, 1);
    }
  }
  
  /* Grow In */
  .animate.grow {
    animation-name: animate-grow;
  }
  
  @keyframes animate-grow {
    0% {
      opacity: 0;
      transform: scale(1, 0);
      visibility: hidden;
    }
  
    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
  }
  
  /* Splat In */
  .animate.splat {
    animation-name: animate-splat;
  }
  
  @keyframes animate-splat {
    0% {
      opacity: 0;
      transform: scale(0, 0) rotate(20deg) translate(0, -30px);
    }
  
    70% {
      opacity: 1;
      transform: scale(1.1, 1.1) rotate(15deg);
    }
  
    85% {
      opacity: 1;
      transform: scale(1.1, 1.1) rotate(15deg) translate(0, -10px);
    }
  
    100% {
      opacity: 1;
      transform: scale(1, 1) rotate(0) translate(0, 0);
    }
  }
  
  /* Roll In */
  .animate.roll {
    animation-name: animate-roll;
  }
  
  @keyframes animate-roll {
    0% {
      opacity: 0;
      transform: scale(0, 0) rotate(360deg);
    }
  
    100% {
      opacity: 1;
      transform: scale(1, 1) rotate(0deg);
    }
  }
  
  /* Flip In */
  .animate.flip {
    animation-name: animate-flip;
    transform-style: preserve-3d;
    perspective: 1000px;
  }
  
  @keyframes animate-flip {
    0% {
      opacity: 0;
      transform: rotateX(-120deg) scale(0.9, 0.9);
    }
  
    100% {
      opacity: 1;
      transform: rotateX(0deg) scale(1, 1);
    }
  }
  
  /* Spin In */
  .animate.spin {
    animation-name: animate-spin;
    transform-style: preserve-3d;
    perspective: 1000px;
  }
  
  @keyframes animate-spin {
    0% {
      opacity: 0;
      transform: rotateY(-120deg) scale(0.9, 0.9);
    }
  
    100% {
      opacity: 1;
      transform: rotateY(0deg) scale(1, 1);
    }
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
  
  /* Drop In */
  .animate.drop {
    animation-name: animate-drop;
    animation-timing-function: cubic-bezier(.77, .14, .91, 1.25);
  }
  
  @keyframes animate-drop {
    0% {
      opacity: 0;
      transform: translate(0, -300px) scale(0.9, 1.1);
    }
  
    95% {
      opacity: 1;
      transform: translate(0, 0) scale(0.9, 1.1);
    }
  
    96% {
      opacity: 1;
      transform: translate(10px, 0) scale(1.2, 0.9);
    }
  
    97% {
      opacity: 1;
      transform: translate(-10px, 0) scale(1.2, 0.9);
    }
  
    98% {
      opacity: 1;
      transform: translate(5px, 0) scale(1.1, 0.9);
    }
  
    99% {
      opacity: 1;
      transform: translate(-5px, 0) scale(1.1, 0.9);
    }
  
    100% {
      opacity: 1;
      transform: translate(0, 0) scale(1, 1);
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
  
  .delay-4 {
    animation-delay: 0.9s;
  }
  
  .delay-5 {
    animation-delay: 1s;
  }
  
  .delay-6 {
    animation-delay: 1.1s;
  }
  
  .delay-7 {
    animation-delay: 1.2s;
  }
  
  .delay-8 {
    animation-delay: 1.3s;
  }
  
  .delay-9 {
    animation-delay: 1.4s;
  }
  
  .delay-10 {
    animation-delay: 1.5s;
  }
  
  .delay-11 {
    animation-delay: 1.6s;
  }
  
  .delay-12 {
    animation-delay: 1.7s;
  }
  
  .delay-13 {
    animation-delay: 1.8s;
  }
  
  .delay-14 {
    animation-delay: 1.9s;
  }
  
  .delay-15 {
    animation-delay: 2s;
  }
  
  @media screen and (prefers-reduced-motion: reduce) {
    .animate {
      animation: none !important;
    }
  }
}

</style>