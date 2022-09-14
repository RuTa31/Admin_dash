import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const data = {
    hool_name: 'Тунатай салад',
    ports: 'Порц: 1',
    vne:  '1100'
}
const ActionAreaCard = () => (
    <Box sx={{ maxWidth: 200, position: 'relative' }}>
        <Box sx={{ maxWidth: 150, height: 60 }}>
            <CardMedia
                component="img"
                height="140"
                image="https://alxam.com/wp-content/uploads/2020/11/banshtai-tsai-1024x680.jpg"
                alt="green iguana" sx={{ zIndex: 10, position: 'absolute', width: `70%`, height: `50%`, borderRadius: `50%`, top: '2%', left: `14%` }} />
        </Box>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Box sx={{marginTop: 10}}>
                            {/* <Box> */}
                                <Typography gutterBottom variant="h5" component="div">
                                    {data ? data.hool_name : 'хоолны нэр'}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{display: 'flex', justifyContent: 'center'}}>
                                    {data ? data.ports : 'порц олдсонгүй'}
                                </Typography>
                            {/* </Box> */}
                            <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', justifyContent: 'space-between' }}>
                                <Typography gutterBottom variant="h8" component="div" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    {data ? `${data.vne}₮` : 'үнэ олдсонгүй'}
                                </Typography>
                                <Fab size="small" color="secondary" aria-label="add">
                                    <AddIcon />
                                </Fab>
                            </Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
    </Box>
)
export default ActionAreaCard;
