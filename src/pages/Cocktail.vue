<script lang="ts">
import { defineComponent } from "vue";
import tuttiCocktail from "../assets/drink.json"

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
  },
})
</script>

<template>
  <div class="page animate slide">
    <div class="title">
      <h2>Cocktail</h2>
    </div>
    <div class="image">
      <img src="/red.jpg" alt="">
      <img class="tumb" src="/tumblr.jpg" alt="">
    </div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#info" aria-controls="toggle"
      aria-expanded="false" aria-label="Toggle navigation">
      <!-- <p class="attention">!!! <i class="bi bi-info-circle"></i> !!!</p> -->
      <p class="attention">ATTENZIONE<i class="bi bi-hand-index"></i></p>
    </button>
    <div id="info" class="collapse">
      <p>Si informa la gentile clientela che in occasione di eventi speciali, i prezzi dei cocktail vengono calcolati differentemente. <br><br>Si ringrazia per la comprensione </p>
    </div>
    <div class="drink-list page animate slide delay-1">
      <div class="radio-container">
        <div class="filter selectdiv">
          <form class="form-group" id="radio" action="#">
            <select class="form-control form" name="Categoria" v-model="selectedCategory">
              <option selected id="tutti" value="">Filtra</option>
              <option v-for="categoria in categories" :value="categoria">{{ categoria }}</option>
            </select>
          </form>
        </div>
      </div>
      <div class="searchbar-container">
        <form class="form-inline mb-2">
          <input class="form-control search" type="search" placeholder="Cerca cocktail..." aria-label="Search"
            v-model="searchTerm">
        </form>
      </div>
      <PostDrink v-for="drink in filteredCocktail()" :key="drink.iddrink" :drink="drink" />
    </div>
  </div>
</template>

<style scoped>
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
  width: 200px;
  border: 1px solid transparent;
  border-radius: 20px;
  position: absolute;
  z-index: 99;
  transform: translateX(75px) translateY(80px);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

img.tumb {
  width: 200px;
  position: relative;
  z-index: 100;
  transform: translateX(-80px);
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}

.image {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 120px;
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
  background-color: rgba(255, 0, 0, 0.547);
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
</style>