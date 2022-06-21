/*! Storymaps-MapJournal - v1.10.2 - 2017-05-25, 05:54:16 PM - This application is released under the Apache License V2.0 by Esri http://www.esri.com/ - https://github.com/Esri/map-journal-storytelling-template-js */
define("lib-build/css", [], function() {
    if (typeof window == "undefined")
        return {
            load: function(e, t, n) {
                n()
            }
        };
    var e = document.getElementsByTagName("head")[0],
        t = window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)/) || 0,
        n = !1,
        r = !0;
    t[1] || t[7] ? n = parseInt(t[1]) < 6 || parseInt(t[7]) <= 9 : t[2] ? r = !1 : t[4] && (n = parseInt(t[4]) < 18);
    var i = {};
    i.pluginBuilder = "./css-builder";
    var s,
        o = function() {
            s = document.createElement("style"),
            e.appendChild(s)
        },
        u = function(e, t) {
            o();
            var n = s.styleSheet || s.sheet;
            if (n && n.addImport)
                n.addImport(e),
                s.onload = t;
            else {
                s.textContent = '@import "' + e + '";';
                var r = setInterval(function() {
                    try {
                        s.sheet.cssRules,
                        clearInterval(r),
                        t()
                    } catch (e) {}
                }, 10)
            }
        },
        a = function(t, n) {
            var i = document.createElement("link");
            i.type = "text/css",
            i.rel = "stylesheet";
            if (r)
                i.onload = function() {
                    i.onload = function() {},
                    setTimeout(n, 7)
                };
            else
                var s = setInterval(function() {
                    for (var e = 0; e < document.styleSheets.length; e++) {
                        var t = document.styleSheets[e];
                        if (t.href == i.href)
                            return clearInterval(s), n()
                    }
                }, 10);
            i.href = t,
            e.appendChild(i)
        };
    return i.normalize = function(e, t) {
        return e.substr(e.length - 4, 4) == ".css" && (e = e.substr(0, e.length - 4)), t(e)
    }, i.load = function(e, t, r, i) {
        (n ? u : a)(t.toUrl(e + ".css"), r)
    }, i
}),
define("lib-build/css!lib-app/bootstrap/css/bootstrap.min", [], function() {}),
define("lib-build/css!storymaps/common/ui/Modal", [], function() {}),
define("lib-build/css!storymaps/common/Core", [], function() {}),
!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function y(e) {
        var t = e.length,
            n = p.type(e);
        return "function" === n || p.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function x(e, t, n) {
        if (p.isFunction(t))
            return p.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return p.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (S.test(t))
                return p.filter(t, e, n);
            t = p.filter(t, e)
        }
        return p.grep(e, function(e) {
            return p.inArray(e, t) >= 0 !== n
        })
    }
    function O(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function D(e) {
        var t = _[e] = {};
        return p.each(e.match(M) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    function H() {
        N.addEventListener ? (N.removeEventListener("DOMContentLoaded", B, !1), e.removeEventListener("load", B, !1)) : (N.detachEvent("onreadystatechange", B), e.detachEvent("onload", B))
    }
    function B() {
        (N.addEventListener || "load" === event.type || "complete" === N.readyState) && (H(), p.ready())
    }
    function R(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(q, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : I.test(n) ? p.parseJSON(n) : n
                } catch (i) {}
                p.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function U(e) {
        var t;
        for (t in e)
            if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function z(e, t, r, i) {
        if (p.acceptData(e)) {
            var s,
                o,
                u = p.expando,
                a = e.nodeType,
                f = a ? p.cache : e,
                l = a ? e[u] : e[u] && u;
            if (l && f[l] && (i || f[l].data) || void 0 !== r || "string" != typeof t)
                return l || (l = a ? e[u] = n.pop() || p.guid++ : u), f[l] || (f[l] = a ? {} : {
                    toJSON: p.noop
                }), ("object" == typeof t || "function" == typeof t) && (i ? f[l] = p.extend(f[l], t) : f[l].data = p.extend(f[l].data, t)), o = f[l], i || (o.data || (o.data = {}), o = o.data), void 0 !== r && (o[p.camelCase(t)] = r), "string" == typeof t ? (s = o[t], null == s && (s = o[p.camelCase(t)])) : s = o, s
        }
    }
    function W(e, t, n) {
        if (p.acceptData(e)) {
            var r,
                i,
                s = e.nodeType,
                o = s ? p.cache : e,
                u = s ? e[p.expando] : p.expando;
            if (o[u]) {
                if (t && (r = n ? o[u] : o[u].data)) {
                    p.isArray(t) ? t = t.concat(p.map(t, p.camelCase)) : t in r ? t = [t] : (t = p.camelCase(t), t = t in r ? [t] : t.split(" ")),
                    i = t.length;
                    while (i--)
                        delete r[t[i]];
                    if (n ? !U(r) : !p.isEmptyObject(r))
                        return
                }
                (n || (delete o[u].data, U(o[u]))) && (s ? p.cleanData([e], !0) : c.deleteExpando || o != o.window ? delete o[u] : o[u] = null)
            }
        }
    }
    function tt() {
        return !0
    }
    function nt() {
        return !1
    }
    function rt() {
        try {
            return N.activeElement
        } catch (e) {}
    }
    function it(e) {
        var t = st.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length)
                n.createElement(t.pop());
        return n
    }
    function Et(e, t) {
        var n,
            r,
            i = 0,
            s = typeof e.getElementsByTagName !== j ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== j ? e.querySelectorAll(t || "*") : void 0;
        if (!s)
            for (s = [], n = e.childNodes || e; null != (r = n[i]); i++)
                !t || p.nodeName(r, t) ? s.push(r) : p.merge(s, Et(r, t));
        return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], s) : s
    }
    function St(e) {
        K.test(e.type) && (e.defaultChecked = e.checked)
    }
    function xt(e, t) {
        return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function Tt(e) {
        return e.type = (null !== p.find.attr(e, "type")) + "/" + e.type, e
    }
    function Nt(e) {
        var t = mt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }
    function Ct(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)
            p._data(n, "globalEval", !t || p._data(t[r], "globalEval"))
    }
    function kt(e, t) {
        if (1 === t.nodeType && p.hasData(e)) {
            var n,
                r,
                i,
                s = p._data(e),
                o = p._data(t, s),
                u = s.events;
            if (u) {
                delete o.handle,
                o.events = {};
                for (n in u)
                    for (r = 0, i = u[n].length; i > r; r++)
                        p.event.add(t, n, u[n][r])
            }
            o.data && (o.data = p.extend({}, o.data))
        }
    }
    function Lt(e, t) {
        var n,
            r,
            i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !c.noCloneEvent && t[p.expando]) {
                i = p._data(t);
                for (r in i.events)
                    p.removeEvent(t, r, i.handle);
                t.removeAttribute(p.expando)
            }
            "script" === n && t.text !== e.text ? (Tt(t).text = e.text, Nt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), c.html5Clone && e.innerHTML && !p.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && K.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function Mt(t, n) {
        var r = p(n.createElement(t)).appendTo(n.body),
            i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : p.css(r[0], "display");
        return r.detach(), i
    }
    function _t(e) {
        var t = N,
            n = Ot[e];
        return n || (n = Mt(e, t), "none" !== n && n || (At = (At || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (At[0].contentWindow || At[0].contentDocument).document, t.write(), t.close(), n = Mt(e, t), At.detach()), Ot[e] = n), n
    }
    function Ft(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n)
                    return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function $t(e, t) {
        if (t in e)
            return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = Vt.length;
        while (i--)
            if (t = Vt[i] + n, t in e)
                return t;
        return r
    }
    function Jt(e, t) {
        for (var n, r, i, s = [], o = 0, u = e.length; u > o; o++)
            r = e[o],
            r.style && (s[o] = p._data(r, "olddisplay"), n = r.style.display, t ? (s[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && $(r) && (s[o] = p._data(r, "olddisplay", _t(r.nodeName)))) : s[o] || (i = $(r), (n && "none" !== n || !i) && p._data(r, "olddisplay", i ? n : p.css(r, "display"))));
        for (o = 0; u > o; o++)
            r = e[o],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? s[o] || "" : "none"));
        return e
    }
    function Kt(e, t, n) {
        var r = Ut.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function Qt(e, t, n, r, i) {
        for (var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > s; s += 2)
            "margin" === n && (o += p.css(e, n + V[s], !0, i)),
            r ? ("content" === n && (o -= p.css(e, "padding" + V[s], !0, i)), "margin" !== n && (o -= p.css(e, "border" + V[s] + "Width", !0, i))) : (o += p.css(e, "padding" + V[s], !0, i), "padding" !== n && (o += p.css(e, "border" + V[s] + "Width", !0, i)));
        return o
    }
    function Gt(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = Ht(e),
            o = c.boxSizing() && "border-box" === p.css(e, "boxSizing", !1, s);
        if (0 >= i || null == i) {
            if (i = Bt(e, t, s), (0 > i || null == i) && (i = e.style[t]), Pt.test(i))
                return i;
            r = o && (c.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + Qt(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }
    function Yt(e, t, n, r, i) {
        return new Yt.prototype.init(e, t, n, r, i)
    }
    function un() {
        return setTimeout(function() {
            Zt = void 0
        }), Zt = p.now()
    }
    function an(e, t) {
        var n,
            r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            n = V[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }
    function fn(e, t, n) {
        for (var r, i = (on[t] || []).concat(on["*"]), s = 0, o = i.length; o > s; s++)
            if (r = i[s].call(n, t, e))
                return r
    }
    function ln(e, t, n) {
        var r,
            i,
            s,
            o,
            u,
            a,
            f,
            l,
            h = this,
            d = {},
            v = e.style,
            m = e.nodeType && $(e),
            g = p._data(e, "fxshow");
        n.queue || (u = p._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
            u.unqueued || a()
        }), u.unqueued++, h.always(function() {
            h.always(function() {
                u.unqueued--,
                p.queue(e, "fx").length || u.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [v.overflow, v.overflowX, v.overflowY], f = p.css(e, "display"), l = _t(e.nodeName), "none" === f && (f = l), "inline" === f && "none" === p.css(e, "float") && (c.inlineBlockNeedsLayout && "inline" !== l ? v.zoom = 1 : v.display = "inline-block")),
        n.overflow && (v.overflow = "hidden", c.shrinkWrapBlocks() || h.always(function() {
            v.overflow = n.overflow[0],
            v.overflowX = n.overflow[1],
            v.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], tn.exec(i)) {
                if (delete t[r], s = s || "toggle" === i, i === (m ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r])
                        continue;
                    m = !0
                }
                d[r] = g && g[r] || p.style(e, r)
            }
        if (!p.isEmptyObject(d)) {
            g ? "hidden" in g && (m = g.hidden) : g = p._data(e, "fxshow", {}),
            s && (g.hidden = !m),
            m ? p(e).show() : h.done(function() {
                p(e).hide()
            }),
            h.done(function() {
                var t;
                p._removeData(e, "fxshow");
                for (t in d)
                    p.style(e, t, d[t])
            });
            for (r in d)
                o = fn(m ? g[r] : 0, r, h),
                r in g || (g[r] = o.start, m && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function cn(e, t) {
        var n,
            r,
            i,
            s,
            o;
        for (n in e)
            if (r = p.camelCase(n), i = t[r], s = e[n], p.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = p.cssHooks[r], o && "expand" in o) {
                s = o.expand(s),
                delete e[r];
                for (n in s)
                    n in e || (e[n] = s[n], t[n] = i)
            } else
                t[r] = i
    }
    function hn(e, t, n) {
        var r,
            i,
            s = 0,
            o = sn.length,
            u = p.Deferred().always(function() {
                delete a.elem
            }),
            a = function() {
                if (i)
                    return !1;
                for (var t = Zt || un(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length; a > o; o++)
                    f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), 1 > s && a ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: p.extend({}, t),
                opts: p.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Zt || un(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = p.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i)
                        return this;
                    for (i = !0; r > n; n++)
                        f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        for (cn(l, f.opts.specialEasing); o > s; s++)
            if (r = sn[s].call(f, e, l, f.opts))
                return r;
        return p.map(l, fn, f), p.isFunction(f.opts.start) && f.opts.start.call(e, f), p.fx.timer(p.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    function In(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r,
                i = 0,
                s = t.toLowerCase().match(M) || [];
            if (p.isFunction(n))
                while (r = s[i++])
                    "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function qn(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, p.each(e[u] || [], function(e, u) {
                var f = u(t, n, r);
                return "string" != typeof f || s || i[f] ? s ? !(a = f) : void 0 : (t.dataTypes.unshift(f), o(f), !1)
            }), a
        }
        var i = {},
            s = e === Bn;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }
    function Rn(e, t) {
        var n,
            r,
            i = p.ajaxSettings.flatOptions || {};
        for (r in t)
            void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && p.extend(!0, e, n), e
    }
    function Un(e, t, n) {
        var r,
            i,
            s,
            o,
            u = e.contents,
            a = e.dataTypes;
        while ("*" === a[0])
            a.shift(),
            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in u)
                if (u[o] && u[o].test(i)) {
                    a.unshift(o);
                    break
                }
        if (a[0] in n)
            s = a[0];
        else {
            for (o in n) {
                if (!a[0] || e.converters[o + " " + a[0]]) {
                    s = o;
                    break
                }
                r || (r = o)
            }
            s = s || r
        }
        return s ? (s !== a[0] && a.unshift(s), n[s]) : void 0
    }
    function zn(e, t, n, r) {
        var i,
            s,
            o,
            u,
            a,
            f = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters)
                f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s)
            if (e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift())
                if ("*" === s)
                    s = a;
                else if ("*" !== a && a !== s) {
                    if (o = f[a + " " + s] || f["* " + s], !o)
                        for (i in f)
                            if (u = i.split(" "), u[1] === s && (o = f[a + " " + u[0]] || f["* " + u[0]])) {
                                o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                                break
                            }
                    if (o !== !0)
                        if (o && e["throws"])
                            t = o(t);
                        else
                            try {
                                t = o(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: o ? c : "No conversion from " + a + " to " + s
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function Kn(e, t, n, r) {
        var i;
        if (p.isArray(t))
            p.each(t, function(t, i) {
                n || Xn.test(e) ? r(e, i) : Kn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== p.type(t))
            r(e, t);
        else
            for (i in t)
                Kn(e + "[" + i + "]", t[i], n, r)
    }
    function Zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function er() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function sr(e) {
        return p.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var n = [],
        r = n.slice,
        i = n.concat,
        s = n.push,
        o = n.indexOf,
        u = {},
        a = u.toString,
        f = u.hasOwnProperty,
        l = "".trim,
        c = {},
        h = "1.11.0",
        p = function(e, t) {
            return new p.fn.init(e, t)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        v = /^-ms-/,
        m = /-([\da-z])/gi,
        g = function(e, t) {
            return t.toUpperCase()
        };
    p.fn = p.prototype = {
        jquery: h,
        constructor: p,
        selector: "",
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : r.call(this)
        },
        pushStack: function(e) {
            var t = p.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return p.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(p.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    },
    p.extend = p.fn.extend = function() {
        var e,
            t,
            n,
            r,
            i,
            s,
            o = arguments[0] || {},
            u = 1,
            a = arguments.length,
            f = !1;
        for ("boolean" == typeof o && (f = o, o = arguments[u] || {}, u++), "object" == typeof o || p.isFunction(o) || (o = {}), u === a && (o = this, u--); a > u; u++)
            if (null != (i = arguments[u]))
                for (r in i)
                    e = o[r],
                    n = i[r],
                    o !== n && (f && n && (p.isPlainObject(n) || (t = p.isArray(n))) ? (t ? (t = !1, s = e && p.isArray(e) ? e : []) : s = e && p.isPlainObject(e) ? e : {}, o[r] = p.extend(f, s, n)) : void 0 !== n && (o[r] = n));
        return o
    },
    p.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === p.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === p.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e))
                return !1;
            try {
                if (e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (c.ownLast)
                for (t in e)
                    return f.call(e, t);
            for (t in e)
                ;
            return void 0 === t || f.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[a.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && p.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(v, "ms-").replace(m, g)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r,
                i = 0,
                s = e.length,
                o = y(e);
            if (n) {
                if (o) {
                    for (; s > i; i++)
                        if (r = t.apply(e[i], n), r === !1)
                            break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1)
                            break
            } else if (o) {
                for (; s > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1)
                        break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1)
                        break;
            return e
        },
        trim: l && !l.call("﻿ ") ? function(e) {
            return null == e ? "" : l.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (y(Object(e)) ? p.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (o)
                    return o.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            var n = +t.length,
                r = 0,
                i = e.length;
            while (n > r)
                e[i++] = t[r++];
            if (n !== n)
                while (void 0 !== t[r])
                    e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], s = 0, o = e.length, u = !n; o > s; s++)
                r = !t(e[s], s),
                r !== u && i.push(e[s]);
            return i
        },
        map: function(e, t, n) {
            var r,
                s = 0,
                o = e.length,
                u = y(e),
                a = [];
            if (u)
                for (; o > s; s++)
                    r = t(e[s], s, n),
                    null != r && a.push(r);
            else
                for (s in e)
                    r = t(e[s], s, n),
                    null != r && a.push(r);
            return i.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n,
                i,
                s;
            return "string" == typeof t && (s = e[t], t = e, e = s), p.isFunction(e) ? (n = r.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(r.call(arguments)))
            }, i.guid = e.guid = e.guid || p.guid++, i) : void 0
        },
        now: function() {
            return +(new Date)
        },
        support: c
    }),
    p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var b = function(e) {
        function rt(e, t, r, i) {
            var s,
                o,
                u,
                a,
                f,
                h,
                v,
                m,
                w,
                E;
            if ((t ? t.ownerDocument || t : b) !== c && l(t), t = t || c, r = r || [], !e || "string" != typeof e)
                return r;
            if (1 !== (a = t.nodeType) && 9 !== a)
                return [];
            if (p && !i) {
                if (s = G.exec(e))
                    if (u = s[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(u), !o || !o.parentNode)
                                return r;
                            if (o.id === u)
                                return r.push(o), r
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && g(t, o) && o.id === u)
                            return r.push(o), r
                    } else {
                        if (s[2])
                            return _.apply(r, t.getElementsByTagName(e)), r;
                        if ((u = s[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return _.apply(r, t.getElementsByClassName(u)), r
                    }
                if (n.qsa && (!d || !d.test(e))) {
                    if (m = v = y, w = t, E = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        h = dt(e),
                        (v = t.getAttribute("id")) ? m = v.replace(Z, "\\$&") : t.setAttribute("id", m),
                        m = "[id='" + m + "'] ",
                        f = h.length;
                        while (f--)
                            h[f] = m + vt(h[f]);
                        w = Y.test(e) && ht(t.parentNode) || t,
                        E = h.join(",")
                    }
                    if (E)
                        try {
                            return _.apply(r, w.querySelectorAll(E)), r
                        } catch (S) {} finally {
                            v || t.removeAttribute("id")
                        }
                }
            }
            return xt(e.replace(R, "$1"), t, r, i)
        }
        function it() {
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }
        function st(e) {
            return e[y] = !0, e
        }
        function ot(e) {
            var t = c.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ut(e, t) {
            var n = e.split("|"),
                i = e.length;
            while (i--)
                r.attrHandle[n[i]] = t
        }
        function at(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || k) - (~e.sourceIndex || k);
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function lt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ct(e) {
            return st(function(t) {
                return t = +t, st(function(n, r) {
                    var i,
                        s = e([], n.length, t),
                        o = s.length;
                    while (o--)
                        n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ht(e) {
            return e && typeof e.getElementsByTagName !== C && e
        }
        function pt() {}
        function dt(e, t) {
            var n,
                i,
                s,
                o,
                u,
                a,
                f,
                l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            u = e,
            a = [],
            f = r.preFilter;
            while (u) {
                (!n || (i = U.exec(u))) && (i && (u = u.slice(i[0].length) || u), a.push(s = [])),
                n = !1,
                (i = z.exec(u)) && (n = i.shift(), s.push({
                    value: n,
                    type: i[0].replace(R, " ")
                }), u = u.slice(n.length));
                for (o in r.filter)
                    !(i = $[o].exec(u)) || f[o] && !(i = f[o](i)) || (n = i.shift(), s.push({
                        value: n,
                        type: o,
                        matches: i
                    }), u = u.slice(n.length));
                if (!n)
                    break
            }
            return t ? u.length : u ? rt.error(e) : x(e, a).slice(0)
        }
        function vt(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)
                r += e[t].value;
            return r
        }
        function mt(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                s = E++;
            return t.first ? function(t, n, s) {
                while (t = t[r])
                    if (1 === t.nodeType || i)
                        return e(t, n, s)
            } : function(t, n, o) {
                var u,
                    a,
                    f = [w, s];
                if (o) {
                    while (t = t[r])
                        if ((1 === t.nodeType || i) && e(t, n, o))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || i) {
                            if (a = t[y] || (t[y] = {}), (u = a[r]) && u[0] === w && u[1] === s)
                                return f[2] = u[2];
                            if (a[r] = f, f[2] = e(t, n, o))
                                return !0
                        }
            }
        }
        function gt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            } : e[0]
        }
        function yt(e, t, n, r, i) {
            for (var s, o = [], u = 0, a = e.length, f = null != t; a > u; u++)
                (s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
            return o
        }
        function bt(e, t, n, r, i, s) {
            return r && !r[y] && (r = bt(r)), i && !i[y] && (i = bt(i, s)), st(function(s, o, u, a) {
                var f,
                    l,
                    c,
                    h = [],
                    p = [],
                    d = o.length,
                    v = s || St(t || "*", u.nodeType ? [u] : u, []),
                    m = !e || !s && t ? v : yt(v, h, e, u, a),
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                if (n && n(m, g, u, a), r) {
                    f = yt(g, p),
                    r(f, [], u, a),
                    l = f.length;
                    while (l--)
                        (c = f[l]) && (g[p[l]] = !(m[p[l]] = c))
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [],
                            l = g.length;
                            while (l--)
                                (c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)
                            (c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else
                    g = yt(g === o ? g.splice(d, g.length) : g),
                    i ? i(null, o, g, a) : _.apply(o, g)
            })
        }
        function wt(e) {
            for (var t, n, i, s = e.length, o = r.relative[e[0].type], a = o || r.relative[" "], f = o ? 1 : 0, l = mt(function(e) {
                    return e === t
                }, a, !0), c = mt(function(e) {
                    return P.call(t, e) > -1
                }, a, !0), h = [function(e, n, r) {
                    return !o && (r || n !== u) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                }]; s > f; f++)
                if (n = r.relative[e[f].type])
                    h = [mt(gt(h), n)];
                else {
                    if (n = r.filter[e[f].type].apply(null, e[f].matches), n[y]) {
                        for (i = ++f; s > i; i++)
                            if (r.relative[e[i].type])
                                break;
                        return bt(f > 1 && gt(h), f > 1 && vt(e.slice(0, f - 1).concat({
                            value: " " === e[f - 2].type ? "*" : ""
                        })).replace(R, "$1"), n, i > f && wt(e.slice(f, i)), s > i && wt(e = e.slice(i)), s > i && vt(e))
                    }
                    h.push(n)
                }
            return gt(h)
        }
        function Et(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                s = function(s, o, a, f, l) {
                    var h,
                        p,
                        d,
                        v = 0,
                        m = "0",
                        g = s && [],
                        y = [],
                        b = u,
                        E = s || i && r.find.TAG("*", l),
                        S = w += null == b ? 1 : Math.random() || .1,
                        x = E.length;
                    for (l && (u = o !== c && o); m !== x && null != (h = E[m]); m++) {
                        if (i && h) {
                            p = 0;
                            while (d = e[p++])
                                if (d(h, o, a)) {
                                    f.push(h);
                                    break
                                }
                            l && (w = S)
                        }
                        n && ((h = !d && h) && v--, s && g.push(h))
                    }
                    if (v += m, n && m !== v) {
                        p = 0;
                        while (d = t[p++])
                            d(g, y, o, a);
                        if (s) {
                            if (v > 0)
                                while (m--)
                                    g[m] || y[m] || (y[m] = O.call(f));
                            y = yt(y)
                        }
                        _.apply(f, y),
                        l && !s && y.length > 0 && v + t.length > 1 && rt.uniqueSort(f)
                    }
                    return l && (w = S, u = b), g
                };
            return n ? st(s) : s
        }
        function St(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++)
                rt(e, t[r], n);
            return n
        }
        function xt(e, t, i, s) {
            var u,
                a,
                f,
                l,
                c,
                h = dt(e);
            if (!s && 1 === h.length) {
                if (a = h[0] = h[0].slice(0), a.length > 2 && "ID" === (f = a[0]).type && n.getById && 9 === t.nodeType && p && r.relative[a[1].type]) {
                    if (t = (r.find.ID(f.matches[0].replace(et, tt), t) || [])[0], !t)
                        return i;
                    e = e.slice(a.shift().value.length)
                }
                u = $.needsContext.test(e) ? 0 : a.length;
                while (u--) {
                    if (f = a[u], r.relative[l = f.type])
                        break;
                    if ((c = r.find[l]) && (s = c(f.matches[0].replace(et, tt), Y.test(a[0].type) && ht(t.parentNode) || t))) {
                        if (a.splice(u, 1), e = s.length && vt(a), !e)
                            return _.apply(i, s), i;
                        break
                    }
                }
            }
            return o(e, h)(s, t, !p, i, Y.test(e) && ht(t.parentNode) || t), i
        }
        var t,
            n,
            r,
            i,
            s,
            o,
            u,
            a,
            f,
            l,
            c,
            h,
            p,
            d,
            v,
            m,
            g,
            y = "sizzle" + -(new Date),
            b = e.document,
            w = 0,
            E = 0,
            S = it(),
            x = it(),
            T = it(),
            N = function(e, t) {
                return e === t && (f = !0), 0
            },
            C = "undefined",
            k = 1 << 31,
            L = {}.hasOwnProperty,
            A = [],
            O = A.pop,
            M = A.push,
            _ = A.push,
            D = A.slice,
            P = A.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e)
                        return t;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            B = "[\\x20\\t\\r\\n\\f]",
            j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            F = j.replace("w", "w#"),
            I = "\\[" + B + "*(" + j + ")" + B + "*(?:([*^$|!~]?=)" + B + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + F + ")|)|)" + B + "*\\]",
            q = ":(" + j + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)",
            R = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
            U = new RegExp("^" + B + "*," + B + "*"),
            z = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
            W = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
            X = new RegExp(q),
            V = new RegExp("^" + F + "$"),
            $ = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
            },
            J = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Y = /[+~]/,
            Z = /'|\\/g,
            et = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
            tt = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            _.apply(A = D.call(b.childNodes), b.childNodes),
            A[b.childNodes.length].nodeType
        } catch (nt) {
            _ = {
                apply: A.length ? function(e, t) {
                    M.apply(e, D.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        n = rt.support = {},
        s = rt.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        },
        l = rt.setDocument = function(e) {
            var t,
                i = e ? e.ownerDocument || e : b,
                o = i.defaultView;
            return i !== c && 9 === i.nodeType && i.documentElement ? (c = i, h = i.documentElement, p = !s(i), o && o !== o.top && (o.addEventListener ? o.addEventListener("unload", function() {
                l()
            }, !1) : o.attachEvent && o.attachEvent("onunload", function() {
                l()
            })), n.attributes = ot(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ot(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(i.getElementsByClassName) && ot(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), n.getById = ot(function(e) {
                return h.appendChild(e).id = y, !i.getElementsByName || !i.getElementsByName(y).length
            }), n.getById ? (r.find.ID = function(e, t) {
                if (typeof t.getElementById !== C && p) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, r.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete r.find.ID, r.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== C && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== C ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n,
                    r = [],
                    i = 0,
                    s = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = s[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return s
            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== C && p ? t.getElementsByClassName(e) : void 0
            }, v = [], d = [], (n.qsa = Q.test(i.querySelectorAll)) && (ot(function(e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>",
                e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + B + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || d.push("\\[" + B + "*(?:value|" + H + ")"),
                e.querySelectorAll(":checked").length || d.push(":checked")
            }), ot(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && d.push("name" + B + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                d.push(",.*:")
            })), (n.matchesSelector = Q.test(m = h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function(e) {
                n.disconnectedMatch = m.call(e, "div"),
                m.call(e, "[s!='']:x"),
                v.push("!=", q)
            }), d = d.length && new RegExp(d.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), g = t || Q.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !!r && 1 === r.nodeType && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }, N = t ? function(e, t) {
                if (e === t)
                    return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === i || e.ownerDocument === b && g(b, e) ? -1 : t === i || t.ownerDocument === b && g(b, t) ? 1 : a ? P.call(a, e) - P.call(a, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t)
                    return f = !0, 0;
                var n,
                    r = 0,
                    s = e.parentNode,
                    o = t.parentNode,
                    u = [e],
                    l = [t];
                if (!s || !o)
                    return e === i ? -1 : t === i ? 1 : s ? -1 : o ? 1 : a ? P.call(a, e) - P.call(a, t) : 0;
                if (s === o)
                    return at(e, t);
                n = e;
                while (n = n.parentNode)
                    u.unshift(n);
                n = t;
                while (n = n.parentNode)
                    l.unshift(n);
                while (u[r] === l[r])
                    r++;
                return r ? at(u[r], l[r]) : u[r] === b ? -1 : l[r] === b ? 1 : 0
            }, i) : c
        },
        rt.matches = function(e, t) {
            return rt(e, null, null, t)
        },
        rt.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== c && l(e), t = t.replace(W, "='$1']"), !(!n.matchesSelector || !p || v && v.test(t) || d && d.test(t)))
                try {
                    var r = m.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (i) {}
            return rt(t, c, null, [e]).length > 0
        },
        rt.contains = function(e, t) {
            return (e.ownerDocument || e) !== c && l(e), g(e, t)
        },
        rt.attr = function(e, t) {
            (e.ownerDocument || e) !== c && l(e);
            var i = r.attrHandle[t.toLowerCase()],
                s = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !p) : void 0;
            return void 0 !== s ? s : n.attributes || !p ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
        },
        rt.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        rt.uniqueSort = function(e) {
            var t,
                r = [],
                i = 0,
                s = 0;
            if (f = !n.detectDuplicates, a = !n.sortStable && e.slice(0), e.sort(N), f) {
                while (t = e[s++])
                    t === e[s] && (i = r.push(s));
                while (i--)
                    e.splice(r[i], 1)
            }
            return a = null, e
        },
        i = rt.getText = function(e) {
            var t,
                n = "",
                r = 0,
                s = e.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += i(e)
                } else if (3 === s || 4 === s)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += i(t);
            return n
        },
        r = rt.selectors = {
            cacheLength: 50,
            createPseudo: st,
            match: $,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || rt.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && rt.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t,
                        n = !e[5] && e[2];
                    return $.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && X.test(n) && (t = dt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(et, tt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = S[e + " "];
                    return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && S(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== C && e.getAttribute("class") || "")
                        })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = rt.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var s = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        u = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, a) {
                        var f,
                            l,
                            c,
                            h,
                            p,
                            d,
                            v = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = u && t.nodeName.toLowerCase(),
                            b = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])
                                        if (u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType)
                                            return !1;
                                    d = v = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [o ? m.firstChild : m.lastChild], o && b) {
                                l = m[y] || (m[y] = {}),
                                f = l[e] || [],
                                p = f[0] === w && f[1],
                                h = f[0] === w && f[2],
                                c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if (1 === c.nodeType && ++h && c === t) {
                                        l[e] = [w, p, h];
                                        break
                                    }
                            } else if (b && (f = (t[y] || (t[y] = {}))[e]) && f[0] === w)
                                h = f[1];
                            else
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if ((u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++h && (b && ((c[y] || (c[y] = {}))[e] = [w, h]), c === t))
                                        break;
                            return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n,
                        i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || rt.error("unsupported pseudo: " + e);
                    return i[y] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
                        var r,
                            s = i(e, t),
                            o = s.length;
                        while (o--)
                            r = P.call(e, s[o]),
                            e[r] = !(n[r] = s[o])
                    }) : function(e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: st(function(e) {
                    var t = [],
                        n = [],
                        r = o(e.replace(R, "$1"));
                    return r[y] ? st(function(e, t, n, i) {
                        var s,
                            o = r(e, null, i, []),
                            u = e.length;
                        while (u--)
                            (s = o[u]) && (e[u] = !(t[u] = s))
                    }) : function(e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: st(function(e) {
                    return function(t) {
                        return rt(e, t).length > 0
                    }
                }),
                contains: st(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }),
                lang: st(function(e) {
                    return V.test(e || "") || rt.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(), function(t) {
                        var n;
                        do if (n = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                            return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return K.test(e.nodeName)
                },
                input: function(e) {
                    return J.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ct(function() {
                    return [0]
                }),
                last: ct(function(e, t) {
                    return [t - 1]
                }),
                eq: ct(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: ct(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ct(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ct(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;)
                        e.push(r);
                    return e
                }),
                gt: ct(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;)
                        e.push(r);
                    return e
                })
            }
        },
        r.pseudos.nth = r.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = ft(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = lt(t);
        return pt.prototype = r.filters = r.pseudos, r.setFilters = new pt, o = rt.compile = function(e, t) {
            var n,
                r = [],
                i = [],
                s = T[e + " "];
            if (!s) {
                t || (t = dt(e)),
                n = t.length;
                while (n--)
                    s = wt(t[n]),
                    s[y] ? r.push(s) : i.push(s);
                s = T(e, Et(i, r))
            }
            return s
        }, n.sortStable = y.split("").sort(N).join("") === y, n.detectDuplicates = !!f, l(), n.sortDetached = ot(function(e) {
            return 1 & e.compareDocumentPosition(c.createElement("div"))
        }), ot(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ut("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ot(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ut("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), ot(function(e) {
            return null == e.getAttribute("disabled")
        }) || ut(H, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), rt
    }(e);
    p.find = b,
    p.expr = b.selectors,
    p.expr[":"] = p.expr.pseudos,
    p.unique = b.uniqueSort,
    p.text = b.getText,
    p.isXMLDoc = b.isXML,
    p.contains = b.contains;
    var w = p.expr.match.needsContext,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^.[^:#\[\.,]*$/;
    p.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? p.find.matchesSelector(r, e) ? [r] : [] : p.find.matches(e, p.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    },
    p.fn.extend({
        find: function(e) {
            var t,
                n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e)
                return this.pushStack(p(e).filter(function() {
                    for (t = 0; i > t; t++)
                        if (p.contains(r[t], this))
                            return !0
                }));
            for (t = 0; i > t; t++)
                p.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? p.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(x(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(x(this, e || [], !0))
        },
        is: function(e) {
            return !!x(this, "string" == typeof e && w.test(e) ? p(e) : e || [], !1).length
        }
    });
    var T,
        N = e.document,
        C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = p.fn.init = function(e, t) {
            var n,
                r;
            if (!e)
                return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : C.exec(e), !n || !n[1] && t)
                    return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : N, !0)), E.test(n[1]) && p.isPlainObject(t))
                        for (n in t)
                            p.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = N.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2])
                        return T.find(e);
                    this.length = 1,
                    this[0] = r
                }
                return this.context = N, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? "undefined" != typeof T.ready ? T.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
        };
    k.prototype = p.fn,
    T = p(N);
    var L = /^(?:parents|prev(?:Until|All))/,
        A = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    p.extend({
        dir: function(e, t, n) {
            var r = [],
                i = e[t];
            while (i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !p(i).is(n)))
                1 === i.nodeType && r.push(i),
                i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    p.fn.extend({
        has: function(e) {
            var t,
                n = p(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (p.contains(this, n[t]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, s = [], o = w.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && p.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? p.unique(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? p.inArray(this[0], p(e)) : p.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(p.unique(p.merge(this.get(), p(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    p.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return p.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return p.dir(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return p.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return p.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return p.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return p.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return p.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return p.sibling(e.firstChild)
        },
        contents: function(e) {
            return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : p.merge([], e.childNodes)
        }
    }, function(e, t) {
        p.fn[e] = function(n, r) {
            var i = p.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = p.filter(r, i)), this.length > 1 && (A[e] || (i = p.unique(i)), L.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var M = /\S+/g,
        _ = {};
    p.Callbacks = function(e) {
        e = "string" == typeof e ? _[e] || D(e) : p.extend({}, e);
        var t,
            n,
            r,
            i,
            s,
            o,
            u = [],
            a = !e.once && [],
            f = function(c) {
                for (n = e.memory && c, r = !0, s = o || 0, o = 0, i = u.length, t = !0; u && i > s; s++)
                    if (u[s].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1,
                u && (a ? a.length && f(a.shift()) : n ? u = [] : l.disable())
            },
            l = {
                add: function() {
                    if (u) {
                        var r = u.length;
                        !function s(t) {
                            p.each(t, function(t, n) {
                                var r = p.type(n);
                                "function" === r ? e.unique && l.has(n) || u.push(n) : n && n.length && "string" !== r && s(n)
                            })
                        }(arguments),
                        t ? i = u.length : n && (o = r, f(n))
                    }
                    return this
                },
                remove: function() {
                    return u && p.each(arguments, function(e, n) {
                        var r;
                        while ((r = p.inArray(n, u, r)) > -1)
                            u.splice(r, 1),
                            t && (i >= r && i--, s >= r && s--)
                    }), this
                },
                has: function(e) {
                    return e ? p.inArray(e, u) > -1 : !!u && !!u.length
                },
                empty: function() {
                    return u = [], i = 0, this
                },
                disable: function() {
                    return u = a = n = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return a = void 0, n || l.disable(), this
                },
                locked: function() {
                    return !a
                },
                fireWith: function(e, n) {
                    return !u || r && !a || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? a.push(n) : f(n)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return l
    },
    p.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", p.Callbacks("once memory"), "resolved"], ["reject", "fail", p.Callbacks("once memory"), "rejected"], ["notify", "progress", p.Callbacks("memory")]],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return p.Deferred(function(n) {
                            p.each(t, function(t, s) {
                                var o = p.isFunction(e[t]) && e[t];
                                i[s[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && p.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? p.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, p.each(t, function(e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add,
                u && o.add(function() {
                    n = u
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                },
                i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = r.call(arguments),
                i = n.length,
                s = 1 !== i || e && p.isFunction(e.promise) ? i : 0,
                o = 1 === s ? e : p.Deferred(),
                u = function(e, t, n) {
                    return function(i) {
                        t[e] = this,
                        n[e] = arguments.length > 1 ? r.call(arguments) : i,
                        n === a ? o.notifyWith(t, n) : --s || o.resolveWith(t, n)
                    }
                },
                a,
                f,
                l;
            if (i > 1)
                for (a = new Array(i), f = new Array(i), l = new Array(i); i > t; t++)
                    n[t] && p.isFunction(n[t].promise) ? n[t].promise().done(u(t, l, n)).fail(o.reject).progress(u(t, f, a)) : --s;
            return s || o.resolveWith(l, n), o.promise()
        }
    });
    var P;
    p.fn.ready = function(e) {
        return p.ready.promise().done(e), this
    },
    p.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? p.readyWait++ : p.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--p.readyWait : !p.isReady) {
                if (!N.body)
                    return setTimeout(p.ready);
                p.isReady = !0,
                e !== !0 && --p.readyWait > 0 || (P.resolveWith(N, [p]), p.fn.trigger && p(N).trigger("ready").off("ready"))
            }
        }
    }),
    p.ready.promise = function(t) {
        if (!P)
            if (P = p.Deferred(), "complete" === N.readyState)
                setTimeout(p.ready);
            else if (N.addEventListener)
                N.addEventListener("DOMContentLoaded", B, !1),
                e.addEventListener("load", B, !1);
            else {
                N.attachEvent("onreadystatechange", B),
                e.attachEvent("onload", B);
                var n = !1;
                try {
                    n = null == e.frameElement && N.documentElement
                } catch (r) {}
                n && n.doScroll && !function i() {
                    if (!p.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        H(),
                        p.ready()
                    }
                }()
            }
        return P.promise(t)
    };
    var j = "undefined",
        F;
    for (F in p(c))
        break;
    c.ownLast = "0" !== F,
    c.inlineBlockNeedsLayout = !1,
    p(function() {
        var e,
            t,
            n = N.getElementsByTagName("body")[0];
        n && (e = N.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = N.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom !== j && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (c.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)), n.removeChild(e), e = t = null)
    }),
    function() {
        var e = N.createElement("div");
        if (null == c.deleteExpando) {
            c.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                c.deleteExpando = !1
            }
        }
        e = null
    }(),
    p.acceptData = function(e) {
        var t = p.noData[(e.nodeName + " ").toLowerCase()],
            n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    };
    var I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        q = /([A-Z])/g;
    p.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando], !!e && !U(e)
        },
        data: function(e, t, n) {
            return z(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return z(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        }
    }),
    p.fn.extend({
        data: function(e, t) {
            var n,
                r,
                i,
                s = this[0],
                o = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (i = p.data(s), 1 === s.nodeType && !p._data(s, "parsedAttrs"))) {
                    n = o.length;
                    while (n--)
                        r = o[n].name,
                        0 === r.indexOf("data-") && (r = p.camelCase(r.slice(5)), R(s, r, i[r]));
                    p._data(s, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                p.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                p.data(this, e, t)
            }) : s ? R(s, e, p.data(s, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                p.removeData(this, e)
            })
        }
    }),
    p.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = p._data(e, t), n && (!r || p.isArray(n) ? r = p._data(e, t, p.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = p.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = p._queueHooks(e, t),
                o = function() {
                    p.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--),
            i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)),
            !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return p._data(e, n) || p._data(e, n, {
                    empty: p.Callbacks("once memory").add(function() {
                        p._removeData(e, t + "queue"),
                        p._removeData(e, n)
                    })
                })
        }
    }),
    p.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? p.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = p.queue(this, e, t);
                p._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                p.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n,
                r = 1,
                i = p.Deferred(),
                s = this,
                o = this.length,
                u = function() {
                    --r || i.resolveWith(s, [s])
                };
            "string" != typeof e && (t = e, e = void 0),
            e = e || "fx";
            while (o--)
                n = p._data(s[o], e + "queueHooks"),
                n && n.empty && (r++, n.empty.add(u));
            return u(), i.promise(t)
        }
    });
    var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        V = ["Top", "Right", "Bottom", "Left"],
        $ = function(e, t) {
            return e = t || e, "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
        },
        J = p.access = function(e, t, n, r, i, s, o) {
            var u = 0,
                a = e.length,
                f = null == n;
            if ("object" === p.type(n)) {
                i = !0;
                for (u in n)
                    p.access(e, t, u, n[u], !0, s, o)
            } else if (void 0 !== r && (i = !0, p.isFunction(r) || (o = !0), f && (o ? (t.call(e, r), t = null) : (f = t, t = function(e, t, n) {
                return f.call(p(e), n)
            })), t))
                for (; a > u; u++)
                    t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)));
            return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
        },
        K = /^(?:checkbox|radio)$/i;
    !function() {
        var e = N.createDocumentFragment(),
            t = N.createElement("div"),
            n = N.createElement("input");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", c.leadingWhitespace = 3 === t.firstChild.nodeType, c.tbody = !t.getElementsByTagName("tbody").length, c.htmlSerialize = !!t.getElementsByTagName("link").length, c.html5Clone = "<:nav></:nav>" !== N.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), c.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", c.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", c.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, c.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
            c.noCloneEvent = !1
        }), t.cloneNode(!0).click()), null == c.deleteExpando) {
            c.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                c.deleteExpando = !1
            }
        }
        e = t = n = null
    }(),
    function() {
        var t,
            n,
            r = N.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + t,
            (c[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), c[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Q = /^(?:input|select|textarea)$/i,
        G = /^key/,
        Y = /^(?:mouse|contextmenu)|click/,
        Z = /^(?:focusinfocus|focusoutblur)$/,
        et = /^([^.]*)(?:\.(.+)|)$/;
    p.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var s,
                o,
                u,
                a,
                f,
                l,
                c,
                h,
                d,
                v,
                m,
                g = p._data(e);
            if (g) {
                n.handler && (a = n, n = a.handler, i = a.selector),
                n.guid || (n.guid = p.guid++),
                (o = g.events) || (o = g.events = {}),
                (l = g.handle) || (l = g.handle = function(e) {
                    return typeof p === j || e && p.event.triggered === e.type ? void 0 : p.event.dispatch.apply(l.elem, arguments)
                }, l.elem = e),
                t = (t || "").match(M) || [""],
                u = t.length;
                while (u--)
                    s = et.exec(t[u]) || [],
                    d = m = s[1],
                    v = (s[2] || "").split(".").sort(),
                    d && (f = p.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = p.event.special[d] || {}, c = p.extend({
                        type: d,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && p.expr.match.needsContext.test(i),
                        namespace: v.join(".")
                    }, a), (h = o[d]) || (h = o[d] = [], h.delegateCount = 0, f.setup && f.setup.call(e, r, v, l) !== !1 || (e.addEventListener ? e.addEventListener(d, l, !1) : e.attachEvent && e.attachEvent("on" + d, l))), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) : h.push(c), p.event.global[d] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var s,
                o,
                u,
                a,
                f,
                l,
                c,
                h,
                d,
                v,
                m,
                g = p.hasData(e) && p._data(e);
            if (g && (l = g.events)) {
                t = (t || "").match(M) || [""],
                f = t.length;
                while (f--)
                    if (u = et.exec(t[f]) || [], d = m = u[1], v = (u[2] || "").split(".").sort(), d) {
                        c = p.event.special[d] || {},
                        d = (r ? c.delegateType : c.bindType) || d,
                        h = l[d] || [],
                        u = u[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = s = h.length;
                        while (s--)
                            o = h[s],
                            !i && m !== o.origType || n && n.guid !== o.guid || u && !u.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                        a && !h.length && (c.teardown && c.teardown.call(e, v, g.handle) !== !1 || p.removeEvent(e, d, g.handle), delete l[d])
                    } else
                        for (d in l)
                            p.event.remove(e, d + t[f], n, r, !0);
                p.isEmptyObject(l) && (delete g.handle, p._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var s,
                o,
                u,
                a,
                l,
                c,
                h,
                d = [r || N],
                v = f.call(t, "type") ? t.type : t,
                m = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (u = c = r = r || N, 3 !== r.nodeType && 8 !== r.nodeType && !Z.test(v + p.event.triggered) && (v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), o = v.indexOf(":") < 0 && "on" + v, t = t[p.expando] ? t : new p.Event(v, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : p.makeArray(n, [t]), l = p.event.special[v] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !p.isWindow(r)) {
                    for (a = l.delegateType || v, Z.test(a + v) || (u = u.parentNode); u; u = u.parentNode)
                        d.push(u),
                        c = u;
                    c === (r.ownerDocument || N) && d.push(c.defaultView || c.parentWindow || e)
                }
                h = 0;
                while ((u = d[h++]) && !t.isPropagationStopped())
                    t.type = h > 1 ? a : l.bindType || v,
                    s = (p._data(u, "events") || {})[t.type] && p._data(u, "handle"),
                    s && s.apply(u, n),
                    s = o && u[o],
                    s && s.apply && p.acceptData(u) && (t.result = s.apply(u, n), t.result === !1 && t.preventDefault());
                if (t.type = v, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && p.acceptData(r) && o && r[v] && !p.isWindow(r)) {
                    c = r[o],
                    c && (r[o] = null),
                    p.event.triggered = v;
                    try {
                        r[v]()
                    } catch (g) {}
                    p.event.triggered = void 0,
                    c && (r[o] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = p.event.fix(e);
            var t,
                n,
                i,
                s,
                o,
                u = [],
                a = r.call(arguments),
                f = (p._data(this, "events") || {})[e.type] || [],
                l = p.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                u = p.event.handlers.call(this, e, f),
                t = 0;
                while ((s = u[t++]) && !e.isPropagationStopped()) {
                    e.currentTarget = s.elem,
                    o = 0;
                    while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((p.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n,
                r,
                i,
                s,
                o = [],
                u = t.delegateCount,
                a = e.target;
            if (u && a.nodeType && (!e.button || "click" !== e.type))
                for (; a != this; a = a.parentNode || this)
                    if (1 === a.nodeType && (a.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], s = 0; u > s; s++)
                            r = t[s],
                            n = r.selector + " ",
                            void 0 === i[n] && (i[n] = r.needsContext ? p(n, this).index(a) >= 0 : p.find(n, this, null, [a]).length),
                            i[n] && i.push(r);
                        i.length && o.push({
                            elem: a,
                            handlers: i
                        })
                    }
            return u < t.length && o.push({
                elem: this,
                handlers: t.slice(u)
            }), o
        },
        fix: function(e) {
            if (e[p.expando])
                return e;
            var t,
                n,
                r,
                i = e.type,
                s = e,
                o = this.fixHooks[i];
            o || (this.fixHooks[i] = o = Y.test(i) ? this.mouseHooks : G.test(i) ? this.keyHooks : {}),
            r = o.props ? this.props.concat(o.props) : this.props,
            e = new p.Event(s),
            t = r.length;
            while (t--)
                n = r[t],
                e[n] = s[n];
            return e.target || (e.target = s.srcElement || N), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n,
                    r,
                    i,
                    s = t.button,
                    o = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || N, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== rt() && this.focus)
                        try {
                            return this.focus(), !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === rt() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return p.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return p.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = p.extend(new p.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? p.event.trigger(i, null, t) : p.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    p.removeEvent = N.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === j && (e[r] = null), e.detachEvent(r, n))
    },
    p.Event = function(e, t) {
        return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? tt : nt) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void (this[p.expando] = !0)) : new p.Event(e, t)
    },
    p.Event.prototype = {
        isDefaultPrevented: nt,
        isPropagationStopped: nt,
        isImmediatePropagationStopped: nt,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = tt,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = tt,
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = tt,
            this.stopPropagation()
        }
    },
    p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        p.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n,
                    r = this,
                    i = e.relatedTarget,
                    s = e.handleObj;
                return (!i || i !== r && !p.contains(r, i)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
            }
        }
    }),
    c.submitBubbles || (p.event.special.submit = {
        setup: function() {
            return p.nodeName(this, "form") ? !1 : void p.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = p.nodeName(t, "input") || p.nodeName(t, "button") ? t.form : void 0;
                n && !p._data(n, "submitBubbles") && (p.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), p._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && p.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return p.nodeName(this, "form") ? !1 : void p.event.remove(this, "._submit")
        }
    }),
    c.changeBubbles || (p.event.special.change = {
        setup: function() {
            return Q.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (p.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), p.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                p.event.simulate("change", this, e, !0)
            })), !1) : void p.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Q.test(t.nodeName) && !p._data(t, "changeBubbles") && (p.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || p.event.simulate("change", this.parentNode, e, !0)
                }), p._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return p.event.remove(this, "._change"), !Q.test(this.nodeName)
        }
    }),
    c.focusinBubbles || p.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            p.event.simulate(t, e.target, p.event.fix(e), !0)
        };
        p.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = p._data(r, t);
                i || r.addEventListener(e, n, !0),
                p._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = p._data(r, t) - 1;
                i ? p._data(r, t, i) : (r.removeEventListener(e, n, !0), p._removeData(r, t))
            }
        }
    }),
    p.fn.extend({
        on: function(e, t, n, r, i) {
            var s,
                o;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e)
                    this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1)
                r = nt;
            else if (!r)
                return this;
            return 1 === i && (o = r, r = function(e) {
                return p().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = p.guid++)), this.each(function() {
                p.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r,
                i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj, p(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = nt), this.each(function() {
                p.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                p.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? p.event.trigger(e, t, n, !0) : void 0
        }
    });
    var st = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ot = / jQuery\d+="(?:null|\d+)"/g,
        ut = new RegExp("<(?:" + st + ")[\\s/>]", "i"),
        at = /^\s+/,
        ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        lt = /<([\w:]+)/,
        ct = /<tbody/i,
        ht = /<|&#?\w+;/,
        pt = /<(?:script|style|link)/i,
        dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        vt = /^$|\/(?:java|ecma)script/i,
        mt = /^true\/(.*)/,
        gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        yt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: c.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        bt = it(N),
        wt = bt.appendChild(N.createElement("div"));
    yt.optgroup = yt.option,
    yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead,
    yt.th = yt.td,
    p.extend({
        clone: function(e, t, n) {
            var r,
                i,
                s,
                o,
                u,
                a = p.contains(e.ownerDocument, e);
            if (c.html5Clone || p.isXMLDoc(e) || !ut.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (wt.innerHTML = e.outerHTML, wt.removeChild(s = wt.firstChild)), !(c.noCloneEvent && c.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e)))
                for (r = Et(s), u = Et(e), o = 0; null != (i = u[o]); ++o)
                    r[o] && Lt(i, r[o]);
            if (t)
                if (n)
                    for (u = u || Et(e), r = r || Et(s), o = 0; null != (i = u[o]); o++)
                        kt(i, r[o]);
                else
                    kt(e, s);
            return r = Et(s, "script"), r.length > 0 && Ct(r, !a && Et(e, "script")), r = u = i = null, s
        },
        buildFragment: function(e, t, n, r) {
            for (var i, s, o, u, a, f, l, h = e.length, d = it(t), v = [], m = 0; h > m; m++)
                if (s = e[m], s || 0 === s)
                    if ("object" === p.type(s))
                        p.merge(v, s.nodeType ? [s] : s);
                    else if (ht.test(s)) {
                        u = u || d.appendChild(t.createElement("div")),
                        a = (lt.exec(s) || ["", ""])[1].toLowerCase(),
                        l = yt[a] || yt._default,
                        u.innerHTML = l[1] + s.replace(ft, "<$1></$2>") + l[2],
                        i = l[0];
                        while (i--)
                            u = u.lastChild;
                        if (!c.leadingWhitespace && at.test(s) && v.push(t.createTextNode(at.exec(s)[0])), !c.tbody) {
                            s = "table" !== a || ct.test(s) ? "<table>" !== l[1] || ct.test(s) ? 0 : u : u.firstChild,
                            i = s && s.childNodes.length;
                            while (i--)
                                p.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                        }
                        p.merge(v, u.childNodes),
                        u.textContent = "";
                        while (u.firstChild)
                            u.removeChild(u.firstChild);
                        u = d.lastChild
                    } else
                        v.push(t.createTextNode(s));
            u && d.removeChild(u),
            c.appendChecked || p.grep(Et(v, "input"), St),
            m = 0;
            while (s = v[m++])
                if ((!r || -1 === p.inArray(s, r)) && (o = p.contains(s.ownerDocument, s), u = Et(d.appendChild(s), "script"), o && Ct(u), n)) {
                    i = 0;
                    while (s = u[i++])
                        vt.test(s.type || "") && n.push(s)
                }
            return u = null, d
        },
        cleanData: function(e, t) {
            for (var r, i, s, o, u = 0, a = p.expando, f = p.cache, l = c.deleteExpando, h = p.event.special; null != (r = e[u]); u++)
                if ((t || p.acceptData(r)) && (s = r[a], o = s && f[s])) {
                    if (o.events)
                        for (i in o.events)
                            h[i] ? p.event.remove(r, i) : p.removeEvent(r, i, o.handle);
                    f[s] && (delete f[s], l ? delete r[a] : typeof r.removeAttribute !== j ? r.removeAttribute(a) : r[a] = null, n.push(s))
                }
        }
    }),
    p.fn.extend({
        text: function(e) {
            return J(this, function(e) {
                return void 0 === e ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || N).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = xt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = xt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? p.filter(e, this) : this, i = 0; null != (n = r[i]); i++)
                t || 1 !== n.nodeType || p.cleanData(Et(n)),
                n.parentNode && (t && p.contains(n.ownerDocument, n) && Ct(Et(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                1 === e.nodeType && p.cleanData(Et(e, !1));
                while (e.firstChild)
                    e.removeChild(e.firstChild);
                e.options && p.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return p.clone(this, e, t)
            })
        },
        html: function(e) {
            return J(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e)
                    return 1 === t.nodeType ? t.innerHTML.replace(ot, "") : void 0;
                if (!("string" != typeof e || pt.test(e) || !c.htmlSerialize && ut.test(e) || !c.leadingWhitespace && at.test(e) || yt[(lt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(ft, "<$1></$2>");
                    try {
                        for (; r > n; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (p.cleanData(Et(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode,
                p.cleanData(Et(this)),
                e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = i.apply([], e);
            var n,
                r,
                s,
                o,
                u,
                a,
                f = 0,
                l = this.length,
                h = this,
                d = l - 1,
                v = e[0],
                m = p.isFunction(v);
            if (m || l > 1 && "string" == typeof v && !c.checkClone && dt.test(v))
                return this.each(function(n) {
                    var r = h.eq(n);
                    m && (e[0] = v.call(this, n, r.html())),
                    r.domManip(e, t)
                });
            if (l && (a = p.buildFragment(e, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (o = p.map(Et(a, "script"), Tt), s = o.length; l > f; f++)
                    r = a,
                    f !== d && (r = p.clone(r, !0, !0), s && p.merge(o, Et(r, "script"))),
                    t.call(this[f], r, f);
                if (s)
                    for (u = o[o.length - 1].ownerDocument, p.map(o, Nt), f = 0; s > f; f++)
                        r = o[f],
                        vt.test(r.type || "") && !p._data(r, "globalEval") && p.contains(u, r) && (r.src ? p._evalUrl && p._evalUrl(r.src) : p.globalEval((r.text || r.textContent || r.innerHTML || "").replace(gt, "")));
                a = n = null
            }
            return this
        }
    }),
    p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        p.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = p(e), u = o.length - 1; u >= r; r++)
                n = r === u ? this : this.clone(!0),
                p(o[r])[t](n),
                s.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var At,
        Ot = {};
    !function() {
        var e,
            t,
            n = N.createElement("div"),
            r = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = n.getElementsByTagName("a")[0],
        e.style.cssText = "float:left;opacity:.5",
        c.opacity = /^0.5/.test(e.style.opacity),
        c.cssFloat = !!e.style.cssFloat,
        n.style.backgroundClip = "content-box",
        n.cloneNode(!0).style.backgroundClip = "",
        c.clearCloneStyle = "content-box" === n.style.backgroundClip,
        e = n = null,
        c.shrinkWrapBlocks = function() {
            var e,
                n,
                i,
                s;
            if (null == t) {
                if (e = N.getElementsByTagName("body")[0], !e)
                    return;
                s = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                n = N.createElement("div"),
                i = N.createElement("div"),
                e.appendChild(n).appendChild(i),
                t = !1,
                typeof i.style.zoom !== j && (i.style.cssText = r + ";width:1px;padding:1px;zoom:1", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t = 3 !== i.offsetWidth),
                e.removeChild(n),
                e = n = i = null
            }
            return t
        }
    }();
    var Dt = /^margin/,
        Pt = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
        Ht,
        Bt,
        jt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (Ht = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }, Bt = function(e, t, n) {
        var r,
            i,
            s,
            o,
            u = e.style;
        return n = n || Ht(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== o || p.contains(e.ownerDocument, e) || (o = p.style(e, t)), Pt.test(o) && Dt.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s)), void 0 === o ? o : o + ""
    }) : N.documentElement.currentStyle && (Ht = function(e) {
        return e.currentStyle
    }, Bt = function(e, t, n) {
        var r,
            i,
            s,
            o,
            u = e.style;
        return n = n || Ht(e), o = n ? n[t] : void 0, null == o && u && u[t] && (o = u[t]), Pt.test(o) && !jt.test(t) && (r = u.left, i = e.runtimeStyle, s = i && i.left, s && (i.left = e.currentStyle.left), u.left = "fontSize" === t ? "1em" : o, o = u.pixelLeft + "px", u.left = r, s && (i.left = s)), void 0 === o ? o : o + "" || "auto"
    }),
    !function() {
        function l() {
            var t,
                n,
                u = N.getElementsByTagName("body")[0];
            u && (t = N.createElement("div"), n = N.createElement("div"), t.style.cssText = a, u.appendChild(t).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", p.swap(u, null != u.style.zoom ? {
                zoom: 1
            } : {}, function() {
                r = 4 === n.offsetWidth
            }), i = !0, s = !1, o = !0, e.getComputedStyle && (s = "1%" !== (e.getComputedStyle(n, null) || {}).top, i = "4px" === (e.getComputedStyle(n, null) || {
                width: "4px"
            }).width), u.removeChild(t), n = u = null)
        }
        var t,
            n,
            r,
            i,
            s,
            o,
            u = N.createElement("div"),
            a = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            f = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        t = u.getElementsByTagName("a")[0],
        t.style.cssText = "float:left;opacity:.5",
        c.opacity = /^0.5/.test(t.style.opacity),
        c.cssFloat = !!t.style.cssFloat,
        u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        c.clearCloneStyle = "content-box" === u.style.backgroundClip,
        t = u = null,
        p.extend(c, {
            reliableHiddenOffsets: function() {
                if (null != n)
                    return n;
                var e,
                    t,
                    r,
                    i = N.createElement("div"),
                    s = N.getElementsByTagName("body")[0];
                if (s)
                    return i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = N.createElement("div"), e.style.cssText = a, s.appendChild(e).appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = i.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", r = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", n = r && 0 === t[0].offsetHeight, s.removeChild(e), i = s = null, n
            },
            boxSizing: function() {
                return null == r && l(), r
            },
            boxSizingReliable: function() {
                return null == i && l(), i
            },
            pixelPosition: function() {
                return null == s && l(), s
            },
            reliableMarginRight: function() {
                var t,
                    n,
                    r,
                    i;
                if (null == o && e.getComputedStyle) {
                    if (t = N.getElementsByTagName("body")[0], !t)
                        return;
                    n = N.createElement("div"),
                    r = N.createElement("div"),
                    n.style.cssText = a,
                    t.appendChild(n).appendChild(r),
                    i = r.appendChild(N.createElement("div")),
                    i.style.cssText = r.style.cssText = f,
                    i.style.marginRight = i.style.width = "0",
                    r.style.width = "1px",
                    o = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight),
                    t.removeChild(n)
                }
                return o
            }
        })
    }(),
    p.swap = function(e, t, n, r) {
        var i,
            s,
            o = {};
        for (s in t)
            o[s] = e.style[s],
            e.style[s] = t[s];
        i = n.apply(e, r || []);
        for (s in t)
            e.style[s] = o[s];
        return i
    };
    var It = /alpha\([^)]*\)/i,
        qt = /opacity\s*=\s*([^)]*)/,
        Rt = /^(none|table(?!-c[ea]).+)/,
        Ut = new RegExp("^(" + X + ")(.*)$", "i"),
        zt = new RegExp("^([+-])=(" + X + ")", "i"),
        Wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Xt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Vt = ["Webkit", "O", "Moz", "ms"];
    p.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Bt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": c.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    s,
                    o,
                    u = p.camelCase(t),
                    a = e.style;
                if (t = p.cssProps[u] || (p.cssProps[u] = $t(a, u)), o = p.cssHooks[t] || p.cssHooks[u], void 0 === n)
                    return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : a[t];
                if (s = typeof n, "string" === s && (i = zt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(p.css(e, t)), s = "number"), null != n && n === n && ("number" !== s || p.cssNumber[u] || (n += "px"), c.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (a[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, r)))))
                    try {
                        a[t] = "",
                        a[t] = n
                    } catch (f) {}
            }
        },
        css: function(e, t, n, r) {
            var i,
                s,
                o,
                u = p.camelCase(t);
            return t = p.cssProps[u] || (p.cssProps[u] = $t(e.style, u)), o = p.cssHooks[t] || p.cssHooks[u], o && "get" in o && (s = o.get(e, !0, n)), void 0 === s && (s = Bt(e, t, r)), "normal" === s && t in Xt && (s = Xt[t]), "" === n || n ? (i = parseFloat(s), n === !0 || p.isNumeric(i) ? i || 0 : s) : s
        }
    }),
    p.each(["height", "width"], function(e, t) {
        p.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? 0 === e.offsetWidth && Rt.test(p.css(e, "display")) ? p.swap(e, Wt, function() {
                    return Gt(e, t, r)
                }) : Gt(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && Ht(e);
                return Kt(e, n, r ? Qt(e, t, r, c.boxSizing() && "border-box" === p.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    c.opacity || (p.cssHooks.opacity = {
        get: function(e, t) {
            return qt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === p.trim(s.replace(It, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = It.test(s) ? s.replace(It, i) : s + " " + i)
        }
    }),
    p.cssHooks.marginRight = Ft(c.reliableMarginRight, function(e, t) {
        return t ? p.swap(e, {
            display: "inline-block"
        }, Bt, [e, "marginRight"]) : void 0
    }),
    p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        p.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                    i[e + V[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        },
        Dt.test(e) || (p.cssHooks[e + t].set = Kt)
    }),
    p.fn.extend({
        css: function(e, t) {
            return J(this, function(e, t, n) {
                var r,
                    i,
                    s = {},
                    o = 0;
                if (p.isArray(t)) {
                    for (r = Ht(e), i = t.length; i > o; o++)
                        s[t[o]] = p.css(e, t[o], !1, r);
                    return s
                }
                return void 0 !== n ? p.style(e, t, n) : p.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return Jt(this, !0)
        },
        hide: function() {
            return Jt(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                $(this) ? p(this).show() : p(this).hide()
            })
        }
    }),
    p.Tween = Yt,
    Yt.prototype = {
        constructor: Yt,
        init: function(e, t, n, r, i, s) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = s || (p.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Yt.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yt.propHooks._default.get(this)
        },
        run: function(e) {
            var t,
                n = Yt.propHooks[this.prop];
            return this.pos = t = this.options.duration ? p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yt.propHooks._default.set(this), this
        }
    },
    Yt.prototype.init.prototype = Yt.prototype,
    Yt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = p.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                p.fx.step[e.prop] ? p.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[p.cssProps[e.prop]] || p.cssHooks[e.prop]) ? p.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    p.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    p.fx = Yt.prototype.init,
    p.fx.step = {};
    var Zt,
        en,
        tn = /^(?:toggle|show|hide)$/,
        nn = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
        rn = /queueHooks$/,
        sn = [ln],
        on = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = nn.exec(t),
                    s = i && i[3] || (p.cssNumber[e] ? "" : "px"),
                    o = (p.cssNumber[e] || "px" !== s && +r) && nn.exec(p.css(n.elem, e)),
                    u = 1,
                    a = 20;
                if (o && o[3] !== s) {
                    s = s || o[3],
                    i = i || [],
                    o = +r || 1;
                    do u = u || ".5",
                    o /= u,
                    p.style(n.elem, e, o + s);
                    while (u !== (u = n.cur() / r) && 1 !== u && --a)
                }
                return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    p.Animation = p.extend(hn, {
        tweener: function(e, t) {
            p.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++)
                n = e[r],
                on[n] = on[n] || [],
                on[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? sn.unshift(e) : sn.push(e)
        }
    }),
    p.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? p.extend({}, e) : {
            complete: n || !n && t || p.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !p.isFunction(t) && t
        };
        return r.duration = p.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in p.fx.speeds ? p.fx.speeds[r.duration] : p.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            p.isFunction(r.old) && r.old.call(this),
            r.queue && p.dequeue(this, r.queue)
        }, r
    },
    p.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter($).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = p.isEmptyObject(e),
                s = p.speed(t, n, r),
                o = function() {
                    var t = hn(this, p.extend({}, e), s);
                    (i || p._data(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    s = p.timers,
                    o = p._data(this);
                if (i)
                    o[i] && o[i].stop && r(o[i]);
                else
                    for (i in o)
                        o[i] && o[i].stop && rn.test(i) && r(o[i]);
                for (i = s.length; i--;)
                    s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n), t = !1, s.splice(i, 1));
                (t || !n) && p.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t,
                    n = p._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    s = p.timers,
                    o = r ? r.length : 0;
                for (n.finish = !0, p.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--;)
                    s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; o > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    p.each(["toggle", "show", "hide"], function(e, t) {
        var n = p.fn[t];
        p.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(an(t, !0), e, r, i)
        }
    }),
    p.each({
        slideDown: an("show"),
        slideUp: an("hide"),
        slideToggle: an("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        p.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    p.timers = [],
    p.fx.tick = function() {
        var e,
            t = p.timers,
            n = 0;
        for (Zt = p.now(); n < t.length; n++)
            e = t[n],
            e() || t[n] !== e || t.splice(n--, 1);
        t.length || p.fx.stop(),
        Zt = void 0
    },
    p.fx.timer = function(e) {
        p.timers.push(e),
        e() ? p.fx.start() : p.timers.pop()
    },
    p.fx.interval = 13,
    p.fx.start = function() {
        en || (en = setInterval(p.fx.tick, p.fx.interval))
    },
    p.fx.stop = function() {
        clearInterval(en),
        en = null
    },
    p.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    p.fn.delay = function(e, t) {
        return e = p.fx ? p.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    },
    function() {
        var e,
            t,
            n,
            r,
            i = N.createElement("div");
        i.setAttribute("className", "t"),
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = i.getElementsByTagName("a")[0],
        n = N.createElement("select"),
        r = n.appendChild(N.createElement("option")),
        t = i.getElementsByTagName("input")[0],
        e.style.cssText = "top:1px",
        c.getSetAttribute = "t" !== i.className,
        c.style = /top/.test(e.getAttribute("style")),
        c.hrefNormalized = "/a" === e.getAttribute("href"),
        c.checkOn = !!t.value,
        c.optSelected = r.selected,
        c.enctype = !!N.createElement("form").enctype,
        n.disabled = !0,
        c.optDisabled = !r.disabled,
        t = N.createElement("input"),
        t.setAttribute("value", ""),
        c.input = "" === t.getAttribute("value"),
        t.value = "t",
        t.setAttribute("type", "radio"),
        c.radioValue = "t" === t.value,
        e = t = n = r = i = null
    }();
    var pn = /\r/g;
    p.fn.extend({
        val: function(e) {
            var t,
                n,
                r,
                i = this[0];
            if (arguments.length)
                return r = p.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, p(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : p.isArray(i) && (i = p.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
            if (i)
                return t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(pn, "") : null == n ? "" : n)
        }
    }),
    p.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = p.find.attr(e, "value");
                    return null != t ? t : p.text(e)
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, s = "select-one" === e.type || 0 > i, o = s ? null : [], u = s ? i + 1 : r.length, a = 0 > i ? u : s ? i : 0; u > a; a++)
                        if (n = r[a], !(!n.selected && a !== i || (c.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && p.nodeName(n.parentNode, "optgroup"))) {
                            if (t = p(n).val(), s)
                                return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    var n,
                        r,
                        i = e.options,
                        s = p.makeArray(t),
                        o = i.length;
                    while (o--)
                        if (r = i[o], p.inArray(p.valHooks.option.get(r), s) >= 0)
                            try {
                                r.selected = n = !0
                            } catch (u) {
                                r.scrollHeight
                            }
                        else
                            r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }),
    p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = {
            set: function(e, t) {
                return p.isArray(t) ? e.checked = p.inArray(p(e).val(), t) >= 0 : void 0
            }
        },
        c.checkOn || (p.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var dn,
        vn,
        mn = p.expr.attrHandle,
        gn = /^(?:checked|selected)$/i,
        yn = c.getSetAttribute,
        bn = c.input;
    p.fn.extend({
        attr: function(e, t) {
            return J(this, p.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                p.removeAttr(this, e)
            })
        }
    }),
    p.extend({
        attr: function(e, t, n) {
            var r,
                i,
                s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return typeof e.getAttribute === j ? p.prop(e, t, n) : (1 === s && p.isXMLDoc(e) || (t = t.toLowerCase(), r = p.attrHooks[t] || (p.expr.match.bool.test(t) ? vn : dn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = p.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void p.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n,
                r,
                i = 0,
                s = t && t.match(M);
            if (s && 1 === e.nodeType)
                while (n = s[i++])
                    r = p.propFix[n] || n,
                    p.expr.match.bool.test(n) ? bn && yn || !gn.test(n) ? e[r] = !1 : e[p.camelCase("default-" + n)] = e[r] = !1 : p.attr(e, n, ""),
                    e.removeAttribute(yn ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!c.radioValue && "radio" === t && p.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }),
    vn = {
        set: function(e, t, n) {
            return t === !1 ? p.removeAttr(e, n) : bn && yn || !gn.test(n) ? e.setAttribute(!yn && p.propFix[n] || n, n) : e[p.camelCase("default-" + n)] = e[n] = !0, n
        }
    },
    p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = mn[t] || p.find.attr;
        mn[t] = bn && yn || !gn.test(t) ? function(e, t, r) {
            var i,
                s;
            return r || (s = mn[t], mn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, mn[t] = s), i
        } : function(e, t, n) {
            return n ? void 0 : e[p.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    bn && yn || (p.attrHooks.value = {
        set: function(e, t, n) {
            return p.nodeName(e, "input") ? void (e.defaultValue = t) : dn && dn.set(e, t, n)
        }
    }),
    yn || (dn = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, mn.id = mn.name = mn.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, p.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: dn.set
    }, p.attrHooks.contenteditable = {
        set: function(e, t, n) {
            dn.set(e, "" === t ? !1 : t, n)
        }
    }, p.each(["width", "height"], function(e, t) {
        p.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })),
    c.style || (p.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var wn = /^(?:input|select|textarea|button|object)$/i,
        En = /^(?:a|area)$/i;
    p.fn.extend({
        prop: function(e, t) {
            return J(this, p.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = p.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch (t) {}
            })
        }
    }),
    p.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r,
                i,
                s,
                o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)
                return s = 1 !== o || !p.isXMLDoc(e), s && (t = p.propFix[t] || t, i = p.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = p.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wn.test(e.nodeName) || En.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    c.hrefNormalized || p.each(["href", "src"], function(e, t) {
        p.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    c.optSelected || (p.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }),
    p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        p.propFix[this.toLowerCase()] = this
    }),
    c.enctype || (p.propFix.enctype = "encoding");
    var Sn = /[\t\r\n\f]/g;
    p.fn.extend({
        addClass: function(e) {
            var t,
                n,
                r,
                i,
                s,
                o,
                u = 0,
                a = this.length,
                f = "string" == typeof e && e;
            if (p.isFunction(e))
                return this.each(function(t) {
                    p(this).addClass(e.call(this, t, this.className))
                });
            if (f)
                for (t = (e || "").match(M) || []; a > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Sn, " ") : " ")) {
                        s = 0;
                        while (i = t[s++])
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o = p.trim(r),
                        n.className !== o && (n.className = o)
                    }
            return this
        },
        removeClass: function(e) {
            var t,
                n,
                r,
                i,
                s,
                o,
                u = 0,
                a = this.length,
                f = 0 === arguments.length || "string" == typeof e && e;
            if (p.isFunction(e))
                return this.each(function(t) {
                    p(this).removeClass(e.call(this, t, this.className))
                });
            if (f)
                for (t = (e || "").match(M) || []; a > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Sn, " ") : "")) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0)
                                r = r.replace(" " + i + " ", " ");
                        o = e ? p.trim(r) : "",
                        n.className !== o && (n.className = o)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(p.isFunction(e) ? function(n) {
                p(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n) {
                    var t,
                        r = 0,
                        i = p(this),
                        s = e.match(M) || [];
                    while (t = s[r++])
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                } else
                    (n === j || "boolean" === n) && (this.className && p._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : p._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Sn, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    }),
    p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        p.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    p.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var xn = p.now(),
        Tn = /\?/,
        Nn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    p.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse)
            return e.JSON.parse(t + "");
        var n,
            r = null,
            i = p.trim(t + "");
        return i && !p.trim(i.replace(Nn, function(e, t, i, s) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !s - !i, "")
        })) ? Function("return " + i)() : p.error("Invalid JSON: " + t)
    },
    p.parseXML = function(t) {
        var n,
            r;
        if (!t || "string" != typeof t)
            return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + t), n
    };
    var Cn,
        kn,
        Ln = /#.*$/,
        An = /([?&])_=[^&]*/,
        On = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        _n = /^(?:GET|HEAD)$/,
        Dn = /^\/\//,
        Pn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hn = {},
        Bn = {},
        jn = "*/".concat("*");
    try {
        kn = location.href
    } catch (Fn) {
        kn = N.createElement("a"),
        kn.href = "",
        kn = kn.href
    }
    Cn = Pn.exec(kn.toLowerCase()) || [],
    p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kn,
            type: "GET",
            isLocal: Mn.test(Cn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": jn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Rn(Rn(e, p.ajaxSettings), t) : Rn(p.ajaxSettings, e)
        },
        ajaxPrefilter: In(Hn),
        ajaxTransport: In(Bn),
        ajax: function(e, t) {
            function x(e, t, n, r) {
                var f,
                    g,
                    y,
                    w,
                    S,
                    x = t;
                2 !== b && (b = 2, o && clearTimeout(o), a = void 0, s = r || "", E.readyState = e > 0 ? 4 : 0, f = e >= 200 && 300 > e || 304 === e, n && (w = Un(l, E, n)), w = zn(l, w, E, f), f ? (l.ifModified && (S = E.getResponseHeader("Last-Modified"), S && (p.lastModified[i] = S), S = E.getResponseHeader("etag"), S && (p.etag[i] = S)), 204 === e || "HEAD" === l.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = w.state, g = w.data, y = w.error, f = !y)) : (y = x, (e || !x) && (x = "error", 0 > e && (e = 0))), E.status = e, E.statusText = (t || x) + "", f ? d.resolveWith(c, [g, x, E]) : d.rejectWith(c, [E, x, y]), E.statusCode(m), m = void 0, u && h.trigger(f ? "ajaxSuccess" : "ajaxError", [E, l, f ? g : y]), v.fireWith(c, [E, x]), u && (h.trigger("ajaxComplete", [E, l]), --p.active || p.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0),
            t = t || {};
            var n,
                r,
                i,
                s,
                o,
                u,
                a,
                f,
                l = p.ajaxSetup({}, t),
                c = l.context || l,
                h = l.context && (c.nodeType || c.jquery) ? p(c) : p.event,
                d = p.Deferred(),
                v = p.Callbacks("once memory"),
                m = l.statusCode || {},
                g = {},
                y = {},
                b = 0,
                w = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!f) {
                                f = {};
                                while (t = On.exec(s))
                                    f[t[1].toLowerCase()] = t[2]
                            }
                            t = f[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (l.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e)
                                    m[t] = [m[t], e[t]];
                            else
                                E.always(e[E.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return a && a.abort(t), x(0, t), this
                    }
                };
            if (d.promise(E).complete = v.add, E.success = E.done, E.error = E.fail, l.url = ((e || l.url || kn) + "").replace(Ln, "").replace(Dn, Cn[1] + "//"), l.type = t.method || t.type || l.method || l.type, l.dataTypes = p.trim(l.dataType || "*").toLowerCase().match(M) || [""], null == l.crossDomain && (n = Pn.exec(l.url.toLowerCase()), l.crossDomain = !(!n || n[1] === Cn[1] && n[2] === Cn[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Cn[3] || ("http:" === Cn[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = p.param(l.data, l.traditional)), qn(Hn, l, t, E), 2 === b)
                return E;
            u = l.global,
            u && 0 === p.active++ && p.event.trigger("ajaxStart"),
            l.type = l.type.toUpperCase(),
            l.hasContent = !_n.test(l.type),
            i = l.url,
            l.hasContent || (l.data && (i = l.url += (Tn.test(i) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = An.test(i) ? i.replace(An, "$1_=" + xn++) : i + (Tn.test(i) ? "&" : "?") + "_=" + xn++)),
            l.ifModified && (p.lastModified[i] && E.setRequestHeader("If-Modified-Since", p.lastModified[i]), p.etag[i] && E.setRequestHeader("If-None-Match", p.etag[i])),
            (l.data && l.hasContent && l.contentType !== !1 || t.contentType) && E.setRequestHeader("Content-Type", l.contentType),
            E.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + jn + "; q=0.01" : "") : l.accepts["*"]);
            for (r in l.headers)
                E.setRequestHeader(r, l.headers[r]);
            if (!l.beforeSend || l.beforeSend.call(c, E, l) !== !1 && 2 !== b) {
                w = "abort";
                for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    E[r](l[r]);
                if (a = qn(Bn, l, t, E)) {
                    E.readyState = 1,
                    u && h.trigger("ajaxSend", [E, l]),
                    l.async && l.timeout > 0 && (o = setTimeout(function() {
                        E.abort("timeout")
                    }, l.timeout));
                    try {
                        b = 1,
                        a.send(g, x)
                    } catch (S) {
                        if (!(2 > b))
                            throw S;
                        x(-1, S)
                    }
                } else
                    x(-1, "No Transport");
                return E
            }
            return E.abort()
        },
        getJSON: function(e, t, n) {
            return p.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return p.get(e, void 0, t, "script")
        }
    }),
    p.each(["get", "post"], function(e, t) {
        p[t] = function(e, n, r, i) {
            return p.isFunction(n) && (i = i || r, r = n, n = void 0), p.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }),
    p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        p.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    p._evalUrl = function(e) {
        return p.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    p.fn.extend({
        wrapAll: function(e) {
            if (p.isFunction(e))
                return this.each(function(t) {
                    p(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType)
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(p.isFunction(e) ? function(t) {
                p(this).wrapInner(e.call(this, t))
            } : function() {
                var t = p(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = p.isFunction(e);
            return this.each(function(n) {
                p(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    p.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !c.reliableHiddenOffsets() && "none" === (e.style && e.style.display || p.css(e, "display"))
    },
    p.expr.filters.visible = function(e) {
        return !p.expr.filters.hidden(e)
    };
    var Wn = /%20/g,
        Xn = /\[\]$/,
        Vn = /\r?\n/g,
        $n = /^(?:submit|button|image|reset|file)$/i,
        Jn = /^(?:input|select|textarea|keygen)/i;
    p.param = function(e, t) {
        var n,
            r = [],
            i = function(e, t) {
                t = p.isFunction(t) ? t() : null == t ? "" : t,
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e))
            p.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                Kn(n, e[n], t, i);
        return r.join("&").replace(Wn, "+")
    },
    p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = p.prop(this, "elements");
                return e ? p.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !p(this).is(":disabled") && Jn.test(this.nodeName) && !$n.test(e) && (this.checked || !K.test(e))
            }).map(function(e, t) {
                var n = p(this).val();
                return null == n ? null : p.isArray(n) ? p.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Vn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Vn, "\r\n")
                }
            }).get()
        }
    }),
    p.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zn() || er()
    } : Zn;
    var Qn = 0,
        Gn = {},
        Yn = p.ajaxSettings.xhr();
    e.ActiveXObject && p(e).on("unload", function() {
        for (var e in Gn)
            Gn[e](void 0, !0)
    }),
    c.cors = !!Yn && "withCredentials" in Yn,
    Yn = c.ajax = !!Yn,
    Yn && p.ajaxTransport(function(e) {
        if (!e.crossDomain || c.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i,
                        s = e.xhr(),
                        o = ++Qn;
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields)
                            s[i] = e.xhrFields[i];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                    e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n)
                        void 0 !== n[i] && s.setRequestHeader(i, n[i] + "");
                    s.send(e.hasContent && e.data || null),
                    t = function(n, i) {
                        var u,
                            a,
                            f;
                        if (t && (i || 4 === s.readyState))
                            if (delete Gn[o], t = void 0, s.onreadystatechange = p.noop, i)
                                4 !== s.readyState && s.abort();
                            else {
                                f = {},
                                u = s.status,
                                "string" == typeof s.responseText && (f.text = s.responseText);
                                try {
                                    a = s.statusText
                                } catch (l) {
                                    a = ""
                                }
                                u || !e.isLocal || e.crossDomain ? 1223 === u && (u = 204) : u = f.text ? 200 : 404
                            }
                        f && r(u, a, f, s.getAllResponseHeaders())
                    },
                    e.async ? 4 === s.readyState ? setTimeout(t) : s.onreadystatechange = Gn[o] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }),
    p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return p.globalEval(e), e
            }
        }
    }),
    p.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    p.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t,
                n = N.head || p("head")[0] || N.documentElement;
            return {
                send: function(r, i) {
                    t = N.createElement("script"),
                    t.async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    },
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var tr = [],
        nr = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = tr.pop() || p.expando + "_" + xn++;
            return this[e] = !0, e
        }
    }),
    p.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i,
            s,
            o,
            u = t.jsonp !== !1 && (nr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(t.data) && "data");
        return u || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, u ? t[u] = t[u].replace(nr, "$1" + i) : t.jsonp !== !1 && (t.url += (Tn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return o || p.error(i + " was not called"), o[0]
        }, t.dataTypes[0] = "json", s = e[i], e[i] = function() {
            o = arguments
        }, r.always(function() {
            e[i] = s,
            t[i] && (t.jsonpCallback = n.jsonpCallback, tr.push(i)),
            o && p.isFunction(s) && s(o[0]),
            o = s = void 0
        }), "script") : void 0
    }),
    p.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t, t = !1),
        t = t || N;
        var r = E.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = p.buildFragment([e], t, i), i && i.length && p(i).remove(), p.merge([], r.childNodes))
    };
    var rr = p.fn.load;
    p.fn.load = function(e, t, n) {
        if ("string" != typeof e && rr)
            return rr.apply(this, arguments);
        var r,
            i,
            s,
            o = this,
            u = e.indexOf(" ");
        return u >= 0 && (r = e.slice(u, e.length), e = e.slice(0, u)), p.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), o.length > 0 && p.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments,
            o.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            o.each(n, i || [e.responseText, t, e])
        }), this
    },
    p.expr.filters.animated = function(e) {
        return p.grep(p.timers, function(t) {
            return e === t.elem
        }).length
    };
    var ir = e.document.documentElement;
    p.offset = {
        setOffset: function(e, t, n) {
            var r,
                i,
                s,
                o,
                u,
                a,
                f,
                l = p.css(e, "position"),
                c = p(e),
                h = {};
            "static" === l && (e.style.position = "relative"),
            u = c.offset(),
            s = p.css(e, "top"),
            a = p.css(e, "left"),
            f = ("absolute" === l || "fixed" === l) && p.inArray("auto", [s, a]) > -1,
            f ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(a) || 0),
            p.isFunction(t) && (t = t.call(e, n, u)),
            null != t.top && (h.top = t.top - u.top + o),
            null != t.left && (h.left = t.left - u.left + i),
            "using" in t ? t.using.call(e, h) : c.css(h)
        }
    },
    p.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    p.offset.setOffset(this, e, t)
                });
            var t,
                n,
                r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                s = i && i.ownerDocument;
            if (s)
                return t = s.documentElement, p.contains(t, i) ? (typeof i.getBoundingClientRect !== j && (r = i.getBoundingClientRect()), n = sr(s), {
                    top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : r
        },
        position: function() {
            if (this[0]) {
                var e,
                    t,
                    n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === p.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (n = e.offset()), n.top += p.css(e[0], "borderTopWidth", !0), n.left += p.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - p.css(r, "marginTop", !0),
                    left: t.left - n.left - p.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || ir;
                while (e && !p.nodeName(e, "html") && "static" === p.css(e, "position"))
                    e = e.offsetParent;
                return e || ir
            })
        }
    }),
    p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        p.fn[e] = function(r) {
            return J(this, function(e, r, i) {
                var s = sr(e);
                return void 0 === i ? s ? t in s ? s[t] : s.document.documentElement[r] : e[r] : void (s ? s.scrollTo(n ? p(s).scrollLeft() : i, n ? i : p(s).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }),
    p.each(["top", "left"], function(e, t) {
        p.cssHooks[t] = Ft(c.pixelPosition, function(e, n) {
            return n ? (n = Bt(e, t), Pt.test(n) ? p(e).position()[t] + "px" : n) : void 0
        })
    }),
    p.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        p.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            p.fn[r] = function(r, i) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    o = n || (r === !0 || i === !0 ? "margin" : "border");
                return J(this, function(t, n, r) {
                    var i;
                    return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? p.css(t, n, o) : p.style(t, n, r, o)
                }, t, s ? r : void 0, s, null)
            }
        })
    }),
    p.fn.size = function() {
        return this.length
    },
    p.fn.andSelf = p.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return p
    });
    var or = e.jQuery,
        ur = e.$;
    return p.noConflict = function(t) {
        return e.$ === p && (e.$ = ur), t && e.jQuery === p && (e.jQuery = or), p
    }, typeof t === j && (e.jQuery = e.$ = p), p
}),
define("lib-app/jquery", function() {}),
define("storymaps/common/utils/Polyfills", [], function() {
    return {
        apply: function() {
            typeof String.prototype.trim != "function" && (String.prototype.trim = function() {
                return this.replace(/^\s+|\s+$/g, "")
            }),
            Date.now || (Date.now = function() {
                return (new Date).valueOf()
            }),
            Object.keys = Object.keys || function(e, t, n) {
                n = [];
                for (t in e)
                    n.hasOwnProperty.call(e, t) && n.push(t);
                return n
            }
        }
    }
}),
define("storymaps/common/utils/SocialSharing", ["dojo/Deferred", "esri/urlUtils"], function(e, t) {
    return {
        shareFacebook: function(e, t, n, r) {
            var i = this.cleanURL(r || document.location.href);
            window.open("http://www.facebook.com/sharer/sharer.php?u=" + i, "", "toolbar=0,status=0,width=626,height=436")
        },
        shareTwitter: function(e, t) {
            var n = "text=" + encodeURIComponent(e) + "&url=" + this.cleanURL(t || document.location.href) + "&related=EsriStoryMaps" + "&hashtags=storymap";
            window.open("https://twitter.com/intent/tweet?" + n, "", "toolbar=0,status=0,width=626,height=436")
        },
        requestBitly: function(t) {
            var n = ["http://api.bitly.com/v3/shorten?callback=?", "https://api-ssl.bitly.com/v3/shorten?callback=?"],
                r = location.protocol == "http:" ? n[0] : n[1],
                i = t || document.location.href,
                s = new e;
            return $.getJSON(r, {
                format: "json",
                apiKey: app.cfg.HEADER_SOCIAL.bitly.key,
                login: app.cfg.HEADER_SOCIAL.bitly.login,
                longUrl: i
            }, function(e) {
                !e || !e || !e.data.url ? s.reject() : s.resolve(e.data.url)
            }), s
        },
        cleanURL: function(e, n) {
            var r = t.urlToObject(e),
                i = r.path;
            return r.query && (delete r.query.edit, delete r.query.locale, delete r.query.folderId, delete r.query.webmap, delete r.query.autoplay, $.each(Object.keys(r.query), function(e, t) {
                e === 0 ? i += "?" : i += "&",
                r.query[t] !== undefined && r.query[t] !== "" ? i += t + "=" + r.query[t] : i += t
            })), n ? i : encodeURIComponent(i)
        }
    }
}),
define("storymaps/common/utils/CommonHelper", ["dojo/cookie", "dojo/has", "dojo/_base/lang", "dojo/_base/Color", "dojo/Deferred", "dojo/DeferredList", "./SocialSharing", "esri/request", "esri/dijit/Search", "esri/tasks/locator", "esri/urlUtils", "esri/arcgis/utils", "esri/geometry/webMercatorUtils", "esri/geometry/Point", "esri/geometry/Extent", "esri/geometry/Polygon", "esri/layers/FeatureLayer", "esri/layers/ArcGISDynamicMapServiceLayer", "esri/layers/ArcGISTiledMapServiceLayer", "esri/layers/OpenStreetMapLayer", "dojo/i18n!commonResources/nls/webmap.js?v=" + app.version], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w) {
    return {
        isMobile: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/IEMobile/i)
        },
        switchToBuilder: function() {
            document.location.search.match(/appid/) ? document.location = o.cleanURL(document.location.protocol + "//" + document.location.host + document.location.pathname + document.location.search, !0) + "&edit" + document.location.hash : document.location.search.slice(-1) == "?" ? document.location = o.cleanURL(document.location.protocol + "//" + document.location.host + document.location.pathname, !0) + "?edit" + document.location.hash : document.location = o.cleanURL(document.location.protocol + "//" + document.location.host + document.location.pathname, !0) + "?edit" + document.location.hash
        },
        isArcGISHosted: function() {
            return /(\/)([a-zA-Z0-9]+(\/))*(apps\/|home\/)([a-zA-Z0-9\-\_]+\/)/.test(document.location.pathname)
        },
        browserSupportHistory: function() {
            return !!window.history && !!history.pushState
        },
        getUrlParams: function() {
            var e = l.urlToObject(document.location.search).query;
            return e ? e : !this.browserSupportHistory() && !e ? l.urlToObject(document.location.hash).query || {} : {}
        },
        getWebmapID: function(e) {
            var t = this.getUrlParams();
            if (app.indexCfg && app.indexCfg.webmap)
                return app.indexCfg.webmap;
            if (this.isArcGISHosted() || !e)
                return t.webmap;
            if (app.indexCfg.authorizedOwners && app.indexCfg.authorizedOwners.length > 0 && app.indexCfg.authorizedOwners[0])
                return t.webmap
        },
        getAppID: function(e) {
            var t = this.getUrlParams();
            if (app.indexCfg && app.indexCfg.appid)
                return app.indexCfg.appid;
            if (this.isArcGISHosted() || !e)
                return t.appid;
            if (app.indexCfg.authorizedOwners && app.indexCfg.authorizedOwners.length > 0 && app.indexCfg.authorizedOwners[0])
                return t.appid
        },
        getGraphicsLayerByName: function(e, t) {
            var n;
            for (var r = 0; r < e.graphicsLayerIds.length; r++) {
                n = e.getLayer(e.graphicsLayerIds[r]);
                if (n.name == t)
                    return n
            }
            return null
        },
        getWebMapExtentFromItem: function(e) {
            if (!e.extent || e.extent.length != 2)
                return null;
            var t = h.geographicToWebMercator(new p(e.extent[0][0], e.extent[0][1])),
                n = h.geographicToWebMercator(new p(e.extent[1][0], e.extent[1][1]));
            return new d({
                xmax: n.x,
                xmin: t.x,
                ymax: n.y,
                ymin: t.y,
                spatialReference: {
                    wkid: 102100
                }
            })
        },
        serializeExtentToItem: function(e) {
            if (!e || !e.spatialReference)
                return null;
            var t = e.spatialReference.wkid == 4326 ? e : h.webMercatorToGeographic(e);
            return [[Math.round(t.xmin * 1e4) / 1e4, Math.round(t.ymin * 1e4) / 1e4], [Math.round(t.xmax * 1e4) / 1e4, Math.round(t.ymax * 1e4) / 1e4]]
        },
        serializedExtentEquals: function(e, t) {
            return e && t && e.length == t.length && e.length == 2 && e[0][0] == t[0][0] && e[0][1] == t[0][1] && e[1][0] == t[1][0] && e[1][1] == t[1][1]
        },
        cloneLayer: function(e) {
            return e.url && e.url.match(/virtualearth\./) ? new y("http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer") : e instanceof y ? new y(e.url) : e instanceof g ? new g(e.url) : e.id == "OpenStreetMap" ? new b : new y("http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer")
        },
        extentToPolygon: function(e) {
            var t = new v(e.spatialReference);
            return t.addRing([[e.xmin, e.ymin], [e.xmin, e.ymax], [e.xmax, e.ymax], [e.xmax, e.ymin], [e.xmin, e.ymin]]), t
        },
        getFirstLevelWhereExtentFit: function(e, t) {
            var n = t.width,
                r = t.height,
                i = t._params.lods;
            if (!i)
                return -1;
            for (var s = i.length - 1; s >= 0; s--)
                if (n * t._params.lods[s].resolution > e.getWidth() && r * t._params.lods[s].resolution > e.getHeight())
                    return s;
            return -1
        },
        getPortalUser: function() {
            var e = this.getEsriCookie();
            if (!e)
                return;
            if (e.urlKey && e.customBaseUrl && (e.urlKey + "." + e.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase())
                return;
            return e.email
        },
        getPortalRole: function() {
            var e = this.getEsriCookie();
            if (!e)
                return;
            if (e.urlKey && e.customBaseUrl && (e.urlKey + "." + e.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase())
                return;
            return e.role
        },
        getEsriCookie: function() {
            var t = e("esri_auth");
            if (!t)
                return;
            return JSON.parse(t.replace('"ssl":undefined', '"ssl":""'))
        },
        getAppViewModeURL: function() {
            return document.location.protocol + "//" + document.location.host + document.location.pathname + "?appid=" + app.data.getWebAppItem().id
        },
        getWebmapViewerLinkFromSharingURL: function(e) {
            var t = e.split("/sharing/")[0];
            return t + "/home/webmap/viewer.html"
        },
        getPortalURL: function() {
            return c.arcgisUrl.split("/sharing/")[0]
        },
        getSpecificPortalURL: function() {
            return app.portal.urlKey && app.portal.customBaseUrl ? "//" + app.portal.urlKey + "." + app.portal.customBaseUrl : this.getPortalURL()
        },
        getItemURL: function(e) {
            return this.getPortalURL() + "/home/item.html?id=" + e
        },
        getItemId: function() {
            return app.data && app.data.getWebAppItem && app.data.getWebAppItem().id
        },
        getMyContentURL: function() {
            return this.getPortalURL() + "/home/content.html"
        },
        getMyStoriesURL: function() {
            return app.isPortal ? this.getPortalURL() + "/apps/MyStories/" : "//storymaps.arcgis.com/en/my-stories/"
        },
        browserSupportAttachementUsingFileReader: function() {
            return !!window.FileReader && !!window.FormData && !!this.browserSupportCanvas() && !!window.Blob
        },
        browserSupportCanvas: function() {
            var e = document.createElement("canvas");
            return !!e.getContext && !!e.getContext("2d")
        },
        browserSupportFileReaderBinaryString: function() {
            if (!window.FileReader)
                return !1;
            var e = new window.FileReader;
            return "readAsArrayBuffer" in e
        },
        getBinaryStringFromArrayBuffer: function(e) {
            var t = new Uint8Array(e),
                n = "";
            for (var r = 0; r < t.length; r++)
                n += String.fromCharCode(t[r]);
            return n
        },
        addCSSRule: function(e, n, r) {
            var i = "head";
            if (t("ie") <= 8)
                return;
            r && (i = r.contents().find("head"));
            if (n) {
                var s = $(i).find("#" + n).eq(0);
                if (s.length) {
                    s.html(e);
                    return
                }
            }
            $("<style>").prop("type", "text/css").attr("id", n).html(e).appendTo(i)
        },
        hex2rgba: function(e, t) {
            if (!e || e === "")
                return "";
            var n = e.replace("#", "").match(/../g),
                r = [],
                i;
            for (i in n)
                r.push(parseInt(n[i], 16));
            return r.push(t), "rgba(" + r.join() + ")"
        },
        prependURLHTTP: function(e) {
            return !e || e === "" || e.match(/^mailto:/) ? e : /^(https?:\/\/)|^(\/\/)/i.test(e) ? e : "http://" + e
        },
        convertURLHTTPS: function(e) {
            return !e || e === "" || e.match(/^mailto:/) ? e : (e = e.replace(/http:\/\//, "https://"), e = e.replace(/^\/\//, "https://"), /^(https:\/\/)/i.test(e) ? e : "https://" + e)
        },
        convertURLHTTP: function(e) {
            return !e || e === "" || e.match(/^mailto:/) ? e : (e = e.replace(/https:\/\//, "http://"), e = e.replace(/^\/\//, "http://"), /^(http:\/\/)/i.test(e) ? e : "http://" + e)
        },
        checkImageURL: function(e) {
            return e && e.match(/((\.png)|(\.jp(e)?g))$/i)
        },
        createGeocoder: function(e) {
            var t = new i;
            if (!e || !e.map || !e.domNode)
                return t.resolve(), t;
            if (!app.cfg.HELPER_SERVICES.geocode)
                return t.resolve(), t;
            var n = [],
                r = [],
                o = [],
                u = this;
            e.searchOptions && e.searchOptions.layers && e.searchOptions.layers.length && e.searchOptions.enabled && (r = this.getLayerSources(e.searchOptions.layers, e.map, e.searchOptions.hintText));
            var f = u.processAppDataGeocoders(e.placeHolder);
            r.length && (o = r);
            if (!e.searchOptions || e.searchOptions && !e.searchOptions.disablePlaceFinder)
                o = o.concat(f || []),
                $.each(app.cfg.HELPER_SERVICES.geocode, function(e, t) {
                    n.push(u.getGeocoderRequest(t))
                });
            if (e.searchOptions && e.searchOptions.disablePlaceFinder && !o.length)
                if (f && f.length)
                    o.push(f[0]);
                else if (app.cfg.HELPER_SERVICES.geocode && app.cfg.HELPER_SERVICES.geocode.length) {
                    var l = !1;
                    $.each(app.cfg.HELPER_SERVICES.geocode, function(e, t) {
                        !l && t.url && (n.push(u.getGeocoderRequest(t)), l = !0)
                    })
                } else
                    o = null;
            var c = {
                map: e.map,
                allPlaceholder: e.placeHolder,
                enableButtonMode: e.enableButtonMode
            };
            o && o.length ? (this.checkForSourceNameDuplicates(o), c.sources = o) : c.placeholder = e.placeHolder || w.commonWebmap.selector.placeholderGenericGeocoder;
            var h = new a(c, e.domNode);
            if (n.length) {
                var p = new s(n);
                p.then(function(n) {
                    var r = u.processGeocoderRequestReturn(n, e.placeHolder),
                        i = h.get("sources").concat(r || []);
                    i.length && (u.setGeocodeSources(h, i), t.resolve(h))
                })
            } else {
                var d = h.get("sources");
                d.length && (u.setGeocodeSources(h, d), t.resolve(h))
            }
            return t
        },
        getGeocoderRequest: function(e) {
            var t = {
                url: e.url,
                content: {
                    f: "json"
                },
                handleAs: "json"
            };
            return !app.isInBuilder && !app.portal.user ? t.disableIdentityLookup = !0 : t.callbackParamName = "callback", u(t)
        },
        getLayerSources: function(e, t, n) {
            var r = this;
            return $.map(e, function(e) {
                var i = t.getLayer(e.id),
                    s = {
                        featureLayer: i,
                        searchFields: [e.field.name],
                        displayField: e.field.name,
                        exactMatch: e.field.exactMatch,
                        outFields: ["*"],
                        maxResults: 6,
                        name: r.findGeocoderName(i, e),
                        placeholder: n
                    };
                if (e.subLayer || e.subLayer === 0) {
                    var o = e.subLayer,
                        u;
                    (u = i.dynamicLayerInfos) && (u = u[e.subLayer]) && (u = u.source) && (o = u.mapLayerId),
                    s.featureLayer = new m(i.url + "/" + e.subLayer)
                }
                return s
            })
        },
        processGeocoderRequestReturn: function(e, t) {
            var n = [],
                r = this;
            return $.each(e, function(e, i) {
                if (!i[0] || !i[1] || !i[1].singleLineAddressField)
                    return;
                var s = app.cfg.HELPER_SERVICES.geocode[e],
                    o = new f(s.url),
                    u = {
                        singleLineFieldName: i[1].singleLineAddressField.name,
                        name: s.name ? s.name : i[1].name,
                        placeholder: s.placeholder || t || w.commonWebmap.selector.placeholderGenericGeocoder,
                        locator: o
                    };
                u.name = u.name || r.findGeocoderName({
                    url: o.url
                }),
                r.isEsriGeocoder({
                    url: s.url
                }) && (u.placeholder = w.commonWebmap.selector.placeholderGenericGeocoder);
                if (!i[1].capabilities || i[1].capabilities.toLowerCase().indexOf("suggest") < 0)
                    u.enableSuggestions = !1;
                n.push(u)
            }), n
        },
        processAppDataGeocoders: function(e) {
            if (!app.data.getWebAppData().getAppGeocoders)
                return;
            var t = app.data.getWebAppData().getAppGeocoders();
            if (!t || !t.length)
                return;
            t = t.slice();
            var r = [],
                i = this;
            return $.each(t, function(t, s) {
                if (s.url) {
                    var o = n.mixin({}, s);
                    o.locator = new f(o.url),
                    i.isEsriGeocoder({
                        url: o.url
                    }) ? (o.placeholder = w.commonWebmap.selector.placeholderGenericGeocoder, o.name = w.commonWebmap.selector.lblEsriGeocoder) : (o.placeholder = o.placeholder || e, o.name = o.name || i.findGeocoderName({
                        url: o.url
                    })),
                    r.push(o)
                }
            }), r
        },
        setGeocodeSources: function(e, t) {
            this.checkForSourceNameDuplicates(t),
            e.set("sources", t),
            e.set("activeSourceIndex", 0),
            e.startup()
        },
        checkForSourceNameDuplicates: function(e) {
            var t = [],
                n = this;
            $.each(e, function(e, r) {
                t.indexOf(r.name) >= 0 && (r.name = n.getAdjustedSourceName(t, r.name)),
                t.push(r.name)
            })
        },
        getAdjustedSourceName: function(e, t) {
            var n = 2,
                r = t + " - " + n;
            while (e.indexOf(r) >= 0)
                n++,
                r = t + " - " + n;
            return r
        },
        isEsriGeocoder: function(e) {
            return e.url ? e.url.match(/geocode(.){0,3}\.arcgis.com\/arcgis\/rest\/services\/World\/GeocodeServer/g) : (console.warn("no url on locator", e), !1)
        },
        findGeocoderName: function(e, t) {
            var n = t ? t.name || t.title : "";
            if (!n) {
                var r = app.mapItem ? app.mapItem.itemData.operationalLayers : [];
                r.some(function(t) {
                    return t.id === e.id ? (n = t.title, !0) : !1
                })
            }
            n = n || e.name || e.title;
            if (!n) {
                if (!this.isEsriGeocoder(e)) {
                    if (typeof e.url != "string" || !e.url.split)
                        return;
                    var i = e.url.split("/"),
                        s = i[i.length - 2];
                    s && (n = s);
                    return
                }
                n = w.commonWebmap.selector.lblEsriGeocoder
            }
            if (t && (t.subLayer || t.subLayer === 0)) {
                var o = e.dynamicLayerInfos || e.layerInfos,
                    u = o[t.subLayer];
                u && u.name && (n += " - " + u.name)
            }
            return n.replace(/_/g, " ")
        },
        colorsAreSimilar: function(e, t, n) {
            var r = this.getLuminance(e),
                i = this.getLuminance(t),
                s = (r + .05) / (i + .05);
            return i > r && (s = 1 / s), s >= 2.85 || n && s >= 2.2 ? !1 : !0
        },
        getLuminance: function(e) {
            var t = new r(e),
                n = t.toRgb().map(function(e) {
                    return e /= 255, e < .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
                });
            return .2126 * n[0] + .7152 * n[1] + .0722 * n[2]
        },
        debounce: function(e, t, n) {
            var r;
            return function() {
                var i = this,
                    s = arguments;
                clearTimeout(r),
                r = setTimeout(function() {
                    r = null,
                    n || e.apply(i, s)
                }, t),
                n && !r && e.apply(i, s)
            }
        },
        findDifferences: function(e, t) {
            var n = [],
                r = ["this"];
            return function(e, t) {
                if (e.constructor == Array)
                    if (!t || t.constructor != Array || t.length != e.length)
                        n.push({
                            Property: r.join(""),
                            ObjectA: e,
                            ObjectB: t
                        });
                    else
                        for (var i = 0; i < e.length; i++)
                            r.push("[" + i.toString() + "]"),
                            arguments.callee(e[i], t[i]),
                            r.pop();
                else if (e.constructor == Object || e.constructor != Number && e.constructor != String && e.constructor != Date && e.constructor != RegExp && e.constructor != Function && e.constructor != Boolean)
                    for (var s in e)
                        r.push("." + s),
                        t[s] ? e[s] && e[s].constructor != Function && arguments.callee(e[s], t[s]) : n.push({
                            Property: r.join(""),
                            ObjectA: e[s],
                            ObjectB: null
                        }),
                        r.pop();
                else
                    e.constructor != Function && e != t && n.push({
                        Property: r.join(""),
                        ObjectA: e,
                        ObjectB: t
                    })
            }(e, t), n
        }
    }
}),
define("storymaps/common/builder/PortalVersionTest", ["esri/arcgis/utils", "dojo/Deferred"], function(e, t) {
    function n() {
        return e.arcgisUrl.split("/sharing/")[0]
    }
    return {
        run: function() {
            var e = new t,
                r = null;
            app.portal.hasMyStories = null;
            var i = new Image,
                s = app.isProduction ? n() + "/apps/" : "../";
            return i.src = s + "MyStories/assets/my-stories-portal-detector.png", i.onload = function() {
                app.portal.hasMyStories = !0,
                r && clearTimeout(r),
                e.resolve()
            }, i.onerror = i.onabort = function() {
                app.portal.hasMyStories = !1,
                r && clearTimeout(r),
                e.reject()
            }, r = setTimeout(function() {
                e.reject()
            }, 2e3), e
        }
    }
}),
define("storymaps/common/builder/MyStoriesWrapper", ["./PortalVersionTest", "esri/IdentityManager", "storymaps/common/utils/CommonHelper", "dojo/topic"], function(e, t, n, r) {
    function i() {
        e.run().then(function() {
            app.isProduction && !f() ? s() : o()
        }, s)
    }
    function s() {
        $(".check-story").hide()
    }
    function o() {
        window.myStoriesInit = u,
        r.publish("MYSTORIES_SCAN", "start");
        var e = "../MyStories/index.html?fromBuilder";
        e += "&locale=" + dojo.locale,
        setTimeout(function() {
            $("#my-stories-frame").attr("src", e)
        }, 1e3)
    }
    function u() {
        var e = $("#my-stories-frame")[0].contentWindow;
        if (!e || !e.init || !e.check || !e.share) {
            console.error("Failed to load My Stories");
            return
        }
        if (!app.data.getStoryLength()) {
            console.log("Skipping the initialization of My Stories until the story has content");
            return
        }
        app.mystories = {
            init: e.init,
            check: e.check,
            share: e.share,
            isChecking: !1,
            hasCheckErrors: !1,
            hasScanErrors: !1
        },
        app.mystories.init(app.isInBuilder ? t.toJson() : null, app.isDirectCreationFirstSave || app.isGalleryCreation ? null : app.data.getWebAppItem(), app.cfg.TPL_ID, app.isPortal, function(e, t, n) {
            r.publish("MY-STORIES-EDIT-MEDIA", {
                index: e,
                type: t,
                actionId: n
            })
        }, function(e) {
            r.publish("MY-STORIES-EDIT-MAP", {
                id: e
            })
        }, function() {
            app.mystories.hasCheckErrors = !1,
            r.publish("MY-STORIES-REFRESH")
        }, function(e) {
            e = e || {
                completed: !1,
                ignoreAllIssues: !1
            },
            app.mystories.hasCheckErrors = !e.ignoreAllIssues,
            app.mystories.forcedIgnoreIssues = e.ignoreAllIssues,
            r.publish("MY-STORIES-REFRESH")
        }).then(a, function() {
            console.error("Failed to initialize My Stories")
        })
    }
    function a() {
        if (!app.mystories || !app.mystories.check)
            return;
        app.mystories.isChecking = !0,
        app.mystories.hasCheckErrors = !1,
        r.publish("MYSTORIES_SCAN", "start"),
        app.mystories.check(app.data.getWebAppData().get()).then(function(e) {
            e = e || {
                ignoreAllIssues: !1
            },
            app.mystories.isChecking = !1,
            app.mystories.hasCheckErrors = !1,
            app.mystories.forcedIgnoreIssues = e.ignoreAllIssues,
            r.publish("MYSTORIES_SCAN", "success"),
            $("#sharePopup").is(":visible") && app.builder.openSharePopup()
        }, function(e) {
            e = e || {
                completed: !1,
                ignoreAllIssues: !1
            },
            app.mystories.isChecking = !1,
            app.mystories.hasCheckErrors = !0,
            app.mystories.forcedIgnoreIssues = e.ignoreAllIssues,
            r.publish("MYSTORIES_SCAN", "error"),
            $("#sharePopup").is(":visible") && app.builder.openSharePopup()
        })
    }
    function f() {
        var e = n.getPortalURL().split("//").slice(-1)[0],
            t = e.split("."),
            r = document.location.host,
            i = r.split(".");
        return e == r || e.split("/").length > 1 && e.split("/")[0] == r ? !0 : i.length < 3 ? r == e : i.slice(1).join(".") == t.slice(-2).join(".")
    }
    return {
        loadMyStories: i,
        scanStory: a,
        myStoriesIsSameDomain: f
    }
}),
function() {
    "use strict";
    function e(t, r) {
        function s(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        var i;
        r = r || {},
        this.trackingClick = !1,
        this.trackingClickStart = 0,
        this.targetElement = null,
        this.touchStartX = 0,
        this.touchStartY = 0,
        this.lastTouchIdentifier = 0,
        this.touchBoundary = r.touchBoundary || 10,
        this.layer = t,
        this.tapDelay = r.tapDelay || 200,
        this.tapTimeout = r.tapTimeout || 700;
        if (e.notNeeded(t))
            return;
        var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"],
            u = this;
        for (var a = 0, f = o.length; a < f; a++)
            u[o[a]] = s(u[o[a]], u);
        n && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)),
        t.addEventListener("click", this.onClick, !0),
        t.addEventListener("touchstart", this.onTouchStart, !1),
        t.addEventListener("touchmove", this.onTouchMove, !1),
        t.addEventListener("touchend", this.onTouchEnd, !1),
        t.addEventListener("touchcancel", this.onTouchCancel, !1),
        Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, r) {
            var i = Node.prototype.removeEventListener;
            e === "click" ? i.call(t, e, n.hijacked || n, r) : i.call(t, e, n, r)
        }, t.addEventListener = function(e, n, r) {
            var i = Node.prototype.addEventListener;
            e === "click" ? i.call(t, e, n.hijacked || (n.hijacked = function(e) {
                e.propagationStopped || n(e)
            }), r) : i.call(t, e, n, r)
        }),
        typeof t.onclick == "function" && (i = t.onclick, t.addEventListener("click", function(e) {
            i(e)
        }, !1), t.onclick = null)
    }
    var t = navigator.userAgent.indexOf("Windows Phone") >= 0,
        n = navigator.userAgent.indexOf("Android") > 0 && !t,
        r = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
        i = r && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        s = r && /OS [6-7]_\d/.test(navigator.userAgent),
        o = navigator.userAgent.indexOf("BB10") > 0;
    e.prototype.needsClick = function(e) {
        switch (e.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (e.disabled)
                return !0;
            break;
        case "input":
            if (r && e.type === "file" || e.disabled)
                return !0;
            break;
        case "label":
        case "iframe":
        case "video":
            return !0
        }
        return /\bneedsclick\b/.test(e.className)
    },
    e.prototype.needsFocus = function(e) {
        switch (e.nodeName.toLowerCase()) {
        case "textarea":
            return !0;
        case "select":
            return !n;
        case "input":
            switch (e.type) {
            case "button":
            case "checkbox":
            case "file":
            case "image":
            case "radio":
            case "submit":
                return !1
            }
            return !e.disabled && !e.readOnly;
        default:
            return /\bneedsfocus\b/.test(e.className)
        }
    },
    e.prototype.sendClick = function(e, t) {
        var n,
            r;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(),
        r = t.changedTouches[0],
        n = document.createEvent("MouseEvents"),
        n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null),
        n.forwardedTouchEvent = !0,
        e.dispatchEvent(n)
    },
    e.prototype.determineEventType = function(e) {
        return n && e.tagName.toLowerCase() === "select" ? "mousedown" : "click"
    },
    e.prototype.focus = function(e) {
        var t;
        r && e.setSelectionRange && e.type.indexOf("date") !== 0 && e.type !== "time" && e.type !== "month" ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
    },
    e.prototype.updateScrollParent = function(e) {
        var t,
            n;
        t = e.fastClickScrollParent;
        if (!t || !t.contains(e)) {
            n = e;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    t = n,
                    e.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while (n)
        }
        t && (t.fastClickLastScrollTop = t.scrollTop)
    },
    e.prototype.getTargetElementFromEventTarget = function(e) {
        return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
    },
    e.prototype.onTouchStart = function(e) {
        var t,
            n,
            s;
        if (e.targetTouches.length > 1)
            return !0;
        t = this.getTargetElementFromEventTarget(e.target),
        n = e.targetTouches[0];
        if (r) {
            s = window.getSelection();
            if (s.rangeCount && !s.isCollapsed)
                return !0;
            if (!i) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier)
                    return e.preventDefault(), !1;
                this.lastTouchIdentifier = n.identifier,
                this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
    },
    e.prototype.touchHasMoved = function(e) {
        var t = e.changedTouches[0],
            n = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n ? !0 : !1
    },
    e.prototype.onTouchMove = function(e) {
        if (!this.trackingClick)
            return !0;
        if (this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e))
            this.trackingClick = !1,
            this.targetElement = null;
        return !0
    },
    e.prototype.findControl = function(e) {
        return e.control !== undefined ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    },
    e.prototype.onTouchEnd = function(e) {
        var t,
            o,
            u,
            a,
            f,
            l = this.targetElement;
        if (!this.trackingClick)
            return !0;
        if (e.timeStamp - this.lastClickTime < this.tapDelay)
            return this.cancelNextClick = !0, !0;
        if (e.timeStamp - this.trackingClickStart > this.tapTimeout)
            return !0;
        this.cancelNextClick = !1,
        this.lastClickTime = e.timeStamp,
        o = this.trackingClickStart,
        this.trackingClick = !1,
        this.trackingClickStart = 0,
        s && (f = e.changedTouches[0], l = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset) || l, l.fastClickScrollParent = this.targetElement.fastClickScrollParent),
        u = l.tagName.toLowerCase();
        if (u === "label") {
            t = this.findControl(l);
            if (t) {
                this.focus(l);
                if (n)
                    return !1;
                l = t
            }
        } else if (this.needsFocus(l)) {
            if (e.timeStamp - o > 100 || r && window.top !== window && u === "input")
                return this.targetElement = null, !1;
            this.focus(l),
            this.sendClick(l, e);
            if (!r || u !== "select")
                this.targetElement = null,
                e.preventDefault();
            return !1
        }
        if (r && !i) {
            a = l.fastClickScrollParent;
            if (a && a.fastClickLastScrollTop !== a.scrollTop)
                return !0
        }
        return this.needsClick(l) || (e.preventDefault(), this.sendClick(l, e)), !1
    },
    e.prototype.onTouchCancel = function() {
        this.trackingClick = !1,
        this.targetElement = null
    },
    e.prototype.onMouse = function(e) {
        return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0 : !0
    },
    e.prototype.onClick = function(e) {
        var t;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : e.target.type === "submit" && e.detail === 0 ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t)
    },
    e.prototype.destroy = function() {
        var e = this.layer;
        n && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)),
        e.removeEventListener("click", this.onClick, !0),
        e.removeEventListener("touchstart", this.onTouchStart, !1),
        e.removeEventListener("touchmove", this.onTouchMove, !1),
        e.removeEventListener("touchend", this.onTouchEnd, !1),
        e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    },
    e.notNeeded = function(e) {
        var t,
            r,
            i,
            s;
        if (typeof window.ontouchstart == "undefined")
            return !0;
        r = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
        if (r) {
            if (!n)
                return !0;
            t = document.querySelector("meta[name=viewport]");
            if (t) {
                if (t.content.indexOf("user-scalable=no") !== -1)
                    return !0;
                if (r > 31 && document.documentElement.scrollWidth <= window.outerWidth)
                    return !0
            }
        }
        if (o) {
            i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
            if (i[1] >= 10 && i[2] >= 3) {
                t = document.querySelector("meta[name=viewport]");
                if (t) {
                    if (t.content.indexOf("user-scalable=no") !== -1)
                        return !0;
                    if (document.documentElement.scrollWidth <= window.outerWidth)
                        return !0
                }
            }
        }
        if (e.style.msTouchAction === "none" || e.style.touchAction === "manipulation")
            return !0;
        s = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
        if (s >= 27) {
            t = document.querySelector("meta[name=viewport]");
            if (t && (t.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))
                return !0
        }
        return e.style.touchAction === "none" || e.style.touchAction === "manipulation" ? !0 : !1
    },
    e.attach = function(t, n) {
        return new e(t, n)
    },
    typeof define == "function" && typeof define.amd == "object" && define.amd ? define("lib-app/jquery.fastClick", [], function() {
        return e
    }) : typeof module != "undefined" && module.exports ? (module.exports = e.attach, module.exports.FastClick = e) : window.FastClick = e
}();
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && e(n);
        return r && r.length ? r : t.parent()
    }
    function n(n) {
        n && 3 === n.which || (e(i).remove(), e(s).each(function() {
            var r = e(this),
                i = t(r),
                s = {
                    relatedTarget: this
                };
            i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(i[0], n.target) || (i.trigger(n = e.Event("hide.bs.dropdown", s)), n.isDefaultPrevented() || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger("hidden.bs.dropdown", s))))
        }))
    }
    function r(t) {
        return this.each(function() {
            var n = e(this),
                r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new o(this)),
            "string" == typeof t && r[t].call(n)
        })
    }
    var i = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        o = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    o.VERSION = "3.3.5",
    o.prototype.toggle = function(r) {
        var i = e(this);
        if (!i.is(".disabled, :disabled")) {
            var s = t(i),
                o = s.hasClass("open");
            if (n(), !o) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var u = {
                    relatedTarget: this
                };
                if (s.trigger(r = e.Event("show.bs.dropdown", u)), r.isDefaultPrevented())
                    return;
                i.trigger("focus").attr("aria-expanded", "true"),
                s.toggleClass("open").trigger("shown.bs.dropdown", u)
            }
            return !1
        }
    },
    o.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var r = e(this);
            if (n.preventDefault(), n.stopPropagation(), !r.is(".disabled, :disabled")) {
                var i = t(r),
                    o = i.hasClass("open");
                if (!o && 27 != n.which || o && 27 == n.which)
                    return 27 == n.which && i.find(s).trigger("focus"), r.trigger("click");
                var u = " li:not(.disabled):visible a",
                    a = i.find(".dropdown-menu" + u);
                if (a.length) {
                    var f = a.index(n.target);
                    38 == n.which && f > 0 && f--,
                    40 == n.which && f < a.length - 1 && f++,
                    ~f || (f = 0),
                    a.eq(f).trigger("focus")
                }
            }
        }
    };
    var u = e.fn.dropdown;
    e.fn.dropdown = r,
    e.fn.dropdown.Constructor = o,
    e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = u, this
    },
    e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery),
+function(e) {
    "use strict";
    function t(t, r) {
        return this.each(function() {
            var s = e(this),
                u = s.data("bs.modal"),
                a = e.extend({}, n.DEFAULTS, s.data(), "object" == typeof t && t);
            u || s.data("bs.modal", u = new n(this, a)),
            "string" == typeof t ? u[t](r) : a.show && u.show(r)
        })
    }
    var n = function(t, n) {
        this.options = n,
        this.$body = e(document.body),
        this.$element = e(t),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.5",
    n.TRANSITION_DURATION = 300,
    n.BACKDROP_TRANSITION_DURATION = 150,
    n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    },
    n.prototype.show = function(t) {
        var r = this,
            s = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(s),
        this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            r.$element.one("mouseup.dismiss.bs.modal", function(t) {
                e(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var s = e.support.transition && r.$element.hasClass("fade");
            r.$element.parent().length || r.$element.appendTo(r.$body),
            r.$element.show().scrollTop(0),
            r.adjustDialog(),
            s && r.$element[0].offsetWidth,
            r.$element.addClass("in"),
            r.enforceFocus();
            var u = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            s ? r.$dialog.one("bsTransitionEnd", function() {
                r.$element.trigger("focus").trigger(u)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
        }))
    },
    n.prototype.hide = function(t) {
        t && t.preventDefault(),
        t = e.Event("hide.bs.modal"),
        this.$element.trigger(t),
        this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    },
    n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    },
    n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    },
    n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    },
    n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(),
        this.backdrop(function() {
            e.$body.removeClass("modal-open"),
            e.resetAdjustments(),
            e.resetScrollbar(),
            e.$element.trigger("hidden.bs.modal")
        })
    },
    n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    },
    n.prototype.backdrop = function(t) {
        var r = this,
            s = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = e.support.transition && s;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t)
                return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var u = function() {
                r.removeBackdrop(),
                t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : u()
        } else
            t && t()
    },
    n.prototype.handleUpdate = function() {
        this.adjustDialog()
    },
    n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    },
    n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    },
    n.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e,
        this.scrollbarWidth = this.measureScrollbar()
    },
    n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "",
        this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    },
    n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    },
    n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure",
        this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var r = e.fn.modal;
    e.fn.modal = t,
    e.fn.modal.Constructor = n,
    e.fn.modal.noConflict = function() {
        return e.fn.modal = r, this
    },
    e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var r = e(this),
            i = r.attr("href"),
            s = e(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            o = s.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(i) && i
            }, s.data(), r.data());
        r.is("a") && n.preventDefault(),
        s.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        }),
        t.call(s, o, this)
    })
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var r = e(this),
                s = r.data("bs.tooltip"),
                o = "object" == typeof t && t;
            (s || !/destroy|hide/.test(t)) && (s || r.data("bs.tooltip", s = new n(this, o)), "string" == typeof t && s[t]())
        })
    }
    var n = function(e, t) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.5",
    n.TRANSITION_DURATION = 150,
    n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    n.prototype.init = function(t, n, r) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), s = i.length; s--;) {
            var o = i[s];
            if ("click" == o)
                this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != o) {
                var u = "hover" == o ? "mouseenter" : "focusin",
                    a = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(u + "." + this.type, this.options.selector, e.proxy(this.enter, this)),
                this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    },
    n.prototype.getDefaults = function() {
        return n.DEFAULTS
    },
    n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    },
    n.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, r) {
            n[e] != r && (t[e] = r)
        }), t
    },
    n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void (n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void (n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    },
    n.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e])
                return !0;
        return !1
    },
    n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void (n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    },
    n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var r = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !r)
                return;
            var s = this,
                o = this.tip(),
                u = this.getUID(this.type);
            this.setContent(),
            o.attr("id", u),
            this.$element.attr("aria-describedby", u),
            this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                f = /\s?auto?\s?/i,
                l = f.test(a);
            l && (a = a.replace(f, "") || "top"),
            o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this),
            this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                h = o[0].offsetWidth,
                p = o[0].offsetHeight;
            if (l) {
                var d = a,
                    v = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + p > v.bottom ? "top" : "top" == a && c.top - p < v.top ? "bottom" : "right" == a && c.right + h > v.width ? "left" : "left" == a && c.left - h < v.left ? "right" : a,
                o.removeClass(d).addClass(a)
            }
            var m = this.getCalculatedOffset(a, c, h, p);
            this.applyPlacement(m, a);
            var g = function() {
                var e = s.hoverState;
                s.$element.trigger("shown.bs." + s.type),
                s.hoverState = null,
                "out" == e && s.leave(s)
            };
            e.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    },
    n.prototype.applyPlacement = function(t, n) {
        var r = this.tip(),
            i = r[0].offsetWidth,
            s = r[0].offsetHeight,
            o = parseInt(r.css("margin-top"), 10),
            u = parseInt(r.css("margin-left"), 10);
        isNaN(o) && (o = 0),
        isNaN(u) && (u = 0),
        t.top += o,
        t.left += u,
        e.offset.setOffset(r[0], e.extend({
            using: function(e) {
                r.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0),
        r.addClass("in");
        var a = r[0].offsetWidth,
            f = r[0].offsetHeight;
        "top" == n && f != s && (t.top = t.top + s - f);
        var l = this.getViewportAdjustedDelta(n, t, a, f);
        l.left ? t.left += l.left : t.top += l.top;
        var c = /top|bottom/.test(n),
            h = c ? 2 * l.left - i + a : 2 * l.top - s + f,
            p = c ? "offsetWidth" : "offsetHeight";
        r.offset(t),
        this.replaceArrow(h, r[0][p], c)
    },
    n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    },
    n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
        e.removeClass("fade in top bottom left right")
    },
    n.prototype.hide = function(t) {
        function r() {
            "in" != s.hoverState && o.detach(),
            s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type),
            t && t()
        }
        var s = this,
            o = e(this.$tip),
            u = e.Event("hide.bs." + this.type);
        return this.$element.trigger(u), u.isDefaultPrevented() ? void 0 : (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), this.hoverState = null, this)
    },
    n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    },
    n.prototype.hasContent = function() {
        return this.getTitle()
    },
    n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0],
            r = "BODY" == n.tagName,
            i = n.getBoundingClientRect();
        null == i.width && (i = e.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var s = r ? {
                top: 0,
                left: 0
            } : t.offset(),
            o = {
                scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            u = r ? {
                width: e(window).width(),
                height: e(window).height()
            } : null;
        return e.extend({}, i, o, u, s)
    },
    n.prototype.getCalculatedOffset = function(e, t, n, r) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - r,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    },
    n.prototype.getViewportAdjustedDelta = function(e, t, n, r) {
        var i = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return i;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            o = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var u = t.top - s - o.scroll,
                a = t.top + s - o.scroll + r;
            u < o.top ? i.top = o.top - u : a > o.top + o.height && (i.top = o.top + o.height - a)
        } else {
            var f = t.left - s,
                l = t.left + s + n;
            f < o.left ? i.left = o.left - f : l > o.right && (i.left = o.left + o.width - l)
        }
        return i
    },
    n.prototype.getTitle = function() {
        var e,
            t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    },
    n.prototype.getUID = function(e) {
        do e += ~~(1e6 * Math.random());
        while (document.getElementById(e));
        return e
    },
    n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    },
    n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    },
    n.prototype.enable = function() {
        this.enabled = !0
    },
    n.prototype.disable = function() {
        this.enabled = !1
    },
    n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    },
    n.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))),
        t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    },
    n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type),
            e.$tip && e.$tip.detach(),
            e.$tip = null,
            e.$arrow = null,
            e.$viewport = null
        })
    };
    var r = e.fn.tooltip;
    e.fn.tooltip = t,
    e.fn.tooltip.Constructor = n,
    e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = r, this
    }
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var r = e(this),
                s = r.data("bs.popover"),
                o = "object" == typeof t && t;
            (s || !/destroy|hide/.test(t)) && (s || r.data("bs.popover", s = new n(this, o)), "string" == typeof t && s[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.5",
    n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype),
    n.prototype.constructor = n,
    n.prototype.getDefaults = function() {
        return n.DEFAULTS
    },
    n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t),
        e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n),
        e.removeClass("fade top bottom left right in"),
        e.find(".popover-title").html() || e.find(".popover-title").hide()
    },
    n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    },
    n.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    },
    n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var r = e.fn.popover;
    e.fn.popover = t,
    e.fn.popover.Constructor = n,
    e.fn.popover.noConflict = function() {
        return e.fn.popover = r, this
    }
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.tab");
            i || r.data("bs.tab", i = new n(this)),
            "string" == typeof t && i[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.5",
    n.TRANSITION_DURATION = 150,
    n.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            r = t.data("target");
        if (r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var i = n.find(".active:last a"),
                s = e.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                o = e.Event("show.bs.tab", {
                    relatedTarget: i[0]
                });
            if (i.trigger(s), t.trigger(o), !o.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var u = e(r);
                this.activate(t.closest("li"), n),
                this.activate(u, u.parent(), function() {
                    i.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }),
                    t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                })
            }
        }
    },
    n.prototype.activate = function(t, r, i) {
        function s() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            u ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"),
            t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            i && i()
        }
        var o = r.find("> .active"),
            u = i && e.support.transition && (o.length && o.hasClass("fade") || !!r.find("> .fade").length);
        o.length && u ? o.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s(),
        o.removeClass("in")
    };
    var r = e.fn.tab;
    e.fn.tab = t,
    e.fn.tab.Constructor = n,
    e.fn.tab.noConflict = function() {
        return e.fn.tab = r, this
    };
    var i = function(n) {
        n.preventDefault(),
        t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery),
+function(e) {
    "use strict";
    function t(t) {
        var n,
            r = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(r)
    }
    function n(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("bs.collapse"),
                s = e.extend({}, r.DEFAULTS, n.data(), "object" == typeof t && t);
            !i && s.toggle && /show|hide/.test(t) && (s.toggle = !1),
            i || n.data("bs.collapse", i = new r(this, s)),
            "string" == typeof t && i[t]()
        })
    }
    var r = function(t, n) {
        this.$element = e(t),
        this.options = e.extend({}, r.DEFAULTS, n),
        this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    r.VERSION = "3.3.5",
    r.TRANSITION_DURATION = 350,
    r.DEFAULTS = {
        toggle: !0
    },
    r.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    },
    r.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t,
                i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(i && i.length && (t = i.data("bs.collapse"), t && t.transitioning))) {
                var s = e.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    i && i.length && (n.call(i, "hide"), t || i.data("bs.collapse", null));
                    var u = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[u](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition)
                        return a.call(this);
                    var f = e.camelCase(["scroll", u].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[u](this.$element[0][f])
                }
            }
        }
    },
    r.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : i.call(this)
            }
        }
    },
    r.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    },
    r.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, r) {
            var i = e(r);
            this.addAriaAndCollapsedClass(t(i), i)
        }, this)).end()
    },
    r.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n),
        t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var i = e.fn.collapse;
    e.fn.collapse = n,
    e.fn.collapse.Constructor = r,
    e.fn.collapse.noConflict = function() {
        return e.fn.collapse = i, this
    },
    e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(r) {
        var i = e(this);
        i.attr("data-target") || r.preventDefault();
        var s = t(i),
            o = s.data("bs.collapse"),
            u = o ? "toggle" : i.data();
        n.call(s, u)
    })
}(jQuery),
+function(e) {
    "use strict";
    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n])
                return {
                    end: t[n]
                };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            r = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var i = function() {
            n || e(r).trigger(e.support.transition.end)
        };
        return setTimeout(i, t), this
    },
    e(function() {
        e.support.transition = t(),
        e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
define("lib-app/bootstrap/js/bootstrap.min", function() {}),
typeof JSON != "object" && (JSON = {}),
function() {
    "use strict";
    function f(e) {
        return e < 10 ? "0" + e : e
    }
    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
            var t = meta[e];
            return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }
    function str(e, t) {
        var n,
            r,
            i,
            s,
            o = gap,
            u,
            a = t[e];
        a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)),
        typeof rep == "function" && (a = rep.call(t, e, a));
        switch (typeof a) {
        case "string":
            return quote(a);
        case "number":
            return isFinite(a) ? String(a) : "null";
        case "boolean":
        case "null":
            return String(a);
        case "object":
            if (!a)
                return "null";
            gap += indent,
            u = [];
            if (Object.prototype.toString.apply(a) === "[object Array]") {
                s = a.length;
                for (n = 0; n < s; n += 1)
                    u[n] = str(n, a) || "null";
                return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
            }
            if (rep && typeof rep == "object") {
                s = rep.length;
                for (n = 0; n < s; n += 1)
                    typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
            } else
                for (r in a)
                    Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
            return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
        }
    }
    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function(e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function(e, t, n) {
        var r;
        gap = "",
        indent = "";
        if (typeof n == "number")
            for (r = 0; r < n; r += 1)
                indent += " ";
        else
            typeof n == "string" && (indent = n);
        rep = t;
        if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number")
            return str("", {
                "": e
            });
        throw new Error("JSON.stringify")
    }),
    typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
        function walk(e, t) {
            var n,
                r,
                i = e[t];
            if (i && typeof i == "object")
                for (n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
            return reviver.call(e, t, i)
        }
        var j;
        text = String(text),
        cx.lastIndex = 0,
        cx.test(text) && (text = text.replace(cx, function(e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
                "": j
            }, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(),
function(e, t) {
    "use strict";
    var n = e.History = e.History || {};
    if (typeof n.Adapter != "undefined")
        throw new Error("History.js Adapter has already been loaded...");
    n.Adapter = {
        handlers: {},
        _uid: 1,
        uid: function(e) {
            return e._uid || (e._uid = n.Adapter._uid++)
        },
        bind: function(e, t, r) {
            var i = n.Adapter.uid(e);
            n.Adapter.handlers[i] = n.Adapter.handlers[i] || {},
            n.Adapter.handlers[i][t] = n.Adapter.handlers[i][t] || [],
            n.Adapter.handlers[i][t].push(r),
            e["on" + t] = function(e, t) {
                return function(r) {
                    n.Adapter.trigger(e, t, r)
                }
            }(e, t)
        },
        trigger: function(e, t, r) {
            r = r || {};
            var i = n.Adapter.uid(e),
                s,
                o;
            n.Adapter.handlers[i] = n.Adapter.handlers[i] || {},
            n.Adapter.handlers[i][t] = n.Adapter.handlers[i][t] || [];
            for (s = 0, o = n.Adapter.handlers[i][t].length; s < o; ++s)
                n.Adapter.handlers[i][t][s].apply(this, [r])
        },
        extractEventData: function(e, n) {
            var r = n && n[e] || t;
            return r
        },
        onDomLoad: function(t) {
            var n = e.setTimeout(function() {
                t()
            }, 2e3);
            e.onload = function() {
                clearTimeout(n),
                t()
            }
        }
    },
    typeof n.init != "undefined" && n.init()
}(window),
function(e, t) {
    "use strict";
    var n = e.document,
        r = e.setTimeout || r,
        i = e.clearTimeout || i,
        s = e.setInterval || s,
        o = e.History = e.History || {};
    if (typeof o.initHtml4 != "undefined")
        throw new Error("History.js HTML4 Support has already been loaded...");
    o.initHtml4 = function() {
        if (typeof o.initHtml4.initialized != "undefined")
            return !1;
        o.initHtml4.initialized = !0,
        o.enabled = !0,
        o.savedHashes = [],
        o.isLastHash = function(e) {
            var t = o.getHashByIndex(),
                n;
            return n = e === t, n
        },
        o.isHashEqual = function(e, t) {
            return e = encodeURIComponent(e).replace(/%25/g, "%"), t = encodeURIComponent(t).replace(/%25/g, "%"), e === t
        },
        o.saveHash = function(e) {
            return o.isLastHash(e) ? !1 : (o.savedHashes.push(e), !0)
        },
        o.getHashByIndex = function(e) {
            var t = null;
            return typeof e == "undefined" ? t = o.savedHashes[o.savedHashes.length - 1] : e < 0 ? t = o.savedHashes[o.savedHashes.length + e] : t = o.savedHashes[e], t
        },
        o.discardedHashes = {},
        o.discardedStates = {},
        o.discardState = function(e, t, n) {
            var r = o.getHashByState(e),
                i;
            return i = {
                discardedState: e,
                backState: n,
                forwardState: t
            }, o.discardedStates[r] = i, !0
        },
        o.discardHash = function(e, t, n) {
            var r = {
                discardedHash: e,
                backState: n,
                forwardState: t
            };
            return o.discardedHashes[e] = r, !0
        },
        o.discardedState = function(e) {
            var t = o.getHashByState(e),
                n;
            return n = o.discardedStates[t] || !1, n
        },
        o.discardedHash = function(e) {
            var t = o.discardedHashes[e] || !1;
            return t
        },
        o.recycleState = function(e) {
            var t = o.getHashByState(e);
            return o.discardedState(e) && delete o.discardedStates[t], !0
        },
        o.emulated.hashChange && (o.hashChangeInit = function() {
            o.checkerFunction = null;
            var t = "",
                r,
                i,
                u,
                a,
                f = Boolean(o.getHash());
            return o.isInternetExplorer() ? (r = "historyjs-iframe", i = n.createElement("iframe"), i.setAttribute("id", r), i.setAttribute("src", "#"), i.style.display = "none", n.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.close(), u = "", a = !1, o.checkerFunction = function() {
                if (a)
                    return !1;
                a = !0;
                var n = o.getHash(),
                    r = o.getHash(i.contentWindow.document);
                return n !== t ? (t = n, r !== n && (u = r = n, i.contentWindow.document.open(), i.contentWindow.document.close(), i.contentWindow.document.location.hash = o.escapeHash(n)), o.Adapter.trigger(e, "hashchange")) : r !== u && (u = r, f && r === "" ? o.back() : o.setHash(r, !1)), a = !1, !0
            }) : o.checkerFunction = function() {
                var n = o.getHash() || "";
                return n !== t && (t = n, o.Adapter.trigger(e, "hashchange")), !0
            }, o.intervalList.push(s(o.checkerFunction, o.options.hashChangeInterval)), !0
        }, o.Adapter.onDomLoad(o.hashChangeInit)),
        o.emulated.pushState && (o.onHashChange = function(t) {
            var n = t && t.newURL || o.getLocationHref(),
                r = o.getHashByUrl(n),
                i = null,
                s = null,
                u = null,
                a;
            return o.isLastHash(r) ? (o.busy(!1), !1) : (o.doubleCheckComplete(), o.saveHash(r), r && o.isTraditionalAnchor(r) ? (o.Adapter.trigger(e, "anchorchange"), o.busy(!1), !1) : (i = o.extractState(o.getFullUrl(r || o.getLocationHref()), !0), o.isLastSavedState(i) ? (o.busy(!1), !1) : (s = o.getHashByState(i), a = o.discardedState(i), a ? (o.getHashByIndex(-2) === o.getHashByState(a.forwardState) ? o.back(!1) : o.forward(!1), !1) : (o.pushState(i.data, i.title, encodeURI(i.url), !1), !0))))
        }, o.Adapter.bind(e, "hashchange", o.onHashChange), o.pushState = function(t, n, r, i) {
            r = encodeURI(r).replace(/%25/g, "%");
            if (o.getHashByUrl(r))
                throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
            if (i !== !1 && o.busy())
                return o.pushQueue({
                    scope: o,
                    callback: o.pushState,
                    args: arguments,
                    queue: i
                }), !1;
            o.busy(!0);
            var s = o.createStateObject(t, n, r),
                u = o.getHashByState(s),
                a = o.getState(!1),
                f = o.getHashByState(a),
                l = o.getHash(),
                c = o.expectedStateId == s.id;
            return o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), u === f ? (o.busy(!1), !1) : (o.saveState(s), c || o.Adapter.trigger(e, "statechange"), !o.isHashEqual(u, l) && !o.isHashEqual(u, o.getShortUrl(o.getLocationHref())) && o.setHash(u, !1), o.busy(!1), !0)
        }, o.replaceState = function(t, n, r, i) {
            r = encodeURI(r).replace(/%25/g, "%");
            if (o.getHashByUrl(r))
                throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
            if (i !== !1 && o.busy())
                return o.pushQueue({
                    scope: o,
                    callback: o.replaceState,
                    args: arguments,
                    queue: i
                }), !1;
            o.busy(!0);
            var s = o.createStateObject(t, n, r),
                u = o.getHashByState(s),
                a = o.getState(!1),
                f = o.getHashByState(a),
                l = o.getStateByIndex(-2);
            return o.discardState(a, s, l), u === f ? (o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), o.saveState(s), o.Adapter.trigger(e, "statechange"), o.busy(!1)) : o.pushState(s.data, s.title, s.url, !1), !0
        }),
        o.emulated.pushState && o.getHash() && !o.emulated.hashChange && o.Adapter.onDomLoad(function() {
            o.Adapter.trigger(e, "hashchange")
        })
    },
    typeof o.init != "undefined" && o.init()
}(window),
function(e, t) {
    "use strict";
    var n = e.console || t,
        r = e.document,
        i = e.navigator,
        s = !1,
        o = e.setTimeout,
        u = e.clearTimeout,
        a = e.setInterval,
        f = e.clearInterval,
        l = e.JSON,
        c = e.alert,
        h = e.History = e.History || {},
        p = e.history;
    try {
        s = e.sessionStorage,
        s.setItem("TEST", "1"),
        s.removeItem("TEST")
    } catch (d) {
        s = !1
    }
    l.stringify = l.stringify || l.encode,
    l.parse = l.parse || l.decode;
    if (typeof h.init != "undefined")
        throw new Error("History.js Core has already been loaded...");
    h.init = function(e) {
        return typeof h.Adapter == "undefined" ? !1 : (typeof h.initCore != "undefined" && h.initCore(), typeof h.initHtml4 != "undefined" && h.initHtml4(), !0)
    },
    h.initCore = function(d) {
        if (typeof h.initCore.initialized != "undefined")
            return !1;
        h.initCore.initialized = !0,
        h.options = h.options || {},
        h.options.hashChangeInterval = h.options.hashChangeInterval || 100,
        h.options.safariPollInterval = h.options.safariPollInterval || 500,
        h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500,
        h.options.disableSuid = h.options.disableSuid || !1,
        h.options.storeInterval = h.options.storeInterval || 1e3,
        h.options.busyDelay = h.options.busyDelay || 250,
        h.options.debug = h.options.debug || !1,
        h.options.initialTitle = h.options.initialTitle || r.title,
        h.options.html4Mode = h.options.html4Mode || !1,
        h.options.delayInit = h.options.delayInit || !1,
        h.intervalList = [],
        h.clearAllIntervals = function() {
            var e,
                t = h.intervalList;
            if (typeof t != "undefined" && t !== null) {
                for (e = 0; e < t.length; e++)
                    f(t[e]);
                h.intervalList = null
            }
        },
        h.debug = function() {
            (h.options.debug || !1) && h.log.apply(h, arguments)
        },
        h.log = function() {
            var e = typeof n != "undefined" && typeof n.log != "undefined" && typeof n.log.apply != "undefined",
                t = r.getElementById("log"),
                i,
                s,
                o,
                u,
                a;
            e ? (u = Array.prototype.slice.call(arguments), i = u.shift(), typeof n.debug != "undefined" ? n.debug.apply(n, [i, u]) : n.log.apply(n, [i, u])) : i = "\n" + arguments[0] + "\n";
            for (s = 1, o = arguments.length; s < o; ++s) {
                a = arguments[s];
                if (typeof a == "object" && typeof l != "undefined")
                    try {
                        a = l.stringify(a)
                    } catch (f) {}
                i += "\n" + a + "\n"
            }
            return t ? (t.value += i + "\n-----\n", t.scrollTop = t.scrollHeight - t.clientHeight) : e || c(i), !0
        },
        h.getInternetExplorerMajorVersion = function() {
            var e = h.getInternetExplorerMajorVersion.cached = typeof h.getInternetExplorerMajorVersion.cached != "undefined" ? h.getInternetExplorerMajorVersion.cached : function() {
                var e = 3,
                    t = r.createElement("div"),
                    n = t.getElementsByTagName("i");
                while ((t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && n[0])
                    ;
                return e > 4 ? e : !1
            }();
            return e
        },
        h.isInternetExplorer = function() {
            var e = h.isInternetExplorer.cached = typeof h.isInternetExplorer.cached != "undefined" ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());
            return e
        },
        h.options.html4Mode ? h.emulated = {
            pushState: !0,
            hashChange: !0
        } : h.emulated = {
            pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),
            hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
        },
        h.enabled = !h.emulated.pushState,
        h.bugs = {
            setHash: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
            safariPoll: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
            ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
            hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
        },
        h.isEmptyObject = function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t))
                    return !1;
            return !0
        },
        h.cloneObject = function(e) {
            var t,
                n;
            return e ? (t = l.stringify(e), n = l.parse(t)) : n = {}, n
        },
        h.getRootUrl = function() {
            var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);
            if (r.location.port || !1)
                e += ":" + r.location.port;
            return e += "/", e
        },
        h.getBaseHref = function() {
            var e = r.getElementsByTagName("base"),
                t = null,
                n = "";
            return e.length === 1 && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n
        },
        h.getBaseUrl = function() {
            var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
            return e
        },
        h.getPageUrl = function() {
            var e = h.getState(!1, !1),
                t = (e || {}).url || h.getLocationHref(),
                n;
            return n = t.replace(/\/+$/, "").replace(/[^\/]+$/, function(e, t, n) {
                return /\./.test(e) ? e : e + "/"
            }), n
        },
        h.getBasePageUrl = function() {
            var e = h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(e, t, n) {
                return /[^\/]$/.test(e) ? "" : e
            }).replace(/\/+$/, "") + "/";
            return e
        },
        h.getFullUrl = function(e, t) {
            var n = e,
                r = e.substring(0, 1);
            return t = typeof t == "undefined" ? !0 : t, /[a-z]+\:\/\//.test(e) || (r === "/" ? n = h.getRootUrl() + e.replace(/^\/+/, "") : r === "#" ? n = h.getPageUrl().replace(/#.*/, "") + e : r === "?" ? n = h.getPageUrl().replace(/[\?#].*/, "") + e : t ? n = h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
        },
        h.getShortUrl = function(e) {
            var t = e,
                n = h.getBaseUrl(),
                r = h.getRootUrl();
            return h.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), t
        },
        h.getLocationHref = function(e) {
            return e = e || r, e.URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : e.URL.indexOf("#") == -1 && e.location.href.indexOf("#") != -1 ? e.location.href : e.URL || e.location.href
        },
        h.store = {},
        h.idToState = h.idToState || {},
        h.stateToId = h.stateToId || {},
        h.urlToId = h.urlToId || {},
        h.storedStates = h.storedStates || [],
        h.savedStates = h.savedStates || [],
        h.normalizeStore = function() {
            h.store.idToState = h.store.idToState || {},
            h.store.urlToId = h.store.urlToId || {},
            h.store.stateToId = h.store.stateToId || {}
        },
        h.getState = function(e, t) {
            typeof e == "undefined" && (e = !0),
            typeof t == "undefined" && (t = !0);
            var n = h.getLastSavedState();
            return !n && t && (n = h.createStateObject()), e && (n = h.cloneObject(n), n.url = n.cleanUrl || n.url), n
        },
        h.getIdByState = function(e) {
            var t = h.extractId(e.url),
                n;
            if (!t) {
                n = h.getStateString(e);
                if (typeof h.stateToId[n] != "undefined")
                    t = h.stateToId[n];
                else if (typeof h.store.stateToId[n] != "undefined")
                    t = h.store.stateToId[n];
                else {
                    for (;;) {
                        t = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
                        if (typeof h.idToState[t] == "undefined" && typeof h.store.idToState[t] == "undefined")
                            break
                    }
                    h.stateToId[n] = t,
                    h.idToState[t] = e
                }
            }
            return t
        },
        h.normalizeState = function(e) {
            var t,
                n;
            if (!e || typeof e != "object")
                e = {};
            if (typeof e.normalized != "undefined")
                return e;
            if (!e.data || typeof e.data != "object")
                e.data = {};
            return t = {}, t.normalized = !0, t.title = e.title || "", t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref()), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !h.isEmptyObject(t.data), (t.title || n) && h.options.disableSuid !== !0 && (t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t
        },
        h.createStateObject = function(e, t, n) {
            var r = {
                data: e,
                title: t,
                url: n
            };
            return r = h.normalizeState(r), r
        },
        h.getStateById = function(e) {
            e = String(e);
            var n = h.idToState[e] || h.store.idToState[e] || t;
            return n
        },
        h.getStateString = function(e) {
            var t,
                n,
                r;
            return t = h.normalizeState(e), n = {
                data: t.data,
                title: e.title,
                url: e.url
            }, r = l.stringify(n), r
        },
        h.getStateId = function(e) {
            var t,
                n;
            return t = h.normalizeState(e), n = t.id, n
        },
        h.getHashByState = function(e) {
            var t,
                n;
            return t = h.normalizeState(e), n = t.hash, n
        },
        h.extractId = function(e) {
            var t,
                n,
                r,
                i;
            return e.indexOf("#") != -1 ? i = e.split("#")[0] : i = e, n = /(.*)\&_suid=([0-9]+)$/.exec(i), r = n ? n[1] || e : e, t = n ? String(n[2] || "") : "", t || !1
        },
        h.isTraditionalAnchor = function(e) {
            var t = !/[\/\?\.]/.test(e);
            return t
        },
        h.extractState = function(e, t) {
            var n = null,
                r,
                i;
            return t = t || !1, r = h.extractId(e), r && (n = h.getStateById(r)), n || (i = h.getFullUrl(e), r = h.getIdByUrl(i) || !1, r && (n = h.getStateById(r)), !n && t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(null, null, i))), n
        },
        h.getIdByUrl = function(e) {
            var n = h.urlToId[e] || h.store.urlToId[e] || t;
            return n
        },
        h.getLastSavedState = function() {
            return h.savedStates[h.savedStates.length - 1] || t
        },
        h.getLastStoredState = function() {
            return h.storedStates[h.storedStates.length - 1] || t
        },
        h.hasUrlDuplicate = function(e) {
            var t = !1,
                n;
            return n = h.extractState(e.url), t = n && n.id !== e.id, t
        },
        h.storeState = function(e) {
            return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e
        },
        h.isLastSavedState = function(e) {
            var t = !1,
                n,
                r,
                i;
            return h.savedStates.length && (n = e.id, r = h.getLastSavedState(), i = r.id, t = n === i), t
        },
        h.saveState = function(e) {
            return h.isLastSavedState(e) ? !1 : (h.savedStates.push(h.cloneObject(e)), !0)
        },
        h.getStateByIndex = function(e) {
            var t = null;
            return typeof e == "undefined" ? t = h.savedStates[h.savedStates.length - 1] : e < 0 ? t = h.savedStates[h.savedStates.length + e] : t = h.savedStates[e], t
        },
        h.getCurrentIndex = function() {
            var e = null;
            return h.savedStates.length < 1 ? e = 0 : e = h.savedStates.length - 1, e
        },
        h.getHash = function(e) {
            var t = h.getLocationHref(e),
                n;
            return n = h.getHashByUrl(t), n
        },
        h.unescapeHash = function(e) {
            var t = h.normalizeHash(e);
            return t = decodeURIComponent(t), t
        },
        h.normalizeHash = function(e) {
            var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
            return t
        },
        h.setHash = function(e, t) {
            var n,
                i;
            return t !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.setHash,
                args: arguments,
                queue: t
            }), !1) : (h.busy(!0), n = h.extractState(e, !0), n && !h.emulated.pushState ? h.pushState(n.data, n.title, n.url, !1) : h.getHash() !== e && (h.bugs.setHash ? (i = h.getPageUrl(), h.pushState(null, null, i + "#" + e, !1)) : r.location.hash = e), h)
        },
        h.escapeHash = function(t) {
            var n = h.normalizeHash(t);
            return n = e.encodeURIComponent(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
        },
        h.getHashByUrl = function(e) {
            var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
            return t = h.unescapeHash(t), t
        },
        h.setTitle = function(e) {
            var t = e.title,
                n;
            t || (n = h.getStateByIndex(0), n && n.url === e.url && (t = n.title || h.options.initialTitle));
            try {
                r.getElementsByTagName("title")[0].innerHTML = t.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
            } catch (i) {}
            return r.title = t, h
        },
        h.queues = [],
        h.busy = function(e) {
            typeof e != "undefined" ? h.busy.flag = e : typeof h.busy.flag == "undefined" && (h.busy.flag = !1);
            if (!h.busy.flag) {
                u(h.busy.timeout);
                var t = function() {
                    var e,
                        n,
                        r;
                    if (h.busy.flag)
                        return;
                    for (e = h.queues.length - 1; e >= 0; --e) {
                        n = h.queues[e];
                        if (n.length === 0)
                            continue;
                        r = n.shift(),
                        h.fireQueueItem(r),
                        h.busy.timeout = o(t, h.options.busyDelay)
                    }
                };
                h.busy.timeout = o(t, h.options.busyDelay)
            }
            return h.busy.flag
        },
        h.busy.flag = !1,
        h.fireQueueItem = function(e) {
            return e.callback.apply(e.scope || h, e.args || [])
        },
        h.pushQueue = function(e) {
            return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h
        },
        h.queue = function(e, t) {
            return typeof e == "function" && (e = {
                callback: e
            }), typeof t != "undefined" && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h
        },
        h.clearQueue = function() {
            return h.busy.flag = !1, h.queues = [], h
        },
        h.stateChanged = !1,
        h.doubleChecker = !1,
        h.doubleCheckComplete = function() {
            return h.stateChanged = !0, h.doubleCheckClear(), h
        },
        h.doubleCheckClear = function() {
            return h.doubleChecker && (u(h.doubleChecker), h.doubleChecker = !1), h
        },
        h.doubleCheck = function(e) {
            return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function() {
                return h.doubleCheckClear(), h.stateChanged || e(), !0
            }, h.options.doubleCheckInterval)), h
        },
        h.safariStatePoll = function() {
            var t = h.extractState(h.getLocationHref()),
                n;
            if (!h.isLastSavedState(t))
                return n = t, n || (n = h.createStateObject()), h.Adapter.trigger(e, "popstate"), h;
            return
        },
        h.back = function(e) {
            return e !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.back,
                args: arguments,
                queue: e
            }), !1) : (h.busy(!0), h.doubleCheck(function() {
                h.back(!1)
            }), p.go(-1), !0)
        },
        h.forward = function(e) {
            return e !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.forward,
                args: arguments,
                queue: e
            }), !1) : (h.busy(!0), h.doubleCheck(function() {
                h.forward(!1)
            }), p.go(1), !0)
        },
        h.go = function(e, t) {
            var n;
            if (e > 0)
                for (n = 1; n <= e; ++n)
                    h.forward(t);
            else {
                if (!(e < 0))
                    throw new Error("History.go: History.go requires a positive or negative integer passed.");
                for (n = -1; n >= e; --n)
                    h.back(t)
            }
            return h
        };
        if (h.emulated.pushState) {
            var v = function() {};
            h.pushState = h.pushState || v,
            h.replaceState = h.replaceState || v
        } else
            h.onPopState = function(t, n) {
                var r = !1,
                    i = !1,
                    s,
                    o;
                return h.doubleCheckComplete(), s = h.getHash(), s ? (o = h.extractState(s || h.getLocationHref(), !0), o ? h.replaceState(o.data, o.title, o.url, !1) : (h.Adapter.trigger(e, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (r = h.Adapter.extractEventData("state", t, n) || !1, r ? i = h.getStateById(r) : h.expectedStateId ? i = h.getStateById(h.expectedStateId) : i = h.extractState(h.getLocationHref()), i || (i = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(i) ? (h.busy(!1), !1) : (h.storeState(i), h.saveState(i), h.setTitle(i), h.Adapter.trigger(e, "statechange"), h.busy(!1), !0))
            },
            h.Adapter.bind(e, "popstate", h.onPopState),
            h.pushState = function(t, n, r, i) {
                if (h.getHashByUrl(r) && h.emulated.pushState)
                    throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (i !== !1 && h.busy())
                    return h.pushQueue({
                        scope: h,
                        callback: h.pushState,
                        args: arguments,
                        queue: i
                    }), !1;
                h.busy(!0);
                var s = h.createStateObject(t, n, r);
                return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.pushState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
            },
            h.replaceState = function(t, n, r, i) {
                if (h.getHashByUrl(r) && h.emulated.pushState)
                    throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (i !== !1 && h.busy())
                    return h.pushQueue({
                        scope: h,
                        callback: h.replaceState,
                        args: arguments,
                        queue: i
                    }), !1;
                h.busy(!0);
                var s = h.createStateObject(t, n, r);
                return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.replaceState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
            };
        if (s) {
            try {
                h.store = l.parse(s.getItem("History.store")) || {}
            } catch (m) {
                h.store = {}
            }
            h.normalizeStore()
        } else
            h.store = {},
            h.normalizeStore();
        h.Adapter.bind(e, "unload", h.clearAllIntervals),
        h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))),
        s && (h.onUnload = function() {
            var e,
                t,
                n;
            try {
                e = l.parse(s.getItem("History.store")) || {}
            } catch (r) {
                e = {}
            }
            e.idToState = e.idToState || {},
            e.urlToId = e.urlToId || {},
            e.stateToId = e.stateToId || {};
            for (t in h.idToState) {
                if (!h.idToState.hasOwnProperty(t))
                    continue;
                e.idToState[t] = h.idToState[t]
            }
            for (t in h.urlToId) {
                if (!h.urlToId.hasOwnProperty(t))
                    continue;
                e.urlToId[t] = h.urlToId[t]
            }
            for (t in h.stateToId) {
                if (!h.stateToId.hasOwnProperty(t))
                    continue;
                e.stateToId[t] = h.stateToId[t]
            }
            h.store = e,
            h.normalizeStore(),
            n = l.stringify(e);
            try {
                s.setItem("History.store", n)
            } catch (i) {
                if (i.code !== DOMException.QUOTA_EXCEEDED_ERR)
                    throw i;
                s.length && (s.removeItem("History.store"), s.setItem("History.store", n))
            }
        }, h.intervalList.push(a(h.onUnload, h.options.storeInterval)), h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter.bind(e, "unload", h.onUnload));
        if (!h.emulated.pushState) {
            h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval));
            if (i.vendor === "Apple Computer, Inc." || (i.appCodeName || "") === "Mozilla")
                h.Adapter.bind(e, "hashchange", function() {
                    h.Adapter.trigger(e, "popstate")
                }),
                h.getHash() && h.Adapter.onDomLoad(function() {
                    h.Adapter.trigger(e, "hashchange")
                })
        }
    },
    (!h.options || !h.options.delayInit) && h.init()
}(window),
define("lib-app/history.min", function() {}),
define("storymaps/common/Core", ["lib-build/css!lib-app/bootstrap/css/bootstrap.min", "lib-build/css!storymaps/common/ui/Modal.css", "lib-build/css!./Core", "lib-app/jquery", "./utils/Polyfills", "esri/map", "esri/arcgis/Portal", "esri/arcgis/utils", "./utils/CommonHelper", "esri/urlUtils", "./builder/MyStoriesWrapper", "dojo/has", "esri/IdentityManager", "esri/arcgis/OAuthInfo", "esri/config", "esri/tasks/GeometryService", "esri/request", "dojo/topic", "dojo/on", "dojo/_base/lang", "dojo/_base/array", "dojo/_base/kernel", "dojo/Deferred", "dojo/DeferredList", "dojo/query", "lib-app/jquery.fastClick", "lib-app/bootstrap/js/bootstrap.min", "lib-app/history.min"], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N) {
    function A(e, t) {
        var n = !1,
            r = !1;
        console.log("common.core.Core - init", t),
        k = e,
        app.userCanEdit = !1,
        rt(),
        t != null && (n = L.fromScratch != null || L.fromscratch != null, r = L.fromGallery != null),
        !a.browserSupportHistory() && (n || r) && L.ieredirected == null && (window.location = document.location.protocol + "//" + document.location.host + document.location.pathname + "#" + document.location.search + "&ieredirected"),
        a.isArcGISHosted() ? app.indexCfg = {} : it() || (app.indexCfg = {
            proxyurl: app.indexCfg.proxyurl,
            sharingurl: app.indexCfg.sharingurl,
            username: app.indexCfg.username,
            password: app.indexCfg.password,
            oAuthAppId: app.indexCfg.oAuthAppId
        }),
        L.sharinghost && (app.indexCfg.sharingurl = L.sharinghost);
        if (!k.checkConfigFileIsOK()) {
            q("invalidConfig");
            return
        }
        document.title = app.cfg.TPL_NAME,
        $(".print-warning").html(i18n.viewer.errors.print0),
        c("touch") && $("body").addClass("hasTouch"),
        N.prototype._needsClick = N.prototype.needsClick,
        N.prototype.needsClick = function(e) {
            return $(e).parents(".esriPopup").length ? !0 : N.prototype._needsClick.call(this, e)
        },
        N.attach(document.body),
        window != window.top && $("body").addClass("isEmbed"),
        b.mixin(app, {
            map: null,
            maps: {},
            portal: null,
            builder: t,
            isDirectCreation: n,
            isGalleryCreation: r,
            isDirectCreationFirstSave: n,
            isLoading: !0,
            loadingTimeout: null
        }),
        app.appCfg.useStandardHeader && require(["storymaps/common/ui/header/Desktop"], function(e) {
            app.ui.headerDesktop = new e($("#headerDesktop"), app.isInBuilder)
        });
        if (!k.init(this))
            return;
        !it() && app.indexCfg.username && app.indexCfg.password && y(h, "dialog-create", function() {
            y(h.dialog, "show", function() {
                h.dialog.txtUser_.set("value", app.indexCfg.username),
                h.dialog.txtPwd_.set("value", app.indexCfg.password),
                h.dialog.btnSubmit_.onClick()
            })
        }),
        et();
        if (!app.indexCfg.sharingurl) {
            var i = document.location.pathname.indexOf("/apps/");
            i == -1 && (i = document.location.pathname.indexOf("/home/"));
            if (i != -1) {
                var s = location.pathname.substr(0, i);
                app.indexCfg.sharingurl = "//" + location.host + s + "/sharing/content/items",
                app.indexCfg.proxyurl = "//" + location.host + s + "/sharing/proxy"
            } else
                app.indexCfg.sharingurl = app.cfg.DEFAULT_SHARING_URL
        }
        app.indexCfg.sharingurl.match(/^http/) ? u.arcgisUrl = app.indexCfg.sharingurl : u.arcgisUrl = location.protocol + app.indexCfg.sharingurl,
        app.indexCfg.proxyurl || (app.indexCfg.proxyurl = app.cfg.DEFAULT_PROXY_URL),
        d.defaults.io.proxyUrl = location.protocol + app.indexCfg.proxyurl,
        h && h.setProtocolErrorHandler(function() {
            return !0
        }),
        app.isInBuilder && app.cfg.CORS_SERVER && $.each(app.cfg.CORS_SERVER, function(e, t) {
            d.defaults.io.corsEnabledServers.push(t)
        }),
        app.cfg.PROXY_RULES && app.cfg.PROXY_RULES.length && $.each(app.cfg.PROXY_RULES, function(e, t) {
            t && t.urlPrefix && t.proxyUrl && f.addProxyRule(t)
        }),
        d.defaults.io.timeout = app.isInBuilder ? app.cfg.TIMEOUT_BUILDER_REQUEST : app.cfg.TIMEOUT_VIEWER_REQUEST,
        $.fn.modal.Constructor.prototype.enforceFocus = function() {},
        app.ui.headerDesktop && app.ui.headerDesktop.initLocalization(),
        k.initLocalization(),
        $(window).resize(V),
        $("form").bind("keydown", function(e) {
            if (e.keyCode == 13)
                return !1
        }),
        y(h, "dialog-create", K),
        g.subscribe("CORE_UPDATE_UI", W),
        g.subscribe("CORE_RESIZE", V),
        g.subscribe("CORE_UPDATE_EXTENT", U),
        app.portal = new o.Portal(app.indexCfg.sharingurl.split("/sharing/")[0]),
        app.portal.on("load", function(e) {
            app.isPortal = !!e.isPortal,
            st();
            if (app.indexCfg.oAuthAppId) {
                var n = new p({
                    appId: app.indexCfg.oAuthAppId,
                    popup: !1,
                    portalUrl: "https:" + app.indexCfg.sharingurl.split("/sharing/")[0]
                });
                h.registerOAuthInfos([n]),
                h.checkSignInStatus(n.portalUrl).then(function() {
                    t ? D().then(O) : D().then(O)
                }, function() {
                    t ? D().then(O) : O()
                })
            } else
                O()
        })
    }
    function O() {
        console.log("common.core.Core - initStep2");
        var e = a.getAppID(it()),
            t = a.getWebmapID(it()),
            n = app.appCfg ? !!app.appCfg.supportWebmapPreviewAGOL : !0;
        if (e) {
            M(e);
            return
        }
        if (t && !n) {
            a.isArcGISHosted() ? B() : P(t);
            return
        }
        if (app.isDirectCreation && it() && a.isArcGISHosted() && !a.getPortalUser() && !app.portal.getPortalUser()) {
            Y();
            return
        }
        if (app.isDirectCreation) {
            D().then(function() {
                j(),
                k.startFromScratch(),
                F()
            });
            return
        }
        a.isArcGISHosted() ? B() : L.appid && (!app.indexCfg.authorizedOwners || !app.indexCfg.authorizedOwners[0]) ? q("unspecifiedConfigOwner") : app.isProduction ? q("invalidConfigNoApp") : q("invalidConfigNoAppDev")
    }
    function M(e) {
        console.log("common.core.Core - loadWebMappingApp - appId:", e);
        var t = L.forceLogin !== undefined;
        t || app.isInBuilder ? D().then(function() {
            _(e)
        }, function() {
            q("notAuthorized")
        }) : _(e)
    }
    function _(e) {
        u.getItem(e).then(function(e) {
            if (!e) {
                q("appLoadingFail");
                return
            }
            var t = e.item,
                n = e.itemData;
            app.data.setWebAppItem(t),
            app.data.getWebAppData().set(n),
            app.userCanEdit = app.data.userIsAppOwner(),
            !app.isInBuilder && !app.userCanEdit && (document.__defineGetter__ ? (document.__defineGetter__("cookie", function() {
                return ""
            }), document.__defineSetter__("cookie", function() {})) : Object.defineProperty(document, "cookie", {
                get: function() {
                    return ""
                },
                set: function() {
                    return !0
                }
            }));
            if (app.indexCfg.authorizedOwners && app.indexCfg.authorizedOwners.length > 0 && app.indexCfg.authorizedOwners[0]) {
                var r = t.owner,
                    i = !1;
                r && (i = $.inArray(r, app.indexCfg.authorizedOwners) != -1),
                !i && app.indexCfg.authorizedOwners[0] == "*" && (i = !0),
                i || $.each(app.indexCfg.authorizedOwners, function(e, n) {
                    var r = n.match(/^\[(.*)\]$/);
                    r && t.orgId == r[1] && (i = !0)
                });
                if (!i) {
                    q("invalidConfigOwner");
                    return
                }
            }
            if (t && t.appProxies) {
                var s = w.map(t.appProxies, function(e) {
                    return {
                        url: e.sourceUrl,
                        mixin: {
                            url: e.proxyUrl
                        }
                    }
                });
                app.data.setAppProxies(s)
            }
            if (app.isInBuilder && it() && !app.userCanEdit) {
                q("notAuthorized");
                return
            }
            k.webAppConfigLoaded();
            var o = app.appCfg ? !!app.appCfg.useWebmapInApp : !0,
                u = app.data.getWebAppData().getWebmap() || a.getWebmapID(it());
            u && o ? P(u) : o ? a.getPortalUser() || !it() && app.data.getWebAppData().isBlank() ? Z() : app.data.getWebAppData().isBlank() ? q("appLoadingFail") : P(app.data.getWebAppData().getViews()[0].cfg.webmap.id) : (j(), k.loadWebmapFromData());
            var f = !0;
            app.data.getWebAppData().getHeader() && app.data.getWebAppData().getHeader().social && !app.data.getWebAppData().getHeader().social.bitly && (f = !1),
            $(".print-warning").html(f ? i18n.viewer.errors.print1 : i18n.viewer.errors.print2)
        }, function(e) {
            e && e.httpCode == 400 ? q("invalidApp") : e && e.httpCode == 403 ? q("notAuthorized") : q("appLoadingFail")
        })
    }
    function D() {
        var e = new S;
        return y(h, "dialog-create", Q), app.portal.signIn().then(function() {
            if (app.isInBuilder && !app.data.checkUserItemPrivileges()) {
                q("notAuthorizedBuilder");
                return
            }
            app.userCanEdit = app.data.userIsAppOwner(),
            st(),
            e.resolve()
        }, function() {
            e.reject()
        }), e
    }
    function P(e) {
        k.loadFirstWebmap(e).then(b.hitch(this, function(e) {
            H(e)
        }), b.hitch(this, function() {
            q("createMap")
        }))
    }
    function H() {
        console.log("common.core.Core - webMapInitCallback"),
        console.error("FATAL ERROR");
        return
    }
    function B() {
        window.location = app.isPortal && app.cfg.HELP_URL_PORTAL ? app.cfg.HELP_URL_PORTAL : app.cfg.HELP_URL
    }
    function j() {
        var e = app.indexCfg.title || app.data.getWebAppData().getTitle(),
            t = app.indexCfg.subtitle || app.data.getWebAppData().getSubtitle(),
            n = app.data.getWebAppData().getColors();
        app.ui.headerDesktop && app.ui.headerDesktop.init(!app.isInBuilder && (app.cfg.EMBED || L.embed || L.embed === ""), e, t, X(), n[0], J),
        app.appCfg.useAppTitleAsPageTitle && (document.title = e ? $("<div>" + e + "</div>").text() : app.cfg.TPL_NAME)
    }
    function F() {
        console.log("common.core.Core - initApp"),
        V(),
        location.hash && a.browserSupportHistory() && (location.hash = "map"),
        window.onhashchange = function() {
            k.prepareMobileViewSwitch(),
            k.onHashChange()
        },
        k.appInitComplete(),
        app.builder && app.builder.appInitComplete(),
        (app.isInBuilder || app.userCanEdit) && c("ie") != 9 && !L.preview && (c("ff") && $(".builderShare #my-stories-frame").remove(), (c("ff") || !app.isInBuilder) && $("body").append('<div id="my-stories-hidden-container"><iframe id="my-stories-frame"></iframe></div>'), l.loadMyStories()),
        document.location.pathname.match(/\/apps\/[a-zA-Z]+\/$/) && document.location.search.match(/^\?appid=/) && (!c("ie") || c("ie") >= 10) && History.replaceState({}, "", "index.html" + document.location.search + document.location.hash);
        var e = document.location.search;
        e && (e = e.replace("&preview", ""), e != document.location.search && window.history.replaceState({}, "", "index.html" + e + document.location.hash))
    }
    function I() {
        app.isLoading = !1,
        $("#loadingIndicator, #loadingMessage").addClass("fadeOut").fadeOut(400),
        $("#loadingOverlay").fadeOut(800)
    }
    function q(e, t, n) {
        var r = i18n.viewer.errors[e];
        tt(),
        $("#loadingIndicator").hide(),
        r = r.replace(/%TPL_NAME%/g, app.cfg.TPL_NAME),
        e == "notAuthorized" && app.indexCfg.oAuthAppId && (r += '<div><button class="btn btn-sm btn-default" onclick="esri.id.destroyCredentials(); window.location.reload();">' + i18n.viewer.errors.signOut + "</button></div>"),
        e == "appLoadingFail" ? $("#loadingMessage").html('<div id="loadingRetry"> <button type="button" class="btn btn-naked btn-sm" onclick="document.location.reload()">' + i18n.viewer.loading.failButton + " </button>" + "</div>").hide().fadeIn(1200, function() {
            $("#loadingMessage").addClass("loaded")
        }) : $("#loadingMessage").hide(),
        c("ie") == 8 && ($("#fatalError-icon").css({
            filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='_resources/icons/warning-icon.png', sizingMethod='scale')",
            backgroundPosition: "2px 3px",
            width: 78
        }), $("#fatalError-msg").css({
            paddingLeft: 5
        })),
        $("#fatalError .error-msg").html(r),
        n || $("#fatalError").show()
    }
    function R(e) {
        $("#fatalError .error-msg").html(i18n.viewer.errors[e])
    }
    function U(e) {
        if (!e || !e.spatialReference || !app.map || !app.map.extent.spatialReference || !app.map.spatialReference) {
            var t = new S;
            return t.resolve(), t
        }
        if (app.map.spatialReference.wkid == e.spatialReference.wkid)
            return app.map.setExtent(e);
        var n = new S;
        return d.defaults.geometryService.project([e], app.map.spatialReference, function(e) {
            if (!e || !e[0])
                return;
            app.map.setExtent(e[0]),
            n.resolve()
        }), n
    }
    function z(e, t) {
        e && (app.map.spatialReference.wkid != 102100 && app.map.spatialReference.wkid != 4326 ? d.defaults.geometryService.project([t], app.map.spatialReference, function(e) {
            if (!e || !e[0])
                return;
            app.map.extent.contains(e[0]) || app.map.centerAt(e[0])
        }) : app.map.extent.contains(t) || app.map.centerAt(t))
    }
    function W() {
        console.log("common.core.Core - updateUI");
        var e = app.data.getWebAppData().getColors();
        app.ui.headerDesktop && (app.ui.headerDesktop.setTitleAndSubtitle(app.data.getWebAppData().getTitle() || (app.data.getWebMap() ? app.data.getWebMap().item.title : ""), app.data.getWebAppData().getSubtitle() || (app.data.getWebMap() ? app.data.getWebMap().item.snippet : "")), app.ui.headerDesktop.update(X(), e[0])),
        k.updateUI(),
        V()
    }
    function X() {
        return {
            logoURL: app.data.getWebAppData().getLogoURL(),
            logoTarget: app.data.getWebAppData().getLogoTarget(),
            linkText: app.data.getWebAppData().getHeaderLinkText(),
            linkURL: app.data.getWebAppData().getHeaderLinkURL(),
            socialBtn: app.data.getWebAppData().getSocial()
        }
    }
    function V() {
        var e = $("body").width(),
            t = $("body").height(),
            n = 0,
            r = 0,
            i = L.forceDesktop !== undefined || app.indexCfg.forceDesktop,
            s = L.forceMobile !== undefined || app.indexCfg.forceMobile,
            o = e <= 768 || s,
            u = $(".centerLink").length ? $(".centerLink").hasClass("current") : !0;
        i && (o = !1),
        o ? $("body").addClass("mobile-view") : $("body").removeClass("mobile-view"),
        $(".mainViewAboveMap").each(function(e, t) {
            var r = $(t);
            n += r.is(":visible") ? r.outerHeight() : 0
        }),
        $(".mainViewSideMap").each(function(e, t) {
            var n = $(t);
            r += n.is(":visible") ? n.outerWidth() : 0
        }),
        app.ui.headerDesktop && app.ui.headerDesktop.resize(e),
        app.initScreenIsOpen && ($("#header").css("display", o ? "none" : "block"), $("#fatalError").css("display", o ? "block" : "none")),
        app.initScreenIsOpen || $("#contentPanel").height(t - n),
        k.resize({
            isMobileView: o,
            isOnMobileMapView: u,
            width: e,
            height: t - n
        }),
        app.isInBuilder && app.builder.resize({
            isMobileView: o
        });
        if (app.map && (!o || o && u))
            try {
                app.map.resize()
            } catch (a) {}
        o ? $(".mapContainer .esriControlsBR > div").first().removeClass("logo-med").addClass("logo-sm") : $(".mapContainer .esriControlsBR > div").first().removeClass("logo-sm").addClass("logo-med")
    }
    function J() {
        return !app.isInBuilder && (!it() && !!a.getAppID(it()) || it() && app.userCanEdit) && (L.preview === undefined || L.preview == "false")
    }
    function K() {
        $(".esriSignInDialog td label").siblings("br").css("display", "none"),
        $(".esriSignInDialog .dijitDialogPaneContentArea div:nth(1)").css("display", "none"),
        $(".esriSignInDialog .dijitReset.dijitInputInner").css("padding", "0px"),
        $(".esriSignInDialog .dijitReset.dijitInputInner").css("margin-bottom", "0px"),
        $(".esriSignInDialog .dijitReset.dijitInputInner").css("border", "none"),
        $(".esriSignInDialog .dijitReset.dijitInputInner").css("border-radius", "0px"),
        $(".esriSignInDialog .dijitReset.dijitInputInner").css("-webkit-border-radius", "0px"),
        $(".esriSignInDialog .dijitReset.dijitInputInner").css("-moz-border-radius", "0px"),
        $(".esriSignInDialog .dijitReset.dijitInputInner").css("box-shadow", "none"),
        $(".esriSignInDialog .dijitReset.dijitInputInner").css("-webkit-box-shadow", "none"),
        $(".esriSignInDialog .dijitReset.dijitInputInner").css("-moz-box-shadow", "none"),
        $(".esriSignInDialog .dijitReset.dijitValidationContainer").css("display", "none"),
        $(".esriSignInDialog .esriErrorMsg").css("margin-top", "10px"),
        $(".esriSignInDialog").find(".dijitDialogTitleBar").find(".dijitDialogTitle").first().html(i18n.viewer.signin.title),
        h._arcgisUrl && ($(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().css("display", "none"), $(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().after("<div id='dijitDialogPaneContentAreaLoginText'>" + i18n.viewer.signin.explainViewer.replace("%PORTAL_LINK%", "<a href='http://" + h._arcgisUrl + "' title='" + h._arcgisUrl + "' target='_blank'>" + h._arcgisUrl + "</a>") + "</div>"))
    }
    function Q() {
        h._arcgisUrl && $(".esriSignInDialog").find("#dijitDialogPaneContentAreaLoginText").html(i18n.viewer.signin.explainBuilder.replace("%PORTAL_LINK%", "<a href='http://" + h._arcgisUrl + "' title='" + h._arcgisUrl + "' target='_blank'>" + h._arcgisUrl + "</a>"))
    }
    function G() {
        $("#header").css("display", "inherit"),
        $(".mobileView").css("display", "inherit"),
        $("#fatalError").css("display", "none"),
        $("#loadingOverlay").css("top", "0px"),
        et(),
        V()
    }
    function Y() {
        window.location = u.arcgisUrl.split("/sharing/")[0] + "/home/signin.html?returnUrl=" + encodeURIComponent(document.location.href)
    }
    function Z() {
        window.location = document.location.href + "&fromGallery"
    }
    function et() {
        app.loadingTimeout = setTimeout(nt, app.cfg.TIMEOUT_VIEWER_LOAD)
    }
    function tt() {
        typeof app != "undefined" && app.loadingTimeout && (clearTimeout(app.loadingTimeout), app.loadingTimeout = null)
    }
    function nt() {
        if (h && h.dialog && h.dialog._alreadyInitialized && !h.loadingTimeoutAlreadyFired) {
            clearTimeout(app.loadingTimeout),
            et(),
            h._busy || (h.loadingTimeoutAlreadyFired = !0);
            return
        }
        $("#loadingMessage").html('<div class="mainMessage">' + i18n.viewer.loading.long + "<br />" + i18n.viewer.loading.long2 + "</div>").fadeIn("slow", function() {
            $("#loadingMessage").addClass("loaded")
        })
    }
    function rt() {
        document.documentElement.lang = E.locale,
        T("#fatalError .error-title")[0].innerHTML = i18n.viewer.errors.boxTitle
    }
    function it() {
        return C.environment != ["TPL", "ENV", "DEV"].join("_")
    }
    function st() {
        console.log("common.core.Core - parsePortalConfig");
        if (!app.portal)
            return;
        var e = app.data.getWebAppData().getAppGeocoders(),
            t = e ? e.map(function(e) {
                return e.url
            }) : [],
            n = [];
        app.cfg.HELPER_SERVICES.geocode && app.cfg.HELPER_SERVICES.geocode.length && ($.each(app.portal.helperServices.geocode, function(e, r) {
            r.url && t.indexOf(r.url) < 0 && n.push(r)
        }), app.cfg.HELPER_SERVICES.geocode = n);
        var r;
        app.cfg.HELPER_SERVICES.geometry && app.cfg.HELPER_SERVICES.geometry.url ? r = app.cfg.HELPER_SERVICES.geometry.url : app.portal.helperServices.geometry && app.portal.helperServices.geometry.url && (r = app.portal.helperServices.geometry.url),
        d.defaults.geometryService = new v(r),
        !app.cfg.BING_MAPS_KEY && app.portal.bingKey && (app.cfg.BING_MAPS_KEY = app.portal.bingKey),
        app.portal.isPortal && app.cfg && app.cfg.AUTHORIZED_IMPORT_SOURCE && (app.cfg.AUTHORIZED_IMPORT_SOURCE.featureService = !1),
        app.isPortal = !!app.portal.isPortal;
        if (app.isPortal && app.portal.helpBase && app.portal.portalHostname && !app.cfg.HELP_URL_PORTAL.match("^//")) {
            var i = app.portal.portalHostname.split("/")[0];
            app.cfg.HELP_URL_PORTAL = "//" + i + app.portal.helpBase + app.cfg.HELP_URL_PORTAL
        }
    }
    function ot() {
        var e = "notConfiguredMobile";
        tt(),
        app.isInitializing = !0,
        app.initScreenIsOpen = !0,
        c("touch") && a.isMobile() && (window.innerHeight > window.innerWidth ? window.innerHeight > 768 && (e = "notConfiguredMobile2") : window.innerWidth > 768 && (e = "notConfiguredMobile2")),
        q(e, null, !0),
        setTimeout(V, 50)
    }
    function ut() {
        $("#initPopup").modal("hide"),
        app.initScreenIsOpen = !1
    }
    function at() {
        R("notConfiguredDesktop"),
        $("#loadingOverlay").css("top", "0px"),
        $("#header").css("display", "inherit"),
        $("#fatalError").css("display", "block"),
        app.initScreenIsOpen = !1,
        V()
    }
    var C = {
            environment: "TPL_ENV_PRODUCTION"
        },
        k = null,
        L = a.getUrlParams();
    return i.apply(), {
        init: A,
        isProd: it,
        appInitComplete: F,
        displayApp: I,
        loadWebMap: P,
        handleWindowResize: V,
        hasSwitchBuilderButton: J,
        initPopupPrepare: ot,
        initPopupComplete: ut,
        initPopupFail: at,
        zoomToDeviceLocation: z,
        getHeaderUserCfg: X,
        cleanLoadingTimeout: tt,
        initError: q,
        prepareAppForWebmapReload: G,
        replaceInitErrorMessage: R,
        portalLogin: D
    }
}),
define("lib-build/css!storymaps/tpl/core/MainView", [], function() {}),
define("text", {}),
function() {
    function e(e, t, n) {
        n = (n || 0) - 1;
        for (var r = e ? e.length : 0; ++n < r;)
            if (e[n] === t)
                return n;
        return -1
    }
    function t(t, n) {
        var r = typeof n;
        if (t = t.l, "boolean" == r || null == n)
            return t[n] ? 0 : -1;
        "number" != r && "string" != r && (r = "object");
        var i = "number" == r ? n : g + n;
        return t = (t = t[r]) && t[i], "object" == r ? t && -1 < e(t, n) ? 0 : -1 : t ? 0 : -1
    }
    function n(e) {
        var t = this.l,
            n = typeof e;
        if ("boolean" == n || null == e)
            t[e] = !0;
        else {
            "number" != n && "string" != n && (n = "object");
            var r = "number" == n ? e : g + e,
                t = t[n] || (t[n] = {});
            "object" == n ? (t[r] || (t[r] = [])).push(e) : t[r] = !0
        }
    }
    function r(e) {
        return e.charCodeAt(0)
    }
    function i(e, t) {
        for (var n = e.m, r = t.m, i = -1, s = n.length; ++i < s;) {
            var o = n[i],
                u = r[i];
            if (o !== u) {
                if (o > u || typeof o == "undefined")
                    return 1;
                if (o < u || typeof u == "undefined")
                    return -1
            }
        }
        return e.n - t.n
    }
    function s(e) {
        var t = -1,
            r = e.length,
            i = e[0],
            s = e[r / 2 | 0],
            o = e[r - 1];
        if (i && typeof i == "object" && s && typeof s == "object" && o && typeof o == "object")
            return !1;
        for (i = a(), i["false"] = i["null"] = i["true"] = i.undefined = !1, s = a(), s.k = e, s.l = i, s.push = n; ++t < r;)
            s.push(e[t]);
        return s
    }
    function o(e) {
        return "\\" + V[e]
    }
    function u() {
        return d.pop() || []
    }
    function a() {
        return v.pop() || {
                k: null,
                l: null,
                m: null,
                "false": !1,
                n: 0,
                "null": !1,
                number: null,
                object: null,
                push: null,
                string: null,
                "true": !1,
                "undefined": !1,
                o: null
            }
    }
    function f(e) {
        e.length = 0,
        d.length < b && d.push(e)
    }
    function l(e) {
        var t = e.l;
        t && l(t),
        e.k = e.l = e.m = e.object = e.number = e.string = e.o = null,
        v.length < b && v.push(e)
    }
    function c(e, t, n) {
        t || (t = 0),
        typeof n == "undefined" && (n = e ? e.length : 0);
        var r = -1;
        n = n - t || 0;
        for (var i = Array(0 > n ? 0 : n); ++r < n;)
            i[r] = e[t + r];
        return i
    }
    function h(n) {
        function d(e, t, n) {
            if (!e || !X[typeof e])
                return e;
            t = t && typeof n == "undefined" ? t : tt(t, n, 3);
            for (var r = -1, i = X[typeof e] && jn(e), s = i ? i.length : 0; ++r < s && (n = i[r], !1 !== t(e[n], n, e));)
                ;
            return e
        }
        function v(e, t, n) {
            var r;
            if (!e || !X[typeof e])
                return e;
            t = t && typeof n == "undefined" ? t : tt(t, n, 3);
            for (r in e)
                if (!1 === t(e[r], r, e))
                    break;
            return e
        }
        function b(e, t, n) {
            var r,
                i = e,
                s = i;
            if (!i)
                return s;
            for (var o = arguments, u = 0, a = typeof n == "number" ? 2 : o.length; ++u < a;)
                if ((i = o[u]) && X[typeof i])
                    for (var f = -1, l = X[typeof i] && jn(i), c = l ? l.length : 0; ++f < c;)
                        r = l[f],
                        "undefined" == typeof s[r] && (s[r] = i[r]);
            return s
        }
        function V(e, t, n) {
            var r,
                i = e,
                s = i;
            if (!i)
                return s;
            var o = arguments,
                u = 0,
                a = typeof n == "number" ? 2 : o.length;
            if (3 < a && "function" == typeof o[a - 2])
                var f = tt(o[--a - 1], o[a--], 2);
            else
                2 < a && "function" == typeof o[a - 1] && (f = o[--a]);
            for (; ++u < a;)
                if ((i = o[u]) && X[typeof i])
                    for (var l = -1, c = X[typeof i] && jn(i), h = c ? c.length : 0; ++l < h;)
                        r = c[l],
                        s[r] = f ? f(s[r], i[r]) : i[r];
            return s
        }
        function J(e) {
            var t,
                n = [];
            if (!e || !X[typeof e])
                return n;
            for (t in e)
                yn.call(e, t) && n.push(t);
            return n
        }
        function K(e) {
            return e && typeof e == "object" && !Bn(e) && yn.call(e, "__wrapped__") ? e : new Q(e)
        }
        function Q(e, t) {
            this.__chain__ = !!t,
            this.__wrapped__ = e
        }
        function G(e) {
            function t() {
                if (r) {
                    var e = c(r);
                    bn.apply(e, arguments)
                }
                if (this instanceof t) {
                    var s = et(n.prototype),
                        e = n.apply(s, e || arguments);
                    return Et(e) ? e : s
                }
                return n.apply(i, e || arguments)
            }
            var n = e[0],
                r = e[2],
                i = e[4];
            return Hn(t, e), t
        }
        function Z(e, t, n, r, i) {
            if (n) {
                var s = n(e);
                if (typeof s != "undefined")
                    return s
            }
            if (!Et(e))
                return e;
            var o = cn.call(e);
            if (!U[o])
                return e;
            var a = Dn[o];
            switch (o) {
            case H:
            case B:
                return new a(+e);
            case F:
            case R:
                return new a(e);
            case q:
                return s = a(e.source, N.exec(e)), s.lastIndex = e.lastIndex, s
            }
            if (o = Bn(e), t) {
                var l = !r;
                r || (r = u()),
                i || (i = u());
                for (var h = r.length; h--;)
                    if (r[h] == e)
                        return i[h];
                s = o ? a(e.length) : {}
            } else
                s = o ? c(e) : V({}, e);
            return o && (yn.call(e, "index") && (s.index = e.index), yn.call(e, "input") && (s.input = e.input)), t ? (r.push(e), i.push(s), (o ? At : d)(e, function(e, o) {
                s[o] = Z(e, t, n, r, i)
            }), l && (f(r), f(i)), s) : s
        }
        function et(e) {
            return Et(e) ? Tn(e) : {}
        }
        function tt(e, t, n) {
            if (typeof e != "function")
                return Vt;
            if (typeof t != "undefined" && "prototype" in e) {
                var r = e.__bindData__;
                if (typeof r == "undefined" && (Pn.funcNames && (r = !e.name), r = r || !Pn.funcDecomp, !r)) {
                    var i = mn.call(e);
                    Pn.funcNames || (r = !C.test(i)),
                    r || (r = O.test(i), Hn(e, r))
                }
                if (!1 === r || !0 !== r && 1 & r[1])
                    return e;
                switch (n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i)
                    };
                case 4:
                    return function(n, r, i, s) {
                        return e.call(t, n, r, i, s)
                    }
                }
                return Wt(e, t)
            }
            return e
        }
        function nt(e) {
            function t() {
                var e = a ? o : this;
                if (i) {
                    var d = c(i);
                    bn.apply(d, arguments)
                }
                return (s || l) && (d || (d = c(arguments)), s && bn.apply(d, s), l && d.length < u) ? (r |= 16, nt([n, h ? r : -4 & r, d, null, o, u])) : (d || (d = arguments), f && (n = e[p]), this instanceof t ? (e = et(n.prototype), d = n.apply(e, d), Et(d) ? d : e) : n.apply(e, d))
            }
            var n = e[0],
                r = e[1],
                i = e[2],
                s = e[3],
                o = e[4],
                u = e[5],
                a = 1 & r,
                f = 2 & r,
                l = 4 & r,
                h = 8 & r,
                p = n;
            return Hn(t, e), t
        }
        function rt(n, r) {
            var i = -1,
                o = ht(),
                u = n ? n.length : 0,
                a = u >= y && o === e,
                f = [];
            if (a) {
                var c = s(r);
                c ? (o = t, r = c) : a = !1
            }
            for (; ++i < u;)
                c = n[i],
                0 > o(r, c) && f.push(c);
            return a && l(r), f
        }
        function it(e, t, n, r) {
            r = (r || 0) - 1;
            for (var i = e ? e.length : 0, s = []; ++r < i;) {
                var o = e[r];
                if (o && typeof o == "object" && typeof o.length == "number" && (Bn(o) || mt(o))) {
                    t || (o = it(o, t, n));
                    var u = -1,
                        a = o.length,
                        f = s.length;
                    for (s.length += a; ++u < a;)
                        s[f++] = o[u]
                } else
                    n || s.push(o)
            }
            return s
        }
        function st(e, t, n, r, i, s) {
            if (n) {
                var o = n(e, t);
                if (typeof o != "undefined")
                    return !!o
            }
            if (e === t)
                return 0 !== e || 1 / e == 1 / t;
            if (e === e && !(e && X[typeof e] || t && X[typeof t]))
                return !1;
            if (null == e || null == t)
                return e === t;
            var a = cn.call(e),
                l = cn.call(t);
            if (a == D && (a = I), l == D && (l = I), a != l)
                return !1;
            switch (a) {
            case H:
            case B:
                return +e == +t;
            case F:
                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
            case q:
            case R:
                return e == on(t)
            }
            if (l = a == P, !l) {
                var c = yn.call(e, "__wrapped__"),
                    h = yn.call(t, "__wrapped__");
                if (c || h)
                    return st(c ? e.__wrapped__ : e, h ? t.__wrapped__ : t, n, r, i, s);
                if (a != I)
                    return !1;
                if (a = e.constructor, c = t.constructor, a != c && !(wt(a) && a instanceof a && wt(c) && c instanceof c) && "constructor" in e && "constructor" in t)
                    return !1
            }
            for (a = !i, i || (i = u()), s || (s = u()), c = i.length; c--;)
                if (i[c] == e)
                    return s[c] == t;
            var p = 0,
                o = !0;
            if (i.push(e), s.push(t), l) {
                if (c = e.length, p = t.length, (o = p == c) || r)
                    for (; p--;)
                        if (l = c, h = t[p], r)
                            for (; l-- && !(o = st(e[l], h, n, r, i, s));)
                                ;
                        else if (!(o = st(e[p], h, n, r, i, s)))
                            break
            } else
                v(t, function(t, u, a) {
                    return yn.call(a, u) ? (p++, o = yn.call(e, u) && st(e[u], t, n, r, i, s)) : void 0
                }),
                o && !r && v(e, function(e, t, n) {
                    return yn.call(n, t) ? o = -1 < --p : void 0
                });
            return i.pop(), s.pop(), a && (f(i), f(s)), o
        }
        function ot(e, t, n, r, i) {
            (Bn(t) ? At : d)(t, function(t, s) {
                var o,
                    u,
                    a = t,
                    f = e[s];
                if (t && ((u = Bn(t)) || Un(t))) {
                    for (a = r.length; a--;)
                        if (o = r[a] == t) {
                            f = i[a];
                            break
                        }
                    if (!o) {
                        var l;
                        n && (a = n(f, t), l = typeof a != "undefined") && (f = a),
                        l || (f = u ? Bn(f) ? f : [] : Un(f) ? f : {}),
                        r.push(t),
                        i.push(f),
                        l || ot(f, t, n, r, i)
                    }
                } else
                    n && (a = n(f, t), typeof a == "undefined" && (a = t)),
                    typeof a != "undefined" && (f = a);
                e[s] = f
            })
        }
        function ut(e, t) {
            return e + vn(_n() * (t - e + 1))
        }
        function at(n, r, i) {
            var o = -1,
                a = ht(),
                c = n ? n.length : 0,
                h = [],
                p = !r && c >= y && a === e,
                d = i || p ? u() : h;
            for (p && (d = s(d), a = t); ++o < c;) {
                var v = n[o],
                    m = i ? i(v, o, n) : v;
                (r ? !o || d[d.length - 1] !== m : 0 > a(d, m)) && ((i || p) && d.push(m), h.push(v))
            }
            return p ? (f(d.k), l(d)) : i && f(d), h
        }
        function ft(e) {
            return function(t, n, r) {
                var i = {};
                n = K.createCallback(n, r, 3),
                r = -1;
                var s = t ? t.length : 0;
                if (typeof s == "number")
                    for (; ++r < s;) {
                        var o = t[r];
                        e(i, o, n(o, r, t), t)
                    }
                else
                    d(t, function(t, r, s) {
                        e(i, t, n(t, r, s), s)
                    });
                return i
            }
        }
        function lt(e, t, n, r, i, s) {
            var o = 1 & t,
                u = 4 & t,
                a = 16 & t,
                f = 32 & t;
            if (!(2 & t || wt(e)))
                throw new un;
            a && !n.length && (t &= -17, a = n = !1),
            f && !r.length && (t &= -33, f = r = !1);
            var l = e && e.__bindData__;
            return l && !0 !== l ? (l = c(l), l[2] && (l[2] = c(l[2])), l[3] && (l[3] = c(l[3])), !o || 1 & l[1] || (l[4] = i), !o && 1 & l[1] && (t |= 8), !u || 4 & l[1] || (l[5] = s), a && bn.apply(l[2] || (l[2] = []), n), f && Sn.apply(l[3] || (l[3] = []), r), l[1] |= t, lt.apply(null, l)) : (1 == t || 17 === t ? G : nt)([e, t, n, r, i, s])
        }
        function ct(e) {
            return Fn[e]
        }
        function ht() {
            var t = (t = K.indexOf) === Ft ? e : t;
            return t
        }
        function pt(e) {
            return typeof e == "function" && hn.test(e)
        }
        function dt(e) {
            var t,
                n;
            return e && cn.call(e) == I && (t = e.constructor, !wt(t) || t instanceof t) ? (v(e, function(e, t) {
                n = t
            }), typeof n == "undefined" || yn.call(e, n)) : !1
        }
        function vt(e) {
            return In[e]
        }
        function mt(e) {
            return e && typeof e == "object" && typeof e.length == "number" && cn.call(e) == D || !1
        }
        function gt(e, t, n) {
            var r = jn(e),
                i = r.length;
            for (t = tt(t, n, 3); i-- && (n = r[i], !1 !== t(e[n], n, e));)
                ;
            return e
        }
        function yt(e) {
            var t = [];
            return v(e, function(e, n) {
                wt(e) && t.push(n)
            }), t.sort()
        }
        function bt(e) {
            for (var t = -1, n = jn(e), r = n.length, i = {}; ++t < r;) {
                var s = n[t];
                i[e[s]] = s
            }
            return i
        }
        function wt(e) {
            return typeof e == "function"
        }
        function Et(e) {
            return !!e && !!X[typeof e]
        }
        function St(e) {
            return typeof e == "number" || e && typeof e == "object" && cn.call(e) == F || !1
        }
        function xt(e) {
            return typeof e == "string" || e && typeof e == "object" && cn.call(e) == R || !1
        }
        function Tt(e) {
            for (var t = -1, n = jn(e), r = n.length, i = Gt(r); ++t < r;)
                i[t] = e[n[t]];
            return i
        }
        function Nt(e, t, n) {
            var r = -1,
                i = ht(),
                s = e ? e.length : 0,
                o = !1;
            return n = (0 > n ? An(0, s + n) : n) || 0, Bn(e) ? o = -1 < i(e, t, n) : typeof s == "number" ? o = -1 < (xt(e) ? e.indexOf(t, n) : i(e, t, n)) : d(e, function(e) {
                return ++r < n ? void 0 : !(o = e === t)
            }), o
        }
        function Ct(e, t, n) {
            var r = !0;
            t = K.createCallback(t, n, 3),
            n = -1;
            var i = e ? e.length : 0;
            if (typeof i == "number")
                for (; ++n < i && (r = !!t(e[n], n, e));)
                    ;
            else
                d(e, function(e, n, i) {
                    return r = !!t(e, n, i)
                });
            return r
        }
        function kt(e, t, n) {
            var r = [];
            t = K.createCallback(t, n, 3),
            n = -1;
            var i = e ? e.length : 0;
            if (typeof i == "number")
                for (; ++n < i;) {
                    var s = e[n];
                    t(s, n, e) && r.push(s)
                }
            else
                d(e, function(e, n, i) {
                    t(e, n, i) && r.push(e)
                });
            return r
        }
        function Lt(e, t, n) {
            t = K.createCallback(t, n, 3),
            n = -1;
            var r = e ? e.length : 0;
            if (typeof r != "number") {
                var i;
                return d(e, function(e, n, r) {
                    return t(e, n, r) ? (i = e, !1) : void 0
                }), i
            }
            for (; ++n < r;) {
                var s = e[n];
                if (t(s, n, e))
                    return s
            }
        }
        function At(e, t, n) {
            var r = -1,
                i = e ? e.length : 0;
            if (t = t && typeof n == "undefined" ? t : tt(t, n, 3), typeof i == "number")
                for (; ++r < i && !1 !== t(e[r], r, e);)
                    ;
            else
                d(e, t);
            return e
        }
        function Ot(e, t, n) {
            var r = e ? e.length : 0;
            if (t = t && typeof n == "undefined" ? t : tt(t, n, 3), typeof r == "number")
                for (; r-- && !1 !== t(e[r], r, e);)
                    ;
            else {
                var i = jn(e),
                    r = i.length;
                d(e, function(e, n, s) {
                    return n = i ? i[--r] : --r, t(s[n], n, s)
                })
            }
            return e
        }
        function Mt(e, t, n) {
            var r = -1,
                i = e ? e.length : 0;
            if (t = K.createCallback(t, n, 3), typeof i == "number")
                for (var s = Gt(i); ++r < i;)
                    s[r] = t(e[r], r, e);
            else
                s = [],
                d(e, function(e, n, i) {
                    s[++r] = t(e, n, i)
                });
            return s
        }
        function _t(e, t, n) {
            var i = -1 / 0,
                s = i;
            if (typeof t != "function" && n && n[t] === e && (t = null), null == t && Bn(e)) {
                n = -1;
                for (var o = e.length; ++n < o;) {
                    var u = e[n];
                    u > s && (s = u)
                }
            } else
                t = null == t && xt(e) ? r : K.createCallback(t, n, 3),
                At(e, function(e, n, r) {
                    n = t(e, n, r),
                    n > i && (i = n, s = e)
                });
            return s
        }
        function Dt(e, t, n, r) {
            if (!e)
                return n;
            var i = 3 > arguments.length;
            t = K.createCallback(t, r, 4);
            var s = -1,
                o = e.length;
            if (typeof o == "number")
                for (i && (n = e[++s]); ++s < o;)
                    n = t(n, e[s], s, e);
            else
                d(e, function(e, r, s) {
                    n = i ? (i = !1, e) : t(n, e, r, s)
                });
            return n
        }
        function Pt(e, t, n, r) {
            var i = 3 > arguments.length;
            return t = K.createCallback(t, r, 4), Ot(e, function(e, r, s) {
                n = i ? (i = !1, e) : t(n, e, r, s)
            }), n
        }
        function Ht(e) {
            var t = -1,
                n = e ? e.length : 0,
                r = Gt(typeof n == "number" ? n : 0);
            return At(e, function(e) {
                var n = ut(0, ++t);
                r[t] = r[n],
                r[n] = e
            }), r
        }
        function Bt(e, t, n) {
            var r;
            t = K.createCallback(t, n, 3),
            n = -1;
            var i = e ? e.length : 0;
            if (typeof i == "number")
                for (; ++n < i && !(r = t(e[n], n, e));)
                    ;
            else
                d(e, function(e, n, i) {
                    return !(r = t(e, n, i))
                });
            return !!r
        }
        function jt(e, t, n) {
            var r = 0,
                i = e ? e.length : 0;
            if (typeof t != "number" && null != t) {
                var s = -1;
                for (t = K.createCallback(t, n, 3); ++s < i && t(e[s], s, e);)
                    r++
            } else if (r = t, null == r || n)
                return e ? e[0] : p;
            return c(e, 0, On(An(0, r), i))
        }
        function Ft(t, n, r) {
            if (typeof r == "number") {
                var i = t ? t.length : 0;
                r = 0 > r ? An(0, i + r) : r || 0
            } else if (r)
                return r = qt(t, n), t[r] === n ? r : -1;
            return e(t, n, r)
        }
        function It(e, t, n) {
            if (typeof t != "number" && null != t) {
                var r = 0,
                    i = -1,
                    s = e ? e.length : 0;
                for (t = K.createCallback(t, n, 3); ++i < s && t(e[i], i, e);)
                    r++
            } else
                r = null == t || n ? 1 : An(0, t);
            return c(e, r)
        }
        function qt(e, t, n, r) {
            var i = 0,
                s = e ? e.length : i;
            for (n = n ? K.createCallback(n, r, 1) : Vt, t = n(t); i < s;)
                r = i + s >>> 1,
                n(e[r]) < t ? i = r + 1 : s = r;
            return i
        }
        function Rt(e, t, n, r) {
            return typeof t != "boolean" && null != t && (r = n, n = typeof t != "function" && r && r[t] === e ? null : t, t = !1), null != n && (n = K.createCallback(n, r, 3)), at(e, t, n)
        }
        function Ut() {
            for (var e = 1 < arguments.length ? arguments : arguments[0], t = -1, n = e ? _t(Vn(e, "length")) : 0, r = Gt(0 > n ? 0 : n); ++t < n;)
                r[t] = Vn(e, t);
            return r
        }
        function zt(e, t) {
            var n = -1,
                r = e ? e.length : 0,
                i = {};
            for (t || !r || Bn(e[0]) || (t = []); ++n < r;) {
                var s = e[n];
                t ? i[s] = t[n] : s && (i[s[0]] = s[1])
            }
            return i
        }
        function Wt(e, t) {
            return 2 < arguments.length ? lt(e, 17, c(arguments, 2), null, t) : lt(e, 1, null, null, t)
        }
        function Xt(e, t, n) {
            function r() {
                l && dn(l),
                o = l = c = p,
                (v || d !== t) && (h = $n(), u = e.apply(f, s), l || o || (s = f = null))
            }
            function i() {
                var n = t - ($n() - a);
                0 < n ? l = wn(i, n) : (o && dn(o), n = c, o = l = c = p, n && (h = $n(), u = e.apply(f, s), l || o || (s = f = null)))
            }
            var s,
                o,
                u,
                a,
                f,
                l,
                c,
                h = 0,
                d = !1,
                v = !0;
            if (!wt(e))
                throw new un;
            if (t = An(0, t) || 0, !0 === n)
                var m = !0,
                    v = !1;
            else
                Et(n) && (m = n.leading, d = "maxWait" in n && (An(t, n.maxWait) || 0), v = "trailing" in n ? n.trailing : v);
            return function() {
                if (s = arguments, a = $n(), f = this, c = v && (l || !m), !1 === d)
                    var n = m && !l;
                else {
                    o || m || (h = a);
                    var p = d - (a - h),
                        g = 0 >= p;
                    g ? (o && (o = dn(o)), h = a, u = e.apply(f, s)) : o || (o = wn(r, p))
                }
                return g && l ? l = dn(l) : l || t === d || (l = wn(i, t)), n && (g = !0, u = e.apply(f, s)), !g || l || o || (s = f = null), u
            }
        }
        function Vt(e) {
            return e
        }
        function $t(e, t, n) {
            var r = !0,
                i = t && yt(t);
            t && (n || i.length) || (null == n && (n = t), s = Q, t = e, e = K, i = yt(t)),
            !1 === n ? r = !1 : Et(n) && "chain" in n && (r = n.chain);
            var s = e,
                o = wt(s);
            At(i, function(n) {
                var i = e[n] = t[n];
                o && (s.prototype[n] = function() {
                    var t = this.__chain__,
                        n = this.__wrapped__,
                        o = [n];
                    if (bn.apply(o, arguments), o = i.apply(e, o), r || t) {
                        if (n === o && Et(o))
                            return this;
                        o = new s(o),
                        o.__chain__ = t
                    }
                    return o
                })
            })
        }
        function Jt() {}
        function Kt(e) {
            return function(t) {
                return t[e]
            }
        }
        function Qt() {
            return this.__wrapped__
        }
        n = n ? Y.defaults($.Object(), n, Y.pick($, _)) : $;
        var Gt = n.Array,
            Yt = n.Boolean,
            Zt = n.Date,
            en = n.Function,
            tn = n.Math,
            nn = n.Number,
            rn = n.Object,
            sn = n.RegExp,
            on = n.String,
            un = n.TypeError,
            an = [],
            fn = rn.prototype,
            ln = n._,
            cn = fn.toString,
            hn = sn("^" + on(cn).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
            pn = tn.ceil,
            dn = n.clearTimeout,
            vn = tn.floor,
            mn = en.prototype.toString,
            gn = pt(gn = rn.getPrototypeOf) && gn,
            yn = fn.hasOwnProperty,
            bn = an.push,
            wn = n.setTimeout,
            En = an.splice,
            Sn = an.unshift,
            xn = function() {
                try {
                    var e = {},
                        t = pt(t = rn.defineProperty) && t,
                        n = t(e, e, e) && t
                } catch (r) {}
                return n
            }(),
            Tn = pt(Tn = rn.create) && Tn,
            Nn = pt(Nn = Gt.isArray) && Nn,
            Cn = n.isFinite,
            kn = n.isNaN,
            Ln = pt(Ln = rn.keys) && Ln,
            An = tn.max,
            On = tn.min,
            Mn = n.parseInt,
            _n = tn.random,
            Dn = {};
        Dn[P] = Gt,
        Dn[H] = Yt,
        Dn[B] = Zt,
        Dn[j] = en,
        Dn[I] = rn,
        Dn[F] = nn,
        Dn[q] = sn,
        Dn[R] = on,
        Q.prototype = K.prototype;
        var Pn = K.support = {};
        Pn.funcDecomp = !pt(n.a) && O.test(h),
        Pn.funcNames = typeof en.name == "string",
        K.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: k,
            variable: "",
            imports: {
                _: K
            }
        },
        Tn || (et = function() {
            function e() {}
            return function(t) {
                if (Et(t)) {
                    e.prototype = t;
                    var r = new e;
                    e.prototype = null
                }
                return r || n.Object()
            }
        }());
        var Hn = xn ? function(e, t) {
                W.value = t,
                xn(e, "__bindData__", W)
            } : Jt,
            Bn = Nn || function(e) {
                return e && typeof e == "object" && typeof e.length == "number" && cn.call(e) == P || !1
            },
            jn = Ln ? function(e) {
                return Et(e) ? Ln(e) : []
            } : J,
            Fn = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            In = bt(Fn),
            qn = sn("(" + jn(In).join("|") + ")", "g"),
            Rn = sn("[" + jn(Fn).join("") + "]", "g"),
            Un = gn ? function(e) {
                if (!e || cn.call(e) != I)
                    return !1;
                var t = e.valueOf,
                    n = pt(t) && (n = gn(t)) && gn(n);
                return n ? e == n || gn(e) == n : dt(e)
            } : dt,
            zn = ft(function(e, t, n) {
                yn.call(e, n) ? e[n]++ : e[n] = 1
            }),
            Wn = ft(function(e, t, n) {
                (yn.call(e, n) ? e[n] : e[n] = []).push(t)
            }),
            Xn = ft(function(e, t, n) {
                e[n] = t
            }),
            Vn = Mt,
            $n = pt($n = Zt.now) && $n || function() {
                return (new Zt).getTime()
            },
            Jn = 8 == Mn(w + "08") ? Mn : function(e, t) {
                return Mn(xt(e) ? e.replace(L, "") : e, t || 0)
            };
        return K.after = function(e, t) {
            if (!wt(t))
                throw new un;
            return function() {
                return 1 > --e ? t.apply(this, arguments) : void 0
            }
        }, K.assign = V, K.at = function(e) {
            for (var t = arguments, n = -1, r = it(t, !0, !1, 1), t = t[2] && t[2][t[1]] === e ? 1 : r.length, i = Gt(t); ++n < t;)
                i[n] = e[r[n]];
            return i
        }, K.bind = Wt, K.bindAll = function(e) {
            for (var t = 1 < arguments.length ? it(arguments, !0, !1, 1) : yt(e), n = -1, r = t.length; ++n < r;) {
                var i = t[n];
                e[i] = lt(e[i], 1, null, null, e)
            }
            return e
        }, K.bindKey = function(e, t) {
            return 2 < arguments.length ? lt(t, 19, c(arguments, 2), null, e) : lt(t, 3, null, null, e)
        }, K.chain = function(e) {
            return e = new Q(e), e.__chain__ = !0, e
        }, K.compact = function(e) {
            for (var t = -1, n = e ? e.length : 0, r = []; ++t < n;) {
                var i = e[t];
                i && r.push(i)
            }
            return r
        }, K.compose = function() {
            for (var e = arguments, t = e.length; t--;)
                if (!wt(e[t]))
                    throw new un;
            return function() {
                for (var t = arguments, n = e.length; n--;)
                    t = [e[n].apply(this, t)];
                return t[0]
            }
        }, K.constant = function(e) {
            return function() {
                return e
            }
        }, K.countBy = zn, K.create = function(e, t) {
            var n = et(e);
            return t ? V(n, t) : n
        }, K.createCallback = function(e, t, n) {
            var r = typeof e;
            if (null == e || "function" == r)
                return tt(e, t, n);
            if ("object" != r)
                return Kt(e);
            var i = jn(e),
                s = i[0],
                o = e[s];
            return 1 != i.length || o !== o || Et(o) ? function(t) {
                for (var n = i.length, r = !1; n-- && (r = st(t[i[n]], e[i[n]], null, !0));)
                    ;
                return r
            } : function(e) {
                return e = e[s], o === e && (0 !== o || 1 / o == 1 / e)
            }
        }, K.curry = function(e, t) {
            return t = typeof t == "number" ? t : +t || e.length, lt(e, 4, null, null, null, t)
        }, K.debounce = Xt, K.defaults = b, K.defer = function(e) {
            if (!wt(e))
                throw new un;
            var t = c(arguments, 1);
            return wn(function() {
                e.apply(p, t)
            }, 1)
        }, K.delay = function(e, t) {
            if (!wt(e))
                throw new un;
            var n = c(arguments, 2);
            return wn(function() {
                e.apply(p, n)
            }, t)
        }, K.difference = function(e) {
            return rt(e, it(arguments, !0, !0, 1))
        }, K.filter = kt, K.flatten = function(e, t, n, r) {
            return typeof t != "boolean" && null != t && (r = n, n = typeof t != "function" && r && r[t] === e ? null : t, t = !1), null != n && (e = Mt(e, n, r)), it(e, t)
        }, K.forEach = At, K.forEachRight = Ot, K.forIn = v, K.forInRight = function(e, t, n) {
            var r = [];
            v(e, function(e, t) {
                r.push(t, e)
            });
            var i = r.length;
            for (t = tt(t, n, 3); i-- && !1 !== t(r[i--], r[i], e);)
                ;
            return e
        }, K.forOwn = d, K.forOwnRight = gt, K.functions = yt, K.groupBy = Wn, K.indexBy = Xn, K.initial = function(e, t, n) {
            var r = 0,
                i = e ? e.length : 0;
            if (typeof t != "number" && null != t) {
                var s = i;
                for (t = K.createCallback(t, n, 3); s-- && t(e[s], s, e);)
                    r++
            } else
                r = null == t || n ? 1 : t || r;
            return c(e, 0, On(An(0, i - r), i))
        }, K.intersection = function() {
            for (var n = [], r = -1, i = arguments.length, o = u(), a = ht(), c = a === e, h = u(); ++r < i;) {
                var p = arguments[r];
                (Bn(p) || mt(p)) && (n.push(p), o.push(c && p.length >= y && s(r ? n[r] : h)))
            }
            var c = n[0],
                d = -1,
                v = c ? c.length : 0,
                m = [];
            e:
            for (; ++d < v;) {
                var g = o[0],
                    p = c[d];
                if (0 > (g ? t(g, p) : a(h, p))) {
                    for (r = i, (g || h).push(p); --r;)
                        if (g = o[r], 0 > (g ? t(g, p) : a(n[r], p)))
                            continue e;
                    m.push(p)
                }
            }
            for (; i--;)
                (g = o[i]) && l(g);
            return f(o), f(h), m
        }, K.invert = bt, K.invoke = function(e, t) {
            var n = c(arguments, 2),
                r = -1,
                i = typeof t == "function",
                s = e ? e.length : 0,
                o = Gt(typeof s == "number" ? s : 0);
            return At(e, function(e) {
                o[++r] = (i ? t : e[t]).apply(e, n)
            }), o
        }, K.keys = jn, K.map = Mt, K.mapValues = function(e, t, n) {
            var r = {};
            return t = K.createCallback(t, n, 3), d(e, function(e, n, i) {
                r[n] = t(e, n, i)
            }), r
        }, K.max = _t, K.memoize = function(e, t) {
            function n() {
                var r = n.cache,
                    i = t ? t.apply(this, arguments) : g + arguments[0];
                return yn.call(r, i) ? r[i] : r[i] = e.apply(this, arguments)
            }
            if (!wt(e))
                throw new un;
            return n.cache = {}, n
        }, K.merge = function(e) {
            var t = arguments,
                n = 2;
            if (!Et(e))
                return e;
            if ("number" != typeof t[2] && (n = t.length), 3 < n && "function" == typeof t[n - 2])
                var r = tt(t[--n - 1], t[n--], 2);
            else
                2 < n && "function" == typeof t[n - 1] && (r = t[--n]);
            for (var t = c(arguments, 1, n), i = -1, s = u(), o = u(); ++i < n;)
                ot(e, t[i], r, s, o);
            return f(s), f(o), e
        }, K.min = function(e, t, n) {
            var i = 1 / 0,
                s = i;
            if (typeof t != "function" && n && n[t] === e && (t = null), null == t && Bn(e)) {
                n = -1;
                for (var o = e.length; ++n < o;) {
                    var u = e[n];
                    u < s && (s = u)
                }
            } else
                t = null == t && xt(e) ? r : K.createCallback(t, n, 3),
                At(e, function(e, n, r) {
                    n = t(e, n, r),
                    n < i && (i = n, s = e)
                });
            return s
        }, K.omit = function(e, t, n) {
            var r = {};
            if (typeof t != "function") {
                var i = [];
                v(e, function(e, t) {
                    i.push(t)
                });
                for (var i = rt(i, it(arguments, !0, !1, 1)), s = -1, o = i.length; ++s < o;) {
                    var u = i[s];
                    r[u] = e[u]
                }
            } else
                t = K.createCallback(t, n, 3),
                v(e, function(e, n, i) {
                    t(e, n, i) || (r[n] = e)
                });
            return r
        }, K.once = function(e) {
            var t,
                n;
            if (!wt(e))
                throw new un;
            return function() {
                return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
            }
        }, K.pairs = function(e) {
            for (var t = -1, n = jn(e), r = n.length, i = Gt(r); ++t < r;) {
                var s = n[t];
                i[t] = [s, e[s]]
            }
            return i
        }, K.partial = function(e) {
            return lt(e, 16, c(arguments, 1))
        }, K.partialRight = function(e) {
            return lt(e, 32, null, c(arguments, 1))
        }, K.pick = function(e, t, n) {
            var r = {};
            if (typeof t != "function")
                for (var i = -1, s = it(arguments, !0, !1, 1), o = Et(e) ? s.length : 0; ++i < o;) {
                    var u = s[i];
                    u in e && (r[u] = e[u])
                }
            else
                t = K.createCallback(t, n, 3),
                v(e, function(e, n, i) {
                    t(e, n, i) && (r[n] = e)
                });
            return r
        }, K.pluck = Vn, K.property = Kt, K.pull = function(e) {
            for (var t = arguments, n = 0, r = t.length, i = e ? e.length : 0; ++n < r;)
                for (var s = -1, o = t[n]; ++s < i;)
                    e[s] === o && (En.call(e, s--, 1), i--);
            return e
        }, K.range = function(e, t, n) {
            e = +e || 0,
            n = typeof n == "number" ? n : +n || 1,
            null == t && (t = e, e = 0);
            var r = -1;
            t = An(0, pn((t - e) / (n || 1)));
            for (var i = Gt(t); ++r < t;)
                i[r] = e,
                e += n;
            return i
        }, K.reject = function(e, t, n) {
            return t = K.createCallback(t, n, 3), kt(e, function(e, n, r) {
                return !t(e, n, r)
            })
        }, K.remove = function(e, t, n) {
            var r = -1,
                i = e ? e.length : 0,
                s = [];
            for (t = K.createCallback(t, n, 3); ++r < i;)
                n = e[r],
                t(n, r, e) && (s.push(n), En.call(e, r--, 1), i--);
            return s
        }, K.rest = It, K.shuffle = Ht, K.sortBy = function(e, t, n) {
            var r = -1,
                s = Bn(t),
                o = e ? e.length : 0,
                c = Gt(typeof o == "number" ? o : 0);
            for (s || (t = K.createCallback(t, n, 3)), At(e, function(e, n, i) {
                var o = c[++r] = a();
                s ? o.m = Mt(t, function(t) {
                    return e[t]
                }) : (o.m = u())[0] = t(e, n, i),
                o.n = r,
                o.o = e
            }), o = c.length, c.sort(i); o--;)
                e = c[o],
                c[o] = e.o,
                s || f(e.m),
                l(e);
            return c
        }, K.tap = function(e, t) {
            return t(e), e
        }, K.throttle = function(e, t, n) {
            var r = !0,
                i = !0;
            if (!wt(e))
                throw new un;
            return !1 === n ? r = !1 : Et(n) && (r = "leading" in n ? n.leading : r, i = "trailing" in n ? n.trailing : i), z.leading = r, z.maxWait = t, z.trailing = i, Xt(e, t, z)
        }, K.times = function(e, t, n) {
            e = -1 < (e = +e) ? e : 0;
            var r = -1,
                i = Gt(e);
            for (t = tt(t, n, 1); ++r < e;)
                i[r] = t(r);
            return i
        }, K.toArray = function(e) {
            return e && typeof e.length == "number" ? c(e) : Tt(e)
        }, K.transform = function(e, t, n, r) {
            var i = Bn(e);
            if (null == n)
                if (i)
                    n = [];
                else {
                    var s = e && e.constructor;
                    n = et(s && s.prototype)
                }
            return t && (t = K.createCallback(t, r, 4), (i ? At : d)(e, function(e, r, i) {
                return t(n, e, r, i)
            })), n
        }, K.union = function() {
            return at(it(arguments, !0, !0))
        }, K.uniq = Rt, K.values = Tt, K.where = kt, K.without = function(e) {
            return rt(e, c(arguments, 1))
        }, K.wrap = function(e, t) {
            return lt(t, 16, [e])
        }, K.xor = function() {
            for (var e = -1, t = arguments.length; ++e < t;) {
                var n = arguments[e];
                if (Bn(n) || mt(n))
                    var r = r ? at(rt(r, n).concat(rt(n, r))) : n
            }
            return r || []
        }, K.zip = Ut, K.zipObject = zt, K.collect = Mt, K.drop = It, K.each = At, K.eachRight = Ot, K.extend = V, K.methods = yt, K.object = zt, K.select = kt, K.tail = It, K.unique = Rt, K.unzip = Ut, $t(K), K.clone = function(e, t, n, r) {
            return typeof t != "boolean" && null != t && (r = n, n = t, t = !1), Z(e, t, typeof n == "function" && tt(n, r, 1))
        }, K.cloneDeep = function(e, t, n) {
            return Z(e, !0, typeof t == "function" && tt(t, n, 1))
        }, K.contains = Nt, K.escape = function(e) {
            return null == e ? "" : on(e).replace(Rn, ct)
        }, K.every = Ct, K.find = Lt, K.findIndex = function(e, t, n) {
            var r = -1,
                i = e ? e.length : 0;
            for (t = K.createCallback(t, n, 3); ++r < i;)
                if (t(e[r], r, e))
                    return r;
            return -1
        }, K.findKey = function(e, t, n) {
            var r;
            return t = K.createCallback(t, n, 3), d(e, function(e, n, i) {
                return t(e, n, i) ? (r = n, !1) : void 0
            }), r
        }, K.findLast = function(e, t, n) {
            var r;
            return t = K.createCallback(t, n, 3), Ot(e, function(e, n, i) {
                return t(e, n, i) ? (r = e, !1) : void 0
            }), r
        }, K.findLastIndex = function(e, t, n) {
            var r = e ? e.length : 0;
            for (t = K.createCallback(t, n, 3); r--;)
                if (t(e[r], r, e))
                    return r;
            return -1
        }, K.findLastKey = function(e, t, n) {
            var r;
            return t = K.createCallback(t, n, 3), gt(e, function(e, n, i) {
                return t(e, n, i) ? (r = n, !1) : void 0
            }), r
        }, K.has = function(e, t) {
            return e ? yn.call(e, t) : !1
        }, K.identity = Vt, K.indexOf = Ft, K.isArguments = mt, K.isArray = Bn, K.isBoolean = function(e) {
            return !0 === e || !1 === e || e && typeof e == "object" && cn.call(e) == H || !1
        }, K.isDate = function(e) {
            return e && typeof e == "object" && cn.call(e) == B || !1
        }, K.isElement = function(e) {
            return e && 1 === e.nodeType || !1
        }, K.isEmpty = function(e) {
            var t = !0;
            if (!e)
                return t;
            var n = cn.call(e),
                r = e.length;
            return n == P || n == R || n == D || n == I && typeof r == "number" && wt(e.splice) ? !r : (d(e, function() {
                return t = !1
            }), t)
        }, K.isEqual = function(e, t, n, r) {
            return st(e, t, typeof n == "function" && tt(n, r, 2))
        }, K.isFinite = function(e) {
            return Cn(e) && !kn(parseFloat(e))
        }, K.isFunction = wt, K.isNaN = function(e) {
            return St(e) && e != +e
        }, K.isNull = function(e) {
            return null === e
        }, K.isNumber = St, K.isObject = Et, K.isPlainObject = Un, K.isRegExp = function(e) {
            return e && typeof e == "object" && cn.call(e) == q || !1
        }, K.isString = xt, K.isUndefined = function(e) {
            return typeof e == "undefined"
        }, K.lastIndexOf = function(e, t, n) {
            var r = e ? e.length : 0;
            for (typeof n == "number" && (r = (0 > n ? An(0, r + n) : On(n, r - 1)) + 1); r--;)
                if (e[r] === t)
                    return r;
            return -1
        }, K.mixin = $t, K.noConflict = function() {
            return n._ = ln, this
        }, K.noop = Jt, K.now = $n, K.parseInt = Jn, K.random = function(e, t, n) {
            var r = null == e,
                i = null == t;
            return null == n && (typeof e == "boolean" && i ? (n = e, e = 1) : i || typeof t != "boolean" || (n = t, i = !0)), r && i && (t = 1), e = +e || 0, i ? (t = e, e = 0) : t = +t || 0, n || e % 1 || t % 1 ? (n = _n(), On(e + n * (t - e + parseFloat("1e-" + ((n + "").length - 1))), t)) : ut(e, t)
        }, K.reduce = Dt, K.reduceRight = Pt, K.result = function(e, t) {
            if (e) {
                var n = e[t];
                return wt(n) ? e[t]() : n
            }
        }, K.runInContext = h, K.size = function(e) {
            var t = e ? e.length : 0;
            return typeof t == "number" ? t : jn(e).length
        }, K.some = Bt, K.sortedIndex = qt, K.template = function(e, t, n) {
            var r = K.templateSettings;
            e = on(e || ""),
            n = b({}, n, r);
            var i,
                s = b({}, n.imports, r.imports),
                r = jn(s),
                s = Tt(s),
                u = 0,
                a = n.interpolate || A,
                f = "__p+='",
                a = sn((n.escape || A).source + "|" + a.source + "|" + (a === k ? T : A).source + "|" + (n.evaluate || A).source + "|$", "g");
            e.replace(a, function(t, n, r, s, a, l) {
                return r || (r = s), f += e.slice(u, l).replace(M, o), n && (f += "'+__e(" + n + ")+'"), a && (i = !0, f += "';" + a + ";\n__p+='"), r && (f += "'+((__t=(" + r + "))==null?'':__t)+'"), u = l + t.length, t
            }),
            f += "';",
            a = n = n.variable,
            a || (n = "obj", f = "with(" + n + "){" + f + "}"),
            f = (i ? f.replace(E, "") : f).replace(S, "$1").replace(x, "$1;"),
            f = "function(" + n + "){" + (a ? "" : n + "||(" + n + "={});") + "var __t,__p='',__e=_.escape" + (i ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + f + "return __p}";
            try {
                var l = en(r, "return " + f).apply(p, s)
            } catch (c) {
                throw c.source = f, c
            }
            return t ? l(t) : (l.source = f, l)
        }, K.unescape = function(e) {
            return null == e ? "" : on(e).replace(qn, vt)
        }, K.uniqueId = function(e) {
            var t = ++m;
            return on(null == e ? "" : e) + t
        }, K.all = Ct, K.any = Bt, K.detect = Lt, K.findWhere = Lt, K.foldl = Dt, K.foldr = Pt, K.include = Nt, K.inject = Dt, $t(function() {
            var e = {};
            return d(K, function(t, n) {
                K.prototype[n] || (e[n] = t)
            }), e
        }(), !1), K.first = jt, K.last = function(e, t, n) {
            var r = 0,
                i = e ? e.length : 0;
            if (typeof t != "number" && null != t) {
                var s = i;
                for (t = K.createCallback(t, n, 3); s-- && t(e[s], s, e);)
                    r++
            } else if (r = t, null == r || n)
                return e ? e[i - 1] : p;
            return c(e, An(0, i - r))
        }, K.sample = function(e, t, n) {
            return e && typeof e.length != "number" && (e = Tt(e)), null == t || n ? e ? e[ut(0, e.length - 1)] : p : (e = Ht(e), e.length = On(An(0, t), e.length), e)
        }, K.take = jt, K.head = jt, d(K, function(e, t) {
            var n = "sample" !== t;
            K.prototype[t] || (K.prototype[t] = function(t, r) {
                var i = this.__chain__,
                    s = e(this.__wrapped__, t, r);
                return i || null != t && (!r || n && typeof t == "function") ? new Q(s, i) : s
            })
        }), K.VERSION = "2.4.1", K.prototype.chain = function() {
            return this.__chain__ = !0, this
        }, K.prototype.toString = function() {
            return on(this.__wrapped__)
        }, K.prototype.value = Qt, K.prototype.valueOf = Qt, At(["join", "pop", "shift"], function(e) {
            var t = an[e];
            K.prototype[e] = function() {
                var e = this.__chain__,
                    n = t.apply(this.__wrapped__, arguments);
                return e ? new Q(n, e) : n
            }
        }), At(["push", "reverse", "sort", "unshift"], function(e) {
            var t = an[e];
            K.prototype[e] = function() {
                return t.apply(this.__wrapped__, arguments), this
            }
        }), At(["concat", "slice", "splice"], function(e) {
            var t = an[e];
            K.prototype[e] = function() {
                return new Q(t.apply(this.__wrapped__, arguments), this.__chain__)
            }
        }), K
    }
    var p,
        d = [],
        v = [],
        m = 0,
        g = +(new Date) + "",
        y = 75,
        b = 40,
        w = " 	\f ﻿\n\r\u2028\u2029 ᠎             　",
        E = /\b__p\+='';/g,
        S = /\b(__p\+=)''\+/g,
        x = /(__e\(.*?\)|\b__t\))\+'';/g,
        T = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        N = /\w*$/,
        C = /^\s*function[ \n\r\t]+\w/,
        k = /<%=([\s\S]+?)%>/g,
        L = RegExp("^[" + w + "]*0+(?=.$)"),
        A = /($^)/,
        O = /\bthis\b/,
        M = /['\n\r\t\u2028\u2029\\]/g,
        _ = "Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),
        D = "[object Arguments]",
        P = "[object Array]",
        H = "[object Boolean]",
        B = "[object Date]",
        j = "[object Function]",
        F = "[object Number]",
        I = "[object Object]",
        q = "[object RegExp]",
        R = "[object String]",
        U = {};
    U[j] = !1,
    U[D] = U[P] = U[H] = U[B] = U[F] = U[I] = U[q] = U[R] = !0;
    var z = {
            leading: !1,
            maxWait: 0,
            trailing: !1
        },
        W = {
            configurable: !1,
            enumerable: !1,
            value: null,
            writable: !1
        },
        X = {
            "boolean": !1,
            "function": !0,
            object: !0,
            number: !1,
            string: !1,
            "undefined": !1
        },
        V = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        $ = X[typeof window] && window || this,
        J = X[typeof exports] && exports && !exports.nodeType && exports,
        K = X[typeof module] && module && !module.nodeType && module,
        Q = K && K.exports === J && J,
        G = X[typeof global] && global;
    !G || G.global !== G && G.window !== G || ($ = G);
    var Y = h();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? ($._ = Y, define("underscore", [], function() {
        return Y
    })) : J && K ? Q ? (K.exports = Y)._ = Y : J._ = Y : $._ = Y
}.call(this),
define("lib-build/tpl", {
    load: function(e) {
        throw new Error("Dynamic load not allowed: " + e)
    }
}),
define("lib-build/tpl!storymaps/tpl/ui/MainMediaContainerMap", [], function() {
    return function(obj) {
        obj || (obj = {});
        var __t,
            __p = "",
            __e = _.escape;
        with (obj)
            __p += '<div class="mainMediaContainer">\n    <div class="mapContainer" data-webmapid="' + ((__t = webmapid) == null ? "" : __t) + '" data-temporary="' + ((__t = isTemporary) == null ? "" : __t) + '"></div>\n	<div class="overview"></div>\n	<div class="legend"></div>\n	<div class="mainStageErrorContainer">\n		<div class="error"></div>\n	</div>\n</div>\n';
        return __p
    }
}),
define("lib-build/tpl!storymaps/tpl/ui/MainMediaContainerImage", [], function() {
    return function(obj) {
        obj || (obj = {});
        var __t,
            __p = "",
            __e = _.escape;
        with (obj)
            __p += '<div class="mainMediaContainer">\n    <div class="imgContainer" data-src="' + ((__t = url) == null ? "" : __t) + '"></div>\n</div>\n';
        return __p
    }
}),
define("lib-build/tpl!storymaps/tpl/ui/MainMediaContainerEmbed", [], function() {
    return function(obj) {
        function print() {
            __p += __j.call(arguments, "")
        }
        obj || (obj = {});
        var __t,
            __p = "",
            __e = _.escape,
            __j = Array.prototype.join;
        with (obj)
            __p += '<div class="mainMediaContainer">\n    ',
            url ? __p += '\n    	<iframe class="embedContainer" data-src="' + ((__t = url) == null ? "" : __t) + '" data-unload="' + ((__t = unload) == null ? "" : __t) + '" allowfullscreen="1"></iframe>\n    ' : frameTag && (__p += "\n    	" + ((__t = frameTag) == null ? "" : __t) + "\n    "),
            __p += "\n</div>\n";
        return __p
    }
}),
define("lib-build/css!storymaps/tpl/ui/MainStage", [], function() {}),
define("storymaps/tpl/core/Helper", ["esri/IdentityManager", "dojo/cookie"], function(e, t) {
    return {
        possiblyAddToken: function(e) {
            if (!this.needsToken(e))
                return e;
            e = this.removeToken(e);
            var t = this.getToken();
            return t ? e + "?token=" + t : (console.warn("no token found even though token needed"), e)
        },
        getToken: function() {
            if (app.portal && app.portal.getPortalUser())
                return app.portal.getPortalUser().credential.token;
            var t = e.findCredential(document.location.origin);
            if (t)
                return t.token;
            var n = e.findCredential(app.portal.url);
            return n ? e.findCredential(app.portal.url).token : this.getCookieToken()
        },
        isAppResource: function(e, t) {
            return t || (t = app.data && app.data.getWebAppItem && app.data.getWebAppItem()), t ? t && t.id && e && e.match(new RegExp("/sharing/rest/content/items/" + t.id + "/resources/")) : !1
        },
        needsToken: function(e) {
            var t = app.data && app.data.getWebAppItem && app.data.getWebAppItem();
            return t ? this.isAppResource(e, t) && t.access !== "public" : !1
        },
        getCookieToken: function() {
            var e = t("esri_auth");
            if (!e)
                return;
            e = JSON.parse(e.replace('"ssl":undefined', '"ssl":""'));
            if (e.urlKey && e.customBaseUrl && (e.urlKey + "." + e.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase())
                return;
            return e ? e.token : null
        },
        possiblyRemoveToken: function(e) {
            return this.needsToken(e) ? this.removeToken(e) : e
        },
        removeToken: function(e) {
            return e.split("?token=")[0]
        }
    }
}),
define("storymaps/tpl/core/WebApplicationData", ["dojo/_base/lang", "storymaps/tpl/core/Helper"], function(e, t) {
    var n = {},
        r = {
            values: {}
        };
    return {
        set: function(t) {
            n = e.clone(t);
            if (!t || !t.values)
                return;
            r = t
        },
        get: function() {
            var t = e.clone(r);
            return t.values.template = t.values.template || {}, t.values.template = {
                name: t.values.template.name || app.cfg.TPL_NAME,
                createdWith: t.values.template.createdWith || app.version,
                editedWith: app.version
            }, t
        },
        getOriginalData: function() {
            return n
        },
        isBlank: function() {
            return Object.keys(r.values).length <= 1 || app.data.getStorySections().length === 0
        },
        getBlank: function() {
            return {
                values: {
                    webmap: n.values.webmap
                }
            }
        },
        getSourceWebmap: function() {
            return n && n.values ? n.values.webmap : null
        },
        cleanWebAppAfterInitialization: function() {
            var e = !1,
                t = [n, r];
            for (var i = 0; i < t.length; i++) {
                var s = t[i];
                s && s.values && (s.values.order && (delete s.values.order, e = !0), s.values.firstRecordAsIntro && (delete s.values.firstRecordAsIntro, e = !0), s.values.fieldsOverride && (delete s.values.fieldsOverride, e = !0), s.values.sourceLayer && (delete s.values.sourceLayer, e = !0))
            }
            return e
        },
        restoreOriginalData: function() {
            this.set(n)
        },
        updateAfterSave: function() {
            n = e.clone(r)
        },
        getTemplateVersion: function() {
            return r.values.template ? r.values.template.editedWith : null
        },
        getTemplateCreation: function() {
            return r.values.template ? r.values.template.creaedWith : null
        },
        getDoNotWarnTitle: function() {
            return r.values.doNotWarnTitle || !1
        },
        setDoNotWarnTitle: function(e) {
            r.values.doNotWarnTitle = e
        },
        getWebmap: function() {
            return r.values.webmap
        },
        setWebmap: function(e) {
            r.values.webmap = e
        },
        getTitle: function() {
            return this.getStorySections().length > 0 && this.setTitle($("<div>" + this.getStorySections()[0].title + "</div>").text()), r.values.title ? r.values.title.trim() : ""
        },
        setTitle: function(e) {
            r.values.title = e
        },
        getSubtitle: function() {
            return r.values.subtitle
        },
        setSubtitle: function(e) {
            r.values.subtitle = e
        },
        getSettings: function() {
            return r.values.settings || {}
        },
        getLayout: function() {
            return this.getSettings().layout || {}
        },
        setLayout: function(e) {
            r.values.settings = r.values.settings || {},
            r.values.settings.layout = e
        },
        getLayoutId: function() {
            return this.getLayout().id || app.cfg.LAYOUTS[0].id
        },
        getLayoutProperties: function(e) {
            var t = e || this.getLayoutId(),
                n = $.grep(app.cfg.LAYOUTS, function(e) {
                    return e.id == t
                });
            return n && n.length ? n[0] : null
        },
        getLayoutOptions: function() {
            var t = e.clone(this.getSettings().layoutOptions) || {};
            return t.layoutCfg = this.getLayoutCfg(), t.socialLinks = t.socialLinks === undefined ? !1 : t.socialLinks, t
        },
        setLayoutOptions: function(e) {
            r.values.settings = r.values.settings || {},
            r.values.settings.layoutOptions = e
        },
        getLocateBtn: function() {
            return this.getLayoutOptions().locateBtn || !1
        },
        getLayoutCfg: function() {
            var e = {},
                t = (this.getSettings().layoutOptions || {}).layoutCfg || {},
                n = this.getLayoutProperties();
            return n ? (n.sizes && (e.sizeLbl = t.size || "medium", e.sizeVal = n.sizes[e.sizeLbl]), n.positions && (e.position = t.position || n.positions[0]), e) : null
        },
        getTheme: function() {
            return this.getSettings().theme || {}
        },
        setTheme: function(e) {
            r.values.settings = r.values.settings || {},
            r.values.settings.theme = e
        },
        getColors: function() {
            var e = this.getTheme().colors;
            if (e && e.name) {
                var t = $.grep(this.getLayoutProperties().themes, function(t) {
                    return t.name == e.name
                });
                return t && t.length ? t[0] : e
            }
            return this.getLayoutProperties().themes[0]
        },
        getFonts: function() {
            var e = {
                    sectionTitle: app.cfg.FONTS.sectionTitle[0],
                    sectionContent: app.cfg.FONTS.sectionContent[0]
                },
                t = this.getTheme().fonts || {};
            return t.sectionTitle && (e.sectionTitle = $.grep(app.cfg.FONTS.sectionTitle, function(e) {
                return e.id == t.sectionTitle.id
            })[0] || t.sectionTitle), t.sectionContent && (e.sectionContent = $.grep(app.cfg.FONTS.sectionContent, function(e) {
                return e.id == t.sectionContent.id
            })[0] || t.sectionContent), e
        },
        getHeader: function() {
            return this.getSettings().header || {}
        },
        setHeader: function(e) {
            r.values.settings = r.values.settings || {},
            r.values.settings.header = e
        },
        getHeaderLinkText: function() {
            return this.getHeader().linkText === undefined ? app.cfg.HEADER_LINK_TEXT : this.getHeader().linkText
        },
        getHeaderLinkURL: function() {
            return this.getHeader().linkURL === undefined ? app.cfg.HEADER_LINK_URL : this.getHeader().linkURL
        },
        getLogoURL: function() {
            var e = this.getHeader().logoURL ? this.getHeader().logoURL : app.cfg.HEADER_LOGO_URL;
            return e == app.cfg.HEADER_LOGO_URL && this.getColors() && this.getColors().esriLogo == "white" && (e = "resources/tpl/viewer/icons/esri-logo-white.png"), t.possiblyRemoveToken(e)
        },
        getLogoTarget: function() {
            return !this.getHeader().logoURL || this.getHeader().logoURL == app.cfg.HEADER_LOGO_URL ? app.cfg.HEADER_LOGO_TARGET : this.getHeader().logoTarget
        },
        getSocial: function() {
            return this.getHeader().social
        },
        getAppGeocoders: function() {
            return this.getSettings().appGeocoders
        },
        setAppGeocoders: function(e) {
            r.values.settings = r.values.settings || {},
            r.values.settings.appGeocoders = e
        },
        getStory: function() {
            return r.values.story || {}
        },
        getStorySections: function() {
            var e = this.getStory();
            return e.sections || []
        },
        getStoryStorage: function() {
            return this.getStory().storage || "WEBAPP"
        },
        setStorySections: function(e, t) {
            r.values.story = r.values.story || {},
            r.values.story.storage = "WEBAPP",
            r.values.story.sections = e,
            r.values.story.reversed = t
        }
    }
}),
define("storymaps/tpl/ui/MainStage", ["lib-build/tpl!./MainMediaContainerMap", "lib-build/tpl!./MainMediaContainerImage", "lib-build/tpl!./MainMediaContainerEmbed", "lib-build/css!./MainStage", "../core/WebApplicationData", "../core/Helper", "dojo/has", "esri/arcgis/utils", "esri/renderers/UniqueValueRenderer", "esri/geometry/Point", "esri/geometry/Extent", "esri/config", "esri/geometry/webMercatorUtils", "esri/symbols/SimpleMarkerSymbol", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/topic", "dojo/on", "dojo/aspect", "dojo/_base/lang"], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b) {
    return function(o, u, a) {
        function h(t) {
            $("#mainStagePanel .medias").append(e({
                webmapid: t,
                isTemporary: !0
            }))
        }
        function g(e, t, n) {
            var r = $(".mainMediaContainer.active > iframe[data-unload=true]");
            r.length && r.attr("src", ""),
            $(".mainMediaContainer.active").fadeOut(),
            E();
            if (e.type == "webmap")
                S(e.webmap.id, t, n, e);
            else if (e.type == "image")
                A(e.image);
            else if (e.type == "video")
                O(e.video.url, e.video);
            else if (e.type == "webpage") {
                var i = e.webpage.url;
                i.lastIndexOf("#") > 0 && (i = i.substring(0, i.lastIndexOf("#"))),
                O(i || e.webpage.ts, e.webpage)
            }
        }
        function w() {
            $("#mainStageLoadingIndicator").fadeIn()
        }
        function E() {
            $("#mainStageLoadingIndicator").fadeOut()
        }
        function S(e, t, n, r) {
            var i = $('.mapContainer[data-webmapid="' + e + '"]');
            if (i.hasClass("isLoading"))
                return;
            $(".mainMediaContainer").removeClass("active has-error"),
            i.parent().addClass("active");
            if (e)
                if (i.hasClass("map")) {
                    var s = app.map ? app.map.extent : null;
                    app.map = app.maps[e].response.map,
                    app.mapItem = app.maps[e].response.itemInfo,
                    app.mapConfig = app.maps[e],
                    x(i, t, s, n, r, !0)
                } else {
                    i.addClass("isLoading"),
                    w();
                    var o = r && r.webmap ? r.webmap.extent : null;
                    if (o)
                        try {
                            o = new l(o)
                        } catch (f) {
                            o = null
                        }
                    a.loadWebmap(e, i[0], o).then(b.hitch(c, function(s) {
                        var o = app.map ? app.map.extent : null;
                        app.maps[e] = a.getMapConfig(s, i),
                        app.map = s.map,
                        app.mapItem = app.maps[e].response.itemInfo,
                        app.mapConfig = app.maps[e],
                        app.map.infoWindow && ($(app.map.infoWindow.domNode).addClass("light"), app.map.infoWindow.markerSymbol = (new p).setSize(0)),
                        x(i, t, o, n, r, !1);
                        if (u) {
                            app.ignoreNextEvent = !1,
                            y.before(app.map, "setExtent", function(e) {
                                console.log("Set extent:", e),
                                app.ignoreNextEvent || (app.lastExtentSet = e, app.ignoreNextEvent = !0)
                            });
                            var f = app.map.on("update-end", function() {
                                    f.remove(),
                                    app.lastExtentSet = app.map.extent,
                                    app.map.mapJournalInitExtent = app.map.extent,
                                    app.ignoreNextEvent = !0
                                }),
                                l = function(e) {
                                    app.ignoreNextEvent ? app.ignoreNextEvent = !1 : app.lastExtentSet = e.extent
                                };
                            app.map.on("zoom-end", l),
                            app.map.on("pan-end", l)
                        }
                        setTimeout(function() {
                            E()
                        }, 50),
                        i.removeClass("isLoading"),
                        i.parent().removeClass("has-error")
                    }), b.hitch(c, function() {
                        E(),
                        i.removeClass("isLoading"),
                        i.parent().addClass("has-error"),
                        i.parent().find(".error").html(i18n.viewer.errors.mapLoadingFail),
                        m.publish("story-loaded-map", {
                            id: e,
                            index: n
                        }),
                        m.publish("ADDEDIT_LOAD_WEBMAP_FAIL")
                    })),
                    setTimeout(function() {
                        m.publish("story-section-map-timeout")
                    }, 2e3)
                }
        }
        function x(e, t, n, r, s, o) {
            c.updateMainStageWithLayoutSettings(),
            L(),
            i.getLayoutId() == "float" ? app.map.disableKeyboardNavigation() : app.map.enableKeyboardNavigation();
            try {
                app.map.resize(),
                app.map.reposition()
            } catch (u) {}
            if (t || s) {
                var a = s && s.webmap ? s.webmap.layers : null,
                    f = app.maps[s.webmap.id].response.itemInfo.itemData.operationalLayers;
                $.each(f, function(e, t) {
                    var n;
                    if (t.layerObject) {
                        n = $(a).filter(function(e, n) {
                            return n.id == t.layerObject.id
                        });
                        var r = function() {
                            t.layerObject.setVisibility(n.length ? n[0].visibility : t.visibility)
                        };
                        t.layerObject.loaded ? r() : t.layerObject.on("load", r)
                    } else
                        t.featureCollection && t.featureCollection.layers && $.each(t.featureCollection.layers, function(e, t) {
                            n = $(a).filter(function(e, n) {
                                return n.id.split("_").slice(0, -1).join("_") == t.layerObject.id.split("_").slice(0, -1).join("_")
                            }),
                            t.layerObject.setVisibility(n.length ? n[0].visibility : t.visibility)
                        })
                });
                var h = s && s.webmap ? s.webmap.extent : null;
                if (h)
                    try {
                        h = new l(h)
                    } catch (u) {}
                !h && o && r === 0 && (h = app.map._params.extent),
                h ? app.map.setExtent(h).then(function() {
                    T(s.webmap.popup, r),
                    m.publish("story-loaded-map", {
                        id: s.webmap.id,
                        index: r
                    })
                }) : m.publish("story-loaded-map", {
                    id: s.webmap.id,
                    index: r
                });
                var p = s.webmap.overview || {},
                    d = s.webmap.legend || {},
                    v = s.webmap.geocoder || {};
                r === null && t.media && t.media.webmap && (p = t.media.webmap.overview || {}, d = t.media.webmap.legend || {}),
                p.enable !== undefined && (app.maps[s.webmap.id].overview.toggle(p.enable, i.getColors()), app.maps[s.webmap.id].overview.toggleExpanded(p.openByDefault), app.maps[s.webmap.id].overview.setSettings(p)),
                d.enable !== undefined && (app.maps[s.webmap.id].legend.toggle(d.enable), app.maps[s.webmap.id].legend.toggleExpanded(d.openByDefault), app.maps[s.webmap.id].legend.setSettings(d)),
                v.enable !== undefined && app.maps[s.webmap.id].geocoder.toggle(v.enable),
                h || T(s.webmap.popup, r)
            } else
                m.publish("ADDEDIT_WEBMAP_DONE")
        }
        function T(e, t) {
            app.map.infoWindow.hide();
            if (e) {
                var n = app.map.getLayer(e.layerId),
                    r = e.layerId ? e.layerId.split("_").slice(0, -1).join("_") : "",
                    i = app.map.getLayer(r);
                app.map.infoWindow.clearFeatures();
                if (n)
                    N(e, t);
                else if (i) {
                    var s = e.layerId.split("_").slice(-1).join("_"),
                        o = i.url + "/" + s,
                        u;
                    (u = i) && (u = u.infoTemplates) && (u = u[s]) && (u = u.layerUrl) && (o = u),
                    C(e, t, r, s, o)
                } else
                    var a = app.map.on("update-end", function() {
                        T(e, t),
                        a.remove()
                    })
            }
        }
        function N(e, t) {
            var n = new d,
                r = app.map.getLayer(e.layerId);
            if (!r)
                return;
            n.objectIds = [e.fieldValue],
            r._collection || (n.returnGeometry = !0, n.outFields = ["*"], n.outSpatialReference = app.map.spatialReference);
            if (!r.queryFeatures)
                return;
            r.queryFeatures(n).then(function(n) {
                k(e, n.features, t)
            })
        }
        function C(e, t, n, r, i) {
            var s = new v(i),
                o = new d,
                u = app.map.getLayer(n);
            if (!u)
                return;
            o.objectIds = [e.fieldValue],
            o.returnGeometry = !0,
            o.outFields = ["*"],
            o.outSpatialReference = app.map.spatialReference,
            s.execute(o, function(i) {
                k(e, i.features, t, n, r)
            })
        }
        function k(e, t, n, r, i) {
            if (!t || !t.length)
                return;
            var s = t[0].geometry,
                o = null;
            e.anchorPoint ? o = new f(e.anchorPoint) : o = s.getExtent() ? s.getExtent().getCenter() : s,
            r ? (t[0].infoTemplate = app.map.getLayer(r).infoTemplates[i].infoTemplate, app.map.infoWindow.setContent(t[0].getContent())) : app.map.infoWindow.setFeatures(t),
            app.map.infoWindow.show(o),
            app.map.extent.contains(o) || app.map.centerAt(o)
        }
        function L() {
            if (app.mapConfig) {
                var e = app.data.getWebAppData().getColors();
                app.mapConfig.overview.setColors(e),
                app.mapConfig.legend.setColors(e)
            }
        }
        function A(e) {
            $(".mainMediaContainer").removeClass("active");
            var t = $('.imgContainer[data-src="' + e.url + '"]');
            if (t.length) {
                t.css("background-image") == "none" && w();
                var n = e.url;
                if (e.sizes) {
                    var r = _.sortBy(e.sizes, "width").reverse();
                    n = r[0].url;
                    if (r.length > 1) {
                        var i = e.display && e.display === "fit" ? $("#mainStagePanel").width() : $("body").width();
                        _.some(r, function(e) {
                            return e.width && e.width < i ? !0 : (n = e.url, !1)
                        })
                    }
                }
                var o = s.possiblyAddToken(n);
                t.parent().addClass("active");
                var u = new Image;
                u.src = o,
                u.onload = function() {
                    t.removeClass("center fit fill stretch").addClass(e.display).css({
                        left: 0,
                        right: 0
                    }).css("background-image", 'url("' + o + '")'),
                    c.updateMainStageWithLayoutSettings(),
                    t.parent().hasClass("active") && setTimeout(E(), 100)
                }
            }
        }
        function O(e, t) {
            $(".mainMediaContainer").removeClass("active");
            var n = $('.embedContainer[data-src="' + e + '"]');
            n.length || (n = $('.embedContainer[data-ts="' + e + '"]'), e = n.data("src"));
            if (n.length) {
                n.removeClass("center fit fill stretch").addClass(t.display).attr("data-unload", t.hash === undefined && (t.unload === undefined || t.unload)).css({
                    left: 0,
                    right: 0
                }),
                t.hash && (e = e + "#" + t.hash, n.attr("src", e)),
                n.attr("src") || (n.off("load").load(E), w(), n.attr("src", e));
                var r = t.width || "560",
                    i = t.height || "315";
                t.display == "fit" && (r = "", i = ""),
                r && (r.match(/[0-9]+%/) || (r += "px"), n.attr("width", r)),
                i && (i.match(/[0-9]+%/) || (i += "px"), n.attr("height", i)),
                n.parent().addClass("active"),
                c.updateMainStageWithLayoutSettings()
            }
        }
        function M() {
            $(".mainMediaContainer.active iframe.embedContainer.fit").attr("height", $("#mainStagePanel").width() * 9 / 16)
        }
        var c = this;
        this.updateMainMediaContainers = function() {
            var r = app.data.getWebmaps(),
                i = app.data.getImages(),
                s = app.data.getEmbeds();
            $.each(r, function(t, n) {
                var r = $('.mapContainer[data-webmapid="' + n + '"]');
                r.length || $("#mainStagePanel .medias").append(e({
                    webmapid: n,
                    isTemporary: !1
                }))
            }),
            $(".mapContainer").each(function() {
                $.inArray($(this).data("webmapid"), r) == -1 && $(this).parent().remove()
            }),
            $.each(i, function(e, n) {
                var r = $('.imgContainer[data-src="' + n + '"]');
                r.length || $("#mainStagePanel .medias").append(t({
                    url: n
                }))
            }),
            $(".imgContainer").each(function() {
                $.inArray($(this).data("src"), i) == -1 && $(this).parent().remove()
            }),
            $.each(s, function(e, t) {
                var r = t.url,
                    i = "";
                r.lastIndexOf("#") > 0 && (r = r.substring(0, r.lastIndexOf("#")), i = t.url.substring(t.url.lastIndexOf("#") + 1), t.hash = i);
                var s = $('.embedContainer[data-src="' + (r || t.ts) + '"]');
                if (!s.length) {
                    $("#mainStagePanel .medias").append(n({
                        url: r,
                        frameTag: t.frameTag,
                        unload: t.unload === undefined || !!t.unload
                    }));
                    if (!!t.frameTag) {
                        var o = $("#mainStagePanel .medias .mainMediaContainer").last().find("iframe").first();
                        o.addClass("embedContainer").attr("data-src", o.attr("src")).removeAttr("src").attr("data-ts", t.ts).attr("data-unload", t.unload === undefined || !!t.unload)
                    }
                }
            }),
            $(".embedContainer").each(function() {
                var e = $(this).data("ts") || $(this).data("src"),
                    t = $.grep(s, function(t) {
                        var n = t.url;
                        return n.lastIndexOf("#") > 0 && (n = n.substring(0, n.lastIndexOf("#"))), e == n || e == t.ts
                    }).length > 0;
                t || $(this).parent().remove()
            }),
            L()
        },
        this.beforeMainMediaUpdate = function(e) {
            var t = app.data.getStoryByIndex(e);
            if (t && t.media && t.media.type == "webmap") {
                var n = t.media.webmap.id;
                if (app.maps[n]) {
                    var r = app.maps[n].response.map,
                        i = r.getLayer("MJActionsLocate");
                    i && r.removeLayer(i)
                }
            }
        },
        this.updateMainMediaWithStoryMainMedia = function(e) {
            var t = app.data.getStoryByIndex(e);
            t && t.media && g(t.media, t, e),
            m.publish("story-load-section", e)
        },
        this.updateMainMediaWithStoryAction = function(e) {
            g(e, app.data.getCurrentSection(), null)
        },
        this.updateMainStageWithLayoutSettings = function() {
            var e = i.getLayoutId(),
                t = app.data.getWebAppData().getColors(),
                n = i.getLayoutCfg(),
                r = $("body").width();
            M(),
            o.css("background-color", t.media),
            L();
            if (e == "float") {
                var s = $("#contentPanel").width(),
                    u = $("#floatingPanel").position(),
                    a = $("#floatingPanel").width(),
                    f = n.position == "left",
                    l = f ? s - (u.left + a) : u.left;
                f ? $(".mainMediaContainer.active .esriControlsBR").css({
                    left: u.left + a + 5,
                    right: "inherit"
                }) : $(".mainMediaContainer.active .esriControlsBR").css({
                    left: "inherit",
                    right: s - u.left + 5
                }),
                f ? $(".mapConfigOverlay.position, .mapConfigOverlay.popup, #mainStageLoadingIndicator, .mainStageErrorContainer").css("left", u.left + a + l / 2) : $(".mapConfigOverlay.position, .mapConfigOverlay.popup, #mainStageLoadingIndicator, .mainStageErrorContainer").css("left", l / 2),
                $("body").hasClass("mobile-view") && $("#mainStageLoadingIndicator, .mainStageErrorContainer").css("left", "50%");
                var c = $("body").hasClass("layout-float-right"),
                    h = c ? "padding-right" : "padding-left",
                    p = c ? "right" : "left",
                    d = $("#floatingPanel").position().left;
                c ? d = r - d : d += $("#floatingPanel").width(),
                $(".centerAlignOnFloat").css({
                    paddingRight: 0,
                    paddingLeft: 0
                }).css(h, d),
                $(".mediaBackContainer").css({
                    left: "inherit",
                    right: "inherit"
                }).css(p, d + l / 2),
                r <= 1067 && $("#builderHelp").css(h, 0),
                $(".mainMediaContainer .imgContainer.center").css({
                    left: 0,
                    right: 0
                }).css(p, d),
                $(".mainMediaContainer .embedContainer.center").css({
                    left: 0,
                    right: 0
                }).css(p, d),
                $(".mainMediaContainer .embedContainer.custom").css({
                    left: 0,
                    right: 0
                }).css(p, d),
                $("#autoplay").css({
                    left: "inherit",
                    right: "inherit"
                }).css(p, d + l / 2)
            } else
                $(".mainMediaContainer.active .esriControlsBR").css({
                    left: "",
                    right: ""
                }),
                $(".mapConfigOverlay.position, .mapConfigOverlay.popup, #mainStageLoadingIndicator, .mainStageErrorContainer").css("left", "50%"),
                $(".centerAlignOnFloat").css({
                    paddingRight: 0,
                    paddingLeft: 0
                }),
                $(".mediaBackContainer").css({
                    left: "50%",
                    right: "inherit"
                }),
                $(".mainMediaContainer .imgContainer.center").css({
                    left: 0,
                    right: 0
                }),
                $(".mainMediaContainer .embedContainer.center").css({
                    left: 0,
                    right: 0
                }),
                $(".mainMediaContainer .embedContainer.custom").css({
                    left: 0,
                    right: 0
                }),
                $("#autoplay").css({
                    left: "50%",
                    right: "inherit"
                })
        },
        this.showWebmapById = function(e) {
            S(e, null, null, null)
        },
        this.reloadCurrentWebmap = function() {
            var t = app.data.getCurrentSection();
            if (t && t.media && t.media.webmap) {
                var n = t.media.webmap.id,
                    r = $('.mapContainer[data-webmapid="' + n + '"]');
                r.parent().remove(),
                app.maps[n] && (app.maps[n].response.map.destroy(), delete app.maps[n]),
                $("#mainStagePanel .medias").append(e({
                    webmapid: n,
                    isTemporary: !1
                })),
                m.publish("story-navigate-section", app.data.getCurrentSectionIndex())
            }
        },
        this.loadTmpWebmap = function(e) {
            $('.mapContainer[data-webmapid="' + e + '"]').length || h(e),
            S(e, null, null, null)
        }
    }
}),
define("storymaps/tpl/core/Config", [], function() {
    var e = "resources/tpl/viewer/icons/esri-logo.png",
        t = "http://www.esri.com",
        n = "A story map",
        r = "http://storymaps.arcgis.com";
    return app.appCfg = {
        supportWebmapPreviewAGOL: !1,
        useWebmapInApp: !1,
        useStandardHeader: !1,
        useAppTitleAsPageTitle: !1
    }, app.appCfg.getLayoutThumnail = function(e) {
        e = e || {};
        var t = e.layout || n.id,
            n = app.data.getLayoutStaticConfig(t),
            r = e.theme || n.themes[0],
            i = e.options || {
                position: n.positions[0],
                size: "medium"
            },
            s = e.selected || !1,
            o = e.separateNavBar || !1,
            u = e.contentStep || !1,
            a = e.contentStepIdx || 1,
            f = e.contentSize || !1,
            l = e.contentLabel || !1,
            c = "",
            h = "",
            p = "",
            d = "";
        !o && !u && !f && !l && (o = !0),
        i.sizeLbl && (i.size = i.sizeLbl),
        c += '<div class="layout-thumbnail layout-' + t + " size-" + i.size + " pos-" + i.position + (s ? " selected" : "") + "\" data-colors='" + JSON.stringify(r) + "'>",
        c += '<div class="layout-selected"></div>';
        if (t == "side") {
            h = '<div class="layout-block" style="float: left; margin-left: 3%; width: $size$%; background-color:$color$; $styleOpt$"><div class="thumb-content $contentClass$" style="$contentStyle$">$content$</div></div>';
            var v = 8,
                m = 20,
                g = 59;
            i.size == "small" ? (v = 8, m = 15, g = 64) : i.size == "large" && (v = 8, m = 35, g = 44);
            if (o)
                i.position == "left" ? (c += h.replace("$size$", v).replace("$color$", r.dotNav).replace("$styleOpt$", "").replace("$contentClass$", "").replace("$content$", ""), c += h.replace("$size$", m).replace("$color$", r.panel).replace("$styleOpt$", "").replace("$contentClass$", "").replace("$content$", ""), c += h.replace("$size$", g).replace("$color$", r.media).replace("$styleOpt$", "").replace("$contentClass$", "").replace("$content$", "")) : (c += h.replace("$size$", g).replace("$color$", r.media).replace("$styleOpt$", "").replace("$contentClass$", "").replace("$content$", ""), c += h.replace("$size$", m).replace("$color$", r.panel).replace("$styleOpt$", "").replace("$contentClass$", "").replace("$content$", ""), c += h.replace("$size$", v).replace("$color$", r.dotNav).replace("$styleOpt$", "").replace("$contentClass$", "").replace("$content$", ""));
            else {
                var y = i.position == "right";
                p = h.replace("$size$", v + m).replace("$color$", r.panel).replace("$styleOpt$", y ? "margin-right: 3%; float: right" : ""),
                d = h.replace("$size$", g + 3).replace("$color$", r.media).replace("$styleOpt$", y ? "float: right" : ""),
                l ? (p = p.replace("$contentClass$", "panel-lbl rotate").replace("$contentStyle$", "color: " + r.text).replace("$content$", n.title), d = d.replace("$contentClass$", "panel-lbl").replace("$content$", i18n.builder.layouts.mainStage)) : f && (p = p.replace("$contentStyle$", "color: " + r.text))
            }
        } else if (t == "float") {
            var b = parseInt(app.data.getCurrentLayoutStaticConfig().sizes[i.size], 10) - 10,
                w = i.position == "left";
            i.size == "small" && (b = 18),
            h = '<div class="layout-block layout-float $layout-left$" style="$basestyle$ width: $size$%; background-color:$color$; $styleOpt$"><div class="thumb-content $contentClass$" style="$contentStyle$">$content$</div></div>',
            h = h.replace("$layout-left$", w ? "layout-left" : ""),
            p = h.replace("$basestyle$", "margin: 0 4px;").replace("$size$", 94).replace("$color$", r.media).replace("$styleOpt$", ""),
            d = h.replace("$basestyle$", "position: absolute; right: 10%; top: 6px;").replace("$size$", b).replace("$color$", r.panel).replace("$styleOpt$", "border: none; bottom: 7px; height: auto; left: " + (w ? "10%" : "auto")),
            l ? (p = p.replace("$contentClass$", "panel-lbl").replace("$content$", i18n.builder.layouts.mainStage), d = d.replace("$contentClass$", "panel-lbl rotate").replace("$contentStyle$", "color: " + r.text).replace("$content$", n.title)) : f && (d = d.replace("$contentStyle$", "color: " + r.text))
        }
        if (u)
            p = p.replace("$contentClass$", "number number-step" + a + " " + (t == "side" ? "number-2" : "number-1")).replace("$content$", ""),
            d = d.replace("$contentClass$", "number number-step" + a + " " + (t == "side" ? "number-1" : "number-2")).replace("$content$", "");
        else if (f) {
            var E = app.data.getCurrentLayoutStaticConfig().sizes[i.size],
                S = 100 - parseInt(E, 10) + "%";
            p = p.replace("$contentClass$", "size").replace("$content$", t == "side" ? E : S),
            d = d.replace("$contentClass$", "size").replace("$content$", t == "side" ? S : E)
        } else
            p = p.replace("$contentClass$", "").replace("$content$", ""),
            d = d.replace("$contentClass$", "").replace("$content$", "");
        p = p.replace("$contentStyle$", ""),
        d = d.replace("$contentStyle$", ""),
        c += p + d;
        if (!u && !f && !l && r && r.name && r.name.match) {
            var x;
            r.name.match(/-org$|-modified$/) && (r.name.match(/-modified$/) ? x = i18n.builder.settingsThemeOptions.lblModTheme : x = i18n.builder.settingsThemeOptions.lblOrgTheme, c += '<div class="theme-label">' + x + "</div>")
        }
        return c += "</div>", c
    }, {
        checkConfigFileIsOK: function() {
            return app.cfg.HEADER_LOGO_URL = e, app.cfg.HEADER_LOGO_TARGET = t, app.cfg.HEADER_LINK_TEXT = n, app.cfg.HEADER_LINK_URL = r, app.cfg && app.cfg.HEADER_LOGO_URL !== undefined && app.cfg.HEADER_LOGO_TARGET !== undefined && app.cfg.HEADER_LINK_TEXT !== undefined && app.cfg.HEADER_LINK_URL !== undefined && app.cfg.HEADER_SOCIAL && app.cfg.MAX_NB_SECTIONS && app.cfg.DOTNAV_GROUPSIZE && app.cfg.TIMEOUT_VIEWER_LOAD && app.cfg.TIMEOUT_VIEWER_REQUEST && app.cfg.TIMEOUT_BUILDER_REQUEST && app.cfg.SECTION_ACTION_ZOOM_MAP_MARKER && app.cfg.LAYOUTS && app.cfg.LAYOUTS.length && app.cfg.FONTS && app.cfg.HELP_URL && app.cfg.HELP_URL_PORTAL && app.cfg.TPL_NAME && app.cfg.TPL_ID && app.cfg.WEBAPP_TAG && app.cfg.WEBAPP_KEYWORD_GENERIC && app.cfg.WEBAPP_KEYWORD_APP && app.cfg.AUTHORIZED_IMPORT_SOURCE && app.cfg.FLICKR_API_KEY && app.cfg.YOUTUBE_DISABLE_ON_PORTAL !== undefined && app.cfg.YOUTUBE_API_KEY && app.cfg.CORS_SERVER && app.cfg.DEFAULT_SHARING_URL && app.cfg.DEFAULT_PROXY_URL && app.cfg.BING_MAPS_KEY !== undefined && app.cfg.HELPER_SERVICES !== undefined && app.cfg.HELPER_SERVICES.geometry !== undefined && app.cfg.HELPER_SERVICES.geocode !== undefined
        }
    }
}),
define("storymaps/tpl/core/Data", ["./WebApplicationData", "storymaps/common/utils/CommonHelper", "storymaps/tpl/core/Helper", "dojo/topic", "esri/arcgis/utils"], function(e, t, n, r, i) {
    return function() {
        function h(e) {
            i.getItem(e).then(function(t) {
                a[e] = {
                    title: t.item.title,
                    sharing: t.item.access.toUpperCase()
                },
                r.publish("LOADED_WEBMAP_INFOS", {
                    id: e,
                    title: t.item.title,
                    sharing: t.item.access.toUpperCase()
                })
            })
        }
        function p(e) {
            var t = e.content,
                r = $(e.content);
            _.each(r.find("img"), function(e) {
                var r = e.src,
                    i = n.possiblyRemoveToken(e.src);
                if (r !== i) {
                    var s = r.split("?");
                    t.match(s[0] + "\\?" + s[1]) ? t = t.replace(s[0] + "?" + s[1], i) : t = t.replace(decodeURI(s[0]) + "?" + s[1], i)
                }
                d(t)
            })
        }
        function d(e) {
            var t = e.indexOf("token=");
            t >= 0 && (console.warn("token stored for", e.slice(e.lastIndexOf("/", t), t - 1)), d(e.slice(t + 6)))
        }
        var o = null,
            u = null,
            a = {},
            f = null;
        this.getWebMap = function() {
            return o
        },
        this.setWebMap = function(e) {
            o = e
        },
        this.getWebAppItem = function() {
            return u || {}
        },
        this.setWebAppItem = function(e) {
            u = e
        },
        this.getWebAppData = function() {
            return e
        },
        this.updateAfterSave = function() {
            e.updateAfterSave()
        },
        this.userIsAppOwner = function() {
            var e = app.portal ? app.portal.getPortalUser() : null;
            return e && e.username == this.getWebAppItem().owner || t.getPortalUser() != null && t.getPortalUser() == this.getWebAppItem().owner || e && e.privileges && $.inArray("portal:admin:updateItems", e.privileges) > -1 || this.getWebAppItem().itemControl == "admin" || this.getWebAppItem().itemControl == "update"
        },
        this.checkUserItemPrivileges = function() {
            var e = app.portal ? app.portal.getPortalUser() : null;
            return e && !e.orgId && !e.privileges || e && e.privileges && $.inArray("portal:user:createItem", e.privileges) > -1
        },
        this.isOrga = function() {
            return !app.portal || !app.portal.getPortalUser() ? !1 : !!app.portal.getPortalUser().orgId
        },
        this.getAppProxies = function() {
            return f
        },
        this.setAppProxies = function(e) {
            f = e
        };
        var l = null,
            c = null;
        this.getStoryStorage = function() {
            return l
        },
        this.setStoryStorage = function(e) {
            l = e
        },
        this.getStory = function() {
            return l == "WEBAPP" ? e.getStory() || {} : {}
        },
        this.getStorySections = function() {
            var t = [],
                n = [];
            return l == "WEBAPP" && (t = e.getStorySections()), t = t.slice(0, app.cfg.MAX_NB_SECTIONS), app.isInBuilder ? t || [] : ($.each(t || [], function(e, t) {
                t.status == "PUBLISHED" && t.pubDate <= Date.now() && n.push(t)
            }), n)
        },
        this.cleanSectionsNarrativeMarkup = function() {
            $.each(this.getStorySections(), function(e, t) {
                this.cleanSectionNarrativeMarkup(t)
            }.bind(this))
        },
        this.cleanSectionNarrativeMarkup = function(e) {
            if (!e)
                return;
            var t = this.cleanNarrativeMarkup(e.content);
            e.contentActions || (e.contentActions = []),
            e.content = t.markup,
            e.contentActions = e.contentActions.concat(t.actions)
        },
        this.getUID = function() {
            var e = function() {
                return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1)
            };
            return Date.now() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e()
        },
        this.cleanNarrativeMarkup = function(e) {
            if (!e)
                return;
            var t = $("<div>" + e + "</div>"),
                r = [];
            return t.find("a[onclick]").each(function(e, t) {
                var n = $(t),
                    i = n.attr("onclick"),
                    s = i.match(/\.publish\([ ]*\'story-navigate-section\'[ ]*,[ ]*([0-9]+)/);
                if (s && s.length == 2) {
                    n.removeAttr("onclick"),
                    n.removeAttr("target");
                    var o = "MJ-ACTION-" + this.getUID();
                    n.attr("data-storymaps", o),
                    n.attr("data-storymaps-type", "navigate"),
                    r.push({
                        id: o,
                        type: "navigate",
                        index: parseInt(s[1], 10)
                    })
                }
            }.bind(this)), t.find("img").each(function(e, t) {
                var r = $(t);
                r.attr("src", n.possiblyAddToken(r.attr("src")))
            }), {
                markup: t.html(),
                actions: r
            }
        },
        this.getStoryLength = function() {
            return this.getStorySections().length
        },
        this.getStoryByIndex = function(e) {
            return this.getStorySections()[e]
        },
        this.getCurrentSection = function() {
            return e.getStorySections()[c]
        },
        this.getCurrentSectionIndex = function() {
            return c
        },
        this.setCurrentSectionIndex = function(e) {
            c = e
        },
        this.addStorySection = function(t) {
            app.data.cleanSectionNarrativeMarkup(t),
            l == "WEBAPP" && (this.getStory().reversed ? (e.getStorySections().splice(1, 0, t), this.setCurrentSectionIndex(this.getStoryLength() >= 2 ? 1 : 0)) : (e.setStorySections(this.getStorySections().concat(t)), this.setCurrentSectionIndex(this.getStoryLength() - 1)))
        },
        this.editSection = function(t, n) {
            app.data.cleanSectionNarrativeMarkup(n);
            if (l == "WEBAPP") {
                var r = this.getStorySections();
                r[t] = n,
                e.setStorySections(r)
            }
        },
        this.organizeStory = function(t, n, r) {
            l == "WEBAPP" && e.setStorySections(t, r),
            n == -1 && (n = 0),
            this.setCurrentSectionIndex(n)
        },
        this.getWebmaps = function() {
            var e = $.map(this.getStorySections(), function(e) {
                return e.media && e.media.type == "webmap" && e.media.webmap ? e.media.webmap.id : null
            });
            return $.each(this.getStorySections(), function(t, n) {
                n.contentActions && $.each(n.contentActions, function(t, n) {
                    n.type == "media" && n.media.webmap && e.push(n.media.webmap.id)
                })
            }), e = $.grep(e, function(t, n) {
                return !t || t.length != 32 ? !1 : n == $.inArray(t, e)
            }), e
        },
        this.getWebmapsInfo = function() {
            var t = [],
                n = {},
                r = function(e, t, r) {
                    n[e] ? n[e][t].indexOf(r) == -1 && n[e][t].push(r) : (n[e] = {
                        sections: [],
                        actions: []
                    }, n[e][t].push(r))
                };
            $.each(this.getStorySections(), function(e, t) {
                t.media && t.media.type == "webmap" && t.media.webmap && r(t.media.webmap.id, "sections", e + 1),
                t.contentActions && $.each(t.contentActions, function(t, n) {
                    n.type == "media" && n.media.webmap && r(n.media.webmap.id, "actions", e + 1)
                })
            });
            var i = e.getSourceWebmap();
            return i && !n[i] && (n[i] = {}), $.each(Object.keys(n), function(e, r) {
                var i = a[r];
                if (!i) {
                    if (app.maps[r]) {
                        a[r] = {
                            title: app.maps[r].response.itemInfo.item.title,
                            sharing: app.maps[r].response.itemInfo.item.access.toUpperCase()
                        },
                        t.push({
                            id: r,
                            title: app.maps[r].response.itemInfo.item.title,
                            sharing: app.maps[r].response.itemInfo.item.access.toUpperCase(),
                            sections: n[r].sections,
                            actions: n[r].actions
                        });
                        return
                    }
                    h(r)
                }
                t.push({
                    id: r,
                    title: i ? i.title : null,
                    sharing: i ? i.sharing : null,
                    sections: n[r].sections,
                    actions: n[r].actions
                })
            }), t
        },
        this.getWebmapTitle = function(e) {
            return a[e] ? a[e].title : ""
        },
        this.getWebmapSharing = function(e) {
            return a[e] ? a[e].sharing : ""
        },
        this.getImages = function() {
            var e = $.map(this.getStorySections(), function(e) {
                return e.media && e.media.type == "image" && e.media.image ? e.media.image.url : null
            });
            return $.each(this.getStorySections(), function(t, n) {
                n.contentActions && $.each(n.contentActions, function(t, n) {
                    n.type == "media" && n.media.image && e.push(n.media.image.url)
                })
            }), e = $.grep(e, function(t, n) {
                return n == $.inArray(t, e)
            }), e
        },
        this.getAllImageUrls = function() {
            return _.map(this.getImages().concat(this.getSidebarImages().concat([e.getLogoURL()])), this.getNonProtocolNonDoubleSlashUrl)
        },
        this.getSidebarImages = function() {
            var e = this.getStorySections(),
                t = [];
            return _.each(e, function(e) {
                var r = $(e.content);
                _.each(r.find("img"), function(e) {
                    t.push(n.possiblyRemoveToken(e.src))
                })
            }), t
        },
        this.getNonProtocolNonDoubleSlashUrl = function(e) {
            return e.replace(/http[s]?\:\/\//, "").replace("//", "/")
        },
        this.getEmbeds = function() {
            var e = $.map(this.getStorySections(), function(e) {
                return !e || !e.media || e.media.type != "video" && e.media.type != "webpage" || !e.media[e.media.type] ? null : e.media[e.media.type]
            });
            return $.each(this.getStorySections(), function(t, n) {
                n.contentActions && $.each(n.contentActions, function(t, n) {
                    if (n.type != "media" || !n.media.type || n.media.type != "video" && n.media.type != "webpage" || !n.media[n.media.type])
                        return;
                    e.push(n.media[n.media.type])
                })
            }), e = $.grep(e, function(t, n) {
                return n == $.inArray(t, e)
            }), e
        },
        this.getContentActions = function() {
            var e = [];
            return $.each(this.getStorySections(), function(t, n) {
                $.each(n.contentActions, function(t, n) {
                    e.push(n)
                })
            }), e
        },
        this.getCurrentLayoutStaticConfig = function() {
            return this.getLayoutStaticConfig(e.getLayoutId())
        },
        this.getLayoutStaticConfig = function(e) {
            var t = $.grep(app.cfg.LAYOUTS, function(t) {
                return t.id == e
            });
            return !t || !t.length ? null : t[0]
        },
        this.debug = function() {
            console.table && console.table(app.data.getStorySections()),
            $.each(app.data.getStorySections(), function(e, t) {
                console.log("%c%s", "font-weight: bold; font-size: 18px;", "[" + e + "-" + t.title + "]"),
                console.log("%c%s", "font-weight: bold; font-size: 16px;", "> MEDIA"),
                console.log(JSON.stringify(t.media, null, "	")),
                console.log("%c%s", "font-weight: bold; font-size: 16px;", "> ACTIONS"),
                console.log(JSON.stringify(t.contentActions, null, "	"))
            })
        },
        this.checkTokens = function() {
            var t = this.getStorySections();
            _.each(t, function(e) {
                p(e)
            });
            var n = this.getImages().concat([e.getLogoURL()]);
            _.each(n, function(e) {
                d(e)
            })
        }
    }
}),
define("lib-build/tpl!storymaps/tpl/ui/desktop/SidePanelSection", [], function() {
    return function(obj) {
        obj || (obj = {});
        var __t,
            __p = "",
            __e = _.escape;
        with (obj)
            __p += ' <div class="section ' + ((__t = optHtmlClass) == null ? "" : __t) + '">\n 	<div class="title" tabindex="0">' + ((__t = title) == null ? "" : __t) + '</div>\n	<div class="content">' + ((__t = content) == null ? "" : __t) + '</div>\n	<div class="social">\n		<span class="shareIcon share_facebook icon-facebook-squared" data-url="' + ((__t = shareURL) == null ? "" : __t) + '"> Facebook</span>\n		<span class="shareIcon share_twitter icon-twitter" data-url="' + ((__t = shareURL) == null ? "" : __t) + '"> Twitter</span>\n		<span class="shareIcon share_bitly icon-link" data-url="' + ((__t = shareURL) == null ? "" : __t) + '"> ' + ((__t = lblShare) == null ? "" : __t) + "</span>\n	</div>\n</div>\n";
        return __p
    }
}),
define("lib-build/css!storymaps/tpl/ui/desktop/SidePanel", [], function() {}),
define("lib-build/css!storymaps/common/builder/InlineFieldEdit", [], function() {}),
define("lib-build/css!storymaps/tpl/ui/desktop/DotNavBar", [], function() {}),
define("storymaps/tpl/ui/desktop/DotNavBar", ["lib-build/css!./DotNavBar", "storymaps/common/utils/CommonHelper"], function(e, t) {
    return function(n, r) {
        function a(e) {
            var t = "",
                r = "",
                a = "",
                l = parseInt(e / s, 10),
                c = l * s;
            for (var h = c; h < u && h < c + s; h++) {
                var p = $("<div>" + o.sections[h].title + "</div>").text();
                p = p.replace(/"/g, "&quot;"),
                h === 0 ? t += '<div class="dot glyphicon glyphicon-home" title="' + p + '" data-index="0"></div>' : t += '<div class="dot" title="' + p + '" data-index="' + h + '">&#9679;</div>'
            }
            if (u > s) {
                if (l > 0)
                    for (var d = 0; d <= c - s; d += s)
                        r += '<div class="navGroup" data-index="' + (d + s - 1) + '">' + (d + 1) + "-" + (d + s) + "</div>";
                if (l + s < u)
                    for (var v = c + s; v < u; v += s) {
                        var m = v + 1,
                            g = Math.min(v + s, u),
                            y = m != g ? m + "-" + g : m,
                            b = "";
                        m >= 100 && g > 100 && (b = "font-size: 8px;"),
                        a += '<div class="navGroup" data-index="' + v + '" style="' + b + '">' + y + "</div>"
                    }
            }
            n.html('<div class="navDotsInner"> <div class="navDotsNav navDotsUp"></div> <div class="navGroups navGroupUp' + (r ? "" : " disabled") + '">' + r + " </div>" + ' <div class="dots">' + t + " </div>" + ' <div class="navGroups navGroupDown' + (a ? "" : " disabled") + '">' + a + " </div>" + ' <div class="navDotsNav navDotsDown"></div>' + "</div>"),
            n.find(".dot").tooltip({
                placement: o.tooltipPosition,
                trigger: "hover",
                html: !0
            }),
            f(),
            i.setActive(e)
        }
        function f() {
            n.css("background-color", o.bgColor),
            n.find(".dot, .navGroups").css("color", o.dotColor),
            t.addCSSRule(".navDots .tooltip-inner { background-color: " + o.tooltipBgColor + "; color: " + o.tooltipFontColor + "; }"),
            o.tooltipPosition && o.tooltipPosition != "left" && o.tooltipPosition != "right" ? t.addCSSRule(".navDots .tooltip-arrow { border-top-color: " + o.tooltipBgColor + " !important; border-bottom-color: " + o.tooltipBgColor + " !important; }") : t.addCSSRule(".navDots .tooltip-arrow { border-left-color: " + o.tooltipBgColor + " !important; border-right-color: " + o.tooltipBgColor + " !important; }"),
            o.activeColor ? t.addCSSRule(".navDots .dot.active, .navDots .dot:hover { color: " + o.activeColor + " !important; }", "dotNavActiveColor") : $("#dotNavActiveColor").remove(),
            n.toggleClass("theme-black", o.bgColor == "#FFFFFF")
        }
        function l() {
            n.off("click").click(function(e) {
                var t = $(e.target);
                t.hasClass("dot") && r($(e.target).data("index")),
                t.hasClass("navDotsUp") && !t.hasClass("disabled") && r(n.find(".dot.active").data("index") - 1),
                t.hasClass("navDotsDown") && !t.hasClass("disabled") && r(n.find(".dot.active").data("index") + 1),
                t.hasClass("navGroup") && r(t.data("index"))
            })
        }
        var i = this,
            s = app.cfg.DOTNAV_GROUPSIZE || 15,
            o = null,
            u = null;
        this.init = function(e) {
            o = e,
            o.sections = o.sections || [],
            o.tooltipPosition = o.tooltipPosition || "right",
            u = e.sections.length,
            a(e.sectionIndex || 0),
            f(),
            l()
        },
        this.setActive = function(e) {
            n.find(".navDotsNav").toggle(!!u);
            if (!u)
                return;
            if (!n.find(".dot[data-index=" + e + "]").length) {
                a(e);
                return
            }
            n.find(".dot").removeClass("active"),
            n.find(".dot[data-index=" + e + "]").addClass("active"),
            n.find(".navDotsUp").toggleClass("disabled", e === 0),
            n.find(".navDotsDown").toggleClass("disabled", e == u - 1)
        },
        this.update = function(e) {
            if (!o)
                return;
            e = e || {},
            o.bgColor = e.bgColor || o.bgColor,
            o.tooltipBgColor = e.tooltipBgColor || o.tooltipBgColor,
            o.tooltipFontColor = e.tooltipFontColor || o.tooltipFontColor,
            o.dotColor = e.dotColor || o.dotColor,
            o.activeColor = e.activeColor,
            f()
        },
        this.resize = function() {},
        this.destroy = function() {
            n.off("click"),
            n.empty()
        },
        this.updateTooltipPlacement = function(e) {
            n.find(".dot").tooltip("destroy").tooltip({
                placement: e,
                trigger: "hover"
            })
        }
    }
}),
function(e, t, n) {
    function Q(n, r, i) {
        var o = t.createElement(n);
        return r && (o.id = s + r), i && (o.style.cssText = i), e(o)
    }
    function G() {
        return n.innerHeight ? n.innerHeight : e(n).height()
    }
    function Y(t, n) {
        n !== Object(n) && (n = {}),
        this.cache = {},
        this.el = t,
        this.value = function(t) {
            var i;
            return this.cache[t] === undefined && (i = e(this.el).attr("data-cbox-" + t), i !== undefined ? this.cache[t] = i : n[t] !== undefined ? this.cache[t] = n[t] : r[t] !== undefined && (this.cache[t] = r[t])), this.cache[t]
        },
        this.get = function(t) {
            var n = this.value(t);
            return e.isFunction(n) ? n.call(this.el, this) : n
        }
    }
    function Z(e) {
        var t = E.length,
            n = (I + e) % t;
        return n < 0 ? t + n : n
    }
    function et(e, t) {
        return Math.round((/%/.test(e) ? (t === "x" ? S.width() : G()) / 100 : 1) * parseInt(e, 10))
    }
    function tt(e, t) {
        return e.get("photo") || e.get("photoRegex").test(t)
    }
    function nt(e, t) {
        return e.get("retinaUrl") && n.devicePixelRatio > 1 ? t.replace(e.get("photoRegex"), e.get("retinaSuffix")) : t
    }
    function rt(e) {
        "contains" in d[0] && !d[0].contains(e.target) && e.target !== p[0] && (e.stopPropagation(), d.focus())
    }
    function it(e) {
        it.str !== e && (d.add(p).removeClass(it.str).addClass(e), it.str = e)
    }
    function st() {
        I = 0,
        rel && rel !== "nofollow" ? (E = e("." + o).filter(function() {
            var t = e.data(this, i),
                n = new Y(this, t);
            return n.get("rel") === rel
        }), I = E.index(P.el), I === -1 && (E = E.add(P.el), I = E.length - 1)) : E = e(P.el)
    }
    function ot(n) {
        e(t).trigger(n),
        D.triggerHandler(n)
    }
    function at(n) {
        var r;
        z || (r = e(n).data("colorbox"), P = new Y(n, r), rel = P.get("rel"), st(), R || (R = U = !0, it(P.get("className")), d.css({
            visibility: "hidden",
            display: "block",
            opacity: ""
        }), x = Q(V, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), m.css({
            width: "",
            height: ""
        }).append(x), H = g.height() + w.height() + m.outerHeight(!0) - m.height(), B = y.width() + b.width() + m.outerWidth(!0) - m.width(), j = x.outerHeight(!0), F = x.outerWidth(!0), P.w = et(P.get("initialWidth"), "x"), P.h = et(P.get("initialHeight"), "y"), x.css({
            width: "",
            height: P.h
        }), X.position(), ot(u), P.get("onOpen"), _.add(C).hide(), d.focus(), P.get("trapFocus") && t.addEventListener && (t.addEventListener("focus", rt, !0), D.one(c, function() {
            t.removeEventListener("focus", rt, !0)
        })), P.get("returnFocus") && D.one(c, function() {
            e(P.el).focus()
        })), p.css({
            opacity: parseFloat(P.get("opacity")) || "",
            cursor: P.get("overlayClose") ? "pointer" : "",
            visibility: "visible"
        }).show(), P.get("closeButton") ? M.html(P.get("close")).appendTo(m) : M.appendTo("<div/>"), ct())
    }
    function ft() {
        !d && t.body && (K = !1, S = e(n), d = Q(V).attr({
            id: i,
            "class": e.support.opacity === !1 ? s + "IE" : "",
            role: "dialog",
            tabindex: "-1"
        }).hide(), p = Q(V, "Overlay").hide(), N = e([Q(V, "LoadingOverlay")[0], Q(V, "LoadingGraphic")[0]]), v = Q(V, "Wrapper"), m = Q(V, "Content").append(C = Q(V, "Title"), k = Q(V, "Current"), O = e('<button type="button"/>').attr({
            id: s + "Previous"
        }), A = e('<button type="button"/>').attr({
            id: s + "Next"
        }), L = Q("button", "Slideshow"), N), M = e('<button type="button"/>').attr({
            id: s + "Close"
        }), v.append(Q(V).append(Q(V, "TopLeft"), g = Q(V, "TopCenter"), Q(V, "TopRight")), Q(V, !1, "clear:left").append(y = Q(V, "MiddleLeft"), m, b = Q(V, "MiddleRight")), Q(V, !1, "clear:left").append(Q(V, "BottomLeft"), w = Q(V, "BottomCenter"), Q(V, "BottomRight"))).find("div div").css({
            "float": "left"
        }), T = Q(V, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), _ = A.add(O).add(k).add(L), e(t.body).append(p, d.append(v, T)))
    }
    function lt() {
        function n(e) {
            e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey || (e.preventDefault(), at(this))
        }
        return d ? (K || (K = !0, A.click(function() {
            X.next()
        }), O.click(function() {
            X.prev()
        }), M.click(function() {
            X.close()
        }), p.click(function() {
            P.get("overlayClose") && X.close()
        }), e(t).bind("keydown." + s, function(e) {
            var t = e.keyCode;
            R && P.get("escKey") && t === 27 && (e.preventDefault(), X.close()),
            R && P.get("arrowKey") && E[1] && !e.altKey && (t === 37 ? (e.preventDefault(), O.click()) : t === 39 && (e.preventDefault(), A.click()))
        }), e.isFunction(e.fn.on) ? e(t).on("click." + s, "." + o, n) : e("." + o).live("click." + s, n)), !0) : !1
    }
    function ct() {
        var r,
            i,
            o = X.prep,
            u,
            f = ++$;
        U = !0,
        q = !1,
        ot(h),
        ot(a),
        P.get("onLoad"),
        P.h = P.get("height") ? et(P.get("height"), "y") - j - H : P.get("innerHeight") && et(P.get("innerHeight"), "y"),
        P.w = P.get("width") ? et(P.get("width"), "x") - F - B : P.get("innerWidth") && et(P.get("innerWidth"), "x"),
        P.mw = P.w,
        P.mh = P.h,
        P.get("maxWidth") && (P.mw = et(P.get("maxWidth"), "x") - F - B, P.mw = P.w && P.w < P.mw ? P.w : P.mw),
        P.get("maxHeight") && (P.mh = et(P.get("maxHeight"), "y") - j - H, P.mh = P.h && P.h < P.mh ? P.h : P.mh),
        r = P.get("href"),
        W = setTimeout(function() {
            N.show()
        }, 100),
        P.get("inline") ? (u = Q(V).hide().insertBefore(e(r)[0]), D.one(h, function() {
            u.replaceWith(x.children())
        }), o(e(r))) : P.get("iframe") ? o(" ") : P.get("html") ? o(P.get("html")) : tt(P, r) ? (r = nt(P, r), q = t.createElement("img"), e(q).addClass(s + "Photo").bind("error", function() {
            o(Q(V, "Error").html(P.get("imgError")))
        }).one("load", function() {
            var t;
            if (f !== $)
                return;
            e.each(["alt", "longdesc", "aria-describedby"], function(t, n) {
                var r = e(P.el).attr(n) || e(P.el).attr("data-" + n);
                r && q.setAttribute(n, r)
            }),
            P.get("retinaImage") && n.devicePixelRatio > 1 && (q.height = q.height / n.devicePixelRatio, q.width = q.width / n.devicePixelRatio),
            P.get("scalePhotos") && (i = function() {
                q.height -= q.height * t,
                q.width -= q.width * t
            }, P.mw && q.width > P.mw && (t = (q.width - P.mw) / q.width, i()), P.mh && q.height > P.mh && (t = (q.height - P.mh) / q.height, i())),
            P.h && (q.style.marginTop = Math.max(P.mh - q.height, 0) / 2 + "px"),
            E[1] && (P.get("loop") || E[I + 1]) && (q.style.cursor = "pointer", q.onclick = function() {
                X.next()
            }),
            q.style.width = q.width + "px",
            q.style.height = q.height + "px",
            setTimeout(function() {
                o(q)
            }, 1)
        }), setTimeout(function() {
            q.src = r
        }, 1)) : r && T.load(r, P.get("data"), function(t, n) {
            f === $ && o(n === "error" ? Q(V, "Error").html(P.get("xhrError")) : e(this).contents())
        })
    }
    var r = {
            html: !1,
            photo: !1,
            iframe: !1,
            inline: !1,
            transition: "elastic",
            speed: 300,
            fadeOut: 300,
            width: !1,
            initialWidth: "600",
            innerWidth: !1,
            maxWidth: !1,
            height: !1,
            initialHeight: "450",
            innerHeight: !1,
            maxHeight: !1,
            scalePhotos: !0,
            scrolling: !0,
            opacity: .9,
            preloading: !0,
            className: !1,
            overlayClose: !0,
            escKey: !0,
            arrowKey: !0,
            top: !1,
            bottom: !1,
            left: !1,
            right: !1,
            fixed: !1,
            data: undefined,
            closeButton: !0,
            fastIframe: !0,
            open: !1,
            reposition: !0,
            loop: !0,
            slideshow: !1,
            slideshowAuto: !0,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
            retinaImage: !1,
            retinaUrl: !1,
            retinaSuffix: "@2x.$1",
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            returnFocus: !0,
            trapFocus: !0,
            onOpen: !1,
            onLoad: !1,
            onComplete: !1,
            onCleanup: !1,
            onClosed: !1,
            rel: function() {
                return this.rel
            },
            href: function() {
                return e(this).attr("href")
            },
            title: function() {
                return this.title
            }
        },
        i = "colorbox",
        s = "cbox",
        o = s + "Element",
        u = s + "_open",
        a = s + "_load",
        f = s + "_complete",
        l = s + "_cleanup",
        c = s + "_closed",
        h = s + "_purge",
        p,
        d,
        v,
        m,
        g,
        y,
        b,
        w,
        E,
        S,
        x,
        T,
        N,
        C,
        k,
        L,
        A,
        O,
        M,
        _,
        D = e("<a/>"),
        P,
        H,
        B,
        j,
        F,
        I,
        q,
        R,
        U,
        z,
        W,
        X,
        V = "div",
        $ = 0,
        J = {},
        K,
        ut = function() {
            function i() {
                clearTimeout(r)
            }
            function o() {
                if (P.get("loop") || E[I + 1])
                    i(),
                    r = setTimeout(X.next, P.get("slideshowSpeed"))
            }
            function u() {
                L.html(P.get("slideshowStop")).unbind(n).one(n, c),
                D.bind(f, o).bind(a, i),
                d.removeClass(t + "off").addClass(t + "on")
            }
            function c() {
                i(),
                D.unbind(f, o).unbind(a, i),
                L.html(P.get("slideshowStart")).unbind(n).one(n, function() {
                    X.next(),
                    u()
                }),
                d.removeClass(t + "on").addClass(t + "off")
            }
            function h() {
                e = !1,
                L.hide(),
                i(),
                D.unbind(f, o).unbind(a, i),
                d.removeClass(t + "off " + t + "on")
            }
            var e,
                t = s + "Slideshow_",
                n = "click." + s,
                r;
            return function() {
                e ? P.get("slideshow") || (D.unbind(l, h), h()) : P.get("slideshow") && E[1] && (e = !0, D.one(l, h), P.get("slideshowAuto") ? u() : c(), L.show())
            }
        }();
    if (e.colorbox)
        return;
    e(ft),
    X = e.fn[i] = e[i] = function(t, n) {
        var r,
            s = this;
        t = t || {};
        if (e.isFunction(s))
            s = e("<a/>"),
            t.open = !0;
        else if (!s[0])
            return s;
        return s[0] ? (ft(), lt() && (n && (t.onComplete = n), s.each(function() {
            var n = e.data(this, i) || {};
            e.data(this, i, e.extend(n, t))
        }).addClass(o), r = new Y(s[0], t), r.get("open") && at(s[0])), s) : s
    },
    X.position = function(t, n) {
        function l() {
            g[0].style.width = w[0].style.width = m[0].style.width = parseInt(d[0].style.width, 10) - B + "px",
            m[0].style.height = y[0].style.height = b[0].style.height = parseInt(d[0].style.height, 10) - H + "px"
        }
        var r,
            i = 0,
            o = 0,
            u = d.offset(),
            a,
            f;
        S.unbind("resize." + s),
        d.css({
            top: -9e4,
            left: -9e4
        }),
        a = S.scrollTop(),
        f = S.scrollLeft(),
        P.get("fixed") ? (u.top -= a, u.left -= f, d.css({
            position: "fixed"
        })) : (i = a, o = f, d.css({
            position: "absolute"
        })),
        P.get("right") !== !1 ? o += Math.max(S.width() - P.w - F - B - et(P.get("right"), "x"), 0) : P.get("left") !== !1 ? o += et(P.get("left"), "x") : o += Math.round(Math.max(S.width() - P.w - F - B, 0) / 2),
        P.get("bottom") !== !1 ? i += Math.max(G() - P.h - j - H - et(P.get("bottom"), "y"), 0) : P.get("top") !== !1 ? i += et(P.get("top"), "y") : i += Math.round(Math.max(G() - P.h - j - H, 0) / 2),
        d.css({
            top: u.top,
            left: u.left,
            visibility: "visible"
        }),
        v[0].style.width = v[0].style.height = "9999px",
        r = {
            width: P.w + F + B,
            height: P.h + j + H,
            top: i,
            left: o
        };
        if (t) {
            var c = 0;
            e.each(r, function(e) {
                if (r[e] !== J[e]) {
                    c = t;
                    return
                }
            }),
            t = c
        }
        J = r,
        t || d.css(r),
        d.dequeue().animate(r, {
            duration: t || 0,
            complete: function() {
                l(),
                U = !1,
                v[0].style.width = P.w + F + B + "px",
                v[0].style.height = P.h + j + H + "px",
                P.get("reposition") && setTimeout(function() {
                    S.bind("resize." + s, X.position)
                }, 1),
                n && n()
            },
            step: l
        })
    },
    X.resize = function(e) {
        var t;
        R && (e = e || {}, e.width && (P.w = et(e.width, "x") - F - B), e.innerWidth && (P.w = et(e.innerWidth, "x")), x.css({
            width: P.w
        }), e.height && (P.h = et(e.height, "y") - j - H), e.innerHeight && (P.h = et(e.innerHeight, "y")), !e.innerHeight && !e.height && (t = x.scrollTop(), x.css({
            height: "auto"
        }), P.h = x.height()), x.css({
            height: P.h
        }), t && x.scrollTop(t), X.position(P.get("transition") === "none" ? 0 : P.get("speed")))
    },
    X.prep = function(n) {
        function u() {
            return P.w = P.w || x.width(), P.w = P.mw && P.mw < P.w ? P.mw : P.w, P.w
        }
        function a() {
            return P.h = P.h || x.height(), P.h = P.mh && P.mh < P.h ? P.mh : P.h, P.h
        }
        if (!R)
            return;
        var r,
            o = P.get("transition") === "none" ? 0 : P.get("speed");
        x.remove(),
        x = Q(V, "LoadedContent").append(n),
        x.hide().appendTo(T.show()).css({
            width: u(),
            overflow: P.get("scrolling") ? "auto" : "hidden"
        }).css({
            height: a()
        }).prependTo(m),
        T.hide(),
        e(q).css({
            "float": "none"
        }),
        it(P.get("className")),
        r = function() {
            function a() {
                e.support.opacity === !1 && d[0].style.removeAttribute("filter")
            }
            var n = E.length,
                r,
                u;
            if (!R)
                return;
            u = function() {
                clearTimeout(W),
                N.hide(),
                ot(f),
                P.get("onComplete")
            },
            C.html(P.get("title")).show(),
            x.show(),
            n > 1 ? (typeof P.get("current") == "string" && k.html(P.get("current").replace("{current}", I + 1).replace("{total}", n)).show(), A[P.get("loop") || I < n - 1 ? "show" : "hide"]().html(P.get("next")), O[P.get("loop") || I ? "show" : "hide"]().html(P.get("previous")), ut(), P.get("preloading") && e.each([Z(-1), Z(1)], function() {
                var n,
                    r = E[this],
                    s = new Y(r, e.data(r, i)),
                    o = s.get("href");
                o && tt(s, o) && (o = nt(s, o), n = t.createElement("img"), n.src = o)
            })) : _.hide(),
            P.get("iframe") ? (r = t.createElement("iframe"), "frameBorder" in r && (r.frameBorder = 0), "allowTransparency" in r && (r.allowTransparency = "true"), P.get("scrolling") || (r.scrolling = "no"), e(r).attr({
                src: P.get("href"),
                name: (new Date).getTime(),
                "class": s + "Iframe",
                allowFullScreen: !0
            }).one("load", u).appendTo(x), D.one(h, function() {
                r.src = "//about:blank"
            }), P.get("fastIframe") && e(r).trigger("load")) : u(),
            P.get("transition") === "fade" ? d.fadeTo(o, 1, a) : a()
        },
        P.get("transition") === "fade" ? d.fadeTo(o, 0, function() {
            X.position(0, r)
        }) : X.position(o, r)
    },
    X.next = function() {
        !U && E[1] && (P.get("loop") || E[I + 1]) && (I = Z(1), at(E[I]))
    },
    X.prev = function() {
        !U && E[1] && (P.get("loop") || I) && (I = Z(-1), at(E[I]))
    },
    X.close = function() {
        R && !z && (z = !0, R = !1, ot(l), P.get("onCleanup"), S.unbind("." + s), p.fadeTo(P.get("fadeOut") || 0, 0), d.stop().fadeTo(P.get("fadeOut") || 0, 0, function() {
            d.hide(),
            p.hide(),
            ot(h),
            x.remove(),
            setTimeout(function() {
                z = !1,
                ot(c),
                P.get("onClosed")
            }, 1)
        }))
    },
    X.remove = function() {
        if (!d)
            return;
        d.stop(),
        e.colorbox.close(),
        d.stop().remove(),
        p.remove(),
        z = !1,
        d = null,
        e("." + o).removeData(i).removeClass(o),
        e(t).unbind("click." + s)
    },
    X.element = function() {
        return e(P.el)
    },
    X.settings = r
}(jQuery, document, window),
define("lib-app/colorbox/jquery.colorbox", function() {}),
define("lib-build/css!lib-app/colorbox/colorbox", [], function() {}),
define("storymaps/tpl/ui/StoryText", ["dojo/topic", "esri/layers/GraphicsLayer", "esri/graphic", "esri/geometry/Point", "esri/geometry/ScreenPoint", "esri/geometry/Extent", "esri/symbols/PictureMarkerSymbol", "storymaps/tpl/core/Helper", "lib-app/colorbox/jquery.colorbox", "lib-build/css!lib-app/colorbox/colorbox"], function(e, t, n, r, i, s, o) {
    function a(e, t) {
        var n = e.replace(/(?!>)(&nbsp;)(?!<\/)/g, " ");
        return t ? (n = $('<div><div class="content">' + n + "</div></div>"), n.find(".content > *").each(function(e, t) {
            var n = $(t);
            n.html() != "&nbsp;" && n.attr("tabindex", "0")
        }), $(n.html()).html()) : n
    }
    function f(e) {
        var t = $(e);
        return t.find("iframe").each(function(e, t) {
            var n = $(t),
                r = n.attr("data-unload");
            n.attr("data-src", n.attr("src")).attr("data-unload", r === undefined || r == "true").removeAttr("src")
        }), t
    }
    function l(e) {
        e.find("iframe").each(function(e, t) {
            var n = $(t);
            n.attr("src") || n.attr("src", n.data("src"))
        })
    }
    function c() {
        h($("#sidePanel .sections"), $("#sidePanel .sections").width() - 40),
        h($("#floatingPanel .sections"), $("#floatingPanel .sections").width() - 34),
        h($("#mobileView .swiper-wrapper"), $("#mobileView").width() - 30)
    }
    function h(e, t) {
        e.find(".iframe-container.fit iframe").attr("height", t * 9 / 16)
    }
    function p() {
        $.each(app.data.getContentActions(), function(e, t) {
            var n = $("a[data-storymaps=" + t.id + "]"),
                r = !0;
            if (t.type == "navigate" && (t.index == -1 || t.hiddenSection)) {
                r = !1;
                var i = app.userCanEdit ? "navigate-error" : "navigate-error-silent";
                n.addClass(i);
                if (app.userCanEdit) {
                    var s = i18n.viewer.mainStage.errorDeleted;
                    t.hiddenSection && t.index != -1 && (s = i18n.viewer.mainStage.errorNotPublished),
                    n.tooltip({
                        trigger: "hover",
                        placement: "top",
                        container: "body",
                        title: s
                    })
                }
            }
            r && $("a[data-storymaps=" + t.id + "]").off("click").click(function() {
                g(t)
            })
        }),
        $("#mainStagePanel").find(".backLbl").html(i18n.viewer.mainStage.back)
    }
    function d(e) {
        var t = $(e.target),
            n = t.is("img") ? t : t.siblings("img"),
            r = t.parents(".section");
        if (!r.hasClass("active") && !r.hasClass("swiper-slide-active"))
            return;
        u = !0;
        var i = n.attr("src");
        $.colorbox({
            href: i,
            photo: !0,
            title: n.closest("figure").find("figcaption").html() || n.attr("title"),
            scalePhotos: !0,
            maxWidth: "90%",
            maxHeight: "90%"
        }),
        setTimeout(function() {
            u = !1
        }, 800)
    }
    function v() {
        $(".sections img").each(function(e, t) {
            var n = !!$(t).attr("width"),
                r = $(t).css("float") == "right";
            $(t).parent().css("position", "relative").addClass(n ? "has-width" : "no-width").addClass(r ? "float-right" : ""),
            $(t).wrap("<div class='image-wrapper'></div>").after($('<span class="btn-fullscreen"></span>').click(d)).click(d)
        }),
        $(document).unbind("cbox_complete", m).bind("cbox_complete", m)
    }
    function m() {
        $("#cboxLoadedContent img").click(function() {
            if (u)
                return;
            $.colorbox.close()
        })
    }
    function g(u) {
        var a = app.data.getCurrentSection() && app.data.getCurrentSection().media,
            f = a && a.type == "webmap",
            l = f ? app.map.extent : null,
            c = f ? a.webmap.id : null;
        $(".mediaBackContainer").hide();
        var h = app.map && app.map.getLayer("MJActionsLocate");
        h && app.map.removeLayer(h);
        if (u.type == "navigate")
            u.index !== undefined && e.publish("story-navigate-section", u.index);
        else if (u.type == "media") {
            var p = u.media.type == "webmap",
                d = c && p && c != u.media.webmap.id,
                v = !!p && !!u.media.webmap.extent,
                m = !!p && !!u.media.webmap.layers,
                g = !!p && !!u.media.webmap.popup;
            e.publish("story-perform-action-media", u.media),
            $(".backButton").off("click").click(function() {
                if (f && (!p || c != u.media.webmap.id))
                    e.publish("ADDEDIT_SHOW_WEBMAP", c);
                else if (f && p && c == u.media.webmap.id) {
                    var t = f ? !!a.webmap.extent : !1,
                        n = t ? new s(a.webmap.extent) : app.maps[c].response.map._params.extent;
                    app.map.setExtent(n || l).then(function() {
                        app.map.infoWindow.reposition()
                    }),
                    g && app.map.infoWindow.hide();
                    if (m) {
                        var r = app.maps[c].response.itemInfo.itemData.operationalLayers,
                            i = a.webmap.layers || [];
                        $.each(r, function(e, t) {
                            var n = t.layerObject || (t.featureCollection ? t.featureCollection.layers[0].layerObject : null),
                                r = $(i).filter(function(e, t) {
                                    return t.id == n.id
                                });
                            n.setVisibility(r.length ? r[0].visibility : t.visibility)
                        })
                    }
                } else
                    e.publish("story-perform-action-media", app.data.getCurrentSection().media);
                $(".mediaBackContainer").hide()
            });
            var y = !1;
            v && (f ? y = JSON.stringify(app.map.extent.toJson()) != JSON.stringify(u.media.webmap.extent) : y = !0),
            (d || !p || !f || y || m) && $(".mediaBackContainer").show().css("marginLeft", -$(".mediaBackContainer .backButton").outerWidth() / 2).css("marginRight", -$(".mediaBackContainer .backButton").outerWidth() / 2)
        } else if (u.type == "zoom") {
            var b = null;
            if (!f)
                return;
            u.zoom.mapMarker && (b = app.map.getLayer("MJActionsLocate"), b || (b = new t({
                id: "MJActionsLocate"
            }), app.map.addLayer(b)), b.add(new n(new r(u.zoom.center), new o(app.cfg.SECTION_ACTION_ZOOM_MAP_MARKER, 32, 32)))),
            app.map.centerAndZoom(u.zoom.center, app.map.getLevel() != u.zoom.level ? u.zoom.level : null).then(function() {
                if ($("body").hasClass("layout-float")) {
                    var e = app.map.toScreen(b.graphics[0].geometry),
                        t = null,
                        n = null;
                    $("body").hasClass("layout-float-right") ? (t = $("#floatingPanel").position().left, e.x >= t && (n = app.map.toMap(new i(app.map.width / 2 + e.x - t / 2, $("#floatingPanel").height() / 2)))) : $("body").hasClass("layout-float-left") && (t = $("#floatingPanel").position().left + $("#floatingPanel").width(), e.x <= t && (n = app.map.toMap(new i(app.map.width / 2 - e.x + t / 2, $("#floatingPanel").height() / 2)))),
                    n && app.map.centerAt(n)
                }
            }),
            $(".mediaBackContainer").show().css("marginLeft", -$(".mediaBackContainer .backButton").outerWidth() / 2).css("marginRight", -$(".mediaBackContainer .backButton").outerWidth() / 2),
            $(".backButton").off("click").click(function() {
                b && app.map.removeLayer(b);
                var e = f ? !!a.webmap.extent : !1,
                    t = e ? new s(a.webmap.extent) : app.maps[c].response.map._params.extent;
                app.map.setExtent(t || l),
                $(".mediaBackContainer").hide()
            })
        }
    }
    var u = !1;
    return {
        prepareEditorContent: a,
        createMainMediaActionLink: p,
        createMediaFullScreenButton: v,
        performAction: g,
        styleSectionPanelContent: c,
        prepareSectionPanelContent: f,
        loadSectionIframe: l
    }
}),
define("lib-build/tpl!storymaps/common/ui/share/ShareDialog", [], function() {
    return function(obj) {
        obj || (obj = {});
        var __t,
            __p = "",
            __e = _.escape;
        with (obj)
            __p += '<div class="modal-dialog">\n	<div class="modal-content">\n		<div class="modal-logo"></div>\n		<div class="modal-header">\n			<div class="modal-title"></div>\n		</div>\n\n		<div class="modal-body">\n			<div class="social-container">\n				<i class="shareIcon blackHover share_facebook icon-facebook-squared"></i>\n				<i class="shareIcon blackHover share_twitter icon-twitter"></i>\n			</div>\n\n			<div class="share-url-panel"></div>\n\n			<div class="embed-title"></div>\n			<div class="share-embed-panel"></div>\n\n			<div class="checkbox autoplay-container">\n				<label>\n					<input type="checkbox" class="autoplay-checkbox" value="autoplay" />\n					<span class="autoplay-label"></span>\n				</label>\n				<a href="#" class="help autoplay-help" data-toggle="tooltip">\n					<img src="resources/tpl/builder/icons/builder-help.png" style="vertical-align: -5px;"/>\n				</a>\n				<span class="autoplay-notification"></span>\n			</div>\n\n			<button class="btn btn-default btn-xs btn-print" target="_blank"><span class="glyphicon glyphicon-print" aria-hidden="true"></span> <span class="label-print">' + ((__t = print) == null ? "" : __t) + '</span></button>\n		</div>\n\n		<div class="modal-footer">\n			<button type="button" class="btn btnCancel btn-naked btn-close" data-dismiss="modal"></button>\n		</div>\n	</div>\n</div>\n';
        return __p
    }
}),
define("lib-build/css!storymaps/common/ui/share/ShareDialog", [], function() {}),
define("lib-build/tpl!storymaps/common/ui/share/ShareURLPanel", [], function() {
    return function(obj) {
        obj || (obj = {});
        var __t,
            __p = "",
            __e = _.escape;
        with (obj)
            __p += '<div class="share-url-container">\n	<span class="share-btn share-clipboard"></span>\n	<input type="text" class="form-control bitlylink" readonly="true"/>\n	<a class="btn btn-primary btn-bitlylink-open" target="_blank"></a>\n	<div class="share-status-wrapper"><span class="share-status"></span></div>\n</div>\n';
        return __p
    }
}),
define("lib-build/css!storymaps/common/ui/share/ShareURLPanel", [], function() {}),
function(e) {
    if (typeof exports == "object" && typeof module != "undefined")
        module.exports = e();
    else if (typeof define == "function" && define.amd)
        define("lib-app/clipboard/clipboard", [], e);
    else {
        var t;
        typeof window != "undefined" ? t = window : typeof global != "undefined" ? t = global : typeof self != "undefined" ? t = self : t = this,
        t.Clipboard = e()
    }
}(function() {
    var e,
        t,
        n;
    return function r(e, t, n) {
        function i(o, u) {
            if (!t[o]) {
                if (!e[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a)
                        return a(o, !0);
                    if (s)
                        return s(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f
                }
                var l = t[o] = {
                    exports: {}
                };
                e[o][0].call(l.exports, function(t) {
                    var n = e[o][1][t];
                    return i(n ? n : t)
                }, l, l.exports, r, e, t, n)
            }
            return t[o].exports
        }
        var s = typeof require == "function" && require;
        for (var o = 0; o < n.length; o++)
            i(n[o]);
        return i
    }({
        1: [function(e, t, n) {
            function i(e, t) {
                while (e && e !== document) {
                    if (e.matches(t))
                        return e;
                    e = e.parentNode
                }
            }
            if (Element && !Element.prototype.matches) {
                var r = Element.prototype;
                r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
            }
            t.exports = i
        }, {}],
        2: [function(e, t, n) {
            function i(e, t, n, r, i) {
                var o = s.apply(this, arguments);
                return e.addEventListener(n, o, i), {
                    destroy: function() {
                        e.removeEventListener(n, o, i)
                    }
                }
            }
            function s(e, t, n, i) {
                return function(n) {
                    n.delegateTarget = r(n.target, t),
                    n.delegateTarget && i.call(e, n)
                }
            }
            var r = e("./closest");
            t.exports = i
        }, {
            "./closest": 1
        }],
        3: [function(e, t, n) {
            n.node = function(e) {
                return e !== undefined && e instanceof HTMLElement && e.nodeType === 1
            },
            n.nodeList = function(e) {
                var t = Object.prototype.toString.call(e);
                return e !== undefined && (t === "[object NodeList]" || t === "[object HTMLCollection]") && "length" in e && (e.length === 0 || n.node(e[0]))
            },
            n.string = function(e) {
                return typeof e == "string" || e instanceof String
            },
            n.fn = function(e) {
                var t = Object.prototype.toString.call(e);
                return t === "[object Function]"
            }
        }, {}],
        4: [function(e, t, n) {
            function s(e, t, n) {
                if (!e && !t && !n)
                    throw new Error("Missing required arguments");
                if (!r.string(t))
                    throw new TypeError("Second argument must be a String");
                if (!r.fn(n))
                    throw new TypeError("Third argument must be a Function");
                if (r.node(e))
                    return o(e, t, n);
                if (r.nodeList(e))
                    return u(e, t, n);
                if (r.string(e))
                    return a(e, t, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }
            function o(e, t, n) {
                return e.addEventListener(t, n), {
                    destroy: function() {
                        e.removeEventListener(t, n)
                    }
                }
            }
            function u(e, t, n) {
                return Array.prototype.forEach.call(e, function(e) {
                    e.addEventListener(t, n)
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(e, function(e) {
                            e.removeEventListener(t, n)
                        })
                    }
                }
            }
            function a(e, t, n) {
                return i(document.body, e, t, n)
            }
            var r = e("./is"),
                i = e("delegate");
            t.exports = s
        }, {
            "./is": 3,
            delegate: 2
        }],
        5: [function(e, t, n) {
            function r(e) {
                var t;
                if (e.nodeName === "SELECT")
                    e.focus(),
                    t = e.value;
                else if (e.nodeName === "INPUT" || e.nodeName === "TEXTAREA")
                    e.focus(),
                    e.setSelectionRange(0, e.value.length),
                    t = e.value;
                else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var n = window.getSelection(),
                        r = document.createRange();
                    r.selectNodeContents(e),
                    n.removeAllRanges(),
                    n.addRange(r),
                    t = n.toString()
                }
                return t
            }
            t.exports = r
        }, {}],
        6: [function(e, t, n) {
            function r() {}
            r.prototype = {
                on: function(e, t, n) {
                    var r = this.e || (this.e = {});
                    return (r[e] || (r[e] = [])).push({
                        fn: t,
                        ctx: n
                    }), this
                },
                once: function(e, t, n) {
                    function i() {
                        r.off(e, i),
                        t.apply(n, arguments)
                    }
                    var r = this;
                    return i._ = t, this.on(e, i, n)
                },
                emit: function(e) {
                    var t = [].slice.call(arguments, 1),
                        n = ((this.e || (this.e = {}))[e] || []).slice(),
                        r = 0,
                        i = n.length;
                    for (r; r < i; r++)
                        n[r].fn.apply(n[r].ctx, t);
                    return this
                },
                off: function(e, t) {
                    var n = this.e || (this.e = {}),
                        r = n[e],
                        i = [];
                    if (r && t)
                        for (var s = 0, o = r.length; s < o; s++)
                            r[s].fn !== t && r[s].fn._ !== t && i.push(r[s]);
                    return i.length ? n[e] = i : delete n[e], this
                }
            },
            t.exports = r
        }, {}],
        7: [function(t, n, r) {
            (function(i, s) {
                if (typeof e == "function" && e.amd)
                    e(["module", "select"], s);
                else if (typeof r != "undefined")
                    s(n, t("select"));
                else {
                    var o = {
                        exports: {}
                    };
                    s(o, i.select),
                    i.clipboardAction = o.exports
                }
            })(this, function(e, t) {
                "use strict";
                function r(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }
                function s(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                var n = r(t),
                    i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    o = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1,
                                r.configurable = !0,
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    u = function() {
                        function e(t) {
                            s(this, e),
                            this.resolveOptions(t),
                            this.initSelection()
                        }
                        return o(e, [{
                            key: "resolveOptions",
                            value: function() {
                                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                                this.action = t.action,
                                this.emitter = t.emitter,
                                this.target = t.target,
                                this.text = t.text,
                                this.trigger = t.trigger,
                                this.selectedText = ""
                            }
                        }, {
                            key: "initSelection",
                            value: function() {
                                this.text ? this.selectFake() : this.target && this.selectTarget()
                            }
                        }, {
                            key: "selectFake",
                            value: function() {
                                var t = this,
                                    r = document.documentElement.getAttribute("dir") == "rtl";
                                this.removeFake(),
                                this.fakeHandlerCallback = function() {
                                    return t.removeFake()
                                },
                                this.fakeHandler = document.body.addEventListener("click", this.fakeHandlerCallback) || !0,
                                this.fakeElem = document.createElement("textarea"),
                                this.fakeElem.style.fontSize = "12pt",
                                this.fakeElem.style.border = "0",
                                this.fakeElem.style.padding = "0",
                                this.fakeElem.style.margin = "0",
                                this.fakeElem.style.position = "absolute",
                                this.fakeElem.style[r ? "right" : "left"] = "-9999px";
                                var i = window.pageYOffset || document.documentElement.scrollTop;
                                this.fakeElem.addEventListener("focus", window.scrollTo(0, i)),
                                this.fakeElem.style.top = i + "px",
                                this.fakeElem.setAttribute("readonly", ""),
                                this.fakeElem.value = this.text,
                                document.body.appendChild(this.fakeElem),
                                this.selectedText = (0, n.default)(this.fakeElem),
                                this.copyText()
                            }
                        }, {
                            key: "removeFake",
                            value: function() {
                                this.fakeHandler && (document.body.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null),
                                this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                            }
                        }, {
                            key: "selectTarget",
                            value: function() {
                                this.selectedText = (0, n.default)(this.target),
                                this.copyText()
                            }
                        }, {
                            key: "copyText",
                            value: function() {
                                var t = void 0;
                                try {
                                    t = document.execCommand(this.action)
                                } catch (n) {
                                    t = !1
                                }
                                this.handleResult(t)
                            }
                        }, {
                            key: "handleResult",
                            value: function(t) {
                                this.emitter.emit(t ? "success" : "error", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }
                        }, {
                            key: "clearSelection",
                            value: function() {
                                this.target && this.target.blur(),
                                window.getSelection().removeAllRanges()
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.removeFake()
                            }
                        }, {
                            key: "action",
                            set: function() {
                                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "copy";
                                this._action = t;
                                if (this._action !== "copy" && this._action !== "cut")
                                    throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function() {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function(t) {
                                if (t !== undefined) {
                                    if (!t || (typeof t == "undefined" ? "undefined" : i(t)) !== "object" || t.nodeType !== 1)
                                        throw new Error('Invalid "target" value, use a valid Element');
                                    if (this.action === "copy" && t.hasAttribute("disabled"))
                                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if (this.action === "cut" && (t.hasAttribute("readonly") || t.hasAttribute("disabled")))
                                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = t
                                }
                            },
                            get: function() {
                                return this._target
                            }
                        }]), e
                    }();
                e.exports = u
            })
        }, {
            select: 5
        }],
        8: [function(t, n, r) {
            (function(i, s) {
                if (typeof e == "function" && e.amd)
                    e(["module", "./clipboard-action", "tiny-emitter", "good-listener"], s);
                else if (typeof r != "undefined")
                    s(n, t("./clipboard-action"), t("tiny-emitter"), t("good-listener"));
                else {
                    var o = {
                        exports: {}
                    };
                    s(o, i.clipboardAction, i.tinyEmitter, i.goodListener),
                    i.clipboard = o.exports
                }
            })(this, function(e, t, n, r) {
                "use strict";
                function u(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }
                function a(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                function l(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || typeof t != "object" && typeof t != "function" ? e : t
                }
                function c(e, t) {
                    if (typeof t != "function" && t !== null)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }
                function p(e, t) {
                    var n = "data-clipboard-" + e;
                    if (!t.hasAttribute(n))
                        return;
                    return t.getAttribute(n)
                }
                var i = u(t),
                    s = u(n),
                    o = u(r),
                    f = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1,
                                r.configurable = !0,
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function(t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    h = function(e) {
                        function t(e, n) {
                            a(this, t);
                            var r = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return r.resolveOptions(n), r.listenClick(e), r
                        }
                        return c(t, e), f(t, [{
                            key: "resolveOptions",
                            value: function() {
                                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                                this.action = typeof t.action == "function" ? t.action : this.defaultAction,
                                this.target = typeof t.target == "function" ? t.target : this.defaultTarget,
                                this.text = typeof t.text == "function" ? t.text : this.defaultText
                            }
                        }, {
                            key: "listenClick",
                            value: function(t) {
                                var n = this;
                                this.listener = (0, o.default)(t, "click", function(e) {
                                    return n.onClick(e)
                                })
                            }
                        }, {
                            key: "onClick",
                            value: function(t) {
                                var n = t.delegateTarget || t.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null),
                                this.clipboardAction = new i.default({
                                    action: this.action(n),
                                    target: this.target(n),
                                    text: this.text(n),
                                    trigger: n,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction",
                            value: function(t) {
                                return p("action", t)
                            }
                        }, {
                            key: "defaultTarget",
                            value: function(t) {
                                var n = p("target", t);
                                if (n)
                                    return document.querySelector(n)
                            }
                        }, {
                            key: "defaultText",
                            value: function(t) {
                                return p("text", t)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.listener.destroy(),
                                this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }
                        }]), t
                    }(s.default);
                e.exports = h
            })
        }, {
            "./clipboard-action": 7,
            "good-listener": 4,
            "tiny-emitter": 6
        }]
    }, {}, [8])(8)
}),
define("lib-build/css!storymaps/common/_resources/font/builder-share/css/share-font", [], function() {}),
define("storymaps/common/ui/share/ShareURLPanel", ["lib-build/tpl!./ShareURLPanel", "lib-build/css!./ShareURLPanel", "../../utils/SocialSharing", "dojo/has", "lib-app/clipboard/clipboard", "lib-build/css!storymaps/common/_resources/font/builder-share/css/share-font.css"], function(e, t, n, r, i) {
    return function(r) {
        function u(e, t) {
            s.val(e),
            r.find(".btn-bitlylink-open").attr("href", e),
            n.requestBitly(e).then(function(e) {
                s.val(e),
                (t === undefined || t === !0) && s.select()
            });
            var o = new i(r.find(".share-btn").get(0), {
                text: function() {
                    return r.find(".bitlylink").val()
                }
            });
            o.on("success", function() {
                r.find(".share-btn").removeClass("share-clipboard").addClass("share-ok"),
                r.find(".share-status").show(),
                r.find(".bitlylink")[0].selectionStart = r.find(".bitlylink")[0].selectionEnd = -1,
                r.find(".bitlylink").focus(),
                setTimeout(function() {
                    r.find(".share-btn").addClass("share-clipboard").removeClass("share-ok"),
                    r.find(".share-status").hide()
                }, 2e3)
            })
        }
        function a() {
            r.find(".bitlylink").click(function() {
                this.setSelectionRange(0, this.value.length)
            })
        }
        r.append(e({}));
        var s = r.find(".bitlylink"),
            o = null;
        a(),
        this.present = function(e, t) {
            var i = document.queryCommandSupported("copy");
            o = n.cleanURL(e, !0),
            u(o, t),
            r.find(".btn-bitlylink-open").html(i18n.viewer.shareFromCommon.open),
            r.find(".share-url-container").toggleClass("touch", !i),
            r.find(".share-btn").attr("title", i18n.viewer.shareFromCommon.copy),
            r.find(".share-status").html(i18n.viewer.shareFromCommon.copied)
        },
        this.focus = function() {
            s.select()
        },
        this.setAutoplay = function(e) {
            var t = o;
            e && (t += t.match(/\?/) ? "&" : "?", t += "autoplay"),
            u(t)
        }
    }
}),
define("lib-build/tpl!storymaps/common/ui/share/ShareEmbedPanel", [], function() {
    return function(obj) {
        obj || (obj = {});
        var __t,
            __p = "",
            __e = _.escape;
        with (obj)
            __p += '<div class="share-embed-container">\n	<div class="embed-explain"></div>\n\n	<div class="share-embed-wrapper">\n		<div class="share-btn share-clipboard"></div>\n		<textarea class="form-control embedTextarea" readonly="true"></textarea>\n	</div>\n	<div class="share-status-wrapper"><span class="share-status"></span></div>\n\n	<div>\n		<span class="embed-lbl-size"></span>\n		<div class="btn-group">\n			<button class="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown">\n				<span class="embed-sizes-btn"></span>&nbsp;<span class="caret"></span>\n			</button>\n			<ul class="dropdown-menu embed-sizes" role="menu"></ul>\n		</div>\n	</div>\n</div>\n';
        return __p
    }
}),
define("lib-build/css!storymaps/common/ui/share/ShareEmbedPanel", [], function() {}),
define("storymaps/common/ui/share/ShareEmbedPanel", ["lib-build/tpl!./ShareEmbedPanel", "lib-build/css!./ShareEmbedPanel", "dojo/has", "lib-app/clipboard/clipboard", "lib-build/css!storymaps/common/_resources/font/builder-share/css/share-font.css"], function(e, t, n, r) {
    return function(n) {
        function a() {
            $.each(s, function(e, t) {
                n.find(".embed-sizes").append('<li><a data-width="' + t.width + '" data-height="' + t.height + '">' + t.width + " / " + t.height + "</a></li>")
            }),
            n.find(".embed-sizes a").click(function() {
                var e = $(this);
                e.parents(".btn-group").find(".embed-sizes-btn").text(e.text()),
                f(e.data("width"), e.data("height"))
            })
        }
        function f(e, t) {
            n.find(".embedTextarea").val(i.replace("%URL%", o).replace("%WIDTH%", e).replace("%HEIGHT%", t));
            var s = new r(n.find(".share-btn").get(0), {
                text: function() {
                    return n.find(".embedTextarea").val()
                }
            });
            s.on("success", function() {
                n.find(".share-btn").removeClass("share-clipboard").addClass("share-ok"),
                n.find(".share-status").show(),
                n.find(".embedTextarea")[0].selectionStart = n.find(".embedTextarea")[0].selectionEnd = -1,
                n.find(".bitlylink").focus(),
                setTimeout(function() {
                    n.find(".share-btn").addClass("share-clipboard").removeClass("share-ok"),
                    n.find(".share-status").hide()
                }, 2e3)
            })
        }
        function l() {
            n.find(".embedTextarea").click(function() {
                this.setSelectionRange(0, this.value.length)
            })
        }
        var i = '<iframe width="%WIDTH%" height="%HEIGHT%" src="%URL%" frameborder="0" scrolling="no"></iframe>',
            s = [{
                width: "100%",
                height: "800px"
            }, {
                width: "100%",
                height: "640px"
            }, {
                width: "800px",
                height: "600px"
            }, {
                width: "640px",
                height: "480px"
            }],
            o = null,
            u = null;
        n.append(e({})),
        a(),
        l(),
        this.present = function(e) {
            var t = document.queryCommandSupported("copy");
            u = e,
            o = e,
            n.find(".embed-explain").html(i18n.viewer.shareFromCommon.embedExplain),
            n.find(".embed-lbl-size").html(i18n.viewer.shareFromCommon.size),
            n.find(".embed-sizes a").eq(0).click(),
            n.find(".share-embed-wrapper").toggleClass("touch", !t),
            n.find(".share-clipboard").attr("title", i18n.viewer.shareFromCommon.copy),
            n.find(".share-status").html(i18n.viewer.shareFromCommon.copied)
        },
        this.setAutoplay = function(e) {
            var t = u;
            e && (t += t.match(/\?/) ? "&" : "?", t += "autoplay"),
            o = t,
            n.find(".embed-sizes a").eq(0).click()
        }
    }
}),
define("storymaps/common/ui/share/ShareDialog", ["lib-build/tpl!./ShareDialog", "lib-build/css!./ShareDialog", "./ShareURLPanel", "./ShareEmbedPanel", "../../utils/SocialSharing", "../../utils/CommonHelper"], function(e, t, n, r, i, s) {
    return function(o) {
        function f(e) {
            var t = $("<div>" + app.data.getWebAppData().getTitle() + "</div>").text();
            o.find(".share_facebook").toggle(e.facebook),
            e.facebook && o.find(".share_facebook").off("click").click(function() {
                i.shareFacebook("", "", null, $(this).data("url"))
            }),
            o.find(".share_twitter").toggle(e.twitter),
            e.twitter && o.find(".share_twitter").off("click").click(function() {
                i.shareTwitter(t, $(this).data("url"))
            })
        }
        o.append(e({}));
        var u = new n(o.find(".share-url-panel")),
            a = new r(o.find(".share-embed-panel"));
        o.on("shown.bs.modal", function() {
            u.focus()
        }),
        o.find(".autoplay-checkbox").change(function() {
            u.setAutoplay(!!this.checked),
            a.setAutoplay(!!this.checked),
            o.find(".autoplay-notification").html(i18n.viewer.shareFromCommon.linksupdated).fadeIn(),
            setTimeout(function() {
                o.find(".autoplay-notification").fadeOut()
            }, 1e3)
        }),
        o.find(".btn-print").click(function() {
            var e = window.open("resources/tpl/viewer/print/print.html?appid=" + s.getAppID(), "_blank");
            e.storyURL = o.find(".bitlylink").val()
        }),
        this.present = function(e, t) {
            t = t || {
                facebook: !1,
                twitter: !1
            },
            o.find(".social-container").toggle(t.facebook || t.twitter),
            f(t),
            u.present(e),
            a.present(e),
            o.find(".modal-title").html(i18n.viewer.headerFromCommon.share),
            o.find(".embed-title").html(i18n.viewer.shareFromCommon.embed),
            o.find(".btn-close").html(i18n.viewer.common.close),
            o.find(".autoplay-label").html(i18n.viewer.shareFromCommon.autoplayLabel),
            o.find(".autoplay-help").tooltip({
                title: i18n.viewer.shareFromCommon.autoplayExplain1 + "<br /><br />" + i18n.viewer.shareFromCommon.autoplayExplain2,
                html: !0
            }),
            o.find(".autoplay-checkbox").prop("checked", !1),
            o.find(".label-print").html(i18n.viewer.shareFromCommon.print),
            o.modal({
                keyboard: !0
            })
        }
    }
}),
define("storymaps/common/utils/HeaderHelper", ["./SocialSharing", "../ui/share/ShareDialog", "storymaps/tpl/core/Helper"], function(e, t, n) {
    function i(e) {
        var t = e.find(".linkContainer"),
            n = t.parent();
        if (n.length) {
            var r;
            $("body").hasClass("layout-float-right") ? r = e.width() * .09 : $("body").hasClass("layout-float-left") ? r = 34 + e.width() * .02 : r = 35,
            n.css("left", Math.round(r)),
            t.css({
                width: (e.find(".logoContainer").position() || {
                    left: 186
                }).left - r - e.find(".shareBtns").outerWidth() - ($(".logoContainer").width() > 1 ? 14 : 4)
            })
        }
    }
    var r = new t($("#shareDialog"));
    return {
        setLogo: function(e, t) {
            if (!t.logoURL || t.logoURL == "NO_LOGO")
                e.find(".logoImg").hide(),
                i(e);
            else {
                var r = e.find(".logoLink");
                t.logoTarget ? r.css("cursor", "pointer").attr("href", t.logoTarget) : r.css("cursor", "default").removeAttr("href"),
                i(e);
                var s = e.find(".logoImg");
                s[0].onload = function() {
                    i(e)
                },
                s[0].onerror = function() {
                    i(e)
                },
                s.attr("src", n.possiblyAddToken(t.logoURL)).show()
            }
        },
        setLink: function(e, t) {
            t.linkURL && t.linkText ? e.find(".linkContainer").html('<a href="' + t.linkURL + '" class="link" target="_blank" tabindex="-1">' + t.linkText + "</a>") : e.find(".linkContainer").html(t.linkText)
        },
        setSocial: function(e, t) {
            var n = t.socialBtn;
            e.find(".share_facebook").toggleClass("active", app.cfg.HEADER_SOCIAL && app.cfg.HEADER_SOCIAL.facebook && (!n || n.facebook)),
            e.find(".share_twitter").toggleClass("active", app.cfg.HEADER_SOCIAL && app.cfg.HEADER_SOCIAL.twitter && (!n || n.twitter)),
            e.find(".share_bitly").toggleClass("active", app.cfg.HEADER_SOCIAL && app.cfg.HEADER_SOCIAL.bitly && app.cfg.HEADER_SOCIAL.bitly.enable && app.cfg.HEADER_SOCIAL.bitly.login && app.cfg.HEADER_SOCIAL.bitly.key && (!n || n.bitly))
        },
        toggleSocialBtnAppSharing: function(e, t) {
            t && e.find(".shareIcon").attr("title", ""),
            e.find(".shareIcon").toggleClass("disabled", !!t).tooltip(t ? {
                title: i18n.commonCore ? i18n.commonCore.builderPanel.tooltipNotShared : "",
                container: "body"
            } : "destroy")
        },
        disableSocialBtnAppSharingAutoplay: function(e, t) {
            e.find(".shareIcon").attr("title", ""),
            e.find(".shareIcon").toggleClass("disabled", !0).tooltip({
                title: i18n.viewer.headerFromCommon.tooltipAutoplayDisabled,
                container: "body",
                placement: t ? t : "bottom"
            })
        },
        initEvents: function(t) {
            t.find(".share_facebook").off("click").click(function() {
                if ($(this).hasClass("disabled"))
                    return;
                var t = $("<div>" + app.data.getWebAppData().getTitle() + "</div>").text(),
                    n = $("<div>" + app.data.getWebAppData().getSubtitle() + "</div>").text();
                e.shareFacebook(t, n, null, $(this).data("url"))
            }),
            t.find(".share_twitter").off("click").click(function() {
                if ($(this).hasClass("disabled"))
                    return;
                var t = $("<div>" + app.data.getWebAppData().getTitle() + "</div>").text();
                e.shareTwitter(t, $(this).data("url"))
            }),
            t.find(".share_bitly").off("click").click(function() {
                if ($(this).hasClass("disabled"))
                    return;
                var t = $(this).data("url") || document.location.href;
                r.present(e.cleanURL(t, !0))
            }),
            t.find(".shareIcon, .share-all").off("keypress").keypress(function(e) {
                if ($(this).hasClass("disabled"))
                    return;
                if (e.which == 13)
                    return $(this).click(), !1
            }),
            t.find(".share_facebook").attr("title", i18n.viewer.headerFromCommon.facebookTooltip),
            t.find(".share_twitter").attr("title", i18n.viewer.headerFromCommon.twitterTooltip),
            t.find(".share_bitly").attr("title", i18n.viewer.headerFromCommon.bitlyTooltip),
            $(window).resize(function() {
                i(t)
            })
        }
    }
}),
define("storymaps/tpl/ui/desktop/SidePanel", ["lib-build/tpl!./SidePanelSection", "lib-build/css!./SidePanel", "lib-build/css!storymaps/common/builder/InlineFieldEdit", "./DotNavBar", "../StoryText", "storymaps/common/utils/HeaderHelper", "storymaps/common/utils/CommonHelper", "storymaps/common/utils/SocialSharing", "dojo/topic", "dojo/has"], function(e, t, n, r, i, s, o, u, a, f) {
    var l = !0;
    return function(n, c, h) {
        function g(e) {
            n.toggleClass("section-social-links", e.socialLinks),
            n.css("width", e.layoutCfg.sizeVal),
            $("body").removeClass("layout-side-left layout-side-right").addClass(e.layoutCfg.position == "left" ? "layout-side-left" : "layout-side-right")
        }
        function y(e, t) {
            var r = "";
            $.each(e, function(e, t) {
                r += b(e, t.status, t.content, t.title, t.OBJECTID)
            }),
            n.find(".appTitle").html(e.length ? e[0].title : ""),
            n.find(".sections").html(i.prepareSectionPanelContent(r)),
            n.find(".section").click(S).eq(t).addClass("active"),
            n.find(".panelEditBtn").toggle(!!(c && e && e.length)),
            n.show(),
            setTimeout(function() {
                window.self === window.top && n.find(".sections").focus(),
                T()
            }, 0);
            var s = n.find(".title");
            s.focus(function() {
                $(this).data("mouseDown") || $(this).click()
            }).mousedown(function() {
                $(this).data("mouseDown", !0)
            }).mouseup(function() {
                $(this).removeData("mouseDown")
            });
            var o = s.last();
            o.siblings(".content").find("[tabindex=0]").length && (o = o.siblings(".content").find("[tabindex=0]").last())
        }
        function b(t, n, r, s) {
            var o = "";
            n != "PUBLISHED" && (o = "hidden-section");
            var a = u.cleanURL(document.location.href, !0);
            return a += a.match(/\?/) ? "&" : "?", a += "section=" + (t + 1), e({
                optHtmlClass: o,
                title: i.prepareEditorContent(s),
                content: i.prepareEditorContent(r, !0),
                lblShare: i18n.viewer.headerFromCommon.share,
                shareURL: a
            })
        }
        function w(e) {
            if (n.find(".sections")[0].scrollHeight <= n.outerHeight() - n.find(".header").outerHeight() + 1)
                return;
            n.find(".scroll").show(),
            n.find(".scrollInner").tooltip({
                title: i18n.viewer.sideLayout.scroll,
                trigger: "hover"
            }),
            o.addCSSRule(".scroll .tooltip-inner { background-color: " + e.text + "; color: " + e.panel + "; }"),
            o.addCSSRule(".scroll .tooltip-arrow { border-top-color: " + e.text + " !important; }"),
            n.find(".scroll").click(function() {
                n.find(".scroll .tooltip").remove(),
                k(),
                n.find(".sections").scrollTop(400)
            }).on("mousewheel", function() {
                n.find(".scroll .tooltip").remove(),
                n.find(".sections").scrollTop(100)
            })
        }
        function E(e) {
            if (!m)
                return;
            p.showSectionNumber(e, !0, !1),
            h(e)
        }
        function S() {
            var e = $(this).index();
            if (d == e)
                return;
            p.showSectionNumber(e),
            h(e)
        }
        function x() {
            if (!m)
                return;
            var e = n.find(".sections"),
                t = e.eq(0)[0].scrollTop,
                r = e.height(),
                i = -1;
            C(),
            k();
            if (t === 0)
                i = 0;
            else {
                var s = -1,
                    o = -1;
                n.find(".section").each(function() {
                    var e = $(this).position().top;
                    e < r / 2.5 && (s = $(this).index()),
                    o = e
                }),
                Math.round(o + n.find(".section").last().outerHeight()) == r ? i = n.find(".section").length - 1 : s == -1 && o > 0 ? i = 0 : s == -1 ? i = n.find(".section").length - 1 : i = s
            }
            i != d ? (p.showSectionNumber(i, !1, !0), h(i)) : (T(), c && N())
        }
        function T() {
            var e = n.find(".sections"),
                t = e.height(),
                r = n.find(".section").length,
                s = [],
                o = null,
                u = null,
                a = !1;
            o = d;
            while (o > 0) {
                u = n.find(".section").eq(--o),
                a = u.position().top + u.outerHeight() > 8;
                if (!a)
                    break;
                s.push(o)
            }
            o = d;
            while (o < r - 1) {
                u = n.find(".section").eq(++o),
                a = u.position().top < t;
                if (!a)
                    break;
                s.push(o)
            }
            s.sort(),
            $.each(s, function(e, t) {
                i.loadSectionIframe(n.find(".section").eq(t))
            })
        }
        function N(e) {
            var t = n.find(".section").eq(e !== undefined ? e : d).position().top;
            n.find(".panelEditBtn").css("top", t < 6 ? 6 : t)
        }
        function C() {
            var e = n.find(".sections"),
                t = e.eq(0)[0].scrollTop,
                r = n.find(".title:eq(0)").height(),
                i = t >= r,
                s = n.find(".appTitle").hasClass("anchored");
            i != s && (n.find(".appTitle").toggleClass("anchored", i), n.find(".header").toggleClass("titleanchored", i), setTimeout(function() {
                p.resize({
                    height: n.height()
                })
            }, 300))
        }
        function k() {
            n.find(".scroll").slideUp()
        }
        function L(e) {
            v.update({
                bgColor: e.dotNav,
                tooltipBgColor: e.text,
                tooltipFontColor: e.panel
            }),
            n.css("background-color", e.panel),
            n.find(".scroll").css({
                background: "linear-gradient(transparent, " + e.panel + ")"
            }),
            n.find(".sections").css("color", e.text),
            n.find(".panelEditBtn").css("background-color", e.panel),
            n.find(".appTitle").css("color", e.text)
        }
        function A(e) {
            s.setLogo(n, e),
            s.setLink(n, e),
            s.setSocial(n, e),
            s.initEvents(n, "bottom")
        }
        function O() {
            app.builder.openEditPopup({
                sectionIndex: d,
                displayTab: "content"
            })
        }
        function M() {
            n.find(".sections").scroll(x),
            c && n.find(".panelEditBtn").off("click").click(O)
        }
        function _() {
            return n.find(".check-story").hide(), !n.find(".check-story").is(":visible") && !n.find(".share-story").is(":visible") && n.find(".error-status").removeClass("enabled"), !1
        }
        function D() {
            return n.find(".share-story").hide(), !n.find(".check-story").is(":visible") && !n.find(".share-story").is(":visible") && n.find(".error-status").removeClass("enabled"), !1
        }
        function P(e) {
            var t = n.find(".check-story"),
                r = $('<span aria-hidden="true" class="check-story-close">×</span>'),
                i = $('<span aria-hidden="true" class="check-story-close">×</span>');
            t.off("click").removeClass("forceEvent").show(),
            r.click(_),
            i.click(D),
            e == "start" ? t.html('<span class="small-loader"></span>' + i18n.viewer.headerFromCommon.checking).append(r).css("cursor", "default") : e == "error" ? t.html(i18n.viewer.headerFromCommon.fix).append(r).css("cursor", "pointer").click(o.switchToBuilder).removeClass("btn-warning").addClass("btn-danger") : t.html(i18n.viewer.headerFromCommon.noerrors).append(r).removeClass("btn-warning").addClass("btn-success"),
            (f("ff") || f("ie") || f("trident") == 7) && e != "error" && t.click(_).addClass("forceEvent");
            var s = n.find(".share-story").html(i18n.viewer.headerFromCommon.notshared).append(i).toggle(app.data.getWebAppItem().access == "private" || app.data.getWebAppItem().access == "shared"),
                u = s.css("background-color"),
                a = app.data.getWebAppData().getTheme().colors;
            u && a && a.panel && o.colorsAreSimilar(u, a.panel) && s.css("box-shadow", "0 0 2px 1px white")
        }
        var p = this,
            d = 0,
            v = new r(n.find(".navDots"), E),
            m = !1;
        this.init = function(e, t, r, i, s) {
            d = 0,
            g(r),
            L(s),
            A(i),
            y(e, t),
            M(),
            v.init({
                sections: e,
                sectionIndex: t,
                bgColor: s.dotNav,
                tooltipBgColor: s.text,
                tooltipFontColor: s.panel,
                dotColor: s.softBtn,
                tooltipPosition: r.layoutCfg.position == "left" ? "right" : "left"
            }),
            n.find(".sections .shareIcon").toggleClass("active", r.socialLinks),
            c || (setTimeout(function() {
                w(s)
            }, 0), e.length == 1 && (n.find(".navDots").hide(), n.find("#sidePanelInner, .scroll").css({
                paddingLeft: 0,
                paddingRight: 0
            }))),
            setTimeout(function() {
                n.find(".sections")[0].scrollTop = 0
            }, 0),
            l && (m = !0),
            l = !1,
            setTimeout(function() {
                n.find(".sectionsWrapper").addClass("ie11fix"),
                setTimeout(function() {
                    n.find(".sectionsWrapper").removeClass("ie11fix")
                }, 0)
            }, 0),
            !app.isInBuilder && app.userCanEdit && f("ie") != 9 && !o.getUrlParams().preview && (n.find(".error-status").addClass("enabled"), a.subscribe("MYSTORIES_SCAN", P), P("start"))
        },
        this.update = function(e, t, n) {
            g(e),
            L(n),
            A(t),
            v.updateTooltipPlacement(e.layoutCfg.position == "left" ? "right" : "left")
        },
        this.resize = function(e) {
            $("#sidePanel .sections").height(e.height - $("#sidePanel .sectionsWrapper").position().top - $(".builder-content-panel:visible").outerHeight()),
            C()
        },
        this.showSectionNumber = function(e, t, r) {
            if (!n.is(":visible") || !m)
                return;
            if (d != e) {
                var s = n.find(".section.active .content iframe[data-unload=true]");
                s.length && setTimeout(function() {
                    s.each(function(e, t) {
                        var n = $(t);
                        n.attr("src", "")
                    })
                }, 150)
            }
            i.loadSectionIframe(n.find(".section").eq(e));
            if (d != e || t) {
                m = !1,
                n.find(".section").removeClass("active").eq(e).addClass("active"),
                v.setActive(e);
                if (!r) {
                    if (!n.find(".sections").length || !n.find(".section").length) {
                        m = !0;
                        return
                    }
                    var o = n.find(".sections").eq(0)[0].scrollTop,
                        u = n.find(".sections")[0].scrollHeight,
                        a = n.find(".sections").height(),
                        f = n.find(".section").eq(e).position().top,
                        l = f <= 0 || o + a < u;
                    setTimeout(function() {
                        n.find(".sections").animate({
                            scrollTop: o + f
                        }, {
                            duration: l ? 500 : 0,
                            complete: function() {
                                C(!0),
                                k(),
                                c && N(e),
                                setTimeout(function() {
                                    m = !0,
                                    d = e
                                }, 100),
                                T()
                            },
                            progress: function() {
                                C(),
                                k()
                            }
                        })
                    }, 0)
                } else
                    d = e,
                    m = !0,
                    c && N()
            }
        },
        this.getSectionNumber = function() {
            return d
        },
        this.destroy = function() {
            n.hide()
        },
        this.toggleSwitchBuilderButton = function(e) {
            var t = n.find(".switchBuilder").html('<span class="glyphicon glyphicon-cog"></span>' + i18n.viewer.headerFromCommon.builderButton + '<span aria-hidden="true" class="switch-builder-close">×</span>').off("click").click(o.switchToBuilder).toggle(e),
                r = t.css("background-color"),
                i = app.data.getWebAppData().getTheme().colors;
            r && i && i.panel && o.colorsAreSimilar(r, i.panel) && t.css("box-shadow", "0 0 2px 1px white"),
            f("ff") || f("ie") || f("trident") == 7 ? t.find(".switch-builder-close").hide() : t.find(".switch-builder-close").click(function() {
                return t.hide(), $(window).resize(), !1
            })
        },
        this.enableAutoplay = function() {
            s.disableSocialBtnAppSharingAutoplay(n)
        },
        this.toggleSocialBtnAppSharing = function(e) {
            s.toggleSocialBtnAppSharing(n, e)
        }
    }
}),
define("lib-build/tpl!storymaps/tpl/ui/desktop/FloatingPanelSection", [], function() {
    return function(obj) {
        obj || (obj = {});
        var __t,
            __p = "",
            __e = _.escape;
        with (obj)
            __p += '<div class="section swiper-slide ' + ((__t = optHtmlClass) == null ? "" : __t) + '">\n	<div class="section-inner">\n		<div class="title" tabindex="0">' + ((__t = title) == null ? "" : __t) + '</div>\n		<div class="content">' + ((__t = content) == null ? "" : __t) + '</div>\n		<div class="social">\n			<span class="shareIcon share_facebook icon-facebook-squared" data-url="' + ((__t = shareURL) == null ? "" : __t) + '"> Facebook</span>\n			<span class="shareIcon share_twitter icon-twitter" data-url="' + ((__t = shareURL) == null ? "" : __t) + '"> Twitter</span>\n			<span class="shareIcon share_bitly icon-link" data-url="' + ((__t = shareURL) == null ? "" : __t) + '"> ' + ((__t = lblShare) == null ? "" : __t) + "</span>\n		</div>\n	</div>\n</div>\n";
        return __p
    }
}),
define("lib-build/css!storymaps/tpl/ui/desktop/FloatingPanel", [], function() {}),
define("lib-build/css!storymaps/tpl/ui/desktop/Common", [], function() {}),
function(e, t) {
    "use strict";
    function n() {
        if (!r.READY) {
            r.event.determineEventTypes();
            for (var e in r.gestures)
                r.gestures.hasOwnProperty(e) && r.detection.register(r.gestures[e]);
            r.event.onTouch(r.DOCUMENT, r.EVENT_MOVE, r.detection.detect),
            r.event.onTouch(r.DOCUMENT, r.EVENT_END, r.detection.detect),
            r.READY = !0
        }
    }
    var r = function(e, t) {
        return new r.Instance(e, t || {})
    };
    r.defaults = {
        stop_browser_behavior: {
            userSelect: "none",
            touchAction: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    },
    r.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled,
    r.HAS_TOUCHEVENTS = "ontouchstart" in e,
    r.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i,
    r.NO_MOUSEEVENTS = r.HAS_TOUCHEVENTS && navigator.userAgent.match(r.MOBILE_REGEX),
    r.EVENT_TYPES = {},
    r.DIRECTION_DOWN = "down",
    r.DIRECTION_LEFT = "left",
    r.DIRECTION_UP = "up",
    r.DIRECTION_RIGHT = "right",
    r.POINTER_MOUSE = "mouse",
    r.POINTER_TOUCH = "touch",
    r.POINTER_PEN = "pen",
    r.EVENT_START = "start",
    r.EVENT_MOVE = "move",
    r.EVENT_END = "end",
    r.DOCUMENT = document,
    r.plugins = {},
    r.READY = !1,
    r.Instance = function(e, t) {
        var i = this;
        return n(), this.element = e, this.enabled = !0, this.options = r.utils.extend(r.utils.extend({}, r.defaults), t || {}), this.options.stop_browser_behavior && r.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), r.event.onTouch(e, r.EVENT_START, function(e) {
            i.enabled && r.detection.startDetect(i, e)
        }), this
    },
    r.Instance.prototype = {
        on: function(e, t) {
            for (var n = e.split(" "), r = 0; n.length > r; r++)
                this.element.addEventListener(n[r], t, !1);
            return this
        },
        off: function(e, t) {
            for (var n = e.split(" "), r = 0; n.length > r; r++)
                this.element.removeEventListener(n[r], t, !1);
            return this
        },
        trigger: function(e, t) {
            var n = r.DOCUMENT.createEvent("Event");
            n.initEvent(e, !0, !0),
            n.gesture = t;
            var i = this.element;
            return r.utils.hasParent(t.target, i) && (i = t.target), i.dispatchEvent(n), this
        },
        enable: function(e) {
            return this.enabled = e, this
        }
    };
    var i = null,
        s = !1,
        o = !1;
    r.event = {
        bindDom: function(e, t, n) {
            for (var r = t.split(" "), i = 0; r.length > i; i++)
                e.addEventListener(r[i], n, !1)
        },
        onTouch: function(e, t, n) {
            var u = this;
            this.bindDom(e, r.EVENT_TYPES[t], function(f) {
                var l = f.type.toLowerCase();
                if (!l.match(/mouse/) || !o) {
                    (l.match(/touch/) || l.match(/pointerdown/) || l.match(/mouse/) && 1 === f.which) && (s = !0),
                    l.match(/touch|pointer/) && (o = !0);
                    var c = 0;
                    s && (r.HAS_POINTEREVENTS && t != r.EVENT_END ? c = r.PointerEvent.updatePointer(t, f) : l.match(/touch/) ? c = f.touches.length : o || (c = l.match(/up/) ? 0 : 1), c > 0 && t == r.EVENT_END ? t = r.EVENT_MOVE : c || (t = r.EVENT_END), c || null === i ? i = f : f = i, n.call(r.detection, u.collectEventData(e, t, f)), r.HAS_POINTEREVENTS && t == r.EVENT_END && (c = r.PointerEvent.updatePointer(t, f))),
                    c || (i = null, s = !1, o = !1, r.PointerEvent.reset())
                }
            })
        },
        determineEventTypes: function() {
            var e;
            e = r.HAS_POINTEREVENTS ? r.PointerEvent.getEvents() : r.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"],
            r.EVENT_TYPES[r.EVENT_START] = e[0],
            r.EVENT_TYPES[r.EVENT_MOVE] = e[1],
            r.EVENT_TYPES[r.EVENT_END] = e[2]
        },
        getTouchList: function(e) {
            return r.HAS_POINTEREVENTS ? r.PointerEvent.getTouchList() : e.touches ? e.touches : [{
                identifier: 1,
                pageX: e.pageX,
                pageY: e.pageY,
                target: e.target
            }]
        },
        collectEventData: function(e, t, n) {
            var i = this.getTouchList(n, t),
                s = r.POINTER_TOUCH;
            return (n.type.match(/mouse/) || r.PointerEvent.matchType(r.POINTER_MOUSE, n)) && (s = r.POINTER_MOUSE), {
                center: r.utils.getCenter(i),
                timeStamp: (new Date).getTime(),
                target: n.target,
                touches: i,
                eventType: t,
                pointerType: s,
                srcEvent: n,
                preventDefault: function() {
                    this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(),
                    this.srcEvent.preventDefault && this.srcEvent.preventDefault()
                },
                stopPropagation: function() {
                    this.srcEvent.stopPropagation()
                },
                stopDetect: function() {
                    return r.detection.stopDetect()
                }
            }
        }
    },
    r.PointerEvent = {
        pointers: {},
        getTouchList: function() {
            var e = this,
                t = [];
            return Object.keys(e.pointers).sort().forEach(function(n) {
                t.push(e.pointers[n])
            }), t
        },
        updatePointer: function(e, t) {
            return e == r.EVENT_END ? this.pointers = {} : (t.identifier = t.pointerId, this.pointers[t.pointerId] = t), Object.keys(this.pointers).length
        },
        matchType: function(e, t) {
            if (!t.pointerType)
                return !1;
            var n = {};
            return n[r.POINTER_MOUSE] = t.pointerType == t.MSPOINTER_TYPE_MOUSE || t.pointerType == r.POINTER_MOUSE, n[r.POINTER_TOUCH] = t.pointerType == t.MSPOINTER_TYPE_TOUCH || t.pointerType == r.POINTER_TOUCH, n[r.POINTER_PEN] = t.pointerType == t.MSPOINTER_TYPE_PEN || t.pointerType == r.POINTER_PEN, n[e]
        },
        getEvents: function() {
            return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
        },
        reset: function() {
            this.pointers = {}
        }
    },
    r.utils = {
        extend: function(e, n, r) {
            for (var i in n)
                e[i] !== t && r || (e[i] = n[i]);
            return e
        },
        hasParent: function(e, t) {
            for (; e;) {
                if (e == t)
                    return !0;
                e = e.parentNode
            }
            return !1
        },
        getCenter: function(e) {
            for (var t = [], n = [], r = 0, i = e.length; i > r; r++)
                t.push(e[r].pageX),
                n.push(e[r].pageY);
            return {
                pageX: (Math.min.apply(Math, t) + Math.max.apply(Math, t)) / 2,
                pageY: (Math.min.apply(Math, n) + Math.max.apply(Math, n)) / 2
            }
        },
        getVelocity: function(e, t, n) {
            return {
                x: Math.abs(t / e) || 0,
                y: Math.abs(n / e) || 0
            }
        },
        getAngle: function(e, t) {
            var n = t.pageY - e.pageY,
                r = t.pageX - e.pageX;
            return 180 * Math.atan2(n, r) / Math.PI
        },
        getDirection: function(e, t) {
            var n = Math.abs(e.pageX - t.pageX),
                i = Math.abs(e.pageY - t.pageY);
            return n >= i ? e.pageX - t.pageX > 0 ? r.DIRECTION_LEFT : r.DIRECTION_RIGHT : e.pageY - t.pageY > 0 ? r.DIRECTION_UP : r.DIRECTION_DOWN
        },
        getDistance: function(e, t) {
            var n = t.pageX - e.pageX,
                r = t.pageY - e.pageY;
            return Math.sqrt(n * n + r * r)
        },
        getScale: function(e, t) {
            return e.length >= 2 && t.length >= 2 ? this.getDistance(t[0], t[1]) / this.getDistance(e[0], e[1]) : 1
        },
        getRotation: function(e, t) {
            return e.length >= 2 && t.length >= 2 ? this.getAngle(t[1], t[0]) - this.getAngle(e[1], e[0]) : 0
        },
        isVertical: function(e) {
            return e == r.DIRECTION_UP || e == r.DIRECTION_DOWN
        },
        stopDefaultBrowserBehavior: function(e, t) {
            var n,
                r = ["webkit", "khtml", "moz", "ms", "o", ""];
            if (t && e.style) {
                for (var i = 0; r.length > i; i++)
                    for (var s in t)
                        t.hasOwnProperty(s) && (n = s, r[i] && (n = r[i] + n.substring(0, 1).toUpperCase() + n.substring(1)), e.style[n] = t[s]);
                "none" == t.userSelect && (e.onselectstart = function() {
                    return !1
                })
            }
        }
    },
    r.detection = {
        gestures: [],
        current: null,
        previous: null,
        stopped: !1,
        startDetect: function(e, t) {
            this.current || (this.stopped = !1, this.current = {
                inst: e,
                startEvent: r.utils.extend({}, t),
                lastEvent: !1,
                name: ""
            }, this.detect(t))
        },
        detect: function(e) {
            if (this.current && !this.stopped) {
                e = this.extendEventData(e);
                for (var t = this.current.inst.options, n = 0, i = this.gestures.length; i > n; n++) {
                    var s = this.gestures[n];
                    if (!this.stopped && t[s.name] !== !1 && s.handler.call(s, e, this.current.inst) === !1) {
                        this.stopDetect();
                        break
                    }
                }
                return this.current && (this.current.lastEvent = e), e.eventType == r.EVENT_END && !e.touches.length - 1 && this.stopDetect(), e
            }
        },
        stopDetect: function() {
            this.previous = r.utils.extend({}, this.current),
            this.current = null,
            this.stopped = !0
        },
        extendEventData: function(e) {
            var t = this.current.startEvent;
            if (t && (e.touches.length != t.touches.length || e.touches === t.touches)) {
                t.touches = [];
                for (var n = 0, i = e.touches.length; i > n; n++)
                    t.touches.push(r.utils.extend({}, e.touches[n]))
            }
            var s = e.timeStamp - t.timeStamp,
                o = e.center.pageX - t.center.pageX,
                u = e.center.pageY - t.center.pageY,
                a = r.utils.getVelocity(s, o, u);
            return r.utils.extend(e, {
                deltaTime: s,
                deltaX: o,
                deltaY: u,
                velocityX: a.x,
                velocityY: a.y,
                distance: r.utils.getDistance(t.center, e.center),
                angle: r.utils.getAngle(t.center, e.center),
                direction: r.utils.getDirection(t.center, e.center),
                scale: r.utils.getScale(t.touches, e.touches),
                rotation: r.utils.getRotation(t.touches, e.touches),
                startEvent: t
            }), e
        },
        register: function(e) {
            var n = e.defaults || {};
            return n[e.name] === t && (n[e.name] = !0), r.utils.extend(r.defaults, n, !0), e.index = e.index || 1e3, this.gestures.push(e), this.gestures.sort(function(e, t) {
                return e.index < t.index ? -1 : e.index > t.index ? 1 : 0
            }), this.gestures
        }
    },
    r.gestures = r.gestures || {},
    r.gestures.Hold = {
        name: "hold",
        index: 10,
        defaults: {
            hold_timeout: 500,
            hold_threshold: 1
        },
        timer: null,
        handler: function(e, t) {
            switch (e.eventType) {
            case r.EVENT_START:
                clearTimeout(this.timer),
                r.detection.current.name = this.name,
                this.timer = setTimeout(function() {
                    "hold" == r.detection.current.name && t.trigger("hold", e)
                }, t.options.hold_timeout);
                break;
            case r.EVENT_MOVE:
                e.distance > t.options.hold_threshold && clearTimeout(this.timer);
                break;
            case r.EVENT_END:
                clearTimeout(this.timer)
            }
        }
    },
    r.gestures.Tap = {
        name: "tap",
        index: 100,
        defaults: {
            tap_max_touchtime: 250,
            tap_max_distance: 10,
            tap_always: !0,
            doubletap_distance: 20,
            doubletap_interval: 300
        },
        handler: function(e, t) {
            if (e.eventType == r.EVENT_END) {
                var n = r.detection.previous,
                    i = !1;
                if (e.deltaTime > t.options.tap_max_touchtime || e.distance > t.options.tap_max_distance)
                    return;
                n && "tap" == n.name && e.timeStamp - n.lastEvent.timeStamp < t.options.doubletap_interval && e.distance < t.options.doubletap_distance && (t.trigger("doubletap", e), i = !0),
                (!i || t.options.tap_always) && (r.detection.current.name = "tap", t.trigger(r.detection.current.name, e))
            }
        }
    },
    r.gestures.Swipe = {
        name: "swipe",
        index: 40,
        defaults: {
            swipe_max_touches: 1,
            swipe_velocity: .7
        },
        handler: function(e, t) {
            if (e.eventType == r.EVENT_END) {
                if (t.options.swipe_max_touches > 0 && e.touches.length > t.options.swipe_max_touches)
                    return;
                (e.velocityX > t.options.swipe_velocity || e.velocityY > t.options.swipe_velocity) && (t.trigger(this.name, e), t.trigger(this.name + e.direction, e))
            }
        }
    },
    r.gestures.Drag = {
        name: "drag",
        index: 50,
        defaults: {
            drag_min_distance: 10,
            drag_max_touches: 1,
            drag_block_horizontal: !1,
            drag_block_vertical: !1,
            drag_lock_to_axis: !1,
            drag_lock_min_distance: 25
        },
        triggered: !1,
        handler: function(e, n) {
            if (r.detection.current.name != this.name && this.triggered)
                return n.trigger(this.name + "end", e), this.triggered = !1, t;
            if (!(n.options.drag_max_touches > 0 && e.touches.length > n.options.drag_max_touches))
                switch (e.eventType) {
                case r.EVENT_START:
                    this.triggered = !1;
                    break;
                case r.EVENT_MOVE:
                    if (e.distance < n.options.drag_min_distance && r.detection.current.name != this.name)
                        return;
                    r.detection.current.name = this.name,
                    (r.detection.current.lastEvent.drag_locked_to_axis || n.options.drag_lock_to_axis && n.options.drag_lock_min_distance <= e.distance) && (e.drag_locked_to_axis = !0);
                    var i = r.detection.current.lastEvent.direction;
                    e.drag_locked_to_axis && i !== e.direction && (e.direction = r.utils.isVertical(i) ? 0 > e.deltaY ? r.DIRECTION_UP : r.DIRECTION_DOWN : 0 > e.deltaX ? r.DIRECTION_LEFT : r.DIRECTION_RIGHT),
                    this.triggered || (n.trigger(this.name + "start", e), this.triggered = !0),
                    n.trigger(this.name, e),
                    n.trigger(this.name + e.direction, e),
                    (n.options.drag_block_vertical && r.utils.isVertical(e.direction) || n.options.drag_block_horizontal && !r.utils.isVertical(e.direction)) && e.preventDefault();
                    break;
                case r.EVENT_END:
                    this.triggered && n.trigger(this.name + "end", e),
                    this.triggered = !1
                }
        }
    },
    r.gestures.Transform = {
        name: "transform",
        index: 45,
        defaults: {
            transform_min_scale: .01,
            transform_min_rotation: 1,
            transform_always_block: !1
        },
        triggered: !1,
        handler: function(e, n) {
            if (r.detection.current.name != this.name && this.triggered)
                return n.trigger(this.name + "end", e), this.triggered = !1, t;
            if (!(2 > e.touches.length))
                switch (n.options.transform_always_block && e.preventDefault(), e.eventType) {
                case r.EVENT_START:
                    this.triggered = !1;
                    break;
                case r.EVENT_MOVE:
                    var i = Math.abs(1 - e.scale),
                        s = Math.abs(e.rotation);
                    if (n.options.transform_min_scale > i && n.options.transform_min_rotation > s)
                        return;
                    r.detection.current.name = this.name,
                    this.triggered || (n.trigger(this.name + "start", e), this.triggered = !0),
                    n.trigger(this.name, e),
                    s > n.options.transform_min_rotation && n.trigger("rotate", e),
                    i > n.options.transform_min_scale && (n.trigger("pinch", e), n.trigger("pinch" + (1 > e.scale ? "in" : "out"), e));
                    break;
                case r.EVENT_END:
                    this.triggered && n.trigger(this.name + "end", e),
                    this.triggered = !1
                }
        }
    },
    r.gestures.Touch = {
        name: "touch",
        index: -1 / 0,
        defaults: {
            prevent_default: !1,
            prevent_mouseevents: !1
        },
        handler: function(e, n) {
            return n.options.prevent_mouseevents && e.pointerType == r.POINTER_MOUSE ? (e.stopDetect(), t) : (n.options.prevent_default && e.preventDefault(), e.eventType == r.EVENT_START && n.trigger(this.name, e), t)
        }
    },
    r.gestures.Release = {
        name: "release",
        index: 1 / 0,
        handler: function(e, t) {
            e.eventType == r.EVENT_END && t.trigger(this.name, e)
        }
    },
    "object" == typeof module && "object" == typeof module.exports ? module.exports = r : (e.Hammer = r, "function" == typeof e.define && e.define.amd && e.define("hammer", [], function() {
        return r
    }))
}(this),
function(e, t) {
    "use strict";
    e !== t && (Hammer.event.bindDom = function(n, r, i) {
        e(n).on(r, function(e) {
            var n = e.originalEvent || e;
            n.pageX === t && (n.pageX = e.pageX, n.pageY = e.pageY),
            n.target || (n.target = e.target),
            n.which === t && (n.which = n.button),
            n.preventDefault || (n.preventDefault = e.preventDefault),
            n.stopPropagation || (n.stopPropagation = e.stopPropagation),
            i.call(this, n)
        })
    }, Hammer.Instance.prototype.on = function(t, n) {
        return e(this.element).on(t, n)
    }, Hammer.Instance.prototype.off = function(t, n) {
        return e(this.element).off(t, n)
    }, Hammer.Instance.prototype.trigger = function(t, n) {
        var r = e(this.element);
        return r.has(n.target).length && (r = e(n.target)), r.trigger({
            type: t,
            gesture: n
        })
    }, e.fn.hammer = function(t) {
        return this.each(function() {
            var n = e(this),
                r = n.data("hammer");
            r ? r && t && Hammer.utils.extend(r.options, t) : n.data("hammer", new Hammer(this, t || {}))
        })
    })
}(window.jQuery || window.Zepto),
define("lib-app/jquery.hammer.min", function() {});
var Swiper = function(e, t) {
    "use strict";
    function r(e, t) {
        return document.querySelectorAll ? (t || document).querySelectorAll(e) : jQuery(e, t)
    }
    function b(e) {
        return Object.prototype.toString.apply(e) === "[object Array]" ? !0 : !1
    }
    function x() {
        var e = u - l;
        return t.freeMode && (e = u - l), t.slidesPerView > i.slides.length && !t.centeredSlides && (e = 0), e < 0 && (e = 0), e
    }
    function T() {
        function o(e) {
            var n = new Image;
            n.onload = function() {
                i && i.imagesLoaded !== undefined && i.imagesLoaded++,
                i.imagesLoaded === i.imagesToLoad.length && (i.reInit(), t.onImagesReady && i.fireCallback(t.onImagesReady, i))
            },
            n.src = e
        }
        var e = i.h.addEventListener,
            n = t.eventTarget === "wrapper" ? i.wrapper : i.container;
        !i.browser.ie10 && !i.browser.ie11 ? (i.support.touch && (e(n, "touchstart", I), e(n, "touchmove", U), e(n, "touchend", z)), t.simulateTouch && (e(n, "mousedown", I), e(document, "mousemove", U), e(document, "mouseup", z))) : (e(n, i.touchEvents.touchStart, I), e(document, i.touchEvents.touchMove, U), e(document, i.touchEvents.touchEnd, z)),
        t.autoResize && e(window, "resize", i.resizeFix),
        N(),
        i._wheelEvent = !1;
        if (t.mousewheelControl) {
            document.onmousewheel !== undefined && (i._wheelEvent = "mousewheel");
            if (!i._wheelEvent)
                try {
                    new WheelEvent("wheel"),
                    i._wheelEvent = "wheel"
                } catch (s) {}
            i._wheelEvent || (i._wheelEvent = "DOMMouseScroll"),
            i._wheelEvent && e(i.container, i._wheelEvent, A)
        }
        t.keyboardControl && e(document, "keydown", k);
        if (t.updateOnImagesReady) {
            i.imagesToLoad = r("img", i.container);
            for (var u = 0; u < i.imagesToLoad.length; u++)
                o(i.imagesToLoad[u].getAttribute("src"))
        }
    }
    function N() {
        var e = i.h.addEventListener,
            n;
        if (t.preventLinks) {
            var s = r("a", i.container);
            for (n = 0; n < s.length; n++)
                e(s[n], "click", P)
        }
        if (t.releaseFormElements) {
            var o = r("input, textarea, select", i.container);
            for (n = 0; n < o.length; n++)
                e(o[n], i.touchEvents.touchStart, H, !0)
        }
        if (t.onSlideClick)
            for (n = 0; n < i.slides.length; n++)
                e(i.slides[n], "click", M);
        if (t.onSlideTouch)
            for (n = 0; n < i.slides.length; n++)
                e(i.slides[n], i.touchEvents.touchStart, _)
    }
    function C() {
        var e = i.h.removeEventListener,
            n;
        if (t.onSlideClick)
            for (n = 0; n < i.slides.length; n++)
                e(i.slides[n], "click", M);
        if (t.onSlideTouch)
            for (n = 0; n < i.slides.length; n++)
                e(i.slides[n], i.touchEvents.touchStart, _);
        if (t.releaseFormElements) {
            var s = r("input, textarea, select", i.container);
            for (n = 0; n < s.length; n++)
                e(s[n], i.touchEvents.touchStart, H, !0)
        }
        if (t.preventLinks) {
            var o = r("a", i.container);
            for (n = 0; n < o.length; n++)
                e(o[n], "click", P)
        }
    }
    function k(e) {
        var t = e.keyCode || e.charCode;
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey)
            return;
        if (t === 37 || t === 39 || t === 38 || t === 40) {
            var n = !1,
                r = i.h.getOffset(i.container),
                s = i.h.windowScroll().left,
                o = i.h.windowScroll().top,
                u = i.h.windowWidth(),
                a = i.h.windowHeight(),
                f = [[r.left, r.top], [r.left + i.width, r.top], [r.left, r.top + i.height], [r.left + i.width, r.top + i.height]];
            for (var l = 0; l < f.length; l++) {
                var c = f[l];
                c[0] >= s && c[0] <= s + u && c[1] >= o && c[1] <= o + a && (n = !0)
            }
            if (!n)
                return
        }
        if (d) {
            if (t === 37 || t === 39)
                e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            t === 39 && i.swipeNext(),
            t === 37 && i.swipePrev()
        } else {
            if (t === 38 || t === 40)
                e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            t === 40 && i.swipeNext(),
            t === 38 && i.swipePrev()
        }
    }
    function A(e) {
        var n = i._wheelEvent,
            r = 0;
        if (e.detail)
            r = -e.detail;
        else if (n === "mousewheel")
            if (t.mousewheelControlForceToAxis)
                if (d) {
                    if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)))
                        return;
                    r = e.wheelDeltaX
                } else {
                    if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)))
                        return;
                    r = e.wheelDeltaY
                }
            else
                r = e.wheelDelta;
        else if (n === "DOMMouseScroll")
            r = -e.detail;
        else if (n === "wheel")
            if (t.mousewheelControlForceToAxis)
                if (d) {
                    if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY)))
                        return;
                    r = -e.deltaX
                } else {
                    if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX)))
                        return;
                    r = -e.deltaY
                }
            else
                r = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
        if (!t.freeMode)
            (new Date).getTime() - L > 60 && (r < 0 ? i.swipeNext() : i.swipePrev()),
            L = (new Date).getTime();
        else {
            var s = i.getWrapperTranslate() + r;
            s > 0 && (s = 0),
            s < -x() && (s = -x()),
            i.setWrapperTransition(0),
            i.setWrapperTranslate(s),
            i.updateActiveSlide(s);
            if (s === 0 || s === -x())
                return
        }
        return t.autoplay && i.stopAutoplay(!0), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
    }
    function M(e) {
        i.allowSlideClick && (D(e), i.fireCallback(t.onSlideClick, i, e))
    }
    function _(e) {
        D(e),
        i.fireCallback(t.onSlideTouch, i, e)
    }
    function D(e) {
        if (!e.currentTarget) {
            var n = e.srcElement;
            do {
                if (n.className.indexOf(t.slideClass) > -1)
                    break;
                n = n.parentNode
            } while (n);
            i.clickedSlide = n
        } else
            i.clickedSlide = e.currentTarget;
        i.clickedTarget = e.target,
        i.clickedSlideIndex = i.slides.indexOf(i.clickedSlide),
        i.clickedSlideLoopIndex = i.clickedSlideIndex - (i.loopedSlides || 0)
    }
    function P(e) {
        if (!i.allowLinks)
            return e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.preventLinksPropagation && "stopPropagation" in e && e.stopPropagation(), !1
    }
    function H(e) {
        return e.stopPropagation ? e.stopPropagation() : e.returnValue = !1, !1
    }
    function I(e) {
        t.preventLinks && (i.allowLinks = !0);
        if (i.isTouched || t.onlyExternal)
            return !1;
        if (t.noSwiping && (e.target || e.srcElement) && W(e.target || e.srcElement))
            return !1;
        F = !1,
        i.isTouched = !0,
        B = e.type === "touchstart";
        if (!B || e.targetTouches.length === 1) {
            i.callPlugins("onTouchStartBegin"),
            !B && !i.isAndroid && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
            var n = B ? e.targetTouches[0].pageX : e.pageX || e.clientX,
                r = B ? e.targetTouches[0].pageY : e.pageY || e.clientY;
            i.touches.startX = i.touches.currentX = n,
            i.touches.startY = i.touches.currentY = r,
            i.touches.start = i.touches.current = d ? n : r,
            i.setWrapperTransition(0),
            i.positions.start = i.positions.current = i.getWrapperTranslate(),
            i.setWrapperTranslate(i.positions.start),
            i.times.start = (new Date).getTime(),
            f = undefined,
            t.moveStartThreshold > 0 && (j = !1),
            t.onTouchStart && i.fireCallback(t.onTouchStart, i, e),
            i.callPlugins("onTouchStartEnd")
        }
    }
    function U(e) {
        if (!i.isTouched || t.onlyExternal)
            return;
        if (B && e.type === "mousemove")
            return;
        var n = B ? e.targetTouches[0].pageX : e.pageX || e.clientX,
            r = B ? e.targetTouches[0].pageY : e.pageY || e.clientY;
        typeof f == "undefined" && d && (f = !!(f || Math.abs(r - i.touches.startY) > Math.abs(n - i.touches.startX))),
        typeof f == "undefined" && !d && (f = !!(f || Math.abs(r - i.touches.startY) < Math.abs(n - i.touches.startX)));
        if (f) {
            i.isTouched = !1;
            return
        }
        if (e.assignedToSwiper) {
            i.isTouched = !1;
            return
        }
        e.assignedToSwiper = !0,
        t.preventLinks && (i.allowLinks = !1),
        t.onSlideClick && (i.allowSlideClick = !1),
        t.autoplay && i.stopAutoplay(!0);
        if (!B || e.touches.length === 1) {
            i.isMoved || (i.callPlugins("onTouchMoveStart"), t.loop && (i.fixLoop(), i.positions.start = i.getWrapperTranslate()), t.onTouchMoveStart && i.fireCallback(t.onTouchMoveStart, i)),
            i.isMoved = !0,
            e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            i.touches.current = d ? n : r,
            i.positions.current = (i.touches.current - i.touches.start) * t.touchRatio + i.positions.start,
            i.positions.current > 0 && t.onResistanceBefore && i.fireCallback(t.onResistanceBefore, i, i.positions.current),
            i.positions.current < -x() && t.onResistanceAfter && i.fireCallback(t.onResistanceAfter, i, Math.abs(i.positions.current + x()));
            if (t.resistance && t.resistance !== "100%") {
                var s;
                i.positions.current > 0 && (s = 1 - i.positions.current / l / 2, s < .5 ? i.positions.current = l / 2 : i.positions.current = i.positions.current * s);
                if (i.positions.current < -x()) {
                    var o = (i.touches.current - i.touches.start) * t.touchRatio + (x() + i.positions.start);
                    s = (l + o) / l;
                    var u = i.positions.current - o * (1 - s) / 2,
                        a = -x() - l / 2;
                    u < a || s <= 0 ? i.positions.current = a : i.positions.current = u
                }
            }
            t.resistance && t.resistance === "100%" && (i.positions.current > 0 && (!t.freeMode || !!t.freeModeFluid) && (i.positions.current = 0), i.positions.current < -x() && (!t.freeMode || !!t.freeModeFluid) && (i.positions.current = -x()));
            if (!t.followFinger)
                return;
            if (!t.moveStartThreshold)
                i.setWrapperTranslate(i.positions.current);
            else if (Math.abs(i.touches.current - i.touches.start) > t.moveStartThreshold || j) {
                if (!j) {
                    j = !0,
                    i.touches.start = i.touches.current;
                    return
                }
                i.setWrapperTranslate(i.positions.current)
            } else
                i.positions.current = i.positions.start;
            return (t.freeMode || t.watchActiveIndex) && i.updateActiveSlide(i.positions.current), t.grabCursor && (i.container.style.cursor = "move", i.container.style.cursor = "grabbing", i.container.style.cursor = "-moz-grabbin", i.container.style.cursor = "-webkit-grabbing"), q || (q = i.touches.current), R || (R = (new Date).getTime()), i.velocity = (i.touches.current - q) / ((new Date).getTime() - R) / 2, Math.abs(i.touches.current - q) < 2 && (i.velocity = 0), q = i.touches.current, R = (new Date).getTime(), i.callPlugins("onTouchMoveEnd"), t.onTouchMove && i.fireCallback(t.onTouchMove, i, e), !1
        }
    }
    function z(e) {
        f && i.swipeReset();
        if (t.onlyExternal || !i.isTouched)
            return;
        i.isTouched = !1,
        t.grabCursor && (i.container.style.cursor = "move", i.container.style.cursor = "grab", i.container.style.cursor = "-moz-grab", i.container.style.cursor = "-webkit-grab"),
        !i.positions.current && i.positions.current !== 0 && (i.positions.current = i.positions.start),
        t.followFinger && i.setWrapperTranslate(i.positions.current),
        i.times.end = (new Date).getTime(),
        i.touches.diff = i.touches.current - i.touches.start,
        i.touches.abs = Math.abs(i.touches.diff),
        i.positions.diff = i.positions.current - i.positions.start,
        i.positions.abs = Math.abs(i.positions.diff);
        var n = i.positions.diff,
            r = i.positions.abs,
            s = i.times.end - i.times.start;
        r < 5 && s < 300 && i.allowLinks === !1 && (!t.freeMode && r !== 0 && i.swipeReset(), t.preventLinks && (i.allowLinks = !0), t.onSlideClick && (i.allowSlideClick = !0)),
        setTimeout(function() {
            t.preventLinks && (i.allowLinks = !0),
            t.onSlideClick && (i.allowSlideClick = !0)
        }, 100);
        var u = x();
        if (!i.isMoved && t.freeMode) {
            i.isMoved = !1,
            t.onTouchEnd && i.fireCallback(t.onTouchEnd, i, e),
            i.callPlugins("onTouchEnd");
            return
        }
        if (!i.isMoved || i.positions.current > 0 || i.positions.current < -u) {
            i.swipeReset(),
            t.onTouchEnd && i.fireCallback(t.onTouchEnd, i, e),
            i.callPlugins("onTouchEnd");
            return
        }
        i.isMoved = !1;
        if (t.freeMode) {
            if (t.freeModeFluid) {
                var c = 1e3 * t.momentumRatio,
                    h = i.velocity * c,
                    p = i.positions.current + h,
                    v = !1,
                    m,
                    g = Math.abs(i.velocity) * 20 * t.momentumBounceRatio;
                p < -u && (t.momentumBounce && i.support.transitions ? (p + u < -g && (p = -u - g), m = -u, v = !0, F = !0) : p = -u),
                p > 0 && (t.momentumBounce && i.support.transitions ? (p > g && (p = g), m = 0, v = !0, F = !0) : p = 0),
                i.velocity !== 0 && (c = Math.abs((p - i.positions.current) / i.velocity)),
                i.setWrapperTranslate(p),
                i.setWrapperTransition(c),
                t.momentumBounce && v && i.wrapperTransitionEnd(function() {
                    if (!F)
                        return;
                    t.onMomentumBounce && i.fireCallback(t.onMomentumBounce, i),
                    i.callPlugins("onMomentumBounce"),
                    i.setWrapperTranslate(m),
                    i.setWrapperTransition(300)
                }),
                i.updateActiveSlide(p)
            }
            (!t.freeModeFluid || s >= 300) && i.updateActiveSlide(i.positions.current),
            t.onTouchEnd && i.fireCallback(t.onTouchEnd, i, e),
            i.callPlugins("onTouchEnd");
            return
        }
        a = n < 0 ? "toNext" : "toPrev",
        a === "toNext" && s <= 300 && (r < 30 || !t.shortSwipes ? i.swipeReset() : i.swipeNext(!0)),
        a === "toPrev" && s <= 300 && (r < 30 || !t.shortSwipes ? i.swipeReset() : i.swipePrev(!0));
        var y = 0;
        if (t.slidesPerView === "auto") {
            var b = Math.abs(i.getWrapperTranslate()),
                w = 0,
                E;
            for (var S = 0; S < i.slides.length; S++) {
                E = d ? i.slides[S].getWidth(!0, t.roundLengths) : i.slides[S].getHeight(!0, t.roundLengths),
                w += E;
                if (w > b) {
                    y = E;
                    break
                }
            }
            y > l && (y = l)
        } else
            y = o * t.slidesPerView;
        a === "toNext" && s > 300 && (r >= y * t.longSwipesRatio ? i.swipeNext(!0) : i.swipeReset()),
        a === "toPrev" && s > 300 && (r >= y * t.longSwipesRatio ? i.swipePrev(!0) : i.swipeReset()),
        t.onTouchEnd && i.fireCallback(t.onTouchEnd, i, e),
        i.callPlugins("onTouchEnd")
    }
    function W(e) {
        var n = !1;
        do e.className.indexOf(t.noSwipingClass) > -1 && (n = !0),
        e = e.parentElement;
        while (!n && e.parentElement && e.className.indexOf(t.wrapperClass) === -1);
        return !n && e.className.indexOf(t.wrapperClass) > -1 && e.className.indexOf(t.noSwipingClass) > -1 && (n = !0), n
    }
    function X(e, t) {
        var n = document.createElement("div"),
            r;
        return n.innerHTML = t, r = n.firstChild, r.className += " " + e, r.outerHTML
    }
    function V(e, n, r) {
        function u() {
            var s = +(new Date),
                h = s - o;
            a += f * h / (1e3 / 60),
            c = l === "toNext" ? a > e : a < e,
            c ? (i.setWrapperTranslate(Math.round(a)), i._DOMAnimating = !0, window.setTimeout(function() {
                u()
            }, 1e3 / 60)) : (t.onSlideChangeEnd && (n === "to" ? r.runCallbacks === !0 && i.fireCallback(t.onSlideChangeEnd, i) : i.fireCallback(t.onSlideChangeEnd, i)), i.setWrapperTranslate(e), i._DOMAnimating = !1)
        }
        var s = n === "to" && r.speed >= 0 ? r.speed : t.speed,
            o = +(new Date);
        if (i.support.transitions || !t.DOMAnimation)
            i.setWrapperTranslate(e),
            i.setWrapperTransition(s);
        else {
            var a = i.getWrapperTranslate(),
                f = Math.ceil((e - a) / s * (1e3 / 60)),
                l = a > e ? "toNext" : "toPrev",
                c = l === "toNext" ? a > e : a < e;
            if (i._DOMAnimating)
                return;
            u()
        }
        i.updateActiveSlide(e),
        t.onSlideNext && n === "next" && i.fireCallback(t.onSlideNext, i, e),
        t.onSlidePrev && n === "prev" && i.fireCallback(t.onSlidePrev, i, e),
        t.onSlideReset && n === "reset" && i.fireCallback(t.onSlideReset, i, e),
        (n === "next" || n === "prev" || n === "to" && r.runCallbacks === !0) && $(n)
    }
    function $(e) {
        i.callPlugins("onSlideChangeStart");
        if (t.onSlideChangeStart)
            if (t.queueStartCallbacks && i.support.transitions) {
                if (i._queueStartCallbacks)
                    return;
                i._queueStartCallbacks = !0,
                i.fireCallback(t.onSlideChangeStart, i, e),
                i.wrapperTransitionEnd(function() {
                    i._queueStartCallbacks = !1
                })
            } else
                i.fireCallback(t.onSlideChangeStart, i, e);
        if (t.onSlideChangeEnd)
            if (i.support.transitions)
                if (t.queueEndCallbacks) {
                    if (i._queueEndCallbacks)
                        return;
                    i._queueEndCallbacks = !0,
                    i.wrapperTransitionEnd(function(n) {
                        i.fireCallback(t.onSlideChangeEnd, n, e)
                    })
                } else
                    i.wrapperTransitionEnd(function(n) {
                        i.fireCallback(t.onSlideChangeEnd, n, e)
                    });
            else
                t.DOMAnimation || setTimeout(function() {
                    i.fireCallback(t.onSlideChangeEnd, i, e)
                }, 10)
    }
    function J() {
        var e = i.paginationButtons;
        if (e)
            for (var t = 0; t < e.length; t++)
                i.h.removeEventListener(e[t], "click", Q)
    }
    function K() {
        var e = i.paginationButtons;
        if (e)
            for (var t = 0; t < e.length; t++)
                i.h.addEventListener(e[t], "click", Q)
    }
    function Q(e) {
        var t,
            n = e.target || e.srcElement,
            r = i.paginationButtons;
        for (var s = 0; s < r.length; s++)
            n === r[s] && (t = s);
        i.swipeTo(t)
    }
    function Z() {
        G = setTimeout(function() {
            t.loop ? (i.fixLoop(), i.swipeNext(!0)) : i.swipeNext(!0) || (t.autoplayStopOnLast ? (clearTimeout(G), G = undefined) : i.swipeTo(0)),
            i.wrapperTransitionEnd(function() {
                typeof G != "undefined" && Z()
            })
        }, t.autoplay)
    }
    function et() {
        i.calcSlides(),
        t.loader.slides.length > 0 && i.slides.length === 0 && i.loadSlides(),
        t.loop && i.createLoop(),
        i.init(),
        T(),
        t.pagination && i.createPagination(!0),
        t.loop || t.initialSlide > 0 ? i.swipeTo(t.initialSlide, 0, !1) : i.updateActiveSlide(0),
        t.autoplay && i.startAutoplay(),
        i.centerIndex = i.activeIndex,
        t.onSwiperCreated && i.fireCallback(t.onSwiperCreated, i),
        i.callPlugins("onSwiperCreated")
    }
    if (document.body.__defineGetter__ && HTMLElement) {
        var n = HTMLElement.prototype;
        n.__defineGetter__ && n.__defineGetter__("outerHTML", function() {
            return (new XMLSerializer).serializeToString(this)
        })
    }
    window.getComputedStyle || (window.getComputedStyle = function(e, t) {
        return this.el = e, this.getPropertyValue = function(t) {
            var n = /(\-([a-z]){1})/g;
            return t === "float" && (t = "styleFloat"), n.test(t) && (t = t.replace(n, function() {
                return arguments[2].toUpperCase()
            })), e.currentStyle[t] ? e.currentStyle[t] : null
        }, this
    }),
    Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
        for (var n = t || 0, r = this.length; n < r; n++)
            if (this[n] === e)
                return n;
        return -1
    });
    if (!document.querySelectorAll && !window.jQuery)
        return;
    if (typeof e == "undefined")
        return;
    if (!e.nodeType && r(e).length === 0)
        return;
    var i = this;
    i.touches = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        diff: 0,
        abs: 0
    },
    i.positions = {
        start: 0,
        abs: 0,
        diff: 0,
        current: 0
    },
    i.times = {
        start: 0,
        end: 0
    },
    i.id = (new Date).getTime(),
    i.container = e.nodeType ? e : r(e)[0],
    i.isTouched = !1,
    i.isMoved = !1,
    i.activeIndex = 0,
    i.centerIndex = 0,
    i.activeLoaderIndex = 0,
    i.activeLoopIndex = 0,
    i.previousIndex = null,
    i.velocity = 0,
    i.snapGrid = [],
    i.slidesGrid = [],
    i.imagesToLoad = [],
    i.imagesLoaded = 0,
    i.wrapperLeft = 0,
    i.wrapperRight = 0,
    i.wrapperTop = 0,
    i.wrapperBottom = 0,
    i.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
    var s,
        o,
        u,
        a,
        f,
        l,
        c = {
            eventTarget: "wrapper",
            mode: "horizontal",
            touchRatio: 1,
            speed: 300,
            freeMode: !1,
            freeModeFluid: !1,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerViewFit: !0,
            simulateTouch: !0,
            followFinger: !0,
            shortSwipes: !0,
            longSwipesRatio: .5,
            moveStartThreshold: !1,
            onlyExternal: !1,
            createPagination: !0,
            pagination: !1,
            paginationElement: "span",
            paginationClickable: !1,
            paginationAsRange: !0,
            resistance: !0,
            scrollContainer: !1,
            preventLinks: !0,
            preventLinksPropagation: !1,
            noSwiping: !1,
            noSwipingClass: "swiper-no-swiping",
            initialSlide: 0,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelControlForceToAxis: !1,
            useCSS3Transforms: !0,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            loop: !1,
            loopAdditionalSlides: 0,
            roundLengths: !1,
            calculateHeight: !1,
            cssWidthAndHeight: !1,
            updateOnImagesReady: !0,
            releaseFormElements: !0,
            watchActiveIndex: !1,
            visibilityFullFit: !1,
            offsetPxBefore: 0,
            offsetPxAfter: 0,
            offsetSlidesBefore: 0,
            offsetSlidesAfter: 0,
            centeredSlides: !1,
            queueStartCallbacks: !1,
            queueEndCallbacks: !1,
            autoResize: !0,
            resizeReInit: !1,
            DOMAnimation: !0,
            loader: {
                slides: [],
                slidesHTMLType: "inner",
                surroundGroups: 1,
                logic: "reload",
                loadAllSlides: !1
            },
            slideElement: "div",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            wrapperClass: "swiper-wrapper",
            paginationElementClass: "swiper-pagination-switch",
            paginationActiveClass: "swiper-active-switch",
            paginationVisibleClass: "swiper-visible-switch"
        };
    t = t || {};
    for (var h in c)
        if (h in t && typeof t[h] == "object")
            for (var p in c[h])
                p in t[h] || (t[h][p] = c[h][p]);
        else
            h in t || (t[h] = c[h]);
    i.params = t,
    t.scrollContainer && (t.freeMode = !0, t.freeModeFluid = !0),
    t.loop && (t.resistance = "100%");
    var d = t.mode === "horizontal",
        v = ["mousedown", "mousemove", "mouseup"];
    i.browser.ie10 && (v = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
    i.browser.ie11 && (v = ["pointerdown", "pointermove", "pointerup"]),
    i.touchEvents = {
        touchStart: i.support.touch || !t.simulateTouch ? "touchstart" : v[0],
        touchMove: i.support.touch || !t.simulateTouch ? "touchmove" : v[1],
        touchEnd: i.support.touch || !t.simulateTouch ? "touchend" : v[2]
    };
    for (var m = i.container.childNodes.length - 1; m >= 0; m--)
        if (i.container.childNodes[m].className) {
            var g = i.container.childNodes[m].className.split(/\s+/);
            for (var y = 0; y < g.length; y++)
                g[y] === t.wrapperClass && (s = i.container.childNodes[m])
        }
    i.wrapper = s,
    i._extendSwiperSlide = function(e) {
        return e.append = function() {
            return t.loop ? e.insertAfter(i.slides.length - i.loopedSlides) : (i.wrapper.appendChild(e), i.reInit()), e
        }, e.prepend = function() {
            return t.loop ? (i.wrapper.insertBefore(e, i.slides[i.loopedSlides]), i.removeLoopedSlides(), i.calcSlides(), i.createLoop()) : i.wrapper.insertBefore(e, i.wrapper.firstChild), i.reInit(), e
        }, e.insertAfter = function(n) {
            if (typeof n == "undefined")
                return !1;
            var r;
            return t.loop ? (r = i.slides[n + 1 + i.loopedSlides], r ? i.wrapper.insertBefore(e, r) : i.wrapper.appendChild(e), i.removeLoopedSlides(), i.calcSlides(), i.createLoop()) : (r = i.slides[n + 1], i.wrapper.insertBefore(e, r)), i.reInit(), e
        }, e.clone = function() {
            return i._extendSwiperSlide(e.cloneNode(!0))
        }, e.remove = function() {
            i.wrapper.removeChild(e),
            i.reInit()
        }, e.html = function(t) {
            return typeof t == "undefined" ? e.innerHTML : (e.innerHTML = t, e)
        }, e.index = function() {
            var t;
            for (var n = i.slides.length - 1; n >= 0; n--)
                e === i.slides[n] && (t = n);
            return t
        }, e.isActive = function() {
            return e.index() === i.activeIndex ? !0 : !1
        }, e.swiperSlideDataStorage || (e.swiperSlideDataStorage = {}), e.getData = function(t) {
            return e.swiperSlideDataStorage[t]
        }, e.setData = function(t, n) {
            return e.swiperSlideDataStorage[t] = n, e
        }, e.data = function(t, n) {
            return typeof n == "undefined" ? e.getAttribute("data-" + t) : (e.setAttribute("data-" + t, n), e)
        }, e.getWidth = function(t, n) {
            return i.h.getWidth(e, t, n)
        }, e.getHeight = function(t, n) {
            return i.h.getHeight(e, t, n)
        }, e.getOffset = function() {
            return i.h.getOffset(e)
        }, e
    },
    i.calcSlides = function(e) {
        var n = i.slides ? i.slides.length : !1;
        i.slides = [],
        i.displaySlides = [];
        for (var r = 0; r < i.wrapper.childNodes.length; r++)
            if (i.wrapper.childNodes[r].className) {
                var s = i.wrapper.childNodes[r].className,
                    o = s.split(/\s+/);
                for (var u = 0; u < o.length; u++)
                    o[u] === t.slideClass && i.slides.push(i.wrapper.childNodes[r])
            }
        for (r = i.slides.length - 1; r >= 0; r--)
            i._extendSwiperSlide(i.slides[r]);
        if (n === !1)
            return;
        if (n !== i.slides.length || e)
            C(),
            N(),
            i.updateActiveSlide(),
            i.params.pagination && i.createPagination(),
            i.callPlugins("numberOfSlidesChanged")
    },
    i.createSlide = function(e, n, r) {
        n = n || i.params.slideClass,
        r = r || t.slideElement;
        var s = document.createElement(r);
        return s.innerHTML = e || "", s.className = n, i._extendSwiperSlide(s)
    },
    i.appendSlide = function(e, t, n) {
        if (!e)
            return;
        return e.nodeType ? i._extendSwiperSlide(e).append() : i.createSlide(e, t, n).append()
    },
    i.prependSlide = function(e, t, n) {
        if (!e)
            return;
        return e.nodeType ? i._extendSwiperSlide(e).prepend() : i.createSlide(e, t, n).prepend()
    },
    i.insertSlideAfter = function(e, t, n, r) {
        return typeof e == "undefined" ? !1 : t.nodeType ? i._extendSwiperSlide(t).insertAfter(e) : i.createSlide(t, n, r).insertAfter(e)
    },
    i.removeSlide = function(e) {
        if (i.slides[e]) {
            if (t.loop) {
                if (!i.slides[e + i.loopedSlides])
                    return !1;
                i.slides[e + i.loopedSlides].remove(),
                i.removeLoopedSlides(),
                i.calcSlides(),
                i.createLoop()
            } else
                i.slides[e].remove();
            return !0
        }
        return !1
    },
    i.removeLastSlide = function() {
        return i.slides.length > 0 ? (t.loop ? (i.slides[i.slides.length - 1 - i.loopedSlides].remove(), i.removeLoopedSlides(), i.calcSlides(), i.createLoop()) : i.slides[i.slides.length - 1].remove(), !0) : !1
    },
    i.removeAllSlides = function() {
        for (var e = i.slides.length - 1; e >= 0; e--)
            i.slides[e].remove()
    },
    i.getSlide = function(e) {
        return i.slides[e]
    },
    i.getLastSlide = function() {
        return i.slides[i.slides.length - 1]
    },
    i.getFirstSlide = function() {
        return i.slides[0]
    },
    i.activeSlide = function() {
        return i.slides[i.activeIndex]
    },
    i.fireCallback = function() {
        var e = arguments[0];
        if (Object.prototype.toString.call(e) === "[object Array]")
            for (var n = 0; n < e.length; n++)
                typeof e[n] == "function" && e[n](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        else
            Object.prototype.toString.call(e) === "[object String]" ? t["on" + e] && i.fireCallback(t["on" + e], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : e(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
    },
    i.addCallback = function(e, t) {
        var n = this,
            r;
        if (!n.params["on" + e])
            return this.params["on" + e] = [], this.params["on" + e].push(t);
        if (b(this.params["on" + e]))
            return this.params["on" + e].push(t);
        if (typeof this.params["on" + e] == "function")
            return r = this.params["on" + e], this.params["on" + e] = [], this.params["on" + e].push(r), this.params["on" + e].push(t)
    },
    i.removeCallbacks = function(e) {
        i.params["on" + e] && (i.params["on" + e] = null)
    };
    var w = [];
    for (var E in i.plugins)
        if (t[E]) {
            var S = i.plugins[E](i, t[E]);
            S && w.push(S)
        }
    i.callPlugins = function(e, t) {
        t || (t = {});
        for (var n = 0; n < w.length; n++)
            e in w[n] && w[n][e](t)
    },
    (i.browser.ie10 || i.browser.ie11) && !t.onlyExternal && i.wrapper.classList.add("swiper-wp8-" + (d ? "horizontal" : "vertical")),
    t.freeMode && (i.container.className += " swiper-free-mode"),
    i.initialized = !1,
    i.init = function(e, n) {
        var r = i.h.getWidth(i.container, !1, t.roundLengths),
            s = i.h.getHeight(i.container, !1, t.roundLengths);
        if (r === i.width && s === i.height && !e)
            return;
        i.width = r,
        i.height = s;
        var a,
            f,
            c,
            h,
            p,
            v,
            m;
        l = d ? r : s;
        var g = i.wrapper;
        e && i.calcSlides(n);
        if (t.slidesPerView === "auto") {
            var y = 0,
                b = 0;
            t.slidesOffset > 0 && (g.style.paddingLeft = "", g.style.paddingRight = "", g.style.paddingTop = "", g.style.paddingBottom = ""),
            g.style.width = "",
            g.style.height = "",
            t.offsetPxBefore > 0 && (d ? i.wrapperLeft = t.offsetPxBefore : i.wrapperTop = t.offsetPxBefore),
            t.offsetPxAfter > 0 && (d ? i.wrapperRight = t.offsetPxAfter : i.wrapperBottom = t.offsetPxAfter),
            t.centeredSlides && (d ? (i.wrapperLeft = (l - this.slides[0].getWidth(!0, t.roundLengths)) / 2, i.wrapperRight = (l - i.slides[i.slides.length - 1].getWidth(!0, t.roundLengths)) / 2) : (i.wrapperTop = (l - i.slides[0].getHeight(!0, t.roundLengths)) / 2, i.wrapperBottom = (l - i.slides[i.slides.length - 1].getHeight(!0, t.roundLengths)) / 2)),
            d ? (i.wrapperLeft >= 0 && (g.style.paddingLeft = i.wrapperLeft + "px"), i.wrapperRight >= 0 && (g.style.paddingRight = i.wrapperRight + "px")) : (i.wrapperTop >= 0 && (g.style.paddingTop = i.wrapperTop + "px"), i.wrapperBottom >= 0 && (g.style.paddingBottom = i.wrapperBottom + "px")),
            v = 0;
            var w = 0;
            i.snapGrid = [],
            i.slidesGrid = [],
            c = 0;
            for (m = 0; m < i.slides.length; m++) {
                a = i.slides[m].getWidth(!0, t.roundLengths),
                f = i.slides[m].getHeight(!0, t.roundLengths),
                t.calculateHeight && (c = Math.max(c, f));
                var E = d ? a : f;
                if (t.centeredSlides) {
                    var S = m === i.slides.length - 1 ? 0 : i.slides[m + 1].getWidth(!0, t.roundLengths),
                        x = m === i.slides.length - 1 ? 0 : i.slides[m + 1].getHeight(!0, t.roundLengths),
                        T = d ? S : x;
                    if (E > l) {
                        if (t.slidesPerViewFit)
                            i.snapGrid.push(v + i.wrapperLeft),
                            i.snapGrid.push(v + E - l + i.wrapperLeft);
                        else
                            for (var N = 0; N <= Math.floor(E / (l + i.wrapperLeft)); N++)
                                N === 0 ? i.snapGrid.push(v + i.wrapperLeft) : i.snapGrid.push(v + i.wrapperLeft + l * N);
                        i.slidesGrid.push(v + i.wrapperLeft)
                    } else
                        i.snapGrid.push(w),
                        i.slidesGrid.push(w);
                    w += E / 2 + T / 2
                } else {
                    if (E > l)
                        if (t.slidesPerViewFit)
                            i.snapGrid.push(v),
                            i.snapGrid.push(v + E - l);
                        else if (l !== 0)
                            for (var C = 0; C <= Math.floor(E / l); C++)
                                i.snapGrid.push(v + l * C);
                        else
                            i.snapGrid.push(v);
                    else
                        i.snapGrid.push(v);
                    i.slidesGrid.push(v)
                }
                v += E,
                y += a,
                b += f
            }
            t.calculateHeight && (i.height = c),
            d ? (u = y + i.wrapperRight + i.wrapperLeft, g.style.width = y + "px", g.style.height = i.height + "px") : (u = b + i.wrapperTop + i.wrapperBottom, g.style.width = i.width + "px", g.style.height = b + "px")
        } else if (t.scrollContainer)
            g.style.width = "",
            g.style.height = "",
            h = i.slides[0].getWidth(!0, t.roundLengths),
            p = i.slides[0].getHeight(!0, t.roundLengths),
            u = d ? h : p,
            g.style.width = h + "px",
            g.style.height = p + "px",
            o = d ? h : p;
        else {
            if (t.calculateHeight) {
                c = 0,
                p = 0,
                d || (i.container.style.height = ""),
                g.style.height = "";
                for (m = 0; m < i.slides.length; m++)
                    i.slides[m].style.height = "",
                    c = Math.max(i.slides[m].getHeight(!0), c),
                    d || (p += i.slides[m].getHeight(!0));
                f = c,
                i.height = f,
                d ? p = f : (l = f, i.container.style.height = l + "px")
            } else
                f = d ? i.height : i.height / t.slidesPerView,
                t.roundLengths && (f = Math.round(f)),
                p = d ? i.height : i.slides.length * f;
            a = d ? i.width / t.slidesPerView : i.width,
            t.roundLengths && (a = Math.round(a)),
            h = d ? i.slides.length * a : i.width,
            o = d ? a : f,
            t.offsetSlidesBefore > 0 && (d ? i.wrapperLeft = o * t.offsetSlidesBefore : i.wrapperTop = o * t.offsetSlidesBefore),
            t.offsetSlidesAfter > 0 && (d ? i.wrapperRight = o * t.offsetSlidesAfter : i.wrapperBottom = o * t.offsetSlidesAfter),
            t.offsetPxBefore > 0 && (d ? i.wrapperLeft = t.offsetPxBefore : i.wrapperTop = t.offsetPxBefore),
            t.offsetPxAfter > 0 && (d ? i.wrapperRight = t.offsetPxAfter : i.wrapperBottom = t.offsetPxAfter),
            t.centeredSlides && (d ? (i.wrapperLeft = (l - o) / 2, i.wrapperRight = (l - o) / 2) : (i.wrapperTop = (l - o) / 2, i.wrapperBottom = (l - o) / 2)),
            d ? (i.wrapperLeft > 0 && (g.style.paddingLeft = i.wrapperLeft + "px"), i.wrapperRight > 0 && (g.style.paddingRight = i.wrapperRight + "px")) : (i.wrapperTop > 0 && (g.style.paddingTop = i.wrapperTop + "px"), i.wrapperBottom > 0 && (g.style.paddingBottom = i.wrapperBottom + "px")),
            u = d ? h + i.wrapperRight + i.wrapperLeft : p + i.wrapperTop + i.wrapperBottom,
            t.cssWidthAndHeight || (parseFloat(h) > 0 && (g.style.width = h + "px"), parseFloat(p) > 0 && (g.style.height = p + "px")),
            v = 0,
            i.snapGrid = [],
            i.slidesGrid = [];
            for (m = 0; m < i.slides.length; m++)
                i.snapGrid.push(v),
                i.slidesGrid.push(v),
                v += o,
                t.cssWidthAndHeight || (parseFloat(a) > 0 && (i.slides[m].style.width = a + "px"), parseFloat(f) > 0 && (i.slides[m].style.height = f + "px"))
        }
        i.initialized ? (i.callPlugins("onInit"), t.onInit && i.fireCallback(t.onInit, i)) : (i.callPlugins("onFirstInit"), t.onFirstInit && i.fireCallback(t.onFirstInit, i)),
        i.initialized = !0
    },
    i.reInit = function(e) {
        i.init(!0, e)
    },
    i.resizeFix = function(e) {
        i.callPlugins("beforeResizeFix"),
        i.init(t.resizeReInit || e),
        t.freeMode ? i.getWrapperTranslate() < -x() && (i.setWrapperTransition(0), i.setWrapperTranslate(-x())) : (i.swipeTo(t.loop ? i.activeLoopIndex : i.activeIndex, 0, !1), t.autoplay && (i.support.transitions && typeof G != "undefined" ? typeof G != "undefined" && (clearTimeout(G), G = undefined, i.startAutoplay()) : typeof Y != "undefined" && (clearInterval(Y), Y = undefined, i.startAutoplay()))),
        i.callPlugins("afterResizeFix")
    },
    i.destroy = function() {
        var e = i.h.removeEventListener,
            n = t.eventTarget === "wrapper" ? i.wrapper : i.container;
        !i.browser.ie10 && !i.browser.ie11 ? (i.support.touch && (e(n, "touchstart", I), e(n, "touchmove", U), e(n, "touchend", z)), t.simulateTouch && (e(n, "mousedown", I), e(document, "mousemove", U), e(document, "mouseup", z))) : (e(n, i.touchEvents.touchStart, I), e(document, i.touchEvents.touchMove, U), e(document, i.touchEvents.touchEnd, z)),
        t.autoResize && e(window, "resize", i.resizeFix),
        C(),
        t.paginationClickable && J(),
        t.mousewheelControl && i._wheelEvent && e(i.container, i._wheelEvent, A),
        t.keyboardControl && e(document, "keydown", k),
        t.autoplay && i.stopAutoplay(),
        i.callPlugins("onDestroy"),
        i = null
    },
    i.disableKeyboardControl = function() {
        t.keyboardControl = !1,
        i.h.removeEventListener(document, "keydown", k)
    },
    i.enableKeyboardControl = function() {
        t.keyboardControl = !0,
        i.h.addEventListener(document, "keydown", k)
    };
    var L = (new Date).getTime();
    i.disableMousewheelControl = function() {
        return i._wheelEvent ? (t.mousewheelControl = !1, i.h.removeEventListener(i.container, i._wheelEvent, A), !0) : !1
    },
    i.enableMousewheelControl = function() {
        return i._wheelEvent ? (t.mousewheelControl = !0, i.h.addEventListener(i.container, i._wheelEvent, A), !0) : !1
    };
    if (t.grabCursor) {
        var O = i.container.style;
        O.cursor = "move",
        O.cursor = "grab",
        O.cursor = "-moz-grab",
        O.cursor = "-webkit-grab"
    }
    i.allowSlideClick = !0,
    i.allowLinks = !0;
    var B = !1,
        j,
        F = !0,
        q,
        R;
    i.swipeNext = function(e) {
        !e && t.loop && i.fixLoop(),
        !e && t.autoplay && i.stopAutoplay(!0),
        i.callPlugins("onSwipeNext");
        var n = i.getWrapperTranslate(),
            r = n;
        if (t.slidesPerView === "auto") {
            for (var s = 0; s < i.snapGrid.length; s++)
                if (-n >= i.snapGrid[s] && -n < i.snapGrid[s + 1]) {
                    r = -i.snapGrid[s + 1];
                    break
                }
        } else {
            var u = o * t.slidesPerGroup;
            r = -(Math.floor(Math.abs(n) / Math.floor(u)) * u + u)
        }
        return r < -x() && (r = -x()), r === n ? !1 : (V(r, "next"), !0)
    },
    i.swipePrev = function(e) {
        !e && t.loop && i.fixLoop(),
        !e && t.autoplay && i.stopAutoplay(!0),
        i.callPlugins("onSwipePrev");
        var n = Math.ceil(i.getWrapperTranslate()),
            r;
        if (t.slidesPerView === "auto") {
            r = 0;
            for (var s = 1; s < i.snapGrid.length; s++) {
                if (-n === i.snapGrid[s]) {
                    r = -i.snapGrid[s - 1];
                    break
                }
                if (-n > i.snapGrid[s] && -n < i.snapGrid[s + 1]) {
                    r = -i.snapGrid[s];
                    break
                }
            }
        } else {
            var u = o * t.slidesPerGroup;
            r = -(Math.ceil(-n / u) - 1) * u
        }
        return r > 0 && (r = 0), r === n ? !1 : (V(r, "prev"), !0)
    },
    i.swipeReset = function() {
        i.callPlugins("onSwipeReset");
        var e = i.getWrapperTranslate(),
            n = o * t.slidesPerGroup,
            r,
            s = -x();
        if (t.slidesPerView === "auto") {
            r = 0;
            for (var u = 0; u < i.snapGrid.length; u++) {
                if (-e === i.snapGrid[u])
                    return;
                if (-e >= i.snapGrid[u] && -e < i.snapGrid[u + 1]) {
                    i.positions.diff > 0 ? r = -i.snapGrid[u + 1] : r = -i.snapGrid[u];
                    break
                }
            }
            -e >= i.snapGrid[i.snapGrid.length - 1] && (r = -i.snapGrid[i.snapGrid.length - 1]),
            e <= -x() && (r = -x())
        } else
            r = e < 0 ? Math.round(e / n) * n : 0;
        return t.scrollContainer && (r = e < 0 ? e : 0), r < -x() && (r = -x()), t.scrollContainer && l > o && (r = 0), r === e ? !1 : (V(r, "reset"), !0)
    },
    i.swipeTo = function(e, n, r) {
        e = parseInt(e, 10),
        i.callPlugins("onSwipeTo", {
            index: e,
            speed: n
        }),
        t.loop && (e += i.loopedSlides);
        var s = i.getWrapperTranslate();
        if (e > i.slides.length - 1 || e < 0)
            return;
        var u;
        return t.slidesPerView === "auto" ? u = -i.slidesGrid[e] : u = -e * o, u < -x() && (u = -x()), u === s ? !1 : (r = r === !1 ? !1 : !0, V(u, "to", {
            index: e,
            speed: n,
            runCallbacks: r
        }), !0)
    },
    i._queueStartCallbacks = !1,
    i._queueEndCallbacks = !1,
    i.updateActiveSlide = function(e) {
        if (!i.initialized)
            return;
        if (i.slides.length === 0)
            return;
        i.previousIndex = i.activeIndex,
        typeof e == "undefined" && (e = i.getWrapperTranslate()),
        e > 0 && (e = 0);
        var n;
        if (t.slidesPerView === "auto") {
            var r = 0;
            i.activeIndex = i.slidesGrid.indexOf(-e);
            if (i.activeIndex < 0) {
                for (n = 0; n < i.slidesGrid.length - 1; n++)
                    if (-e > i.slidesGrid[n] && -e < i.slidesGrid[n + 1])
                        break;
                var s = Math.abs(i.slidesGrid[n] + e),
                    u = Math.abs(i.slidesGrid[n + 1] + e);
                s <= u ? i.activeIndex = n : i.activeIndex = n + 1
            }
        } else
            i.activeIndex = Math[t.visibilityFullFit ? "ceil" : "round"](-e / o);
        i.activeIndex === i.slides.length && (i.activeIndex = i.slides.length - 1),
        i.activeIndex < 0 && (i.activeIndex = 0);
        if (!i.slides[i.activeIndex])
            return;
        i.calcVisibleSlides(e);
        if (i.support.classList) {
            var a;
            for (n = 0; n < i.slides.length; n++)
                a = i.slides[n],
                a.classList.remove(t.slideActiveClass),
                i.visibleSlides.indexOf(a) >= 0 ? a.classList.add(t.slideVisibleClass) : a.classList.remove(t.slideVisibleClass);
            i.slides[i.activeIndex].classList.add(t.slideActiveClass)
        } else {
            var f = new RegExp("\\s*" + t.slideActiveClass),
                l = new RegExp("\\s*" + t.slideVisibleClass);
            for (n = 0; n < i.slides.length; n++)
                i.slides[n].className = i.slides[n].className.replace(f, "").replace(l, ""),
                i.visibleSlides.indexOf(i.slides[n]) >= 0 && (i.slides[n].className += " " + t.slideVisibleClass);
            i.slides[i.activeIndex].className += " " + t.slideActiveClass
        }
        if (t.loop) {
            var c = i.loopedSlides;
            i.activeLoopIndex = i.activeIndex - c,
            i.activeLoopIndex >= i.slides.length - c * 2 && (i.activeLoopIndex = i.slides.length - c * 2 - i.activeLoopIndex),
            i.activeLoopIndex < 0 && (i.activeLoopIndex = i.slides.length - c * 2 + i.activeLoopIndex),
            i.activeLoopIndex < 0 && (i.activeLoopIndex = 0)
        } else
            i.activeLoopIndex = i.activeIndex;
        t.pagination && i.updatePagination(e)
    },
    i.createPagination = function(e) {
        t.paginationClickable && i.paginationButtons && J(),
        i.paginationContainer = t.pagination.nodeType ? t.pagination : r(t.pagination)[0];
        if (t.createPagination) {
            var n = "",
                s = i.slides.length,
                o = s;
            t.loop && (o -= i.loopedSlides * 2);
            for (var u = 0; u < o; u++)
                n += "<" + t.paginationElement + ' class="' + t.paginationElementClass + '"></' + t.paginationElement + ">";
            i.paginationContainer.innerHTML = n
        }
        i.paginationButtons = r("." + t.paginationElementClass, i.paginationContainer),
        e || i.updatePagination(),
        i.callPlugins("onCreatePagination"),
        t.paginationClickable && K()
    },
    i.updatePagination = function(e) {
        if (!t.pagination)
            return;
        if (i.slides.length < 1)
            return;
        var n = r("." + t.paginationActiveClass, i.paginationContainer);
        if (!n)
            return;
        var s = i.paginationButtons;
        if (s.length === 0)
            return;
        for (var o = 0; o < s.length; o++)
            s[o].className = t.paginationElementClass;
        var u = t.loop ? i.loopedSlides : 0;
        if (t.paginationAsRange) {
            i.visibleSlides || i.calcVisibleSlides(e);
            var a = [],
                f;
            for (f = 0; f < i.visibleSlides.length; f++) {
                var l = i.slides.indexOf(i.visibleSlides[f]) - u;
                t.loop && l < 0 && (l = i.slides.length - i.loopedSlides * 2 + l),
                t.loop && l >= i.slides.length - i.loopedSlides * 2 && (l = i.slides.length - i.loopedSlides * 2 - l, l = Math.abs(l)),
                a.push(l)
            }
            for (f = 0; f < a.length; f++)
                s[a[f]] && (s[a[f]].className += " " + t.paginationVisibleClass);
            t.loop ? s[i.activeLoopIndex] !== undefined && (s[i.activeLoopIndex].className += " " + t.paginationActiveClass) : s[i.activeIndex].className += " " + t.paginationActiveClass
        } else
            t.loop ? s[i.activeLoopIndex] && (s[i.activeLoopIndex].className += " " + t.paginationActiveClass + " " + t.paginationVisibleClass) : s[i.activeIndex].className += " " + t.paginationActiveClass + " " + t.paginationVisibleClass
    },
    i.calcVisibleSlides = function(e) {
        var n = [],
            r = 0,
            s = 0,
            u = 0;
        d && i.wrapperLeft > 0 && (e += i.wrapperLeft),
        !d && i.wrapperTop > 0 && (e += i.wrapperTop);
        for (var a = 0; a < i.slides.length; a++) {
            r += s,
            t.slidesPerView === "auto" ? s = d ? i.h.getWidth(i.slides[a], !0, t.roundLengths) : i.h.getHeight(i.slides[a], !0, t.roundLengths) : s = o,
            u = r + s;
            var f = !1;
            t.visibilityFullFit ? (r >= -e && u <= -e + l && (f = !0), r <= -e && u >= -e + l && (f = !0)) : (u > -e && u <= -e + l && (f = !0), r >= -e && r < -e + l && (f = !0), r < -e && u > -e + l && (f = !0)),
            f && n.push(i.slides[a])
        }
        n.length === 0 && (n = [i.slides[i.activeIndex]]),
        i.visibleSlides = n
    };
    var G,
        Y;
    i.startAutoplay = function() {
        if (i.support.transitions) {
            if (typeof G != "undefined")
                return !1;
            if (!t.autoplay)
                return;
            i.callPlugins("onAutoplayStart"),
            t.onAutoplayStart && i.fireCallback(t.onAutoplayStart, i),
            Z()
        } else {
            if (typeof Y != "undefined")
                return !1;
            if (!t.autoplay)
                return;
            i.callPlugins("onAutoplayStart"),
            t.onAutoplayStart && i.fireCallback(t.onAutoplayStart, i),
            Y = setInterval(function() {
                t.loop ? (i.fixLoop(), i.swipeNext(!0)) : i.swipeNext(!0) || (t.autoplayStopOnLast ? (clearInterval(Y), Y = undefined) : i.swipeTo(0))
            }, t.autoplay)
        }
    },
    i.stopAutoplay = function(e) {
        if (i.support.transitions) {
            if (!G)
                return;
            G && clearTimeout(G),
            G = undefined,
            e && !t.autoplayDisableOnInteraction && i.wrapperTransitionEnd(function() {
                Z()
            }),
            i.callPlugins("onAutoplayStop"),
            t.onAutoplayStop && i.fireCallback(t.onAutoplayStop, i)
        } else
            Y && clearInterval(Y),
            Y = undefined,
            i.callPlugins("onAutoplayStop"),
            t.onAutoplayStop && i.fireCallback(t.onAutoplayStop, i)
    },
    i.loopCreated = !1,
    i.removeLoopedSlides = function() {
        if (i.loopCreated)
            for (var e = 0; e < i.slides.length; e++)
                i.slides[e].getData("looped") === !0 && i.wrapper.removeChild(i.slides[e])
    },
    i.createLoop = function() {
        if (i.slides.length === 0)
            return;
        t.slidesPerView === "auto" ? i.loopedSlides = t.loopedSlides || 1 : i.loopedSlides = t.slidesPerView + t.loopAdditionalSlides,
        i.loopedSlides > i.slides.length && (i.loopedSlides = i.slides.length);
        var e = "",
            n = "",
            r,
            o = "",
            u = i.slides.length,
            a = Math.floor(i.loopedSlides / u),
            f = i.loopedSlides % u;
        for (r = 0; r < a * u; r++) {
            var l = r;
            if (r >= u) {
                var c = Math.floor(r / u);
                l = r - u * c
            }
            o += i.slides[l].outerHTML
        }
        for (r = 0; r < f; r++)
            n += X(t.slideDuplicateClass, i.slides[r].outerHTML);
        for (r = u - f; r < u; r++)
            e += X(t.slideDuplicateClass, i.slides[r].outerHTML);
        var h = e + o + s.innerHTML + o + n;
        s.innerHTML = h,
        i.loopCreated = !0,
        i.calcSlides();
        for (r = 0; r < i.slides.length; r++)
            (r < i.loopedSlides || r >= i.slides.length - i.loopedSlides) && i.slides[r].setData("looped", !0);
        i.callPlugins("onCreateLoop")
    },
    i.fixLoop = function() {
        var e;
        if (i.activeIndex < i.loopedSlides)
            e = i.slides.length - i.loopedSlides * 3 + i.activeIndex,
            i.swipeTo(e, 0, !1);
        else if (t.slidesPerView === "auto" && i.activeIndex >= i.loopedSlides * 2 || i.activeIndex > i.slides.length - t.slidesPerView * 2)
            e = -i.slides.length + i.activeIndex + i.loopedSlides,
            i.swipeTo(e, 0, !1)
    },
    i.loadSlides = function() {
        var e = "";
        i.activeLoaderIndex = 0;
        var n = t.loader.slides,
            r = t.loader.loadAllSlides ? n.length : t.slidesPerView * (1 + t.loader.surroundGroups);
        for (var s = 0; s < r; s++)
            t.loader.slidesHTMLType === "outer" ? e += n[s] : e += "<" + t.slideElement + ' class="' + t.slideClass + '" data-swiperindex="' + s + '">' + n[s] + "</" + t.slideElement + ">";
        i.wrapper.innerHTML = e,
        i.calcSlides(!0),
        t.loader.loadAllSlides || i.wrapperTransitionEnd(i.reloadSlides, !0)
    },
    i.reloadSlides = function() {
        var e = t.loader.slides,
            n = parseInt(i.activeSlide().data("swiperindex"), 10);
        if (n < 0 || n > e.length - 1)
            return;
        i.activeLoaderIndex = n;
        var r = Math.max(0, n - t.slidesPerView * t.loader.surroundGroups),
            s = Math.min(n + t.slidesPerView * (1 + t.loader.surroundGroups) - 1, e.length - 1);
        if (n > 0) {
            var u = -o * (n - r);
            i.setWrapperTranslate(u),
            i.setWrapperTransition(0)
        }
        var a;
        if (t.loader.logic === "reload") {
            i.wrapper.innerHTML = "";
            var f = "";
            for (a = r; a <= s; a++)
                f += t.loader.slidesHTMLType === "outer" ? e[a] : "<" + t.slideElement + ' class="' + t.slideClass + '" data-swiperindex="' + a + '">' + e[a] + "</" + t.slideElement + ">";
            i.wrapper.innerHTML = f
        } else {
            var l = 1e3,
                c = 0;
            for (a = 0; a < i.slides.length; a++) {
                var h = i.slides[a].data("swiperindex");
                h < r || h > s ? i.wrapper.removeChild(i.slides[a]) : (l = Math.min(h, l), c = Math.max(h, c))
            }
            for (a = r; a <= s; a++) {
                var p;
                a < l && (p = document.createElement(t.slideElement), p.className = t.slideClass, p.setAttribute("data-swiperindex", a), p.innerHTML = e[a], i.wrapper.insertBefore(p, i.wrapper.firstChild)),
                a > c && (p = document.createElement(t.slideElement), p.className = t.slideClass, p.setAttribute("data-swiperindex", a), p.innerHTML = e[a], i.wrapper.appendChild(p))
            }
        }
        i.reInit(!0)
    },
    et()
};
Swiper.prototype = {
    plugins: {},
    wrapperTransitionEnd: function(e, t) {
        "use strict";
        function o() {
            e(n),
            n.params.queueEndCallbacks && (n._queueEndCallbacks = !1);
            if (!t)
                for (s = 0; s < i.length; s++)
                    n.h.removeEventListener(r, i[s], o)
        }
        var n = this,
            r = n.wrapper,
            i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            s;
        if (e)
            for (s = 0; s < i.length; s++)
                n.h.addEventListener(r, i[s], o)
    },
    getWrapperTranslate: function(e) {
        "use strict";
        var t = this.wrapper,
            n,
            r,
            i,
            s;
        return typeof e == "undefined" && (e = this.params.mode === "horizontal" ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (i = window.getComputedStyle(t, null), window.WebKitCSSMatrix ? s = new WebKitCSSMatrix(i.webkitTransform === "none" ? "" : i.webkitTransform) : (s = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = s.toString().split(",")), e === "x" && (window.WebKitCSSMatrix ? r = s.m41 : n.length === 16 ? r = parseFloat(n[12]) : r = parseFloat(n[4])), e === "y" && (window.WebKitCSSMatrix ? r = s.m42 : n.length === 16 ? r = parseFloat(n[13]) : r = parseFloat(n[5]))) : (e === "x" && (r = parseFloat(t.style.left, 10) || 0), e === "y" && (r = parseFloat(t.style.top, 10) || 0)), r || 0
    },
    setWrapperTranslate: function(e, t, n) {
        "use strict";
        var r = this.wrapper.style,
            i = {
                x: 0,
                y: 0,
                z: 0
            },
            s;
        arguments.length === 3 ? (i.x = e, i.y = t, i.z = n) : (typeof t == "undefined" && (t = this.params.mode === "horizontal" ? "x" : "y"), i[t] = e),
        this.support.transforms && this.params.useCSS3Transforms ? (s = this.support.transforms3d ? "translate3d(" + i.x + "px, " + i.y + "px, " + i.z + "px)" : "translate(" + i.x + "px, " + i.y + "px)", r.webkitTransform = r.MsTransform = r.msTransform = r.MozTransform = r.OTransform = r.transform = s) : (r.left = i.x + "px", r.top = i.y + "px"),
        this.callPlugins("onSetWrapperTransform", i),
        this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, i)
    },
    setWrapperTransition: function(e) {
        "use strict";
        var t = this.wrapper.style;
        t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e / 1e3 + "s",
        this.callPlugins("onSetWrapperTransition", {
            duration: e
        }),
        this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, e)
    },
    h: {
        getWidth: function(e, t, n) {
            "use strict";
            var r = window.getComputedStyle(e, null).getPropertyValue("width"),
                i = parseFloat(r);
            if (isNaN(i) || r.indexOf("%") > 0)
                i = e.offsetWidth - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-right"));
            return t && (i += parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-right"))), n ? Math.round(i) : i
        },
        getHeight: function(e, t, n) {
            "use strict";
            if (t)
                return e.offsetHeight;
            var r = window.getComputedStyle(e, null).getPropertyValue("height"),
                i = parseFloat(r);
            if (isNaN(i) || r.indexOf("%") > 0)
                i = e.offsetHeight - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-bottom"));
            return t && (i += parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(e, null).getPropertyValue("padding-bottom"))), n ? Math.round(i) : i
        },
        getOffset: function(e) {
            "use strict";
            var t = e.getBoundingClientRect(),
                n = document.body,
                r = e.clientTop || n.clientTop || 0,
                i = e.clientLeft || n.clientLeft || 0,
                s = window.pageYOffset || e.scrollTop,
                o = window.pageXOffset || e.scrollLeft;
            return document.documentElement && !window.pageYOffset && (s = document.documentElement.scrollTop, o = document.documentElement.scrollLeft), {
                top: t.top + s - r,
                left: t.left + o - i
            }
        },
        windowWidth: function() {
            "use strict";
            if (window.innerWidth)
                return window.innerWidth;
            if (document.documentElement && document.documentElement.clientWidth)
                return document.documentElement.clientWidth
        },
        windowHeight: function() {
            "use strict";
            if (window.innerHeight)
                return window.innerHeight;
            if (document.documentElement && document.documentElement.clientHeight)
                return document.documentElement.clientHeight
        },
        windowScroll: function() {
            "use strict";
            if (typeof pageYOffset != "undefined")
                return {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                };
            if (document.documentElement)
                return {
                    left: document.documentElement.scrollLeft,
                    top: document.documentElement.scrollTop
                }
        },
        addEventListener: function(e, t, n, r) {
            "use strict";
            typeof r == "undefined" && (r = !1),
            e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent && e.attachEvent("on" + t, n)
        },
        removeEventListener: function(e, t, n, r) {
            "use strict";
            typeof r == "undefined" && (r = !1),
            e.removeEventListener ? e.removeEventListener(t, n, r) : e.detachEvent && e.detachEvent("on" + t, n)
        }
    },
    setTransform: function(e, t) {
        "use strict";
        var n = e.style;
        n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = t
    },
    setTranslate: function(e, t) {
        "use strict";
        var n = e.style,
            r = {
                x: t.x || 0,
                y: t.y || 0,
                z: t.z || 0
            },
            i = this.support.transforms3d ? "translate3d(" + r.x + "px," + r.y + "px," + r.z + "px)" : "translate(" + r.x + "px," + r.y + "px)";
        n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = i,
        this.support.transforms || (n.left = r.x + "px", n.top = r.y + "px")
    },
    setTransition: function(e, t) {
        "use strict";
        var n = e.style;
        n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = t + "ms"
    },
    support: {
        touch: window.Modernizr && Modernizr.touch === !0 || function() {
            "use strict";
            return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
        }(),
        transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
            "use strict";
            var e = document.createElement("div").style;
            return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
        }(),
        transforms: window.Modernizr && Modernizr.csstransforms === !0 || function() {
            "use strict";
            var e = document.createElement("div").style;
            return "transform" in e || "WebkitTransform" in e || "MozTransform" in e || "msTransform" in e || "MsTransform" in e || "OTransform" in e
        }(),
        transitions: window.Modernizr && Modernizr.csstransitions === !0 || function() {
            "use strict";
            var e = document.createElement("div").style;
            return "transition" in e || "WebkitTransition" in e || "MozTransition" in e || "msTransition" in e || "MsTransition" in e || "OTransition" in e
        }(),
        classList: function() {
            "use strict";
            var e = document.createElement("div").style;
            return "classList" in e
        }()
    },
    browser: {
        ie8: function() {
            "use strict";
            var e = -1;
            if (navigator.appName === "Microsoft Internet Explorer") {
                var t = navigator.userAgent,
                    n = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
                n.exec(t) !== null && (e = parseFloat(RegExp.$1))
            }
            return e !== -1 && e < 9
        }(),
        ie10: window.navigator.msPointerEnabled,
        ie11: window.navigator.pointerEnabled
    }
},
(window.jQuery || window.Zepto) && function(e) {
    "use strict";
    e.fn.swiper = function(t) {
        var n = new Swiper(e(this)[0], t);
        return e(this).data("swiper", n), n
    }
}(window.jQuery || window.Zepto),
typeof module != "undefined" && (module.exports = Swiper),
typeof define == "function" && define.amd && define("lib-app/swiper/idangerous.swiper", [], function() {
    "use strict";
    return Swiper
}),
define("lib-build/css!lib-app/swiper/idangerous.swiper", [], function() {}),
function(e) {
    typeof define == "function" && define.amd ? define("lib-app/jquery.mousewheel", ["jquery"], e) : typeof exports == "object" ? module.exports = e : e(jQuery)
}(function(e) {
    function a(t) {
        var n = t ? t.originalEvent || t : window.event,
            s = r.call(arguments, 1);
        return t = u._fix(n), s.unshift(t), i && clearTimeout(i), i = setTimeout(f, 200), e.event.dispatch.apply(this, s)
    }
    function f() {
        s = null
    }
    function l(e, t) {
        return u.settings.adjustOldDeltas && e.type === "mousewheel" && t % 120 === 0
    }
    function c(e, t) {
        e.preventDefault === !0 && t.preventDefault(),
        e.stopPropagation === !0 && t.stopPropagation()
    }
    var t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        n = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        r = Array.prototype.slice,
        i,
        s;
    for (var o = t.length; o;)
        e.event.fixHooks[t[--o]] = e.event.mouseHooks;
    var u = e.event.special.mousewheel = {
        version: "4.0.0-pre",
        setup: function() {
            if (this.addEventListener)
                for (var t = n.length; t;)
                    this.addEventListener(n[--t], a, !1);
            else
                this.onmousewheel = a;
            e.data(this, "mousewheel-line-height", u._getLineHeight(this)),
            e.data(this, "mousewheel-page-height", u._getPageHeight(this))
        },
        add: function(e) {
            var t = e.data,
                n = t && t.mousewheel;
            n && (("throttle" in n || "debounce" in n) && u._delayHandler.call(this, e), "intent" in n && u._intentHandler.call(this, e))
        },
        trigger: function(e, t) {
            return t || (t = e, e = null), a.call(this, t), !1
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = n.length; e;)
                    this.removeEventListener(n[--e], a, !1);
            else
                this.onmousewheel = null
        },
        _getLineHeight: function(t) {
            return parseInt(e(t).offsetParent().css("fontSize"), 10)
        },
        _getPageHeight: function(t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: !0
        },
        trigger: function(e, t) {
            return t || (t = e, e = null), a.call(this, t), !1
        },
        _fix: function(t) {
            var n = 0,
                r = 0,
                i = 0,
                o = e.event.fix(t);
            "detail" in t && (r = t.detail),
            "wheelDelta" in t && (r = t.wheelDelta * -1),
            "wheelDeltaY" in t && (r = t.wheelDeltaY * -1),
            "wheelDeltaX" in t && (n = t.wheelDeltaX * -1),
            "axis" in t && t.axis === t.HORIZONTAL_AXIS && (n = r, r = 0),
            "deltaY" in t && (r = t.deltaY),
            "deltaX" in t && (n = t.deltaX);
            if (r === 0 && n === 0)
                return;
            if (t.deltaMode === 1) {
                var u = e.data(this, "mousewheel-line-height") || 1;
                r *= u,
                n *= u
            } else if (t.deltaMode === 2) {
                var a = e.data(this, "mousewheel-page-height");
                r *= a,
                n *= a
            }
            i = Math.max(Math.abs(r), Math.abs(n));
            if (!s || i < s)
                s = i,
                l(t, i) && (s /= 40);
            return l(t, i) && (delta /= 40, n /= 40, r /= 40), n = Math[n >= 1 ? "floor" : "ceil"](n / s), r = Math[r >= 1 ? "floor" : "ceil"](r / s), o.deltaX = n, o.deltaY = r, o.deltaFactor = s, o.deltaMode = 0, o.type = "mousewheel", o
        },
        _intentHandler: function(t) {
            var n,
                r,
                i,
                s,
                o,
                u = !1,
                a = this,
                f = t.data.mousewheel.intent,
                l = f.interval || 100,
                h = f.sensitivity || 7,
                p = t.handler,
                d = function(e) {
                    s = e.pageX,
                    o = e.pageY
                },
                v = function() {
                    Math.abs(r - s) + Math.abs(i - o) < h ? (e(a).off("mousemove", d), u = !0) : (r = s, i = o, n = setTimeout(v, l))
                },
                m = function(e) {
                    if (u)
                        return p.apply(a, arguments);
                    c(f, e)
                };
            e(a).on("mouseenter", function() {
                r = event.pageX,
                i = event.pageY,
                e(a).on("mousemove", d),
                n = setTimeout(v, l)
            }).on("mouseleave", function() {
                n && clearTimeout(n),
                e(a).off("mousemove", d),
                u = !1
            }),
            t.handler = m
        },
        _delayHandler: function(e) {
            var t,
                n,
                r,
                i = this,
                s = "throttle" in e.data.mousewheel ? "throttle" : "debounce",
                o = e.data.mousewheel[s],
                u = "leading" in o ? o.leading : s === "debounce" ? !1 : !0,
                a = "trailing" in o ? o.trailing : !0,
                f = o.delay || 100,
                l = s === "throttle" ? f : o.maxDelay,
                h = e.handler,
                p = function(e) {
                    var p = arguments,
                        d = function() {
                            n && clearTimeout(n),
                            t = null,
                            n = null,
                            r = null
                        },
                        v = function() {
                            return r = +(new Date), h.apply(i, p)
                        },
                        m = function() {
                            return n = null, v()
                        },
                        g = function() {
                            d();
                            if (a)
                                return v()
                        },
                        y;
                    return t ? clearTimeout(t) : u && (y = v()), t = setTimeout(g, f), s === "throttle" ? l && +(new Date) - r >= l && (y = m()) : l && !n && (n = setTimeout(m, l)), c(o, e), y
                };
            e.handler = p
        }
    }
}),
define("storymaps/tpl/ui/desktop/FloatingPanel", ["lib-build/tpl!./FloatingPanelSection", "lib-build/css!./FloatingPanel", "lib-build/css!./Common", "lib-build/css!storymaps/common/builder/InlineFieldEdit", "./DotNavBar", "../StoryText", "storymaps/common/utils/HeaderHelper", "storymaps/common/utils/CommonHelper", "storymaps/common/utils/SocialSharing", "dojo/has", "dojo/topic", "lib-app/jquery.hammer.min", "lib-app/jquery", "lib-app/swiper/idangerous.swiper", "lib-build/css!lib-app/swiper/idangerous.swiper", "lib-app/jquery.mousewheel"], function(e, t, n, r, i, s, o, u, a, f, l) {
    return function(n, r, c) {
        function w(e, t) {
            var i = "";
            $.each(e, function(e, t) {
                i += S(e, t.status, t.content, t.title, t.OBJECTID)
            }),
            n.find(".appTitle").html(e.length ? e[0].title : ""),
            n.find(".swiper-wrapper").html(s.prepareSectionPanelContent(i)),
            n.show(),
            x(t),
            h.resize(),
            p.resizeFix(),
            f("chrome") && setTimeout(function() {
                n.find(".section").eq(0).find(".title").css("margin-top", n.find(".section").eq(0).find(".title").css("margin-top"))
            }, 200),
            n.find(".panelEditBtn").toggle(!!(r && e && e.length));
            var o = n.find(".title");
            o.focus(function() {
                !$(this).data("mouseDown") && !$(this).parents(".section").hasClass("swiper-slide-active") && M($(this).parents(".section").index())
            }).mousedown(function() {
                $(this).data("mouseDown", !0)
            }).mouseup(function() {
                $(this).removeData("mouseDown")
            }),
            o.each(function(e, t) {
                var n = $(t),
                    r = n,
                    i = r.siblings(".content").find("[tabindex=0]");
                i.length && (r = i.last()),
                r.on("keydown", function(t) {
                    if (t.keyCode === 9 && !t.shiftKey)
                        return window != window.top ? !0 : (e < o.length - 1 ? (M(e + 1), setTimeout(function() {
                            o.eq(e + 1).focus()
                        }, 200)) : E(), !1)
                }),
                n.on("keydown", function(t) {
                    if (t.keyCode === 9 && t.shiftKey)
                        return e > 0 ? (M(e - 1), setTimeout(function() {
                            o.eq(e - 1).focus()
                        }, 200)) : E(), !1
                })
            })
        }
        function E() {
            n.find(".header").removeAttr("aria-hidden"),
            n.find(".header .linkContainer a").length ? n.find(".header .linkContainer a").attr("tabindex", "0") : n.find(".header .linkContainer").attr("tabindex", "0"),
            n.find(".header .shareIcon").attr("tabindex", "0"),
            n.find(".header .linkContainer a").length ? n.find(".header .linkContainer a")[0].focus() : n.find(".header .linkContainer").length ? n.find(".header .linkContainer")[0].focus() : n.find(".header .shareIcon:visible").length && n.find(".header .shareIcon")[0].focus()
        }
        function S(t, n, r, i) {
            var o = "";
            n != "PUBLISHED" && (o = "hidden-section");
            var u = a.cleanURL(document.location.href, !0);
            return u += u.match(/\?/) ? "&" : "?", u += "section=" + (t + 1), e({
                optHtmlClass: o,
                title: s.prepareEditorContent(i),
                content: s.prepareEditorContent(r, !0),
                lblShare: i18n.viewer.headerFromCommon.share,
                shareURL: u,
                scroll: i18n.viewer.floatLayout.scroll
            })
        }
        function x(e) {
            p = new Swiper(n.find(".swiper-container")[0], {
                mode: "vertical",
                loop: !1,
                keyboardControl: !0,
                cssWidthAndHeight: !0,
                onlyExternal: !0,
                onSlideNext: function(e) {
                    if (e.activeIndex == 1)
                        return !1;
                    B(),
                    N(n.find(".swiper-slide").eq(e.previousIndex)),
                    O()
                },
                onSlidePrev: function(e) {
                    B(),
                    N(n.find(".swiper-slide").eq(e.previousIndex)),
                    O()
                },
                onSlideChangeEnd: function(e) {
                    y != e.activeIndex && (N(n.find(".swiper-slide").eq(y)), s.loadSectionIframe(n.find(".section").eq(e.activeIndex)), c(e.activeIndex))
                },
                onSlideClick: function() {},
                initialSlide: e
            })
        }
        function T(e) {
            n.toggleClass("section-social-links", e.socialLinks),
            n.css("width", e.layoutCfg.sizeVal),
            $("body").removeClass("layout-float-left layout-float-right").addClass(e.layoutCfg.position == "right" ? "layout-float-right" : "layout-float-left")
        }
        function N(e) {
            var t = e.find(".content iframe[data-unload=true]");
            t.length && setTimeout(function() {
                t.each(function(e, t) {
                    var n = $(t);
                    n.attr("src", "")
                })
            }, 150)
        }
        function C(e) {
            o.setLogo(n, e),
            o.setLink(n, e),
            o.setSocial(n, e),
            o.initEvents(n, "bottom")
        }
        function k(e) {
            b.update({
                bgColor: e.dotNav,
                tooltipBgColor: e.text,
                tooltipFontColor: e.panel,
                activeColor: e.dotNavActive || ""
            }),
            n.find(".backdrop, .panelEditBtn").css("background-color", e.panel),
            n.css("color", e.text),
            n.find(".backdrop").css("opacity", e.panelOpa || ""),
            n.find(".scroll").css({
                background: "linear-gradient(transparent, " + e.panel + ")"
            })
        }
        function L(e, t) {
            var r = n.find(".swiper-container").height();
            if (t && n.find(".swiper-slide-active .section-inner").height() < r)
                return;
            g = !0,
            A(),
            n.find(".scroll").show(),
            n.find(".scrollInner").tooltip({
                title: i18n.viewer.sideLayout.scroll,
                trigger: "hover"
            }),
            u.addCSSRule(".scroll .tooltip-inner { background-color: " + e.text + "; color: " + e.panel + "; }"),
            u.addCSSRule(".scroll .tooltip-arrow { border-top-color: " + e.text + " !important; }"),
            n.find(".scroll").click(function() {
                n.find(".scroll .tooltip").remove(),
                _({
                    deltaY: 1
                }, !0)
            })
        }
        function A() {}
        function O() {
            g && (n.find(".scroll").slideUp(), setTimeout(function() {
                n.find(".swiper-wrapper").css({
                    height: "initial",
                    overflow: "initial"
                })
            }, 200), g = !1)
        }
        function M(e) {
            N(n.find(".swiper-slide-visible")),
            O(),
            h.showSectionNumber(e, !0),
            c(e)
        }
        function _(e, t) {
            var r = e.deltaY * -1,
                i = !1;
            f("mac") && (r /= 40);
            if (n.find(".builder-mask").is(":visible"))
                return !1;
            O();
            if (d) {
                var s = n.find(".swiper-slide.swiper-slide-active"),
                    o = s.outerHeight(),
                    u = s.scrollTop(),
                    a = s.prop("scrollHeight");
                r < 0 && o + u >= a - 1 ? (v || t ? (p.swipeNext(), P()) : D(), s.index() == s.parent().children().length - 1 && (i = !0)) : r > 0 && u === 0 ? (v ? (p.swipePrev(), P()) : D(), s.index() === 0 && (i = !0)) : (v = !1, s.scrollTop(u - 30 * r))
            }
            return i
        }
        function D() {
            v = !0,
            d = !1,
            setTimeout(function() {
                d = !0
            }, f("mac") ? 1400 : 500)
        }
        function P() {
            f("mac") && (d = !1, setTimeout(function() {
                d = !0
            }, 1200))
        }
        function H() {
            v = !0,
            d = !1,
            setTimeout(function() {
                d = !0
            }, 700)
        }
        function B() {
            var e = $(".swiper-slide-active").index() > 0,
                t = n.find(".appTitle").hasClass("anchored");
            e != t && (n.find(".appTitle").toggleClass("anchored", e), n.find(".header").toggleClass("titleanchored", e), setTimeout(function() {
                h.resize()
            }, 350), setTimeout(function() {
                h.resize()
            }, 500))
        }
        function j(e) {
            if (!p)
                return;
            e.keyCode == 34 ? p.swipeNext() : e.keyCode == 33 ? p.swipePrev() : e.keyCode == 36 ? p.swipeTo(0) : e.keyCode == 35 && p.swipeTo(n.find(".swiper-slide").length - 1)
        }
        function F() {}
        function I() {
            app.builder.openEditPopup({
                sectionIndex: h.getSectionNumber(),
                displayTab: "content"
            })
        }
        function q() {
            return n.find(".check-story").hide(), !n.find(".check-story").is(":visible") && !n.find(".share-story").is(":visible") && n.find(".error-status").removeClass("enabled"), !1
        }
        function R() {
            return n.find(".share-story").hide(), !n.find(".check-story").is(":visible") && !n.find(".share-story").is(":visible") && n.find(".error-status").removeClass("enabled"), !1
        }
        function U(e) {
            var t = n.find(".check-story"),
                r = $('<span aria-hidden="true" class="check-story-close">×</span>'),
                i = $('<span aria-hidden="true" class="check-story-close">×</span>');
            t.off("click").removeClass("forceEvent").show(),
            r.click(q),
            i.click(R),
            e == "start" ? t.html('<span class="small-loader"></span>' + i18n.viewer.headerFromCommon.checking).append(r).css("cursor", "default") : e == "error" ? t.html(i18n.viewer.headerFromCommon.fix).append(r).css("cursor", "pointer").click(u.switchToBuilder).removeClass("btn-warning").addClass("btn-danger") : t.html(i18n.viewer.headerFromCommon.noerrors).append(r).removeClass("btn-warning").addClass("btn-success"),
            (f("ff") || f("ie") || f("trident") == 7) && e != "error" && t.click(q).addClass("forceEvent");
            var s = n.find(".share-story").html(i18n.viewer.headerFromCommon.notshared).append(i).toggle(app.data.getWebAppItem().access == "private" || app.data.getWebAppItem().access == "shared"),
                o = s.css("background-color"),
                a = app.data.getWebAppData().getTheme().colors;
            o && a && a.panel && u.colorsAreSimilar(o, a.panel) && s.css("box-shadow", "0 0 2px 1px white")
        }
        function z() {
            n.on("mousewheel", _),
            f("touch") && (Hammer(n.find(".swiper-container")[0], {}).on("dragstart", function() {
                m = 0,
                v = !1
            }), Hammer(n.find(".swiper-container")[0], {}).on("drag", function(e) {
                var t = n.find(".swiper-slide.swiper-slide-active"),
                    r = t.outerHeight(),
                    i = t.scrollTop(),
                    s = t.prop("scrollHeight");
                if (!d)
                    return;
                n.find(".swiper-slide.swiper-slide-active").scrollTop(n.find(".swiper-slide.swiper-slide-active").scrollTop() - e.gesture.deltaY + m),
                r + i >= s && e.gesture.deltaY < 0 ? v || m === 0 ? p.swipeNext() : H() : i === 0 && e.gesture.deltaY > 0 && (v || m === 0 ? p.swipePrev() : H()),
                m = e.gesture.deltaY
            })),
            o.initEvents(n),
            app.map && app.map.disableKeyboardNavigation(),
            r && n.find(".panelEditBtn").off("click").click(I),
            $(document).keyup(j)
        }
        var h = this,
            p = null,
            d = !0,
            v = !0,
            m = null,
            g = !1,
            y = null,
            b = new i(n.find(".navDots"), M);
        this.init = function(e, t, i, s, o) {
            p != null && this.destroy(),
            y = null,
            T(i),
            k(o),
            C(s),
            z(),
            w(e, t),
            r && F(),
            b.init({
                sections: e,
                sectionIndex: t,
                bgColor: o.dotNav,
                tooltipBgColor: o.text,
                tooltipFontColor: o.panel,
                dotColor: o.softBtn,
                activeColor: o.dotNavActive || "",
                tooltipPosition: i.layoutCfg.position == "left" ? "right" : "left"
            }),
            n.find(".sections .shareIcon").toggleClass("active", i.socialLinks),
            r || (setTimeout(function() {
                L(o, t == e.length - 1)
            }, 50), e.length == 1 && (n.find(".navDots").hide(), n.find(".sections").css(i.layoutCfg.position == "left" ? "padding-left" : "padding-right", "3%")), app.userCanEdit && f("ie") != 9 && !u.getUrlParams().preview && (n.find(".error-status").addClass("enabled"), l.subscribe("MYSTORIES_SCAN", U), U("start")))
        },
        this.update = function(e, t, n) {
            T(e),
            k(n),
            C(t),
            b.updateTooltipPlacement(e.layoutCfg.position == "left" ? "right" : "left")
        },
        this.resize = function() {
            var e = n.height() - n.find(".separator").position().top - (r ? n.find(".builder-content-panel").outerHeight() + 12 : 3);
            g && A(),
            n.find(".swiper-container, .sections, .section").css("height", e),
            n.find(".sections").css("bottom", r ? n.find(".builder-content-panel").outerHeight() + 4 : 1),
            p && p.resizeFix()
        },
        this.showSectionNumber = function(e, t) {
            if (!p)
                return;
            if (!n.is(":visible"))
                return;
            if (y != e || t)
                s.loadSectionIframe(n.find(".section").eq(e)),
                b.setActive(e),
                p.swipeTo(e),
                y = e,
                n.find(".swiper-slide-visible").length && (n.find(".swiper-slide-visible")[0].scrollTop = 0),
                setTimeout(function() {
                    p && p.resizeFix()
                }, 50),
                O();
            B()
        },
        this.getSectionNumber = function() {
            return p ? p.activeIndex : null
        },
        this.destroy = function() {
            p = null,
            d = !0,
            v = !0,
            b.destroy(),
            n.off("mousewheel"),
            $(document).unbind("keyup", j),
            app.map && (app.map.enableScrollWheelZoom(), app.map.enableKeyboardNavigation()),
            n.find(".share_facebook").off("click"),
            n.find(".share_twitter").off("click"),
            n.find(".share_bitly").off("click"),
            n.hide()
        },
        this.toggleSwitchBuilderButton = function(e) {
            var t = n.find(".switchBuilder").html('<span class="glyphicon glyphicon-cog"></span>' + i18n.viewer.headerFromCommon.builderButton + '<span aria-hidden="true" class="switch-builder-close">×</span>').off("click").click(u.switchToBuilder).toggle(e),
                r = t.css("background-color"),
                i = app.data.getWebAppData().getTheme().colors;
            r && i && i.panel && u.colorsAreSimilar(r, i.panel) && t.css("box-shadow", "0 0 2px 1px white"),
            f("ff") || f("ie") || f("trident") == 7 ? t.find(".switch-builder-close").hide() : t.find(".switch-builder-close").click(function() {
                return t.hide(), $(window).resize(), !1
            })
        },
        this.enableAutoplay = function() {
            o.disableSocialBtnAppSharingAutoplay(n)
        },
        this.toggleSocialBtnAppSharing = function(e) {
            o.toggleSocialBtnAppSharing(n, e)
        },
        this.enableSwiperKeybordEvent = function() {
            p.enableKeyboardControl(),
            $(document).keyup(j)
        },
        this.disableSwiperKeybordEvent = function() {
            p.disableKeyboardControl(),
            $(document).unbind("keyup", j)
        }
    }
}),
define("lib-build/tpl!storymaps/tpl/ui/mobile/FloatingSwiperSection", [], function() {
    return function(obj) {
        obj || (obj = {});
        var __t,
            __p = "",
            __e = _.escape;
        with (obj)
            __p += '<div class="section swiper-slide">\n	<div class="title">' + ((__t = title) == null ? "" : __t) + '</div>\n	<div class="content">\n		' + ((__t = content) == null ? "" : __t) + '\n		<div class="social">\n			<span class="shareIcon share_facebook icon-facebook-squared" data-url="' + ((__t = shareURL) == null ? "" : __t) + '"> Facebook</span>\n			<span class="shareIcon share_twitter icon-twitter" data-url="' + ((__t = shareURL) == null ? "" : __t) + '"> Twitter</span>\n			<span class="shareIcon share_bitly icon-link" data-url="' + ((__t = shareURL) == null ? "" : __t) + '"> ' + ((__t = lblShare) == null ? "" : __t) + '</span>\n		</div>\n	</div>\n	<p class="help">\n		<span class="btnIcon glyphicon glyphicon-fullscreen"></span>' + ((__t = lblTapDetails) == null ? "" : __t) + '\n		<span class="swipe-invite"><span class="btnIcon glyphicon glyphicon-resize-horizontal"></span>' + ((__t = lblSwipe) == null ? "" : __t) + '</span>\n	</p>\n	<p class="help-embed">\n		<span class="btnIcon glyphicon glyphicon-fullscreen"></span>' + ((__t = lblClickDetails) == null ? "" : __t) + '\n	</p>\n	<p class="expanded-close">\n		<span class="btnIcon backmap"></span>' + ((__t = lblTapMap) == null ? "" : __t) + '\n		<span class="swipe-invite"><span class="btnIcon glyphicon glyphicon-resize-horizontal"></span>' + ((__t = lblSwipe) == null ? "" : __t) + '</span>\n	</p>\n	<p class="expanded-close-embed">\n		<span class="embed-btn2 embed-btn2-left"></span>\n		<button class="btn btn-primary backmap2">' + ((__t = lblClickMap) == null ? "" : __t) + '</button>\n		<span class="embed-btn2 embed-btn2-right"></span>\n	</p>\n</div>\n';
        return __p
    }
}),
define("lib-build/css!storymaps/tpl/ui/mobile/FloatingSwiper", [], function() {}),
define("storymaps/tpl/ui/mobile/FloatingSwiper", ["lib-build/tpl!./FloatingSwiperSection", "lib-build/css!./FloatingSwiper", "../StoryText", "storymaps/common/utils/HeaderHelper", "storymaps/common/utils/SocialSharing", "dojo/has", "lib-app/swiper/idangerous.swiper", "lib-app/jquery", "lib-build/css!lib-app/swiper/idangerous.swiper"], function(e, t, n, r, i, s, o) {
    return function(u, a, f) {
        function p(e) {
            var t = "";
            h = 0,
            c = null,
            $.each(e, function(e, n) {
                t += d(n.status, n.title, n.content)
            }),
            u.find(".swiper-wrapper").html(n.prepareSectionPanelContent(t)),
            u.find(".section").eq(0).addClass("active"),
            u.find(".swiper-container, .header").show(),
            l = new o(u.find(".swiper-container")[0], {
                mode: "horizontal",
                loop: !1,
                keyboardControl: !1,
                onSlideChangeEnd: function(e) {
                    c != e.activeIndex && (m(u.find(".swiper-slide").eq(c)), f(e.activeIndex)),
                    v(),
                    l.resizeFix()
                },
                onSlideClick: function(e) {
                    if (u.hasClass("hasDesktopBtn") && u.hasClass("expanded") && ($(e.clickedTarget).hasClass("embed-btn2") || $(e.clickedTarget).hasClass("shareIcon")))
                        return;
                    b()
                }
            }),
            v(),
            (s("ie") || s("trident")) && u.find(".title, .help-embed").css("padding-right", 0)
        }
        function d(t, r, s) {
            h++;
            var o = i.cleanURL(document.location.href, !0);
            return o += o.match(/\?/) ? "&" : "?", o += "section=" + h, e({
                title: $("<div>" + n.prepareEditorContent(r) + "</div>").text(),
                content: n.prepareEditorContent(s),
                lblShare: i18n.viewer.headerFromCommon.share,
                shareURL: o,
                lblTapDetails: i18n.viewer.mobileView.tapForDetails,
                lblClickDetails: i18n.viewer.mobileView.clickForDetails.toUpperCase(),
                lblSwipe: i18n.viewer.mobileView.swipeToExplore,
                lblTapMap: i18n.viewer.mobileView.tapForMap,
                lblClickMap: i18n.viewer.mobileView.clickForMap
            })
        }
        function v() {
            u.find(".embed-btn-left, .embed-btn2-left").toggleClass("disabled", l.activeIndex === 0),
            u.find(".embed-btn-right, .embed-btn2-right").toggleClass("disabled", l.activeIndex === l.slides.length - 1)
        }
        function m(e) {
            var t = e.find(".content iframe[data-unload=true]");
            t.length && setTimeout(function() {
                t.each(function(e, t) {
                    var n = $(t);
                    n.attr("src", "")
                })
            }, 150)
        }
        function g(e) {
            r.setSocial(u, e),
            r.setLink(u, e),
            u.find(".header").toggle(!!(e.linkText || e.linkURL || e.socialBtn.bitly || e.socialBtn.facebook || e.socialBtn.twitter))
        }
        function y(e) {
            u.find(".backdrop").css("background-color", e.panel),
            u.find(".linkContainer").css("color", e.text),
            u.css("color", e.text)
        }
        function b() {
            location.hash = u.hasClass("expanded") ? "map" : "detail"
        }
        function w() {
            r.initEvents(u, "top"),
            u.find(".embed-btn, .embed-btn2").click(function() {
                var e = $(this).parent();
                e.hasClass("disabled") || (e.hasClass("embed-btn-left") || $(this).hasClass("embed-btn2-left") ? l.swipePrev() : l.swipeNext())
            })
        }
        var l = null,
            c = null,
            h = -1;
        this.init = function(e, t, n, r) {
            y(r),
            g(n),
            $("body").hasClass("hasTouch") || u.addClass("hasDesktopBtn"),
            p(e),
            w(),
            !a && e.length == 1 && u.find(".swipe-invite").hide()
        },
        this.update = function(e, t) {
            y(t),
            g(e)
        },
        this.resize = function() {
            l && l.resizeFix()
        },
        this.showSectionNumber = function(e) {
            if (!l)
                return;
            if (!u.is(":visible"))
                return;
            c != e && (n.loadSectionIframe(u.find(".section").eq(e)), l.swipeTo(e), c = e)
        },
        this.getSectionNumber = function() {
            return l ? l.activeIndex : null
        },
        this.setView = function(e) {
            u.toggleClass("expanded", e == "detail"),
            $("body").toggleClass("mobile-view-expanded", e == "detail"),
            l && l.resizeFix()
        },
        this.enableAutoplay = function() {
            r.disableSocialBtnAppSharingAutoplay(u, "top")
        },
        this.toggleSocialBtnAppSharing = function(e) {
            r.toggleSocialBtnAppSharing(u, e)
        }
    }
}),
define("lib-build/css!storymaps/common/mapcontrols/command/MapCommand", [], function() {}),
define("storymaps/common/mapcontrols/command/MapCommand", ["lib-build/css!./MapCommand", "dojo/has", "esri/geometry/Point", "dojo/on", "esri/symbols/PictureMarkerSymbol", "esri/layers/GraphicsLayer", "esri/graphic", "esri/config"], function(e, t, n, r, i, s, o, u) {
    return function(a, f, l, c) {
        function m(e) {
            if (e)
                $(a.container).find(".mapCommandHomeBtn").addClass("loading"),
                h = Date.now();
            else {
                var t = Date.now() - h,
                    n = 0;
                t < 450 && (n = 450 - t),
                setTimeout(function() {
                    $(a.container).find(".mapCommandHomeBtn").removeClass("loading"),
                    h = 0
                }, n)
            }
        }
        function g() {
            navigator.geolocation.getCurrentPosition(function(e) {
                var t = new n(e.coords.longitude, e.coords.latitude);
                l && typeof l == "function" && l(!0, t, e);
                if (a.spatialReference.wkid != 102100 && a.spatialReference.wkid != 4326) {
                    u.defaults.geometryService.project([t], a.spatialReference, function(e) {
                        if (!e || !e[0])
                            return;
                        y(e[0])
                    });
                    return
                }
                y(t)
            }, b, {
                timeout: 2e3
            })
        }
        function y(e) {
            v.clear(),
            v.add(new o(e, d)),
            setTimeout(function() {
                $("#locateLayer" + a.id + "_layer image").fadeOut({
                    duration: 800
                })
            }, 1e4)
        }
        function b(e) {
            l(!1, e)
        }
        var h = 0,
            p = $('<div class="esriSimpleSliderIncrementButton"><div class="mapCommandHomeBtn"></div></div>'),
            d = new i("resources/common/icons/mapcommand-location-marker.png", 21, 21),
            v = new s({
                id: "locateLayer" + a.id
            });
        p.click(function() {
            if (h !== 0 && $("body").hasClass("mobile-view"))
                return;
            f && typeof f == "function" ? f(a._params.extent) : a.setExtent(a._params.extent)
        }),
        $(a.container).find(".esriSimpleSlider div:nth-child(1)").after(p),
        r(a, "update-start", function() {
            h === 0 && m(!0)
        }),
        r(a, "update-end", function() {
            m(!1)
        }),
        this.setMobile = function(e) {
            $(".esriSimpleSlider, .mapCommandHomeBtn", a.container).toggleClass("touch", e)
        },
        this.destroy = function() {
            $(a.container).find(".esriSimpleSliderIncrementButton").remove(),
            $(a.container).find(".mapCommandLocation").remove()
        },
        this.startLoading = function() {
            m(!0)
        },
        this.stopLoading = function() {
            m(!1)
        },
        this.enableLocationButton = function(e) {
            $(".mapCommandLocation", a.container).toggleClass("hidden", !e)
        },
        navigator && navigator.geolocation && ($(".esriSimpleSlider", a.container).after('<div class="esriSimpleSlider esriSimpleSliderVertical mapCommandLocation"></div>'), $(".mapCommandLocation", a.container).click(g), this.enableLocationButton(c), a.addLayer(v)),
        this.setMobile(!!t("touch"))
    }
}),
define("lib-build/tpl!storymaps/common/mapcontrols/legend/Legend", [], function() {
    return function(obj) {
        function print() {
            __p += __j.call(arguments, "")
        }
        obj || (obj = {});
        var __t,
            __p = "",
            __e = _.escape,
            __j = Array.prototype.join;
        with (obj)
            __p += '<div class="legendContainer mapControls">\n	<div class="titleBtn">\n		<span class="collapseBtn">\n			<div class="glyphicon glyphicon-chevron-down"></div>\n			<div class="glyphicon glyphicon-chevron-up"></div>\n		</span>\n		' + ((__t = title) == null ? "" : __t) + '\n	</div>\n\n	<div class="content">\n		<div class="legendDijitContainer"></div>\n		',
            isInBuilder && (__p += '\n			<div class="settingsGear glyphicon glyphicon-wrench"></div>\n			<div class="settingsOverlay">\n				<div class="settings-title">' + ((__t = settings) == null ? "" : __t) + '</div>\n				<div class="settings-content">\n					<!-- Open by default -->\n					<div class="checkbox">\n						<label>\n							<input type="checkbox" class="expandStartup" />\n							' + ((__t = openDefault) == null ? "" : __t) + "\n						</label>\n					</div>\n				</div>\n			</div>\n		"),
            __p += "\n	</div>\n</div>\n";
        return __p
    }
}),
define("lib-build/css!storymaps/common/mapcontrols/legend/Legend", [], function() {}),
define("lib-build/css!storymaps/common/mapcontrols/Common", [], function() {}),
define("storymaps/common/mapcontrols/legend/Legend", ["lib-build/tpl!./Legend", "lib-build/css!./Legend", "lib-build/css!../Common", "esri/dijit/Legend", "esri/arcgis/utils", "dojo/topic"], function(e, t, n, r, i, s) {
    return function(n, o, u) {
        function c() {
            o.find(".legendDijitContainer").html('<div class="legendDijit"></div>'),
            a = new r({
                map: n.map,
                layerInfos: i.getLegendLayers(n)
            }, o.find(".legendDijit")[0]),
            a.startup()
        }
        function h() {
            a && a.destroy(),
            a = null
        }
        function p() {
            o.find(".legendContainer").toggleClass("collapsed"),
            o.find(".settingsOverlay").hide()
        }
        function d() {
            o.find(".titleBtn").click(p),
            o.find(".settingsGear").click(function() {
                o.find(".settingsOverlay").is(":visible") ? o.off("mouseleave") : o.mouseleave(function() {
                    o.find(".settingsOverlay").toggle(),
                    o.off("mouseleave"),
                    o.find(".content").removeClass("settingsOpen")
                }),
                o.find(".settingsOverlay").toggle(),
                o.find(".content").toggleClass("settingsOpen")
            }),
            o.find(".expandStartup").change(v)
        }
        function v() {
            f.openByDefault = o.find(".expandStartup").prop("checked"),
            s.publish("BUILDER_INCREMENT_COUNTER", 1)
        }
        var a = null,
            f = null,
            l = {
                isInBuilder: u,
                title: i18n.viewer.legendFromCommon.title
            };
        u && (l.settings = i18n.commonMapControls.common.settings, l.openDefault = i18n.commonMapControls.common.openDefault),
        o.append(e(l)),
        this.toggle = function(e) {
            o.toggle(!!e),
            e && !a ? c() : e || h()
        },
        this.toggleExpanded = function(e) {
            o.find(".legendContainer").toggleClass("collapsed", !e)
        },
        this.setColors = function(e) {
            o.find(".legendContainer").css({
                backgroundColor: e.dotNav,
                color: e.text
            });
            var t = !1;
            e.name && e.name.match(/-org$|-modified$/) && (t = !0),
            o.find(".legendContainer .content").toggleClass("full-bg", t),
            o.find(".titleBtn").css("color", e.softText),
            o.find(".settingsGear, .collapseBtn").css("color", e.softBtn)
        },
        this.setSettings = function(e) {
            f = e,
            o.find(".expandStartup").prop("checked", f.openByDefault)
        },
        d()
    }
}),
define("lib-build/tpl!storymaps/common/mapcontrols/overview/Overview", [], function() {
    return function(obj) {
        function print() {
            __p += __j.call(arguments, "")
        }
        obj || (obj = {});
        var __t,
            __p = "",
            __e = _.escape,
            __j = Array.prototype.join;
        with (obj)
            __p += '<div class="overviewContainer mapControls">\n	<div class="titleBtn">\n		<span class="collapseBtn">\n			<div class="glyphicon glyphicon-chevron-down"></div>\n			<div class="glyphicon glyphicon-chevron-up"></div>\n		</span>\n		' + ((__t = title) == null ? "" : __t) + '\n	</div>\n\n	<div class="content">\n		<div class="overviewMapContainer">\n			<!-- Map is injected here -->\n		</div>\n		',
            isInBuilder && (__p += '\n			<div class="settingsGear glyphicon glyphicon-wrench"></div>\n			<div class="settingsOverlay">\n				<div class="settings-title">' + ((__t = settings) == null ? "" : __t) + '</div>\n				<div class="settings-content">\n					<!-- Open by default -->\n					<div class="checkbox">\n						<label>\n							<input type="checkbox" class="expandStartup" />\n							' + ((__t = openDefault) == null ? "" : __t) + '\n						</label>\n					</div>\n\n					<!-- Basemap -->\n					<div class="btn-group dropup basemap-dropdown">\n						<button type="button" class="btn btn-default btn-sm dropdown-toggle basemapBtn" data-toggle="dropdown">\n							' + ((__t = basemapGalleryBtnLabel) == null ? "" : __t) + ' <span class="caret"></span>\n						</button>\n						<ul class="dropdown-menu basemaps dropdown-menu-form pull-right" role="menu"></ul>\n					</div>\n					<div id="basemapGallery"></div>\n\n					<!-- Expand factor -->\n					<div class="spinnerLabel">\n						<label for="expandFactorSpinner">' + ((__t = expandFactorLabel) == null ? "" : __t) + '</label>\n						<a class="locateBtnHelp" data-original-title="" title="">\n							<img src="resources/tpl/builder/icons/builder-help.png" style="vertical-align: -5px;">\n						</a>\n					</div>\n\n					<div class="input-group expandFactorSpinner">\n						<input type="text" class="form-control input-small input-xs" id="expandFactorSpinner" value="2">\n						<div class="input-group-btn-vertical">\n							<button class="btn btn-default btn-xs"><i class="glyphicon glyphicon-chevron-up"></i></button>\n							<button class="btn btn-default btn-xs"><i class="glyphicon glyphicon-chevron-down"></i></button>\n						</div>\n					</div>\n				</div>\n			</div>\n		'),
            __p += "\n	</div>\n</div>\n";
        return __p
    }
}),
define("lib-build/css!storymaps/common/mapcontrols/overview/Overview", [], function() {}),
define("storymaps/common/mapcontrols/overview/Overview", ["lib-build/tpl!./Overview", "lib-build/css!./Overview", "lib-build/css!../Common", "esri/dijit/OverviewMap", "esri/dijit/BasemapGallery", "esri/layers/ArcGISTiledMapServiceLayer", "esri/arcgis/utils", "dojo/Deferred", "dojo/dom", "dojo/on", "dojo/topic"], function(e, t, n, r, i, s, o, u, a, f, l) {
    return function(n, i, s) {
        function c(e) {
            i.find(".overviewMapContainer").html('<div class="overviewMap"></div>'),
            o = new r({
                map: n,
                visible: !0,
                color: "transparent",
                opacity: 1
            }, i.find(".overviewMap")[0]),
            o.startup();
            var t = e ? e.dotNav : a;
            t && i.find(".ovwHighlight").css("border", "3px solid " + t)
        }
        function h() {
            o && o.destroy(),
            o = null
        }
        function p() {
            i.find(".overviewContainer").toggleClass("collapsed"),
            i.find(".settingsOverlay").hide()
        }
        function d() {
            i.find(".titleBtn").click(p),
            i.find(".settingsGear").click(function() {
                i.find(".settingsOverlay").is(":visible") ? i.off("mouseleave") : i.mouseleave(function() {
                    i.find(".settingsOverlay").toggle(),
                    i.off("mouseleave")
                }),
                i.find(".settingsOverlay").toggle()
            }),
            i.find(".expandStartup").change(v)
        }
        function v() {
            u.openByDefault = i.find(".expandStartup").prop("checked"),
            l.publish("BUILDER_INCREMENT_COUNTER", 1)
        }
        var o = null,
            u = null,
            a = null,
            f = {
                isInBuilder: s,
                title: i18n.viewer.overviewFromCommon.title,
                overlayHeader: "",
                basemapGalleryBtnLabel: "",
                expandFactorLabel: ""
            };
        s && (f.settings = i18n.commonMapControls.common.settings, f.openDefault = i18n.commonMapControls.common.openDefault, f.basemapGalleryBtnLabel = i18n.commonMapControls.overview.basemapGalleryBtnLabel, f.expandFactorLabel = i18n.commonMapControls.overview.expandFactorLabel),
        i.append(e(f)),
        this.toggle = function(e, t) {
            i.toggle(!!e),
            e && !o ? c(t) : e || h()
        },
        this.toggleExpanded = function(e) {
            i.find(".overviewContainer").toggleClass("collapsed", !e)
        },
        this.setColors = function(e) {
            a = e.dotNav,
            i.find(".overviewContainer").css({
                backgroundColor: e.dotNav,
                color: e.text
            }),
            i.find(".titleBtn").css("color", e.softText),
            i.find(".settingsGear, .collapseBtn").css("color", e.softBtn),
            i.find(".ovwHighlight").css("border", "3px solid " + e.dotNav)
        },
        this.setSettings = function(e) {
            u = e,
            i.find(".expandStartup").prop("checked", u.openByDefault)
        },
        d()
    }
}),
define("lib-build/tpl!storymaps/common/mapcontrols/geocoder/Geocoder", [], function() {
    return function(obj) {
        obj || (obj = {});
        var __t,
            __p = "",
            __e = _.escape;
        with (obj)
            __p += '<div class="geocoderBtn">\n	<div class="geocoderContainer"></div>\n</div>\n';
        return __p
    }
}),
define("lib-build/css!storymaps/common/mapcontrols/geocoder/Geocoder", [], function() {}),
define("storymaps/common/mapcontrols/geocoder/Geocoder", ["lib-build/tpl!./Geocoder", "lib-build/css!./Geocoder", "../../utils/CommonHelper"], function(e, t, n) {
    return function(r, i, s) {
        function f() {
            $(r.container).find(".esriSimpleSlider").last().after(e({})),
            l(),
            o.toggle(!1)
        }
        function l() {
            var e = $(r.container).find(".geocoderBtn");
            a = n.createGeocoder({
                map: r,
                domNode: e.find(".geocoderContainer")[0],
                enableButtonMode: !0,
                searchOptions: s
            }).then(function(t) {
                u = t,
                e.find(".esriGeocoderContainer input, .esriGeocoderSearch").attr("tabindex", "-1")
            })
        }
        var o = this,
            u = null,
            a;
        this.toggle = function(e) {
            var t = $(r.container).find(".geocoderBtn");
            !u && (!a || a.isRejected()) && l(e),
            $(r.container).toggleClass("has-geocoder", e),
            t.toggle(e)
        },
        f()
    }
}),
define("lib-build/tpl!storymaps/common/ui/autoplay/Autoplay", [], function() {
    return function(obj) {
        obj || (obj = {});
        var __t,
            __p = "",
            __e = _.escape;
        with (obj)
            __p += '<div class="autoplay-container">\n	<div class="backdrop"></div>\n	<div class="btn-play-container status-pause">\n		<span class="btn-play glyphicon glyphicon-play"></span>\n	</div>\n	<div class="slider-container ">\n		<input type="text" class="span2" value="" />\n	</div>\n</div>\n';
        return __p
    }
}),
define("lib-build/css!storymaps/common/ui/autoplay/Autoplay", [], function() {}),
!function(e) {
    var t = function(t, n) {
        this.element = e(t),
        this.picker = e('<div class="slider"><div class="slider-track"><div class="slider-selection"></div><div class="slider-handle"></div><div class="slider-handle"></div></div><div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>').insertBefore(this.element).append(this.element),
        this.id = this.element.data("slider-id") || n.id,
        this.id && (this.picker[0].id = this.id),
        typeof Modernizr != "undefined" && Modernizr.touch && (this.touchCapable = !0);
        var r = this.element.data("slider-tooltip") || n.tooltip;
        this.tooltip = this.picker.find(".tooltip"),
        this.tooltipInner = this.tooltip.find("div.tooltip-inner"),
        this.orientation = this.element.data("slider-orientation") || n.orientation;
        switch (this.orientation) {
        case "vertical":
            this.picker.addClass("slider-vertical"),
            this.stylePos = "top",
            this.mousePos = "pageY",
            this.sizePos = "offsetHeight",
            this.tooltip.addClass("right")[0].style.left = "100%";
            break;
        default:
            this.picker.addClass("slider-horizontal").css("width", this.element.outerWidth()),
            this.orientation = "horizontal",
            this.stylePos = "left",
            this.mousePos = "pageX",
            this.sizePos = "offsetWidth",
            this.tooltip.addClass("top")[0].style.top = -this.tooltip.outerHeight() - 14 + "px"
        }
        this.min = this.element.data("slider-min") || n.min,
        this.max = this.element.data("slider-max") || n.max,
        this.step = this.element.data("slider-step") || n.step,
        this.value = this.element.data("slider-value") || n.value,
        this.value[1] && (this.range = !0),
        this.selection = this.element.data("slider-selection") || n.selection,
        this.selectionEl = this.picker.find(".slider-selection"),
        this.selection === "none" && this.selectionEl.addClass("hide"),
        this.selectionElStyle = this.selectionEl[0].style,
        this.handle1 = this.picker.find(".slider-handle:first"),
        this.handle1Stype = this.handle1[0].style,
        this.handle2 = this.picker.find(".slider-handle:last"),
        this.handle2Stype = this.handle2[0].style;
        var i = this.element.data("slider-handle") || n.handle;
        switch (i) {
        case "round":
            this.handle1.addClass("round"),
            this.handle2.addClass("round");
            break;
        case "triangle":
            this.handle1.addClass("triangle"),
            this.handle2.addClass("triangle")
        }
        this.range ? (this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))) : (this.value = [Math.max(this.min, Math.min(this.max, this.value))], this.handle2.addClass("hide"), this.selection == "after" ? this.value[1] = this.max : this.value[1] = this.min),
        this.diff = this.max - this.min,
        this.percentage = [(this.value[0] - this.min) * 100 / this.diff, (this.value[1] - this.min) * 100 / this.diff, this.step * 100 / this.diff],
        this.offset = this.picker.offset(),
        this.size = this.picker[0][this.sizePos],
        this.formater = n.formater,
        this.layout(),
        this.touchCapable ? this.picker.on({
            touchstart: e.proxy(this.mousedown, this)
        }) : this.picker.on({
            mousedown: e.proxy(this.mousedown, this)
        }),
        r === "show" ? this.picker.on({
            mouseenter: e.proxy(this.showTooltip, this),
            mouseleave: e.proxy(this.hideTooltip, this)
        }) : this.tooltip.addClass("hide")
    };
    t.prototype = {
        constructor: t,
        over: !1,
        inDrag: !1,
        showTooltip: function() {
            this.tooltip.addClass("in"),
            this.over = !0
        },
        hideTooltip: function() {
            this.inDrag === !1 && this.tooltip.removeClass("in"),
            this.over = !1
        },
        layout: function() {
            this.handle1Stype[this.stylePos] = this.percentage[0] + "%",
            this.handle2Stype[this.stylePos] = this.percentage[1] + "%",
            this.orientation == "vertical" ? (this.selectionElStyle.top = Math.min(this.percentage[0], this.percentage[1]) + "%", this.selectionElStyle.height = Math.abs(this.percentage[0] - this.percentage[1]) + "%") : (this.selectionElStyle.left = Math.min(this.percentage[0], this.percentage[1]) + "%", this.selectionElStyle.width = Math.abs(this.percentage[0] - this.percentage[1]) + "%"),
            this.range ? (this.tooltipInner.text(this.formater(this.value[0]) + " : " + this.formater(this.value[1])), this.tooltip[0].style[this.stylePos] = this.size * (this.percentage[0] + (this.percentage[1] - this.percentage[0]) / 2) / 100 - (this.orientation === "vertical" ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + "px") : (this.tooltipInner.text(this.formater(this.value[0])), this.tooltip[0].style[this.stylePos] = this.size * this.percentage[0] / 100 - (this.orientation === "vertical" ? this.tooltip.outerHeight() / 2 : this.tooltip.outerWidth() / 2) + "px")
        },
        mousedown: function(t) {
            this.touchCapable && t.type === "touchstart" && (t = t.originalEvent),
            this.offset = this.picker.offset(),
            this.size = this.picker[0][this.sizePos];
            var n = this.getPercentage(t);
            if (this.range) {
                var r = Math.abs(this.percentage[0] - n),
                    i = Math.abs(this.percentage[1] - n);
                this.dragged = r < i ? 0 : 1
            } else
                this.dragged = 0;
            this.percentage[this.dragged] = n,
            this.layout(),
            this.touchCapable ? e(document).on({
                touchmove: e.proxy(this.mousemove, this),
                touchend: e.proxy(this.mouseup, this)
            }) : e(document).on({
                mousemove: e.proxy(this.mousemove, this),
                mouseup: e.proxy(this.mouseup, this)
            }),
            this.inDrag = !0;
            var s = this.calculateValue();
            return this.element.trigger({
                type: "slideStart",
                value: s
            }).trigger({
                type: "slide",
                value: s
            }), !1
        },
        mousemove: function(e) {
            this.touchCapable && e.type === "touchmove" && (e = e.originalEvent);
            var t = this.getPercentage(e);
            this.range && (this.dragged === 0 && this.percentage[1] < t ? (this.percentage[0] = this.percentage[1], this.dragged = 1) : this.dragged === 1 && this.percentage[0] > t && (this.percentage[1] = this.percentage[0], this.dragged = 0)),
            this.percentage[this.dragged] = t,
            this.layout();
            var n = this.calculateValue();
            return this.element.trigger({
                type: "slide",
                value: n
            }).data("value", n).prop("value", n), !1
        },
        mouseup: function(t) {
            this.touchCapable ? e(document).off({
                touchmove: this.mousemove,
                touchend: this.mouseup
            }) : e(document).off({
                mousemove: this.mousemove,
                mouseup: this.mouseup
            }),
            this.inDrag = !1,
            this.over == 0 && this.hideTooltip(),
            this.element;
            var n = this.calculateValue();
            return this.element.trigger({
                type: "slideStop",
                value: n
            }).data("value", n).prop("value", n), !1
        },
        calculateValue: function() {
            var e;
            return this.range ? (e = [this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step, this.min + Math.round(this.diff * this.percentage[1] / 100 / this.step) * this.step], this.value = e) : (e = this.min + Math.round(this.diff * this.percentage[0] / 100 / this.step) * this.step, this.value = [e, this.value[1]]), e
        },
        getPercentage: function(e) {
            this.touchCapable && (e = e.touches[0]);
            var t = (e[this.mousePos] - this.offset[this.stylePos]) * 100 / this.size;
            return t = Math.round(t / this.percentage[2]) * this.percentage[2], Math.max(0, Math.min(100, t))
        },
        getValue: function() {
            return this.range ? this.value : this.value[0]
        },
        setValue: function(e) {
            this.value = e,
            this.range ? (this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0])), this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]))) : (this.value = [Math.max(this.min, Math.min(this.max, this.value))], this.handle2.addClass("hide"), this.selection == "after" ? this.value[1] = this.max : this.value[1] = this.min),
            this.diff = this.max - this.min,
            this.percentage = [(this.value[0] - this.min) * 100 / this.diff, (this.value[1] - this.min) * 100 / this.diff, this.step * 100 / this.diff],
            this.layout()
        }
    },
    e.fn.slider = function(n, r) {
        return this.each(function() {
            var i = e(this),
                s = i.data("slider"),
                o = typeof n == "object" && n;
            s || i.data("slider", s = new t(this, e.extend({}, e.fn.slider.defaults, o))),
            typeof n == "string" && s[n](r)
        })
    },
    e.fn.slider.defaults = {
        min: 0,
        max: 10,
        step: 1,
        orientation: "horizontal",
        value: 5,
        selection: "before",
        tooltip: "show",
        handle: "round",
        formater: function(e) {
            return e
        }
    },
    e.fn.slider.Constructor = t
}(window.jQuery),
define("lib-app/bootstrap-slider/js/bootstrap-slider", function() {}),
define("lib-build/css!lib-app/bootstrap-slider/css/slider", [], function() {}),
define("storymaps/common/ui/autoplay/Autoplay", ["lib-build/tpl!./Autoplay", "lib-build/css!./Autoplay", "dojo/topic", "dojo/has", "lib-app/bootstrap-slider/js/bootstrap-slider", "lib-build/css!lib-app/bootstrap-slider/css/slider"], function(e, t, n, r) {
    var i = 6e3,
        s = 10;
    return function(n, o) {
        function h(e, t) {
            console.log("Autoplay: start, delay:", e, "immediate:", t),
            u = !0,
            a && clearTimeout(a),
            t ? d(e) : a = setTimeout(function() {
                d(e)
            }, e)
        }
        function p() {
            if (!u)
                return;
            console.log("Autoplay: pause"),
            u = !1,
            a && clearTimeout(a)
        }
        function d(e) {
            f = o(),
            a = setTimeout(function() {
                d(e)
            }, e)
        }
        function v() {
            return n.find(".btn-play-container").hasClass("status-play")
        }
        function m(e) {
            n.find(".btn-play-container").removeClass("status-play status-pause"),
            n.find(".btn-play").removeClass("glyphicon-play glyphicon-pause"),
            n.find(".btn-play-container").addClass(e ? "status-play" : "status-pause"),
            n.find(".btn-play").addClass(e ? "glyphicon-pause" : "glyphicon-play")
        }
        function g() {
            var e = !v();
            e ? y(!0) : p(),
            m(e)
        }
        function y(e) {
            var t = n.find(".slider input").slider("getValue").val() || s;
            h(t * 1e3, e)
        }
        function b() {
            var e = Date.now();
            l > Date.now() - 150 && n.removeClass("fade"),
            l = e
        }
        function w() {
            !c && Date.now() > l + i && n.addClass("fade")
        }
        function E() {
            n.find(".btn-play-container").click(g),
            n.find(".slider-container input").slider({
                min: 5,
                max: 60,
                value: s,
                formater: function(e) {
                    return e + "s"
                }
            }),
            n.find(".slider-container input").on("slideStop", function() {
                v() && y(!1)
            }),
            r("touch") || (l = Date.now(), n.hover(function() {
                c = !0
            }, function() {
                c = !1,
                w()
            }), $(window).mousemove(b), setInterval(w, 1e3))
        }
        var u = !1,
            a = null,
            f = null,
            l = null,
            c = !1;
        (!n || !o || typeof o != "function") && console.log("Autoplay: failed to initialize"),
        n.append(e({})).show(),
        E(),
        this.init = function(e) {
            if (!e)
                return;
            e.color && (e.useBackdrop ? (n.find(".backdrop").css({
                backgroundColor: e.color,
                display: "block"
            }), n.find(".autoplay-container").css({
                backgroundColor: "inherit"
            })) : n.find(".autoplay-container").css({
                backgroundColor: e.color
            })),
            e.themeMajor && n.addClass("theme-" + e.themeMajor)
        },
        this.start = function() {
            y(!1),
            m(!0)
        },
        this.stop = function() {
            p(),
            m(!1)
        },
        this.onNavigationEvent = function(e) {
            v() && e != f && g()
        }
    }
}),
define("lib-build/css!storymaps/common/_resources/font/sharing/css/fontello", [], function() {}),
define("lib-build/css!storymaps/common/utils/SocialSharing", [], function() {}),
define("lib-build/css!storymaps/common/ui/loadingIndicator/LoadingIndicator", [], function() {}),
define("lib-build/css!storymaps/tpl/ui/Common", [], function() {}),
define("lib-build/css!storymaps/tpl/ui/StoryText", [], function() {}),
define("lib-build/css!storymaps/tpl/ui/mobile/Common", [], function() {}),
define("lib-build/css!storymaps/tpl/ui/Responsive", [], function() {}),
define("storymaps/tpl/core/MainView", ["lib-build/css!./MainView", "../ui/MainStage", "./Config", "./Data", "./WebApplicationData", "./Helper", "../ui/desktop/SidePanel", "../ui/desktop/FloatingPanel", "../ui/mobile/FloatingSwiper", "storymaps/common/mapcontrols/command/MapCommand", "storymaps/common/mapcontrols/legend/Legend", "storymaps/common/mapcontrols/overview/Overview", "storymaps/common/mapcontrols/geocoder/Geocoder", "storymaps/common/ui/autoplay/Autoplay", "lib-build/css!storymaps/common/_resources/font/sharing/css/fontello.css", "lib-build/css!storymaps/common/utils/SocialSharing.css", "lib-build/css!storymaps/common/ui/loadingIndicator/LoadingIndicator.css", "storymaps/common/utils/CommonHelper", "dojo/has", "dojo/topic", "esri/arcgis/utils", "esri/geometry/Extent", "../ui/StoryText", "lib-build/css!../ui/Common", "lib-build/css!../ui/StoryText", "lib-build/css!../ui/mobile/Common", "lib-build/css!../ui/Responsive"], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S) {
    return function(s) {
        function v(e) {
            var t = e.itemInfo.itemData,
                n = t.applicationProperties,
                r = n && n.viewing && n.viewing.search,
                i = t.operationalLayers || [];
            if (!r)
                return;
            return r.layers.forEach(function(e) {
                _.find(i, function(t) {
                    if (t.id === e.id)
                        return e.name = t.name, e.title = t.title, !0
                })
            }), r
        }
        function m() {
            var e = app.data.getStoryLength(),
                t = 0,
                n = parseInt(g.getUrlParams().section, 10);
            app.data.cleanSectionsNarrativeMarkup(),
            n && (t = n - 1),
            t >= e && (t = 0),
            e && app.data.setCurrentSectionIndex(t);
            if (e) {
                C(),
                d.handleWindowResize();
                if (app.data.getCurrentSection().media.type != "webmap")
                    x();
                else {
                    var r,
                        i;
                    r = b.subscribe("story-loaded-map", function() {
                        r.remove(),
                        i.remove(),
                        x()
                    }),
                    i = b.subscribe("story-section-map-timeout", function() {
                        r.remove(),
                        i.remove(),
                        x()
                    })
                }
            } else
                x()
        }
        function x() {
            i.isBlank() ? app.isInBuilder ? d.isProd() ? s.showInitPopup() : d.portalLogin().then(s.showInitPopup, function() {
                d.initError("noLayerNoHostedFS")
            }) : g.getAppID(d.isProd()) ? app.userCanEdit ? g.switchToBuilder() : d.initError("notConfiguredDesktop") : d.initError("noLayer") : d.appInitComplete(),
            s && s.updateUI()
        }
        function T() {
            var e = i.getLayoutId(),
                t = i.getColors(),
                n = i.getLayoutOptions(),
                r = app.data.getStorySections();
            e == "side" ? (n.layoutCfg.position == "left" ? $("#sidePanel").parent().children().eq(0).is("#sidePanel") || $("#mainStagePanel").before($("#sidePanel")) : $("#sidePanel").parent().children().eq(0).is("#mainStagePanel") || $("#sidePanel").before($("#mainStagePanel")), app.ui.sidePanel.init(r, app.data.getCurrentSectionIndex(), n, d.getHeaderUserCfg(), t)) : e == "float" && app.ui.floatingPanel.init(r, app.data.getCurrentSectionIndex(), n, d.getHeaderUserCfg(), t),
            app.ui.autoplay && app.ui.autoplay.init({
                color: t.dotNav,
                themeMajor: t.themeMajor,
                useBackdrop: e == "float"
            })
        }
        function N() {
            var e = i.getColors(),
                t = app.data.getStorySections();
            (y("ie") === undefined || y("ie") > 8) && app.ui.mobileView.init(t, app.data.getCurrentSectionIndex(), d.getHeaderUserCfg(), e)
        }
        function C() {
            app.data.getStoryByIndex(0) && (document.title = $("<div>" + app.data.getStoryByIndex(0).title + "</div>").text()),
            app.ui.mainStage.updateMainMediaContainers(),
            T(),
            N(),
            A(),
            S.createMainMediaActionLink(),
            S.createMediaFullScreenButton(),
            S.styleSectionPanelContent(),
            O(app.data.getCurrentSectionIndex()),
            s && s.updateUI()
        }
        function k() {
            C()
        }
        function L() {
            var e = i.getLayoutId(),
                t = i.getColors(),
                n = i.getLayoutOptions();
            e == "side" ? app.ui.sidePanel.update(n, d.getHeaderUserCfg(), t) : e == "float" && app.ui.floatingPanel.update(n, d.getHeaderUserCfg(), t)
        }
        function A() {
            var e = i.getColors();
            g.addCSSRule(".section a, .builder-content-panel .builder-lbl { color: " + e.textLink + "; }"),
            g.addCSSRule(".builder-content-panel .builder-content-panel-group:not(.disabled):hover .builder-lbl { color: " + e.text + " !important; }"),
            e.name && e.name.match(/-modified$|-org$/) ? (g.addCSSRule(".header .link, .shareIcon, .shareIcon:hover { color: " + e.textLink + "; }"), g.addCSSRule(".shareIcon { opacity: 0.75; }"), g.addCSSRule(".shareIcon:hover { opacity: 1.0; }"), g.addCSSRule(".sectionPanel .separator { border-bottom-color: " + e.text + "; }")) : (g.addCSSRule(".header .link, .shareIcon, .shareIcon:hover { color: #ddd; }"), g.addCSSRule(".shareIcon { opacity: 1; }"), g.addCSSRule(".sectionPanel .separator { border-bottom-color: #ccc; }"))
        }
        function O(e) {
            console.log("tpl.core.MainView - navigateStoryToIndex - ", e);
            if (e < 0 || e > app.data.getStoryLength() - 1)
                return;
            app.ui.mainStage.beforeMainMediaUpdate(app.data.getCurrentSectionIndex()),
            app.data.setCurrentSectionIndex(e),
            app.ui.mainStage.updateMainMediaWithStoryMainMedia(e),
            app.ui.sidePanel.showSectionNumber(e),
            app.ui.floatingPanel.showSectionNumber(e),
            app.ui.mobileView.showSectionNumber(e),
            $(".mediaBackContainer").hide()
        }
        function M() {
            var e = app.data.getCurrentSection(),
                t = !!(e && e.media && e.media.type == "webmap" && e.media.webmap),
                n = t ? !!e.media.webmap.extent : !1,
                r = t ? e.media.webmap.id : null;
            if (!t)
                return;
            n ? b.publish("CORE_UPDATE_EXTENT", new E(e.media.webmap.extent)) : b.publish("CORE_UPDATE_EXTENT", app.maps[r].response.map._params.extent)
        }
        var d = null;
        this.init = function(e) {
            return d = e, app.isInBuilder && y("ie") && y("ie") < 10 ? (i18n.viewer.errors.noBuilderIE = i18n.viewer.errors.noBuilderIE.replace("%VERSION%", 10).replace("%UPGRADE%", i18n.viewer.errors.upgradeBrowser), d.initError("noBuilderIE"), !1) : y("ie") && y("ie") <= 8 ? (i18n.viewer.errors.noViewerIE = i18n.viewer.errors.noViewerIE.replace("%VERSION%", 9).replace("%UPGRADE%", i18n.viewer.errors.upgradeBrowser), d.initError("noViewerIE"), !1) : ($(document).bind("touchmove", function(e) {
                $(e.target).parents("#sidePanel, #mobileView, .legendContainer").length || e.preventDefault()
            }), app.data = new r, app.ui = {}, app.ui.mainView = this, app.ui.mainStage = new t($("#mainStagePanel"), app.isInBuilder, this), app.ui.sidePanel = new o($("#sidePanel"), app.isInBuilder, O), app.ui.floatingPanel = new u($("#floatingPanel"), app.isInBuilder, O), app.isAddEditInProgress = !1, app.ui.mobileView = new a($("#mobileView"), app.isInBuilder, O), !app.isInBuilder && g.getUrlParams().autoplay !== undefined && g.getUrlParams().autoplay !== "false" && (app.ui.autoplay = new p($("#autoplay"), function() {
                var e = 0;
                return app.data.getCurrentSectionIndex() != app.data.getStoryLength() - 1 && (e = app.data.getCurrentSectionIndex() + 1), setTimeout(function() {
                    b.publish("story-navigate-section", e)
                }, 50), e
            }), b.subscribe("tpl-ready", function() {
                $("body").hasClass("mobile-view") || app.ui.autoplay.start()
            }), b.subscribe("story-load-section", function(e) {
                app.ui.autoplay.onNavigationEvent(e)
            }), app.ui.sidePanel.enableAutoplay(), app.ui.floatingPanel.enableAutoplay(), app.ui.mobileView.enableAutoplay()), b.subscribe("story-navigate-section", O), b.subscribe("story-update-sections", C), b.subscribe("story-update-section", k), b.subscribe("story-perform-action-media", app.ui.mainStage.updateMainMediaWithStoryAction), b.subscribe("ADDEDIT_LOAD_WEBMAP", app.ui.mainStage.loadTmpWebmap), b.subscribe("ADDEDIT_SHOW_WEBMAP", app.ui.mainStage.showWebmapById), b.subscribe("ADDEDIT_RELOAD_CURRENT_WEBMAP", app.ui.mainStage.reloadCurrentWebmap), $("body").on("mousedown", "*", function(e) {
                ($(this).is(":focus") || $(this).is(e.target)) && $(this).css("outline-style") == "none" && ($(this).css("outline", "none").on("blur", function() {
                    $(this).off("blur").css("outline", "")
                }), $(this).parents(".image-container").length && $(this).parents(".image-container").css("outline", "none").on("blur", function() {
                    $(this).off("blur").css("outline", "")
                }), $(this).parents("figure.caption").length && $(this).parents("figure.caption").css("outline", "none").on("blur", function() {
                    $(this).off("blur").css("outline", "")
                }), $(this).parents(".title").length && $(this).parents(".title").css("outline", "none").on("blur", function() {
                    $(this).off("blur").css("outline", "")
                }), $(this).parentsUntil(".content", "div").length && $(this).parentsUntil(".content", "div").css("outline", "none").on("blur", function() {
                    $(this).off("blur").css("outline", "")
                }), $(this).parents("p").length && $(this).parents("p").css("outline", "none").on("blur", function() {
                    $(this).off("blur").css("outline", "")
                }), $(this).parents("ul").length && $(this).parents("ul").css("outline", "none").on("blur", function() {
                    $(this).off("blur").css("outline", "")
                }), $(this).parents("ol").length && $(this).parents("ol").css("outline", "none").on("blur", function() {
                    $(this).off("blur").css("outline", "")
                }))
            }), !0)
        },
        this.webAppConfigLoaded = function() {
            app.data.setStoryStorage(i.getStoryStorage());
            var e = d.hasSwitchBuilderButton();
            app.ui.sidePanel.toggleSwitchBuilderButton(e),
            app.ui.floatingPanel.toggleSwitchBuilderButton(e),
            app.isGalleryCreation = !Object.keys(app.data.getWebAppData().getOriginalData().values).length,
            app.isWebMapCreation = app.data.getWebAppData().isBlank()
        },
        this.loadFirstWebmap = function() {},
        this.loadWebmapFromData = function() {
            app.data.getStoryStorage() == "WEBAPP" && m()
        },
        this.loadWebmap = function(e, t, n) {
            console.log("tpl.core.MainView - loadWebMap - webmapId:", e);
            var r = null;
            return w.createMap(e, t, {
                mapOptions: {
                    slider: !0,
                    autoResize: !1,
                    showAttribution: !0,
                    infoWindow: r,
                    extent: n
                },
                usePopupManager: !0,
                ignorePopups: !1,
                bingMapsKey: app.cfg.BING_MAPS_KEY,
                editable: !1,
                layerMixins: app.data.getAppProxies()
            })
        },
        this.firstWebmapLoaded = function() {},
        this.startFromScratch = function() {
            x()
        },
        this.getMapConfig = function(e, t) {
            return {
                response: e,
                mapCommand: new f(e.map, M, d.zoomToDeviceLocation, app.data.getWebAppData().getLocateBtn()),
                legend: new l(e, t.siblings(".legend"), app.isInBuilder),
                overview: new c(e.map, t.siblings(".overview"), app.isInBuilder),
                geocoder: new h(e.map, app.isInBuilder, v(e))
            }
        },
        this.updateUI = function() {
            var e = app.data.getWebAppData().getColors(),
                t = app.data.getWebAppData().getLayoutId(),
                n = app.data.getWebAppData().getFonts();
            if ($("body").hasClass("switchLayout")) {
                var r = $.map($("body").attr("class").split(" "), function(e) {
                    return e.match(/layout-/) ? e : null
                }).join(" ");
                $("body").removeClass("switchLayout").removeClass(r),
                app.ui.sidePanel.destroy(),
                app.ui.floatingPanel.destroy(),
                T(t),
                setTimeout(function() {
                    O(app.data.getCurrentSectionIndex()),
                    C()
                }, 50)
            }
            $("body").addClass("layout-" + t),
            $("body").attr("data-theme-major", e.themeMajor),
            $.each(Object.keys(app.maps), function(e, t) {
                app.maps[t].mapCommand.enableLocationButton(i.getLocateBtn())
            }),
            A(),
            L(),
            app.ui.mainStage.updateMainStageWithLayoutSettings(),
            app.ui.mobileView.update(d.getHeaderUserCfg(), e),
            g.addCSSRule(".sectionPanel .title, .sectionPanel .appTitle, #mobileView .title, #AddEditTitleEditor { " + n.sectionTitle.value + " }", "SectionTitleFont"),
            g.addCSSRule(".sectionPanel .content, #mobileView .content { " + n.sectionContent.value + " }", "SectionContentFont");
            var s = ".sectionPanel .title, #mobileView .title, #AddEditTitleEditor, .sectionPanel .title strong, #mobileView .title strong, #AddEditTitleEditor strong { ",
                o = ".sectionPanel .section:first-child .title, .sectionPanel .section:first-child .title strong { ";
            n.sectionTitle.id === "default" ? (s += "font-family: 'open_sanssemibold', sans-serif;", o += "font-family: 'open_sansregular', sans-serif; }") : (s += n.sectionTitle.value, o += n.sectionTitle.value + " }"),
            s += " font-weight: bold; }",
            g.addCSSRule(s, "SectionTitleStrongFont"),
            g.addCSSRule(o, "FirstSectionTitleFont");
            var u = ".sectionPanel .content strong, #mobileView .content strong { ";
            n.sectionContent.id === "default" ? u += "font-family: 'open_sanssemibold', sans-serif;" : u += n.sectionContent.value,
            u += " font-weight: bold; }",
            g.addCSSRule(u, "SectionContentStrongFont")
        },
        this.resize = function(e) {
            var t = i.getLayoutId();
            $("#sidePanelInner, #mainStagePanelInner").height($("#contentPanel").height()),
            e.isMobileView ? app.ui.mobileView.resize(e) : t == "side" ? app.ui.sidePanel.resize(e) : t == "float" && app.ui.floatingPanel.resize(e);
            var n = app.data.getCurrentSectionIndex();
            app.ui.sidePanel.showSectionNumber(n),
            app.ui.floatingPanel.showSectionNumber(n),
            app.ui.mobileView.showSectionNumber(n),
            S.styleSectionPanelContent(),
            app.ui.mainStage.updateMainStageWithLayoutSettings(),
            e.isMobileView && app.ui.autoplay && app.ui.autoplay.stop()
        },
        this.checkConfigFileIsOK = function() {
            return n.checkConfigFileIsOK()
        },
        this.appInitComplete = function() {
            this.updateUI(),
            d.cleanLoadingTimeout(),
            $(window).resize();
            var e = app.data.getWebAppData().isBlank() || app.data.getWebAppItem().access == "private" || app.data.getWebAppItem().access == "shared";
            app.ui.sidePanel.toggleSocialBtnAppSharing(e),
            app.ui.floatingPanel.toggleSocialBtnAppSharing(e),
            app.ui.mobileView.toggleSocialBtnAppSharing(e),
            app.isDirectCreation || d.displayApp(),
            b.publish("tpl-ready")
        },
        this.onHashChange = function() {
            var e = location.hash ? location.hash.substring(1) : "";
            app.ui.mobileView.setView(e)
        },
        this.prepareMobileViewSwitch = function() {},
        this.initLocalization = function() {}
    }
}),
require(["storymaps/common/Core", "storymaps/tpl/core/MainView"], function() {}),
define("storymaps/tpl/BuildConfigViewer", function() {});

