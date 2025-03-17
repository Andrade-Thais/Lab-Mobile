import React from 'react';
import { Button } from 'react-native';

export default (comp) => {
  function executar() {
    console.log('Executando !!!!!');
  }

  return <Button title="Executar!" onPress={executar} />;
};
