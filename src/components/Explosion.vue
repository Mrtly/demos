<template>
  <div id="container">
    <div id="frame">
      <div id="container">
        <h1 id="split" v-on:click="explode">click me, I explode!</h1>
      </div>
      <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 346.393 346.393">
        <path
          d="M204.651 58.521c-4.284-21.42-15.3-39.78-28.764-56.305-3.061-3.672-9.181-2.447-11.629 1.225-11.016 19.584-20.196 41.004-22.644 63.647-.612 6.732 9.792 7.345 11.016 1.225 4.284-16.524 10.404-32.437 18.36-47.736 3.06 4.284 6.121 9.18 8.569 14.076-4.284-4.284-14.077-2.448-14.077 5.508-.612 99.756-23.256 202.571-5.508 301.104 1.224 7.956 14.688 6.12 14.076-1.836-7.956-100.368 7.345-198.899 7.957-299.268v-1.224c3.672 7.344 6.119 14.688 7.956 23.256 1.225 9.792 16.524 6.12 14.688-3.672z"
        />
      </svg>
    </div>
    <div id="buttons">
      <button v-on:click="restore">hey where did they go?</button>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import SplitTextJS from "split-text-js";

export default {
  name: "Explosion",
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
      gsap.to("#arrow", { duration: 1, opacity: 0 });
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
      gsap.to("#arrow", { delay: 1, duration: 1, opacity: 1 });
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
        color: $active;
        cursor: pointer;
      }
    }
  }
}
#arrow {
  animation: 3s fade-in ease;
  filter: invert(28%) sepia(99%) saturate(2069%) hue-rotate(162deg)
    brightness(102%) contrast(90%);
  height: 1.5em;
  animation: bouncey 0.5s ease-in-out alternate infinite;
}

@keyframes bouncey {
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(-80px);
  }
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
