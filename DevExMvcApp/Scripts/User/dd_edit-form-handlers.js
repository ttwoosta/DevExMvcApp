"use strict";

function OnFormInitialized(e) {
    console.debug("Form initialized");
}

function OnFormContentReady(e) {
    console.debug("Form content is ready");

    // retrieve Order Form
    var orderFrm = e.element
        .children().last()
        .children().last()
        .children().last();

    // get the last child
    //var lastChild = orderFrm.children().last();
    // add some text
    //lastChild.append("Extra information");

    //class=\"dx-item dx-box-item\" style=\"display: flex; min-height: auto; flex-grow: 1; flex-shrink: 1;\"
    //orderFrm.append("<div class=\"dx-item dx-box-item\" style=\"display: flex; min-height: auto; flex-grow: 1; flex-shrink: 1;\">Extra information:<input type=\"text\" value=\"This text field inserted by javascript.\"></div>");

    orderFrm.append(CreateTextBox());
}

function CreateTextBox() {
    var div = document.createElement("div");
    div.setAttribute("class", "dx-item dx-box-item");
    div.setAttribute("style", "display: flex; min-height: auto; flex-grow: 1; flex-shrink: 1;");

    var label = document.createElement("label");
    label.setAttribute("for", "my_input_box");
    label.setAttribute("class", "dx-field-item-label dx-field-item-label-location-left");
    div.appendChild(label);

    var lblText = document.createTextNode("Extra information:");
    label.appendChild(lblText);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    //input.setAttribute("class", "dx-texteditor-input");
    input.setAttribute("value", "more info");
    input.setAttribute("id", "my_input_box");

    var coni = document.createElement("div");
    coni.setAttribute("class", "dx-texteditor-container");
    coni.appendChild(input);
   
    var cont = document.createElement("div");
    cont.setAttribute("class", "dx-datagrid-edit-form-item dx-first-col dx-field-item dx-col-0 dx-field-item-optional dx-flex-layout dx-label-h-align");

    cont.appendChild(div);
    cont.appendChild(coni);

    return cont;
}
