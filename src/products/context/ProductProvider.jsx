import React, { createContext } from "react"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import shortid from "shortid";
import { mockProducts } from "../../mocks/mock";

export const productContext = createContext();

function useSaveProductslsLocalStorage() {
    function get() {
        return JSON.parse(localStorage.getItem("products"))
    }
    function set(data) {
        return localStorage.setItem("products", JSON.stringify(data))
    }
    return ({ get, set })
}

export function ProductProvider({ children }) {

    const { set, get } = useSaveProductslsLocalStorage()
    const [products, setProducts] = useState(getData())

    function getData() {
        if (!get()) {
            return mockProducts
        } else {
            return get()
        }
    }

    function createProduct(product) {
        product.id = shortid.generate()
        setProducts(prevState => {
            const newState = [...prevState, product];
            set(newState)
            return (newState)
        });
    }
    function editProduct(updatedProduct) {
        setProducts(prevState => {
            const newState = prevState.map(product =>
                product.id === updatedProduct.id ? updatedProduct : product
            );
            set(newState);
            return newState;
        });
    }

    function deleteProduct(productId) {

        setProducts(prevState => {
            const newState = prevState.filter(product => (
                productId !== product.id
            ))
            set(newState)
            return newState;
        })
    }
    function deletCompletedProducts() {
        setProducts(prevState => {
            const newState = prevState.filter(product => (
                product.checked != true
            ))
            set(newState)
            return newState;
        })
    }
    

    return (
        <productContext.Provider
            value={{
                products,
                createProduct,
                editProduct,
                deleteProduct,
                deletCompletedProducts,
            }}
        >
            
            {children}
        </productContext.Provider>
    )

}