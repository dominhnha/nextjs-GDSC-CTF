import { setUser } from '../../redux/slices/Userslice'
export const handleSetUser = (data)=>{
    return {
        success:true,
        payload:data
    }
}

const handleRemoveUser = (data)=>{
    return {
        success:false,
        payload:null
    }
}