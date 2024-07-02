import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SettingsIcon from '@mui/icons-material/Settings';
const routes = [
    {
        path: "/",
        content: "Asosiy",
        icon: <HomeIcon/>
    },
    {
        path: "/orders",
        content: "Buyurtmalar",
        icon: <ShoppingBasketIcon/>
    },
    {
        path: "/xizmatlar",
        content: "Xizmatlar",
        icon: <SettingsIcon/>
    },
]

export default routes