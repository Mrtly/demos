
<template>
  <div id="container">
    <div id="frame">
      <h1 id="intro">Thundercats</h1>

      <h2 id="tagline">Authentic charcoal lorem hipsum unicorn kombucha.</h2>
    </div>
    <div id="buttons">
      <button v-on:click="start">show me!</button>
    </div>
  </div>
</template>

<script>
import { gsap, Power3 } from "gsap";
import SplitTextJS from "split-text-js";

// eslint-disable-next-line
window.addEventListener("load", function(event) {
  gsap.set("#intro", { opacity: 0 });
  gsap.set("#tagline", { opacity: 0 });
});

export default {
  name: "GsapDemo4",
  methods: {
    start: function() {
      gsap.set("#intro", { opacity: 1 });
      gsap.set("#tagline", { opacity: 1 });
      const text = document.getElementById("intro");
      const splittedText = new SplitTextJS(text);
      const textChars = splittedText.chars;
      gsap.from(textChars, {
        duration: 0.1,
        visibility: "hidden",
        stagger: 0.06
      });
      const tagline = document.getElementById("tagline");
      const splittedTagline = new SplitTextJS(tagline);
      const tag = splittedTagline.chars;
      gsap.from(tag, {
        delay: 1,
        y: -80,
        opacity: 0,
        ease: Power3.easeInOut,
        stagger: 0.01
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
#container {
  text-align: center;
  #frame {
    padding: 1.5em;
    margin: 0 auto;
    width: 70vw;
    height: 60vh;
    border: 1px solid $vue-gray;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);

    h1 {
      font-weight: 200;
    }
    h2 {
      font-size: 1em;
      font-weight: 100;
    }
  }

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
@media screen and (max-width: 768px) {
}
</style> 
