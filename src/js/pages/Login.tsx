import * as React from "react"
import { useAuth } from "../hooks/use-auth"
import { Box, Button, Heading, HStack, Input } from "@chakra-ui/react"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { isLoggeIn,login, userName, setUserName} =useAuth();
  const navigate = useNavigate();
//ログイン中だった場合は、/todoに遷移させる
useEffect(() => {
  if(isLoggeIn) {
  navigate("/todo")
  }
},[isLoggeIn])
    return(
      <Box as="main" w={400} mx="auto" mt="20">
        <Heading as="h1" size="xl">ログイン</Heading>
        <HStack spacing={4} mt={10}>

                <Input placeholder="ユーザ名"   value={userName} onChange={(e) => setUserName(e.target.value)} 
                w={40}
                />
                <Button  colorScheme="blue" onClick={login}>
                  ログイン
                  </Button>
        </HStack>
          </Box>
        )
}