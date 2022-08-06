class SiteController {

    //[GET] /home
    index(req,res) {
        res.render('home');
    };

    //[GET] /news
    new(req,res)
    {
        res.render('news')
    }


}

module.exports = new SiteController;