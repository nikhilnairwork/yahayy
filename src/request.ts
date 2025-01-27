import * as req from "./http";

export const PostReq = async (path:string, body:any) => {
  try {
    let res = await req.http.post(path, body);

    return res;
  } catch (error) {
    console.log(error, "Err");
    throw error; 
  }

};

export const PatchReq = async (path:string, body:any) => {
  try {
    let res = await req.http.patch(path, body);
    return res;
  } catch (error) {
    console.log(error);
    throw error; 
  }
  // return await req.http
  // .post(path,body).then((res)=>{
  //     return res;
  // })
  // .catch((err)=>{

  // });
};

export const GetReq = async (path:string) => {
  try {
    let res = await req.http.get(path);
    return res;
  } catch (error) {
    console.log(error);
    throw error; 
  }
};

export const putReq = async (path:string, body:any) => {
  try {
    let res = await req.http.put(path, body);
    return res;
  } catch (error) {
    console.log(error);
    throw error; 
  }
};

export const delReq = async (path:string) => {
  try {
    let res = await req.http.delete(path);
    return res;
  } catch (error) {
    console.log(error);
    throw error; 
  }
};