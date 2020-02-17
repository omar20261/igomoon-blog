<template>
  <div id="app">
    <app-Header />
    
     <div class="lds-ripple" v-if="this.$store.state.G_loading">
      <svg class="spinner centerItem" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
         <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
      </svg>
    </div>

    <Home />
  </div>
</template>

<script>
import Home from './Pages/Home/Home'
import Header from './Components/Header'

export default {
  name: 'app',
  components: {
    'Home':Home,
    'app-Header':Header
  },
  data () {
    return {

    }
  }
}
</script>

<style>
 :root {  --offset:187; --duration:1.4s;--duration-color:5.6s;}
 /* $offset: 187;$duration: 1.4s; */
 .centerItem {position: fixed;bottom: -100px;right: 0;top: 0;left: 0;margin: auto;}
 .lds-ripple {display: inline-block;z-index: 100000000;position: fixed;right: 0;width: 100%;height: 100%;background: rgba(255,255,255,0.9);}
 .spinner {animation: rotator var(--duration) linear infinite;}
 .path {stroke-dasharray: var(--offset);stroke-dashoffset: 0;transform-origin: center;animation:dash var(--duration) ease-in-out infinite,colors var(--duration-color) ease-in-out infinite;}
 @keyframes rotator {0% { transform: rotate(0deg); }100% { transform: rotate(270deg); }}
 @keyframes colors {0% { stroke: #4285F4; }25% { stroke: #DE3E35; }50% { stroke: #F7C223; }75% { stroke: #1B9A59; }100% { stroke: #4285F4; }}
 @keyframes dash {0% { stroke-dashoffset: var(--offset); }50% {stroke-dashoffset: var(--offset)/4;transform:rotate(135deg);}100% {stroke-dashoffset: var(--offset);transform:rotate(450deg);}}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}


a,a:hover{outline:none;text-decoration: none !important;color: #0f1318 !important;}

</style>
