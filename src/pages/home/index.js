import React from 'react';
import './index.css';
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Template from '../../components/Template'
import sampleData from '../../assets/data/dados_iniciais.json' 



function Home() {
  return (
    <div>
    <Template>

      <BannerMain
        videoTitle={sampleData.categorias[0].videos[0].titulo}
        url={sampleData.categorias[0].videos[0].url}
        videoDescription={"Teste"}
      />

      <Carousel 
        ignoreFirstVideo
        category={sampleData.categorias[0]}
      />

      <Carousel 
        ignoreFirstVideo
        category={sampleData.categorias[1]}
      />

      <Carousel 
        ignoreFirstVideo
        category={sampleData.categorias[2]}
      />

     </Template>
    </div>

   

  );
}

export default Home;
