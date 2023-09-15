import { useState } from 'react'
import Input from './Input.jsx'
import Output from './Output.jsx'
import Left from './Left.jsx'
import '../styles/style.css'

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const initialValues = {
    Name : "",
    email : "",
    phone : "",
    school : "",
    subject : "",
    date : "",
    company : "",
    position : "",
    responsibility : "",
    sdate : "",
    edate : "",
  };
  const [data, setData] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    
  };

  if (activeIndex===0) {
    return (
      <>
        <Left/>
        <Input handleChange={() => setActiveIndex(1)} handleInputChange={(e) => handleInputChange(e)} data={data}/>
      </>
    )
  }
  else {
    return (
      <>
        <Left/>
        <Output handleChange={() => setActiveIndex(0)} data={data}/>
      </>
    )
  }
}

export default App
