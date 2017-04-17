<?php
namespace Grav\Plugin;

use Grav\Common\Plugin;
use Grav\Common\Utils;

/**
 * Class GoogleMapsPlugin
 * @package Grav\Plugin
 */
class GoogleMapsPlugin extends Plugin
{
    /**
     * @return array
     *
     * The getSubscribedEvents() gives the core a list of events
     *     that the plugin wants to listen to. The key of each
     *     array section is the event that the plugin listens to
     *     and the value (in the form of an array) contains the
     *     callable (or function) as well as the priority. The
     *     higher the number the higher the priority.
     */
    public static function getSubscribedEvents()
    {
        // Don't proceed if we are in the admin plugin
        if (Utils::isAdminPlugin()) { // this could be replaced by self::isAdmin, if the isAdmin function were static
            return [];
        }
		
        return [
            'onShortcodeHandlers' => ['onShortcodeHandlers', 0],
            'onTwigTemplatePaths' => ['onTwigTemplatePaths', 0],
        ];
    }


    public function onShortcodeHandlers()
    {
        $this->grav['shortcode']->registerAllShortcodes(__DIR__.'/shortcodes');
    }

    public function onTwigTemplatePaths()
    {
        $this->grav['twig']->twig_paths[] = __DIR__ . '/templates';
    }
}
