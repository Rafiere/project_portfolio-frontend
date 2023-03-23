import {Box, Flex} from "@chakra-ui/react";
import React from "react";
import Header from "../../components/Header/Header";
import ProjectsGrid from "./ProjectsGrid";

export const MainPage = () => {
    return (
        <Box>
            <Header/>
            <ProjectsGrid/>
        </Box>
    )
}
