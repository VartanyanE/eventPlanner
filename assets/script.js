$(document).ready(function () {

    $('.task').val(localStorage.getItem('9AM'));
    // $('.task').val("Hello");

    $('#time-date').text(moment().format("dddd, MMMM Do YYYY"));

    $(".save-button").on("click", function (event) {
        event.preventDefault();
        console.log('clicked');
        clearField();

    })

    $('.task-form').on('submit', function () {

        clearField();


    })

    function clearField() {
        var taskSave = $('.task').val();
        localStorage.setItem('9AM', taskSave);
        // $('.task').val('');
    }



























});