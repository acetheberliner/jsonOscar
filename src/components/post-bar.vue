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
            <h4 class="nome"><span class="drink-icon"><i class="bi bi-cup-straw"></i></span> {{ bar.nome }}</h4>
            <h6 class="prezzo">{{ bar.prezzo }} €</h6>
        </div>
        <div class="" :id="'toggle-' + bar.idbar" :class="{ 'collapse': !isOpen, 'show': isOpen }">
            <hr>
            <p class="categoria">{{ bar.categoria }}</p>
        </div>
    </button>
</template>

<style scoped>  
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
    background-color: rgba(255, 255, 255, 0.712); /* Sfondo semi-trasparente */
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    width: 90%;
    margin-bottom: 20px;
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
    color: #d6a103;
    text-shadow: 1.5px 1.5px transparent;
}

.precise {
    color:#2c57a3;
    font-weight: bold;
}
</style>

