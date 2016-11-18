<?php

namespace Grav\Plugin\Shortcodes;

use Thunder\Shortcode\Shortcode\ShortcodeInterface;


class MapShortcode extends Shortcode
{
    public function init()
    {
        $apikey = $this->grav['config']->get('plugins.google-maps.google_api_key');
        $apikeystring = ($apikey) ? "?key=$apikey" : "";
        $this->shortcode->getHandlers()->add('google-maps', function(ShortcodeInterface $sc) use ($apikeystring) {

            //add assets
            $this->grav['assets']->addJs('//maps.googleapis.com/maps/api/js'.$apikeystring);
            $this->grav['assets']->addJs('plugin://google-maps/js/google-maps.js');
            $hash = $this->shortcode->getId($sc);
            $infowindow = $sc->getContent();

            $output = $this->twig->processTemplate('partials/google-maps.html.twig', [
                'hash' => $hash,
                'width' => $sc->getParameter('width', '600px'),
                'height' => $sc->getParameter('height', '400px'),
                'lat' => $sc->getParameter('lat', 44.540),
                'lng' => $sc->getParameter('lng', -78.546),
                'zoom' => $sc->getParameter('zoom', 8),
                'scrollwheel' => $sc->getParameter('scrollwheel', true),
                'pancontrol' => $sc->getParameter('pancontrol', true),
                'iconurl' => $sc->getParameter('iconurl', ''),
                'infowindow' => $infowindow,
            ]);

            return $output;
        });
    }
}
