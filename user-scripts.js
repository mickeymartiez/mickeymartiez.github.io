  pushNotify = (msg = "Welcome") => {
      new Notify({
        status: 'success',
        title: 'Message ',
        text: msg,
        effect: 'fade',
        speed: 300,
        customClass: 'noti',
        customIcon: null,
        showIcon: true,
        showCloseButton: true,
        autoclose: false,
        autotimeout: 4000,
        gap: 20,
        distance: 20,
        type: 1,
        position: 'bottom left'
      })
    }


      getGameFromMenu = () => {

      const games = document.querySelectorAll('.inactive');
      const random = Math.floor(Math.random() * (games.length));
      console.log(random);
      return (games[random]);

    }

    var popup = function() {
        const game = getGameFromMenu();
      var lastShownTs = +localStorage.getItem("lastShown");
      var currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      var lastShown = null;
      if (!isNaN(lastShownTs)) {
        lastShown = new Date(lastShownTs);
        lastShown.setHours(0, 0, 0, 0);
      }
      if (lastShown == null || lastShown.getTime() != currentDate.getTime()) {
        const myTimeout = setTimeout(pushNotify('Try something new? 👉' + '<a href=' + game.href + '>' + game.innerText + '</a>'), 10000);
        localStorage.setItem("lastShown", currentDate.getTime());
      }
    }
    
    
    
    popup();
    pushNotify("Click to the button to Play Game");


    
    
    ((function() {
      var callbacks = [],
        timeLimit = 50,
        open = false;
      setInterval(loop, 1);
      return {
        addListener: function(fn) {
          callbacks.push(fn);
        },
        cancleListenr: function(fn) {
          callbacks = callbacks.filter(function(v) {
            return v !== fn;
          });
        }
      }

      function loop() {
        var startTime = new Date();
        debugger;
        if (new Date() - startTime > timeLimit) {
          if (!open) {
            callbacks.forEach(function(fn) {
              fn.call(null);
            });
          }
          open = true;
          
          window.stop();
          
          alert('Warning!!');
          document.body.innerHTML = "";
        } else {
          open = false;
          
        }
      }
    })()).addListener(function() {
      window.location.reload();
    });	
    
    function removeIframe() {
    // get the iframe element
    var iframe = document.getElementById("frame");

    // remove the iframe from its parent element
    iframe.parentNode.removeChild(iframe);

    // show the button
    document.getElementById("generateButton").style.display = "block";
}

    
    
    function generateIframe() {
    // create the iframe element
    var iframe = document.createElement("iframe");

    // set the attributes for the iframe
    iframe.setAttribute("id", "frame");
    iframe.setAttribute("class", "lazy");
    iframe.setAttribute("webkitallowfullscreen", "true");
    iframe.setAttribute("mozallowfullscreen", "true");
    iframe.setAttribute("allow", "autoplay");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute("allowvr", "");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("frameBorder", "0");

    // set the src attribute to the desired URL (hidden)
    iframe.setAttribute("src", "");

    // append the iframe to the container div
    document.getElementById("frameContainer").appendChild(iframe);

    // hide the button
    document.getElementById("generateButton").style.display = "none";

    // show the iframe after a short delay (to allow for transition effect)
    setTimeout(function() {
        iframe.setAttribute("src", "https://mickeymartiez.github.io/");
        iframe.classList.add("show");
    }, 100);
}



pushNotify("Success! Please wait 1-5s to Play");
  generateIframe();
document.addEventListener("keydown", function(event) {
  // this function will be called when a key is pressed
  if (event.key === "k") {
    generateIframe();
  }
});

function generateButton() {
  var button = document.createElement("button"); // create a new button element
  button.id = "generateButton"; // set the ID of the button element
  button.textContent = "Start"; // set the text content of the button element
  return button; // return the button element
}
