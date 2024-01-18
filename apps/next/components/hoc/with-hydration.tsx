import { FC, useEffect, useState } from "react"

export default function withHydration(Component:FC) {
    return function HydratedComponent(props:typeof Component.propTypes) {
        const [hydrated, setHydrated] = useState(false)
        useEffect(() => {
            setHydrated(true)
        }, [])
        if (!hydrated) return null
        return <Component {...props} />
    }
}