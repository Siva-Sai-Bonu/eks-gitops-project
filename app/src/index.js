const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.json({ message: 'Hello from EKS GitOps!', version: process.env.APP_VERSION || '1.0.0' });
});
app.get('/health', (req, res) => { res.json({ status: 'ok' }); });
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
