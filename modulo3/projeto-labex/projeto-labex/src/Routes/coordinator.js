export const goToListTripsPage = (navigate) => {
    navigate("/trips/list")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToApplicationFormPage = (navigate) =>{
     navigate("/trips/application")
}

export const goToTripDetailsPage = (navigate)=>{
    navigate(`/admin/trips/:id`)
}

export const goToCreateTripPage = (navigate) =>{
    navigate("/admin/trips/create")
}

export const goToAdminHomePage = (navigate) => {
    navigate("/admin/trips/list")
}

export const goBack =(navigate) => {
    navigate(-1)
}
