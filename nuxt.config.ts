export default {
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
 plugins:
 [{src:'~/plugins/OwlCarousel.js',
mode:'client',
ssr: false,
},
{ src: '~/plugins/bootstrap.js', mode: 'client' }

],



static: {
  prefix: false
},


}
