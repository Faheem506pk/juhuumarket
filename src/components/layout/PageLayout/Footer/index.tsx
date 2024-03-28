"use client";
import {Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import MuiLink from '@mui/material/Link';
import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
// @ts-ignore
import delve from 'dlv';

const TextColor = '#0a0a0a';
const BackgroundColor = 'rgba(183, 122, 220, 0.1)';

function t(key: string) {
    const trans = {
        "SectionLogo": {
            "community": {
                "name": "Werde Teil der Community!"
            }
        },
        "SectionInfos": {
            "CompanyName": "JUHUU BikeBox GmbH",
            "telephone": {
                "link": "tel:+436604650442",
                "pretty": "+43 660 465 0442"
            },
            "mail": {
                "link": "mailto:office@juhuu.app",
                "pretty": "office@juhuu.app"
            },
            "adress": {
                "link": "https://goo.gl/maps/JPU9bJQKLD9UXTFD8",
                "pretty": "Treustraße 22-24, 1200 Wien Austria"
            }
        },
        "SectionImporant": {
            "name": "Wichtiges",
            "agb": {
                "name": "AGB"
            },
            "privacy": {
                "name": "Datenschutz"
            },
            "impressum": {
                "name": "Impressum"
            },
            "faq": {
                "name": "FAQ"
            },
            "credits": {
                "name": "Credits"
            }
        },
        "SectionDownload": {
            "name": "Download"
        },
        "SectionPartner": {
            "name": "Partner von"
        }
    };

    return delve(trans, key)

}

function Footer() {


    return <Paper elevation={0} sx={{bgcolor: BackgroundColor, py: 5}}>
        <Grid container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              maxWidth={'lg'}
              sx={{bgColor: "#000", py: 7, justifyContent: "center", display: 'flex'}}
              p={{xs: 5, md: 0,}}
              m={'0 auto'}
              columns={50}
        >
            <Grid item sx={{alignSelf: "flex-start", color: TextColor}} xs={50} sm={25} md={17}>
                <Grid item sx={{justifyContent: {
                        sm: "flex-start",
                        xs: "center"
                    }, display: 'flex'}}>
                    <Image
                        src={'/juhuu_logo.svg'}
                        alt={"logo"} width={92 * 2} height={40 * 2}/>
                </Grid>
                <Grid item sx={{justifyContent: {
                        sm: "flex-start",
                        xs: "center"
                    }, display: 'flex'}}>
                    <Typography variant="subtitle1" color={'inherit'}>
                        {t('SectionLogo.community.name')}
                    </Typography>


                </Grid>
                <Grid item sx={{justifyContent: "space-evenly", display: 'flex', mt: 3, maxWidth:{
                sm: '70%',
                        xs: '100%'
                }
                }}>
                    <Link href={"https://at.linkedin.com/company/juhuu"} target={'_blank'}>
                    <Image
                        src={'/assets/img/logos/linkedin_logo-min.png'}
                        alt={"logo"} width={40} height={40}/>
                    </Link><Link href={"https://www.instagram.com/juhuu.app/"} target={'_blank'}>
                    <Image
                        style={{
                            marginLeft: "5px",
                        }}
                        src={process.env.NEXT_PUBLIC_CDN_URL + "components/SocialMediaWidget/instagram.png" + process.env.NEXT_PUBLIC_CDN_FILE_EXTENSION}
                        alt={"Instagram Link"} width={40} height={40}/>
                </Link><Link href={"https://www.facebook.com/people/JUHUU-BikeBox/100066980422418/"} target={'_blank'}>
                    <Image
                        style={{
                            margin: "0 5px",
                        }}
                        src={process.env.NEXT_PUBLIC_CDN_URL + "components/SocialMediaWidget/facebook.png" + process.env.NEXT_PUBLIC_CDN_FILE_EXTENSION}
                        alt={"Facebook Link"} width={40} height={40}/>
                </Link><Link href={"https://www.youtube.com/channel/UCvnF_0V1OPodUzXXk1Vu-5w"} target={'_blank'}>
                    <Image
                        src={'/assets/img/logos/youtube_logo-min.png'}
                        alt={"logo"} width={40} height={40}/>
                </Link>
                </Grid>
            </Grid>
            <Grid item sx={{alignSelf: "flex-start", my: 2}} xs={50} sm={25} md={15}>
                <Grid item>
                    <Typography variant="h6" gutterBottom color={TextColor}>
                        {t('SectionInfos.CompanyName')}
                    </Typography>
                </Grid>
                <Grid item>
                    <List sx={{width: '100%'}}>
                        <ListItem sx={{
                            m: 0,
                            p: 0
                        }}>
                            <ListItemAvatar sx={{
                                minWidth: 20,
                                m: 0,
                                p: 0
                            }}>
                                <Avatar sx={{width: 15, height: 15}} variant="square"
                                        src="/assets/img/icons/call_violett_icon-min.png"/>
                            </ListItemAvatar>
                            <Link href={t('SectionInfos.telephone.link')} style={{
                                textDecoration: "none",
                                color: "#000"
                            }}>
                                <ListItemText primary={t('SectionInfos.telephone.pretty')}/>
                            </Link>
                        </ListItem>
                        <ListItem sx={{
                            m: 0,
                            p: 0
                        }}>
                            <ListItemAvatar sx={{
                                minWidth: 20,
                                m: 0,
                                p: 0
                            }}>
                                <Avatar sx={{width: 15, height: 15}} variant="square"
                                        src="/assets/img/icons/email_violett_icon-min.png"/>
                            </ListItemAvatar>
                            <Link href={t('SectionInfos.mail.link')} style={{
                                textDecoration: "none",
                                color: "#000"
                            }}>
                                <ListItemText primary={t('SectionInfos.mail.pretty')}/>
                            </Link>
                        </ListItem>
                        <ListItem sx={{
                            m: 0,
                            p: 0
                        }}>
                            <ListItemAvatar sx={{
                                minWidth: 20,
                                m: 0,
                                p: 0
                            }}>
                                <Avatar sx={{width: 15, height: 15}} variant="square"
                                        src="/assets/img/icons/location_pin_violett_icon-min.png"/>
                            </ListItemAvatar>
                            <Link href={t('SectionInfos.adress.link')} style={{
                                textDecoration: "none",
                                color: "#000"
                            }}>
                                <ListItemText primary={t('SectionInfos.adress.pretty')}/>
                            </Link>

                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            <Grid item sx={{alignSelf: "flex-start", my: 2}} xs={50} sm={16} md={6}>
                <Grid item>
                    <Typography variant="h6" gutterBottom color={TextColor}>
                        {t('SectionImporant.name')}
                    </Typography>
                </Grid>
                <Grid item>
                    <Link href={'https://docs.juhuu.app/agb'} passHref legacyBehavior>
                        <MuiLink underline="none" color="inherit">
                            <Typography variant="body1" gutterBottom color={TextColor}>
                                {t('SectionImporant.agb.name')}
                            </Typography>
                        </MuiLink>

                    </Link>
                </Grid>
                <Grid item>
                    <Link href={'/legal'} passHref legacyBehavior>
                        <MuiLink underline="none" color="inherit">
                            <Typography variant="body1" gutterBottom color={TextColor}>
                                {t('SectionImporant.privacy.name')}
                            </Typography>
                        </MuiLink>

                    </Link>
                </Grid>
                <Grid item>
                    <Link href={'/legal'} passHref legacyBehavior>
                        <MuiLink underline="none" color="inherit">
                            <Typography variant="body1" gutterBottom color={TextColor}>
                                {t('SectionImporant.impressum.name')}
                            </Typography>
                        </MuiLink>

                    </Link>
                </Grid>
               {/* <Grid item>
                    <Link href={'/fag'} passHref legacyBehavior>
                        <MuiLink underline="none" color="inherit">
                            <Typography variant="body1" gutterBottom color={TextColor}>
                                {t('SectionImporant.faq.name')}
                            </Typography>
                        </MuiLink>

                    </Link>
                </Grid>*/}
                <Grid item>
                    <Link href={'/legal'} passHref legacyBehavior>
                        <MuiLink underline="none" color="inherit">
                            <Typography variant="body1" gutterBottom color={TextColor}>
                                {t('SectionImporant.credits.name')}
                            </Typography>
                        </MuiLink>

                    </Link>
                </Grid>
            </Grid>
            <Grid item sx={{alignSelf: "flex-start", my: 2}} xs={50} sm={18} md={6}>
                <Grid item sx={{justifyContent: "center", display: 'flex'}}>
                    <Typography variant="h6" gutterBottom color={TextColor}>
                        {t('SectionDownload.name')}
                    </Typography>
                </Grid>
                <Grid item sx={{justifyContent: "center", display: 'flex'}}>
                    <Box width={{
                        sm: 130,
                        xs: 130*1.75
                    }} sx={{height: {
                            sm: 50,
                            xs: 50*1.75
                        }, position: 'relative'}}>
                        <Link href={process.env.NEXT_PUBLIC_APP_STORE_URL as string} target={'_blank'}>
                            <Image style={{margin: '0 auto', objectFit: "contain"}}
                                   src={process.env.NEXT_PUBLIC_CDN_URL + "pages/app/apple-store-badge.png" + process.env.NEXT_PUBLIC_CDN_FILE_EXTENSION}
                                   alt={"Apple App Store Link"} fill/>
                        </Link>
                    </Box>
                </Grid>
                <Grid item sx={{justifyContent: "center", display: 'flex'}}>
                    <Box width={{
                        sm: 130,
                        xs: 130*1.75
                    }} sx={{height: {
                            sm: 50,
                            xs: 50*1.75
                        },  position: 'relative'}}>
                        <Link href={process.env.NEXT_PUBLIC_PLAY_STORE_URL as string} target={'_blank'}>


                            <Image style={{margin: '0 auto', objectFit: "contain"}}
                                   src={process.env.NEXT_PUBLIC_CDN_URL + "pages/app/google-play-badge.png" + process.env.NEXT_PUBLIC_CDN_FILE_EXTENSION}
                                   alt={"Google Play Store Link"} fill/>
                        </Link>
                    </Box>
                </Grid>
                <Grid item sx={{justifyContent: "center", display: 'flex'}}>
                    <Box width={{
                        sm: 130,
                        xs: 130*1.75
                    }} sx={{height: {
                            sm: 50,
                            fontSize:13,
                            xs: 50*1.75
                        },  position: 'relative'}}>
                        <Link href={"https://docs.juhuu.app/apk"} target={'_blank'}>
                            APK herunterladen
                        </Link>
                    </Box>
                </Grid>
            </Grid>
            <Grid item sx={{alignSelf: "flex-start", my: 2}} xs={50} sm={16} md={6}>
                <Grid item sx={{justifyContent: "center", display: 'flex'}}>
                    <Typography variant="h6" gutterBottom color={TextColor}>
                        {t('SectionPartner.name')}
                    </Typography>
                </Grid>
                <Grid item sx={{justifyContent: "center", display: 'flex'}}>
                    <Box width={{
                        sm: 100,
                        xs: 100*1.75
                    }} sx={{height: {
                            sm: 100,
                            xs: 100*1.75
                        },  position: 'relative'}}>
                        <Link href={"https://www.a1.net/"} target={'_blank'}>


                            <Image style={{margin: '0 auto', objectFit: "contain"}}
                                   src={'/assets/img/logos/a1_logo-min.png'}
                                   alt={"A1 Logo"} fill/>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
            <Grid item sx={{alignSelf: "flex-start", color: TextColor}} xs={50}>
                <Typography variant={"caption"}>
                    &copy; {new Date().getFullYear()} JUHUU Bikebox GmbH
                </Typography>
                <br />
                <Typography variant={"caption"}>
                    Apple, the Apple logo, iPhone, and iPad are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks
                    of Google LLC. All other trademarks are the property of their respective owners.
                </Typography>
            </Grid>
        </Grid>
    </Paper>
        ;
}

export default Footer
