//载入动画
const boxList = document.querySelectorAll(".box")

var triggerBottom = window.innerHeight * 0.8 // 触发的条件 , 整体高度的 80%

scrollLoad() // 初始进入执行一次

window.addEventListener("scroll", scrollLoad) // 滚动执行

function scrollLoad() {
    boxList.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top // 当前盒子距离顶部的Top

        if (boxTop <= triggerBottom) {
            box.classList.add("box_show")
        }
    })
}

//time_establishment
document.getElementById("time_establishment").innerHTML = parseInt(
    (new Date().getTime() - new Date("2019-01-04").getTime()) / 86400000
)

//Announcement
dateNow = parseInt(
    new Date().getYear().toString().substr(1) +
        PrefixZero((new Date().getMonth() + 1).toString()) +
        PrefixZero(new Date().getDate().toString())
)

for (let i = 0; i < announcementText.length; i++) {
    var announcementInfo = announcementText[i].split("$")
    var displayTimeEnd = announcementInfo[2].split("-")

    if (
        dateNow < parseInt(displayTimeEnd[0]) ||
        dateNow > parseInt(displayTimeEnd[1])
    ) {
        if (i == announcementText.length - 1) {
            $(".announcement").remove()
        }
    } else {
        $(".announcementBody").append(
            '<p id="announcement-title">' + announcementInfo[0] + "</p>"
        )
        $(".announcementBody").append(
            '<p id="announcement-body">' + announcementInfo[1] + "</p>"
        )
        break
    }
}

function PrefixZero(num) {
    return (Array(2).join(0) + num).slice(-2)
}

// var refreshWithDetectionWidth = $(window).width()
// setInterval(function () {
//     if ($(window).width() != refreshWithDetectionWidth) {
//         location.reload()
//     }
// }, 5000)
