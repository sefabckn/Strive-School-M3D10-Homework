const myToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOTU0M2FhY2FhMjAwMTU1MmExOWYiLCJpYXQiOjE2MzkxNDMwNjEsImV4cCI6MTY0MDM1MjY2MX0.P8swnCNNDtgTs6OrEXKqzZ-rjLq9uRMb8lxQfa87uI8"
const url = "https://striveschool-api.herokuapp.com/api/movies/"    
const genreUrl = 'https://striveschool-api.herokuapp.com/api/movies/action'

const getMovies = async() =>{
    try{
        const response = await fetch(url,{
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

const getMovieByGenre = async() =>{
    try{
        const response = await fetch(genreUrl,{
          headers:{
            'Content-Type': 'application/json',
            "Authorization": myToken
          }  
        })
        if(!response.ok) throw new Error("Failed to Fetch Movies")
        const moviesByGenre = await response.json()
        console.log(moviesByGenre)
    }
    catch(error){
        console.log(error)
    }
}
const saveBtn = document.querySelector('#save-btn')

const postMovie = async(event) =>{
    event.preventDefault()
    try{
        const inputValues = {
            name: document.querySelector('#name').value,
            description: document.querySelector('#description').value,
            category: document.querySelector('#category').value,
            imageUrl: document.querySelector('#imageUrl').value,
        }
        console.log(inputValues)
        const response = await fetch(genreUrl,{
            method: 'POST',
            body: JSON.stringify(inputValues),
            headers:{
            "Authorization": myToken,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }  
        })
        if(!response.ok) throw new Error("Failed to Fetch Movies")
        const postData = await response.json()
        console.log(postData)
    }
    catch(error){
        console.log(error)
    }
}

const deleteMovie = async() =>{

    const accepted = confirm("Are you sure you want to permanently DELETE this movie?")
    if(accepted){
        try {
            const response = fetch(url, )
        } catch (error) {
            
        }
    }








}











const validateForm = (event) => {
    event.target.form.classList.add('validated')
}

window.onload = ()=>{
    getMovies()
    getMovieByGenre()
    postMovie()
    
}

