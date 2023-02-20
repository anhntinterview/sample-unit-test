import { render, waitFor, screen } from "@testing-library/react";
import List from "./";
import axios from "axios";

jest.mock("axios");

const dummyTodos = [
    {
        userId: 1,
        id: 1,
        title: "todo 1",
        completed: false,
    },
    {
        userId: 1,
        id: 2,
        title: "todo 2",
        completed: false,
    },
    {
        userId: 1,
        id: 3,
        title: "todo 3",
        completed: false,
    },
];

test("todos list", async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: dummyTodos });
    render(<List />);

    const todoList = await waitFor(() => screen.findAllByTestId("todo"));

    expect(todoList).toHaveLength(3);
});
