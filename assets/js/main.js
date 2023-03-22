jQuery(document).ready(function () {
    $("#bell").click(function () {
        $("#drawer").toggle();
    });
    $("#user-opt-btn").click(function () {
        $("#user-opt-drawer").toggle();
    });
});



// Sidebar - Toggle Button
$(document).ready(function () {

    $(".sidebar-btn").click(function () {
        $(".dash-main-right").toggleClass('full-width');
        $(".dash-main-left").toggleClass('hideSidebar');
        $(".dash-main-left-inner").toggleClass('hideSidebar');
        if ($(".dash-main-left-inner").hasClass('show-left-inner')) {
            $(".dash-main-left-inner").removeClass('show-left-inner');
        } else {
            $(".dash-main-left-inner").removeClass('hide-left-inner');
        }
    })

    $(".sidebar_show_btn").click(function () {
        $(".dash-main-right").toggleClass('full-width');
        $(".dash-main-left").toggleClass('hideSidebar');
        $(".dash-main-left-inner").toggleClass('hideSidebar');
        if ($(".dash-main-left-inner").hasClass('show-left-inner')) {
            $(".dash-main-left-inner").removeClass('show-left-inner');
        } else {
            $(".dash-main-left-inner").removeClass('hide-left-inner');
        }
    })

});


/* Home page start  */

// home video

// new YouTubeToHtml5({ 
//     selector: '',
//     withAudio: true 
// });

// home video button

// (function ($) {
//     $(document).ready(function () {
//         $diviVideo = $("#home-video video");
//         videoElement = $("#home-video video")[0];
//         $videoCta = $(".home-buy-button");

//         $diviVideo.on("timeupdate", function (e) {
//             if (e.target.currentTime >= 900) {
//                 $videoCta.addClass("show-button");
//             }

//         });
//     });
// })(jQuery);


// jQuery('.btn-slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true
// });