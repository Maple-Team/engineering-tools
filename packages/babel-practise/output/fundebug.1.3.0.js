// fundebug obj
// apikey: null
// appversion: null
// maxEventNumber: 10
// notify: ƒ (e, t, r)
// notifyError: ƒ (e, t)
// releasestage: null
// sampleRate: null
// setHttpBody: false
// silent: false
// silentBehavior: false
// silentConsole: false
// silentDev: false
// silentHttp: false
// silentResource: false

const _fundebug = () => {
  return (function (modules) {
    var cache = {}
    function loader(id) {
      if (cache[id]) return cache[id].exports
      var module = (cache[id] = {
        exports: {},
        id,
        loaded: false,
      })
      modules[id].call(module.exports, module, module.exports, loader)
      module.loaded = true
      return module.exports
    }
    loader.modules = modules
    loader.cache = cache
    loader.p = ''
    return loader(0)
  })([
    /**
     * [0]
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var handlerRejection = loader(1),
        handleOnErrorInfo = loader(6),
        getError = loader(8),
        sendByXhrOrFetch = loader(9),
        getWBerror = loader(11),
        notifyError = loader(12),
        notify = loader(13),
        clickHandler = loader(14),
        getHistoryInfo = loader(15),
        getConsoleInfo = loader(16),
        getConfig = loader(17),
        getBreadcrumbInfo = loader(18),
        _ = {},
        fundebug = getConfig.getConfig()
      document.addEventListener && document.addEventListener('DOMContentLoaded', function () {}),
        handlerRejection(fundebug, _, getBreadcrumbInfo),
        handleOnErrorInfo(fundebug, _, getBreadcrumbInfo),
        getError(fundebug, _, getBreadcrumbInfo),
        sendByXhrOrFetch(fundebug, _, getBreadcrumbInfo),
        getWBerror(fundebug, _, getBreadcrumbInfo),
        notifyError(fundebug, _, getBreadcrumbInfo),
        notify(fundebug, _, getBreadcrumbInfo),
        clickHandler(fundebug, getBreadcrumbInfo),
        getHistoryInfo(fundebug, getBreadcrumbInfo),
        getConsoleInfo(fundebug, getBreadcrumbInfo),
        (window.fundebug = fundebug),
        (module.exports = fundebug)
    },
    /**
     * [1] unhandledrejection
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var send = loader(2)

      module.exports = function (n, i, o) {
        'addEventListener' in window &&
          window.addEventListener('unhandledrejection', function (e) {
            try {
              var t = {
                type: 'unhandledrejection',
                name: 'unhandledrejection',
                message: e.reason,
              }
              send(t, n, i, o)
            } catch (r) {
              console.error(r)
            }
          })
      }
    },
    /**
     * [2] send
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var u = loader(3),
        c = loader(4),
        f = loader(5)

      function upload(e, t, r, n) {
        if (t.maxEventNumber && !t.silent && !f(t.silentDev)) {
          t.maxEventNumber -= 1

          var a = n.getBreadcrumbs(),
            s = {
              notifierVersion: '1.3.0',
              userAgent: window.navigator.userAgent,
              locale: window.navigator.language || window.navigator.userLanguage,
              url: window.location.href,
              title: document.title,
              appVersion: t.appversion,
              apiKey: t.apikey,
              releaseStage: t.releasestage,
              metaData: e.metaData || t.metaData,
              user: e.user || t.user,
              name: e.name,
              time: new Date().getTime(),
              message: e.message,
              fileName: e.fileName,
              lineNumber: e.lineNumber,
              columnNumber: e.columnNumber,
              stacktrace: e.stacktrace,
              type: e.type,
              severity: e.severity,
              target: e.target,
              req: e.req,
              res: e.res,
              breadcrumbs: a,
            }
          ;(s.userAgent && s.userAgent.match(/Googlebot/)) ||
            (JSON.stringify(s, null, 4),
            u.isFiltered(s, t.filters) ||
              (c.isSampled(t.sampleRate) &&
                (function (e) {
                  var t = (function (e) {
                    var t

                    try {
                      t = toString(e)
                    } catch (r) {
                      delete e.metaData

                      try {
                        t = toString(e)
                      } catch (n) {
                        return
                      }
                    }

                    return t
                  })(s)

                  if (t) {
                    var r = 'http://172.23.236.249:7001/api/event/'

                    if (window.XMLHttpRequest && window.atob) {
                      var n = new XMLHttpRequest()
                      ;(n.Fundebug = true),
                        n.open('POST', r),
                        n.setRequestHeader('Content-Type', 'application/json'),
                        n.send(t)
                    } else {
                      new Image().src = r + '?event=' + encodeURIComponent(t)
                    }
                  }
                })()))
        }
      }

      function toString(e) {
        if ('undefined' != typeof JSON) return JSON.stringify(e)

        if (e instanceof Array) {
          for (var t = [], r = 0; r < e.length; r++) t.push(toString(e[r]))

          return '[' + t.join(',') + ']'
        }

        var n = []

        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = '"' + i + '":',
              a = e[i]
            a &&
              ('object' == typeof a
                ? (o += toString(a))
                : 'number' == typeof a
                ? (o += a)
                : (o = o + '"' + a.replace(/\n/g, '\\n') + '"'),
              n.push(o))
          }

        return '{' + n.join(',') + '}'
      }

      module.exports = function (e, t, r, n) {
        upload(e, t, r, n)
      }
    },
    /**
     * [3] tools isFiltered
     * @param {*} module
     * @param {*} exports
     */
    function (module, exports) {
      function compare(e, t) {
        if (!e) return false
        if (!t) return false
        if (Object.keys && !Object.keys(t).length) return false

        for (var r in t)
          if (t.hasOwnProperty(r))
            if (t[r].constructor === RegExp) {
              if (!t[r].test(e[r])) return false
            } else if (t[r].constructor === Object) {
              if (!compare(e[r], t[r])) return false
            } else {
              if (t[r].constructor !== String || 'inexistence' !== t[r]) return false
              if (e.hasOwnProperty(r)) return false
            }

        return true
      }

      exports.isFiltered = function (e, t) {
        if (!t || !t.length) return false

        for (var r = 0; r < t.length; r++) if (compare(e, t[r])) return true

        return false
      }
    },
    /**
     * [4] tools isSampled
     * @param {*} e
     * @param {*} exports
     */
    function (e, exports) {
      exports.isSampled = function (e) {
        return (!e && 0 !== e) || ((e = parseFloat(e)), !!isNaN(e) || Math.random() <= e)
      }
    },
    /**
     * [5]
     * @param {*} module
     * @param {*} t
     */
    function (module, t) {
      module.exports = function (e) {
        return !(
          !e ||
          !(t = window.location.href) ||
          (!/^http:\/\/localhost/.test(t) && !/^http:\/\/(\d{1,3}\.){3}\d{1,3}/.test(t))
        )
      }
    },
    /**
     * [6] window.onerror
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var send = loader(2),
        getErrorInfo = loader(7)

      module.exports = function (u, c, f) {
        window.onerror = function (event, source, lineno, columnno, error) {
          var o
          void 0 === columnno && window.event && (columnno = window.event.errorCharacter),
            (o = source && source !== window.location.href ? source : null)
          var errorInfo = getErrorInfo(error),
            info = {
              message: event,
              lineNumber: lineno,
              columnNumber: columnno,
              fileName: o || (errorInfo && errorInfo.fileName),
              name: (errorInfo && errorInfo.name) || 'uncaught error',
              stacktrace:
                (error && error.stack) ||
                (function () {
                  var e,
                    t,
                    r = []

                  try {
                    t = arguments.callee.caller.caller
                  } catch (i) {
                    t = ''
                  }

                  for (; t && r.length < 10; ) {
                    var n = t.toString().match(/function\s*([\w\_$]+)?\s*\(/i)
                    ;(e = (n && n[1]) || '[anonymous]'), r.push(e), (t = t.caller)
                  }

                  return 'generated-stack:\n' + r.join('\n')
                })(),
              severity: 'error',
              type: 'uncaught',
            }
          send(info, u, c, f)
          return false
        }
      }
    },
    /**
     * [7] get error info
     * @param {*} module
     * @param {*} t
     */
    function (module, t) {
      module.exports = function (e) {
        if (!e) return null
        var t = {}
        return (
          window.XMLHttpRequest
            ? (t = {
                name: e.name,
                message: e.message,
                fileName: e.fileName || e.sourceURL,
                lineNumber: e.lineNumber || e.line,
                columnNumber: e.columnNumber || e.column,
              })
            : (t.message = e.message),
          t
        )
      }
    },
    /**
     * [8] listen error and send
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var send = loader(2)

      module.exports = function (a, s, u) {
        window.addEventListener &&
          window.addEventListener(
            'error',
            function (errorEvent) {
              try {
                if (a.silentResource || errorEvent.message) return
                var t,
                  r = (t = errorEvent.target ? errorEvent.target : errorEvent.srcElement) && t.outerHTML
                r && 200 < r.length && (r = r.slice(0, 200))
                var sourceErrorInfo = {
                  type: 'resourceError',
                  target: {
                    outerHTML: r,
                    src: t && t.src,
                    tagName: t && t.tagName,
                    id: t && t.id,
                    className: t && t.className,
                    name: t && t.name,
                    type: t && t.type,
                    XPath: (function (e) {
                      for (var t = []; e && e.nodeType == Node.ELEMENT_NODE; e = e.parentNode) {
                        var r,
                          n = 0,
                          i = false

                        for (r = e.previousSibling; r; r = r.previousSibling)
                          r.nodeType != Node.DOCUMENT_TYPE_NODE && r.nodeName == e.nodeName && ++n

                        for (r = e.nextSibling; r && !i; r = r.nextSibling) r.nodeName == e.nodeName && (i = true)

                        var o = (e.prefix ? e.prefix + ':' : '') + e.localName,
                          a = n || i ? '[' + (n + 1) + ']' : ''
                        t.splice(0, 0, o + a)
                      }

                      return t.length ? '/' + t.join('/') : null
                    })(t),
                    selector: (function (e) {
                      for (var t = []; e.parentNode; ) {
                        if (e.id) {
                          t.unshift('#' + e.id)
                          break
                        }

                        if (e == e.ownerDocument.documentElement) t.unshift(e.tagName)
                        else {
                          for (var r = 1, n = e; n.previousElementSibling; n = n.previousElementSibling, r++);

                          t.unshift(e.tagName + ':nth-child(' + r + ')')
                        }
                        e = e.parentNode
                      }

                      return t.join(' > ')
                    })(t),
                    timeStamp: errorEvent.timeStamp,
                  },
                }
                if (t.src === window.location.href) return
                if (t.src && t.src.match(/.*\/(.*)$/) && !t.src.match(/.*\/(.*)$/)[1]) return

                if (sourceErrorInfo.target.src && window.XMLHttpRequest) {
                  var i = new XMLHttpRequest()
                  ;(i.Fundebug = true),
                    i.open('HEAD', sourceErrorInfo.target.src),
                    i.send(),
                    (i.onload = function (e) {
                      200 !== e.target.status &&
                        ((sourceErrorInfo.target.status = e.target.status),
                        (sourceErrorInfo.target.statusText = e.target.statusText)),
                        send(sourceErrorInfo, a, s, u)
                    })
                }
              } catch (o) {}
            },
            true
          )
      }
    },
    /**
     * [9] sendByUse xhr or fetch
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var send = loader(2),
        excludePrivacyInfo = loader(10)

      module.exports = function (a, i, s) {
        if (window.XMLHttpRequest && window.XMLHttpRequest.prototype) {
          var method,
            url,
            startTime,
            xhr = XMLHttpRequest.prototype,
            xhrOpen = xhr.open

          xhr.open = function (e, t) {
            try {
              ;(method = e), (url = t), (startTime = new Date().getTime()), xhrOpen.apply(this, arguments)
            } catch (r) {
              xhrOpen && xhrOpen.apply(this, arguments)
            }
          }

          var xhrSend = xhr.send

          xhr.send = function (n) {
            var self = this,
              xhrOnreadystatechange = self.onreadystatechange
            ;(self.onreadystatechange = function () {
              try {
                if (4 === self.readyState && !self.Fundebug && 'http://10/event/' != url) {
                  var elapsedTime = new Date().getTime() - startTime,
                    xhrInfo = {
                      type: 'XMLHttpRequest',
                      page: {
                        url: window.location.href,
                      },
                      detail: {
                        method: method,
                        url: self.responseURL || url,
                        status: self.status,
                        statusText: self.statusText,
                      },
                      elapsedTime: elapsedTime,
                      time: startTime,
                    }
                  a.setHttpBody && (xhrInfo.detail.body = excludePrivacyInfo.copyWithoutPrivacy(n)),
                    judgeHttpStatus(xhrInfo) &&
                      _send(
                        {
                          method: xhrInfo.detail.method,
                          url: xhrInfo.detail.url,
                          body: xhrInfo.detail.body,
                        },
                        {
                          status: self.status,
                          statusText: self.statusText,
                          response: self.response,
                          elapsedTime: elapsedTime,
                        }
                      ),
                    s.addBreadcrumb(xhrInfo, a.silentBehavior)
                }

                xhrOnreadystatechange && xhrOnreadystatechange.apply(this, arguments)
              } catch (r) {
                xhrOnreadystatechange && xhrOnreadystatechange.apply(this, arguments)
              }
            }),
              xhrSend.apply(this, arguments)
          }
        }

        if (window.fetch) {
          var windowFetch = window.fetch

          window.fetch = function (e, n) {
            var i = new Date().getTime()
            return windowFetch.apply(this, arguments).then(function (e) {
              var t = new Date().getTime() - i,
                fetchInfo = {
                  type: 'fetch',
                  page: {
                    url: window.location.href,
                    title: document.title,
                  },
                  detail: {
                    method: (n && n.method) || 'GET',
                    url: e.url,
                    status: e.status,
                    statusText: e.statusText,
                  },
                  elapsedTime: t,
                  time: i,
                }
              return (
                judgeHttpStatus(fetchInfo) &&
                  _send(
                    {
                      method: fetchInfo.detail.method,
                      url: fetchInfo.detail.url,
                    },
                    {
                      status: e.status,
                      statusText: e.statusText,
                      elapsedTime: t,
                    }
                  ),
                s.addBreadcrumb(fetchInfo, a.silentBehavior),
                e
              )
            })
          }
        }

        function _send(reqInfo, resInfo, r) {
          var httpErrorInfo = {
            type: 'httpError',
            req: reqInfo,
            res: resInfo,
            user: r && r.user,
            metaData: r && r.metaData,
          }
          send(httpErrorInfo, a, i, s)
        }

        function judgeHttpStatus(e) {
          return !(
            a.silentHttp ||
            (0 === e.detail.status && /^file:\/\/\//.test(e.detail.url)) ||
            2 === parseInt(e.detail.status / 100)
          )
        }
      }
    },
    /**
     * [10] tools copyWithoutPrivacy
     * @param {*} e
     * @param {*} exports
     */
    function (e, exports) {
      exports.copyWithoutPrivacy = function (e) {
        try {
          var t = e
          return 'string' == typeof e && ((t = JSON.parse(e)).password = 'Fundebug: deleted for protectiong privary'), t
        } catch (r) {
          return e
        }
      }
    },
    /**
     * [11] get WebSocket error
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var send = loader(2)

      module.exports = function (n, i, o) {
        try {
          if (!('WebSocket' in window)) return
          var wbErrorDescriptor = Object.getOwnPropertyDescriptor(WebSocket.prototype, 'onerror')
          if (!wbErrorDescriptor) return
          if (!wbErrorDescriptor.configurable) return
          Object.defineProperty(WebSocket.prototype, 'onerror', {
            set: function () {
              try {
                var r = arguments[0]
                return wbErrorDescriptor.set.apply(this, [
                  function (e) {
                    var wbErrorInfo = {
                      type: 'websocketError',
                      target: {
                        type: 'onerror',
                        url: e.target.url,
                        timeStamp: e.timeStamp,
                      },
                    }
                    send(wbErrorInfo, n, i, o), r.apply(this, arguments)
                  },
                ])
              } catch (e) {
                return wbErrorDescriptor.set.apply(this, arguments)
              }
            },
          })
        } catch (e) {
          return
        }
      }
    },
    /**
     * [12] notifyError
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var send = loader(2),
        getErrorInfo = loader(7)

      module.exports = function (i, o, a) {
        i.notifyError = function (e, t) {
          if (e) {
            window.console && console.error(e)
            var errorInfo = getErrorInfo(e),
              caughtErrorInfo = {
                name: errorInfo.name || (t && t.name) || 'caught error',
                message: errorInfo.message || (t && t.message),
                stacktrace: e.stack,
                fileName: errorInfo.fileName,
                lineNumber: errorInfo.lineNumber,
                columnNumber: errorInfo.columnNumber,
                severity: (t && t.severity) || 'error',
                type: 'caught',
                user: t && t.user,
                metaData: t && t.metaData,
              }
            send(caughtErrorInfo, i, o, a)
          }
        }
      }
    },
    /**
     * [13] notify
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var send = loader(2)

      module.exports = function (o, a, s) {
        o.notify = function (e, t, r) {
          if (e) {
            var notificationErrorInfo = {
              name: e || (r && r.name),
              message: t || (r && r.message),
              severity: (r && r.message) || 'warning',
              stacktrace: (function () {
                var e

                try {
                  throw new Error('')
                } catch (t) {
                  e = t.stack
                }

                return e
                  ? (e =
                      'generated-stack:\n' +
                      (e = (e = e.replace(/(.*?)fundebug(.*?)\.js(.*)\n?/gm, '')).replace(/^Error\n/g, '')))
                  : void 0
              })(),
              type: 'notification',
              user: r && r.user,
              metaData: r && r.metaData,
            }
            return send(notificationErrorInfo, o, a, s)
          }
        }
      }
    },
    /**
     * [14] 点击事件handler
     * @param {*} module
     * @param {*} t
     */
    function (module, t) {
      module.exports = function (i, o) {
        function e(e) {
          var t,
            r = (t = e.target ? e.target : e.srcElement) && t.outerHTML
          r && 200 < r.length && (r = r.slice(0, 200))

          var clickInfo = {
            type: 'click',
            page: {
              url: window.location.href,
              title: document.title,
            },
            detail: {
              outerHTML: r,
              tagName: t && t.tagName,
              id: t && t.id,
              className: t && t.className,
              name: t && t.name,
            },
            time: new Date().getTime(),
          }
          o.addBreadcrumb(clickInfo, i.silentBehavior)
        }

        window.addEventListener ? window.addEventListener('click', e, true) : document.attachEvent('onclick', e)
      }
    },
    /**
     * [15] 监听history
     * @param {*} module
     * @param {*} t
     */
    function (module, t) {
      module.exports = function (n, i) {
        var historyInfo = {
          url: window.location.href,
        }
        document.addEventListener
          ? document.addEventListener('DOMContentLoaded', function () {
              historyInfo = {
                url: window.location.href,
                title: document.title,
              }
            })
          : document.attachEvent('onreadystatechange', function () {
              historyInfo = {
                url: window.location.href,
                title: document.title,
              }
            })
        var windowOnPopstate = window.onpopstate

        window.onpopstate = function () {
          var e = {
            url: window.location.href,
          }
          if (
            (historyInfo.title || (historyInfo.title = document.title),
            historyInfo.url !== e.url && navigationInfo(historyInfo, e),
            windowOnPopstate)
          )
            return windowOnPopstate.apply(this, arguments)
        }

        var historyPushState = window.history.pushState
        historyPushState &&
          (window.history.pushState = function () {
            historyInfo = {
              url: window.location.href,
              title: document.title,
            }
            var e = {}
            if (
              (3 === arguments.length && (e.url = arguments[2]),
              historyInfo.url !== e.url && navigationInfo(historyInfo, e),
              historyPushState)
            )
              return historyPushState.apply(this, arguments)
          })
        var windowHashChange = window.onhashchange

        function navigationInfo(e, t) {
          var r = {
            type: 'navigation',
            detail: {
              from: e,
              to: (historyInfo = t),
            },
            time: new Date().getTime(),
          }
          JSON.stringify(r, null, 4), i.addBreadcrumb(r, n.silentBehavior)
        }

        window.onhashchange,
          (window.onhashchange = function () {
            var e = {
              url: window.location.href,
              title: document.title,
            }
            if ((historyInfo.url !== e.url && navigationInfo(historyInfo, e), windowHashChange))
              return windowHashChange.apply(this, arguments)
          })
      }
    },
    /**
     * [16] console
     * @param {*} module
     * @param {*} t
     */
    function (module, t) {
      module.exports = function (i, o) {
        function e(r) {
          var n = console[r]

          console[r] = function () {
            var consoleInfo = {
              type: 'console',
              page: {
                url: window.location.href,
                title: document.title,
              },
              detail: {
                level: r,
                arguments: Array.prototype.slice.apply(arguments).join(' '),
              },
              time: new Date().getTime(),
            }
            if ((i.silentConsole || o.addBreadcrumb(consoleInfo, i.silentBehavior), 'function' == typeof n))
              if (n.apply) n.apply(console, arguments)
              else {
                var t = Array.prototype.slice.apply(arguments).join(' ')
                n(t)
              }
          }
        }

        for (var r = ['log', 'warn', 'error', 'debug', 'info'], n = {}, t = 0; t < r.length; t++)
          window.console && ((n[r[t]] = console[r[t]]), i.silentConsole || e(r[t]))

        document.addEventListener &&
          document.addEventListener('DOMContentLoaded', function (e) {
            for (var t = 0; t < r.length; t++) window.console && i.silentConsole && n[r[t]] && (console[r[t]] = n[r[t]])
          })
      }
    },
    /**
     * [17] tools getConfig
     * @param {*} e
     * @param {*} exports
     */
    function (e, exports) {
      var scriptElement = (function () {
        var e = document.currentScript
        if (!e) {
          var t = document.scripts
          e = t[t.length - 1]
        }

        return e
      })()
      exports.getConfig = function () {
        var fundebug = {}
        return (
          (fundebug.silent = scriptElement.getAttribute('silent') || false),
          'false' === fundebug.silent && (fundebug.silent = false),
          (fundebug.maxEventNumber =
            scriptElement.getAttribute('maxEventNumber') || scriptElement.getAttribute('maxeventnumber') || 10),
          (fundebug.setHttpBody =
            scriptElement.getAttribute('setHttpBody') || scriptElement.getAttribute('sethttpbody') || false),
          'false' === fundebug.setHttpBody && (fundebug.setHttpBody = false),
          (fundebug.silentResource =
            scriptElement.getAttribute('silentResource') || scriptElement.getAttribute('silentresource') || false),
          'false' === fundebug.silentResource && (fundebug.silentResource = false),
          (fundebug.silentHttp =
            scriptElement.getAttribute('silentHttp') || scriptElement.getAttribute('silenthttp') || false),
          'false' === fundebug.silentHttp && (fundebug.silentHttp = false),
          (fundebug.silentConsole =
            scriptElement.getAttribute('silentConsole') || scriptElement.getAttribute('silentconsole') || false),
          'false' === fundebug.silentConsole && (fundebug.silentConsole = false),
          (fundebug.sampleRate = scriptElement.getAttribute('sampleRate') || scriptElement.getAttribute('samplerate')),
          (fundebug.silentVideo =
            scriptElement.getAttribute('silentVideo') || scriptElement.getAttribute('silentvideo')),
          'false' === fundebug.silentVideo && (fundebug.silentVideo = false),
          0 != fundebug.silentVideo && (fundebug.silentVideo = true),
          (fundebug.silentBehavior =
            scriptElement.getAttribute('silentBehavior') || scriptElement.getAttribute('silentbehavior') || false),
          'false' === fundebug.silentBehavior && (fundebug.silentBehavior = false),
          (fundebug.silentDev =
            scriptElement.getAttribute('silentDev') || scriptElement.getAttribute('silentdev') || false),
          'false' === fundebug.silentDev && (fundebug.silentDev = false),
          (fundebug.apikey = scriptElement.getAttribute('apikey')),
          (fundebug.appversion = scriptElement.getAttribute('appversion')),
          (fundebug.releasestage = scriptElement.getAttribute('releasestage')),
          fundebug
        )
      }
    },
    /**
     * [18] tools breadcrumb
     * @param {*} e
     * @param {*} exports
     */
    function (e, exports) {
      // {
      //   detail: any,
      //   time:number
      //   type: 'navigation' |'click' | 'XMLHttpRequest' | ''
      //   page:{url:String,  title:string}
      //   elapsedTime:number
      // }
      var r = [],
        n = 0
      ;(exports.addBreadcrumb = function (info, silentBehavior) {
        silentBehavior || ((r[n] = info), 20 == ++n && (n = 0)) // 最大20
      }),
        (exports.getBreadcrumbs = function () {
          return r
        })
    },
  ])
}
const fundebug = _fundebug()
window.fundebug = fundebug
export { fundebug }
