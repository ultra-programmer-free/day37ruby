import { useCallback, useEffect, useMemo, useState } from "react";
import { Todo } from "../types/todo";

export const useTodoList = () => {
        const [todoList, setTodoList] = useState<Todo[]>([]);
        const [filterWord, setfilterWord] = useState<string>("");
        // マウント時に、LocalStorageからtodo一覧のデータを取得する
        useEffect(() => {
          const todoListData = localStorage.getItem("todo-list");
           if(todoListData) {
      setTodoList(JSON.parse(todoListData))
        }  
        }, [])
      
        // todoListが更新されるたびに、 LoacalStorageにデータを保存する
        useEffect(() => {
       localStorage.setItem("todo-list", JSON.stringify(todoList));
        }, [todoList]); //依存配列   

    const addTodo = (newTask: string, newPerson: string, newDeadline: string) => setTodoList((prev: Todo[])=> [
        ...prev,
         {
            id: Date.now(),
            task: newTask,
             person: newPerson,
              deadline: newDeadline},
     ]);

     const deleteTodo = useCallback(
      (id: number) => 
        setTodoList((prev) => prev.filter((todo) => todo.id !== id)),
    [], 
    )
     ;

const filteredTodoList =useMemo (
  () => 
todoList.filter(
  (todo) =>
   todo.task.includes(filterWord) || todo.person.includes(filterWord),
),
[todoList,filterWord],
)
        return {
   todoList: filteredTodoList,
   addTodo,
   deleteTodo,
   filterWord,
   setfilterWord
              };
}