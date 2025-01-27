import * as api from "../request";


export const getAllBrands = async () => {
    return await api.GetReq(`brands/all/`);
};

export const getAllCategory = async () => {
  return await api.GetReq(`brands/categories/`);
}

export const getCategoryById = async (id:string | undefined) => {
  return await api.GetReq(`brands/categories/?category_id=${id}`);
}


export const globalSearch = async (search:string) =>{
  return await api.GetReq(`brands/all/?q=${search}`)
}


export const getHomeData = async () => {
    return await api.GetReq(`brands/home/`);
  };

export const getGiftCardDetail = async (param:string | undefined) => {
    return await api.GetReq(`brands/brand/${param}/info`);
  };

export const getOrder = async () => {
    return await api.GetReq(`brands/my-orders`);
  };

export const getOrderDetails = async (id:string |undefined) => {
    return await api.GetReq(`brands/order/${id}/details`);
  };


  
// Post endpoints
export const CreateOrder = async (body:object,brandID:string|undefined) => {
    return await api.PostReq(`brands/checkout/${brandID}`, body);
  };

export const googleLogin = async (body:object) => {
    return await api.PostReq(`api/auth/google/`, body);
  };
  
export const ContactUs = async (body:object)=>{
  return await api.PostReq(`contact/contact-us`,body)
}
export const ForBusiness = async (body:object)=>{
  return await api.PostReq(`contact/business-contact`,body)
}
export const getBalance = async (body:object) => {
  return await api.PostReq(`/brands/check-balance`,body);
};