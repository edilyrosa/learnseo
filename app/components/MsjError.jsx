'use client'; // This marks the component as a Client Component
export default function MsjError () {

    const errorMessage = {
    margin: '0 auto',
    width: '50%',
    height: '40%',
    backgroundColor: 'rgb(224, 0, 0)',
    color: 'white',
    fontSize: '2rem',
  }

    return (
      <div style={errorMessage}>
        <p>Hubo un error al obtener la información. Por favor, inténtalo más tarde.</p>
      </div>
    );
  };
  
  