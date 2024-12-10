import { makeClient } from "$lib/api";

export const load = async (event) => {
  const todos = await makeClient(event).getTodos()

  return {
    todos
  };
};