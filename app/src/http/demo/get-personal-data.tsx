import { useState, useEffect } from "react";
import PersonalData from "../../component/demo/type-personal-data";

const GetPersonalData = async (func: React.Dispatch<React.SetStateAction<PersonalData[]>>) => {
    try {
        const response = await fetch (
            "https://hackathon-backend-main-mxtuefqkua-uc.a.run.app/demo",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
        func(await response.json())
    } catch (err) {
        console.log(err)
    }
        
}

export default GetPersonalData