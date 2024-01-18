import { H1, Text, XStack, YStack } from '@my/ui'

export function LandingPage() {
    return <XStack display='flex' justifyContent="center" alignItems={"center"} style={{ height: "50vh" }}>
        <YStack alignItems='center' space>
            <H1>Next js app with Tamagui monorepo</H1>
            <Text>Exploring Tamgui</Text>
        </YStack>
    </XStack>
}
