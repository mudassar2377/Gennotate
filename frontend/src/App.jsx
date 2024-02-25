import React, { useState, useEffect } from 'react'

const App = () => {
  // const [data, setData] = useState('')
  const [msg, setMsg] = useState('')
  const [msg2, setMsg2] = useState('')
  const [msg3, setMsg3] = useState('')
  const [user, setUser] = useState(0)
  const [imgs, setImgs] = useState(0)
  const [links, setLinks] = useState([])
  // useEffect(()=>{
  //   async function fetchData() {
  //     console.log(import.meta.env.VITE_API_URL)
  //     try {
  //       const response = await fetch(`${import.meta.env.VITE_API_URL}`)
  //       if (!response.ok) {
  //         throw new Error ('Network response was not ok');
  //       }
  //       const result = await response.json();
  //       console.log(result)
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching data: ', error)
  //     }
  //   }
  //   fetchData();
  // }, [])
  const signUp = (obj) => {
    fetch('http://127.0.0.1:8000/api/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((responseData) => {
      console.log('Success:', responseData);
      if (responseData.token) {
        setMsg(`${responseData.token}`)
      } else {
        setMsg(responseData.username)
      }
    })
    .catch((error) => {
      console.error('Error:', error.message || 'An error occurred.');
    });
  };
  const login = (obj) => {
    fetch('http://127.0.0.1:8000/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((responseData) => {
      console.log('Success:', responseData);
      if (responseData.token) {
        setMsg2(responseData.token)
        setMsg3(responseData.user.username)
        setUser(parseInt(responseData.user.id))
        getGeneratedImages( responseData.user.id )
      } else {
        setMsg2('Wrong username or password')
      }
    })
    .catch((error) => {
      console.log('Error:', error.message || 'An error occurred.');
      setMsg2('Wrong username or password')
    });
  };
  const generateImages = (obj) => {
    fetch('http://127.0.0.1:8000/generateImages/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
    .then((response) => {
      if (!response.ok) {
        console.log(response)
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((responseData) => {
      console.log('Success:', responseData);
      getGeneratedImages( user )
    })
    .catch((error) => {
      console.log('Error:', error.message || 'An error occurred.');
      setMsg2('Wrong username or password')
    });
  };
  const getGeneratedImages = (obj) => {
    fetch(`http://127.0.0.1:8000/getGeneratedImages/?userId=${obj}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (!response.ok) {
        console.log(response)
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((responseData) => {
      console.log('Success:', responseData);
      setImgs(parseInt(responseData.generated_images.length));
      setLinks(responseData.generated_images.map(item => item.link.replace('image/upload/http:', 'https://')));
    })
    .catch((error) => {
      console.log('Error:', error.message || 'An error occurred.');
      setMsg2('Wrong username or password')
    });
  };
  const handleSubmit1 = (e) =>{
    e.preventDefault();
    const username = document.getElementById("username").value
    const firstName = document.getElementById('fname').value
    const lastName = document.getElementById('lname').value
    const password = document.getElementById('password').value
    const cPassword = document.getElementById('cpassword').value
    console.log(username, firstName, lastName, password, cPassword)
    if (password!==cPassword) {
      setMsg('Password didn\'t match.')
    } else {
      signUp({ "username": username, "first_name": firstName, "last_name": lastName, "password": password })
    }
  }
  const handleSubmit2 = (e) =>{
    e.preventDefault();
    const username = document.getElementById("username2").value
    const password = document.getElementById('password2').value
    login({ "username": username, "password": password })
  }
  const handleSubmit3 = (e) =>{
    e.preventDefault();
    const type = document.getElementById("type").value
    const nums = document.getElementById("nums").value
    generateImages({ "userId": user, type: type, num: nums });
  }
  return (
    <div>
      <hr/>
      <h3>SIGNUP</h3>
      <hr/>
      <form onSubmit={handleSubmit1}>
        <label htmlFor="username">Username:</label><br/>
        <input type="text" id="username" name="username" defaultValue=""/><br/>
        <label htmlFor="fname">First Name:</label><br/>
        <input type="text" id="fname" name="fname" defaultValue=""/><br/>
        <label htmlFor="lname">Last Name:</label><br/>
        <input type="text" id="lname" name="lname" defaultValue=""/><br/>
        <label htmlFor="password">Password:</label><br/>
        <input type="password" id="password" name="password" defaultValue=""/><br/>
        <label htmlFor="cpassword">Confirm Password:</label><br/>
        <input type="password" id="cpassword" name="cpassword" defaultValue=""/><br/>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
      <div>Token: {msg}</div>
      <hr/>
      <h3>LOGIN</h3>
      <hr/>
      <form onSubmit={handleSubmit2}>
        <label htmlFor="username2">Username:</label><br/>
        <input type="text" id="username2" name="username2" defaultValue=""/><br/>
        <label htmlFor="password2">Password:</label><br/>
        <input type="password" id="password2" name="password2" defaultValue=""/><br/>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
      <div>Token: {msg2}</div>
      <div>UserName: {msg3}</div>
      <div>UserId: {user}</div>
      <hr/>
      <h3>Generate Images</h3>
      <hr/>
      <form onSubmit={handleSubmit3}>
        <label htmlFor="type">Type:</label><br/>
        <input type="text" id="type" name="type" defaultValue=""/><br/>
        <label htmlFor="nums">Number:</label><br/>
        <input type="number" id="nums" name="nums" defaultValue="" min={0} max={9}/><br/>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
      <div>Generated Images: {imgs}</div>
      {/* <img src='https://res.cloudinary.com/dnmy80tpe/image/upload/v1708757919/mayycobgdfpvzwst9s5g.jpg' alt='' width={300}/> */}
      <div>
        <hr/>
        {links.map((link, index) => (
          <div>
            <img key={index} src={link} alt='Not Displayed' width={300} />
            <hr/>
          </div>
          ))}
      </div>
      <hr/>
    </div>
  )
}

export default App