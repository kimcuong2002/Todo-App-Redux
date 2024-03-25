export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchFilter = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilter = (text) => {
  return {
    type: "filters/statusFilterChange",
    payload: text,
  };
};

export const priorityFilter = (text) => {
  return {
    type: "filters/prioritiesFilterChange",
    payload: text,
  };
};
