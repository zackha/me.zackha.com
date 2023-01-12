<template>
  <div class="content">
    <div class="main">
      <div class="time">{{ currentTime }}</div>
      <div class="about">
        <div class="face"><img src="/face.png"></div>
        <div class="name">Zack Hatlen</div>
        <div class="info"> I am a frontend engineer focused on modern web technologies such as <a target="_blank" href="https://vuejs.org/guide/introduction.html">Vue</a>, <a target="_blank" href="https://reactjs.org/docs/getting-started.html">React</a>, <a target="_blank" href="https://nuxt.com/docs/getting-started/introduction">Nuxt</a>, <a target="_blank" href="https://graphql.org/learn/">GraphQL</a>, and serverless computing. Usually, I work with eCommerce technologies in <a target="_blank" href="https://woocommerce.github.io/woocommerce-rest-api-docs/">Woocommerce</a>. </div>
      </div>
      <div class="contact">
        <a target="_blank" href="https://www.github.com/zackha/">github</a>
        <a target="_blank" href="mailto:zckhtln@icloud.com">email</a>
        <a target="_blank" href="">cv</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: new Date().toLocaleTimeString()
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>

<style>
html, body {
  font-size: 11px;
  margin: 0;
  font-family: Courier New,Courier,Monaco;
  font-size: 11px;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.main {
  max-width: 214px;
  max-height: 80%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.time {
  font-size: 12px;
  text-align: center;
  margin-bottom: 1.5rem;
}
.about {
  border: 1px dotted #666;
  border-radius: 12px;
}
.face {
  height: 206px;
  width: 206px;
  margin: 3px 0px 15px 3px;
}
.face img {
  width: 206px;
  height: 206px;
  border-radius: 8px 8px 0 0;
}
.name {
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 3px;
  padding: 0 15px;
}
.info {
  padding: 0 15px 15px 15px;
}
.info a {
  color: #000;
  font-weight: bold;
  text-decoration: none;
}
.contact {
  text-align: center;
  margin-top: 1.5rem;
}
.contact a {
  padding: 2px 4px;
  margin: 0px 3px;
  text-decoration: none;
  color: #000;
}
.contact a:hover,
.info a:hover {
  background-color: red;
  color: #fff;
  border-radius: 1px;
}
</style>
