var _0x2a1c = [
  'has',
  'class',
  'match',
  'attrValue',
  'string',
  'options',
  'elementFilter',
  'all',
  'observerCallback',
  'Invalid options: callback is required and must be a function',
  'length',
  'Invalid request option. element only allows elementAttributes option.',
  'changesToReport',
  'keys',
  'push',
  'later one:',
  'concat',
  'selfSelector',
  'isSmallContent',
  'nodeName',
  'defineProperty',
  '__esModule',
  'log',
  'getValue',
  'previousElementSibling',
  'calculatePinpoint',
  'Cannot call a class as a function',
  'name',
  'AttributeElement: ',
  'setAttributeList',
  'value',
  'inputType',
  'input',
  'scroll',
  'restart',
  'emit',
  'init',
  'events',
  'splice',
  'top',
  'innerHTML',
  'scrollLeft',
  'setPrototypeOf',
  '_events',
  'call',
  'removeListener',
  'listener',
  'scrollY',
  'getTime',
  'sceneDecoded',
  'charCodeAt',
  'btoa',
  'Base64',
  '__proto__',
  'TYPED_ARRAY_SUPPORT',
  'number',
  'byteLength',
  'Arguments must be Buffers',
  'isBuffer',
  'function',
  'Buffer size must be a multiple of 32-bits',
  'Argument must be a Buffer',
  'val must be string, number or Buffer',
  'lastIndexOf',
  'binary',
  'subarray',
  'readIntLE',
  'readFloatBE',
  'pow',
  'exports',
  '[object Array]',
  'key',
  'actions',
  'getType',
  'fromCharCode',
  'position',
  'multipleFragmentMaxLength',
  'stringify',
  'initMutationObserver',
  'observer',
  'type',
  'querySelectorAll',
  'funRemoved',
  'default',
  'map',
  'added',
  'sequence',
  'pushFragmentToSequence',
  'singleFragmentMaxLength',
  'calculateSequenceLen',
  'nodes',
  'prototype',
  'node',
  'attributeOldValues',
  'removedNodes',
  'addedNodes',
  'reordered',
  'parentNode',
  'getOldPreviousSibling',
  'childListChangeMap',
  'treeChanges',
  'get',
  'getAttribute',
  'oldParentNode',
  'oldPrevious',
]
!(function (t, e) {
  !(function (e) {
    for (; --e; ) t.push(t.shift())
  })(++e)
})(_0x2a1c, 391)

var _0x4475 = function (e, t) {
  return _0x2a1c[(e -= 0)]
}

!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.revideo = t())
    : (e.revideo = t())
})(this, function () {
  return (function (r) {
    var n = {}

    function i(e) {
      if (n[e]) return n[e].exports
      var t = (n[e] = {
        exports: {},
        id: e,
        loaded: !1,
      })
      return r[e].call(t.exports, t, t.exports, i), (t.loaded = !0), t.exports
    }

    return (i.m = r), (i.c = n), (i.p = ''), i(0)
  })([
    function (e, t, r) {
      'use strict'

      function n() {
        if (!document.all && !fundebug.silentVideo) {
          var e = r(1)

          if (e) {
            var t = new e('fundebug-revideo', {})
            t.init(), window.fundebug && (window.fundebug.revideo = t)
          }
        }
      }

      document.addEventListener &&
        (/comp|inter|loaded/.test(document.readyState) ? n() : document.addEventListener('DOMContentLoaded', n))
    },
    function (e, t, r) {
      'use strict'

      var n = (function () {
          function n(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }

          return function (e, t, r) {
            return t && n(e.prototype, t), r && n(e, r), e
          }
        })(),
        i = v(r(2)),
        o = v(r(3)),
        h = v(r(12)),
        f = v(r(6)),
        d = v(r(13)),
        a = v(r(14)),
        s = v(r(25)),
        l = v(r(4)),
        p = v(r(5)),
        u = v(r(26)),
        c = v(r(27))

      function v(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            }
      }

      var g = (function () {
        function r(e, t) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, r),
            (this.version = '0.4.0'),
            (this.singleFragmentMaxLength = 1e3),
            (this.multipleFragmentMaxLength = 2e3),
            (this.MAXESTLENGTH = 1e4),
            (this.maxTimeSpan = 2e4),
            (this.timeSpanCount = 0),
            (this.lengthOverflowCheckTimeSpan = 5e3),
            (this.options = t),
            (this.recorder = null),
            (this.redoIntervalId = null),
            (this.observer = null),
            (this.vedio = null),
            (this.sequence = []),
            (this.actions = [])
        }

        return (
          n(r, [
            {
              key: 'send',
              value: function () {
                var e = this.fetchSequence(),
                  t = JSON.stringify(e)
                u.default.sendToServer(this.url, t)
              },
            },
            {
              key: 'fetchSequence',
              value: function () {
                this.pushFragmentToSequence(0)
                var e = []

                try {
                  ;(e = JSON.stringify(this.sequence)), JSON.parse(e)
                } catch (e) {
                  this.sequence
                }

                var t = ''

                try {
                  t = l.default.isSafariOrWKWebview() ? c.default.compressToBase64(e) : c.default.compress(e)
                } catch (e) {}

                return {
                  isSafariOrWKWebview: l.default.isSafariOrWKWebview(),
                  sequence: t,
                }
              },
            },
            {
              key: 'getSequence',
              value: function () {
                return this.sequence
              },
            },
            {
              key: 'init',
              value: function () {
                this.initRecorder(), this.initAction(), this.monitorRedo()
              },
            },
            {
              key: 'initRecorder',
              value: function () {
                if (((this.vedio = null), this.recorder)) this.recorder.restart()
                else {
                  this.recorder = new a.default.Recorder({
                    target: document.documentElement,
                  })
                  var t = this
                  this.recorder.on('fun_recording', function (e) {
                    t.vedio = t.recorder.getVedio()
                  }),
                    this.recorder.start()
                }
              },
            },
            {
              key: 'initAction',
              value: function () {
                ;(this.actions = []), this.initMutationObserver(), this.initInput()
              },
            },
            {
              key: 'initMutationObserver',
              value: function () {
                this.observer && this.observer.disconnect()
                var r = this

                try {
                  this.observer = new i.default({
                    callback: function (e) {
                      r.addInputListenterToNodeList(e)
                      var t = o.default.parseMutations(e)
                      r.actions = r.actions.concat(t)
                    },
                    queries: [
                      {
                        all: !0,
                      },
                    ],
                    oldPreviousSibling: !0,
                  })
                } catch (e) {
                  return null
                }
              },
            },
            {
              key: 'initInput',
              value: function () {
                this.injectAllInputIn(document)
              },
            },
            {
              key: 'injectAllInputIn',
              value: function (u) {
                var c = this
                ;['input', 'textarea', 'select'].map(function (e) {
                  function n(e, t, r, n) {
                    var i = n.actions.length

                    if (0 < i) {
                      var o = n.actions[i - 1]
                      if (4 === o.getActionType() && o.getActionData().getInput().getValue() === r) return
                    }

                    var a = new h.default(t, e.type, r),
                      s = new p.default(),
                      u = new p.default(),
                      c = new d.default(e, a, s, u),
                      l = new f.default(4, c)
                    n.actions.push(l)
                  }

                  if (u && u.querySelectorAll) {
                    var i,
                      t,
                      o,
                      r,
                      a = u.querySelectorAll(e),
                      s = l.default.fromList(a)
                    if (0 !== s.length)
                      (i = e),
                        (t = s),
                        (o = {}),
                        (r = setInterval(function () {
                          0 ===
                            (t = t.filter(function (e) {
                              return e.funRemoved && delete o[e.funId], !e.funRemoved
                            })).length && clearInterval(r),
                            t.map(function (e) {
                              var t = null
                              t =
                                e && 'password' === e.type
                                  ? e.value
                                    ? 'XXXXXXXX'
                                    : e.value
                                  : 'radio' === e.type || 'checkbox' === e.type
                                  ? e.checked
                                  : e.value
                              var r = e.funId

                              if (r) {
                                if (o[r] === t) return
                                ;(o[e.funId] = t), n(e, i, t, c)
                              } else (e.funId = l.default.uniqueID()), (o[e.funId] = t), n(e, i, t, c)
                            })
                        }, 100))
                  }
                })
              },
            },
            {
              key: 'addInputListenterToNodeList',
              value: function (e) {
                var r = this
                e.map(function (e) {
                  var t = o.default.extractCleanNodes(e.added)
                  ;(e.added = t).map(function (e) {
                    r.injectAllInputIn(e)
                  })
                })
              },
            },
            {
              key: 'monitorRedo',
              value: function () {
                this.redoIntervalId && window.clearInterval(this.redoIntervalId)
                var e = this
                this.redoIntervalId = setInterval(function () {
                  if ((e.timeSpanCount++, 2 <= e.timeSpanCount))
                    return (
                      (e.timeSpanCount = 0),
                      1 < e.sequence.length && e.sequence.shift(),
                      void e.pushFragmentToSequence(0)
                    )
                  ;(e.vedio && e.vedio.getFramesLength()) + e.actions.length > e.singleFragmentMaxLength &&
                    e.pushFragmentToSequence(0)
                }, this.lengthOverflowCheckTimeSpan)
              },
            },
            {
              key: 'pushFragmentToSequence',
              value: function (e) {
                this.vedio = this.recorder.getVedio()
                var t = new s.default(e, this.vedio, this.actions)
                this.sequence.push(t), this.checkLengthToshiftSequence(), this.init()
              },
            },
            {
              key: 'checkLengthToshiftSequence',
              value: function () {
                var e = this.calculateTotalLength()
                e > this.multipleFragmentMaxLength &&
                  (1 < this.calculateSequenceLen() || e > this.MAXESTLENGTH) &&
                  this.sequence.shift()
              },
            },
            {
              key: 'calculateTotalLength',
              value: function () {
                return this.sequence.reduce(function (e, t) {
                  return e + t.getVedioFrameLength() + t.getActionsLength()
                }, 0)
              },
            },
            {
              key: 'calculateSequenceLen',
              value: function () {
                return this.sequence.length
              },
            },
            {
              key: 'clear',
              value: function () {
                window.clearInterval(this.redoIntervalId),
                  (this.sequence = []),
                  (this.vedio = null),
                  (this.actions = []),
                  (this.recorder = null),
                  (this.redoIntervalId = null)
              },
            },
          ]),
          r
        )
      })()

      e.exports = g
    },
    function (e, t) {
      var r,
        n =
          this.__extends ||
          function (e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])

            function n() {
              this.constructor = e
            }

            ;(n.prototype = t.prototype), (e.prototype = new n())
          }

      'undefined' != typeof WebKitMutationObserver
        ? (r = WebKitMutationObserver)
        : document.all || (r = MutationObserver)

      var d,
        i,
        u = (function () {
          function r() {
            ;(this.nodes = []), (this.values = [])
          }

          return (
            (r.prototype.isIndex = function (e) {
              return +e == e >>> 0
            }),
            (r.prototype.nodeId = function (e) {
              var t = e[r.ID_PROP]
              return t || (t = e[r.ID_PROP] = r.nextId_++), t
            }),
            (r.prototype.set = function (e, t) {
              var r = this.nodeId(e)
              ;(this.nodes[r] = e), (this.values[r] = t)
            }),
            (r.prototype.get = function (e) {
              var t = this.nodeId(e)
              return this.values[t]
            }),
            (r.prototype.has = function (e) {
              return this.nodeId(e) in this.nodes
            }),
            (r.prototype.delete = function (e) {
              var t = this.nodeId(e)
              delete this.nodes[t], (this.values[t] = void 0)
            }),
            (r.prototype.keys = function () {
              var e = []

              for (var t in this.nodes) this.isIndex(t) && e.push(this.nodes[t])

              return e
            }),
            (r.ID_PROP = '__mutation_summary_node_map_id__'),
            (r.nextId_ = 1),
            r
          )
        })()

      ;((i = d || (d = {}))[(i.STAYED_OUT = 0)] = 'STAYED_OUT'),
        (i[(i.ENTERED = 1)] = 'ENTERED'),
        (i[(i.STAYED_IN = 2)] = 'STAYED_IN'),
        (i[(i.REPARENTED = 3)] = 'REPARENTED'),
        (i[(i.REORDERED = 4)] = 'REORDERED'),
        (i[(i.EXITED = 5)] = 'EXITED')

      var o = (function () {
          function e(e, t, r, n, i, o, a, s) {
            void 0 === t && (t = !1),
              void 0 === r && (r = !1),
              void 0 === n && (n = !1),
              void 0 === i && (i = null),
              void 0 === o && (o = !1),
              void 0 === a && (a = null),
              void 0 === s && (s = null),
              (this.node = e),
              (this.childList = t),
              (this.attributes = r),
              (this.characterData = n),
              (this.oldParentNode = i),
              (this.added = o),
              (this.attributeOldValues = a),
              (this.characterDataOldValue = s),
              (this.isCaseInsensitive =
                this.node.nodeType === Node.ELEMENT_NODE &&
                this.node instanceof HTMLElement &&
                this.node.ownerDocument instanceof HTMLDocument)
          }

          return (
            (e.prototype.getAttributeOldValue = function (e) {
              if (this.attributeOldValues)
                return this.isCaseInsensitive && (e = e.toLowerCase()), this.attributeOldValues[e]
            }),
            (e.prototype.getAttributeNamesMutated = function () {
              var e = []
              if (!this.attributeOldValues) return e

              for (var t in this.attributeOldValues) e.push(t)

              return e
            }),
            (e.prototype.attributeMutated = function (e, t) {
              ;(this.attributes = !0),
                (this.attributeOldValues = this.attributeOldValues || {}),
                e in this.attributeOldValues || (this.attributeOldValues[e] = t)
            }),
            (e.prototype.characterDataMutated = function (e) {
              this.characterData || ((this.characterData = !0), (this.characterDataOldValue = e))
            }),
            (e.prototype.removedFromParent = function (e) {
              ;(this.childList = !0), this.added || this.oldParentNode ? (this.added = !1) : (this.oldParentNode = e)
            }),
            (e.prototype.insertedIntoParent = function () {
              ;(this.childList = !0), (this.added = !0)
            }),
            (e.prototype.getOldParent = function () {
              if (this.childList) {
                if (this.oldParentNode) return this.oldParentNode
                if (this.added) return null
              }

              return this.node.parentNode
            }),
            e
          )
        })(),
        a = function () {
          ;(this.added = new u()),
            (this.removed = new u()),
            (this.maybeMoved = new u()),
            (this.oldPrevious = new u()),
            (this.moved = void 0)
        },
        s = (function (a) {
          function e(e, t) {
            a.call(this),
              (this.rootNode = e),
              (this.reachableCache = void 0),
              (this.wasReachableCache = void 0),
              (this.anyParentsChanged = !1),
              (this.anyAttributesChanged = !1),
              (this.anyCharacterDataChanged = !1)

            for (var r = 0; r < t.length; r++) {
              var n = t[r]

              switch (n.type) {
                case 'childList':
                  this.anyParentsChanged = !0

                  for (var i = 0; i < n.removedNodes.length; i++) {
                    var o = n.removedNodes[i]
                    this.getChange(o).removedFromParent(n.target)
                  }

                  for (i = 0; i < n.addedNodes.length; i++) {
                    o = n.addedNodes[i]
                    this.getChange(o).insertedIntoParent()
                  }

                  break

                case 'attributes':
                  ;(this.anyAttributesChanged = !0),
                    this.getChange(n.target).attributeMutated(n.attributeName, n.oldValue)
                  break

                case 'characterData':
                  ;(this.anyCharacterDataChanged = !0), this.getChange(n.target).characterDataMutated(n.oldValue)
              }
            }
          }

          return (
            n(e, a),
            (e.prototype.getChange = function (e) {
              var t = this.get(e)
              return t || ((t = new o(e)), this.set(e, t)), t
            }),
            (e.prototype.getOldParent = function (e) {
              var t = this.get(e)
              return t ? t.getOldParent() : e.parentNode
            }),
            (e.prototype.getIsReachable = function (e) {
              if (e === this.rootNode) return !0
              if (!e) return !1
              this.reachableCache = this.reachableCache || new u()
              var t = this.reachableCache.get(e)
              return void 0 === t && ((t = this.getIsReachable(e.parentNode)), this.reachableCache.set(e, t)), t
            }),
            (e.prototype.getWasReachable = function (e, t) {
              if (200 <= ++t) return !1
              if (e === this.rootNode) return !0
              if (!e) return !1
              this.wasReachableCache = this.wasReachableCache || new u()
              var r = this.wasReachableCache.get(e)
              return (
                void 0 === r && ((r = this.getWasReachable(this.getOldParent(e), t)), this.wasReachableCache.set(e, r)),
                r
              )
            }),
            (e.prototype.reachabilityChange = function (e) {
              return this.getIsReachable(e)
                ? this.getWasReachable(e, 0)
                  ? d.STAYED_IN
                  : d.ENTERED
                : this.getWasReachable(e, 0)
                ? d.EXITED
                : d.STAYED_OUT
            }),
            e
          )
        })(u),
        c = (function () {
          function e(e, t, r, n, i) {
            ;(this.rootNode = e),
              (this.mutations = t),
              (this.selectors = r),
              (this.calcReordered = n),
              (this.calcOldPreviousSibling = i),
              (this.treeChanges = new s(e, t)),
              (this.entered = []),
              (this.exited = []),
              (this.stayedIn = new u()),
              (this.visited = new u()),
              (this.childListChangeMap = void 0),
              (this.characterDataOnly = void 0),
              (this.matchCache = void 0),
              this.processMutations()
          }

          return (
            (e.prototype.processMutations = function () {
              if (this.treeChanges.anyParentsChanged || this.treeChanges.anyAttributesChanged)
                for (var e = this.treeChanges.keys(), t = 0; t < e.length; t++) this.visitNode(e[t], void 0)
            }),
            (e.prototype.visitNode = function (e, t) {
              if (!this.visited.has(e)) {
                this.visited.set(e, !0)
                var r = this.treeChanges.get(e),
                  n = t

                if (
                  (((r && r.childList) || null == n) && (n = this.treeChanges.reachabilityChange(e)),
                  n !== d.STAYED_OUT)
                ) {
                  if ((this.matchabilityChange(e), n === d.ENTERED)) this.entered.push(e)
                  else if (n === d.EXITED) this.exited.push(e), this.ensureHasOldPreviousSiblingIfNeeded(e)
                  else if (n === d.STAYED_IN) {
                    var i = d.STAYED_IN
                    r &&
                      r.childList &&
                      (r.oldParentNode !== e.parentNode
                        ? ((i = d.REPARENTED), this.ensureHasOldPreviousSiblingIfNeeded(e))
                        : this.calcReordered && this.wasReordered(e) && (i = d.REORDERED)),
                      this.stayedIn.set(e, i)
                  }
                  if (n !== d.STAYED_IN) for (var o = e.firstChild; o; o = o.nextSibling) this.visitNode(o, n)
                }
              }
            }),
            (e.prototype.ensureHasOldPreviousSiblingIfNeeded = function (e) {
              if (this.calcOldPreviousSibling) {
                this.processChildlistChanges()
                var t = e.parentNode,
                  r = this.treeChanges.get(e)
                r && r.oldParentNode && (t = r.oldParentNode)
                var n = this.childListChangeMap.get(t)
                n || ((n = new a()), this.childListChangeMap.set(t, n)),
                  n.oldPrevious.has(e) || n.oldPrevious.set(e, e.previousSibling)
              }
            }),
            (e.prototype.getChanged = function (e, t, r) {
              ;(this.selectors = t), (this.characterDataOnly = r)

              for (var n = 0; n < this.entered.length; n++) {
                var i = this.entered[n]
                ;((s = this.matchabilityChange(i)) !== d.ENTERED && s !== d.STAYED_IN) || e.added.push(i)
              }

              var o = this.stayedIn.keys()

              for (n = 0; n < o.length; n++) {
                i = o[n]
                if ((s = this.matchabilityChange(i)) === d.ENTERED) e.added.push(i)
                else if (s === d.EXITED) e.removed.push(i)
                else if (s === d.STAYED_IN && (e.reparented || e.reordered)) {
                  var a = this.stayedIn.get(i)
                  e.reparented && a === d.REPARENTED
                    ? e.reparented.push(i)
                    : e.reordered && a === d.REORDERED && e.reordered.push(i)
                }
              }

              for (n = 0; n < this.exited.length; n++) {
                var s
                i = this.exited[n]
                ;((s = this.matchabilityChange(i)) !== d.EXITED && s !== d.STAYED_IN) || e.removed.push(i)
              }
            }),
            (e.prototype.getOldParentNode = function (e) {
              var t = this.treeChanges.get(e)
              if (t && t.childList) return t.oldParentNode ? t.oldParentNode : null
              var r = this.treeChanges.reachabilityChange(e)
              if (r === d.STAYED_OUT || r === d.ENTERED) throw Error('getOldParentNode requested on invalid node.')
              return e.parentNode
            }),
            (e.prototype.getOldPreviousSibling = function (e) {
              var t = e.parentNode,
                r = this.treeChanges.get(e)
              r && r.oldParentNode && (t = r.oldParentNode)
              var n = this.childListChangeMap.get(t)
              if (!n) throw Error('getOldPreviousSibling requested on invalid node.')
              return n.oldPrevious.get(e)
            }),
            (e.prototype.getOldAttribute = function (e, t) {
              var r = this.treeChanges.get(e)
              if (!r || !r.attributes) throw Error('getOldAttribute requested on invalid node.')
              var n = r.getAttributeOldValue(t)
              if (void 0 === n) throw Error('getOldAttribute requested for unchanged attribute name.')
              return n
            }),
            (e.prototype.attributeChangedNodes = function (e) {
              if (!this.treeChanges.anyAttributesChanged) return {}
              var t, r

              if (e) {
                ;(t = {}), (r = {})

                for (var n = 0; n < e.length; n++) {
                  ;(t[(h = e[n])] = !0), (r[h.toLowerCase()] = h)
                }
              }

              var i = {},
                o = this.treeChanges.keys()

              for (n = 0; n < o.length; n++) {
                var a = o[n],
                  s = this.treeChanges.get(a)
                if (
                  s.attributes &&
                  d.STAYED_IN === this.treeChanges.reachabilityChange(a) &&
                  d.STAYED_IN === this.matchabilityChange(a)
                )
                  for (var u = a, c = s.getAttributeNamesMutated(), l = 0; l < c.length; l++) {
                    var h = c[l]
                    if (!t || t[h] || (s.isCaseInsensitive && r[h]))
                      s.getAttributeOldValue(h) !== u.getAttribute(h) &&
                        (r && s.isCaseInsensitive && (h = r[h]), (i[h] = i[h] || []), i[h].push(u))
                  }
              }

              return i
            }),
            (e.prototype.getOldCharacterData = function (e) {
              var t = this.treeChanges.get(e)
              if (!t || !t.characterData) throw Error('getOldCharacterData requested on invalid node.')
              return t.characterDataOldValue
            }),
            (e.prototype.getCharacterDataChanged = function () {
              if (!this.treeChanges.anyCharacterDataChanged) return []

              for (var e = this.treeChanges.keys(), t = [], r = 0; r < e.length; r++) {
                var n = e[r]

                if (d.STAYED_IN === this.treeChanges.reachabilityChange(n)) {
                  var i = this.treeChanges.get(n)
                  i.characterData && n.textContent != i.characterDataOldValue && t.push(n)
                }
              }

              return t
            }),
            (e.prototype.computeMatchabilityChange = function (e, t) {
              this.matchCache || (this.matchCache = []), this.matchCache[e.uid] || (this.matchCache[e.uid] = new u())
              var r = this.matchCache[e.uid],
                n = r.get(t)
              return void 0 === n && ((n = e.matchabilityChange(t, this.treeChanges.get(t))), r.set(t, n)), n
            }),
            (e.prototype.matchabilityChange = function (e) {
              var t = this
              if (this.characterDataOnly)
                switch (e.nodeType) {
                  case Node.COMMENT_NODE:
                  case Node.TEXT_NODE:
                    return d.STAYED_IN

                  default:
                    return d.STAYED_OUT
                }
              if (!this.selectors) return d.STAYED_IN
              if (e.nodeType !== Node.ELEMENT_NODE) return d.STAYED_OUT

              for (
                var r = e,
                  n = this.selectors.map(function (e) {
                    return t.computeMatchabilityChange(e, r)
                  }),
                  i = d.STAYED_OUT,
                  o = 0;
                i !== d.STAYED_IN && o < n.length;

              ) {
                switch (n[o]) {
                  case d.STAYED_IN:
                    i = d.STAYED_IN
                    break

                  case d.ENTERED:
                    i = i === d.EXITED ? d.STAYED_IN : d.ENTERED
                    break

                  case d.EXITED:
                    i = i === d.ENTERED ? d.STAYED_IN : d.EXITED
                }

                o++
              }

              return i
            }),
            (e.prototype.getChildlistChange = function (e) {
              var t = this.childListChangeMap.get(e)
              return t || ((t = new a()), this.childListChangeMap.set(e, t)), t
            }),
            (e.prototype.processChildlistChanges = function () {
              if (!this.childListChangeMap) {
                this.childListChangeMap = new u()

                for (var e = 0; e < this.mutations.length; e++) {
                  var t = this.mutations[e]

                  if (
                    'childList' == t.type &&
                    (this.treeChanges.reachabilityChange(t.target) === d.STAYED_IN || this.calcOldPreviousSibling)
                  ) {
                    for (
                      var r = this.getChildlistChange(t.target), n = t.previousSibling, i = 0;
                      i < t.removedNodes.length;
                      i++
                    ) {
                      a((o = t.removedNodes[i]), n),
                        r.added.has(o) ? r.added.delete(o) : (r.removed.set(o, !0), r.maybeMoved.delete(o)),
                        (n = o)
                    }

                    a(t.nextSibling, n)

                    for (i = 0; i < t.addedNodes.length; i++) {
                      var o = t.addedNodes[i]
                      r.removed.has(o) ? (r.removed.delete(o), r.maybeMoved.set(o, !0)) : r.added.set(o, !0)
                    }
                  }

                  function a(e, t) {
                    !e ||
                      r.oldPrevious.has(e) ||
                      r.added.has(e) ||
                      r.maybeMoved.has(e) ||
                      (t && (r.added.has(t) || r.maybeMoved.has(t))) ||
                      r.oldPrevious.set(e, t)
                  }
                }
              }
            }),
            (e.prototype.wasReordered = function (e) {
              if (!this.treeChanges.anyParentsChanged) return !1
              this.processChildlistChanges()
              var t = e.parentNode,
                r = this.treeChanges.get(e)
              r && r.oldParentNode && (t = r.oldParentNode)
              var n = this.childListChangeMap.get(t)
              if (!n) return !1
              if (n.moved) return n.moved.get(e)
              n.moved = new u()
              var i = new u()

              function o(e) {
                if (!e) return !1
                if (!n.maybeMoved.has(e)) return !1
                var t = n.moved.get(e)
                return (
                  void 0 !== t ||
                    (i.has(e)
                      ? (t = !0)
                      : (i.set(e, !0),
                        (t =
                          (function (e) {
                            if (s.has(e)) return s.get(e)
                            var t = e.previousSibling

                            for (; t && (n.added.has(t) || o(t)); ) t = t.previousSibling

                            return s.set(e, t), t
                          })(e) !==
                          (function e(t) {
                            var r = a.get(t)
                            if (void 0 !== r) return r
                            r = n.oldPrevious.get(t)

                            for (; r && (n.removed.has(r) || o(r)); ) r = e(r)

                            void 0 === r && (r = t.previousSibling)
                            a.set(t, r)
                            return r
                          })(e))),
                    i.has(e) ? (i.delete(e), n.moved.set(e, t)) : (t = n.moved.get(e))),
                  t
                )
              }

              var a = new u()
              var s = new u()
              return n.maybeMoved.keys().forEach(o), n.moved.get(e)
            }),
            e
          )
        })(),
        l = (function () {
          function e(e, t) {
            var r = this

            if (
              ((this.projection = e),
              (this.added = []),
              (this.removed = []),
              (this.reparented = t.all || t.element || t.characterData ? [] : void 0),
              (this.reordered = t.all ? [] : void 0),
              e.getChanged(this, t.elementFilter, t.characterData),
              t.all || t.attribute || t.attributeList)
            ) {
              var n = t.attribute ? [t.attribute] : t.attributeList,
                i = e.attributeChangedNodes(n)
              t.attribute
                ? (this.valueChanged = i[t.attribute] || [])
                : ((this.attributeChanged = i),
                  t.attributeList &&
                    t.attributeList.forEach(function (e) {
                      r.attributeChanged.hasOwnProperty(e) || (r.attributeChanged[e] = [])
                    }))
            }

            if (t.all || t.characterData) {
              var o = e.getCharacterDataChanged()
              t.characterData ? (this.valueChanged = o) : (this.characterDataChanged = o)
            }

            this.reordered && (this.getOldPreviousSibling = e.getOldPreviousSibling.bind(e))
          }

          return (
            (e.prototype.getOldParentNode = function (e) {
              return this.projection.getOldParentNode(e)
            }),
            (e.prototype.getOldAttribute = function (e, t) {
              return this.projection.getOldAttribute(e, t)
            }),
            (e.prototype.getOldCharacterData = function (e) {
              return this.projection.getOldCharacterData(e)
            }),
            (e.prototype.getOldPreviousSibling = function (e) {
              return this.projection.getOldPreviousSibling(e)
            }),
            e
          )
        })(),
        p = /[a-zA-Z_]+/,
        v = /[a-zA-Z0-9_\-]+/

      function h(e) {
        return '"' + e.replace(/"/, '\\"') + '"'
      }

      var g = (function () {
          function e() {}

          return (
            (e.prototype.matches = function (e) {
              if (null === e) return !1
              if (void 0 === this.attrValue) return !0
              if (!this.contains) return this.attrValue == e

              for (var t = e.split(' '), r = 0; r < t.length; r++) if (this.attrValue === t[r]) return !0

              return !1
            }),
            (e.prototype.toString = function () {
              return 'class' === this.attrName && this.contains
                ? '.' + this.attrValue
                : 'id' !== this.attrName || this.contains
                ? this.contains
                  ? '[' + this.attrName + '~=' + h(this.attrValue) + ']'
                  : 'attrValue' in this
                  ? '[' + this.attrName + '=' + h(this.attrValue) + ']'
                  : '[' + this.attrName + ']'
                : '#' + this.attrValue
            }),
            e
          )
        })(),
        f = (function () {
          function f() {
            ;(this.uid = f.nextUid++), (this.qualifiers = [])
          }

          var e
          return (
            Object.defineProperty(f.prototype, 'caseInsensitiveTagName', {
              get: function () {
                return this.tagName.toUpperCase()
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(f.prototype, 'selectorString', {
              get: function () {
                return this.tagName + this.qualifiers.join('')
              },
              enumerable: !0,
              configurable: !0,
            }),
            (f.prototype.isMatching = function (e) {
              return e[f.matchesSelector](this.selectorString)
            }),
            (f.prototype.wasMatching = function (e, t, r) {
              if (!t || !t.attributes) return r
              var n = t.isCaseInsensitive ? this.caseInsensitiveTagName : this.tagName
              if ('*' !== n && n !== e.tagName) return !1

              for (var i = [], o = !1, a = 0; a < this.qualifiers.length; a++) {
                var s = this.qualifiers[a],
                  u = t.getAttributeOldValue(s.attrName)
                i.push(u), (o = o || void 0 !== u)
              }

              if (!o) return r

              for (a = 0; a < this.qualifiers.length; a++) {
                s = this.qualifiers[a]
                if ((void 0 === (u = i[a]) && (u = e.getAttribute(s.attrName)), !s.matches(u))) return !1
              }

              return !0
            }),
            (f.prototype.matchabilityChange = function (e, t) {
              var r = this.isMatching(e)
              return r
                ? this.wasMatching(e, t, r)
                  ? d.STAYED_IN
                  : d.ENTERED
                : this.wasMatching(e, t, r)
                ? d.EXITED
                : d.STAYED_OUT
            }),
            (f.parseSelectors = function (e) {
              var t,
                r,
                n = []

              function i() {
                t && (r && (t.qualifiers.push(r), (r = void 0)), n.push(t)), (t = new f())
              }

              function o() {
                r && t.qualifiers.push(r), (r = new g())
              }

              for (var a, s = /\s/, u = 'Invalid or unsupported selector syntax.', c = 1, l = 0; l < e.length; ) {
                var h = e[l++]

                switch (c) {
                  case 1:
                    if (h.match(p)) {
                      i(), (t.tagName = h), (c = 2)
                      break
                    }

                    if ('*' == h) {
                      i(), (t.tagName = '*'), (c = 3)
                      break
                    }

                    if ('.' == h) {
                      i(), o(), (t.tagName = '*'), (r.attrName = 'class'), (r.contains = !0), (c = 4)
                      break
                    }

                    if ('#' == h) {
                      i(), o(), (t.tagName = '*'), (r.attrName = 'id'), (c = 4)
                      break
                    }

                    if ('[' == h) {
                      i(), o(), (t.tagName = '*'), (r.attrName = ''), (c = 6)
                      break
                    }

                    if (h.match(s)) break
                    throw Error(u)

                  case 2:
                    if (h.match(v)) {
                      t.tagName += h
                      break
                    }

                    if ('.' == h) {
                      o(), (r.attrName = 'class'), (r.contains = !0), (c = 4)
                      break
                    }

                    if ('#' == h) {
                      o(), (r.attrName = 'id'), (c = 4)
                      break
                    }

                    if ('[' == h) {
                      o(), (r.attrName = ''), (c = 6)
                      break
                    }

                    if (h.match(s)) {
                      c = 14
                      break
                    }

                    if (',' == h) {
                      c = 1
                      break
                    }

                    throw Error(u)

                  case 3:
                    if ('.' == h) {
                      o(), (r.attrName = 'class'), (r.contains = !0), (c = 4)
                      break
                    }

                    if ('#' == h) {
                      o(), (r.attrName = 'id'), (c = 4)
                      break
                    }

                    if ('[' == h) {
                      o(), (r.attrName = ''), (c = 6)
                      break
                    }

                    if (h.match(s)) {
                      c = 14
                      break
                    }

                    if (',' == h) {
                      c = 1
                      break
                    }

                    throw Error(u)

                  case 4:
                    if (h.match(p)) {
                      ;(r.attrValue = h), (c = 5)
                      break
                    }

                    throw Error(u)

                  case 5:
                    if (h.match(v)) {
                      r.attrValue += h
                      break
                    }

                    if ('.' == h) {
                      o(), (r.attrName = 'class'), (r.contains = !0), (c = 4)
                      break
                    }

                    if ('#' == h) {
                      o(), (r.attrName = 'id'), (c = 4)
                      break
                    }

                    if ('[' == h) {
                      o(), (c = 6)
                      break
                    }

                    if (h.match(s)) {
                      c = 14
                      break
                    }

                    if (',' == h) {
                      c = 1
                      break
                    }

                    throw Error(u)

                  case 6:
                    if (h.match(p)) {
                      ;(r.attrName = h), (c = 7)
                      break
                    }

                    if (h.match(s)) break
                    throw Error(u)

                  case 7:
                    if (h.match(v)) {
                      r.attrName += h
                      break
                    }

                    if (h.match(s)) {
                      c = 8
                      break
                    }

                    if ('~' == h) {
                      ;(r.contains = !0), (c = 9)
                      break
                    }

                    if ('=' == h) {
                      ;(r.attrValue = ''), (c = 11)
                      break
                    }

                    if (']' == h) {
                      c = 3
                      break
                    }

                    throw Error(u)

                  case 8:
                    if ('~' == h) {
                      ;(r.contains = !0), (c = 9)
                      break
                    }

                    if ('=' == h) {
                      ;(r.attrValue = ''), (c = 11)
                      break
                    }

                    if (']' == h) {
                      c = 3
                      break
                    }

                    if (h.match(s)) break
                    throw Error(u)

                  case 9:
                    if ('=' == h) {
                      ;(r.attrValue = ''), (c = 11)
                      break
                    }

                    throw Error(u)

                  case 10:
                    if (']' == h) {
                      c = 3
                      break
                    }

                    if (h.match(s)) break
                    throw Error(u)

                  case 11:
                    if (h.match(s)) break

                    if ('"' == h || "'" == h) {
                      ;(a = h), (c = 13)
                      break
                    }

                    ;(r.attrValue += h), (c = 12)
                    break

                  case 12:
                    if (h.match(s)) {
                      c = 10
                      break
                    }

                    if (']' == h) {
                      c = 3
                      break
                    }

                    if ("'" == h || '"' == h) throw Error(u)
                    r.attrValue += h
                    break

                  case 13:
                    if (h == a) {
                      c = 10
                      break
                    }

                    r.attrValue += h
                    break

                  case 14:
                    if (h.match(s)) break

                    if (',' == h) {
                      c = 1
                      break
                    }

                    throw Error(u)
                }
              }

              switch (c) {
                case 1:
                case 2:
                case 3:
                case 5:
                case 14:
                  i()
                  break

                default:
                  throw Error(u)
              }

              if (!n.length) throw Error(u)
              return n
            }),
            (f.nextUid = 1),
            (f.matchesSelector =
              'function' == typeof (e = document.createElement('div')).webkitMatchesSelector
                ? 'webkitMatchesSelector'
                : 'function' == typeof e.mozMatchesSelector
                ? 'mozMatchesSelector'
                : 'function' == typeof e.msMatchesSelector
                ? 'msMatchesSelector'
                : 'matchesSelector'),
            f
          )
        })(),
        y = /^([a-zA-Z:_]+[a-zA-Z0-9_\-:\.]*)$/

      function b(e) {
        if (typeof e != 'string') throw Error('Invalid request opion. attribute must be a non-zero length string.')
        if (!(e = e.trim())) throw Error('Invalid request opion. attribute must be a non-zero length string.')
        if (!e.match(y)) throw Error('Invalid request option. invalid attribute name: ' + e)
        return e
      }

      function m(e) {
        if (!e.trim().length)
          throw Error('Invalid request option: elementAttributes must contain at least one attribute.')

        for (var t = {}, r = {}, n = e.split(/\s+/), i = 0; i < n.length; i++) {
          if ((o = n[i])) {
            var o,
              a = (o = b(o)).toLowerCase()
            if (t[a])
              throw Error(
                'Invalid request option: observing multiple case variations of the same attribute is not supported.'
              )
            ;(r[o] = !0), (t[a] = !0)
          }
        }

        return Object.keys(r)
      }

      var x = (function () {
        function s(e) {
          if (void 0 === r) throw new Error('No Engine')
          var t = this
          ;(this.connected = !1),
            (this.options = s.validateOptions(e)),
            (this.observerOptions = s.createObserverOptions(this.options.queries)),
            (this.root = this.options.rootNode),
            (this.callback = this.options.callback),
            (this.elementFilter = Array.prototype.concat.apply(
              [],
              this.options.queries.map(function (e) {
                return e.elementFilter ? e.elementFilter : []
              })
            )),
            this.elementFilter.length || (this.elementFilter = void 0),
            (this.calcReordered = this.options.queries.some(function (e) {
              return e.all
            })),
            (this.queryValidators = []),
            s.createQueryValidator &&
              (this.queryValidators = this.options.queries.map(function (e) {
                return s.createQueryValidator(t.root, e)
              })),
            (this.observer = new r(function (e) {
              t.observerCallback(e)
            })),
            this.reconnect()
        }

        return (
          (s.createObserverOptions = function (e) {
            var t,
              i = {
                childList: !0,
                subtree: !0,
              }

            function o(e) {
              ;(i.attributes && !t) ||
                ((i.attributes = !0),
                (i.attributeOldValue = !0),
                e
                  ? ((t = t || {}),
                    e.forEach(function (e) {
                      ;(t[e] = !0), (t[e.toLowerCase()] = !0)
                    }))
                  : (t = void 0))
            }

            return (
              e.forEach(function (e) {
                if (e.characterData) return (i.characterData = !0), void (i.characterDataOldValue = !0)
                if (e.all) return o(), (i.characterData = !0), void (i.characterDataOldValue = !0)
                if (e.attribute) o([e.attribute.trim()])
                else {
                  var t,
                    r,
                    n = ((t = e.elementFilter),
                    (r = {}),
                    t.forEach(function (e) {
                      e.qualifiers.forEach(function (e) {
                        r[e.attrName] = !0
                      })
                    }),
                    Object.keys(r)).concat(e.attributeList || [])
                  n.length && o(n)
                }
              }),
              t && (i.attributeFilter = Object.keys(t)),
              i
            )
          }),
          (s.validateOptions = function (e) {
            for (var t in e) if (!(t in s.optionKeys)) throw Error('Invalid option: ' + t)

            if ('function' != typeof e.callback)
              throw Error('Invalid options: callback is required and must be a function')
            if (!e.queries || !e.queries.length)
              throw Error('Invalid options: queries must contain at least one query request object.')

            for (
              var r = {
                  callback: e.callback,
                  rootNode: e.rootNode || document,
                  observeOwnChanges: !!e.observeOwnChanges,
                  oldPreviousSibling: !!e.oldPreviousSibling,
                  queries: [],
                },
                n = 0;
              n < e.queries.length;
              n++
            ) {
              var i = e.queries[n]

              if (i.all) {
                if (1 < Object.keys(i).length) throw Error('Invalid request option. all has no options.')
                r.queries.push({
                  all: !0,
                })
              } else if ('attribute' in i) {
                if (
                  (((a = {
                    attribute: b(i.attribute),
                  }).elementFilter = f.parseSelectors('*[' + a.attribute + ']')),
                  1 < Object.keys(i).length)
                )
                  throw Error('Invalid request option. attribute has no options.')
                r.queries.push(a)
              } else if ('element' in i) {
                var o = Object.keys(i).length,
                  a = {
                    element: i.element,
                    elementFilter: f.parseSelectors(i.element),
                  }
                if ((i.hasOwnProperty('elementAttributes') && ((a.attributeList = m(i.elementAttributes)), o--), 1 < o))
                  throw Error('Invalid request option. element only allows elementAttributes option.')
                r.queries.push(a)
              } else {
                if (!i.characterData) throw Error('Invalid request option. Unknown query request.')
                if (1 < Object.keys(i).length) throw Error('Invalid request option. characterData has no options.')
                r.queries.push({
                  characterData: !0,
                })
              }
            }

            return r
          }),
          (s.prototype.createSummaries = function (e) {
            if (!e || !e.length) return []

            for (
              var t = new c(this.root, e, this.elementFilter, this.calcReordered, this.options.oldPreviousSibling),
                r = [],
                n = 0;
              n < this.options.queries.length;
              n++
            )
              r.push(new l(t, this.options.queries[n]))

            return r
          }),
          (s.prototype.checkpointQueryValidators = function () {
            this.queryValidators.forEach(function (e) {
              e && e.recordPreviousState()
            })
          }),
          (s.prototype.runQueryValidators = function (r) {
            this.queryValidators.forEach(function (e, t) {
              e && e.validate(r[t])
            })
          }),
          (s.prototype.changesToReport = function (e) {
            return e.some(function (t) {
              if (
                ['added', 'removed', 'reordered', 'reparented', 'valueChanged', 'characterDataChanged'].some(function (
                  e
                ) {
                  return t[e] && t[e].length
                })
              )
                return !0
              if (
                t.attributeChanged &&
                Object.keys(t.attributeChanged).some(function (e) {
                  return !!t.attributeChanged[e].length
                })
              )
                return !0
              return !1
            })
          }),
          (s.prototype.observerCallback = function (e) {
            this.options.observeOwnChanges || this.observer.disconnect()
            var t = this.createSummaries(e)

            if (
              (this.runQueryValidators(t),
              this.options.observeOwnChanges && this.checkpointQueryValidators(),
              this.changesToReport(t) && this.callback(t),
              !this.options.observeOwnChanges && this.connected)
            ) {
              this.checkpointQueryValidators()

              try {
                this.observer.observe(this.root, this.observerOptions)
              } catch (e) {}
            }
          }),
          (s.prototype.reconnect = function () {
            if (this.connected) throw Error('Already connected')

            try {
              this.observer.observe(this.root, this.observerOptions),
                (this.connected = !0),
                this.checkpointQueryValidators()
            } catch (e) {}
          }),
          (s.prototype.takeSummaries = function () {
            if (!this.connected) throw Error('Not connected')
            var e = this.createSummaries(this.observer.takeRecords())
            return this.changesToReport(e) ? e : void 0
          }),
          (s.prototype.disconnect = function () {
            var e = this.takeSummaries()
            return this.observer.disconnect(), (this.connected = !1), e
          }),
          (s.NodeMap = u),
          (s.parseElementFilter = f.parseSelectors),
          (s.optionKeys = {
            callback: !0,
            queries: !0,
            rootNode: !0,
            oldPreviousSibling: !0,
            observeOwnChanges: !0,
          }),
          s
        )
      })()

      e.exports = x
    },
    function (e, t, r) {
      'use strict'

      var h = n(r(4)),
        f = n(r(5)),
        d = n(r(6)),
        p = n(r(7)),
        v = n(r(10)),
        g = n(r(11))

      function n(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            }
      }

      function i(e) {
        return (e = (function (o) {
          var e = o.length
          if (e <= 1) return o
          o.map(function (e) {
            e.funContent = l(e)
          })
          var a = 0
          o.map(function (e, t) {
            if (0 !== t) {
              var r = o[a].funContent,
                n = o[t - 1].funContent,
                i = e.funContent
              n !== i && r !== i
                ? r && -1 != r.indexOf(i)
                  ? (e.isSmallContent = !0)
                  : (i && -1 != i.indexOf(r) && (o[a].isSmallContent = !0), (a = t))
                : (a = t)
            }
          }),
            (o = o.filter(function (e) {
              return 1 != e.isSmallContent
            })),
            (e = o.length)

          for (var t = 0; t < e; t++)
            if (!o[t].isSmallContent) {
              var r = 0

              e: for (var n = t + 1; n < e; n++)
                if (!o[n].isSmallContent) {
                  var i = o[t].funContent,
                    s = o[n].funContent

                  if (i !== s) {
                    if (i && -1 != i.indexOf(s)) o[n].isSmallContent = !0
                    else if (s && -1 != s.indexOf(i)) {
                      o[t], 'later one:', o[n]
                      break e
                    }
                    if (300 < ++r) break e
                  }
                }
            }

          for (var u = [], c = 0; c < e; c++) o[c].isSmallContent || u.push(o[c]), (o[c].isSmallContent = !1)

          return u
        })(e))
      }

      function y(n, e, t) {
        return 0 === t.length
          ? []
          : (0 != e && (t = i(t)),
            1 === e &&
              t.map(function (e) {
                var t = n.getOldPreviousSibling(e)
                e.oldPreviousSibling = t
                var r = n.getOldParentNode(e)
                ;(e.oldParentNode = r), (e.isRemovedNode = !0)
              }),
            (function (e, t, r) {
              var n = new f.default(),
                i = new f.default(),
                o = []

              for (; 0 < r.length; ) {
                var a = r.shift(),
                  s = new p.default(t, a, n, i)

                if (s.getPinpoint() || 0 !== t) {
                  var u = new d.default(t, s)
                  o.push(u)
                } else {
                  var c = a.parentNode,
                    l = new d.default(1, new p.default(1, c, n, i))
                  ;(r = b(c, r)), (r = [c].concat(r)), o.push(l)
                }
              }

              1 === t && o.reverse()
              return o
            })(0, e, t))
      }

      function b(e, t) {
        if (!e) return t

        for (var r = l(e), n = t.length, i = 0; i < n; i++) {
          var o = t[i].funContent
          if (!r || -1 == r.indexOf(o)) break
          t[i].isSmallContent = !0
        }

        return (t = t.filter(function (e) {
          return 1 != e.isSmallContent
        }))
      }

      function l(e) {
        var t = e.outerHTML || e.textContent
        return 8 === e.nodeType && (t = '\x3c!--' + t + '--\x3e'), t.replace(/&amp;/g, '&')
      }

      ;(e.exports.parseMutations = function (e) {
        return e
          .map(function (e) {
            var t,
              r = e.removed
            ;(t = r).map(function (e) {
              e.funRemoved = !0
            })
            var n = y(e, 1, (r = t)),
              i = y(e, 0, e.added)

            i = (function (e) {
              var t = e.length
              if (t <= 1) return e
              e.map(function (e) {
                3 === e.actionData.nodeType
                  ? (e.funContent = 'No-SelfSelector')
                  : (e.funContent = e.actionData.selfSelector
                      ? e.actionData.selfSelector.parentSelector + ' > ' + e.actionData.selfSelector.localSelector
                      : 'No-SelfSelector')
              })

              for (var r = 0; r < t; r++)
                if (!e[r].isSmallContent) {
                  var n = 0

                  e: for (var i = r + 1; i < t; i++)
                    if (!e[i].isSmallContent) {
                      var o = e[r].funContent,
                        a = e[i].funContent
                      if ('No-SelfSelector' === o || 'No-SelfSelector' === a) break e

                      if (o && 0 === o.indexOf(a)) {
                        e[r].isSmallContent = !0
                        break e
                      }

                      if ((a && 0 === a.indexOf(o) && (e[i].isSmallContent = !0), 300 < ++n)) break e
                    }
                }

              for (var s = [], u = 0; u < t; u++)
                e[u].isSmallContent || s.push(e[u]), delete e[u].isSmallContent, delete e[u].funContent

              return s
            })(i)

            var o,
              a,
              s,
              u = (function (r) {
                var o = new f.default(),
                  a = new f.default()
                if (h.default.isEmptyObject(r)) return []

                var n = [],
                  e = function (i) {
                    var e = r[i],
                      t = e.map(function (e) {
                        var t = new p.default(2, e, o, a),
                          r = (function (e, t) {
                            for (var r = t.attributes, n = '', i = r.length, o = 0; o < i; o++) {
                              var a = r[o]

                              if (a.name === e) {
                                n = a.value
                                break
                              }
                            }

                            return new v.default(e, n)
                          })(i, e),
                          n = new g.default(t, [r])

                        return new d.default(2, n)
                      })
                    n = n.concat(t)
                  }

                for (var t in r) e(t)

                return n
              })(e.attributeChanged),
              c = e.characterDataChanged,
              l =
                ((o = c),
                (a = new f.default()),
                (s = new f.default()),
                o.map(function (e) {
                  var t = new p.default(3, e, a, s)
                  return new d.default(3, t)
                }))

            return [].concat(n).concat(i).concat(u).concat(l)
          })
          .reduce(function (e, t) {
            return e.concat(t)
          }, [])
      }),
        (e.exports.extractCleanNodes = i)
    },
    function (e, t) {
      'use strict'

      Array.prototype.includes ||
        Object.defineProperty(Array.prototype, 'includes', {
          value: function (e, t) {
            if (null == this) throw new TypeError('"this" is null or not defined')
            var r = Object(this),
              n = r.length >>> 0
            if (0 === n) return !1
            var i,
              o,
              a = 0 | t,
              s = Math.max(0 <= a ? a : n - Math.abs(a), 0)

            for (; s < n; ) {
              if ((i = r[s]) === (o = e) || ('number' == typeof i && 'number' == typeof o && isNaN(i) && isNaN(o)))
                return !0
              s++
            }

            return !1
          },
        })

      var r = function () {
        return !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)
      }

      ;(e.exports.isEmptyObject = function (e) {
        var t

        for (t in e) if (e.hasOwnProperty(t)) return !1

        return !0
      }),
        (e.exports.fromList = function (e) {
          for (var t = new Array(e.length), r = 0, n = e.length; r < n; r++) t[r] = e[r]

          return t
        }),
        (e.exports.uniqueID = function () {
          function e() {
            return Math.random().toString(16).slice(-4)
          }

          return e() + e() + '-' + e() + '-' + e() + '-' + e() + '-' + e() + e() + e()
        }),
        (e.exports.extractNodeName = function (e) {
          return e && e.nodeName ? e.nodeName.toLowerCase() : null
        }),
        (e.exports.isSafari = r),
        (e.exports.isSafariOrWKWebview = function () {
          return (
            r() ||
            ((e = !1),
            'iP' === navigator.platform.substr(0, 2) && window.webkit && window.webkit.messageHandlers && (e = !0),
            e)
          )
          var e
        })
    },
    function (e, t) {
      'use strict'

      Object.defineProperty(t, '__esModule', {
        value: !0,
      })

      var r = (function () {
        function n(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }

        return function (e, t, r) {
          return t && n(e.prototype, t), r && n(e, r), e
        }
      })()

      var n = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, e),
            (this.cache = {})
        }

        return (
          r(e, [
            {
              key: 'clearCache',
              value: function () {
                this.cache = {}
              },
            },
            {
              key: 'hasId',
              value: function (e) {
                return null != this.cache[e]
              },
            },
            {
              key: 'getValue',
              value: function (e) {
                return this.cache[e]
              },
            },
            {
              key: 'push',
              value: function (e, t) {
                this.cache[e] = t
              },
            },
            {
              key: 'getCache',
              value: function () {
                return this.cache
              },
            },
          ]),
          e
        )
      })()

      t.default = n
    },
    function (e, t) {
      'use strict'

      Object.defineProperty(t, '__esModule', {
        value: !0,
      })

      var r = (function () {
        function n(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }

        return function (e, t, r) {
          return t && n(e.prototype, t), r && n(e, r), e
        }
      })()

      var n = (function () {
        function n(e, t) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, n),
            (this.actionType = e),
            (this.actionData = t)
          var r = new Date()
          this.timestamp = r.getTime()
        }

        return (
          r(n, [
            {
              key: 'getActionType',
              value: function () {
                return this.actionType
              },
            },
            {
              key: 'getActionData',
              value: function () {
                return this.actionData
              },
            },
            {
              key: 'show',
              value: function () {
                this.actionType, this.actionData
              },
            },
          ]),
          n
        )
      })()

      t.default = n
    },
    function (e, t, r) {
      'use strict'

      Object.defineProperty(t, '__esModule', {
        value: !0,
      })

      var n,
        i = (function () {
          function n(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }

          return function (e, t, r) {
            return t && n(e.prototype, t), r && n(e, r), e
          }
        })(),
        o = r(8),
        u =
          (n = o) && n.__esModule
            ? n
            : {
                default: n,
              }

      var a = (function () {
        function s(e, t, r, n) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, s),
            (this.nodeType = t.nodeType),
            (this.outerHTML = t.outerHTML || t.textContent)
          var i = 1 != e ? t.previousSibling : t.oldPreviousSibling,
            o = t.parentNode
          o || (o = t.oldParentNode || (i && i.parentNode))
          var a = {
            selfNode: t,
            parentNode: o,
            previousElementSibling: t.previousElementSibling,
            previousSibling: i,
            nextElementSibling: t.nextElementSibling,
            nextSibling: t.nextSibling,
          }

          try {
            this.selfSelector = u.default.calculateSelfSelector(a, r, n)
          } catch (e) {
            this.selfSelector = null
          }

          try {
            this.pinpoint = u.default.calculatePinpoint(a, r, n)
          } catch (e) {
            this.pinpoint = null
          }
        }

        return (
          i(s, [
            {
              key: 'getPinpoint',
              value: function () {
                return this.pinpoint
              },
            },
            {
              key: 'show',
              value: function () {
                this.selfSelector, this.pinpoint.show(), this.outerHTML, console.log('\n\n')
              },
            },
          ]),
          s
        )
      })()

      t.default = a
    },
    function (e, t, r) {
      'use strict'

      var f = n(r(9)),
        d = n(r(4))

      function n(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            }
      }

      var s = 1e4,
        i = function (e, t, r) {
          var n = e.nextSibling || e.nextElementSibling

          if (n) {
            var i = d.default.extractNodeName(n)
            return '#comment' === i
              ? a(e, n, t, r)
              : '#text' === i && '' === n.textContent.trim()
              ? a(e, n, t, r)
              : u(e, t, r)
          }

          var o = v(e.parentNode, t, r)
          return new f.default(o, 2)
        },
        a = function (e, t, r, n) {
          return (e.nextElementSibling = t.nextElementSibling), (e.nextSibling = t.nextSibling), i(e, r, n)
        }

      function u(e, t, r) {
        var n = y(e)

        if (n) {
          var i = d.default.extractNodeName(n)
          if ('#comment' === i) return p(e, n, t, r)

          if ('#text' === i) {
            if ('' === n.textContent.trim()) return p(e, n, t, r)
            var o = v(e.parentNode, t, r),
              a =
                ((c = (u = n).textContent.trim()),
                (l = (function e(t, r, n) {
                  var i = y(t)
                  if (!i) return n
                  var o = d.default.extractNodeName(i)
                  {
                    if ('#text' === o) {
                      var a = i.textContent.trim()
                      return e(i, r, a === r ? n + 1 : n)
                    }

                    return e(i, r, n)
                  }
                })(u, c, 0)),
                {
                  textContent: c,
                  textIndex: l,
                })
            return new f.default(o, 5, a)
          }

          var s = v(e.parentNode, t, r) + ' > ' + g(n, r)
          return new f.default(s, 3)
        }

        var u,
          c,
          l,
          h = v(e.parentNode, t, r)
        return new f.default(h, 1)
      }

      function p(e, t, r, n) {
        return (
          (e.previousElementSibling = t.previousElementSibling), (e.previousSibling = t.previousSibling), u(e, r, n)
        )
      }

      function c(e) {
        return e
          ? (function (e) {
              if (!e) return ''
              var t = ''
              return (t += e.nodeName.toLowerCase())
            })(e)
          : ''
      }

      function v(e, t, r) {
        if (!e) return ''
        var n = e.funId

        if (n) {
          if (t.hasId(n)) return t.getValue(n)
        } else e.funId = d.default.uniqueID()

        var i = g(e, r),
          o = e.nodeName
        if ('BODY' === o || 'HEAD' === o) return i

        if (i) {
          var a = e.parentNode
          a || (a = e.oldParentNode)
          var s = v(a, t, r),
            u = s ? s + ' > ' + i : i
          return t.push(e.funId, u), u
        }

        var c = 'current node has no selector..'
        throw new Error(c)
      }

      function g(e, t) {
        e.funLocalSelector || (e.funLocalSelector = c(e))
        var r = l(y(e), e.funLocalSelector, 0, t)
        if (
          (e.funId || (e.funId = d.default.uniqueID()),
          t.push(e.funId, {
            funLocalSelector: e.funLocalSelector,
            index: r,
          }),
          s <= r)
        )
          throw new Error('too deep for calculateElementLocalSelector')
        return e.funLocalSelector + ':eq(' + r + ')'
      }

      function l(e, t, r, n) {
        var i = 0
        if (!e) return i

        if (e.funId && n.hasId(e.funId)) {
          var o = n.getValue(e.funId)
          if (h(o.funLocalSelector, t)) return o.index + 1
        }

        if (s <= r) return i
        e.funId || (e.funId = d.default.uniqueID()), e.funLocalSelector || (e.funLocalSelector = c(e))
        var a = y(e)
        return (
          a && (i += l(a, t, ++r, n)),
          h(e.funLocalSelector, t) &&
            (n.push(e.funId, {
              funLocalSelector: e.funLocalSelector,
              index: i,
            }),
            i++),
          i
        )
      }

      function y(e) {
        if (!e) return e
        var t = e.previousSibling || e.previousElementSibling
        return e.isRemovedNode && (t = e.oldPreviousSibling), t
      }

      function h(e, t) {
        var r = /[#\.]/,
          n = e.split(r),
          i = t.split(r)
        return (
          0 !== i.length &&
          0 !== n.length &&
          i
            .map(function (e) {
              return n.includes(e)
            })
            .reduce(function (e, t) {
              return e && t
            }, !0)
        )
      }

      ;(e.exports.calculatePinpoint = i),
        (e.exports.calculateSelfSelector = function (e, t, r) {
          return {
            parentSelector: v(e.parentNode, t, r),
            localSelector: (function (e, t, r) {
              e.funLocalSelector || (e.funLocalSelector = c(e))
              var n = l(t, e.funLocalSelector, 0, r)
              if (
                (e.funId || (e.funId = d.default.uniqueID()),
                r.push(e.funId, {
                  funLocalSelector: e.funLocalSelector,
                  index: n,
                }),
                s <= n)
              )
                throw new Error('too deep for calculateElementLocalSelector')
              return e.funLocalSelector + ':eq(' + n + ')'
            })(e.selfNode, e.previousSibling, r),
          }
        })
    },
    function (e, t) {
      'use strict'

      Object.defineProperty(t, '__esModule', {
        value: !0,
      })

      var r = (function () {
        function n(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }

        return function (e, t, r) {
          return t && n(e.prototype, t), r && n(e, r), e
        }
      })()

      var n = (function () {
        function n(e, t, r) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, n),
            (this.type = t),
            (this.selector = e),
            5 === t && (this.textNode = r)
        }

        return (
          r(n, [
            {
              key: 'show',
              value: function () {
                this.type, console.log('selector:', this.selector), 5 === this.type && this.textNode
              },
            },
            {
              key: 'getSelector',
              value: function () {
                return this.selector
              },
            },
            {
              key: 'getTextNode',
              value: function () {
                return this.textNode
              },
            },
            {
              key: 'getType',
              value: function () {
                return this.type
              },
            },
          ]),
          n
        )
      })()

      t.default = n
    },
    function (e, t) {
      'use strict'

      Object.defineProperty(t, '__esModule', {
        value: !0,
      })

      var n = (function () {
        function n(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }

        return function (e, t, r) {
          return t && n(e.prototype, t), r && n(e, r), e
        }
      })()

      var r = (function () {
        function r(e, t) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, r),
            (this.name = e),
            (this.value = t)
        }

        return (
          n(r, [
            {
              key: 'getName',
              value: function () {
                return this.name
              },
            },
            {
              key: 'getValue',
              value: function () {
                return this.value
              },
            },
            {
              key: 'show',
              value: function () {
                'AttributeElement: ', this.name, this.value
              },
            },
          ]),
          r
        )
      })()

      t.default = r
    },
    function (e, t) {
      'use strict'

      Object.defineProperty(t, '__esModule', {
        value: !0,
      })

      var n = (function () {
        function n(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }

        return function (e, t, r) {
          return t && n(e.prototype, t), r && n(e, r), e
        }
      })()

      var r = (function () {
        function r(e, t) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, r),
            (this.redoableElement = e),
            (this.changedAttributeList = t)
        }

        return (
          n(r, [
            {
              key: 'setElement',
              value: function () {
                this.redoableElement = redoableElement
              },
            },
            {
              key: 'setAttributeList',
              value: function () {
                this.changedAttributeList = changedAttributeList
              },
            },
            {
              key: 'appendAttribute',
              value: function (e) {
                this.changedAttributeList = this.changedAttributeList.concat([e])
              },
            },
            {
              key: 'show',
              value: function () {
                this.redoableElement.show(),
                  this.changedAttributeList.map(function (e) {
                    e.show()
                  })
              },
            },
          ]),
          r
        )
      })()

      t.default = r
    },
    function (e, t) {
      'use strict'

      Object.defineProperty(t, '__esModule', {
        value: !0,
      })

      var r = (function () {
        function n(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }

        return function (e, t, r) {
          return t && n(e.prototype, t), r && n(e, r), e
        }
      })()

      var n = (function () {
        function n(e, t, r) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, n),
            (this.inputType = e),
            (this.eleType = t),
            (this.value = r)
        }

        return (
          r(n, [
            {
              key: 'getEleType',
              value: function () {
                return this.eleType
              },
            },
            {
              key: 'getInputType',
              value: function () {
                return this.inputType
              },
            },
            {
              key: 'getValue',
              value: function () {
                return this.value
              },
            },
          ]),
          n
        )
      })()

      t.default = n
    },
    function (e, t, r) {
      'use strict'

      Object.defineProperty(t, '__esModule', {
        value: !0,
      })

      var n,
        i = (function () {
          function n(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }

          return function (e, t, r) {
            return t && n(e.prototype, t), r && n(e, r), e
          }
        })(),
        o = r(8),
        a =
          (n = o) && n.__esModule
            ? n
            : {
                default: n,
              }

      var s = (function () {
        function o(e, t, r, n) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, o)
          var i = {
            selfNode: e,
            parentNode: e.parentNode,
            previousElementSibling: e.previousElementSibling,
            previousSibling: e.previousSibling,
            nextElementSibling: e.nextElementSibling,
            nextSibling: e.nextSibling,
          }

          try {
            this.selfSelector = a.default.calculateSelfSelector(i, r, n)
          } catch (e) {
            this.selfSelector = null
          }

          this.input = t
        }

        return (
          i(o, [
            {
              key: 'getSelfSelector',
              value: function () {
                return this.selfSelector
              },
            },
            {
              key: 'getInput',
              value: function () {
                return this.input
              },
            },
            {
              key: 'show',
              value: function () {
                this.selfSelector, this.pinpoint.show(), this.outerHTML
              },
            },
          ]),
          o
        )
      })()

      t.default = s
    },
    function (e, t, r) {
      'use strict'

      var n,
        i = r(15),
        o =
          (n = i) && n.__esModule
            ? n
            : {
                default: n,
              }
      e.exports.Recorder = o.default
    },
    function (e, t, r) {
      'use strict'

      Object.defineProperty(t, '__esModule', {
        value: !0,
      })

      var n = (function () {
          function n(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }

          return function (e, t, r) {
            return t && n(e.prototype, t), r && n(e, r), e
          }
        })(),
        i = o(r(16)),
        s = o(r(18)),
        u = r(20),
        c = o(r(8)),
        l = o(r(5))

      function o(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            }
      }

      var a = (function (e) {
        function r() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, r)

          var t = (function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
          })(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e))

          return (
            (t.events = ['mousemove', 'click', 'scroll', 'resize']),
            (t.eventHandlers = []),
            (t.vedio = null),
            (t.isRecording = !1),
            (t.mousemoveSamplingFrequence = 0),
            (t.MaxMousemoveSamplingFrequence = 5),
            t.target instanceof window.HTMLHtmlElement &&
              (t.listeners = {
                scroll: window,
                resize: window,
              }),
            t.on('fun_recording_start', function () {
              t.isRecording = !0
            }),
            t.on('fun_recording_stop', function () {
              t.isRecording = !1
            }),
            t.on('fun_recording', function (e) {}),
            t
          )
        }

        return (
          (function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(r, i.default),
          n(r, [
            {
              key: 'getVedio',
              value: function () {
                return this.vedio
              },
            },
            {
              key: 'getListener',
              value: function (e) {
                return this.listeners[e] || this.getTarget()
              },
            },
            {
              key: 'restart',
              value: function () {
                this.init(), this.emit('fun_recording_start')
              },
            },
            {
              key: 'start',
              value: function () {
                var i = this
                this.init(), this.emit('fun_recording_start')

                for (
                  var e = function (e) {
                      var t = i.events[e],
                        r = i.onEvents[t]
                      r || (r = i.defaultEventCallback)

                      var n = function (e) {
                        i.onEventCallback(r, e)
                      }

                      i.eventHandlers.splice(e, 0, n),
                        'scroll' === t
                          ? i.getListener(t).addEventListener(t, n, !0)
                          : i.getListener(t).addEventListener(t, n)
                    },
                    t = 0;
                  t < this.events.length;
                  t++
                )
                  e(t)
              },
            },
            {
              key: 'stopRecording',
              value: function () {
                for (var e = 0; e < this.events.length; e++) {
                  var t = this.events[e],
                    r = this.eventHandlers[e]
                  r && this.getListener(t).removeEventListener(t, r)
                }

                return this.emit('fun_recording_stop'), this.vedio
              },
            },
            {
              key: 'init',
              value: function () {
                var e = this.getTarget(),
                  t = this.getTargetPosition(),
                  r = new s.default()
                ;(r.top = t.top), (r.left = t.left)
                var n = e.innerHTML,
                  i = this.removeHideElement(n)
                ;(i = '<!DOCTYPE html>' + i),
                  (r.scene = u.Base64.encode(i)),
                  (r.rootOpts = {
                    style: e.getAttribute('style'),
                    class: e.getAttribute('class'),
                  }),
                  (r.scrollX = e.scrollLeft),
                  (r.scrollY = e.scrollTop)
                var o = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                  a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                return (r.width = o), (r.height = a), (this.vedio = r), this.vedio
              },
            },
            {
              key: 'getTargetPosition',
              value: function () {
                var e = this.getTarget().getBoundingClientRect(),
                  t = document.documentElement,
                  r = window.pageYOffset || t.scrollTop || 0,
                  n = window.pageXOffset || t.scrollLeft || 0
                return {
                  top: e.top + r,
                  left: e.left + n,
                }
              },
            },
            {
              key: 'onEventCallback',
              value: function (e, t) {
                this.emit('fun_recording', t), this.emit(t.type, t), e(this, this.vedio, t)
              },
            },
            {
              key: 'defaultEventCallback',
              value: function (e, t, r) {
                if ('mousemove' === r.type) {
                  if (!(e.mousemoveSamplingFrequence >= e.MaxMousemoveSamplingFrequence))
                    return void e.mousemoveSamplingFrequence++
                  e.mousemoveSamplingFrequence = 0
                }

                var n = r.target,
                  i = n.body,
                  o = {
                    scrollY: i ? i.parentNode.scrollTop || i.scrollTop : n.scrollTop,
                    scrollX: i ? i.parentNode.scrollLeft || i.scrollLeft : n.scrollLeft,
                    cursorX: r.pageX,
                    cursorY: r.pageY,
                    width: e.target.clientWidth,
                    height: e.target.clientHeight,
                    eventType: r.type,
                  }

                if ('scroll' === r.type) {
                  var a = {
                    selfNode: n,
                    parentNode: n.parentNode,
                    previousElementSibling: n.previousElementSibling,
                    previousSibling: n.previousSibling,
                    nextElementSibling: n.nextElementSibling,
                    nextSibling: n.nextSibling,
                  }

                  try {
                    o.selfSelector = c.default.calculateSelfSelector(a, new l.default(), new l.default())
                  } catch (e) {
                    o.selfSelector = null
                  }
                }

                t.pushNewFrame(o)
              },
            },
            {
              key: 'removeHideElement',
              value: function (t) {
                try {
                  for (
                    var e = new DOMParser().parseFromString(t, 'text/html'),
                      r = e.getElementsByClassName('_fun-hide'),
                      n = [].slice.call(r),
                      i = 0;
                    i < n.length;
                    i++
                  )
                    n[i].remove()

                  return e.documentElement.innerHTML
                } catch (e) {
                  return t
                }
              },
            },
          ]),
          r
        )
      })()

      t.default = a
    },
    function (e, t, r) {
      'use strict'

      Object.defineProperty(t, '__esModule', {
        value: !0,
      })

      var n = (function () {
          function n(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }

          return function (e, t, r) {
            return t && n(e.prototype, t), r && n(e, r), e
          }
        })(),
        i = r(17)

      var o = (function (e) {
        function r() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, r)

          var t = (function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
          })(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this))

          return e.target ? t.setTarget(e.target) : (t.target = null), (t.onEvents = e.onEvents || t.onEvents()), t
        }

        return (
          (function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(r, i.EventEmitter),
          n(r, [
            {
              key: 'onEvents',
              value: function () {
                return {}
              },
            },
            {
              key: 'setTarget',
              value: function (e) {
                if (!(e instanceof window.HTMLElement)) throw new Error('Target不是HTMLElement类型')
                this.target = e
              },
            },
            {
              key: 'getTarget',
              value: function () {
                if (!this.target) throw new Error('未定义要监听的Target')
                return this.target
              },
            },
          ]),
          r
        )
      })()

      t.default = o
    },
    function (e, t) {
      function n() {
        ;(this._events = this._events || {}), (this._maxListeners = this._maxListeners || void 0)
      }

      function u(e) {
        return 'function' == typeof e
      }

      function c(e) {
        return 'object' == typeof e && null !== e
      }

      function l(e) {
        return void 0 === e
      }

      ;(((e.exports = n).EventEmitter = n).prototype._events = void 0),
        (n.prototype._maxListeners = void 0),
        (n.defaultMaxListeners = 10),
        (n.prototype.setMaxListeners = function (e) {
          if ('number' != typeof e || e < 0 || isNaN(e)) throw TypeError('n must be a positive number')
          return (this._maxListeners = e), this
        }),
        (n.prototype.emit = function (e) {
          var t, r, n, i, o, a

          if (
            (this._events || (this._events = {}),
            'error' === e && (!this._events.error || (c(this._events.error) && !this._events.error.length)))
          ) {
            if ((t = arguments[1]) instanceof Error) throw t
            var s = new Error('Uncaught, unspecified "error" event. (' + t + ')')
            throw ((s.context = t), s)
          }

          if (l((r = this._events[e]))) return !1
          if (u(r))
            switch (arguments.length) {
              case 1:
                r.call(this)
                break

              case 2:
                r.call(this, arguments[1])
                break

              case 3:
                r.call(this, arguments[1], arguments[2])
                break

              default:
                ;(i = Array.prototype.slice.call(arguments, 1)), r.apply(this, i)
            }
          else if (c(r))
            for (i = Array.prototype.slice.call(arguments, 1), n = (a = r.slice()).length, o = 0; o < n; o++)
              a[o].apply(this, i)
          return !0
        }),
        (n.prototype.on = n.prototype.addListener =
          function (e, t) {
            var r
            if (!u(t)) throw TypeError('listener must be a function')
            return (
              this._events || (this._events = {}),
              this._events.newListener && this.emit('newListener', e, u(t.listener) ? t.listener : t),
              this._events[e]
                ? c(this._events[e])
                  ? this._events[e].push(t)
                  : (this._events[e] = [this._events[e], t])
                : (this._events[e] = t),
              c(this._events[e]) &&
                !this._events[e].warned &&
                (r = l(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) &&
                0 < r &&
                this._events[e].length > r &&
                ((this._events[e].warned = !0),
                console.error(
                  '(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',
                  this._events[e].length
                ),
                'function' == typeof console.trace && console.trace()),
              this
            )
          }),
        (n.prototype.once = function (e, t) {
          if (!u(t)) throw TypeError('listener must be a function')
          var r = !1

          function n() {
            this.removeListener(e, n), r || ((r = !0), t.apply(this, arguments))
          }

          return (n.listener = t), this.on(e, n), this
        }),
        (n.prototype.removeListener = function (e, t) {
          var r, n, i, o
          if (!u(t)) throw TypeError('listener must be a function')
          if (!this._events || !this._events[e]) return this
          if (((i = (r = this._events[e]).length), (n = -1), r === t || (u(r.listener) && r.listener === t)))
            delete this._events[e], this._events.removeListener && this.emit('removeListener', e, t)
          else if (c(r)) {
            for (o = i; 0 < o--; )
              if (r[o] === t || (r[o].listener && r[o].listener === t)) {
                n = o
                break
              }

            if (n < 0) return this
            1 === r.length ? ((r.length = 0), delete this._events[e]) : r.splice(n, 1),
              this._events.removeListener && this.emit('removeListener', e, t)
          }
          return this
        }),
        (n.prototype.removeAllListeners = function (e) {
          var t, r
          if (!this._events) return this
          if (!this._events.removeListener)
            return 0 === arguments.length ? (this._events = {}) : this._events[e] && delete this._events[e], this

          if (0 === arguments.length) {
            for (t in this._events) 'removeListener' !== t && this.removeAllListeners(t)

            return this.removeAllListeners('removeListener'), (this._events = {}), this
          }

          if (u((r = this._events[e]))) this.removeListener(e, r)
          else if (r) for (; r.length; ) this.removeListener(e, r[r.length - 1])
          return delete this._events[e], this
        }),
        (n.prototype.listeners = function (e) {
          return this._events && this._events[e]
            ? u(this._events[e])
              ? [this._events[e]]
              : this._events[e].slice()
            : []
        }),
        (n.prototype.listenerCount = function (e) {
          if (this._events) {
            var t = this._events[e]
            if (u(t)) return 1
            if (t) return t.length
          }

          return 0
        }),
        (n.listenerCount = function (e, t) {
          return e.listenerCount(t)
        })
    },
    function (e, t, r) {
      'use strict'

      Object.defineProperty(t, '__esModule', {
        value: !0,
      })

      var n,
        i =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              },
        o = (function () {
          function n(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
          }

          return function (e, t, r) {
            return t && n(e.prototype, t), r && n(e, r), e
          }
        })(),
        a = r(19),
        s =
          (n = a) && n.__esModule
            ? n
            : {
                default: n,
              },
        u = r(20)

      var c = (function () {
        function n() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, n),
            (this.top = e.top || 0),
            (this.left = e.left || 0),
            (this.scrollX = e.scrollX || 0),
            (this.scrollY = e.scrollY || 0),
            (this.width = e.width || 0),
            (this.height = e.height || 0),
            (this.scene = e.scene || ''),
            (this.rootOpts = e.rootOpts || null)
          var t = new Date()
          this.timestamp = t.getTime()
          var r = e.frames || []
          this.setFrames(r)
        }

        return (
          o(n, [
            {
              key: 'getFrames',
              value: function () {
                return this.frames
              },
            },
            {
              key: 'getFramesLength',
              value: function () {
                return this.frames && this.frames.length
              },
            },
            {
              key: 'setFrames',
              value: function (e) {
                this.frames = []

                for (var t = 0; t < e.length; t++) this.pushNewFrame(e[t])

                return this
              },
            },
            {
              key: 'pushNewFrame',
              value: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}

                if (
                  null !== e &&
                  'object' === (void 0 === e ? 'undefined' : i(e)) &&
                  !(e = new s.default(e)).timestamp
                ) {
                  var t = new Date()
                  e.timestamp = t.getTime()
                }

                e && this.frames.push(e)
              },
            },
            {
              key: 'toJSON',
              value: function () {
                return {
                  top: this.top,
                  left: this.left,
                  scrollX: this.scrollX,
                  scrollY: this.scrollY,
                  width: this.width,
                  height: this.height,
                  timestamp: this.timestamp,
                  scene: this.scene,
                  rootOpts: this.rootOpts,
                  frames: this.frames,
                }
              },
            },
            {
              key: 'getDecodedScene',
              value: function () {
                return this.sceneDecoded || (this.sceneDecoded = u.Base64.decode(this.scene)), this.sceneDecoded
              },
            },
          ]),
          n
        )
      })()

      t.default = c
    },
    function (e, t) {
      'use strict'

      Object.defineProperty(t, '__esModule', {
        value: !0,
      })

      var r = (function () {
        function n(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }

        return function (e, t, r) {
          return t && n(e.prototype, t), r && n(e, r), e
        }
      })()

      var n = (function () {
        function t() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t),
            (this.cursorX = e.cursorX || 0),
            (this.cursorY = e.cursorY || 0),
            (this.scrollX = e.scrollX || 0),
            (this.scrollY = e.scrollY || 0),
            (this.height = e.height || 0),
            (this.width = e.width || 0),
            (this.timestamp = e.timestamp || 0),
            (this.options = e.options || {}),
            (this.eventType = e.eventType || ''),
            (this.selfSelector = e.selfSelector || null)
        }

        return (
          r(t, [
            {
              key: 'toJSON',
              value: function () {
                return {
                  eventType: this.eventType,
                  options: this.options,
                  scrollX: this.scrollX,
                  scrollY: this.scrollY,
                  cursorX: this.cursorX,
                  cursorY: this.cursorY,
                  height: this.height,
                  width: this.width,
                  timestamp: this.timestamp,
                  selfSelector: this.selfSelector,
                }
              },
            },
          ]),
          t
        )
      })()

      t.default = n
    },
    function (w, _, E) {
      var S
      ;(function (e) {
        var t, r
        ;(t = 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : void 0 !== e ? e : this),
          (r = function (t) {
            'use strict'

            var r,
              n = t.Base64
            if (void 0 !== w && w.exports)
              try {
                r = E(21).Buffer
              } catch (e) {}

            var i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
              o = (function (e) {
                for (var t = {}, r = 0, n = e.length; r < n; r++) t[e.charAt(r)] = r

                return t
              })(i),
              a = String.fromCharCode,
              s = function (e) {
                if (e.length < 2)
                  return (t = e.charCodeAt(0)) < 128
                    ? e
                    : t < 2048
                    ? a(192 | (t >>> 6)) + a(128 | (63 & t))
                    : a(224 | ((t >>> 12) & 15)) + a(128 | ((t >>> 6) & 63)) + a(128 | (63 & t))
                var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320)
                return (
                  a(240 | ((t >>> 18) & 7)) + a(128 | ((t >>> 12) & 63)) + a(128 | ((t >>> 6) & 63)) + a(128 | (63 & t))
                )
              },
              u = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
              c = function (e) {
                return e.replace(u, s)
              },
              l = function (e) {
                var t = [0, 2, 1][e.length % 3],
                  r =
                    (e.charCodeAt(0) << 16) |
                    ((1 < e.length ? e.charCodeAt(1) : 0) << 8) |
                    (2 < e.length ? e.charCodeAt(2) : 0)
                return [
                  i.charAt(r >>> 18),
                  i.charAt((r >>> 12) & 63),
                  2 <= t ? '=' : i.charAt((r >>> 6) & 63),
                  1 <= t ? '=' : i.charAt(63 & r),
                ].join('')
              },
              h = t.btoa
                ? function (e) {
                    return t.btoa(e)
                  }
                : function (e) {
                    return e.replace(/[\s\S]{1,3}/g, l)
                  },
              f = r
                ? r.from && r.from !== Uint8Array.from
                  ? function (e) {
                      return (e.constructor === r.constructor ? e : r.from(e)).toString('base64')
                    }
                  : function (e) {
                      return (e.constructor === r.constructor ? e : new r(e)).toString('base64')
                    }
                : function (e) {
                    return h(c(e))
                  },
              d = function (e, t) {
                return t
                  ? f(String(e))
                      .replace(/[+\/]/g, function (e) {
                        return '+' == e ? '-' : '_'
                      })
                      .replace(/=/g, '')
                  : f(String(e))
              },
              p = new RegExp(['[À-ß][-¿]', '[à-ï][-¿]{2}', '[ð-÷][-¿]{3}'].join('|'), 'g'),
              v = function (e) {
                switch (e.length) {
                  case 4:
                    var t =
                      (((7 & e.charCodeAt(0)) << 18) |
                        ((63 & e.charCodeAt(1)) << 12) |
                        ((63 & e.charCodeAt(2)) << 6) |
                        (63 & e.charCodeAt(3))) -
                      65536
                    return a(55296 + (t >>> 10)) + a(56320 + (1023 & t))

                  case 3:
                    return a(((15 & e.charCodeAt(0)) << 12) | ((63 & e.charCodeAt(1)) << 6) | (63 & e.charCodeAt(2)))

                  default:
                    return a(((31 & e.charCodeAt(0)) << 6) | (63 & e.charCodeAt(1)))
                }
              },
              g = function (e) {
                return e.replace(p, v)
              },
              y = function (e) {
                var t = e.length,
                  r = t % 4,
                  n =
                    (0 < t ? o[e.charAt(0)] << 18 : 0) |
                    (1 < t ? o[e.charAt(1)] << 12 : 0) |
                    (2 < t ? o[e.charAt(2)] << 6 : 0) |
                    (3 < t ? o[e.charAt(3)] : 0),
                  i = [a(n >>> 16), a((n >>> 8) & 255), a(255 & n)]
                return (i.length -= [0, 0, 2, 1][r]), i.join('')
              },
              b = t.atob
                ? function (e) {
                    return t.atob(e)
                  }
                : function (e) {
                    return e.replace(/[\s\S]{1,4}/g, y)
                  },
              m = r
                ? r.from && r.from !== Uint8Array.from
                  ? function (e) {
                      return (e.constructor === r.constructor ? e : r.from(e, 'base64')).toString()
                    }
                  : function (e) {
                      return (e.constructor === r.constructor ? e : new r(e, 'base64')).toString()
                    }
                : function (e) {
                    return g(b(e))
                  },
              e = function (e) {
                return m(
                  String(e)
                    .replace(/[-_]/g, function (e) {
                      return '-' == e ? '+' : '/'
                    })
                    .replace(/[^A-Za-z0-9\+\/]/g, '')
                )
              }

            if (
              ((t.Base64 = {
                VERSION: '2.4.0',
                atob: b,
                btoa: h,
                fromBase64: e,
                toBase64: d,
                utob: c,
                encode: d,
                encodeURI: function (e) {
                  return d(e, !0)
                },
                btou: g,
                decode: e,
                noConflict: function () {
                  var e = t.Base64
                  return (t.Base64 = n), e
                },
              }),
              'function' == typeof Object.defineProperty)
            ) {
              var x = function (e) {
                return {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                }
              }

              t.Base64.extendString = function () {
                Object.defineProperty(
                  String.prototype,
                  'fromBase64',
                  x(function () {
                    return e(this)
                  })
                ),
                  Object.defineProperty(
                    String.prototype,
                    'toBase64',
                    x(function (e) {
                      return d(this, e)
                    })
                  ),
                  Object.defineProperty(
                    String.prototype,
                    'toBase64URI',
                    x(function () {
                      return d(this, !0)
                    })
                  )
              }
            }

            return (
              t.Meteor && (Base64 = t.Base64),
              void 0 !== w && w.exports
                ? (w.exports.Base64 = t.Base64)
                : void 0 ===
                    (S = function () {
                      return t.Base64
                    }.apply(_, [])) || (w.exports = S),
              {
                Base64: t.Base64,
              }
            )
          }),
          (w.exports = r(t))
      }.call(
        _,
        (function () {
          return this
        })()
      ))
    },
    function (e, B, t) {
      ;(function (e) {
        'use strict'

        var n = t(22),
          o = t(23),
          a = t(24)

        function r() {
          return h.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function s(e, t) {
          if (r() < t) throw new RangeError('Invalid typed array length')
          return (
            h.TYPED_ARRAY_SUPPORT
              ? ((e = new Uint8Array(t)).__proto__ = h.prototype)
              : (null === e && (e = new h(t)), (e.length = t)),
            e
          )
        }

        function h(e, t, r) {
          if (!(h.TYPED_ARRAY_SUPPORT || this instanceof h)) return new h(e, t, r)

          if ('number' == typeof e) {
            if ('string' == typeof t)
              throw new Error('If encoding is specified then the first argument must be a string')
            return c(this, e)
          }

          return i(this, e, t, r)
        }

        function i(e, t, r, n) {
          if (typeof t === 'number') throw new TypeError('"value" argument must not be a number')
          return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer
            ? (function (e, t, r, n) {
                if ((t.byteLength, r < 0 || t.byteLength < r)) throw new RangeError("'offset' is out of bounds")
                if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds")
                t =
                  void 0 === r && void 0 === n
                    ? new Uint8Array(t)
                    : void 0 === n
                    ? new Uint8Array(t, r)
                    : new Uint8Array(t, r, n)
                h.TYPED_ARRAY_SUPPORT ? ((e = t).__proto__ = h.prototype) : (e = l(e, t))
                return e
              })(e, t, r, n)
            : 'string' == typeof t
            ? (function (e, t, r) {
                ;('string' == typeof r && '' !== r) || (r = 'utf8')
                if (!h.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding')
                var n = 0 | d(t, r),
                  i = (e = s(e, n)).write(t, r)
                i !== n && (e = e.slice(0, i))
                return e
              })(e, t, r)
            : (function (e, t) {
                if (h.isBuffer(t)) {
                  var r = 0 | f(t.length)
                  return 0 === (e = s(e, r)).length || t.copy(e, 0, 0, r), e
                }

                if (t) {
                  if (('undefined' != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer) || 'length' in t)
                    return 'number' != typeof t.length || (n = t.length) != n ? s(e, 0) : l(e, t)
                  if ('Buffer' === t.type && a(t.data)) return l(e, t.data)
                }

                var n
                throw new TypeError(
                  'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
                )
              })(e, t)
        }

        function u(e) {
          if ('number' != typeof e) throw new TypeError('"size" argument must be a number')
          if (e < 0) throw new RangeError('"size" argument must not be negative')
        }

        function c(e, t) {
          if ((u(t), (e = s(e, t < 0 ? 0 : 0 | f(t))), !h.TYPED_ARRAY_SUPPORT)) for (var r = 0; r < t; ++r) e[r] = 0
          return e
        }

        function l(e, t) {
          var r = t.length < 0 ? 0 : 0 | f(t.length)
          e = s(e, r)

          for (var n = 0; n < r; n += 1) e[n] = 255 & t[n]

          return e
        }

        function f(e) {
          if (e >= r())
            throw new RangeError(
              'Attempt to allocate Buffer larger than maximum size: 0x' + r().toString(16) + ' bytes'
            )
          return 0 | e
        }

        function d(e, t) {
          if (h.isBuffer(e)) return e.length
          if (
            'undefined' != typeof ArrayBuffer &&
            typeof ArrayBuffer.isView === 'function' &&
            (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
          )
            return e.byteLength
          'string' != typeof e && (e = '' + e)
          var r = e.length
          if (0 === r) return 0

          for (var n = !1; ; )
            switch (t) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return r

              case 'utf8':
              case 'utf-8':
              case void 0:
                return M(e).length

              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return 2 * r

              case 'hex':
                return r >>> 1

              case 'base64':
                return q(e).length

              default:
                if (n) return M(e).length
                ;(t = ('' + t).toLowerCase()), (n = !0)
            }
        }

        function p(e, t, r) {
          var n = e[t]
          ;(e[t] = e[r]), (e[r] = n)
        }

        function v(e, t, r, n, i) {
          if (0 === e.length) return -1

          if (
            ('string' == typeof r
              ? ((n = r), (r = 0))
              : 2147483647 < r
              ? (r = 2147483647)
              : r < -2147483648 && (r = -2147483648),
            (r = +r),
            isNaN(r) && (r = i ? 0 : e.length - 1),
            r < 0 && (r = e.length + r),
            r >= e.length)
          ) {
            if (i) return -1
            r = e.length - 1
          } else if (r < 0) {
            if (!i) return -1
            r = 0
          }

          if (('string' == typeof t && (t = h.from(t, n)), h.isBuffer(t))) return 0 === t.length ? -1 : g(e, t, r, n, i)
          if ('number' == typeof t)
            return (
              (t &= 255),
              h.TYPED_ARRAY_SUPPORT && 'function' == typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(e, t, r)
                  : Uint8Array.prototype.lastIndexOf.call(e, t, r)
                : g(e, [t], r, n, i)
            )
          throw new TypeError('val must be string, number or Buffer')
        }

        function g(e, t, r, n, i) {
          var o,
            a = 1,
            s = e.length,
            u = t.length

          if (
            void 0 !== n &&
            ('ucs2' === (n = String(n).toLowerCase()) || 'ucs-2' === n || 'utf16le' === n || 'utf-16le' === n)
          ) {
            if (e.length < 2 || t.length < 2) return -1
            ;(s /= a = 2), (u /= 2), (r /= 2)
          }

          function c(e, t) {
            return 1 === a ? e[t] : e.readUInt16BE(t * a)
          }

          if (i) {
            var l = -1

            for (o = r; o < s; o++)
              if (c(e, o) === c(t, -1 === l ? 0 : o - l)) {
                if ((-1 === l && (l = o), o - l + 1 === u)) return l * a
              } else -1 !== l && (o -= o - l), (l = -1)
          } else
            for (s < r + u && (r = s - u), o = r; 0 <= o; o--) {
              for (var h = !0, f = 0; f < u; f++)
                if (c(e, o + f) !== c(t, f)) {
                  h = !1
                  break
                }

              if (h) return o
            }

          return -1
        }

        function y(e, t, r, n) {
          r = Number(r) || 0
          var i = e.length - r
          n ? i < (n = Number(n)) && (n = i) : (n = i)
          var o = t.length
          if (o % 2 != 0) throw new TypeError('Invalid hex string')
          o / 2 < n && (n = o / 2)

          for (var a = 0; a < n; ++a) {
            var s = parseInt(t.substr(2 * a, 2), 16)
            if (isNaN(s)) return a
            e[r + a] = s
          }

          return a
        }

        function b(e, t, r, n) {
          return Y(
            (function (e) {
              for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r))

              return t
            })(t),
            e,
            r,
            n
          )
        }

        function m(e, t, r, n) {
          return Y(
            (function (e, t) {
              for (var r, n, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a)
                (r = e.charCodeAt(a)), (n = r >> 8), (i = r % 256), o.push(i), o.push(n)

              return o
            })(t, e.length - r),
            e,
            r,
            n
          )
        }

        function x(e, t, r) {
          return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r))
        }

        function w(e, t, r) {
          r = Math.min(e.length, r)

          for (var n = [], i = t; i < r; ) {
            var o,
              a,
              s,
              u,
              c = e[i],
              l = null,
              h = 239 < c ? 4 : 223 < c ? 3 : 191 < c ? 2 : 1
            if (i + h <= r)
              switch (h) {
                case 1:
                  c < 128 && (l = c)
                  break

                case 2:
                  128 == (192 & (o = e[i + 1])) && 127 < (u = ((31 & c) << 6) | (63 & o)) && (l = u)
                  break

                case 3:
                  ;(o = e[i + 1]),
                    (a = e[i + 2]),
                    128 == (192 & o) &&
                      128 == (192 & a) &&
                      2047 < (u = ((15 & c) << 12) | ((63 & o) << 6) | (63 & a)) &&
                      (u < 55296 || 57343 < u) &&
                      (l = u)
                  break

                case 4:
                  ;(o = e[i + 1]),
                    (a = e[i + 2]),
                    (s = e[i + 3]),
                    128 == (192 & o) &&
                      128 == (192 & a) &&
                      128 == (192 & s) &&
                      65535 < (u = ((15 & c) << 18) | ((63 & o) << 12) | ((63 & a) << 6) | (63 & s)) &&
                      u < 1114112 &&
                      (l = u)
              }
            null === l
              ? ((l = 65533), (h = 1))
              : 65535 < l && ((l -= 65536), n.push(((l >>> 10) & 1023) | 55296), (l = 56320 | (1023 & l))),
              n.push(l),
              (i += h)
          }

          return (function (e) {
            var t = e.length
            if (t <= _) return String.fromCharCode.apply(String, e)
            var r = '',
              n = 0

            for (; n < t; ) r += String.fromCharCode.apply(String, e.slice(n, (n += _)))

            return r
          })(n)
        }

        ;(B.Buffer = h),
          (B.SlowBuffer = function (e) {
            ;+e != e && (e = 0)
            return h.alloc(+e)
          }),
          (B.INSPECT_MAX_BYTES = 50),
          (h.TYPED_ARRAY_SUPPORT =
            void 0 !== e.TYPED_ARRAY_SUPPORT
              ? e.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var e = new Uint8Array(1)
                    return (
                      (e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42
                        },
                      }),
                      42 === e.foo() && 'function' == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                    )
                  } catch (e) {
                    return !1
                  }
                })()),
          (B.kMaxLength = r()),
          (h.poolSize = 8192),
          (h._augment = function (e) {
            return (e.__proto__ = h.prototype), e
          }),
          (h.from = function (e, t, r) {
            return i(null, e, t, r)
          }),
          h.TYPED_ARRAY_SUPPORT &&
            ((h.prototype.__proto__ = Uint8Array.prototype),
            (h.__proto__ = Uint8Array),
            'undefined' != typeof Symbol &&
              Symbol.species &&
              h[Symbol.species] === h &&
              Object.defineProperty(h, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (h.alloc = function (e, t, r) {
            return (
              (n = null),
              (o = t),
              (a = r),
              u((i = e)),
              i <= 0 ? s(n, i) : void 0 !== o ? ('string' == typeof a ? s(n, i).fill(o, a) : s(n, i).fill(o)) : s(n, i)
            )
            var n, i, o, a
          }),
          (h.allocUnsafe = function (e) {
            return c(null, e)
          }),
          (h.allocUnsafeSlow = function (e) {
            return c(null, e)
          }),
          (h.isBuffer = function (e) {
            return !(null == e || !e._isBuffer)
          }),
          (h.compare = function (e, t) {
            if (!h.isBuffer(e) || !h.isBuffer(t)) throw new TypeError('Arguments must be Buffers')
            if (e === t) return 0

            for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
              if (e[i] !== t[i]) {
                ;(r = e[i]), (n = t[i])
                break
              }

            return r < n ? -1 : n < r ? 1 : 0
          }),
          (h.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'latin1':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return !0

              default:
                return !1
            }
          }),
          (h.concat = function (e, t) {
            if (!a(e)) throw new TypeError('"list" argument must be an Array of Buffers')
            if (0 === e.length) return h.alloc(0)
            var r
            if (void 0 === t) for (r = t = 0; r < e.length; ++r) t += e[r].length
            var n = h.allocUnsafe(t),
              i = 0

            for (r = 0; r < e.length; ++r) {
              var o = e[r]
              if (!h.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers')
              o.copy(n, i), (i += o.length)
            }

            return n
          }),
          (h.byteLength = d),
          (h.prototype._isBuffer = !0),
          (h.prototype.swap16 = function () {
            var e = this.length
            if (e % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits')

            for (var t = 0; t < e; t += 2) p(this, t, t + 1)

            return this
          }),
          (h.prototype.swap32 = function () {
            var e = this.length
            if (e % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits')

            for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2)

            return this
          }),
          (h.prototype.swap64 = function () {
            var e = this.length
            if (e % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits')

            for (var t = 0; t < e; t += 8)
              p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4)

            return this
          }),
          (h.prototype.toString = function () {
            var e = 0 | this.length
            return 0 === e
              ? ''
              : 0 === arguments.length
              ? w(this, 0, e)
              : function (e, t, r) {
                  var n = !1
                  if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return ''
                  if (((void 0 === r || r > this.length) && (r = this.length), r <= 0)) return ''
                  if ((r >>>= 0) <= (t >>>= 0)) return ''

                  for (e || (e = 'utf8'); ; )
                    switch (e) {
                      case 'hex':
                        return C(this, t, r)

                      case 'utf8':
                      case 'utf-8':
                        return w(this, t, r)

                      case 'ascii':
                        return E(this, t, r)

                      case 'latin1':
                      case 'binary':
                        return S(this, t, r)

                      case 'base64':
                        return x(this, t, r)

                      case 'ucs2':
                      case 'ucs-2':
                      case 'utf16le':
                      case 'utf-16le':
                        return A(this, t, r)

                      default:
                        if (n) throw new TypeError('Unknown encoding: ' + e)
                        ;(e = (e + '').toLowerCase()), (n = !0)
                    }
                }.apply(this, arguments)
          }),
          (h.prototype.equals = function (e) {
            if (!h.isBuffer(e)) throw new TypeError('Argument must be a Buffer')
            return this === e || 0 === h.compare(this, e)
          }),
          (h.prototype.inspect = function () {
            var e = '',
              t = B.INSPECT_MAX_BYTES
            return (
              0 < this.length &&
                ((e = this.toString('hex', 0, t).match(/.{2}/g).join(' ')), this.length > t && (e += ' ... ')),
              '<Buffer ' + e + '>'
            )
          }),
          (h.prototype.compare = function (e, t, r, n, i) {
            if (!h.isBuffer(e)) throw new TypeError('Argument must be a Buffer')
            if (
              (void 0 === t && (t = 0),
              void 0 === r && (r = e ? e.length : 0),
              void 0 === n && (n = 0),
              void 0 === i && (i = this.length),
              t < 0 || r > e.length || n < 0 || i > this.length)
            )
              throw new RangeError('out of range index')
            if (i <= n && r <= t) return 0
            if (i <= n) return -1
            if (r <= t) return 1
            if (this === e) return 0

            for (
              var o = (i >>>= 0) - (n >>>= 0),
                a = (r >>>= 0) - (t >>>= 0),
                s = Math.min(o, a),
                u = this.slice(n, i),
                c = e.slice(t, r),
                l = 0;
              l < s;
              ++l
            )
              if (u[l] !== c[l]) {
                ;(o = u[l]), (a = c[l])
                break
              }

            return o < a ? -1 : a < o ? 1 : 0
          }),
          (h.prototype.includes = function (e, t, r) {
            return -1 !== this.indexOf(e, t, r)
          }),
          (h.prototype.indexOf = function (e, t, r) {
            return v(this, e, t, r, !0)
          }),
          (h.prototype.lastIndexOf = function (e, t, r) {
            return v(this, e, t, r, !1)
          }),
          (h.prototype.write = function (e, t, r, n) {
            if (void 0 === t) (n = 'utf8'), (r = this.length), (t = 0)
            else if (void 0 === r && 'string' == typeof t) (n = t), (r = this.length), (t = 0)
            else {
              if (!isFinite(t))
                throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported')
              ;(t |= 0), isFinite(r) ? ((r |= 0), void 0 === n && (n = 'utf8')) : ((n = r), (r = void 0))
            }
            var i = this.length - t
            if (((void 0 === r || i < r) && (r = i), (0 < e.length && (r < 0 || t < 0)) || t > this.length))
              throw new RangeError('Attempt to write outside buffer bounds')
            n || (n = 'utf8')

            for (var o, a, s, u, c, l, h = !1; ; )
              switch (n) {
                case 'hex':
                  return y(this, e, t, r)

                case 'utf8':
                case 'utf-8':
                  return (c = t), (l = r), Y(M(e, (u = this).length - c), u, c, l)

                case 'ascii':
                  return b(this, e, t, r)

                case 'latin1':
                case 'binary':
                  return b(this, e, t, r)

                case 'base64':
                  return (o = this), (a = t), (s = r), Y(q(e), o, a, s)

                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return m(this, e, t, r)

                default:
                  if (h) throw new TypeError('Unknown encoding: ' + n)
                  ;(n = ('' + n).toLowerCase()), (h = !0)
              }
          }),
          (h.prototype.toJSON = function () {
            return {
              type: 'Buffer',
              data: Array.prototype.slice.call(this._arr || this, 0),
            }
          })
        var _ = 4096

        function E(e, t, r) {
          var n = ''
          r = Math.min(e.length, r)

          for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i])

          return n
        }

        function S(e, t, r) {
          var n = ''
          r = Math.min(e.length, r)

          for (var i = t; i < r; ++i) n += String.fromCharCode(e[i])

          return n
        }

        function C(e, t, r) {
          var n = e.length
          ;(!t || t < 0) && (t = 0), (!r || r < 0 || n < r) && (r = n)

          for (var i = '', o = t; o < r; ++o) i += R(e[o])

          return i
        }

        function A(e, t, r) {
          for (var n = e.slice(t, r), i = '', o = 0; o < n.length; o += 2)
            i += String.fromCharCode(n[o] + 256 * n[o + 1])

          return i
        }

        function T(e, t, r) {
          if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint')
          if (r < e + t) throw new RangeError('Trying to access beyond buffer length')
        }

        function O(e, t, r, n, i, o) {
          if (!h.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance')
          if (i < t || t < o) throw new RangeError('"value" argument is out of bounds')
          if (r + n > e.length) throw new RangeError('Index out of range')
        }

        function N(e, t, r, n) {
          t < 0 && (t = 65535 + t + 1)

          for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i)
            e[r + i] = (t & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i))
        }

        function k(e, t, r, n) {
          t < 0 && (t = 4294967295 + t + 1)

          for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i) e[r + i] = (t >>> (8 * (n ? i : 3 - i))) & 255
        }

        function P(e, t, r, n, i, o) {
          if (r + n > e.length) throw new RangeError('Index out of range')
          if (r < 0) throw new RangeError('Index out of range')
        }

        function I(e, t, r, n, i) {
          return i || P(e, 0, r, 4), o.write(e, t, r, n, 23, 4), r + 4
        }

        function L(e, t, r, n, i) {
          return i || P(e, 0, r, 8), o.write(e, t, r, n, 52, 8), r + 8
        }

        ;(h.prototype.slice = function (e, t) {
          var r,
            n = this.length
          if (
            ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : n < e && (e = n),
            (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : n < t && (t = n),
            t < e && (t = e),
            h.TYPED_ARRAY_SUPPORT)
          )
            (r = this.subarray(e, t)).__proto__ = h.prototype
          else {
            var i = t - e
            r = new h(i, void 0)

            for (var o = 0; o < i; ++o) r[o] = this[o + e]
          }
          return r
        }),
          (h.prototype.readUIntLE = function (e, t, r) {
            ;(e |= 0), (t |= 0), r || T(e, t, this.length)

            for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); ) n += this[e + o] * i

            return n
          }),
          (h.prototype.readUIntBE = function (e, t, r) {
            ;(e |= 0), (t |= 0), r || T(e, t, this.length)

            for (var n = this[e + --t], i = 1; 0 < t && (i *= 256); ) n += this[e + --t] * i

            return n
          }),
          (h.prototype.readUInt8 = function (e, t) {
            return t || T(e, 1, this.length), this[e]
          }),
          (h.prototype.readUInt16LE = function (e, t) {
            return t || T(e, 2, this.length), this[e] | (this[e + 1] << 8)
          }),
          (h.prototype.readUInt16BE = function (e, t) {
            return t || T(e, 2, this.length), (this[e] << 8) | this[e + 1]
          }),
          (h.prototype.readUInt32LE = function (e, t) {
            return (
              t || T(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3]
            )
          }),
          (h.prototype.readUInt32BE = function (e, t) {
            return (
              t || T(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            )
          }),
          (h.prototype.readIntLE = function (e, t, r) {
            ;(e |= 0), (t |= 0), r || T(e, t, this.length)

            for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); ) n += this[e + o] * i

            return (i *= 128) <= n && (n -= Math.pow(2, 8 * t)), n
          }),
          (h.prototype.readIntBE = function (e, t, r) {
            ;(e |= 0), (t |= 0), r || T(e, t, this.length)

            for (var n = t, i = 1, o = this[e + --n]; 0 < n && (i *= 256); ) o += this[e + --n] * i

            return (i *= 128) <= o && (o -= Math.pow(2, 8 * t)), o
          }),
          (h.prototype.readInt8 = function (e, t) {
            return t || T(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          }),
          (h.prototype.readInt16LE = function (e, t) {
            t || T(e, 2, this.length)
            var r = this[e] | (this[e + 1] << 8)
            return 32768 & r ? 4294901760 | r : r
          }),
          (h.prototype.readInt16BE = function (e, t) {
            t || T(e, 2, this.length)
            var r = this[e + 1] | (this[e] << 8)
            return 32768 & r ? 4294901760 | r : r
          }),
          (h.prototype.readInt32LE = function (e, t) {
            return t || T(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
          }),
          (h.prototype.readInt32BE = function (e, t) {
            return t || T(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
          }),
          (h.prototype.readFloatLE = function (e, t) {
            return t || T(e, 4, this.length), o.read(this, e, !0, 23, 4)
          }),
          (h.prototype.readFloatBE = function (e, t) {
            return t || T(e, 4, this.length), o.read(this, e, !1, 23, 4)
          }),
          (h.prototype.readDoubleLE = function (e, t) {
            return t || T(e, 8, this.length), o.read(this, e, !0, 52, 8)
          }),
          (h.prototype.readDoubleBE = function (e, t) {
            return t || T(e, 8, this.length), o.read(this, e, !1, 52, 8)
          }),
          (h.prototype.writeUIntLE = function (e, t, r, n) {
            ;((e = +e), (t |= 0), (r |= 0), n) || O(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
            var i = 1,
              o = 0

            for (this[t] = 255 & e; ++o < r && (i *= 256); ) this[t + o] = (e / i) & 255

            return t + r
          }),
          (h.prototype.writeUIntBE = function (e, t, r, n) {
            ;((e = +e), (t |= 0), (r |= 0), n) || O(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
            var i = r - 1,
              o = 1

            for (this[t + i] = 255 & e; 0 <= --i && (o *= 256); ) this[t + i] = (e / o) & 255

            return t + r
          }),
          (h.prototype.writeUInt8 = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || O(this, e, t, 1, 255, 0),
              h.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              (this[t] = 255 & e),
              t + 1
            )
          }),
          (h.prototype.writeUInt16LE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || O(this, e, t, 2, 65535, 0),
              h.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8)) : N(this, e, t, !0),
              t + 2
            )
          }),
          (h.prototype.writeUInt16BE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || O(this, e, t, 2, 65535, 0),
              h.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e)) : N(this, e, t, !1),
              t + 2
            )
          }),
          (h.prototype.writeUInt32LE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || O(this, e, t, 4, 4294967295, 0),
              h.TYPED_ARRAY_SUPPORT
                ? ((this[t + 3] = e >>> 24), (this[t + 2] = e >>> 16), (this[t + 1] = e >>> 8), (this[t] = 255 & e))
                : k(this, e, t, !0),
              t + 4
            )
          }),
          (h.prototype.writeUInt32BE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || O(this, e, t, 4, 4294967295, 0),
              h.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e))
                : k(this, e, t, !1),
              t + 4
            )
          }),
          (h.prototype.writeIntLE = function (e, t, r, n) {
            if (((e = +e), (t |= 0), !n)) {
              var i = Math.pow(2, 8 * r - 1)
              O(this, e, t, r, i - 1, -i)
            }

            var o = 0,
              a = 1,
              s = 0

            for (this[t] = 255 & e; ++o < r && (a *= 256); )
              e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), (this[t + o] = (((e / a) >> 0) - s) & 255)

            return t + r
          }),
          (h.prototype.writeIntBE = function (e, t, r, n) {
            if (((e = +e), (t |= 0), !n)) {
              var i = Math.pow(2, 8 * r - 1)
              O(this, e, t, r, i - 1, -i)
            }

            var o = r - 1,
              a = 1,
              s = 0

            for (this[t + o] = 255 & e; 0 <= --o && (a *= 256); )
              e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), (this[t + o] = (((e / a) >> 0) - s) & 255)

            return t + r
          }),
          (h.prototype.writeInt8 = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || O(this, e, t, 1, 127, -128),
              h.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              e < 0 && (e = 255 + e + 1),
              (this[t] = 255 & e),
              t + 1
            )
          }),
          (h.prototype.writeInt16LE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || O(this, e, t, 2, 32767, -32768),
              h.TYPED_ARRAY_SUPPORT ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8)) : N(this, e, t, !0),
              t + 2
            )
          }),
          (h.prototype.writeInt16BE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || O(this, e, t, 2, 32767, -32768),
              h.TYPED_ARRAY_SUPPORT ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e)) : N(this, e, t, !1),
              t + 2
            )
          }),
          (h.prototype.writeInt32LE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || O(this, e, t, 4, 2147483647, -2147483648),
              h.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8), (this[t + 2] = e >>> 16), (this[t + 3] = e >>> 24))
                : k(this, e, t, !0),
              t + 4
            )
          }),
          (h.prototype.writeInt32BE = function (e, t, r) {
            return (
              (e = +e),
              (t |= 0),
              r || O(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              h.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e))
                : k(this, e, t, !1),
              t + 4
            )
          }),
          (h.prototype.writeFloatLE = function (e, t, r) {
            return I(this, e, t, !0, r)
          }),
          (h.prototype.writeFloatBE = function (e, t, r) {
            return I(this, e, t, !1, r)
          }),
          (h.prototype.writeDoubleLE = function (e, t, r) {
            return L(this, e, t, !0, r)
          }),
          (h.prototype.writeDoubleBE = function (e, t, r) {
            return L(this, e, t, !1, r)
          }),
          (h.prototype.copy = function (e, t, r, n) {
            if (
              (r || (r = 0),
              n || 0 === n || (n = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              0 < n && n < r && (n = r),
              n === r)
            )
              return 0
            if (0 === e.length || 0 === this.length) return 0
            if (t < 0) throw new RangeError('targetStart out of bounds')
            if (r < 0 || r >= this.length) throw new RangeError('sourceStart out of bounds')
            if (n < 0) throw new RangeError('sourceEnd out of bounds')
            n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r)
            var i,
              o = n - r
            if (this === e && r < t && t < n) for (i = o - 1; 0 <= i; --i) e[i + t] = this[i + r]
            else if (o < 1e3 || !h.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) e[i + t] = this[i + r]
            else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t)
            return o
          }),
          (h.prototype.fill = function (e, t, r, n) {
            if ('string' == typeof e) {
              if (
                ('string' == typeof t
                  ? ((n = t), (t = 0), (r = this.length))
                  : 'string' == typeof r && ((n = r), (r = this.length)),
                1 === e.length)
              ) {
                var i = e.charCodeAt(0)
                i < 256 && (e = i)
              }

              if (void 0 !== n && 'string' != typeof n) throw new TypeError('encoding must be a string')
              if ('string' == typeof n && !h.isEncoding(n)) throw new TypeError('Unknown encoding: ' + n)
            } else 'number' == typeof e && (e &= 255)

            if (t < 0 || this.length < t || this.length < r) throw new RangeError('Out of range index')
            if (r <= t) return this
            var o
            if (((t >>>= 0), (r = void 0 === r ? this.length : r >>> 0), e || (e = 0), 'number' == typeof e))
              for (o = t; o < r; ++o) this[o] = e
            else {
              var a = h.isBuffer(e) ? e : M(new h(e, n).toString()),
                s = a.length

              for (o = 0; o < r - t; ++o) this[o + t] = a[o % s]
            }
            return this
          })
        var D = /[^+\/0-9A-Za-z-_]/g

        function R(e) {
          return e < 16 ? '0' + e.toString(16) : e.toString(16)
        }

        function M(e, t) {
          var r
          t = t || 1 / 0

          for (var n = e.length, i = null, o = [], a = 0; a < n; ++a) {
            if (55295 < (r = e.charCodeAt(a)) && r < 57344) {
              if (!i) {
                if (56319 < r) {
                  ;-1 < (t -= 3) && o.push(239, 191, 189)
                  continue
                }

                if (a + 1 === n) {
                  ;-1 < (t -= 3) && o.push(239, 191, 189)
                  continue
                }

                i = r
                continue
              }

              if (r < 56320) {
                ;-1 < (t -= 3) && o.push(239, 191, 189), (i = r)
                continue
              }

              r = 65536 + (((i - 55296) << 10) | (r - 56320))
            } else i && -1 < (t -= 3) && o.push(239, 191, 189)

            if (((i = null), r < 128)) {
              if ((t -= 1) < 0) break
              o.push(r)
            } else if (r < 2048) {
              if ((t -= 2) < 0) break
              o.push((r >> 6) | 192, (63 & r) | 128)
            } else if (r < 65536) {
              if ((t -= 3) < 0) break
              o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128)
            } else {
              if (!(r < 1114112)) throw new Error('Invalid code point')
              if ((t -= 4) < 0) break
              o.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128)
            }
          }

          return o
        }

        function q(e) {
          return n.toByteArray(
            (function (e) {
              var t
              if ((e = ((t = e), t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '')).replace(D, '')).length < 2) return ''

              for (; e.length % 4 != 0; ) e += '='

              return e
            })(e)
          )
        }

        function Y(e, t, r, n) {
          for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i]

          return i
        }
      }.call(
        B,
        (function () {
          return this
        })()
      ))
    },
    function (e, t) {
      'use strict'

      ;(t.byteLength = function (e) {
        var t = d(e),
          r = t[0],
          n = t[1]
        return (3 * (r + n)) / 4 - n
      }),
        (t.toByteArray = function (e) {
          for (
            var t,
              r = d(e),
              n = r[0],
              i = r[1],
              o = new f(((c = n), (l = i), (3 * (c + l)) / 4 - l)),
              a = 0,
              s = 0 < i ? n - 4 : n,
              u = 0;
            u < s;
            u += 4
          )
            (t =
              (h[e.charCodeAt(u)] << 18) |
              (h[e.charCodeAt(u + 1)] << 12) |
              (h[e.charCodeAt(u + 2)] << 6) |
              h[e.charCodeAt(u + 3)]),
              (o[a++] = (t >> 16) & 255),
              (o[a++] = (t >> 8) & 255),
              (o[a++] = 255 & t)

          var c, l
          2 === i && ((t = (h[e.charCodeAt(u)] << 2) | (h[e.charCodeAt(u + 1)] >> 4)), (o[a++] = 255 & t))
          1 === i &&
            ((t = (h[e.charCodeAt(u)] << 10) | (h[e.charCodeAt(u + 1)] << 4) | (h[e.charCodeAt(u + 2)] >> 2)),
            (o[a++] = (t >> 8) & 255),
            (o[a++] = 255 & t))
          return o
        }),
        (t.fromByteArray = function (e) {
          for (var t, r = e.length, n = r % 3, i = [], o = 0, a = r - n; o < a; o += 16383)
            i.push(u(e, o, a < o + 16383 ? a : o + 16383))

          1 === n
            ? ((t = e[r - 1]), i.push(s[t >> 2] + s[(t << 4) & 63] + '=='))
            : 2 === n &&
              ((t = (e[r - 2] << 8) + e[r - 1]), i.push(s[t >> 10] + s[(t >> 4) & 63] + s[(t << 2) & 63] + '='))
          return i.join('')
        })

      for (
        var s = [],
          h = [],
          f = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
          r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          n = 0,
          i = r.length;
        n < i;
        ++n
      )
        (s[n] = r[n]), (h[r.charCodeAt(n)] = n)

      function d(e) {
        var t = e.length
        if (0 < t % 4) throw new Error('Invalid string. Length must be a multiple of 4')
        var r = e.indexOf('=')
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)]
      }

      function u(e, t, r) {
        for (var n, i, o = [], a = t; a < r; a += 3)
          (n = ((e[a] << 16) & 16711680) + ((e[a + 1] << 8) & 65280) + (255 & e[a + 2])),
            o.push(s[((i = n) >> 18) & 63] + s[(i >> 12) & 63] + s[(i >> 6) & 63] + s[63 & i])

        return o.join('')
      }

      ;(h['-'.charCodeAt(0)] = 62), (h['_'.charCodeAt(0)] = 63)
    },
    function (e, t) {
      ;(t.read = function (e, t, r, n, i) {
        var o,
          a,
          s = 8 * i - n - 1,
          u = (1 << s) - 1,
          c = u >> 1,
          l = -7,
          h = r ? i - 1 : 0,
          f = r ? -1 : 1,
          d = e[t + h]

        for (h += f, o = d & ((1 << -l) - 1), d >>= -l, l += s; 0 < l; o = 256 * o + e[t + h], h += f, l -= 8);

        for (a = o & ((1 << -l) - 1), o >>= -l, l += n; 0 < l; a = 256 * a + e[t + h], h += f, l -= 8);

        if (0 === o) o = 1 - c
        else {
          if (o === u) return a ? NaN : (1 / 0) * (d ? -1 : 1)
          ;(a += Math.pow(2, n)), (o -= c)
        }
        return (d ? -1 : 1) * a * Math.pow(2, o - n)
      }),
        (t.write = function (e, t, r, n, i, o) {
          var a,
            s,
            u,
            c = 8 * o - i - 1,
            l = (1 << c) - 1,
            h = l >> 1,
            f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            d = n ? 0 : o - 1,
            p = n ? 1 : -1,
            v = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0

          for (
            t = Math.abs(t),
              isNaN(t) || t === 1 / 0
                ? ((s = isNaN(t) ? 1 : 0), (a = l))
                : ((a = Math.floor(Math.log(t) / Math.LN2)),
                  t * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                  2 <= (t += 1 <= a + h ? f / u : f * Math.pow(2, 1 - h)) * u && (a++, (u /= 2)),
                  l <= a + h
                    ? ((s = 0), (a = l))
                    : 1 <= a + h
                    ? ((s = (t * u - 1) * Math.pow(2, i)), (a += h))
                    : ((s = t * Math.pow(2, h - 1) * Math.pow(2, i)), (a = 0)));
            8 <= i;
            e[r + d] = 255 & s, d += p, s /= 256, i -= 8
          );

          for (a = (a << i) | s, c += i; 0 < c; e[r + d] = 255 & a, d += p, a /= 256, c -= 8);

          e[r + d - p] |= 128 * v
        })
    },
    function (e, t) {
      var r = {}.toString

      e.exports =
        Array.isArray ||
        function (e) {
          return r.call(e) == '[object Array]'
        }
    },
    function (e, t) {
      'use strict'

      Object.defineProperty(t, '__esModule', {
        value: !0,
      })

      var r = (function () {
        function n(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r]
            ;(n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
        }

        return function (e, t, r) {
          return t && n(e.prototype, t), r && n(e, r), e
        }
      })()

      var n = (function () {
        function n(e, t, r) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, n),
            (this.type = e),
            (this.vedio = t),
            (this.actions = r)
        }

        return (
          r(n, [
            {
              key: 'getType',
              value: function () {
                return this.type
              },
            },
            {
              key: 'getVedio',
              value: function () {
                return this.vedio
              },
            },
            {
              key: 'getVedioFrameLength',
              value: function () {
                return this.vedio ? this.vedio.getFramesLength() : 0
              },
            },
            {
              key: 'getActions',
              value: function () {
                return this.actions
              },
            },
            {
              key: 'getActionsLength',
              value: function () {
                return this.actions.length
              },
            },
          ]),
          n
        )
      })()

      t.default = n
    },
    function (e, t) {
      'use strict'

      e.exports.sendToServer = function (e, t) {
        var r = new XMLHttpRequest()
        r.open('POST', e),
          r.setRequestHeader('Content-Type', 'application/json'),
          (r.onreadystatechange = function () {
            r.readyState == XMLHttpRequest.DONE && r.status
          }),
          r.send(t)
      }
    },
    function (e, t, r) {
      var n,
        i = (function () {
          var y = String.fromCharCode,
            r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
            i = {}

          function o(e, t) {
            if (!i[e]) {
              i[e] = {}

              for (var r = 0; r < e.length; r++) i[e][e.charAt(r)] = r
            }

            return i[e][t]
          }

          var a = {
            compressToBase64: function (e) {
              if (null == e) return ''

              var t = a._compress(e, 6, function (e) {
                return r.charAt(e)
              })

              switch (t.length % 4) {
                default:
                case 0:
                  return t

                case 1:
                  return t + '==='

                case 2:
                  return t + '=='

                case 3:
                  return t + '='
              }
            },
            decompressFromBase64: function (t) {
              return null == t
                ? ''
                : '' == t
                ? null
                : a._decompress(t.length, 32, function (e) {
                    return o(r, t.charAt(e))
                  })
            },
            compressToUTF16: function (e) {
              return null == e
                ? ''
                : a._compress(e, 15, function (e) {
                    return y(e + 32)
                  }) + ' '
            },
            decompressFromUTF16: function (t) {
              return null == t
                ? ''
                : '' == t
                ? null
                : a._decompress(t.length, 16384, function (e) {
                    return t.charCodeAt(e) - 32
                  })
            },
            compressToUint8Array: function (e) {
              for (var t = a.compress(e), r = new Uint8Array(2 * t.length), n = 0, i = t.length; n < i; n++) {
                var o = t.charCodeAt(n)
                ;(r[2 * n] = o >>> 8), (r[2 * n + 1] = o % 256)
              }

              return r
            },
            decompressFromUint8Array: function (e) {
              if (null == e) return a.decompress(e)

              for (var t = new Array(e.length / 2), r = 0, n = t.length; r < n; r++)
                t[r] = 256 * e[2 * r] + e[2 * r + 1]

              var i = []
              return (
                t.forEach(function (e) {
                  i.push(y(e))
                }),
                a.decompress(i.join(''))
              )
            },
            compressToEncodedURIComponent: function (e) {
              return null == e
                ? ''
                : a._compress(e, 6, function (e) {
                    return n.charAt(e)
                  })
            },
            decompressFromEncodedURIComponent: function (t) {
              return null == t
                ? ''
                : '' == t
                ? null
                : ((t = t.replace(/ /g, '+')),
                  a._decompress(t.length, 32, function (e) {
                    return o(n, t.charAt(e))
                  }))
            },
            compress: function (e) {
              return a._compress(e, 16, function (e) {
                return y(e)
              })
            },
            _compress: function (e, t, r) {
              if (null == e) return ''
              var n,
                i,
                o,
                a = {},
                s = {},
                u = '',
                c = '',
                l = '',
                h = 2,
                f = 3,
                d = 2,
                p = [],
                v = 0,
                g = 0

              for (o = 0; o < e.length; o += 1)
                if (
                  ((u = e.charAt(o)),
                  Object.prototype.hasOwnProperty.call(a, u) || ((a[u] = f++), (s[u] = !0)),
                  (c = l + u),
                  Object.prototype.hasOwnProperty.call(a, c))
                )
                  l = c
                else {
                  if (Object.prototype.hasOwnProperty.call(s, l)) {
                    if (l.charCodeAt(0) < 256) {
                      for (n = 0; n < d; n++) (v <<= 1), g == t - 1 ? ((g = 0), p.push(r(v)), (v = 0)) : g++

                      for (i = l.charCodeAt(0), n = 0; n < 8; n++)
                        (v = (v << 1) | (1 & i)), g == t - 1 ? ((g = 0), p.push(r(v)), (v = 0)) : g++, (i >>= 1)
                    } else {
                      for (i = 1, n = 0; n < d; n++)
                        (v = (v << 1) | i), g == t - 1 ? ((g = 0), p.push(r(v)), (v = 0)) : g++, (i = 0)

                      for (i = l.charCodeAt(0), n = 0; n < 16; n++)
                        (v = (v << 1) | (1 & i)), g == t - 1 ? ((g = 0), p.push(r(v)), (v = 0)) : g++, (i >>= 1)
                    }

                    0 == --h && ((h = Math.pow(2, d)), d++), delete s[l]
                  } else
                    for (i = a[l], n = 0; n < d; n++)
                      (v = (v << 1) | (1 & i)), g == t - 1 ? ((g = 0), p.push(r(v)), (v = 0)) : g++, (i >>= 1)

                  0 == --h && ((h = Math.pow(2, d)), d++), (a[c] = f++), (l = String(u))
                }

              if ('' !== l) {
                if (Object.prototype.hasOwnProperty.call(s, l)) {
                  if (l.charCodeAt(0) < 256) {
                    for (n = 0; n < d; n++) (v <<= 1), g == t - 1 ? ((g = 0), p.push(r(v)), (v = 0)) : g++

                    for (i = l.charCodeAt(0), n = 0; n < 8; n++)
                      (v = (v << 1) | (1 & i)), g == t - 1 ? ((g = 0), p.push(r(v)), (v = 0)) : g++, (i >>= 1)
                  } else {
                    for (i = 1, n = 0; n < d; n++)
                      (v = (v << 1) | i), g == t - 1 ? ((g = 0), p.push(r(v)), (v = 0)) : g++, (i = 0)

                    for (i = l.charCodeAt(0), n = 0; n < 16; n++)
                      (v = (v << 1) | (1 & i)), g == t - 1 ? ((g = 0), p.push(r(v)), (v = 0)) : g++, (i >>= 1)
                  }

                  0 == --h && ((h = Math.pow(2, d)), d++), delete s[l]
                } else
                  for (i = a[l], n = 0; n < d; n++)
                    (v = (v << 1) | (1 & i)), g == t - 1 ? ((g = 0), p.push(r(v)), (v = 0)) : g++, (i >>= 1)

                0 == --h && ((h = Math.pow(2, d)), d++)
              }

              for (i = 2, n = 0; n < d; n++)
                (v = (v << 1) | (1 & i)), g == t - 1 ? ((g = 0), p.push(r(v)), (v = 0)) : g++, (i >>= 1)

              for (;;) {
                if (((v <<= 1), g == t - 1)) {
                  p.push(r(v))
                  break
                }

                g++
              }

              return p.join('')
            },
            decompress: function (t) {
              return null == t
                ? ''
                : '' == t
                ? null
                : a._decompress(t.length, 32768, function (e) {
                    return t.charCodeAt(e)
                  })
            },
            _decompress: function (e, t, r) {
              var n,
                i,
                o,
                a,
                s,
                u,
                c,
                l = [],
                h = 4,
                f = 4,
                d = 3,
                p = '',
                v = [],
                g = {
                  val: r(0),
                  position: t,
                  index: 1,
                }

              for (n = 0; n < 3; n += 1) l[n] = n

              for (o = 0, s = Math.pow(2, 2), u = 1; u != s; )
                (a = g.val & g.position),
                  (g.position >>= 1),
                  0 == g.position && ((g.position = t), (g.val = r(g.index++))),
                  (o |= (0 < a ? 1 : 0) * u),
                  (u <<= 1)

              switch (o) {
                case 0:
                  for (o = 0, s = Math.pow(2, 8), u = 1; u != s; )
                    (a = g.val & g.position),
                      (g.position >>= 1),
                      0 == g.position && ((g.position = t), (g.val = r(g.index++))),
                      (o |= (0 < a ? 1 : 0) * u),
                      (u <<= 1)

                  c = y(o)
                  break

                case 1:
                  for (o = 0, s = Math.pow(2, 16), u = 1; u != s; )
                    (a = g.val & g.position),
                      (g.position >>= 1),
                      0 == g.position && ((g.position = t), (g.val = r(g.index++))),
                      (o |= (0 < a ? 1 : 0) * u),
                      (u <<= 1)

                  c = y(o)
                  break

                case 2:
                  return ''
              }

              for (i = l[3] = c, v.push(c); ; ) {
                if (g.index > e) return ''

                for (o = 0, s = Math.pow(2, d), u = 1; u != s; )
                  (a = g.val & g.position),
                    (g.position >>= 1),
                    0 == g.position && ((g.position = t), (g.val = r(g.index++))),
                    (o |= (0 < a ? 1 : 0) * u),
                    (u <<= 1)

                switch ((c = o)) {
                  case 0:
                    for (o = 0, s = Math.pow(2, 8), u = 1; u != s; )
                      (a = g.val & g.position),
                        (g.position >>= 1),
                        0 == g.position && ((g.position = t), (g.val = r(g.index++))),
                        (o |= (0 < a ? 1 : 0) * u),
                        (u <<= 1)

                    ;(l[f++] = y(o)), (c = f - 1), h--
                    break

                  case 1:
                    for (o = 0, s = Math.pow(2, 16), u = 1; u != s; )
                      (a = g.val & g.position),
                        (g.position >>= 1),
                        0 == g.position && ((g.position = t), (g.val = r(g.index++))),
                        (o |= (0 < a ? 1 : 0) * u),
                        (u <<= 1)

                    ;(l[f++] = y(o)), (c = f - 1), h--
                    break

                  case 2:
                    return v.join('')
                }

                if ((0 == h && ((h = Math.pow(2, d)), d++), l[c])) p = l[c]
                else {
                  if (c !== f) return null
                  p = i + i.charAt(0)
                }
                v.push(p), (l[f++] = i + p.charAt(0)), (i = p), 0 == --h && ((h = Math.pow(2, d)), d++)
              }
            },
          }
          return a
        })()

      void 0 ===
        (n = function () {
          return i
        }.call(t, r, t, e)) || (e.exports = n)
    },
  ])
})
