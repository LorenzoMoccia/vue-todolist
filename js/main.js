const { createApp } = Vue

  createApp({
    data() {
      return {

        newTask: {
          name: ""
        },


        toDoList: [
          {
              name: "Lavare i piatti",
              
          },
          {
              name: "Dare da mangiare ai gatti",
             
          }
        ]




        
    }
  },

  methods:{


   onAddTask(){
      this.toDoList.push(this.newTask);

      this.newTask = {
        name: ""
      }

      console.log(this.newTask);
   }
      
      
   


  }
  }).mount('#app')


