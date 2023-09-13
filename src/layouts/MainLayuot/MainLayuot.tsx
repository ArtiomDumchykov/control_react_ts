import { Outlet } from "react-router-dom";

import { Footer, Header, Main } from "components/Partial";

export const MainLayuot = () => {

    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer/>
        </>
    )
}
