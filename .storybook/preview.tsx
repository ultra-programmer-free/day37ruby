import { ChakraProvider } from '@chakra-ui/react';
import type { Preview } from '@storybook/react'
import React from "react";
import { BrowserRouter } from 'react-router-dom';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return(
        <BrowserRouter>
        <ChakraProvider>
            <Story />
            </ChakraProvider>
            </BrowserRouter>
      )  
}
]
};

export default preview;