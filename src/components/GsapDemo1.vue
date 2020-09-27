

<template>
  <div id="container">
    <div id="frame">
      <div id="picsum" class="grid">
        <img class="gsap1" src="https://picsum.photos/150/?random=1" />
        <img class="gsap1" src="https://picsum.photos/150/?random=2" />
        <img class="gsap1" src="https://picsum.photos/150/?random=3" />
        <img class="gsap1" src="https://picsum.photos/150/?random=4" />
        <img class="gsap1" src="https://picsum.photos/150/?random=5" />
        <img class="gsap1" src="https://picsum.photos/150/?random=6" />
        <img class="gsap1" src="https://picsum.photos/150/?random=7" />
        <img class="gsap1" src="https://picsum.photos/150/?random=8" />
        <img class="gsap1" src="https://picsum.photos/150/?random=9" />
        <img class="gsap1" src="https://picsum.photos/150/?random=10" />
        <img class="gsap1" src="https://picsum.photos/150/?random=11" />
        <img class="gsap1" src="https://picsum.photos/150/?random=12" />
      </div>

      <div id="right">
        <div class="crcls">
          <div class="circle" id="c1"></div>
          <div class="circle" id="c2"></div>
          <div class="circle" id="c3"></div>
        </div>
        <div id="text">
          <p>this fab gsap and picsum doodle lorem hipsum kombucha whatever, schlitz humblebrag selfies wolf snackwave shabby chic. Sartorial synth vexillologist fanny pack adaptogen dreamcatcher pinterest.</p>
        </div>
        <hr />
      </div>
    </div>
    <button v-on:click="start">go!</button>
  </div>
</template>

<script>
import { gsap } from "gsap";

// eslint-disable-next-line
window.addEventListener("load", function(event) {
  gsap.from(".gsap1", {
    duration: 1,
    y: -100,
    opacity: 0,
    stagger: 0.2,
    ease: "expo.out"
  });
  gsap.from("#text", {
    delay: 1,
    duration: 2,
    y: 100,
    opacity: 0,
    ease: "bounce.out"
  });
  gsap.from(".circle", {
    delay: 1.5,
    duration: 2,
    y: 50,
    opacity: 0,
    stagger: 0.5,
    ease: "expo.out"
  });
  gsap.from("hr", {
    delay: 2,
    duration: 2,
    y: 100,
    opacity: 0,
    ease: "expo.out"
  });
});
export default {
  name: "GsapDemo2",

  methods: {
    start: function() {
      gsap.from(".gsap1", {
        duration: 1,
        y: -100,
        opacity: 0,
        stagger: 0.2,
        ease: "expo.out"
      });
      gsap.from("#text", {
        delay: 1,
        duration: 2,
        y: 100,
        opacity: 0,
        ease: "bounce.out"
      });
      gsap.from(".circle", {
        delay: 1.5,
        duration: 2,
        y: 50,
        opacity: 0,
        stagger: 0.5,
        ease: "expo.out"
      });
      gsap.from("hr", {
        delay: 2,
        duration: 2,
        y: 100,
        opacity: 0,
        ease: "expo.out"
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
    padding: 1em;
    margin: 0 auto;
    width: 80vw;
    height: 70vh;
    border: 1px solid $vue-gray;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: flex-start;
    // margin: 2em 1em;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 0.3em;
    row-gap: 0.5em;
    width: 100%;
    max-width: 50vw;
    margin: 0 auto;
    img {
      border-radius: 3px;
      box-shadow: 0 0 5px #929094;
    }
  }

  #right {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 1em;
    margin-left: 1em;

    #text {
      font-family: Chelsea Market;
      font-size: 0.8em;
      letter-spacing: 2px;
      line-height: 1.5em;
    }
    .circle {
      height: 2em;
      width: 2em;
      box-shadow: 0 0 5px #929094;
      border-radius: 50%;
      display: inline-block;
      margin: 0.6em;
      &:nth-child(1) {
        background-color: #a63c06;
      }
      &:nth-child(2) {
        background-color: #c36f09;
      }
      &:nth-child(3) {
        background-color: #eeba0b;
      }
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
    background-color: $b1;
  }
}
@media screen and (max-width: 768px) {
  img {
    transform: scale(0.4);
  }
}
</style>