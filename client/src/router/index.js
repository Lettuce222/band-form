import Vue from "vue";
import Router from "vue-router";
import Select from "@/components/Select.vue";
import MakeForm from "@/components/MakeForm.vue";
import AnswerForm from "@/components/AnswerForm.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Select",
      component: Select
    },
    {
      path: "/make",
      name: "MakeForm",
      component: MakeForm
    },
    {
      path: "/answer",
      name: "AnswerForm",
      component: AnswerForm
    }
  ]
});
