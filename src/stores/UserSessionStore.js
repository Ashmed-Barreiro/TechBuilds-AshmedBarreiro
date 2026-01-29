import { defineStore } from "pinia";

export const useUserSessionStore = defineStore("userSession", {
  state: () => ({
    username: "Guest Builder",
    github: "https://github.com/"
  }),
  actions: {
    visitGithub() {
      window.open(this.github, "_blank");
    }
  }
});
