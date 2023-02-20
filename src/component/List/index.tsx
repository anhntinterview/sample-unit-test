import * as React from "react";
import axios from "axios";

export interface IListItem {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

export interface IListProps {}

const List: React.FunctionComponent<IListProps> = (props) => {
    const [todoList, setTodoList] = React.useState<Array<IListItem>>([]);

    React.useEffect(() => {
        (async () => {
            const todos = await axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );
            setTodoList(todos.data);
        })();
    }, []);

    console.log(todoList);

    return (
        <div className="">
            {todoList ? (
                <ul>
                    {todoList.map((todo: any, index: number) => (
                        <li key={index} data-testid="todo">
                            {todo.title}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading....</p>
            )}
        </div>
    );
};

export default List;
