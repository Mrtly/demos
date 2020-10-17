<template>
  <div id="container">
    <div id="text">
      <h2 id="comingsoon">coming soon!</h2>
    </div>
    <VueLottiePlayer name="octo" loop :animationData="require('@/assets/animationjson.json')" />
    <div id="buttons">
      <button v-on:click="handle">ok</button>
      <br />
      <button id="homebutton">
        <router-link to="/">home</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import VueLottiePlayer from "vue-lottie-player";
import { gsap, Bounce } from "gsap";

export default {
  name: "NextDemo",
  components: {
    VueLottiePlayer
  },
  mounted: function() {
    gsap.set("#homebutton", { opacity: 0 });
    gsap.set("#comingsoon", { opacity: 0 });
    this.start();
  },
  methods: {
    start: function() {
      gsap.set("#comingsoon", { opacity: 1 });
      gsap.fromTo(
        "#comingsoon",
        { y: "-9em", opacity: 0 },
        {
          rotation: -10,
          scale: 1,
          duration: 1.5,
          opacity: 1,
          y: 0,
          ease: Bounce.easeOut
        }
      );
    },
    btn: function() {
      gsap.to("#homebutton", { opacity: 1, duration: 1 });
    },
    handle: function() {
      this.btn();

      gsap.to("#comingsoon", 0.1, { x: "+=20", yoyo: true, repeat: 3 });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
#container {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #comingsoon {
    font-weight: 100;
  }
  padding: 1.5em;
  margin: 0 auto;
}
#buttons {
  display: block;
  font-size: 1em;
  #homebutton {
    opacity: 0;
  }
  a {
    text-decoration: none;
    color: azure;
  }
}

@media screen and (max-width: 768px) {
}
</style> 
