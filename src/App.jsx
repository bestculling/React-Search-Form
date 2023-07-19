import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([])
  const [records, setRecords] = useState(data)

  const fetchAPI = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/')
    setData(res.data)
    setRecords(res.data)
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  const SearchData = (e) => {
    const filter = data.filter(element => element.name.toLowerCase().includes(e.target.value))
    setRecords(filter)
  }

  return (
      <div className='container'>
        <input type="text" placeholder='Search...' onChange={SearchData} className='form-control' />
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {
              records.map((element, index) => (
                <tr key={index}>
                  <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.username}</td>
                  <td>{element.email}</td>
                  <td>{element.phone}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
  )
}

export default App
