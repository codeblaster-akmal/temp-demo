import apisouce from "apisauce"

const create = (baseURL="google.co.in")=>{
    const api = apisouce.create({
        baseURL,
        headers:{
            "Cache-Control":"no-cache",
        },
        timeout:10000,
    })

    
    // endpoints import with api method and req.body
    // const addLogin = (data: any) => api.post('store_management/customer-login', data)

    // here have to return the data to use in application
    return{
        // addLogin
    }

}
export default {create}