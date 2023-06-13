<template>
  <div class="about">
    <div class="face">
      <nuxt-img format="webp" width="300" src="/face.png" />
    </div>
    <div class="name">Zack Hatlen</div>
    <div>
      As a creative frontend engineer and designer, I expertly apply modern web
      technologies like
      <a
        target="_blank"
        href="https://vuejs.org/guide/introduction.html"
        class="link"
        >Vue</a
      >,
      <a
        target="_blank"
        href="https://nuxt.com/docs/getting-started/introduction"
        class="link"
        >Nuxt</a
      >, and
      <a target="_blank" href="https://graphql.org/learn/" class="link"
        >GraphQL</a
      >, along with serverless computing. My main forte is leveraging open
      source eCommerce platforms to bring forth innovative, high-performing
      digital solutions.
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
