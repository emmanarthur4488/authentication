import React, {useEffect, useState} from 'react'
import './customer.css'
import Dashboard from '../../Dashboard/Dashboard'


const Customer = () => {

  const [customers, setCustomers] = useState([])

  useEffect(() => {
      fetch('https://fakerapi.it/api/v1/persons?_quantity=9')
      .then(response => response.json())
      .then(data => setCustomers(data.data))
  }, [])

  // console.log(customers)



  return (
    <div>
        <div className="customer-container">
          <div>
            <Dashboard/>
          </div>

          <div>
            <div className="customer">
              <h2>Customers</h2>
              </div>
              
              <div className="table-main">
                <table>
                  <thead>
                    <tr>
                      <th>FULL NAME</th>
                      <th>EMAIL</th>
                      <th>PHONE NO</th>
                      <th>GENDER</th>
                    </tr>
                  </thead>

                  <tbody>

                    {
                      customers ? customers?.map((customer, idx) => (
                      <tr key={idx}>
                        <td>
                          <p>
                            <span>{customer.firstname}</span>
                            <span>{customer.lastname}</span>
                          </p>
                        </td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.gender}</td>
                      </tr>
                      )) : null
                    }
                    
                  </tbody>
                </table>
              </div>
          </div>

            
        </div>
    </div>
  )
}

export default Customer
