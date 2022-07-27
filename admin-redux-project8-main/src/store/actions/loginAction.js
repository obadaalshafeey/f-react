
export const email=(email)=>{
    return{
        type: 'email',
        email,
    }
}
export const password=(password)=>{
    return{
        type: 'password',
        password,
    }
}

export const emailORUsername=(emailORUsername)=>{
    return{
        type: 'emailORUsername',
        emailORUsername
    }
}
export const login=()=>{
    return{
        type: 'LOGIN',
    }
    
}


function fetchPostsRequest(){
    return {
      type: "FETCH_REQUEST"
    }
  }
  
  function fetchPostsSuccess(payload) {
    return {
      type: "FETCH_SUCCESS",
      payload
    }
  }
  
  function fetchPostsError() {
    return {
      type: "FETCH_ERROR"
    }
  }