import { Box} from "@chakra-ui/react"
import React from "react"
import { useParams } from "react-router-dom";
import { useTodoList } from "../hooks/use-todo-list";
import { NotFound } from "./NotFound";
import { Layout } from "../components/layout";

export const  TodoDetail = () => {
let {id} = useParams();
 const {todoList} = useTodoList();

const todo = todoList.find((todo) => todo.id === id);

if(!todo) return <NotFound></NotFound>;
    return(
    <>
    <Layout title="TODO詳細">
    <Box mt="20" as="section">ID: {todo?.id}</Box>
    <Box>タスク名: {todo?.task}</Box>
    <Box> 担当者: {todo?.person}</Box>
    <Box>締切:{todo?.deadline}</Box>
    </Layout>
    
 
    </>
    
)
};