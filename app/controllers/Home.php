<?php 

class Home extends Controller {
    public function index() {
        // data
        $data["articles"] = $this->model('Article_model')->getAllArticle();
        $data["users"] = $this->model('User_model')->allData();

        // view
        $this->view('templates/header');
        if(empty($data["articles"])) {
            $this->view('error/empty_article');
        } else {
            $this->view('home/index', $data);
        }
        $this->view('templates/footer');
    }

    public function ajaxHome($keyword) {
        // data
        $data["articles"] = $this->model('Article_model')->getArticleByAjax($keyword);
        $data["users"] = $this->model('User_model')->allData();

        // view
        if (empty($data["articles"])) {
            $this->view('error/empty_article');
        } else {
            $this->view('search/search', $data);
        }
    }
}