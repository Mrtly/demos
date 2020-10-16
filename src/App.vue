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

<style lang="scss">
@import "@/styles/colors.scss";
html,
body {
  height: 100%;
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: Mali, Avenir, Helvetica, Arial, sans-serif;
  font-weight: 100;
  color: $text;
  background-color: $bkg-col;
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

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
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
 