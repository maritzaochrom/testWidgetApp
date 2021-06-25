import React from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';


const InstagramWidget = (props) => {

    const client = props.client;

    return (
        <div>

            {(() => {
                console.log(client)
                switch(client) {
                    case "shriver":
                       return <ElfsightWidget widgetID="a8abf7d5-baa2-46d2-8711-891ca4cd03f2" />
                    break;

                    case "alpha":
                        return <ElfsightWidget widgetID="a3c8fefb-3cab-4399-a920-e4c7c7e3589b" />
                        break;

                    default:
                        break;
                }
            })()}

        </div>
    )

}

export default InstagramWidget;

