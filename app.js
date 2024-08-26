const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hola soy la home</h1><a href="/Marketing">Marketing</a><a href="/Developers"> Developers</a><a href="/Ventas"> Ventas</a><a href="/QAs"> QAs</a><a href="/Contact"> Contact</a>');
});

/*funcion filtrar en cada app.get*/

/*MARKETING*/
app.get('/Marketing', (req, res) => {
    const marketingUsers = usersData.filter(user => user.specialty === 'marketing');
    
    // Convertir cada objeto de usuario en una cadena HTML
    const usersList = marketingUsers.map(user => `<li>ID: ${user.id}. ${user.name}, ${user.age} años</li>`).join('');
    //contar usuarios
    const numberOfMarketingUsers = marketingUsers.length;

    // Enviar la respuesta con la lista de usuarios
    res.send(`
      <h1>Hola soy marketing</h1>
      <a href="/">Home</a>
      <br><p>Son: ${numberOfMarketingUsers} personas. Estos son los usuarios:</p>
      <ul>${usersList}</ul>
    `);
});
  
/*DEVELOPERS*/
  app.get('/Developers', (req, res) => {
    const developersUsers = usersData.filter(user => user.specialty === 'developers');
    
    const usersList2 = developersUsers.map(user => `<li>ID: ${user.id}. ${user.name}, ${user.age} años</li>`).join('');
    const numberOfDevs = developersUsers.length;

    res.send(`
      <h1>Hola soy developers</h1>
      <a href="/">Home</a>
      <br><p>Son: ${numberOfDevs} personas. Estos son los usuarios:</p>
      <ul>${usersList2}</ul>
    `);
});

/*VENTAS*/
app.get('/Ventas', (req, res) => {
    const ventasUsers = usersData.filter(user => user.specialty === 'ventas');
    
    const usersList3 = ventasUsers.map(user => `<li>ID: ${user.id}. ${user.name}, ${user.age} años</li>`).join('');
    const numberOfVentas = ventasUsers.length;

    res.send(`
      <h1>Hola soy ventas</h1>
      <a href="/">Home</a>
      <br><p>Son: ${numberOfVentas} personas. Estos son los usuarios:</p>
      <ul>${usersList3}</ul>
    `);
});

/*QAs*/
app.get('/QAs', (req, res) => {
    const qasUsers = usersData.filter(user => user.specialty === 'QAs');
    
    const usersList4 = qasUsers.map(user => `<li>ID: ${user.id}. ${user.name}, ${user.age} años</li>`).join('');
    const numberOfQAs = qasUsers.length;
    
    res.send(`
      <h1>Hola soy QAs</h1>
      <a href="/">Home</a>
      <br><p>Son: ${numberOfQAs} personas. Estos son los usuarios:</p>
      <ul>${usersList4}</ul>
    `);
});

app.use((req, res) => {
  res.status(404).send('<h1>Página no encontrada</h1><a href="/">Home</a>');
});

app.listen(3000, () => {
  console.log('Node está escuchando en el puerto 3000 - EXPRESS-routes. Aqui link: http://localhost:3000/');
});


const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];
  
  