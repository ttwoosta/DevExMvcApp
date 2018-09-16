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

    orderFrm.append("<div>More information</div>");
};

