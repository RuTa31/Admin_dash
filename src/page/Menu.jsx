import { Box } from "@mui/system";
import AddCard from "../components/AddCard";
import ActionAreaCard from "../components/card";

const Menu = () => {
    return(
        <Box sx={{ height: 700, backgroundColor: 'grey' }}>
            <AddCard />
            <ActionAreaCard />
        </Box>
    )
}
export default Menu;