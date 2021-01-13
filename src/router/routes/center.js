import Center from "@/views/Center/Center"
import Login from "@/views/Center/Login"
import Enroll from "@/views/Center/Enroll"
import Youhui from "@/views/Center/Youhui"
import Dizhi from "@/views/Center/Dizhi"
import Zeng from "@/views/Center/Zeng"

var centerRouter = [
    {
        path:"/center" , 
        component:Center
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/enroll',
        component:Enroll
    },
    {
        path:'/youhui',
        component:Youhui
    },
    {
        path:'/dizhi',
        component:Dizhi
    },
    {
        path:'/zeng',
        component:Zeng
    },
]

export default centerRouter