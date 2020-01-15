// LOAD ALL ELEMENTS THAT WILL  APPEND DYNAMIC ELEMENTS 
var map = document.querySelector("map")
var container = document.querySelector(".bgimg")
var choice = document.querySelector(".choice")
var adddiv1 = document.getElementById('slide-1')
/** SLIDESHOW **/
var arr = [];
var imgNumber = 0;

/** it has the choosen part of body */
var globaltarget;
/** it has the choosen level */
var leveltarget;
var totaltarget;
var levTarget;

// CREATE ALL ELEMENTS THAT WILL BE APPENDED  (scope chaining)
var scrolldiv = document.createElement("div")
var optionesdiv = document.createElement("div")
var programdiv = document.createElement("div")
var img = document.createElement("img")
var level = ["Easy", "Medium", "Hard"]
var arrow = document.createElement("i")
var setRarrow = arrow.setAttribute("class", "fa fa-chevron-right")

var xhp = new XMLHttpRequest()
xhp.open("GET", "output.json")
xhp.send()
xhp.addEventListener('readystatechange', function () {
    if (xhp.readyState == 4) {
        if (xhp.status == 200) {
            var dataBase = JSON.parse(xhp.response);
            // console.log(dataBase)
            map.addEventListener('click', function (e) {
                var target = e.target.title
                globaltarget = e.target.title
                switch (target) {
                    case 'leg':
                        img.src = dataBase["levelImg"][0].leg
                        scrolldiv.appendChild(img)
                        break;

                    case 'abs':
                        img.src = dataBase["levelImg"][0].absbg
                        scrolldiv.appendChild(img)
                        break;

                    case 'arm':
                        img.src = dataBase["levelImg"][0].armbg
                        scrolldiv.appendChild(img)
                        break;
                    case 'butt':
                        img.src = dataBase["levelImg"][0].butt
                        scrolldiv.appendChild(img)
                        break;
                }

                /*first div*/
                scrolldiv.setAttribute("id", "scroll")
                img.setAttribute("id", "background")
                optionesdiv.addEventListener("click", function (e) {
                    leveltarget = e.target.id
                    // console.log(levTarget)
                    levTarget = leveltarget.toLowerCase();
                    totaltarget = globaltarget + levTarget

                    // })


                    // var nextarrow = document.querySelector('#easy')
                    var nextarrow = document.querySelector("#" + levTarget)

                    nextarrow.addEventListener("click", function () {
                        container.innerHTML = " "
                        /*second div*/
                        console.log(levTarget)
                        programdiv.setAttribute("id", "toprogram")
                        programdiv.setAttribute("class", "choice")
                        var ul1 = document.createElement("ul")
                        ul1.setAttribute("class", "info")
                        /*loop on information*/
                        var li1 = document.createElement("li")
                        var li2 = document.createElement("li")
                        var li3 = document.createElement("li")
                        var br1 = document.createElement("br")
                        li1.innerText = dataBase["" + totaltarget][4].l1
                        li2.innerText = dataBase["" + totaltarget][4].l2
                        li3.innerText = dataBase["" + totaltarget][4].l3
                        ul1.appendChild(li1)
                        ul1.appendChild(li2)
                        ul1.appendChild(li3)
                        programdiv.appendChild(ul1)
                        programdiv.appendChild(br1)
                        console.log(li1)

                        var ul2 = document.createElement("ul")
                        ul2.setAttribute("class", "info2")
                        var li4 = document.createElement("li")
                        var li5 = document.createElement("li")
                        var li6 = document.createElement("li")
                        var br = document.createElement("br")
                        var hr = document.createElement("hr")
                        li4.innerText = dataBase["commonInfo"][0].l1
                        li5.innerText = dataBase["commonInfo"][0].l2
                        li6.innerText = dataBase["commonInfo"][0].l3
                        ul2.appendChild(li4)
                        ul2.appendChild(li5)
                        ul2.appendChild(li6)
                        programdiv.appendChild(ul2)
                        programdiv.appendChild(br)
                        programdiv.appendChild(hr)

                        var totalprogram = document.createElement("div")
                        totalprogram.setAttribute("class", "program")
                        for (var i = 0; i < dataBase["" + totaltarget].length - 1; i++) {
                            var div = document.createElement("div")
                            var img = document.createElement("img")
                            img.src = dataBase["" + totaltarget][i].src
                            div.appendChild(img)
                            var name = document.createElement("h3")
                            name.textContent = dataBase["" + totaltarget][i].h3
                            div.appendChild(name)
                            var count = document.createElement("h5")
                            count.textContent = dataBase["" + totaltarget][i].h5
                            div.appendChild(count)
                            totalprogram.appendChild(div)
                        }
                        var startbtn = document.createElement("input")
                        var arrow = document.createElement("i")
                        startbtn.setAttribute("id", "btn")
                        startbtn.setAttribute("type", "button")
                        startbtn.setAttribute("value", "Start")
                        arrow.setAttribute("class", "fa fa-chevron-left")
                        totalprogram.appendChild(startbtn)
                        totalprogram.appendChild(arrow)
                        programdiv.appendChild(totalprogram)
                        container.appendChild(programdiv)

                        /*third div*/
                        var start = document.querySelector('#btn')
                        start.addEventListener("click", function () {
                            container.innerHTML = ""
                            var startprogdiv = document.createElement("div")
                            startprogdiv.setAttribute("id", "startprogram")
                            startprogdiv.setAttribute("class", "startprogram")
                            for (var i = 0; i < dataBase["" + totaltarget].length - 1; i++) {
                                var div = document.createElement("div")
                                div.setAttribute("id", "slide-" + parseInt(i + 1))
                                var img = document.createElement("img")
                                img.src = dataBase["" + totaltarget][i].src
                                div.appendChild(img)
                                var name = document.createElement("h3")
                                name.textContent = dataBase["" + totaltarget][i].h3
                                div.appendChild(name)
                                var count = document.createElement("h5")
                                count.textContent = dataBase["" + totaltarget][i].h5
                                div.appendChild(count)
                                icon(div)

                                startprogdiv.appendChild(div)
                                container.appendChild(startprogdiv)


                                /** SLIDE SHOW **/
                                var getdiv = document.getElementById('slide-' + parseInt(i + 1))
                                arr.push(getdiv)
                            }
                            var numberOfImg = arr.length;
                            console.log(numberOfImg)
                            var nextdiv = document.getElementById('next')
                            console.log(nextdiv)
                            nextdiv.addEventListener('click', function () {
                                var divcontainer = document.querySelector(arr[numberOfImg].value)
                                console.log(divcontainer)
                                divcontainer.remove()
                                // var numberOfImg = arr.length;
                                ++imgNumber;
                                divcontainer.appendChild(arr[imgNumber])
                                console.log("nextdiv")
                                
                                // divcontainer.innerHTML = " "


                                
                               
                                // })

                                var help = document.querySelector("#help")
                                var helpinfo = document.querySelector("#helpinfo")
                                help.addEventListener("click", function () {
                                    if (helpinfo.style.display == "inline") {
                                        helpinfo.style.display = "none"
                                    }
                                    else {
                                        helpinfo.style.display = "inline"
                                    }
                                })
                            })

                        })

                    })

                })
                levels()
                container.appendChild(scrolldiv)
            })


            /*not readable as div is local ask nasser about it*/
            function icon(div) {
                var arrow = document.createElement("i")
                arrow.setAttribute("id", "next")
                arrow.setAttribute("class", "fa fa-chevron-right")
                div.appendChild(arrow)
                var sound = document.createElement("i")
                sound.setAttribute("id", "sound")
                sound.setAttribute("class", "fa fa-volume-up")
                div.appendChild(sound)
                var help = document.createElement("i")
                help.setAttribute("id", "help")
                help.setAttribute("class", "fa fa-info")
                div.appendChild(help)
                var img2 = document.createElement("img")
                img2.setAttribute("id", "helpinfo")
                img2.src = dataBase["armeasy"][0].helpinfo
                div.appendChild(img2)

            }


            function levels() {
                arrow.setAttribute("id", "backarrow")
                arrow.setAttribute("class", "fa fa-chevron-left")
                scrolldiv.appendChild(arrow)
                optionesdiv.setAttribute("id", "optiones")
                for (var i = 0; i < 3; i++) {
                    var div = document.createElement("div")
                    var text = document.createElement("h4")
                    text.textContent = level[i]
                    var r = document.createElement("i")
                    r.setAttribute("id", level[i])
                    r.setAttribute("class", "fa fa-chevron-right")
                    div.appendChild(text)
                    div.append(r)
                    optionesdiv.appendChild(div)
                }
                scrolldiv.appendChild(optionesdiv)
                console.log(scrolldiv)
            }

        }
    }
})



// window.addEventListener("load",function(){
//     var help = document.querySelector("#help")
//     var helpinfo = document.querySelector("#helpinfo")
//      console.log(help)
//     help.addEventListener("click",function(){
//         if(helpinfo.style.display=="inline")
//         {
//             helpinfo.style.display= "none"
//         }
//         else{
//             helpinfo.style.display= "inline"
//         }
//     }) 
// })







// arrow.addEventListener("click",function(){
// 	choice.style.opacity = "0";
// 	choice.style.left = '-950px';
// 	scroll.style.display='inline'

// 	setTimeout(function () {
// 		choice.style.display = "none"
// 		scroll.style.opacity = '1';
// 		scroll.style.right = '0px'

// 	}, 500);

// 	console.log(event.target)
// })

var timeLeft = 30;
var elem = document.getElementById('time');
var btn = document.querySelector("#btn")

/** SLIDESHOW **/
// var imgNumber = 0;
// var path = ["slide-1","","coco/4.jpg"];
var numberOfImg = arr.length;

function nextImage() {
    ++imgNumber;
    // circular slide show
    //   if (imgNumber > (numberOfImg - 1)) {
    //     imgNumber = 0;
    //   }
    document.getElementById("startprogram").div = arr[imgNumber];
    return false;
}







// btn.addEventListener('click',function(){
//     var timerId = setInterval(countdown, 1000);
//     function countdown() {
//       if (timeLeft == 0) {
//         clearTimeout(timerId);
//       } else {
//         elem.innerHTML ="00:" + timeLeft ;
//         timeLeft--;
//       }
//     }

// })
