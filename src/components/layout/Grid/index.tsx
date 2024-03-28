import Grid from "@mui/material/Grid";

interface MbqbGridProps {
    children: JSX.Element | JSX.Element[],
}

function MbqbGrid(props: MbqbGridProps) {
    const {children} = props
    return <Grid container maxWidth={'lg'} m={'0 auto'} spacing={3}>
        {children}
    </Grid>
}

export default MbqbGrid