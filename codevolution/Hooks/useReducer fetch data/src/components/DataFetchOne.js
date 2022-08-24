// fetching data with useState and useEffect
import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchOne() {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState('')
    const [post,setPost] = useState({})
  
  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response =>{
        setLoading(false)
        setPost(response.data)
        setError('')
        console.log(response)
      }).catch(error =>{
          setLoading(false)
          setPost({})
          setError('Something Went Wrong..')

      })
  },[])
  
    return (
    <div>
        {loading?'Loading':[post.title,post.body]}
        {error? error:null}
    </div>
  )
}

export default DataFetchOne
// useEffect(()=>{},[])
// useEffect(arrow function, dependency list)

//axios.get('url').then().catch()