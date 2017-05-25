// ==UserScript==
// @name         PKS M5 Lib Adv Editor
// @namespace    http://presidioknolls.mlasolutions.com
// @version      0.1
// @description  Adds more informative labels to the PKS Library M5 Advanced Editor Form
// @author       Casey
// @include      http://presidioknolls.mlasolutions.com/m5/RecordEditorManager/*/RecordEditorManagerForm.aspx
// @match        http://presidioknolls.mlasolutions.com/m5/RecordEditorManager/*/RecordEditorManagerForm.aspx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var all_labels = document.getElementsByClassName("EditFieldContextMenuFieldLabel");
    var addedEnglishTopicalTags = false;
    var addedSimplifiedChineseTitle = false;
    for (var i in all_labels) {
        var label = all_labels[i];
        label.style.textTransform = "none";
        if(label.innerHTML == "020") {
            label.innerHTML = "020 ISBN in subfield a";
        }
        if(label.innerHTML == "100") {
            label.innerHTML = "100 author: last, first";
        }
        if(label.innerHTML == "245") {
            label.innerHTML = "245 title: English";
        }
        if(label.innerHTML == "991") {
            label.innerHTML = "991 collection type - DO NOT EDIT";
        }
        if(label.innerHTML == "650") {
            if(!addedEnglishTopicalTags) {
                label.innerHTML = "650 English topical tags (a) and descriptor (v)";
                addedEnglishTopicalTags = true;
            } else {
                label.innerHTML = "650 Chinese topical tags (a) and descriptor (v)";
            }
        }
        if(label.innerHTML == "852") {
            label.innerHTML = "852 call number (h) [Chinese fiction: F, Eng fiction: (E) F, Chinese non-fict: Dewey number, Eng non-fict: (E) Dewey number], alpha locater (i), barcode (p), B4B price of book (g)";
        }
        if(label.innerHTML == "880") {
            if(!addedSimplifiedChineseTitle) {
                label.innerHTML = "880 Title in Simplified Chinese (a)";
                addedSimplifiedChineseTitle = true;
            } else {
                label.innerHTML = "880 Title in Pinyin (a)";
            }
        }
        if(label.innerHTML == "900") {
            label.innerHTML = "900 language code (a): (C) for Chinese or (E) for English";
        }
        if(label.innerHTML == "908") {
            label.innerHTML = "908 system date, do not edit";
        }
        if(label.innerHTML == "910") {
            label.innerHTML = "910 B4B fields: donor name (a), name of library staff who ordered item (b), date book ordered in YYNNDD (c), beneficiary name (d), beneficiary class (e)";
        }
    }

})();

