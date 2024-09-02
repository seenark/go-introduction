import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Go for Typescript developers",
  description: "This is internal training for AQS. I create this website for teaching instead of create keynote sor canva slides",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Outline',
        items: [
          { text: "01 init project", link: "/01.init" },
          { text: "02 main", link: "/02.main-file" },
          { text: "03 variable", link: "/03.var" },
          { text: "04 print", link: "/04.print" },
          { text: "05 data type", link: "/05.data-type" },
          { text: "06 operators", link: "/06.operator" },
          { text: "07 type conversion", link: "/07.type-conversion" },
          { text: "08 function", link: "/08.function" },
          { text: "09 composite data type", link: "/09.composite-data-type" },
          { text: "10 condition", link: "/10.condition" },
          { text: "11 iteration", link: "/11.iteration" },
          { text: "12 Defer", link: "/12.defer" },
          { text: "13 Panic", link: "/13.panic" },
          { text: "14 String", link: "/14.string" },
          { text: "15 Pointer", link: "/15.pointer" },
          { text: "16 Json", link: "/16.json" },
          { text: "17 Method", link: "/17.method" },
          { text: "18 Interface", link: "/18.interface" },
          { text: "19 Module", link: "/19.module" },
          { text: "20 Pacakge manager", link: "/20.package-manager" },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
