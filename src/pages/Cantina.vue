<script lang="ts">
import { defineComponent } from "vue";
import tuttiCantina from "../assets/wine.json"

import PostWine from "../components/post-wine.vue";

export default defineComponent({
  data() {
    return {
      tuttiCantina,
      selectedCategory: "",
      categories: [] as String[],
      searchTerm: '', // Add a new property for search term
    }
  },
  components: {
    PostWine
  },
  created() {
    this.categories = [...new Set(this.tuttiCantina.map(wine => wine.colore))];
  },
  methods: {
    filteredCantina() {
      let filtered = this.tuttiCantina;

      // Applica il filtro per categoria, se selezionata
      if (this.selectedCategory) {
        filtered = filtered.filter((wine) => wine.colore === this.selectedCategory);
      }

      // Applica il filtro per il termine di ricerca, se presente
      if (this.searchTerm) {
        const searchTermLower = this.searchTerm.toLowerCase();
        filtered = filtered.filter((wine) => wine.nome.toLowerCase().includes(searchTermLower) || wine.produttore.toLowerCase().includes(searchTermLower));
      }

      return filtered;
    },
  },
})
</script>

<template>
  <div class="page animate slide">
    <div class="title">
      <h2>Cantina</h2>
    </div>
    <div class="image">
      <img class="odd" src="/img/calice.webp" alt="calice" loading="lazy">
      <img class="tumb even" src="/img/sample.webp" alt="sample" loading="lazy">
      <img class="gin odd extra" src="/img/sample.webp" alt="sample" loading="lazy">
      <img class="gin even extra" src="/img/sample.webp" alt="sample" loading="lazy">
      <img class="gin odd extra" src="/img/sample.webp" alt="sample" loading="lazy">
    </div>
    <div class="group">
      <div class="drink-list page animate slide delay-1">
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
              <input class="form-control search" type="search" placeholder="Cerca..." aria-label="Search" v-model="searchTerm">
            </form>
          </div>
        </div>
        <hr class="splitter">
        <div class="postdrink-cass">
          <PostWine v-for="wine in filteredCantina()" :key="wine.idwine" :wine="wine" />
        </div>
      </div>
      <!-- <div class="aside extra">
        <h2>Legenda</h2>
        <hr class="splitter-right">
        <div class="legend-group">
          <div class="legend-item hovering">
            <img class="img-legend" src="/wine.svg" alt="Vino bianco">
            <h4 class="legend-text">Bianco fermo</h4>
          </div>
          <div class="legend-item hovering">
            <img class="img-legend" src="/wine-red.svg" alt="Vino bianco">
            <h4 class="legend-text">Rosso</h4>
          </div>
          <div class="legend-item hovering">
            <img class="img-legend" src="/wine-rose.svg" alt="Vino bianco">
            <h4 class="legend-text">Rosè</h4>
          </div>
          <div class="legend-item hovering">
            <img class="img-legend" src="/dolce.svg" alt="Vino bianco">
            <h4 class="legend-text">Dolce</h4>
          </div>
          <div class="legend-item hovering">
            <img class="img-legend" src="/bollicine.svg" alt="Vino bianco">
            <h4 class="legend-text"> Bollicine</h4>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.image img {
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
  html {
    scroll-behavior: smooth;
  }

  .hovering {
    transition: all 0.05s ease-in-out;
  }

  .hovering:hover {
      transform: scale(1.04);
  }

  .img-legend {
    box-shadow: none;
  }

  .aside>h2 {
    color: #fff;
    font-family: 'Comfortaa', sans-serif;
    text-shadow: #0e3b88 1px 0 10px;
    font-size: 35px;
  }

  .legend-text {
    color: #0e3b88;
    font-weight: bold;
    text-shadow: #fff 1px 0 10px;
  }

  .legend-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid rgba(68, 67, 67, 0.075);
    background-color: rgba(255, 255, 255, 0.726); /* Sfondo semi-trasparente */
    /* box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px; */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    width: 93%;
    margin-bottom: 10px;
    padding: 12px;
    text-align: start;
    vertical-align: middle;
  }

  .legend-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .group {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  img.odd {
    animation: moveUpDownOdd 10.2s ease-in-out infinite alternate;
  }

  img.even {
    animation: moveUpDownEven 10s ease-in-out infinite alternate;
  }

  @keyframes moveImages {
  0% {
    transform: translateX(0); /* Nessuno spostamento iniziale */
  }
  100% {
    transform: translateX(-100%); /* Spostamento completo verso sinistra */
  }
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
    font-family: 'Comfortaa', sans-serif;
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

  .drink-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.548);
    width: fit-content;
    max-width: 96%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgba(255, 255, 255, 0.452);
    border-radius: 20px;
    padding: 6px;
    padding-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    margin-bottom: 60px;
  }

  .aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.548);
    margin-left: 30px;
    border: 1px solid rgba(255, 255, 255, 0.452);
    border-radius: 20px;
    padding: 6px;
    padding-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    margin-bottom: 60px;
    width: 15%;
    height: 100%;
  }

  .utilities {
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 98%;
  }

  .search {
    width: 99%;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 2px 70px 4px;
    margin-left: 1%;
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

  .splitter-right {
    background: linear-gradient(to left, #0e3b88, #4bb9f0);
    height: 2px;
    border-radius: 20px;
    width: 90%;
    margin-top: 0px;
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

  .postdrink-cass {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: fit-content;
    justify-content: center;
    justify-items: center;
    align-content: center;
  }
}
/*---------------------------------------------------------------------------------------------------- */

@media only screen and (max-width: 999px) {
  .html {
    -webkit-overflow-scrolling: touch;
  }

  .utilities {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 91%;
  }

  .postdrink-cass {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .group {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
  
  .splitter{
    background: linear-gradient(to right, #0e3b88, #4bb9f0);
    height: 2px;
    border-radius: 20px;
    width: 90%;
    margin-top: 0px;
  }
  
  .searchbar-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
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
  
  p.attention {
    margin: 0;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  }
  
  img {
    width: 200px;
    border: 1px solid transparent;
    border-radius: 20px;
    position: absolute;
    z-index: 100;
    transform: translateX(75px) translateY(80px);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
  
  img.tumb {
    width: 180px;
    position: relative;
    z-index: 99;
    transform: translateX(-90px);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
  
  .image {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 140px;
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
  
  .extra {
    display: none;
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
  
  div.collapse>p {
    text-shadow: #ffffff 1px 0 10px;
  }
}

</style>