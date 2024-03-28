<script lang="ts">
import { defineComponent } from "vue";
import tuttiRistorante from "../assets/food.json"

import PostFood from "../components/post-food.vue";

export default defineComponent({
  data() {
    return {
      tuttiRistorante,
      selectedCategory: '',
      categories: [] as String[],
      searchTerm: '', // Add a new property for search term
      isOpen: false
    }
  },
  components: {
    PostFood
  },
  created() {
    this.categories = [...new Set(this.tuttiRistorante.map(food => food.categoria))];
  },
  methods: {
    filteredRist() {
      let filtered = this.tuttiRistorante;

      // Applica il filtro per categoria, se selezionata
      if (this.selectedCategory) {
        filtered = filtered.filter((food) => food.categoria === this.selectedCategory);
      }

      // Applica il filtro per il termine di ricerca, se presente
      if (this.searchTerm) {
        const searchTermLower = this.searchTerm.toLowerCase();
        filtered = filtered.filter((food) =>
          food.nome.toLowerCase().includes(searchTermLower)
        );
      }

      return filtered;
    },

    toggleCollapse() {
      this.isOpen = !this.isOpen;
    },
  },
})
</script>

<template>
  <div class="page animate slide">
    <!------------------------------------------------------------------------------------------------------------>
    <div class="title">
      <h2>Ristorante</h2>
    </div>
    <div class="gallery">
      <img class="odd gallery__img gallery__item--1" src="/img/pesce.webp" alt="Pesce" loading="lazy">
      <img class="tumb even gallery__img gallery__item--2" src="/img/pasta.webp" alt="Pasta" loading="lazy">
      <img class="fing gin odd gallery__img gallery__item--3" src="/img/insalata.webp" alt="Insalata" loading="lazy">
      <img class="gin even extra gallery__img gallery__item--4" src="/img/cozze.webp" alt="Cozze" loading="lazy">
      <img class="gin odd extra gallery__img gallery__item--5" src="/img/pane.webp" alt="Panino" loading="lazy">
      <img class="gin even extra gallery__img gallery__item--6" src="/img/tagliolini.webp" alt="Tagliolini" loading="lazy">
      <img class="gin odd extra gallery__img gallery__item--7" src="/img/piadina.webp" alt="Piadina" loading="lazy">
      <img class="gin even extra gallery__img gallery__item--8" src="/img/marinara.webp" alt="Marinara" loading="lazy">
      <img class="gin odd extra gallery__img gallery__item--9" src="/img/cocomero.webp" alt="Cocomero" loading="lazy">
      <img class="gin even extra gallery__img gallery__item--10" src="/img/mais.webp" alt="Mais" loading="lazy">
      <img class="gin odd extra gallery__img gallery__item--11" src="/img/malfor.webp" alt="Malformati" loading="lazy">
    </div>
    <div class="meal-list page animate slide delay-1">
      <div class="portata">
        <h2>Portate</h2>
      </div>
      <hr class="splitter">
      <!-------------------------------------------------------------------------------------------------------------------------------------------->
      <div class="cass">
        <button class="navbar-toggler text-white antipasti-button" type="button" data-toggle="collapse"
          data-target="#antipasti" @click="toggleCollapse()">
          <h2>Antipasti</h2>
        </button>
        <div class="col-12">
          <div class="col-12 collapse" id="antipasti">
            <PostFood v-for="food in filteredRist().filter(food => food.categoria.toLocaleLowerCase() === 'antipasto')"
              :key="food.idfood" :food="food" />
          </div>
        </div>
      </div>
      <hr class="splitter">
      <!-------------------------------------------------------------------------------------------------------------------------------------------->
      <div class="cass">
        <button class="navbar-toggler text-white antipasti-button" type="button" data-toggle="collapse"
          data-target="#primi" @click="toggleCollapse()">
          <h2>Primi</h2>
        </button>
        <div class="col-12">
          <div class="col-12 collapse" id="primi">
            <PostFood v-for="food in filteredRist().filter(food => food.categoria.toLocaleLowerCase() === 'primo')"
              :key="food.idfood" :food="food" />
          </div>
        </div>
      </div>
      <hr class="splitter">
      <!-------------------------------------------------------------------------------------------------------------------------------------------->
      <div class="cass">
        <button class="navbar-toggler text-white antipasti-button" type="button" data-toggle="collapse"
          data-target="#secondi" @click="toggleCollapse()">
          <h2>Secondi</h2>
        </button>
        <div class="col-12">
          <div class="col-12 collapse" id="secondi">
            <PostFood v-for="food in filteredRist().filter(food => food.categoria.toLocaleLowerCase() === 'secondo')"
              :key="food.idfood" :food="food" />
          </div>
        </div>
      </div>
      <hr class="splitter">
      <!-------------------------------------------------------------------------------------------------------------------------------------------->
      <div class="cass">
        <button class="navbar-toggler text-white antipasti-button" type="button" data-toggle="collapse"
          data-target="#insalate" @click="toggleCollapse()">
          <h2>Insalate</h2>
        </button>
        <div class="col-12">
          <div class="col-12 collapse" id="insalate">
            <PostFood v-for="food in filteredRist().filter(food => food.categoria.toLocaleLowerCase() === 'insalata')"
              :key="food.idfood" :food="food" />
          </div>
        </div>
      </div>
      <hr class="splitter">
      <!-------------------------------------------------------------------------------------------------------------------------------------------->
      <div class="cass">
        <button class="navbar-toggler text-white antipasti-button" type="button" data-toggle="collapse"
          data-target="#panini" @click="toggleCollapse()">
          <h2>Panini</h2>
        </button>
        <div class="col-12">
          <div class="col-12 collapse" id="panini">
            <PostFood v-for="food in filteredRist().filter(food => food.categoria.toLocaleLowerCase() === 'panino')"
              :key="food.idfood" :food="food" />
          </div>
        </div>
      </div>
      <hr class="splitter">
      <!-------------------------------------------------------------------------------------------------------------------------------------------->
      <div class="cass">
        <button class="navbar-toggler text-white antipasti-button" type="button" data-toggle="collapse"
          data-target="#dessert" @click="toggleCollapse()">
          <h2>Dessert</h2>
        </button>
        <div class="col-12">
          <div class="col-12 collapse" id="dessert">
            <PostFood v-for="food in filteredRist().filter(food => food.categoria.toLocaleLowerCase() === 'dessert')"
              :key="food.idfood" :food="food" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery img {
  transition: box-shadow 0.3s ease; /* Aggiunge una transizione fluida all'ombra */
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.7); /* Aumenta l'ombra al passaggio del mouse */
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
  .gallery__item--1 {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .gallery__item--2 {
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .gallery__item--3 {
    grid-column-start: 6;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 6;
  }

  .gallery__item--4 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 6;
  }

  .gallery__item--5 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 6;
    grid-row-end: 9;
  }

  .gallery__item--6 {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  
  .gallery__item--7 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 6;
  }

  .gallery__item--8 {
    grid-column-start: 5;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 6;
  }

  .gallery__item--9 {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 6;
    grid-row-end: 9;
  }

  .gallery__item--10 {
    grid-column-start: 4;
    grid-column-end: 7;
    grid-row-start: 6;
    grid-row-end: 9;
  }

  .gallery__item--11 {
    grid-column-start: 7;
    grid-column-end: 9;
    grid-row-start: 6;
    grid-row-end: 9;
  }

  .gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.02s ease-in-out;
  }

  .gallery__img:hover {
    transform: scale(1.03);
    box-shadow: rgba(151, 151, 151, 0.56) 0px 8px 30px 4px;
  }

  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .title>h2 {
    color: white;
    text-shadow: #fff 1px 0 10px;
    font-family: 'Comfortaa', sans-serifs;
    font-size: 35px;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 5vw);
    grid-gap: 15px;
    margin-top: 10px;
    margin-bottom: 40px;
    width: 98%;
    margin-left: auto;
    margin-right: auto;
  }

  img {
    border: 1px solid transparent;
    border-radius: 20px;
  }

  .meal-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.548);
    width: 70%;
    border: 1px solid rgba(255, 255, 255, 0.452);
    border-radius: 20px;
    padding: 6px;
    padding-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    margin-bottom: 20px;
  }
  
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .portata>h2 {
    color: #ffffff;
    text-shadow: #0e3b88 1px 0 10px;
    font-family: 'Comfortaa', sans-serif;
  }

  .antipasti-button>h2 {
    color: #2c57a3;
    text-shadow: #4fa1cae8 1px 0 10px;
    font-family: 'Comfortaa', sans-serif;
  }
  
  .splitter {
    background: linear-gradient(to right, #0e3b88, #4bb9f0);
    height: 2px;
    border-radius: 50px;
    width: 90%;
    margin-top: 0px;
  }

  .antipasti-button {
    border-radius: 20px;
    border: 1px solid rgba(68, 67, 67, 0.075);
    background-color: rgba(255, 255, 255, 0.712);
    /* Sfondo semi-trasparente */
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    width: 95%;
    margin-bottom: 10px;
    padding: 18px;
    text-align: start;
    vertical-align: middle;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .searchbar-container {
    display: flex;
    flex-direction: row;
    place-content: center;
    text-align: center;
    width: 100%;
  }
  
  form {
    width: 88%;
  }
  
  .filter-tab {
    width: 100%;
  }
  
  input {
    margin-bottom: 10px;
    border-radius: 10px;
    font-size: 22px;
    box-shadow: rgb(29, 44, 59) 0px 10px 20px -10px;
  }
  
  .radio-container {
    display: flex;
    flex-direction: row;
    width: 88%;
  }
  
  .form {
    border-radius: 10px;
    padding: 10px;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.719);
    /* Sfondo semi-trasparente */
    border: 1px solid #4fa1ca;
    color: #2c57a3;
    text-shadow: 1px 1px #4fa1ca;
    box-shadow: rgb(29, 44, 59) 0px 10px 20px -10px;
    width: 100%;
  }

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  h2 {
    font-weight: bold;
    text-shadow: #ffffff 1px 0 10px;
    font-family: 'Comfortaa' sans-serif;
    margin: 0;
  }
  
  button {
    border: 1px solid transparent;
    background-color: transparent;
    margin-bottom: 24px;
  }
  
  button:focus,
  button:after {
    outline: none;
  }
  
  i {
    color: white;
    font-size: 30px;
    text-shadow: 2px 2px #ff0202;
  }
  
  p {
    border: 1px solid rgba(255, 0, 0, 0.384);
    background-color: rgba(255, 0, 0, 0.301);
    border-radius: 20px;
    padding: 8px;
    text-align: center;
    margin-bottom: 30px;
  }
  
  #info {
    width: 90%;
  }
  
  footer {
    bottom: 0;
    position: sticky;
  }

  .cass {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
}
/*---------------------------------------------------------------------------------------------------------------------------------*/

@media only screen and (max-width: 999px) {
  .extra {
    display: none;
  }
  
  .gui-toast {
    max-inline-size: min(25ch, 90vw);
    padding-block: .5ch;
    padding-inline: 1ch;
    border-radius: 3px;
    font-size: 1rem;
  }
  
  .portata>h2 {
    color: #ffffff;
    text-shadow: #0e3b88 1px 0 10px;
    font-family: 'Comfortaa' sans-serif;
  }
  
  .cass {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  
  .antipasti-button {
    border-radius: 20px;
    border: 1px solid rgba(68, 67, 67, 0.075);
    background-color: rgba(255, 255, 255, 0.712);
    /* Sfondo semi-trasparente */
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    width: 95%;
    margin-bottom: 10px;
    padding: 18px;
    text-align: start;
    vertical-align: middle;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  
  .antipasti-button>h2 {
    color: #2c57a3;
    text-shadow: #4fa1cae8 1px 0 10px;
  }
  
  .splitter {
    background: linear-gradient(to right, #0e3b88, #4bb9f0);
    height: 2px;
    border-radius: 50px;
    width: 90%;
    margin-top: 0px;
  }
  
  p.attention {
    margin: 0;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  }
  
  img {
    width: 280px;
    border: 1px solid transparent;
    border-radius: 20px;
    position: absolute;
    z-index: 99;
    transform: translateX(-75px) translateY(180px);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
  
  img.tumb {
    width: 200px;
    position: relative;
    z-index: 100;
    transform: translateX(80px);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
  
  img.fing {
    width: 180px;
    z-index: 101;
    transform: translateX(-75px) translateY(-40px);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
  
  .searchbar-container {
    display: flex;
    flex-direction: row;
    place-content: center;
    text-align: center;
    width: 100%;
  }
  
  form {
    width: 88%;
  }
  
  .filter-tab {
    width: 100%;
  }
  
  input {
    margin-bottom: 10px;
    border-radius: 10px;
    font-size: 22px;
    box-shadow: rgb(29, 44, 59) 0px 10px 20px -10px;
  }
  
  .radio-container {
    display: flex;
    flex-direction: row;
    width: 88%;
  }
  
  .form {
    border-radius: 10px;
    padding: 10px;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.719);
    /* Sfondo semi-trasparente */
    border: 1px solid #4fa1ca;
    color: #2c57a3;
    text-shadow: 1px 1px #4fa1ca;
    box-shadow: rgb(29, 44, 59) 0px 10px 20px -10px;
    width: 100%;
  }
  
  .gallery {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 160px;
  }
  
  .meal-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.548);
    width: 95%;
    border: 1px solid rgba(255, 255, 255, 0.452);
    border-radius: 20px;
    padding: 6px;
    padding-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    margin-bottom: 20px;
  }
  
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  h2 {
    font-weight: bold;
    text-shadow: #ffffff 1px 0 10px;
    margin: 0;
  }
  
  button {
    border: 1px solid transparent;
    background-color: transparent;
    margin-bottom: 24px;
  }
  
  button:focus,
  button:after {
    outline: none;
  }
  
  i {
    color: white;
    font-size: 30px;
    text-shadow: 2px 2px #ff0202;
  }
  
  p {
    border: 1px solid rgba(255, 0, 0, 0.384);
    background-color: rgba(255, 0, 0, 0.301);
    border-radius: 20px;
    padding: 8px;
    text-align: center;
    margin-bottom: 30px;
  }
  
  #info {
    width: 90%;
  }
  
  footer {
    bottom: 0;
    position: sticky;
  }
}

</style>