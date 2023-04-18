import axios from 'axios';

export const obtenerBeca = (becaId) => {
    axios.get(`http://localhost:3000/beca/${becaId}`)
      .then(response => {
        const beca = response.data;
        console.log(beca); // aquí tendrías los datos de la beca en la consola
      })
      .catch(error => {
        console.log(error);
      });
  }

export const getAllBeca = () => {
    axios.get('http://localhost:3000/beca/all')
    .then(response => {
      const becas = response.data;
      console.log(becas); // aquí tendrías el arreglo de becas en la consola
    })
    .catch(error => {
      console.log(error);
    });
}


obtenerBeca(3)