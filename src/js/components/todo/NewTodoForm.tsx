import * as React from "react"
import { useState } from "react";
import { Box, Button, HStack, Input } from "@chakra-ui/react";


type Props = {
    addTodo:   (newTask: string, newPerson: string, newDeadline: string) => void;
}

export const NewTodoForm = ({ addTodo}: Props) => {
        const [newTask, setNewTask] = useState<string>("");
        const [newPerson, setNewPerson] = useState<string>("");
        const [newDeadline, setNewDeadline] = useState<string>("");
        console.log("NewTodoFormコンポーネントのレンダー")
    
    const addNewTodo = () => {
 addTodo(newTask, newPerson, newDeadline);
    
     setNewTask("");
     setNewPerson("");
     setNewDeadline("");
    };
    return (
    < HStack spacing="4">
        <Input placeholder="タスク名"   value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <Input placeholder="担当者名" value={newPerson} onChange={(e) => setNewPerson(e.target.value)}/>
        <Input placeholder="締切" value={newDeadline} onChange={(e) => setNewDeadline(e.target.value)}
        type="date"/>
        <Box>
        <Button onClick={addNewTodo} colorScheme="blue" >
          追加
          </Button>
          </Box>
        </HStack>
    )
    }
