import { useState,useEffect } from 'react'
import getUserData from '../api/api'

const useFetchUserData = (userId) => {
    const [userData,setUserData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
 
    useEffect(()=>{
        const fetchUserData = async () => {
            try {
                const data = await getUserData(userId)
                console.log(data);
                
                setUserData(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchUserData()
    },[userId])
 
    return {userData,loading,error}
}

export default useFetchUserData
