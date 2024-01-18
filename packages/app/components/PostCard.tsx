import { Card, H4, Text } from "@my/ui";
import { PostType } from "../types";

export default function PostCard({id, title, body}:PostType) {
    return (
        <Card
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
            padded
            borderRadius={'$5'}
            animation={'bouncy'}
        >
            <H4>{title}</H4>
            <Text mt={"$2"}>{body}</Text>
        </Card>
    )
}