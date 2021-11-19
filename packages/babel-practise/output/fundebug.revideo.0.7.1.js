!function (e, t) {
  'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define([], t) : 'object' == typeof exports ? exports.revideo = t() : e.revideo = t();
}(window, function () {
  return function (n) {
    var r = {};

    function i(e) {
      if (r[e]) return r[e].exports;
      var t = r[e] = {
        i: e,
        l: !1,
        exports: {}
      };
      return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports;
    }

    return i.m = n, i.c = r, i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, i.r = function (e) {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: 'Module'
      }), Object.defineProperty(e, '__esModule', {
        value: !0
      });
    }, i.t = function (t, e) {
      if (1 & e && (t = i(t)), 8 & e) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (i.r(n), Object.defineProperty(n, 'default', {
        enumerable: !0,
        value: t
      }), 2 & e && 'string' != typeof t) for (var r in t) i.d(n, r, function (e) {
        return t[e];
      }.bind(null, r));
      return n;
    }, i.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return i.d(t, 'a', t), t;
    }, i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, i.p = '', i(i.s = 0);
  }([function (e, t, n) {
    'use strict';

    n.r(t);
    var r = n(1),
        i = n(3);

    function o() {
      var e = new i.default();
      e.init(), fundebug && (fundebug.revideo = e);
    }

    document.all || !fundebug || fundebug.silentVideo || document.addEventListener && (r.initConfig(), /comp|inter|loaded/.test(document.readyState) ? o() : document.addEventListener('DOMContentLoaded', o));
  }, function (e, t, n) {
    'use strict';

    n.r(t), n.d(t, _0x347a('0x0'), function () {
      return i;
    });

    var r = n(2),
        i = function () {
      var e = r[_0x347a('0x1')](),
          t = e.getAttribute('domain');

      fundebug.domain = t || document.location.origin, fundebug.maxRevideoSizeInByte = fundebug.maxRevideoSizeInByte || e.getAttribute('maxRevideoSizeInByte'), fundebug.maxRevideoSizeInByte || (fundebug.maxRevideoSizeInByte = 150);
    };
  }, function (e, t, n) {
    'use strict';

    n.r(t), n.d(t, 'isEmptyObject', function () {
      return r;
    }), n.d(t, 'fromList', function () {
      return i;
    }), n.d(t, 'uniqueID', function () {
      return o;
    }), n.d(t, _0x347a('0x2'), function () {
      return a;
    }), n.d(t, 'isSafari', function () {
      return s;
    }), n.d(t, 'isSafariOrWKWebview', function () {
      return u;
    }), n.d(t, 'getCurrentScript', function () {
      return c;
    }), n.d(t, 'knuthMorrisPratt', function () {
      return l;
    });

    var r = function (e) {
      var t;

      for (t in e) if (e.hasOwnProperty(t)) return !1;

      return !0;
    },
        i = function (e) {
      for (var t = new Array(e.length), n = 0, r = e.length; n < r; n++) t[n] = e[n];

      return t;
    },
        o = function () {
      function e() {
        return Math.random().toString(16).slice(-4);
      }

      return e() + e() + '-' + e() + '-' + e() + '-' + e() + '-' + e() + e() + e();
    },
        a = function (e) {
      return e && e.nodeName ? e.nodeName.toLowerCase() : null;
    },
        s = function () {
      return !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    },
        u = function () {
      return s() || (e = !1, 'iP' === navigator.platform.substr(0, 2) && window.webkit && window.webkit.messageHandlers && (e = !0), e);
      var e;
    },
        c = function () {
      var e = document.currentScript;

      if (!e) {
        var t = document.scripts;
        e = t[t.length - 1];
      }

      return e;
    },
        l = function (e, t) {
      if (0 === t.length) return 0;

      for (var n = 0, r = 0, i = function (e) {
        for (var t = [0], n = 0, r = 1; r < e.length;) e[n] === e[r] ? (t[r] = n + 1, r += 1, n += 1) : 0 === n ? (t[r] = 0, r += 1) : n = t[n - 1];

        return t;
      }(t); n < e.length;) if (e[n] === t[r]) {
        if (r === t.length - 1) return n - t.length + 1;
        r += 1, n += 1;
      } else 0 < r ? r = i[r - 1] : (r = 0, n += 1);

      return -1;
    };
  }, function (e, t, n) {
    'use strict';

    n.r(t);
    var r = n(4),
        i = n.n(r),
        o = n(5),
        h = n(13),
        f = n(7),
        d = n(14),
        a = n(15),
        s = n(21),
        l = n(2),
        v = n(6),
        u = n(22),
        c = n(23),
        p = n.n(c);

    function g(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r[_0x347a('0x3')] = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    var m = function () {
      function n() {
        !function (e, t) {
          if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
        }(this), this.revideoVersion = '0.7.1', this.url = 'http://localhost:3000/summary', this.MAX_SEQUENCE_FULL_SIZE_BY_LENGTH = 1024 * fundebug.maxRevideoSizeInByte, 1024e3 < this.MAX_SEQUENCE_FULL_SIZE_BY_LENGTH && (this[_0x347a('0x4')] = 5e5), this.MAX_SINGLE_FRAGMENT_LENGTH = 1e3, this[_0x347a('0x5')] = 2e3, this.MAX_TOTAL_LENGTH = 1e4, this.MAX_TIME_SPAN_PER_FRAGMENT = 20, this.timeSpanCount = 0, this.lengthOverflowCheckTimeSpan = 5e3, this.recorder = null, this.redoIntervalId = null, this.observer = null, this.vedio = null, this.inputInterValIds = [], this.sequence = [], this.actions = [], this.isStop = !1;
      }

      var e, t;
      return e = n, t = [{
        key: 'send',
        value: function () {
          var e = this.fetchSequence(),
              t = JSON.stringify(e);
          u.sendToServer(this.url, t);
        }
      }, {
        key: 'fetchSequence',
        value: function () {
          this.pushFragmentToSequence(0);
          var e = this.calculateSequenceSize();
          e > this.MAX_SEQUENCE_FULL_SIZE_BY_LENGTH && (1 < this.calculateSequenceLen() ? (this.shiftFragment(), e = this.calculateSequenceSize()) : this.sequence = []), e > this.MAX_SEQUENCE_FULL_SIZE_BY_LENGTH ? this.sequence = [] : 3e5 < e && 0.3 <= Math.random() && (this.sequence = []);
          var t = [];

          try {
            t = JSON.stringify(this.sequence);
          } catch (e) {
            this.sequence;
          }

          var n = '';

          try {
            n = l.isSafariOrWKWebview() ? p.a.compressToBase64(t) : p.a.compress(t);
          } catch (e) {}

          return {
            domain: fundebug.domain,
            isSafariOrWKWebview: l.isSafariOrWKWebview(),
            sequence: n,
            revideoVersion: this.revideoVersion
          };
        }
      }, {
        key: 'getSequence',
        value: function () {
          return this.sequence;
        }
      }, {
        key: 'calculateSequenceSize',
        value: function () {
          return this.sequence.reduce(function (e, t) {
            var n = t.actions.reduce(function (e, t) {
              var n = 0;
              return t.actionData.outerHTML ? n = t.actionData.outerHTML.length : t.actionData.redoableElement && t.actionData.redoableElement.outerHTML && (n = t.actionData.redoableElement.outerHTML.len), e + n;
            }, 0);
            return t.vedio.scene ? e + t.vedio.scene.length + n : e + n;
          }, 0);
        }
      }, {
        key: 'init',
        value: function () {
          this.initRecorder(), this.initAction(), this.monitorRedo();
        }
      }, {
        key: _0x347a('0x6'),
        value: function () {
          var e = this;
          this.isStop = !0, this.recorder && this.recorder.stop(), this.observer && this.observer.disconnect(), setTimeout(function () {
            e.inputInterValIds.map(function (e) {
              clearInterval(e);
            }), e.inputInterValIds = [];
          }, 0);
        }
      }, {
        key: 'initRecorder',
        value: function () {
          if (this.vedio = null, this.recorder) this.recorder.restart();else {
            this.recorder = new a.default({
              target: document.documentElement
            });
            var e = this;
            this.recorder.on('fun_recording', function () {
              e.vedio = e.recorder.getVedio();
            }), this.recorder.start();
          }
        }
      }, {
        key: 'initAction',
        value: function () {
          ;
          this.actions = [], this.initMutationObserver(), this.initInput();
        }
      }, {
        key: 'initMutationObserver',
        value: function () {
          this.observer && this.observer.disconnect();
          var n = this;

          try {
            this.observer = new i.a({
              callback: function (e) {
                n.addInputListenterToNodeList(e);
                var t = o.parseMutations(e);
                n.actions = n.actions.concat(t);
              },
              queries: [{
                all: !0
              }],
              oldPreviousSibling: !0
            });
          } catch (e) {
            return this.stop(), null;
          }
        }
      }, {
        key: 'initInput',
        value: function () {
          this.injectAllInputIn(document);
        }
      }, {
        key: 'injectAllInputIn',
        value: function (u) {
          var c = this;
          ['input', 'textarea', 'select'].map(function (e) {
            function r(e, t, n, r) {
              var i = r.actions.length;

              if (0 < i) {
                var o = r[_0x347a('0x7')][i - 1];

                if (4 === o.getActionType() && o.getActionData().getInput().getValue() === n) return;
              }

              var a = new h.default(t, e.type, n),
                  s = new v.default(),
                  u = new v.default(),
                  c = new d.default(e, a, s, u),
                  l = new f.default(4, c);
              r.actions.push(l);
            }

            if (u && u.querySelectorAll) {
              var i,
                  t,
                  o,
                  n,
                  a = u[_0x347a('0x8')](e),
                  s = l.fromList(a);

              0 !== s.length && (i = e, t = s, o = {}, n = setInterval(function () {
                0 === (t = t.filter(function (e) {
                  return e.funRemoved && delete o[e.funId], !e.funRemoved;
                })).length && (clearInterval(n), c.inputInterValIds.splice(c[_0x347a('0x9')].indexOf(n), 1)), t.map(function (e) {
                  var t;
                  t = e && 'password' === e.type ? e.value ? 'XXXXXXXX' : e.value : 'radio' === e.type || 'checkbox' === e.type ? e.checked : e.value;
                  var n = e.funId;

                  if (n) {
                    if (o[n] === t) return;
                    o[e.funId] = t, r(e, i, t, c);
                  } else e.funId = l.uniqueID(), o[e.funId] = t, r(e, i, t, c);
                });
              }, 100), c.inputInterValIds.push(n));
            }
          });
        }
      }, {
        key: 'addInputListenterToNodeList',
        value: function (e) {
          var n = this;
          e.map(function (e) {
            var t = o.extractCleanNodes(e.added);
            (e.added = t).map(function (e) {
              n.injectAllInputIn(e);
            });
          });
        }
      }, {
        key: 'monitorRedo',
        value: function () {
          if (this.redoIntervalId && window.clearInterval(this.redoIntervalId), !this.isStop) {
            var e = this;
            this.redoIntervalId = setInterval(function () {
              if (e.timeSpanCount++, 2 <= e.timeSpanCount) return e.timeSpanCount = 0, 1 < e.calculateSequenceLen() && this.shiftFragment(), void e.pushFragmentToSequence(0);
              (e[_0x347a('0xa')] && e.vedio.getFramesLength()) + e.actions.length > e.MAX_SINGLE_FRAGMENT_LENGTH && e.pushFragmentToSequence(0);
            }, this.lengthOverflowCheckTimeSpan);
          }
        }
      }, {
        key: 'shiftFragment',
        value: function () {
          this.sequence.shift();
        }
      }, {
        key: 'pushFragmentToSequence',
        value: function (e) {
          this.vedio = this.recorder.getVedio();
          var t = new s.default(e, this.vedio, this.actions);
          this.sequence.push(t), this.checkLengthToshiftSequence(), this.mergeSequence(), this.init();
        }
      }, {
        key: 'checkLengthToshiftSequence',
        value: function () {
          var e = this[_0x347a('0xb')]();

          (this.calculateTotalLastTime() > this.MAX_TIME_SPAN_PER_FRAGMENT || e > this.MAX_TOTAL_FRAGMENT_LENGTH && 1 < this.calculateSequenceLen() || e > this[_0x347a('0xc')]) && this.shiftFragment();
        }
      }, {
        key: 'mergeSequence',
        value: function () {
          for (var e = [], t = this.sequence[0], n = 1; n < this.sequence.length; n++) {
            var r = this.sequence[n];

            if (0 === t.type && t.type === r.type) {
              var i = t.vedio.frames;
              t.vedio[_0x347a('0xd')] = i.concat(r[_0x347a('0xa')].frames), t.actions = t.actions.concat(r.actions);
            } else e.push(t), t = r;
          }

          e.push(t), this.sequence = e;
        }
      }, {
        key: 'calculateTotalLength',
        value: function () {
          return this.sequence.reduce(function (e, t) {
            return e + t.getVedioFrameLength() + t.getActionsLength();
          }, 0);
        }
      }, {
        key: 'calculateSequenceLen',
        value: function () {
          return this.sequence.length;
        }
      }, {
        key: 'calculateTotalLastTime',
        value: function () {
          var e = this.calculateSequenceLen();
          if (0 === e) return 0;

          var t = this[_0x347a('0xe')][0].getVedioTimestamp(),
              n = this.sequence[e - 1];

          return ((n.getLastActionTimestamp() || n.getVedioTimestamp()) - t) / 1e3;
        }
      }, {
        key: 'clear',
        value: function () {
          window.clearInterval(this.redoIntervalId), this.sequence = [], this.vedio = null, this.actions = [], this.recorder = null, this.redoIntervalId = null;
        }
      }], g(e.prototype, t), n;
    }();

    t.default = m;
  }, function (e, t) {
    var n,
        r = this.__extends || function (e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);

      function r() {
        this.constructor = e;
      }

      ;
      r[_0x347a('0xf')] = t.prototype, e.prototype = new r();
    };

    if ('undefined' != typeof WebKitMutationObserver ? n = WebKitMutationObserver : document.all || (n = MutationObserver), void 0 === n) throw Error('MutationObserver is undefined');

    var d,
        i,
        u = function () {
      function n() {
        ;
        this.nodes = [], this.values = [];
      }

      return n.prototype.isIndex = function (e) {
        return +e == e >>> 0;
      }, n.prototype.nodeId = function (e) {
        var t = e[n.ID_PROP];
        return t || (t = e[n.ID_PROP] = n.nextId_++), t;
      }, n.prototype.set = function (e, t) {
        var n = this.nodeId(e);
        this.nodes[n] = e, this.values[n] = t;
      }, n.prototype.get = function (e) {
        var t = this.nodeId(e);
        return this.values[t];
      }, n.prototype.has = function (e) {
        return this.nodeId(e) in this.nodes;
      }, n.prototype.delete = function (e) {
        var t = this[_0x347a('0x10')](e);

        delete this.nodes[t], this.values[t] = void 0;
      }, n[_0x347a('0xf')].keys = function () {
        var e = [];

        for (var t in this.nodes) this.isIndex(t) && e.push(this.nodes[t]);

        return e;
      }, n.ID_PROP = '__mutation_summary_node_map_id__', n.nextId_ = 1, n;
    }();

    (i = d || (d = {}))[i.STAYED_OUT = 0] = 'STAYED_OUT', i[i.ENTERED = 1] = 'ENTERED', i[i.STAYED_IN = 2] = 'STAYED_IN', i[i.REPARENTED = 3] = 'REPARENTED', i[i.REORDERED = 4] = 'REORDERED', i[i.EXITED = 5] = 'EXITED';

    var o = function () {
      function e(e, t, n, r, i, o, a, s) {
        void 0 === t && (t = !1), void 0 === n && (n = !1), void 0 === r && (r = !1), void 0 === i && (i = null), void 0 === o && (o = !1), void 0 === a && (a = null), void 0 === s && (s = null), this.node = e, this.childList = t, this.attributes = n, this.characterData = r, this.oldParentNode = i, this.added = o, this.attributeOldValues = a, this.characterDataOldValue = s, this.isCaseInsensitive = this.node.nodeType === Node.ELEMENT_NODE && this.node instanceof HTMLElement && this.node.ownerDocument instanceof HTMLDocument;
      }

      return e.prototype.getAttributeOldValue = function (e) {
        if (this.attributeOldValues) return this[_0x347a('0x11')] && (e = e[_0x347a('0x12')]()), this[_0x347a('0x13')][e];
      }, e.prototype.getAttributeNamesMutated = function () {
        var e = [];
        if (!this.attributeOldValues) return e;

        for (var t in this.attributeOldValues) e.push(t);

        return e;
      }, e.prototype.attributeMutated = function (e, t) {
        ;
        this.attributes = !0, this.attributeOldValues = this.attributeOldValues || {}, e in this.attributeOldValues || (this.attributeOldValues[e] = t);
      }, e.prototype.characterDataMutated = function (e) {
        this.characterData || (this.characterData = !0, this.characterDataOldValue = e);
      }, e.prototype.removedFromParent = function (e) {
        ;
        this.childList = !0, this.added || this.oldParentNode ? this.added = !1 : this.oldParentNode = e;
      }, e.prototype.insertedIntoParent = function () {
        ;
        this.childList = !0, this.added = !0;
      }, e.prototype.getOldParent = function () {
        if (this.childList) {
          if (this.oldParentNode) return this.oldParentNode;
          if (this.added) return null;
        }

        return this.node.parentNode;
      }, e;
    }(),
        a = function () {
      ;
      this.added = new u(), this.removed = new u(), this.maybeMoved = new u(), this.oldPrevious = new u(), this.moved = void 0;
    },
        s = function (a) {
      function e(e, t) {
        a.call(this), this.rootNode = e, this.reachableCache = void 0, this.wasReachableCache = void 0, this.anyParentsChanged = !1, this.anyAttributesChanged = !1, this[_0x347a('0x14')] = !1;

        for (var n = 0; n < t.length; n++) {
          var r = t[n];

          switch (r.type) {
            case 'childList':
              this.anyParentsChanged = !0;

              for (var i = 0; i < r.removedNodes.length; i++) {
                var o = r.removedNodes[i];
                this.getChange(o).removedFromParent(r.target);
              }

              for (i = 0; i < r.addedNodes.length; i++) o = r.addedNodes[i], this.getChange(o).insertedIntoParent();

              break;

            case 'attributes':
              ;
              this.anyAttributesChanged = !0, this.getChange(r.target).attributeMutated(r.attributeName, r.oldValue);
              break;

            case 'characterData':
              ;
              this.anyCharacterDataChanged = !0, this.getChange(r.target).characterDataMutated(r.oldValue);
          }
        }
      }

      return r(e, a), e.prototype.getChange = function (e) {
        var t = this.get(e);
        return t || (t = new o(e), this.set(e, t)), t;
      }, e[_0x347a('0xf')][_0x347a('0x15')] = function (e) {
        var t = this.get(e);
        return t ? t.getOldParent() : e.parentNode;
      }, e.prototype.getIsReachable = function (e) {
        if (e === this.rootNode) return !0;
        if (!e) return !1;
        this.reachableCache = this.reachableCache || new u();
        var t = this.reachableCache.get(e);
        return void 0 === t && (t = this[_0x347a('0x16')](e.parentNode), this.reachableCache.set(e, t)), t;
      }, e.prototype.getWasReachable = function (e, t) {
        if (200 <= ++t) return !1;
        if (e === this.rootNode) return !0;
        if (!e) return !1;
        this.wasReachableCache = this.wasReachableCache || new u();
        var n = this.wasReachableCache.get(e);
        return void 0 === n && (n = this.getWasReachable(this.getOldParent(e), t), this.wasReachableCache.set(e, n)), n;
      }, e.prototype.reachabilityChange = function (e) {
        return this.getIsReachable(e) ? this.getWasReachable(e, 0) ? d.STAYED_IN : d.ENTERED : this.getWasReachable(e, 0) ? d.EXITED : d.STAYED_OUT;
      }, e;
    }(u),
        c = function () {
      function e(e, t, n, r, i) {
        ;
        this.rootNode = e, this.mutations = t, this.selectors = n, this.calcReordered = r, this.calcOldPreviousSibling = i, this.treeChanges = new s(e, t), this.entered = [], this.exited = [], this.stayedIn = new u(), this.visited = new u(), this.childListChangeMap = void 0, this.characterDataOnly = void 0, this.matchCache = void 0, this.processMutations();
      }

      return e[_0x347a('0xf')].processMutations = function () {
        if (this.treeChanges.anyParentsChanged || this.treeChanges.anyAttributesChanged) for (var e = this.treeChanges.keys(), t = 0; t < e.length; t++) this.visitNode(e[t], void 0);
      }, e.prototype.visitNode = function (e, t) {
        if (!this.visited.has(e)) {
          this.visited.set(e, !0);
          var n = this.treeChanges.get(e),
              r = t;

          if ((n && n.childList || null == r) && (r = this.treeChanges.reachabilityChange(e)), r !== d.STAYED_OUT) {
            if (this.matchabilityChange(e), r === d.ENTERED) this.entered.push(e);else if (r === d.EXITED) this.exited.push(e), this.ensureHasOldPreviousSiblingIfNeeded(e);else if (r === d.STAYED_IN) {
              var i = d.STAYED_IN;
              n && n.childList && (n.oldParentNode !== e.parentNode ? (i = d.REPARENTED, this.ensureHasOldPreviousSiblingIfNeeded(e)) : this.calcReordered && this.wasReordered(e) && (i = d.REORDERED)), this.stayedIn.set(e, i);
            }
            if (r !== d.STAYED_IN) for (var o = e.firstChild; o; o = o.nextSibling) this.visitNode(o, r);
          }
        }
      }, e.prototype.ensureHasOldPreviousSiblingIfNeeded = function (e) {
        if (this.calcOldPreviousSibling) {
          this.processChildlistChanges();
          var t = e.parentNode,
              n = this.treeChanges.get(e);
          n && n[_0x347a('0x17')] && (t = n.oldParentNode);
          var r = this.childListChangeMap.get(t);
          r || (r = new a(), this.childListChangeMap.set(t, r)), r.oldPrevious[_0x347a('0x18')](e) || r.oldPrevious.set(e, e.previousSibling);
        }
      }, e.prototype[_0x347a('0x19')] = function (e, t, n) {
        ;
        this.selectors = t, this.characterDataOnly = n;

        for (var r = 0; r < this.entered[_0x347a('0x1a')]; r++) {
          var i = this.entered[r];
          (s = this.matchabilityChange(i)) !== d.ENTERED && s !== d.STAYED_IN || e.added.push(i);
        }

        var o = this.stayedIn.keys();

        for (r = 0; r < o.length; r++) if (i = o[r], (s = this.matchabilityChange(i)) === d[_0x347a('0x1b')]) e.added[_0x347a('0x1c')](i);else if (s === d.EXITED) e.removed.push(i);else if (s === d.STAYED_IN && (e.reparented || e.reordered)) {
          var a = this.stayedIn.get(i);
          e.reparented && a === d.REPARENTED ? e.reparented.push(i) : e.reordered && a === d.REORDERED && e.reordered.push(i);
        }

        for (r = 0; r < this.exited.length; r++) {
          var s;
          i = this.exited[r], (s = this.matchabilityChange(i)) !== d.EXITED && s !== d.STAYED_IN || e[_0x347a('0x1d')][_0x347a('0x1c')](i);
        }
      }, e.prototype.getOldParentNode = function (e) {
        var t = this.treeChanges.get(e);
        if (t && t.childList) return t.oldParentNode ? t.oldParentNode : null;
        var n = this.treeChanges.reachabilityChange(e);
        if (n === d.STAYED_OUT || n === d[_0x347a('0x1b')]) throw Error('getOldParentNode requested on invalid node.');
        return e.parentNode;
      }, e.prototype.getOldPreviousSibling = function (e) {
        var t = e.parentNode,
            n = this.treeChanges.get(e);
        n && n[_0x347a('0x17')] && (t = n.oldParentNode);
        var r = this.childListChangeMap.get(t);
        if (!r) throw Error('getOldPreviousSibling requested on invalid node.');
        return r.oldPrevious.get(e);
      }, e.prototype.getOldAttribute = function (e, t) {
        var n = this.treeChanges.get(e);
        if (!n || !n.attributes) throw Error('getOldAttribute requested on invalid node.');
        var r = n.getAttributeOldValue(t);
        if (void 0 === r) throw Error('getOldAttribute requested for unchanged attribute name.');
        return r;
      }, e.prototype.attributeChangedNodes = function (e) {
        if (!this.treeChanges.anyAttributesChanged) return {};
        var t, n;

        if (e) {
          ;
          t = {}, n = {};

          for (var r = 0; r < e.length; r++) t[h = e[r]] = !0, n[h.toLowerCase()] = h;
        }

        var i = {},
            o = this.treeChanges.keys();

        for (r = 0; r < o[_0x347a('0x1a')]; r++) {
          var a = o[r],
              s = this.treeChanges.get(a);
          if (s.attributes && d.STAYED_IN === this.treeChanges.reachabilityChange(a) && d.STAYED_IN === this.matchabilityChange(a)) for (var u = a, c = s.getAttributeNamesMutated(), l = 0; l < c.length; l++) {
            var h = c[l];
            (!t || t[h] || s.isCaseInsensitive && n[h]) && s.getAttributeOldValue(h) !== u.getAttribute(h) && (n && s.isCaseInsensitive && (h = n[h]), i[h] = i[h] || [], i[h].push(u));
          }
        }

        return i;
      }, e.prototype.getOldCharacterData = function (e) {
        var t = this.treeChanges.get(e);
        if (!t || !t.characterData) throw Error('getOldCharacterData requested on invalid node.');
        return t.characterDataOldValue;
      }, e.prototype.getCharacterDataChanged = function () {
        if (!this.treeChanges.anyCharacterDataChanged) return [];

        for (var e = this.treeChanges.keys(), t = [], n = 0; n < e.length; n++) {
          var r = e[n];

          if (d.STAYED_IN === this.treeChanges.reachabilityChange(r)) {
            var i = this.treeChanges.get(r);
            i.characterData && r.textContent != i.characterDataOldValue && t.push(r);
          }
        }

        return t;
      }, e.prototype.computeMatchabilityChange = function (e, t) {
        this.matchCache || (this.matchCache = []), this.matchCache[e.uid] || (this.matchCache[e.uid] = new u());

        var n = this.matchCache[e.uid],
            r = n[_0x347a('0x1e')](t);

        return void 0 === r && (r = e.matchabilityChange(t, this.treeChanges.get(t)), n.set(t, r)), r;
      }, e.prototype.matchabilityChange = function (e) {
        var t = this;
        if (this.characterDataOnly) switch (e.nodeType) {
          case Node.COMMENT_NODE:
          case Node.TEXT_NODE:
            return d.STAYED_IN;

          default:
            return d.STAYED_OUT;
        }
        if (!this.selectors) return d.STAYED_IN;
        if (e.nodeType !== Node[_0x347a('0x1f')]) return d.STAYED_OUT;

        for (var n = e, r = this.selectors.map(function (e) {
          return t.computeMatchabilityChange(e, n);
        }), i = d.STAYED_OUT, o = 0; i !== d.STAYED_IN && o < r.length;) {
          switch (r[o]) {
            case d.STAYED_IN:
              i = d.STAYED_IN;
              break;

            case d.ENTERED:
              i = i === d.EXITED ? d.STAYED_IN : d.ENTERED;
              break;

            case d.EXITED:
              i = i === d.ENTERED ? d.STAYED_IN : d.EXITED;
          }

          o++;
        }

        return i;
      }, e.prototype.getChildlistChange = function (e) {
        var t = this.childListChangeMap.get(e);
        return t || (t = new a(), this.childListChangeMap.set(e, t)), t;
      }, e.prototype.processChildlistChanges = function () {
        if (!this.childListChangeMap) {
          this.childListChangeMap = new u();

          for (var e = 0; e < this[_0x347a('0x20')].length; e++) {
            var t = this.mutations[e];

            if ('childList' == t.type && (this.treeChanges.reachabilityChange(t.target) === d.STAYED_IN || this.calcOldPreviousSibling)) {
              for (var n = this.getChildlistChange(t.target), r = t.previousSibling, i = 0; i < t.removedNodes.length; i++) a(o = t.removedNodes[i], r), n.added.has(o) ? n.added.delete(o) : (n.removed.set(o, !0), n.maybeMoved.delete(o)), r = o;

              for (a(t.nextSibling, r), i = 0; i < t.addedNodes.length; i++) {
                var o = t.addedNodes[i];
                n.removed.has(o) ? (n.removed.delete(o), n.maybeMoved.set(o, !0)) : n.added.set(o, !0);
              }
            }

            function a(e, t) {
              !e || n.oldPrevious.has(e) || n.added.has(e) || n.maybeMoved.has(e) || t && (n.added.has(t) || n.maybeMoved.has(t)) || n.oldPrevious.set(e, t);
            }
          }
        }
      }, e.prototype.wasReordered = function (e) {
        if (!this.treeChanges.anyParentsChanged) return !1;

        this[_0x347a('0x21')]();

        var t = e.parentNode,
            n = this.treeChanges.get(e);
        n && n.oldParentNode && (t = n.oldParentNode);
        var i = this.childListChangeMap.get(t);
        if (!i) return !1;
        if (i.moved) return i.moved.get(e);
        i.moved = new u();
        var o = new u();
        var a = new u(),
            s = new u();
        return i.maybeMoved.keys().forEach(function r(e) {
          if (!e) return !1;
          if (!i.maybeMoved.has(e)) return !1;
          var t = i.moved.get(e);
          return void 0 !== t || (o.has(e) ? t = !0 : (o.set(e, !0), t = function (e) {
            if (s.has(e)) return s.get(e);

            for (var t = e.previousSibling; t && (i.added.has(t) || r(t));) t = t.previousSibling;

            return s.set(e, t), t;
          }(e) !== function e(t) {
            var n = a.get(t);
            if (void 0 !== n) return n;

            for (n = i.oldPrevious.get(t); n && (i.removed.has(n) || r(n));) n = e(n);

            return void 0 === n && (n = t.previousSibling), a.set(t, n), n;
          }(e)), o.has(e) ? (o.delete(e), i.moved.set(e, t)) : t = i.moved.get(e)), t;
        }), i.moved.get(e);
      }, e;
    }(),
        l = function () {
      function e(e, t) {
        var n = this;

        if (this.projection = e, this.added = [], this.removed = [], this[_0x347a('0x22')] = t.all || t.element || t.characterData ? [] : void 0, this.reordered = t.all ? [] : void 0, e.getChanged(this, t.elementFilter, t.characterData), t.all || t.attribute || t.attributeList) {
          var r = t.attribute ? [t.attribute] : t.attributeList,
              i = e.attributeChangedNodes(r);
          t.attribute ? this.valueChanged = i[t.attribute] || [] : (this.attributeChanged = i, t.attributeList && t.attributeList.forEach(function (e) {
            n.attributeChanged.hasOwnProperty(e) || (n.attributeChanged[e] = []);
          }));
        }

        if (t.all || t.characterData) {
          var o = e.getCharacterDataChanged();
          t[_0x347a('0x23')] ? this.valueChanged = o : this.characterDataChanged = o;
        }

        this[_0x347a('0x24')] && (this.getOldPreviousSibling = e.getOldPreviousSibling.bind(e));
      }

      return e.prototype.getOldParentNode = function (e) {
        return this.projection.getOldParentNode(e);
      }, e.prototype.getOldAttribute = function (e, t) {
        return this.projection.getOldAttribute(e, t);
      }, e.prototype.getOldCharacterData = function (e) {
        return this.projection.getOldCharacterData(e);
      }, e.prototype.getOldPreviousSibling = function (e) {
        return this.projection.getOldPreviousSibling(e);
      }, e;
    }(),
        v = /[a-zA-Z_]+/,
        p = /[a-zA-Z0-9_\-]+/;

    function h(e) {
      return '"' + e[_0x347a('0x25')](/"/, '\\"') + '"';
    }

    var g = function () {
      function e() {}

      return e.prototype.matches = function (e) {
        if (null === e) return !1;
        if (void 0 === this[_0x347a('0x26')]) return !0;
        if (!this.contains) return this.attrValue == e;

        for (var t = e.split(' '), n = 0; n < t.length; n++) if (this.attrValue === t[n]) return !0;

        return !1;
      }, e.prototype.toString = function () {
        return _0x347a('0x27') === this.attrName && this.contains ? '.' + this.attrValue : 'id' !== this.attrName || this.contains ? this.contains ? '[' + this.attrName + '~=' + h(this.attrValue) + ']' : 'attrValue' in this ? '[' + this.attrName + '=' + h(this.attrValue) + ']' : '[' + this.attrName + ']' : '#' + this.attrValue;
      }, e;
    }(),
        f = function () {
      function f() {
        ;
        this.uid = f.nextUid++, this.qualifiers = [];
      }

      var e;
      return Object.defineProperty(f.prototype, 'caseInsensitiveTagName', {
        get: function () {
          return this.tagName.toUpperCase();
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(f.prototype, 'selectorString', {
        get: function () {
          return this.tagName + this.qualifiers.join('');
        },
        enumerable: !0,
        configurable: !0
      }), f.prototype.isMatching = function (e) {
        return e[f.matchesSelector](this.selectorString);
      }, f.prototype[_0x347a('0x28')] = function (e, t, n) {
        if (!t || !t.attributes) return n;
        var r = t.isCaseInsensitive ? this.caseInsensitiveTagName : this.tagName;
        if ('*' !== r && r !== e.tagName) return !1;

        for (var i = [], o = !1, a = 0; a < this[_0x347a('0x29')].length; a++) {
          var s = this.qualifiers[a],
              u = t.getAttributeOldValue(s[_0x347a('0x2a')]);
          i[_0x347a('0x1c')](u), o = o || void 0 !== u;
        }

        if (!o) return n;

        for (a = 0; a < this.qualifiers.length; a++) if (s = this.qualifiers[a], void 0 === (u = i[a]) && (u = e.getAttribute(s.attrName)), !s.matches(u)) return !1;

        return !0;
      }, f.prototype.matchabilityChange = function (e, t) {
        var n = this.isMatching(e);
        return n ? this.wasMatching(e, t, n) ? d.STAYED_IN : d.ENTERED : this.wasMatching(e, t, n) ? d.EXITED : d.STAYED_OUT;
      }, f.parseSelectors = function (e) {
        var t,
            n,
            r = [];

        function i() {
          t && (n && (t.qualifiers.push(n), n = void 0), r.push(t)), t = new f();
        }

        function o() {
          n && t.qualifiers.push(n), n = new g();
        }

        for (var a, s = /\s/, u = 'Invalid or unsupported selector syntax.', c = 1, l = 0; l < e[_0x347a('0x1a')];) {
          var h = e[l++];

          switch (c) {
            case 1:
              if (h.match(v)) {
                i(), t.tagName = h, c = 2;
                break;
              }

              if ('*' == h) {
                i(), t.tagName = '*', c = 3;
                break;
              }

              if ('.' == h) {
                i(), o(), t.tagName = '*', n.attrName = 'class', n.contains = !0, c = 4;
                break;
              }

              if ('#' == h) {
                i(), o(), t.tagName = '*', n.attrName = 'id', c = 4;
                break;
              }

              if ('[' == h) {
                i(), o(), t.tagName = '*', n.attrName = '', c = 6;
                break;
              }

              if (h[_0x347a('0x2b')](s)) break;
              throw Error(u);

            case 2:
              if (h.match(p)) {
                t.tagName += h;
                break;
              }

              if ('.' == h) {
                o(), n.attrName = 'class', n.contains = !0, c = 4;
                break;
              }

              if ('#' == h) {
                o(), n.attrName = 'id', c = 4;
                break;
              }

              if ('[' == h) {
                o(), n.attrName = '', c = 6;
                break;
              }

              if (h.match(s)) {
                c = 14;
                break;
              }

              if (',' == h) {
                c = 1;
                break;
              }

              throw Error(u);

            case 3:
              if ('.' == h) {
                o(), n.attrName = 'class', n.contains = !0, c = 4;
                break;
              }

              if ('#' == h) {
                o(), n.attrName = 'id', c = 4;
                break;
              }

              if ('[' == h) {
                o(), n.attrName = '', c = 6;
                break;
              }

              if (h.match(s)) {
                c = 14;
                break;
              }

              if (',' == h) {
                c = 1;
                break;
              }

              throw Error(u);

            case 4:
              if (h.match(v)) {
                ;
                n.attrValue = h, c = 5;
                break;
              }

              throw Error(u);

            case 5:
              if (h.match(p)) {
                n.attrValue += h;
                break;
              }

              if ('.' == h) {
                o(), n.attrName = 'class', n.contains = !0, c = 4;
                break;
              }

              if ('#' == h) {
                o(), n.attrName = 'id', c = 4;
                break;
              }

              if ('[' == h) {
                o(), c = 6;
                break;
              }

              if (h.match(s)) {
                c = 14;
                break;
              }

              if (',' == h) {
                c = 1;
                break;
              }

              throw Error(u);

            case 6:
              if (h.match(v)) {
                ;
                n.attrName = h, c = 7;
                break;
              }

              if (h.match(s)) break;
              throw Error(u);

            case 7:
              if (h.match(p)) {
                n.attrName += h;
                break;
              }

              if (h.match(s)) {
                c = 8;
                break;
              }

              if ('~' == h) {
                ;
                n.contains = !0, c = 9;
                break;
              }

              if ('=' == h) {
                ;
                n.attrValue = '', c = 11;
                break;
              }

              if (']' == h) {
                c = 3;
                break;
              }

              throw Error(u);

            case 8:
              if ('~' == h) {
                ;
                n.contains = !0, c = 9;
                break;
              }

              if ('=' == h) {
                ;
                n.attrValue = '', c = 11;
                break;
              }

              if (']' == h) {
                c = 3;
                break;
              }

              if (h.match(s)) break;
              throw Error(u);

            case 9:
              if ('=' == h) {
                ;
                n.attrValue = '', c = 11;
                break;
              }

              throw Error(u);

            case 10:
              if (']' == h) {
                c = 3;
                break;
              }

              if (h.match(s)) break;
              throw Error(u);

            case 11:
              if (h.match(s)) break;

              if ('"' == h || "'" == h) {
                ;
                a = h, c = 13;
                break;
              }

              ;
              n.attrValue += h, c = 12;
              break;

            case 12:
              if (h.match(s)) {
                c = 10;
                break;
              }

              if (']' == h) {
                c = 3;
                break;
              }

              if ("'" == h || '"' == h) throw Error(u);
              n.attrValue += h;
              break;

            case 13:
              if (h == a) {
                c = 10;
                break;
              }

              n.attrValue += h;
              break;

            case 14:
              if (h.match(s)) break;

              if (',' == h) {
                c = 1;
                break;
              }

              throw Error(u);
          }
        }

        switch (c) {
          case 1:
          case 2:
          case 3:
          case 5:
          case 14:
            i();
            break;

          default:
            throw Error(u);
        }

        if (!r.length) throw Error(u);
        return r;
      }, f.nextUid = 1, f.matchesSelector = 'function' == typeof (e = document.createElement('div')).webkitMatchesSelector ? 'webkitMatchesSelector' : 'function' == typeof e[_0x347a('0x2c')] ? 'mozMatchesSelector' : 'function' == typeof e.msMatchesSelector ? 'msMatchesSelector' : 'matchesSelector', f;
    }(),
        m = /^([a-zA-Z:_]+[a-zA-Z0-9_\-:\.]*)$/;

    function b(e) {
      if ('string' != typeof e) throw Error('Invalid request opion. attribute must be a non-zero length string.');
      if (!(e = e.trim())) throw Error('Invalid request opion. attribute must be a non-zero length string.');
      if (!e.match(m)) throw Error('Invalid request option. invalid attribute name: ' + e);
      return e;
    }

    function y(e) {
      if (!e.trim().length) throw Error('Invalid request option: elementAttributes must contain at least one attribute.');

      for (var t = {}, n = {}, r = e[_0x347a('0x2d')](/\s+/), i = 0; i < r.length; i++) if (o = r[i]) {
        var o,
            a = (o = b(o)).toLowerCase();
        if (t[a]) throw Error('Invalid request option: observing multiple case variations of the same attribute is not supported.');
        n[o] = !0, t[a] = !0;
      }

      return Object.keys(n);
    }

    var x = function () {
      function s(e) {
        if (void 0 === n) throw new Error('No Engine');
        var t = this;
        this.connected = !1, this.options = s.validateOptions(e), this.observerOptions = s.createObserverOptions(this.options.queries), this.root = this.options.rootNode, this.callback = this.options.callback, this.elementFilter = Array.prototype.concat.apply([], this.options[_0x347a('0x2e')].map(function (e) {
          return e.elementFilter ? e.elementFilter : [];
        })), this.elementFilter.length || (this.elementFilter = void 0), this.calcReordered = this.options.queries.some(function (e) {
          return e.all;
        }), this.queryValidators = [], s.createQueryValidator && (this.queryValidators = this.options.queries[_0x347a('0x2f')](function (e) {
          return s.createQueryValidator(t.root, e);
        })), this.observer = new n(function (e) {
          t.observerCallback(e);
        }), this.reconnect();
      }

      return s.createObserverOptions = function (e) {
        var t,
            i = {
          childList: !0,
          subtree: !0
        };

        function o(e) {
          ;
          i.attributes && !t || (i.attributes = !0, i.attributeOldValue = !0, e ? (t = t || {}, e.forEach(function (e) {
            ;
            t[e] = !0, t[e.toLowerCase()] = !0;
          })) : t = void 0);
        }

        return e.forEach(function (e) {
          if (e.characterData) return i.characterData = !0, void (i.characterDataOldValue = !0);
          if (e.all) return o(), i.characterData = !0, void (i[_0x347a('0x30')] = !0);
          if (e.attribute) o([e.attribute.trim()]);else {
            var t,
                n,
                r = (t = e.elementFilter, n = {}, t.forEach(function (e) {
              e.qualifiers.forEach(function (e) {
                n[e.attrName] = !0;
              });
            }), Object.keys(n)).concat(e.attributeList || []);
            r.length && o(r);
          }
        }), t && (i.attributeFilter = Object.keys(t)), i;
      }, s.validateOptions = function (e) {
        for (var t in e) if (!(t in s.optionKeys)) throw Error('Invalid option: ' + t);

        if ('function' != typeof e.callback) throw Error('Invalid options: callback is required and must be a function');
        if (!e.queries || !e.queries[_0x347a('0x1a')]) throw Error('Invalid options: queries must contain at least one query request object.');

        for (var n = {
          callback: e.callback,
          rootNode: e.rootNode || document,
          observeOwnChanges: !!e.observeOwnChanges,
          oldPreviousSibling: !!e.oldPreviousSibling,
          queries: []
        }, r = 0; r < e.queries.length; r++) {
          var i = e.queries[r];

          if (i.all) {
            if (1 < Object.keys(i).length) throw Error('Invalid request option. all has no options.');

            n.queries[_0x347a('0x1c')]({
              all: !0
            });
          } else if ('attribute' in i) {
            if ((a = {
              attribute: b(i.attribute)
            }).elementFilter = f.parseSelectors('*[' + a.attribute + ']'), 1 < Object.keys(i).length) throw Error('Invalid request option. attribute has no options.');

            n[_0x347a('0x2e')].push(a);
          } else if ('element' in i) {
            var o = Object.keys(i).length,
                a = {
              element: i.element,
              elementFilter: f.parseSelectors(i.element)
            };
            if (i.hasOwnProperty('elementAttributes') && (a.attributeList = y(i.elementAttributes), o--), 1 < o) throw Error('Invalid request option. element only allows elementAttributes option.');
            n.queries.push(a);
          } else {
            if (!i.characterData) throw Error('Invalid request option. Unknown query request.');
            if (1 < Object.keys(i)[_0x347a('0x1a')]) throw Error('Invalid request option. characterData has no options.');
            n.queries.push({
              characterData: !0
            });
          }
        }

        return n;
      }, s.prototype.createSummaries = function (e) {
        if (!e || !e.length) return [];

        for (var t = new c(this.root, e, this.elementFilter, this.calcReordered, this.options.oldPreviousSibling), n = [], r = 0; r < this.options.queries.length; r++) n.push(new l(t, this.options.queries[r]));

        return n;
      }, s.prototype.checkpointQueryValidators = function () {
        this.queryValidators.forEach(function (e) {
          e && e.recordPreviousState();
        });
      }, s.prototype.runQueryValidators = function (n) {
        this.queryValidators.forEach(function (e, t) {
          e && e.validate(n[t]);
        });
      }, s.prototype.changesToReport = function (e) {
        return e.some(function (t) {
          return !!['added', 'removed', 'reordered', 'reparented', 'valueChanged', 'characterDataChanged'].some(function (e) {
            return t[e] && t[e].length;
          }) || !(!t.attributeChanged || !Object.keys(t.attributeChanged).some(function (e) {
            return !!t.attributeChanged[e].length;
          }));
        });
      }, s.prototype.observerCallback = function (e) {
        this.options[_0x347a('0x31')] || this.observer.disconnect();
        var t = this.createSummaries(e);

        if (this.runQueryValidators(t), this.options.observeOwnChanges && this.checkpointQueryValidators(), this.changesToReport(t) && this.callback(t), !this.options.observeOwnChanges && this.connected) {
          this.checkpointQueryValidators();

          try {
            this.observer.observe(this.root, this.observerOptions);
          } catch (e) {}
        }
      }, s.prototype.reconnect = function () {
        if (this.connected) throw Error('Already connected');

        try {
          this.observer.observe(this.root, this.observerOptions), this.connected = !0, this.checkpointQueryValidators();
        } catch (e) {}
      }, s[_0x347a('0xf')].takeSummaries = function () {
        if (!this.connected) throw Error('Not connected');
        var e = this.createSummaries(this.observer.takeRecords());
        return this.changesToReport(e) ? e : void 0;
      }, s.prototype.disconnect = function () {
        var e = this.takeSummaries();
        return this.observer.disconnect(), this.connected = !1, e;
      }, s.NodeMap = u, s[_0x347a('0x32')] = f.parseSelectors, s[_0x347a('0x33')] = {
        callback: !0,
        queries: !0,
        rootNode: !0,
        oldPreviousSibling: !0,
        observeOwnChanges: !0
      }, s;
    }();

    e.exports = x;
  }, function (e, t, n) {
    'use strict';

    n.r(t), n.d(t, 'parseMutations', function () {
      return r;
    }), n.d(t, 'extractCleanNodes', function () {
      return i;
    });

    var l = n(2),
        h = n(6),
        f = n(7),
        d = n(8),
        v = n(11),
        p = n(12),
        r = function (e) {
      return e.map(function (e) {
        var t,
            n = e.removed;
        (t = n).map(function (e) {
          e[_0x347a('0x34')] = !0;
        });
        var r = g(e, 1, n = t),
            i = g(e, 0, e.added);

        i = function (e) {
          var t = e.length;
          if (t <= 1) return e;
          e.map(function (e) {
            3 === e.actionData.nodeType ? e.funContent = 'No-SelfSelector' : e.funContent = e.actionData.selfSelector ? e.actionData.selfSelector.parentSelector + ' > ' + e.actionData.selfSelector.localSelector : 'No-SelfSelector';
          });

          for (var n = 0; n < t; n++) if (!e[n].isSmallContent) {
            var r = 0;

            e: for (var i = n + 1; i < t; i++) if (!e[i].isSmallContent) {
              var o = e[n].funContent,
                  a = e[i].funContent;
              if ('No-SelfSelector' === o || 'No-SelfSelector' === a) break e;

              if (o && 0 === o.indexOf(a)) {
                e[n][_0x347a('0x35')] = !0;
                break e;
              }

              if (a && 0 === a.indexOf(o) && (e[i].isSmallContent = !0), 300 < ++r) break e;
            }
          }

          for (var s = [], u = 0; u < t; u++) e[u].isSmallContent || s.push(e[u]), delete e[u].isSmallContent, delete e[u][_0x347a('0x36')];

          return s;
        }(i);

        var o,
            a,
            s,
            u = function (t) {
          var i = new h.default(),
              o = new h.default();
          if (l.isEmptyObject(t)) return [];

          var n = [],
              e = function (r) {
            var e = t[r].map(function (s) {
              var e = new d.default(2, s, i, o),
                  t = function (e, t) {
                for (var n = s.attributes, r = '', i = n.length, o = 0; o < i; o++) {
                  var a = n[o];

                  if (a.name === e) {
                    r = a.value;
                    break;
                  }
                }

                return new v.default(e, r);
              }(r),
                  n = new p.default(e, [t]);

              return new f.default(2, n);
            });
            n = n.concat(e);
          };

          for (var r in t) e(r);

          return n;
        }(e.attributeChanged),
            c = (o = e.characterDataChanged, a = new h.default(), s = new h.default(), o.map(function (e) {
          var t = new d.default(3, e, a, s);
          return new f.default(3, t);
        }));

        return [].concat(r).concat(i).concat(u).concat(c);
      }).reduce(function (e, t) {
        return e.concat(t);
      }, []);
    };

    function i(e) {
      return function (o) {
        var e = o.length;
        if (e <= 1) return o;
        o.map(function (e) {
          e.funContent = b(e);
        });
        var a = 0;
        o.map(function (e, t) {
          if (0 !== t) {
            var n = o[a][_0x347a('0x36')],
                r = o[t - 1].funContent,
                i = e.funContent;

            r !== i && n !== i ? n && -1 != n.indexOf(i) ? e.isSmallContent = !0 : (i && -1 != i.indexOf(n) && (o[a].isSmallContent = !0), a = t) : a = t;
          }
        }), e = (o = o.filter(function (e) {
          return 1 != e.isSmallContent;
        })).length;

        for (var t = 0; t < e; t++) if (!o[t].isSmallContent) {
          var n = 0;

          e: for (var r = t + 1; r < e; r++) if (!o[r].isSmallContent) {
            var i = o[t][_0x347a('0x36')],
                s = o[r].funContent;

            if (i !== s) {
              if (i && -1 != i.indexOf(s)) o[r].isSmallContent = !0;else if (s && -1 != s.indexOf(i)) {
                o[t], o[r];
                break e;
              }
              if (300 < ++n) break e;
            }
          }
        }

        for (var u = [], c = 0; c < e; c++) o[c].isSmallContent || u.push(o[c]), o[c].isSmallContent = !1;

        return u;
      }(e);
    }

    function g(r, e, t) {
      return 0 === t.length ? [] : (0 != e && (t = i(t)), 1 === e && t.map(function (e) {
        var t = r.getOldPreviousSibling(e);
        e.oldPreviousSibling = t;
        var n = r.getOldParentNode(e);
        e.oldParentNode = n, e.isRemovedNode = !0;
      }), function (e, t, n) {
        for (var r = new h.default(), i = new h.default(), o = []; 0 < n.length;) {
          var a = n.shift(),
              s = new d.default(t, a, r, i);

          if (s.getPinpoint() || 0 !== t) {
            var u = new f[_0x347a('0x37')](t, s);
            o.push(u);
          } else {
            var c = a.parentNode,
                l = new f.default(1, new d.default(1, c, r, i));
            n = m(c, n), n = [c].concat(n), o.push(l);
          }
        }

        return 1 === t && o.reverse(), o;
      }(0, e, t));
    }

    function m(e, t) {
      if (!e) return t;

      for (var n = b(e), r = t.length, i = 0; i < r; i++) {
        var o = t[i].funContent;
        if (!n || -1 == n.indexOf(o)) break;
        t[i].isSmallContent = !0;
      }

      return t.filter(function (e) {
        return 1 != e.isSmallContent;
      });
    }

    function b(e) {
      var t = e.outerHTML || e[_0x347a('0x38')];

      return 8 === e.nodeType && (t = '\x3c!--' + t + '--\x3e'), t.replace(/&amp;/g, '&');
    }
  }, function (e, t, n) {
    'use strict';

    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    n.r(t), n.d(t, 'default', function () {
      return i;
    });

    var i = function () {
      function n() {
        !function (e, t) {
          if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
        }(this), this.cache = {};
      }

      var e, t;
      return e = n, t = [{
        key: 'clearCache',
        value: function () {
          this.cache = {};
        }
      }, {
        key: 'hasId',
        value: function (e) {
          return null != this.cache[e];
        }
      }, {
        key: 'getValue',
        value: function (e) {
          return this.cache[e];
        }
      }, {
        key: _0x347a('0x1c'),
        value: function (e, t) {
          this.cache[e] = t;
        }
      }, {
        key: 'getCache',
        value: function () {
          return this.cache;
        }
      }], r(e[_0x347a('0xf')], t), n;
    }();
  }, function (e, t, n) {
    'use strict';

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    n.r(t), n.d(t, _0x347a('0x37'), function () {
      return r;
    });

    var r = function () {
      function r(e, t) {
        !function (e, t) {
          if (!(e instanceof r)) throw new TypeError('Cannot call a class as a function');
        }(this), this.actionType = e, this.actionData = t;
        var n = new Date();
        this.timestamp = n.getTime();
      }

      return i(r.prototype, [{
        key: 'getActionType',
        value: function () {
          return this.actionType;
        }
      }, {
        key: 'getActionData',
        value: function () {
          return this.actionData;
        }
      }, {
        key: 'show',
        value: function () {
          this.actionType, this.actionData;
        }
      }]), r;
    }();
  }, function (e, t, n) {
    'use strict';

    n.r(t), n.d(t, 'default', function () {
      return i;
    });
    var u = n(9);

    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    var i = function () {
      function s(e, t, n, r) {
        !function (e, t) {
          if (!(e instanceof s)) throw new TypeError('Cannot call a class as a function');
        }(this), this.nodeType = t.nodeType, 0 !== e && 3 !== e || (this.outerHTML = t.outerHTML || t.textContent);
        var i = 1 != e ? t.previousSibling : t.oldPreviousSibling,
            o = t.parentNode;
        o || (o = t.oldParentNode || i && i[_0x347a('0x39')]);
        var a = {
          selfNode: t,
          parentNode: o,
          previousElementSibling: t.previousElementSibling,
          previousSibling: i,
          nextElementSibling: t.nextElementSibling,
          nextSibling: t.nextSibling
        };

        try {
          this.selfSelector = u.calculateSelfSelector(a, n, r);
        } catch (e) {
          this.selfSelector = null;
        }

        try {
          this.pinpoint = u.calculatePinpoint(a, n, r);
        } catch (e) {
          this.pinpoint = null;
        }
      }

      return r(s.prototype, [{
        key: 'getPinpoint',
        value: function () {
          return this.pinpoint;
        }
      }, {
        key: 'show',
        value: function () {
          this.selfSelector, this.pinpoint[_0x347a('0x3a')](), this.outerHTML;
        }
      }]), s;
    }();
  }, function (e, t, n) {
    'use strict';

    n.r(t), n.d(t, 'calculatePinpoint', function () {
      return i;
    }), n.d(t, 'calculateSelfSelector', function () {
      return r;
    });

    var h = n(10),
        f = n(2),
        s = 1e4,
        i = function (e, t, n) {
      var r = e.nextSibling || e.nextElementSibling;

      if (r) {
        var i = f.extractNodeName(r);
        return '#comment' === i ? a(e, r, t, n) : '#text' === i && '' === r.textContent.trim() ? a(e, r, t, n) : u(e, t, n);
      }

      var o = v(e[_0x347a('0x39')], t, n);
      return new h.default(o, 2);
    },
        a = function (e, t, n, r) {
      return e.nextElementSibling = t.nextElementSibling, e.nextSibling = t.nextSibling, i(e, n, r);
    },
        r = function (e, t, n) {
      return {
        parentSelector: v(e.parentNode, t, n),
        localSelector: function (e, t, n) {
          e.funLocalSelector || (e.funLocalSelector = c(e));
          var r = l(t, e.funLocalSelector, 0, n);
          if (e.funId || (e.funId = f.uniqueID()), n.push(e.funId, {
            funLocalSelector: e[_0x347a('0x3b')],
            index: r
          }), s <= r) throw new Error('too deep for calculateElementLocalSelector');
          return e.funLocalSelector + ':eq(' + r + ')';
        }(e.selfNode, e.previousSibling, n)
      };
    };

    function u(e, t, n) {
      var r = g(e);

      if (r) {
        var i = f.extractNodeName(r);
        if ('#comment' === i) return d(e, r, t, n);

        if ('#text' === i) {
          if ('' === r.textContent.trim()) return d(e, r, t, n);
          var o = v(e.parentNode, t, n),
              a = {
            textContent: c = (u = r).textContent.trim(),
            textIndex: function e(t, n, r) {
              var i = g(t);
              return i ? e(i, n, '#text' === f.extractNodeName(i) && i.textContent.trim() === n ? r + 1 : r) : r;
            }(u, c, 0)
          };
          return new h.default(o, 5, a);
        }

        var s = v(e.parentNode, t, n) + ' > ' + p(r, n);
        return new h.default(s, 3);
      }

      var u,
          c,
          l = v(e.parentNode, t, n);
      return new h.default(l, 1);
    }

    function d(e, t, n, r) {
      return e.previousElementSibling = t.previousElementSibling, e[_0x347a('0x3c')] = t.previousSibling, u(e, n, r);
    }

    function c(e) {
      return e && e ? '' + e.nodeName.toLowerCase() : '';
    }

    function v(e, t, n) {
      if (!e) return '';
      var r = e.funId;

      if (r) {
        if (t.hasId(r)) return t.getValue(r);
      } else e.funId = f.uniqueID();

      var i = p(e, n),
          o = e.nodeName;
      if ('BODY' === o || 'HEAD' === o) return i;

      if (i) {
        var a = e.parentNode;
        a || (a = e.oldParentNode);
        var s = v(a, t, n),
            u = s ? s + ' > ' + i : i;
        return t.push(e.funId, u), u;
      }

      throw new Error('current node has no selector..');
    }

    function p(e, t) {
      e[_0x347a('0x3b')] || (e.funLocalSelector = c(e));
      var n = l(g(e), e[_0x347a('0x3b')], 0, t);
      if (e.funId || (e.funId = f.uniqueID()), t.push(e[_0x347a('0x3d')], {
        funLocalSelector: e.funLocalSelector,
        index: n
      }), s <= n) throw new Error('too deep for calculateElementLocalSelector');
      return e.funLocalSelector + ':eq(' + n + ')';
    }

    function l(e, t, n, r) {
      var i = 0;
      if (!e) return i;

      if (e.funId && r.hasId(e.funId)) {
        var o = r.getValue(e.funId);
        if (m(o.funLocalSelector, t)) return o.index + 1;
      }

      if (s <= n) return i;
      e.funId || (e.funId = f.uniqueID()), e.funLocalSelector || (e.funLocalSelector = c(e));
      var a = g(e);
      return a && (i += l(a, t, ++n, r)), m(e.funLocalSelector, t) && (r.push(e.funId, {
        funLocalSelector: e.funLocalSelector,
        index: i
      }), i++), i;
    }

    function g(e) {
      if (!e) return e;
      var t = e.previousSibling || e.previousElementSibling;
      return e.isRemovedNode && (t = e.oldPreviousSibling), t;
    }

    function m(e, t) {
      var n = /[#\.]/,
          r = e.split(n),
          i = t.split(n);
      return 0 !== i.length && 0 !== r.length && i.map(function (e) {
        return -1 !== r.indexOf(e);
      }).reduce(function (e, t) {
        return e && t;
      }, !0);
    }
  }, function (e, t, n) {
    'use strict';

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    n.r(t), n.d(t, 'default', function () {
      return r;
    });

    var r = function () {
      function r(e, t, n) {
        !function (e, t) {
          if (!(e instanceof r)) throw new TypeError('Cannot call a class as a function');
        }(this), this.type = t, this.selector = e, 5 === t && (this.textNode = n);
      }

      return i(r.prototype, [{
        key: 'show',
        value: function () {
          this.type, this.selector, 5 === this.type && this.textNode;
        }
      }, {
        key: 'getSelector',
        value: function () {
          return this.selector;
        }
      }, {
        key: 'getTextNode',
        value: function () {
          return this.textNode;
        }
      }, {
        key: 'getType',
        value: function () {
          return this.type;
        }
      }]), r;
    }();
  }, function (e, t, n) {
    'use strict';

    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    n.r(t), n.d(t, _0x347a('0x37'), function () {
      return i;
    });

    var i = function () {
      function n(e, t) {
        !function (e, t) {
          if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
        }(this), this.name = e, this.value = t;
      }

      return r(n.prototype, [{
        key: 'getName',
        value: function () {
          return this.name;
        }
      }, {
        key: 'getValue',
        value: function () {
          return this.value;
        }
      }, {
        key: 'show',
        value: function () {
          this.name, this.value;
        }
      }]), n;
    }();
  }, function (e, t, n) {
    'use strict';

    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    n.r(t), n.d(t, 'default', function () {
      return i;
    });

    var i = function () {
      function n(e, t) {
        !function (e, t) {
          if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
        }(this), this.redoableElement = e, this.changedAttributeList = t;
      }

      var e, t;
      return e = n, t = [{
        key: 'setElement',
        value: function (e) {
          this.redoableElement = e;
        }
      }, {
        key: 'setAttributeList',
        value: function (e) {
          this.changedAttributeList = e;
        }
      }, {
        key: 'appendAttribute',
        value: function (e) {
          this.changedAttributeList = this.changedAttributeList.concat([e]);
        }
      }, {
        key: _0x347a('0x3a'),
        value: function () {
          this.redoableElement.show(), this.changedAttributeList.map(function (e) {
            e.show();
          });
        }
      }], r(e.prototype, t), n;
    }();
  }, function (e, t, n) {
    'use strict';

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    n.r(t), n.d(t, 'default', function () {
      return r;
    });

    var r = function () {
      function r(e, t, n) {
        !function (e, t) {
          if (!(e instanceof r)) throw new TypeError('Cannot call a class as a function');
        }(this), this.inputType = e, this.eleType = t, this.value = n;
      }

      var e, t;
      return e = r, t = [{
        key: 'getEleType',
        value: function () {
          return this.eleType;
        }
      }, {
        key: _0x347a('0x3e'),
        value: function () {
          return this.inputType;
        }
      }, {
        key: 'getValue',
        value: function () {
          return this.value;
        }
      }], i(e.prototype, t), r;
    }();
  }, function (e, t, n) {
    'use strict';

    n.r(t), n.d(t, 'default', function () {
      return i;
    });
    var a = n(9);

    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    var i = function () {
      function o(e, t, n, r) {
        !function (e, t) {
          if (!(e instanceof o)) throw new TypeError('Cannot call a class as a function');
        }(this);
        var i = {
          selfNode: e,
          parentNode: e[_0x347a('0x39')],
          previousElementSibling: e.previousElementSibling,
          previousSibling: e.previousSibling,
          nextElementSibling: e.nextElementSibling,
          nextSibling: e.nextSibling
        };

        try {
          this.selfSelector = a.calculateSelfSelector(i, n, r);
        } catch (e) {
          this.selfSelector = null;
        }

        this[_0x347a('0x3f')] = t;
      }

      var e, t;
      return e = o, t = [{
        key: 'getSelfSelector',
        value: function () {
          return this.selfSelector;
        }
      }, {
        key: _0x347a('0x40'),
        value: function () {
          return this.input;
        }
      }, {
        key: 'show',
        value: function () {
          this.selfSelector, this.pinpoint.show(), this.outerHTML;
        }
      }], r(e.prototype, t), o;
    }();
  }, function (e, t, n) {
    'use strict';

    n.r(t);
    var r = n(16);
    t.default = r.default;
  }, function (e, t, n) {
    'use strict';

    n.r(t), n.d(t, 'default', function () {
      return o;
    });
    var r = n(17),
        s = n(19),
        u = n(9),
        c = n(6),
        a = n(2);

    function l(e) {
      return (l = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    var o = function (e) {
      function o() {
        var e,
            t,
            n,
            r,
            i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        return function (e, t) {
          if (!(e instanceof o)) throw new TypeError('Cannot call a class as a function');
        }(this), (t = this, n = (r = o, (Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(r)).call(this, i), e = !n || 'object' !== l(n) && 'function' != typeof n ? function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }(t) : n).events = ['mousemove', 'click', 'scroll', 'resize'], e.eventHandlers = [], e.vedio = null, e.isRecording = !1, e.mousemoveSamplingFrequence = 0, e.MaxMousemoveSamplingFrequence = 5, e.target instanceof window.HTMLHtmlElement && (e.listeners = {
          scroll: window,
          resize: window
        }), e.on('fun_recording_start', function () {
          e.isRecording = !0;
        }), e.on('fun_recording_stop', function () {
          e.isRecording = !1;
        }), e.on('fun_recording', function () {}), e;
      }

      var t, n;
      return function (e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
        var n, r;
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && (n = e, r = t, (Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        })(n, r));
      }(o, r.default), t = o, n = [{
        key: _0x347a('0x41'),
        value: function () {
          return this.vedio;
        }
      }, {
        key: 'getListener',
        value: function (e) {
          return this[_0x347a('0x42')][e] || this.getTarget();
        }
      }, {
        key: 'restart',
        value: function () {
          this.init(), this.emit('fun_recording_start');
        }
      }, {
        key: 'start',
        value: function () {
          var i = this;
          this.init(), this.emit('fun_recording_start');

          for (var e = function (e) {
            var t = i.events[e],
                n = i.onEvents[t];
            n || (n = i.defaultEventCallback);

            var r = function (e) {
              i.onEventCallback(n, e);
            };

            i.eventHandlers.splice(e, 0, r), _0x347a('0x43') === t ? i.getListener(t).addEventListener(t, r, !0) : i.getListener(t).addEventListener(t, r);
          }, t = 0; t < this.events.length; t++) e(t);
        }
      }, {
        key: 'stop',
        value: function () {
          for (var e = 0; e < this.events.length; e++) {
            var t = this.events[e],
                n = this.eventHandlers[e];
            n && this.getListener(t).removeEventListener(t, n);
          }

          return this.emit('fun_recording_stop'), this.vedio;
        }
      }, {
        key: 'init',
        value: function () {
          var e = this.getTarget(),
              t = this.getTargetPosition(),
              n = new s.default();
          n.top = t.top, n.left = t.left;
          var r = e.innerHTML,
              i = this.removeHideElement(r);
          i = '<!DOCTYPE html>' + i, n.scene = i, n.rootOpts = {
            style: e.getAttribute('style'),
            class: e[_0x347a('0x44')]('class')
          }, n.scrollX = e.scrollLeft, n.scrollY = e.scrollTop;
          var o = window[_0x347a('0x45')] || document.documentElement.clientWidth || document.body.clientWidth,
              a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          return n.width = o, n.height = a, this.vedio = n, this.vedio;
        }
      }, {
        key: 'getTargetPosition',
        value: function () {
          var e = this.getTarget().getBoundingClientRect(),
              t = document.documentElement,
              n = window.pageYOffset || t.scrollTop || 0,
              r = window.pageXOffset || t.scrollLeft || 0;
          return {
            top: e.top + n,
            left: e.left + r
          };
        }
      }, {
        key: 'onEventCallback',
        value: function (e, t) {
          this.emit('fun_recording', t), this.emit(t.type, t), e(this, this.vedio, t);
        }
      }, {
        key: 'defaultEventCallback',
        value: function (e, t, n) {
          if ('mousemove' === n.type) {
            if (!(e[_0x347a('0x46')] >= e.MaxMousemoveSamplingFrequence)) return void e.mousemoveSamplingFrequence++;
            e.mousemoveSamplingFrequence = 0;
          }

          var r = n.target,
              i = r.body,
              o = {
            scrollY: i ? i.parentNode.scrollTop || i.scrollTop : r.scrollTop,
            scrollX: i ? i.parentNode.scrollLeft || i.scrollLeft : r.scrollLeft,
            cursorX: n.pageX,
            cursorY: n.pageY,
            width: e.target.clientWidth,
            height: e.target.clientHeight,
            eventType: n.type
          };

          if ('scroll' === n[_0x347a('0x47')]) {
            var a = {
              selfNode: r,
              parentNode: r.parentNode,
              previousElementSibling: r[_0x347a('0x48')],
              previousSibling: r.previousSibling,
              nextElementSibling: r.nextElementSibling,
              nextSibling: r.nextSibling
            };

            try {
              o.selfSelector = u.calculateSelfSelector(a, new c.default(), new c.default());
            } catch (e) {
              o.selfSelector = null;
            }
          }

          t.pushNewFrame(o);
        }
      }, {
        key: 'removeHideElement',
        value: function (t) {
          if (a.knuthMorrisPratt(t, '_fun-hide') <= 0) return t;

          try {
            for (var e = new DOMParser().parseFromString(t, 'text/html'), n = e.getElementsByClassName('_fun-hide'), r = [][_0x347a('0x49')].call(n), i = 0; i < r.length; i++) r[i].remove();

            return e.documentElement.innerHTML;
          } catch (e) {
            return t;
          }
        }
      }], i(t.prototype, n), o;
    }();
  }, function (e, t, n) {
    'use strict';

    n.r(t), n.d(t, 'default', function () {
      return o;
    });
    var r = n(18);

    function a(e) {
      return (a = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    var o = function (e) {
      function o() {
        var e,
            t,
            n,
            r,
            i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        return function (e, t) {
          if (!(e instanceof o)) throw new TypeError('Cannot call a class as a function');
        }(this), t = this, e = !(n = (r = o, (Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(r)).call(this)) || 'object' !== a(n) && 'function' != typeof n ? function (e) {
          if (void 0 === e) throw new ReferenceError(_0x347a('0x4a'));
          return e;
        }(t) : n, i[_0x347a('0x4b')] ? e.setTarget(i.target) : e.target = null, e.onEvents = i.onEvents || e.onEvents(), e;
      }

      return function (e, t) {
        if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
        var n, r;
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && (n = e, r = t, (Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        })(n, r));
      }(o, r.EventEmitter), i(o.prototype, [{
        key: 'onEvents',
        value: function () {
          return {};
        }
      }, {
        key: 'setTarget',
        value: function (e) {
          if (!(e instanceof window.HTMLElement)) throw new Error('Target不是HTMLElement类型');
          this.target = e;
        }
      }, {
        key: 'getTarget',
        value: function () {
          if (!this.target) throw new Error('未定义要监听的Target');
          return this.target;
        }
      }]), o;
    }();
  }, function (e, t, n) {
    'use strict';

    var r,
        i = 'object' == typeof Reflect ? Reflect : null,
        l = i && 'function' == typeof i.apply ? i.apply : function (e, t, n) {
      return Function.prototype.apply.call(e, t, n);
    };
    r = i && 'function' == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function (e) {
      return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
    } : function (e) {
      return Object.getOwnPropertyNames(e);
    };

    var o = Number.isNaN || function (e) {
      return e != e;
    };

    function a() {
      a.init.call(this);
    }

    ;
    ((e.exports = a).EventEmitter = a).prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
    var s = 10;

    function u(e) {
      return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners;
    }

    function c(e, t, n, r) {
      var i, o, a;
      if ('function' != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
      if (void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit('newListener', t, n.listener ? n.listener : n), o = e._events), a = o[t]), void 0 === a) a = o[t] = n, ++e._eventsCount;else if ('function' == typeof a ? a = o[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), 0 < (i = u(e)) && a.length > i && !a.warned) {
        a.warned = !0;
        var s = new Error('Possible EventEmitter memory leak detected. ' + a.length + ' ' + String(t) + _0x347a('0x4c'));
        s.name = 'MaxListenersExceededWarning', s.emitter = e, s.type = t, s.count = a.length, console && console[_0x347a('0x4d')];
      }
      return e;
    }

    function h(e, t, n) {
      var r = {
        fired: !1,
        wrapFn: void 0,
        target: e,
        type: t,
        listener: n
      },
          i = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e.push(arguments[t]);

        this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, l(this.listener, this.target, e));
      }.bind(r);

      return i.listener = n, r.wrapFn = i;
    }

    function f(e, t, n) {
      var r = e._events;
      if (void 0 === r) return [];
      var i = r[t];
      return void 0 === i ? [] : 'function' == typeof i ? n ? [i.listener || i] : [i] : n ? function (e) {
        for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];

        return t;
      }(i) : v(i, i.length);
    }

    function d(e) {
      var t = this._events;

      if (void 0 !== t) {
        var n = t[e];
        if ('function' == typeof n) return 1;
        if (void 0 !== n) return n.length;
      }

      return 0;
    }

    function v(e, t) {
      for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];

      return n;
    }

    Object.defineProperty(a, _0x347a('0x4e'), {
      enumerable: !0,
      get: function () {
        return s;
      },
      set: function (e) {
        if ('number' != typeof e || e < 0 || o(e)) throw new RangeError(_0x347a('0x4f') + e + '.');
        s = e;
      }
    }), a.init = function () {
      ;
      void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, a.prototype.setMaxListeners = function (e) {
      if ('number' != typeof e || e < 0 || o(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + '.');
      return this._maxListeners = e, this;
    }, a.prototype.getMaxListeners = function () {
      return u(this);
    }, a.prototype.emit = function (e) {
      for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);

      var r = _0x347a('0x50') === e,
          i = this._events;
      if (void 0 !== i) r = r && void 0 === i[_0x347a('0x50')];else if (!r) return !1;

      if (r) {
        var o;
        if (0 < t.length && (o = t[0]), o instanceof Error) throw o;
        var a = new Error('Unhandled error.' + (o ? ' (' + o.message + ')' : ''));
        throw a.context = o, a;
      }

      var s = i[e];
      if (void 0 === s) return !1;
      if ('function' == typeof s) l(s, this, t);else {
        var u = s.length,
            c = v(s, u);

        for (n = 0; n < u; ++n) l(c[n], this, t);
      }
      return !0;
    }, a.prototype.on = a.prototype.addListener = function (e, t) {
      return c(this, e, t, !1);
    }, a.prototype.prependListener = function (e, t) {
      return c(this, e, t, !0);
    }, a.prototype.once = function (e, t) {
      if ('function' != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
      return this.on(e, h(this, e, t)), this;
    }, a.prototype.prependOnceListener = function (e, t) {
      if ('function' != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
      return this.prependListener(e, h(this, e, t)), this;
    }, a.prototype.off = a.prototype.removeListener = function (e, t) {
      var n, r, i, o, a;
      if ('function' != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
      if (void 0 === (r = this._events)) return this;
      if (void 0 === (n = r[e])) return this;
      if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit('removeListener', e, n.listener || t));else if ('function' != typeof n) {
        for (i = -1, o = n.length - 1; 0 <= o; o--) if (n[o] === t || n[o].listener === t) {
          ;
          a = n[o].listener, i = o;
          break;
        }

        if (i < 0) return this;
        0 === i ? n.shift() : function (e, t) {
          for (; t + 1 < e.length; t++) e[t] = e[t + 1];

          e.pop();
        }(n, i), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit('removeListener', e, a || t);
      }
      return this;
    }, a.prototype.removeAllListeners = function (e) {
      var t, n, r;
      if (void 0 === (n = this._events)) return this;
      if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;

      if (0 === arguments.length) {
        var i,
            o = Object.keys(n);

        for (r = 0; r < o.length; ++r) _0x347a('0x51') !== (i = o[r]) && this.removeAllListeners(i);

        return this.removeAllListeners('removeListener'), this._events = Object.create(null), this._eventsCount = 0, this;
      }

      if ('function' == typeof (t = n[e])) this.removeListener(e, t);else if (void 0 !== t) for (r = t.length - 1; 0 <= r; r--) this.removeListener(e, t[r]);
      return this;
    }, a.prototype.listeners = function (e) {
      return f(this, e, !0);
    }, a.prototype.rawListeners = function (e) {
      return f(this, e, !1);
    }, a.listenerCount = function (e, t) {
      return 'function' == typeof e.listenerCount ? e.listenerCount(t) : d.call(e, t);
    }, a.prototype.listenerCount = d, a.prototype.eventNames = function () {
      return 0 < this._eventsCount ? r(this._events) : [];
    };
  }, function (e, t, n) {
    'use strict';

    n.r(t), n.d(t, 'default', function () {
      return r;
    });
    var i = n(20);

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, _0x347a('0x52') in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    var r = function () {
      function r() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        !function (e, t) {
          if (!(e instanceof r)) throw new TypeError('Cannot call a class as a function');
        }(this), this.top = e.top || 0, this.left = e.left || 0, this.scrollX = e.scrollX || 0, this.scrollY = e.scrollY || 0, this.width = e.width || 0, this.height = e.height || 0, this.scene = e.scene || '', this.rootOpts = e.rootOpts || null;
        var t = new Date();
        this.timestamp = t.getTime();
        var n = e.frames || [];
        this.setFrames(n);
      }

      var e, t;
      return e = r, t = [{
        key: 'getFrames',
        value: function () {
          return this.frames;
        }
      }, {
        key: 'getFramesLength',
        value: function () {
          return this.frames && this.frames.length;
        }
      }, {
        key: _0x347a('0x53'),
        value: function (e) {
          this.frames = [];

          for (var t = 0; t < e.length; t++) this.pushNewFrame(e[t]);

          return this;
        }
      }, {
        key: 'pushNewFrame',
        value: function () {
          var e,
              t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};

          if (null !== t && 'object' === (e = t, ('function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
          })(e)) && !(t = new i.default(t)).timestamp) {
            var n = new Date();
            t.timestamp = n[_0x347a('0x54')]();
          }

          t && this.frames.push(t);
        }
      }, {
        key: 'toJSON',
        value: function () {
          return {
            top: this.top,
            left: this.left,
            scrollX: this[_0x347a('0x55')],
            scrollY: this.scrollY,
            width: this.width,
            height: this.height,
            timestamp: this.timestamp,
            scene: this.scene,
            rootOpts: this[_0x347a('0x56')],
            frames: this.frames
          };
        }
      }, {
        key: 'getScene',
        value: function () {
          return this.scene;
        }
      }], o(e.prototype, t), r;
    }();
  }, function (e, t, n) {
    'use strict';

    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r[_0x347a('0x3')] = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    n.r(t), n.d(t, 'default', function () {
      return i;
    });

    var i = function () {
      function n() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        !function (e, t) {
          if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
        }(this), this.cursorX = e.cursorX || 0, this.cursorY = e.cursorY || 0, this.scrollX = e.scrollX || 0, this.scrollY = e.scrollY || 0, this.height = e.height || 0, this.width = e.width || 0, this.timestamp = e.timestamp || 0, this.options = e.options || {}, this.eventType = e.eventType || '', this[_0x347a('0x57')] = e.selfSelector || null;
      }

      return r(n.prototype, [{
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
            selfSelector: this[_0x347a('0x57')]
          };
        }
      }]), n;
    }();
  }, function (e, t, n) {
    'use strict';

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    n.r(t), n.d(t, 'default', function () {
      return r;
    });

    var r = function () {
      function r(e, t, n) {
        !function (e, t) {
          if (!(e instanceof r)) throw new TypeError('Cannot call a class as a function');
        }(this), this.type = e, this.vedio = t, this.actions = n;
      }

      return i(r.prototype, [{
        key: 'getType',
        value: function () {
          return this.type;
        }
      }, {
        key: 'getVedio',
        value: function () {
          return this.vedio;
        }
      }, {
        key: 'getVedioTimestamp',
        value: function () {
          return this.vedio.timestamp;
        }
      }, {
        key: 'getVedioFrameLength',
        value: function () {
          return this.vedio ? this.vedio.getFramesLength() : 0;
        }
      }, {
        key: 'getActions',
        value: function () {
          return this.actions;
        }
      }, {
        key: 'getLastActionTimestamp',
        value: function () {
          return this.actions.length ? this.actions[this.actions.length - 1].timestamp : 0;
        }
      }, {
        key: 'getActionsLength',
        value: function () {
          return this[_0x347a('0x7')].length;
        }
      }]), r;
    }();
  }, function (e, t, n) {
    'use strict';

    n.r(t), n.d(t, 'sendToServer', function () {
      return r;
    });

    var r = function (e, t) {
      var n = new XMLHttpRequest();
      n.open('POST', e), n.setRequestHeader('Content-Type', 'application/json'), n.onreadystatechange = function () {
        n.readyState == XMLHttpRequest.DONE && n.status;
      }, n[_0x347a('0x58')](t);
    };
  }, function (e, t, n) {
    var r,
        i = function () {
      var m = String.fromCharCode,
          n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
          i = {};

      function o(e, t) {
        if (!i[e]) {
          i[e] = {};

          for (var n = 0; n < e.length; n++) i[e][e.charAt(n)] = n;
        }

        return i[e][t];
      }

      var a = {
        compressToBase64: function (e) {
          if (null == e) return '';

          var t = a._compress(e, 6, function (e) {
            return n.charAt(e);
          });

          switch (t.length % 4) {
            default:
            case 0:
              return t;

            case 1:
              return t + '===';

            case 2:
              return t + '==';

            case 3:
              return t + '=';
          }
        },
        decompressFromBase64: function (t) {
          return null == t ? '' : '' == t ? null : a._decompress(t.length, 32, function (e) {
            return o(n, t.charAt(e));
          });
        },
        compressToUTF16: function (e) {
          return null == e ? '' : a._compress(e, 15, function (e) {
            return m(e + 32);
          }) + ' ';
        },
        decompressFromUTF16: function (t) {
          return null == t ? '' : '' == t ? null : a._decompress(t.length, 16384, function (e) {
            return t[_0x347a('0x59')](e) - 32;
          });
        },
        compressToUint8Array: function (e) {
          for (var t = a.compress(e), n = new Uint8Array(2 * t.length), r = 0, i = t.length; r < i; r++) {
            var o = t.charCodeAt(r);
            n[2 * r] = o >>> 8, n[2 * r + 1] = o % 256;
          }

          return n;
        },
        decompressFromUint8Array: function (e) {
          if (null == e) return a[_0x347a('0x5a')](e);

          for (var t = new Array(e.length / 2), n = 0, r = t[_0x347a('0x1a')]; n < r; n++) t[n] = 256 * e[2 * n] + e[2 * n + 1];

          var i = [];
          return t.forEach(function (e) {
            i.push(m(e));
          }), a.decompress(i.join(''));
        },
        compressToEncodedURIComponent: function (e) {
          return null == e ? '' : a._compress(e, 6, function (e) {
            return r[_0x347a('0x5b')](e);
          });
        },
        decompressFromEncodedURIComponent: function (t) {
          return null == t ? '' : '' == t ? null : (t = t.replace(/ /g, '+'), a._decompress(t.length, 32, function (e) {
            return o(r, t.charAt(e));
          }));
        },
        compress: function (e) {
          return a._compress(e, 16, function (e) {
            return m(e);
          });
        },
        _compress: function (e, t, n) {
          if (null == e) return '';
          var r,
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
              v = [],
              p = 0,
              g = 0;

          for (o = 0; o < e.length; o += 1) if (u = e.charAt(o), Object.prototype.hasOwnProperty.call(a, u) || (a[u] = f++, s[u] = !0), c = l + u, Object.prototype.hasOwnProperty.call(a, c)) l = c;else {
            if (Object.prototype.hasOwnProperty.call(s, l)) {
              if (l.charCodeAt(0) < 256) {
                for (r = 0; r < d; r++) p <<= 1, g == t - 1 ? (g = 0, v.push(n(p)), p = 0) : g++;

                for (i = l.charCodeAt(0), r = 0; r < 8; r++) p = p << 1 | 1 & i, g == t - 1 ? (g = 0, v.push(n(p)), p = 0) : g++, i >>= 1;
              } else {
                for (i = 1, r = 0; r < d; r++) p = p << 1 | i, g == t - 1 ? (g = 0, v.push(n(p)), p = 0) : g++, i = 0;

                for (i = l.charCodeAt(0), r = 0; r < 16; r++) p = p << 1 | 1 & i, g == t - 1 ? (g = 0, v.push(n(p)), p = 0) : g++, i >>= 1;
              }

              0 == --h && (h = Math.pow(2, d), d++), delete s[l];
            } else for (i = a[l], r = 0; r < d; r++) p = p << 1 | 1 & i, g == t - 1 ? (g = 0, v.push(n(p)), p = 0) : g++, i >>= 1;

            0 == --h && (h = Math.pow(2, d), d++), a[c] = f++, l = String(u);
          }

          if ('' !== l) {
            if (Object.prototype.hasOwnProperty.call(s, l)) {
              if (l.charCodeAt(0) < 256) {
                for (r = 0; r < d; r++) p <<= 1, g == t - 1 ? (g = 0, v.push(n(p)), p = 0) : g++;

                for (i = l.charCodeAt(0), r = 0; r < 8; r++) p = p << 1 | 1 & i, g == t - 1 ? (g = 0, v.push(n(p)), p = 0) : g++, i >>= 1;
              } else {
                for (i = 1, r = 0; r < d; r++) p = p << 1 | i, g == t - 1 ? (g = 0, v.push(n(p)), p = 0) : g++, i = 0;

                for (i = l.charCodeAt(0), r = 0; r < 16; r++) p = p << 1 | 1 & i, g == t - 1 ? (g = 0, v.push(n(p)), p = 0) : g++, i >>= 1;
              }

              0 == --h && (h = Math[_0x347a('0x5c')](2, d), d++), delete s[l];
            } else for (i = a[l], r = 0; r < d; r++) p = p << 1 | 1 & i, g == t - 1 ? (g = 0, v.push(n(p)), p = 0) : g++, i >>= 1;

            0 == --h && (h = Math.pow(2, d), d++);
          }

          for (i = 2, r = 0; r < d; r++) p = p << 1 | 1 & i, g == t - 1 ? (g = 0, v.push(n(p)), p = 0) : g++, i >>= 1;

          for (;;) {
            if (p <<= 1, g == t - 1) {
              v.push(n(p));
              break;
            }

            g++;
          }

          return v.join('');
        },
        decompress: function (t) {
          return null == t ? '' : '' == t ? null : a._decompress(t.length, 32768, function (e) {
            return t.charCodeAt(e);
          });
        },
        _decompress: function (e, t, n) {
          var r,
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
              v = '',
              p = [],
              g = {
            val: n(0),
            position: t,
            index: 1
          };

          for (r = 0; r < 3; r += 1) l[r] = r;

          for (o = 0, s = Math.pow(2, 2), u = 1; u != s;) a = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = t, g[_0x347a('0x5d')] = n(g.index++)), o |= (0 < a ? 1 : 0) * u, u <<= 1;

          switch (o) {
            case 0:
              for (o = 0, s = Math.pow(2, 8), u = 1; u != s;) a = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = t, g.val = n(g.index++)), o |= (0 < a ? 1 : 0) * u, u <<= 1;

              c = m(o);
              break;

            case 1:
              for (o = 0, s = Math.pow(2, 16), u = 1; u != s;) a = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = t, g.val = n(g.index++)), o |= (0 < a ? 1 : 0) * u, u <<= 1;

              c = m(o);
              break;

            case 2:
              return '';
          }

          for (i = l[3] = c, p.push(c);;) {
            if (g.index > e) return '';

            for (o = 0, s = Math.pow(2, d), u = 1; u != s;) a = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = t, g.val = n(g.index++)), o |= (0 < a ? 1 : 0) * u, u <<= 1;

            switch (c = o) {
              case 0:
                for (o = 0, s = Math.pow(2, 8), u = 1; u != s;) a = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = t, g.val = n(g.index++)), o |= (0 < a ? 1 : 0) * u, u <<= 1;

                l[f++] = m(o), c = f - 1, h--;
                break;

              case 1:
                for (o = 0, s = Math.pow(2, 16), u = 1; u != s;) a = g.val & g.position, g.position >>= 1, 0 == g.position && (g.position = t, g.val = n(g.index++)), o |= (0 < a ? 1 : 0) * u, u <<= 1;

                l[f++] = m(o), c = f - 1, h--;
                break;

              case 2:
                return p.join('');
            }

            if (0 == h && (h = Math.pow(2, d), d++), l[c]) v = l[c];else {
              if (c !== f) return null;
              v = i + i.charAt(0);
            }
            p.push(v), l[f++] = i + v.charAt(0), i = v, 0 == --h && (h = Math.pow(2, d), d++);
          }
        }
      };
      return a;
    }();

    void 0 === (r = function () {
      return i;
    }.call(t, n, t, e)) || (e.exports = r);
  }]);
});