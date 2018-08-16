<script>
import ResponsiveImage from './ResponsiveImage';

// image wrapper for Image type in jsapi-torchiodev.com/Image
export default {
  name: 'ImageElement',
  components: {
    ResponsiveImage
  },
  props: {
    image: {
      required: true
    },
    preloadStyle: {
      type: Object,
      default: () => ({
        opacity: 0,
        transition: '.5s opacity ease-in-out'
      })
    },
    onloadStyle: {
      type: Object,
      default: () => ({
        opacity: 1
      })
    }
  },
  data: () => ({
    loaded: false
  }),
  computed: {
    sources() {
      if (!this.image)
        return [];
      
      return this.image.srcset.map( ({ url, size:[label, size] }) => ({url , [label]: size}) );
    },
    style() {
      let style = this.preloadStyle;

      if (this.loaded)
        style = { ...style, ...this.onloadStyle };

      return style;
    }
  }
}
</script>
<template lang="pug">
  responsive-image.img( v-if='image' :sources='sources'
    v-on='$listeners' 
    @load='loaded = true'  
    :style='style'
  )
</template>

