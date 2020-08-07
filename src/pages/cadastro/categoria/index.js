import React, {useState} from 'react';
import Template from '../../../components/Template';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    //Extrai o conteudo do useState
    const [categorias,SetCategoias] = useState(['Teste']);
    let [nomeCategoria,setNomeCategoria] = useState("Filmes")
    return (
        <>
          <Template>
            <h1>Cadastro de Categoria: {nomeCategoria}</h1>
              <form onSubmit={
                function  handleSubmit(eventInfo){
                  eventInfo.preventDefault();
                  SetCategoias([
                    ...categorias,
                    nomeCategoria
                  ])
                }
              }>
                <label>
                  Nome da Categoria:
                  
                  <input 
                    type="text" 
                    value={nomeCategoria} 
                    onChange={(info)=>{setNomeCategoria(info.target.value)}} 
                  />
                </label>
                  <button>
                    Cadastrar
                  </button>
              </form>
                <ul>
                  {
                    categorias.map((categoria)=>{
                      return(
                        <li key={categoria}>
                          {categoria}
                        </li>
                      )
                    }
                    )
                  }
                </ul>


              


          <Link to="/">
              Ir para Home
          </Link>

          </Template>
        </>
    );
}

export default CadastroCategoria; 