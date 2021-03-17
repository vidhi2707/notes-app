const tasks = {
  tasks: [
    {
      text: 'Grocery shopping',
      completed: true,
    },
    {
      text: 'Clean yard',
      completed: false,
    },
    {
      text: 'Film course',
      completed: false,
    },
  ],
  getTasksToDo() {
    const toDo = this.tasks.filter((task) => task.completed === false);
    return toDo;
  },
};

console.log(tasks.getTasksToDo());
