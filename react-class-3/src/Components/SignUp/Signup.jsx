
import {useEffect, useRef, useState} from "react"
import './signup.css'


const Signup = () => {
    
    const [formValid, setFormValid] = useState(false)
    const [form, setForm] = useState({
        name: "",
        country: "",
        address: "",
        email: "",
        phoneNumber: ""
    });

    useEffect(()=>{
       if (
           form.name !== "" &&
           form.country !== "" &&
           form.address !== "" &&
           form.email !== "" &&
           form.phoneNumber !== ""
       ){
           setFormValid(true)
       } else {
           setFormValid(false)
       }
    }, [form.name,
        form.country,
        form.address,
        form.email,
        form.phoneNumber])
    
    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        sessionStorage.setItem('userDetails', JSON.stringify({...form}))
        window.location="/dashboard"
    }

  return (
    <div className="auth_signup">
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Name" name="name" onChange={handleChange}/><br/>
                <input type="text" placeholder="Counrty" name="country" onChange={handleChange}/><br/>
                <input type="text" required placeholder="Address" name="address" onChange={handleChange}/><br/>
                <input type="text" required placeholder="Contact email" name="email" onChange={handleChange}/><br/>
                <input type="text" required placeholder="Phone Number" name="phoneNumber" onChange={handleChange}/>

                <div>
                    <input type="checkbox"/>
                    <p>I have read, understand and i agree to the terms and condition</p>
                </div>
                <button
                 className={formValid?"auth_signup-active":"auth_signup-submit"}
                 type="submit"
                 id="actionBtn"
                 disabled={!formValid}>
                     Sign UP
                </button>
            </form>
        </div>
      
    </div>
  )
}

export default Signup
