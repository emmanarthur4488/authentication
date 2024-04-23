import {useNavigate} from 'react-router-dom'
import {useEffect, useRef, useState} from "react"
import './signup.css'
import {ToastContainer, toast} from 'react-toastify'



const Signup = () => {
    
    const navigate = useNavigate();
    const [formValid, setFormValid] = useState(false)
    const [form, setForm] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        Password: ""
    });

    useEffect(()=>{
       if (
        form.name !== "" &&
        form.surname !== "" &&
        form.email !== "" &&
        form.password !== "" &&
        form.Password !== ""
       ){
           setFormValid(true)
       } else {
           setFormValid(false)
       }
    }, [form.name,
        form.surname,
        form.email,
        form.password,
        form.Password])
    
    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        sessionStorage.setItem('userDetails', JSON.stringify({...form}))

        toast.success(`welcome to GramDech ${form.name}`)

        setTimeout(()=>{
            navigate('/services')
        }, 5000);
        

        
    }

  return (
    <div className="auth_signup">
        <ToastContainer/>
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Name" name="name" onChange={handleChange}/><br/>
                <input type="text" placeholder="Surname" name="surname" onChange={handleChange}/><br/>
                <input type="text" required placeholder="Contact email" name="email" onChange={handleChange}/><br/>
                <input type="password" required placeholder="Password" name="password" onChange={handleChange}/><br/>
                <input type="password" required placeholder="Comfirm Password" name="confirm password" onChange={handleChange}/>

                <button
                 className={formValid?"auth_signup-active":"auth_signup-submit"}
                 >
                     Sign UP
                </button>
            </form>
        </div>
      
    </div>
  )
}

export default Signup
