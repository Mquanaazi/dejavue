<template>
  <div id="carD">
    <div v-for="gaming_console in gaming_consolesData()" :key="gaming_console.name">
      <card-comp :data="gaming_console">

        <template #placeholder>
          <h1>I LOVE GAMES</h1>
          
          
        </template>
        <template #default>
            <p>Best_selling_game: {{ gaming_console.best_selling_game }}</p>
        </template>
      </card-comp>
    </div>
  </div>
</template>
<script>
import CardComp from "../components/CardComp.vue";
export default{
  methods:{
        gaming_consolesData(){
            return this.$store.state.gaming_consoles
        }
    },
    computed:{
        getGaming_consoles(){
            return this.$store.dispatch('getGaming_consoles')
        }
    },
    mounted() {
        this.getGaming_consoles
    },
    components :{
        CardComp
    }
}

</script>
<style scoped>
   div{
    border:3px rgb(102, 114, 24) solid;
    border-radius: 10%;
    width: 300px;
    height: 450px;
    margin: auto;
    display:flex;
    
   } 
</style>
  // <!-- <template>
  //   <div>
  //     <h1>Consoles</h1>
  //     <div v-if="gamingConsoles">
  //       <CardComp v-for="console in gamingConsoles" :key="console.id">
  //         <template #header>
  //           {{ console.name }}
  //         </template>
  //         <template #content>
  //           {{ console.description }}
  //         </template>
  //       </CardComp>
  //     </div>
  //     <div v-else>
  //       <spinner />
  //     </div>
  //   </div>
  // </template>
  
  // <script>
  // export default {
  //   computed: {
  //     gamingConsoles() {
  //       return this.$store.state.gaming_consoles
  //     }
  //   }
  // }
  // </script> -->
