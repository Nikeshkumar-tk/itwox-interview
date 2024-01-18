import { Button, ButtonProps } from "@my/ui"
import { LogOut } from "@tamagui/lucide-icons"

export const LogoutButton = (props:ButtonProps) => {
    return (
        <Button {...props}>
            <LogOut />
        </Button>
    )
}