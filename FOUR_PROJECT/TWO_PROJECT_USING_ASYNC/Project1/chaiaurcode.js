//generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  const name = function () {
    document.body.style.backgroundColor = randomColor();
  };
  
  document.getElementById('start').addEventListener('click', function () {
    const interval = setInterval(name, 1000);
    document.getElementById('stop').addEventListener('click', function () {
      clearInterval(interval);
      console.log('STOPPED');
    });
  });
  