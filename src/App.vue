<template>
  <div id="app">
    <responsive-image 
    title="Responsive Image"
    alt="tag1, tag2, tag2, Responsive Image"
    :src="src" 
    :baseUrl="baseUrl" 
    :sources="sources" 
    :sizes="sizes" />
  </div>
</template>

<script>
// const ResponsiveImage = import(/* webpackChunkName: "index" */'./Image');
import ResponsiveImage from './Image';

export default {
  name: 'app',
  components: { ResponsiveImage },
  data () {
    return {
        src: 0,
        baseUrl: 'http://via.placeholder.com',
        sources: [
          {url: '350x350', width: 350},
          {url: '460x460', width: 460},
          {url: '900x900', width: 900},
          {url: '1400x600', width: 1400},
        ],
        // sizes: [
        //   '(max-width: 320px) 100vw',
        //   '(max-width: 640px) 50vw',
        //   '20vw',
        // ],
        sizes:
          `100vw`,
    }
  }
}
</script>

<style>
img {
  width: 100vw;
  border: 2px solid black;
}
@media (min-width: 320px) {
  img {
    width: 50vw;
  }
}
@media (min-width: 640px) {
  img {
    width: 20vw;
  }
}
</style>
