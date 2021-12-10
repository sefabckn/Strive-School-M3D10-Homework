const myToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOTU0M2FhY2FhMjAwMTU1MmExOWYiLCJpYXQiOjE2MzYxMjEzNDMsImV4cCI6MTYzNzMzMDk0M30.zFcoolIgUcEP9_uinWyWKWl-LAtFg3vMUZ07CpVc2Hw"
const url = "https://striveschool-api.herokuapp.com/api/movies/"    







const getMovies = async() =>{
    try{
        const response = await fetch(url,{
            method:"GET",
          headers:{
            'Content-Type': 'application/json',
            "Authorization": myToken
          }  
        })
        if(!response.ok) throw new Error("Failed to Fetch Movies")
        const movies = await response.json()
    }
    catch(error){
        console.log(error)
    }
}
window.onload = ()=>{
    getMovies()
    
}