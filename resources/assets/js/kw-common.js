$(document).ready(function () {

    /***
       * 약관 전체 동의 체크박스 클릭 이벤트
    ****/
    $("#chkAll").click(function () {
        // 약관 전체 동의 체크박스의 상태를 가져옴
        var isChecked = $(this).prop("checked");
        // 아래에 있는 모든 체크박스의 상태를 약관 전체 동의 체크박스와 동일하게 설정
        $(".check-group input[type='checkbox']").prop("checked", isChecked);
    });

    /***
       * 툴팁
    ****/
    $('.i-tooltip').hover(
        function () {
            $(this).siblings('.tooltip-box').fadeIn(200);
        },
        function () {
            $(this).siblings('.tooltip-box').fadeOut(200);
        }
    );

    /***
       * 반려동물 선택
    ****/
    $('.pet-item-bottom button').on('click', function() {
        $(this).closest('.pet-item').toggleClass('active');
    });

    /***
       * Bottom Sheet
    ****/
    $('.btn-open').on('click', function() {
        var target = $(this).data('target');
        $(target).addClass('active');
        $('.overlay').addClass('active');
    });

    $('.btn-close, .overlay').on('click', function() {
        $('.bottom-sheet').removeClass('active');
        $('.overlay').removeClass('active');
    });

    /***
       * 토스트팝업
    ****/
    function showToast(message) {
        $('.toast').remove();
        var toast = $('<div class="toast"><i class="ico i-toast"></i>' + message + '</div>');
        $('body').append(toast);

        toast.addClass('show');

        setTimeout(function() {
            toast.removeClass('show');
        }, 3000);
    }
});

function setAppHeight() {
    const appHeight = window.innerHeight;
    document.documentElement.style.setProperty('--app-height', `${appHeight}px`);
}

window.addEventListener('DOMContentLoaded', setAppHeight);
window.addEventListener('resize', setAppHeight);
window.addEventListener('orientationchange', setAppHeight);
