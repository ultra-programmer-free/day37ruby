import { Box, Heading } from "@chakra-ui/react"
import React from "react"


export const NotFound = () => {
    return   <Box as="main" w={400} mx="auto" mt="20">
    <Heading as="h1" size="xl">404エラー
    </Heading>
    <Box>ページが見つかりませんでした</Box>
    </Box>
}