"use strict";
Belly.defaults.loader = {
    target: "",
    append: !1,
    body: "",
    colour: "grey-blue",
    delay: 0,
    size: "normal",
    type: "spinner"
}, Belly.loader = function(e) {
    var o = e.target,
        d = void 0 === o ? Belly.defaults.loader.target : o,
        t = e.append,
        a = void 0 === t ? Belly.defaults.loader.append : t,
        l = e.body,
        n = void 0 === l ? Belly.defaults.loader.body : l,
        r = e.colour,
        c = void 0 === r ? Belly.defaults.loader.colour : r,
        i = e.delay,
        s = void 0 === i ? Belly.defaults.loader.delay : i,
        m = e.size,
        u = void 0 === m ? Belly.defaults.loader.size : m,
        p = e.type,
        v = void 0 === p ? Belly.defaults.loader.type : p,
        k = void 0,
        y = void 0,
        R = {
            add: function() {
                setTimeout(function() {
                    y = Belly.dom.element(d), Belly.is.element(y) && (Belly.has.class(y, "is-loading") || (Belly.classes.add(y, "is-loading"), a ? y.appendChild(k) : (y.style.display = "none", y.parentNode.insertBefore(k, y))))
                }, 1e3 * s)
            },
            changeBody: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                if (Belly.is.element(k)) {
                    var o = k.querySelector(".mod-loader-body");
                    if (Belly.is.element(o) && Belly.is.string(e)) {
                        for (var d = o.childNodes, t = 0, a = d.length; t < a; t++) d[t].parentNode.removeChild(d[t]);
                        o.appendChild(document.createTextNode(e))
                    }
                }
            },
            remove: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                y = Belly.dom.element(d), Belly.is.element(y) && setTimeout(function() {
                    Belly.classes.remove(y, "is-loading"), y.style.display = Belly.is.string(e) ? e : "", Belly.is.element(k) && Belly.dom.remove(k)
                }, 0)
            }
        };
    return k = function() {
        var e = document.createElement("div"),
            o = document.createElement("div"),
            d = document.createElement("div"),
            t = 1;
        switch (e.className = "mod-loader _mod-type-" + v, "grey-blue" !== c && (e.className += " _mod-colour-" + c), "normal" !== u && (e.className += " _mod-size-" + u), o.className = "mod-loader-inner", d.className = "mod-loader-element", v) {
            case "dots":
                t = 3;
                break;
            case "pulse":
                t = 2
        }
        for (var a = 1, l = t; a <= l; a++) {
            var r = document.createElement("div");
            r.className = "mod-loader-part-" + a, d.appendChild(r)
        }
        if (o.appendChild(d), n.length > 0) {
            var i = document.createElement("div");
            i.className = "mod-loader-body", i.appendChild(document.createTextNode(n)), o.appendChild(i)
        }
        return e.appendChild(o), e
    }(), R.add(), {
        loader: k,
        changeBody: R.changeBody,
        add: R.add,
        remove: R.remove
    }
};