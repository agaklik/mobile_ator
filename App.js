import React from 'react';
import { View, ScrollView } from 'react-native';

import BarraTitulo from './componentes/BarraTitulo';
import Card from './componentes/Card';
import Conteudo from './componentes/Conteudo';

import estilos from './estilos';

export default function App() {
  return (
    <ScrollView>
    <View style={ estilos.container }>
      <BarraTitulo />
      <Card />
      <Conteudo />
    </View>
    </ScrollView>
  );
}
