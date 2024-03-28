import Grid from "@mui/material/Grid";

interface FullwidthSectionProps {
    children?: JSX.Element | JSX.Element[],
    mt?: number | any,
    mb?: number | any,
    m?: number | any,
    ml?: number | any,
    mr?: number | any,
    my?: number | any,
    mx?: number | any,
    py?: number | any,
    pt?: number | any,
    pb?: number | any,
    bgcolor?: string,
    direction?:
        'row' |
        'row-reverse' |
        'column' |
        'column-reverse',
    justifyContent?:
        'flex-start' |
        'center' |
        'flex-end' |
        'space-between' |
        'space-around' |
        'space-evenly',
    alignItems?:
        'flex-start' |
        'center' |
        'flex-end' |
        'stretch' |
        'baseline',
    overflow?: string,

}

function FullwidthSection(props: FullwidthSectionProps) {
    const {
        children,
        mt,
        mb,
        m,
        ml,
        mr,
        my,
        mx,
        py,
        pt,
        pb,
        overflow,
        direction = "row",
        justifyContent = "center",
        alignItems = "center",
        bgcolor
    } = props

    return <Grid container
                 width={'100%'}
                 maxWidth={'100vw'}
                 direction={direction}
                 justifyContent={justifyContent}
                 alignItems={alignItems}
                 overflow={'hidden'}
                 mt={mt}
                 mb={mb}
                 ml={ml}
                 mr={mr}
                 py={py}
                 pt={pt}
                 pb={pb}
                 m={m}
                 mx={mx}
                 my={my}
                 sx={{
                     overflow: overflow,
                     backgroundColor: bgcolor
                 }}

    >
        {children}
    </Grid>
}

export default FullwidthSection