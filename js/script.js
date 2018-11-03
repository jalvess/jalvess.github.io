function setTitleShadow() {
    $(document).mousemove(function(t) {
        var o = t.screenX,
            e = t.screenY,
            n = $("h1").offset().left,
            i = $("h1").width() / 2,
            a = e < $("h1").height() ? 5 : 8;
        if (o < n) var l = -8;
        else o >= n && o <= i ? l = 2 : o > i && o > n && (l = 8);
        $("h1").css("filter", "drop-shadow(" + l + "px " + a + "px 1px rgb(24, 16, 112))")
    })
}

function setMenuMobile() {
    var t = $("#dropdown ul:nth-of-type(2) li:first-child");
    if ($("#dropdown ul:nth-of-type(1) li:first-child a").attr("tabIndex", 2), window.innerWidth < 691) {
        $("#dropdown ul:nth-of-type(3) li:first-child a").attr("tabIndex", 3);
        var o = $(t).attr("tabIndex");
        $(t).attr("tabIndex", 4), $("#dropdown ul:nth-of-type(2) li:not(:first-child) a").each(function(t) { $(this).attr("tabIndex", parseInt(o) + parseInt(t) + 1) });
        $("#dropdown ul:nth-of-type(2) li:last-child a").attr("tabIndex");
        $(t).attr("role", "button"), $(t).on("click keypress", function() { $("main").toggleClass("extent-menu"), $(t).toggleClass("active"), $("#dropdown ul:nth-of-type(2) li:not(:first-child)").toggleClass("visible") })
    } else {
        $(t).off("click").attr("tabIndex", 3).removeAttr("role");
        o = $(t).attr("tabIndex");
        $("#dropdown ul:nth-of-type(2) li:not(:first-child) a").each(function(t) { $(this).attr("tabIndex", parseInt(o) + parseInt(t) + 1) })
    }
    $(t).on("focus focusout", function() { $(this).toggleClass("focused") })
}

function updateBgSection(t) { $(".bg-section:not(" + t + ")").addClass("invisible"), $(t).removeClass("invisible") }
$(document).ready(function() {
    setTitleShadow(), setMenuMobile(), $("#btn-voltar").click(function() { $("body,html").animate({ scrollTop: 0 }, 2e3) }), $("#dropdown li a").on("focus focusout", function() { $(this).parent().toggleClass("focused") }), $("#galeria li img").after(function() { return "<span class='legenda'>" + $(this).attr("alt") + "</span>" }), $("#dropdown li a").click(function(t) {
        t.preventDefault();
        var o = this.hash,
            e = $(o).offset().top;
        $("html,body").animate({ scrollTop: e + 1 }, 1e3)
    }), $(window).scroll(function() {
        var //t = $("#fotografia").offset().top,
            o = $("#contato").offset().top,
            //e = $("#leitura").offset().top,
            //n = $("#cinema").offset().top,
            i = $("html").scrollTop();
        i < o ? updateBgSection("#bg-sobre") : updateBgSection("#bg-contato")
    })
}), $(window).resize(function() { setMenuMobile() });