<template>
  <div id="container">
    <div id="frame">
      <h1 id="intro">Thundercats</h1>

      <h2 id="tagline">Authentic charcoal lorem hipsum unicorn kombucha.</h2>

      <p id="blah">
        Succulents skateboard iceland live-edge pitchfork aliqua.
        Vape reprehenderit duis, bicycle rights twee in chia.
        Portland cloud bread put a bird on it vice sartorial unicorn mlkshk.
        Coconut tattooed lorem, snackwave put a bird on it mixtape seitan.
      </p>
    </div>
    <div id="buttons">
      <button v-on:click="start">go again!</button>
    </div>
  </div>
</template>

<script>
import { gsap, Power3 } from "gsap";
import SplitTextJS from "split-text-js";

export default {
  name: "TextSplits",
  mounted: function() {
    gsap.set("#intro", { opacity: 0 });
    gsap.set("#tagline", { opacity: 0 });
    gsap.set("#blah", { opacity: 0 });
    this.start();
  },
  methods: {
    start: function() {
      gsap.set("#intro", { opacity: 1 });
      gsap.set("#tagline", { opacity: 1 });
      gsap.set("#blah", { opacity: 1 });
      const splittedText = new SplitTextJS(document.getElementById("intro"));
      const textChars = splittedText.chars;
      gsap.from(textChars, {
        duration: 0.1,
        visibility: "hidden",
        stagger: 0.06
      });
      const splittedTagline = new SplitTextJS(
        document.getElementById("tagline")
      );
      const tag = splittedTagline.chars;
      gsap.from(tag, {
        delay: 1,
        x: -100,
        y: -100,
        opacity: 0,
        ease: Power3.easeInOut,
        stagger: 0.01
      });
      const splittedBlah = new SplitTextJS(document.getElementById("blah"));
      const blablah = splittedBlah.chars;
      gsap.from(blablah, {
        delay: 2,
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
    color: $alabaster;
    h1 {
      font-weight: 200;
    }
    h2 {
      font-size: 1em;
      font-weight: 100;
    }
    p {
      font-size: 0.7em;
      font-weight: 300;
      letter-spacing: 2px;
    }
  }
}
@media screen and (max-width: 768px) {
}
</style> 
