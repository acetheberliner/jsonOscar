<script lang="ts">
import { PropType, defineComponent } from "vue";

interface Wine {
    idwine: number
    nome: string
    produttore: string
    colore: string
    grad: number
    prezzoCalice: string
    prezzoBott: string
}

export default defineComponent({
    props: {
        wine: {
            type: Object as PropType<Wine>, 
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
    <button class="navbar-toggler text-white hovering"  type="button" :class="{ collapsed: !isOpen }" @click="toggleCollapse()" aria-controls="toggle" aria-expanded="false" aria-label="Toggle navigation">
        <div class="present">
            <img v-if="wine.colore == 'Dolce'" class="wine-icon" src="/dolce.svg" alt="">
            <img v-if="wine.colore == 'Bollicine'" class="wine-icon" src="/bollicine.svg" alt="">
            <img v-if="wine.colore == 'Bianco'" class="wine-icon" src="/wine.svg" alt="">
            <img v-if="wine.colore == 'Rosso'" class="wine-icon" src="/wine-red.svg" alt="">
            <img v-if="wine.colore == 'Rosè'" class="wine-icon" src="/wine-rose.svg" alt="">
            <div class="nome-prod">
                <!-- <span class="drink-icon"></span> -->
                <h4 class="nome"> {{ wine.nome }}</h4>
                <p class="produttore">{{ wine.produttore }}</p>
            </div>
            <div class="horizontal">
                <div class="vertical">
                    <h6 class="prezzo">cal. {{ wine.prezzoCalice }} €</h6>
                    <h6 class="prezzo">bott. {{ wine.prezzoBott }} €</h6>
                </div>
            </div>
        </div>
        <div class="" :id="'toggle-' + wine.idwine" :class="{ 'collapse': !isOpen, 'show': isOpen }">
            <hr>
            <p class="categoria" v-if="wine.colore != 'Bollicine'">Colore: {{ wine.colore }}</p>
            <p class="categoria" v-if="wine.colore.toLowerCase() == 'bianco'">Categoria: Fermo</p>
            <p class="categoria boll" v-if="wine.colore.toLowerCase() == 'bollicine'">Colore: Bianco<span class="boll">Categoria: Bollicine</span></p>
            <p class="categoria">Gradazione: {{ wine.grad }}°</p>
        </div>
    </button>
</template>

<style scoped> 
.hovering {
    transition: all 0.05s ease-in-out;
}

.hovering:hover {
    transform: scale(1.04);
}

.nome-prod {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.boll {
    display: flex;
    flex-direction: column;
}

.boll>span {
    margin-top: 4px;
}

hr{
    background: linear-gradient(to right, transparent, #4fa1ca, transparent);
    height: 1px;
    border-radius: 20px;
    margin: 10px;
}

img {
    width: 90px;
}

h4 {
    margin: 0;
}

.wine-icon{
    width: 45px;
    margin-right: 6px;
}

.horizontal {
    display: flex;
    flex-direction: row-reverse;
}

.vertical {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
}

.produttore{
    /* margin-left: 30px; */
    color: #2c57a3;
    font-size: 16px;
    margin-top: 4px
}

button.navbar-toggler {
    border-radius: 20px;
    border: 1px solid rgba(68, 67, 67, 0.075);
    background-color: rgba(255, 255, 255, 0.712); /* Sfondo semi-trasparente */
    /* box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px; */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    width: 93%;
    margin-bottom: 20px;
    padding: 12px;
    text-align: start;
    vertical-align: middle;
}

h6.prezzo {
    margin: 0;
    margin-top: 4px;
    white-space: nowrap;
    text-align: end;
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

.categoria {
    text-align: start;
    font-size: 15px;
    margin-bottom: 5px;
    color: #2c57a3;
    font-style: italic;
    margin-top: 2px;
    margin-left: 10px;
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
    font-size: 15px;
}

.nome {
    font-weight: bold;
    color: #2c57a3;
    text-shadow: 1.5px 1.5px #4fa1ca;
    font-weight: bolder;
    font-size: 18px;
    /* white-space: nowrap; */
}

.drink-icon{
    color: #d6a103;
    text-shadow: 1.5px 1.5px transparent;
}

.precise {
    color:#2c57a3;
    font-weight: bold;
}
</style>

