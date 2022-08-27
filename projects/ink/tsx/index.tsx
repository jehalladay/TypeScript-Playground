import React from 'react';
import { render, Text, Color } from 'ink';

type textProp = {
    text: string
} 

const App = (props: textProp) => {

    return (
        <Text bold >
            <Color bgWhiteBright magentaBright>
                {props.text}
            </Color>
        </Text>
    )
}

const { rerender } = render(<App text="Hello World!" />)

setTimeout(
    rerender.bind(null, <App text="goodbye"/>),
    5000
)