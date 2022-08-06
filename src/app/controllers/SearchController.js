class SearchController {

    //[GET] /search
    index(req,res) {
        res.render('search');
    };

    //[GET] /search/:slug
    show(req,res)
    {
        res.send('SHow show show');
    }


}

module.exports = new SearchController;