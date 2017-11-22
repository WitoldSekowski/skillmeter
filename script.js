menuCollapsed = false;

$(document).ready(function () {

    changeActions();
    moveTableData();
    $('.responsive-data-container').hide();
    $('.question-actions.popover-4').unbind();
    $('.question-actions.popover-4').on('click', function () {
        $('.popover-4').popover('show');
        $(this).parent().find('.action-buttons-popover').css('display', 'block');
    })

    $('.test-actions').unbind();
    $('.test-actions').on('click', function () {
        $('.popover-5').popover('show');
        $(this).parent().find('.test-action-buttons-popover').css('display', 'block');
    })

    $('.expand-responsive-container').on('click', function () {
        if ($(this).text() == "+") {
            $(this).text('-');
        } else {
            $(this).text('+');
        }
    })

    if ($('.new-user-button').length > 0) {
        $('.new-user-button').on('click', function(){
            $('.new-user').show(400);
        });

       $('.create-user-wrapper .cancel-button').on('click', function(){
            $('.new-user').hide(400);
       })
    }


    $('.list-expand').on('click', function () {
        // $('.test-content').addClass('in');
        $('.test-content').each(function () {
            if (!$(this).hasClass('in')) {
                $(this).parent().find('.question-toggle').trigger('click');
            }
        })
        $(this).css('display', 'none');
        $('.list-collapse').css('display', 'block');
    })

    $('.list-collapse').on('click', function () {
        $('.test-content').removeClass('in');
        $(this).css('display', 'none');
        $('.list-expand').css('display', 'block');
    })

    $('.pagination li a').on('click', function () {
        $('.pagination li a').removeClass('pagination-active');
        $(this).addClass('pagination-active');
    })

    $('.candidates-opt button').on('click', function () {
        $('.candidates-opt button').addClass('blue-button-inactive');
        $(this).removeClass('blue-button-inactive');
    })

    $('.button-group button').on('click', function () {
        $('.button-group button').addClass('blue-button-inactive');
        $(this).removeClass('blue-button-inactive');
    })

    $('.results-buttons button').on('click', function () {
        $('.results-buttons button').addClass('blue-button-inactive');
        $(this).removeClass('blue-button-inactive');
    })


    $('html').on('click', function () {
        $('.three-dots').removeClass('three-dots-active');
    })

    // $('#export-modal').on('shown.bs.modal', function () {
    //     $('#myInput').focus()
    // })
    $('.three-dots').on('click', function (event) {
        event.stopPropagation();
        $('.three-dots').removeClass('three-dots-active');
        $(this).addClass('three-dots-active');
    })

    $('ul.dropdown-menu li a').on('click', function () {
        $(this).parent().parent().parent().find(".btn").text($(this).text());
        $(this).parent().parent().parent().find(".btn").text($(this).text());
        $(this).parent().parent().parent().find(".btn").val($(this).text());
        $(this).parent().parent().parent().find(".btn").append('<span class="custom-caret"></span>')
    })


    var easyClicked = false;
    var mediumClicked = false;
    var hardClicked = false;
    $('.feedback-easy').on('click', function () {
        easyClicked = true;
        $('.medium-icon').removeClass('medium-active');
        $('.medium').removeClass('medium-text-active');
        $('.hard-icon').removeClass('hard-active');
        $('.hard').removeClass('hard-text-active');
    })

    $('.feedback-medium').on('click', function () {
        mediumClicked = true;
        $('.easy-icon').removeClass('easy-active');
        $('.easy').removeClass('easy-text-active');
        $('.hard-icon').removeClass('hard-active');
        $('.hard').removeClass('hard-text-active');
    })


    $('.feedback-hard').on('click', function () {
        hardClicked = true;
        $('.easy-icon').removeClass('easy-active');
        $('.easy').removeClass('easy-text-active');
        $('.medium-icon').removeClass('medium-active');
        $('.medium').removeClass('medium-text-active');
    })


    $('.easy, .easy-icon').hover(
        function () {
            $(this).parent().find('.easy').addClass('easy-text-active');;
            $(this).parent().find('.easy-icon').addClass('easy-active');
        },
        function () {
            if (easyClicked != true) {
                $(this).parent().find('.easy-icon').removeClass('easy-active');
                $(this).parent().find('.easy').removeClass('easy-text-active');
            }
            if (mediumClicked != true) {
                $(this).parent().find('.easy-icon').removeClass('medium-active');
                $(this).parent().find('.easy').removeClass('medium-text-active');
            }
            if (hardClicked != true) {
                $(this).parent().find('.easy-icon').removeClass('hard-active');
                $(this).parent().find('.easy').removeClass('hard-text-active');
            }
        }
    )

    $('.medium, .medium-icon').hover(
        function () {
            $(this).parent().find('.medium').addClass('medium-text-active');;
            $(this).parent().find('.medium-icon').addClass('medium-active');
        },
        function () {
            if (mediumClicked != true) {
                $(this).parent().find('.medium-icon').removeClass('medium-active');
                $(this).parent().find('.medium').removeClass('medium-text-active');
            }
        }
    )

    $('.hard, .hard-icon').hover(
        function () {
            $(this).parent().find('.hard').addClass('hard-text-active');;
            $(this).parent().find('.hard-icon').addClass('hard-active');
        },
        function () {
            if (hardClicked != true) {
                $(this).parent().find('.hard-icon').removeClass('hard-active');
                $(this).parent().find('.hard').removeClass('hard-text-active');
            }
        }
    )

    if (window.innerWidth > 768) {
        enlargeMenu();
        $('.button-nav-left').prop("disabled", false);
    } else {
        collapseMenu();
        $('.button-nav-left').prop("disabled", true);
    }

    if ($('.questions-edit-settings').length > 0) {

        if (window.innerWidth > 634) {

        } else {
            insertAfterLabel();
        }

    }


    window.addEventListener("resize", function () {
        changeActions();
        if (window.innerWidth > 768) {
            enlargeMenu();
            $('.button-nav-left').prop("disabled", false);
        } else {
            collapseMenu();
            $('.button-nav-left').prop("disabled", true);
        }

        if ($('.questions-edit-settings').length > 0) {

            if (window.innerWidth > 634) {
                removeAfterLabel();
            } else {

                insertAfterLabel();
            }

        }

    });

    $('.button-nav-left').on('click', function () {
        if ($('.logo-big').hasClass('logo-invisible')) {
            enlargeMenu()
        } else {
            collapseMenu();
        }
    })

    $('.popover-1').popover({
        html: true,
        content: function () {
            return $('#popover-content-1').html();
        }
    });

    $('.popover-2').popover({
        html: true,
        content: function () {
            return $('#popover-content-2').html();
        }
    });

    $('.popover-3').popover({
        html: true,
        content: function () {
            return $('#popover-content-3').html();
        }
    });


    if ($('#sortable1').length > 0) {
        $("#sortable1, #sortable2").sortable({
            connectWith: ".connectedSortable"
        }).disableSelection();
    }

    $('.popover-5').popover({
        html: true,
        content: function () {
            return $('#popover-content-5').html();
        }
    });

    $('.popover-4').popover({
        html: true,
        content: function () {
            return $('#popover-content-4').html();
        }
    });

    if (window.innerWidth > 768) {
        $('.question-list li, .question-list li > span').on("mouseover", function () {
            $(this).find('.question-actions').css('display', 'none');
            $(this).find('.action-buttons').css('display', 'block');
        })

        $('.question-list li, .question-list li > span').on("click", function () {
            $('.action-buttons').css('display', 'none');
            $('.question-actions').css('display', 'block');
            $(this).find('.question-actions').css('display', 'none');
            $(this).find('.action-buttons').css('display', 'block');
        })

        $('.question-list li, .question-list li > span').on("mouseout", function () {
            $(this).find('.question-actions').css('display', 'block');
            $(this).find('.action-buttons').css('display', 'none');
        })

    } else {
        $('.three-dots.tests').css('display', 'none');
        $(document).on('click', function (e) {
            $('[data-toggle="popover"],[data-original-title]').each(function () {
                //the 'is' for buttons that trigger popups
                //the 'has' for icons within a button that triggers a popup
                if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                    (($(this).popover('hide').data('bs.popover') || {}).inState || {}).click = false  // fix for BS 3.3.6
                }

            });
        });
    }





    $('.answers-type-item .radio-button').on('click', function () {
        $('.answer-active').removeClass('answer-active');
        $(this).parent().find('label:first-child').addClass('answer-active');
    })

    $('.checkbox-label').on('click', function () {
        $(this).parent().find('label:first-child').toggleClass('answer-active');
    })

    var counter = 7;

    $('.more-answers').on('click', function () {

        if ($('body').find('.test-radio').length > 0) {
            console.log($('body').find('.test-radio'));
            $('.answers-type').append(
                ' <div class="answers-type-item">'
                + ' <div class="input-item checkbox-item">'
                + ' <label class="input-item-answer answer-inactive">(optional)</label>'
                + ' <input type="radio" class="radio-button" id="radio' + counter + '" name="plan">'
                + ' <label for="radio' + counter + '" class="test-radio"><span class="outer"><span class="inside"></span></span></label>'
                + ' </div>'
                + ' </div>');
            $('.answers-type-item .radio-button').on('click', function () {
                $('.answer-active').removeClass('answer-active');
                $(this).parent().find('label:first-child').addClass('answer-active');
            })
        } else {
            $('.answers-type').append(
                '<div class="answers-type-item">'
                + '<div class="input-item checkbox-item" >'
                + '<label class="answer-inactive input-item-answer">(optional)</label>'
                + '<input type="checkbox" id="chB' + counter + '" class="check_box" name="feedback">'
                + '<label for="chB' + counter + '" class="checkbox-label padding-adjust"></label>'
                + '</div>'
                + '</div>');
        }



        counter++;

        $('.input-item-correct-answer').remove();
        if (window.innerWidth <= 425) {
            $('<span class="input-item-correct-answer">Correct answer</span>').insertAfter('.input-item-answer');
        }
        $('.checkbox-label').off();
        $('.checkbox-label').on('click', function () {
            $(this).parent().find('label:first-child').toggleClass('answer-active');
        })
    })

    if ($('#editor').length > 0) {
        var quill = new Quill('#editor', {
            theme: 'snow'
        });
    }


})

function collapseMenu() {
    $('.panel-left').addClass('panel-left-collapsed');
    $('.logo-big').addClass('logo-invisible');
    $('.logo-small').removeClass('logo-invisible');
    $('.menu-text-name').addClass('menu-text-collapse');
    $('.test-centre').addClass('test-centre-collapse');
    $('.main-fluid').addClass('main-fluid-collapse');
}

function enlargeMenu() {
    $('.panel-left').removeClass('panel-left-collapsed');
    $('.logo-big').removeClass('logo-invisible');
    $('.logo-small').addClass('logo-invisible');
    $('.menu-text-name').removeClass('menu-text-collapse');
    $('.test-centre').removeClass('test-centre-collapse');
    $('.main-fluid').removeClass('main-fluid-collapse');
}

function moveTableData() {

    $('.expand-responsive-container').on('click', function () {
        $(this).parent().find('.responsive-data-container').toggle('slow');
    })

    if (window.innerWidth <= 360) {
        if ($('.responsive-data-container .candidates-list-result').length == 0) {

            $('.candidates-list-item').each(function (elem) {
                item_result = $(this).find('.candidates-list-result');
                targetItem = $(this).find('.responsive-data-container')
                $(item_result).clone().appendTo(targetItem);
                $('.responsive-data-container .candidates-list-result').css('display', 'inline-block')
            })
            $("<span>Result: </span>").prependTo('.responsive-data-container .candidates-list-result');

        }
    } else {
        $('.responsive-data-container .candidates-list-result').remove();
    }

    if (window.innerWidth < 550) {
        if ($('.responsive-data-container .candidates-list-test').length == 0) {

            $('.candidates-list-item').each(function (elem) {
                item_test = $(this).find('.candidates-list-test');
                targetItem = $(this).find('.responsive-data-container')
                $(item_test).clone().appendTo(targetItem);
                $('.responsive-data-container .candidates-list-test').css('display', 'inline-block')
            })
            $("<span>Test: </span>").prependTo('.responsive-data-container .candidates-list-test');

        }
    }

    if (window.innerWidth < 650) {
        if ($('.responsive-data-container .candidates-list-pin').length == 0) {
            $('.candidates-list-item').each(function (elem) {
                item_pin = $(this).find('.candidates-list-pin');
                targetItem = $(this).find('.responsive-data-container')
                $(item_pin).clone().appendTo(targetItem);
                $('.responsive-data-container .candidates-list-pin').css('display', 'inline-block')
            })
            $("<span>Pin Code: </span>").prependTo('.responsive-data-container .candidates-list-pin');

        }
    }

    if (window.innerWidth <= 768) {
        if ($('.responsive-data-container .candidates-list-action').length == 0) {
            $('.candidates-list-item').each(function (elem) {
                item_action = $(this).find('.candidates-list-action');
                item_taken = $(this).find('.candidates-list-taken');
                targetItem = $(this).find('.responsive-data-container');
                $(item_action).clone().appendTo(targetItem);
                $(item_taken).clone().appendTo(targetItem);

                $('.responsive-data-container .candidates-list-action, .responsive-data-container .candidates-list-taken').css('display', 'inline-block')
            })
            $("<span>Action: </span>").prependTo('.responsive-data-container .candidates-list-action');
            $("<span>Taken On: </span>").prependTo('.responsive-data-container .candidates-list-taken');
        }
        $('.expand-responsive-container').show();
    }

    if (window.innerWidth > 768) {
        $('.expand-responsive-container').hide();
        $('.responsive-data-container').hide();
        if ($('.expand-responsive-container').text() == "+") {
            $('.expand-responsive-container').text('-');
        } else {
            $('.expand-responsive-container').text('+');
        }
    }



    window.addEventListener("resize", function () {
        if (window.innerWidth <= 360) {
            if ($('.responsive-data-container .candidates-list-result').length == 0) {

                $('.candidates-list-item').each(function (elem) {
                    item_result = $(this).find('.candidates-list-result');
                    targetItem = $(this).find('.responsive-data-container')
                    $(item_result).clone().appendTo(targetItem);
                    $('.responsive-data-container .candidates-list-result').css('display', 'inline-block')
                })
                $("<span>Result: </span>").prependTo('.responsive-data-container .candidates-list-result');

            }
        } else {
            $('.responsive-data-container .candidates-list-result').remove();
        }

        if (window.innerWidth < 550) {
            if ($('.responsive-data-container .candidates-list-test').length == 0) {

                $('.candidates-list-item').each(function (elem) {
                    item_test = $(this).find('.candidates-list-test');
                    targetItem = $(this).find('.responsive-data-container')
                    $(item_test).clone().appendTo(targetItem);
                    $('.responsive-data-container .candidates-list-test').css('display', 'inline-block')
                })
                $("<span>Test: </span>").prependTo('.responsive-data-container .candidates-list-test');

            }
        } else {
            $('.responsive-data-container .candidates-list-test').remove();
        }

        if (window.innerWidth < 650) {
            if ($('.responsive-data-container .candidates-list-pin').length == 0) {
                $('.candidates-list-item').each(function (elem) {
                    item_pin = $(this).find('.candidates-list-pin');
                    targetItem = $(this).find('.responsive-data-container')
                    $(item_pin).clone().appendTo(targetItem);
                    $('.responsive-data-container .candidates-list-pin').css('display', 'inline-block')
                })
                $("<span>Pin Code: </span>").prependTo('.responsive-data-container .candidates-list-pin');

            }
        } else {
            $('.responsive-data-container .candidates-list-pin').remove();
        }

        if (window.innerWidth <= 768) {
            if ($('.responsive-data-container .candidates-list-action').length == 0) {
                $('.candidates-list-item').each(function (elem) {
                    item_action = $(this).find('.candidates-list-action');
                    item_taken = $(this).find('.candidates-list-taken');
                    targetItem = $(this).find('.responsive-data-container');
                    $(item_action).clone().appendTo(targetItem);
                    $(item_taken).clone().appendTo(targetItem);

                    $('.responsive-data-container .candidates-list-action, .responsive-data-container .candidates-list-taken').css('display', 'inline-block')
                })
                $("<span>Action: </span>").prependTo('.responsive-data-container .candidates-list-action');
                $("<span>Taken On: </span>").prependTo('.responsive-data-container .candidates-list-taken');
            }
            $('.expand-responsive-container').show();
        } else {
            $('.responsive-data-container .candidates-list-action').remove();
            $('.responsive-data-container .candidates-list-taken').remove();

        }

        if (window.innerWidth > 768) {
            $('.expand-responsive-container').hide();
            $('.responsive-data-container').hide();
            if ($('.expand-responsive-container').text() == "+") {
                $('.expand-responsive-container').text('-');
            } else {
                $('.expand-responsive-container').text('+');
            }
        }

        $('.popover-3').popover({
            html: true,
            content: function () {
                return $('#popover-content-3').html();
            }
        });
    });
}

function changeActions() {
    if (window.innerWidth > 768) {
        $('.three-dots.tests').css('display', 'block');
        $('.question-list li, .question-list li > span, .test-list li, .test-list li > span').on("mouseover", function () {
            $(this).find('.question-actions').css('display', 'none');
            $(this).find('.action-buttons').css('display', 'block');
            $(this).find('.three-dots.tests').css('display', 'none');
        })

        $('.question-list li, .question-list li > span, .test-list li, .test-list li > span').on("click", function () {
            $('.action-buttons').css('display', 'none');
            $('.question-actions').css('display', 'block');
            $(this).find('.question-actions').css('display', 'none');
            $(this).find('.action-buttons').css('display', 'block');
        })

        $('.question-list li, .question-list li > span, .test-list li, .test-list li > span').on("mouseout", function () {
            $(this).find('.question-actions').css('display', 'block');
            $(this).find('.action-buttons').css('display', 'none');
            $(this).find('.three-dots.tests').css('display', 'block');
        })

    } else {
        $('.three-dots.tests').css('display', 'none');
        $('.question-actions.popover-4').unbind();
        $('.question-list li, .question-list li > span, .test-list li, .test-list li > span').unbind();
        $('.question-actions.popover-4').on('click', function () {
            $('.popover-4').popover('show');
            $(this).parent().find('.action-buttons-popover').css('display', 'block');
        })

        $('.test-actions').unbind();
        $('.test-actions').on('click', function () {
            $('.popover-5').popover('show');
            $(this).parent().find('.test-action-buttons-popover').css('display', 'block');
        })
        // $('.question-list li, .question-list li > span, .test-actions.popover-5').unbind();
        $(document).on('click', function (e) {
            $('[data-toggle="popover"],[data-original-title]').each(function () {
                //the 'is' for buttons that trigger popups
                //the 'has' for icons within a button that triggers a popup
                if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                    (($(this).popover('hide').data('bs.popover') || {}).inState || {}).click = false  // fix for BS 3.3.6
                }

            });
        });
    }
}

function insertAfterLabel() {
    if ($('.input-item-correct-answer').length == 0) {
        $('<span class="input-item-correct-answer">Correct answer</span>').insertAfter('.input-item-answer');
        $('.correct-answers-header').css('display', 'none')
    }
}

function removeAfterLabel() {
    $('.input-item-correct-answer').remove();
    $('.correct-answers-header').css('display', 'block')
}
