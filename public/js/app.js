// The $ means jQuery.  Before, we had to type jQuery(), but now we type $().
// $("body").css({ background: "red" });
// $("body").css({ background: "blue" });
// $("body").css({ background: "purple" });
// jQuery("body").css({ background: "red" });

// $("body") is a selector function.  It could select whatever you want.  You can select tags, classes, and ids.
// The first function of jQuery is the selector.  Then from there, we have methods that we are chaining to it.  You can chain multiple methods to it.
// $("body").css({ background: "red" });
// $(".box1").css({ background: "green" });
// $("p").css({ background: "yellow" });
// $("#last-p").css({ background: "orange" });
// You can also do the above like this below.
// $("#last p").css({ background: "orange" });
// $("#last").css({ background: "black", padding: "20px" });
// $(".box1").css({ background: "blue" });
// $("#last p").css({ background: "orange" });
// $("#last p")
//   .css({ background: "orange" })
//   .delay(2500)
//   .fadeIn("slow", function () {
//     console.log("Hey, the last paragraph just finished loading!");
//   });
// $("#last p")
//   .css({ background: "orange" })
//   .fadeOut("slow", function () {
//     console.log("Hey, the last paragraph just disappeared!");
//   });
// $("#last p")
//   .css({ background: "orange" })
//   .delay(2500)
//   .fadeIn("slow", function () {
//     console.log("Hey, the last paragraph just finished loading!");
//   });
// $("#last p")
//   .css({ background: "orange" })
//   .fadeOut("slow", function () {
//     console.log("Hey, the last paragraph just disappeared!");
//   })
//   .delay(2500)
//   .fadeIn("slow", function () {
//     console.log("Hey, the last paragraph just finished loading!");
//   });

// When using jQuery, it's necessary to put all of your other jQuery functions inside of something like this, so that these functions won't execute before all of the DOM elements have finished loading.
// This is the old way of doing it.
// $(document).ready(function () {});
// The new way of doing it is by specifying jQuery by using $ and putting all of your code inside of an anonymous function.
// $(function () {});

// This will run after all of the DOM elements are loaded.  If you don't use this, then the browser will start to run all of your jQuery functions as soon as they load, without caring about whether all of the DOM elements finished loading.
// $(function () {
//   $("#last p")
//     .css({ background: "orange" })
//     .fadeOut("slow", function () {
//       console.log("Hey, the last paragraph just disappeared!");
//     })
//     .delay(2500)
//     .fadeIn("slow", function () {
//       console.log("Hey, the last paragraph just finished loading!");
//     });
// });

// New lesson starts here.

// $(function () {
//   $(window).resize(function () {
//     console.log($(window).width());
//   });
// });

// $(function () {
//   $(window).resize(function () {
//     if ($(window).width() > 1000) {
//       $("body").css({
//         background: "red"
//       });
//     } else if ($(window).width() > 700) {
//       $("body").css({
//         background: "blue"
//       });
//     } else {
//       $("body").css({
//         background: "yellow"
//       });
//     }
//   });
// });

// $(function () {
//   $(window).resize(function () {
//     if ($(window).height() > 700) {
//       $("body").css({
//         background: "red"
//       });
//     } else if ($(window).height() > 300) {
//       $("body").css({
//         background: "blue"
//       });
//     } else {
//       $("body").css({
//         background: "yellow"
//       });
//     }
//   });
// });

// New lesson starts here.

// $(function () {
//   $(".box1").on("click", function () {
//     $("body").css({
//       background: "red"
//     });
//   });
// });

// $(function () {
// If you are using React, Angular, or something like these frameworks, you will need to do the above with the code below.
// This is very useful for a situation where there's an element that has not been created yet.
// What you are saying here is whenever you click on the document, find an element with the class .box1, and if you click on it, run this function.
//   $(document).on("click", ".box1", function () {
//     $("body").css({
//       background: "red"
//     });
//   });

// You can also attach a bunch of event handlers together using an object.
//   $(".box2").on({
//     click: function () {
//       $("body").css({
//         background: "purple"
//       });
//     },
//     mouseenter: function () {
//       $("body").css({
//         background: "yellow"
//       });
//     },
//     mouseleave: function () {
//       $("body").css({
//         background: "red"
//       });
//     }
//   });
// });

// New lesson starts here.

// $(function () {
// You can pass down the e for event, instead of event.
//   $(".box1 a").on("click", function (event) {
//     event.preventDefault();
//     $(".box3").css({
//       background: "purple"
//     });
//   });

//   $(".box2").on("click", function () {
//     $(".box3").css({
//       background: "red"
//     });
//   });

//   $(".button").on("click", function (event) {
// This will prevent the parent element from also getting triggered when you click on the child element.  When you click on a child element the parent element normally also gets triggered.
//     event.stopPropagation();
//     $(".box3").css({
//       background: "purple"
//     });
//   });

//   $(".button").on("click", function (event) {
//     event.stopPropagation();
// This gives us everything about the DOM element that triggered the event.  In this case, it will print out <div class="button">BUTTON</div> to the console.
//     console.log(event.target);
//     $(".box3").css({
//       background: "purple"
//     });
//   });

//   $(".button").on("click", function (event) {
//     event.stopPropagation();
//     console.log(event.target);
// This will only tell us what DOM element triggered the event.  In this case, it will print out DIV to the console.  We will show how this is useful in the example below.
//     console.log(event.target.nodeName);
//     $(".box3").css({
//       background: "purple"
//     });
//   });

//   $(".button").on("click", function (event) {
//     event.stopPropagation();
//     console.log(event.target);

// If the element is a DIV, do this.
// if (event.target.nodeName == "DIV") {
//   console.log(event.target.nodeName);
//   $(".box3").css({
//     background: "purple"
//   });
// }
// If the element is not a DIV, do this.
//     else {
//       console.log(event.target.nodeName);
//       $(".box3").css({
//         background: "yellow"
//       });
//     }
//   });
// });

// New lesson starts here.

// $(function () {
// Whenever there is a change in the .select-options select element, there will be an alert displaying the message "Changed value!" that pops up.  You can also use the .change() for input fields.
// $(".select-options").change(function () {
//   alert("Changed value!");
// });

// After you type something into the input element and then click outside of it, the text inside of the .box1 element will change.
//   $(".my-name").change(function (event) {
// This will change the text inside of the .box1 element into whatever is inside of the input element.  The event.target is the input element and the event.target.value is its value, which is the text that is typed inside.
//     $(".box1").html(event.target.value);
//   });

//   $(".my-name").change(function (event) {
// You can also insert HTML elements with the .html().
// $(".box1").html("<h1>" + event.target.value + "</h1>");
//   });

//   $(".my-name")
//     .change(function (event) {
//       $(".box1").html("<h1>" + event.target.value + "</h1>");
//     })
//     .focusin(function () {
//       $(".box2").css({
//         background: "blue"
//       });
//     });
//   $(".my-name")
//     .change(function (event) {
//       $(".box1").html("<h1>" + event.target.value + "</h1>");
//     })
//     .focusin(function () {
//       $(".box2").css({
//         background: "blue"
//       });
//     })
//     .focusout(function () {
//       $(".box2").css({
//         background: "#ccc"
//       });
//     });
// });

// Test your skills in events exercise.  The index2.html and main2.scss files deal with this.

// $(function () {
//   $(".my-button-1").click(function () {
//     console.log("Joe Santos Garcia");
//   });

//   $(".my-button-2").mouseover(function () {
//     var i = 1;

//     while (i < 26) {
//       console.log(i);

//       i++;
//     }
//   });

//   $(".my-button")
//     .mouseover(function () {
//       $(".square-to-enter").css({
//         background: "red"
//       });
//     })
//     .mouseout(function () {
//       $(".square-to-enter").css({
//         background: "yellow"
//       });
//     });
// });

// Joe's answers to the test your skills in events exercise.  The index3.html and main3.scss files deal with this.

// $(function () {
//   $(".button1").on("click", function () {
//     console.log("Joe Santos Garcia");
//   });

//   $(".button2").hover(function () {
//     for (i = 1; i < 26; i++) {
//       console.log(i);
//     }
//   });

//   $(".square").mouseenter(function () {
//     $(this).css({
//       background: "red"
//     });
//   });
// });

// New lesson starts here.

// $(function () {
// $(".button").addClass("active");

// $("p").addClass("active");

// console.log($("p").hasClass("active"));

// console.log($("div").hasClass("active"));

// $("div").addClass("active");

// if ($("div").hasClass("active")) {
//   console.log("This div element has been activated!");
// } else {
//   console.log("Sorry, this div element is waiting to be activated.");
// }

// $("div").first().removeClass("active");

//   $(".button").on("click", function () {
//     $("div").toggleClass("active");
//   });
// });

// New lesson starts here.

// $(function () {
// $(".button").on("click", function () {
//   $(".box1").clone().appendTo("body");
// });

// $(".button").on("click", function () {
// This is good for cases where you have a form and want to ask the user whether the user wants to add another cell phone number or another landline number.
//     $(".box1:first").clone().appendTo("body");
//   });
// });

// New lesson starts here.

// $(function () {
// $(".button").on("click", function () {
//   $(".box1").wrap("<div class='active'></div");
//   $(".box1").unwrap(".active");
// });
//   $(".button").on("click", function () {
//     $(".box1").wrap("<div class='active'></div>");
//   });
//   $(".box3").on("click", function () {
//     $(".box1").unwrap(".active");
//   });

//   $(".button").on("click", function () {
//     $(".box1").wrapInner("<div class='active'></div>");
//   });
// });

// New lesson starts here.

// $(function () {
// $(".button").on("click", function () {
//   $(".box1").append('<div class="active">Active Box</div>');
// });
// $(".button").on("click", function () {
// .appendTo() is similar to .append(), but you select the things in reverse.
//   $("<div class='active'>Active Box</div>").appendTo(".box1");
// });
// $(".button").on("click", function () {
// When you use .html() without any arguments, it will return the HTML elements inside of the first element in the set of matched elements.
//   console.log($(".box1").html());
// });
// $(".button").on("click", function () {
// When you use .html() with an HTML string as the argument, it will replace the HTML inside each of the matched elements with this HTML.
// $(".box1").html("<div class='active'>New Box1 Content</div>");
// });

// $(".button").on("click", function () {
// This works just like .append(), but it inserts the HTML at the beginning of the element.
// $(".box1").prepend("<div class='active'>New Box1 Content</div>");
// });

// $(".button").on("click", function () {
// This works just like .appendTo(), but it inserts the HTML at the beginning of the element.
// $('<div class="active">New Box1 Content</div>').prependTo(".box1");
// });

// $(".button").on("click", function () {
// When you use .text() without any arguments, it will return the text inside each of the matched elements.
// console.log($(".first-p").text());
// console.log($(".first-p:first").text());
// });

// $(".button").on("click", function () {
// When you use .text() with a string as the argument, it will replace the text inside each of the matched elements with this text.
// In this case, we are only replacing the text inside the first element with the .first-p class.
// $(".first-p:first").text("The new Joe is here!");
// });
// });

// New lesson starts here.

// $(function () {
// $(".button").on("click", function () {
//   $(".first-p:first").after("<p>NEW MESSAGE!</p>");
// });
// $(".button").on("click", function () {
//   $(".first-p:first").before("<p>NEW MESSAGE!</p>");
// });
// $(".button").on("click", function () {
// This is similar to .prependTo().
//   $("<p>NEW MESSAGE!</p>").insertBefore(".first-p:first");
// });

// $(".button").on("click", function () {
// This is similar to .appendTo().
//     $("<p>NEW MESSAGE!</p>").insertAfter(".first-p:first");
//   });
// });

// New lesson starts here.

// $(function () {
//   $(".button").on("click", function () {
// $(".box1").remove();
// $("div").remove(".box3");
//     $("div").remove(".box");
//   });
// });

// New lesson starts here.

// $(function () {
//   $(".button").on("click", function () {
// $("<div class='active'>NEW ACTIVE BOX!</div>").replaceAll(".box");
//     $(".box").replaceWith("<h2>New Heading!</h2>");
//   });
// });

// New lesson starts here.

// $(function () {
// $(".button").on("click", function () {
// The .attr() jQuery method is Joe's favorite because you can use it for many things.
// console.log($(".box3 img").attr("alt"));
// console.log($(".box3 img").attr("data-imgName"));
//   $(".box3 img").attr({
//     alt: "Vegeta New Pic",
//     class: "vegeta active img"
//   });
// });

// $(".box3").on("click", function () {
//   $(".box3 img").removeAttr("alt");
// });

// $(".button").on("click", function () {
// The .val() jQuery method is another one of Joe's favorite methods.
// console.log($(".box1 input").val());
// Sometimes you want to be very specific with your elements, so you can use a class, or something else, if you have multiple input elements, or other elements.
//     console.log($(".box1 input.username").val());
//   });
// });

// New lesson starts here.

// $(function () {
//   console.log($(".box2").width());
// The style property method that you will use the most is .css().
// if ($(".box2").width() > 200) {
//   $(".box2").css({
//     background: "red"
//   });
// }

// $(".box2").css({
// You cannot use a dash, like in CSS, where this would be padding-left.  The reason for this is that the dash is minus in JavaScript.
// You also need a string value in order for this to work, because this is an object.
// All of the properties in here are being inserted inline.  The styles are not applied with an external CSS file, instead they are applied directly on the elements.
//     paddingLeft: "50px"
//   });
// });

// Test your skills in manipulating exercise.  The index5.html and main5.scss files deal with this.

// $(function () {
//   $(".add-class-active-box1-btn").on("click", function () {
// $(".box1").addClass("active");
//     $(".box1").css({
//       display: "block"
//     });
//   });

//   $(".box2-input-button").on("click", function () {
//     $(".box2-input-character-amount-display").text(
//       $(".box2-input-el").val().length
//     );
//   });
// });

// Joe's answers to the test your skills in manipulating exercise.  The index5.html and main5.scss files deal with this.

$(function () {
  $(".btn1").on("click", function () {
    $(".box1").addClass("active");
  });

  $(".box2 button").on("click", function () {
    // You did not have to specify input[type='text'] and could have just wrote input, because there is only one input element in .box2, but Joe felt like being fancy.
    var value = $(".box2 input[type='text']").val();
    $(".box2").append(
      "<span>This field has " + value.length + " characters!</span>"
    );
  });
});
