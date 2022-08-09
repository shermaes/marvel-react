import { Container as Content } from "semantic-ui-react";
import "./Container.scss"

export default function Container({children, bg}) {
    //esto lo hgao para poder quira el background negro de listlastevents
    //asi filtramos para reusar una misma clase
    return(
        <div className={bg !== "light"?'container-bg': null}>
            <Content>{children}</Content>
        </div>
    )
    
};
