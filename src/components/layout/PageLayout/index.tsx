
import Footer from "./Footer";
import Box from "@mui/material/Box";
import * as React from "react";

interface IPageLayoutProps {
    children: React.ReactNode;
}

function PageLayout(props: IPageLayoutProps) {
    const {
        children
    } = props

    return <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}
    >

        {children}

        <Box
            component="footer"
            sx={{
                mt: 'auto',
            }}
        >
            <Footer/>
        </Box>
    </Box>

}

export default PageLayout