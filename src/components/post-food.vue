<script lang="ts">
import { PropType, defineComponent } from "vue";

interface Food {
    idfood: number
    nome: string
    ingredienti: string
    categoria: string
    prezzo: number
}

export default defineComponent({
    props: {
        food: {
            type: Object as PropType<Food>, 
            required:true
        },
    },
    data(){
        return {
            isOpen: false
        }
    },
    methods: {
        toggleCollapse() {
            this.isOpen = !this.isOpen;
        }
    }
});
</script>

<template>
    <button class="navbar-toggler text-white"  type="button" :class="{ collapsed: !isOpen }" @click="toggleCollapse()" aria-controls="toggle" aria-expanded="false" aria-label="Toggle navigation">
        <div class="present">
            <h4 class="nome"><span class="drink-icon"><img class="icon" src="/img/fork.png" alt="Fork Icon" loading="lazy"/></span> {{ food.nome }}</h4>
            <h6 class="prezzo">{{ food.prezzo }} €</h6>
        </div>
        <div class="" :id="'toggle-' + food.idfood" :class="{ 'collapse': !isOpen, 'show': isOpen }">
            <hr>
            <p class="categoria">{{ food.categoria }}</p>
            <p class="ingredienti">{{ food.ingredienti }}</p>
        </div>
    </button>
</template>

<style scoped>
* {
    font-family: 'Comfortaa', sans-serif;
}

hr{
    background: linear-gradient(to right, transparent, #4fa1ca, transparent);
    height: 1px;
    border-radius: 20px;
}

img {
    width: 90px;
}

h4 {
    margin: 0;
}

button.navbar-toggler {
    border-radius: 20px;
    border: 1px solid rgba(68, 67, 67, 0.075);
    background-color: rgba(255, 255, 255, 0.712); /* Sfondo semi-trasparente */
    /* box-shadow: rgba(0, 0, 0, 0.56) 0px 8px 30px 1px; */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    width: 100%;
    margin-bottom: 10px;
    padding: 18px;
    text-align: start;
    vertical-align: middle;
}

h6.prezzo {
    margin: 0;
    margin-top: 4px;
}

button.navbar-toggler:focus,
button.navbar-toggler:active,
button.navbar-toggler:hover,
button.navbar-toggler:visited {
    outline: none !important;
    border: 1px solid transparent;
}

.present{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.collapse {
    display: none;
    transition: height 0.3s ease-out;
}

.show {
    display: block;
}

.categoria {
    text-align: end;
    font-size: 17px;
    margin-bottom: 20px;
    color: #2c57a3;
    font-style: italic;
}

.ingredienti{
   font-size: 18px;
   font-weight: bold;
   color: #2c57a3;
   line-height: normal;
}

.prezzo {
    color: #4fa1ca;
    font-style: italic;
}

.nome {
    font-weight: bold;
    color: #2c57a3;
    text-shadow: 1.5px 1.5px #4fa1ca;    
    font-weight: bolder;
    font-size: 22px;
}

.drink-icon{
    color: #d6a103;
    text-shadow: 1.5px 1.5px transparent;
}

img.icon {
    width: 30px;
}

</style>

