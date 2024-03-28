<script lang="ts">
import { defineComponent } from "vue";
import tuttiBar from "../assets/bar.json";

import PostBar from "../components/post-bar.vue";

export default defineComponent({
  data() {
    return {
      tuttiBar,
      selectedCategory: "",
      categories: [] as String[],
      searchTerm: '', // Add a new property for search term
      isOpen: false
    };
  },
  components: {
    PostBar,
  },
  created() {
    this.categories = [...new Set(this.tuttiBar.map((bar) => bar.categoria))];
  },
  methods: {
    filteredBar() {
      let filtered = this.tuttiBar;

      // Applica il filtro per categoria, se selezionata
      if (this.selectedCategory) {
        filtered = filtered.filter((bar) => bar.categoria === this.selectedCategory);
      }

      // Applica il filtro per il termine di ricerca, se presente
      if (this.searchTerm) {
        const searchTermLower = this.searchTerm.toLowerCase();
        filtered = filtered.filter((bar) =>
          bar.nome.toLowerCase().includes(searchTermLower)
        );
      }

      return filtered;
    },

    toggleCollapse() {
      this.isOpen = !this.isOpen;
    }
  },
});
</script>

<template>
  <div class="page animate slide">
    <div class="title">
      <h2>Bar</h2>
    </div>
    <div class="image">
      <img src="/img/brioche.webp" alt="">
      <img class="tumb" src="/img/yogurt.webp" alt="">
      <img class="beer" src="/img/beer.webp" alt="">
    </div>
    <div class="drink-list page animate slide delay-1">
      <div class="portata">
        <h2>Esplora</h2>
      </div>
      <hr class="splitter">
      <!-------------------------------------------------------------------------------------------------------------------------------------------->
      <div class="cass">
        <button class="navbar-toggler text-white antipasti-button"  type="button" data-toggle="collapse" data-target="#caffetteria" @click="toggleCollapse()">
          <h2>Caffè</h2>
        </button>
        <div class="col-12">
          <div class="col-12 collapse div-collapse" id="caffetteria">
            <PostBar v-for="bar in filteredBar().filter(bar => bar.categoria.toLocaleLowerCase() === 'caffetteria')" :key="bar.idbar" :bar="bar"/>
          </div>
        </div>
      </div>
      <hr class="splitter">
      <!-------------------------------------------------------------------------------------------------------------------------------------------->
      <div class="cass">
        <button class="navbar-toggler text-white antipasti-button"  type="button" data-toggle="collapse" data-target="#te" @click="toggleCollapse()">
          <h2>Tè</h2>
        </button>
        <div class="col-12">
          <div class="col-12 collapse div-collapse" id="te">
            <PostBar v-for="bar in filteredBar().filter(bar => bar.categoria.toLocaleLowerCase() === 'tè e tisane')" :key="bar.idbar" :bar="bar"/>
          </div>
        </div>
      </div>
      <hr class="splitter">
      <!-------------------------------------------------------------------------------------------------------------------------------------------->
      <div class="cass">
        <button class="navbar-toggler text-white antipasti-button"  type="button" data-toggle="collapse" data-target="#spremute" @click="toggleCollapse()">
          <h2>Spremute</h2>
        </button>
        <div class="col-12">
          <div class="col-12 collapse div-collapse" id="spremute">
            <PostBar v-for="bar in filteredBar().filter(bar => bar.categoria.toLocaleLowerCase() === 'spremuta')" :key="bar.idbar" :bar="bar"/>
          </div>
        </div>
      </div>
      <hr class="splitter">
      <!-------------------------------------------------------------------------------------------------------------------------------------------->
      <div class="cass">
        <button class="navbar-toggler text-white antipasti-button"  type="button" data-toggle="collapse" data-target="#brioches" @click="toggleCollapse()">
          <h2>Brioches</h2>
        </button>
        <div class="col-12">
          <div class="col-12 collapse div-collapse" id="brioches">
            <PostBar v-for="bar in filteredBar().filter(bar => bar.categoria.toLocaleLowerCase() === 'brioche')" :key="bar.idbar" :bar="bar"/>
          </div>
        </div>
      </div>
      <hr class="splitter">
      <!-------------------------------------------------------------------------------------------------------------------------------------------->
      <div class="cass">
        <button class="navbar-toggler text-white antipasti-button"  type="button" data-toggle="collapse" data-target="#dolci" @click="toggleCollapse()">
          <h2>Dolci</h2>
        </button>
        <div class="col-12">
          <div class="col-12 collapse div-collapse" id="dolci">
            <PostBar v-for="bar in filteredBar().filter(bar => bar.categoria.toLocaleLowerCase() === 'dolce')" :key="bar.idbar" :bar="bar"/>
          </div>
        </div>
      </div>
      <hr class="splitter">
      <!-------------------------------------------------------------------------------------------------------------------------------------------->
      <div class="cass">
        <button class="navbar-toggler text-white antipasti-button"  type="button" data-toggle="collapse" data-target="#birre" @click="toggleCollapse()">
          <h2>Birre</h2>
        </button>
        <div class="col-12">
          <div class="col-12 collapse div-collapse" id="birre">
            <PostBar v-for="bar in filteredBar().filter(bar => bar.categoria.toLocaleLowerCase() === 'birra')" :key="bar.idbar" :bar="bar"/>
          </div>
        </div>
      </div>
      <!-------------------------------------------------------------------------------------------------------------------------------------------->
    </div>
  </div>
</template>


<style scoped>
@media only screen and (min-width: 768px) {}
.portata>h2 {
  color: #ffffff;
  text-shadow: #0e3b88 1px 0 10px;
  font-family: 'Montserrat' sans-serif;
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
  background-color: rgba(255, 255, 255, 0.712); /* Sfondo semi-trasparente */
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
  transform: translateX(155px) translateY(80px);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

img.tumb {
  width: 180px;
  position: relative;
  z-index: 99;
  transform: translateX(-10px);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

img.beer {
  width: 160px;
  position: relative;
  z-index: 101;
  transform: translateX(-160px) translateY(180px);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.image {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 190px;
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