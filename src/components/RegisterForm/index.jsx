import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { redirect } from 'react-router-dom';

export default function RegisterForm(){
	// recupération des données du formulaire
	const [email, setEmail] = React.useState('');
	const [plainPassword, setPlainPassword] = React.useState('');
	const [nickname, setNickname] = React.useState('');

	// fonction qui permet de récupérer les données du formulaire
	const handleSubmit = (event) => {
		event.preventDefault();

		// création d'un objet qui contient les données du formulaire
		const user = {
			email: email,
			plainPassword: plainPassword,
			nickname: nickname,
		};

		// envoie des données du formulaire vers l'api
		axios
			.post('http://82.65.6.187:8002/api/users', { ...user })
			.then((response) => {
				if (response.status === 201) {
					console.log('user created');
					redirect('/');
				}
			})
			.catch((error) => {
                console.error(error);
				throw new Error('Something went wrong on api server!');
			});
	};

	return (
		<Box
			sx={{
				marginTop: 8,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
			<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography
				component='h1'
				variant='h5'>
				Inscription
			</Typography>
			<Box
				component='form'
				onSubmit={handleSubmit}
				noValidate
				sx={{ mt: 1 }}>
				<TextField
					margin='normal'
					required
					fullWidth
					id='email'
					label='Email Address'
					name='email'
					autoComplete='email'
                    onChange={(event) => setEmail(event.target.value)}
				/>
				<TextField
					margin='normal'
					required
					fullWidth
					name='plainPassword'
					label='plainPassword'
					type='password'
					id='plainPassword'
                    onChange={(event) => setPlainPassword(event.target.value)}
				/>
				<TextField
					margin='normal'
					required
					fullWidth
					name='nickname'
					label='nickname'
					type='nickname'
					id='nickname'
                   
                    onChange={(event) => setNickname(event.target.value)}
				/>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					sx={{ mt: 3, mb: 2 }}
                    >
					Sign In
				</Button>
			</Box>
		</Box>
	);
};
