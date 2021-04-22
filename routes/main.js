__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/index.php', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/index/about.php', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})
router.get('/game1/index.php', (req, res) => {
    res.sendFile(__path + '/views/game1/index.html')
})
router.get('/game2/index.php', (req, res) => {
    res.sendFile(__path + '/views/game2/index.html')
})
router.get('/3D-CSS-Solar-System-master/index.php', (req, res) => {
    res.sendFile(__path + '/views/3D-CSS-Solar-System-master/index.html')
})
router.get('/3D-Hartwig-chess/index.php', (req, res) => {
    res.sendFile(__path + '/views/3D-Hartwig-chess/index.html')
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
