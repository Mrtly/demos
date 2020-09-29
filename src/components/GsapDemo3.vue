<template>
  <div id="container">
    <div id="frame">
      <div id="container">
        <h1 id="split" v-on:click="explode">click me, I explode!</h1>
      </div>
    </div>
    <div id="buttons">
      <button v-on:click="restore">hey where did they go?</button>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import SplitTextJS from "split-text-js";

// eslint-disable-next-line
window.addEventListener("load", function(event) {});

export default {
  name: "GsapDemo4",
  methods: {
    random: function(min, max) {
      return Math.random() * (max - min) + min;
    },
    explode: function() {
      const text = document.getElementById("split");
      const mySplitText = new SplitTextJS(text);
      const arrayText = mySplitText.chars;
      for (var i = 0; i < arrayText.length; i++) {
        var letter = arrayText[i];
        gsap.to(letter, 1.5, {
          opacity: 0,
          x: this.random(-1000, 1000),
          y: this.random(-1000, 1000),
          z: this.random(-1000, 1000),
          scale: 0.3,
          delay: i * 0.009
        });
      }
    },
    restore: function() {
      const text = document.getElementById("split");
      const mySplitText = new SplitTextJS(text);
      const arrayText = mySplitText.chars;
      for (var i = 0; i < arrayText.length; i++) {
        var letter = arrayText[i];
        gsap.from(letter, 1.5, {
          opacity: 0,
          x: this.random(-1000, 1000),
          y: this.random(-1000, 1000),
          z: this.random(-1000, 1000),
          scale: 0.3,
          delay: i * 0.009
        });
      }
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    #container {
      padding: 1em;
      margin: auto;
      h1 {
        text-shadow: 0 0 2px rgba(101, 112, 130, 0.4);
        font-size: 2em;
        font-weight: 300;
        margin: 0 auto;
        letter-spacing: 2px;
        color: crimson;
      }
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
@media screen and (max-width: 768px) {
  #container {
    #frame {
      #container {
        h1 {
          font-size: 0.9em;
        }
      }
    }
  }
}
</style> 
