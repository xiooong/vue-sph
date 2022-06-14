
export const setToken = (token) =>{
    sessionStorage.setItem('TOKEN',token)
}

export const getToken = () =>{
    return sessionStorage.getItem("TOKEN")
}

export const removeToken = () =>{
    sessionStorage.removeItem("TOKEN")
}