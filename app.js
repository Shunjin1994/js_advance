//お決まり
//DOMが作り終わったあとに中身の処理実行
$(function(){
    //ここに処理の中身を書く
    //今回はタイトルのフォームが入力されたらsubmitボタンが押せるようにする
    //それまでsubmitボタンはdisabledにしておく

    $("ul.menu li").hover(function(){
        $("ul.sub:not(:animated)", this).slideDown();
    }, function(){
        $("ul.sub", this).slideUp();
    });

    
    // var loader = $('.loader-wrap');
    $('.loader').on('blur', function(){
        loader.fadeIn();
    });

    //1.タイトルフォームが入力された場合のイベントをセットする    focus change
    $('.js-form-validate').on('keyup', function () {
        //2.タイトルフォームの中身(value)を取得して中身が入っているか確認
        //if文、なにか値があればtrue、空ならfalse
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var password_re = document.getElementById("password_re").value;

        var checkResult = true;
        var regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

        if (!regexp.test(email)) {
            checkResult = false;
        }
        if(password.length < 6){
            checkResult = false;
        }
        if(password_re.length < 6){
            checkResult = false;
        }
        
        if(checkResult){
            //3.中身が入っているならdisabledをはずす
            $('.js-disabled-submit').prop('disabled', false);
        }else{
            //4.中身が入っていなければdisabledにする
            $('.js-disabled-submit').prop('disabled', true);
        }
    });

    $('.js-blur-valid-email').on('blur',function (e) {

        var email = document.getElementById("email").value;
        var regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

        if (!regexp.test(email)) {
            $('.js-set-msg-email').addClass('is-error');
            $(this).addClass('is-error');
            $('.js-set-msg-email').text("メールアドレスの形式ではありません");
        }else{
            $('.js-set-msg-email').removeClass('is-error');
            $(this).removeClass('is-error');
            $('.js-set-msg-email').text("");
        }

        var $that = $(this);

        // Ajaxを実行する
        $.ajax({
            type: 'post',
            url: 'ajax.php',
            dataType: 'json', // 必ず指定すること。指定しないとエラーが出る＆返却値を文字列と認識してしまう
            data: {
                email: $(this).val()
            }
        }).then(function(data) {
            console.log(data);

        if(data){
            console.log(data);

            // フォームにメッセージをセットし、背景色を変更する
            if(data.errorFlg){
                $('.js-set-msg-email').addClass('is-error');
                $('.js-set-msg-email').removeClass('is-success');
                $that.addClass('is-error');
                $that.removeClass('is-success');
            }else{
                $('.js-set-msg-email').addClass('is-success');
                $('.js-set-msg-email').removeClass('is-error');
                $that.addClass('is-success');
                $that.removeClass('is-error');
            }
            $('.js-set-msg-email').text(data.msg);
        }
        });
    });

    $('.js-blur-valid-password').on('blur',function (e) {

        var email = document.getElementById("password").value;
        var regexp = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{6,20}$/i;

        if (!regexp.test(email)) {
            $('.js-set-msg-password').addClass('is-error');
            $(this).addClass('is-error');
            $('.js-set-msg-password').text("半角英数字6文字以上ではありません");
        }else{
            $('.js-set-msg-password').removeClass('is-error');
            $(this).removeClass('is-error');
            $('.js-set-msg-password').text("");
        }
    });

    $('.js-blur-valid-password_re').on('blur',function (e) {

        var email = document.getElementById("password_re").value;
        var regexp = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{6,20}$/i;

        if (!regexp.test(email)) {
            $('.js-set-msg-password_re').addClass('is-error');
            $(this).addClass('is-error');
            $('.js-set-msg-password_re').text("パスワードと一致していません");
        }else{
            $('.js-set-msg-password_re').removeClass('is-error');
            $(this).removeClass('is-error');
            $('.js-set-msg-password_re').text("");
        }
    });
});