<script lang="ts">
import { defineComponent } from "vue";
import tuttiCocktail from "../assets/drink.json"
import { Toast } from 'bootstrap';

import PostDrink from "../components/post-drink.vue";

export default defineComponent({
  data() {
    return {
      tuttiCocktail,
      selectedCategory: '',
      categories: [] as String[],
      searchTerm: '', // Add a new property for search term
    }
  },
  components: {
    PostDrink
  },
  created() {
    this.categories = [...new Set(this.tuttiCocktail.map(drink => drink.categoria))];
  },
  methods: {
    filteredCocktail() {
      let filtered = this.tuttiCocktail;

      // Applica il filtro per categoria, se selezionata
      if (this.selectedCategory) {
        filtered = filtered.filter((drink) => drink.categoria === this.selectedCategory);
      }

      // Applica il filtro per il termine di ricerca, se presente
      if (this.searchTerm) {
        const searchTermLower = this.searchTerm.toLowerCase();
        filtered = filtered.filter((drink) =>
          drink.nome.toLowerCase().includes(searchTermLower)
        );
      }

      return filtered;
    },

    clearSearch() {
      // Reimposta il valore del modello searchTerm a una stringa vuota
      this.searchTerm = '';
    },

    showToast() {
      const toastLiveExample = document.getElementById('liveToast');
      const toastBootstrap = new Toast(toastLiveExample as HTMLElement)
      toastBootstrap.show();
    }
  }
})
</script>

<template>
  <div class="page animate slide">
    <div class="title">
      <h2>Cocktail</h2>
    </div>
    <div class="image">
      <img class="odd" src="/img/red.jpg" alt="cocktail">
      <img class="tumb even" src="/img/tumblr.jpg" alt="cocktail">
      <img class="gin odd extra" src="/img/drink3.jpg" alt="cocktail">
      <img class="gin even" src="/img/gin-tonic.jpg" alt="cocktail">
      <img class="gin odd extra" src="/img/spritz.jpg" alt="cocktail">
    </div>
    <!-- <button class="navbar-toggler animate slide delay-1" type="button" data-toggle="collapse" data-target="#info" aria-controls="toggle" aria-expanded="false" aria-label="Toggle navigation">
      <p class="attention">importante<br><span class="click-here">clicca qui</span></p>
    </button> -->
    <div id="info" class="">
      <p>Si informa la gentile clientela che in occasione di eventi speciali, i prezzi dei cocktail vengono calcolati differentemente. <br><br>Si ringrazia per la comprensione </p>
    </div>
    <div class="drink-list page animate slide delay-2">
      <div class="utilities">
        <div class="radio-container">
          <div class="filter selectdiv">
            <form class="form-group filter-tab" id="radio" action="#">
              <select class="form-control form" name="Categoria" v-model="selectedCategory">
                <option selected id="tutti" value="">Filtra</option>
                <option v-for="categoria in categories" :value="categoria">{{ categoria }}</option>
              </select>
            </form>
          </div>
        </div>
        <div class="searchbar-container">
          <form class="form-inline mb-2">
            <input class="form-control search" type="search" placeholder="Cerca cocktail..." aria-label="Search" v-model="searchTerm">
            <button class="btn-outline clear" type="button" @click="clearSearch()">Svuota</button>
          </form>
        </div>
      </div>
      <hr class="splitter">
      <div class="postdrink-cass">
        <PostDrink v-for="drink in filteredCocktail()" :key="drink.iddrink" :drink="drink" @click="showToast()" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.image img {
  transition: box-shadow 0.3s ease; /* Aggiunge una transizione fluida all'ombra */
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.7); /* Aumenta l'ombra al passaggio del mouse */
}

.click-here {
  font-size: 16px;
  text-transform: uppercase;
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
  .clear {
    color: rgb(255, 255, 255);
    background-color: rgba(182, 153, 21, 0.534);
    border: 1px solid rgba(226, 185, 1, 0.788);
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 0;
    text-shadow: #fff 1px 0 10px;
  }

  .clear:hover {
    background-color: rgb(209, 173, 14);
    color: white;
  }

  html {
    scroll-behavior: smooth;
  }

  img.odd {
    animation: moveUpDownOdd 8.2s ease-in-out infinite alternate; /* Modifica la durata (4s) e l'accelerazione se necessario */
  }

  img.even {
    animation: moveUpDownEven 8s ease-in-out infinite alternate; /* Modifica la durata (4s) e l'accelerazione se necessario */
  }
  
  @keyframes moveUpDownEven {
    0% {
      transform: translateY(120px);
    }
    100% {
      transform: translateY(0); /* Modifica la quantità di spostamento verticale se necessario */
    }
  }

  @keyframes moveUpDownOdd {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(120px); /* Modifica la quantità di spostamento verticale se necessario */
    }
  }

  * {
    font-family: 'Comfortaa', sans-serif; 
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

  img {
    border: 1px solid transparent;
    border-radius: 20px;
  }

  img.gin, .tumb, img, .red  {
    width: 18%;
    z-index: 99;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }

  img.odd {
    transform: translateY(-80px);
  }

  img.even {
    transform: translateY(80px);
  }

  .image {
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    position: relative;
    margin-top: 10px;
    margin-bottom: 140px;
    margin-left: auto;
    margin-right: auto;
  }

  p.attention {
    margin: 0;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    border-radius: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
    font-weight: bold;
    font-size: 22px;
    text-transform: uppercase;
    border: 1px solid rgba(255, 0, 0, 0.697);
    background-color: rgba(255, 0, 0, 0.547);
    text-shadow: #ffffff 1px 0 5px;
  }

  p {
    border: 1px solid rgba(255, 0, 0, 0.697);
    background-color: rgba(255, 0, 0, 0.547);
    border-radius: 8px;
    padding: 8px;
    text-align: center;
    margin-bottom: 30px;
    font-size: 22px;
    font-weight: 400;
    text-shadow: #ffffff 1px 0 1px;
    color: white;
    font-family: 'Comfortaa', sans-serif;
  }

  #info {
    width: 50%;
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

  .drink-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.548);
    width: 71%;
    border: 1px solid rgba(255, 255, 255, 0.452);
    border-radius: 20px;
    padding: 6px;
    padding-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    margin-bottom: 60px;
  }

  .postdrink-cass {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    justify-items: center;
    align-content: center;
  }

  .utilities {
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 98%;
  }
  
  .search {
    width: 90%;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 2px 70px 4px;
    margin-left: 1%;
    margin-right: 1%;
    border-radius: 10px;
  }

  .searchbar-container {
    width: 100%;
  }

  .splitter {
    background: linear-gradient(to right, #0e3b88, #4bb9f0);
    height: 2px;
    border-radius: 20px;
    width: 90%;
    margin-top: 0px;
    margin-bottom: 50px;
  }

  .form {
    border-radius: 10px;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.719);
    /* Sfondo semi-trasparente */
    border: 1px solid #4fa1ca;
    color: #2c57a3;
    text-shadow: 1px 1px #4fa1ca;
    box-shadow: rgb(29, 44, 59) 0px 10px 20px -10px;
    width: fit-content;
  }

  p {
    border: 1px solid rgba(255, 0, 0, 0.697);
    background-color: rgba(255, 0, 0, 0.541);
    border-radius: 8px;
    padding: 8px;
    text-align: center;
    margin-bottom: 30px;
    font-size: 22px;
    font-weight: 400;
    text-shadow: #ffffff 1px 0 1px;
  }
}
/* --------------------------------------------------------------------------------------------------------------------------------- */

@media only screen and (max-width: 999px) {
  .html {
    -webkit-overflow-scrolling: touch;
  }

  .utilities {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 90%;
  }
  
  .toast-body {
    z-index: 200;
  }

  .postdrink-cass {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .splitter {
    background: linear-gradient(to right, #0e3b88, #4bb9f0);
    height: 2px;
    border-radius: 20px;
    width: 90%;
    margin-top: 0px;
  }
  
  .search {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 2px 70px 4px;
    margin-left: 0%;
    border-radius: 10px;
  }

  .searchbar-container {
    display: flex;
    flex-direction: row;
    text-align: center;
    width: 100%;
  }
  
  .clear {
    color: rgb(255, 255, 255);
    background-color: rgba(182, 152, 21, 0.377);
    border: 1px solid rgb(226, 185, 1);
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .clear:hover {
    background-color: rgb(209, 173, 14);
    color: white;
  }

  form {
    width: 98%;
    display: flex;
    align-items: end;
    flex-direction: column;
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
  
  p.attention {
    margin: 0;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    border-radius: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
    font-weight: bold;
    font-size: 22px;
    border: 1px solid rgba(255, 0, 0, 0.697);
    background-color: rgba(255, 0, 0, 0.547);
    text-shadow: #ffffff 1px 0 5px;
    text-transform: uppercase;
  }
  
  .radio-container {
    display: flex;
    /* flex-direction: row-reverse; */
    flex-direction: row;
    width: 88%;
  }
  
  .filter {
    border-radius: 10px;
    /* display: flex;
    flex-direction: row-reverse; */
  }
  
  img {
    width: 180px;
    border: 1px solid transparent;
    border-radius: 20px;
    position: absolute;
    z-index: 99;
    transform: translateX(135px) translateY(80px);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
  
  img.tumb {
    width: 150px;
    position: relative;
    z-index: 101;
    transform: translateX(-5px) translateY(-20px);
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
  
  img.gin {
    width: 140px;
    z-index: 100;
    position: relative;
    transform: translateX(-115px) translateY(150px);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
  
  img.extra {
    display: none;
  }

  .image {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-bottom: 180px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .drink-list {
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
    text-shadow: #ffffff 1px 0 0.5px;
    vertical-align: middle;
    margin-left: 8px;
  }
  
  p {
    border: 1px solid rgba(255, 0, 0, 0.697);
    background-color: rgba(255, 0, 0, 0.37);
    border-radius: 8px;
    padding: 8px;
    text-align: center;
    margin-bottom: 30px;
    font-size: 22px;
    font-weight: 400;
    text-shadow: #ffffff 1px 0 1px;
  }
  
  #info {
    width: 90%;
  }
  
  footer {
    bottom: 0;
    position: sticky;
  }
  
  div.collapse>p {
    text-shadow: #ffffff 1px 0 10px;
  }
}
</style>