import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
// import '~bootstrap/scss/bootstrap.scss';

let user ='';
const loginReducer=(state={error:''},action)=>{


    switch(action.type){
        
        case "emailORUsername":
            if(action.emailORUsername !==''){
                return {...state,emailORUsername:action.emailORUsername};
            }
            break;
        case "password":
            if(action.password !==''){
                return {...state, password:action.password}
            }
            break;
        case "LOGIN":
                const loadInfo = async () => {
                    const res = await axios.get('http://localhost/admin-redux-project8-main/backend/login.php?email='+state.emailORUsername+'&password='+state.password);
                    sessionStorage.clear()
                sessionStorage.setItem("user_info", res.data);
                console.log(res.data);
                let user_info= sessionStorage.getItem("user_info");

                console.log(user_info);
                if(user_info != ''){
                    window.location.href = "/home";
                }
                return {...state, error: 'Username/ email or password is invalid'}
            
  
            };
            loadInfo();
            
            
        default:
            return state;
    }
    
    
    
}
export default loginReducer;