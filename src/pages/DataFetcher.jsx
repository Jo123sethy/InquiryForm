import React, { useEffect, useState } from 'react'

const DataFetcher = () => {
    const [items,setItems] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);

    // Api 
const fetchData = async ()=>{
    try{
        setIsLoading(true);
        const response= await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok){
            throw new Error(`HTTP Error ! Status: ${response.status}`);
        }
        const data = await response.json();
        setItems(data);
        setErrorMessage(null);
        
    }catch(error){
        setErrorMessage(error.errorMessage)
    }finally{
        setIsLoading(false);
    }
}


useEffect(()=>{
    fetchData();
},[])

if(errorMessage){
    return(
        <>
        <div>
            Oops ! {errorMessage}
            Something went wrong please try again later !
        </div>
        <button onClick={fetchData} style={styles.button}>
          Try Again
        </button>
        </>
    )
}
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Data </h2>
      <div style={styles.grid}>
        {items.map((item)=>(
       <div key={item.id} style={styles.card}>
        <h3> Name:{item.name}</h3>
        <h2>User Name:{item.username}</h2>
        <h2>Email: {item.email}</h2>
        <h2>Street:{item.address.street}</h2>
        <h2>Suite: {item.address.suite}</h2>
       </div>
        ))}

      </div>
    </div>
  )
}

const styles={
    header:{
        color:"yellow"
    },
    container :{
        padding:'20px',
        fontfamily: 'Arial, sans-serif'
    }
    ,
        grid:{
   color:"white"
        }
    
}

export default DataFetcher
