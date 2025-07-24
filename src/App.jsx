import './App.css'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Menu from "./Telas/Menu";
import Login from "./Telas/Login";
import Home from "./Telas/Home";
import Perfil from './Telas/PerfilFuncionario';
import CadastroFuncionario from './Telas/CadastroFuncionario';
import ListaFuncionarios from './Telas/ListaFuncionarios';
import EditarFuncionario from './Telas/EditarFuncionario';
import Pesquisa from './Telas/Pesquisa';
import MenuDP from './Telas/MenuDP';
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<Login />} />
                    <Route path="Menu" element={<Menu />} />
                    <Route path="Login" element={<Login />} />
                    <Route path="Perfil" element={<Perfil />} />
                    <Route path="CadastroFuncionario" element={<CadastroFuncionario />} />
                    <Route path="ListaFuncionarios" element={<ListaFuncionarios />} />
                    <Route path="editar/:email" element={<EditarFuncionario />} />
                    <Route path="MenuDP" element={<MenuDP />} />
                    <Route path="Pesquisa" element={<Pesquisa />} />
                    {/* Adicione outras rotas aqui */}
                    <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}