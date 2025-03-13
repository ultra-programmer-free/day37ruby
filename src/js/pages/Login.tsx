import * as React from "react"
import { Box, Button, Heading, HStack, Input } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/use-auth-store";

export const Login = () => {
    const {isLoggedIn,login, isLoginCheckDone, } =useAuthStore();


const [userName, setUserName] = useState<string>("");
   const navigate = useNavigate();
   //　ログイン中だった場合は、/todoに遷移させる
  useEffect (() => {
    if ( isLoginCheckDone && isLoggedIn) {
      navigate("/todo")
    }
  }, [ isLoginCheckDone,isLoggedIn])
   
  if (!isLoginCheckDone || isLoggedIn) return null;

  return(
      <Box as="main" w={400} mx="auto" mt="20">
        <Heading as="h1" size="xl">ログイン
        </Heading>
        <HStack spacing={4} mt={10}>

                <Input placeholder="ユーザ名"   value={userName} onChange={(e) => setUserName(e.target.value)} 
                w={40}
                />
                <Button  colorScheme="blue" onClick={() => login(userName)}>
                  ログイン
                  </Button>
        </HStack>
          </Box>
  )
}