<script lang="ts">
import { PropType, defineComponent } from "vue";

interface Drink {
    iddrink: number
    nome: string
    ingredienti: string
    garnish: string
    categoria: string
    // sapore: string
    prezzo: number
}

export default defineComponent({
    props: {
        drink: {
            type: Object as PropType<Drink>, 
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
            <img src="/cocktail-svg.svg" class="drink-icon" alt="cocktail">
            <h4 class="nome"> {{ drink.nome }}</h4>
            <h6 class="prezzo"><span class="precise"> * </span> {{ drink.prezzo }} € </h6>
        </div>
        <div class="" :id="'toggle-' + drink.iddrink" :class="{ '': !isOpen, 'show': isOpen }">
            <hr>
            <p class="categoria">{{ drink.categoria }}</p>
            <p class="ingredienti">{{ drink.ingredienti }} + {{ drink.garnish }}</p>
        </div>
    </button>
</template>

<style scoped> 
@media only screen and (min-width: 1000px) {
    
}
/*--------------------------------------------------------------------------------------------------------- */

@media only screen and (max-width: 999px) {

}
/*------------------------------------------------------------------------------------ */

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
    font-family: 'Comfortaa', sans-serif;
    font-size: 23px;
}

i.asterisk {
    margin-left: 3px;
    font-size: 14px;
}

button.navbar-toggler {
    border-radius: 20px;
    border: 1px solid rgba(68, 67, 67, 0.075);
    background-color: rgba(255, 255, 255, 0.712);
    /* box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px; */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    width: 90%;
    margin-bottom: 10px;
    padding: 18px;
    text-align: center;
    vertical-align: middle;
}

h6.prezzo {
    margin: 0;
    margin-top: 4px;
    width: 20%;
    display: flex;
    flex-direction: row-reverse;
}

button.navbar-toggler:hover {
    box-shadow: #ffffff33 0px 0px 0px 1px inset, #2c57a3 0px 0px 0px 2px;
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
    align-items: center;
}

p {
    font-family: 'Comfortaa', sans-serif;
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
}

.drink-icon{
    width: 35px;
}

.precise {
    color:#2c57a3;
    font-weight: bold;
}
</style>

