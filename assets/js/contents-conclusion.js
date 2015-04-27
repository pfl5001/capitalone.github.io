$.getJSON('config/section-conclusion.json', function (data) {
    document.getElementById("contents-about").innerHTML = getAboutSection(JSON.stringify(data));
});

function getAboutSection(data) {
    var html = "";
    html += "<div class='container'>";
    var json = JSON.parse(data);
    for (var subsection in json) {
        var header = json[subsection].header;
        var text = json[subsection].text;
        html += "<div class='row'>";
        html += "<div class='col-md-6 col-md-offset-3'>";
        html += "<h1 class='section-header'>" + header + "</h1>";
        html += "<hr>";
        html += "</div>";
        html += "</div>";
        html += "<div class='row'>";
        html += "<div class='col-md-8 col-md-offset-2'>";
        html += "<p class='conclusion-text'>" + text + "</p>";
        html += "</div>";
        html += "</div>";
    }
    html += "</div>";
    return html;
}