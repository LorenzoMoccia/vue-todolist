const { createApp } = Vue

  createApp({
    data() {
      return {
        toDoList: [
            {
                task: "Creare dei metodi"
            }
            
        ]
      }
    },


    methods:{

    }
  }).mount('#app')