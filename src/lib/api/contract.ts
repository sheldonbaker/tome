import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

const TodoSchema = z.object({
  id: z.string(),
  title: z.string(),
  completed: z.boolean(),
});

export const contract = c.router({
  getTodos: {
    method: "GET",
    path: "/todos",
    responses: {
      201: TodoSchema.array(),
    },
    query: z.object({
      completed: z.boolean().optional(),
      search: z.string().optional()
    }),
    summary: "Get todos with optional filters",
  },
  createTodo: {
    method: "POST",
    path: "/todo",
    responses: {
      201: TodoSchema,
    },
    body: z.object({
      title: z.string(),
      completed: z.boolean(),
    }),
    summary: "Creates a todo.",
  },
});
