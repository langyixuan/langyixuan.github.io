(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{520:function(t,e){t.exports={transition:"x",dense:!0,normalActions:[{title:"博客源码",handler:function(){window.open("https://github.com/langyixuan/My-Blog")}},{title:"好康的",handler:function(){window.open("https://space.bilibili.com/191823311")}}],eventActions:{link:[{title:"在新标签页中打开链接",handler:function(t){window.open(t.currentLink)}},{title:"复制链接",handler:function(t){t.clipboard=t.currentLink,t.$nextTick((function(){t.copy()}))}}],image:[{title:"在新标签页中打开图像",handler:function(t){window.open(t.currentImage)}},{title:"复制图像链接",handler:function(t){t.clipboard=t.currentImage,t.$nextTick((function(){t.copy()}))}}]},stickyActions:[{icon:"mdi-weather-night",title:"切换主题",handler:function(t){t.$vuetify.theme.dark=!t.$vuetify.theme.dark,t.$vuetify.theme.dark?(document.body.setAttribute("data-theme","dark"),localStorage.setItem("mode","dark")):(document.body.setAttribute("data-theme","light"),localStorage.setItem("mode","light"))}}]}}}]);