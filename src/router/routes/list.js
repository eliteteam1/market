import List from "@/views/Lists/List";
import Detail from "@/views/Lists/Detail";

var listRouter = [
    {
        path:'/list',
        component:List
    },
    {
        path:'/detail/:productId',
        component:Detail
    }
]

export default listRouter;