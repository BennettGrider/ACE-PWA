
function checkFilled(element) {
    var inputVal = document.getElementById(element.id);
    if (inputVal.value != "") {
        inputVal.style.backgroundColor = "#effcff";
    } else {
        inputVal.style.backgroundColor = "#fbe4d6";
    }
}
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="popover2"]').popover({
            placement : 'right',
            template: '<div class="popover" style="width: 200px; border-radius: 5px;"><div class="arrow"></div><div class="popover-inner" style="width: 145px"><h3 class="popover-title"></h3><div class="popover-content" style="width: 196px; border-radius: 5px; font-size: 14px;"></div></div></div>'
            }
    );
    $('body').on('click', function (e) {
    $('[data-toggle="popover"]').each(function () {
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
    $('[data-toggle="popover2"]').each(function () {
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});
});


function showSetRegion(input) {
    if (input.id == 'showaddnewplant') {
        document.getElementById('sr').style.display = 'inline';
        document.getElementById('ssr').style.display = 'none';
    } else if (input.id == 'addnewplant') {
        document.getElementById('sr').style.display = 'none';
        document.getElementById('ssr').style.display = 'inline';
    } else if (input.id == 'close') {
        document.getElementById('sr').style.display = 'none';
        document.getElementById('ssr').style.display = 'inline';
    }
}

function checkforAPPOWN(){
    switch (document.getElementById('projectSite').value) {
        case "DAPL":
            document.getElementById('applicantOwner').value = "Energy Transfer";
            document.getElementById('applicantOwner').style.backgroundColor = "#effcff";
            break;
        case "Sandpiper":
            document.getElementById('applicantOwner').value = "Enbridge";
            document.getElementById('applicantOwner').style.backgroundColor = "#effcff";
            break;
        case "Saginaw Trail Project":
            document.getElementById('applicantOwner').value = "Consumers Energy";
            document.getElementById('applicantOwner').style.backgroundColor = "#effcff";
            break;
        case "":
            document.getElementById('applicantOwner').value = "";
            document.getElementById('applicantOwner').style.backgroundColor = "#fbe4d6"
            break;
        default:
            break
    }
}

$.widget("custom.vegdropdowns", $.ui.autocomplete, {
    _renderMenu: function (ul, items) {
        var self = this;
        $.each(items, function (index, item) {
            self._renderItemData(ul, item);
        });
    },
    _renderItem: function (table, item) {
        console.log(item);
        return $("<li>")
            .data("item.autocomplete", item)
            .append("<div class='scientificname'>" + item.value + "</div><div class='commonname'>" + Nm[item.value] + "</div>")
            .appendTo(table);
    }
});




