"use strict";
$(window).on('load', function () {

    var Like = {

        likeSendReq: function (nodeClass, cardId) {
            var that = this;
            var likeState = !$(nodeClass).hasClass('checked');
            var post_data = {
                cardId: cardId,
                like: likeState
            };
            console.log(post_data);
            // $.ajax({
            //     type: "POST",
            //     url: "",
            //     data: JSON.stringify(post_data),
            //     success: function (html) {
            //         this.likeState(nodeClass, true);
            //     }
            // });
            setTimeout(function () {
                that.likeState(nodeClass, likeState);
            }, 300);
        },
        likeState: function (nodeClass, likeState) {
            if(likeState){
                $(nodeClass).addClass('checked');
            }
            else
            {
                if ($(nodeClass).hasClass('checked')){
                    $(nodeClass).removeClass('checked')
                }
            }
        },
        init: function () {
            $('.img-block-content__like').on('click', function () {
                Like.likeSendReq(this, 1);
            });
        }
    };
    Like.init();
    var Popup = {
        show: function (popupTrigger, popupEl, showClass) {
            $(popupTrigger).on('click', function () {
                $(popupEl).toggleClass(showClass);
                $('body').css('overflow', 'hidden');
            })
        },
        hide: function (popupCloseButton, popupEl, showClass) {
            $(popupCloseButton).on('click', function () {
                $(popupEl).toggleClass(showClass);
                $('body').css('overflow', 'auto');
            })
        },

        init: function(){
            this.show('.content-popup-button', '.fade', 'block');
            this.hide('.popup-close', '.fade', 'block');
        }
    }
    Popup.init();

/////////////////////////////////////////////////////////////////////

    var scene = canvallax.Scene({
            className: 'bg-canvas'
        }),
        width = document.body.clientWidth,
        height = document.body.clientHeight;

    canvallax.TrackScroll({ ease: 15 }).add(scene);


////////////////////////////////////////

    canvallax.createGradient = (function(){

        var canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            defaults = {
                x0: 100,
                y0: 0,
                x1: 0,
                y1: 100,
                size: 100,
                angle: 0,
                colors: ['#fff','#fff']
            };

        return function(options){

            var opts = canvallax.extend({},defaults,options),
                gradient = ctx.createLinearGradient(opts.x0,opts.y0,opts.x1,opts.y1),
                colors = opts.colors || [],
                length = colors.length,
                colorStops = 1 / length,
                i = 0;

            for (; i < length; i++) {
                gradient.addColorStop(i * colorStops, colors[i]);//#E1F6F4');
            }
            return gradient;
        };

    })();

    var rect = canvallax.Rectangle({
        zIndex: 2,
        opacity: 0.95,
        fixed: true,
        width: width,
        height: height,
        fill: canvallax.createGradient({
            x0: 0,
            y0: window.innerHeight,
            x1: window.innerWidth,
            y1: 0,
            colors: ['#fff','#fff']
        })
    });

    scene.add(rect);


////////////////////////////////////////


    function randomRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var i = 0,
        polygons = [],
        width = document.body.clientWidth,
        height = document.body.clientHeight,
        count = Math.round(width + height) * 0.01,
        moveTimeline = new TimelineMax({
            repeat: -1,
            paused: true
        }),
        p,
        distance;

    function postRender(ctx,C){
        this.y += this.speed;
        if ( this.y > (height + 100) / this.z) { this.y = ( -200 / this.z ); }
    }

    for (; i < count; i++){
        distance = randomRange(0.3,1);

        p =  canvallax.Image({

            src: '../images/lightning_yellow.png',
            zIndex: 10

        });

        polygons.push(p);
    }

    scene.add(polygons);

});