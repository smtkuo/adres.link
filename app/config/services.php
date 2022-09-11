<?php
use Ubiquity\controllers\Router;

\Ubiquity\cache\CacheManager::startProd($config);
\Ubiquity\orm\DAO::start();
Router::start();
Router::addRoute("_default", "controllers\\IndexController");
Router::get("/search", function(){
    echo 'Hello world!';
});
Router::get("/share", function(){
    print_r($_REQUEST);
    echo 'Share';
});
\Ubiquity\assets\AssetsManager::start($config);
