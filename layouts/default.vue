<template>
  <div class="content">
    <div class="main">
      <div class="time">{{ currentTime }}</div>
      <Nuxt/>
      <div class="contact">
        <NuxtLink to="/" class="link">me</NuxtLink>
        <a target="_blank" href="https://www.github.com/zackha/" class="link">github</a>
        <a target="_blank" href="mailto:zckhtln@icloud.com?subject=I want you" class="link">email</a>
        <NuxtLink to="/projects" class="link">projects</NuxtLink>
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
  max-width: 385px;
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
  max-width: 189px;
}
.about .info .link {
  font-weight: bold;
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
.contact {
  text-align: center;
  margin: 3.5rem auto auto auto;
}
.contact .link {
  padding: 1px 3px;
  margin: 0 2px 0px 2px;
  border-radius: 3px;
}
.link {
  text-decoration: none;
  color: #000;
}
.link:hover {
  background-color: red;
  color: #fff;
}
.nuxt-link-exact-active {
  background-color: white;
}
</style>
