<template lang="">
    <slots>
    <div>
        {{$store.state}}
        Cars
        <div v-for= "car in carData()" :key="car.name">
            <h1>{{car.name}}</h1>
        </div>
        
    </div>
    <card-comp></card-comp>
</slots>
</template>
<script>
import CardComp from "../components/CardComp.vue";
export default {
    methods:{
        carData(){
            return this.$store.state.cars
        }
    },
    // computed:{
    //     getGaming_Consoles(){
    //         return this.$store.dispatch('getGaming_Consoles')
    //     },
    //     getFriends(){
    //         return this.$store.dispatch('getFriends')
    //     }
    // },
    mounted(){
        this.getCar
        // this.getFreinds
    },
    components :{
        CardComp
    }
}
</script>
<style lang="">
    
</style>