import axios from "axios";

export const getAll = async () => {
    console.log("getAll");
    const {data}= await axios.get('/api/foods');
    return data;
};

export const search = async (searchTerm) => {
    console.log("search");
    const {data}= await axios.get('/api/foods/search/'+ searchTerm);
    return data;
}; 
    
export const getAllTags = async() => {
    console.log("getAllTags");
    const {data}= await axios.get('/api/foods/tags');
    return data;
};

export const getAllByTags = async tag =>{
    console.log("getAllByTags");
    if (tag === 'All') return getAll();
    const {data}= await axios.get('/api/foods/tag/'+ tag);
    return data;
};

export const getById = async foodId => {
    console.log("getById");
    const {data}= await axios.get('/api/foods/'+ foodId);
    return data;
};