const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.get('/run-script', (req, res) => {
    const imageUrl = req.query.image_url; 
    const command = `python TrialTop.py "${imageUrl}"`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send(`Error: ${stderr}`);
        }
        res.send(stdout);
    });
});
app.listen(PORT, () => {console.log(`Server running on http://localhost:${PORT}`);});