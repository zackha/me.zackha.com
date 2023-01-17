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
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 200ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
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
.contact {
  text-align: center;
  margin: 3.5rem auto auto auto;
}
.contact .link {
  padding: 1px 3px;
  margin: 0 2px 0px 2px;
  border-radius: 3px;
  font-weight: 400;
}
.link {
  text-decoration: none;
  color: #000;
  font-weight: bold;
}
.link:hover {
  background-color: red;
  color: #fff;
}
.nuxt-link-exact-active {
  background-color: white;
}
</style>
