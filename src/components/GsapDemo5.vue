<template>
  <div id="container">
    <div id="frame">
      <div id="text">
        <h2 id="comingsoon">coming soon!</h2>
      </div>
    </div>
    <div id="buttons">
      <button v-on:click="start">ok</button>
    </div>
  </div>
</template>

<script>
import { gsap, Bounce } from "gsap";

export default {
  name: "GsapDemo5",
  mounted: function() {
    gsap.set("#comingsoon", { opacity: 0 });
    this.start();
  },
  methods: {
    start: function() {
      gsap.set("#comingsoon", { opacity: 1 });
      gsap.fromTo(
        "#comingsoon",
        { y: "-9em", opacity: 0 },
        { scale: 1, duration: 1.5, opacity: 1, y: 0, ease: Bounce.easeOut }
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  }
}
@media screen and (max-width: 768px) {
}
</style> 
