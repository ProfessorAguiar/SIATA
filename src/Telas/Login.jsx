import './Login.css'
import logo from '../assets/logo-1001.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import app from '../FirebaseConfig'
import logoSiata from '../assets/logo-siata.png'
export default function Login() {
  const [user, setUser] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth(app)
    try {
      const result = await signInWithPopup(auth, provider)
      console.log('Usuário:', result)
      sessionStorage.setItem('user', JSON.stringify(result.user))
      navigate('/Menu')
    } catch (error) {
      alert('Erro ao autenticar com Google: ' + error.message)
    }
  }
  return (
    <div>
      {/* <img src={logo} alt="" id='logo1' /> */}
      <div style={{ position: 'absolute', top: '30px', left: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={logoSiata} alt="" style={{ width: '50px', margin: 0 }} />
          <h2 style={{ margin: 0, fontWeight: 'bold', fontStretch: 'ultra-expanded', marginLeft: '5px' }}>I A T A</h2>
        </div>
        <h4 style={{ position: 'relative', margin: 0, fontSize: '10px', top: '-22px', left: '26px', color: '#fff' }}>Sistema de Integração ATA</h4>
      </div>
      <div className='login'>

        <h2 style={{ color: '#333333', fontSize: '35px', fontWeight: 'bold' }}>ENTRAR</h2>
        <form action="">
          <label htmlFor="user">Usuário: </label>
          <input type="text" id="user" placeholder='entre com o usuário cadastrado' value={user} onChange={(e) => setUser(e.target.value)} />
          <label htmlFor="senha">Senha: </label>
          <input type="password" id="senha" placeholder='entre com a senha cadastrada' value={senha} onChange={(e) => setSenha(e.target.value)} />
          <input type="submit" value="Entrar" style={{ backgroundColor: '#1793ff', color: '#fff' }} />
        </form>
        <p>---------------- ou ----------------</p>
        <button type="button" onClick={handleGoogleLogin}>
          Entrar com Google
          <svg style={{ marginLeft: '10px' }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
        </button>
      </div>
      <h3>Um sistema de <img src={logo} alt="" style={{ top: '-5px', position: 'relative' }} /> Utilidades</h3>
    </div>
  )
}