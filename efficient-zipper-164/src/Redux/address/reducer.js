import * as types from './type'

const initialstate={
    loading:false,
    error:false,
    useraddressdata:[]
}

export const addressReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case types.ADD_ADDRESS_LOADING:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case types.ADD_ADDRESS_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false
            }
        }
        case types.ADD_ADDRESS_ERROR:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }
        case types.GET_ADDRESS_LOADING:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case types.GET_ADDRESS_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                useraddressdata:payload
            }
        }
        case types.GET_ADDRESS_ERROR:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }
        case types.UPDATE_ADDRESS_LOADING:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case types.UPDATE_ADDRESS_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false
                
            }
        }
        case types.UPDATE_ADDRESS_ERROR:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }
        case types.DELETE_ADDRESS_LOADING:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case types.DELETE_ADDRESS_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false
                
            }
        }
        case types.DELETE_ADDRESS_ERROR:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }

        default:{
            return{
                state
            }
        }
    }
}