$(document).ready(function () {

    $('.task9').val(localStorage.getItem('9AM'));
    $('.task10').val(localStorage.getItem('10AM'));
    $('.task11').val(localStorage.getItem('11AM'));
    $('.task12').val(localStorage.getItem('NOON'));
    $('.task13').val(localStorage.getItem('1PM'));
    $('.task14').val(localStorage.getItem('2PM'));
    $('.task15').val(localStorage.getItem('3PM'));
    $('.task16').val(localStorage.getItem('4PM'));
    $('.task17').val(localStorage.getItem('5PM'));
    $('#time-date').text(moment().format("dddd, MMMM Do YYYY"));




    var nine = Number(moment().format('9'));
    var ten = Number(moment().format('10'));
    var eleven = Number(moment().format('11'));
    var twelve = Number(moment().format('12'));
    var thirteen = Number(moment().format('13'));
    var fourteen = Number(moment().format('14'));
    var fifteen = Number(moment().format('15'));
    var sixteen = Number(moment().format('16'));
    var seventeen = Number(moment().format('17'));
    var currentHour = Number(moment().format('H'));


    if (currentHour === nine) {

        $('.task9').addClass('present')
    }
    else if (currentHour > nine) {
        $('.task9').addClass('past');

    } else {

        $('.task9').addClass('future');
    }

    if (currentHour === ten) {

        $('.task10').addClass('present')
    }
    else if (currentHour > ten) {
        $('.task10').addClass('past');

    } else {

        $('.task10').addClass('future');
    }

    if (currentHour === eleven) {

        $('.task11').addClass('present')
    }
    else if (currentHour > eleven) {
        $('.task11').addClass('past');

    } else {

        $('.task11').addClass('future');
    }

    if (currentHour === twelve) {

        $('.task12').addClass('present')
    }
    else if (currentHour > twelve) {
        $('.task12').addClass('past');

    } else {

        $('.task12').addClass('future');
    }

    if (currentHour === thirteen) {

        $('.task13').addClass('present')
    }
    else if (currentHour > thirteen) {
        $('.task13').addClass('past');

    } else {

        $('.task13').addClass('future');
    }
    if (currentHour === fourteen) {

        $('.task14').addClass('present')
    }
    else if (currentHour > fourteen) {
        $('.task14').addClass('past');

    } else {

        $('.task14').addClass('future');
    }

    if (currentHour === fifteen) {

        $('.task15').addClass('present')
    }
    else if (currentHour > fifteen) {
        $('.task15').addClass('past');

    } else {

        $('.task15').addClass('future');
    }

    if (currentHour === sixteen) {

        $('.task16').addClass('present')
    }
    else if (currentHour > sixteen) {
        $('.task16').addClass('past');

    } else {

        $('.task16').addClass('future');
    }

    if (currentHour === seventeen) {

        $('.task17').addClass('present')
    }
    else if (currentHour > seventeen) {
        $('.task17').addClass('past');

    } else {

        $('.task17').addClass('future');
    }



    function clearAndSave() {
        var taskSave9 = $('.task9').val();
        localStorage.setItem('9AM', taskSave9);
        var taskSave10 = $('.task10').val();
        localStorage.setItem('10AM', taskSave10);
        var taskSave11 = $('.task11').val();
        localStorage.setItem('11AM', taskSave11);
        var taskSave12 = $('.task12').val();
        localStorage.setItem('NOON', taskSave12);
        var taskSave13 = $('.task13').val();
        localStorage.setItem('1PM', taskSave13);
        var taskSave14 = $('.task14').val();
        localStorage.setItem('2PM', taskSave14);
        var taskSave15 = $('.task15').val();
        localStorage.setItem('3PM', taskSave15);
        var taskSave16 = $('.task16').val();
        localStorage.setItem('4PM', taskSave16);
        var taskSave17 = $('.task17').val();
        localStorage.setItem('5PM', taskSave17);


    }


    $(".save-button9").on("click", function (e) {
        e.preventDefault();

        clearAndSave();
    })

    $(".save-button10").on("click", function (e) {
        e.preventDefault();

        clearAndSave();
    })
    $(".save-button11").on("click", function (e) {
        e.preventDefault();

        clearAndSave();
    })
    $(".save-button12").on("click", function (e) {
        e.preventDefault();

        clearAndSave();
    })
    $(".save-button13").on("click", function (e) {
        e.preventDefault();

        clearAndSave();
    })
    $(".save-button14").on("click", function (e) {
        e.preventDefault();

        clearAndSave();
    })
    $(".save-button15").on("click", function (e) {
        e.preventDefault();

        clearAndSave();
    })
    $(".save-button16").on("click", function (e) {
        e.preventDefault();

        clearAndSave();
    })
    $(".save-button17").on("click", function (e) {
        e.preventDefault();

        clearAndSave();
    })


    $('.task-form9').on('submit', function (e) {
        e.preventDefault();

        clearAndSave();
    })

    $('.task-form10').on('submit', function (e) {
        e.preventDefault();

        clearAndSave();
    })

    $('.task-form11').on('submit', function (e) {
        e.preventDefault();

        clearAndSave();
    })

    $('.task-form12').on('submit', function (e) {
        e.preventDefault();

        clearAndSave();
    })

    $('.task-form13').on('submit', function (e) {
        e.preventDefault();

        clearAndSave();
    })

    $('.task-form14').on('submit', function (e) {
        e.preventDefault();

        clearAndSave();
    })

    $('.task-form15').on('submit', function (e) {
        e.preventDefault();

        clearAndSave();
    })

    $('.task-form16').on('submit', function (e) {
        e.preventDefault();

        clearAndSave();
    })

    $('.task-form17').on('submit', function (e) {
        e.preventDefault();

        clearAndSave();
    })


























});