import { useState, useEffect } from "react";

export function useLocalStorage ()
{
    useEffect(() => {
        const storedTotal = localStorage.getItem("total");
        if (storedTotal) {
            setTotal(parseInt(storedTotal));
        }
      }, []);}