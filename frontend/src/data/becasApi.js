import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_BECAS
export const obtenerBeca = (becaId) => {
    axios.get(`${apiUrl}/beca/${becaId}`)
      .then(response => {
        const beca = response.data;
        console.log(beca); // aquí tendrías los datos de la beca en la consola
      })
      .catch(error => {
        console.log(error);
      });
  }

export const getAllBeca = () => {
    axios.get(`${apiUrl}/beca/all`)
    .then(response => {
      const becas = response.data;
      console.log(becas); // aquí tendrías el arreglo de becas en la consola
    })
    .catch(error => {
      console.log(error);
    });
}
