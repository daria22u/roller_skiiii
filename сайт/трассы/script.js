$(document).ready(function() {
    $('.trail-section').hide(); // Скрыть все секции трасс по умолчанию

    $('.toggle-section').on('click', function() {
        var target = $(this).data('target');
        $('.trail-section').hide(); // Скрыть все секции
        $(target).show(); // Показать выбранную секцию
    });

    $('#info-button').hover(function() {
        $('#developer-info').toggle(); // Показать/скрыть информацию о разработчике
    });
});
