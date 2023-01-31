import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useLoader } from "../hooks/useLoader";
import { getProducts, getProductsByCondition, getProductById } from "../services/products";

export const useGetProducts = () => {    
    const [productsList, setProductsList] = useState([]);

    const {loading, setLoading} = useLoader(true);
    
    const {category} = useParams();
    const {brand} = useParams();
    const {id} = useParams();

    useEffect(() =>{
        setLoading(true);

        if(category !== undefined){
            getProductsByCondition("category", category)
                .then(res => {
                    setProductsList(res);
                    setTimeout(() => {
                        setLoading(false);
                    }, 500);
                });
        } else if(brand !== undefined){
            getProductsByCondition("brand", brand)
                .then(res => {
                    setProductsList(res);
                    setTimeout(() => {
                        setLoading(false);
                    }, 500);
                });

        } else if(id !== undefined){
            getProductById(id)
                .then(res =>{
                    setProductsList(res);
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                });
        } else{
            getProducts()
                .then(res =>{
                    setProductsList(res);
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                });
        }
    }, [setLoading, category, brand, id]);

    return {loading, productsList}
}