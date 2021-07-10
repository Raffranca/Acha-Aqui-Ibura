import React, {useState, useEffect} from 'react';
import Banner from '../../components/Banner';
import Menu from '../../components/Menu'
import Footer from '../../components/Footer';
import './style.css';


import Axios from 'axios';


const Home = ()=>{
    const [nome, setNome] = useState([])
    const [filtroNome, setFiltroNome] = useState([])
    const [busca, setBusca] = useState('')

    useEffect(()=>{
        const pegaComercios = async ()=>{
            const resposta =await Axios.get('https://my-json-server.typicode.com/Raffranca/api-acha-aqui/comercios')
            const dados = await resposta.data
            setNome(dados)
        }
        pegaComercios()
        },[])  

    useEffect(()=>{
        setFiltroNome(
            nome.filter(empresa =>{
                return empresa.nome.toLowerCase().includes(busca)
            })
        )
    }, [busca, nome])

    return(
        <>
            <Banner/>
            <Menu/>
            <input type="text" placeholder="Busque aqui" onChange={e=>{setBusca(e.target.value)}}/>
            {filtroNome.map(empresa=>(
                <div key={empresa.id} className="card-maior">
                    <div className="card">
                        <img className="img" src={empresa.img} alt={empresa.nome}/>
                        <div className="descricao">
                            <p>{empresa.nome}</p>
                            <a href={empresa.contato} target="_blank">Contato</a >
                        </div>
                    </div>
                </div>
            ))}
            <a href="#" className="btn">Seta para cima</a>
            <Footer/>
        </>
    )
} 


export default Home;