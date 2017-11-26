"use strict";
$(window).on('load', function () {
    console.log('test');

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

});