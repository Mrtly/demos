<template>
  <div id="container">
    <div id="frame">
      <div id="area">
        <div id="topic">
          <div id="f0">Lorem Hipsum Kombucha.</div>
        </div>
        <div id="underline">
          <hr id="line" />
        </div>
        <div id="item1">
          <div id="f1_parent" class="bold">
            <div class="grid">
              <span>□</span>
              <span id="f1">Chia pop-up tumblr retro enim.</span>
            </div>
          </div>
        </div>
        <div id="item2">
          <div id="f2_parent" class="bold">
            <div class="grid">
              <span>□</span>
              <span id="f2">Shaman dreamcatcher portland banh mi hot chicken.</span>
            </div>
          </div>
        </div>
        <div id="item3">
          <div id="f3_parent" class="bold">
            <div class="grid">
              <span>□</span>
              <span id="f3">
                Polaroid craft beer twee chicharrones ethical hut.
                Wolf moon squid hella blue bottle fam pickled retro lomo.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="buttons">
      <button v-on:click="start">start</button>
      <button v-on:click="next">next</button>
      <button v-on:click="stop">stop</button>
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

// eslint-disable-next-line
window.addEventListener("load", function(event) {
  function init() {
    gsap.set("#area", { opacity: 0 });
    gsap.set("#item1", { opacity: 0 });
    gsap.set("#item2", { opacity: 0 });
    gsap.set("#item3", { opacity: 0 });
    console.log("init");
  }
  init();
});

export default {
  name: "demo1",
  store,
  methods: {
    dosomething: function() {
      console.log(store.state.curSteps);
      alert(store.state.curSteps);
    },
    start: function() {
      console.log("start");
      store.state.started = true;
      console.log("In - started = true");
      gsap.set("#area", { opacity: 1 });
      gsap.fromTo(
        "#f0",
        { opacity: 0 },
        {
          delay: 0.1,
          duration: store.state.dur - 0.2,
          opacity: 1,
          ease: Cubic.EaseOut
        }
      );
      gsap.fromTo(
        "#f0",
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
            "#f1_parent",
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
            "#f2_parent",
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
            "#f3_parent",
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
        this.start();
      }
    },
    stop: function() {
      gsap.fromTo(
        "#f3_parent",
        { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
        {
          clipPath: "inset(0% 0% 100% 0%)",
          opacity: 0.5,
          duration: 0.3,
          delay: 0.1,
          ease: Cubic.EaseOut
        }
      );
      gsap.fromTo(
        "#f2_parent",
        { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
        {
          clipPath: "inset(0% 0% 100% 0%)",
          opacity: 0.5,
          duration: 0.4,
          delay: 0.15,
          ease: Cubic.EaseOut
        }
      );
      gsap.fromTo(
        "#f1_parent",
        { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
        {
          clipPath: "inset(0% 0% 100% 0%)",
          opacity: 0.5,
          duration: 0.5,
          delay: 0.2,
          ease: Cubic.EaseOut
        }
      );
      gsap.to("#line", {
        delay: 0.2,
        duration: 0.7,
        y: "0em",
        ease: "Cubic.EaseOut"
      });
      gsap.to("#f0", {
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";

#container {
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
    text-align: center;
    button {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      color: $vue-gray;
      font-weight: 500;
      letter-spacing: 2px;
      font-size: 0.7em;
      padding: 0.2em 0.5em;
      margin: 0.4em;
      border: none;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
      cursor: pointer;
      &:nth-child(1) {
        background-color: $b1;
      }
      &:nth-child(2) {
        background-color: $b2;
      }
      &:nth-child(3) {
        background-color: $b3;
      }
    }
  }
}
</style>
