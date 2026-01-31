// server ko start karna

const app = require("./src/app");  // importing the configured app

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});