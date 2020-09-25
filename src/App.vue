<template>
  <div id="app">
    <div id="flex1">
      <GsapDemo1 />
    </div>
    <Footer />
  </div>
</template>

<script>
import GsapDemo1 from "./components/GsapDemo1.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    GsapDemo1,
    Footer
  }
};
</script>

<style lang="scss">
@import "@/styles/colors.scss";

html,
body {
  height: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: $alabaster;
  font-size: 1.8em;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  #flex1 {
    flex: 1;
    padding-top: 1em;
  }
}

@media screen and (max-width: 768px) {
  #app {
    font-size: 1.3em;
  }
}
</style>
