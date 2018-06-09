
var clickCounter = {
    clicks: 0,
    increment: function() {
        this.clicks++;
        document.getElementById("display").innerHTML = this.clicks;
    }
}

$('#photoCat').click(function() {
    clickCounter.increment();
  });