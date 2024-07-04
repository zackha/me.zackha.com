<template>
  <div class="about">
    <div class="face">
      <nuxt-img src="/face.png" />
    </div>
    <div class="name">Sefa Bulak</div>
    <div>
      As a frontend engineer and designer specializing in modern web
      technologies, especially
      <a
        target="_blank"
        href="https://vuejs.org/guide/introduction.html"
        class="link"
        >Vue</a
      >
      (for web),
      <a target="_blank" href="https://docs.expo.dev/" class="link">Expo</a>
      (for mobile), and
      <a target="_blank" href="https://graphql.org/learn/" class="link"
        >GraphQL</a
      >
      with headless computing, I deliver innovative, high-performing digital
      solutions.
    </div>
  </div>
</template>
<style>
.about {
  border: 1px dashed #666;
  border-radius: 22px;
  background-color: #fff;
  box-shadow: 0px 0px 0px 12px #fff;
  padding: 12px;
  max-width: 189px;
}
.face {
  text-align: center;
  height: 188px;
}
.face img {
  width: 188px;
  height: 188px;
  border-radius: 12px;
  box-shadow: 0px 0px 20px -5px rgb(0 0 0 / 40%);
}
.name {
  font-weight: 600;
  font-size: 15px;
  margin: 12px 0px 3px;
}
</style>
