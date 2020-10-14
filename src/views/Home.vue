<template>
  <div class="home">
    <div id="links">
      <div class="link" id="link1">
        <router-link to="/demo1">staggered pics</router-link>
      </div>
      <div class="link" id="link2">
        <router-link to="/demo2">split text</router-link>
      </div>
      <div class="link" id="link3">
        <router-link to="/demo3">explosion</router-link>
      </div>
      <div class="link" id="link4">
        <router-link to="/demo4">presentation</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, Linear } from "gsap";

export default {
  name: "Home",
  mounted: function() {
    gsap.fromTo(
      ".link",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        delay: 0.2,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: Linear
      }
    );
  }
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
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
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
    &:nth-child(4) {
      a {
        background-color: $b3;
        &:hover {
          background-color: $b3-hov;
        }
      }
    }
  }
}
</style>
