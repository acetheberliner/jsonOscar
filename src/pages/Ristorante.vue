<script lang="ts">
import { defineComponent } from "vue";
import tuttiRistorante from "../assets/food.json"

import PostFood from "../components/post-food.vue";

export default defineComponent({
  data() {
    return {
      tuttiRistorante,
      selectedCategory: '',
      categories: [] as String[]
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
      if (!this.selectedCategory) {
        return this.tuttiRistorante;
      } else {
        return this.tuttiRistorante.filter(
          (rist) => rist.categoria === this.selectedCategory
        );
      }
    },
  },
})
</script>

<template>
    <div class="page animate slide">
        <div class="title">
            <h2>Ristorante</h2>
        </div>
        <div class="image">
            <img src="/pesce.jpg" alt="">
            <img class="tumb" src="/pasta.jpg" alt="">
            <img class="fing" src="/insalata.jpg" alt="">
        </div>
        <div class="radio-container">
          <div class="filter selectdiv">
            <form id="radio" action="#">
              <select name="Categoria" v-model="selectedCategory">
                <option id="tutti" value="">Tutti</option>
                <option v-for="categoria in categories" :value="categoria">{{ categoria }}</option>
              </select>
            </form>
          </div>
        </div>
        <div class="meal-list page animate slide delay-1">
            <PostFood v-for="food in filteredRist()" :key="food.idfood" :food="food" />
        </div>
    </div>
</template>

<style scoped>
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

.image {
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

button:focus, button:after {
    outline: none;
}

i{
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

/*-.-----------------------------------------------------------------------------------------------------*/
.animate {
  animation-duration: 0.45s;
  animation-duration: 0.7s; /*running slower to show effect*/
  animation-delay: 0.1s;
  animation-name: animate-fade;
  animation-timing-function: cubic-bezier(.26,.53,.74,1.48);
  animation-fill-mode: backwards;
}

/* Fade In */
.animate.fade {
  animation-name: animate-fade;
  animation-timing-function: ease;
}
@keyframes animate-fade {
  0% { opacity: 0; }
  100% { opacity: 1; }
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
transform: rotateX(-120deg) scale(0.9,0.9);
}
100% {
    opacity: 1;
    transform: rotateX(0deg) scale(1,1);
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
transform: rotateY(-120deg) scale(0.9,0.9);
}
100% {
    opacity: 1;
    transform: rotateY(0deg) scale(1,1);
}
}

/* Slide In */
.animate.slide { animation-name: animate-slide; }
@keyframes animate-slide {
0% {
opacity: 0;
transform: translate(0,20px);
}
100% {
    opacity: 1;
    transform: translate(0,0);
}
}

/* Drop In */
.animate.drop { 
animation-name: animate-drop; 
animation-timing-function: cubic-bezier(.77,.14,.91,1.25);
}
@keyframes animate-drop {
0% {
opacity: 0;
transform: translate(0,-300px) scale(0.9, 1.1);
}
95% {
    opacity: 1;
    transform: translate(0,0) scale(0.9, 1.1);
}
96% {
    opacity: 1;
    transform: translate(10px,0) scale(1.2, 0.9);
}
97% {
    opacity: 1;
    transform: translate(-10px,0) scale(1.2, 0.9);
}
98% {
    opacity: 1;
    transform: translate(5px,0) scale(1.1, 0.9);
}
99% {
    opacity: 1;
    transform: translate(-5px,0) scale(1.1, 0.9);
}
100% {
    opacity: 1;
    transform: translate(0,0) scale(1, 1);
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