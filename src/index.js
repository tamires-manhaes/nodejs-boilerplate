const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`backend listening on port ${PORT}`);
});
