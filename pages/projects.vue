<template>
  <div class="projects">
    <div class="project mb">
      <a href="/images/woonuxt-bg.png" target="_blank"><nuxt-img format="webp" width="300" src="/images/woonuxt.png"/></a>
      <div class="description">
        <div class="projectname">woonuxt.com</div>
        <div class="detail">Water resistant nylon with glitter vinyl yoke, down insulated quilted baffles and taffeta lining. Snap front closure with patch</div>
        <a class="visit link"  target="_blank" href="https://demo2-woonuxt.netlify.app/product/patterned-wrap-skirt/">examine the project ></a>
      </div>
    </div>
    <div class="project mb">
      <a href="/images/rays-bg.png" target="_blank"><nuxt-img format="webp" width="300" src="/images/rays.png"/></a>
      <div class="description">
        <div class="projectname">rays.com.tr</div>
        <div class="detail">Water resistant nylon with glitter vinyl yoke, down insulated quilted baffles and taffeta lining. Snap front closure with patch</div>
        <a class="visit link"  target="_blank" href="https://rays.com.tr/">examine the project ></a>
      </div>
    </div>
    <div class="project mb">
      <a href="/images/terodon.png" target="_blank"><nuxt-img format="webp" width="300" src="/images/terodon.png"/></a>
      <div class="description">
        <div class="projectname">terodon.com</div>
        <div class="detail">Water resistant nylon with glitter vinyl yoke, down insulated quilted baffles and taffeta lining. Snap front closure with patch</div>
        <a class="visit link"  target="_blank" href="https://terodon.com/">examine the project ></a>
      </div>
    </div>
    <div class="project mb">
      <a href="/images/reybul-bg.png" target="_blank"><nuxt-img format="webp" width="300" src="/images/reybul.png"/></a>
      <div class="description">
        <div class="projectname">reybul.com</div>
        <div class="detail">Water resistant nylon with glitter vinyl yoke, down insulated quilted baffles and taffeta lining. Snap front closure with patch</div>
        <a class="visit link"  target="_blank" href="https://reybul.com/">examine the project ></a>
      </div>
    </div>
    <div class="project mb">
      <a href="/images/zackha.png" target="_blank"><nuxt-img format="webp" width="300" src="/images/zackha.png"/></a>
      <div class="description">
        <div class="projectname">zackha.com</div>
        <div class="detail">Water resistant nylon with glitter vinyl yoke, down insulated quilted baffles and taffeta lining. Snap front closure with patch</div>
        <a class="visit link"  target="_blank" href="https://zackha.com/">examine the project ></a>
      </div>
    </div>
    <div class="project mb">
      <a href="https://github.com/zackha/woocommerce-admin/" target="_blank"><nuxt-img format="webp" width="300" src="/images/github.png"/></a>
      <div class="description">
        <div class="projectname">woocommerce-admin</div>
        <div class="detail">Water resistant nylon with glitter vinyl yoke, down insulated quilted baffles and taffeta lining. Snap front closure with patch</div>
        <a class="visit link"  target="_blank" href="https://github.com/zackha/woocommerce-admin/">examine the project ></a>
      </div>
    </div>
    <div class="project">
      <a href="https://github.com/zackha/ra-data-woocommerce/" target="_blank"><nuxt-img format="webp" width="300" src="/images/github.png"/></a>
      <div class="description">
        <div class="projectname">ra-data-woocommerce</div>
        <div class="detail">Water resistant nylon with glitter vinyl yoke, down insulated quilted baffles and taffeta lining. Snap front closure with patch</div>
        <a class="visit link"  target="_blank" href="https://github.com/zackha/ra-data-woocommerce/">examine the project ></a>
      </div>
    </div>
  </div>
</template>
<style>
.projects {
  height: 348px;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}
.project {
  display: flex;
  scroll-snap-align: start;
}
.project img {
  display: flex;
  margin: 5px;
  height: 120px;
  width: 171px;
  border-radius: 6px;
  box-shadow: 0px 0px 5px -2px rgb(0 0 0 / 0.19);
}
.mb {
  margin-bottom: 11px;
}
.description {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 10px 10px;
}
.projectname {
  margin: 0 0 0.625rem 0;
  line-height: 1;
  font-weight: 400;
  font-size: 14px;
}
.detail {
  height: 75px;
}
.visit {
  align-self: flex-end;
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #efefef;
  border-radius: 7px;
}
::-webkit-scrollbar-thumb {
  background: #e3e3e3;
  border-radius: 7px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a4a4a4;
}
</style>