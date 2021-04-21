__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/index.php', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/index.php/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})
router.get('/index.php/index1', (req, res) => {
    res.sendFile(__path + '/views/index1.html')
})

router.get('/index.php/news', (req, res) => {
    res.redirect('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Berita.json')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'Bot-Devil',
            namaowner: 'Aguz',
            instagram: 'Aguz',
            youtube : 'KING AGUZ'
        }
    }
    res.json(config)
})

module.exports = router
