import {Box, Tag, TagLabel} from "@chakra-ui/react";

interface LanguageTag {
    language: string,
    color: string
    size: "sm" | "md"
}
const LanguageTag = (props: LanguageTag) => {
    return (
        <Tag variant={"solid"} size={props.size} borderRadius={"full"} colorScheme={props.color}>
            <TagLabel>{props.language}</TagLabel>
        </Tag>
    )
}

export default LanguageTag
