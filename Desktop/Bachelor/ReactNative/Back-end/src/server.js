//src/server.js

const app = require('./expressApp');
const connectDB = require('./db');
 
connectDB();
 
app.listen(3000, () => {
  console.log('🚀 Serveur démarré sur le port 3000');
})