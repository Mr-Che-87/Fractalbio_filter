//document.addEventListener('DOMContentLoaded', function() {
$(document).ready(function() {
    $('.checkbox-line :input').on('click', function() {
        if ($(this).attr('id') === 'rools-checkbox') {
            return;
        }
        let id = parseInt($(this).val());
        let inputDisabled = false;
        if (id === 655) {
            inputDisabled = true;
        }
        $('.delivery_address :input').each(function() {
            $(this).prop('disabled', inputDisabled);
            $(this).css('opacity', inputDisabled ? 0.5 : 1);
        });
    });
    $('.checkbox-line input[value="655"]').trigger('click');

    $('.open-link').magnificPopup({
        type: 'inline',
        midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    $('.page-up').click(function() {
        $('html, body').animate({
            scrollTop: 0,
        }, 500);
        return false;
    });

    /* Rmenu */

    $('body').append('<div id="bw-rmenu" class="bw-hide"></div>');
    $('#bw-rmenu').append(
        '<div class="top-menu-img "><img src="/templates/main/img/close.svg" alt="" class="bw-rmenu-close"></div>'
    );
    $('.nav').clone().appendTo('#bw-rmenu');
    $('.menu-left').clone().appendTo('#bw-rmenu');
    $('#bw-rmenu').find('.nav').removeClass('nav');

    var bwRMenu = $('#bw-rmenu'),
        bwRMenuToggle = $('.bw-rmenu-toggle');

    bwRMenuToggle.on('click', function() {
        if (bwRMenu.hasClass('bw-hide')) {
            bwRMenu.addClass('bw-show').removeClass('bw-hide');
            $('html, body').css({
                overflow: 'hidden',
            });
        }
    });

    $('#bw-rmenu .up-icon').on('click', function() {
        $(this).parents('li').find('.sub-menu').slideToggle();
    });

    $('.bw-rmenu-close').on('click', bwRMenuClose);

    function bwRMenuClose() {
        bwRMenu.addClass('bw-hide').removeClass('bw-show');
        $('html, body').css({
            overflow: '',
        });
    }

    $(window).on('resize', function(e) {
        if ($(window).width() > 767 && bwRMenu.hasClass('bw-show')) {
            bwRMenuClose();
        }
    });

    // $('.year-row .card-text-r_bottom.btn').on('click', function() {
    // 	$(this).next().toggleClass('visible');
    // 	return false;
    // });

    $('.card-btn-cart').on('click', function() {
        let item = $(this);
        item.toggleClass('active');
        $.get(item.attr('href'), function(data) {
            if (item.hasClass('active')) {
                item.attr(
                    'href',
                    `/emarket/basket/put/element/${item.data('id')}/?offer_id=${item.data('offer')}&amp;amount=1`
                );
            } else {
                item.attr('href', `/emarket/basket/remove/element/${item.data('id')}/`);
            }
            updateCart();
        });
        return false;
    });

    function updateCart() {
        $.get('/', function(data) {
            let cartHtml = $(data).find('.header-cart').html();
            $('.header-cart').html(cartHtml);
        });
    }

    // if ($('#map').length > 0) {
    // 	ymaps.ready(init);
    // 	var myMap,
    // 	myPlacemark;

    // 	function init() {
    // 		myMap = new ymaps.Map("map", {
    // 			center: [59.90684841789578, 30.26848394047542],
    // 			zoom: 15,
    // 			controls: []
    // 		});

    // 		myPlacemark = new ymaps.Placemark([59.90684841789578, 30.26848394047542], {
    // 			balloonContentHeader: 'Кострома',

    // 		}, {
    // 			iconLayout: 'default#image',
    // 			iconImageHref: '/templates/main/img/map-icon.svg',
    // 			iconImageSize: [60, 80],
    // 			iconImageOffset: [-30, -50]
    // 		});

    // 		myMap.geoObjects.add(myPlacemark);
    // 		myMap.behaviors.disable('scrollZoom');
    // 	}
    // }

    let searchTimer,
        searchResults = $('.live-search-results');

    let promoCenter = $('.promo-center');

    $('#live-search').on('keyup focus', function() {
        let text = $(this).val();
        searchResults.html('');
        promoCenter.css('z-index', 15);
        clearTimeout(searchTimer);

        if (text.length >= 3) {
            searchTimer = setTimeout(function() {
                $.getJSON(`/udata/custom/search_do.json?search_string=${text}`, function(data) {
                    searchResults.html('');

                    if (data.items.item) {
                        for (let key in data.items.item) {
                            let item = data.items.item[key];
                            searchResults.append(
                                `<a href="/search/search_do/?search_string=${item.name}&search_id=${item.id}">${item.name} - <dd>${item.category}</dd></a>`
                            );
                        }
                    } else {
                        searchResults.append(`<a>По запросу ничего найдено</a>`);
                    }
                    promoCenter.css('z-index', 16);
                });
            }, 200);
        }
    });

    /**/
    $.urlParam = function(name) {
        var results = new RegExp('[?&]' + name + '=([^&#]*)').exec(
            window.location.href
        );
        if (results == null) {
            return null;
        }
        return decodeURI(results[1]) || 0;
    };

    console.log($.urlParam('search_id'));
    if ($.urlParam('search_id')) {
        $('div.line-v-catalogy').hide();
        $('div.line-v-catalogy').each(function() {
            if ($(this).data('id') == $.urlParam('search_id')) {
                $(this).show();
            }
        });
    }

	$(document).click(function(e) {
//НОВОЕ (к target добавлено let):
		let $target = $(e.target);
        if (
            !$target.closest(searchResults).length &&
            searchResults.find('a').length
        ) {
            searchResults.html('');
            promoCenter.css('z-index', 15);
        }
    });



	// $('.fb-line-up').click(function () {
	// 	$(this).parents('.fb-line').find('.fb-line-body').slideToggle();
	// 	$(this).parents('.fb-line').toggleClass('active');
	// });


	
	
	let viewedProducts = JSON.parse(sessionStorage.getItem('viewedProducts')) || [];
/*
//УБРАЛ ИЗ КОДА(СТАРОЕ) - ИЗ-ЗА ЭТОГО И НЕ РАБОТАЛА ПЕРЕЗАГРУЗКА:
		for (viewedProductId of viewedProducts) {
		$(`.fb-line[data-id="${viewedProductId}"]`).addClass('viewed');
	}
	*/
    
    $('.fb-line-top').on('click', function() {
        const $product = $(this).parent();
        const productId = +$product.data('id');

        $product.find('.fb-line-body').slideToggle();
        $product.toggleClass('active');
		
		if (!viewedProducts.includes(productId)) {
            viewedProducts.push(productId);
            sessionStorage.setItem('viewedProducts', JSON.stringify(viewedProducts));
            $product.addClass('viewed');
        }
    });

    if ($('.fb-select').length > 0) {
        $('.fb-select').selectmenu();
    }

    if ($('.fb-checkboxradio').length > 0) {
        $('.fb-checkboxradio').checkboxradio();
    }

    $('.file-upload input[type=file]').change(function() {
        var filename = $(this).val().replace(/.*\\/, '');
        $('#filename').val(filename);
    });

    $('.cart-btn').click(function() {
        $('.checkout-wrapper').slideDown();
    });

    $('.offer-id').on('selectmenuchange', function(event, ui) {
        const cartItemId = $(this).data('cart_item_id');
        const productId = $(this).data('product_id');
		// const temp = `/udata/emarket/changeOffer/${cartItemId}/${productId}/${ui.item.value}?offer_id=${ui.item.value}`;
		// alert(temp);
		
//ДОБАВИЛ В КОД (НОВОЕ):
		$(document).click(function(e) {
        $target = $(e.target);
        if (
            !$target.closest(searchResults).length &&
            searchResults.find('a').length
        ) {
            searchResults.html('');
            promoCenter.css('z-index', 15);
        }
    });
//КОНЕЦ	

        $.get(
            `/udata/emarket/changeOffer/${cartItemId}/${productId}/${ui.item.value}?offer_id=${ui.item.value}`,
            function(data) {
                location.reload();
            }
        );
    });

    $('.cart-number').on('change', function() {
        const el = $(this);
        basket.modifyItem(el.data('id'), { amount: el.val() }, function(data) {
            location.reload();
        });
    });

    function changeIconAttr(event) {
        var value = $(this).find(event.data.selector).attr(event.data.attr);
        $(this).find(event.data.selector).attr('src', value);
    }

    $('.new-product_item').on(
        'mouseenter click',
        { selector: '.new-product_icon > img', attr: 'data-icon-alt' },
        changeIconAttr
    );
    $('.new-product_item').on(
        'mouseleave',
        { selector: '.new-product_icon > img', attr: 'data-icon-orig' },
        changeIconAttr
    );

    //innter-top-menu
    $('.inner-top-menu .top-menu-item > a').on(
        'mouseenter touch',
        { selector: 'img', attr: 'data-icon-alt' },
        changeIconAttr
    );
    $('.inner-top-menu .top-menu-item > a').on(
        'mouseleave',
        { selector: 'img', attr: 'data-icon-orig' },
        changeIconAttr
    );
	// $(".inner-top-menu").mouseleave(function () {
	// 	var value = $(this).find('.new-product_icon > img').attr('data-icon-orig');
	// 	$(this).find('.new-product_icon > img').attr("src", value);
	// });

	// card links fix

    let cardDocLinks = document.querySelectorAll('.short-card-flex .doc-link');
    if (cardDocLinks.length > 0) {
        cardDocLinks.forEach((el) => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
    }

	// Calc
    $('#caclulator .btn').on('click', function() {
        calc();
    });

    $('#caclulator .btn2').on('click', function() {
        $('#caclulator input').val('');
    });

    function toggleCalcInfo() {
        $('.right-caclulator .fb-line-up').toggleClass('active');
        $('.right-caclulator .inner-calc-text').toggle();
    }

    $('.right-caclulator .fb-line-up + h5').on('click', toggleCalcInfo);
    $('.right-caclulator .fb-line-up').on('click', toggleCalcInfo);

    $('.card-text-r_bottom').on('click', function() {
        let btn = $(this);
		// $(".years-list a").each(function (index) {

		// 	if ($(this.class) != '2020') {
		// 		$(this).hide();
		// 	}
		// });
        $.getJSON('/udata://custom/isYearNews/2020/.json', function(emp) {
            if (emp.flag == 0) {
                $('.years-list a.2020').hide();
            }
        });
        $.getJSON('/udata://custom/isYearNews/2019/.json', function(emp) {
            if (emp.flag == 0) {
                $('.years-list a.2019').hide();
            }
        });
        $.getJSON('/udata://custom/isYearNews/2018/.json', function(emp) {
            if (emp.flag == 0) {
                $('.years-list a.2018').hide();
            }
        });
        $.getJSON('/udata://custom/isYearNews/2017/.json', function(emp) {
            if (emp.flag == 0) {
                $('.years-list a.2017').hide();
            }
        }).done(() => {
            btn.next().toggleClass('visible');
            return false;
        });
    });

    $('#caclulator input').on('focus', function(e) {
        $('#caclulator input').each(function() {
            $(this).removeClass('focused');
        });
    });

    $('#caclulator input').on('keydown', function(e) {
        const rows = 9; // including 0
        const columns = 1; // including 0
        let col = getCol(e);
        let row = getRow(e);
        console.log(e);
        switch (e.key) {
            case 'ArrowUp':
                if (row > 0) {
                    moveTo(--row, col);
                }
                e.preventDefault();
                break;
            case 'ArrowDown':
                if (row < rows) {
                    moveTo(++row, col);
                }
                e.preventDefault();
                break;
            case 'ArrowLeft':
                if (col > 0) {
                    moveTo(row, --col);
                }
                e.preventDefault();
                break;
            case 'ArrowRight':
                if (col < columns) {
                    moveTo(row, ++col);
                }
                e.preventDefault();
                break;
            case 'Tab':
                nextCell();
                e.preventDefault();
                break;
            case 'a':
                if (e.metaKey || e.ctrlKey) {
                    selectAll();
                }
                break;
            case 'ф':
                if (e.metaKey || e.ctrlKey) {
                    selectAll();
                }
                break;
            case 'Backspace':
                if ($('.focused').length > 0) {
                    deleteSelected();
                }
                break;
            case 'Delete':
                if ($('.focused').length > 0) {
                    deleteSelected();
                }
                break;
            case 'Enter':
                calc();
                break;
        }

        function nextCell() {
            col++;
            if (col > columns && row < rows) {
                row++;
                col = 0;
            } else if (col > columns) {
                col = 0;
                row = 0;
            }
            moveTo(row, col);
        }

        function selectAll() {
            $('#caclulator input').each(function() {
                $(this).addClass('focused');
            });
        }

        function deleteSelected() {
            $('#caclulator input.focused').each(function() {
                $(this).val('');
            });
            moveTo(0, 0);
        }

        function moveTo(row, col) {
            const cell = getCell(row, col);
            console.log(cell, row, col);
            cell.focus();
            calc();
        }

        function getCol(e) {
            return $(e.target).parent().index();
        }

        function getRow(e) {
            return $(e.target).index() - 1;
        }

        function getCell(row, col) {
            return $(
                '#caclulator .cols div:nth-child(' +
                (col + 1) +
                ') input:nth-child(' +
                (row + 2) +
                ')'
            );
        }
    });

    function calc() {
        for (var j = 1; j <= 10; j = j + 1) {
            var m = parseFloat(
                document.getElementById('minp' + j).value.replace(',', '.')
            );
            var n = parseFloat(
                document.getElementById('ninp' + j).value.replace(',', '.')
            );
            var res = Math.pow(2.0, m - n);
            if (!isNaN(res)) {
                if (res >= 1.0) {
                    document.getElementById('output' + j).value =
                        '' + Math.floor(res) + '/1';
                } else {
                    var i = 1;
                    for (i = 1; i < 10000000; i = i + 1) {
                        if (1.0 / i - res < 1e-6) {
                            document.getElementById('output' + j).value = '1/' + i;
                            break;
                        }
                    }
                    if (i == 10000000) {
                        document.getElementById('output' + j).value = '1';
                    }
                }
            }
        }
    }

    const filter = document.querySelector('.js_filter');
    if (filter) {
        const filterOpenBtn = document.querySelector('.js_filter-open');
        const filterResetBtn = document.querySelector('.js_filter-reset');
        const filterDropdown = document.querySelector('.js_filter-dropdown');
        const filterCloseBtn = document.querySelector('.js_filter-close');
        const filterBtn = document.querySelector('.js_filter-btn');
        const checkboxes = filterDropdown.querySelectorAll('input');

        filterOpenBtn.addEventListener('click', () => {
            filter.classList.toggle('open');
            if (filter.classList.contains('open')) {
                filterDropdown.style.maxHeight = filterDropdown.scrollHeight + 'px';
            } else {
                filterDropdown.style.maxHeight = null;
            }
        });

        filterCloseBtn.addEventListener('click', () => {
            filter.classList.remove('open');
            filterDropdown.style.maxHeight = null;
        });

        filterBtn.addEventListener('click', (event) => {
            event.preventDefault();

            checkboxes.forEach((checkbox) => {
                if (checkbox.checked) {
                    filter.classList.add('use');
                }
            });

            filter.classList.remove('open');
            filterDropdown.style.maxHeight = null;
        });

        filterResetBtn.addEventListener('click', () => {
            filter.classList.remove('use');
        });

        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('click', () => {
                filterDropdown.style.maxHeight = filterDropdown.scrollHeight + 'px';
            });
        });
    }
});

//  });
