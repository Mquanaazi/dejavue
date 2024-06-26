<!-- <template>
    <div>
      <h1>Friends</h1>
      <div v-if="friends">
        <CardComp v-for="friend in friends" :key="friend.id" :recipient-gender="friend.gender">
          <template #header>
            {{ friend.name }}
          </template>
          <template #content>
            {{ friend.contact }}
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
    data() {
      return {
        friends: []
      }
    },
    mounted() {
      // fetch friends data from API or database
      this.friends = [

      ]
    }
  }
  </script>
npm install axios -->
<template >
  <div>
    <!-- Collegeus And Friends
      {{$store.state.friends}}
      ________________________
      "id":"1",
            "firstName":"Inam",
            "lastName":"Maqashalala",
            "gender":"femlae",
            "profile":"@Bhekelazi",
            "contactDetails":"07123456789"
      -->
      
      <article v-for= "friend in FriendsData()" :key = "friend.name" :style="{borderColor:friend.gender =='male'?'gold':'green',borderWidth:'3px', borderStyle:'solid'}">
        <section >
          <h1>ID: {{friend.id }}</h1>
          <h1>FIRST NAME: {{friend.firstName }}</h1>
          <h1>LAST NAME:{{friend.lastName }}</h1>
          <h1>GENDER: {{friend.gender }}</h1>
          <h1>USERNAME: {{friend.profile }}</h1>
          <h1>CONTACT: {{friend.contactDetails }}</h1>
        </section>
      </article>
  </div>
</template>
<script>
export default {
  methods:{
     FriendsData(){
          return this.$store.state.friends
      }
  },
  computed:{
      getFriends(){
          return this.$store.dispatch('getFriends')
      }
   
  },
  mounted(){
      this.getFriends
      
  },
}
</script>
<style scoped>

</style>