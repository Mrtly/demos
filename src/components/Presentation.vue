
<template>
  <div id="container">
    <div id="frame">
      <div id="area">
        <div id="topic">
          <div id="title">Lorem Hipsum Kombucha.</div>
        </div>
        <div id="underline">
          <hr id="line" />
        </div>
        <div id="item1">
          <div id="text1" class="bold">
            <div class="grid">
              <span>□</span>
              <span>Chia pop-up tumblr retro enim.</span>
            </div>
          </div>
        </div>
        <div id="item2">
          <div id="text2" class="bold">
            <div class="grid">
              <span>□</span>
              <span>Shaman dreamcatcher portland banh mi hot chicken.</span>
            </div>
          </div>
        </div>
        <div id="item3">
          <div id="text3" class="bold">
            <div class="grid">
              <span>□</span>
              <span>
                Polaroid craft beer twee chicharrones ethical hut.
                Wolf moon squid hella blue bottle fam pickled retro lomo.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="buttons">
      <p id="hint">*hint: 3 x next, then stop</p>
      <div>
        <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 346.393 346.393">
          <path
            d="M204.651 58.521c-4.284-21.42-15.3-39.78-28.764-56.305-3.061-3.672-9.181-2.447-11.629 1.225-11.016 19.584-20.196 41.004-22.644 63.647-.612 6.732 9.792 7.345 11.016 1.225 4.284-16.524 10.404-32.437 18.36-47.736 3.06 4.284 6.121 9.18 8.569 14.076-4.284-4.284-14.077-2.448-14.077 5.508-.612 99.756-23.256 202.571-5.508 301.104 1.224 7.956 14.688 6.12 14.076-1.836-7.956-100.368 7.345-198.899 7.957-299.268v-1.224c3.672 7.344 6.119 14.688 7.956 23.256 1.225 9.792 16.524 6.12 14.688-3.672z"
          />
        </svg>
        <button v-on:click="next">next</button>
        <button v-on:click="stop">stop</button>
      </div>
      <div id="restart">
        <i>"oh no, it is doing weird stuff now!"</i> →
        <button v-on:click="restart">restart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, Cubic } from "gsap";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    maxSteps: 4,
    curSteps: 1,
    started: false,
    dur: 2
  }
});
gsap.set("#area", { opacity: 0 });

export default {
  name: "Presentation",
  store,
  mounted: function() {
    gsap.set("#area", { opacity: 0 });
    gsap.set("#item1", { opacity: 0 });
    gsap.set("#item2", { opacity: 0 });
    gsap.set("#item3", { opacity: 0 });
    this.start();
  },
  methods: {
    start: function() {
      gsap.set("#area", { opacity: 0 });
      gsap.set("#item1", { opacity: 0 });
      gsap.set("#item2", { opacity: 0 });
      gsap.set("#item3", { opacity: 0 });
      store.state.started = true;
      console.log("started = true");
      gsap.set("#area", { opacity: 1 });
      gsap.fromTo(
        "#title",
        { opacity: 0 },
        {
          delay: 0.1,
          duration: store.state.dur - 0.2,
          opacity: 1,
          ease: Cubic.EaseOut
        }
      );
      gsap.fromTo(
        "#title",
        { x: -50 },
        { delay: 0.1, duration: 1, x: 0, ease: Cubic.EaseOut }
      );
      gsap.fromTo(
        "#line",
        { x: -50, opacity: 0 },
        { delay: 1, opacity: 1, duration: 1, x: 0, ease: Cubic.EaseOut }
      );
    },
    next: function() {
      if (store.state.curSteps >= store.state.maxSteps) {
        console.log("maxed steps! stopping");
        this.stop();
        return;
      }
      if (store.state.curSteps == 0) {
        this.start();
      }
      if (store.state.started) {
        let item1 = document.getElementById("item1");
        let item2 = document.getElementById("item2");
        let item3 = document.getElementById("item3");
        console.log("Executing Next");
        if (store.state.curSteps == 1) {
          gsap.set(item1, { opacity: 1 });
          let lineheight = item1.offsetHeight + 20;
          gsap.to("#line", {
            duration: 1,
            y: lineheight,
            ease: Cubic.EaseOut
          });
          gsap.fromTo(
            "#text1",
            { clipPath: "inset(0% 0% 100% 0%)" }, //might also need webkitClipPath for FF
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 0.85,
              ease: Cubic.EaseOut
            }
          );
        }
        if (store.state.curSteps == 2) {
          gsap.set(item2, { opacity: 1 });
          let lineheight = item1.offsetHeight + item2.offsetHeight + 35;
          gsap.to("#line", {
            delay: 0,
            duration: 1,
            y: lineheight,
            ease: Cubic.EaseOut
          });
          gsap.fromTo(
            "#text2",
            { clipPath: "inset(0% 0% 100% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 0.85,
              ease: Cubic.EaseOut
            }
          );
        }
        if (store.state.curSteps == 3) {
          gsap.set(item3, { opacity: 1 });
          let lineheight =
            item3.offsetHeight + item1.offsetHeight + item2.offsetHeight + 45;
          gsap.to("#line", {
            delay: 0,
            duration: 1,
            y: lineheight,
            ease: Cubic.EaseOut
          });
          gsap.fromTo(
            "#text3",
            { clipPath: "inset(0% 0% 100% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 0.85,
              ease: Cubic.EaseOut
            }
          );
        }
        store.state.curSteps++;
        console.log(store.state.curSteps);
      } else {
        console.log("Starting");
        gsap.set("#area", { delay: 4, duration: 1, opacity: 0 });
        store.state.curSteps = 0;
        this.start();
      }
    },
    stop: function() {
      gsap.to("#text3", {
        clipPath: "inset(0% 0% 100% 0%)",
        opacity: 0.5,
        duration: 0.3,
        delay: 0.1,
        ease: Cubic.EaseOut
      });
      gsap.to("#text2", {
        clipPath: "inset(0% 0% 100% 0%)",
        opacity: 0.5,
        duration: 0.4,
        delay: 0.15,
        ease: Cubic.EaseOut
      });
      gsap.to("#text1", {
        clipPath: "inset(0% 0% 100% 0%)",
        opacity: 0.5,
        duration: 0.5,
        delay: 0.2,
        ease: Cubic.EaseOut
      });
      gsap.to("#line", {
        delay: 0.2,
        duration: 0.7,
        y: "0em",
        ease: "Cubic.EaseOut"
      });
      gsap.to("#title", {
        delay: 0.4,
        duration: 1,
        x: -50,
        opacity: 0,
        ease: "back.in(2)"
      });
      gsap.to("#line", {
        delay: 0.4,
        duration: 1,
        x: -50,
        opacity: 0,
        ease: "back.in(2)"
      });
      gsap.set("#area", { delay: 4, duration: 1, opacity: 0 });
      store.state.curSteps = 0;
      console.log("stopped and steps at: " + store.state.curSteps);
    },
    restart: function() {
      location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
#container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  hr {
    border-top: 1px solid $text;
  }
  #frame {
    padding: 1.5em;
    margin: 0 auto;
    width: 70vw;
    height: 60vh;
    border: 1px solid $vue-gray;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
    .grid {
      display: inline-grid;
      grid-template-columns: 1fr auto;
      column-gap: 1em;
      margin-bottom: 0.5em;
    }
  }
  #buttons {
    #hint {
      font-size: 0.6em;
    }
    width: 70vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1em;
    button {
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
        background-color: $go-btn;
      }
      &:nth-child(2) {
        background-color: $b2;
      }
    }
    #restart {
      font-size: 0.6em;
      button {
        font-size: 0.8em;
        padding: 0.1em 0.4em;
        background-color: $b4;
      }
    }
    #arrow {
      transform: rotate(90deg);
      animation: 3s fade-in ease;
      filter: invert(38%) sepia(48%) saturate(2134%) hue-rotate(152deg)
        brightness(94%) contrast(91%);
      height: 1.5em;
      animation: bouncey 0.5s ease-in-out alternate infinite;
    }

    @keyframes bouncey {
      0% {
        transform: rotate(90deg) translateY(30px);
      }
      100% {
        transform: rotate(90deg) translateY(20px);
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