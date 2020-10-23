<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view id="flex1" />
    </transition>
    <div id="footer">
      <router-link to="/">home</router-link>|
      <router-link to="/demo1">pics</router-link>|
      <router-link to="/demo2">text</router-link>|
      <router-link to="/demo3">explosion</router-link>|
      <router-link to="/demo4">presentation</router-link>|
      <router-link to="/demo5">more soon</router-link>
    </div>
  </div>
</template>

<script>
let ROOT_PATH = "https://gsap-demos.vercel.app";
export default {
  name: "app",
  data() {
    return {
      screenshot: ROOT_PATH + require("./assets/screenshot.png")
    };
  },
  metaInfo() {
    return {
      meta: [
        { property: "og:title", content: "Greensock animation demos in Vue" },
        { property: "og:site_name", content: "Gsap demos" },
        { property: "og:type", content: "Gsap demos" },
        { property: "og:image", content: this.screenshot },
        {
          property: "og:description",
          content: "Greensock animation demos in Vue"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/styles/colors.scss";
html,
body {
  height: 100%;
  margin: 0;
  overflow: scroll;
  background: rgb(27, 11, 21);
  background: linear-gradient(
    90deg,
    rgba(27, 11, 21, 1) 10%,
    rgba(50, 12, 35, 1) 90%
  );
}
#app {
  font-family: Mali, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 100;
  color: $text;
  font-size: 1.8em;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  #flex1 {
    flex: 1;
    padding-top: 1em;
  }
  #footer {
    padding: 0.5em;
    display: inline;
    border-top: 1px solid $text;
    min-height: 1em;
    margin: 0 auto;
    font-size: 0.8em;
    a {
      transition: all 1s ease-out;
      margin: 1em;
      padding: 0.1em 0.2em;
      font-weight: 400;
      color: $text;
      text-decoration: none;
      &.router-link-exact-active {
        color: $active;
        &::before,
        &::after {
          content: " ◦ ";
        }
      }
    }
    img {
      width: 1em;
    }
  }
}

button {
  font-family: Mali, Avenir, Helvetica, Arial, sans-serif;
  color: $alabaster;
  font-weight: 500;
  letter-spacing: 2px;
  font-size: 0.7em;
  padding: 0.3em 0.7em;
  margin: 0.4em;
  border: none;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  cursor: pointer;
  background-color: $go-btn;
  transition: all 0.5s ease-out;
  &:hover {
    background-color: $go-btn-hov;
  }
}

// sliding
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

@media screen and (max-width: 768px) {
  #app {
    font-size: 1.3em;
    #footer {
      font-size: 0.6em;
      a {
        margin: 0.5em;
        padding: 0.1em;
      }
    }
  }
}
</style>
 