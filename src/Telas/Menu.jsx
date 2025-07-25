import './Menu.css'
import logo from '../assets/logo-1001.png'
import logoSiata from '../assets/logo-siata.png'
import { useState } from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faRightFromBracket, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

export default function Menu() {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')))
  const [fabOpen, setFabOpen] = useState(false)
  const navigate = useNavigate();
  const abrirPerfil = () => {
    window.location.href = '/Perfil'
  }

  const listarRH = () => {
    window.location.href = '/ListaFuncionarios'
  }

  const abrirMenuDP = () => {
    window.location.href = '/MenuDP'
  }

  const abrirCadastroFuncionario = () => {
    window.location.href = '/CadastroFuncionario'
  }

  const abrirPesquisa = () => {
    window.location.href = '/Pesquisa'
  }

  const handleLogout = () => {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem('user')
        window.location.href = '/'
      })
      .catch((error) => {
        console.error('Erro ao sair:', error)
      })
  }

  return (
    <div className='menu'>
      {/* Logo SIATA */}
      <div style={{ position: 'absolute', top: '30px', left: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={logoSiata} alt="Logo SIATA" style={{ width: '50px', margin: 0 }} />
          <h2 style={{ margin: 0, fontWeight: 'bold', marginLeft: '5px' }}>I A T A</h2>
        </div>
        <h4 style={{ position: 'relative', margin: 0, fontSize: '10px', top: '-22px', left: '26px', color: '#fff' }}>
          Sistema de Integração ATA
        </h4>
      </div>

      {/* Ícone de lupa - Pesquisa */}


      {/* Avatar do usuário */}
      <img src={user.photoURL} alt="avatar" id='avatar' onClick={() => setFabOpen(!fabOpen)} />
      <span id='avatarNot'>
        5
        <span class="visually-hidden">unread messages</span>
      </span>
      {/* Menu flutuante de perfil/sair */}
      {fabOpen && (
        <div className='fab-menu'>
          <button onClick={abrirPesquisa}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button onClick={abrirPerfil}>
            <FontAwesomeIcon icon={faUser} />
          </button>
          <button onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        </div>
      )}

      <h2>Menu</h2>
      <h3 style={{ color: '#fff', fontSize: '18px', marginBottom: '20px', backgroundColor: '#33333300', position: 'relative' }}>
        Seja bem-vindo, {user.displayName}! ao Sistema de Integração ATA
      </h3>

      {/* Lista de opções */}
      <section>
        <ul style={{ marginTop: '20px' }}>
          <li onClick={abrirMenuDP}><a href="#">DP</a></li>
          <li onClick={listarRH}><a href="#">RH</a></li>
          <li onClick={abrirCadastroFuncionario}><a href="#">Cadastrar funcionário</a></li>
          <li onClick={abrirPerfil}><a href="#">Perfil</a></li>
          <li><a href="#" onClick={handleLogout}>Sair</a></li>
        </ul>
      </section>

      <h3>Um sistema de <img src={logo} alt="" style={{ marginTop: '-30px' }} /> Utilidades</h3>
    </div>
  )
}