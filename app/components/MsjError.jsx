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
        <p>There was an error obtaining the information. Please try again later.</p>
      </div>
    );
  };
  
  