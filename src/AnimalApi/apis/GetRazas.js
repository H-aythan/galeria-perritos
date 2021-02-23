const GetRazas =async () => {
    const url=`https://dog.ceo/api/breeds/list/all`;
    const res=await fetch(url);
    const {message}=await res.json();
    
    return Object.keys(message);
}

export default GetRazas
