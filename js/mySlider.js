            jQuery(document).ready(function ($) {
                var _SlideshowTransitions = [
                    {$Duration: 1200, $Opacity: 2},
                    {$Duration: 1200, x: 4, y: -4, $Zoom: 11, $Rotate: 1, $Easing: {$Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad, $Rotate: $Jease$.$InCubic}, $Opacity: 2, $Round: {$Rotate: 0.7}},
                    {$Duration:800,$Zoom:1,$Rotate:0.5,$Easing:{$Rotate:$Jease$.$InSine,$Zoom:$Jease$.$Swing},$Opacity:2,$Brother:{$Duration:800,$Zoom:11,$Rotate:-0.5,$Easing:{$Rotate:$Jease$.$InSine,$Zoom:$Jease$.$Swing},$Opacity:2,$Shift:200}},
					{$Duration:1000,x:-4,y:-4,$Zoom:11,$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Zoom:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}
                ];

                var options = {
                    $AutoPlay: 1,
                    $Loop: 2,
                    $SlideDuration: 650,
                    $Idle: 100,
//                    $BulletNavigatorOptions: {
//                        $Class: $JssorBulletNavigator$,
//                        $ChanceToShow: 2
//                    },
                    $ThumbnailNavigatorOptions: {
                        $Class: $JssorThumbnailNavigator$,
                        $ChanceToShow: 2
                    },
                    $SlideshowOptions: {
                        $Class: $JssorSlideshowRunner$,
                        $Transitions: _SlideshowTransitions,
                        $TransitionsOrder: 1,
                        $ShowLink: true
                    },
                    $ArrowNavigatorOptions: {
                        $Class: $JssorArrowNavigator$,
                        $ChanceToShow: 2
                    }
                };
                var jssor_slider1 = new $JssorSlider$('slider1_container', options);


                //responsive code begin
                //remove responsive code if you don't want the slider scales
                //while window resizing
                function ScaleSlider() {
                    var parentWidth = $('#slider1_container').parent().width();
                    if (parentWidth) {
                        jssor_slider1.$ScaleWidth(parentWidth);
                    } else
                        window.setTimeout(ScaleSlider, 30);
                }
                //Scale slider after document ready
                ScaleSlider();

                //Scale slider while window load/resize/orientationchange.
                $(window).bind("load", ScaleSlider);
                $(window).bind("resize", ScaleSlider);
                $(window).bind("orientationchange", ScaleSlider);
                //responsive code end


            });