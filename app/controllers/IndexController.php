<?php
namespace controllers;

use Ubiquity\core\postinstall\Display;
use Ubiquity\log\Logger;
use Ubiquity\themes\ThemesManager;
use BilgiSam\AdresLink\View\Template;

/**
 * Controller IndexController
 */
class IndexController extends ControllerBase {

	public function index() {
		$template = new Template;
		$getTemplate = $template->get("under-construction");
		echo $getTemplate;
	}

	public function ct($theme) {
		$themes = Display::getThemes();
		if ($theme != null && \array_search($theme, $themes) !== false) {
			$config = ThemesManager::saveActiveTheme($theme);
			\header('Location: ' . $config['siteUrl']);
		} else {
			Logger::warn('Themes', \sprintf('The theme %s does not exists!', $theme), 'changeTheme(ct)');
			$this->forward(IndexController::class);
		}
	}
}
