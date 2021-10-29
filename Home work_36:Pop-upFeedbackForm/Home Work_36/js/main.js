$("document").ready(function () {
    // Когда пользователь нажимает кнопку, открывается pop-up форма 
    $('.btn').on('click', function (e) {
        $(".wraper_modal").fadeToggle()
    })
    // Когда пользователь нажимает кнопку (x) <span>, закрывается окно формы
    $(".close").click(function () {
        $(".wraper_modal").fadeToggle();
    });

    // Пользователь нажимает кнопку Уточнить детали и открывается textarea
    $(".label").on('click', function () {
        $(".text").slideDown(500);
    });
        // Пользователь нажимает кнопку Уточнить детали и закрыватся textarea
    $(".label").on('click', function () {
        $(".text").hide();
    });

    //При наведении Желаемая дата приема меняеться на формат dd/mm/yyyy
    date.onmouseover = function () {
        this.placeholder = "dd/mm/yyyy";
    }
    date.onmouseout = function () {
        this.placeholder = "Желаемая дата приема";
    }

});