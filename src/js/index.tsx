import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react'

const root = createRoot(document.getElementById('app')!);
root.render(
    <ChakraProvider>

<App />
    </ChakraProvider>,
);