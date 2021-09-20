const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  express.static(
    path.resolve(__dirname, './build') // index, css, js, img static
  )
);

app.listen(PORT, () => {
  console.log(`Server express listening on: ${PORT}`);
});
