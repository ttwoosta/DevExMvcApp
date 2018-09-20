"use strict";

// run the windowLoaded when the page loads
window.addEventListener("load", windowLoaded);

function windowLoaded() {
    console.log("window is loaded");

    DevExpress.ui.themes.ready(function() {
        //ko.applyBindings(viewModel);
        console.log("themes is ready");
    });

    var currentTheme = localStorage.getItem("my_current_theme");
    if (currentTheme != null) {
        DevExpress.ui.themes.current(currentTheme);
    }
    
    var theme_icon = "https://js.devexpress.com/ThemeBuilder/Content/Images/themes/generic-dark.svg";

    var themeObj = [
        { text: "Generic Light", value: "generic.light", image: theme_icon },
        { text: "Generic Dark", value: "generic.dark", image: theme_icon },
        { text: "Green Mist", value: "greenmist", image: theme_icon },
        { text: "Carmine", value: "carmine", image: theme_icon },
        { text: "Contrast", value: "contrast", image: theme_icon },
        { text: "Dark Moon", value: "darkmoon", image: theme_icon },
        { text: "Dark Violet", value: "darkviolet", image: theme_icon },
        { text: "iPhone 7", value: "ios7", image: theme_icon },
        { text: "Blue (dark)", value: "blue.dark", image: theme_icon },
        { text: "Blue", value: "blue.light", image: theme_icon },
        { text: "Lime", value: "lime.light", image: theme_icon },
        { text: "Lime (dark)", value: "lime.dark", image: theme_icon },
        { text: "Orange", value: "orange.light", image: theme_icon },
        { text: "Orange (dark)", value: "orange.dark", image: theme_icon },
        { text: "Purple", value: "purple.light", image: theme_icon },
        { text: "Purple (dark)", value: "purple.dark", image: theme_icon },
        { text: "Teal", value: "teal.light", image: theme_icon },
        { text: "Teal (dark)", value: "teal.dark", image: theme_icon },
    ];

    $("#themeDropDownBoxContainer").attr("style", "width: 170px; margin: 10px").dxDropDownBox({

        value: themeObj[0],
        dataSource: new DevExpress.data.DataSource({
            store: new DevExpress.data.ArrayStore({ data: themeObj }),
        }),
        dropDownOptions: {
            title: "Themes",
            showTitle: true,
            fullScreen: false,
            showCloseButton: true
        },

        fieldTemplate: function (value, fieldElement) {
            return $("<div />").dxTextBox({ value: value.text, readOnly: true });
            //.$("<img />").attr("src", value.image)
        },
        contentTemplate: function (e) {
            var $list = $("<div>").dxList({
                dataSource: e.component.option("dataSource"),
                selectionMode: "single",
                onSelectionChanged: function (arg) {
                    e.component.option("value", arg.addedItems[0]);
                    e.component.close();

                    var strTheme = arg.addedItems[0].value.toLowerCase();

                    $("#body-container").fadeOut("slow", function () {
                        DevExpress.ui.themes.current(strTheme);
                    }).fadeIn("slow");

                    localStorage.setItem("my_current_theme", strTheme);
                }
            });
            return $list;
        }
    });

}