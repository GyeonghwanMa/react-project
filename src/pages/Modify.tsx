import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useCookies } from "react-cookie";
import { GET_USER_BY_EMAIL } from "../gql/modify.gql";

function Modify() {
    const [cookies, setCookies, removeCookie] = useCookies(['test']);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const {loading, error, data, refetch} = useQuery(GET_USER_BY_EMAIL, {
        fetchPolicy: 'cache-and-network',
        variables: { email: cookies.test },
    });
      
    useEffect(() => {
        if (data?.getUserByEmail) {
            setEmail(data.getUserByEmail.email);
            setPassword(data.getUserByEmail.password);
            setName(data.getUserByEmail.name);
        }
    }, [data]);

    const onModify = () => {
        console.log("modify!");
    }

    return (
    <div>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
        <TextField id="standard-email-input" label="Email" variant="standard"  value={email} />
        <TextField id="standard-password-input" type="password" label="Password" variant="standard"  value={password} onInput={(e:any) => setPassword(e.target.value)} />
        <TextField id="standard-name-input" label="Name" variant="standard"  value={name} onInput={(e:any) => setName(e.target.value)} />
        <Button variant="text" onClick={onModify}>Modify</Button>
        </Box>
    </div>
    );
}

export default Modify;