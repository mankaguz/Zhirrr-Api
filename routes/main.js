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
router.get('/game1', (req, res) => {
    res.sendFile(__path + '/views/game1/index.html')
})
router.get('/game2', (req, res) => {
    res.sendFile(__path + '/views/game2/index.html')
})
router.get('/3D-CSS-Solar-System-master', (req, res) => {
    res.redirect('https://codepen.io/juliangarnier/full/idhuG')
})
router.get('/3D-Hartwig-chess', (req, res) => {
    res.redirect('https://codepen.io/juliangarnier/full/BsIih')
})
router.get('/index.php/news', (req, res) => {
    res.redirect('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Berita.json')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '.',
            namabot: 'Rinka-Bot',
            namaowner: 'Badriyutamam',
            instagram: 'lolichan364',
            youtube : 'Loli Chan'
        }
    }
    res.json(config)
})

module.exports = router
