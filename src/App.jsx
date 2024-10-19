import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faL } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  



function App() {

  const [age, setAge]=useState('')
  const [height, setheight]=useState('')
  const [weight, setWeight]=useState('')
  const [bmi,setbmi]=useState(0)
  const [status,setstatus] =useState('')

  const [isAge,setIsAge]=useState(true)
  const [isHeight,setIsHeight]=useState(true)
  const [isWeight,setIsWeight]=useState(true)

  const validate = (e)=>{

    if(!!e.target.value.match('^(?:[1-9]|[1-9][0-9]|[1-4][0-9]{2}|500)$'))
    {
      if(e.target.name=='age')
      {
        setAge(e.target.value)
        setIsAge(true)
      }
      else if(e.target.name=='height')
      {
        setheight(e.target.value)
        setIsHeight(true)
      }
      else
      {
        setWeight(e.target.value)
        setIsWeight(true)
      }
    }

    else
    {
      if(e.target.name=='age')
        {
          setAge(e.target.value)
          setIsAge(false)
        }
        else if(e.target.name=='height')
        {
          setheight(e.target.value)
          setIsHeight(false)
        }
        else
        {
          setWeight(e.target.value)
          setIsWeight(false)
        }

    }
    
    

    
  }
  const calculate =() =>{
    if(age=='' || height==''||weight=='')
    {
      toast.error('Please fill the complete details')
    }

    else
    {
      

    setbmi((weight*100*100)/(height*height))

    if(bmi<18.5)
    {
      setstatus('Underweight')
    }
    else if(bmi>=18.5 && bmi<=24.9)
    {
      setstatus('Normal Weight')
    }
    else if(bmi>=25 && bmi<=29.9)
    {
      setstatus('Overweight')
    }
    else
    {
      setstatus('Obese')
    }
    }

    
  }

  const reset =()=>{
    setAge('')
    setheight('')
    setWeight('')
    setIsAge(true)
    setIsHeight(true)
    setIsWeight(true)
    setstatus('')
    setbmi(0)
  }




  return (
    <>

    <div className='container-fluid'>
      <div className='row w-100'>
        <div className="col-md-3"></div>
        <div className="col-md-6 border rounded border-success mt-5 bg-transparent">
            <h2 className='text-center text-success mt-3'>BMI CALCULATOR</h2>
            <button className='btn btn-success' onClick={reset}><FontAwesomeIcon icon={faArrowsRotate} className='text-light'/></button>
            <div style={{height:'100px'}} className='border border-dark rounded bg-light mt-3'>
              <h4 className='text-center mt-3'>{`Your Body Mass Index is ${bmi}` }</h4>
              <h4 className='text-center'>{`You are ${status} `}</h4>
            </div>
            
              
              <div className='row mt-3'>
                <div className="col-md-4 mt-md-0 mt-3">
                <TextField id="filled-basic" name='age' value={age} label="AGE" variant="filled" className='bg-light rounded'onChange={(e)=>{validate(e)}}/>
          {!isAge && <span className='text-danger'>*Invalid input</span>}
          </div>
                <div className="col-md-4 mt-md-0 mt-3">                
                  <TextField id="filled-basic" name='height' value={height} label="HEIGHT (in cm)" variant="filled" className='bg-light rounded' onChange={(e)=>{validate(e)}}/>

          {!isHeight && <span className='text-danger'>*Invalid input</span>}
          </div>
                <div className="col-md-4 mt-md-0 mt-3">               
                   <TextField id="filled-basic"name='weight'value={weight} label="WEIGHT (in Kg)" variant="filled" className='bg-light rounded' onChange={(e)=>{validate(e)}}/>

        {!isWeight && <span className='text-danger'>*Invalid input</span>}</div>
              </div>


              
                <div className="my-3 d-flex justify-content-center">
               
                <Button  variant="contained" color="success" className='w-75' disabled={isAge && isHeight && isWeight?false:true} onClick={calculate}>CALCULATE YOUR BMI</Button>
           
                </div>
                <ToastContainer position="top-center" autoClose='2000' theme='colored'/>

                

              

            
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
    <ToastContainer position="top-center" autoClose='2000' theme='colored'/>
    
      
    </>
  )
}

export default App
