!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.fundebug = t())
    : (e.fundebug = t())
})(window, function () {
  return (function (modules) {
    var cache = {}

    function loader(id) {
      if (cache[id]) return cache[id].exports
      var module = (cache[id] = {
        i: id,
        l: false,
        exports: {},
      })
      return modules[id].call(module.exports, module, module.exports, loader), (module.l = true), module.exports
    }

    return (
      (loader.modules = modules),
      (loader.cache = cache),
      (loader.d = function (e, t, n) {
        loader.o(e, t) ||
          Object.defineProperty(e, t, {
            enumerable: true,
            get: n,
          })
      }),
      (loader.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, {
            value: 'Module',
          }),
          Object.defineProperty(e, '__esModule', {
            value: true,
          })
      }),
      (loader.t = function (t, e) {
        if ((1 & e && (t = loader(t)), 8 & e)) return t
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t
        var n = Object.create(null)
        if (
          (loader.r(n),
          Object.defineProperty(n, 'default', {
            enumerable: true,
            value: t,
          }),
          2 & e && 'string' != typeof t)
        )
          for (var r in t)
            loader.d(
              n,
              r,
              function (e) {
                return t[e]
              }.bind(null, r)
            )
        return n
      }),
      (loader.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default
              }
            : function () {
                return e
              }
        return loader.d(t, 'a', t), t
      }),
      (loader.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (loader.p = ''),
      loader((loader.s = 0))
    )
  })([
    /**
     * [0] entry
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var handleUnhandledRejection = loader(1),
        handleOnError = loader(8),
        handleAddeventListenerError = loader(10),
        handleFetchErrorInfo = loader(11),
        handleXhrError = loader(13),
        handleWebSocketError = loader(15),
        handleConfig = loader(16),
        handleNotifyError = loader(17),
        handleNotify = loader(18),
        handleTest = loader(19),
        handleClickInfo = loader(20),
        handleHistoryInfo = loader(21),
        handleConsole = loader(22),
        config = loader(23),
        breadcrumbExports = loader(24),
        fundebug = config.getConfig(),
        handleLeaveBreadCrumb = loader(25)
      handleUnhandledRejection(fundebug, breadcrumbExports),
        handleOnError(fundebug, breadcrumbExports),
        handleAddeventListenerError(fundebug, breadcrumbExports),
        handleFetchErrorInfo(fundebug, breadcrumbExports),
        handleXhrError(fundebug, breadcrumbExports),
        handleWebSocketError(fundebug, breadcrumbExports),
        handleConfig(fundebug),
        handleNotifyError(fundebug, breadcrumbExports),
        handleNotify(fundebug, breadcrumbExports),
        handleTest(fundebug, breadcrumbExports),
        handleLeaveBreadCrumb(fundebug, breadcrumbExports),
        handleClickInfo(fundebug, breadcrumbExports),
        handleHistoryInfo(fundebug, breadcrumbExports),
        handleConsole(fundebug, breadcrumbExports),
        (window.fundebug = fundebug),
        (module.exports = fundebug)
    },
    /**
     * [1]
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var upload = loader(2)

      module.exports = function (fundebug, breadcrumbExports) {
        'addEventListener' in window &&
          window.addEventListener('unhandledrejection', function (promiseRejectEvent) {
            try {
              if (fundebug.silentPromise) return
              var messageObj = {
                type: 'unhandledrejection',
                name: 'unhandledrejection',
                message: promiseRejectEvent.reason,
              }
              upload(messageObj, fundebug, breadcrumbExports)
            } catch (n) {}
          })
      }
    },
    /**
     * [2] upload
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var { isFiltered } = loader(3),
        { isSampled } = loader(4),
        isSilent = loader(5),
        handlePerformance = loader(6),
        safeJsonStringify = loader(7)

      function upload(messageObj, fundebug, breadcrumbExports) {
        if (fundebug.maxEventNumber && !fundebug.silent && !isSilent(fundebug.silentDev)) {
          var revideo
          ;(fundebug.maxEventNumber -= 1),
            (revideo = fundebug.revideo && fundebug.revideo.fetchSequence && fundebug.revideo.fetchSequence())
          var performance,
            breadcrumbs = breadcrumbExports.getBreadcrumbs()
          fundebug.silentPerformance || (performance = handlePerformance.getPerformance())
          var uploadInfo = {
            notifierVersion: '2.5.0',
            userAgent: window.navigator.userAgent,
            locale: window.navigator.language || window.navigator.userLanguage,
            url: window.location.href,
            title: document.title,
            appVersion: fundebug.appversion,
            apiKey: fundebug.apikey,
            releaseStage: fundebug.releasestage,
            metaData: messageObj.metaData || fundebug.metaData,
            user: messageObj.user || fundebug.user,
            name: messageObj.name,
            time: new Date().getTime(),
            message: messageObj.message,
            fileName: messageObj.fileName,
            lineNumber: messageObj.lineNumber,
            columnNumber: messageObj.columnNumber,
            stacktrace: messageObj.stacktrace,
            type: messageObj.type,
            severity: messageObj.severity,
            target: messageObj.target,
            req: messageObj.req,
            res: messageObj.res,
            httpTimeout: messageObj.httpTimeout,
            breadcrumbs: breadcrumbs,
            redo: revideo,
            performance: performance,
          }
          ;(uploadInfo.userAgent && uploadInfo.userAgent.match(/Googlebot/)) ||
            (fundebug.callback && fundebug.callback(uploadInfo),
            isFiltered(uploadInfo, fundebug.filters) ||
              (isSampled(fundebug.sampleRate) &&
                (function (_uploadInfo, _notifierUrl) {
                  var infoString = (function (info) {
                    var _infoString
                    try {
                      _infoString = safeJsonStringify(info)
                    } catch (n) {
                      delete info.metaData

                      try {
                        _infoString = safeJsonStringify(info)
                      } catch (r) {
                        return
                      }
                    }

                    return _infoString
                  })(_uploadInfo)

                  if (infoString)
                    if (window.XMLHttpRequest && window.atob) {
                      var xhr = new XMLHttpRequest()
                      xhr.sendByFundebug = true
                      xhr.open('POST', _notifierUrl)
                      xhr.setRequestHeader('Content-Type', 'application/json')
                      xhr.send(infoString)
                    } else {
                      new Image().src = _notifierUrl + '?event=' + encodeURIComponent(infoString)
                    }
                })(uploadInfo, fundebug.notifierUrl)))
        }
      }

      module.exports = function (info, fundebug, breadcrumbExports) {
        fundebug.revideo
          ? setTimeout(function () {
              upload(info, fundebug, breadcrumbExports)
            }, 1000)
          : upload(info, fundebug, breadcrumbExports)
      }
    },
    /**
     * [3] tools isFiltered
     * @param {*} e
     * @param {*} exports
     */
    function (e, exports) {
      function filter(uploadInfo, filterFn) {
        if (!uploadInfo) return false
        if (!filterFn) return false
        if (Object.keys && !Object.keys(filterFn).length) return false

        for (var _fn in filterFn)
          if (filterFn.hasOwnProperty(_fn))
            if (filterFn[_fn].constructor === RegExp) {
              if (!filterFn[_fn].test(uploadInfo[_fn])) return false
            } else if (filterFn[_fn].constructor === Object) {
              if (!filter(uploadInfo[_fn], filterFn[_fn])) return false
            } else {
              if (filterFn[_fn].constructor !== String || 'inexistence' !== filterFn[_fn]) return false
              if (uploadInfo.hasOwnProperty(_fn)) return false
            }

        return true
      }

      exports.isFiltered = function (uploadInfo, filterFn) {
        if (!filterFn || !filterFn.length) return false
        for (var n = 0; n < filterFn.length; n++) if (filter(uploadInfo, filterFn[n])) return true
        return false
      }
    },
    /**
     * [4] tools
     * @param {*} e
     * @param {*} exports
     */
    function (e, exports) {
      exports.isSampled = function (sampleRate) {
        return (
          (!sampleRate && 0 !== sampleRate) ||
          ((sampleRate = parseFloat(sampleRate)), !!isNaN(sampleRate) || Math.random() <= sampleRate)
        )
      }
      exports.verifyApiKey = function (e, t) {
        return true
      }
    },
    /**
     * [5]
     * @param {*} module
     * @param {*} t
     */
    function (module, t) {
      module.exports = function (isSilentDev) {
        return !(
          !isSilentDev ||
          !(t = window.location.href) ||
          (!/^http:\/\/localhost/.test(t) && !/^http:\/\/(\d{1,3}\.){3}\d{1,3}/.test(t))
        )
      }
    },
    /**
     * [6] tools getPerformance
     * @param {*} e
     * @param {*} exports
     */
    function (e, exports) {
      exports.getPerformance = function () {
        if ('performance' in window && 'getEntriesByType' in performance)
          return {
            navigation: performance.getEntriesByType('navigation'),
          }
      }
    },
    /**
     * [7] https://github.com/bugsnag/safe-json-stringify
     * @param {*} module
     * @param {*} t
     */
    function (module, t) {
      module.exports = function (t, n, r, i) {
        var g,
          v,
          b,
          y,
          o = i && i.redactedKeys ? i.redactedKeys : [],
          a = i && i.redactedPaths ? i.redactedPaths : []
        return JSON.stringify(
          ((g = o),
          (v = a),
          (b = []),
          (y = 0),
          (function e(t, n) {
            function r() {
              return n.length > x && w < y
            }

            if ((y++, n.length > h)) return T
            if (r()) return T
            if (null === t || 'object' != typeof t) return t
            if (
              (function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return true

                return false
              })(b, t)
            )
              return '[Circular]'
            if ((b.push(t), 'function' == typeof t.toJSON))
              try {
                y--
                var i = e(t.toJSON(), n)
                return b.pop(), i
              } catch (d) {
                return throwsMessage(d)
              }
            var o, a

            if (
              (o = t) instanceof Error ||
              /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(o))
            ) {
              y--
              var u = e(
                {
                  name: t.name,
                  message: t.message,
                },
                n
              )
              return b.pop(), u
            }

            if (((a = t), '[object Array]' === Object.prototype.toString.call(a))) {
              for (var s = [], c = 0, l = t.length; c < l; c++) {
                if (r()) {
                  s.push(T)
                  break
                }

                s.push(e(t[c], n.concat('[]')))
              }

              return b.pop(), s
            }

            var f = {}

            try {
              for (var p in t)
                if (Object.prototype.hasOwnProperty.call(t, p))
                  if (isDescendent(v, n.join('.')) && shouldRedact(g, p)) f[p] = '[REDACTED]'
                  else {
                    if (r()) {
                      f[p] = T
                      break
                    }

                    f[p] = e(safelyGetProp(t, p), n.concat(p))
                  }
            } catch (m) {}

            return b.pop(), f
          })(t, [])),
          n,
          r
        )
      }

      var h = 20,
        w = 25e3,
        x = 8,
        T = '...'

      function throwsMessage(e) {
        return '[Throws: ' + (e ? e.message : '?') + ']'
      }

      function isDescendent(paths, path) {
        for (var n = 0, r = paths.length; n < r; n++) if (0 === path.indexOf(paths[n])) return true

        return false
      }

      function shouldRedact(pattern, key) {
        for (var n = 0, r = pattern.length; n < r; n++) {
          if ('string' == typeof pattern[n] && pattern[n] === key) return true
          if (pattern[n] && 'function' == typeof pattern[n].test && pattern[n].test(key)) return true
        }

        return false
      }

      function safelyGetProp(obj, prop) {
        try {
          return obj[prop]
        } catch (e) {
          return throwsMessage(e)
        }
      }
    },
    /**
     * [8] onerror
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var upload = loader(2),
        handleMessage = loader(9)

      module.exports = function (fundebug, breadcrumbExports) {
        window.onerror = function (event, source, lineno, columnNumber, error) {
          var o
          void 0 === columnNumber && window.event && (columnNumber = window.event.errorCharacter),
            (o = source && source !== window.location.href ? source : null)
          var _message = handleMessage(error),
            messageObj = {
              message: event,
              lineNumber: lineno,
              columnNumber: columnNumber,
              fileName: o || (_message && _message.fileName),
              name: (_message && _message.name) || 'uncaught error',
              stacktrace:
                (error && error.stack) ||
                (function () {
                  var e,
                    t,
                    n = []

                  try {
                    t = arguments.callee.caller.caller
                  } catch (i) {
                    t = ''
                  }

                  for (; t && n.length < 10; ) {
                    var r = t.toString().match(/function\s*([\w\_$]+)?\s*\(/i)
                    ;(e = (r && r[1]) || '[anonymous]'), n.push(e), (t = t.caller)
                  }

                  return 'generated-stack:\n' + n.join('\n')
                })(),
              severity: 'error',
              type: 'uncaught',
            }
          upload(messageObj, fundebug, breadcrumbExports)
          return false
        }
      }
    },
    /**
     * [9] get error message
     * @param {*} module
     * @param {*} t
     */
    function (module, t) {
      module.exports = function (error) {
        if (!error) return null
        var obj = {}
        window.XMLHttpRequest
          ? (obj =
              'string' == typeof error
                ? {
                    message: error,
                  }
                : {
                    name: error.name,
                    message: error.message,
                    fileName: error.fileName || error.sourceURL,
                    lineNumber: error.lineNumber || error.line,
                    columnNumber: error.columnNumber || error.column,
                  })
          : (obj.message = error.message)
        return obj
      }
    },
    /**
     * [10] addEventListener error
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var upload = loader(2)

      module.exports = function (fundebug, breadcrumbExports) {
        window.addEventListener &&
          window.addEventListener(
            'error',
            function (errorEvent) {
              try {
                if (fundebug.silentResource || errorEvent.message) return
                var target,
                  elementHtml =
                    (target = errorEvent.target ? errorEvent.target : errorEvent.srcElement) && target.outerHTML
                elementHtml && 200 < elementHtml.length && (elementHtml = elementHtml.slice(0, 200))
                var messageObj = {
                  type: 'resourceError',
                  target: {
                    outerHTML: elementHtml,
                    src: target && target.src,
                    tagName: target && target.tagName,
                    id: target && target.id,
                    className: target && target.className,
                    name: target && target.name,
                    type: target && target.type,
                    XPath: (function (_target) {
                      for (
                        var t = [];
                        _target && _target.nodeType === Node.ELEMENT_NODE;
                        _target = _target.parentNode
                      ) {
                        var _previousSibling,
                          r = 0,
                          i = false

                        for (
                          _previousSibling = _target.previousSibling;
                          _previousSibling;
                          _previousSibling = _previousSibling.previousSibling
                        )
                          _previousSibling.nodeType !== Node.DOCUMENT_TYPE_NODE &&
                            _previousSibling.nodeName === _target.nodeName &&
                            ++r

                        for (
                          _previousSibling = _target.nextSibling;
                          _previousSibling && !i;
                          _previousSibling = _previousSibling.nextSibling
                        )
                          _previousSibling.nodeName === _target.nodeName && (i = true)

                        var o = (_target.prefix ? _target.prefix + ':' : '') + _target.localName,
                          a = r || i ? '[' + (r + 1) + ']' : ''
                        t.splice(0, 0, o + a)
                      }

                      return t.length ? '/' + t.join('/') : null
                    })(target),
                    selector: (function (_target) {
                      for (var t = []; _target.parentNode; ) {
                        if (_target.id) {
                          t.unshift('#' + _target.id)
                          break
                        }

                        if (_target === _target.ownerDocument.documentElement) t.unshift(_target.tagName)
                        else {
                          for (var n = 1, r = _target; r.previousElementSibling; r = r.previousElementSibling, n++);

                          t.unshift(_target.tagName + ':nth-child(' + n + ')')
                        }
                        _target = _target.parentNode
                      }

                      return t.join(' > ')
                    })(target),
                    timeStamp: errorEvent.timeStamp,
                  },
                }
                if (target.src === window.location.href) return
                if (target.src && target.src.match(/.*\/(.*)$/) && !target.src.match(/.*\/(.*)$/)[1]) return

                if (messageObj.target.src && window.XMLHttpRequest) {
                  var xhr = new XMLHttpRequest()
                  ;(xhr.sendByFundebug = true),
                    xhr.open('HEAD', messageObj.target.src),
                    xhr.send(),
                    (xhr.onload = function (e) {
                      200 !== e.target.status &&
                        ((messageObj.target.status = e.target.status),
                        (messageObj.target.statusText = e.target.statusText),
                        upload(messageObj, fundebug, breadcrumbExports))
                    })
                }
              } catch (o) {}
            },
            true
          )
      }
    },
    /**
     * [11] get fetch
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var { ifReportHttpError, ifReportHttpTimout, sendHttpErrorToFundebug } = loader(12)

      module.exports = function (fundebug, breadcrumbExports) {
        if (window.fetch) {
          var windowFetch = window.fetch

          window.fetch = function (e, reqInit) {
            var startTime = new Date().getTime()
            return windowFetch.apply(this, arguments).then(function (res) {
              ;(function (_response) {
                try {
                  var elapsedTime = new Date().getTime() - startTime,
                    method = (reqInit && reqInit.method) || 'GET',
                    url = _response.url,
                    status = _response.status,
                    statusText = _response.statusText
                  !(function (_method, _url, _status, _statusText, _elapsedTime) {
                    if (
                      !fundebug.silentHttp &&
                      (ifReportHttpError(_status, _url) || ifReportHttpTimout(_elapsedTime, fundebug.httpTimeout))
                    ) {
                      var type,
                        req = {
                          method: _method,
                          url: _url,
                        },
                        response = {
                          status: _status,
                          statusText: _statusText,
                          elapsedTime: _elapsedTime,
                        }
                      ;(type = ifReportHttpError(_status, _url) ? 'httpError' : 'httpTimeout'),
                        sendHttpErrorToFundebug(type, req, response, fundebug, breadcrumbExports)
                    }
                  })(method, url, status, statusText, elapsedTime),
                    (function (_method, _url, _status, _statusText, _elapsedTime, time) {
                      if (!fundebug.silentBehavior) {
                        var messageObj = {
                          type: 'fetch',
                          page: {
                            url: window.location.href,
                            title: document.title,
                          },
                          detail: {
                            method: _method,
                            url: _url,
                            status: _status,
                            statusText: _statusText,
                          },
                          elapsedTime: _elapsedTime,
                          time: time,
                        }
                        breadcrumbExports.addBreadcrumb(messageObj, fundebug.silentBehavior, fundebug.breadcrumbSize)
                      }
                    })(method, url, status, statusText, elapsedTime, startTime)
                } catch (a) {}
              })(res)
              return res
            })
          }
        }
      }
    },
    /**
     * [12] tools
     * @param {*} e
     * @param {*} exports
     * @param {*} loader
     */
    function (e, exports, loader) {
      var upload = loader(2)
      exports.ifReportHttpTimout = function (elapsedTime, timeout) {
        return 'number' == typeof timeout && timeout < elapsedTime
      }
      exports.ifReportHttpError = function (status, url) {
        return !((0 === status && /^file:\/\/\//.test(url)) || /^2\d\d$/.test(status))
      }
      exports.sendHttpErrorToFundebug = function (type, req, response, fundebug, breadcrumbExports) {
        var messageObj = {
          type: type,
          req: req,
          res: response,
        }
        'number' == typeof fundebug.httpTimeout && (messageObj.httpTimeout = fundebug.httpTimeout),
          upload(messageObj, fundebug, breadcrumbExports)
      }
    },
    /**
     * [13]
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var { copyWithoutPrivacy, copyWithoutCircle } = loader(14),
        { ifReportHttpTimout, ifReportHttpError, sendHttpErrorToFundebug } = loader(12)

      module.exports = function (fundebug, breadcrumbExports) {
        if (window.XMLHttpRequest && window.XMLHttpRequest.prototype) {
          var xhrOpen = XMLHttpRequest.prototype.open

          XMLHttpRequest.prototype.open = function (method, url) {
            try {
              this.fundebugTemp = {
                method: method,
                url: url,
                startTime: new Date().getTime(),
              }
            } catch (n) {}

            xhrOpen && xhrOpen.apply(this, arguments)
          }

          var xhrSend = XMLHttpRequest.prototype.send

          XMLHttpRequest.prototype.send = function (body) {
            try {
              if (!this.sendByFundebug) {
                var self = this
                self.fundebugTemp.fundebugHttpRecorded = false
                var xhrOnLoadend = self.onloadend

                self.onloadend = function () {
                  !(function (_self, _body) {
                    try {
                      var body,
                        currTime = new Date().getTime(),
                        startTime = _self.fundebugTemp.startTime,
                        elapsedTime = currTime - startTime,
                        method = _self.fundebugTemp.method,
                        url = _self.responseURL || _self.fundebugTemp.url,
                        status = _self.status,
                        statusText = _self.statusText,
                        response = _self.response
                      fundebug.setHttpBody && (body = copyWithoutPrivacy(_body)),
                        _self.fundebugTemp.fundebugHttpRecorded ||
                          ((function (method, url, body, status, statusText, response, elapsedTime) {
                            if (
                              !fundebug.silentHttp &&
                              (ifReportHttpError(status, url) || ifReportHttpTimout(elapsedTime, fundebug.httpTimeout))
                            ) {
                              var type,
                                req = {
                                  method: method,
                                  url: url,
                                  body: body,
                                },
                                response = {
                                  status: status,
                                  statusText: statusText,
                                  response: response,
                                  elapsedTime: elapsedTime,
                                }
                              ;(type = ifReportHttpError(status, url) ? 'httpError' : 'httpTimeout'),
                                sendHttpErrorToFundebug(type, req, response, fundebug, breadcrumbExports)
                            }
                          })(method, url, body, status, statusText, response, elapsedTime),
                          (function (method, url, status, statusText, elapsedTime, time) {
                            if (!fundebug.silentBehavior) {
                              var messageObj = {
                                type: 'XMLHttpRequest',
                                page: {
                                  url: window.location.href,
                                },
                                detail: {
                                  method: method,
                                  url: url,
                                  status: status,
                                  statusText: statusText,
                                },
                                elapsedTime: elapsedTime,
                                time: time,
                              }
                              breadcrumbExports.addBreadcrumb(
                                messageObj,
                                fundebug.silentBehavior,
                                fundebug.breadcrumbSize
                              )
                            }
                          })(method, url, status, statusText, elapsedTime, startTime),
                          (_self.fundebugTemp.fundebugHttpRecorded = true))
                    } catch (f) {}
                  })(self, body)
                  xhrOnLoadend && xhrOnLoadend.apply(this, arguments)
                }
              }
            } catch (r) {}

            xhrSend && xhrSend.apply(this, arguments)
          }
        }
      }
    },
    /**
     * [14] tools
     * @param {*} e
     * @param {*} exports
     */
    function (e, exports) {
      exports.copyWithoutPrivacy = function (e) {
        try {
          var t = e
          return (
            'string' == typeof e &&
              (t = JSON.parse(e)).password &&
              (t.password = 'Fundebug: deleted for protectiong privary'),
            t
          )
        } catch (n) {
          return e
        }
      }
      exports.copyWithoutCircle = function (e) {
        return e &&
          'object' == typeof e &&
          (function (e) {
            try {
              JSON.stringify(e)
            } catch (t) {
              return !!(
                t.message.includes('Converting circular structure to JSON') ||
                t.message.includes('JSON.stringify cannot serialize cyclic structures') ||
                t.message.includes('cyclic object value') ||
                t.message.includes('Circular reference in value argument not supported') ||
                t.message.includes('循环引用')
              )
            }

            return false
          })(e)
          ? 'entries' in Object
            ? (function r(e, i) {
                try {
                  var o = {}
                  return (
                    Object.entries(e).forEach(function (e) {
                      var t = e[0],
                        n = e[1]
                      'object' == typeof n && null !== n
                        ? i.has(n)
                          ? (o[t] = 'property removed because of circular structure')
                          : 10 < i.size
                          ? (o[t] = 'property removed to avoid deep recursion')
                          : (i.add(n), (o[t] = r(n, i)))
                        : (o[t] = n)
                    }),
                    o
                  )
                } catch (t) {
                  return e
                }
              })(e, new Set([e]))
            : {}
          : e
      }
    },
    /**
     * [15] get websocket error
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var upload = loader(2)

      module.exports = function (fundebug, breadcrumbExports) {
        try {
          if (fundebug.silentWebsocket) return
          if (!('WebSocket' in window)) return
          var errorDescriptor = Object.getOwnPropertyDescriptor(WebSocket.prototype, 'onerror')
          if (!errorDescriptor) return
          if (!errorDescriptor.configurable) return
          Object.defineProperty(WebSocket.prototype, 'onerror', {
            set: function () {
              if (fundebug.silentWebsocket) return errorDescriptor.set.apply(this, arguments)

              try {
                var r = arguments[0]
                return errorDescriptor.set.apply(this, [
                  function (e) {
                    try {
                      var messageObj = {
                        type: 'websocketError',
                        target: {
                          type: 'onerror',
                          url: e.target.url,
                          timeStamp: e.timeStamp,
                        },
                      }
                      upload(messageObj, fundebug, breadcrumbExports), 'function' == typeof r && r.apply(this, arguments)
                    } catch (n) {
                      'function' == typeof r && r.apply(this, arguments)
                    }
                  },
                ])
              } catch (e) {
                return errorDescriptor.set.apply(this, arguments)
              }
            },
          })
        } catch (e) {}
      }
    },
    /**
     * [16]
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      loader(2) //?
      loader(4) // ?
      module.exports = function (fundebug) {
        fundebug.init = function (configs) {
          for (
            var index = 0,
              configKeys = [
                'apikey',
                'appversion',
                'releasestage',
                'user',
                'metaData',
                'callback',
                'setHttpBody',
                'httpTimeout',
                'filters',
                'silent',
                'silentDev',
                'silentResource',
                'silentHttp',
                'silentWebsocket',
                'silentConsole',
                'silentPerformance',
                'sampleRate',
                'domain',
                'notifierUrl',
                'breadcrumbSize',
                'silentPromise',
                'maxRevideoSizeInByte',
              ];
            index < configKeys.length;
            index++
          ) {
            var configKey = configKeys[index]
            configs[configKey] && (fundebug[configKey] = configs[configKey])
          }
        }
      }
    },
    /**
     * [17] notifyError
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var upload = loader(2),
        xhrMessage = loader(9)

      module.exports = function (fundebug, breadcrumbExports) {
        fundebug.notifyError = function (e, t) {
          if (e) {
            window.console && console.error(e)
            var n = xhrMessage(e),
              messageObj = {
                name: n.name || (t && t.name) || 'caught error',
                message: n.message || (t && t.message),
                stacktrace: e.stack,
                fileName: n.fileName,
                lineNumber: n.lineNumber,
                columnNumber: n.columnNumber,
                severity: (t && t.severity) || 'error',
                type: 'caught',
                user: t && t.user,
                metaData: t && t.metaData,
              }
            upload(messageObj, fundebug, breadcrumbExports)
          }
        }
      }
    },
    /**
     * [18] notify
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var upload = loader(2),
        { verifyApiKey } = loader(4)

      module.exports = function (fundebug, breadcrumbExports) {
        fundebug.notify = function (e, t, n) {
          if (e) {
            var messageObj = {
                message: t || (n && n.message),
                name: e || (n && n.name),
                severity: (n && n.message) || 'warning',
                stacktrace: (function () {
                  var e

                  try {
                    throw new Error('')
                  } catch (t) {
                    e = t.stack
                  }

                  if (e)
                    return (
                      'generated-stack:\n' +
                      (e = e.replace(/(.*?)fundebug(.*?)\.js(.*)\n?/gm, '')).replace(/^Error\n/g, '')
                    )
                })(),
                type: 'notification',
                user: n && n.user,
                metaData: n && n.metaData,
              },
              i = fundebug.apikey
            return verifyApiKey(i, true)
              ? (upload(messageObj, fundebug, breadcrumbExports),
                'fundebug.com' === location.host || 'www.fundebug.com' === location.host
                  ? '亲，不要在Fundebug网站测试哦；请将Fundebug插件集成到您的网站，然后进行测试!'
                  : '请查看邮箱以及Fundebug控制台!')
              : i
              ? 'apikey格式错误'
              : '请配置apikey'
          }
        }
      }
    },
    /**
     * [19] test
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var upload = loader(2),
        { verifyApiKey } = loader(4)

      module.exports = function (fundebug, breadcrumbExports) {
        fundebug.test = function (e, t) {
          var messageObj = {
              name: e || 'Test',
              message: t || 'Hello, Fundebug!',
              severity: 'test',
              type: 'test',
            },
            r = fundebug.apikey
          return verifyApiKey(r, true)
            ? (upload(messageObj, fundebug, breadcrumbExports),
              'fundebug.com' === location.host || 'www.fundebug.com' === location.host
                ? '亲，不要在Fundebug网站测试哦；请将Fundebug插件集成到您的网站，然后进行测试!'
                : '请查看邮箱以及Fundebug控制台!')
            : r
            ? 'apikey格式错误'
            : '请配置apikey'
        }
      }
    },
    /**
     * [20] get click info
     * @param {*} module
     * @param {*} t
     */
    function (module, t) {
      module.exports = function (fundebug, breadcrumbExports) {
        function onClick(e) {
          var target,
            targetHtml = (target = e.target ? e.target : e.srcElement) && target.outerHTML
          targetHtml && 200 < targetHtml.length && (targetHtml = targetHtml.slice(0, 200))
          var messageObj = {
            type: 'click',
            page: {
              url: window.location.href,
              title: document.title,
            },
            detail: {
              outerHTML: targetHtml,
              tagName: target && target.tagName,
              id: target && target.id,
              className: target && target.className,
              name: target && target.name,
            },
            time: new Date().getTime(),
          }
          breadcrumbExports.addBreadcrumb(messageObj, fundebug.silentBehavior, fundebug.breadcrumbSize)
        }

        window.addEventListener ? window.addEventListener('click', onClick, true) : document.attachEvent('onclick', onClick)
      }
    },
    /**
     * [21] history info
     * @param {*} module
     * @param {*} t
     */
    function (module, t) {
      module.exports = function (fundebug, breadcrumbExports) {
        var obj = {
          url: window.location.href,
          title: '',
        }
        document.addEventListener
          ? document.addEventListener('DOMContentLoaded', function () {
              obj = {
                url: window.location.href,
                title: document.title,
              }
            })
          : document.attachEvent('onreadystatechange', function () {
              obj = {
                url: window.location.href,
                title: document.title,
              }
            })
        var windowOnPopState = window.onpopstate

        window.onpopstate = function () {
          var e = {
            url: window.location.href,
          }
          if ((obj.title || (obj.title = document.title), obj.url !== e.url && handleMessage(obj, e), windowOnPopState)) return windowOnPopState.apply(this, arguments)
        }

        var windowPushState = window.history.pushState
        windowPushState &&
          (window.history.pushState = function () {
            obj = {
              url: window.location.href,
              title: document.title,
            }
            var e = {}
            if ((3 === arguments.length && (e.url = arguments[2]), obj.url !== e.url && handleMessage(obj, e), windowPushState))
              return windowPushState.apply(this, arguments)
          })
        var windowOnHashChange = window.onhashchange

        function handleMessage(e, t) {
          var messageObj = {
            type: 'navigation',
            detail: {
              from: e,
              to: (obj = t), // ?
            },
            time: new Date().getTime(),
          }
          JSON.stringify(messageObj, null, 4),
            breadcrumbExports.addBreadcrumb(messageObj, fundebug.silentBehavior, fundebug.breadcrumbSize)
        }

        window.onhashchange,
          (window.onhashchange = function () {
            var e = {
              url: window.location.href,
              title: document.title,
            }
            if ((obj.url !== e.url && handleMessage(obj, e), windowOnHashChange)) return windowOnHashChange.apply(this, arguments)
          })
      }
    },
    /**
     * [22] console
     * @param {*} module
     * @param {*} t
     * @param {*} loader
     */
    function (module, t, loader) {
      var { copyWithoutCircle } = loader(14)

      module.exports = function (fundebug, breadcrumbExports) {
        function e(i) {
          var o = console[i]

          console[i] = function () {
            try {
              var messageObj = {
                type: 'console',
                page: {
                  url: window.location.href,
                  title: document.title,
                },
                detail: {
                  level: i,
                  arguments:
                    ((t = arguments), t[0] instanceof Error ? [].slice.apply(t).join(' ') : copyWithoutCircle(t)),
                },
                time: new Date().getTime(),
              }
              fundebug.silentConsole ||
                breadcrumbExports.addBreadcrumb(messageObj, fundebug.silentBehavior, fundebug.breadcrumbSize)
            } catch (r) {}

            var t
            if ('function' == typeof o)
              if (o.apply) o.apply(console, arguments)
              else {
                var n = Array.prototype.slice.apply(arguments).join(' ')
                o(n)
              }
          }
        }

        for (var levels = ['log', 'warn', 'debug', 'info'], n = {}, index = 0; index < levels.length; index++)
          window.console && ((n[levels[index]] = console[levels[index]]), fundebug.silentConsole || e(levels[index]))

        document.addEventListener &&
          document.addEventListener('DOMContentLoaded', function () {
            for (var e = 0; e < levels.length; e++)
              window.console && fundebug.silentConsole && n[levels[e]] && (console[levels[e]] = n[levels[e]])
          })
      }
    },
    /**
     * [23] get config from script element
     * @param {*} e
     * @param {*} exports
     */
    function (e, exports) {
      var scriptEle = (function () {
        var _scriptEle = document.currentScript

        if (!_scriptEle) {
          var scripts = document.scripts
          _scriptEle = scripts[scripts.length - 1]
        }

        return _scriptEle
      })()

      exports.getConfig = function () {
        var config = {}
        return (
          (config.silent = scriptEle.getAttribute('silent') || false),
          'false' === config.silent && (config.silent = false),
          (config.maxEventNumber =
            scriptEle.getAttribute('maxEventNumber') || scriptEle.getAttribute('maxeventnumber') || 10),
          (config.setHttpBody =
            scriptEle.getAttribute('setHttpBody') || scriptEle.getAttribute('sethttpbody') || false),
          'false' === config.setHttpBody && (config.setHttpBody = false),
          (config.silentResource =
            scriptEle.getAttribute('silentResource') || scriptEle.getAttribute('silentresource') || false),
          'false' === config.silentResource && (config.silentResource = false),
          (config.silentWebsocket =
            scriptEle.getAttribute('silentWebsocket') || scriptEle.getAttribute('silentWebsocket') || false),
          'false' === config.silentWebsocket && (config.silentWebsocket = false),
          (config.silentHttp = scriptEle.getAttribute('silentHttp') || scriptEle.getAttribute('silenthttp') || false),
          'false' === config.silentHttp && (config.silentHttp = false),
          (config.silentConsole =
            scriptEle.getAttribute('silentConsole') || scriptEle.getAttribute('silentconsole') || false),
          'false' === config.silentConsole && (config.silentConsole = false),
          (config.sampleRate = scriptEle.getAttribute('sampleRate') || scriptEle.getAttribute('samplerate')),
          (config.silentBehavior =
            scriptEle.getAttribute('silentBehavior') || scriptEle.getAttribute('silentbehavior') || false),
          'false' === config.silentBehavior && (config.silentBehavior = false),
          (config.silentPerformance =
            scriptEle.getAttribute('silentPerformance') || scriptEle.getAttribute('silentperformance') || false),
          'false' === config.silentPerformance && (config.silentPerformance = false),
          (config.silentDev = scriptEle.getAttribute('silentDev') || scriptEle.getAttribute('silentdev') || false),
          'false' === config.silentDev && (config.silentDev = false),
          (config.apikey = scriptEle.getAttribute('apikey')),
          (config.appversion = scriptEle.getAttribute('appversion')),
          (config.releasestage = scriptEle.getAttribute('releasestage')),
          (config.notifierUrl = scriptEle.getAttribute('notifierUrl') || 'https://web.fundebug.net/event/'),
          scriptEle.getAttribute('breadcrumbSize') &&
            (config.breadcrumbSize = parseInt(scriptEle.getAttribute('breadcrumbSize'))),
          (config.silentPromise =
            scriptEle.getAttribute('silentPromise') || scriptEle.getAttribute('silentPromise') || false),
          'false' === config.silentPromise && (config.silentPromise = false),
          config
        )
      }
    },
    /**
     * [24] tools breadcrumb
     * @param {*} e
     * @param {*} exports
     */
    function (e, exports) {
      var defaultBreadCrumbSize = 20,
        existedBreadCrumbInfo = [],
        length = 0

      function addBreadcrumb(breadCrumbInfo, isSilent, maxBreadCrumbSize) {
        isSilent ||
          ((existedBreadCrumbInfo[length] = breadCrumbInfo),
          maxBreadCrumbSize && maxBreadCrumbSize < 100 && (defaultBreadCrumbSize = maxBreadCrumbSize),
          ++length === defaultBreadCrumbSize && (length = 0))
      }

      exports.getBreadcrumbs = function () {
        return existedBreadCrumbInfo
      }
      exports.addBreadcrumb = addBreadcrumb
      exports.leaveBreadcrumb = function (e) {
        addBreadcrumb(
          {
            type: 'userDefined',
            detail: {
              userdefined: e,
            },
            time: new Date().getTime(),
          },
          false,
          defaultBreadCrumbSize
        )
      }
    },
    /**
     * [25] leaveBreadcrumb
     * @param {*} module
     * @param {*} t
     */
    function (module, t) {
      module.exports = function (fundebug, breadcrumbExports) {
        fundebug.leaveBreadcrumb = function (e) {
          breadcrumbExports.leaveBreadcrumb(e)
        }
      }
    },
  ])
})
