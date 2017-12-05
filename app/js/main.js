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
    };
    Popup.init();
});