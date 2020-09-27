<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view id="flex1" />
    </transition>
    <div id="footer">
      <router-link to="/">Home</router-link>|
      <router-link to="/demo1">Demo1</router-link>|
      <router-link to="/demo2">Demo 2</router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/colors.scss";
html,
body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: Mali, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 100;
  color: $vue-text;
  background-color: $alabaster;
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
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid $vue-gray;
    height: 1em;
    font-size: 0.8em;
    a {
      transition: all 1s ease-out;
      margin: 1em;
      padding: 0.1em 0.2em;
      font-weight: 300;
      color: $vue-gray;
      text-decoration: none;
      &.router-link-exact-active {
        color: $b1;
      }
    }
    img {
      width: 1em;
    }
  }
}

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
  }
}
</style>
 