import Vue from 'vue'
import Router from 'vue-router'
import home from "@/components/pages/home.vue"
import about from "@/components/pages/about.vue"
import services from "@/components/pages/services.vue"
import blog from "@/components/pages/blog.vue"
import career from "@/components/pages/career.vue"
import contact from "@/components/pages/contact.vue"
import readmore from "@/components/pages/readmore.vue"
import readmoreblog from "@/components/pages/readmoreblog.vue"
import fournotfour from "@/components/pages/fournotfour.vue"
Vue.use(Router)
export default new Router({
    mode:"history",
    routes:[
        {
            path: '/',
            name:'home',
            component:home
        },
        {
            path:"/about",
            name:'about',
            component:about
        },
        {
            path:"/services",
            name:'services',
            component:services
        },
        {
            path:"/blog",
            name:'blog',
            component:blog
        },
        {
            path:"/career",
            name:'career',
            component:career
        },
        {
            path:"/contact",
            name:'contact',
            component:contact
        },
        {
            path:"/readmore",
            name:'readmore',
            component:readmore
        },
        {
            path:"/readmoreblog",
            name:'readmoreblog',
            component:readmoreblog
        },
        {
            path:"*",
            name:'404',
            component:fournotfour
        }
    ]
})