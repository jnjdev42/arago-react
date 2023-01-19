import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import './App.css';
import Test from './Test';

function TeacherCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.teacher.name} {props.teacher.firstName}
      </Typography>
      <Typography variant="body2">
        {new Date(props.teacher.birthDate).toLocaleDateString("fr")}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Appeler</Button>
    </CardActions>
  </Card>
  );
}

export default TeacherCard;
