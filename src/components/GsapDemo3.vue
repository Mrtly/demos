<template>
  <div id="container">
    <div id="frame">
      <div id="text">
        <h2 id="comingsoon">coming soon!</h2>
      </div>
    </div>
    <div id="buttons">
      <button v-on:click="start">hey, do that again!</button>
    </div>
  </div>
</template>

<script>
import { gsap, Bounce } from "gsap";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    started: false,
    dur: 2
  }
});
// eslint-disable-next-line
window.addEventListener("load", function(event) {
  gsap.fromTo(
    "#comingsoon",
    { y: "-2em", opacity: 0 },
    { duration: 1.5, opacity: 1, y: "3em", ease: Bounce.easeOut }
  );
});
export default {
  name: "GsapDemo2",
  store,
  methods: {
    start: function() {
      gsap.fromTo(
        "#comingsoon",
        { y: "-1em", opacity: 0 },
        { duration: 1.5, opacity: 1, y: "3em", ease: Bounce.easeOut }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
#container {
  text-align: center;
  #frame {
    #comingsoon {
      font-weight: 100;
    }
    padding: 1.5em;
    margin: 0 auto;
    width: 70vw;
    height: 60vh;
    border: 1px solid $vue-gray;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  }
  #buttons {
    width: 70vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    button {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      color: $alabaster;
      font-weight: 500;
      letter-spacing: 2px;
      font-size: 0.7em;
      padding: 0.2em 0.6em;
      margin: 0.4em;
      border: none;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
      cursor: pointer;
      &:nth-child(1) {
        background-color: $b1;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  #buttons {
    width: 100vw !important;
    flex-direction: column !important;
    height: 5em;
  }
}
</style> 