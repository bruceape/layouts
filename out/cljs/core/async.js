// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__12025 = arguments.length;
switch (G__12025) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12026 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12026 = (function (f,blockable,meta12027){
this.f = f;
this.blockable = blockable;
this.meta12027 = meta12027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12028,meta12027__$1){
var self__ = this;
var _12028__$1 = this;
return (new cljs.core.async.t_cljs$core$async12026(self__.f,self__.blockable,meta12027__$1));
});

cljs.core.async.t_cljs$core$async12026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12028){
var self__ = this;
var _12028__$1 = this;
return self__.meta12027;
});

cljs.core.async.t_cljs$core$async12026.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12026.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12026.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12026.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta12027], null);
});

cljs.core.async.t_cljs$core$async12026.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12026";

cljs.core.async.t_cljs$core$async12026.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async12026");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12026.
 */
cljs.core.async.__GT_t_cljs$core$async12026 = (function cljs$core$async$__GT_t_cljs$core$async12026(f__$1,blockable__$1,meta12027){
return (new cljs.core.async.t_cljs$core$async12026(f__$1,blockable__$1,meta12027));
});

}

return (new cljs.core.async.t_cljs$core$async12026(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__12032 = arguments.length;
switch (G__12032) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__12035 = arguments.length;
switch (G__12035) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__12038 = arguments.length;
switch (G__12038) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_12040 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12040) : fn1.call(null,val_12040));
} else {
cljs.core.async.impl.dispatch.run(((function (val_12040,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12040) : fn1.call(null,val_12040));
});})(val_12040,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__12042 = arguments.length;
switch (G__12042) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___12044 = n;
var x_12045 = (0);
while(true){
if((x_12045 < n__4607__auto___12044)){
(a[x_12045] = (0));

var G__12046 = (x_12045 + (1));
x_12045 = G__12046;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__12047 = (i + (1));
i = G__12047;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12048 = (function (flag,meta12049){
this.flag = flag;
this.meta12049 = meta12049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12050,meta12049__$1){
var self__ = this;
var _12050__$1 = this;
return (new cljs.core.async.t_cljs$core$async12048(self__.flag,meta12049__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12048.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12050){
var self__ = this;
var _12050__$1 = this;
return self__.meta12049;
});})(flag))
;

cljs.core.async.t_cljs$core$async12048.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12048.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12048.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12048.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12048.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta12049], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12048.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12048";

cljs.core.async.t_cljs$core$async12048.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async12048");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12048.
 */
cljs.core.async.__GT_t_cljs$core$async12048 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12048(flag__$1,meta12049){
return (new cljs.core.async.t_cljs$core$async12048(flag__$1,meta12049));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12048(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12051 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12051 = (function (flag,cb,meta12052){
this.flag = flag;
this.cb = cb;
this.meta12052 = meta12052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12053,meta12052__$1){
var self__ = this;
var _12053__$1 = this;
return (new cljs.core.async.t_cljs$core$async12051(self__.flag,self__.cb,meta12052__$1));
});

cljs.core.async.t_cljs$core$async12051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12053){
var self__ = this;
var _12053__$1 = this;
return self__.meta12052;
});

cljs.core.async.t_cljs$core$async12051.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12051.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async12051.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12051.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta12052], null);
});

cljs.core.async.t_cljs$core$async12051.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12051";

cljs.core.async.t_cljs$core$async12051.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async12051");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12051.
 */
cljs.core.async.__GT_t_cljs$core$async12051 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12051(flag__$1,cb__$1,meta12052){
return (new cljs.core.async.t_cljs$core$async12051(flag__$1,cb__$1,meta12052));
});

}

return (new cljs.core.async.t_cljs$core$async12051(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12054_SHARP_){
var G__12056 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12054_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12056) : fret.call(null,G__12056));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12055_SHARP_){
var G__12057 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12055_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12057) : fret.call(null,G__12057));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12058 = (i + (1));
i = G__12058;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12064 = arguments.length;
var i__4731__auto___12065 = (0);
while(true){
if((i__4731__auto___12065 < len__4730__auto___12064)){
args__4736__auto__.push((arguments[i__4731__auto___12065]));

var G__12066 = (i__4731__auto___12065 + (1));
i__4731__auto___12065 = G__12066;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12061){
var map__12062 = p__12061;
var map__12062__$1 = (((((!((map__12062 == null))))?(((((map__12062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12062):map__12062);
var opts = map__12062__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12059){
var G__12060 = cljs.core.first(seq12059);
var seq12059__$1 = cljs.core.next(seq12059);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12060,seq12059__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__12068 = arguments.length;
switch (G__12068) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11965__auto___12114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto___12114){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto___12114){
return (function (state_12092){
var state_val_12093 = (state_12092[(1)]);
if((state_val_12093 === (7))){
var inst_12088 = (state_12092[(2)]);
var state_12092__$1 = state_12092;
var statearr_12094_12115 = state_12092__$1;
(statearr_12094_12115[(2)] = inst_12088);

(statearr_12094_12115[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12093 === (1))){
var state_12092__$1 = state_12092;
var statearr_12095_12116 = state_12092__$1;
(statearr_12095_12116[(2)] = null);

(statearr_12095_12116[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12093 === (4))){
var inst_12071 = (state_12092[(7)]);
var inst_12071__$1 = (state_12092[(2)]);
var inst_12072 = (inst_12071__$1 == null);
var state_12092__$1 = (function (){var statearr_12096 = state_12092;
(statearr_12096[(7)] = inst_12071__$1);

return statearr_12096;
})();
if(cljs.core.truth_(inst_12072)){
var statearr_12097_12117 = state_12092__$1;
(statearr_12097_12117[(1)] = (5));

} else {
var statearr_12098_12118 = state_12092__$1;
(statearr_12098_12118[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12093 === (13))){
var state_12092__$1 = state_12092;
var statearr_12099_12119 = state_12092__$1;
(statearr_12099_12119[(2)] = null);

(statearr_12099_12119[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12093 === (6))){
var inst_12071 = (state_12092[(7)]);
var state_12092__$1 = state_12092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12092__$1,(11),to,inst_12071);
} else {
if((state_val_12093 === (3))){
var inst_12090 = (state_12092[(2)]);
var state_12092__$1 = state_12092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12092__$1,inst_12090);
} else {
if((state_val_12093 === (12))){
var state_12092__$1 = state_12092;
var statearr_12100_12120 = state_12092__$1;
(statearr_12100_12120[(2)] = null);

(statearr_12100_12120[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12093 === (2))){
var state_12092__$1 = state_12092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12092__$1,(4),from);
} else {
if((state_val_12093 === (11))){
var inst_12081 = (state_12092[(2)]);
var state_12092__$1 = state_12092;
if(cljs.core.truth_(inst_12081)){
var statearr_12101_12121 = state_12092__$1;
(statearr_12101_12121[(1)] = (12));

} else {
var statearr_12102_12122 = state_12092__$1;
(statearr_12102_12122[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12093 === (9))){
var state_12092__$1 = state_12092;
var statearr_12103_12123 = state_12092__$1;
(statearr_12103_12123[(2)] = null);

(statearr_12103_12123[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12093 === (5))){
var state_12092__$1 = state_12092;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12104_12124 = state_12092__$1;
(statearr_12104_12124[(1)] = (8));

} else {
var statearr_12105_12125 = state_12092__$1;
(statearr_12105_12125[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12093 === (14))){
var inst_12086 = (state_12092[(2)]);
var state_12092__$1 = state_12092;
var statearr_12106_12126 = state_12092__$1;
(statearr_12106_12126[(2)] = inst_12086);

(statearr_12106_12126[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12093 === (10))){
var inst_12078 = (state_12092[(2)]);
var state_12092__$1 = state_12092;
var statearr_12107_12127 = state_12092__$1;
(statearr_12107_12127[(2)] = inst_12078);

(statearr_12107_12127[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12093 === (8))){
var inst_12075 = cljs.core.async.close_BANG_(to);
var state_12092__$1 = state_12092;
var statearr_12108_12128 = state_12092__$1;
(statearr_12108_12128[(2)] = inst_12075);

(statearr_12108_12128[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11965__auto___12114))
;
return ((function (switch__11858__auto__,c__11965__auto___12114){
return (function() {
var cljs$core$async$state_machine__11859__auto__ = null;
var cljs$core$async$state_machine__11859__auto____0 = (function (){
var statearr_12109 = [null,null,null,null,null,null,null,null];
(statearr_12109[(0)] = cljs$core$async$state_machine__11859__auto__);

(statearr_12109[(1)] = (1));

return statearr_12109;
});
var cljs$core$async$state_machine__11859__auto____1 = (function (state_12092){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_12092);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e12110){if((e12110 instanceof Object)){
var ex__11862__auto__ = e12110;
var statearr_12111_12129 = state_12092;
(statearr_12111_12129[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12092);

return cljs.core.cst$kw$recur;
} else {
throw e12110;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__12130 = state_12092;
state_12092 = G__12130;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$state_machine__11859__auto__ = function(state_12092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11859__auto____1.call(this,state_12092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11859__auto____0;
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11859__auto____1;
return cljs$core$async$state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto___12114))
})();
var state__11967__auto__ = (function (){var statearr_12112 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_12112[(6)] = c__11965__auto___12114);

return statearr_12112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto___12114))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__12131){
var vec__12132 = p__12131;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12132,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12132,(1),null);
var job = vec__12132;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11965__auto___12303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto___12303,res,vec__12132,v,p,job,jobs,results){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto___12303,res,vec__12132,v,p,job,jobs,results){
return (function (state_12139){
var state_val_12140 = (state_12139[(1)]);
if((state_val_12140 === (1))){
var state_12139__$1 = state_12139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12139__$1,(2),res,v);
} else {
if((state_val_12140 === (2))){
var inst_12136 = (state_12139[(2)]);
var inst_12137 = cljs.core.async.close_BANG_(res);
var state_12139__$1 = (function (){var statearr_12141 = state_12139;
(statearr_12141[(7)] = inst_12136);

return statearr_12141;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12139__$1,inst_12137);
} else {
return null;
}
}
});})(c__11965__auto___12303,res,vec__12132,v,p,job,jobs,results))
;
return ((function (switch__11858__auto__,c__11965__auto___12303,res,vec__12132,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____0 = (function (){
var statearr_12142 = [null,null,null,null,null,null,null,null];
(statearr_12142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__);

(statearr_12142[(1)] = (1));

return statearr_12142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____1 = (function (state_12139){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_12139);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e12143){if((e12143 instanceof Object)){
var ex__11862__auto__ = e12143;
var statearr_12144_12304 = state_12139;
(statearr_12144_12304[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12139);

return cljs.core.cst$kw$recur;
} else {
throw e12143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__12305 = state_12139;
state_12139 = G__12305;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__ = function(state_12139){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____1.call(this,state_12139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto___12303,res,vec__12132,v,p,job,jobs,results))
})();
var state__11967__auto__ = (function (){var statearr_12145 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_12145[(6)] = c__11965__auto___12303);

return statearr_12145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto___12303,res,vec__12132,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12146){
var vec__12147 = p__12146;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12147,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12147,(1),null);
var job = vec__12147;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___12306 = n;
var __12307 = (0);
while(true){
if((__12307 < n__4607__auto___12306)){
var G__12150_12308 = type;
var G__12150_12309__$1 = (((G__12150_12308 instanceof cljs.core.Keyword))?G__12150_12308.fqn:null);
switch (G__12150_12309__$1) {
case "compute":
var c__11965__auto___12311 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12307,c__11965__auto___12311,G__12150_12308,G__12150_12309__$1,n__4607__auto___12306,jobs,results,process,async){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (__12307,c__11965__auto___12311,G__12150_12308,G__12150_12309__$1,n__4607__auto___12306,jobs,results,process,async){
return (function (state_12163){
var state_val_12164 = (state_12163[(1)]);
if((state_val_12164 === (1))){
var state_12163__$1 = state_12163;
var statearr_12165_12312 = state_12163__$1;
(statearr_12165_12312[(2)] = null);

(statearr_12165_12312[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12164 === (2))){
var state_12163__$1 = state_12163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12163__$1,(4),jobs);
} else {
if((state_val_12164 === (3))){
var inst_12161 = (state_12163[(2)]);
var state_12163__$1 = state_12163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12163__$1,inst_12161);
} else {
if((state_val_12164 === (4))){
var inst_12153 = (state_12163[(2)]);
var inst_12154 = process(inst_12153);
var state_12163__$1 = state_12163;
if(cljs.core.truth_(inst_12154)){
var statearr_12166_12313 = state_12163__$1;
(statearr_12166_12313[(1)] = (5));

} else {
var statearr_12167_12314 = state_12163__$1;
(statearr_12167_12314[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12164 === (5))){
var state_12163__$1 = state_12163;
var statearr_12168_12315 = state_12163__$1;
(statearr_12168_12315[(2)] = null);

(statearr_12168_12315[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12164 === (6))){
var state_12163__$1 = state_12163;
var statearr_12169_12316 = state_12163__$1;
(statearr_12169_12316[(2)] = null);

(statearr_12169_12316[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12164 === (7))){
var inst_12159 = (state_12163[(2)]);
var state_12163__$1 = state_12163;
var statearr_12170_12317 = state_12163__$1;
(statearr_12170_12317[(2)] = inst_12159);

(statearr_12170_12317[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__12307,c__11965__auto___12311,G__12150_12308,G__12150_12309__$1,n__4607__auto___12306,jobs,results,process,async))
;
return ((function (__12307,switch__11858__auto__,c__11965__auto___12311,G__12150_12308,G__12150_12309__$1,n__4607__auto___12306,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____0 = (function (){
var statearr_12171 = [null,null,null,null,null,null,null];
(statearr_12171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__);

(statearr_12171[(1)] = (1));

return statearr_12171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____1 = (function (state_12163){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_12163);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e12172){if((e12172 instanceof Object)){
var ex__11862__auto__ = e12172;
var statearr_12173_12318 = state_12163;
(statearr_12173_12318[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12163);

return cljs.core.cst$kw$recur;
} else {
throw e12172;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__12319 = state_12163;
state_12163 = G__12319;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__ = function(state_12163){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____1.call(this,state_12163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__;
})()
;})(__12307,switch__11858__auto__,c__11965__auto___12311,G__12150_12308,G__12150_12309__$1,n__4607__auto___12306,jobs,results,process,async))
})();
var state__11967__auto__ = (function (){var statearr_12174 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_12174[(6)] = c__11965__auto___12311);

return statearr_12174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(__12307,c__11965__auto___12311,G__12150_12308,G__12150_12309__$1,n__4607__auto___12306,jobs,results,process,async))
);


break;
case "async":
var c__11965__auto___12320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__12307,c__11965__auto___12320,G__12150_12308,G__12150_12309__$1,n__4607__auto___12306,jobs,results,process,async){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (__12307,c__11965__auto___12320,G__12150_12308,G__12150_12309__$1,n__4607__auto___12306,jobs,results,process,async){
return (function (state_12187){
var state_val_12188 = (state_12187[(1)]);
if((state_val_12188 === (1))){
var state_12187__$1 = state_12187;
var statearr_12189_12321 = state_12187__$1;
(statearr_12189_12321[(2)] = null);

(statearr_12189_12321[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12188 === (2))){
var state_12187__$1 = state_12187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12187__$1,(4),jobs);
} else {
if((state_val_12188 === (3))){
var inst_12185 = (state_12187[(2)]);
var state_12187__$1 = state_12187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12187__$1,inst_12185);
} else {
if((state_val_12188 === (4))){
var inst_12177 = (state_12187[(2)]);
var inst_12178 = async(inst_12177);
var state_12187__$1 = state_12187;
if(cljs.core.truth_(inst_12178)){
var statearr_12190_12322 = state_12187__$1;
(statearr_12190_12322[(1)] = (5));

} else {
var statearr_12191_12323 = state_12187__$1;
(statearr_12191_12323[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12188 === (5))){
var state_12187__$1 = state_12187;
var statearr_12192_12324 = state_12187__$1;
(statearr_12192_12324[(2)] = null);

(statearr_12192_12324[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12188 === (6))){
var state_12187__$1 = state_12187;
var statearr_12193_12325 = state_12187__$1;
(statearr_12193_12325[(2)] = null);

(statearr_12193_12325[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12188 === (7))){
var inst_12183 = (state_12187[(2)]);
var state_12187__$1 = state_12187;
var statearr_12194_12326 = state_12187__$1;
(statearr_12194_12326[(2)] = inst_12183);

(statearr_12194_12326[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__12307,c__11965__auto___12320,G__12150_12308,G__12150_12309__$1,n__4607__auto___12306,jobs,results,process,async))
;
return ((function (__12307,switch__11858__auto__,c__11965__auto___12320,G__12150_12308,G__12150_12309__$1,n__4607__auto___12306,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____0 = (function (){
var statearr_12195 = [null,null,null,null,null,null,null];
(statearr_12195[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__);

(statearr_12195[(1)] = (1));

return statearr_12195;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____1 = (function (state_12187){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_12187);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e12196){if((e12196 instanceof Object)){
var ex__11862__auto__ = e12196;
var statearr_12197_12327 = state_12187;
(statearr_12197_12327[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12187);

return cljs.core.cst$kw$recur;
} else {
throw e12196;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__12328 = state_12187;
state_12187 = G__12328;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__ = function(state_12187){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____1.call(this,state_12187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__;
})()
;})(__12307,switch__11858__auto__,c__11965__auto___12320,G__12150_12308,G__12150_12309__$1,n__4607__auto___12306,jobs,results,process,async))
})();
var state__11967__auto__ = (function (){var statearr_12198 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_12198[(6)] = c__11965__auto___12320);

return statearr_12198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(__12307,c__11965__auto___12320,G__12150_12308,G__12150_12309__$1,n__4607__auto___12306,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12150_12309__$1)].join('')));

}

var G__12329 = (__12307 + (1));
__12307 = G__12329;
continue;
} else {
}
break;
}

var c__11965__auto___12330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto___12330,jobs,results,process,async){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto___12330,jobs,results,process,async){
return (function (state_12220){
var state_val_12221 = (state_12220[(1)]);
if((state_val_12221 === (7))){
var inst_12216 = (state_12220[(2)]);
var state_12220__$1 = state_12220;
var statearr_12222_12331 = state_12220__$1;
(statearr_12222_12331[(2)] = inst_12216);

(statearr_12222_12331[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12221 === (1))){
var state_12220__$1 = state_12220;
var statearr_12223_12332 = state_12220__$1;
(statearr_12223_12332[(2)] = null);

(statearr_12223_12332[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12221 === (4))){
var inst_12201 = (state_12220[(7)]);
var inst_12201__$1 = (state_12220[(2)]);
var inst_12202 = (inst_12201__$1 == null);
var state_12220__$1 = (function (){var statearr_12224 = state_12220;
(statearr_12224[(7)] = inst_12201__$1);

return statearr_12224;
})();
if(cljs.core.truth_(inst_12202)){
var statearr_12225_12333 = state_12220__$1;
(statearr_12225_12333[(1)] = (5));

} else {
var statearr_12226_12334 = state_12220__$1;
(statearr_12226_12334[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12221 === (6))){
var inst_12201 = (state_12220[(7)]);
var inst_12206 = (state_12220[(8)]);
var inst_12206__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_12207 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12208 = [inst_12201,inst_12206__$1];
var inst_12209 = (new cljs.core.PersistentVector(null,2,(5),inst_12207,inst_12208,null));
var state_12220__$1 = (function (){var statearr_12227 = state_12220;
(statearr_12227[(8)] = inst_12206__$1);

return statearr_12227;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12220__$1,(8),jobs,inst_12209);
} else {
if((state_val_12221 === (3))){
var inst_12218 = (state_12220[(2)]);
var state_12220__$1 = state_12220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12220__$1,inst_12218);
} else {
if((state_val_12221 === (2))){
var state_12220__$1 = state_12220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12220__$1,(4),from);
} else {
if((state_val_12221 === (9))){
var inst_12213 = (state_12220[(2)]);
var state_12220__$1 = (function (){var statearr_12228 = state_12220;
(statearr_12228[(9)] = inst_12213);

return statearr_12228;
})();
var statearr_12229_12335 = state_12220__$1;
(statearr_12229_12335[(2)] = null);

(statearr_12229_12335[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12221 === (5))){
var inst_12204 = cljs.core.async.close_BANG_(jobs);
var state_12220__$1 = state_12220;
var statearr_12230_12336 = state_12220__$1;
(statearr_12230_12336[(2)] = inst_12204);

(statearr_12230_12336[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12221 === (8))){
var inst_12206 = (state_12220[(8)]);
var inst_12211 = (state_12220[(2)]);
var state_12220__$1 = (function (){var statearr_12231 = state_12220;
(statearr_12231[(10)] = inst_12211);

return statearr_12231;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12220__$1,(9),results,inst_12206);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__11965__auto___12330,jobs,results,process,async))
;
return ((function (switch__11858__auto__,c__11965__auto___12330,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____0 = (function (){
var statearr_12232 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12232[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__);

(statearr_12232[(1)] = (1));

return statearr_12232;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____1 = (function (state_12220){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_12220);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e12233){if((e12233 instanceof Object)){
var ex__11862__auto__ = e12233;
var statearr_12234_12337 = state_12220;
(statearr_12234_12337[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12220);

return cljs.core.cst$kw$recur;
} else {
throw e12233;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__12338 = state_12220;
state_12220 = G__12338;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__ = function(state_12220){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____1.call(this,state_12220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto___12330,jobs,results,process,async))
})();
var state__11967__auto__ = (function (){var statearr_12235 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_12235[(6)] = c__11965__auto___12330);

return statearr_12235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto___12330,jobs,results,process,async))
);


var c__11965__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto__,jobs,results,process,async){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto__,jobs,results,process,async){
return (function (state_12273){
var state_val_12274 = (state_12273[(1)]);
if((state_val_12274 === (7))){
var inst_12269 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
var statearr_12275_12339 = state_12273__$1;
(statearr_12275_12339[(2)] = inst_12269);

(statearr_12275_12339[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (20))){
var state_12273__$1 = state_12273;
var statearr_12276_12340 = state_12273__$1;
(statearr_12276_12340[(2)] = null);

(statearr_12276_12340[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (1))){
var state_12273__$1 = state_12273;
var statearr_12277_12341 = state_12273__$1;
(statearr_12277_12341[(2)] = null);

(statearr_12277_12341[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (4))){
var inst_12238 = (state_12273[(7)]);
var inst_12238__$1 = (state_12273[(2)]);
var inst_12239 = (inst_12238__$1 == null);
var state_12273__$1 = (function (){var statearr_12278 = state_12273;
(statearr_12278[(7)] = inst_12238__$1);

return statearr_12278;
})();
if(cljs.core.truth_(inst_12239)){
var statearr_12279_12342 = state_12273__$1;
(statearr_12279_12342[(1)] = (5));

} else {
var statearr_12280_12343 = state_12273__$1;
(statearr_12280_12343[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (15))){
var inst_12251 = (state_12273[(8)]);
var state_12273__$1 = state_12273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12273__$1,(18),to,inst_12251);
} else {
if((state_val_12274 === (21))){
var inst_12264 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
var statearr_12281_12344 = state_12273__$1;
(statearr_12281_12344[(2)] = inst_12264);

(statearr_12281_12344[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (13))){
var inst_12266 = (state_12273[(2)]);
var state_12273__$1 = (function (){var statearr_12282 = state_12273;
(statearr_12282[(9)] = inst_12266);

return statearr_12282;
})();
var statearr_12283_12345 = state_12273__$1;
(statearr_12283_12345[(2)] = null);

(statearr_12283_12345[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (6))){
var inst_12238 = (state_12273[(7)]);
var state_12273__$1 = state_12273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12273__$1,(11),inst_12238);
} else {
if((state_val_12274 === (17))){
var inst_12259 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
if(cljs.core.truth_(inst_12259)){
var statearr_12284_12346 = state_12273__$1;
(statearr_12284_12346[(1)] = (19));

} else {
var statearr_12285_12347 = state_12273__$1;
(statearr_12285_12347[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (3))){
var inst_12271 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12273__$1,inst_12271);
} else {
if((state_val_12274 === (12))){
var inst_12248 = (state_12273[(10)]);
var state_12273__$1 = state_12273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12273__$1,(14),inst_12248);
} else {
if((state_val_12274 === (2))){
var state_12273__$1 = state_12273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12273__$1,(4),results);
} else {
if((state_val_12274 === (19))){
var state_12273__$1 = state_12273;
var statearr_12286_12348 = state_12273__$1;
(statearr_12286_12348[(2)] = null);

(statearr_12286_12348[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (11))){
var inst_12248 = (state_12273[(2)]);
var state_12273__$1 = (function (){var statearr_12287 = state_12273;
(statearr_12287[(10)] = inst_12248);

return statearr_12287;
})();
var statearr_12288_12349 = state_12273__$1;
(statearr_12288_12349[(2)] = null);

(statearr_12288_12349[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (9))){
var state_12273__$1 = state_12273;
var statearr_12289_12350 = state_12273__$1;
(statearr_12289_12350[(2)] = null);

(statearr_12289_12350[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (5))){
var state_12273__$1 = state_12273;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12290_12351 = state_12273__$1;
(statearr_12290_12351[(1)] = (8));

} else {
var statearr_12291_12352 = state_12273__$1;
(statearr_12291_12352[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (14))){
var inst_12251 = (state_12273[(8)]);
var inst_12253 = (state_12273[(11)]);
var inst_12251__$1 = (state_12273[(2)]);
var inst_12252 = (inst_12251__$1 == null);
var inst_12253__$1 = cljs.core.not(inst_12252);
var state_12273__$1 = (function (){var statearr_12292 = state_12273;
(statearr_12292[(8)] = inst_12251__$1);

(statearr_12292[(11)] = inst_12253__$1);

return statearr_12292;
})();
if(inst_12253__$1){
var statearr_12293_12353 = state_12273__$1;
(statearr_12293_12353[(1)] = (15));

} else {
var statearr_12294_12354 = state_12273__$1;
(statearr_12294_12354[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (16))){
var inst_12253 = (state_12273[(11)]);
var state_12273__$1 = state_12273;
var statearr_12295_12355 = state_12273__$1;
(statearr_12295_12355[(2)] = inst_12253);

(statearr_12295_12355[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (10))){
var inst_12245 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
var statearr_12296_12356 = state_12273__$1;
(statearr_12296_12356[(2)] = inst_12245);

(statearr_12296_12356[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (18))){
var inst_12256 = (state_12273[(2)]);
var state_12273__$1 = state_12273;
var statearr_12297_12357 = state_12273__$1;
(statearr_12297_12357[(2)] = inst_12256);

(statearr_12297_12357[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12274 === (8))){
var inst_12242 = cljs.core.async.close_BANG_(to);
var state_12273__$1 = state_12273;
var statearr_12298_12358 = state_12273__$1;
(statearr_12298_12358[(2)] = inst_12242);

(statearr_12298_12358[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11965__auto__,jobs,results,process,async))
;
return ((function (switch__11858__auto__,c__11965__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____0 = (function (){
var statearr_12299 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__);

(statearr_12299[(1)] = (1));

return statearr_12299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____1 = (function (state_12273){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_12273);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e12300){if((e12300 instanceof Object)){
var ex__11862__auto__ = e12300;
var statearr_12301_12359 = state_12273;
(statearr_12301_12359[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12273);

return cljs.core.cst$kw$recur;
} else {
throw e12300;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__12360 = state_12273;
state_12273 = G__12360;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__ = function(state_12273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____1.call(this,state_12273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11859__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto__,jobs,results,process,async))
})();
var state__11967__auto__ = (function (){var statearr_12302 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_12302[(6)] = c__11965__auto__);

return statearr_12302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto__,jobs,results,process,async))
);

return c__11965__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__12362 = arguments.length;
switch (G__12362) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__12365 = arguments.length;
switch (G__12365) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__12368 = arguments.length;
switch (G__12368) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__11965__auto___12417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto___12417,tc,fc){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto___12417,tc,fc){
return (function (state_12394){
var state_val_12395 = (state_12394[(1)]);
if((state_val_12395 === (7))){
var inst_12390 = (state_12394[(2)]);
var state_12394__$1 = state_12394;
var statearr_12396_12418 = state_12394__$1;
(statearr_12396_12418[(2)] = inst_12390);

(statearr_12396_12418[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12395 === (1))){
var state_12394__$1 = state_12394;
var statearr_12397_12419 = state_12394__$1;
(statearr_12397_12419[(2)] = null);

(statearr_12397_12419[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12395 === (4))){
var inst_12371 = (state_12394[(7)]);
var inst_12371__$1 = (state_12394[(2)]);
var inst_12372 = (inst_12371__$1 == null);
var state_12394__$1 = (function (){var statearr_12398 = state_12394;
(statearr_12398[(7)] = inst_12371__$1);

return statearr_12398;
})();
if(cljs.core.truth_(inst_12372)){
var statearr_12399_12420 = state_12394__$1;
(statearr_12399_12420[(1)] = (5));

} else {
var statearr_12400_12421 = state_12394__$1;
(statearr_12400_12421[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12395 === (13))){
var state_12394__$1 = state_12394;
var statearr_12401_12422 = state_12394__$1;
(statearr_12401_12422[(2)] = null);

(statearr_12401_12422[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12395 === (6))){
var inst_12371 = (state_12394[(7)]);
var inst_12377 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_12371) : p.call(null,inst_12371));
var state_12394__$1 = state_12394;
if(cljs.core.truth_(inst_12377)){
var statearr_12402_12423 = state_12394__$1;
(statearr_12402_12423[(1)] = (9));

} else {
var statearr_12403_12424 = state_12394__$1;
(statearr_12403_12424[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12395 === (3))){
var inst_12392 = (state_12394[(2)]);
var state_12394__$1 = state_12394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12394__$1,inst_12392);
} else {
if((state_val_12395 === (12))){
var state_12394__$1 = state_12394;
var statearr_12404_12425 = state_12394__$1;
(statearr_12404_12425[(2)] = null);

(statearr_12404_12425[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12395 === (2))){
var state_12394__$1 = state_12394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12394__$1,(4),ch);
} else {
if((state_val_12395 === (11))){
var inst_12371 = (state_12394[(7)]);
var inst_12381 = (state_12394[(2)]);
var state_12394__$1 = state_12394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12394__$1,(8),inst_12381,inst_12371);
} else {
if((state_val_12395 === (9))){
var state_12394__$1 = state_12394;
var statearr_12405_12426 = state_12394__$1;
(statearr_12405_12426[(2)] = tc);

(statearr_12405_12426[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12395 === (5))){
var inst_12374 = cljs.core.async.close_BANG_(tc);
var inst_12375 = cljs.core.async.close_BANG_(fc);
var state_12394__$1 = (function (){var statearr_12406 = state_12394;
(statearr_12406[(8)] = inst_12374);

return statearr_12406;
})();
var statearr_12407_12427 = state_12394__$1;
(statearr_12407_12427[(2)] = inst_12375);

(statearr_12407_12427[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12395 === (14))){
var inst_12388 = (state_12394[(2)]);
var state_12394__$1 = state_12394;
var statearr_12408_12428 = state_12394__$1;
(statearr_12408_12428[(2)] = inst_12388);

(statearr_12408_12428[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12395 === (10))){
var state_12394__$1 = state_12394;
var statearr_12409_12429 = state_12394__$1;
(statearr_12409_12429[(2)] = fc);

(statearr_12409_12429[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12395 === (8))){
var inst_12383 = (state_12394[(2)]);
var state_12394__$1 = state_12394;
if(cljs.core.truth_(inst_12383)){
var statearr_12410_12430 = state_12394__$1;
(statearr_12410_12430[(1)] = (12));

} else {
var statearr_12411_12431 = state_12394__$1;
(statearr_12411_12431[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11965__auto___12417,tc,fc))
;
return ((function (switch__11858__auto__,c__11965__auto___12417,tc,fc){
return (function() {
var cljs$core$async$state_machine__11859__auto__ = null;
var cljs$core$async$state_machine__11859__auto____0 = (function (){
var statearr_12412 = [null,null,null,null,null,null,null,null,null];
(statearr_12412[(0)] = cljs$core$async$state_machine__11859__auto__);

(statearr_12412[(1)] = (1));

return statearr_12412;
});
var cljs$core$async$state_machine__11859__auto____1 = (function (state_12394){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_12394);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e12413){if((e12413 instanceof Object)){
var ex__11862__auto__ = e12413;
var statearr_12414_12432 = state_12394;
(statearr_12414_12432[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12394);

return cljs.core.cst$kw$recur;
} else {
throw e12413;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__12433 = state_12394;
state_12394 = G__12433;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$state_machine__11859__auto__ = function(state_12394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11859__auto____1.call(this,state_12394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11859__auto____0;
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11859__auto____1;
return cljs$core$async$state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto___12417,tc,fc))
})();
var state__11967__auto__ = (function (){var statearr_12415 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_12415[(6)] = c__11965__auto___12417);

return statearr_12415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto___12417,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11965__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto__){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto__){
return (function (state_12454){
var state_val_12455 = (state_12454[(1)]);
if((state_val_12455 === (7))){
var inst_12450 = (state_12454[(2)]);
var state_12454__$1 = state_12454;
var statearr_12456_12474 = state_12454__$1;
(statearr_12456_12474[(2)] = inst_12450);

(statearr_12456_12474[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (1))){
var inst_12434 = init;
var state_12454__$1 = (function (){var statearr_12457 = state_12454;
(statearr_12457[(7)] = inst_12434);

return statearr_12457;
})();
var statearr_12458_12475 = state_12454__$1;
(statearr_12458_12475[(2)] = null);

(statearr_12458_12475[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (4))){
var inst_12437 = (state_12454[(8)]);
var inst_12437__$1 = (state_12454[(2)]);
var inst_12438 = (inst_12437__$1 == null);
var state_12454__$1 = (function (){var statearr_12459 = state_12454;
(statearr_12459[(8)] = inst_12437__$1);

return statearr_12459;
})();
if(cljs.core.truth_(inst_12438)){
var statearr_12460_12476 = state_12454__$1;
(statearr_12460_12476[(1)] = (5));

} else {
var statearr_12461_12477 = state_12454__$1;
(statearr_12461_12477[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (6))){
var inst_12434 = (state_12454[(7)]);
var inst_12441 = (state_12454[(9)]);
var inst_12437 = (state_12454[(8)]);
var inst_12441__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_12434,inst_12437) : f.call(null,inst_12434,inst_12437));
var inst_12442 = cljs.core.reduced_QMARK_(inst_12441__$1);
var state_12454__$1 = (function (){var statearr_12462 = state_12454;
(statearr_12462[(9)] = inst_12441__$1);

return statearr_12462;
})();
if(inst_12442){
var statearr_12463_12478 = state_12454__$1;
(statearr_12463_12478[(1)] = (8));

} else {
var statearr_12464_12479 = state_12454__$1;
(statearr_12464_12479[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (3))){
var inst_12452 = (state_12454[(2)]);
var state_12454__$1 = state_12454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12454__$1,inst_12452);
} else {
if((state_val_12455 === (2))){
var state_12454__$1 = state_12454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12454__$1,(4),ch);
} else {
if((state_val_12455 === (9))){
var inst_12441 = (state_12454[(9)]);
var inst_12434 = inst_12441;
var state_12454__$1 = (function (){var statearr_12465 = state_12454;
(statearr_12465[(7)] = inst_12434);

return statearr_12465;
})();
var statearr_12466_12480 = state_12454__$1;
(statearr_12466_12480[(2)] = null);

(statearr_12466_12480[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (5))){
var inst_12434 = (state_12454[(7)]);
var state_12454__$1 = state_12454;
var statearr_12467_12481 = state_12454__$1;
(statearr_12467_12481[(2)] = inst_12434);

(statearr_12467_12481[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (10))){
var inst_12448 = (state_12454[(2)]);
var state_12454__$1 = state_12454;
var statearr_12468_12482 = state_12454__$1;
(statearr_12468_12482[(2)] = inst_12448);

(statearr_12468_12482[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12455 === (8))){
var inst_12441 = (state_12454[(9)]);
var inst_12444 = cljs.core.deref(inst_12441);
var state_12454__$1 = state_12454;
var statearr_12469_12483 = state_12454__$1;
(statearr_12469_12483[(2)] = inst_12444);

(statearr_12469_12483[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__11965__auto__))
;
return ((function (switch__11858__auto__,c__11965__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__11859__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11859__auto____0 = (function (){
var statearr_12470 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12470[(0)] = cljs$core$async$reduce_$_state_machine__11859__auto__);

(statearr_12470[(1)] = (1));

return statearr_12470;
});
var cljs$core$async$reduce_$_state_machine__11859__auto____1 = (function (state_12454){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_12454);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e12471){if((e12471 instanceof Object)){
var ex__11862__auto__ = e12471;
var statearr_12472_12484 = state_12454;
(statearr_12472_12484[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12454);

return cljs.core.cst$kw$recur;
} else {
throw e12471;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__12485 = state_12454;
state_12454 = G__12485;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11859__auto__ = function(state_12454){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11859__auto____1.call(this,state_12454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11859__auto____0;
cljs$core$async$reduce_$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11859__auto____1;
return cljs$core$async$reduce_$_state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto__))
})();
var state__11967__auto__ = (function (){var statearr_12473 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_12473[(6)] = c__11965__auto__);

return statearr_12473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto__))
);

return c__11965__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__11965__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto__,f__$1){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto__,f__$1){
return (function (state_12491){
var state_val_12492 = (state_12491[(1)]);
if((state_val_12492 === (1))){
var inst_12486 = cljs.core.async.reduce(f__$1,init,ch);
var state_12491__$1 = state_12491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12491__$1,(2),inst_12486);
} else {
if((state_val_12492 === (2))){
var inst_12488 = (state_12491[(2)]);
var inst_12489 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_12488) : f__$1.call(null,inst_12488));
var state_12491__$1 = state_12491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12491__$1,inst_12489);
} else {
return null;
}
}
});})(c__11965__auto__,f__$1))
;
return ((function (switch__11858__auto__,c__11965__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__11859__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11859__auto____0 = (function (){
var statearr_12493 = [null,null,null,null,null,null,null];
(statearr_12493[(0)] = cljs$core$async$transduce_$_state_machine__11859__auto__);

(statearr_12493[(1)] = (1));

return statearr_12493;
});
var cljs$core$async$transduce_$_state_machine__11859__auto____1 = (function (state_12491){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_12491);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e12494){if((e12494 instanceof Object)){
var ex__11862__auto__ = e12494;
var statearr_12495_12497 = state_12491;
(statearr_12495_12497[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12491);

return cljs.core.cst$kw$recur;
} else {
throw e12494;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__12498 = state_12491;
state_12491 = G__12498;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11859__auto__ = function(state_12491){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11859__auto____1.call(this,state_12491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11859__auto____0;
cljs$core$async$transduce_$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11859__auto____1;
return cljs$core$async$transduce_$_state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto__,f__$1))
})();
var state__11967__auto__ = (function (){var statearr_12496 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_12496[(6)] = c__11965__auto__);

return statearr_12496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto__,f__$1))
);

return c__11965__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__12500 = arguments.length;
switch (G__12500) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11965__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto__){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto__){
return (function (state_12525){
var state_val_12526 = (state_12525[(1)]);
if((state_val_12526 === (7))){
var inst_12507 = (state_12525[(2)]);
var state_12525__$1 = state_12525;
var statearr_12527_12548 = state_12525__$1;
(statearr_12527_12548[(2)] = inst_12507);

(statearr_12527_12548[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12526 === (1))){
var inst_12501 = cljs.core.seq(coll);
var inst_12502 = inst_12501;
var state_12525__$1 = (function (){var statearr_12528 = state_12525;
(statearr_12528[(7)] = inst_12502);

return statearr_12528;
})();
var statearr_12529_12549 = state_12525__$1;
(statearr_12529_12549[(2)] = null);

(statearr_12529_12549[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12526 === (4))){
var inst_12502 = (state_12525[(7)]);
var inst_12505 = cljs.core.first(inst_12502);
var state_12525__$1 = state_12525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12525__$1,(7),ch,inst_12505);
} else {
if((state_val_12526 === (13))){
var inst_12519 = (state_12525[(2)]);
var state_12525__$1 = state_12525;
var statearr_12530_12550 = state_12525__$1;
(statearr_12530_12550[(2)] = inst_12519);

(statearr_12530_12550[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12526 === (6))){
var inst_12510 = (state_12525[(2)]);
var state_12525__$1 = state_12525;
if(cljs.core.truth_(inst_12510)){
var statearr_12531_12551 = state_12525__$1;
(statearr_12531_12551[(1)] = (8));

} else {
var statearr_12532_12552 = state_12525__$1;
(statearr_12532_12552[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12526 === (3))){
var inst_12523 = (state_12525[(2)]);
var state_12525__$1 = state_12525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12525__$1,inst_12523);
} else {
if((state_val_12526 === (12))){
var state_12525__$1 = state_12525;
var statearr_12533_12553 = state_12525__$1;
(statearr_12533_12553[(2)] = null);

(statearr_12533_12553[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12526 === (2))){
var inst_12502 = (state_12525[(7)]);
var state_12525__$1 = state_12525;
if(cljs.core.truth_(inst_12502)){
var statearr_12534_12554 = state_12525__$1;
(statearr_12534_12554[(1)] = (4));

} else {
var statearr_12535_12555 = state_12525__$1;
(statearr_12535_12555[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12526 === (11))){
var inst_12516 = cljs.core.async.close_BANG_(ch);
var state_12525__$1 = state_12525;
var statearr_12536_12556 = state_12525__$1;
(statearr_12536_12556[(2)] = inst_12516);

(statearr_12536_12556[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12526 === (9))){
var state_12525__$1 = state_12525;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12537_12557 = state_12525__$1;
(statearr_12537_12557[(1)] = (11));

} else {
var statearr_12538_12558 = state_12525__$1;
(statearr_12538_12558[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12526 === (5))){
var inst_12502 = (state_12525[(7)]);
var state_12525__$1 = state_12525;
var statearr_12539_12559 = state_12525__$1;
(statearr_12539_12559[(2)] = inst_12502);

(statearr_12539_12559[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12526 === (10))){
var inst_12521 = (state_12525[(2)]);
var state_12525__$1 = state_12525;
var statearr_12540_12560 = state_12525__$1;
(statearr_12540_12560[(2)] = inst_12521);

(statearr_12540_12560[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12526 === (8))){
var inst_12502 = (state_12525[(7)]);
var inst_12512 = cljs.core.next(inst_12502);
var inst_12502__$1 = inst_12512;
var state_12525__$1 = (function (){var statearr_12541 = state_12525;
(statearr_12541[(7)] = inst_12502__$1);

return statearr_12541;
})();
var statearr_12542_12561 = state_12525__$1;
(statearr_12542_12561[(2)] = null);

(statearr_12542_12561[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11965__auto__))
;
return ((function (switch__11858__auto__,c__11965__auto__){
return (function() {
var cljs$core$async$state_machine__11859__auto__ = null;
var cljs$core$async$state_machine__11859__auto____0 = (function (){
var statearr_12543 = [null,null,null,null,null,null,null,null];
(statearr_12543[(0)] = cljs$core$async$state_machine__11859__auto__);

(statearr_12543[(1)] = (1));

return statearr_12543;
});
var cljs$core$async$state_machine__11859__auto____1 = (function (state_12525){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_12525);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e12544){if((e12544 instanceof Object)){
var ex__11862__auto__ = e12544;
var statearr_12545_12562 = state_12525;
(statearr_12545_12562[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12525);

return cljs.core.cst$kw$recur;
} else {
throw e12544;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__12563 = state_12525;
state_12525 = G__12563;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$state_machine__11859__auto__ = function(state_12525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11859__auto____1.call(this,state_12525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11859__auto____0;
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11859__auto____1;
return cljs$core$async$state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto__))
})();
var state__11967__auto__ = (function (){var statearr_12546 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_12546[(6)] = c__11965__auto__);

return statearr_12546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto__))
);

return c__11965__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12564 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12564 = (function (ch,cs,meta12565){
this.ch = ch;
this.cs = cs;
this.meta12565 = meta12565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12566,meta12565__$1){
var self__ = this;
var _12566__$1 = this;
return (new cljs.core.async.t_cljs$core$async12564(self__.ch,self__.cs,meta12565__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12564.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12566){
var self__ = this;
var _12566__$1 = this;
return self__.meta12565;
});})(cs))
;

cljs.core.async.t_cljs$core$async12564.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12564.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12564.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12564.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12564.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12564.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12564.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta12565], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12564";

cljs.core.async.t_cljs$core$async12564.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async12564");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12564.
 */
cljs.core.async.__GT_t_cljs$core$async12564 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12564(ch__$1,cs__$1,meta12565){
return (new cljs.core.async.t_cljs$core$async12564(ch__$1,cs__$1,meta12565));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12564(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__11965__auto___12786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto___12786,cs,m,dchan,dctr,done){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto___12786,cs,m,dchan,dctr,done){
return (function (state_12701){
var state_val_12702 = (state_12701[(1)]);
if((state_val_12702 === (7))){
var inst_12697 = (state_12701[(2)]);
var state_12701__$1 = state_12701;
var statearr_12703_12787 = state_12701__$1;
(statearr_12703_12787[(2)] = inst_12697);

(statearr_12703_12787[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (20))){
var inst_12600 = (state_12701[(7)]);
var inst_12612 = cljs.core.first(inst_12600);
var inst_12613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12612,(0),null);
var inst_12614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12612,(1),null);
var state_12701__$1 = (function (){var statearr_12704 = state_12701;
(statearr_12704[(8)] = inst_12613);

return statearr_12704;
})();
if(cljs.core.truth_(inst_12614)){
var statearr_12705_12788 = state_12701__$1;
(statearr_12705_12788[(1)] = (22));

} else {
var statearr_12706_12789 = state_12701__$1;
(statearr_12706_12789[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (27))){
var inst_12642 = (state_12701[(9)]);
var inst_12569 = (state_12701[(10)]);
var inst_12644 = (state_12701[(11)]);
var inst_12649 = (state_12701[(12)]);
var inst_12649__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12642,inst_12644);
var inst_12650 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12649__$1,inst_12569,done);
var state_12701__$1 = (function (){var statearr_12707 = state_12701;
(statearr_12707[(12)] = inst_12649__$1);

return statearr_12707;
})();
if(cljs.core.truth_(inst_12650)){
var statearr_12708_12790 = state_12701__$1;
(statearr_12708_12790[(1)] = (30));

} else {
var statearr_12709_12791 = state_12701__$1;
(statearr_12709_12791[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (1))){
var state_12701__$1 = state_12701;
var statearr_12710_12792 = state_12701__$1;
(statearr_12710_12792[(2)] = null);

(statearr_12710_12792[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (24))){
var inst_12600 = (state_12701[(7)]);
var inst_12619 = (state_12701[(2)]);
var inst_12620 = cljs.core.next(inst_12600);
var inst_12578 = inst_12620;
var inst_12579 = null;
var inst_12580 = (0);
var inst_12581 = (0);
var state_12701__$1 = (function (){var statearr_12711 = state_12701;
(statearr_12711[(13)] = inst_12619);

(statearr_12711[(14)] = inst_12581);

(statearr_12711[(15)] = inst_12579);

(statearr_12711[(16)] = inst_12578);

(statearr_12711[(17)] = inst_12580);

return statearr_12711;
})();
var statearr_12712_12793 = state_12701__$1;
(statearr_12712_12793[(2)] = null);

(statearr_12712_12793[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (39))){
var state_12701__$1 = state_12701;
var statearr_12716_12794 = state_12701__$1;
(statearr_12716_12794[(2)] = null);

(statearr_12716_12794[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (4))){
var inst_12569 = (state_12701[(10)]);
var inst_12569__$1 = (state_12701[(2)]);
var inst_12570 = (inst_12569__$1 == null);
var state_12701__$1 = (function (){var statearr_12717 = state_12701;
(statearr_12717[(10)] = inst_12569__$1);

return statearr_12717;
})();
if(cljs.core.truth_(inst_12570)){
var statearr_12718_12795 = state_12701__$1;
(statearr_12718_12795[(1)] = (5));

} else {
var statearr_12719_12796 = state_12701__$1;
(statearr_12719_12796[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (15))){
var inst_12581 = (state_12701[(14)]);
var inst_12579 = (state_12701[(15)]);
var inst_12578 = (state_12701[(16)]);
var inst_12580 = (state_12701[(17)]);
var inst_12596 = (state_12701[(2)]);
var inst_12597 = (inst_12581 + (1));
var tmp12713 = inst_12579;
var tmp12714 = inst_12578;
var tmp12715 = inst_12580;
var inst_12578__$1 = tmp12714;
var inst_12579__$1 = tmp12713;
var inst_12580__$1 = tmp12715;
var inst_12581__$1 = inst_12597;
var state_12701__$1 = (function (){var statearr_12720 = state_12701;
(statearr_12720[(14)] = inst_12581__$1);

(statearr_12720[(15)] = inst_12579__$1);

(statearr_12720[(18)] = inst_12596);

(statearr_12720[(16)] = inst_12578__$1);

(statearr_12720[(17)] = inst_12580__$1);

return statearr_12720;
})();
var statearr_12721_12797 = state_12701__$1;
(statearr_12721_12797[(2)] = null);

(statearr_12721_12797[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (21))){
var inst_12623 = (state_12701[(2)]);
var state_12701__$1 = state_12701;
var statearr_12725_12798 = state_12701__$1;
(statearr_12725_12798[(2)] = inst_12623);

(statearr_12725_12798[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (31))){
var inst_12649 = (state_12701[(12)]);
var inst_12653 = done(null);
var inst_12654 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12649);
var state_12701__$1 = (function (){var statearr_12726 = state_12701;
(statearr_12726[(19)] = inst_12653);

return statearr_12726;
})();
var statearr_12727_12799 = state_12701__$1;
(statearr_12727_12799[(2)] = inst_12654);

(statearr_12727_12799[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (32))){
var inst_12642 = (state_12701[(9)]);
var inst_12643 = (state_12701[(20)]);
var inst_12644 = (state_12701[(11)]);
var inst_12641 = (state_12701[(21)]);
var inst_12656 = (state_12701[(2)]);
var inst_12657 = (inst_12644 + (1));
var tmp12722 = inst_12642;
var tmp12723 = inst_12643;
var tmp12724 = inst_12641;
var inst_12641__$1 = tmp12724;
var inst_12642__$1 = tmp12722;
var inst_12643__$1 = tmp12723;
var inst_12644__$1 = inst_12657;
var state_12701__$1 = (function (){var statearr_12728 = state_12701;
(statearr_12728[(9)] = inst_12642__$1);

(statearr_12728[(20)] = inst_12643__$1);

(statearr_12728[(22)] = inst_12656);

(statearr_12728[(11)] = inst_12644__$1);

(statearr_12728[(21)] = inst_12641__$1);

return statearr_12728;
})();
var statearr_12729_12800 = state_12701__$1;
(statearr_12729_12800[(2)] = null);

(statearr_12729_12800[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (40))){
var inst_12669 = (state_12701[(23)]);
var inst_12673 = done(null);
var inst_12674 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_12669);
var state_12701__$1 = (function (){var statearr_12730 = state_12701;
(statearr_12730[(24)] = inst_12673);

return statearr_12730;
})();
var statearr_12731_12801 = state_12701__$1;
(statearr_12731_12801[(2)] = inst_12674);

(statearr_12731_12801[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (33))){
var inst_12660 = (state_12701[(25)]);
var inst_12662 = cljs.core.chunked_seq_QMARK_(inst_12660);
var state_12701__$1 = state_12701;
if(inst_12662){
var statearr_12732_12802 = state_12701__$1;
(statearr_12732_12802[(1)] = (36));

} else {
var statearr_12733_12803 = state_12701__$1;
(statearr_12733_12803[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (13))){
var inst_12590 = (state_12701[(26)]);
var inst_12593 = cljs.core.async.close_BANG_(inst_12590);
var state_12701__$1 = state_12701;
var statearr_12734_12804 = state_12701__$1;
(statearr_12734_12804[(2)] = inst_12593);

(statearr_12734_12804[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (22))){
var inst_12613 = (state_12701[(8)]);
var inst_12616 = cljs.core.async.close_BANG_(inst_12613);
var state_12701__$1 = state_12701;
var statearr_12735_12805 = state_12701__$1;
(statearr_12735_12805[(2)] = inst_12616);

(statearr_12735_12805[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (36))){
var inst_12660 = (state_12701[(25)]);
var inst_12664 = cljs.core.chunk_first(inst_12660);
var inst_12665 = cljs.core.chunk_rest(inst_12660);
var inst_12666 = cljs.core.count(inst_12664);
var inst_12641 = inst_12665;
var inst_12642 = inst_12664;
var inst_12643 = inst_12666;
var inst_12644 = (0);
var state_12701__$1 = (function (){var statearr_12736 = state_12701;
(statearr_12736[(9)] = inst_12642);

(statearr_12736[(20)] = inst_12643);

(statearr_12736[(11)] = inst_12644);

(statearr_12736[(21)] = inst_12641);

return statearr_12736;
})();
var statearr_12737_12806 = state_12701__$1;
(statearr_12737_12806[(2)] = null);

(statearr_12737_12806[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (41))){
var inst_12660 = (state_12701[(25)]);
var inst_12676 = (state_12701[(2)]);
var inst_12677 = cljs.core.next(inst_12660);
var inst_12641 = inst_12677;
var inst_12642 = null;
var inst_12643 = (0);
var inst_12644 = (0);
var state_12701__$1 = (function (){var statearr_12738 = state_12701;
(statearr_12738[(9)] = inst_12642);

(statearr_12738[(20)] = inst_12643);

(statearr_12738[(27)] = inst_12676);

(statearr_12738[(11)] = inst_12644);

(statearr_12738[(21)] = inst_12641);

return statearr_12738;
})();
var statearr_12739_12807 = state_12701__$1;
(statearr_12739_12807[(2)] = null);

(statearr_12739_12807[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (43))){
var state_12701__$1 = state_12701;
var statearr_12740_12808 = state_12701__$1;
(statearr_12740_12808[(2)] = null);

(statearr_12740_12808[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (29))){
var inst_12685 = (state_12701[(2)]);
var state_12701__$1 = state_12701;
var statearr_12741_12809 = state_12701__$1;
(statearr_12741_12809[(2)] = inst_12685);

(statearr_12741_12809[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (44))){
var inst_12694 = (state_12701[(2)]);
var state_12701__$1 = (function (){var statearr_12742 = state_12701;
(statearr_12742[(28)] = inst_12694);

return statearr_12742;
})();
var statearr_12743_12810 = state_12701__$1;
(statearr_12743_12810[(2)] = null);

(statearr_12743_12810[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (6))){
var inst_12633 = (state_12701[(29)]);
var inst_12632 = cljs.core.deref(cs);
var inst_12633__$1 = cljs.core.keys(inst_12632);
var inst_12634 = cljs.core.count(inst_12633__$1);
var inst_12635 = cljs.core.reset_BANG_(dctr,inst_12634);
var inst_12640 = cljs.core.seq(inst_12633__$1);
var inst_12641 = inst_12640;
var inst_12642 = null;
var inst_12643 = (0);
var inst_12644 = (0);
var state_12701__$1 = (function (){var statearr_12744 = state_12701;
(statearr_12744[(9)] = inst_12642);

(statearr_12744[(20)] = inst_12643);

(statearr_12744[(29)] = inst_12633__$1);

(statearr_12744[(11)] = inst_12644);

(statearr_12744[(30)] = inst_12635);

(statearr_12744[(21)] = inst_12641);

return statearr_12744;
})();
var statearr_12745_12811 = state_12701__$1;
(statearr_12745_12811[(2)] = null);

(statearr_12745_12811[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (28))){
var inst_12660 = (state_12701[(25)]);
var inst_12641 = (state_12701[(21)]);
var inst_12660__$1 = cljs.core.seq(inst_12641);
var state_12701__$1 = (function (){var statearr_12746 = state_12701;
(statearr_12746[(25)] = inst_12660__$1);

return statearr_12746;
})();
if(inst_12660__$1){
var statearr_12747_12812 = state_12701__$1;
(statearr_12747_12812[(1)] = (33));

} else {
var statearr_12748_12813 = state_12701__$1;
(statearr_12748_12813[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (25))){
var inst_12643 = (state_12701[(20)]);
var inst_12644 = (state_12701[(11)]);
var inst_12646 = (inst_12644 < inst_12643);
var inst_12647 = inst_12646;
var state_12701__$1 = state_12701;
if(cljs.core.truth_(inst_12647)){
var statearr_12749_12814 = state_12701__$1;
(statearr_12749_12814[(1)] = (27));

} else {
var statearr_12750_12815 = state_12701__$1;
(statearr_12750_12815[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (34))){
var state_12701__$1 = state_12701;
var statearr_12751_12816 = state_12701__$1;
(statearr_12751_12816[(2)] = null);

(statearr_12751_12816[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (17))){
var state_12701__$1 = state_12701;
var statearr_12752_12817 = state_12701__$1;
(statearr_12752_12817[(2)] = null);

(statearr_12752_12817[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (3))){
var inst_12699 = (state_12701[(2)]);
var state_12701__$1 = state_12701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12701__$1,inst_12699);
} else {
if((state_val_12702 === (12))){
var inst_12628 = (state_12701[(2)]);
var state_12701__$1 = state_12701;
var statearr_12753_12818 = state_12701__$1;
(statearr_12753_12818[(2)] = inst_12628);

(statearr_12753_12818[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (2))){
var state_12701__$1 = state_12701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12701__$1,(4),ch);
} else {
if((state_val_12702 === (23))){
var state_12701__$1 = state_12701;
var statearr_12754_12819 = state_12701__$1;
(statearr_12754_12819[(2)] = null);

(statearr_12754_12819[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (35))){
var inst_12683 = (state_12701[(2)]);
var state_12701__$1 = state_12701;
var statearr_12755_12820 = state_12701__$1;
(statearr_12755_12820[(2)] = inst_12683);

(statearr_12755_12820[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (19))){
var inst_12600 = (state_12701[(7)]);
var inst_12604 = cljs.core.chunk_first(inst_12600);
var inst_12605 = cljs.core.chunk_rest(inst_12600);
var inst_12606 = cljs.core.count(inst_12604);
var inst_12578 = inst_12605;
var inst_12579 = inst_12604;
var inst_12580 = inst_12606;
var inst_12581 = (0);
var state_12701__$1 = (function (){var statearr_12756 = state_12701;
(statearr_12756[(14)] = inst_12581);

(statearr_12756[(15)] = inst_12579);

(statearr_12756[(16)] = inst_12578);

(statearr_12756[(17)] = inst_12580);

return statearr_12756;
})();
var statearr_12757_12821 = state_12701__$1;
(statearr_12757_12821[(2)] = null);

(statearr_12757_12821[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (11))){
var inst_12600 = (state_12701[(7)]);
var inst_12578 = (state_12701[(16)]);
var inst_12600__$1 = cljs.core.seq(inst_12578);
var state_12701__$1 = (function (){var statearr_12758 = state_12701;
(statearr_12758[(7)] = inst_12600__$1);

return statearr_12758;
})();
if(inst_12600__$1){
var statearr_12759_12822 = state_12701__$1;
(statearr_12759_12822[(1)] = (16));

} else {
var statearr_12760_12823 = state_12701__$1;
(statearr_12760_12823[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (9))){
var inst_12630 = (state_12701[(2)]);
var state_12701__$1 = state_12701;
var statearr_12761_12824 = state_12701__$1;
(statearr_12761_12824[(2)] = inst_12630);

(statearr_12761_12824[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (5))){
var inst_12576 = cljs.core.deref(cs);
var inst_12577 = cljs.core.seq(inst_12576);
var inst_12578 = inst_12577;
var inst_12579 = null;
var inst_12580 = (0);
var inst_12581 = (0);
var state_12701__$1 = (function (){var statearr_12762 = state_12701;
(statearr_12762[(14)] = inst_12581);

(statearr_12762[(15)] = inst_12579);

(statearr_12762[(16)] = inst_12578);

(statearr_12762[(17)] = inst_12580);

return statearr_12762;
})();
var statearr_12763_12825 = state_12701__$1;
(statearr_12763_12825[(2)] = null);

(statearr_12763_12825[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (14))){
var state_12701__$1 = state_12701;
var statearr_12764_12826 = state_12701__$1;
(statearr_12764_12826[(2)] = null);

(statearr_12764_12826[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (45))){
var inst_12691 = (state_12701[(2)]);
var state_12701__$1 = state_12701;
var statearr_12765_12827 = state_12701__$1;
(statearr_12765_12827[(2)] = inst_12691);

(statearr_12765_12827[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (26))){
var inst_12633 = (state_12701[(29)]);
var inst_12687 = (state_12701[(2)]);
var inst_12688 = cljs.core.seq(inst_12633);
var state_12701__$1 = (function (){var statearr_12766 = state_12701;
(statearr_12766[(31)] = inst_12687);

return statearr_12766;
})();
if(inst_12688){
var statearr_12767_12828 = state_12701__$1;
(statearr_12767_12828[(1)] = (42));

} else {
var statearr_12768_12829 = state_12701__$1;
(statearr_12768_12829[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (16))){
var inst_12600 = (state_12701[(7)]);
var inst_12602 = cljs.core.chunked_seq_QMARK_(inst_12600);
var state_12701__$1 = state_12701;
if(inst_12602){
var statearr_12769_12830 = state_12701__$1;
(statearr_12769_12830[(1)] = (19));

} else {
var statearr_12770_12831 = state_12701__$1;
(statearr_12770_12831[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (38))){
var inst_12680 = (state_12701[(2)]);
var state_12701__$1 = state_12701;
var statearr_12771_12832 = state_12701__$1;
(statearr_12771_12832[(2)] = inst_12680);

(statearr_12771_12832[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (30))){
var state_12701__$1 = state_12701;
var statearr_12772_12833 = state_12701__$1;
(statearr_12772_12833[(2)] = null);

(statearr_12772_12833[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (10))){
var inst_12581 = (state_12701[(14)]);
var inst_12579 = (state_12701[(15)]);
var inst_12589 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12579,inst_12581);
var inst_12590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12589,(0),null);
var inst_12591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12589,(1),null);
var state_12701__$1 = (function (){var statearr_12773 = state_12701;
(statearr_12773[(26)] = inst_12590);

return statearr_12773;
})();
if(cljs.core.truth_(inst_12591)){
var statearr_12774_12834 = state_12701__$1;
(statearr_12774_12834[(1)] = (13));

} else {
var statearr_12775_12835 = state_12701__$1;
(statearr_12775_12835[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (18))){
var inst_12626 = (state_12701[(2)]);
var state_12701__$1 = state_12701;
var statearr_12776_12836 = state_12701__$1;
(statearr_12776_12836[(2)] = inst_12626);

(statearr_12776_12836[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (42))){
var state_12701__$1 = state_12701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12701__$1,(45),dchan);
} else {
if((state_val_12702 === (37))){
var inst_12660 = (state_12701[(25)]);
var inst_12669 = (state_12701[(23)]);
var inst_12569 = (state_12701[(10)]);
var inst_12669__$1 = cljs.core.first(inst_12660);
var inst_12670 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_12669__$1,inst_12569,done);
var state_12701__$1 = (function (){var statearr_12777 = state_12701;
(statearr_12777[(23)] = inst_12669__$1);

return statearr_12777;
})();
if(cljs.core.truth_(inst_12670)){
var statearr_12778_12837 = state_12701__$1;
(statearr_12778_12837[(1)] = (39));

} else {
var statearr_12779_12838 = state_12701__$1;
(statearr_12779_12838[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12702 === (8))){
var inst_12581 = (state_12701[(14)]);
var inst_12580 = (state_12701[(17)]);
var inst_12583 = (inst_12581 < inst_12580);
var inst_12584 = inst_12583;
var state_12701__$1 = state_12701;
if(cljs.core.truth_(inst_12584)){
var statearr_12780_12839 = state_12701__$1;
(statearr_12780_12839[(1)] = (10));

} else {
var statearr_12781_12840 = state_12701__$1;
(statearr_12781_12840[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11965__auto___12786,cs,m,dchan,dctr,done))
;
return ((function (switch__11858__auto__,c__11965__auto___12786,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__11859__auto__ = null;
var cljs$core$async$mult_$_state_machine__11859__auto____0 = (function (){
var statearr_12782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12782[(0)] = cljs$core$async$mult_$_state_machine__11859__auto__);

(statearr_12782[(1)] = (1));

return statearr_12782;
});
var cljs$core$async$mult_$_state_machine__11859__auto____1 = (function (state_12701){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_12701);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e12783){if((e12783 instanceof Object)){
var ex__11862__auto__ = e12783;
var statearr_12784_12841 = state_12701;
(statearr_12784_12841[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12701);

return cljs.core.cst$kw$recur;
} else {
throw e12783;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__12842 = state_12701;
state_12701 = G__12842;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11859__auto__ = function(state_12701){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11859__auto____1.call(this,state_12701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11859__auto____0;
cljs$core$async$mult_$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11859__auto____1;
return cljs$core$async$mult_$_state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto___12786,cs,m,dchan,dctr,done))
})();
var state__11967__auto__ = (function (){var statearr_12785 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_12785[(6)] = c__11965__auto___12786);

return statearr_12785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto___12786,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__12844 = arguments.length;
switch (G__12844) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12856 = arguments.length;
var i__4731__auto___12857 = (0);
while(true){
if((i__4731__auto___12857 < len__4730__auto___12856)){
args__4736__auto__.push((arguments[i__4731__auto___12857]));

var G__12858 = (i__4731__auto___12857 + (1));
i__4731__auto___12857 = G__12858;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12850){
var map__12851 = p__12850;
var map__12851__$1 = (((((!((map__12851 == null))))?(((((map__12851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12851):map__12851);
var opts = map__12851__$1;
var statearr_12853_12859 = state;
(statearr_12853_12859[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__12851,map__12851__$1,opts){
return (function (val){
var statearr_12854_12860 = state;
(statearr_12854_12860[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__12851,map__12851__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_12855_12861 = state;
(statearr_12855_12861[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12846){
var G__12847 = cljs.core.first(seq12846);
var seq12846__$1 = cljs.core.next(seq12846);
var G__12848 = cljs.core.first(seq12846__$1);
var seq12846__$2 = cljs.core.next(seq12846__$1);
var G__12849 = cljs.core.first(seq12846__$2);
var seq12846__$3 = cljs.core.next(seq12846__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12847,G__12848,G__12849,seq12846__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12862 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12862 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12863){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12863 = meta12863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12864,meta12863__$1){
var self__ = this;
var _12864__$1 = this;
return (new cljs.core.async.t_cljs$core$async12862(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12863__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12864){
var self__ = this;
var _12864__$1 = this;
return self__.meta12863;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12862.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12862.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta12863], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12862.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12862";

cljs.core.async.t_cljs$core$async12862.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async12862");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12862.
 */
cljs.core.async.__GT_t_cljs$core$async12862 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async12862(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12863){
return (new cljs.core.async.t_cljs$core$async12862(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12863));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async12862(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11965__auto___13026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto___13026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto___13026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12966){
var state_val_12967 = (state_12966[(1)]);
if((state_val_12967 === (7))){
var inst_12881 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
var statearr_12968_13027 = state_12966__$1;
(statearr_12968_13027[(2)] = inst_12881);

(statearr_12968_13027[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (20))){
var inst_12893 = (state_12966[(7)]);
var state_12966__$1 = state_12966;
var statearr_12969_13028 = state_12966__$1;
(statearr_12969_13028[(2)] = inst_12893);

(statearr_12969_13028[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (27))){
var state_12966__$1 = state_12966;
var statearr_12970_13029 = state_12966__$1;
(statearr_12970_13029[(2)] = null);

(statearr_12970_13029[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (1))){
var inst_12868 = (state_12966[(8)]);
var inst_12868__$1 = calc_state();
var inst_12870 = (inst_12868__$1 == null);
var inst_12871 = cljs.core.not(inst_12870);
var state_12966__$1 = (function (){var statearr_12971 = state_12966;
(statearr_12971[(8)] = inst_12868__$1);

return statearr_12971;
})();
if(inst_12871){
var statearr_12972_13030 = state_12966__$1;
(statearr_12972_13030[(1)] = (2));

} else {
var statearr_12973_13031 = state_12966__$1;
(statearr_12973_13031[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (24))){
var inst_12926 = (state_12966[(9)]);
var inst_12940 = (state_12966[(10)]);
var inst_12917 = (state_12966[(11)]);
var inst_12940__$1 = (inst_12917.cljs$core$IFn$_invoke$arity$1 ? inst_12917.cljs$core$IFn$_invoke$arity$1(inst_12926) : inst_12917.call(null,inst_12926));
var state_12966__$1 = (function (){var statearr_12974 = state_12966;
(statearr_12974[(10)] = inst_12940__$1);

return statearr_12974;
})();
if(cljs.core.truth_(inst_12940__$1)){
var statearr_12975_13032 = state_12966__$1;
(statearr_12975_13032[(1)] = (29));

} else {
var statearr_12976_13033 = state_12966__$1;
(statearr_12976_13033[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (4))){
var inst_12884 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
if(cljs.core.truth_(inst_12884)){
var statearr_12977_13034 = state_12966__$1;
(statearr_12977_13034[(1)] = (8));

} else {
var statearr_12978_13035 = state_12966__$1;
(statearr_12978_13035[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (15))){
var inst_12911 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
if(cljs.core.truth_(inst_12911)){
var statearr_12979_13036 = state_12966__$1;
(statearr_12979_13036[(1)] = (19));

} else {
var statearr_12980_13037 = state_12966__$1;
(statearr_12980_13037[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (21))){
var inst_12916 = (state_12966[(12)]);
var inst_12916__$1 = (state_12966[(2)]);
var inst_12917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12916__$1,cljs.core.cst$kw$solos);
var inst_12918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12916__$1,cljs.core.cst$kw$mutes);
var inst_12919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12916__$1,cljs.core.cst$kw$reads);
var state_12966__$1 = (function (){var statearr_12981 = state_12966;
(statearr_12981[(12)] = inst_12916__$1);

(statearr_12981[(13)] = inst_12918);

(statearr_12981[(11)] = inst_12917);

return statearr_12981;
})();
return cljs.core.async.ioc_alts_BANG_(state_12966__$1,(22),inst_12919);
} else {
if((state_val_12967 === (31))){
var inst_12948 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
if(cljs.core.truth_(inst_12948)){
var statearr_12982_13038 = state_12966__$1;
(statearr_12982_13038[(1)] = (32));

} else {
var statearr_12983_13039 = state_12966__$1;
(statearr_12983_13039[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (32))){
var inst_12925 = (state_12966[(14)]);
var state_12966__$1 = state_12966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12966__$1,(35),out,inst_12925);
} else {
if((state_val_12967 === (33))){
var inst_12916 = (state_12966[(12)]);
var inst_12893 = inst_12916;
var state_12966__$1 = (function (){var statearr_12984 = state_12966;
(statearr_12984[(7)] = inst_12893);

return statearr_12984;
})();
var statearr_12985_13040 = state_12966__$1;
(statearr_12985_13040[(2)] = null);

(statearr_12985_13040[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (13))){
var inst_12893 = (state_12966[(7)]);
var inst_12900 = inst_12893.cljs$lang$protocol_mask$partition0$;
var inst_12901 = (inst_12900 & (64));
var inst_12902 = inst_12893.cljs$core$ISeq$;
var inst_12903 = (cljs.core.PROTOCOL_SENTINEL === inst_12902);
var inst_12904 = ((inst_12901) || (inst_12903));
var state_12966__$1 = state_12966;
if(cljs.core.truth_(inst_12904)){
var statearr_12986_13041 = state_12966__$1;
(statearr_12986_13041[(1)] = (16));

} else {
var statearr_12987_13042 = state_12966__$1;
(statearr_12987_13042[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (22))){
var inst_12926 = (state_12966[(9)]);
var inst_12925 = (state_12966[(14)]);
var inst_12924 = (state_12966[(2)]);
var inst_12925__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12924,(0),null);
var inst_12926__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12924,(1),null);
var inst_12927 = (inst_12925__$1 == null);
var inst_12928 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12926__$1,change);
var inst_12929 = ((inst_12927) || (inst_12928));
var state_12966__$1 = (function (){var statearr_12988 = state_12966;
(statearr_12988[(9)] = inst_12926__$1);

(statearr_12988[(14)] = inst_12925__$1);

return statearr_12988;
})();
if(cljs.core.truth_(inst_12929)){
var statearr_12989_13043 = state_12966__$1;
(statearr_12989_13043[(1)] = (23));

} else {
var statearr_12990_13044 = state_12966__$1;
(statearr_12990_13044[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (36))){
var inst_12916 = (state_12966[(12)]);
var inst_12893 = inst_12916;
var state_12966__$1 = (function (){var statearr_12991 = state_12966;
(statearr_12991[(7)] = inst_12893);

return statearr_12991;
})();
var statearr_12992_13045 = state_12966__$1;
(statearr_12992_13045[(2)] = null);

(statearr_12992_13045[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (29))){
var inst_12940 = (state_12966[(10)]);
var state_12966__$1 = state_12966;
var statearr_12993_13046 = state_12966__$1;
(statearr_12993_13046[(2)] = inst_12940);

(statearr_12993_13046[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (6))){
var state_12966__$1 = state_12966;
var statearr_12994_13047 = state_12966__$1;
(statearr_12994_13047[(2)] = false);

(statearr_12994_13047[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (28))){
var inst_12936 = (state_12966[(2)]);
var inst_12937 = calc_state();
var inst_12893 = inst_12937;
var state_12966__$1 = (function (){var statearr_12995 = state_12966;
(statearr_12995[(7)] = inst_12893);

(statearr_12995[(15)] = inst_12936);

return statearr_12995;
})();
var statearr_12996_13048 = state_12966__$1;
(statearr_12996_13048[(2)] = null);

(statearr_12996_13048[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (25))){
var inst_12962 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
var statearr_12997_13049 = state_12966__$1;
(statearr_12997_13049[(2)] = inst_12962);

(statearr_12997_13049[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (34))){
var inst_12960 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
var statearr_12998_13050 = state_12966__$1;
(statearr_12998_13050[(2)] = inst_12960);

(statearr_12998_13050[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (17))){
var state_12966__$1 = state_12966;
var statearr_12999_13051 = state_12966__$1;
(statearr_12999_13051[(2)] = false);

(statearr_12999_13051[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (3))){
var state_12966__$1 = state_12966;
var statearr_13000_13052 = state_12966__$1;
(statearr_13000_13052[(2)] = false);

(statearr_13000_13052[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (12))){
var inst_12964 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12966__$1,inst_12964);
} else {
if((state_val_12967 === (2))){
var inst_12868 = (state_12966[(8)]);
var inst_12873 = inst_12868.cljs$lang$protocol_mask$partition0$;
var inst_12874 = (inst_12873 & (64));
var inst_12875 = inst_12868.cljs$core$ISeq$;
var inst_12876 = (cljs.core.PROTOCOL_SENTINEL === inst_12875);
var inst_12877 = ((inst_12874) || (inst_12876));
var state_12966__$1 = state_12966;
if(cljs.core.truth_(inst_12877)){
var statearr_13001_13053 = state_12966__$1;
(statearr_13001_13053[(1)] = (5));

} else {
var statearr_13002_13054 = state_12966__$1;
(statearr_13002_13054[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (23))){
var inst_12925 = (state_12966[(14)]);
var inst_12931 = (inst_12925 == null);
var state_12966__$1 = state_12966;
if(cljs.core.truth_(inst_12931)){
var statearr_13003_13055 = state_12966__$1;
(statearr_13003_13055[(1)] = (26));

} else {
var statearr_13004_13056 = state_12966__$1;
(statearr_13004_13056[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (35))){
var inst_12951 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
if(cljs.core.truth_(inst_12951)){
var statearr_13005_13057 = state_12966__$1;
(statearr_13005_13057[(1)] = (36));

} else {
var statearr_13006_13058 = state_12966__$1;
(statearr_13006_13058[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (19))){
var inst_12893 = (state_12966[(7)]);
var inst_12913 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12893);
var state_12966__$1 = state_12966;
var statearr_13007_13059 = state_12966__$1;
(statearr_13007_13059[(2)] = inst_12913);

(statearr_13007_13059[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (11))){
var inst_12893 = (state_12966[(7)]);
var inst_12897 = (inst_12893 == null);
var inst_12898 = cljs.core.not(inst_12897);
var state_12966__$1 = state_12966;
if(inst_12898){
var statearr_13008_13060 = state_12966__$1;
(statearr_13008_13060[(1)] = (13));

} else {
var statearr_13009_13061 = state_12966__$1;
(statearr_13009_13061[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (9))){
var inst_12868 = (state_12966[(8)]);
var state_12966__$1 = state_12966;
var statearr_13010_13062 = state_12966__$1;
(statearr_13010_13062[(2)] = inst_12868);

(statearr_13010_13062[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (5))){
var state_12966__$1 = state_12966;
var statearr_13011_13063 = state_12966__$1;
(statearr_13011_13063[(2)] = true);

(statearr_13011_13063[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (14))){
var state_12966__$1 = state_12966;
var statearr_13012_13064 = state_12966__$1;
(statearr_13012_13064[(2)] = false);

(statearr_13012_13064[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (26))){
var inst_12926 = (state_12966[(9)]);
var inst_12933 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_12926);
var state_12966__$1 = state_12966;
var statearr_13013_13065 = state_12966__$1;
(statearr_13013_13065[(2)] = inst_12933);

(statearr_13013_13065[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (16))){
var state_12966__$1 = state_12966;
var statearr_13014_13066 = state_12966__$1;
(statearr_13014_13066[(2)] = true);

(statearr_13014_13066[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (38))){
var inst_12956 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
var statearr_13015_13067 = state_12966__$1;
(statearr_13015_13067[(2)] = inst_12956);

(statearr_13015_13067[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (30))){
var inst_12926 = (state_12966[(9)]);
var inst_12918 = (state_12966[(13)]);
var inst_12917 = (state_12966[(11)]);
var inst_12943 = cljs.core.empty_QMARK_(inst_12917);
var inst_12944 = (inst_12918.cljs$core$IFn$_invoke$arity$1 ? inst_12918.cljs$core$IFn$_invoke$arity$1(inst_12926) : inst_12918.call(null,inst_12926));
var inst_12945 = cljs.core.not(inst_12944);
var inst_12946 = ((inst_12943) && (inst_12945));
var state_12966__$1 = state_12966;
var statearr_13016_13068 = state_12966__$1;
(statearr_13016_13068[(2)] = inst_12946);

(statearr_13016_13068[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (10))){
var inst_12868 = (state_12966[(8)]);
var inst_12889 = (state_12966[(2)]);
var inst_12890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12889,cljs.core.cst$kw$solos);
var inst_12891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12889,cljs.core.cst$kw$mutes);
var inst_12892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12889,cljs.core.cst$kw$reads);
var inst_12893 = inst_12868;
var state_12966__$1 = (function (){var statearr_13017 = state_12966;
(statearr_13017[(16)] = inst_12891);

(statearr_13017[(17)] = inst_12892);

(statearr_13017[(7)] = inst_12893);

(statearr_13017[(18)] = inst_12890);

return statearr_13017;
})();
var statearr_13018_13069 = state_12966__$1;
(statearr_13018_13069[(2)] = null);

(statearr_13018_13069[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (18))){
var inst_12908 = (state_12966[(2)]);
var state_12966__$1 = state_12966;
var statearr_13019_13070 = state_12966__$1;
(statearr_13019_13070[(2)] = inst_12908);

(statearr_13019_13070[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (37))){
var state_12966__$1 = state_12966;
var statearr_13020_13071 = state_12966__$1;
(statearr_13020_13071[(2)] = null);

(statearr_13020_13071[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12967 === (8))){
var inst_12868 = (state_12966[(8)]);
var inst_12886 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_12868);
var state_12966__$1 = state_12966;
var statearr_13021_13072 = state_12966__$1;
(statearr_13021_13072[(2)] = inst_12886);

(statearr_13021_13072[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11965__auto___13026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11858__auto__,c__11965__auto___13026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__11859__auto__ = null;
var cljs$core$async$mix_$_state_machine__11859__auto____0 = (function (){
var statearr_13022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13022[(0)] = cljs$core$async$mix_$_state_machine__11859__auto__);

(statearr_13022[(1)] = (1));

return statearr_13022;
});
var cljs$core$async$mix_$_state_machine__11859__auto____1 = (function (state_12966){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_12966);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e13023){if((e13023 instanceof Object)){
var ex__11862__auto__ = e13023;
var statearr_13024_13073 = state_12966;
(statearr_13024_13073[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12966);

return cljs.core.cst$kw$recur;
} else {
throw e13023;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__13074 = state_12966;
state_12966 = G__13074;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11859__auto__ = function(state_12966){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11859__auto____1.call(this,state_12966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11859__auto____0;
cljs$core$async$mix_$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11859__auto____1;
return cljs$core$async$mix_$_state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto___13026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11967__auto__ = (function (){var statearr_13025 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_13025[(6)] = c__11965__auto___13026);

return statearr_13025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto___13026,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__13076 = arguments.length;
switch (G__13076) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__13080 = arguments.length;
switch (G__13080) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__13078_SHARP_){
if(cljs.core.truth_((p1__13078_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13078_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13078_SHARP_.call(null,topic)))){
return p1__13078_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13078_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13081 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13081 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13082){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13082 = meta13082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13083,meta13082__$1){
var self__ = this;
var _13083__$1 = this;
return (new cljs.core.async.t_cljs$core$async13081(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13082__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13081.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13083){
var self__ = this;
var _13083__$1 = this;
return self__.meta13082;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13081.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13081.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13081.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13081.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13081.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13081.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13081.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13081.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta13082], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13081.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13081";

cljs.core.async.t_cljs$core$async13081.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async13081");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13081.
 */
cljs.core.async.__GT_t_cljs$core$async13081 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13081(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13082){
return (new cljs.core.async.t_cljs$core$async13081(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13082));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13081(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11965__auto___13201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto___13201,mults,ensure_mult,p){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto___13201,mults,ensure_mult,p){
return (function (state_13155){
var state_val_13156 = (state_13155[(1)]);
if((state_val_13156 === (7))){
var inst_13151 = (state_13155[(2)]);
var state_13155__$1 = state_13155;
var statearr_13157_13202 = state_13155__$1;
(statearr_13157_13202[(2)] = inst_13151);

(statearr_13157_13202[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (20))){
var state_13155__$1 = state_13155;
var statearr_13158_13203 = state_13155__$1;
(statearr_13158_13203[(2)] = null);

(statearr_13158_13203[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (1))){
var state_13155__$1 = state_13155;
var statearr_13159_13204 = state_13155__$1;
(statearr_13159_13204[(2)] = null);

(statearr_13159_13204[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (24))){
var inst_13134 = (state_13155[(7)]);
var inst_13143 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_13134);
var state_13155__$1 = state_13155;
var statearr_13160_13205 = state_13155__$1;
(statearr_13160_13205[(2)] = inst_13143);

(statearr_13160_13205[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (4))){
var inst_13086 = (state_13155[(8)]);
var inst_13086__$1 = (state_13155[(2)]);
var inst_13087 = (inst_13086__$1 == null);
var state_13155__$1 = (function (){var statearr_13161 = state_13155;
(statearr_13161[(8)] = inst_13086__$1);

return statearr_13161;
})();
if(cljs.core.truth_(inst_13087)){
var statearr_13162_13206 = state_13155__$1;
(statearr_13162_13206[(1)] = (5));

} else {
var statearr_13163_13207 = state_13155__$1;
(statearr_13163_13207[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (15))){
var inst_13128 = (state_13155[(2)]);
var state_13155__$1 = state_13155;
var statearr_13164_13208 = state_13155__$1;
(statearr_13164_13208[(2)] = inst_13128);

(statearr_13164_13208[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (21))){
var inst_13148 = (state_13155[(2)]);
var state_13155__$1 = (function (){var statearr_13165 = state_13155;
(statearr_13165[(9)] = inst_13148);

return statearr_13165;
})();
var statearr_13166_13209 = state_13155__$1;
(statearr_13166_13209[(2)] = null);

(statearr_13166_13209[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (13))){
var inst_13110 = (state_13155[(10)]);
var inst_13112 = cljs.core.chunked_seq_QMARK_(inst_13110);
var state_13155__$1 = state_13155;
if(inst_13112){
var statearr_13167_13210 = state_13155__$1;
(statearr_13167_13210[(1)] = (16));

} else {
var statearr_13168_13211 = state_13155__$1;
(statearr_13168_13211[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (22))){
var inst_13140 = (state_13155[(2)]);
var state_13155__$1 = state_13155;
if(cljs.core.truth_(inst_13140)){
var statearr_13169_13212 = state_13155__$1;
(statearr_13169_13212[(1)] = (23));

} else {
var statearr_13170_13213 = state_13155__$1;
(statearr_13170_13213[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (6))){
var inst_13086 = (state_13155[(8)]);
var inst_13136 = (state_13155[(11)]);
var inst_13134 = (state_13155[(7)]);
var inst_13134__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13086) : topic_fn.call(null,inst_13086));
var inst_13135 = cljs.core.deref(mults);
var inst_13136__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13135,inst_13134__$1);
var state_13155__$1 = (function (){var statearr_13171 = state_13155;
(statearr_13171[(11)] = inst_13136__$1);

(statearr_13171[(7)] = inst_13134__$1);

return statearr_13171;
})();
if(cljs.core.truth_(inst_13136__$1)){
var statearr_13172_13214 = state_13155__$1;
(statearr_13172_13214[(1)] = (19));

} else {
var statearr_13173_13215 = state_13155__$1;
(statearr_13173_13215[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (25))){
var inst_13145 = (state_13155[(2)]);
var state_13155__$1 = state_13155;
var statearr_13174_13216 = state_13155__$1;
(statearr_13174_13216[(2)] = inst_13145);

(statearr_13174_13216[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (17))){
var inst_13110 = (state_13155[(10)]);
var inst_13119 = cljs.core.first(inst_13110);
var inst_13120 = cljs.core.async.muxch_STAR_(inst_13119);
var inst_13121 = cljs.core.async.close_BANG_(inst_13120);
var inst_13122 = cljs.core.next(inst_13110);
var inst_13096 = inst_13122;
var inst_13097 = null;
var inst_13098 = (0);
var inst_13099 = (0);
var state_13155__$1 = (function (){var statearr_13175 = state_13155;
(statearr_13175[(12)] = inst_13096);

(statearr_13175[(13)] = inst_13097);

(statearr_13175[(14)] = inst_13121);

(statearr_13175[(15)] = inst_13098);

(statearr_13175[(16)] = inst_13099);

return statearr_13175;
})();
var statearr_13176_13217 = state_13155__$1;
(statearr_13176_13217[(2)] = null);

(statearr_13176_13217[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (3))){
var inst_13153 = (state_13155[(2)]);
var state_13155__$1 = state_13155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13155__$1,inst_13153);
} else {
if((state_val_13156 === (12))){
var inst_13130 = (state_13155[(2)]);
var state_13155__$1 = state_13155;
var statearr_13177_13218 = state_13155__$1;
(statearr_13177_13218[(2)] = inst_13130);

(statearr_13177_13218[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (2))){
var state_13155__$1 = state_13155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13155__$1,(4),ch);
} else {
if((state_val_13156 === (23))){
var state_13155__$1 = state_13155;
var statearr_13178_13219 = state_13155__$1;
(statearr_13178_13219[(2)] = null);

(statearr_13178_13219[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (19))){
var inst_13086 = (state_13155[(8)]);
var inst_13136 = (state_13155[(11)]);
var inst_13138 = cljs.core.async.muxch_STAR_(inst_13136);
var state_13155__$1 = state_13155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13155__$1,(22),inst_13138,inst_13086);
} else {
if((state_val_13156 === (11))){
var inst_13096 = (state_13155[(12)]);
var inst_13110 = (state_13155[(10)]);
var inst_13110__$1 = cljs.core.seq(inst_13096);
var state_13155__$1 = (function (){var statearr_13179 = state_13155;
(statearr_13179[(10)] = inst_13110__$1);

return statearr_13179;
})();
if(inst_13110__$1){
var statearr_13180_13220 = state_13155__$1;
(statearr_13180_13220[(1)] = (13));

} else {
var statearr_13181_13221 = state_13155__$1;
(statearr_13181_13221[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (9))){
var inst_13132 = (state_13155[(2)]);
var state_13155__$1 = state_13155;
var statearr_13182_13222 = state_13155__$1;
(statearr_13182_13222[(2)] = inst_13132);

(statearr_13182_13222[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (5))){
var inst_13093 = cljs.core.deref(mults);
var inst_13094 = cljs.core.vals(inst_13093);
var inst_13095 = cljs.core.seq(inst_13094);
var inst_13096 = inst_13095;
var inst_13097 = null;
var inst_13098 = (0);
var inst_13099 = (0);
var state_13155__$1 = (function (){var statearr_13183 = state_13155;
(statearr_13183[(12)] = inst_13096);

(statearr_13183[(13)] = inst_13097);

(statearr_13183[(15)] = inst_13098);

(statearr_13183[(16)] = inst_13099);

return statearr_13183;
})();
var statearr_13184_13223 = state_13155__$1;
(statearr_13184_13223[(2)] = null);

(statearr_13184_13223[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (14))){
var state_13155__$1 = state_13155;
var statearr_13188_13224 = state_13155__$1;
(statearr_13188_13224[(2)] = null);

(statearr_13188_13224[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (16))){
var inst_13110 = (state_13155[(10)]);
var inst_13114 = cljs.core.chunk_first(inst_13110);
var inst_13115 = cljs.core.chunk_rest(inst_13110);
var inst_13116 = cljs.core.count(inst_13114);
var inst_13096 = inst_13115;
var inst_13097 = inst_13114;
var inst_13098 = inst_13116;
var inst_13099 = (0);
var state_13155__$1 = (function (){var statearr_13189 = state_13155;
(statearr_13189[(12)] = inst_13096);

(statearr_13189[(13)] = inst_13097);

(statearr_13189[(15)] = inst_13098);

(statearr_13189[(16)] = inst_13099);

return statearr_13189;
})();
var statearr_13190_13225 = state_13155__$1;
(statearr_13190_13225[(2)] = null);

(statearr_13190_13225[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (10))){
var inst_13096 = (state_13155[(12)]);
var inst_13097 = (state_13155[(13)]);
var inst_13098 = (state_13155[(15)]);
var inst_13099 = (state_13155[(16)]);
var inst_13104 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13097,inst_13099);
var inst_13105 = cljs.core.async.muxch_STAR_(inst_13104);
var inst_13106 = cljs.core.async.close_BANG_(inst_13105);
var inst_13107 = (inst_13099 + (1));
var tmp13185 = inst_13096;
var tmp13186 = inst_13097;
var tmp13187 = inst_13098;
var inst_13096__$1 = tmp13185;
var inst_13097__$1 = tmp13186;
var inst_13098__$1 = tmp13187;
var inst_13099__$1 = inst_13107;
var state_13155__$1 = (function (){var statearr_13191 = state_13155;
(statearr_13191[(12)] = inst_13096__$1);

(statearr_13191[(13)] = inst_13097__$1);

(statearr_13191[(15)] = inst_13098__$1);

(statearr_13191[(17)] = inst_13106);

(statearr_13191[(16)] = inst_13099__$1);

return statearr_13191;
})();
var statearr_13192_13226 = state_13155__$1;
(statearr_13192_13226[(2)] = null);

(statearr_13192_13226[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (18))){
var inst_13125 = (state_13155[(2)]);
var state_13155__$1 = state_13155;
var statearr_13193_13227 = state_13155__$1;
(statearr_13193_13227[(2)] = inst_13125);

(statearr_13193_13227[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13156 === (8))){
var inst_13098 = (state_13155[(15)]);
var inst_13099 = (state_13155[(16)]);
var inst_13101 = (inst_13099 < inst_13098);
var inst_13102 = inst_13101;
var state_13155__$1 = state_13155;
if(cljs.core.truth_(inst_13102)){
var statearr_13194_13228 = state_13155__$1;
(statearr_13194_13228[(1)] = (10));

} else {
var statearr_13195_13229 = state_13155__$1;
(statearr_13195_13229[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11965__auto___13201,mults,ensure_mult,p))
;
return ((function (switch__11858__auto__,c__11965__auto___13201,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__11859__auto__ = null;
var cljs$core$async$state_machine__11859__auto____0 = (function (){
var statearr_13196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13196[(0)] = cljs$core$async$state_machine__11859__auto__);

(statearr_13196[(1)] = (1));

return statearr_13196;
});
var cljs$core$async$state_machine__11859__auto____1 = (function (state_13155){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_13155);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e13197){if((e13197 instanceof Object)){
var ex__11862__auto__ = e13197;
var statearr_13198_13230 = state_13155;
(statearr_13198_13230[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13155);

return cljs.core.cst$kw$recur;
} else {
throw e13197;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__13231 = state_13155;
state_13155 = G__13231;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$state_machine__11859__auto__ = function(state_13155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11859__auto____1.call(this,state_13155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11859__auto____0;
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11859__auto____1;
return cljs$core$async$state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto___13201,mults,ensure_mult,p))
})();
var state__11967__auto__ = (function (){var statearr_13199 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_13199[(6)] = c__11965__auto___13201);

return statearr_13199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto___13201,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__13233 = arguments.length;
switch (G__13233) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__13236 = arguments.length;
switch (G__13236) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__13239 = arguments.length;
switch (G__13239) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__11965__auto___13306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto___13306,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto___13306,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13278){
var state_val_13279 = (state_13278[(1)]);
if((state_val_13279 === (7))){
var state_13278__$1 = state_13278;
var statearr_13280_13307 = state_13278__$1;
(statearr_13280_13307[(2)] = null);

(statearr_13280_13307[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13279 === (1))){
var state_13278__$1 = state_13278;
var statearr_13281_13308 = state_13278__$1;
(statearr_13281_13308[(2)] = null);

(statearr_13281_13308[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13279 === (4))){
var inst_13242 = (state_13278[(7)]);
var inst_13244 = (inst_13242 < cnt);
var state_13278__$1 = state_13278;
if(cljs.core.truth_(inst_13244)){
var statearr_13282_13309 = state_13278__$1;
(statearr_13282_13309[(1)] = (6));

} else {
var statearr_13283_13310 = state_13278__$1;
(statearr_13283_13310[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13279 === (15))){
var inst_13274 = (state_13278[(2)]);
var state_13278__$1 = state_13278;
var statearr_13284_13311 = state_13278__$1;
(statearr_13284_13311[(2)] = inst_13274);

(statearr_13284_13311[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13279 === (13))){
var inst_13267 = cljs.core.async.close_BANG_(out);
var state_13278__$1 = state_13278;
var statearr_13285_13312 = state_13278__$1;
(statearr_13285_13312[(2)] = inst_13267);

(statearr_13285_13312[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13279 === (6))){
var state_13278__$1 = state_13278;
var statearr_13286_13313 = state_13278__$1;
(statearr_13286_13313[(2)] = null);

(statearr_13286_13313[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13279 === (3))){
var inst_13276 = (state_13278[(2)]);
var state_13278__$1 = state_13278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13278__$1,inst_13276);
} else {
if((state_val_13279 === (12))){
var inst_13264 = (state_13278[(8)]);
var inst_13264__$1 = (state_13278[(2)]);
var inst_13265 = cljs.core.some(cljs.core.nil_QMARK_,inst_13264__$1);
var state_13278__$1 = (function (){var statearr_13287 = state_13278;
(statearr_13287[(8)] = inst_13264__$1);

return statearr_13287;
})();
if(cljs.core.truth_(inst_13265)){
var statearr_13288_13314 = state_13278__$1;
(statearr_13288_13314[(1)] = (13));

} else {
var statearr_13289_13315 = state_13278__$1;
(statearr_13289_13315[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13279 === (2))){
var inst_13241 = cljs.core.reset_BANG_(dctr,cnt);
var inst_13242 = (0);
var state_13278__$1 = (function (){var statearr_13290 = state_13278;
(statearr_13290[(9)] = inst_13241);

(statearr_13290[(7)] = inst_13242);

return statearr_13290;
})();
var statearr_13291_13316 = state_13278__$1;
(statearr_13291_13316[(2)] = null);

(statearr_13291_13316[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13279 === (11))){
var inst_13242 = (state_13278[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_13278,(10),Object,null,(9));
var inst_13251 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_13242) : chs__$1.call(null,inst_13242));
var inst_13252 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_13242) : done.call(null,inst_13242));
var inst_13253 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_13251,inst_13252);
var state_13278__$1 = state_13278;
var statearr_13292_13317 = state_13278__$1;
(statearr_13292_13317[(2)] = inst_13253);


cljs.core.async.impl.ioc_helpers.process_exception(state_13278__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_13279 === (9))){
var inst_13242 = (state_13278[(7)]);
var inst_13255 = (state_13278[(2)]);
var inst_13256 = (inst_13242 + (1));
var inst_13242__$1 = inst_13256;
var state_13278__$1 = (function (){var statearr_13293 = state_13278;
(statearr_13293[(10)] = inst_13255);

(statearr_13293[(7)] = inst_13242__$1);

return statearr_13293;
})();
var statearr_13294_13318 = state_13278__$1;
(statearr_13294_13318[(2)] = null);

(statearr_13294_13318[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13279 === (5))){
var inst_13262 = (state_13278[(2)]);
var state_13278__$1 = (function (){var statearr_13295 = state_13278;
(statearr_13295[(11)] = inst_13262);

return statearr_13295;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13278__$1,(12),dchan);
} else {
if((state_val_13279 === (14))){
var inst_13264 = (state_13278[(8)]);
var inst_13269 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_13264);
var state_13278__$1 = state_13278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13278__$1,(16),out,inst_13269);
} else {
if((state_val_13279 === (16))){
var inst_13271 = (state_13278[(2)]);
var state_13278__$1 = (function (){var statearr_13296 = state_13278;
(statearr_13296[(12)] = inst_13271);

return statearr_13296;
})();
var statearr_13297_13319 = state_13278__$1;
(statearr_13297_13319[(2)] = null);

(statearr_13297_13319[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13279 === (10))){
var inst_13246 = (state_13278[(2)]);
var inst_13247 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_13278__$1 = (function (){var statearr_13298 = state_13278;
(statearr_13298[(13)] = inst_13246);

return statearr_13298;
})();
var statearr_13299_13320 = state_13278__$1;
(statearr_13299_13320[(2)] = inst_13247);


cljs.core.async.impl.ioc_helpers.process_exception(state_13278__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_13279 === (8))){
var inst_13260 = (state_13278[(2)]);
var state_13278__$1 = state_13278;
var statearr_13300_13321 = state_13278__$1;
(statearr_13300_13321[(2)] = inst_13260);

(statearr_13300_13321[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11965__auto___13306,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11858__auto__,c__11965__auto___13306,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__11859__auto__ = null;
var cljs$core$async$state_machine__11859__auto____0 = (function (){
var statearr_13301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13301[(0)] = cljs$core$async$state_machine__11859__auto__);

(statearr_13301[(1)] = (1));

return statearr_13301;
});
var cljs$core$async$state_machine__11859__auto____1 = (function (state_13278){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_13278);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e13302){if((e13302 instanceof Object)){
var ex__11862__auto__ = e13302;
var statearr_13303_13322 = state_13278;
(statearr_13303_13322[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13278);

return cljs.core.cst$kw$recur;
} else {
throw e13302;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__13323 = state_13278;
state_13278 = G__13323;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$state_machine__11859__auto__ = function(state_13278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11859__auto____1.call(this,state_13278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11859__auto____0;
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11859__auto____1;
return cljs$core$async$state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto___13306,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11967__auto__ = (function (){var statearr_13304 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_13304[(6)] = c__11965__auto___13306);

return statearr_13304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto___13306,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__13326 = arguments.length;
switch (G__13326) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11965__auto___13380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto___13380,out){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto___13380,out){
return (function (state_13358){
var state_val_13359 = (state_13358[(1)]);
if((state_val_13359 === (7))){
var inst_13337 = (state_13358[(7)]);
var inst_13338 = (state_13358[(8)]);
var inst_13337__$1 = (state_13358[(2)]);
var inst_13338__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13337__$1,(0),null);
var inst_13339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13337__$1,(1),null);
var inst_13340 = (inst_13338__$1 == null);
var state_13358__$1 = (function (){var statearr_13360 = state_13358;
(statearr_13360[(7)] = inst_13337__$1);

(statearr_13360[(8)] = inst_13338__$1);

(statearr_13360[(9)] = inst_13339);

return statearr_13360;
})();
if(cljs.core.truth_(inst_13340)){
var statearr_13361_13381 = state_13358__$1;
(statearr_13361_13381[(1)] = (8));

} else {
var statearr_13362_13382 = state_13358__$1;
(statearr_13362_13382[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13359 === (1))){
var inst_13327 = cljs.core.vec(chs);
var inst_13328 = inst_13327;
var state_13358__$1 = (function (){var statearr_13363 = state_13358;
(statearr_13363[(10)] = inst_13328);

return statearr_13363;
})();
var statearr_13364_13383 = state_13358__$1;
(statearr_13364_13383[(2)] = null);

(statearr_13364_13383[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13359 === (4))){
var inst_13328 = (state_13358[(10)]);
var state_13358__$1 = state_13358;
return cljs.core.async.ioc_alts_BANG_(state_13358__$1,(7),inst_13328);
} else {
if((state_val_13359 === (6))){
var inst_13354 = (state_13358[(2)]);
var state_13358__$1 = state_13358;
var statearr_13365_13384 = state_13358__$1;
(statearr_13365_13384[(2)] = inst_13354);

(statearr_13365_13384[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13359 === (3))){
var inst_13356 = (state_13358[(2)]);
var state_13358__$1 = state_13358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13358__$1,inst_13356);
} else {
if((state_val_13359 === (2))){
var inst_13328 = (state_13358[(10)]);
var inst_13330 = cljs.core.count(inst_13328);
var inst_13331 = (inst_13330 > (0));
var state_13358__$1 = state_13358;
if(cljs.core.truth_(inst_13331)){
var statearr_13367_13385 = state_13358__$1;
(statearr_13367_13385[(1)] = (4));

} else {
var statearr_13368_13386 = state_13358__$1;
(statearr_13368_13386[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13359 === (11))){
var inst_13328 = (state_13358[(10)]);
var inst_13347 = (state_13358[(2)]);
var tmp13366 = inst_13328;
var inst_13328__$1 = tmp13366;
var state_13358__$1 = (function (){var statearr_13369 = state_13358;
(statearr_13369[(10)] = inst_13328__$1);

(statearr_13369[(11)] = inst_13347);

return statearr_13369;
})();
var statearr_13370_13387 = state_13358__$1;
(statearr_13370_13387[(2)] = null);

(statearr_13370_13387[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13359 === (9))){
var inst_13338 = (state_13358[(8)]);
var state_13358__$1 = state_13358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13358__$1,(11),out,inst_13338);
} else {
if((state_val_13359 === (5))){
var inst_13352 = cljs.core.async.close_BANG_(out);
var state_13358__$1 = state_13358;
var statearr_13371_13388 = state_13358__$1;
(statearr_13371_13388[(2)] = inst_13352);

(statearr_13371_13388[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13359 === (10))){
var inst_13350 = (state_13358[(2)]);
var state_13358__$1 = state_13358;
var statearr_13372_13389 = state_13358__$1;
(statearr_13372_13389[(2)] = inst_13350);

(statearr_13372_13389[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13359 === (8))){
var inst_13337 = (state_13358[(7)]);
var inst_13338 = (state_13358[(8)]);
var inst_13328 = (state_13358[(10)]);
var inst_13339 = (state_13358[(9)]);
var inst_13342 = (function (){var cs = inst_13328;
var vec__13333 = inst_13337;
var v = inst_13338;
var c = inst_13339;
return ((function (cs,vec__13333,v,c,inst_13337,inst_13338,inst_13328,inst_13339,state_val_13359,c__11965__auto___13380,out){
return (function (p1__13324_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__13324_SHARP_);
});
;})(cs,vec__13333,v,c,inst_13337,inst_13338,inst_13328,inst_13339,state_val_13359,c__11965__auto___13380,out))
})();
var inst_13343 = cljs.core.filterv(inst_13342,inst_13328);
var inst_13328__$1 = inst_13343;
var state_13358__$1 = (function (){var statearr_13373 = state_13358;
(statearr_13373[(10)] = inst_13328__$1);

return statearr_13373;
})();
var statearr_13374_13390 = state_13358__$1;
(statearr_13374_13390[(2)] = null);

(statearr_13374_13390[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11965__auto___13380,out))
;
return ((function (switch__11858__auto__,c__11965__auto___13380,out){
return (function() {
var cljs$core$async$state_machine__11859__auto__ = null;
var cljs$core$async$state_machine__11859__auto____0 = (function (){
var statearr_13375 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13375[(0)] = cljs$core$async$state_machine__11859__auto__);

(statearr_13375[(1)] = (1));

return statearr_13375;
});
var cljs$core$async$state_machine__11859__auto____1 = (function (state_13358){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_13358);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e13376){if((e13376 instanceof Object)){
var ex__11862__auto__ = e13376;
var statearr_13377_13391 = state_13358;
(statearr_13377_13391[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13358);

return cljs.core.cst$kw$recur;
} else {
throw e13376;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__13392 = state_13358;
state_13358 = G__13392;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$state_machine__11859__auto__ = function(state_13358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11859__auto____1.call(this,state_13358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11859__auto____0;
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11859__auto____1;
return cljs$core$async$state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto___13380,out))
})();
var state__11967__auto__ = (function (){var statearr_13378 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_13378[(6)] = c__11965__auto___13380);

return statearr_13378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto___13380,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__13394 = arguments.length;
switch (G__13394) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11965__auto___13439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto___13439,out){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto___13439,out){
return (function (state_13418){
var state_val_13419 = (state_13418[(1)]);
if((state_val_13419 === (7))){
var inst_13400 = (state_13418[(7)]);
var inst_13400__$1 = (state_13418[(2)]);
var inst_13401 = (inst_13400__$1 == null);
var inst_13402 = cljs.core.not(inst_13401);
var state_13418__$1 = (function (){var statearr_13420 = state_13418;
(statearr_13420[(7)] = inst_13400__$1);

return statearr_13420;
})();
if(inst_13402){
var statearr_13421_13440 = state_13418__$1;
(statearr_13421_13440[(1)] = (8));

} else {
var statearr_13422_13441 = state_13418__$1;
(statearr_13422_13441[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13419 === (1))){
var inst_13395 = (0);
var state_13418__$1 = (function (){var statearr_13423 = state_13418;
(statearr_13423[(8)] = inst_13395);

return statearr_13423;
})();
var statearr_13424_13442 = state_13418__$1;
(statearr_13424_13442[(2)] = null);

(statearr_13424_13442[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13419 === (4))){
var state_13418__$1 = state_13418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13418__$1,(7),ch);
} else {
if((state_val_13419 === (6))){
var inst_13413 = (state_13418[(2)]);
var state_13418__$1 = state_13418;
var statearr_13425_13443 = state_13418__$1;
(statearr_13425_13443[(2)] = inst_13413);

(statearr_13425_13443[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13419 === (3))){
var inst_13415 = (state_13418[(2)]);
var inst_13416 = cljs.core.async.close_BANG_(out);
var state_13418__$1 = (function (){var statearr_13426 = state_13418;
(statearr_13426[(9)] = inst_13415);

return statearr_13426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13418__$1,inst_13416);
} else {
if((state_val_13419 === (2))){
var inst_13395 = (state_13418[(8)]);
var inst_13397 = (inst_13395 < n);
var state_13418__$1 = state_13418;
if(cljs.core.truth_(inst_13397)){
var statearr_13427_13444 = state_13418__$1;
(statearr_13427_13444[(1)] = (4));

} else {
var statearr_13428_13445 = state_13418__$1;
(statearr_13428_13445[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13419 === (11))){
var inst_13395 = (state_13418[(8)]);
var inst_13405 = (state_13418[(2)]);
var inst_13406 = (inst_13395 + (1));
var inst_13395__$1 = inst_13406;
var state_13418__$1 = (function (){var statearr_13429 = state_13418;
(statearr_13429[(8)] = inst_13395__$1);

(statearr_13429[(10)] = inst_13405);

return statearr_13429;
})();
var statearr_13430_13446 = state_13418__$1;
(statearr_13430_13446[(2)] = null);

(statearr_13430_13446[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13419 === (9))){
var state_13418__$1 = state_13418;
var statearr_13431_13447 = state_13418__$1;
(statearr_13431_13447[(2)] = null);

(statearr_13431_13447[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13419 === (5))){
var state_13418__$1 = state_13418;
var statearr_13432_13448 = state_13418__$1;
(statearr_13432_13448[(2)] = null);

(statearr_13432_13448[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13419 === (10))){
var inst_13410 = (state_13418[(2)]);
var state_13418__$1 = state_13418;
var statearr_13433_13449 = state_13418__$1;
(statearr_13433_13449[(2)] = inst_13410);

(statearr_13433_13449[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13419 === (8))){
var inst_13400 = (state_13418[(7)]);
var state_13418__$1 = state_13418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13418__$1,(11),out,inst_13400);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11965__auto___13439,out))
;
return ((function (switch__11858__auto__,c__11965__auto___13439,out){
return (function() {
var cljs$core$async$state_machine__11859__auto__ = null;
var cljs$core$async$state_machine__11859__auto____0 = (function (){
var statearr_13434 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13434[(0)] = cljs$core$async$state_machine__11859__auto__);

(statearr_13434[(1)] = (1));

return statearr_13434;
});
var cljs$core$async$state_machine__11859__auto____1 = (function (state_13418){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_13418);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e13435){if((e13435 instanceof Object)){
var ex__11862__auto__ = e13435;
var statearr_13436_13450 = state_13418;
(statearr_13436_13450[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13418);

return cljs.core.cst$kw$recur;
} else {
throw e13435;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__13451 = state_13418;
state_13418 = G__13451;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$state_machine__11859__auto__ = function(state_13418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11859__auto____1.call(this,state_13418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11859__auto____0;
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11859__auto____1;
return cljs$core$async$state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto___13439,out))
})();
var state__11967__auto__ = (function (){var statearr_13437 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_13437[(6)] = c__11965__auto___13439);

return statearr_13437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto___13439,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13453 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13453 = (function (f,ch,meta13454){
this.f = f;
this.ch = ch;
this.meta13454 = meta13454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13455,meta13454__$1){
var self__ = this;
var _13455__$1 = this;
return (new cljs.core.async.t_cljs$core$async13453(self__.f,self__.ch,meta13454__$1));
});

cljs.core.async.t_cljs$core$async13453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13455){
var self__ = this;
var _13455__$1 = this;
return self__.meta13454;
});

cljs.core.async.t_cljs$core$async13453.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13453.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async13453.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async13453.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13453.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13456 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13456 = (function (f,ch,meta13454,_,fn1,meta13457){
this.f = f;
this.ch = ch;
this.meta13454 = meta13454;
this._ = _;
this.fn1 = fn1;
this.meta13457 = meta13457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13458,meta13457__$1){
var self__ = this;
var _13458__$1 = this;
return (new cljs.core.async.t_cljs$core$async13456(self__.f,self__.ch,self__.meta13454,self__._,self__.fn1,meta13457__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async13456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13458){
var self__ = this;
var _13458__$1 = this;
return self__.meta13457;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13456.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13456.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13456.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13456.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13452_SHARP_){
var G__13459 = (((p1__13452_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__13452_SHARP_) : self__.f.call(null,p1__13452_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__13459) : f1.call(null,G__13459));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async13456.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta13454,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async13453], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta13457], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13456.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13456";

cljs.core.async.t_cljs$core$async13456.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async13456");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13456.
 */
cljs.core.async.__GT_t_cljs$core$async13456 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13456(f__$1,ch__$1,meta13454__$1,___$2,fn1__$1,meta13457){
return (new cljs.core.async.t_cljs$core$async13456(f__$1,ch__$1,meta13454__$1,___$2,fn1__$1,meta13457));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async13456(self__.f,self__.ch,self__.meta13454,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__13460 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__13460) : self__.f.call(null,G__13460));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async13453.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13453.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async13453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta13454], null);
});

cljs.core.async.t_cljs$core$async13453.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13453";

cljs.core.async.t_cljs$core$async13453.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async13453");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13453.
 */
cljs.core.async.__GT_t_cljs$core$async13453 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13453(f__$1,ch__$1,meta13454){
return (new cljs.core.async.t_cljs$core$async13453(f__$1,ch__$1,meta13454));
});

}

return (new cljs.core.async.t_cljs$core$async13453(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13461 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13461 = (function (f,ch,meta13462){
this.f = f;
this.ch = ch;
this.meta13462 = meta13462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13463,meta13462__$1){
var self__ = this;
var _13463__$1 = this;
return (new cljs.core.async.t_cljs$core$async13461(self__.f,self__.ch,meta13462__$1));
});

cljs.core.async.t_cljs$core$async13461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13463){
var self__ = this;
var _13463__$1 = this;
return self__.meta13462;
});

cljs.core.async.t_cljs$core$async13461.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13461.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async13461.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13461.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13461.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13461.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async13461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta13462], null);
});

cljs.core.async.t_cljs$core$async13461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13461";

cljs.core.async.t_cljs$core$async13461.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async13461");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13461.
 */
cljs.core.async.__GT_t_cljs$core$async13461 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13461(f__$1,ch__$1,meta13462){
return (new cljs.core.async.t_cljs$core$async13461(f__$1,ch__$1,meta13462));
});

}

return (new cljs.core.async.t_cljs$core$async13461(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13464 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13464 = (function (p,ch,meta13465){
this.p = p;
this.ch = ch;
this.meta13465 = meta13465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13466,meta13465__$1){
var self__ = this;
var _13466__$1 = this;
return (new cljs.core.async.t_cljs$core$async13464(self__.p,self__.ch,meta13465__$1));
});

cljs.core.async.t_cljs$core$async13464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13466){
var self__ = this;
var _13466__$1 = this;
return self__.meta13465;
});

cljs.core.async.t_cljs$core$async13464.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13464.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async13464.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async13464.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13464.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13464.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13464.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta13465], null);
});

cljs.core.async.t_cljs$core$async13464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13464";

cljs.core.async.t_cljs$core$async13464.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async13464");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13464.
 */
cljs.core.async.__GT_t_cljs$core$async13464 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13464(p__$1,ch__$1,meta13465){
return (new cljs.core.async.t_cljs$core$async13464(p__$1,ch__$1,meta13465));
});

}

return (new cljs.core.async.t_cljs$core$async13464(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__13468 = arguments.length;
switch (G__13468) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11965__auto___13508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto___13508,out){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto___13508,out){
return (function (state_13489){
var state_val_13490 = (state_13489[(1)]);
if((state_val_13490 === (7))){
var inst_13485 = (state_13489[(2)]);
var state_13489__$1 = state_13489;
var statearr_13491_13509 = state_13489__$1;
(statearr_13491_13509[(2)] = inst_13485);

(statearr_13491_13509[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13490 === (1))){
var state_13489__$1 = state_13489;
var statearr_13492_13510 = state_13489__$1;
(statearr_13492_13510[(2)] = null);

(statearr_13492_13510[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13490 === (4))){
var inst_13471 = (state_13489[(7)]);
var inst_13471__$1 = (state_13489[(2)]);
var inst_13472 = (inst_13471__$1 == null);
var state_13489__$1 = (function (){var statearr_13493 = state_13489;
(statearr_13493[(7)] = inst_13471__$1);

return statearr_13493;
})();
if(cljs.core.truth_(inst_13472)){
var statearr_13494_13511 = state_13489__$1;
(statearr_13494_13511[(1)] = (5));

} else {
var statearr_13495_13512 = state_13489__$1;
(statearr_13495_13512[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13490 === (6))){
var inst_13471 = (state_13489[(7)]);
var inst_13476 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13471) : p.call(null,inst_13471));
var state_13489__$1 = state_13489;
if(cljs.core.truth_(inst_13476)){
var statearr_13496_13513 = state_13489__$1;
(statearr_13496_13513[(1)] = (8));

} else {
var statearr_13497_13514 = state_13489__$1;
(statearr_13497_13514[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13490 === (3))){
var inst_13487 = (state_13489[(2)]);
var state_13489__$1 = state_13489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13489__$1,inst_13487);
} else {
if((state_val_13490 === (2))){
var state_13489__$1 = state_13489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13489__$1,(4),ch);
} else {
if((state_val_13490 === (11))){
var inst_13479 = (state_13489[(2)]);
var state_13489__$1 = state_13489;
var statearr_13498_13515 = state_13489__$1;
(statearr_13498_13515[(2)] = inst_13479);

(statearr_13498_13515[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13490 === (9))){
var state_13489__$1 = state_13489;
var statearr_13499_13516 = state_13489__$1;
(statearr_13499_13516[(2)] = null);

(statearr_13499_13516[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13490 === (5))){
var inst_13474 = cljs.core.async.close_BANG_(out);
var state_13489__$1 = state_13489;
var statearr_13500_13517 = state_13489__$1;
(statearr_13500_13517[(2)] = inst_13474);

(statearr_13500_13517[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13490 === (10))){
var inst_13482 = (state_13489[(2)]);
var state_13489__$1 = (function (){var statearr_13501 = state_13489;
(statearr_13501[(8)] = inst_13482);

return statearr_13501;
})();
var statearr_13502_13518 = state_13489__$1;
(statearr_13502_13518[(2)] = null);

(statearr_13502_13518[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13490 === (8))){
var inst_13471 = (state_13489[(7)]);
var state_13489__$1 = state_13489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13489__$1,(11),out,inst_13471);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11965__auto___13508,out))
;
return ((function (switch__11858__auto__,c__11965__auto___13508,out){
return (function() {
var cljs$core$async$state_machine__11859__auto__ = null;
var cljs$core$async$state_machine__11859__auto____0 = (function (){
var statearr_13503 = [null,null,null,null,null,null,null,null,null];
(statearr_13503[(0)] = cljs$core$async$state_machine__11859__auto__);

(statearr_13503[(1)] = (1));

return statearr_13503;
});
var cljs$core$async$state_machine__11859__auto____1 = (function (state_13489){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_13489);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e13504){if((e13504 instanceof Object)){
var ex__11862__auto__ = e13504;
var statearr_13505_13519 = state_13489;
(statearr_13505_13519[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13489);

return cljs.core.cst$kw$recur;
} else {
throw e13504;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__13520 = state_13489;
state_13489 = G__13520;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$state_machine__11859__auto__ = function(state_13489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11859__auto____1.call(this,state_13489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11859__auto____0;
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11859__auto____1;
return cljs$core$async$state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto___13508,out))
})();
var state__11967__auto__ = (function (){var statearr_13506 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_13506[(6)] = c__11965__auto___13508);

return statearr_13506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto___13508,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__13522 = arguments.length;
switch (G__13522) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11965__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto__){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto__){
return (function (state_13585){
var state_val_13586 = (state_13585[(1)]);
if((state_val_13586 === (7))){
var inst_13581 = (state_13585[(2)]);
var state_13585__$1 = state_13585;
var statearr_13587_13625 = state_13585__$1;
(statearr_13587_13625[(2)] = inst_13581);

(statearr_13587_13625[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (20))){
var inst_13551 = (state_13585[(7)]);
var inst_13562 = (state_13585[(2)]);
var inst_13563 = cljs.core.next(inst_13551);
var inst_13537 = inst_13563;
var inst_13538 = null;
var inst_13539 = (0);
var inst_13540 = (0);
var state_13585__$1 = (function (){var statearr_13588 = state_13585;
(statearr_13588[(8)] = inst_13540);

(statearr_13588[(9)] = inst_13562);

(statearr_13588[(10)] = inst_13537);

(statearr_13588[(11)] = inst_13539);

(statearr_13588[(12)] = inst_13538);

return statearr_13588;
})();
var statearr_13589_13626 = state_13585__$1;
(statearr_13589_13626[(2)] = null);

(statearr_13589_13626[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (1))){
var state_13585__$1 = state_13585;
var statearr_13590_13627 = state_13585__$1;
(statearr_13590_13627[(2)] = null);

(statearr_13590_13627[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (4))){
var inst_13526 = (state_13585[(13)]);
var inst_13526__$1 = (state_13585[(2)]);
var inst_13527 = (inst_13526__$1 == null);
var state_13585__$1 = (function (){var statearr_13591 = state_13585;
(statearr_13591[(13)] = inst_13526__$1);

return statearr_13591;
})();
if(cljs.core.truth_(inst_13527)){
var statearr_13592_13628 = state_13585__$1;
(statearr_13592_13628[(1)] = (5));

} else {
var statearr_13593_13629 = state_13585__$1;
(statearr_13593_13629[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (15))){
var state_13585__$1 = state_13585;
var statearr_13597_13630 = state_13585__$1;
(statearr_13597_13630[(2)] = null);

(statearr_13597_13630[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (21))){
var state_13585__$1 = state_13585;
var statearr_13598_13631 = state_13585__$1;
(statearr_13598_13631[(2)] = null);

(statearr_13598_13631[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (13))){
var inst_13540 = (state_13585[(8)]);
var inst_13537 = (state_13585[(10)]);
var inst_13539 = (state_13585[(11)]);
var inst_13538 = (state_13585[(12)]);
var inst_13547 = (state_13585[(2)]);
var inst_13548 = (inst_13540 + (1));
var tmp13594 = inst_13537;
var tmp13595 = inst_13539;
var tmp13596 = inst_13538;
var inst_13537__$1 = tmp13594;
var inst_13538__$1 = tmp13596;
var inst_13539__$1 = tmp13595;
var inst_13540__$1 = inst_13548;
var state_13585__$1 = (function (){var statearr_13599 = state_13585;
(statearr_13599[(8)] = inst_13540__$1);

(statearr_13599[(14)] = inst_13547);

(statearr_13599[(10)] = inst_13537__$1);

(statearr_13599[(11)] = inst_13539__$1);

(statearr_13599[(12)] = inst_13538__$1);

return statearr_13599;
})();
var statearr_13600_13632 = state_13585__$1;
(statearr_13600_13632[(2)] = null);

(statearr_13600_13632[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (22))){
var state_13585__$1 = state_13585;
var statearr_13601_13633 = state_13585__$1;
(statearr_13601_13633[(2)] = null);

(statearr_13601_13633[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (6))){
var inst_13526 = (state_13585[(13)]);
var inst_13535 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13526) : f.call(null,inst_13526));
var inst_13536 = cljs.core.seq(inst_13535);
var inst_13537 = inst_13536;
var inst_13538 = null;
var inst_13539 = (0);
var inst_13540 = (0);
var state_13585__$1 = (function (){var statearr_13602 = state_13585;
(statearr_13602[(8)] = inst_13540);

(statearr_13602[(10)] = inst_13537);

(statearr_13602[(11)] = inst_13539);

(statearr_13602[(12)] = inst_13538);

return statearr_13602;
})();
var statearr_13603_13634 = state_13585__$1;
(statearr_13603_13634[(2)] = null);

(statearr_13603_13634[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (17))){
var inst_13551 = (state_13585[(7)]);
var inst_13555 = cljs.core.chunk_first(inst_13551);
var inst_13556 = cljs.core.chunk_rest(inst_13551);
var inst_13557 = cljs.core.count(inst_13555);
var inst_13537 = inst_13556;
var inst_13538 = inst_13555;
var inst_13539 = inst_13557;
var inst_13540 = (0);
var state_13585__$1 = (function (){var statearr_13604 = state_13585;
(statearr_13604[(8)] = inst_13540);

(statearr_13604[(10)] = inst_13537);

(statearr_13604[(11)] = inst_13539);

(statearr_13604[(12)] = inst_13538);

return statearr_13604;
})();
var statearr_13605_13635 = state_13585__$1;
(statearr_13605_13635[(2)] = null);

(statearr_13605_13635[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (3))){
var inst_13583 = (state_13585[(2)]);
var state_13585__$1 = state_13585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13585__$1,inst_13583);
} else {
if((state_val_13586 === (12))){
var inst_13571 = (state_13585[(2)]);
var state_13585__$1 = state_13585;
var statearr_13606_13636 = state_13585__$1;
(statearr_13606_13636[(2)] = inst_13571);

(statearr_13606_13636[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (2))){
var state_13585__$1 = state_13585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13585__$1,(4),in$);
} else {
if((state_val_13586 === (23))){
var inst_13579 = (state_13585[(2)]);
var state_13585__$1 = state_13585;
var statearr_13607_13637 = state_13585__$1;
(statearr_13607_13637[(2)] = inst_13579);

(statearr_13607_13637[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (19))){
var inst_13566 = (state_13585[(2)]);
var state_13585__$1 = state_13585;
var statearr_13608_13638 = state_13585__$1;
(statearr_13608_13638[(2)] = inst_13566);

(statearr_13608_13638[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (11))){
var inst_13551 = (state_13585[(7)]);
var inst_13537 = (state_13585[(10)]);
var inst_13551__$1 = cljs.core.seq(inst_13537);
var state_13585__$1 = (function (){var statearr_13609 = state_13585;
(statearr_13609[(7)] = inst_13551__$1);

return statearr_13609;
})();
if(inst_13551__$1){
var statearr_13610_13639 = state_13585__$1;
(statearr_13610_13639[(1)] = (14));

} else {
var statearr_13611_13640 = state_13585__$1;
(statearr_13611_13640[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (9))){
var inst_13573 = (state_13585[(2)]);
var inst_13574 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_13585__$1 = (function (){var statearr_13612 = state_13585;
(statearr_13612[(15)] = inst_13573);

return statearr_13612;
})();
if(cljs.core.truth_(inst_13574)){
var statearr_13613_13641 = state_13585__$1;
(statearr_13613_13641[(1)] = (21));

} else {
var statearr_13614_13642 = state_13585__$1;
(statearr_13614_13642[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (5))){
var inst_13529 = cljs.core.async.close_BANG_(out);
var state_13585__$1 = state_13585;
var statearr_13615_13643 = state_13585__$1;
(statearr_13615_13643[(2)] = inst_13529);

(statearr_13615_13643[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (14))){
var inst_13551 = (state_13585[(7)]);
var inst_13553 = cljs.core.chunked_seq_QMARK_(inst_13551);
var state_13585__$1 = state_13585;
if(inst_13553){
var statearr_13616_13644 = state_13585__$1;
(statearr_13616_13644[(1)] = (17));

} else {
var statearr_13617_13645 = state_13585__$1;
(statearr_13617_13645[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (16))){
var inst_13569 = (state_13585[(2)]);
var state_13585__$1 = state_13585;
var statearr_13618_13646 = state_13585__$1;
(statearr_13618_13646[(2)] = inst_13569);

(statearr_13618_13646[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (10))){
var inst_13540 = (state_13585[(8)]);
var inst_13538 = (state_13585[(12)]);
var inst_13545 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13538,inst_13540);
var state_13585__$1 = state_13585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13585__$1,(13),out,inst_13545);
} else {
if((state_val_13586 === (18))){
var inst_13551 = (state_13585[(7)]);
var inst_13560 = cljs.core.first(inst_13551);
var state_13585__$1 = state_13585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13585__$1,(20),out,inst_13560);
} else {
if((state_val_13586 === (8))){
var inst_13540 = (state_13585[(8)]);
var inst_13539 = (state_13585[(11)]);
var inst_13542 = (inst_13540 < inst_13539);
var inst_13543 = inst_13542;
var state_13585__$1 = state_13585;
if(cljs.core.truth_(inst_13543)){
var statearr_13619_13647 = state_13585__$1;
(statearr_13619_13647[(1)] = (10));

} else {
var statearr_13620_13648 = state_13585__$1;
(statearr_13620_13648[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11965__auto__))
;
return ((function (switch__11858__auto__,c__11965__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11859__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11859__auto____0 = (function (){
var statearr_13621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13621[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11859__auto__);

(statearr_13621[(1)] = (1));

return statearr_13621;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11859__auto____1 = (function (state_13585){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_13585);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e13622){if((e13622 instanceof Object)){
var ex__11862__auto__ = e13622;
var statearr_13623_13649 = state_13585;
(statearr_13623_13649[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13585);

return cljs.core.cst$kw$recur;
} else {
throw e13622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__13650 = state_13585;
state_13585 = G__13650;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11859__auto__ = function(state_13585){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11859__auto____1.call(this,state_13585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11859__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11859__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto__))
})();
var state__11967__auto__ = (function (){var statearr_13624 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_13624[(6)] = c__11965__auto__);

return statearr_13624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto__))
);

return c__11965__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13652 = arguments.length;
switch (G__13652) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__13655 = arguments.length;
switch (G__13655) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__13658 = arguments.length;
switch (G__13658) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11965__auto___13705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto___13705,out){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto___13705,out){
return (function (state_13682){
var state_val_13683 = (state_13682[(1)]);
if((state_val_13683 === (7))){
var inst_13677 = (state_13682[(2)]);
var state_13682__$1 = state_13682;
var statearr_13684_13706 = state_13682__$1;
(statearr_13684_13706[(2)] = inst_13677);

(statearr_13684_13706[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13683 === (1))){
var inst_13659 = null;
var state_13682__$1 = (function (){var statearr_13685 = state_13682;
(statearr_13685[(7)] = inst_13659);

return statearr_13685;
})();
var statearr_13686_13707 = state_13682__$1;
(statearr_13686_13707[(2)] = null);

(statearr_13686_13707[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13683 === (4))){
var inst_13662 = (state_13682[(8)]);
var inst_13662__$1 = (state_13682[(2)]);
var inst_13663 = (inst_13662__$1 == null);
var inst_13664 = cljs.core.not(inst_13663);
var state_13682__$1 = (function (){var statearr_13687 = state_13682;
(statearr_13687[(8)] = inst_13662__$1);

return statearr_13687;
})();
if(inst_13664){
var statearr_13688_13708 = state_13682__$1;
(statearr_13688_13708[(1)] = (5));

} else {
var statearr_13689_13709 = state_13682__$1;
(statearr_13689_13709[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13683 === (6))){
var state_13682__$1 = state_13682;
var statearr_13690_13710 = state_13682__$1;
(statearr_13690_13710[(2)] = null);

(statearr_13690_13710[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13683 === (3))){
var inst_13679 = (state_13682[(2)]);
var inst_13680 = cljs.core.async.close_BANG_(out);
var state_13682__$1 = (function (){var statearr_13691 = state_13682;
(statearr_13691[(9)] = inst_13679);

return statearr_13691;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13682__$1,inst_13680);
} else {
if((state_val_13683 === (2))){
var state_13682__$1 = state_13682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13682__$1,(4),ch);
} else {
if((state_val_13683 === (11))){
var inst_13662 = (state_13682[(8)]);
var inst_13671 = (state_13682[(2)]);
var inst_13659 = inst_13662;
var state_13682__$1 = (function (){var statearr_13692 = state_13682;
(statearr_13692[(10)] = inst_13671);

(statearr_13692[(7)] = inst_13659);

return statearr_13692;
})();
var statearr_13693_13711 = state_13682__$1;
(statearr_13693_13711[(2)] = null);

(statearr_13693_13711[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13683 === (9))){
var inst_13662 = (state_13682[(8)]);
var state_13682__$1 = state_13682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13682__$1,(11),out,inst_13662);
} else {
if((state_val_13683 === (5))){
var inst_13662 = (state_13682[(8)]);
var inst_13659 = (state_13682[(7)]);
var inst_13666 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13662,inst_13659);
var state_13682__$1 = state_13682;
if(inst_13666){
var statearr_13695_13712 = state_13682__$1;
(statearr_13695_13712[(1)] = (8));

} else {
var statearr_13696_13713 = state_13682__$1;
(statearr_13696_13713[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13683 === (10))){
var inst_13674 = (state_13682[(2)]);
var state_13682__$1 = state_13682;
var statearr_13697_13714 = state_13682__$1;
(statearr_13697_13714[(2)] = inst_13674);

(statearr_13697_13714[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13683 === (8))){
var inst_13659 = (state_13682[(7)]);
var tmp13694 = inst_13659;
var inst_13659__$1 = tmp13694;
var state_13682__$1 = (function (){var statearr_13698 = state_13682;
(statearr_13698[(7)] = inst_13659__$1);

return statearr_13698;
})();
var statearr_13699_13715 = state_13682__$1;
(statearr_13699_13715[(2)] = null);

(statearr_13699_13715[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11965__auto___13705,out))
;
return ((function (switch__11858__auto__,c__11965__auto___13705,out){
return (function() {
var cljs$core$async$state_machine__11859__auto__ = null;
var cljs$core$async$state_machine__11859__auto____0 = (function (){
var statearr_13700 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13700[(0)] = cljs$core$async$state_machine__11859__auto__);

(statearr_13700[(1)] = (1));

return statearr_13700;
});
var cljs$core$async$state_machine__11859__auto____1 = (function (state_13682){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_13682);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e13701){if((e13701 instanceof Object)){
var ex__11862__auto__ = e13701;
var statearr_13702_13716 = state_13682;
(statearr_13702_13716[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13682);

return cljs.core.cst$kw$recur;
} else {
throw e13701;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__13717 = state_13682;
state_13682 = G__13717;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$state_machine__11859__auto__ = function(state_13682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11859__auto____1.call(this,state_13682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11859__auto____0;
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11859__auto____1;
return cljs$core$async$state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto___13705,out))
})();
var state__11967__auto__ = (function (){var statearr_13703 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_13703[(6)] = c__11965__auto___13705);

return statearr_13703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto___13705,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__13719 = arguments.length;
switch (G__13719) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11965__auto___13785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto___13785,out){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto___13785,out){
return (function (state_13757){
var state_val_13758 = (state_13757[(1)]);
if((state_val_13758 === (7))){
var inst_13753 = (state_13757[(2)]);
var state_13757__$1 = state_13757;
var statearr_13759_13786 = state_13757__$1;
(statearr_13759_13786[(2)] = inst_13753);

(statearr_13759_13786[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13758 === (1))){
var inst_13720 = (new Array(n));
var inst_13721 = inst_13720;
var inst_13722 = (0);
var state_13757__$1 = (function (){var statearr_13760 = state_13757;
(statearr_13760[(7)] = inst_13721);

(statearr_13760[(8)] = inst_13722);

return statearr_13760;
})();
var statearr_13761_13787 = state_13757__$1;
(statearr_13761_13787[(2)] = null);

(statearr_13761_13787[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13758 === (4))){
var inst_13725 = (state_13757[(9)]);
var inst_13725__$1 = (state_13757[(2)]);
var inst_13726 = (inst_13725__$1 == null);
var inst_13727 = cljs.core.not(inst_13726);
var state_13757__$1 = (function (){var statearr_13762 = state_13757;
(statearr_13762[(9)] = inst_13725__$1);

return statearr_13762;
})();
if(inst_13727){
var statearr_13763_13788 = state_13757__$1;
(statearr_13763_13788[(1)] = (5));

} else {
var statearr_13764_13789 = state_13757__$1;
(statearr_13764_13789[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13758 === (15))){
var inst_13747 = (state_13757[(2)]);
var state_13757__$1 = state_13757;
var statearr_13765_13790 = state_13757__$1;
(statearr_13765_13790[(2)] = inst_13747);

(statearr_13765_13790[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13758 === (13))){
var state_13757__$1 = state_13757;
var statearr_13766_13791 = state_13757__$1;
(statearr_13766_13791[(2)] = null);

(statearr_13766_13791[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13758 === (6))){
var inst_13722 = (state_13757[(8)]);
var inst_13743 = (inst_13722 > (0));
var state_13757__$1 = state_13757;
if(cljs.core.truth_(inst_13743)){
var statearr_13767_13792 = state_13757__$1;
(statearr_13767_13792[(1)] = (12));

} else {
var statearr_13768_13793 = state_13757__$1;
(statearr_13768_13793[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13758 === (3))){
var inst_13755 = (state_13757[(2)]);
var state_13757__$1 = state_13757;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13757__$1,inst_13755);
} else {
if((state_val_13758 === (12))){
var inst_13721 = (state_13757[(7)]);
var inst_13745 = cljs.core.vec(inst_13721);
var state_13757__$1 = state_13757;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13757__$1,(15),out,inst_13745);
} else {
if((state_val_13758 === (2))){
var state_13757__$1 = state_13757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13757__$1,(4),ch);
} else {
if((state_val_13758 === (11))){
var inst_13737 = (state_13757[(2)]);
var inst_13738 = (new Array(n));
var inst_13721 = inst_13738;
var inst_13722 = (0);
var state_13757__$1 = (function (){var statearr_13769 = state_13757;
(statearr_13769[(10)] = inst_13737);

(statearr_13769[(7)] = inst_13721);

(statearr_13769[(8)] = inst_13722);

return statearr_13769;
})();
var statearr_13770_13794 = state_13757__$1;
(statearr_13770_13794[(2)] = null);

(statearr_13770_13794[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13758 === (9))){
var inst_13721 = (state_13757[(7)]);
var inst_13735 = cljs.core.vec(inst_13721);
var state_13757__$1 = state_13757;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13757__$1,(11),out,inst_13735);
} else {
if((state_val_13758 === (5))){
var inst_13721 = (state_13757[(7)]);
var inst_13722 = (state_13757[(8)]);
var inst_13730 = (state_13757[(11)]);
var inst_13725 = (state_13757[(9)]);
var inst_13729 = (inst_13721[inst_13722] = inst_13725);
var inst_13730__$1 = (inst_13722 + (1));
var inst_13731 = (inst_13730__$1 < n);
var state_13757__$1 = (function (){var statearr_13771 = state_13757;
(statearr_13771[(11)] = inst_13730__$1);

(statearr_13771[(12)] = inst_13729);

return statearr_13771;
})();
if(cljs.core.truth_(inst_13731)){
var statearr_13772_13795 = state_13757__$1;
(statearr_13772_13795[(1)] = (8));

} else {
var statearr_13773_13796 = state_13757__$1;
(statearr_13773_13796[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13758 === (14))){
var inst_13750 = (state_13757[(2)]);
var inst_13751 = cljs.core.async.close_BANG_(out);
var state_13757__$1 = (function (){var statearr_13775 = state_13757;
(statearr_13775[(13)] = inst_13750);

return statearr_13775;
})();
var statearr_13776_13797 = state_13757__$1;
(statearr_13776_13797[(2)] = inst_13751);

(statearr_13776_13797[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13758 === (10))){
var inst_13741 = (state_13757[(2)]);
var state_13757__$1 = state_13757;
var statearr_13777_13798 = state_13757__$1;
(statearr_13777_13798[(2)] = inst_13741);

(statearr_13777_13798[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13758 === (8))){
var inst_13721 = (state_13757[(7)]);
var inst_13730 = (state_13757[(11)]);
var tmp13774 = inst_13721;
var inst_13721__$1 = tmp13774;
var inst_13722 = inst_13730;
var state_13757__$1 = (function (){var statearr_13778 = state_13757;
(statearr_13778[(7)] = inst_13721__$1);

(statearr_13778[(8)] = inst_13722);

return statearr_13778;
})();
var statearr_13779_13799 = state_13757__$1;
(statearr_13779_13799[(2)] = null);

(statearr_13779_13799[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11965__auto___13785,out))
;
return ((function (switch__11858__auto__,c__11965__auto___13785,out){
return (function() {
var cljs$core$async$state_machine__11859__auto__ = null;
var cljs$core$async$state_machine__11859__auto____0 = (function (){
var statearr_13780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13780[(0)] = cljs$core$async$state_machine__11859__auto__);

(statearr_13780[(1)] = (1));

return statearr_13780;
});
var cljs$core$async$state_machine__11859__auto____1 = (function (state_13757){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_13757);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e13781){if((e13781 instanceof Object)){
var ex__11862__auto__ = e13781;
var statearr_13782_13800 = state_13757;
(statearr_13782_13800[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13757);

return cljs.core.cst$kw$recur;
} else {
throw e13781;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__13801 = state_13757;
state_13757 = G__13801;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$state_machine__11859__auto__ = function(state_13757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11859__auto____1.call(this,state_13757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11859__auto____0;
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11859__auto____1;
return cljs$core$async$state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto___13785,out))
})();
var state__11967__auto__ = (function (){var statearr_13783 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_13783[(6)] = c__11965__auto___13785);

return statearr_13783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto___13785,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__13803 = arguments.length;
switch (G__13803) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11965__auto___13873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11965__auto___13873,out){
return (function (){
var f__11966__auto__ = (function (){var switch__11858__auto__ = ((function (c__11965__auto___13873,out){
return (function (state_13845){
var state_val_13846 = (state_13845[(1)]);
if((state_val_13846 === (7))){
var inst_13841 = (state_13845[(2)]);
var state_13845__$1 = state_13845;
var statearr_13847_13874 = state_13845__$1;
(statearr_13847_13874[(2)] = inst_13841);

(statearr_13847_13874[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13846 === (1))){
var inst_13804 = [];
var inst_13805 = inst_13804;
var inst_13806 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_13845__$1 = (function (){var statearr_13848 = state_13845;
(statearr_13848[(7)] = inst_13805);

(statearr_13848[(8)] = inst_13806);

return statearr_13848;
})();
var statearr_13849_13875 = state_13845__$1;
(statearr_13849_13875[(2)] = null);

(statearr_13849_13875[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13846 === (4))){
var inst_13809 = (state_13845[(9)]);
var inst_13809__$1 = (state_13845[(2)]);
var inst_13810 = (inst_13809__$1 == null);
var inst_13811 = cljs.core.not(inst_13810);
var state_13845__$1 = (function (){var statearr_13850 = state_13845;
(statearr_13850[(9)] = inst_13809__$1);

return statearr_13850;
})();
if(inst_13811){
var statearr_13851_13876 = state_13845__$1;
(statearr_13851_13876[(1)] = (5));

} else {
var statearr_13852_13877 = state_13845__$1;
(statearr_13852_13877[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13846 === (15))){
var inst_13835 = (state_13845[(2)]);
var state_13845__$1 = state_13845;
var statearr_13853_13878 = state_13845__$1;
(statearr_13853_13878[(2)] = inst_13835);

(statearr_13853_13878[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13846 === (13))){
var state_13845__$1 = state_13845;
var statearr_13854_13879 = state_13845__$1;
(statearr_13854_13879[(2)] = null);

(statearr_13854_13879[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13846 === (6))){
var inst_13805 = (state_13845[(7)]);
var inst_13830 = inst_13805.length;
var inst_13831 = (inst_13830 > (0));
var state_13845__$1 = state_13845;
if(cljs.core.truth_(inst_13831)){
var statearr_13855_13880 = state_13845__$1;
(statearr_13855_13880[(1)] = (12));

} else {
var statearr_13856_13881 = state_13845__$1;
(statearr_13856_13881[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13846 === (3))){
var inst_13843 = (state_13845[(2)]);
var state_13845__$1 = state_13845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13845__$1,inst_13843);
} else {
if((state_val_13846 === (12))){
var inst_13805 = (state_13845[(7)]);
var inst_13833 = cljs.core.vec(inst_13805);
var state_13845__$1 = state_13845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13845__$1,(15),out,inst_13833);
} else {
if((state_val_13846 === (2))){
var state_13845__$1 = state_13845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13845__$1,(4),ch);
} else {
if((state_val_13846 === (11))){
var inst_13809 = (state_13845[(9)]);
var inst_13813 = (state_13845[(10)]);
var inst_13823 = (state_13845[(2)]);
var inst_13824 = [];
var inst_13825 = inst_13824.push(inst_13809);
var inst_13805 = inst_13824;
var inst_13806 = inst_13813;
var state_13845__$1 = (function (){var statearr_13857 = state_13845;
(statearr_13857[(7)] = inst_13805);

(statearr_13857[(11)] = inst_13823);

(statearr_13857[(12)] = inst_13825);

(statearr_13857[(8)] = inst_13806);

return statearr_13857;
})();
var statearr_13858_13882 = state_13845__$1;
(statearr_13858_13882[(2)] = null);

(statearr_13858_13882[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13846 === (9))){
var inst_13805 = (state_13845[(7)]);
var inst_13821 = cljs.core.vec(inst_13805);
var state_13845__$1 = state_13845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13845__$1,(11),out,inst_13821);
} else {
if((state_val_13846 === (5))){
var inst_13809 = (state_13845[(9)]);
var inst_13813 = (state_13845[(10)]);
var inst_13806 = (state_13845[(8)]);
var inst_13813__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_13809) : f.call(null,inst_13809));
var inst_13814 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13813__$1,inst_13806);
var inst_13815 = cljs.core.keyword_identical_QMARK_(inst_13806,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_13816 = ((inst_13814) || (inst_13815));
var state_13845__$1 = (function (){var statearr_13859 = state_13845;
(statearr_13859[(10)] = inst_13813__$1);

return statearr_13859;
})();
if(cljs.core.truth_(inst_13816)){
var statearr_13860_13883 = state_13845__$1;
(statearr_13860_13883[(1)] = (8));

} else {
var statearr_13861_13884 = state_13845__$1;
(statearr_13861_13884[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13846 === (14))){
var inst_13838 = (state_13845[(2)]);
var inst_13839 = cljs.core.async.close_BANG_(out);
var state_13845__$1 = (function (){var statearr_13863 = state_13845;
(statearr_13863[(13)] = inst_13838);

return statearr_13863;
})();
var statearr_13864_13885 = state_13845__$1;
(statearr_13864_13885[(2)] = inst_13839);

(statearr_13864_13885[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13846 === (10))){
var inst_13828 = (state_13845[(2)]);
var state_13845__$1 = state_13845;
var statearr_13865_13886 = state_13845__$1;
(statearr_13865_13886[(2)] = inst_13828);

(statearr_13865_13886[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13846 === (8))){
var inst_13805 = (state_13845[(7)]);
var inst_13809 = (state_13845[(9)]);
var inst_13813 = (state_13845[(10)]);
var inst_13818 = inst_13805.push(inst_13809);
var tmp13862 = inst_13805;
var inst_13805__$1 = tmp13862;
var inst_13806 = inst_13813;
var state_13845__$1 = (function (){var statearr_13866 = state_13845;
(statearr_13866[(7)] = inst_13805__$1);

(statearr_13866[(14)] = inst_13818);

(statearr_13866[(8)] = inst_13806);

return statearr_13866;
})();
var statearr_13867_13887 = state_13845__$1;
(statearr_13867_13887[(2)] = null);

(statearr_13867_13887[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11965__auto___13873,out))
;
return ((function (switch__11858__auto__,c__11965__auto___13873,out){
return (function() {
var cljs$core$async$state_machine__11859__auto__ = null;
var cljs$core$async$state_machine__11859__auto____0 = (function (){
var statearr_13868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13868[(0)] = cljs$core$async$state_machine__11859__auto__);

(statearr_13868[(1)] = (1));

return statearr_13868;
});
var cljs$core$async$state_machine__11859__auto____1 = (function (state_13845){
while(true){
var ret_value__11860__auto__ = (function (){try{while(true){
var result__11861__auto__ = switch__11858__auto__(state_13845);
if(cljs.core.keyword_identical_QMARK_(result__11861__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11861__auto__;
}
break;
}
}catch (e13869){if((e13869 instanceof Object)){
var ex__11862__auto__ = e13869;
var statearr_13870_13888 = state_13845;
(statearr_13870_13888[(5)] = ex__11862__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13845);

return cljs.core.cst$kw$recur;
} else {
throw e13869;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11860__auto__,cljs.core.cst$kw$recur)){
var G__13889 = state_13845;
state_13845 = G__13889;
continue;
} else {
return ret_value__11860__auto__;
}
break;
}
});
cljs$core$async$state_machine__11859__auto__ = function(state_13845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11859__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11859__auto____1.call(this,state_13845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11859__auto____0;
cljs$core$async$state_machine__11859__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11859__auto____1;
return cljs$core$async$state_machine__11859__auto__;
})()
;})(switch__11858__auto__,c__11965__auto___13873,out))
})();
var state__11967__auto__ = (function (){var statearr_13871 = (f__11966__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11966__auto__.cljs$core$IFn$_invoke$arity$0() : f__11966__auto__.call(null));
(statearr_13871[(6)] = c__11965__auto___13873);

return statearr_13871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11967__auto__);
});})(c__11965__auto___13873,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

