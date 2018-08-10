# VUE-RESPONSIVE-IMG
# Generates img element with responsive attributes

## Props
1. sources: Array = [], list of source files and sizes, according to [srcset dependency](https://www.npmjs.com/package/srcset)
2. baseUrl: String = '', common url to prefix every url in *sources*
3. src: Number = 0, *sources* element index for fallback url
4. sizes: String | Array = '100vw', list of mappings between screen size breakpoints and image sizes, as in [MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Resolution_switching_Different_sizes)