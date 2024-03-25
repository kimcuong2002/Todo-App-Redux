export const todoListSelector = (state) => {
  const todosRemaining = state.todoList.filter((todo) => {
    if (state.filters.status === "All") {
      return todo.name.includes(state.filters.search);
    }
    return (
      todo.name.includes(state.filters.search) &&
      (state.filters.status === "Completed" ? todo.completed : todo.completed)
    );
  });
  return todosRemaining;
};

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelecotr = (state) => state.filters.priority;
