// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
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
var G__15681 = arguments.length;
switch (G__15681) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15682 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15682 = (function (f,blockable,meta15683){
this.f = f;
this.blockable = blockable;
this.meta15683 = meta15683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15684,meta15683__$1){
var self__ = this;
var _15684__$1 = this;
return (new cljs.core.async.t_cljs$core$async15682(self__.f,self__.blockable,meta15683__$1));
});

cljs.core.async.t_cljs$core$async15682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15684){
var self__ = this;
var _15684__$1 = this;
return self__.meta15683;
});

cljs.core.async.t_cljs$core$async15682.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15682.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15682.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15682.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15683], null);
});

cljs.core.async.t_cljs$core$async15682.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15682";

cljs.core.async.t_cljs$core$async15682.cljs$lang$ctorPrWriter = (function (this__8250__auto__,writer__8251__auto__,opt__8252__auto__){
return cljs.core._write(writer__8251__auto__,"cljs.core.async/t_cljs$core$async15682");
});

cljs.core.async.__GT_t_cljs$core$async15682 = (function cljs$core$async$__GT_t_cljs$core$async15682(f__$1,blockable__$1,meta15683){
return (new cljs.core.async.t_cljs$core$async15682(f__$1,blockable__$1,meta15683));
});

}

return (new cljs.core.async.t_cljs$core$async15682(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var G__15688 = arguments.length;
switch (G__15688) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
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
var G__15691 = arguments.length;
switch (G__15691) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__15694 = arguments.length;
switch (G__15694) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15696 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15696) : fn1.call(null,val_15696));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15696,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15696) : fn1.call(null,val_15696));
});})(val_15696,ret))
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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15698 = arguments.length;
switch (G__15698) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
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
var n__8565__auto___15700 = n;
var x_15701 = (0);
while(true){
if((x_15701 < n__8565__auto___15700)){
(a[x_15701] = (0));

var G__15702 = (x_15701 + (1));
x_15701 = G__15702;
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

var G__15703 = (i + (1));
i = G__15703;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async15704 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15704 = (function (flag,meta15705){
this.flag = flag;
this.meta15705 = meta15705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15706,meta15705__$1){
var self__ = this;
var _15706__$1 = this;
return (new cljs.core.async.t_cljs$core$async15704(self__.flag,meta15705__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15706){
var self__ = this;
var _15706__$1 = this;
return self__.meta15705;
});})(flag))
;

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15704.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15705], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15704.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15704";

cljs.core.async.t_cljs$core$async15704.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8250__auto__,writer__8251__auto__,opt__8252__auto__){
return cljs.core._write(writer__8251__auto__,"cljs.core.async/t_cljs$core$async15704");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15704 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15704(flag__$1,meta15705){
return (new cljs.core.async.t_cljs$core$async15704(flag__$1,meta15705));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15704(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15707 = (function (flag,cb,meta15708){
this.flag = flag;
this.cb = cb;
this.meta15708 = meta15708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15709,meta15708__$1){
var self__ = this;
var _15709__$1 = this;
return (new cljs.core.async.t_cljs$core$async15707(self__.flag,self__.cb,meta15708__$1));
});

cljs.core.async.t_cljs$core$async15707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15709){
var self__ = this;
var _15709__$1 = this;
return self__.meta15708;
});

cljs.core.async.t_cljs$core$async15707.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15708], null);
});

cljs.core.async.t_cljs$core$async15707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15707";

cljs.core.async.t_cljs$core$async15707.cljs$lang$ctorPrWriter = (function (this__8250__auto__,writer__8251__auto__,opt__8252__auto__){
return cljs.core._write(writer__8251__auto__,"cljs.core.async/t_cljs$core$async15707");
});

cljs.core.async.__GT_t_cljs$core$async15707 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15707(flag__$1,cb__$1,meta15708){
return (new cljs.core.async.t_cljs$core$async15707(flag__$1,cb__$1,meta15708));
});

}

return (new cljs.core.async.t_cljs$core$async15707(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15710_SHARP_){
var G__15712 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15710_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15712) : fret.call(null,G__15712));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15711_SHARP_){
var G__15713 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15711_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15713) : fret.call(null,G__15713));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__7625__auto__ = wport;
if(cljs.core.truth_(or__7625__auto__)){
return or__7625__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15714 = (i + (1));
i = G__15714;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7625__auto__ = ret;
if(cljs.core.truth_(or__7625__auto__)){
return or__7625__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__7613__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__7613__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__7613__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__8796__auto__ = [];
var len__8789__auto___15720 = arguments.length;
var i__8790__auto___15721 = (0);
while(true){
if((i__8790__auto___15721 < len__8789__auto___15720)){
args__8796__auto__.push((arguments[i__8790__auto___15721]));

var G__15722 = (i__8790__auto___15721 + (1));
i__8790__auto___15721 = G__15722;
continue;
} else {
}
break;
}

var argseq__8797__auto__ = ((((1) < args__8796__auto__.length))?(new cljs.core.IndexedSeq(args__8796__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8797__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15717){
var map__15718 = p__15717;
var map__15718__$1 = ((((!((map__15718 == null)))?((((map__15718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15718):map__15718);
var opts = map__15718__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15715){
var G__15716 = cljs.core.first(seq15715);
var seq15715__$1 = cljs.core.next(seq15715);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15716,seq15715__$1);
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
var G__15724 = arguments.length;
switch (G__15724) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15635__auto___15770 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto___15770){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto___15770){
return (function (state_15748){
var state_val_15749 = (state_15748[(1)]);
if((state_val_15749 === (7))){
var inst_15744 = (state_15748[(2)]);
var state_15748__$1 = state_15748;
var statearr_15750_15771 = state_15748__$1;
(statearr_15750_15771[(2)] = inst_15744);

(statearr_15750_15771[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15749 === (1))){
var state_15748__$1 = state_15748;
var statearr_15751_15772 = state_15748__$1;
(statearr_15751_15772[(2)] = null);

(statearr_15751_15772[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15749 === (4))){
var inst_15727 = (state_15748[(7)]);
var inst_15727__$1 = (state_15748[(2)]);
var inst_15728 = (inst_15727__$1 == null);
var state_15748__$1 = (function (){var statearr_15752 = state_15748;
(statearr_15752[(7)] = inst_15727__$1);

return statearr_15752;
})();
if(cljs.core.truth_(inst_15728)){
var statearr_15753_15773 = state_15748__$1;
(statearr_15753_15773[(1)] = (5));

} else {
var statearr_15754_15774 = state_15748__$1;
(statearr_15754_15774[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15749 === (13))){
var state_15748__$1 = state_15748;
var statearr_15755_15775 = state_15748__$1;
(statearr_15755_15775[(2)] = null);

(statearr_15755_15775[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15749 === (6))){
var inst_15727 = (state_15748[(7)]);
var state_15748__$1 = state_15748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15748__$1,(11),to,inst_15727);
} else {
if((state_val_15749 === (3))){
var inst_15746 = (state_15748[(2)]);
var state_15748__$1 = state_15748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15748__$1,inst_15746);
} else {
if((state_val_15749 === (12))){
var state_15748__$1 = state_15748;
var statearr_15756_15776 = state_15748__$1;
(statearr_15756_15776[(2)] = null);

(statearr_15756_15776[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15749 === (2))){
var state_15748__$1 = state_15748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15748__$1,(4),from);
} else {
if((state_val_15749 === (11))){
var inst_15737 = (state_15748[(2)]);
var state_15748__$1 = state_15748;
if(cljs.core.truth_(inst_15737)){
var statearr_15757_15777 = state_15748__$1;
(statearr_15757_15777[(1)] = (12));

} else {
var statearr_15758_15778 = state_15748__$1;
(statearr_15758_15778[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15749 === (9))){
var state_15748__$1 = state_15748;
var statearr_15759_15779 = state_15748__$1;
(statearr_15759_15779[(2)] = null);

(statearr_15759_15779[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15749 === (5))){
var state_15748__$1 = state_15748;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15760_15780 = state_15748__$1;
(statearr_15760_15780[(1)] = (8));

} else {
var statearr_15761_15781 = state_15748__$1;
(statearr_15761_15781[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15749 === (14))){
var inst_15742 = (state_15748[(2)]);
var state_15748__$1 = state_15748;
var statearr_15762_15782 = state_15748__$1;
(statearr_15762_15782[(2)] = inst_15742);

(statearr_15762_15782[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15749 === (10))){
var inst_15734 = (state_15748[(2)]);
var state_15748__$1 = state_15748;
var statearr_15763_15783 = state_15748__$1;
(statearr_15763_15783[(2)] = inst_15734);

(statearr_15763_15783[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15749 === (8))){
var inst_15731 = cljs.core.async.close_BANG_(to);
var state_15748__$1 = state_15748;
var statearr_15764_15784 = state_15748__$1;
(statearr_15764_15784[(2)] = inst_15731);

(statearr_15764_15784[(1)] = (10));


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
});})(c__15635__auto___15770))
;
return ((function (switch__15535__auto__,c__15635__auto___15770){
return (function() {
var cljs$core$async$state_machine__15536__auto__ = null;
var cljs$core$async$state_machine__15536__auto____0 = (function (){
var statearr_15765 = [null,null,null,null,null,null,null,null];
(statearr_15765[(0)] = cljs$core$async$state_machine__15536__auto__);

(statearr_15765[(1)] = (1));

return statearr_15765;
});
var cljs$core$async$state_machine__15536__auto____1 = (function (state_15748){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_15748);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e15766){if((e15766 instanceof Object)){
var ex__15539__auto__ = e15766;
var statearr_15767_15785 = state_15748;
(statearr_15767_15785[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15748);

return cljs.core.cst$kw$recur;
} else {
throw e15766;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__15786 = state_15748;
state_15748 = G__15786;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$state_machine__15536__auto__ = function(state_15748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15536__auto____1.call(this,state_15748);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15536__auto____0;
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15536__auto____1;
return cljs$core$async$state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto___15770))
})();
var state__15637__auto__ = (function (){var statearr_15768 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_15768[(6)] = c__15635__auto___15770);

return statearr_15768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto___15770))
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
return (function (p__15787){
var vec__15788 = p__15787;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15788,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15788,(1),null);
var job = vec__15788;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15635__auto___15959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto___15959,res,vec__15788,v,p,job,jobs,results){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto___15959,res,vec__15788,v,p,job,jobs,results){
return (function (state_15795){
var state_val_15796 = (state_15795[(1)]);
if((state_val_15796 === (1))){
var state_15795__$1 = state_15795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15795__$1,(2),res,v);
} else {
if((state_val_15796 === (2))){
var inst_15792 = (state_15795[(2)]);
var inst_15793 = cljs.core.async.close_BANG_(res);
var state_15795__$1 = (function (){var statearr_15797 = state_15795;
(statearr_15797[(7)] = inst_15792);

return statearr_15797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15795__$1,inst_15793);
} else {
return null;
}
}
});})(c__15635__auto___15959,res,vec__15788,v,p,job,jobs,results))
;
return ((function (switch__15535__auto__,c__15635__auto___15959,res,vec__15788,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____0 = (function (){
var statearr_15798 = [null,null,null,null,null,null,null,null];
(statearr_15798[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__);

(statearr_15798[(1)] = (1));

return statearr_15798;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____1 = (function (state_15795){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_15795);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e15799){if((e15799 instanceof Object)){
var ex__15539__auto__ = e15799;
var statearr_15800_15960 = state_15795;
(statearr_15800_15960[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15795);

return cljs.core.cst$kw$recur;
} else {
throw e15799;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__15961 = state_15795;
state_15795 = G__15961;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__ = function(state_15795){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____1.call(this,state_15795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto___15959,res,vec__15788,v,p,job,jobs,results))
})();
var state__15637__auto__ = (function (){var statearr_15801 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_15801[(6)] = c__15635__auto___15959);

return statearr_15801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto___15959,res,vec__15788,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15802){
var vec__15803 = p__15802;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15803,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15803,(1),null);
var job = vec__15803;
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
var n__8565__auto___15962 = n;
var __15963 = (0);
while(true){
if((__15963 < n__8565__auto___15962)){
var G__15806_15964 = type;
var G__15806_15965__$1 = (((G__15806_15964 instanceof cljs.core.Keyword))?G__15806_15964.fqn:null);
switch (G__15806_15965__$1) {
case "compute":
var c__15635__auto___15967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15963,c__15635__auto___15967,G__15806_15964,G__15806_15965__$1,n__8565__auto___15962,jobs,results,process,async){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (__15963,c__15635__auto___15967,G__15806_15964,G__15806_15965__$1,n__8565__auto___15962,jobs,results,process,async){
return (function (state_15819){
var state_val_15820 = (state_15819[(1)]);
if((state_val_15820 === (1))){
var state_15819__$1 = state_15819;
var statearr_15821_15968 = state_15819__$1;
(statearr_15821_15968[(2)] = null);

(statearr_15821_15968[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15820 === (2))){
var state_15819__$1 = state_15819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15819__$1,(4),jobs);
} else {
if((state_val_15820 === (3))){
var inst_15817 = (state_15819[(2)]);
var state_15819__$1 = state_15819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15819__$1,inst_15817);
} else {
if((state_val_15820 === (4))){
var inst_15809 = (state_15819[(2)]);
var inst_15810 = process(inst_15809);
var state_15819__$1 = state_15819;
if(cljs.core.truth_(inst_15810)){
var statearr_15822_15969 = state_15819__$1;
(statearr_15822_15969[(1)] = (5));

} else {
var statearr_15823_15970 = state_15819__$1;
(statearr_15823_15970[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15820 === (5))){
var state_15819__$1 = state_15819;
var statearr_15824_15971 = state_15819__$1;
(statearr_15824_15971[(2)] = null);

(statearr_15824_15971[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15820 === (6))){
var state_15819__$1 = state_15819;
var statearr_15825_15972 = state_15819__$1;
(statearr_15825_15972[(2)] = null);

(statearr_15825_15972[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15820 === (7))){
var inst_15815 = (state_15819[(2)]);
var state_15819__$1 = state_15819;
var statearr_15826_15973 = state_15819__$1;
(statearr_15826_15973[(2)] = inst_15815);

(statearr_15826_15973[(1)] = (3));


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
});})(__15963,c__15635__auto___15967,G__15806_15964,G__15806_15965__$1,n__8565__auto___15962,jobs,results,process,async))
;
return ((function (__15963,switch__15535__auto__,c__15635__auto___15967,G__15806_15964,G__15806_15965__$1,n__8565__auto___15962,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____0 = (function (){
var statearr_15827 = [null,null,null,null,null,null,null];
(statearr_15827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__);

(statearr_15827[(1)] = (1));

return statearr_15827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____1 = (function (state_15819){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_15819);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e15828){if((e15828 instanceof Object)){
var ex__15539__auto__ = e15828;
var statearr_15829_15974 = state_15819;
(statearr_15829_15974[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15819);

return cljs.core.cst$kw$recur;
} else {
throw e15828;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__15975 = state_15819;
state_15819 = G__15975;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__ = function(state_15819){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____1.call(this,state_15819);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__;
})()
;})(__15963,switch__15535__auto__,c__15635__auto___15967,G__15806_15964,G__15806_15965__$1,n__8565__auto___15962,jobs,results,process,async))
})();
var state__15637__auto__ = (function (){var statearr_15830 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_15830[(6)] = c__15635__auto___15967);

return statearr_15830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(__15963,c__15635__auto___15967,G__15806_15964,G__15806_15965__$1,n__8565__auto___15962,jobs,results,process,async))
);


break;
case "async":
var c__15635__auto___15976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15963,c__15635__auto___15976,G__15806_15964,G__15806_15965__$1,n__8565__auto___15962,jobs,results,process,async){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (__15963,c__15635__auto___15976,G__15806_15964,G__15806_15965__$1,n__8565__auto___15962,jobs,results,process,async){
return (function (state_15843){
var state_val_15844 = (state_15843[(1)]);
if((state_val_15844 === (1))){
var state_15843__$1 = state_15843;
var statearr_15845_15977 = state_15843__$1;
(statearr_15845_15977[(2)] = null);

(statearr_15845_15977[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15844 === (2))){
var state_15843__$1 = state_15843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15843__$1,(4),jobs);
} else {
if((state_val_15844 === (3))){
var inst_15841 = (state_15843[(2)]);
var state_15843__$1 = state_15843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15843__$1,inst_15841);
} else {
if((state_val_15844 === (4))){
var inst_15833 = (state_15843[(2)]);
var inst_15834 = async(inst_15833);
var state_15843__$1 = state_15843;
if(cljs.core.truth_(inst_15834)){
var statearr_15846_15978 = state_15843__$1;
(statearr_15846_15978[(1)] = (5));

} else {
var statearr_15847_15979 = state_15843__$1;
(statearr_15847_15979[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15844 === (5))){
var state_15843__$1 = state_15843;
var statearr_15848_15980 = state_15843__$1;
(statearr_15848_15980[(2)] = null);

(statearr_15848_15980[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15844 === (6))){
var state_15843__$1 = state_15843;
var statearr_15849_15981 = state_15843__$1;
(statearr_15849_15981[(2)] = null);

(statearr_15849_15981[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15844 === (7))){
var inst_15839 = (state_15843[(2)]);
var state_15843__$1 = state_15843;
var statearr_15850_15982 = state_15843__$1;
(statearr_15850_15982[(2)] = inst_15839);

(statearr_15850_15982[(1)] = (3));


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
});})(__15963,c__15635__auto___15976,G__15806_15964,G__15806_15965__$1,n__8565__auto___15962,jobs,results,process,async))
;
return ((function (__15963,switch__15535__auto__,c__15635__auto___15976,G__15806_15964,G__15806_15965__$1,n__8565__auto___15962,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____0 = (function (){
var statearr_15851 = [null,null,null,null,null,null,null];
(statearr_15851[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__);

(statearr_15851[(1)] = (1));

return statearr_15851;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____1 = (function (state_15843){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_15843);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e15852){if((e15852 instanceof Object)){
var ex__15539__auto__ = e15852;
var statearr_15853_15983 = state_15843;
(statearr_15853_15983[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15843);

return cljs.core.cst$kw$recur;
} else {
throw e15852;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__15984 = state_15843;
state_15843 = G__15984;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__ = function(state_15843){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____1.call(this,state_15843);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__;
})()
;})(__15963,switch__15535__auto__,c__15635__auto___15976,G__15806_15964,G__15806_15965__$1,n__8565__auto___15962,jobs,results,process,async))
})();
var state__15637__auto__ = (function (){var statearr_15854 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_15854[(6)] = c__15635__auto___15976);

return statearr_15854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(__15963,c__15635__auto___15976,G__15806_15964,G__15806_15965__$1,n__8565__auto___15962,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15806_15965__$1)].join('')));

}

var G__15985 = (__15963 + (1));
__15963 = G__15985;
continue;
} else {
}
break;
}

var c__15635__auto___15986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto___15986,jobs,results,process,async){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto___15986,jobs,results,process,async){
return (function (state_15876){
var state_val_15877 = (state_15876[(1)]);
if((state_val_15877 === (1))){
var state_15876__$1 = state_15876;
var statearr_15878_15987 = state_15876__$1;
(statearr_15878_15987[(2)] = null);

(statearr_15878_15987[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15877 === (2))){
var state_15876__$1 = state_15876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15876__$1,(4),from);
} else {
if((state_val_15877 === (3))){
var inst_15874 = (state_15876[(2)]);
var state_15876__$1 = state_15876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15876__$1,inst_15874);
} else {
if((state_val_15877 === (4))){
var inst_15857 = (state_15876[(7)]);
var inst_15857__$1 = (state_15876[(2)]);
var inst_15858 = (inst_15857__$1 == null);
var state_15876__$1 = (function (){var statearr_15879 = state_15876;
(statearr_15879[(7)] = inst_15857__$1);

return statearr_15879;
})();
if(cljs.core.truth_(inst_15858)){
var statearr_15880_15988 = state_15876__$1;
(statearr_15880_15988[(1)] = (5));

} else {
var statearr_15881_15989 = state_15876__$1;
(statearr_15881_15989[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15877 === (5))){
var inst_15860 = cljs.core.async.close_BANG_(jobs);
var state_15876__$1 = state_15876;
var statearr_15882_15990 = state_15876__$1;
(statearr_15882_15990[(2)] = inst_15860);

(statearr_15882_15990[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15877 === (6))){
var inst_15862 = (state_15876[(8)]);
var inst_15857 = (state_15876[(7)]);
var inst_15862__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15863 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15864 = [inst_15857,inst_15862__$1];
var inst_15865 = (new cljs.core.PersistentVector(null,2,(5),inst_15863,inst_15864,null));
var state_15876__$1 = (function (){var statearr_15883 = state_15876;
(statearr_15883[(8)] = inst_15862__$1);

return statearr_15883;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15876__$1,(8),jobs,inst_15865);
} else {
if((state_val_15877 === (7))){
var inst_15872 = (state_15876[(2)]);
var state_15876__$1 = state_15876;
var statearr_15884_15991 = state_15876__$1;
(statearr_15884_15991[(2)] = inst_15872);

(statearr_15884_15991[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15877 === (8))){
var inst_15862 = (state_15876[(8)]);
var inst_15867 = (state_15876[(2)]);
var state_15876__$1 = (function (){var statearr_15885 = state_15876;
(statearr_15885[(9)] = inst_15867);

return statearr_15885;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15876__$1,(9),results,inst_15862);
} else {
if((state_val_15877 === (9))){
var inst_15869 = (state_15876[(2)]);
var state_15876__$1 = (function (){var statearr_15886 = state_15876;
(statearr_15886[(10)] = inst_15869);

return statearr_15886;
})();
var statearr_15887_15992 = state_15876__$1;
(statearr_15887_15992[(2)] = null);

(statearr_15887_15992[(1)] = (2));


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
});})(c__15635__auto___15986,jobs,results,process,async))
;
return ((function (switch__15535__auto__,c__15635__auto___15986,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____0 = (function (){
var statearr_15888 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__);

(statearr_15888[(1)] = (1));

return statearr_15888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____1 = (function (state_15876){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_15876);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e15889){if((e15889 instanceof Object)){
var ex__15539__auto__ = e15889;
var statearr_15890_15993 = state_15876;
(statearr_15890_15993[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15876);

return cljs.core.cst$kw$recur;
} else {
throw e15889;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__15994 = state_15876;
state_15876 = G__15994;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__ = function(state_15876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____1.call(this,state_15876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto___15986,jobs,results,process,async))
})();
var state__15637__auto__ = (function (){var statearr_15891 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_15891[(6)] = c__15635__auto___15986);

return statearr_15891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto___15986,jobs,results,process,async))
);


var c__15635__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto__,jobs,results,process,async){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto__,jobs,results,process,async){
return (function (state_15929){
var state_val_15930 = (state_15929[(1)]);
if((state_val_15930 === (7))){
var inst_15925 = (state_15929[(2)]);
var state_15929__$1 = state_15929;
var statearr_15931_15995 = state_15929__$1;
(statearr_15931_15995[(2)] = inst_15925);

(statearr_15931_15995[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15930 === (20))){
var state_15929__$1 = state_15929;
var statearr_15932_15996 = state_15929__$1;
(statearr_15932_15996[(2)] = null);

(statearr_15932_15996[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15930 === (1))){
var state_15929__$1 = state_15929;
var statearr_15933_15997 = state_15929__$1;
(statearr_15933_15997[(2)] = null);

(statearr_15933_15997[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15930 === (4))){
var inst_15894 = (state_15929[(7)]);
var inst_15894__$1 = (state_15929[(2)]);
var inst_15895 = (inst_15894__$1 == null);
var state_15929__$1 = (function (){var statearr_15934 = state_15929;
(statearr_15934[(7)] = inst_15894__$1);

return statearr_15934;
})();
if(cljs.core.truth_(inst_15895)){
var statearr_15935_15998 = state_15929__$1;
(statearr_15935_15998[(1)] = (5));

} else {
var statearr_15936_15999 = state_15929__$1;
(statearr_15936_15999[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15930 === (15))){
var inst_15907 = (state_15929[(8)]);
var state_15929__$1 = state_15929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15929__$1,(18),to,inst_15907);
} else {
if((state_val_15930 === (21))){
var inst_15920 = (state_15929[(2)]);
var state_15929__$1 = state_15929;
var statearr_15937_16000 = state_15929__$1;
(statearr_15937_16000[(2)] = inst_15920);

(statearr_15937_16000[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15930 === (13))){
var inst_15922 = (state_15929[(2)]);
var state_15929__$1 = (function (){var statearr_15938 = state_15929;
(statearr_15938[(9)] = inst_15922);

return statearr_15938;
})();
var statearr_15939_16001 = state_15929__$1;
(statearr_15939_16001[(2)] = null);

(statearr_15939_16001[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15930 === (6))){
var inst_15894 = (state_15929[(7)]);
var state_15929__$1 = state_15929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15929__$1,(11),inst_15894);
} else {
if((state_val_15930 === (17))){
var inst_15915 = (state_15929[(2)]);
var state_15929__$1 = state_15929;
if(cljs.core.truth_(inst_15915)){
var statearr_15940_16002 = state_15929__$1;
(statearr_15940_16002[(1)] = (19));

} else {
var statearr_15941_16003 = state_15929__$1;
(statearr_15941_16003[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15930 === (3))){
var inst_15927 = (state_15929[(2)]);
var state_15929__$1 = state_15929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15929__$1,inst_15927);
} else {
if((state_val_15930 === (12))){
var inst_15904 = (state_15929[(10)]);
var state_15929__$1 = state_15929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15929__$1,(14),inst_15904);
} else {
if((state_val_15930 === (2))){
var state_15929__$1 = state_15929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15929__$1,(4),results);
} else {
if((state_val_15930 === (19))){
var state_15929__$1 = state_15929;
var statearr_15942_16004 = state_15929__$1;
(statearr_15942_16004[(2)] = null);

(statearr_15942_16004[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15930 === (11))){
var inst_15904 = (state_15929[(2)]);
var state_15929__$1 = (function (){var statearr_15943 = state_15929;
(statearr_15943[(10)] = inst_15904);

return statearr_15943;
})();
var statearr_15944_16005 = state_15929__$1;
(statearr_15944_16005[(2)] = null);

(statearr_15944_16005[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15930 === (9))){
var state_15929__$1 = state_15929;
var statearr_15945_16006 = state_15929__$1;
(statearr_15945_16006[(2)] = null);

(statearr_15945_16006[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15930 === (5))){
var state_15929__$1 = state_15929;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15946_16007 = state_15929__$1;
(statearr_15946_16007[(1)] = (8));

} else {
var statearr_15947_16008 = state_15929__$1;
(statearr_15947_16008[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15930 === (14))){
var inst_15909 = (state_15929[(11)]);
var inst_15907 = (state_15929[(8)]);
var inst_15907__$1 = (state_15929[(2)]);
var inst_15908 = (inst_15907__$1 == null);
var inst_15909__$1 = cljs.core.not(inst_15908);
var state_15929__$1 = (function (){var statearr_15948 = state_15929;
(statearr_15948[(11)] = inst_15909__$1);

(statearr_15948[(8)] = inst_15907__$1);

return statearr_15948;
})();
if(inst_15909__$1){
var statearr_15949_16009 = state_15929__$1;
(statearr_15949_16009[(1)] = (15));

} else {
var statearr_15950_16010 = state_15929__$1;
(statearr_15950_16010[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15930 === (16))){
var inst_15909 = (state_15929[(11)]);
var state_15929__$1 = state_15929;
var statearr_15951_16011 = state_15929__$1;
(statearr_15951_16011[(2)] = inst_15909);

(statearr_15951_16011[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15930 === (10))){
var inst_15901 = (state_15929[(2)]);
var state_15929__$1 = state_15929;
var statearr_15952_16012 = state_15929__$1;
(statearr_15952_16012[(2)] = inst_15901);

(statearr_15952_16012[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15930 === (18))){
var inst_15912 = (state_15929[(2)]);
var state_15929__$1 = state_15929;
var statearr_15953_16013 = state_15929__$1;
(statearr_15953_16013[(2)] = inst_15912);

(statearr_15953_16013[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15930 === (8))){
var inst_15898 = cljs.core.async.close_BANG_(to);
var state_15929__$1 = state_15929;
var statearr_15954_16014 = state_15929__$1;
(statearr_15954_16014[(2)] = inst_15898);

(statearr_15954_16014[(1)] = (10));


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
});})(c__15635__auto__,jobs,results,process,async))
;
return ((function (switch__15535__auto__,c__15635__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____0 = (function (){
var statearr_15955 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15955[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__);

(statearr_15955[(1)] = (1));

return statearr_15955;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____1 = (function (state_15929){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_15929);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e15956){if((e15956 instanceof Object)){
var ex__15539__auto__ = e15956;
var statearr_15957_16015 = state_15929;
(statearr_15957_16015[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15929);

return cljs.core.cst$kw$recur;
} else {
throw e15956;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__16016 = state_15929;
state_15929 = G__16016;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__ = function(state_15929){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____1.call(this,state_15929);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15536__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto__,jobs,results,process,async))
})();
var state__15637__auto__ = (function (){var statearr_15958 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_15958[(6)] = c__15635__auto__);

return statearr_15958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto__,jobs,results,process,async))
);

return c__15635__auto__;
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
var G__16018 = arguments.length;
switch (G__16018) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__16021 = arguments.length;
switch (G__16021) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__16024 = arguments.length;
switch (G__16024) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15635__auto___16073 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto___16073,tc,fc){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto___16073,tc,fc){
return (function (state_16050){
var state_val_16051 = (state_16050[(1)]);
if((state_val_16051 === (7))){
var inst_16046 = (state_16050[(2)]);
var state_16050__$1 = state_16050;
var statearr_16052_16074 = state_16050__$1;
(statearr_16052_16074[(2)] = inst_16046);

(statearr_16052_16074[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16051 === (1))){
var state_16050__$1 = state_16050;
var statearr_16053_16075 = state_16050__$1;
(statearr_16053_16075[(2)] = null);

(statearr_16053_16075[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16051 === (4))){
var inst_16027 = (state_16050[(7)]);
var inst_16027__$1 = (state_16050[(2)]);
var inst_16028 = (inst_16027__$1 == null);
var state_16050__$1 = (function (){var statearr_16054 = state_16050;
(statearr_16054[(7)] = inst_16027__$1);

return statearr_16054;
})();
if(cljs.core.truth_(inst_16028)){
var statearr_16055_16076 = state_16050__$1;
(statearr_16055_16076[(1)] = (5));

} else {
var statearr_16056_16077 = state_16050__$1;
(statearr_16056_16077[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16051 === (13))){
var state_16050__$1 = state_16050;
var statearr_16057_16078 = state_16050__$1;
(statearr_16057_16078[(2)] = null);

(statearr_16057_16078[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16051 === (6))){
var inst_16027 = (state_16050[(7)]);
var inst_16033 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16027) : p.call(null,inst_16027));
var state_16050__$1 = state_16050;
if(cljs.core.truth_(inst_16033)){
var statearr_16058_16079 = state_16050__$1;
(statearr_16058_16079[(1)] = (9));

} else {
var statearr_16059_16080 = state_16050__$1;
(statearr_16059_16080[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16051 === (3))){
var inst_16048 = (state_16050[(2)]);
var state_16050__$1 = state_16050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16050__$1,inst_16048);
} else {
if((state_val_16051 === (12))){
var state_16050__$1 = state_16050;
var statearr_16060_16081 = state_16050__$1;
(statearr_16060_16081[(2)] = null);

(statearr_16060_16081[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16051 === (2))){
var state_16050__$1 = state_16050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16050__$1,(4),ch);
} else {
if((state_val_16051 === (11))){
var inst_16027 = (state_16050[(7)]);
var inst_16037 = (state_16050[(2)]);
var state_16050__$1 = state_16050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16050__$1,(8),inst_16037,inst_16027);
} else {
if((state_val_16051 === (9))){
var state_16050__$1 = state_16050;
var statearr_16061_16082 = state_16050__$1;
(statearr_16061_16082[(2)] = tc);

(statearr_16061_16082[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16051 === (5))){
var inst_16030 = cljs.core.async.close_BANG_(tc);
var inst_16031 = cljs.core.async.close_BANG_(fc);
var state_16050__$1 = (function (){var statearr_16062 = state_16050;
(statearr_16062[(8)] = inst_16030);

return statearr_16062;
})();
var statearr_16063_16083 = state_16050__$1;
(statearr_16063_16083[(2)] = inst_16031);

(statearr_16063_16083[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16051 === (14))){
var inst_16044 = (state_16050[(2)]);
var state_16050__$1 = state_16050;
var statearr_16064_16084 = state_16050__$1;
(statearr_16064_16084[(2)] = inst_16044);

(statearr_16064_16084[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16051 === (10))){
var state_16050__$1 = state_16050;
var statearr_16065_16085 = state_16050__$1;
(statearr_16065_16085[(2)] = fc);

(statearr_16065_16085[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16051 === (8))){
var inst_16039 = (state_16050[(2)]);
var state_16050__$1 = state_16050;
if(cljs.core.truth_(inst_16039)){
var statearr_16066_16086 = state_16050__$1;
(statearr_16066_16086[(1)] = (12));

} else {
var statearr_16067_16087 = state_16050__$1;
(statearr_16067_16087[(1)] = (13));

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
});})(c__15635__auto___16073,tc,fc))
;
return ((function (switch__15535__auto__,c__15635__auto___16073,tc,fc){
return (function() {
var cljs$core$async$state_machine__15536__auto__ = null;
var cljs$core$async$state_machine__15536__auto____0 = (function (){
var statearr_16068 = [null,null,null,null,null,null,null,null,null];
(statearr_16068[(0)] = cljs$core$async$state_machine__15536__auto__);

(statearr_16068[(1)] = (1));

return statearr_16068;
});
var cljs$core$async$state_machine__15536__auto____1 = (function (state_16050){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_16050);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e16069){if((e16069 instanceof Object)){
var ex__15539__auto__ = e16069;
var statearr_16070_16088 = state_16050;
(statearr_16070_16088[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16050);

return cljs.core.cst$kw$recur;
} else {
throw e16069;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__16089 = state_16050;
state_16050 = G__16089;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$state_machine__15536__auto__ = function(state_16050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15536__auto____1.call(this,state_16050);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15536__auto____0;
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15536__auto____1;
return cljs$core$async$state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto___16073,tc,fc))
})();
var state__15637__auto__ = (function (){var statearr_16071 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_16071[(6)] = c__15635__auto___16073);

return statearr_16071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto___16073,tc,fc))
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
var c__15635__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto__){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto__){
return (function (state_16110){
var state_val_16111 = (state_16110[(1)]);
if((state_val_16111 === (7))){
var inst_16106 = (state_16110[(2)]);
var state_16110__$1 = state_16110;
var statearr_16112_16130 = state_16110__$1;
(statearr_16112_16130[(2)] = inst_16106);

(statearr_16112_16130[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16111 === (1))){
var inst_16090 = init;
var state_16110__$1 = (function (){var statearr_16113 = state_16110;
(statearr_16113[(7)] = inst_16090);

return statearr_16113;
})();
var statearr_16114_16131 = state_16110__$1;
(statearr_16114_16131[(2)] = null);

(statearr_16114_16131[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16111 === (4))){
var inst_16093 = (state_16110[(8)]);
var inst_16093__$1 = (state_16110[(2)]);
var inst_16094 = (inst_16093__$1 == null);
var state_16110__$1 = (function (){var statearr_16115 = state_16110;
(statearr_16115[(8)] = inst_16093__$1);

return statearr_16115;
})();
if(cljs.core.truth_(inst_16094)){
var statearr_16116_16132 = state_16110__$1;
(statearr_16116_16132[(1)] = (5));

} else {
var statearr_16117_16133 = state_16110__$1;
(statearr_16117_16133[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16111 === (6))){
var inst_16093 = (state_16110[(8)]);
var inst_16097 = (state_16110[(9)]);
var inst_16090 = (state_16110[(7)]);
var inst_16097__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16090,inst_16093) : f.call(null,inst_16090,inst_16093));
var inst_16098 = cljs.core.reduced_QMARK_(inst_16097__$1);
var state_16110__$1 = (function (){var statearr_16118 = state_16110;
(statearr_16118[(9)] = inst_16097__$1);

return statearr_16118;
})();
if(inst_16098){
var statearr_16119_16134 = state_16110__$1;
(statearr_16119_16134[(1)] = (8));

} else {
var statearr_16120_16135 = state_16110__$1;
(statearr_16120_16135[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16111 === (3))){
var inst_16108 = (state_16110[(2)]);
var state_16110__$1 = state_16110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16110__$1,inst_16108);
} else {
if((state_val_16111 === (2))){
var state_16110__$1 = state_16110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16110__$1,(4),ch);
} else {
if((state_val_16111 === (9))){
var inst_16097 = (state_16110[(9)]);
var inst_16090 = inst_16097;
var state_16110__$1 = (function (){var statearr_16121 = state_16110;
(statearr_16121[(7)] = inst_16090);

return statearr_16121;
})();
var statearr_16122_16136 = state_16110__$1;
(statearr_16122_16136[(2)] = null);

(statearr_16122_16136[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16111 === (5))){
var inst_16090 = (state_16110[(7)]);
var state_16110__$1 = state_16110;
var statearr_16123_16137 = state_16110__$1;
(statearr_16123_16137[(2)] = inst_16090);

(statearr_16123_16137[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16111 === (10))){
var inst_16104 = (state_16110[(2)]);
var state_16110__$1 = state_16110;
var statearr_16124_16138 = state_16110__$1;
(statearr_16124_16138[(2)] = inst_16104);

(statearr_16124_16138[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16111 === (8))){
var inst_16097 = (state_16110[(9)]);
var inst_16100 = cljs.core.deref(inst_16097);
var state_16110__$1 = state_16110;
var statearr_16125_16139 = state_16110__$1;
(statearr_16125_16139[(2)] = inst_16100);

(statearr_16125_16139[(1)] = (10));


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
});})(c__15635__auto__))
;
return ((function (switch__15535__auto__,c__15635__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15536__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15536__auto____0 = (function (){
var statearr_16126 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16126[(0)] = cljs$core$async$reduce_$_state_machine__15536__auto__);

(statearr_16126[(1)] = (1));

return statearr_16126;
});
var cljs$core$async$reduce_$_state_machine__15536__auto____1 = (function (state_16110){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_16110);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e16127){if((e16127 instanceof Object)){
var ex__15539__auto__ = e16127;
var statearr_16128_16140 = state_16110;
(statearr_16128_16140[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16110);

return cljs.core.cst$kw$recur;
} else {
throw e16127;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__16141 = state_16110;
state_16110 = G__16141;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15536__auto__ = function(state_16110){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15536__auto____1.call(this,state_16110);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15536__auto____0;
cljs$core$async$reduce_$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15536__auto____1;
return cljs$core$async$reduce_$_state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto__))
})();
var state__15637__auto__ = (function (){var statearr_16129 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_16129[(6)] = c__15635__auto__);

return statearr_16129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto__))
);

return c__15635__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15635__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto__,f__$1){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto__,f__$1){
return (function (state_16147){
var state_val_16148 = (state_16147[(1)]);
if((state_val_16148 === (1))){
var inst_16142 = cljs.core.async.reduce(f__$1,init,ch);
var state_16147__$1 = state_16147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16147__$1,(2),inst_16142);
} else {
if((state_val_16148 === (2))){
var inst_16144 = (state_16147[(2)]);
var inst_16145 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16144) : f__$1.call(null,inst_16144));
var state_16147__$1 = state_16147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16147__$1,inst_16145);
} else {
return null;
}
}
});})(c__15635__auto__,f__$1))
;
return ((function (switch__15535__auto__,c__15635__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15536__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15536__auto____0 = (function (){
var statearr_16149 = [null,null,null,null,null,null,null];
(statearr_16149[(0)] = cljs$core$async$transduce_$_state_machine__15536__auto__);

(statearr_16149[(1)] = (1));

return statearr_16149;
});
var cljs$core$async$transduce_$_state_machine__15536__auto____1 = (function (state_16147){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_16147);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e16150){if((e16150 instanceof Object)){
var ex__15539__auto__ = e16150;
var statearr_16151_16153 = state_16147;
(statearr_16151_16153[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16147);

return cljs.core.cst$kw$recur;
} else {
throw e16150;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__16154 = state_16147;
state_16147 = G__16154;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15536__auto__ = function(state_16147){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15536__auto____1.call(this,state_16147);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15536__auto____0;
cljs$core$async$transduce_$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15536__auto____1;
return cljs$core$async$transduce_$_state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto__,f__$1))
})();
var state__15637__auto__ = (function (){var statearr_16152 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_16152[(6)] = c__15635__auto__);

return statearr_16152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto__,f__$1))
);

return c__15635__auto__;
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
var G__16156 = arguments.length;
switch (G__16156) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15635__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto__){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto__){
return (function (state_16181){
var state_val_16182 = (state_16181[(1)]);
if((state_val_16182 === (7))){
var inst_16163 = (state_16181[(2)]);
var state_16181__$1 = state_16181;
var statearr_16183_16204 = state_16181__$1;
(statearr_16183_16204[(2)] = inst_16163);

(statearr_16183_16204[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16182 === (1))){
var inst_16157 = cljs.core.seq(coll);
var inst_16158 = inst_16157;
var state_16181__$1 = (function (){var statearr_16184 = state_16181;
(statearr_16184[(7)] = inst_16158);

return statearr_16184;
})();
var statearr_16185_16205 = state_16181__$1;
(statearr_16185_16205[(2)] = null);

(statearr_16185_16205[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16182 === (4))){
var inst_16158 = (state_16181[(7)]);
var inst_16161 = cljs.core.first(inst_16158);
var state_16181__$1 = state_16181;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16181__$1,(7),ch,inst_16161);
} else {
if((state_val_16182 === (13))){
var inst_16175 = (state_16181[(2)]);
var state_16181__$1 = state_16181;
var statearr_16186_16206 = state_16181__$1;
(statearr_16186_16206[(2)] = inst_16175);

(statearr_16186_16206[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16182 === (6))){
var inst_16166 = (state_16181[(2)]);
var state_16181__$1 = state_16181;
if(cljs.core.truth_(inst_16166)){
var statearr_16187_16207 = state_16181__$1;
(statearr_16187_16207[(1)] = (8));

} else {
var statearr_16188_16208 = state_16181__$1;
(statearr_16188_16208[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16182 === (3))){
var inst_16179 = (state_16181[(2)]);
var state_16181__$1 = state_16181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16181__$1,inst_16179);
} else {
if((state_val_16182 === (12))){
var state_16181__$1 = state_16181;
var statearr_16189_16209 = state_16181__$1;
(statearr_16189_16209[(2)] = null);

(statearr_16189_16209[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16182 === (2))){
var inst_16158 = (state_16181[(7)]);
var state_16181__$1 = state_16181;
if(cljs.core.truth_(inst_16158)){
var statearr_16190_16210 = state_16181__$1;
(statearr_16190_16210[(1)] = (4));

} else {
var statearr_16191_16211 = state_16181__$1;
(statearr_16191_16211[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16182 === (11))){
var inst_16172 = cljs.core.async.close_BANG_(ch);
var state_16181__$1 = state_16181;
var statearr_16192_16212 = state_16181__$1;
(statearr_16192_16212[(2)] = inst_16172);

(statearr_16192_16212[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16182 === (9))){
var state_16181__$1 = state_16181;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16193_16213 = state_16181__$1;
(statearr_16193_16213[(1)] = (11));

} else {
var statearr_16194_16214 = state_16181__$1;
(statearr_16194_16214[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16182 === (5))){
var inst_16158 = (state_16181[(7)]);
var state_16181__$1 = state_16181;
var statearr_16195_16215 = state_16181__$1;
(statearr_16195_16215[(2)] = inst_16158);

(statearr_16195_16215[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16182 === (10))){
var inst_16177 = (state_16181[(2)]);
var state_16181__$1 = state_16181;
var statearr_16196_16216 = state_16181__$1;
(statearr_16196_16216[(2)] = inst_16177);

(statearr_16196_16216[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16182 === (8))){
var inst_16158 = (state_16181[(7)]);
var inst_16168 = cljs.core.next(inst_16158);
var inst_16158__$1 = inst_16168;
var state_16181__$1 = (function (){var statearr_16197 = state_16181;
(statearr_16197[(7)] = inst_16158__$1);

return statearr_16197;
})();
var statearr_16198_16217 = state_16181__$1;
(statearr_16198_16217[(2)] = null);

(statearr_16198_16217[(1)] = (2));


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
});})(c__15635__auto__))
;
return ((function (switch__15535__auto__,c__15635__auto__){
return (function() {
var cljs$core$async$state_machine__15536__auto__ = null;
var cljs$core$async$state_machine__15536__auto____0 = (function (){
var statearr_16199 = [null,null,null,null,null,null,null,null];
(statearr_16199[(0)] = cljs$core$async$state_machine__15536__auto__);

(statearr_16199[(1)] = (1));

return statearr_16199;
});
var cljs$core$async$state_machine__15536__auto____1 = (function (state_16181){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_16181);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e16200){if((e16200 instanceof Object)){
var ex__15539__auto__ = e16200;
var statearr_16201_16218 = state_16181;
(statearr_16201_16218[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16181);

return cljs.core.cst$kw$recur;
} else {
throw e16200;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__16219 = state_16181;
state_16181 = G__16219;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$state_machine__15536__auto__ = function(state_16181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15536__auto____1.call(this,state_16181);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15536__auto____0;
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15536__auto____1;
return cljs$core$async$state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto__))
})();
var state__15637__auto__ = (function (){var statearr_16202 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_16202[(6)] = c__15635__auto__);

return statearr_16202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto__))
);

return c__15635__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__8308__auto__ = (((_ == null))?null:_);
var m__8309__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8308__auto__)]);
if(!((m__8309__auto__ == null))){
return (m__8309__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8309__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8309__auto__.call(null,_));
} else {
var m__8309__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8309__auto____$1 == null))){
return (m__8309__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8309__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8309__auto____$1.call(null,_));
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__8308__auto__ = (((m == null))?null:m);
var m__8309__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8308__auto__)]);
if(!((m__8309__auto__ == null))){
return (m__8309__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8309__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8309__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__8309__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8309__auto____$1 == null))){
return (m__8309__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8309__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8309__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8308__auto__ = (((m == null))?null:m);
var m__8309__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8308__auto__)]);
if(!((m__8309__auto__ == null))){
return (m__8309__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8309__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8309__auto__.call(null,m,ch));
} else {
var m__8309__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8309__auto____$1 == null))){
return (m__8309__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8309__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8309__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8308__auto__ = (((m == null))?null:m);
var m__8309__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8308__auto__)]);
if(!((m__8309__auto__ == null))){
return (m__8309__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8309__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8309__auto__.call(null,m));
} else {
var m__8309__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8309__auto____$1 == null))){
return (m__8309__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8309__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8309__auto____$1.call(null,m));
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
if(typeof cljs.core.async.t_cljs$core$async16220 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16220 = (function (ch,cs,meta16221){
this.ch = ch;
this.cs = cs;
this.meta16221 = meta16221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16222,meta16221__$1){
var self__ = this;
var _16222__$1 = this;
return (new cljs.core.async.t_cljs$core$async16220(self__.ch,self__.cs,meta16221__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16220.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16222){
var self__ = this;
var _16222__$1 = this;
return self__.meta16221;
});})(cs))
;

cljs.core.async.t_cljs$core$async16220.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16220.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16220.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16220.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16220.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16220.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16220.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16221], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16220.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16220";

cljs.core.async.t_cljs$core$async16220.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8250__auto__,writer__8251__auto__,opt__8252__auto__){
return cljs.core._write(writer__8251__auto__,"cljs.core.async/t_cljs$core$async16220");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16220 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16220(ch__$1,cs__$1,meta16221){
return (new cljs.core.async.t_cljs$core$async16220(ch__$1,cs__$1,meta16221));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16220(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15635__auto___16442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto___16442,cs,m,dchan,dctr,done){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto___16442,cs,m,dchan,dctr,done){
return (function (state_16357){
var state_val_16358 = (state_16357[(1)]);
if((state_val_16358 === (7))){
var inst_16353 = (state_16357[(2)]);
var state_16357__$1 = state_16357;
var statearr_16359_16443 = state_16357__$1;
(statearr_16359_16443[(2)] = inst_16353);

(statearr_16359_16443[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (20))){
var inst_16256 = (state_16357[(7)]);
var inst_16268 = cljs.core.first(inst_16256);
var inst_16269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16268,(0),null);
var inst_16270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16268,(1),null);
var state_16357__$1 = (function (){var statearr_16360 = state_16357;
(statearr_16360[(8)] = inst_16269);

return statearr_16360;
})();
if(cljs.core.truth_(inst_16270)){
var statearr_16361_16444 = state_16357__$1;
(statearr_16361_16444[(1)] = (22));

} else {
var statearr_16362_16445 = state_16357__$1;
(statearr_16362_16445[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (27))){
var inst_16300 = (state_16357[(9)]);
var inst_16225 = (state_16357[(10)]);
var inst_16305 = (state_16357[(11)]);
var inst_16298 = (state_16357[(12)]);
var inst_16305__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16298,inst_16300);
var inst_16306 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16305__$1,inst_16225,done);
var state_16357__$1 = (function (){var statearr_16363 = state_16357;
(statearr_16363[(11)] = inst_16305__$1);

return statearr_16363;
})();
if(cljs.core.truth_(inst_16306)){
var statearr_16364_16446 = state_16357__$1;
(statearr_16364_16446[(1)] = (30));

} else {
var statearr_16365_16447 = state_16357__$1;
(statearr_16365_16447[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (1))){
var state_16357__$1 = state_16357;
var statearr_16366_16448 = state_16357__$1;
(statearr_16366_16448[(2)] = null);

(statearr_16366_16448[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (24))){
var inst_16256 = (state_16357[(7)]);
var inst_16275 = (state_16357[(2)]);
var inst_16276 = cljs.core.next(inst_16256);
var inst_16234 = inst_16276;
var inst_16235 = null;
var inst_16236 = (0);
var inst_16237 = (0);
var state_16357__$1 = (function (){var statearr_16367 = state_16357;
(statearr_16367[(13)] = inst_16234);

(statearr_16367[(14)] = inst_16237);

(statearr_16367[(15)] = inst_16275);

(statearr_16367[(16)] = inst_16235);

(statearr_16367[(17)] = inst_16236);

return statearr_16367;
})();
var statearr_16368_16449 = state_16357__$1;
(statearr_16368_16449[(2)] = null);

(statearr_16368_16449[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (39))){
var state_16357__$1 = state_16357;
var statearr_16372_16450 = state_16357__$1;
(statearr_16372_16450[(2)] = null);

(statearr_16372_16450[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (4))){
var inst_16225 = (state_16357[(10)]);
var inst_16225__$1 = (state_16357[(2)]);
var inst_16226 = (inst_16225__$1 == null);
var state_16357__$1 = (function (){var statearr_16373 = state_16357;
(statearr_16373[(10)] = inst_16225__$1);

return statearr_16373;
})();
if(cljs.core.truth_(inst_16226)){
var statearr_16374_16451 = state_16357__$1;
(statearr_16374_16451[(1)] = (5));

} else {
var statearr_16375_16452 = state_16357__$1;
(statearr_16375_16452[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (15))){
var inst_16234 = (state_16357[(13)]);
var inst_16237 = (state_16357[(14)]);
var inst_16235 = (state_16357[(16)]);
var inst_16236 = (state_16357[(17)]);
var inst_16252 = (state_16357[(2)]);
var inst_16253 = (inst_16237 + (1));
var tmp16369 = inst_16234;
var tmp16370 = inst_16235;
var tmp16371 = inst_16236;
var inst_16234__$1 = tmp16369;
var inst_16235__$1 = tmp16370;
var inst_16236__$1 = tmp16371;
var inst_16237__$1 = inst_16253;
var state_16357__$1 = (function (){var statearr_16376 = state_16357;
(statearr_16376[(13)] = inst_16234__$1);

(statearr_16376[(14)] = inst_16237__$1);

(statearr_16376[(18)] = inst_16252);

(statearr_16376[(16)] = inst_16235__$1);

(statearr_16376[(17)] = inst_16236__$1);

return statearr_16376;
})();
var statearr_16377_16453 = state_16357__$1;
(statearr_16377_16453[(2)] = null);

(statearr_16377_16453[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (21))){
var inst_16279 = (state_16357[(2)]);
var state_16357__$1 = state_16357;
var statearr_16381_16454 = state_16357__$1;
(statearr_16381_16454[(2)] = inst_16279);

(statearr_16381_16454[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (31))){
var inst_16305 = (state_16357[(11)]);
var inst_16309 = done(null);
var inst_16310 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16305);
var state_16357__$1 = (function (){var statearr_16382 = state_16357;
(statearr_16382[(19)] = inst_16309);

return statearr_16382;
})();
var statearr_16383_16455 = state_16357__$1;
(statearr_16383_16455[(2)] = inst_16310);

(statearr_16383_16455[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (32))){
var inst_16297 = (state_16357[(20)]);
var inst_16300 = (state_16357[(9)]);
var inst_16298 = (state_16357[(12)]);
var inst_16299 = (state_16357[(21)]);
var inst_16312 = (state_16357[(2)]);
var inst_16313 = (inst_16300 + (1));
var tmp16378 = inst_16297;
var tmp16379 = inst_16298;
var tmp16380 = inst_16299;
var inst_16297__$1 = tmp16378;
var inst_16298__$1 = tmp16379;
var inst_16299__$1 = tmp16380;
var inst_16300__$1 = inst_16313;
var state_16357__$1 = (function (){var statearr_16384 = state_16357;
(statearr_16384[(20)] = inst_16297__$1);

(statearr_16384[(9)] = inst_16300__$1);

(statearr_16384[(12)] = inst_16298__$1);

(statearr_16384[(22)] = inst_16312);

(statearr_16384[(21)] = inst_16299__$1);

return statearr_16384;
})();
var statearr_16385_16456 = state_16357__$1;
(statearr_16385_16456[(2)] = null);

(statearr_16385_16456[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (40))){
var inst_16325 = (state_16357[(23)]);
var inst_16329 = done(null);
var inst_16330 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16325);
var state_16357__$1 = (function (){var statearr_16386 = state_16357;
(statearr_16386[(24)] = inst_16329);

return statearr_16386;
})();
var statearr_16387_16457 = state_16357__$1;
(statearr_16387_16457[(2)] = inst_16330);

(statearr_16387_16457[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (33))){
var inst_16316 = (state_16357[(25)]);
var inst_16318 = cljs.core.chunked_seq_QMARK_(inst_16316);
var state_16357__$1 = state_16357;
if(inst_16318){
var statearr_16388_16458 = state_16357__$1;
(statearr_16388_16458[(1)] = (36));

} else {
var statearr_16389_16459 = state_16357__$1;
(statearr_16389_16459[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (13))){
var inst_16246 = (state_16357[(26)]);
var inst_16249 = cljs.core.async.close_BANG_(inst_16246);
var state_16357__$1 = state_16357;
var statearr_16390_16460 = state_16357__$1;
(statearr_16390_16460[(2)] = inst_16249);

(statearr_16390_16460[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (22))){
var inst_16269 = (state_16357[(8)]);
var inst_16272 = cljs.core.async.close_BANG_(inst_16269);
var state_16357__$1 = state_16357;
var statearr_16391_16461 = state_16357__$1;
(statearr_16391_16461[(2)] = inst_16272);

(statearr_16391_16461[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (36))){
var inst_16316 = (state_16357[(25)]);
var inst_16320 = cljs.core.chunk_first(inst_16316);
var inst_16321 = cljs.core.chunk_rest(inst_16316);
var inst_16322 = cljs.core.count(inst_16320);
var inst_16297 = inst_16321;
var inst_16298 = inst_16320;
var inst_16299 = inst_16322;
var inst_16300 = (0);
var state_16357__$1 = (function (){var statearr_16392 = state_16357;
(statearr_16392[(20)] = inst_16297);

(statearr_16392[(9)] = inst_16300);

(statearr_16392[(12)] = inst_16298);

(statearr_16392[(21)] = inst_16299);

return statearr_16392;
})();
var statearr_16393_16462 = state_16357__$1;
(statearr_16393_16462[(2)] = null);

(statearr_16393_16462[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (41))){
var inst_16316 = (state_16357[(25)]);
var inst_16332 = (state_16357[(2)]);
var inst_16333 = cljs.core.next(inst_16316);
var inst_16297 = inst_16333;
var inst_16298 = null;
var inst_16299 = (0);
var inst_16300 = (0);
var state_16357__$1 = (function (){var statearr_16394 = state_16357;
(statearr_16394[(20)] = inst_16297);

(statearr_16394[(9)] = inst_16300);

(statearr_16394[(12)] = inst_16298);

(statearr_16394[(27)] = inst_16332);

(statearr_16394[(21)] = inst_16299);

return statearr_16394;
})();
var statearr_16395_16463 = state_16357__$1;
(statearr_16395_16463[(2)] = null);

(statearr_16395_16463[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (43))){
var state_16357__$1 = state_16357;
var statearr_16396_16464 = state_16357__$1;
(statearr_16396_16464[(2)] = null);

(statearr_16396_16464[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (29))){
var inst_16341 = (state_16357[(2)]);
var state_16357__$1 = state_16357;
var statearr_16397_16465 = state_16357__$1;
(statearr_16397_16465[(2)] = inst_16341);

(statearr_16397_16465[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (44))){
var inst_16350 = (state_16357[(2)]);
var state_16357__$1 = (function (){var statearr_16398 = state_16357;
(statearr_16398[(28)] = inst_16350);

return statearr_16398;
})();
var statearr_16399_16466 = state_16357__$1;
(statearr_16399_16466[(2)] = null);

(statearr_16399_16466[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (6))){
var inst_16289 = (state_16357[(29)]);
var inst_16288 = cljs.core.deref(cs);
var inst_16289__$1 = cljs.core.keys(inst_16288);
var inst_16290 = cljs.core.count(inst_16289__$1);
var inst_16291 = cljs.core.reset_BANG_(dctr,inst_16290);
var inst_16296 = cljs.core.seq(inst_16289__$1);
var inst_16297 = inst_16296;
var inst_16298 = null;
var inst_16299 = (0);
var inst_16300 = (0);
var state_16357__$1 = (function (){var statearr_16400 = state_16357;
(statearr_16400[(20)] = inst_16297);

(statearr_16400[(9)] = inst_16300);

(statearr_16400[(29)] = inst_16289__$1);

(statearr_16400[(12)] = inst_16298);

(statearr_16400[(30)] = inst_16291);

(statearr_16400[(21)] = inst_16299);

return statearr_16400;
})();
var statearr_16401_16467 = state_16357__$1;
(statearr_16401_16467[(2)] = null);

(statearr_16401_16467[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (28))){
var inst_16297 = (state_16357[(20)]);
var inst_16316 = (state_16357[(25)]);
var inst_16316__$1 = cljs.core.seq(inst_16297);
var state_16357__$1 = (function (){var statearr_16402 = state_16357;
(statearr_16402[(25)] = inst_16316__$1);

return statearr_16402;
})();
if(inst_16316__$1){
var statearr_16403_16468 = state_16357__$1;
(statearr_16403_16468[(1)] = (33));

} else {
var statearr_16404_16469 = state_16357__$1;
(statearr_16404_16469[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (25))){
var inst_16300 = (state_16357[(9)]);
var inst_16299 = (state_16357[(21)]);
var inst_16302 = (inst_16300 < inst_16299);
var inst_16303 = inst_16302;
var state_16357__$1 = state_16357;
if(cljs.core.truth_(inst_16303)){
var statearr_16405_16470 = state_16357__$1;
(statearr_16405_16470[(1)] = (27));

} else {
var statearr_16406_16471 = state_16357__$1;
(statearr_16406_16471[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (34))){
var state_16357__$1 = state_16357;
var statearr_16407_16472 = state_16357__$1;
(statearr_16407_16472[(2)] = null);

(statearr_16407_16472[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (17))){
var state_16357__$1 = state_16357;
var statearr_16408_16473 = state_16357__$1;
(statearr_16408_16473[(2)] = null);

(statearr_16408_16473[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (3))){
var inst_16355 = (state_16357[(2)]);
var state_16357__$1 = state_16357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16357__$1,inst_16355);
} else {
if((state_val_16358 === (12))){
var inst_16284 = (state_16357[(2)]);
var state_16357__$1 = state_16357;
var statearr_16409_16474 = state_16357__$1;
(statearr_16409_16474[(2)] = inst_16284);

(statearr_16409_16474[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (2))){
var state_16357__$1 = state_16357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16357__$1,(4),ch);
} else {
if((state_val_16358 === (23))){
var state_16357__$1 = state_16357;
var statearr_16410_16475 = state_16357__$1;
(statearr_16410_16475[(2)] = null);

(statearr_16410_16475[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (35))){
var inst_16339 = (state_16357[(2)]);
var state_16357__$1 = state_16357;
var statearr_16411_16476 = state_16357__$1;
(statearr_16411_16476[(2)] = inst_16339);

(statearr_16411_16476[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (19))){
var inst_16256 = (state_16357[(7)]);
var inst_16260 = cljs.core.chunk_first(inst_16256);
var inst_16261 = cljs.core.chunk_rest(inst_16256);
var inst_16262 = cljs.core.count(inst_16260);
var inst_16234 = inst_16261;
var inst_16235 = inst_16260;
var inst_16236 = inst_16262;
var inst_16237 = (0);
var state_16357__$1 = (function (){var statearr_16412 = state_16357;
(statearr_16412[(13)] = inst_16234);

(statearr_16412[(14)] = inst_16237);

(statearr_16412[(16)] = inst_16235);

(statearr_16412[(17)] = inst_16236);

return statearr_16412;
})();
var statearr_16413_16477 = state_16357__$1;
(statearr_16413_16477[(2)] = null);

(statearr_16413_16477[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (11))){
var inst_16234 = (state_16357[(13)]);
var inst_16256 = (state_16357[(7)]);
var inst_16256__$1 = cljs.core.seq(inst_16234);
var state_16357__$1 = (function (){var statearr_16414 = state_16357;
(statearr_16414[(7)] = inst_16256__$1);

return statearr_16414;
})();
if(inst_16256__$1){
var statearr_16415_16478 = state_16357__$1;
(statearr_16415_16478[(1)] = (16));

} else {
var statearr_16416_16479 = state_16357__$1;
(statearr_16416_16479[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (9))){
var inst_16286 = (state_16357[(2)]);
var state_16357__$1 = state_16357;
var statearr_16417_16480 = state_16357__$1;
(statearr_16417_16480[(2)] = inst_16286);

(statearr_16417_16480[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (5))){
var inst_16232 = cljs.core.deref(cs);
var inst_16233 = cljs.core.seq(inst_16232);
var inst_16234 = inst_16233;
var inst_16235 = null;
var inst_16236 = (0);
var inst_16237 = (0);
var state_16357__$1 = (function (){var statearr_16418 = state_16357;
(statearr_16418[(13)] = inst_16234);

(statearr_16418[(14)] = inst_16237);

(statearr_16418[(16)] = inst_16235);

(statearr_16418[(17)] = inst_16236);

return statearr_16418;
})();
var statearr_16419_16481 = state_16357__$1;
(statearr_16419_16481[(2)] = null);

(statearr_16419_16481[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (14))){
var state_16357__$1 = state_16357;
var statearr_16420_16482 = state_16357__$1;
(statearr_16420_16482[(2)] = null);

(statearr_16420_16482[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (45))){
var inst_16347 = (state_16357[(2)]);
var state_16357__$1 = state_16357;
var statearr_16421_16483 = state_16357__$1;
(statearr_16421_16483[(2)] = inst_16347);

(statearr_16421_16483[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (26))){
var inst_16289 = (state_16357[(29)]);
var inst_16343 = (state_16357[(2)]);
var inst_16344 = cljs.core.seq(inst_16289);
var state_16357__$1 = (function (){var statearr_16422 = state_16357;
(statearr_16422[(31)] = inst_16343);

return statearr_16422;
})();
if(inst_16344){
var statearr_16423_16484 = state_16357__$1;
(statearr_16423_16484[(1)] = (42));

} else {
var statearr_16424_16485 = state_16357__$1;
(statearr_16424_16485[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (16))){
var inst_16256 = (state_16357[(7)]);
var inst_16258 = cljs.core.chunked_seq_QMARK_(inst_16256);
var state_16357__$1 = state_16357;
if(inst_16258){
var statearr_16425_16486 = state_16357__$1;
(statearr_16425_16486[(1)] = (19));

} else {
var statearr_16426_16487 = state_16357__$1;
(statearr_16426_16487[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (38))){
var inst_16336 = (state_16357[(2)]);
var state_16357__$1 = state_16357;
var statearr_16427_16488 = state_16357__$1;
(statearr_16427_16488[(2)] = inst_16336);

(statearr_16427_16488[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (30))){
var state_16357__$1 = state_16357;
var statearr_16428_16489 = state_16357__$1;
(statearr_16428_16489[(2)] = null);

(statearr_16428_16489[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (10))){
var inst_16237 = (state_16357[(14)]);
var inst_16235 = (state_16357[(16)]);
var inst_16245 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16235,inst_16237);
var inst_16246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16245,(0),null);
var inst_16247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16245,(1),null);
var state_16357__$1 = (function (){var statearr_16429 = state_16357;
(statearr_16429[(26)] = inst_16246);

return statearr_16429;
})();
if(cljs.core.truth_(inst_16247)){
var statearr_16430_16490 = state_16357__$1;
(statearr_16430_16490[(1)] = (13));

} else {
var statearr_16431_16491 = state_16357__$1;
(statearr_16431_16491[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (18))){
var inst_16282 = (state_16357[(2)]);
var state_16357__$1 = state_16357;
var statearr_16432_16492 = state_16357__$1;
(statearr_16432_16492[(2)] = inst_16282);

(statearr_16432_16492[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (42))){
var state_16357__$1 = state_16357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16357__$1,(45),dchan);
} else {
if((state_val_16358 === (37))){
var inst_16316 = (state_16357[(25)]);
var inst_16225 = (state_16357[(10)]);
var inst_16325 = (state_16357[(23)]);
var inst_16325__$1 = cljs.core.first(inst_16316);
var inst_16326 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16325__$1,inst_16225,done);
var state_16357__$1 = (function (){var statearr_16433 = state_16357;
(statearr_16433[(23)] = inst_16325__$1);

return statearr_16433;
})();
if(cljs.core.truth_(inst_16326)){
var statearr_16434_16493 = state_16357__$1;
(statearr_16434_16493[(1)] = (39));

} else {
var statearr_16435_16494 = state_16357__$1;
(statearr_16435_16494[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16358 === (8))){
var inst_16237 = (state_16357[(14)]);
var inst_16236 = (state_16357[(17)]);
var inst_16239 = (inst_16237 < inst_16236);
var inst_16240 = inst_16239;
var state_16357__$1 = state_16357;
if(cljs.core.truth_(inst_16240)){
var statearr_16436_16495 = state_16357__$1;
(statearr_16436_16495[(1)] = (10));

} else {
var statearr_16437_16496 = state_16357__$1;
(statearr_16437_16496[(1)] = (11));

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
});})(c__15635__auto___16442,cs,m,dchan,dctr,done))
;
return ((function (switch__15535__auto__,c__15635__auto___16442,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15536__auto__ = null;
var cljs$core$async$mult_$_state_machine__15536__auto____0 = (function (){
var statearr_16438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16438[(0)] = cljs$core$async$mult_$_state_machine__15536__auto__);

(statearr_16438[(1)] = (1));

return statearr_16438;
});
var cljs$core$async$mult_$_state_machine__15536__auto____1 = (function (state_16357){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_16357);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e16439){if((e16439 instanceof Object)){
var ex__15539__auto__ = e16439;
var statearr_16440_16497 = state_16357;
(statearr_16440_16497[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16357);

return cljs.core.cst$kw$recur;
} else {
throw e16439;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__16498 = state_16357;
state_16357 = G__16498;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15536__auto__ = function(state_16357){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15536__auto____1.call(this,state_16357);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15536__auto____0;
cljs$core$async$mult_$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15536__auto____1;
return cljs$core$async$mult_$_state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto___16442,cs,m,dchan,dctr,done))
})();
var state__15637__auto__ = (function (){var statearr_16441 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_16441[(6)] = c__15635__auto___16442);

return statearr_16441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto___16442,cs,m,dchan,dctr,done))
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
var G__16500 = arguments.length;
switch (G__16500) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8308__auto__ = (((m == null))?null:m);
var m__8309__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8308__auto__)]);
if(!((m__8309__auto__ == null))){
return (m__8309__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8309__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8309__auto__.call(null,m,ch));
} else {
var m__8309__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8309__auto____$1 == null))){
return (m__8309__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8309__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8309__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8308__auto__ = (((m == null))?null:m);
var m__8309__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8308__auto__)]);
if(!((m__8309__auto__ == null))){
return (m__8309__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8309__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8309__auto__.call(null,m,ch));
} else {
var m__8309__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8309__auto____$1 == null))){
return (m__8309__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8309__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8309__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8308__auto__ = (((m == null))?null:m);
var m__8309__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8308__auto__)]);
if(!((m__8309__auto__ == null))){
return (m__8309__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8309__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8309__auto__.call(null,m));
} else {
var m__8309__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8309__auto____$1 == null))){
return (m__8309__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8309__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8309__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8308__auto__ = (((m == null))?null:m);
var m__8309__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8308__auto__)]);
if(!((m__8309__auto__ == null))){
return (m__8309__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8309__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8309__auto__.call(null,m,state_map));
} else {
var m__8309__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8309__auto____$1 == null))){
return (m__8309__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8309__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8309__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8308__auto__ = (((m == null))?null:m);
var m__8309__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8308__auto__)]);
if(!((m__8309__auto__ == null))){
return (m__8309__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8309__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8309__auto__.call(null,m,mode));
} else {
var m__8309__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8309__auto____$1 == null))){
return (m__8309__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8309__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8309__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8796__auto__ = [];
var len__8789__auto___16512 = arguments.length;
var i__8790__auto___16513 = (0);
while(true){
if((i__8790__auto___16513 < len__8789__auto___16512)){
args__8796__auto__.push((arguments[i__8790__auto___16513]));

var G__16514 = (i__8790__auto___16513 + (1));
i__8790__auto___16513 = G__16514;
continue;
} else {
}
break;
}

var argseq__8797__auto__ = ((((3) < args__8796__auto__.length))?(new cljs.core.IndexedSeq(args__8796__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8797__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16506){
var map__16507 = p__16506;
var map__16507__$1 = ((((!((map__16507 == null)))?((((map__16507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16507):map__16507);
var opts = map__16507__$1;
var statearr_16509_16515 = state;
(statearr_16509_16515[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__16507,map__16507__$1,opts){
return (function (val){
var statearr_16510_16516 = state;
(statearr_16510_16516[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16507,map__16507__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_16511_16517 = state;
(statearr_16511_16517[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16502){
var G__16503 = cljs.core.first(seq16502);
var seq16502__$1 = cljs.core.next(seq16502);
var G__16504 = cljs.core.first(seq16502__$1);
var seq16502__$2 = cljs.core.next(seq16502__$1);
var G__16505 = cljs.core.first(seq16502__$2);
var seq16502__$3 = cljs.core.next(seq16502__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16503,G__16504,G__16505,seq16502__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16518 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16519){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16519 = meta16519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16520,meta16519__$1){
var self__ = this;
var _16520__$1 = this;
return (new cljs.core.async.t_cljs$core$async16518(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16519__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16520){
var self__ = this;
var _16520__$1 = this;
return self__.meta16519;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16518.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16518.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta16519], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16518.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16518";

cljs.core.async.t_cljs$core$async16518.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8250__auto__,writer__8251__auto__,opt__8252__auto__){
return cljs.core._write(writer__8251__auto__,"cljs.core.async/t_cljs$core$async16518");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16518 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16518(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16519){
return (new cljs.core.async.t_cljs$core$async16518(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16519));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16518(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15635__auto___16682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto___16682,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto___16682,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16622){
var state_val_16623 = (state_16622[(1)]);
if((state_val_16623 === (7))){
var inst_16537 = (state_16622[(2)]);
var state_16622__$1 = state_16622;
var statearr_16624_16683 = state_16622__$1;
(statearr_16624_16683[(2)] = inst_16537);

(statearr_16624_16683[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (20))){
var inst_16549 = (state_16622[(7)]);
var state_16622__$1 = state_16622;
var statearr_16625_16684 = state_16622__$1;
(statearr_16625_16684[(2)] = inst_16549);

(statearr_16625_16684[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (27))){
var state_16622__$1 = state_16622;
var statearr_16626_16685 = state_16622__$1;
(statearr_16626_16685[(2)] = null);

(statearr_16626_16685[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (1))){
var inst_16524 = (state_16622[(8)]);
var inst_16524__$1 = calc_state();
var inst_16526 = (inst_16524__$1 == null);
var inst_16527 = cljs.core.not(inst_16526);
var state_16622__$1 = (function (){var statearr_16627 = state_16622;
(statearr_16627[(8)] = inst_16524__$1);

return statearr_16627;
})();
if(inst_16527){
var statearr_16628_16686 = state_16622__$1;
(statearr_16628_16686[(1)] = (2));

} else {
var statearr_16629_16687 = state_16622__$1;
(statearr_16629_16687[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (24))){
var inst_16582 = (state_16622[(9)]);
var inst_16573 = (state_16622[(10)]);
var inst_16596 = (state_16622[(11)]);
var inst_16596__$1 = (inst_16573.cljs$core$IFn$_invoke$arity$1 ? inst_16573.cljs$core$IFn$_invoke$arity$1(inst_16582) : inst_16573.call(null,inst_16582));
var state_16622__$1 = (function (){var statearr_16630 = state_16622;
(statearr_16630[(11)] = inst_16596__$1);

return statearr_16630;
})();
if(cljs.core.truth_(inst_16596__$1)){
var statearr_16631_16688 = state_16622__$1;
(statearr_16631_16688[(1)] = (29));

} else {
var statearr_16632_16689 = state_16622__$1;
(statearr_16632_16689[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (4))){
var inst_16540 = (state_16622[(2)]);
var state_16622__$1 = state_16622;
if(cljs.core.truth_(inst_16540)){
var statearr_16633_16690 = state_16622__$1;
(statearr_16633_16690[(1)] = (8));

} else {
var statearr_16634_16691 = state_16622__$1;
(statearr_16634_16691[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (15))){
var inst_16567 = (state_16622[(2)]);
var state_16622__$1 = state_16622;
if(cljs.core.truth_(inst_16567)){
var statearr_16635_16692 = state_16622__$1;
(statearr_16635_16692[(1)] = (19));

} else {
var statearr_16636_16693 = state_16622__$1;
(statearr_16636_16693[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (21))){
var inst_16572 = (state_16622[(12)]);
var inst_16572__$1 = (state_16622[(2)]);
var inst_16573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16572__$1,cljs.core.cst$kw$solos);
var inst_16574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16572__$1,cljs.core.cst$kw$mutes);
var inst_16575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16572__$1,cljs.core.cst$kw$reads);
var state_16622__$1 = (function (){var statearr_16637 = state_16622;
(statearr_16637[(10)] = inst_16573);

(statearr_16637[(13)] = inst_16574);

(statearr_16637[(12)] = inst_16572__$1);

return statearr_16637;
})();
return cljs.core.async.ioc_alts_BANG_(state_16622__$1,(22),inst_16575);
} else {
if((state_val_16623 === (31))){
var inst_16604 = (state_16622[(2)]);
var state_16622__$1 = state_16622;
if(cljs.core.truth_(inst_16604)){
var statearr_16638_16694 = state_16622__$1;
(statearr_16638_16694[(1)] = (32));

} else {
var statearr_16639_16695 = state_16622__$1;
(statearr_16639_16695[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (32))){
var inst_16581 = (state_16622[(14)]);
var state_16622__$1 = state_16622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16622__$1,(35),out,inst_16581);
} else {
if((state_val_16623 === (33))){
var inst_16572 = (state_16622[(12)]);
var inst_16549 = inst_16572;
var state_16622__$1 = (function (){var statearr_16640 = state_16622;
(statearr_16640[(7)] = inst_16549);

return statearr_16640;
})();
var statearr_16641_16696 = state_16622__$1;
(statearr_16641_16696[(2)] = null);

(statearr_16641_16696[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (13))){
var inst_16549 = (state_16622[(7)]);
var inst_16556 = inst_16549.cljs$lang$protocol_mask$partition0$;
var inst_16557 = (inst_16556 & (64));
var inst_16558 = inst_16549.cljs$core$ISeq$;
var inst_16559 = (cljs.core.PROTOCOL_SENTINEL === inst_16558);
var inst_16560 = (inst_16557) || (inst_16559);
var state_16622__$1 = state_16622;
if(cljs.core.truth_(inst_16560)){
var statearr_16642_16697 = state_16622__$1;
(statearr_16642_16697[(1)] = (16));

} else {
var statearr_16643_16698 = state_16622__$1;
(statearr_16643_16698[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (22))){
var inst_16582 = (state_16622[(9)]);
var inst_16581 = (state_16622[(14)]);
var inst_16580 = (state_16622[(2)]);
var inst_16581__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16580,(0),null);
var inst_16582__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16580,(1),null);
var inst_16583 = (inst_16581__$1 == null);
var inst_16584 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16582__$1,change);
var inst_16585 = (inst_16583) || (inst_16584);
var state_16622__$1 = (function (){var statearr_16644 = state_16622;
(statearr_16644[(9)] = inst_16582__$1);

(statearr_16644[(14)] = inst_16581__$1);

return statearr_16644;
})();
if(cljs.core.truth_(inst_16585)){
var statearr_16645_16699 = state_16622__$1;
(statearr_16645_16699[(1)] = (23));

} else {
var statearr_16646_16700 = state_16622__$1;
(statearr_16646_16700[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (36))){
var inst_16572 = (state_16622[(12)]);
var inst_16549 = inst_16572;
var state_16622__$1 = (function (){var statearr_16647 = state_16622;
(statearr_16647[(7)] = inst_16549);

return statearr_16647;
})();
var statearr_16648_16701 = state_16622__$1;
(statearr_16648_16701[(2)] = null);

(statearr_16648_16701[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (29))){
var inst_16596 = (state_16622[(11)]);
var state_16622__$1 = state_16622;
var statearr_16649_16702 = state_16622__$1;
(statearr_16649_16702[(2)] = inst_16596);

(statearr_16649_16702[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (6))){
var state_16622__$1 = state_16622;
var statearr_16650_16703 = state_16622__$1;
(statearr_16650_16703[(2)] = false);

(statearr_16650_16703[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (28))){
var inst_16592 = (state_16622[(2)]);
var inst_16593 = calc_state();
var inst_16549 = inst_16593;
var state_16622__$1 = (function (){var statearr_16651 = state_16622;
(statearr_16651[(15)] = inst_16592);

(statearr_16651[(7)] = inst_16549);

return statearr_16651;
})();
var statearr_16652_16704 = state_16622__$1;
(statearr_16652_16704[(2)] = null);

(statearr_16652_16704[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (25))){
var inst_16618 = (state_16622[(2)]);
var state_16622__$1 = state_16622;
var statearr_16653_16705 = state_16622__$1;
(statearr_16653_16705[(2)] = inst_16618);

(statearr_16653_16705[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (34))){
var inst_16616 = (state_16622[(2)]);
var state_16622__$1 = state_16622;
var statearr_16654_16706 = state_16622__$1;
(statearr_16654_16706[(2)] = inst_16616);

(statearr_16654_16706[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (17))){
var state_16622__$1 = state_16622;
var statearr_16655_16707 = state_16622__$1;
(statearr_16655_16707[(2)] = false);

(statearr_16655_16707[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (3))){
var state_16622__$1 = state_16622;
var statearr_16656_16708 = state_16622__$1;
(statearr_16656_16708[(2)] = false);

(statearr_16656_16708[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (12))){
var inst_16620 = (state_16622[(2)]);
var state_16622__$1 = state_16622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16622__$1,inst_16620);
} else {
if((state_val_16623 === (2))){
var inst_16524 = (state_16622[(8)]);
var inst_16529 = inst_16524.cljs$lang$protocol_mask$partition0$;
var inst_16530 = (inst_16529 & (64));
var inst_16531 = inst_16524.cljs$core$ISeq$;
var inst_16532 = (cljs.core.PROTOCOL_SENTINEL === inst_16531);
var inst_16533 = (inst_16530) || (inst_16532);
var state_16622__$1 = state_16622;
if(cljs.core.truth_(inst_16533)){
var statearr_16657_16709 = state_16622__$1;
(statearr_16657_16709[(1)] = (5));

} else {
var statearr_16658_16710 = state_16622__$1;
(statearr_16658_16710[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (23))){
var inst_16581 = (state_16622[(14)]);
var inst_16587 = (inst_16581 == null);
var state_16622__$1 = state_16622;
if(cljs.core.truth_(inst_16587)){
var statearr_16659_16711 = state_16622__$1;
(statearr_16659_16711[(1)] = (26));

} else {
var statearr_16660_16712 = state_16622__$1;
(statearr_16660_16712[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (35))){
var inst_16607 = (state_16622[(2)]);
var state_16622__$1 = state_16622;
if(cljs.core.truth_(inst_16607)){
var statearr_16661_16713 = state_16622__$1;
(statearr_16661_16713[(1)] = (36));

} else {
var statearr_16662_16714 = state_16622__$1;
(statearr_16662_16714[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (19))){
var inst_16549 = (state_16622[(7)]);
var inst_16569 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16549);
var state_16622__$1 = state_16622;
var statearr_16663_16715 = state_16622__$1;
(statearr_16663_16715[(2)] = inst_16569);

(statearr_16663_16715[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (11))){
var inst_16549 = (state_16622[(7)]);
var inst_16553 = (inst_16549 == null);
var inst_16554 = cljs.core.not(inst_16553);
var state_16622__$1 = state_16622;
if(inst_16554){
var statearr_16664_16716 = state_16622__$1;
(statearr_16664_16716[(1)] = (13));

} else {
var statearr_16665_16717 = state_16622__$1;
(statearr_16665_16717[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (9))){
var inst_16524 = (state_16622[(8)]);
var state_16622__$1 = state_16622;
var statearr_16666_16718 = state_16622__$1;
(statearr_16666_16718[(2)] = inst_16524);

(statearr_16666_16718[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (5))){
var state_16622__$1 = state_16622;
var statearr_16667_16719 = state_16622__$1;
(statearr_16667_16719[(2)] = true);

(statearr_16667_16719[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (14))){
var state_16622__$1 = state_16622;
var statearr_16668_16720 = state_16622__$1;
(statearr_16668_16720[(2)] = false);

(statearr_16668_16720[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (26))){
var inst_16582 = (state_16622[(9)]);
var inst_16589 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16582);
var state_16622__$1 = state_16622;
var statearr_16669_16721 = state_16622__$1;
(statearr_16669_16721[(2)] = inst_16589);

(statearr_16669_16721[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (16))){
var state_16622__$1 = state_16622;
var statearr_16670_16722 = state_16622__$1;
(statearr_16670_16722[(2)] = true);

(statearr_16670_16722[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (38))){
var inst_16612 = (state_16622[(2)]);
var state_16622__$1 = state_16622;
var statearr_16671_16723 = state_16622__$1;
(statearr_16671_16723[(2)] = inst_16612);

(statearr_16671_16723[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (30))){
var inst_16582 = (state_16622[(9)]);
var inst_16573 = (state_16622[(10)]);
var inst_16574 = (state_16622[(13)]);
var inst_16599 = cljs.core.empty_QMARK_(inst_16573);
var inst_16600 = (inst_16574.cljs$core$IFn$_invoke$arity$1 ? inst_16574.cljs$core$IFn$_invoke$arity$1(inst_16582) : inst_16574.call(null,inst_16582));
var inst_16601 = cljs.core.not(inst_16600);
var inst_16602 = (inst_16599) && (inst_16601);
var state_16622__$1 = state_16622;
var statearr_16672_16724 = state_16622__$1;
(statearr_16672_16724[(2)] = inst_16602);

(statearr_16672_16724[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (10))){
var inst_16524 = (state_16622[(8)]);
var inst_16545 = (state_16622[(2)]);
var inst_16546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16545,cljs.core.cst$kw$solos);
var inst_16547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16545,cljs.core.cst$kw$mutes);
var inst_16548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16545,cljs.core.cst$kw$reads);
var inst_16549 = inst_16524;
var state_16622__$1 = (function (){var statearr_16673 = state_16622;
(statearr_16673[(16)] = inst_16547);

(statearr_16673[(17)] = inst_16548);

(statearr_16673[(18)] = inst_16546);

(statearr_16673[(7)] = inst_16549);

return statearr_16673;
})();
var statearr_16674_16725 = state_16622__$1;
(statearr_16674_16725[(2)] = null);

(statearr_16674_16725[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (18))){
var inst_16564 = (state_16622[(2)]);
var state_16622__$1 = state_16622;
var statearr_16675_16726 = state_16622__$1;
(statearr_16675_16726[(2)] = inst_16564);

(statearr_16675_16726[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (37))){
var state_16622__$1 = state_16622;
var statearr_16676_16727 = state_16622__$1;
(statearr_16676_16727[(2)] = null);

(statearr_16676_16727[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16623 === (8))){
var inst_16524 = (state_16622[(8)]);
var inst_16542 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16524);
var state_16622__$1 = state_16622;
var statearr_16677_16728 = state_16622__$1;
(statearr_16677_16728[(2)] = inst_16542);

(statearr_16677_16728[(1)] = (10));


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
});})(c__15635__auto___16682,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15535__auto__,c__15635__auto___16682,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15536__auto__ = null;
var cljs$core$async$mix_$_state_machine__15536__auto____0 = (function (){
var statearr_16678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16678[(0)] = cljs$core$async$mix_$_state_machine__15536__auto__);

(statearr_16678[(1)] = (1));

return statearr_16678;
});
var cljs$core$async$mix_$_state_machine__15536__auto____1 = (function (state_16622){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_16622);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e16679){if((e16679 instanceof Object)){
var ex__15539__auto__ = e16679;
var statearr_16680_16729 = state_16622;
(statearr_16680_16729[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16622);

return cljs.core.cst$kw$recur;
} else {
throw e16679;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__16730 = state_16622;
state_16622 = G__16730;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15536__auto__ = function(state_16622){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15536__auto____1.call(this,state_16622);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15536__auto____0;
cljs$core$async$mix_$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15536__auto____1;
return cljs$core$async$mix_$_state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto___16682,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15637__auto__ = (function (){var statearr_16681 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_16681[(6)] = c__15635__auto___16682);

return statearr_16681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto___16682,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8308__auto__ = (((p == null))?null:p);
var m__8309__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8308__auto__)]);
if(!((m__8309__auto__ == null))){
return (m__8309__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8309__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8309__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__8309__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8309__auto____$1 == null))){
return (m__8309__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8309__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8309__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8308__auto__ = (((p == null))?null:p);
var m__8309__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8308__auto__)]);
if(!((m__8309__auto__ == null))){
return (m__8309__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8309__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8309__auto__.call(null,p,v,ch));
} else {
var m__8309__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8309__auto____$1 == null))){
return (m__8309__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8309__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8309__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16732 = arguments.length;
switch (G__16732) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8308__auto__ = (((p == null))?null:p);
var m__8309__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8308__auto__)]);
if(!((m__8309__auto__ == null))){
return (m__8309__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8309__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__8309__auto__.call(null,p));
} else {
var m__8309__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8309__auto____$1 == null))){
return (m__8309__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8309__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__8309__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8308__auto__ = (((p == null))?null:p);
var m__8309__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8308__auto__)]);
if(!((m__8309__auto__ == null))){
return (m__8309__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8309__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__8309__auto__.call(null,p,v));
} else {
var m__8309__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8309__auto____$1 == null))){
return (m__8309__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8309__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__8309__auto____$1.call(null,p,v));
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
var G__16736 = arguments.length;
switch (G__16736) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__7625__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__7625__auto__)){
return or__7625__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7625__auto__,mults){
return (function (p1__16734_SHARP_){
if(cljs.core.truth_((p1__16734_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16734_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16734_SHARP_.call(null,topic)))){
return p1__16734_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16734_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7625__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16737 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16737 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16738){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16738 = meta16738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16739,meta16738__$1){
var self__ = this;
var _16739__$1 = this;
return (new cljs.core.async.t_cljs$core$async16737(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16738__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16737.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16739){
var self__ = this;
var _16739__$1 = this;
return self__.meta16738;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16737.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16737.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16737.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16737.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16737.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16737.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16737.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16737.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16738], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16737";

cljs.core.async.t_cljs$core$async16737.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8250__auto__,writer__8251__auto__,opt__8252__auto__){
return cljs.core._write(writer__8251__auto__,"cljs.core.async/t_cljs$core$async16737");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16737 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16737(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16738){
return (new cljs.core.async.t_cljs$core$async16737(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16738));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16737(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15635__auto___16857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto___16857,mults,ensure_mult,p){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto___16857,mults,ensure_mult,p){
return (function (state_16811){
var state_val_16812 = (state_16811[(1)]);
if((state_val_16812 === (7))){
var inst_16807 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16813_16858 = state_16811__$1;
(statearr_16813_16858[(2)] = inst_16807);

(statearr_16813_16858[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (20))){
var state_16811__$1 = state_16811;
var statearr_16814_16859 = state_16811__$1;
(statearr_16814_16859[(2)] = null);

(statearr_16814_16859[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (1))){
var state_16811__$1 = state_16811;
var statearr_16815_16860 = state_16811__$1;
(statearr_16815_16860[(2)] = null);

(statearr_16815_16860[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (24))){
var inst_16790 = (state_16811[(7)]);
var inst_16799 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16790);
var state_16811__$1 = state_16811;
var statearr_16816_16861 = state_16811__$1;
(statearr_16816_16861[(2)] = inst_16799);

(statearr_16816_16861[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (4))){
var inst_16742 = (state_16811[(8)]);
var inst_16742__$1 = (state_16811[(2)]);
var inst_16743 = (inst_16742__$1 == null);
var state_16811__$1 = (function (){var statearr_16817 = state_16811;
(statearr_16817[(8)] = inst_16742__$1);

return statearr_16817;
})();
if(cljs.core.truth_(inst_16743)){
var statearr_16818_16862 = state_16811__$1;
(statearr_16818_16862[(1)] = (5));

} else {
var statearr_16819_16863 = state_16811__$1;
(statearr_16819_16863[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (15))){
var inst_16784 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16820_16864 = state_16811__$1;
(statearr_16820_16864[(2)] = inst_16784);

(statearr_16820_16864[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (21))){
var inst_16804 = (state_16811[(2)]);
var state_16811__$1 = (function (){var statearr_16821 = state_16811;
(statearr_16821[(9)] = inst_16804);

return statearr_16821;
})();
var statearr_16822_16865 = state_16811__$1;
(statearr_16822_16865[(2)] = null);

(statearr_16822_16865[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (13))){
var inst_16766 = (state_16811[(10)]);
var inst_16768 = cljs.core.chunked_seq_QMARK_(inst_16766);
var state_16811__$1 = state_16811;
if(inst_16768){
var statearr_16823_16866 = state_16811__$1;
(statearr_16823_16866[(1)] = (16));

} else {
var statearr_16824_16867 = state_16811__$1;
(statearr_16824_16867[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (22))){
var inst_16796 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
if(cljs.core.truth_(inst_16796)){
var statearr_16825_16868 = state_16811__$1;
(statearr_16825_16868[(1)] = (23));

} else {
var statearr_16826_16869 = state_16811__$1;
(statearr_16826_16869[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (6))){
var inst_16792 = (state_16811[(11)]);
var inst_16790 = (state_16811[(7)]);
var inst_16742 = (state_16811[(8)]);
var inst_16790__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16742) : topic_fn.call(null,inst_16742));
var inst_16791 = cljs.core.deref(mults);
var inst_16792__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16791,inst_16790__$1);
var state_16811__$1 = (function (){var statearr_16827 = state_16811;
(statearr_16827[(11)] = inst_16792__$1);

(statearr_16827[(7)] = inst_16790__$1);

return statearr_16827;
})();
if(cljs.core.truth_(inst_16792__$1)){
var statearr_16828_16870 = state_16811__$1;
(statearr_16828_16870[(1)] = (19));

} else {
var statearr_16829_16871 = state_16811__$1;
(statearr_16829_16871[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (25))){
var inst_16801 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16830_16872 = state_16811__$1;
(statearr_16830_16872[(2)] = inst_16801);

(statearr_16830_16872[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (17))){
var inst_16766 = (state_16811[(10)]);
var inst_16775 = cljs.core.first(inst_16766);
var inst_16776 = cljs.core.async.muxch_STAR_(inst_16775);
var inst_16777 = cljs.core.async.close_BANG_(inst_16776);
var inst_16778 = cljs.core.next(inst_16766);
var inst_16752 = inst_16778;
var inst_16753 = null;
var inst_16754 = (0);
var inst_16755 = (0);
var state_16811__$1 = (function (){var statearr_16831 = state_16811;
(statearr_16831[(12)] = inst_16777);

(statearr_16831[(13)] = inst_16754);

(statearr_16831[(14)] = inst_16753);

(statearr_16831[(15)] = inst_16755);

(statearr_16831[(16)] = inst_16752);

return statearr_16831;
})();
var statearr_16832_16873 = state_16811__$1;
(statearr_16832_16873[(2)] = null);

(statearr_16832_16873[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (3))){
var inst_16809 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16811__$1,inst_16809);
} else {
if((state_val_16812 === (12))){
var inst_16786 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16833_16874 = state_16811__$1;
(statearr_16833_16874[(2)] = inst_16786);

(statearr_16833_16874[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (2))){
var state_16811__$1 = state_16811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16811__$1,(4),ch);
} else {
if((state_val_16812 === (23))){
var state_16811__$1 = state_16811;
var statearr_16834_16875 = state_16811__$1;
(statearr_16834_16875[(2)] = null);

(statearr_16834_16875[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (19))){
var inst_16792 = (state_16811[(11)]);
var inst_16742 = (state_16811[(8)]);
var inst_16794 = cljs.core.async.muxch_STAR_(inst_16792);
var state_16811__$1 = state_16811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16811__$1,(22),inst_16794,inst_16742);
} else {
if((state_val_16812 === (11))){
var inst_16766 = (state_16811[(10)]);
var inst_16752 = (state_16811[(16)]);
var inst_16766__$1 = cljs.core.seq(inst_16752);
var state_16811__$1 = (function (){var statearr_16835 = state_16811;
(statearr_16835[(10)] = inst_16766__$1);

return statearr_16835;
})();
if(inst_16766__$1){
var statearr_16836_16876 = state_16811__$1;
(statearr_16836_16876[(1)] = (13));

} else {
var statearr_16837_16877 = state_16811__$1;
(statearr_16837_16877[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (9))){
var inst_16788 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16838_16878 = state_16811__$1;
(statearr_16838_16878[(2)] = inst_16788);

(statearr_16838_16878[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (5))){
var inst_16749 = cljs.core.deref(mults);
var inst_16750 = cljs.core.vals(inst_16749);
var inst_16751 = cljs.core.seq(inst_16750);
var inst_16752 = inst_16751;
var inst_16753 = null;
var inst_16754 = (0);
var inst_16755 = (0);
var state_16811__$1 = (function (){var statearr_16839 = state_16811;
(statearr_16839[(13)] = inst_16754);

(statearr_16839[(14)] = inst_16753);

(statearr_16839[(15)] = inst_16755);

(statearr_16839[(16)] = inst_16752);

return statearr_16839;
})();
var statearr_16840_16879 = state_16811__$1;
(statearr_16840_16879[(2)] = null);

(statearr_16840_16879[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (14))){
var state_16811__$1 = state_16811;
var statearr_16844_16880 = state_16811__$1;
(statearr_16844_16880[(2)] = null);

(statearr_16844_16880[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (16))){
var inst_16766 = (state_16811[(10)]);
var inst_16770 = cljs.core.chunk_first(inst_16766);
var inst_16771 = cljs.core.chunk_rest(inst_16766);
var inst_16772 = cljs.core.count(inst_16770);
var inst_16752 = inst_16771;
var inst_16753 = inst_16770;
var inst_16754 = inst_16772;
var inst_16755 = (0);
var state_16811__$1 = (function (){var statearr_16845 = state_16811;
(statearr_16845[(13)] = inst_16754);

(statearr_16845[(14)] = inst_16753);

(statearr_16845[(15)] = inst_16755);

(statearr_16845[(16)] = inst_16752);

return statearr_16845;
})();
var statearr_16846_16881 = state_16811__$1;
(statearr_16846_16881[(2)] = null);

(statearr_16846_16881[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (10))){
var inst_16754 = (state_16811[(13)]);
var inst_16753 = (state_16811[(14)]);
var inst_16755 = (state_16811[(15)]);
var inst_16752 = (state_16811[(16)]);
var inst_16760 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16753,inst_16755);
var inst_16761 = cljs.core.async.muxch_STAR_(inst_16760);
var inst_16762 = cljs.core.async.close_BANG_(inst_16761);
var inst_16763 = (inst_16755 + (1));
var tmp16841 = inst_16754;
var tmp16842 = inst_16753;
var tmp16843 = inst_16752;
var inst_16752__$1 = tmp16843;
var inst_16753__$1 = tmp16842;
var inst_16754__$1 = tmp16841;
var inst_16755__$1 = inst_16763;
var state_16811__$1 = (function (){var statearr_16847 = state_16811;
(statearr_16847[(17)] = inst_16762);

(statearr_16847[(13)] = inst_16754__$1);

(statearr_16847[(14)] = inst_16753__$1);

(statearr_16847[(15)] = inst_16755__$1);

(statearr_16847[(16)] = inst_16752__$1);

return statearr_16847;
})();
var statearr_16848_16882 = state_16811__$1;
(statearr_16848_16882[(2)] = null);

(statearr_16848_16882[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (18))){
var inst_16781 = (state_16811[(2)]);
var state_16811__$1 = state_16811;
var statearr_16849_16883 = state_16811__$1;
(statearr_16849_16883[(2)] = inst_16781);

(statearr_16849_16883[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16812 === (8))){
var inst_16754 = (state_16811[(13)]);
var inst_16755 = (state_16811[(15)]);
var inst_16757 = (inst_16755 < inst_16754);
var inst_16758 = inst_16757;
var state_16811__$1 = state_16811;
if(cljs.core.truth_(inst_16758)){
var statearr_16850_16884 = state_16811__$1;
(statearr_16850_16884[(1)] = (10));

} else {
var statearr_16851_16885 = state_16811__$1;
(statearr_16851_16885[(1)] = (11));

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
});})(c__15635__auto___16857,mults,ensure_mult,p))
;
return ((function (switch__15535__auto__,c__15635__auto___16857,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15536__auto__ = null;
var cljs$core$async$state_machine__15536__auto____0 = (function (){
var statearr_16852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16852[(0)] = cljs$core$async$state_machine__15536__auto__);

(statearr_16852[(1)] = (1));

return statearr_16852;
});
var cljs$core$async$state_machine__15536__auto____1 = (function (state_16811){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_16811);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e16853){if((e16853 instanceof Object)){
var ex__15539__auto__ = e16853;
var statearr_16854_16886 = state_16811;
(statearr_16854_16886[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16811);

return cljs.core.cst$kw$recur;
} else {
throw e16853;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__16887 = state_16811;
state_16811 = G__16887;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$state_machine__15536__auto__ = function(state_16811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15536__auto____1.call(this,state_16811);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15536__auto____0;
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15536__auto____1;
return cljs$core$async$state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto___16857,mults,ensure_mult,p))
})();
var state__15637__auto__ = (function (){var statearr_16855 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_16855[(6)] = c__15635__auto___16857);

return statearr_16855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto___16857,mults,ensure_mult,p))
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
var G__16889 = arguments.length;
switch (G__16889) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__16892 = arguments.length;
switch (G__16892) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__16895 = arguments.length;
switch (G__16895) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__15635__auto___16962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto___16962,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto___16962,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16934){
var state_val_16935 = (state_16934[(1)]);
if((state_val_16935 === (7))){
var state_16934__$1 = state_16934;
var statearr_16936_16963 = state_16934__$1;
(statearr_16936_16963[(2)] = null);

(statearr_16936_16963[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (1))){
var state_16934__$1 = state_16934;
var statearr_16937_16964 = state_16934__$1;
(statearr_16937_16964[(2)] = null);

(statearr_16937_16964[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (4))){
var inst_16898 = (state_16934[(7)]);
var inst_16900 = (inst_16898 < cnt);
var state_16934__$1 = state_16934;
if(cljs.core.truth_(inst_16900)){
var statearr_16938_16965 = state_16934__$1;
(statearr_16938_16965[(1)] = (6));

} else {
var statearr_16939_16966 = state_16934__$1;
(statearr_16939_16966[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (15))){
var inst_16930 = (state_16934[(2)]);
var state_16934__$1 = state_16934;
var statearr_16940_16967 = state_16934__$1;
(statearr_16940_16967[(2)] = inst_16930);

(statearr_16940_16967[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (13))){
var inst_16923 = cljs.core.async.close_BANG_(out);
var state_16934__$1 = state_16934;
var statearr_16941_16968 = state_16934__$1;
(statearr_16941_16968[(2)] = inst_16923);

(statearr_16941_16968[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (6))){
var state_16934__$1 = state_16934;
var statearr_16942_16969 = state_16934__$1;
(statearr_16942_16969[(2)] = null);

(statearr_16942_16969[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (3))){
var inst_16932 = (state_16934[(2)]);
var state_16934__$1 = state_16934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16934__$1,inst_16932);
} else {
if((state_val_16935 === (12))){
var inst_16920 = (state_16934[(8)]);
var inst_16920__$1 = (state_16934[(2)]);
var inst_16921 = cljs.core.some(cljs.core.nil_QMARK_,inst_16920__$1);
var state_16934__$1 = (function (){var statearr_16943 = state_16934;
(statearr_16943[(8)] = inst_16920__$1);

return statearr_16943;
})();
if(cljs.core.truth_(inst_16921)){
var statearr_16944_16970 = state_16934__$1;
(statearr_16944_16970[(1)] = (13));

} else {
var statearr_16945_16971 = state_16934__$1;
(statearr_16945_16971[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (2))){
var inst_16897 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16898 = (0);
var state_16934__$1 = (function (){var statearr_16946 = state_16934;
(statearr_16946[(7)] = inst_16898);

(statearr_16946[(9)] = inst_16897);

return statearr_16946;
})();
var statearr_16947_16972 = state_16934__$1;
(statearr_16947_16972[(2)] = null);

(statearr_16947_16972[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (11))){
var inst_16898 = (state_16934[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16934,(10),Object,null,(9));
var inst_16907 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16898) : chs__$1.call(null,inst_16898));
var inst_16908 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16898) : done.call(null,inst_16898));
var inst_16909 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16907,inst_16908);
var state_16934__$1 = state_16934;
var statearr_16948_16973 = state_16934__$1;
(statearr_16948_16973[(2)] = inst_16909);


cljs.core.async.impl.ioc_helpers.process_exception(state_16934__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (9))){
var inst_16898 = (state_16934[(7)]);
var inst_16911 = (state_16934[(2)]);
var inst_16912 = (inst_16898 + (1));
var inst_16898__$1 = inst_16912;
var state_16934__$1 = (function (){var statearr_16949 = state_16934;
(statearr_16949[(7)] = inst_16898__$1);

(statearr_16949[(10)] = inst_16911);

return statearr_16949;
})();
var statearr_16950_16974 = state_16934__$1;
(statearr_16950_16974[(2)] = null);

(statearr_16950_16974[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (5))){
var inst_16918 = (state_16934[(2)]);
var state_16934__$1 = (function (){var statearr_16951 = state_16934;
(statearr_16951[(11)] = inst_16918);

return statearr_16951;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16934__$1,(12),dchan);
} else {
if((state_val_16935 === (14))){
var inst_16920 = (state_16934[(8)]);
var inst_16925 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16920);
var state_16934__$1 = state_16934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16934__$1,(16),out,inst_16925);
} else {
if((state_val_16935 === (16))){
var inst_16927 = (state_16934[(2)]);
var state_16934__$1 = (function (){var statearr_16952 = state_16934;
(statearr_16952[(12)] = inst_16927);

return statearr_16952;
})();
var statearr_16953_16975 = state_16934__$1;
(statearr_16953_16975[(2)] = null);

(statearr_16953_16975[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (10))){
var inst_16902 = (state_16934[(2)]);
var inst_16903 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16934__$1 = (function (){var statearr_16954 = state_16934;
(statearr_16954[(13)] = inst_16902);

return statearr_16954;
})();
var statearr_16955_16976 = state_16934__$1;
(statearr_16955_16976[(2)] = inst_16903);


cljs.core.async.impl.ioc_helpers.process_exception(state_16934__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16935 === (8))){
var inst_16916 = (state_16934[(2)]);
var state_16934__$1 = state_16934;
var statearr_16956_16977 = state_16934__$1;
(statearr_16956_16977[(2)] = inst_16916);

(statearr_16956_16977[(1)] = (5));


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
});})(c__15635__auto___16962,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15535__auto__,c__15635__auto___16962,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15536__auto__ = null;
var cljs$core$async$state_machine__15536__auto____0 = (function (){
var statearr_16957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16957[(0)] = cljs$core$async$state_machine__15536__auto__);

(statearr_16957[(1)] = (1));

return statearr_16957;
});
var cljs$core$async$state_machine__15536__auto____1 = (function (state_16934){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_16934);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e16958){if((e16958 instanceof Object)){
var ex__15539__auto__ = e16958;
var statearr_16959_16978 = state_16934;
(statearr_16959_16978[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16934);

return cljs.core.cst$kw$recur;
} else {
throw e16958;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__16979 = state_16934;
state_16934 = G__16979;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$state_machine__15536__auto__ = function(state_16934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15536__auto____1.call(this,state_16934);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15536__auto____0;
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15536__auto____1;
return cljs$core$async$state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto___16962,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15637__auto__ = (function (){var statearr_16960 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_16960[(6)] = c__15635__auto___16962);

return statearr_16960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto___16962,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__16982 = arguments.length;
switch (G__16982) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15635__auto___17036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto___17036,out){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto___17036,out){
return (function (state_17014){
var state_val_17015 = (state_17014[(1)]);
if((state_val_17015 === (7))){
var inst_16993 = (state_17014[(7)]);
var inst_16994 = (state_17014[(8)]);
var inst_16993__$1 = (state_17014[(2)]);
var inst_16994__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16993__$1,(0),null);
var inst_16995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16993__$1,(1),null);
var inst_16996 = (inst_16994__$1 == null);
var state_17014__$1 = (function (){var statearr_17016 = state_17014;
(statearr_17016[(7)] = inst_16993__$1);

(statearr_17016[(8)] = inst_16994__$1);

(statearr_17016[(9)] = inst_16995);

return statearr_17016;
})();
if(cljs.core.truth_(inst_16996)){
var statearr_17017_17037 = state_17014__$1;
(statearr_17017_17037[(1)] = (8));

} else {
var statearr_17018_17038 = state_17014__$1;
(statearr_17018_17038[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17015 === (1))){
var inst_16983 = cljs.core.vec(chs);
var inst_16984 = inst_16983;
var state_17014__$1 = (function (){var statearr_17019 = state_17014;
(statearr_17019[(10)] = inst_16984);

return statearr_17019;
})();
var statearr_17020_17039 = state_17014__$1;
(statearr_17020_17039[(2)] = null);

(statearr_17020_17039[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17015 === (4))){
var inst_16984 = (state_17014[(10)]);
var state_17014__$1 = state_17014;
return cljs.core.async.ioc_alts_BANG_(state_17014__$1,(7),inst_16984);
} else {
if((state_val_17015 === (6))){
var inst_17010 = (state_17014[(2)]);
var state_17014__$1 = state_17014;
var statearr_17021_17040 = state_17014__$1;
(statearr_17021_17040[(2)] = inst_17010);

(statearr_17021_17040[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17015 === (3))){
var inst_17012 = (state_17014[(2)]);
var state_17014__$1 = state_17014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17014__$1,inst_17012);
} else {
if((state_val_17015 === (2))){
var inst_16984 = (state_17014[(10)]);
var inst_16986 = cljs.core.count(inst_16984);
var inst_16987 = (inst_16986 > (0));
var state_17014__$1 = state_17014;
if(cljs.core.truth_(inst_16987)){
var statearr_17023_17041 = state_17014__$1;
(statearr_17023_17041[(1)] = (4));

} else {
var statearr_17024_17042 = state_17014__$1;
(statearr_17024_17042[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17015 === (11))){
var inst_16984 = (state_17014[(10)]);
var inst_17003 = (state_17014[(2)]);
var tmp17022 = inst_16984;
var inst_16984__$1 = tmp17022;
var state_17014__$1 = (function (){var statearr_17025 = state_17014;
(statearr_17025[(11)] = inst_17003);

(statearr_17025[(10)] = inst_16984__$1);

return statearr_17025;
})();
var statearr_17026_17043 = state_17014__$1;
(statearr_17026_17043[(2)] = null);

(statearr_17026_17043[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17015 === (9))){
var inst_16994 = (state_17014[(8)]);
var state_17014__$1 = state_17014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17014__$1,(11),out,inst_16994);
} else {
if((state_val_17015 === (5))){
var inst_17008 = cljs.core.async.close_BANG_(out);
var state_17014__$1 = state_17014;
var statearr_17027_17044 = state_17014__$1;
(statearr_17027_17044[(2)] = inst_17008);

(statearr_17027_17044[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17015 === (10))){
var inst_17006 = (state_17014[(2)]);
var state_17014__$1 = state_17014;
var statearr_17028_17045 = state_17014__$1;
(statearr_17028_17045[(2)] = inst_17006);

(statearr_17028_17045[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17015 === (8))){
var inst_16993 = (state_17014[(7)]);
var inst_16984 = (state_17014[(10)]);
var inst_16994 = (state_17014[(8)]);
var inst_16995 = (state_17014[(9)]);
var inst_16998 = (function (){var cs = inst_16984;
var vec__16989 = inst_16993;
var v = inst_16994;
var c = inst_16995;
return ((function (cs,vec__16989,v,c,inst_16993,inst_16984,inst_16994,inst_16995,state_val_17015,c__15635__auto___17036,out){
return (function (p1__16980_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16980_SHARP_);
});
;})(cs,vec__16989,v,c,inst_16993,inst_16984,inst_16994,inst_16995,state_val_17015,c__15635__auto___17036,out))
})();
var inst_16999 = cljs.core.filterv(inst_16998,inst_16984);
var inst_16984__$1 = inst_16999;
var state_17014__$1 = (function (){var statearr_17029 = state_17014;
(statearr_17029[(10)] = inst_16984__$1);

return statearr_17029;
})();
var statearr_17030_17046 = state_17014__$1;
(statearr_17030_17046[(2)] = null);

(statearr_17030_17046[(1)] = (2));


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
});})(c__15635__auto___17036,out))
;
return ((function (switch__15535__auto__,c__15635__auto___17036,out){
return (function() {
var cljs$core$async$state_machine__15536__auto__ = null;
var cljs$core$async$state_machine__15536__auto____0 = (function (){
var statearr_17031 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17031[(0)] = cljs$core$async$state_machine__15536__auto__);

(statearr_17031[(1)] = (1));

return statearr_17031;
});
var cljs$core$async$state_machine__15536__auto____1 = (function (state_17014){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_17014);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e17032){if((e17032 instanceof Object)){
var ex__15539__auto__ = e17032;
var statearr_17033_17047 = state_17014;
(statearr_17033_17047[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17014);

return cljs.core.cst$kw$recur;
} else {
throw e17032;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__17048 = state_17014;
state_17014 = G__17048;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$state_machine__15536__auto__ = function(state_17014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15536__auto____1.call(this,state_17014);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15536__auto____0;
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15536__auto____1;
return cljs$core$async$state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto___17036,out))
})();
var state__15637__auto__ = (function (){var statearr_17034 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_17034[(6)] = c__15635__auto___17036);

return statearr_17034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto___17036,out))
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
var G__17050 = arguments.length;
switch (G__17050) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15635__auto___17095 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto___17095,out){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto___17095,out){
return (function (state_17074){
var state_val_17075 = (state_17074[(1)]);
if((state_val_17075 === (7))){
var inst_17056 = (state_17074[(7)]);
var inst_17056__$1 = (state_17074[(2)]);
var inst_17057 = (inst_17056__$1 == null);
var inst_17058 = cljs.core.not(inst_17057);
var state_17074__$1 = (function (){var statearr_17076 = state_17074;
(statearr_17076[(7)] = inst_17056__$1);

return statearr_17076;
})();
if(inst_17058){
var statearr_17077_17096 = state_17074__$1;
(statearr_17077_17096[(1)] = (8));

} else {
var statearr_17078_17097 = state_17074__$1;
(statearr_17078_17097[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17075 === (1))){
var inst_17051 = (0);
var state_17074__$1 = (function (){var statearr_17079 = state_17074;
(statearr_17079[(8)] = inst_17051);

return statearr_17079;
})();
var statearr_17080_17098 = state_17074__$1;
(statearr_17080_17098[(2)] = null);

(statearr_17080_17098[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17075 === (4))){
var state_17074__$1 = state_17074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17074__$1,(7),ch);
} else {
if((state_val_17075 === (6))){
var inst_17069 = (state_17074[(2)]);
var state_17074__$1 = state_17074;
var statearr_17081_17099 = state_17074__$1;
(statearr_17081_17099[(2)] = inst_17069);

(statearr_17081_17099[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17075 === (3))){
var inst_17071 = (state_17074[(2)]);
var inst_17072 = cljs.core.async.close_BANG_(out);
var state_17074__$1 = (function (){var statearr_17082 = state_17074;
(statearr_17082[(9)] = inst_17071);

return statearr_17082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17074__$1,inst_17072);
} else {
if((state_val_17075 === (2))){
var inst_17051 = (state_17074[(8)]);
var inst_17053 = (inst_17051 < n);
var state_17074__$1 = state_17074;
if(cljs.core.truth_(inst_17053)){
var statearr_17083_17100 = state_17074__$1;
(statearr_17083_17100[(1)] = (4));

} else {
var statearr_17084_17101 = state_17074__$1;
(statearr_17084_17101[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17075 === (11))){
var inst_17051 = (state_17074[(8)]);
var inst_17061 = (state_17074[(2)]);
var inst_17062 = (inst_17051 + (1));
var inst_17051__$1 = inst_17062;
var state_17074__$1 = (function (){var statearr_17085 = state_17074;
(statearr_17085[(8)] = inst_17051__$1);

(statearr_17085[(10)] = inst_17061);

return statearr_17085;
})();
var statearr_17086_17102 = state_17074__$1;
(statearr_17086_17102[(2)] = null);

(statearr_17086_17102[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17075 === (9))){
var state_17074__$1 = state_17074;
var statearr_17087_17103 = state_17074__$1;
(statearr_17087_17103[(2)] = null);

(statearr_17087_17103[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17075 === (5))){
var state_17074__$1 = state_17074;
var statearr_17088_17104 = state_17074__$1;
(statearr_17088_17104[(2)] = null);

(statearr_17088_17104[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17075 === (10))){
var inst_17066 = (state_17074[(2)]);
var state_17074__$1 = state_17074;
var statearr_17089_17105 = state_17074__$1;
(statearr_17089_17105[(2)] = inst_17066);

(statearr_17089_17105[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17075 === (8))){
var inst_17056 = (state_17074[(7)]);
var state_17074__$1 = state_17074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17074__$1,(11),out,inst_17056);
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
});})(c__15635__auto___17095,out))
;
return ((function (switch__15535__auto__,c__15635__auto___17095,out){
return (function() {
var cljs$core$async$state_machine__15536__auto__ = null;
var cljs$core$async$state_machine__15536__auto____0 = (function (){
var statearr_17090 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17090[(0)] = cljs$core$async$state_machine__15536__auto__);

(statearr_17090[(1)] = (1));

return statearr_17090;
});
var cljs$core$async$state_machine__15536__auto____1 = (function (state_17074){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_17074);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e17091){if((e17091 instanceof Object)){
var ex__15539__auto__ = e17091;
var statearr_17092_17106 = state_17074;
(statearr_17092_17106[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17074);

return cljs.core.cst$kw$recur;
} else {
throw e17091;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__17107 = state_17074;
state_17074 = G__17107;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$state_machine__15536__auto__ = function(state_17074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15536__auto____1.call(this,state_17074);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15536__auto____0;
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15536__auto____1;
return cljs$core$async$state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto___17095,out))
})();
var state__15637__auto__ = (function (){var statearr_17093 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_17093[(6)] = c__15635__auto___17095);

return statearr_17093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto___17095,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17109 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17109 = (function (f,ch,meta17110){
this.f = f;
this.ch = ch;
this.meta17110 = meta17110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17111,meta17110__$1){
var self__ = this;
var _17111__$1 = this;
return (new cljs.core.async.t_cljs$core$async17109(self__.f,self__.ch,meta17110__$1));
});

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17111){
var self__ = this;
var _17111__$1 = this;
return self__.meta17110;
});

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17112 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17112 = (function (f,ch,meta17110,_,fn1,meta17113){
this.f = f;
this.ch = ch;
this.meta17110 = meta17110;
this._ = _;
this.fn1 = fn1;
this.meta17113 = meta17113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17114,meta17113__$1){
var self__ = this;
var _17114__$1 = this;
return (new cljs.core.async.t_cljs$core$async17112(self__.f,self__.ch,self__.meta17110,self__._,self__.fn1,meta17113__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17114){
var self__ = this;
var _17114__$1 = this;
return self__.meta17113;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17112.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17108_SHARP_){
var G__17115 = (((p1__17108_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17108_SHARP_) : self__.f.call(null,p1__17108_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17115) : f1.call(null,G__17115));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17112.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17110,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17109], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17113], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17112.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17112";

cljs.core.async.t_cljs$core$async17112.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8250__auto__,writer__8251__auto__,opt__8252__auto__){
return cljs.core._write(writer__8251__auto__,"cljs.core.async/t_cljs$core$async17112");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17112 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17112(f__$1,ch__$1,meta17110__$1,___$2,fn1__$1,meta17113){
return (new cljs.core.async.t_cljs$core$async17112(f__$1,ch__$1,meta17110__$1,___$2,fn1__$1,meta17113));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17112(self__.f,self__.ch,self__.meta17110,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7613__auto__ = ret;
if(cljs.core.truth_(and__7613__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__7613__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17116 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17116) : self__.f.call(null,G__17116));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17109.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17109.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17110], null);
});

cljs.core.async.t_cljs$core$async17109.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17109";

cljs.core.async.t_cljs$core$async17109.cljs$lang$ctorPrWriter = (function (this__8250__auto__,writer__8251__auto__,opt__8252__auto__){
return cljs.core._write(writer__8251__auto__,"cljs.core.async/t_cljs$core$async17109");
});

cljs.core.async.__GT_t_cljs$core$async17109 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17109(f__$1,ch__$1,meta17110){
return (new cljs.core.async.t_cljs$core$async17109(f__$1,ch__$1,meta17110));
});

}

return (new cljs.core.async.t_cljs$core$async17109(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17117 = (function (f,ch,meta17118){
this.f = f;
this.ch = ch;
this.meta17118 = meta17118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17119,meta17118__$1){
var self__ = this;
var _17119__$1 = this;
return (new cljs.core.async.t_cljs$core$async17117(self__.f,self__.ch,meta17118__$1));
});

cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17119){
var self__ = this;
var _17119__$1 = this;
return self__.meta17118;
});

cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17117.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17118], null);
});

cljs.core.async.t_cljs$core$async17117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17117";

cljs.core.async.t_cljs$core$async17117.cljs$lang$ctorPrWriter = (function (this__8250__auto__,writer__8251__auto__,opt__8252__auto__){
return cljs.core._write(writer__8251__auto__,"cljs.core.async/t_cljs$core$async17117");
});

cljs.core.async.__GT_t_cljs$core$async17117 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17117(f__$1,ch__$1,meta17118){
return (new cljs.core.async.t_cljs$core$async17117(f__$1,ch__$1,meta17118));
});

}

return (new cljs.core.async.t_cljs$core$async17117(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17120 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17120 = (function (p,ch,meta17121){
this.p = p;
this.ch = ch;
this.meta17121 = meta17121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17122,meta17121__$1){
var self__ = this;
var _17122__$1 = this;
return (new cljs.core.async.t_cljs$core$async17120(self__.p,self__.ch,meta17121__$1));
});

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17122){
var self__ = this;
var _17122__$1 = this;
return self__.meta17121;
});

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17120.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17121], null);
});

cljs.core.async.t_cljs$core$async17120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17120";

cljs.core.async.t_cljs$core$async17120.cljs$lang$ctorPrWriter = (function (this__8250__auto__,writer__8251__auto__,opt__8252__auto__){
return cljs.core._write(writer__8251__auto__,"cljs.core.async/t_cljs$core$async17120");
});

cljs.core.async.__GT_t_cljs$core$async17120 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17120(p__$1,ch__$1,meta17121){
return (new cljs.core.async.t_cljs$core$async17120(p__$1,ch__$1,meta17121));
});

}

return (new cljs.core.async.t_cljs$core$async17120(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17124 = arguments.length;
switch (G__17124) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15635__auto___17164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto___17164,out){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto___17164,out){
return (function (state_17145){
var state_val_17146 = (state_17145[(1)]);
if((state_val_17146 === (7))){
var inst_17141 = (state_17145[(2)]);
var state_17145__$1 = state_17145;
var statearr_17147_17165 = state_17145__$1;
(statearr_17147_17165[(2)] = inst_17141);

(statearr_17147_17165[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17146 === (1))){
var state_17145__$1 = state_17145;
var statearr_17148_17166 = state_17145__$1;
(statearr_17148_17166[(2)] = null);

(statearr_17148_17166[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17146 === (4))){
var inst_17127 = (state_17145[(7)]);
var inst_17127__$1 = (state_17145[(2)]);
var inst_17128 = (inst_17127__$1 == null);
var state_17145__$1 = (function (){var statearr_17149 = state_17145;
(statearr_17149[(7)] = inst_17127__$1);

return statearr_17149;
})();
if(cljs.core.truth_(inst_17128)){
var statearr_17150_17167 = state_17145__$1;
(statearr_17150_17167[(1)] = (5));

} else {
var statearr_17151_17168 = state_17145__$1;
(statearr_17151_17168[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17146 === (6))){
var inst_17127 = (state_17145[(7)]);
var inst_17132 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17127) : p.call(null,inst_17127));
var state_17145__$1 = state_17145;
if(cljs.core.truth_(inst_17132)){
var statearr_17152_17169 = state_17145__$1;
(statearr_17152_17169[(1)] = (8));

} else {
var statearr_17153_17170 = state_17145__$1;
(statearr_17153_17170[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17146 === (3))){
var inst_17143 = (state_17145[(2)]);
var state_17145__$1 = state_17145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17145__$1,inst_17143);
} else {
if((state_val_17146 === (2))){
var state_17145__$1 = state_17145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17145__$1,(4),ch);
} else {
if((state_val_17146 === (11))){
var inst_17135 = (state_17145[(2)]);
var state_17145__$1 = state_17145;
var statearr_17154_17171 = state_17145__$1;
(statearr_17154_17171[(2)] = inst_17135);

(statearr_17154_17171[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17146 === (9))){
var state_17145__$1 = state_17145;
var statearr_17155_17172 = state_17145__$1;
(statearr_17155_17172[(2)] = null);

(statearr_17155_17172[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17146 === (5))){
var inst_17130 = cljs.core.async.close_BANG_(out);
var state_17145__$1 = state_17145;
var statearr_17156_17173 = state_17145__$1;
(statearr_17156_17173[(2)] = inst_17130);

(statearr_17156_17173[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17146 === (10))){
var inst_17138 = (state_17145[(2)]);
var state_17145__$1 = (function (){var statearr_17157 = state_17145;
(statearr_17157[(8)] = inst_17138);

return statearr_17157;
})();
var statearr_17158_17174 = state_17145__$1;
(statearr_17158_17174[(2)] = null);

(statearr_17158_17174[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17146 === (8))){
var inst_17127 = (state_17145[(7)]);
var state_17145__$1 = state_17145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17145__$1,(11),out,inst_17127);
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
});})(c__15635__auto___17164,out))
;
return ((function (switch__15535__auto__,c__15635__auto___17164,out){
return (function() {
var cljs$core$async$state_machine__15536__auto__ = null;
var cljs$core$async$state_machine__15536__auto____0 = (function (){
var statearr_17159 = [null,null,null,null,null,null,null,null,null];
(statearr_17159[(0)] = cljs$core$async$state_machine__15536__auto__);

(statearr_17159[(1)] = (1));

return statearr_17159;
});
var cljs$core$async$state_machine__15536__auto____1 = (function (state_17145){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_17145);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e17160){if((e17160 instanceof Object)){
var ex__15539__auto__ = e17160;
var statearr_17161_17175 = state_17145;
(statearr_17161_17175[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17145);

return cljs.core.cst$kw$recur;
} else {
throw e17160;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__17176 = state_17145;
state_17145 = G__17176;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$state_machine__15536__auto__ = function(state_17145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15536__auto____1.call(this,state_17145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15536__auto____0;
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15536__auto____1;
return cljs$core$async$state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto___17164,out))
})();
var state__15637__auto__ = (function (){var statearr_17162 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_17162[(6)] = c__15635__auto___17164);

return statearr_17162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto___17164,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17178 = arguments.length;
switch (G__17178) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__15635__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto__){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto__){
return (function (state_17241){
var state_val_17242 = (state_17241[(1)]);
if((state_val_17242 === (7))){
var inst_17237 = (state_17241[(2)]);
var state_17241__$1 = state_17241;
var statearr_17243_17281 = state_17241__$1;
(statearr_17243_17281[(2)] = inst_17237);

(statearr_17243_17281[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17242 === (20))){
var inst_17207 = (state_17241[(7)]);
var inst_17218 = (state_17241[(2)]);
var inst_17219 = cljs.core.next(inst_17207);
var inst_17193 = inst_17219;
var inst_17194 = null;
var inst_17195 = (0);
var inst_17196 = (0);
var state_17241__$1 = (function (){var statearr_17244 = state_17241;
(statearr_17244[(8)] = inst_17196);

(statearr_17244[(9)] = inst_17218);

(statearr_17244[(10)] = inst_17195);

(statearr_17244[(11)] = inst_17193);

(statearr_17244[(12)] = inst_17194);

return statearr_17244;
})();
var statearr_17245_17282 = state_17241__$1;
(statearr_17245_17282[(2)] = null);

(statearr_17245_17282[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17242 === (1))){
var state_17241__$1 = state_17241;
var statearr_17246_17283 = state_17241__$1;
(statearr_17246_17283[(2)] = null);

(statearr_17246_17283[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17242 === (4))){
var inst_17182 = (state_17241[(13)]);
var inst_17182__$1 = (state_17241[(2)]);
var inst_17183 = (inst_17182__$1 == null);
var state_17241__$1 = (function (){var statearr_17247 = state_17241;
(statearr_17247[(13)] = inst_17182__$1);

return statearr_17247;
})();
if(cljs.core.truth_(inst_17183)){
var statearr_17248_17284 = state_17241__$1;
(statearr_17248_17284[(1)] = (5));

} else {
var statearr_17249_17285 = state_17241__$1;
(statearr_17249_17285[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17242 === (15))){
var state_17241__$1 = state_17241;
var statearr_17253_17286 = state_17241__$1;
(statearr_17253_17286[(2)] = null);

(statearr_17253_17286[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17242 === (21))){
var state_17241__$1 = state_17241;
var statearr_17254_17287 = state_17241__$1;
(statearr_17254_17287[(2)] = null);

(statearr_17254_17287[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17242 === (13))){
var inst_17196 = (state_17241[(8)]);
var inst_17195 = (state_17241[(10)]);
var inst_17193 = (state_17241[(11)]);
var inst_17194 = (state_17241[(12)]);
var inst_17203 = (state_17241[(2)]);
var inst_17204 = (inst_17196 + (1));
var tmp17250 = inst_17195;
var tmp17251 = inst_17193;
var tmp17252 = inst_17194;
var inst_17193__$1 = tmp17251;
var inst_17194__$1 = tmp17252;
var inst_17195__$1 = tmp17250;
var inst_17196__$1 = inst_17204;
var state_17241__$1 = (function (){var statearr_17255 = state_17241;
(statearr_17255[(8)] = inst_17196__$1);

(statearr_17255[(10)] = inst_17195__$1);

(statearr_17255[(14)] = inst_17203);

(statearr_17255[(11)] = inst_17193__$1);

(statearr_17255[(12)] = inst_17194__$1);

return statearr_17255;
})();
var statearr_17256_17288 = state_17241__$1;
(statearr_17256_17288[(2)] = null);

(statearr_17256_17288[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17242 === (22))){
var state_17241__$1 = state_17241;
var statearr_17257_17289 = state_17241__$1;
(statearr_17257_17289[(2)] = null);

(statearr_17257_17289[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17242 === (6))){
var inst_17182 = (state_17241[(13)]);
var inst_17191 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17182) : f.call(null,inst_17182));
var inst_17192 = cljs.core.seq(inst_17191);
var inst_17193 = inst_17192;
var inst_17194 = null;
var inst_17195 = (0);
var inst_17196 = (0);
var state_17241__$1 = (function (){var statearr_17258 = state_17241;
(statearr_17258[(8)] = inst_17196);

(statearr_17258[(10)] = inst_17195);

(statearr_17258[(11)] = inst_17193);

(statearr_17258[(12)] = inst_17194);

return statearr_17258;
})();
var statearr_17259_17290 = state_17241__$1;
(statearr_17259_17290[(2)] = null);

(statearr_17259_17290[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17242 === (17))){
var inst_17207 = (state_17241[(7)]);
var inst_17211 = cljs.core.chunk_first(inst_17207);
var inst_17212 = cljs.core.chunk_rest(inst_17207);
var inst_17213 = cljs.core.count(inst_17211);
var inst_17193 = inst_17212;
var inst_17194 = inst_17211;
var inst_17195 = inst_17213;
var inst_17196 = (0);
var state_17241__$1 = (function (){var statearr_17260 = state_17241;
(statearr_17260[(8)] = inst_17196);

(statearr_17260[(10)] = inst_17195);

(statearr_17260[(11)] = inst_17193);

(statearr_17260[(12)] = inst_17194);

return statearr_17260;
})();
var statearr_17261_17291 = state_17241__$1;
(statearr_17261_17291[(2)] = null);

(statearr_17261_17291[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17242 === (3))){
var inst_17239 = (state_17241[(2)]);
var state_17241__$1 = state_17241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17241__$1,inst_17239);
} else {
if((state_val_17242 === (12))){
var inst_17227 = (state_17241[(2)]);
var state_17241__$1 = state_17241;
var statearr_17262_17292 = state_17241__$1;
(statearr_17262_17292[(2)] = inst_17227);

(statearr_17262_17292[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17242 === (2))){
var state_17241__$1 = state_17241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17241__$1,(4),in$);
} else {
if((state_val_17242 === (23))){
var inst_17235 = (state_17241[(2)]);
var state_17241__$1 = state_17241;
var statearr_17263_17293 = state_17241__$1;
(statearr_17263_17293[(2)] = inst_17235);

(statearr_17263_17293[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17242 === (19))){
var inst_17222 = (state_17241[(2)]);
var state_17241__$1 = state_17241;
var statearr_17264_17294 = state_17241__$1;
(statearr_17264_17294[(2)] = inst_17222);

(statearr_17264_17294[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17242 === (11))){
var inst_17193 = (state_17241[(11)]);
var inst_17207 = (state_17241[(7)]);
var inst_17207__$1 = cljs.core.seq(inst_17193);
var state_17241__$1 = (function (){var statearr_17265 = state_17241;
(statearr_17265[(7)] = inst_17207__$1);

return statearr_17265;
})();
if(inst_17207__$1){
var statearr_17266_17295 = state_17241__$1;
(statearr_17266_17295[(1)] = (14));

} else {
var statearr_17267_17296 = state_17241__$1;
(statearr_17267_17296[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17242 === (9))){
var inst_17229 = (state_17241[(2)]);
var inst_17230 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17241__$1 = (function (){var statearr_17268 = state_17241;
(statearr_17268[(15)] = inst_17229);

return statearr_17268;
})();
if(cljs.core.truth_(inst_17230)){
var statearr_17269_17297 = state_17241__$1;
(statearr_17269_17297[(1)] = (21));

} else {
var statearr_17270_17298 = state_17241__$1;
(statearr_17270_17298[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17242 === (5))){
var inst_17185 = cljs.core.async.close_BANG_(out);
var state_17241__$1 = state_17241;
var statearr_17271_17299 = state_17241__$1;
(statearr_17271_17299[(2)] = inst_17185);

(statearr_17271_17299[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17242 === (14))){
var inst_17207 = (state_17241[(7)]);
var inst_17209 = cljs.core.chunked_seq_QMARK_(inst_17207);
var state_17241__$1 = state_17241;
if(inst_17209){
var statearr_17272_17300 = state_17241__$1;
(statearr_17272_17300[(1)] = (17));

} else {
var statearr_17273_17301 = state_17241__$1;
(statearr_17273_17301[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17242 === (16))){
var inst_17225 = (state_17241[(2)]);
var state_17241__$1 = state_17241;
var statearr_17274_17302 = state_17241__$1;
(statearr_17274_17302[(2)] = inst_17225);

(statearr_17274_17302[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17242 === (10))){
var inst_17196 = (state_17241[(8)]);
var inst_17194 = (state_17241[(12)]);
var inst_17201 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17194,inst_17196);
var state_17241__$1 = state_17241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17241__$1,(13),out,inst_17201);
} else {
if((state_val_17242 === (18))){
var inst_17207 = (state_17241[(7)]);
var inst_17216 = cljs.core.first(inst_17207);
var state_17241__$1 = state_17241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17241__$1,(20),out,inst_17216);
} else {
if((state_val_17242 === (8))){
var inst_17196 = (state_17241[(8)]);
var inst_17195 = (state_17241[(10)]);
var inst_17198 = (inst_17196 < inst_17195);
var inst_17199 = inst_17198;
var state_17241__$1 = state_17241;
if(cljs.core.truth_(inst_17199)){
var statearr_17275_17303 = state_17241__$1;
(statearr_17275_17303[(1)] = (10));

} else {
var statearr_17276_17304 = state_17241__$1;
(statearr_17276_17304[(1)] = (11));

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
});})(c__15635__auto__))
;
return ((function (switch__15535__auto__,c__15635__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15536__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15536__auto____0 = (function (){
var statearr_17277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17277[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15536__auto__);

(statearr_17277[(1)] = (1));

return statearr_17277;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15536__auto____1 = (function (state_17241){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_17241);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e17278){if((e17278 instanceof Object)){
var ex__15539__auto__ = e17278;
var statearr_17279_17305 = state_17241;
(statearr_17279_17305[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17241);

return cljs.core.cst$kw$recur;
} else {
throw e17278;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__17306 = state_17241;
state_17241 = G__17306;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15536__auto__ = function(state_17241){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15536__auto____1.call(this,state_17241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15536__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15536__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto__))
})();
var state__15637__auto__ = (function (){var statearr_17280 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_17280[(6)] = c__15635__auto__);

return statearr_17280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto__))
);

return c__15635__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17308 = arguments.length;
switch (G__17308) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__17311 = arguments.length;
switch (G__17311) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__17314 = arguments.length;
switch (G__17314) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15635__auto___17361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto___17361,out){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto___17361,out){
return (function (state_17338){
var state_val_17339 = (state_17338[(1)]);
if((state_val_17339 === (7))){
var inst_17333 = (state_17338[(2)]);
var state_17338__$1 = state_17338;
var statearr_17340_17362 = state_17338__$1;
(statearr_17340_17362[(2)] = inst_17333);

(statearr_17340_17362[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17339 === (1))){
var inst_17315 = null;
var state_17338__$1 = (function (){var statearr_17341 = state_17338;
(statearr_17341[(7)] = inst_17315);

return statearr_17341;
})();
var statearr_17342_17363 = state_17338__$1;
(statearr_17342_17363[(2)] = null);

(statearr_17342_17363[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17339 === (4))){
var inst_17318 = (state_17338[(8)]);
var inst_17318__$1 = (state_17338[(2)]);
var inst_17319 = (inst_17318__$1 == null);
var inst_17320 = cljs.core.not(inst_17319);
var state_17338__$1 = (function (){var statearr_17343 = state_17338;
(statearr_17343[(8)] = inst_17318__$1);

return statearr_17343;
})();
if(inst_17320){
var statearr_17344_17364 = state_17338__$1;
(statearr_17344_17364[(1)] = (5));

} else {
var statearr_17345_17365 = state_17338__$1;
(statearr_17345_17365[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17339 === (6))){
var state_17338__$1 = state_17338;
var statearr_17346_17366 = state_17338__$1;
(statearr_17346_17366[(2)] = null);

(statearr_17346_17366[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17339 === (3))){
var inst_17335 = (state_17338[(2)]);
var inst_17336 = cljs.core.async.close_BANG_(out);
var state_17338__$1 = (function (){var statearr_17347 = state_17338;
(statearr_17347[(9)] = inst_17335);

return statearr_17347;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17338__$1,inst_17336);
} else {
if((state_val_17339 === (2))){
var state_17338__$1 = state_17338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17338__$1,(4),ch);
} else {
if((state_val_17339 === (11))){
var inst_17318 = (state_17338[(8)]);
var inst_17327 = (state_17338[(2)]);
var inst_17315 = inst_17318;
var state_17338__$1 = (function (){var statearr_17348 = state_17338;
(statearr_17348[(10)] = inst_17327);

(statearr_17348[(7)] = inst_17315);

return statearr_17348;
})();
var statearr_17349_17367 = state_17338__$1;
(statearr_17349_17367[(2)] = null);

(statearr_17349_17367[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17339 === (9))){
var inst_17318 = (state_17338[(8)]);
var state_17338__$1 = state_17338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17338__$1,(11),out,inst_17318);
} else {
if((state_val_17339 === (5))){
var inst_17318 = (state_17338[(8)]);
var inst_17315 = (state_17338[(7)]);
var inst_17322 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17318,inst_17315);
var state_17338__$1 = state_17338;
if(inst_17322){
var statearr_17351_17368 = state_17338__$1;
(statearr_17351_17368[(1)] = (8));

} else {
var statearr_17352_17369 = state_17338__$1;
(statearr_17352_17369[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17339 === (10))){
var inst_17330 = (state_17338[(2)]);
var state_17338__$1 = state_17338;
var statearr_17353_17370 = state_17338__$1;
(statearr_17353_17370[(2)] = inst_17330);

(statearr_17353_17370[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17339 === (8))){
var inst_17315 = (state_17338[(7)]);
var tmp17350 = inst_17315;
var inst_17315__$1 = tmp17350;
var state_17338__$1 = (function (){var statearr_17354 = state_17338;
(statearr_17354[(7)] = inst_17315__$1);

return statearr_17354;
})();
var statearr_17355_17371 = state_17338__$1;
(statearr_17355_17371[(2)] = null);

(statearr_17355_17371[(1)] = (2));


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
});})(c__15635__auto___17361,out))
;
return ((function (switch__15535__auto__,c__15635__auto___17361,out){
return (function() {
var cljs$core$async$state_machine__15536__auto__ = null;
var cljs$core$async$state_machine__15536__auto____0 = (function (){
var statearr_17356 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17356[(0)] = cljs$core$async$state_machine__15536__auto__);

(statearr_17356[(1)] = (1));

return statearr_17356;
});
var cljs$core$async$state_machine__15536__auto____1 = (function (state_17338){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_17338);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e17357){if((e17357 instanceof Object)){
var ex__15539__auto__ = e17357;
var statearr_17358_17372 = state_17338;
(statearr_17358_17372[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17338);

return cljs.core.cst$kw$recur;
} else {
throw e17357;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__17373 = state_17338;
state_17338 = G__17373;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$state_machine__15536__auto__ = function(state_17338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15536__auto____1.call(this,state_17338);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15536__auto____0;
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15536__auto____1;
return cljs$core$async$state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto___17361,out))
})();
var state__15637__auto__ = (function (){var statearr_17359 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_17359[(6)] = c__15635__auto___17361);

return statearr_17359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto___17361,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17375 = arguments.length;
switch (G__17375) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15635__auto___17441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto___17441,out){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto___17441,out){
return (function (state_17413){
var state_val_17414 = (state_17413[(1)]);
if((state_val_17414 === (7))){
var inst_17409 = (state_17413[(2)]);
var state_17413__$1 = state_17413;
var statearr_17415_17442 = state_17413__$1;
(statearr_17415_17442[(2)] = inst_17409);

(statearr_17415_17442[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17414 === (1))){
var inst_17376 = (new Array(n));
var inst_17377 = inst_17376;
var inst_17378 = (0);
var state_17413__$1 = (function (){var statearr_17416 = state_17413;
(statearr_17416[(7)] = inst_17377);

(statearr_17416[(8)] = inst_17378);

return statearr_17416;
})();
var statearr_17417_17443 = state_17413__$1;
(statearr_17417_17443[(2)] = null);

(statearr_17417_17443[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17414 === (4))){
var inst_17381 = (state_17413[(9)]);
var inst_17381__$1 = (state_17413[(2)]);
var inst_17382 = (inst_17381__$1 == null);
var inst_17383 = cljs.core.not(inst_17382);
var state_17413__$1 = (function (){var statearr_17418 = state_17413;
(statearr_17418[(9)] = inst_17381__$1);

return statearr_17418;
})();
if(inst_17383){
var statearr_17419_17444 = state_17413__$1;
(statearr_17419_17444[(1)] = (5));

} else {
var statearr_17420_17445 = state_17413__$1;
(statearr_17420_17445[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17414 === (15))){
var inst_17403 = (state_17413[(2)]);
var state_17413__$1 = state_17413;
var statearr_17421_17446 = state_17413__$1;
(statearr_17421_17446[(2)] = inst_17403);

(statearr_17421_17446[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17414 === (13))){
var state_17413__$1 = state_17413;
var statearr_17422_17447 = state_17413__$1;
(statearr_17422_17447[(2)] = null);

(statearr_17422_17447[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17414 === (6))){
var inst_17378 = (state_17413[(8)]);
var inst_17399 = (inst_17378 > (0));
var state_17413__$1 = state_17413;
if(cljs.core.truth_(inst_17399)){
var statearr_17423_17448 = state_17413__$1;
(statearr_17423_17448[(1)] = (12));

} else {
var statearr_17424_17449 = state_17413__$1;
(statearr_17424_17449[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17414 === (3))){
var inst_17411 = (state_17413[(2)]);
var state_17413__$1 = state_17413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17413__$1,inst_17411);
} else {
if((state_val_17414 === (12))){
var inst_17377 = (state_17413[(7)]);
var inst_17401 = cljs.core.vec(inst_17377);
var state_17413__$1 = state_17413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17413__$1,(15),out,inst_17401);
} else {
if((state_val_17414 === (2))){
var state_17413__$1 = state_17413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17413__$1,(4),ch);
} else {
if((state_val_17414 === (11))){
var inst_17393 = (state_17413[(2)]);
var inst_17394 = (new Array(n));
var inst_17377 = inst_17394;
var inst_17378 = (0);
var state_17413__$1 = (function (){var statearr_17425 = state_17413;
(statearr_17425[(7)] = inst_17377);

(statearr_17425[(8)] = inst_17378);

(statearr_17425[(10)] = inst_17393);

return statearr_17425;
})();
var statearr_17426_17450 = state_17413__$1;
(statearr_17426_17450[(2)] = null);

(statearr_17426_17450[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17414 === (9))){
var inst_17377 = (state_17413[(7)]);
var inst_17391 = cljs.core.vec(inst_17377);
var state_17413__$1 = state_17413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17413__$1,(11),out,inst_17391);
} else {
if((state_val_17414 === (5))){
var inst_17377 = (state_17413[(7)]);
var inst_17381 = (state_17413[(9)]);
var inst_17378 = (state_17413[(8)]);
var inst_17386 = (state_17413[(11)]);
var inst_17385 = (inst_17377[inst_17378] = inst_17381);
var inst_17386__$1 = (inst_17378 + (1));
var inst_17387 = (inst_17386__$1 < n);
var state_17413__$1 = (function (){var statearr_17427 = state_17413;
(statearr_17427[(12)] = inst_17385);

(statearr_17427[(11)] = inst_17386__$1);

return statearr_17427;
})();
if(cljs.core.truth_(inst_17387)){
var statearr_17428_17451 = state_17413__$1;
(statearr_17428_17451[(1)] = (8));

} else {
var statearr_17429_17452 = state_17413__$1;
(statearr_17429_17452[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17414 === (14))){
var inst_17406 = (state_17413[(2)]);
var inst_17407 = cljs.core.async.close_BANG_(out);
var state_17413__$1 = (function (){var statearr_17431 = state_17413;
(statearr_17431[(13)] = inst_17406);

return statearr_17431;
})();
var statearr_17432_17453 = state_17413__$1;
(statearr_17432_17453[(2)] = inst_17407);

(statearr_17432_17453[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17414 === (10))){
var inst_17397 = (state_17413[(2)]);
var state_17413__$1 = state_17413;
var statearr_17433_17454 = state_17413__$1;
(statearr_17433_17454[(2)] = inst_17397);

(statearr_17433_17454[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17414 === (8))){
var inst_17377 = (state_17413[(7)]);
var inst_17386 = (state_17413[(11)]);
var tmp17430 = inst_17377;
var inst_17377__$1 = tmp17430;
var inst_17378 = inst_17386;
var state_17413__$1 = (function (){var statearr_17434 = state_17413;
(statearr_17434[(7)] = inst_17377__$1);

(statearr_17434[(8)] = inst_17378);

return statearr_17434;
})();
var statearr_17435_17455 = state_17413__$1;
(statearr_17435_17455[(2)] = null);

(statearr_17435_17455[(1)] = (2));


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
});})(c__15635__auto___17441,out))
;
return ((function (switch__15535__auto__,c__15635__auto___17441,out){
return (function() {
var cljs$core$async$state_machine__15536__auto__ = null;
var cljs$core$async$state_machine__15536__auto____0 = (function (){
var statearr_17436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17436[(0)] = cljs$core$async$state_machine__15536__auto__);

(statearr_17436[(1)] = (1));

return statearr_17436;
});
var cljs$core$async$state_machine__15536__auto____1 = (function (state_17413){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_17413);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e17437){if((e17437 instanceof Object)){
var ex__15539__auto__ = e17437;
var statearr_17438_17456 = state_17413;
(statearr_17438_17456[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17413);

return cljs.core.cst$kw$recur;
} else {
throw e17437;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__17457 = state_17413;
state_17413 = G__17457;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$state_machine__15536__auto__ = function(state_17413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15536__auto____1.call(this,state_17413);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15536__auto____0;
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15536__auto____1;
return cljs$core$async$state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto___17441,out))
})();
var state__15637__auto__ = (function (){var statearr_17439 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_17439[(6)] = c__15635__auto___17441);

return statearr_17439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto___17441,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17459 = arguments.length;
switch (G__17459) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15635__auto___17529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto___17529,out){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto___17529,out){
return (function (state_17501){
var state_val_17502 = (state_17501[(1)]);
if((state_val_17502 === (7))){
var inst_17497 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
var statearr_17503_17530 = state_17501__$1;
(statearr_17503_17530[(2)] = inst_17497);

(statearr_17503_17530[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17502 === (1))){
var inst_17460 = [];
var inst_17461 = inst_17460;
var inst_17462 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17501__$1 = (function (){var statearr_17504 = state_17501;
(statearr_17504[(7)] = inst_17461);

(statearr_17504[(8)] = inst_17462);

return statearr_17504;
})();
var statearr_17505_17531 = state_17501__$1;
(statearr_17505_17531[(2)] = null);

(statearr_17505_17531[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17502 === (4))){
var inst_17465 = (state_17501[(9)]);
var inst_17465__$1 = (state_17501[(2)]);
var inst_17466 = (inst_17465__$1 == null);
var inst_17467 = cljs.core.not(inst_17466);
var state_17501__$1 = (function (){var statearr_17506 = state_17501;
(statearr_17506[(9)] = inst_17465__$1);

return statearr_17506;
})();
if(inst_17467){
var statearr_17507_17532 = state_17501__$1;
(statearr_17507_17532[(1)] = (5));

} else {
var statearr_17508_17533 = state_17501__$1;
(statearr_17508_17533[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17502 === (15))){
var inst_17491 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
var statearr_17509_17534 = state_17501__$1;
(statearr_17509_17534[(2)] = inst_17491);

(statearr_17509_17534[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17502 === (13))){
var state_17501__$1 = state_17501;
var statearr_17510_17535 = state_17501__$1;
(statearr_17510_17535[(2)] = null);

(statearr_17510_17535[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17502 === (6))){
var inst_17461 = (state_17501[(7)]);
var inst_17486 = inst_17461.length;
var inst_17487 = (inst_17486 > (0));
var state_17501__$1 = state_17501;
if(cljs.core.truth_(inst_17487)){
var statearr_17511_17536 = state_17501__$1;
(statearr_17511_17536[(1)] = (12));

} else {
var statearr_17512_17537 = state_17501__$1;
(statearr_17512_17537[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17502 === (3))){
var inst_17499 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17501__$1,inst_17499);
} else {
if((state_val_17502 === (12))){
var inst_17461 = (state_17501[(7)]);
var inst_17489 = cljs.core.vec(inst_17461);
var state_17501__$1 = state_17501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17501__$1,(15),out,inst_17489);
} else {
if((state_val_17502 === (2))){
var state_17501__$1 = state_17501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17501__$1,(4),ch);
} else {
if((state_val_17502 === (11))){
var inst_17469 = (state_17501[(10)]);
var inst_17465 = (state_17501[(9)]);
var inst_17479 = (state_17501[(2)]);
var inst_17480 = [];
var inst_17481 = inst_17480.push(inst_17465);
var inst_17461 = inst_17480;
var inst_17462 = inst_17469;
var state_17501__$1 = (function (){var statearr_17513 = state_17501;
(statearr_17513[(11)] = inst_17481);

(statearr_17513[(7)] = inst_17461);

(statearr_17513[(8)] = inst_17462);

(statearr_17513[(12)] = inst_17479);

return statearr_17513;
})();
var statearr_17514_17538 = state_17501__$1;
(statearr_17514_17538[(2)] = null);

(statearr_17514_17538[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17502 === (9))){
var inst_17461 = (state_17501[(7)]);
var inst_17477 = cljs.core.vec(inst_17461);
var state_17501__$1 = state_17501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17501__$1,(11),out,inst_17477);
} else {
if((state_val_17502 === (5))){
var inst_17469 = (state_17501[(10)]);
var inst_17462 = (state_17501[(8)]);
var inst_17465 = (state_17501[(9)]);
var inst_17469__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17465) : f.call(null,inst_17465));
var inst_17470 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17469__$1,inst_17462);
var inst_17471 = cljs.core.keyword_identical_QMARK_(inst_17462,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17472 = (inst_17470) || (inst_17471);
var state_17501__$1 = (function (){var statearr_17515 = state_17501;
(statearr_17515[(10)] = inst_17469__$1);

return statearr_17515;
})();
if(cljs.core.truth_(inst_17472)){
var statearr_17516_17539 = state_17501__$1;
(statearr_17516_17539[(1)] = (8));

} else {
var statearr_17517_17540 = state_17501__$1;
(statearr_17517_17540[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17502 === (14))){
var inst_17494 = (state_17501[(2)]);
var inst_17495 = cljs.core.async.close_BANG_(out);
var state_17501__$1 = (function (){var statearr_17519 = state_17501;
(statearr_17519[(13)] = inst_17494);

return statearr_17519;
})();
var statearr_17520_17541 = state_17501__$1;
(statearr_17520_17541[(2)] = inst_17495);

(statearr_17520_17541[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17502 === (10))){
var inst_17484 = (state_17501[(2)]);
var state_17501__$1 = state_17501;
var statearr_17521_17542 = state_17501__$1;
(statearr_17521_17542[(2)] = inst_17484);

(statearr_17521_17542[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17502 === (8))){
var inst_17469 = (state_17501[(10)]);
var inst_17461 = (state_17501[(7)]);
var inst_17465 = (state_17501[(9)]);
var inst_17474 = inst_17461.push(inst_17465);
var tmp17518 = inst_17461;
var inst_17461__$1 = tmp17518;
var inst_17462 = inst_17469;
var state_17501__$1 = (function (){var statearr_17522 = state_17501;
(statearr_17522[(7)] = inst_17461__$1);

(statearr_17522[(8)] = inst_17462);

(statearr_17522[(14)] = inst_17474);

return statearr_17522;
})();
var statearr_17523_17543 = state_17501__$1;
(statearr_17523_17543[(2)] = null);

(statearr_17523_17543[(1)] = (2));


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
});})(c__15635__auto___17529,out))
;
return ((function (switch__15535__auto__,c__15635__auto___17529,out){
return (function() {
var cljs$core$async$state_machine__15536__auto__ = null;
var cljs$core$async$state_machine__15536__auto____0 = (function (){
var statearr_17524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17524[(0)] = cljs$core$async$state_machine__15536__auto__);

(statearr_17524[(1)] = (1));

return statearr_17524;
});
var cljs$core$async$state_machine__15536__auto____1 = (function (state_17501){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_17501);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e17525){if((e17525 instanceof Object)){
var ex__15539__auto__ = e17525;
var statearr_17526_17544 = state_17501;
(statearr_17526_17544[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17501);

return cljs.core.cst$kw$recur;
} else {
throw e17525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__17545 = state_17501;
state_17501 = G__17545;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
cljs$core$async$state_machine__15536__auto__ = function(state_17501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15536__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15536__auto____1.call(this,state_17501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15536__auto____0;
cljs$core$async$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15536__auto____1;
return cljs$core$async$state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto___17529,out))
})();
var state__15637__auto__ = (function (){var statearr_17527 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_17527[(6)] = c__15635__auto___17529);

return statearr_17527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto___17529,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

