import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',

  state: () => ({
    name: '李四'
  }),

  actions: {
    updateName(name: any) {
      this.name = name
    }
  }
})
