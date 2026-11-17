import { useAuth } from '../contexts/AuthContext';

import { useState, useEffect } from 'react';

//Api.
import { welcomeRequest } from '../api/auth.api';

export default function Dashboard() {

    const {accessToken} = useAuth();

    const [msj, setMsj] = useState("");

    useEffect(() => {
        handleWelcomeRequest();
    }, []);

    const handleWelcomeRequest = async() => {

        try{

            const data = await welcomeRequest(accessToken);

            setMsj(data.message);

        }catch(error){
            alert("Ha surgido un error");
        }

    }

    return (
        <h1> {msj} </h1>
    )

}