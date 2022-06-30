import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useAuth } from './utils/useAuth'

const AuthForm = () => {
	const [email, setEmail] = useState('test@test.ru')
	const [password, setPassword] = useState('')

	const { login, isLoading } = useAuth()

	return (
		<View
			style={{
				height: '100%',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<View style={{ width: 300 }}>
				<TextInput
					style={stylesCreated.input}
					onChangeText={setEmail}
					value={email}
					autoFocus
					placeholder='Enter email'
				/>
				<TextInput
					style={stylesCreated.input}
					onChangeText={setPassword}
					value={password}
					placeholder='Enter password'
					secureTextEntry={true}
				/>
				<Button
					onPress={async () => await login(email, password)}
					title={isLoading ? 'Loading...' : 'Sign in'}
					disabled={isLoading}
					color={'#fff'}
				/>
			</View>
		</View>
	)
}

const stylesCreated = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		backgroundColor: '#fff',
		borderRadius: 10,
	},
})

export default AuthForm

