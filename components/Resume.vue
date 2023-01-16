<template>
  <div class="content">
    <div class="main">
      <div class="time">{{ currentTime }}</div>
      <div class="about">
        <div class="face"><img src="/face.png"></div>
        <div class="name">Zack Hatlen</div>
        <div class="info"> I am a frontend engineer and designer focused on modern web technologies such as <a target="_blank" href="https://vuejs.org/guide/introduction.html">Vue</a>, <a target="_blank" href="https://reactjs.org/docs/getting-started.html">React</a>, <a target="_blank" href="https://nuxt.com/docs/getting-started/introduction">Nuxt</a>, <a target="_blank" href="https://graphql.org/learn/">GraphQL</a> and serverless computing. Usually, I work with eCommerce technologies in <a target="_blank" href="https://woocommerce.github.io/woocommerce-rest-api-docs/">Woocommerce</a>.</div>
      </div>
      <div class="contact">
        <a target="_blank" href="https://www.github.com/zackha/">github</a>
        <a target="_blank" href="mailto:zckhtln@icloud.com?subject=I want you">email</a>
        <a target="_blank" href="">cv</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: ''
    }
  },
  mounted() {
    this.updateTime()
    setInterval(() => {
      this.updateTime()
    }, 1000)
  },
  methods: {
    updateTime() {
      this.currentTime = new Date().toLocaleTimeString()
    }
  }
}
</script>

<style>
html, body {
  font-size: 11px;
  margin: 0;
  font-family: Courier New,Courier,Monaco;
  font-size: 11px;
  background-color: #f2f2f2;
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
  margin: auto auto 3.5rem auto;
}
.time small {
  font-size: 8px;
}
.about {
  border: 1px dashed #666;
  border-radius: 22px;
  background-color: #fff;
  box-shadow: 0px 0px 0px 12px #fff;
  padding: 12px;
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
.info a {
  color: #000;
  font-weight: bold;
  text-decoration: none;
}
.contact {
  text-align: center;
  margin: 3.5rem auto auto auto;
}
.contact a {
  padding: 2px 4px;
  margin: 0px 3px;
  text-decoration: none;
  color: #000;
}
.contact a:hover {
  background-color: red;
  color: #fff;
  border-radius: 5px;
}
.info a:hover {
  background-color: red;
  color: #fff;
  border-radius: 1px;
}
</style>
