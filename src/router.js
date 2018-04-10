import Vue from "vue";
import Router from "vue-router";

import AboutMe from "@/views/AboutMe";
import WhatICan from "@/views/WhatICan";
import WhatIHaveLearned from "@/views/WhatIHaveLearned";
import WhatIHaveDone from "@/views/WhatIHaveDone";
import Contact from "@/views/Contact";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkExactActiveClass: "is-active ",
  routes: [
    {
      path: "/over-mij",
      name: "AboutMe",
      component: AboutMe
    },
    {
      path: "/wat-ik-kan",
      name: "WhatICan",
      component: WhatICan
    },
    {
      path: "/wat-ik-heb-geleerd",
      name: "WhatIHaveLearned",
      component: WhatIHaveLearned
    },
    {
      path: "/wat-ik-heb-gedaan",
      name: "WhatIHaveDone",
      component: WhatIHaveDone
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/",
      redirect: {
        name: "AboutMe"
      }
    }
  ]
});
