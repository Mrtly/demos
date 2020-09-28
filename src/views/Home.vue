<template>
  <div class="home">
    <div id="links">
      <div class="link" id="link1">
        <router-link to="/demo1">Demo 1</router-link>
      </div>
      <div class="link" id="link2">
        <router-link to="/demo2">Demo 2</router-link>
      </div>
      <div class="link" id="link3">
        <router-link to="/demo3">Demo 3</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, Cubic } from "gsap";

// eslint-disable-next-line
window.addEventListener("DOMContentLoaded", function(event) {
  gsap.fromTo(
    ".link",
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      delay: 1,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: Cubic.easeOut
    }
  );
});

export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";

.home {
  display: flex;
  align-items: center;
  padding: 1.5em;
  margin: 0 auto;
  .link {
    margin: 1em;
    display: inline-block;
    a {
      color: $alabaster;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
      padding: 0.4em 0.8em;
      text-decoration: none;
      transition: all 0.5s ease-out;
    }
    &:nth-child(1) {
      a {
        background-color: $b1;
        &:hover {
          background-color: $b1-hov;
        }
      }
    }
    &:nth-child(2) {
      a {
        background-color: $b4;
        &:hover {
          background-color: $b4-hov;
        }
      }
    }
    &:nth-child(3) {
      a {
        background-color: $b2;
        &:hover {
          background-color: $b2-hov;
        }
      }
    }
  }
}
</style>
