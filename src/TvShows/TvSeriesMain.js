import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import tvnavbar from './Images/tvnavbar.webp';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, createSearchParams } from "react-router-dom";
import cardImage from './Images/cardImage.jpg'
import seriesImage from './Images/seriesImage.jpg';

const parser = new DOMParser();

function TvSeriesMain() {
    const navigate = useNavigate();
    //const classes = useStyles();
    const styles = {
        CardContent: {
            fontSize: '30px',

        }
    }

    const [TVschedule, setTVschedule] = useState([])

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        const response = await fetch('https://api.tvmaze.com/schedule?country=US&date=2022-12-10')
            .then((response) => response.json())
        setTVschedule(response)
    }
    const selectCard = (cardVal) => {
        navigate(`/series-detail`, { state: { cardVal } })
      
    }


    return (
        <Grid container>
            <Grid container direction="row" justifyContent="center"
                alignItems="center">
                <Grid item xs={12}>


                    <Card sx={{ position: 'relative' }} >
                        <CardMedia
                            component="img"
                            height="194"
                            image={tvnavbar}
                            alt="Banner Image"
                        />
                        <CardContent className={styles.CardContent} sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '30%',
                            transform: 'translate(-50%, -50%)', color: 'white', fontSize: '30px'
                        }}>The easiest way to <span style={{ color: 'fuchsia', fontSize: '30px' }}>track</span> your shows</CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={3}
                mt={3}
                mb={2}
                ml={2}
                mr={2}
            >

                {TVschedule && TVschedule.slice(0, 10).map((item, index) => {
                    const htmlStr = item.show.summary

                    const txtDoc = parser.parseFromString(htmlStr, "text/html");
                    var charTxt = ""
                    txtDoc.body.childNodes.forEach((value) => {
                        charTxt += value.innerText
                        //   //  console.log(value.innerText)

                    })
                    return (
                        <Grid item md={4} key={item.id}>
                            <Card sx={{ maxWidth: 360, display: 'flex' }} onClick={() => selectCard(item)}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        //height="160"
                                        image={item.show.image ? item.show.image.medium : seriesImage}
                                        alt="Image content"
                                        sx={{ width: 151 }}
                                    />
                                </CardActionArea>
                                <CardContent >

                                    <Typography gutterBottom variant="h6" component="div" sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        WebkitLineClamp: "1",
                                        WebkitBoxOrient: "vertical",
                                    }}>
                                        {item.show.name}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        WebkitLineClamp: "6",
                                        WebkitBoxOrient: "vertical",
                                    }}>
                                        {charTxt}

                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                }

                )}
            </Grid>

        </Grid>
    )
}
export default TvSeriesMain;