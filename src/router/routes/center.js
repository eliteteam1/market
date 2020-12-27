import Center from "@/views/Center/Center"
import Login from "@/views/Center/Login"

var centerRouter = [
    {
        path:"/center" , 
        component:Center
    },
    {
        path:'/login',
        component:Login
    }
]

export default centerRouter