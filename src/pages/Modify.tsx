import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { GET_USER_BY_EMAIL, PATCH_USER, DELETE_USER } from "../gql/modify.gql";

function Modify() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    
    const [cookies, setCookies, removeCookie] = useCookies(['test']);
    
    const [patchUserMutation] = useMutation(PATCH_USER);
    const [deleteUserMutation] = useMutation(DELETE_USER);

    const {loading, error, data, refetch} = useQuery(GET_USER_BY_EMAIL, {
        fetchPolicy: 'cache-and-network',
        variables: { email: cookies.test },
    });

    useEffect(() => {
        if (!cookies.test) {
            navigate("/");
        }
    }, [])
      
    useEffect(() => {
        if (data?.getUserByEmail) {
            setEmail(data.getUserByEmail.email);
            setPassword(data.getUserByEmail.password);
            setName(data.getUserByEmail.name);
        }
    }, [data]);

    const onModify = async (e: any) => {
        e.preventDefault();
        try {
            const {
                data: { patchUser },
            } = await patchUserMutation({
                variables: {
                    email,
                    password,
                    name
                },
            });
            if (patchUser) {
                alert("회원정보 수정 성공!");
            }
        } catch (error: any) {
            console.error(`onModify Error = ${error}`);
        }
    }

    const onDrop = async () => {
        const confirmText = "탈퇴하시겠습니까?";
        if (window.confirm(confirmText)) {
            try {
                const {
                    data: { deleteUser },
                } = await deleteUserMutation({
                    variables: {
                        email,
                        password,
                    },
                });
                if (deleteUser) {
                    alert("회원탈퇴 성공!");
                    removeCookie('test');
                    navigate("/");
                }
            } catch (error: any) {
                console.error(`onDrop Error = ${error}`);
            }
        }
    }

    return (
        <div>
            <Box
                onSubmit={onModify}
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
            <Button variant="text" type="submit">Modify</Button>
            <Button variant="text" onClick={onDrop}>Drop</Button>
            </Box>
        </div>
    );
}

export default Modify;