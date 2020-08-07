import React from 'react';
import './index.css';
import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import sampleData from '../../assets/data/dados_iniciais.json' 



function Home() {
  return (
    <div>
    <Menu/>

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

     <Footer/>
    </div>

   

  );
}

export default Home;
