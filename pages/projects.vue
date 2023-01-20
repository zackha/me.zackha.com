<template>
  <div class="scrollable-pane top">
    <div class="pane">
      <div class="projects scrollable">
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
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const pane = document.querySelector(".pane");
    const scroller = document.querySelector(".pane .scrollable");
    const outer = document.querySelector(".scrollable-pane");

    if (pane && scroller && outer) {
      pane.addEventListener("scroll", () => {
        const scroll =  pane.scrollTop;
        const isTop = scroll < 25;
        const isMiddle = scroll >= 25 && scroll < (scroller.scrollHeight - pane.offsetHeight) - 25;

        outer.classList.toggle("top", isTop);
        outer.classList.toggle("middle", isMiddle);
        outer.classList.toggle("bottom", !isTop && !isMiddle);
      });
    }
  }
}
</script>

<style>
.scrollable-pane {
  position: relative;
}
.pane {
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 348px;
}
.scrollable-pane:after, .scrollable-pane:before {
  height: 50px;
  content: "";
  width: calc(100% - 8px);
  position: absolute;
  z-index: 10;
  transition: ease 500ms;
}
.scrollable-pane:before {
  background: linear-gradient(0deg, rgb(255 255 255 / 0%), #f2f2f2 90%);
  top: 0;
  margin-top: -1px;
}
.scrollable-pane:after {
  background: linear-gradient(to bottom, rgb(0 0 0 / 0%), #f2f2f2 90%);
  bottom: 0;
  margin-bottom: -1px;
}
.bottom.scrollable-pane:after, .top.scrollable-pane:before {
  height: 0;
}
.project {
  display: flex;
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
  background: #e5e5e5;
  border-radius: 7px;
}
::-webkit-scrollbar-thumb {
  background: #d5d5d5;
  border-radius: 7px;
}
::-webkit-scrollbar-thumb:hover {
  background: #c5c5c5;
}
</style>