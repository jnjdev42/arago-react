import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import TeacherCard from './TeacherCard';

function Protected(props) {

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:5001/teachers", {
      headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}`}
    }).then((res) => {
      setTeachers(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className="Teachers">
      {teachers.map((item, index) => (
        <TeacherCard key={index} teacher={item} />
      ))}
    </div>
  );
}

export default Protected;
