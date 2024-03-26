<script lang="ts">
import { PropType, defineComponent } from "vue";

interface Bar {
    idbar: number
    nome: string
    categoria: string
    prezzo: number   
}

export default defineComponent({
    props: {
        bar: {
            type: Object as PropType<Bar>, 
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
            <img v-if="bar.categoria.toLocaleLowerCase() == 'birra'" class="wine-icon" src="/svg/beer.svg" alt="Birra" loading="lazy">
            <img v-if="bar.categoria.toLocaleLowerCase() == 'caffetteria'" class="caffe-icon" src="/svg/coffee.svg" alt="Caffè" loading="lazy">
            <img v-if="bar.categoria.toLocaleLowerCase() == 'tè e tisane'" class="wine-icon" src="/svg/tea.svg" alt="Tè" loading="lazy">
            <img v-if="bar.categoria.toLocaleLowerCase() == 'spremuta'" class="wine-icon" src="/svg/spremuta.svg" alt="Spremuta" loading="lazy">
            <img v-if="bar.categoria.toLocaleLowerCase() == 'brioche'" class="wine-icon" src="/svg/croissant.svg" alt="Croissant" loading="lazy">
            <img v-if="bar.categoria.toLocaleLowerCase() == 'dolce'" class="wine-icon" src="/svg/cake.svg" alt="Torta" loading="lazy">
            <div class="nome-prod">
                <h4 class="nome">{{ bar.nome }}</h4>
            </div>
            <h6 class="prezzo">{{ bar.prezzo }} €</h6>
        </div>
        <div class="" :id="'toggle-' + bar.idbar" :class="{ 'collapse': !isOpen, 'show': isOpen }">
            <hr>
            <p class="categoria">{{ bar.categoria }}</p>
        </div>
    </button>
</template>

<style scoped>  
.nome-prod {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.wine-icon{
    width: 35px;
    color: #d6a103;
}

.caffe-icon{
    width: 45px;
    color: #d6a103;
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

img.cup-icon {
    width: 25px;
}

button.navbar-toggler {
    border-radius: 20px;
    border: 1px solid rgba(68, 67, 67, 0.075);
    background-color: rgba(255, 255, 255, 0.712);
    /* box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px; */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    width: 100%;
    margin-bottom: 20px;
    padding: 18px;
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
    text-align: center;
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

