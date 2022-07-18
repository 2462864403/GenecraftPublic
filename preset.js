var allPages = [
    ["../", "首页", "fa-solid fa-house-chimney fa-xs fa-fw"],
    ["../document", "文档", "fa-solid fa-book-bookmark fa-fw fa-xs"],
    ["../gallery", "图册", "fas fa-images fa-fw fa-sm"],
    ["../history", "历史", "fa-solid fa-clock-rotate-left fa-fw fa-xs"],
    ["../bannedlist", "封禁", "fa-solid fa-ban fa-xs fa-fw"],
]

function createHeader() {
    $("body").prepend(
        '<header class="unCopy"><div id="getLengthTheTemporaryDiv"style="width: 4em;height: 0;font-size: 20pt;pointer-events: none;opacity: 0;"></div></header>'
    )

    title = document.getElementsByClassName("header_title")
    div_header = document.getElementsByTagName("header")

    $(div_header).prepend(
        '<div class="header_link"><a class="header_logo" href="https://www.genecraft.top/"></a><div class="header_title"' +
            '><i class="' +
            allPages[currentPage][2] +
            '"></i>&thinsp;' +
            allPages[currentPage][1] +
            '</div><div id="header_completeLinks"></div><div class="hamburg"><input type="checkbox" id="hamburg_checkbox" style="display: none" /><label for="hamburg_checkbox" class="hamburg_button"><a href="" title="更多链接"><div></div><div></div><div></div></a></label><div class="hamburg_links"></div></div></div>'
    )
    // href="' +allPages[currentPage][0] +

    getLengthTheTemporaryDiv = document.getElementById(
        "getLengthTheTemporaryDiv"
    )
    allPages_serial_maxNumber = parseInt(
        (document.body.clientWidth - 430) /
            $(getLengthTheTemporaryDiv)[0]
                .getBoundingClientRect()
                .width.toFixed(3)
    )

    if (allPages.length - 1 < allPages_serial_maxNumber) {
        allPages_serial_maxNumber = allPages.length - 1
    }

    var allPages_serial_number = 0

    for (let i = 0; i < allPages_serial_maxNumber; i++) {
        if (i != currentPage) {
            $(document.getElementById("header_completeLinks")).append(
                '<a href="' +
                    allPages[i][0] +
                    '"><i class="' +
                    allPages[i][2] +
                    '"></i>&thinsp;' +
                    allPages[i][1] +
                    "</a>"
            )
        } else {
            allPages_serial_maxNumber++
        }
        allPages_serial_number = i
    }

    var hamburg_maxLinks =
        allPages_serial_number + allPages.length - allPages_serial_maxNumber + 1

    if (hamburg_maxLinks > allPages.length) {
        hamburg_maxLinks = allPages.length
    }

    if (allPages_serial_number != 0) {
        allPages_serial_number++
    }

    if (hamburg_maxLinks > allPages_serial_number) {
        for (let i = allPages_serial_number; i < hamburg_maxLinks; i++) {
            if (i != currentPage) {
                $(document.getElementsByClassName("hamburg_links")[0]).append(
                    '<a href="' +
                        allPages[i][0] +
                        '"><i class="' +
                        allPages[i][2] +
                        '"></i>&thinsp;' +
                        allPages[i][1] +
                        "</a>"
                )
            }
        }
    } else {
        document.querySelectorAll(".hamburg")[0].remove() //移除汉堡图标
    }
}

createHeader()

var refreshWithDetectionWidth = $(window).width()
setInterval(function () {
    if ($(window).width() != refreshWithDetectionWidth) {
        document.querySelectorAll("header")[0].remove()
        createHeader()
        refreshWithDetectionWidth = $(window).width()
    }
}, 2500)
