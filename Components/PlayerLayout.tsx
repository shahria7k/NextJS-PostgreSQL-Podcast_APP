import { Box } from "@chakra-ui/react"
import SideBar from "./SideBar";

const PlayerLayout = ({ children }) => {
    return (
        <Box width="100vw" height="100vh">
            <Box position="absolute" top="0" left="0" width="250px">
                <SideBar />
            </Box>
            <Box marginLeft="250px">
                {children}
            </Box>
            <Box position="absolute" left="0" bottom="0">
                Player
            </Box>
        </Box>
    )
}
export default PlayerLayout;