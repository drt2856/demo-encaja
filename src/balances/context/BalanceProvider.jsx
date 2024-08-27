import React, { createContext } from "react"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import shortid from "shortid";
import { mockBalances } from "../../mocks/mock";

export const balanceContext = createContext();

function useSaveBalanceslsLocalStorage() {
    function get() {
        return JSON.parse(localStorage.getItem("balances"))
    }
    function set(data) {
        return localStorage.setItem("balances", JSON.stringify(data))
    }
    return ({ get, set })
}

export function BalanceProvider({ children }) {

    const { set, get } = useSaveBalanceslsLocalStorage()
    const [balances, setBalances] = useState(getData())

    function getData() {
        if (!get()) {
            return []
        } else {
            return get()
        }
    }

    function createBalance(balance) {
        balance.id = shortid.generate()
        setBalances(prevState => {
            const newState = [...prevState, balance];
            set(newState)
            return (newState)
        });
    }
    function editBalance(updatedBalance) {
        setBalances(prevState => {
            const newState = prevState.map(balance =>
                balance.id === updatedBalance.id ? updatedBalance : balance
            );
            set(newState);
            return newState;
        });
    }

    function deleteBalance(balanceId) {

        setBalances(prevState => {
            const newState = prevState.filter(balance => (
                balanceId !== balance.id
            ))
            set(newState)
            return newState;
        })
    }
    function deletCompletedBalances() {
        setBalances(prevState => {
            const newState = prevState.filter(balance => (
                balance.checked != true
            ))
            set(newState)
            return newState;
        })
    }
    

    return (
        <balanceContext.Provider
            value={{
                balances,
                createBalance,
                editBalance,
                deleteBalance,
                deletCompletedBalances,
            }}
        >
            
            {children}
        </balanceContext.Provider>
    )

}