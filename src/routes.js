import Home from '@/components/Home';
import Login from '@/components/Login';
import Orders from '@/components/Orders';
import NewOrders from '@/components/NewOrders';
import OrdersHistory from '@/components/OrdersHistory';
import Settings from '@/components/Settings';

const routes = [{
    path: '/',
    component: Home,
    name: 'root',
},
{
    path: '/login',
    component: Login,
    name: 'login'
},
{
    path: '/orders',
    component: Orders,
    name: 'orders',
    children: [
        {
            path: 'new-orders',
            component: NewOrders
        },
        {
            path: 'history',
            component: OrdersHistory
        },
        {
            path: 'settings',
            component: Settings
        },
    ]
},
{
    path: '/*',
    redirect: {
        name: 'root'
    }
}
];

export default routes;