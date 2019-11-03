var settings = {};

(function ($) {

    $.fn.seeker = function (options) {

        var defaults = {

            'element': {
                'div_seeker': {
                    'id': 'div_seeker',
                    'class': 'form-row align-items-center',
                    'html': ''
                },

                'div_search': {
                    'id': 'div_search',
                    'class': "col-auto my-1",
                    'html': ''
                },

                'input_search': {
                    'id': 'input_search',
                    'class': 'form-control',
                    'html': ''
                },

                'div_advanced_search': {
                    'id': 'div_advanced_search',
                    'class': "col-auto my-1",
                    'html': ''
                },

                'btn_advanced_search': {
                    'id': 'btn_advanced_search',
                    'class': 'btn btn-primary',
                    'html': '<i class="fa fa-search" aria-hidden="true"></i>'
                },

                'div_eraser': {
                    'id': 'div_eraser',
                    'class': "col-auto my-1",
                    'html': ''
                },

                'btn_eraser': {
                    'id': 'btn_eraser',
                    'class': 'btn btn-danger',
                    'html': '<i class="fa fa-eraser" aria-hidden="true"></i>'
                }
            },
            '': ''

        };

        settings = $.extend({}, defaults, options);

        return this.each(function (index, current_element) {

            current_element = $(current_element);
            var div_seeker = $("<div></div>");
            var div_search = $("<div></div>");
            var input_search = $("<input></input>");
            var div_advanced_search = $("<div></div>");
            var btn_advanced_search = $("<button></button>");
            var div_eraser = $("<div></div>");
            var btn_eraser = $("<button></button>");
            var modal_search = $('<div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">  <div class="modal-dialog modal-dialog-centered" role="document">    <div class="modal-content">      <div class="modal-header">        <h5 class="modal-title" id="TituloModalCentralizado">Título do modal</h5>        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">          <span aria-hidden="true">&times;</span>        </button>      </div>      <div class="modal-body">        ...      </div>      <div class="modal-footer">        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>        <button type="button" class="btn btn-primary">Salvar mudanças</button>      </div>    </div>  </div></div>');

            div_seeker = mountHTML(
                div_seeker,
                div_search,
                input_search,
                div_advanced_search,
                btn_advanced_search,
                div_eraser,
                btn_eraser,
                modal_search
            );

            addActions(
                div_seeker,
                div_search,
                input_search,
                div_advanced_search,
                btn_advanced_search,
                div_eraser,
                btn_eraser,
                modal_search
            );

            current_element.append(div_seeker);

        });

    };

}(jQuery));

function mountHTML(
    div_seeker,
    div_search,
    input_search,
    div_advanced_search,
    btn_advanced_search,
    div_eraser,
    btn_eraser,
    modal_search
) {

    div_seeker
        .addClass(settings.element.div_seeker.class)
        .html(settings.element.div_seeker.html);
    createID(
        div_seeker,
        settings.element.div_seeker.id
    );

    div_search
        .addClass(settings.element.div_search.class)
        .html(settings.element.div_search.html);
    createID(
        div_search,
        settings.element.div_search.id
    );

    input_search
        .addClass(settings.element.input_search.class)
        .html(settings.element.input_search.html);
    createID(
        input_search,
        settings.element.input_search.id
    );

    div_advanced_search
        .addClass(settings.element.div_advanced_search.class)
        .html(settings.element.div_advanced_search.html);
    createID(
        div_advanced_search,
        settings.element.div_advanced_search.id
    );

    btn_advanced_search
        .addClass(settings.element.btn_advanced_search.class)
        .html(settings.element.btn_advanced_search.html);
    createID(
        btn_advanced_search,
        settings.element.btn_advanced_search.id
    );

    div_eraser
        .addClass(settings.element.div_eraser.class)
        .html(settings.element.div_eraser.html);
    createID(
        div_eraser,
        settings.element.div_eraser.id
    );

    btn_eraser
        .addClass(settings.element.btn_eraser.class)
        .html(settings.element.btn_eraser.html);
    createID(
        btn_eraser,
        settings.element.btn_eraser.id
    );

    div_search.append(input_search);
    div_advanced_search.append(btn_advanced_search);
    div_eraser.append(btn_eraser);

    createID(
        modal_search,
        'modal_advenced_search'
    );

    div_seeker
        .append(div_search)
        .append(div_advanced_search)
        .append(div_eraser)
        .append(modal_search);

    return div_seeker;
}


function createID(element, id) {

    var id_exist = true;
    for (let i = 0; i < 100; i++) {

        while (id_exist) {
            id += '_' + Math.floor((Math.random() * 9999) + 1);

            if (!$(id).length) {
                id_exist = false;
                element.attr('id', id);
                break;
            }

        }

    }

    if (id_exist) {
        throw 'Could not create element id within 100 attempts';
    }

    return element;

}


function addActions(
    div_seeker,
    div_search,
    input_search,
    div_advanced_search,
    btn_advanced_search,
    div_eraser,
    btn_eraser,
    modal_search
)
{



}