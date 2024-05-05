document.getElementById('submit-btn').addEventListener('click', async () => {
    const city = document.getElementById('city-input').value;
    const weatherInfo = document.getElementById('weather-info');
  
    try {
      const response = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
      const data = await response.json();
      
      // Obtener la fecha actual
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('es-ES', {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
  
      weatherInfo.innerHTML = `
        <h2>Clima en ${city}</h2>
        <p><i class="fas fa-calendar"></i> Fecha y hora de la consulta: ${formattedDate}</p>
        <p><i class="fas fa-thermometer-half"></i> Temperatura: ${data.temperature}</p>
        <p><i class="fas fa-wind"></i> Viento: ${data.wind}</p>
        <p><i class="fas fa-tint"></i> Humedad: ${data.humidity}</p>
        <p><i class="fas fa-cloud"></i> Descripción: ${data.description}</p>
      `;
    } catch (error) {
      weatherInfo.innerHTML = `<p>Error al obtener el clima: ${error.message}</p>`;
    }
  });