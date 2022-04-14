import instance from "."
import { getFromStorage } from "../utils"

export const signin = async (payload) => {
    return await instance.post("/signin", payload)
}
export const signup = async (payload) => {
    return await instance.post("/signup", payload)
}
export const me = async () => {
    return await instance.get("/me", {
        headers: {
            "authorization": await getFromStorage("token")
        }
    })
}
export const donationRequests = async (filterType) => {
    return await instance.get(`/donationRequests?bloodType=${filterType}`)
}

export const fetchUser = async (id) => {
    return await instance.get(`/user/${id}`)
}

export const postRequest = async (payload) => {
    return await instance.post("/post/donationRequest", payload, {
        headers: {
            "authorization": await getFromStorage("token")
        }
    })
}

export const fetchDonation = async (id) => {
    return await instance.get(`/donationRequest/${id}`)
}


export const deleteDonation = async (id) => {
    return await instance.delete(`/donationRequest/${id}`, {
        headers: {
            "authorization": await getFromStorage("token")
        }
    })
}

export const confirmDonation = async (id) => {
    return await instance.put(`/confirm/donationRequest/${id}`, {}, {
        headers: {
            "authorization": await getFromStorage("token")
        }
    })
}

export const myDonations = async () => {
    return await instance.get(`/my/donations`, {
        headers: {
            "authorization": await getFromStorage("token")
        }
    })
}

export const myDonationRequests = async () => {
    return await instance.get(`/my/donationRequests`, {
        headers: {
            "authorization": await getFromStorage("token")
        }
    })
}