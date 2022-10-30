import { createRouter, createWebHistory } from "vue-router";
import TaskListComponent from "@/components/TaskListComponent.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/tasks",
      name: "tasks.list",
      component: TaskListComponent,
    },
  ],
});

export default router;
