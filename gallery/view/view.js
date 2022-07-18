let arrNumber = imgHref.length
var displayImg = document.getElementById("displayImage")
var displayShade = document.getElementById("displayShadow")
var displayDiv = document.querySelector(".picture")
var backBottle = document.querySelector(".back")

//start
if (window.name == "") {
    $(".picture,#error").css({
        "animation-name": "start",
        "animation-duration": "1s",
        "animation-timing-function": "cubic-bezier(0, .76, 0, 1)",
    })
    $("#displayShadow").css({
        "animation-name": "blur",
        "animation-duration": "1s",
        "animation-timing-function": "cubic-bezier(0, .76, 0, 1)",
    })
    window.name = "isReload"
}

// Decoding
var poundSign = window.atob(window.location.hash.replace("#", ""))
href = imgHref[arrNumber - poundSign]
if (href) {
    $(".loading img").hide()
    displayImg.src = href
    displayShade.src = href
    $(".picture").show()
    $(".picture").css("pointer-events", "none")
    // Size
    var windowW = $(window).width()
    var windowH = $(window).height()
    windowProportion = windowW / windowH
    displayImg.onload = function () {
        $("#loading").fadeOut("fast")
        $(".picture").css("pointer-events", "auto")
        var pictureW = displayImg.width
        var pictureH = displayImg.height
        pictureProportion = pictureW / pictureH
        if (windowProportion < pictureProportion) {
            aspectRatio = true
            displayImg.width = windowW * 0.9
            displayShade.width = displayImg.width
            displayShade.height = displayImg.height
        } else {
            aspectRatio = false
            displayImg.height = windowH * 0.9
            displayShade.width = displayImg.width
            displayShade.height = displayImg.height
        }
    }
} else {
    errorDisplay()
}

// 错误显示
function errorDisplay() {
    $("#loading img").hide()
    window.clearInterval(loading)
    $("#error").fadeIn("fast")
    var countdown = 5
    var countdownInterval = window.setInterval(function () {
        countdown--
        if (countdown <= 0) {
            window.location.replace("..")
            window.clearInterval(countdownInterval)
        }
        $("#time").text(countdown)
    }, 1000)
}

// BACK Button
var back = true
backBottle.onclick = function () {
    if (back) {
        window.opener = null
        window.open("", "_self")
        window.close()
    } else {
        window.location.href = "../"
    }
    setTimeout(function () {
        back = false
    }, 600)
}

var refreshWithDetectionWidth = $(window).width()
setInterval(function () {
    if ($(window).width() != refreshWithDetectionWidth) {
        location.reload()
    }
}, 5000)
