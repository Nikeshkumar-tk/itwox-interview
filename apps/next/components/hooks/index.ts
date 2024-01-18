import { useQuery } from "@tanstack/react-query"

export const useUserSession = () => {
    const getUserSession = useQuery({
        queryKey: ["userSession"],
        queryFn: () => sessionStorage.getItem("user")
    })
    const { data, ...rest } = getUserSession

    function logout(){
        sessionStorage.removeItem("user")
        getUserSession.refetch()
    }

    const session = {
        authenticated: data !== null,
        user: data ? JSON.parse(data) : null,
        logout,
        ...rest
    }
    return session
}