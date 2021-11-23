import * as React from 'react';
import { Scripts } from 'remix';
import Main from "./main";

function Root() {
    const [count, setCount] = React.useState(0);
    return (
        <html>
            <head>
                <title>Remix App with Rumext</title>
            </head>
            <body>
                <Main />
                <Scripts />
            </body>
        </html>
    );
}

export default Root;
