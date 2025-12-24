import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './CardInfo.css'
export default function CardInfo({info}) {
    let image="https://plus.unsplash.com/premium_photo-1694475163305-69050e25af54?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let HOT="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let COLD="https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    let RAIN="https://media.istockphoto.com/id/1168079071/photo/high-rise-lightning.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wc8b7VwFK_lmkerhpM7EF4pqpjJwJTU4ncgP8JBUIe4=";

    return (
        <div className='CardInfo'>
            <div className='Card'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80? RAIN : info.temp>15? HOT:COLD }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <b>{info.city}</b>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                            <p>Temperature {info.temp}&deg;C</p>
                            <p>Humidity {info.humidity}</p>
                            <p>MinTemperature {info.tempmin}&deg;C</p>
                            <p>MaxTemperature {info.tempmax}&deg;C</p>
                            <p>The weather can be described as <b>{info.weather}</b> and feels like {info.feelslike}&deg;C</p>

                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

