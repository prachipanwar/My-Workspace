import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import seriesImage from './Images/seriesImage.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import detailbannerImage from './Images/detailbannerImage.png';
import CardMedia from '@mui/material/CardMedia';


const parser = new DOMParser();
function TVSeriesDetail() {
    const location = useLocation();
    const cardDetail = location.state.cardVal
    // console.log(location.state.cardVal)
    const htmlStr = cardDetail.show.summary

    const txtDoc = parser.parseFromString(htmlStr, "text/html");
    var charTxt = ""
    txtDoc.body.childNodes.forEach((value) => {
        charTxt += value.innerText

    })

    return (

        <Grid container>
            <Grid container direction="row" justifyContent="center"
                alignItems="center">
                <Grid item xs={12}>


                    <Card sx={{ position: 'relative' }} >
                        <CardMedia
                            component="img"
                            height="170"
                            image={detailbannerImage}
                            alt="Banner Image"
                        />
                        <CardContent sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '30%',
                            transform: 'translate(-50%, -50%)', color: 'white', fontSize: '40px'
                        }}>{cardDetail.show.name}</CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="flex-start" mt={1} spacing={2} mb={2} mr={2} ml={2}>

                <Grid item md={4}>
                    <Grid container direction="column">
                        <Grid item>
                            {cardDetail.show.image ? (<img src={cardDetail.show.image.medium} alt="Image" />) : (
                                <img src={seriesImage} alt="Image" style={{ width: '80%' }} />
                            )}
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 600 }}>
                                Type : {cardDetail.show.type}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 600 }}>
                                Language : {cardDetail.show.language}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 600 }}>
                                Country : {cardDetail.show.network.country.name}
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>


                <Grid item md={6}>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 600 }}>
                                {cardDetail.name}
                            </Typography>

                        </Grid>
                        <Grid item >
                            <Typography variant="h6"> {charTxt}</Typography>
                        </Grid>
                        <Grid item mt={2}>
                            <Button variant="contained" sx={{ backgroundColor: 'black' }} onClick={() => window.open(cardDetail.url, '_blank')}
                            >Watch Now</Button>
                        </Grid>

                    </Grid>

                </Grid>


            </Grid>
        </Grid>
    )
}
export default TVSeriesDetail;