<script>
/**
 * sources as defined in https://www.npmjs.com/package/srcset
 * if baseUrl not defined, 
 *    sources will have their own baseUrl prefixed
 * 
 *    
 */
import srcset from 'srcset';
import joiner from 'url-join';
export default {
  name: "ResponsiveImage",
  props: {
    src: {
      type: Number,
      default: 0
    },
    baseUrl: {
      type: String,
      required: false
    },
    sources: {
      type: Array,
      default: () => []
    },
    sizes: {
      type: [String, Array],
      default: `100vw`
    },
  },
  computed: {
    _sources() { // full url srcs
      let srcs = this.sources.map( src => {
        if( !src.url )
          throw 'SOURCES prop object array must have an url property';
        
        if (this.baseUrl) {
          src.url = joiner(this.baseUrl, src.url);
        }
        return src;
      });
      return srcs;
    },
    _srcset() {
      return srcset.stringify(this._sources);
    },
    _sizes() { //array
      let sizes = this.sizes;
      if (typeof sizes === 'string')
        sizes = sizes.split(',');

      
      return sizes;
    },
    _src() { // fallback url
      return this._sources[this.src].url;
    }
  },
}
</script>
<template>
  <!-- <div>
    <p>{{ _src }}</p>
    <p>{{ _sources }}</p>
    <p>{{ _sizes }}</p>
  </div> -->
  <img 
      :src="_src"
      :srcset="_srcset"
      :sizes="_sizes" />
</template>
