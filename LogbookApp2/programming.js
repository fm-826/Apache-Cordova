function toggleTheme() {
    var themes = {
            "a": "Light Mode",
            "b": "Dark Mode"
        },
        oldTheme = $(":mobile-page").page("option", "overlayTheme"),
        newTheme = oldTheme == "a" ? "b" : "a";

    // remove old class for 'ui-page' content, then apply the new class to 'ui-page' content
    $("div[data-role='page']").each(function (index) {
        $(this).removeClass("ui-page-theme-" + oldTheme).addClass("ui-page-theme-" + newTheme);
    });
    // remove old class for 'ui-bar', then apply the new class to 'ui-bar'
    $(".ui-bar-" + oldTheme).each(function (index) {
        $(this).removeClass("ui-bar-" + oldTheme).addClass("ui-bar-" + newTheme);
    });
    // remove old class for 'ui-body', then apply the new class to 'ui-body'
    $(".ui-body-" + oldTheme).each(function (index) {
        $(this).removeClass("ui-body-" + oldTheme).addClass("ui-body-" + newTheme);
    });

    // remove old theme then apply the new theme to page content
    $(":mobile-page").page("option", "overlayTheme", newTheme);
    $(":mobile-page").page("option", "theme", newTheme);
    $(":mobile-page").page("option", "contentTheme", newTheme);

    // change 'btn-theme' button text as necessary
    $("#btn-theme").text(themes[oldTheme]);
}

function resetForm() {
    // perform all of the following if the 'OK' button of the 'Reset Form' PopupDialog is clicked


    // set the selected option of the 'Property type' select list to 'Select property type' (disabled but default)
    var myselectA = $("select#select_propertytype");
    myselectA[0].selectedIndex = 0;
    myselectA.selectmenu("refresh");

    // set the selected option of the 'Bedrooms' select list to 'Select bedroom quantity' (disabled but default)
    var myselectB = $("select#select_bedrooms");
    myselectB[0].selectedIndex = 0;
    myselectB.selectmenu("refresh");

    // clear all text from 'Property addition date' input field
    $('#input_propertyadditiondate').val('');

    // clear all text from 'Property addition time' input field
    $('#input_propertyadditiontime').val('');

    // clear all text from 'Monthly rent' input field
    $('#input_monthlyrent').val('');

    // set the selected option of the 'Furniture type' select list to Furnished (default)
    var myselectC = $("select#select_furnituretype");
    myselectC[0].selectedIndex = 0;
    myselectC.selectmenu("refresh");

    // clear all text from 'Notes' textarea field
    $('#textarea_notes').val('');

    // clear all text from 'Report name' input field
    $('#input_reportername').val('');
}