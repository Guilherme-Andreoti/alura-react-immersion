import React from 'react';
import Template from '../../../components/Template';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return (
        <>
          <Template>
            <h1>Cadastro de Categoria</h1>
          <Link to="/cadastro/video/">
              Cadastrar de Vídeo
          </Link>

          </Template>
        </>
    );
}

export default CadastroVideo; 