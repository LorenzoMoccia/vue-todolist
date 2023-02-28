const { createApp } = Vue

  createApp({
    data() {
      return {

        newTask: {
          name: "",
          isDone: false
        },


        toDoList: [
          {
              name: "Lavare i piatti",
              isDone: true
          },
          {
              name: "Dare da mangiare ai gatti",
              isDone: true
          }
        ]





    }
  },

  methods:{


    onAddTask() {
      this.toDoList.push({
          name: this.newTask.name,
          isDone: false
      });
      
      this.newTask.name = "";
  },
      
   onRemoveTask(index){
    this.toDoList.splice(index, 1)
   }
      
   


  }
  }).mount('#app')


