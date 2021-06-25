import React from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';

const ComponentWidget = (props) => {
    const client = props.client;

    return (
        <div>

            {(() => {
                console.log(client)
                switch(client) {
                    case "shriver":
                       return <ElfsightWidget widgetID="9db6571e-0bd6-44b7-85f9-b4aa1db6b330" />
                       break;

                    case "alpha":
                        return <ElfsightWidget widgetID="8ab0e618-a1a3-4ba1-971f-78454211ae6d" />
                        break;

                    default:
                        break;
                }
            })()}

        </div>
    )
}

export default ComponentWidget;


