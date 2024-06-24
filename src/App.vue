<template>
  <nav>
    <router-link to="/">Home</router-link> | 
    <router-link to="/about">About</router-link> | 
    <!-- <router-link to="/card">Card</router-link> |  -->
    <router-link to="/friends">Friends</router-link> | 
    <router-link to="/Cars">Cars</router-link> | 
    <router-link to="/Consoles">Consoles</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
