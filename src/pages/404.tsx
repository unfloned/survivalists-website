
import {Grid} from "@nextui-org/react";

export function Page404() {
    return <Grid.Container gap={2} justify="center" alignItems={"stretch"} style={{height: '60vh'}}>
        <Grid.Container gap={2} justify="center" alignItems={"center"}>
            <h2>Seite nicht gefunden</h2>
        </Grid.Container>
    </Grid.Container>
}