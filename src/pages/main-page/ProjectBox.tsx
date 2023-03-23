import React from "react";
import {Box, Flex, HStack, Image, Text} from "@chakra-ui/react";
import LanguageTag from "./LanguageTag";

interface ProjectBoxProps {
    projectName: string
}
const ProjectBox = (props: ProjectBoxProps) => {
    return (
        <Box >
            <Image/>
            <Flex>
                <Text>{props.projectName}</Text>
                {/* Project Tags */}
                <LanguageTag language={""} color={""} size={"sm"}/>
            </Flex>
        </Box>
    )
}

export default ProjectBox
