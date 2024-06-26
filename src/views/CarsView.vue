<template lang="">

        
<div id="carD">
    <div v-for= "car in carData()" :key="car.name">
        <card-comp :data=car>
          <!-- <h1>{{ car.make }}</h1> -->
          <!-- <p>model:{{car.model}}</p>
          <p>year:{{car.year}}</p>
          <p>color:{{car.color}}</p>
          <p>price:{{car.price}}</p> -->
          <!-- <slot name="car"></slot> -->
          <template #placeholder>
            <h1>I LOVE CARS</h1>
            
          </template> 
        
        </card-comp>
    </div>
</div>

</template>
<script>
import CardComp from "../components/CardComp.vue";
export default {
    methods:{
        carData(){
            return this.$store.state.cars
        }
    },
    computed:{
        getCars(){
            return this.$store.dispatch('getCars')
        }
    },
    mounted() {
        this.getCars
    },
    components :{
        CardComp
    }
}
</script>
<style scoped>
    #carD{
        display: flex;
        
    }
</style>
<!-- <template>
    <div>
      <h1>Cars</h1>
      <div v-if="cars">
        <CardComp v-for="car in cars" :key="car.id">
          <template #header>
            {{ car.model }}
          </template>
          <template #content>
            {{ car.description }}
          </template>
        </CardComp>
      </div>
      <div v-else>
        <spinner />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      cars() {
        return this.$store.state.cars
      }
    }
  }
  </script> -->