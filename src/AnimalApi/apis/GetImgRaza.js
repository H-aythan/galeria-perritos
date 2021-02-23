const GetImgRazas =async (raza) => {
    const url=raza===null?`https://dog.ceo/api/breed/affenpinscher/images`:`https://dog.ceo/api/breed/${raza}/images`
    
    const res=await fetch(url);
    const data=await res.json();
    
    return data;
}

export default GetImgRazas
