export const goToFeedPage = (navigate) => {
    navigate("/feed")
} 

export const goToLoginPage = (navigate) => {
    navigate("/")
} 


export const goToPostPage = (navigate, id) => {
    navigate(`/post/${id}`)
} 

export const goToSignUpPage = (navigate) => {
    navigate("/signup")
} 

export const goToBack = (navigate) => {
    navigate(-1)
}
 

