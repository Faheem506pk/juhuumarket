import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import {Breakpoint} from "@mui/material";

interface BreakPointP {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
}

interface BoxedSectionProps {
    children: JSX.Element | JSX.Element[],
    mt?: number | any,
    mb?: number| any,
    m?: number| any,
    ml?: number| any,
    mr?: number| any,
    my?: number| any,
    mx?: number| any,
    py?: number| any,
    pt?: number| any,
    pb?: number| any,
    pl?: number| any,
    pr?: number| any,
    px?: number| any,
    sx?: any,
    maxWidth?: Breakpoint,
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


}

function BoxedSection(props: BoxedSectionProps) {
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
        pl,
        pr,
        px,
        pt,
        pb,
        sx,
        maxWidth = "xl",
        direction = "row",
        justifyContent = "center",
        alignItems = "center",
    } = props

    return <Container maxWidth={maxWidth}>
        <Grid container
              sx={{
                  ...{
                      px: {
                          xs: 3,
                          sm: 12,
                          md: 10,
                          lg: 20,
                      }
                  },
                  ...sx
              }
              }
              direction={direction}
              justifyContent={justifyContent}
              alignItems={alignItems}
              mt={mt}
              mb={mb}
              ml={ml}
              py={py}
              pt={pt}
              pb={pb}
              mr={mr}
              m={m}
              mx={mx}
              my={my}>
            {children}
        </Grid>
    </Container>
}

export default BoxedSection