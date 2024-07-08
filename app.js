function crearFecha(dia, mes, año) {
    
    const fecha = new Date(año, mes , dia);
  
    
    const fechaFormateada = `${dia}/${mes}/${año}`; 
  
    
    alert(`Fecha: ${fechaFormateada}`);
  
    return fecha;
  }
  
  const miFecha = crearFecha(8, 7, 2024); 
  console.log(miFecha);