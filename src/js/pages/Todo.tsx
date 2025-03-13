import * as React from "react";
import { NewTodoForm } from "../components/todo/new-todo-from";
import { useTodoList } from "../hooks/use-todo-list";

import { Button, Box,  Heading, Input, } from "@chakra-ui/react";
import { TodoTable } from "../components/todo/todo-table";
import { Layout } from "../components/layout";


export const Todo = () => {
const { todoList,  addTodo, deleteTodo, filterWord, setfilterWord} = 
useTodoList()



    return(
       <Layout title="TODO">
 <Box mt="20">
              <Heading as="h2" size="xl">新規TODOを作成
              </Heading>
              
              <NewTodoForm addTodo={addTodo}  /> 
              </Box>
              <Box mt="20" as="section">
              <Heading as="h2">TODO一覧</Heading>
              <Box mt="10" >
                  <Input 
                  placeholder="絞り込み"
                  value={filterWord}
                  onChange={(e) => setfilterWord(e.target.value)}
                  w={40}
                  />
              </Box>

              <Box mt="10">
                <TodoTable todoList={todoList} deleteTodo={deleteTodo} />
          
              </Box>
              </Box>
       </Layout>
                          );
                        }