// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31745 = arguments.length;
switch (G__31745) {
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
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31746 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31746 = (function (f,blockable,meta31747){
this.f = f;
this.blockable = blockable;
this.meta31747 = meta31747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31748,meta31747__$1){
var self__ = this;
var _31748__$1 = this;
return (new cljs.core.async.t_cljs$core$async31746(self__.f,self__.blockable,meta31747__$1));
});

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31748){
var self__ = this;
var _31748__$1 = this;
return self__.meta31747;
});

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31747","meta31747",1161265653,null)], null);
});

cljs.core.async.t_cljs$core$async31746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31746";

cljs.core.async.t_cljs$core$async31746.cljs$lang$ctorPrWriter = (function (this__28564__auto__,writer__28565__auto__,opt__28566__auto__){
return cljs.core._write.call(null,writer__28565__auto__,"cljs.core.async/t_cljs$core$async31746");
});

cljs.core.async.__GT_t_cljs$core$async31746 = (function cljs$core$async$__GT_t_cljs$core$async31746(f__$1,blockable__$1,meta31747){
return (new cljs.core.async.t_cljs$core$async31746(f__$1,blockable__$1,meta31747));
});

}

return (new cljs.core.async.t_cljs$core$async31746(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__31752 = arguments.length;
switch (G__31752) {
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
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__31755 = arguments.length;
switch (G__31755) {
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
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__31758 = arguments.length;
switch (G__31758) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31760 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31760);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31760,ret){
return (function (){
return fn1.call(null,val_31760);
});})(val_31760,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__31762 = arguments.length;
switch (G__31762) {
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
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28879__auto___31764 = n;
var x_31765 = (0);
while(true){
if((x_31765 < n__28879__auto___31764)){
(a[x_31765] = (0));

var G__31766 = (x_31765 + (1));
x_31765 = G__31766;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31767 = (i + (1));
i = G__31767;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31768 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31768 = (function (flag,meta31769){
this.flag = flag;
this.meta31769 = meta31769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31770,meta31769__$1){
var self__ = this;
var _31770__$1 = this;
return (new cljs.core.async.t_cljs$core$async31768(self__.flag,meta31769__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31770){
var self__ = this;
var _31770__$1 = this;
return self__.meta31769;
});})(flag))
;

cljs.core.async.t_cljs$core$async31768.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31768.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31768.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31768.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31768.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31769","meta31769",1210457061,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31768.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31768";

cljs.core.async.t_cljs$core$async31768.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28564__auto__,writer__28565__auto__,opt__28566__auto__){
return cljs.core._write.call(null,writer__28565__auto__,"cljs.core.async/t_cljs$core$async31768");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31768 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31768(flag__$1,meta31769){
return (new cljs.core.async.t_cljs$core$async31768(flag__$1,meta31769));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31768(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31771 = (function (flag,cb,meta31772){
this.flag = flag;
this.cb = cb;
this.meta31772 = meta31772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31773,meta31772__$1){
var self__ = this;
var _31773__$1 = this;
return (new cljs.core.async.t_cljs$core$async31771(self__.flag,self__.cb,meta31772__$1));
});

cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31773){
var self__ = this;
var _31773__$1 = this;
return self__.meta31772;
});

cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31771.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31772","meta31772",-297788572,null)], null);
});

cljs.core.async.t_cljs$core$async31771.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31771";

cljs.core.async.t_cljs$core$async31771.cljs$lang$ctorPrWriter = (function (this__28564__auto__,writer__28565__auto__,opt__28566__auto__){
return cljs.core._write.call(null,writer__28565__auto__,"cljs.core.async/t_cljs$core$async31771");
});

cljs.core.async.__GT_t_cljs$core$async31771 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31771(flag__$1,cb__$1,meta31772){
return (new cljs.core.async.t_cljs$core$async31771(flag__$1,cb__$1,meta31772));
});

}

return (new cljs.core.async.t_cljs$core$async31771(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31774_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31774_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31775_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31775_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27939__auto__ = wport;
if(cljs.core.truth_(or__27939__auto__)){
return or__27939__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31776 = (i + (1));
i = G__31776;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27939__auto__ = ret;
if(cljs.core.truth_(or__27939__auto__)){
return or__27939__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27927__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27927__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27927__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__29110__auto__ = [];
var len__29103__auto___31782 = arguments.length;
var i__29104__auto___31783 = (0);
while(true){
if((i__29104__auto___31783 < len__29103__auto___31782)){
args__29110__auto__.push((arguments[i__29104__auto___31783]));

var G__31784 = (i__29104__auto___31783 + (1));
i__29104__auto___31783 = G__31784;
continue;
} else {
}
break;
}

var argseq__29111__auto__ = ((((1) < args__29110__auto__.length))?(new cljs.core.IndexedSeq(args__29110__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29111__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31779){
var map__31780 = p__31779;
var map__31780__$1 = ((((!((map__31780 == null)))?((((map__31780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31780):map__31780);
var opts = map__31780__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31777){
var G__31778 = cljs.core.first.call(null,seq31777);
var seq31777__$1 = cljs.core.next.call(null,seq31777);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31778,seq31777__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__31786 = arguments.length;
switch (G__31786) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31699__auto___31832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto___31832){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto___31832){
return (function (state_31810){
var state_val_31811 = (state_31810[(1)]);
if((state_val_31811 === (7))){
var inst_31806 = (state_31810[(2)]);
var state_31810__$1 = state_31810;
var statearr_31812_31833 = state_31810__$1;
(statearr_31812_31833[(2)] = inst_31806);

(statearr_31812_31833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (1))){
var state_31810__$1 = state_31810;
var statearr_31813_31834 = state_31810__$1;
(statearr_31813_31834[(2)] = null);

(statearr_31813_31834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (4))){
var inst_31789 = (state_31810[(7)]);
var inst_31789__$1 = (state_31810[(2)]);
var inst_31790 = (inst_31789__$1 == null);
var state_31810__$1 = (function (){var statearr_31814 = state_31810;
(statearr_31814[(7)] = inst_31789__$1);

return statearr_31814;
})();
if(cljs.core.truth_(inst_31790)){
var statearr_31815_31835 = state_31810__$1;
(statearr_31815_31835[(1)] = (5));

} else {
var statearr_31816_31836 = state_31810__$1;
(statearr_31816_31836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (13))){
var state_31810__$1 = state_31810;
var statearr_31817_31837 = state_31810__$1;
(statearr_31817_31837[(2)] = null);

(statearr_31817_31837[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (6))){
var inst_31789 = (state_31810[(7)]);
var state_31810__$1 = state_31810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31810__$1,(11),to,inst_31789);
} else {
if((state_val_31811 === (3))){
var inst_31808 = (state_31810[(2)]);
var state_31810__$1 = state_31810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31810__$1,inst_31808);
} else {
if((state_val_31811 === (12))){
var state_31810__$1 = state_31810;
var statearr_31818_31838 = state_31810__$1;
(statearr_31818_31838[(2)] = null);

(statearr_31818_31838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (2))){
var state_31810__$1 = state_31810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31810__$1,(4),from);
} else {
if((state_val_31811 === (11))){
var inst_31799 = (state_31810[(2)]);
var state_31810__$1 = state_31810;
if(cljs.core.truth_(inst_31799)){
var statearr_31819_31839 = state_31810__$1;
(statearr_31819_31839[(1)] = (12));

} else {
var statearr_31820_31840 = state_31810__$1;
(statearr_31820_31840[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (9))){
var state_31810__$1 = state_31810;
var statearr_31821_31841 = state_31810__$1;
(statearr_31821_31841[(2)] = null);

(statearr_31821_31841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (5))){
var state_31810__$1 = state_31810;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31822_31842 = state_31810__$1;
(statearr_31822_31842[(1)] = (8));

} else {
var statearr_31823_31843 = state_31810__$1;
(statearr_31823_31843[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (14))){
var inst_31804 = (state_31810[(2)]);
var state_31810__$1 = state_31810;
var statearr_31824_31844 = state_31810__$1;
(statearr_31824_31844[(2)] = inst_31804);

(statearr_31824_31844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (10))){
var inst_31796 = (state_31810[(2)]);
var state_31810__$1 = state_31810;
var statearr_31825_31845 = state_31810__$1;
(statearr_31825_31845[(2)] = inst_31796);

(statearr_31825_31845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (8))){
var inst_31793 = cljs.core.async.close_BANG_.call(null,to);
var state_31810__$1 = state_31810;
var statearr_31826_31846 = state_31810__$1;
(statearr_31826_31846[(2)] = inst_31793);

(statearr_31826_31846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__31699__auto___31832))
;
return ((function (switch__31611__auto__,c__31699__auto___31832){
return (function() {
var cljs$core$async$state_machine__31612__auto__ = null;
var cljs$core$async$state_machine__31612__auto____0 = (function (){
var statearr_31827 = [null,null,null,null,null,null,null,null];
(statearr_31827[(0)] = cljs$core$async$state_machine__31612__auto__);

(statearr_31827[(1)] = (1));

return statearr_31827;
});
var cljs$core$async$state_machine__31612__auto____1 = (function (state_31810){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_31810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e31828){if((e31828 instanceof Object)){
var ex__31615__auto__ = e31828;
var statearr_31829_31847 = state_31810;
(statearr_31829_31847[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31848 = state_31810;
state_31810 = G__31848;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$state_machine__31612__auto__ = function(state_31810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31612__auto____1.call(this,state_31810);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31612__auto____0;
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31612__auto____1;
return cljs$core$async$state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto___31832))
})();
var state__31701__auto__ = (function (){var statearr_31830 = f__31700__auto__.call(null);
(statearr_31830[(6)] = c__31699__auto___31832);

return statearr_31830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto___31832))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31849){
var vec__31850 = p__31849;
var v = cljs.core.nth.call(null,vec__31850,(0),null);
var p = cljs.core.nth.call(null,vec__31850,(1),null);
var job = vec__31850;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31699__auto___32021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto___32021,res,vec__31850,v,p,job,jobs,results){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto___32021,res,vec__31850,v,p,job,jobs,results){
return (function (state_31857){
var state_val_31858 = (state_31857[(1)]);
if((state_val_31858 === (1))){
var state_31857__$1 = state_31857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31857__$1,(2),res,v);
} else {
if((state_val_31858 === (2))){
var inst_31854 = (state_31857[(2)]);
var inst_31855 = cljs.core.async.close_BANG_.call(null,res);
var state_31857__$1 = (function (){var statearr_31859 = state_31857;
(statearr_31859[(7)] = inst_31854);

return statearr_31859;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31857__$1,inst_31855);
} else {
return null;
}
}
});})(c__31699__auto___32021,res,vec__31850,v,p,job,jobs,results))
;
return ((function (switch__31611__auto__,c__31699__auto___32021,res,vec__31850,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____0 = (function (){
var statearr_31860 = [null,null,null,null,null,null,null,null];
(statearr_31860[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__);

(statearr_31860[(1)] = (1));

return statearr_31860;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____1 = (function (state_31857){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_31857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e31861){if((e31861 instanceof Object)){
var ex__31615__auto__ = e31861;
var statearr_31862_32022 = state_31857;
(statearr_31862_32022[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32023 = state_31857;
state_31857 = G__32023;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__ = function(state_31857){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____1.call(this,state_31857);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto___32021,res,vec__31850,v,p,job,jobs,results))
})();
var state__31701__auto__ = (function (){var statearr_31863 = f__31700__auto__.call(null);
(statearr_31863[(6)] = c__31699__auto___32021);

return statearr_31863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto___32021,res,vec__31850,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31864){
var vec__31865 = p__31864;
var v = cljs.core.nth.call(null,vec__31865,(0),null);
var p = cljs.core.nth.call(null,vec__31865,(1),null);
var job = vec__31865;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28879__auto___32024 = n;
var __32025 = (0);
while(true){
if((__32025 < n__28879__auto___32024)){
var G__31868_32026 = type;
var G__31868_32027__$1 = (((G__31868_32026 instanceof cljs.core.Keyword))?G__31868_32026.fqn:null);
switch (G__31868_32027__$1) {
case "compute":
var c__31699__auto___32029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32025,c__31699__auto___32029,G__31868_32026,G__31868_32027__$1,n__28879__auto___32024,jobs,results,process,async){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (__32025,c__31699__auto___32029,G__31868_32026,G__31868_32027__$1,n__28879__auto___32024,jobs,results,process,async){
return (function (state_31881){
var state_val_31882 = (state_31881[(1)]);
if((state_val_31882 === (1))){
var state_31881__$1 = state_31881;
var statearr_31883_32030 = state_31881__$1;
(statearr_31883_32030[(2)] = null);

(statearr_31883_32030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31882 === (2))){
var state_31881__$1 = state_31881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31881__$1,(4),jobs);
} else {
if((state_val_31882 === (3))){
var inst_31879 = (state_31881[(2)]);
var state_31881__$1 = state_31881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31881__$1,inst_31879);
} else {
if((state_val_31882 === (4))){
var inst_31871 = (state_31881[(2)]);
var inst_31872 = process.call(null,inst_31871);
var state_31881__$1 = state_31881;
if(cljs.core.truth_(inst_31872)){
var statearr_31884_32031 = state_31881__$1;
(statearr_31884_32031[(1)] = (5));

} else {
var statearr_31885_32032 = state_31881__$1;
(statearr_31885_32032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31882 === (5))){
var state_31881__$1 = state_31881;
var statearr_31886_32033 = state_31881__$1;
(statearr_31886_32033[(2)] = null);

(statearr_31886_32033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31882 === (6))){
var state_31881__$1 = state_31881;
var statearr_31887_32034 = state_31881__$1;
(statearr_31887_32034[(2)] = null);

(statearr_31887_32034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31882 === (7))){
var inst_31877 = (state_31881[(2)]);
var state_31881__$1 = state_31881;
var statearr_31888_32035 = state_31881__$1;
(statearr_31888_32035[(2)] = inst_31877);

(statearr_31888_32035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32025,c__31699__auto___32029,G__31868_32026,G__31868_32027__$1,n__28879__auto___32024,jobs,results,process,async))
;
return ((function (__32025,switch__31611__auto__,c__31699__auto___32029,G__31868_32026,G__31868_32027__$1,n__28879__auto___32024,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____0 = (function (){
var statearr_31889 = [null,null,null,null,null,null,null];
(statearr_31889[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__);

(statearr_31889[(1)] = (1));

return statearr_31889;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____1 = (function (state_31881){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_31881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e31890){if((e31890 instanceof Object)){
var ex__31615__auto__ = e31890;
var statearr_31891_32036 = state_31881;
(statearr_31891_32036[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32037 = state_31881;
state_31881 = G__32037;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__ = function(state_31881){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____1.call(this,state_31881);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__;
})()
;})(__32025,switch__31611__auto__,c__31699__auto___32029,G__31868_32026,G__31868_32027__$1,n__28879__auto___32024,jobs,results,process,async))
})();
var state__31701__auto__ = (function (){var statearr_31892 = f__31700__auto__.call(null);
(statearr_31892[(6)] = c__31699__auto___32029);

return statearr_31892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(__32025,c__31699__auto___32029,G__31868_32026,G__31868_32027__$1,n__28879__auto___32024,jobs,results,process,async))
);


break;
case "async":
var c__31699__auto___32038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32025,c__31699__auto___32038,G__31868_32026,G__31868_32027__$1,n__28879__auto___32024,jobs,results,process,async){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (__32025,c__31699__auto___32038,G__31868_32026,G__31868_32027__$1,n__28879__auto___32024,jobs,results,process,async){
return (function (state_31905){
var state_val_31906 = (state_31905[(1)]);
if((state_val_31906 === (1))){
var state_31905__$1 = state_31905;
var statearr_31907_32039 = state_31905__$1;
(statearr_31907_32039[(2)] = null);

(statearr_31907_32039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (2))){
var state_31905__$1 = state_31905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31905__$1,(4),jobs);
} else {
if((state_val_31906 === (3))){
var inst_31903 = (state_31905[(2)]);
var state_31905__$1 = state_31905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31905__$1,inst_31903);
} else {
if((state_val_31906 === (4))){
var inst_31895 = (state_31905[(2)]);
var inst_31896 = async.call(null,inst_31895);
var state_31905__$1 = state_31905;
if(cljs.core.truth_(inst_31896)){
var statearr_31908_32040 = state_31905__$1;
(statearr_31908_32040[(1)] = (5));

} else {
var statearr_31909_32041 = state_31905__$1;
(statearr_31909_32041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (5))){
var state_31905__$1 = state_31905;
var statearr_31910_32042 = state_31905__$1;
(statearr_31910_32042[(2)] = null);

(statearr_31910_32042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (6))){
var state_31905__$1 = state_31905;
var statearr_31911_32043 = state_31905__$1;
(statearr_31911_32043[(2)] = null);

(statearr_31911_32043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31906 === (7))){
var inst_31901 = (state_31905[(2)]);
var state_31905__$1 = state_31905;
var statearr_31912_32044 = state_31905__$1;
(statearr_31912_32044[(2)] = inst_31901);

(statearr_31912_32044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32025,c__31699__auto___32038,G__31868_32026,G__31868_32027__$1,n__28879__auto___32024,jobs,results,process,async))
;
return ((function (__32025,switch__31611__auto__,c__31699__auto___32038,G__31868_32026,G__31868_32027__$1,n__28879__auto___32024,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____0 = (function (){
var statearr_31913 = [null,null,null,null,null,null,null];
(statearr_31913[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__);

(statearr_31913[(1)] = (1));

return statearr_31913;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____1 = (function (state_31905){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_31905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e31914){if((e31914 instanceof Object)){
var ex__31615__auto__ = e31914;
var statearr_31915_32045 = state_31905;
(statearr_31915_32045[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32046 = state_31905;
state_31905 = G__32046;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__ = function(state_31905){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____1.call(this,state_31905);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__;
})()
;})(__32025,switch__31611__auto__,c__31699__auto___32038,G__31868_32026,G__31868_32027__$1,n__28879__auto___32024,jobs,results,process,async))
})();
var state__31701__auto__ = (function (){var statearr_31916 = f__31700__auto__.call(null);
(statearr_31916[(6)] = c__31699__auto___32038);

return statearr_31916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(__32025,c__31699__auto___32038,G__31868_32026,G__31868_32027__$1,n__28879__auto___32024,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31868_32027__$1)].join('')));

}

var G__32047 = (__32025 + (1));
__32025 = G__32047;
continue;
} else {
}
break;
}

var c__31699__auto___32048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto___32048,jobs,results,process,async){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto___32048,jobs,results,process,async){
return (function (state_31938){
var state_val_31939 = (state_31938[(1)]);
if((state_val_31939 === (1))){
var state_31938__$1 = state_31938;
var statearr_31940_32049 = state_31938__$1;
(statearr_31940_32049[(2)] = null);

(statearr_31940_32049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (2))){
var state_31938__$1 = state_31938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31938__$1,(4),from);
} else {
if((state_val_31939 === (3))){
var inst_31936 = (state_31938[(2)]);
var state_31938__$1 = state_31938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31938__$1,inst_31936);
} else {
if((state_val_31939 === (4))){
var inst_31919 = (state_31938[(7)]);
var inst_31919__$1 = (state_31938[(2)]);
var inst_31920 = (inst_31919__$1 == null);
var state_31938__$1 = (function (){var statearr_31941 = state_31938;
(statearr_31941[(7)] = inst_31919__$1);

return statearr_31941;
})();
if(cljs.core.truth_(inst_31920)){
var statearr_31942_32050 = state_31938__$1;
(statearr_31942_32050[(1)] = (5));

} else {
var statearr_31943_32051 = state_31938__$1;
(statearr_31943_32051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (5))){
var inst_31922 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31938__$1 = state_31938;
var statearr_31944_32052 = state_31938__$1;
(statearr_31944_32052[(2)] = inst_31922);

(statearr_31944_32052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (6))){
var inst_31924 = (state_31938[(8)]);
var inst_31919 = (state_31938[(7)]);
var inst_31924__$1 = cljs.core.async.chan.call(null,(1));
var inst_31925 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31926 = [inst_31919,inst_31924__$1];
var inst_31927 = (new cljs.core.PersistentVector(null,2,(5),inst_31925,inst_31926,null));
var state_31938__$1 = (function (){var statearr_31945 = state_31938;
(statearr_31945[(8)] = inst_31924__$1);

return statearr_31945;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31938__$1,(8),jobs,inst_31927);
} else {
if((state_val_31939 === (7))){
var inst_31934 = (state_31938[(2)]);
var state_31938__$1 = state_31938;
var statearr_31946_32053 = state_31938__$1;
(statearr_31946_32053[(2)] = inst_31934);

(statearr_31946_32053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31939 === (8))){
var inst_31924 = (state_31938[(8)]);
var inst_31929 = (state_31938[(2)]);
var state_31938__$1 = (function (){var statearr_31947 = state_31938;
(statearr_31947[(9)] = inst_31929);

return statearr_31947;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31938__$1,(9),results,inst_31924);
} else {
if((state_val_31939 === (9))){
var inst_31931 = (state_31938[(2)]);
var state_31938__$1 = (function (){var statearr_31948 = state_31938;
(statearr_31948[(10)] = inst_31931);

return statearr_31948;
})();
var statearr_31949_32054 = state_31938__$1;
(statearr_31949_32054[(2)] = null);

(statearr_31949_32054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__31699__auto___32048,jobs,results,process,async))
;
return ((function (switch__31611__auto__,c__31699__auto___32048,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____0 = (function (){
var statearr_31950 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31950[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__);

(statearr_31950[(1)] = (1));

return statearr_31950;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____1 = (function (state_31938){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_31938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e31951){if((e31951 instanceof Object)){
var ex__31615__auto__ = e31951;
var statearr_31952_32055 = state_31938;
(statearr_31952_32055[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32056 = state_31938;
state_31938 = G__32056;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__ = function(state_31938){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____1.call(this,state_31938);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto___32048,jobs,results,process,async))
})();
var state__31701__auto__ = (function (){var statearr_31953 = f__31700__auto__.call(null);
(statearr_31953[(6)] = c__31699__auto___32048);

return statearr_31953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto___32048,jobs,results,process,async))
);


var c__31699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto__,jobs,results,process,async){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto__,jobs,results,process,async){
return (function (state_31991){
var state_val_31992 = (state_31991[(1)]);
if((state_val_31992 === (7))){
var inst_31987 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_31993_32057 = state_31991__$1;
(statearr_31993_32057[(2)] = inst_31987);

(statearr_31993_32057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (20))){
var state_31991__$1 = state_31991;
var statearr_31994_32058 = state_31991__$1;
(statearr_31994_32058[(2)] = null);

(statearr_31994_32058[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (1))){
var state_31991__$1 = state_31991;
var statearr_31995_32059 = state_31991__$1;
(statearr_31995_32059[(2)] = null);

(statearr_31995_32059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (4))){
var inst_31956 = (state_31991[(7)]);
var inst_31956__$1 = (state_31991[(2)]);
var inst_31957 = (inst_31956__$1 == null);
var state_31991__$1 = (function (){var statearr_31996 = state_31991;
(statearr_31996[(7)] = inst_31956__$1);

return statearr_31996;
})();
if(cljs.core.truth_(inst_31957)){
var statearr_31997_32060 = state_31991__$1;
(statearr_31997_32060[(1)] = (5));

} else {
var statearr_31998_32061 = state_31991__$1;
(statearr_31998_32061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (15))){
var inst_31969 = (state_31991[(8)]);
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31991__$1,(18),to,inst_31969);
} else {
if((state_val_31992 === (21))){
var inst_31982 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_31999_32062 = state_31991__$1;
(statearr_31999_32062[(2)] = inst_31982);

(statearr_31999_32062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (13))){
var inst_31984 = (state_31991[(2)]);
var state_31991__$1 = (function (){var statearr_32000 = state_31991;
(statearr_32000[(9)] = inst_31984);

return statearr_32000;
})();
var statearr_32001_32063 = state_31991__$1;
(statearr_32001_32063[(2)] = null);

(statearr_32001_32063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (6))){
var inst_31956 = (state_31991[(7)]);
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31991__$1,(11),inst_31956);
} else {
if((state_val_31992 === (17))){
var inst_31977 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
if(cljs.core.truth_(inst_31977)){
var statearr_32002_32064 = state_31991__$1;
(statearr_32002_32064[(1)] = (19));

} else {
var statearr_32003_32065 = state_31991__$1;
(statearr_32003_32065[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (3))){
var inst_31989 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31991__$1,inst_31989);
} else {
if((state_val_31992 === (12))){
var inst_31966 = (state_31991[(10)]);
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31991__$1,(14),inst_31966);
} else {
if((state_val_31992 === (2))){
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31991__$1,(4),results);
} else {
if((state_val_31992 === (19))){
var state_31991__$1 = state_31991;
var statearr_32004_32066 = state_31991__$1;
(statearr_32004_32066[(2)] = null);

(statearr_32004_32066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (11))){
var inst_31966 = (state_31991[(2)]);
var state_31991__$1 = (function (){var statearr_32005 = state_31991;
(statearr_32005[(10)] = inst_31966);

return statearr_32005;
})();
var statearr_32006_32067 = state_31991__$1;
(statearr_32006_32067[(2)] = null);

(statearr_32006_32067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (9))){
var state_31991__$1 = state_31991;
var statearr_32007_32068 = state_31991__$1;
(statearr_32007_32068[(2)] = null);

(statearr_32007_32068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (5))){
var state_31991__$1 = state_31991;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32008_32069 = state_31991__$1;
(statearr_32008_32069[(1)] = (8));

} else {
var statearr_32009_32070 = state_31991__$1;
(statearr_32009_32070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (14))){
var inst_31969 = (state_31991[(8)]);
var inst_31971 = (state_31991[(11)]);
var inst_31969__$1 = (state_31991[(2)]);
var inst_31970 = (inst_31969__$1 == null);
var inst_31971__$1 = cljs.core.not.call(null,inst_31970);
var state_31991__$1 = (function (){var statearr_32010 = state_31991;
(statearr_32010[(8)] = inst_31969__$1);

(statearr_32010[(11)] = inst_31971__$1);

return statearr_32010;
})();
if(inst_31971__$1){
var statearr_32011_32071 = state_31991__$1;
(statearr_32011_32071[(1)] = (15));

} else {
var statearr_32012_32072 = state_31991__$1;
(statearr_32012_32072[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (16))){
var inst_31971 = (state_31991[(11)]);
var state_31991__$1 = state_31991;
var statearr_32013_32073 = state_31991__$1;
(statearr_32013_32073[(2)] = inst_31971);

(statearr_32013_32073[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (10))){
var inst_31963 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32014_32074 = state_31991__$1;
(statearr_32014_32074[(2)] = inst_31963);

(statearr_32014_32074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (18))){
var inst_31974 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32015_32075 = state_31991__$1;
(statearr_32015_32075[(2)] = inst_31974);

(statearr_32015_32075[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (8))){
var inst_31960 = cljs.core.async.close_BANG_.call(null,to);
var state_31991__$1 = state_31991;
var statearr_32016_32076 = state_31991__$1;
(statearr_32016_32076[(2)] = inst_31960);

(statearr_32016_32076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__31699__auto__,jobs,results,process,async))
;
return ((function (switch__31611__auto__,c__31699__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____0 = (function (){
var statearr_32017 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__);

(statearr_32017[(1)] = (1));

return statearr_32017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____1 = (function (state_31991){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_31991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e32018){if((e32018 instanceof Object)){
var ex__31615__auto__ = e32018;
var statearr_32019_32077 = state_31991;
(statearr_32019_32077[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32078 = state_31991;
state_31991 = G__32078;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__ = function(state_31991){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____1.call(this,state_31991);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31612__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto__,jobs,results,process,async))
})();
var state__31701__auto__ = (function (){var statearr_32020 = f__31700__auto__.call(null);
(statearr_32020[(6)] = c__31699__auto__);

return statearr_32020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto__,jobs,results,process,async))
);

return c__31699__auto__;
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
var G__32080 = arguments.length;
switch (G__32080) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__32083 = arguments.length;
switch (G__32083) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__32086 = arguments.length;
switch (G__32086) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31699__auto___32135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto___32135,tc,fc){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto___32135,tc,fc){
return (function (state_32112){
var state_val_32113 = (state_32112[(1)]);
if((state_val_32113 === (7))){
var inst_32108 = (state_32112[(2)]);
var state_32112__$1 = state_32112;
var statearr_32114_32136 = state_32112__$1;
(statearr_32114_32136[(2)] = inst_32108);

(statearr_32114_32136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (1))){
var state_32112__$1 = state_32112;
var statearr_32115_32137 = state_32112__$1;
(statearr_32115_32137[(2)] = null);

(statearr_32115_32137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (4))){
var inst_32089 = (state_32112[(7)]);
var inst_32089__$1 = (state_32112[(2)]);
var inst_32090 = (inst_32089__$1 == null);
var state_32112__$1 = (function (){var statearr_32116 = state_32112;
(statearr_32116[(7)] = inst_32089__$1);

return statearr_32116;
})();
if(cljs.core.truth_(inst_32090)){
var statearr_32117_32138 = state_32112__$1;
(statearr_32117_32138[(1)] = (5));

} else {
var statearr_32118_32139 = state_32112__$1;
(statearr_32118_32139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (13))){
var state_32112__$1 = state_32112;
var statearr_32119_32140 = state_32112__$1;
(statearr_32119_32140[(2)] = null);

(statearr_32119_32140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (6))){
var inst_32089 = (state_32112[(7)]);
var inst_32095 = p.call(null,inst_32089);
var state_32112__$1 = state_32112;
if(cljs.core.truth_(inst_32095)){
var statearr_32120_32141 = state_32112__$1;
(statearr_32120_32141[(1)] = (9));

} else {
var statearr_32121_32142 = state_32112__$1;
(statearr_32121_32142[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (3))){
var inst_32110 = (state_32112[(2)]);
var state_32112__$1 = state_32112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32112__$1,inst_32110);
} else {
if((state_val_32113 === (12))){
var state_32112__$1 = state_32112;
var statearr_32122_32143 = state_32112__$1;
(statearr_32122_32143[(2)] = null);

(statearr_32122_32143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (2))){
var state_32112__$1 = state_32112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32112__$1,(4),ch);
} else {
if((state_val_32113 === (11))){
var inst_32089 = (state_32112[(7)]);
var inst_32099 = (state_32112[(2)]);
var state_32112__$1 = state_32112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32112__$1,(8),inst_32099,inst_32089);
} else {
if((state_val_32113 === (9))){
var state_32112__$1 = state_32112;
var statearr_32123_32144 = state_32112__$1;
(statearr_32123_32144[(2)] = tc);

(statearr_32123_32144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (5))){
var inst_32092 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32093 = cljs.core.async.close_BANG_.call(null,fc);
var state_32112__$1 = (function (){var statearr_32124 = state_32112;
(statearr_32124[(8)] = inst_32092);

return statearr_32124;
})();
var statearr_32125_32145 = state_32112__$1;
(statearr_32125_32145[(2)] = inst_32093);

(statearr_32125_32145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (14))){
var inst_32106 = (state_32112[(2)]);
var state_32112__$1 = state_32112;
var statearr_32126_32146 = state_32112__$1;
(statearr_32126_32146[(2)] = inst_32106);

(statearr_32126_32146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (10))){
var state_32112__$1 = state_32112;
var statearr_32127_32147 = state_32112__$1;
(statearr_32127_32147[(2)] = fc);

(statearr_32127_32147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32113 === (8))){
var inst_32101 = (state_32112[(2)]);
var state_32112__$1 = state_32112;
if(cljs.core.truth_(inst_32101)){
var statearr_32128_32148 = state_32112__$1;
(statearr_32128_32148[(1)] = (12));

} else {
var statearr_32129_32149 = state_32112__$1;
(statearr_32129_32149[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__31699__auto___32135,tc,fc))
;
return ((function (switch__31611__auto__,c__31699__auto___32135,tc,fc){
return (function() {
var cljs$core$async$state_machine__31612__auto__ = null;
var cljs$core$async$state_machine__31612__auto____0 = (function (){
var statearr_32130 = [null,null,null,null,null,null,null,null,null];
(statearr_32130[(0)] = cljs$core$async$state_machine__31612__auto__);

(statearr_32130[(1)] = (1));

return statearr_32130;
});
var cljs$core$async$state_machine__31612__auto____1 = (function (state_32112){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_32112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e32131){if((e32131 instanceof Object)){
var ex__31615__auto__ = e32131;
var statearr_32132_32150 = state_32112;
(statearr_32132_32150[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32151 = state_32112;
state_32112 = G__32151;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$state_machine__31612__auto__ = function(state_32112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31612__auto____1.call(this,state_32112);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31612__auto____0;
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31612__auto____1;
return cljs$core$async$state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto___32135,tc,fc))
})();
var state__31701__auto__ = (function (){var statearr_32133 = f__31700__auto__.call(null);
(statearr_32133[(6)] = c__31699__auto___32135);

return statearr_32133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto___32135,tc,fc))
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
var c__31699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto__){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto__){
return (function (state_32172){
var state_val_32173 = (state_32172[(1)]);
if((state_val_32173 === (7))){
var inst_32168 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
var statearr_32174_32192 = state_32172__$1;
(statearr_32174_32192[(2)] = inst_32168);

(statearr_32174_32192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (1))){
var inst_32152 = init;
var state_32172__$1 = (function (){var statearr_32175 = state_32172;
(statearr_32175[(7)] = inst_32152);

return statearr_32175;
})();
var statearr_32176_32193 = state_32172__$1;
(statearr_32176_32193[(2)] = null);

(statearr_32176_32193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (4))){
var inst_32155 = (state_32172[(8)]);
var inst_32155__$1 = (state_32172[(2)]);
var inst_32156 = (inst_32155__$1 == null);
var state_32172__$1 = (function (){var statearr_32177 = state_32172;
(statearr_32177[(8)] = inst_32155__$1);

return statearr_32177;
})();
if(cljs.core.truth_(inst_32156)){
var statearr_32178_32194 = state_32172__$1;
(statearr_32178_32194[(1)] = (5));

} else {
var statearr_32179_32195 = state_32172__$1;
(statearr_32179_32195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (6))){
var inst_32152 = (state_32172[(7)]);
var inst_32159 = (state_32172[(9)]);
var inst_32155 = (state_32172[(8)]);
var inst_32159__$1 = f.call(null,inst_32152,inst_32155);
var inst_32160 = cljs.core.reduced_QMARK_.call(null,inst_32159__$1);
var state_32172__$1 = (function (){var statearr_32180 = state_32172;
(statearr_32180[(9)] = inst_32159__$1);

return statearr_32180;
})();
if(inst_32160){
var statearr_32181_32196 = state_32172__$1;
(statearr_32181_32196[(1)] = (8));

} else {
var statearr_32182_32197 = state_32172__$1;
(statearr_32182_32197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (3))){
var inst_32170 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32172__$1,inst_32170);
} else {
if((state_val_32173 === (2))){
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32172__$1,(4),ch);
} else {
if((state_val_32173 === (9))){
var inst_32159 = (state_32172[(9)]);
var inst_32152 = inst_32159;
var state_32172__$1 = (function (){var statearr_32183 = state_32172;
(statearr_32183[(7)] = inst_32152);

return statearr_32183;
})();
var statearr_32184_32198 = state_32172__$1;
(statearr_32184_32198[(2)] = null);

(statearr_32184_32198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (5))){
var inst_32152 = (state_32172[(7)]);
var state_32172__$1 = state_32172;
var statearr_32185_32199 = state_32172__$1;
(statearr_32185_32199[(2)] = inst_32152);

(statearr_32185_32199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (10))){
var inst_32166 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
var statearr_32186_32200 = state_32172__$1;
(statearr_32186_32200[(2)] = inst_32166);

(statearr_32186_32200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (8))){
var inst_32159 = (state_32172[(9)]);
var inst_32162 = cljs.core.deref.call(null,inst_32159);
var state_32172__$1 = state_32172;
var statearr_32187_32201 = state_32172__$1;
(statearr_32187_32201[(2)] = inst_32162);

(statearr_32187_32201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__31699__auto__))
;
return ((function (switch__31611__auto__,c__31699__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31612__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31612__auto____0 = (function (){
var statearr_32188 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32188[(0)] = cljs$core$async$reduce_$_state_machine__31612__auto__);

(statearr_32188[(1)] = (1));

return statearr_32188;
});
var cljs$core$async$reduce_$_state_machine__31612__auto____1 = (function (state_32172){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_32172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e32189){if((e32189 instanceof Object)){
var ex__31615__auto__ = e32189;
var statearr_32190_32202 = state_32172;
(statearr_32190_32202[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32203 = state_32172;
state_32172 = G__32203;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31612__auto__ = function(state_32172){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31612__auto____1.call(this,state_32172);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31612__auto____0;
cljs$core$async$reduce_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31612__auto____1;
return cljs$core$async$reduce_$_state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto__))
})();
var state__31701__auto__ = (function (){var statearr_32191 = f__31700__auto__.call(null);
(statearr_32191[(6)] = c__31699__auto__);

return statearr_32191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto__))
);

return c__31699__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto__,f__$1){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto__,f__$1){
return (function (state_32209){
var state_val_32210 = (state_32209[(1)]);
if((state_val_32210 === (1))){
var inst_32204 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32209__$1,(2),inst_32204);
} else {
if((state_val_32210 === (2))){
var inst_32206 = (state_32209[(2)]);
var inst_32207 = f__$1.call(null,inst_32206);
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32209__$1,inst_32207);
} else {
return null;
}
}
});})(c__31699__auto__,f__$1))
;
return ((function (switch__31611__auto__,c__31699__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31612__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31612__auto____0 = (function (){
var statearr_32211 = [null,null,null,null,null,null,null];
(statearr_32211[(0)] = cljs$core$async$transduce_$_state_machine__31612__auto__);

(statearr_32211[(1)] = (1));

return statearr_32211;
});
var cljs$core$async$transduce_$_state_machine__31612__auto____1 = (function (state_32209){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_32209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e32212){if((e32212 instanceof Object)){
var ex__31615__auto__ = e32212;
var statearr_32213_32215 = state_32209;
(statearr_32213_32215[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32216 = state_32209;
state_32209 = G__32216;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31612__auto__ = function(state_32209){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31612__auto____1.call(this,state_32209);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31612__auto____0;
cljs$core$async$transduce_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31612__auto____1;
return cljs$core$async$transduce_$_state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto__,f__$1))
})();
var state__31701__auto__ = (function (){var statearr_32214 = f__31700__auto__.call(null);
(statearr_32214[(6)] = c__31699__auto__);

return statearr_32214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto__,f__$1))
);

return c__31699__auto__;
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
var G__32218 = arguments.length;
switch (G__32218) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto__){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto__){
return (function (state_32243){
var state_val_32244 = (state_32243[(1)]);
if((state_val_32244 === (7))){
var inst_32225 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
var statearr_32245_32266 = state_32243__$1;
(statearr_32245_32266[(2)] = inst_32225);

(statearr_32245_32266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (1))){
var inst_32219 = cljs.core.seq.call(null,coll);
var inst_32220 = inst_32219;
var state_32243__$1 = (function (){var statearr_32246 = state_32243;
(statearr_32246[(7)] = inst_32220);

return statearr_32246;
})();
var statearr_32247_32267 = state_32243__$1;
(statearr_32247_32267[(2)] = null);

(statearr_32247_32267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (4))){
var inst_32220 = (state_32243[(7)]);
var inst_32223 = cljs.core.first.call(null,inst_32220);
var state_32243__$1 = state_32243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32243__$1,(7),ch,inst_32223);
} else {
if((state_val_32244 === (13))){
var inst_32237 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
var statearr_32248_32268 = state_32243__$1;
(statearr_32248_32268[(2)] = inst_32237);

(statearr_32248_32268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (6))){
var inst_32228 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
if(cljs.core.truth_(inst_32228)){
var statearr_32249_32269 = state_32243__$1;
(statearr_32249_32269[(1)] = (8));

} else {
var statearr_32250_32270 = state_32243__$1;
(statearr_32250_32270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (3))){
var inst_32241 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32243__$1,inst_32241);
} else {
if((state_val_32244 === (12))){
var state_32243__$1 = state_32243;
var statearr_32251_32271 = state_32243__$1;
(statearr_32251_32271[(2)] = null);

(statearr_32251_32271[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (2))){
var inst_32220 = (state_32243[(7)]);
var state_32243__$1 = state_32243;
if(cljs.core.truth_(inst_32220)){
var statearr_32252_32272 = state_32243__$1;
(statearr_32252_32272[(1)] = (4));

} else {
var statearr_32253_32273 = state_32243__$1;
(statearr_32253_32273[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (11))){
var inst_32234 = cljs.core.async.close_BANG_.call(null,ch);
var state_32243__$1 = state_32243;
var statearr_32254_32274 = state_32243__$1;
(statearr_32254_32274[(2)] = inst_32234);

(statearr_32254_32274[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (9))){
var state_32243__$1 = state_32243;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32255_32275 = state_32243__$1;
(statearr_32255_32275[(1)] = (11));

} else {
var statearr_32256_32276 = state_32243__$1;
(statearr_32256_32276[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (5))){
var inst_32220 = (state_32243[(7)]);
var state_32243__$1 = state_32243;
var statearr_32257_32277 = state_32243__$1;
(statearr_32257_32277[(2)] = inst_32220);

(statearr_32257_32277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (10))){
var inst_32239 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
var statearr_32258_32278 = state_32243__$1;
(statearr_32258_32278[(2)] = inst_32239);

(statearr_32258_32278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (8))){
var inst_32220 = (state_32243[(7)]);
var inst_32230 = cljs.core.next.call(null,inst_32220);
var inst_32220__$1 = inst_32230;
var state_32243__$1 = (function (){var statearr_32259 = state_32243;
(statearr_32259[(7)] = inst_32220__$1);

return statearr_32259;
})();
var statearr_32260_32279 = state_32243__$1;
(statearr_32260_32279[(2)] = null);

(statearr_32260_32279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__31699__auto__))
;
return ((function (switch__31611__auto__,c__31699__auto__){
return (function() {
var cljs$core$async$state_machine__31612__auto__ = null;
var cljs$core$async$state_machine__31612__auto____0 = (function (){
var statearr_32261 = [null,null,null,null,null,null,null,null];
(statearr_32261[(0)] = cljs$core$async$state_machine__31612__auto__);

(statearr_32261[(1)] = (1));

return statearr_32261;
});
var cljs$core$async$state_machine__31612__auto____1 = (function (state_32243){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_32243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e32262){if((e32262 instanceof Object)){
var ex__31615__auto__ = e32262;
var statearr_32263_32280 = state_32243;
(statearr_32263_32280[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32281 = state_32243;
state_32243 = G__32281;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$state_machine__31612__auto__ = function(state_32243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31612__auto____1.call(this,state_32243);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31612__auto____0;
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31612__auto____1;
return cljs$core$async$state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto__))
})();
var state__31701__auto__ = (function (){var statearr_32264 = f__31700__auto__.call(null);
(statearr_32264[(6)] = c__31699__auto__);

return statearr_32264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto__))
);

return c__31699__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__28622__auto__ = (((_ == null))?null:_);
var m__28623__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28622__auto__)]);
if(!((m__28623__auto__ == null))){
return m__28623__auto__.call(null,_);
} else {
var m__28623__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28623__auto____$1 == null))){
return m__28623__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__28622__auto__ = (((m == null))?null:m);
var m__28623__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28622__auto__)]);
if(!((m__28623__auto__ == null))){
return m__28623__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28623__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28623__auto____$1 == null))){
return m__28623__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28622__auto__ = (((m == null))?null:m);
var m__28623__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28622__auto__)]);
if(!((m__28623__auto__ == null))){
return m__28623__auto__.call(null,m,ch);
} else {
var m__28623__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28623__auto____$1 == null))){
return m__28623__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28622__auto__ = (((m == null))?null:m);
var m__28623__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28622__auto__)]);
if(!((m__28623__auto__ == null))){
return m__28623__auto__.call(null,m);
} else {
var m__28623__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28623__auto____$1 == null))){
return m__28623__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32282 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32282 = (function (ch,cs,meta32283){
this.ch = ch;
this.cs = cs;
this.meta32283 = meta32283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32284,meta32283__$1){
var self__ = this;
var _32284__$1 = this;
return (new cljs.core.async.t_cljs$core$async32282(self__.ch,self__.cs,meta32283__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32284){
var self__ = this;
var _32284__$1 = this;
return self__.meta32283;
});})(cs))
;

cljs.core.async.t_cljs$core$async32282.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32282.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32282.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32282.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32282.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32282.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32282.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32283","meta32283",-1297878698,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32282.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32282";

cljs.core.async.t_cljs$core$async32282.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28564__auto__,writer__28565__auto__,opt__28566__auto__){
return cljs.core._write.call(null,writer__28565__auto__,"cljs.core.async/t_cljs$core$async32282");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32282 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32282(ch__$1,cs__$1,meta32283){
return (new cljs.core.async.t_cljs$core$async32282(ch__$1,cs__$1,meta32283));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32282(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31699__auto___32504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto___32504,cs,m,dchan,dctr,done){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto___32504,cs,m,dchan,dctr,done){
return (function (state_32419){
var state_val_32420 = (state_32419[(1)]);
if((state_val_32420 === (7))){
var inst_32415 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
var statearr_32421_32505 = state_32419__$1;
(statearr_32421_32505[(2)] = inst_32415);

(statearr_32421_32505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (20))){
var inst_32318 = (state_32419[(7)]);
var inst_32330 = cljs.core.first.call(null,inst_32318);
var inst_32331 = cljs.core.nth.call(null,inst_32330,(0),null);
var inst_32332 = cljs.core.nth.call(null,inst_32330,(1),null);
var state_32419__$1 = (function (){var statearr_32422 = state_32419;
(statearr_32422[(8)] = inst_32331);

return statearr_32422;
})();
if(cljs.core.truth_(inst_32332)){
var statearr_32423_32506 = state_32419__$1;
(statearr_32423_32506[(1)] = (22));

} else {
var statearr_32424_32507 = state_32419__$1;
(statearr_32424_32507[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (27))){
var inst_32367 = (state_32419[(9)]);
var inst_32360 = (state_32419[(10)]);
var inst_32287 = (state_32419[(11)]);
var inst_32362 = (state_32419[(12)]);
var inst_32367__$1 = cljs.core._nth.call(null,inst_32360,inst_32362);
var inst_32368 = cljs.core.async.put_BANG_.call(null,inst_32367__$1,inst_32287,done);
var state_32419__$1 = (function (){var statearr_32425 = state_32419;
(statearr_32425[(9)] = inst_32367__$1);

return statearr_32425;
})();
if(cljs.core.truth_(inst_32368)){
var statearr_32426_32508 = state_32419__$1;
(statearr_32426_32508[(1)] = (30));

} else {
var statearr_32427_32509 = state_32419__$1;
(statearr_32427_32509[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (1))){
var state_32419__$1 = state_32419;
var statearr_32428_32510 = state_32419__$1;
(statearr_32428_32510[(2)] = null);

(statearr_32428_32510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (24))){
var inst_32318 = (state_32419[(7)]);
var inst_32337 = (state_32419[(2)]);
var inst_32338 = cljs.core.next.call(null,inst_32318);
var inst_32296 = inst_32338;
var inst_32297 = null;
var inst_32298 = (0);
var inst_32299 = (0);
var state_32419__$1 = (function (){var statearr_32429 = state_32419;
(statearr_32429[(13)] = inst_32297);

(statearr_32429[(14)] = inst_32298);

(statearr_32429[(15)] = inst_32337);

(statearr_32429[(16)] = inst_32299);

(statearr_32429[(17)] = inst_32296);

return statearr_32429;
})();
var statearr_32430_32511 = state_32419__$1;
(statearr_32430_32511[(2)] = null);

(statearr_32430_32511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (39))){
var state_32419__$1 = state_32419;
var statearr_32434_32512 = state_32419__$1;
(statearr_32434_32512[(2)] = null);

(statearr_32434_32512[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (4))){
var inst_32287 = (state_32419[(11)]);
var inst_32287__$1 = (state_32419[(2)]);
var inst_32288 = (inst_32287__$1 == null);
var state_32419__$1 = (function (){var statearr_32435 = state_32419;
(statearr_32435[(11)] = inst_32287__$1);

return statearr_32435;
})();
if(cljs.core.truth_(inst_32288)){
var statearr_32436_32513 = state_32419__$1;
(statearr_32436_32513[(1)] = (5));

} else {
var statearr_32437_32514 = state_32419__$1;
(statearr_32437_32514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (15))){
var inst_32297 = (state_32419[(13)]);
var inst_32298 = (state_32419[(14)]);
var inst_32299 = (state_32419[(16)]);
var inst_32296 = (state_32419[(17)]);
var inst_32314 = (state_32419[(2)]);
var inst_32315 = (inst_32299 + (1));
var tmp32431 = inst_32297;
var tmp32432 = inst_32298;
var tmp32433 = inst_32296;
var inst_32296__$1 = tmp32433;
var inst_32297__$1 = tmp32431;
var inst_32298__$1 = tmp32432;
var inst_32299__$1 = inst_32315;
var state_32419__$1 = (function (){var statearr_32438 = state_32419;
(statearr_32438[(13)] = inst_32297__$1);

(statearr_32438[(14)] = inst_32298__$1);

(statearr_32438[(16)] = inst_32299__$1);

(statearr_32438[(18)] = inst_32314);

(statearr_32438[(17)] = inst_32296__$1);

return statearr_32438;
})();
var statearr_32439_32515 = state_32419__$1;
(statearr_32439_32515[(2)] = null);

(statearr_32439_32515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (21))){
var inst_32341 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
var statearr_32443_32516 = state_32419__$1;
(statearr_32443_32516[(2)] = inst_32341);

(statearr_32443_32516[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (31))){
var inst_32367 = (state_32419[(9)]);
var inst_32371 = done.call(null,null);
var inst_32372 = cljs.core.async.untap_STAR_.call(null,m,inst_32367);
var state_32419__$1 = (function (){var statearr_32444 = state_32419;
(statearr_32444[(19)] = inst_32371);

return statearr_32444;
})();
var statearr_32445_32517 = state_32419__$1;
(statearr_32445_32517[(2)] = inst_32372);

(statearr_32445_32517[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (32))){
var inst_32360 = (state_32419[(10)]);
var inst_32361 = (state_32419[(20)]);
var inst_32359 = (state_32419[(21)]);
var inst_32362 = (state_32419[(12)]);
var inst_32374 = (state_32419[(2)]);
var inst_32375 = (inst_32362 + (1));
var tmp32440 = inst_32360;
var tmp32441 = inst_32361;
var tmp32442 = inst_32359;
var inst_32359__$1 = tmp32442;
var inst_32360__$1 = tmp32440;
var inst_32361__$1 = tmp32441;
var inst_32362__$1 = inst_32375;
var state_32419__$1 = (function (){var statearr_32446 = state_32419;
(statearr_32446[(22)] = inst_32374);

(statearr_32446[(10)] = inst_32360__$1);

(statearr_32446[(20)] = inst_32361__$1);

(statearr_32446[(21)] = inst_32359__$1);

(statearr_32446[(12)] = inst_32362__$1);

return statearr_32446;
})();
var statearr_32447_32518 = state_32419__$1;
(statearr_32447_32518[(2)] = null);

(statearr_32447_32518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (40))){
var inst_32387 = (state_32419[(23)]);
var inst_32391 = done.call(null,null);
var inst_32392 = cljs.core.async.untap_STAR_.call(null,m,inst_32387);
var state_32419__$1 = (function (){var statearr_32448 = state_32419;
(statearr_32448[(24)] = inst_32391);

return statearr_32448;
})();
var statearr_32449_32519 = state_32419__$1;
(statearr_32449_32519[(2)] = inst_32392);

(statearr_32449_32519[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (33))){
var inst_32378 = (state_32419[(25)]);
var inst_32380 = cljs.core.chunked_seq_QMARK_.call(null,inst_32378);
var state_32419__$1 = state_32419;
if(inst_32380){
var statearr_32450_32520 = state_32419__$1;
(statearr_32450_32520[(1)] = (36));

} else {
var statearr_32451_32521 = state_32419__$1;
(statearr_32451_32521[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (13))){
var inst_32308 = (state_32419[(26)]);
var inst_32311 = cljs.core.async.close_BANG_.call(null,inst_32308);
var state_32419__$1 = state_32419;
var statearr_32452_32522 = state_32419__$1;
(statearr_32452_32522[(2)] = inst_32311);

(statearr_32452_32522[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (22))){
var inst_32331 = (state_32419[(8)]);
var inst_32334 = cljs.core.async.close_BANG_.call(null,inst_32331);
var state_32419__$1 = state_32419;
var statearr_32453_32523 = state_32419__$1;
(statearr_32453_32523[(2)] = inst_32334);

(statearr_32453_32523[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (36))){
var inst_32378 = (state_32419[(25)]);
var inst_32382 = cljs.core.chunk_first.call(null,inst_32378);
var inst_32383 = cljs.core.chunk_rest.call(null,inst_32378);
var inst_32384 = cljs.core.count.call(null,inst_32382);
var inst_32359 = inst_32383;
var inst_32360 = inst_32382;
var inst_32361 = inst_32384;
var inst_32362 = (0);
var state_32419__$1 = (function (){var statearr_32454 = state_32419;
(statearr_32454[(10)] = inst_32360);

(statearr_32454[(20)] = inst_32361);

(statearr_32454[(21)] = inst_32359);

(statearr_32454[(12)] = inst_32362);

return statearr_32454;
})();
var statearr_32455_32524 = state_32419__$1;
(statearr_32455_32524[(2)] = null);

(statearr_32455_32524[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (41))){
var inst_32378 = (state_32419[(25)]);
var inst_32394 = (state_32419[(2)]);
var inst_32395 = cljs.core.next.call(null,inst_32378);
var inst_32359 = inst_32395;
var inst_32360 = null;
var inst_32361 = (0);
var inst_32362 = (0);
var state_32419__$1 = (function (){var statearr_32456 = state_32419;
(statearr_32456[(27)] = inst_32394);

(statearr_32456[(10)] = inst_32360);

(statearr_32456[(20)] = inst_32361);

(statearr_32456[(21)] = inst_32359);

(statearr_32456[(12)] = inst_32362);

return statearr_32456;
})();
var statearr_32457_32525 = state_32419__$1;
(statearr_32457_32525[(2)] = null);

(statearr_32457_32525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (43))){
var state_32419__$1 = state_32419;
var statearr_32458_32526 = state_32419__$1;
(statearr_32458_32526[(2)] = null);

(statearr_32458_32526[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (29))){
var inst_32403 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
var statearr_32459_32527 = state_32419__$1;
(statearr_32459_32527[(2)] = inst_32403);

(statearr_32459_32527[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (44))){
var inst_32412 = (state_32419[(2)]);
var state_32419__$1 = (function (){var statearr_32460 = state_32419;
(statearr_32460[(28)] = inst_32412);

return statearr_32460;
})();
var statearr_32461_32528 = state_32419__$1;
(statearr_32461_32528[(2)] = null);

(statearr_32461_32528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (6))){
var inst_32351 = (state_32419[(29)]);
var inst_32350 = cljs.core.deref.call(null,cs);
var inst_32351__$1 = cljs.core.keys.call(null,inst_32350);
var inst_32352 = cljs.core.count.call(null,inst_32351__$1);
var inst_32353 = cljs.core.reset_BANG_.call(null,dctr,inst_32352);
var inst_32358 = cljs.core.seq.call(null,inst_32351__$1);
var inst_32359 = inst_32358;
var inst_32360 = null;
var inst_32361 = (0);
var inst_32362 = (0);
var state_32419__$1 = (function (){var statearr_32462 = state_32419;
(statearr_32462[(29)] = inst_32351__$1);

(statearr_32462[(30)] = inst_32353);

(statearr_32462[(10)] = inst_32360);

(statearr_32462[(20)] = inst_32361);

(statearr_32462[(21)] = inst_32359);

(statearr_32462[(12)] = inst_32362);

return statearr_32462;
})();
var statearr_32463_32529 = state_32419__$1;
(statearr_32463_32529[(2)] = null);

(statearr_32463_32529[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (28))){
var inst_32378 = (state_32419[(25)]);
var inst_32359 = (state_32419[(21)]);
var inst_32378__$1 = cljs.core.seq.call(null,inst_32359);
var state_32419__$1 = (function (){var statearr_32464 = state_32419;
(statearr_32464[(25)] = inst_32378__$1);

return statearr_32464;
})();
if(inst_32378__$1){
var statearr_32465_32530 = state_32419__$1;
(statearr_32465_32530[(1)] = (33));

} else {
var statearr_32466_32531 = state_32419__$1;
(statearr_32466_32531[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (25))){
var inst_32361 = (state_32419[(20)]);
var inst_32362 = (state_32419[(12)]);
var inst_32364 = (inst_32362 < inst_32361);
var inst_32365 = inst_32364;
var state_32419__$1 = state_32419;
if(cljs.core.truth_(inst_32365)){
var statearr_32467_32532 = state_32419__$1;
(statearr_32467_32532[(1)] = (27));

} else {
var statearr_32468_32533 = state_32419__$1;
(statearr_32468_32533[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (34))){
var state_32419__$1 = state_32419;
var statearr_32469_32534 = state_32419__$1;
(statearr_32469_32534[(2)] = null);

(statearr_32469_32534[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (17))){
var state_32419__$1 = state_32419;
var statearr_32470_32535 = state_32419__$1;
(statearr_32470_32535[(2)] = null);

(statearr_32470_32535[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (3))){
var inst_32417 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32419__$1,inst_32417);
} else {
if((state_val_32420 === (12))){
var inst_32346 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
var statearr_32471_32536 = state_32419__$1;
(statearr_32471_32536[(2)] = inst_32346);

(statearr_32471_32536[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (2))){
var state_32419__$1 = state_32419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32419__$1,(4),ch);
} else {
if((state_val_32420 === (23))){
var state_32419__$1 = state_32419;
var statearr_32472_32537 = state_32419__$1;
(statearr_32472_32537[(2)] = null);

(statearr_32472_32537[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (35))){
var inst_32401 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
var statearr_32473_32538 = state_32419__$1;
(statearr_32473_32538[(2)] = inst_32401);

(statearr_32473_32538[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (19))){
var inst_32318 = (state_32419[(7)]);
var inst_32322 = cljs.core.chunk_first.call(null,inst_32318);
var inst_32323 = cljs.core.chunk_rest.call(null,inst_32318);
var inst_32324 = cljs.core.count.call(null,inst_32322);
var inst_32296 = inst_32323;
var inst_32297 = inst_32322;
var inst_32298 = inst_32324;
var inst_32299 = (0);
var state_32419__$1 = (function (){var statearr_32474 = state_32419;
(statearr_32474[(13)] = inst_32297);

(statearr_32474[(14)] = inst_32298);

(statearr_32474[(16)] = inst_32299);

(statearr_32474[(17)] = inst_32296);

return statearr_32474;
})();
var statearr_32475_32539 = state_32419__$1;
(statearr_32475_32539[(2)] = null);

(statearr_32475_32539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (11))){
var inst_32318 = (state_32419[(7)]);
var inst_32296 = (state_32419[(17)]);
var inst_32318__$1 = cljs.core.seq.call(null,inst_32296);
var state_32419__$1 = (function (){var statearr_32476 = state_32419;
(statearr_32476[(7)] = inst_32318__$1);

return statearr_32476;
})();
if(inst_32318__$1){
var statearr_32477_32540 = state_32419__$1;
(statearr_32477_32540[(1)] = (16));

} else {
var statearr_32478_32541 = state_32419__$1;
(statearr_32478_32541[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (9))){
var inst_32348 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
var statearr_32479_32542 = state_32419__$1;
(statearr_32479_32542[(2)] = inst_32348);

(statearr_32479_32542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (5))){
var inst_32294 = cljs.core.deref.call(null,cs);
var inst_32295 = cljs.core.seq.call(null,inst_32294);
var inst_32296 = inst_32295;
var inst_32297 = null;
var inst_32298 = (0);
var inst_32299 = (0);
var state_32419__$1 = (function (){var statearr_32480 = state_32419;
(statearr_32480[(13)] = inst_32297);

(statearr_32480[(14)] = inst_32298);

(statearr_32480[(16)] = inst_32299);

(statearr_32480[(17)] = inst_32296);

return statearr_32480;
})();
var statearr_32481_32543 = state_32419__$1;
(statearr_32481_32543[(2)] = null);

(statearr_32481_32543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (14))){
var state_32419__$1 = state_32419;
var statearr_32482_32544 = state_32419__$1;
(statearr_32482_32544[(2)] = null);

(statearr_32482_32544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (45))){
var inst_32409 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
var statearr_32483_32545 = state_32419__$1;
(statearr_32483_32545[(2)] = inst_32409);

(statearr_32483_32545[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (26))){
var inst_32351 = (state_32419[(29)]);
var inst_32405 = (state_32419[(2)]);
var inst_32406 = cljs.core.seq.call(null,inst_32351);
var state_32419__$1 = (function (){var statearr_32484 = state_32419;
(statearr_32484[(31)] = inst_32405);

return statearr_32484;
})();
if(inst_32406){
var statearr_32485_32546 = state_32419__$1;
(statearr_32485_32546[(1)] = (42));

} else {
var statearr_32486_32547 = state_32419__$1;
(statearr_32486_32547[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (16))){
var inst_32318 = (state_32419[(7)]);
var inst_32320 = cljs.core.chunked_seq_QMARK_.call(null,inst_32318);
var state_32419__$1 = state_32419;
if(inst_32320){
var statearr_32487_32548 = state_32419__$1;
(statearr_32487_32548[(1)] = (19));

} else {
var statearr_32488_32549 = state_32419__$1;
(statearr_32488_32549[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (38))){
var inst_32398 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
var statearr_32489_32550 = state_32419__$1;
(statearr_32489_32550[(2)] = inst_32398);

(statearr_32489_32550[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (30))){
var state_32419__$1 = state_32419;
var statearr_32490_32551 = state_32419__$1;
(statearr_32490_32551[(2)] = null);

(statearr_32490_32551[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (10))){
var inst_32297 = (state_32419[(13)]);
var inst_32299 = (state_32419[(16)]);
var inst_32307 = cljs.core._nth.call(null,inst_32297,inst_32299);
var inst_32308 = cljs.core.nth.call(null,inst_32307,(0),null);
var inst_32309 = cljs.core.nth.call(null,inst_32307,(1),null);
var state_32419__$1 = (function (){var statearr_32491 = state_32419;
(statearr_32491[(26)] = inst_32308);

return statearr_32491;
})();
if(cljs.core.truth_(inst_32309)){
var statearr_32492_32552 = state_32419__$1;
(statearr_32492_32552[(1)] = (13));

} else {
var statearr_32493_32553 = state_32419__$1;
(statearr_32493_32553[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (18))){
var inst_32344 = (state_32419[(2)]);
var state_32419__$1 = state_32419;
var statearr_32494_32554 = state_32419__$1;
(statearr_32494_32554[(2)] = inst_32344);

(statearr_32494_32554[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (42))){
var state_32419__$1 = state_32419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32419__$1,(45),dchan);
} else {
if((state_val_32420 === (37))){
var inst_32378 = (state_32419[(25)]);
var inst_32387 = (state_32419[(23)]);
var inst_32287 = (state_32419[(11)]);
var inst_32387__$1 = cljs.core.first.call(null,inst_32378);
var inst_32388 = cljs.core.async.put_BANG_.call(null,inst_32387__$1,inst_32287,done);
var state_32419__$1 = (function (){var statearr_32495 = state_32419;
(statearr_32495[(23)] = inst_32387__$1);

return statearr_32495;
})();
if(cljs.core.truth_(inst_32388)){
var statearr_32496_32555 = state_32419__$1;
(statearr_32496_32555[(1)] = (39));

} else {
var statearr_32497_32556 = state_32419__$1;
(statearr_32497_32556[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32420 === (8))){
var inst_32298 = (state_32419[(14)]);
var inst_32299 = (state_32419[(16)]);
var inst_32301 = (inst_32299 < inst_32298);
var inst_32302 = inst_32301;
var state_32419__$1 = state_32419;
if(cljs.core.truth_(inst_32302)){
var statearr_32498_32557 = state_32419__$1;
(statearr_32498_32557[(1)] = (10));

} else {
var statearr_32499_32558 = state_32419__$1;
(statearr_32499_32558[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__31699__auto___32504,cs,m,dchan,dctr,done))
;
return ((function (switch__31611__auto__,c__31699__auto___32504,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31612__auto__ = null;
var cljs$core$async$mult_$_state_machine__31612__auto____0 = (function (){
var statearr_32500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32500[(0)] = cljs$core$async$mult_$_state_machine__31612__auto__);

(statearr_32500[(1)] = (1));

return statearr_32500;
});
var cljs$core$async$mult_$_state_machine__31612__auto____1 = (function (state_32419){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_32419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e32501){if((e32501 instanceof Object)){
var ex__31615__auto__ = e32501;
var statearr_32502_32559 = state_32419;
(statearr_32502_32559[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32560 = state_32419;
state_32419 = G__32560;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31612__auto__ = function(state_32419){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31612__auto____1.call(this,state_32419);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31612__auto____0;
cljs$core$async$mult_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31612__auto____1;
return cljs$core$async$mult_$_state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto___32504,cs,m,dchan,dctr,done))
})();
var state__31701__auto__ = (function (){var statearr_32503 = f__31700__auto__.call(null);
(statearr_32503[(6)] = c__31699__auto___32504);

return statearr_32503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto___32504,cs,m,dchan,dctr,done))
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
var G__32562 = arguments.length;
switch (G__32562) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28622__auto__ = (((m == null))?null:m);
var m__28623__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28622__auto__)]);
if(!((m__28623__auto__ == null))){
return m__28623__auto__.call(null,m,ch);
} else {
var m__28623__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28623__auto____$1 == null))){
return m__28623__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28622__auto__ = (((m == null))?null:m);
var m__28623__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28622__auto__)]);
if(!((m__28623__auto__ == null))){
return m__28623__auto__.call(null,m,ch);
} else {
var m__28623__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28623__auto____$1 == null))){
return m__28623__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28622__auto__ = (((m == null))?null:m);
var m__28623__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28622__auto__)]);
if(!((m__28623__auto__ == null))){
return m__28623__auto__.call(null,m);
} else {
var m__28623__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28623__auto____$1 == null))){
return m__28623__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28622__auto__ = (((m == null))?null:m);
var m__28623__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28622__auto__)]);
if(!((m__28623__auto__ == null))){
return m__28623__auto__.call(null,m,state_map);
} else {
var m__28623__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28623__auto____$1 == null))){
return m__28623__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28622__auto__ = (((m == null))?null:m);
var m__28623__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28622__auto__)]);
if(!((m__28623__auto__ == null))){
return m__28623__auto__.call(null,m,mode);
} else {
var m__28623__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28623__auto____$1 == null))){
return m__28623__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29110__auto__ = [];
var len__29103__auto___32574 = arguments.length;
var i__29104__auto___32575 = (0);
while(true){
if((i__29104__auto___32575 < len__29103__auto___32574)){
args__29110__auto__.push((arguments[i__29104__auto___32575]));

var G__32576 = (i__29104__auto___32575 + (1));
i__29104__auto___32575 = G__32576;
continue;
} else {
}
break;
}

var argseq__29111__auto__ = ((((3) < args__29110__auto__.length))?(new cljs.core.IndexedSeq(args__29110__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29111__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32568){
var map__32569 = p__32568;
var map__32569__$1 = ((((!((map__32569 == null)))?((((map__32569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32569):map__32569);
var opts = map__32569__$1;
var statearr_32571_32577 = state;
(statearr_32571_32577[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32569,map__32569__$1,opts){
return (function (val){
var statearr_32572_32578 = state;
(statearr_32572_32578[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32569,map__32569__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32573_32579 = state;
(statearr_32573_32579[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32564){
var G__32565 = cljs.core.first.call(null,seq32564);
var seq32564__$1 = cljs.core.next.call(null,seq32564);
var G__32566 = cljs.core.first.call(null,seq32564__$1);
var seq32564__$2 = cljs.core.next.call(null,seq32564__$1);
var G__32567 = cljs.core.first.call(null,seq32564__$2);
var seq32564__$3 = cljs.core.next.call(null,seq32564__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32565,G__32566,G__32567,seq32564__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32580 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32580 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32581){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32581 = meta32581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32582,meta32581__$1){
var self__ = this;
var _32582__$1 = this;
return (new cljs.core.async.t_cljs$core$async32580(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32581__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32582){
var self__ = this;
var _32582__$1 = this;
return self__.meta32581;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32580.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32580.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32580.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32580.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32580.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32580.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32580.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32580.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32580.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32581","meta32581",1821059354,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32580.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32580";

cljs.core.async.t_cljs$core$async32580.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28564__auto__,writer__28565__auto__,opt__28566__auto__){
return cljs.core._write.call(null,writer__28565__auto__,"cljs.core.async/t_cljs$core$async32580");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32580 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32580(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32581){
return (new cljs.core.async.t_cljs$core$async32580(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32581));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32580(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31699__auto___32744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto___32744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto___32744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32684){
var state_val_32685 = (state_32684[(1)]);
if((state_val_32685 === (7))){
var inst_32599 = (state_32684[(2)]);
var state_32684__$1 = state_32684;
var statearr_32686_32745 = state_32684__$1;
(statearr_32686_32745[(2)] = inst_32599);

(statearr_32686_32745[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (20))){
var inst_32611 = (state_32684[(7)]);
var state_32684__$1 = state_32684;
var statearr_32687_32746 = state_32684__$1;
(statearr_32687_32746[(2)] = inst_32611);

(statearr_32687_32746[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (27))){
var state_32684__$1 = state_32684;
var statearr_32688_32747 = state_32684__$1;
(statearr_32688_32747[(2)] = null);

(statearr_32688_32747[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (1))){
var inst_32586 = (state_32684[(8)]);
var inst_32586__$1 = calc_state.call(null);
var inst_32588 = (inst_32586__$1 == null);
var inst_32589 = cljs.core.not.call(null,inst_32588);
var state_32684__$1 = (function (){var statearr_32689 = state_32684;
(statearr_32689[(8)] = inst_32586__$1);

return statearr_32689;
})();
if(inst_32589){
var statearr_32690_32748 = state_32684__$1;
(statearr_32690_32748[(1)] = (2));

} else {
var statearr_32691_32749 = state_32684__$1;
(statearr_32691_32749[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (24))){
var inst_32635 = (state_32684[(9)]);
var inst_32644 = (state_32684[(10)]);
var inst_32658 = (state_32684[(11)]);
var inst_32658__$1 = inst_32635.call(null,inst_32644);
var state_32684__$1 = (function (){var statearr_32692 = state_32684;
(statearr_32692[(11)] = inst_32658__$1);

return statearr_32692;
})();
if(cljs.core.truth_(inst_32658__$1)){
var statearr_32693_32750 = state_32684__$1;
(statearr_32693_32750[(1)] = (29));

} else {
var statearr_32694_32751 = state_32684__$1;
(statearr_32694_32751[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (4))){
var inst_32602 = (state_32684[(2)]);
var state_32684__$1 = state_32684;
if(cljs.core.truth_(inst_32602)){
var statearr_32695_32752 = state_32684__$1;
(statearr_32695_32752[(1)] = (8));

} else {
var statearr_32696_32753 = state_32684__$1;
(statearr_32696_32753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (15))){
var inst_32629 = (state_32684[(2)]);
var state_32684__$1 = state_32684;
if(cljs.core.truth_(inst_32629)){
var statearr_32697_32754 = state_32684__$1;
(statearr_32697_32754[(1)] = (19));

} else {
var statearr_32698_32755 = state_32684__$1;
(statearr_32698_32755[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (21))){
var inst_32634 = (state_32684[(12)]);
var inst_32634__$1 = (state_32684[(2)]);
var inst_32635 = cljs.core.get.call(null,inst_32634__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32636 = cljs.core.get.call(null,inst_32634__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32637 = cljs.core.get.call(null,inst_32634__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32684__$1 = (function (){var statearr_32699 = state_32684;
(statearr_32699[(9)] = inst_32635);

(statearr_32699[(12)] = inst_32634__$1);

(statearr_32699[(13)] = inst_32636);

return statearr_32699;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32684__$1,(22),inst_32637);
} else {
if((state_val_32685 === (31))){
var inst_32666 = (state_32684[(2)]);
var state_32684__$1 = state_32684;
if(cljs.core.truth_(inst_32666)){
var statearr_32700_32756 = state_32684__$1;
(statearr_32700_32756[(1)] = (32));

} else {
var statearr_32701_32757 = state_32684__$1;
(statearr_32701_32757[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (32))){
var inst_32643 = (state_32684[(14)]);
var state_32684__$1 = state_32684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32684__$1,(35),out,inst_32643);
} else {
if((state_val_32685 === (33))){
var inst_32634 = (state_32684[(12)]);
var inst_32611 = inst_32634;
var state_32684__$1 = (function (){var statearr_32702 = state_32684;
(statearr_32702[(7)] = inst_32611);

return statearr_32702;
})();
var statearr_32703_32758 = state_32684__$1;
(statearr_32703_32758[(2)] = null);

(statearr_32703_32758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (13))){
var inst_32611 = (state_32684[(7)]);
var inst_32618 = inst_32611.cljs$lang$protocol_mask$partition0$;
var inst_32619 = (inst_32618 & (64));
var inst_32620 = inst_32611.cljs$core$ISeq$;
var inst_32621 = (cljs.core.PROTOCOL_SENTINEL === inst_32620);
var inst_32622 = (inst_32619) || (inst_32621);
var state_32684__$1 = state_32684;
if(cljs.core.truth_(inst_32622)){
var statearr_32704_32759 = state_32684__$1;
(statearr_32704_32759[(1)] = (16));

} else {
var statearr_32705_32760 = state_32684__$1;
(statearr_32705_32760[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (22))){
var inst_32644 = (state_32684[(10)]);
var inst_32643 = (state_32684[(14)]);
var inst_32642 = (state_32684[(2)]);
var inst_32643__$1 = cljs.core.nth.call(null,inst_32642,(0),null);
var inst_32644__$1 = cljs.core.nth.call(null,inst_32642,(1),null);
var inst_32645 = (inst_32643__$1 == null);
var inst_32646 = cljs.core._EQ_.call(null,inst_32644__$1,change);
var inst_32647 = (inst_32645) || (inst_32646);
var state_32684__$1 = (function (){var statearr_32706 = state_32684;
(statearr_32706[(10)] = inst_32644__$1);

(statearr_32706[(14)] = inst_32643__$1);

return statearr_32706;
})();
if(cljs.core.truth_(inst_32647)){
var statearr_32707_32761 = state_32684__$1;
(statearr_32707_32761[(1)] = (23));

} else {
var statearr_32708_32762 = state_32684__$1;
(statearr_32708_32762[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (36))){
var inst_32634 = (state_32684[(12)]);
var inst_32611 = inst_32634;
var state_32684__$1 = (function (){var statearr_32709 = state_32684;
(statearr_32709[(7)] = inst_32611);

return statearr_32709;
})();
var statearr_32710_32763 = state_32684__$1;
(statearr_32710_32763[(2)] = null);

(statearr_32710_32763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (29))){
var inst_32658 = (state_32684[(11)]);
var state_32684__$1 = state_32684;
var statearr_32711_32764 = state_32684__$1;
(statearr_32711_32764[(2)] = inst_32658);

(statearr_32711_32764[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (6))){
var state_32684__$1 = state_32684;
var statearr_32712_32765 = state_32684__$1;
(statearr_32712_32765[(2)] = false);

(statearr_32712_32765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (28))){
var inst_32654 = (state_32684[(2)]);
var inst_32655 = calc_state.call(null);
var inst_32611 = inst_32655;
var state_32684__$1 = (function (){var statearr_32713 = state_32684;
(statearr_32713[(15)] = inst_32654);

(statearr_32713[(7)] = inst_32611);

return statearr_32713;
})();
var statearr_32714_32766 = state_32684__$1;
(statearr_32714_32766[(2)] = null);

(statearr_32714_32766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (25))){
var inst_32680 = (state_32684[(2)]);
var state_32684__$1 = state_32684;
var statearr_32715_32767 = state_32684__$1;
(statearr_32715_32767[(2)] = inst_32680);

(statearr_32715_32767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (34))){
var inst_32678 = (state_32684[(2)]);
var state_32684__$1 = state_32684;
var statearr_32716_32768 = state_32684__$1;
(statearr_32716_32768[(2)] = inst_32678);

(statearr_32716_32768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (17))){
var state_32684__$1 = state_32684;
var statearr_32717_32769 = state_32684__$1;
(statearr_32717_32769[(2)] = false);

(statearr_32717_32769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (3))){
var state_32684__$1 = state_32684;
var statearr_32718_32770 = state_32684__$1;
(statearr_32718_32770[(2)] = false);

(statearr_32718_32770[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (12))){
var inst_32682 = (state_32684[(2)]);
var state_32684__$1 = state_32684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32684__$1,inst_32682);
} else {
if((state_val_32685 === (2))){
var inst_32586 = (state_32684[(8)]);
var inst_32591 = inst_32586.cljs$lang$protocol_mask$partition0$;
var inst_32592 = (inst_32591 & (64));
var inst_32593 = inst_32586.cljs$core$ISeq$;
var inst_32594 = (cljs.core.PROTOCOL_SENTINEL === inst_32593);
var inst_32595 = (inst_32592) || (inst_32594);
var state_32684__$1 = state_32684;
if(cljs.core.truth_(inst_32595)){
var statearr_32719_32771 = state_32684__$1;
(statearr_32719_32771[(1)] = (5));

} else {
var statearr_32720_32772 = state_32684__$1;
(statearr_32720_32772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (23))){
var inst_32643 = (state_32684[(14)]);
var inst_32649 = (inst_32643 == null);
var state_32684__$1 = state_32684;
if(cljs.core.truth_(inst_32649)){
var statearr_32721_32773 = state_32684__$1;
(statearr_32721_32773[(1)] = (26));

} else {
var statearr_32722_32774 = state_32684__$1;
(statearr_32722_32774[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (35))){
var inst_32669 = (state_32684[(2)]);
var state_32684__$1 = state_32684;
if(cljs.core.truth_(inst_32669)){
var statearr_32723_32775 = state_32684__$1;
(statearr_32723_32775[(1)] = (36));

} else {
var statearr_32724_32776 = state_32684__$1;
(statearr_32724_32776[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (19))){
var inst_32611 = (state_32684[(7)]);
var inst_32631 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32611);
var state_32684__$1 = state_32684;
var statearr_32725_32777 = state_32684__$1;
(statearr_32725_32777[(2)] = inst_32631);

(statearr_32725_32777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (11))){
var inst_32611 = (state_32684[(7)]);
var inst_32615 = (inst_32611 == null);
var inst_32616 = cljs.core.not.call(null,inst_32615);
var state_32684__$1 = state_32684;
if(inst_32616){
var statearr_32726_32778 = state_32684__$1;
(statearr_32726_32778[(1)] = (13));

} else {
var statearr_32727_32779 = state_32684__$1;
(statearr_32727_32779[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (9))){
var inst_32586 = (state_32684[(8)]);
var state_32684__$1 = state_32684;
var statearr_32728_32780 = state_32684__$1;
(statearr_32728_32780[(2)] = inst_32586);

(statearr_32728_32780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (5))){
var state_32684__$1 = state_32684;
var statearr_32729_32781 = state_32684__$1;
(statearr_32729_32781[(2)] = true);

(statearr_32729_32781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (14))){
var state_32684__$1 = state_32684;
var statearr_32730_32782 = state_32684__$1;
(statearr_32730_32782[(2)] = false);

(statearr_32730_32782[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (26))){
var inst_32644 = (state_32684[(10)]);
var inst_32651 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32644);
var state_32684__$1 = state_32684;
var statearr_32731_32783 = state_32684__$1;
(statearr_32731_32783[(2)] = inst_32651);

(statearr_32731_32783[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (16))){
var state_32684__$1 = state_32684;
var statearr_32732_32784 = state_32684__$1;
(statearr_32732_32784[(2)] = true);

(statearr_32732_32784[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (38))){
var inst_32674 = (state_32684[(2)]);
var state_32684__$1 = state_32684;
var statearr_32733_32785 = state_32684__$1;
(statearr_32733_32785[(2)] = inst_32674);

(statearr_32733_32785[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (30))){
var inst_32635 = (state_32684[(9)]);
var inst_32644 = (state_32684[(10)]);
var inst_32636 = (state_32684[(13)]);
var inst_32661 = cljs.core.empty_QMARK_.call(null,inst_32635);
var inst_32662 = inst_32636.call(null,inst_32644);
var inst_32663 = cljs.core.not.call(null,inst_32662);
var inst_32664 = (inst_32661) && (inst_32663);
var state_32684__$1 = state_32684;
var statearr_32734_32786 = state_32684__$1;
(statearr_32734_32786[(2)] = inst_32664);

(statearr_32734_32786[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (10))){
var inst_32586 = (state_32684[(8)]);
var inst_32607 = (state_32684[(2)]);
var inst_32608 = cljs.core.get.call(null,inst_32607,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32609 = cljs.core.get.call(null,inst_32607,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32610 = cljs.core.get.call(null,inst_32607,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32611 = inst_32586;
var state_32684__$1 = (function (){var statearr_32735 = state_32684;
(statearr_32735[(16)] = inst_32609);

(statearr_32735[(17)] = inst_32608);

(statearr_32735[(18)] = inst_32610);

(statearr_32735[(7)] = inst_32611);

return statearr_32735;
})();
var statearr_32736_32787 = state_32684__$1;
(statearr_32736_32787[(2)] = null);

(statearr_32736_32787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (18))){
var inst_32626 = (state_32684[(2)]);
var state_32684__$1 = state_32684;
var statearr_32737_32788 = state_32684__$1;
(statearr_32737_32788[(2)] = inst_32626);

(statearr_32737_32788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (37))){
var state_32684__$1 = state_32684;
var statearr_32738_32789 = state_32684__$1;
(statearr_32738_32789[(2)] = null);

(statearr_32738_32789[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32685 === (8))){
var inst_32586 = (state_32684[(8)]);
var inst_32604 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32586);
var state_32684__$1 = state_32684;
var statearr_32739_32790 = state_32684__$1;
(statearr_32739_32790[(2)] = inst_32604);

(statearr_32739_32790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__31699__auto___32744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31611__auto__,c__31699__auto___32744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31612__auto__ = null;
var cljs$core$async$mix_$_state_machine__31612__auto____0 = (function (){
var statearr_32740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32740[(0)] = cljs$core$async$mix_$_state_machine__31612__auto__);

(statearr_32740[(1)] = (1));

return statearr_32740;
});
var cljs$core$async$mix_$_state_machine__31612__auto____1 = (function (state_32684){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_32684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e32741){if((e32741 instanceof Object)){
var ex__31615__auto__ = e32741;
var statearr_32742_32791 = state_32684;
(statearr_32742_32791[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32792 = state_32684;
state_32684 = G__32792;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31612__auto__ = function(state_32684){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31612__auto____1.call(this,state_32684);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31612__auto____0;
cljs$core$async$mix_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31612__auto____1;
return cljs$core$async$mix_$_state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto___32744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31701__auto__ = (function (){var statearr_32743 = f__31700__auto__.call(null);
(statearr_32743[(6)] = c__31699__auto___32744);

return statearr_32743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto___32744,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28622__auto__ = (((p == null))?null:p);
var m__28623__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28622__auto__)]);
if(!((m__28623__auto__ == null))){
return m__28623__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28623__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28623__auto____$1 == null))){
return m__28623__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28622__auto__ = (((p == null))?null:p);
var m__28623__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28622__auto__)]);
if(!((m__28623__auto__ == null))){
return m__28623__auto__.call(null,p,v,ch);
} else {
var m__28623__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28623__auto____$1 == null))){
return m__28623__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32794 = arguments.length;
switch (G__32794) {
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
var x__28622__auto__ = (((p == null))?null:p);
var m__28623__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28622__auto__)]);
if(!((m__28623__auto__ == null))){
return m__28623__auto__.call(null,p);
} else {
var m__28623__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28623__auto____$1 == null))){
return m__28623__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28622__auto__ = (((p == null))?null:p);
var m__28623__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28622__auto__)]);
if(!((m__28623__auto__ == null))){
return m__28623__auto__.call(null,p,v);
} else {
var m__28623__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28623__auto____$1 == null))){
return m__28623__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__32798 = arguments.length;
switch (G__32798) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27939__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27939__auto__)){
return or__27939__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27939__auto__,mults){
return (function (p1__32796_SHARP_){
if(cljs.core.truth_(p1__32796_SHARP_.call(null,topic))){
return p1__32796_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32796_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27939__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32799 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32799 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32800){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32800 = meta32800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32801,meta32800__$1){
var self__ = this;
var _32801__$1 = this;
return (new cljs.core.async.t_cljs$core$async32799(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32800__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32801){
var self__ = this;
var _32801__$1 = this;
return self__.meta32800;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32799.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32800","meta32800",1261544519,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32799";

cljs.core.async.t_cljs$core$async32799.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28564__auto__,writer__28565__auto__,opt__28566__auto__){
return cljs.core._write.call(null,writer__28565__auto__,"cljs.core.async/t_cljs$core$async32799");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32799 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32799(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32800){
return (new cljs.core.async.t_cljs$core$async32799(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32800));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32799(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31699__auto___32919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto___32919,mults,ensure_mult,p){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto___32919,mults,ensure_mult,p){
return (function (state_32873){
var state_val_32874 = (state_32873[(1)]);
if((state_val_32874 === (7))){
var inst_32869 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
var statearr_32875_32920 = state_32873__$1;
(statearr_32875_32920[(2)] = inst_32869);

(statearr_32875_32920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (20))){
var state_32873__$1 = state_32873;
var statearr_32876_32921 = state_32873__$1;
(statearr_32876_32921[(2)] = null);

(statearr_32876_32921[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (1))){
var state_32873__$1 = state_32873;
var statearr_32877_32922 = state_32873__$1;
(statearr_32877_32922[(2)] = null);

(statearr_32877_32922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (24))){
var inst_32852 = (state_32873[(7)]);
var inst_32861 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32852);
var state_32873__$1 = state_32873;
var statearr_32878_32923 = state_32873__$1;
(statearr_32878_32923[(2)] = inst_32861);

(statearr_32878_32923[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (4))){
var inst_32804 = (state_32873[(8)]);
var inst_32804__$1 = (state_32873[(2)]);
var inst_32805 = (inst_32804__$1 == null);
var state_32873__$1 = (function (){var statearr_32879 = state_32873;
(statearr_32879[(8)] = inst_32804__$1);

return statearr_32879;
})();
if(cljs.core.truth_(inst_32805)){
var statearr_32880_32924 = state_32873__$1;
(statearr_32880_32924[(1)] = (5));

} else {
var statearr_32881_32925 = state_32873__$1;
(statearr_32881_32925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (15))){
var inst_32846 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
var statearr_32882_32926 = state_32873__$1;
(statearr_32882_32926[(2)] = inst_32846);

(statearr_32882_32926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (21))){
var inst_32866 = (state_32873[(2)]);
var state_32873__$1 = (function (){var statearr_32883 = state_32873;
(statearr_32883[(9)] = inst_32866);

return statearr_32883;
})();
var statearr_32884_32927 = state_32873__$1;
(statearr_32884_32927[(2)] = null);

(statearr_32884_32927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (13))){
var inst_32828 = (state_32873[(10)]);
var inst_32830 = cljs.core.chunked_seq_QMARK_.call(null,inst_32828);
var state_32873__$1 = state_32873;
if(inst_32830){
var statearr_32885_32928 = state_32873__$1;
(statearr_32885_32928[(1)] = (16));

} else {
var statearr_32886_32929 = state_32873__$1;
(statearr_32886_32929[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (22))){
var inst_32858 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
if(cljs.core.truth_(inst_32858)){
var statearr_32887_32930 = state_32873__$1;
(statearr_32887_32930[(1)] = (23));

} else {
var statearr_32888_32931 = state_32873__$1;
(statearr_32888_32931[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (6))){
var inst_32854 = (state_32873[(11)]);
var inst_32852 = (state_32873[(7)]);
var inst_32804 = (state_32873[(8)]);
var inst_32852__$1 = topic_fn.call(null,inst_32804);
var inst_32853 = cljs.core.deref.call(null,mults);
var inst_32854__$1 = cljs.core.get.call(null,inst_32853,inst_32852__$1);
var state_32873__$1 = (function (){var statearr_32889 = state_32873;
(statearr_32889[(11)] = inst_32854__$1);

(statearr_32889[(7)] = inst_32852__$1);

return statearr_32889;
})();
if(cljs.core.truth_(inst_32854__$1)){
var statearr_32890_32932 = state_32873__$1;
(statearr_32890_32932[(1)] = (19));

} else {
var statearr_32891_32933 = state_32873__$1;
(statearr_32891_32933[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (25))){
var inst_32863 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
var statearr_32892_32934 = state_32873__$1;
(statearr_32892_32934[(2)] = inst_32863);

(statearr_32892_32934[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (17))){
var inst_32828 = (state_32873[(10)]);
var inst_32837 = cljs.core.first.call(null,inst_32828);
var inst_32838 = cljs.core.async.muxch_STAR_.call(null,inst_32837);
var inst_32839 = cljs.core.async.close_BANG_.call(null,inst_32838);
var inst_32840 = cljs.core.next.call(null,inst_32828);
var inst_32814 = inst_32840;
var inst_32815 = null;
var inst_32816 = (0);
var inst_32817 = (0);
var state_32873__$1 = (function (){var statearr_32893 = state_32873;
(statearr_32893[(12)] = inst_32817);

(statearr_32893[(13)] = inst_32814);

(statearr_32893[(14)] = inst_32815);

(statearr_32893[(15)] = inst_32816);

(statearr_32893[(16)] = inst_32839);

return statearr_32893;
})();
var statearr_32894_32935 = state_32873__$1;
(statearr_32894_32935[(2)] = null);

(statearr_32894_32935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (3))){
var inst_32871 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32873__$1,inst_32871);
} else {
if((state_val_32874 === (12))){
var inst_32848 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
var statearr_32895_32936 = state_32873__$1;
(statearr_32895_32936[(2)] = inst_32848);

(statearr_32895_32936[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (2))){
var state_32873__$1 = state_32873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32873__$1,(4),ch);
} else {
if((state_val_32874 === (23))){
var state_32873__$1 = state_32873;
var statearr_32896_32937 = state_32873__$1;
(statearr_32896_32937[(2)] = null);

(statearr_32896_32937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (19))){
var inst_32854 = (state_32873[(11)]);
var inst_32804 = (state_32873[(8)]);
var inst_32856 = cljs.core.async.muxch_STAR_.call(null,inst_32854);
var state_32873__$1 = state_32873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32873__$1,(22),inst_32856,inst_32804);
} else {
if((state_val_32874 === (11))){
var inst_32814 = (state_32873[(13)]);
var inst_32828 = (state_32873[(10)]);
var inst_32828__$1 = cljs.core.seq.call(null,inst_32814);
var state_32873__$1 = (function (){var statearr_32897 = state_32873;
(statearr_32897[(10)] = inst_32828__$1);

return statearr_32897;
})();
if(inst_32828__$1){
var statearr_32898_32938 = state_32873__$1;
(statearr_32898_32938[(1)] = (13));

} else {
var statearr_32899_32939 = state_32873__$1;
(statearr_32899_32939[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (9))){
var inst_32850 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
var statearr_32900_32940 = state_32873__$1;
(statearr_32900_32940[(2)] = inst_32850);

(statearr_32900_32940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (5))){
var inst_32811 = cljs.core.deref.call(null,mults);
var inst_32812 = cljs.core.vals.call(null,inst_32811);
var inst_32813 = cljs.core.seq.call(null,inst_32812);
var inst_32814 = inst_32813;
var inst_32815 = null;
var inst_32816 = (0);
var inst_32817 = (0);
var state_32873__$1 = (function (){var statearr_32901 = state_32873;
(statearr_32901[(12)] = inst_32817);

(statearr_32901[(13)] = inst_32814);

(statearr_32901[(14)] = inst_32815);

(statearr_32901[(15)] = inst_32816);

return statearr_32901;
})();
var statearr_32902_32941 = state_32873__$1;
(statearr_32902_32941[(2)] = null);

(statearr_32902_32941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (14))){
var state_32873__$1 = state_32873;
var statearr_32906_32942 = state_32873__$1;
(statearr_32906_32942[(2)] = null);

(statearr_32906_32942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (16))){
var inst_32828 = (state_32873[(10)]);
var inst_32832 = cljs.core.chunk_first.call(null,inst_32828);
var inst_32833 = cljs.core.chunk_rest.call(null,inst_32828);
var inst_32834 = cljs.core.count.call(null,inst_32832);
var inst_32814 = inst_32833;
var inst_32815 = inst_32832;
var inst_32816 = inst_32834;
var inst_32817 = (0);
var state_32873__$1 = (function (){var statearr_32907 = state_32873;
(statearr_32907[(12)] = inst_32817);

(statearr_32907[(13)] = inst_32814);

(statearr_32907[(14)] = inst_32815);

(statearr_32907[(15)] = inst_32816);

return statearr_32907;
})();
var statearr_32908_32943 = state_32873__$1;
(statearr_32908_32943[(2)] = null);

(statearr_32908_32943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (10))){
var inst_32817 = (state_32873[(12)]);
var inst_32814 = (state_32873[(13)]);
var inst_32815 = (state_32873[(14)]);
var inst_32816 = (state_32873[(15)]);
var inst_32822 = cljs.core._nth.call(null,inst_32815,inst_32817);
var inst_32823 = cljs.core.async.muxch_STAR_.call(null,inst_32822);
var inst_32824 = cljs.core.async.close_BANG_.call(null,inst_32823);
var inst_32825 = (inst_32817 + (1));
var tmp32903 = inst_32814;
var tmp32904 = inst_32815;
var tmp32905 = inst_32816;
var inst_32814__$1 = tmp32903;
var inst_32815__$1 = tmp32904;
var inst_32816__$1 = tmp32905;
var inst_32817__$1 = inst_32825;
var state_32873__$1 = (function (){var statearr_32909 = state_32873;
(statearr_32909[(12)] = inst_32817__$1);

(statearr_32909[(13)] = inst_32814__$1);

(statearr_32909[(14)] = inst_32815__$1);

(statearr_32909[(17)] = inst_32824);

(statearr_32909[(15)] = inst_32816__$1);

return statearr_32909;
})();
var statearr_32910_32944 = state_32873__$1;
(statearr_32910_32944[(2)] = null);

(statearr_32910_32944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (18))){
var inst_32843 = (state_32873[(2)]);
var state_32873__$1 = state_32873;
var statearr_32911_32945 = state_32873__$1;
(statearr_32911_32945[(2)] = inst_32843);

(statearr_32911_32945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32874 === (8))){
var inst_32817 = (state_32873[(12)]);
var inst_32816 = (state_32873[(15)]);
var inst_32819 = (inst_32817 < inst_32816);
var inst_32820 = inst_32819;
var state_32873__$1 = state_32873;
if(cljs.core.truth_(inst_32820)){
var statearr_32912_32946 = state_32873__$1;
(statearr_32912_32946[(1)] = (10));

} else {
var statearr_32913_32947 = state_32873__$1;
(statearr_32913_32947[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__31699__auto___32919,mults,ensure_mult,p))
;
return ((function (switch__31611__auto__,c__31699__auto___32919,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31612__auto__ = null;
var cljs$core$async$state_machine__31612__auto____0 = (function (){
var statearr_32914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32914[(0)] = cljs$core$async$state_machine__31612__auto__);

(statearr_32914[(1)] = (1));

return statearr_32914;
});
var cljs$core$async$state_machine__31612__auto____1 = (function (state_32873){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_32873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e32915){if((e32915 instanceof Object)){
var ex__31615__auto__ = e32915;
var statearr_32916_32948 = state_32873;
(statearr_32916_32948[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32949 = state_32873;
state_32873 = G__32949;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$state_machine__31612__auto__ = function(state_32873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31612__auto____1.call(this,state_32873);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31612__auto____0;
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31612__auto____1;
return cljs$core$async$state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto___32919,mults,ensure_mult,p))
})();
var state__31701__auto__ = (function (){var statearr_32917 = f__31700__auto__.call(null);
(statearr_32917[(6)] = c__31699__auto___32919);

return statearr_32917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto___32919,mults,ensure_mult,p))
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
var G__32951 = arguments.length;
switch (G__32951) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32954 = arguments.length;
switch (G__32954) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__32957 = arguments.length;
switch (G__32957) {
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
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31699__auto___33024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto___33024,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto___33024,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32996){
var state_val_32997 = (state_32996[(1)]);
if((state_val_32997 === (7))){
var state_32996__$1 = state_32996;
var statearr_32998_33025 = state_32996__$1;
(statearr_32998_33025[(2)] = null);

(statearr_32998_33025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (1))){
var state_32996__$1 = state_32996;
var statearr_32999_33026 = state_32996__$1;
(statearr_32999_33026[(2)] = null);

(statearr_32999_33026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (4))){
var inst_32960 = (state_32996[(7)]);
var inst_32962 = (inst_32960 < cnt);
var state_32996__$1 = state_32996;
if(cljs.core.truth_(inst_32962)){
var statearr_33000_33027 = state_32996__$1;
(statearr_33000_33027[(1)] = (6));

} else {
var statearr_33001_33028 = state_32996__$1;
(statearr_33001_33028[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (15))){
var inst_32992 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33002_33029 = state_32996__$1;
(statearr_33002_33029[(2)] = inst_32992);

(statearr_33002_33029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (13))){
var inst_32985 = cljs.core.async.close_BANG_.call(null,out);
var state_32996__$1 = state_32996;
var statearr_33003_33030 = state_32996__$1;
(statearr_33003_33030[(2)] = inst_32985);

(statearr_33003_33030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (6))){
var state_32996__$1 = state_32996;
var statearr_33004_33031 = state_32996__$1;
(statearr_33004_33031[(2)] = null);

(statearr_33004_33031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (3))){
var inst_32994 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32996__$1,inst_32994);
} else {
if((state_val_32997 === (12))){
var inst_32982 = (state_32996[(8)]);
var inst_32982__$1 = (state_32996[(2)]);
var inst_32983 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32982__$1);
var state_32996__$1 = (function (){var statearr_33005 = state_32996;
(statearr_33005[(8)] = inst_32982__$1);

return statearr_33005;
})();
if(cljs.core.truth_(inst_32983)){
var statearr_33006_33032 = state_32996__$1;
(statearr_33006_33032[(1)] = (13));

} else {
var statearr_33007_33033 = state_32996__$1;
(statearr_33007_33033[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (2))){
var inst_32959 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32960 = (0);
var state_32996__$1 = (function (){var statearr_33008 = state_32996;
(statearr_33008[(9)] = inst_32959);

(statearr_33008[(7)] = inst_32960);

return statearr_33008;
})();
var statearr_33009_33034 = state_32996__$1;
(statearr_33009_33034[(2)] = null);

(statearr_33009_33034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (11))){
var inst_32960 = (state_32996[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32996,(10),Object,null,(9));
var inst_32969 = chs__$1.call(null,inst_32960);
var inst_32970 = done.call(null,inst_32960);
var inst_32971 = cljs.core.async.take_BANG_.call(null,inst_32969,inst_32970);
var state_32996__$1 = state_32996;
var statearr_33010_33035 = state_32996__$1;
(statearr_33010_33035[(2)] = inst_32971);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32996__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (9))){
var inst_32960 = (state_32996[(7)]);
var inst_32973 = (state_32996[(2)]);
var inst_32974 = (inst_32960 + (1));
var inst_32960__$1 = inst_32974;
var state_32996__$1 = (function (){var statearr_33011 = state_32996;
(statearr_33011[(10)] = inst_32973);

(statearr_33011[(7)] = inst_32960__$1);

return statearr_33011;
})();
var statearr_33012_33036 = state_32996__$1;
(statearr_33012_33036[(2)] = null);

(statearr_33012_33036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (5))){
var inst_32980 = (state_32996[(2)]);
var state_32996__$1 = (function (){var statearr_33013 = state_32996;
(statearr_33013[(11)] = inst_32980);

return statearr_33013;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32996__$1,(12),dchan);
} else {
if((state_val_32997 === (14))){
var inst_32982 = (state_32996[(8)]);
var inst_32987 = cljs.core.apply.call(null,f,inst_32982);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32996__$1,(16),out,inst_32987);
} else {
if((state_val_32997 === (16))){
var inst_32989 = (state_32996[(2)]);
var state_32996__$1 = (function (){var statearr_33014 = state_32996;
(statearr_33014[(12)] = inst_32989);

return statearr_33014;
})();
var statearr_33015_33037 = state_32996__$1;
(statearr_33015_33037[(2)] = null);

(statearr_33015_33037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (10))){
var inst_32964 = (state_32996[(2)]);
var inst_32965 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32996__$1 = (function (){var statearr_33016 = state_32996;
(statearr_33016[(13)] = inst_32964);

return statearr_33016;
})();
var statearr_33017_33038 = state_32996__$1;
(statearr_33017_33038[(2)] = inst_32965);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32996__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (8))){
var inst_32978 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33018_33039 = state_32996__$1;
(statearr_33018_33039[(2)] = inst_32978);

(statearr_33018_33039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__31699__auto___33024,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31611__auto__,c__31699__auto___33024,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31612__auto__ = null;
var cljs$core$async$state_machine__31612__auto____0 = (function (){
var statearr_33019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33019[(0)] = cljs$core$async$state_machine__31612__auto__);

(statearr_33019[(1)] = (1));

return statearr_33019;
});
var cljs$core$async$state_machine__31612__auto____1 = (function (state_32996){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_32996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e33020){if((e33020 instanceof Object)){
var ex__31615__auto__ = e33020;
var statearr_33021_33040 = state_32996;
(statearr_33021_33040[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33041 = state_32996;
state_32996 = G__33041;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$state_machine__31612__auto__ = function(state_32996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31612__auto____1.call(this,state_32996);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31612__auto____0;
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31612__auto____1;
return cljs$core$async$state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto___33024,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31701__auto__ = (function (){var statearr_33022 = f__31700__auto__.call(null);
(statearr_33022[(6)] = c__31699__auto___33024);

return statearr_33022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto___33024,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__33044 = arguments.length;
switch (G__33044) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31699__auto___33098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto___33098,out){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto___33098,out){
return (function (state_33076){
var state_val_33077 = (state_33076[(1)]);
if((state_val_33077 === (7))){
var inst_33055 = (state_33076[(7)]);
var inst_33056 = (state_33076[(8)]);
var inst_33055__$1 = (state_33076[(2)]);
var inst_33056__$1 = cljs.core.nth.call(null,inst_33055__$1,(0),null);
var inst_33057 = cljs.core.nth.call(null,inst_33055__$1,(1),null);
var inst_33058 = (inst_33056__$1 == null);
var state_33076__$1 = (function (){var statearr_33078 = state_33076;
(statearr_33078[(7)] = inst_33055__$1);

(statearr_33078[(8)] = inst_33056__$1);

(statearr_33078[(9)] = inst_33057);

return statearr_33078;
})();
if(cljs.core.truth_(inst_33058)){
var statearr_33079_33099 = state_33076__$1;
(statearr_33079_33099[(1)] = (8));

} else {
var statearr_33080_33100 = state_33076__$1;
(statearr_33080_33100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (1))){
var inst_33045 = cljs.core.vec.call(null,chs);
var inst_33046 = inst_33045;
var state_33076__$1 = (function (){var statearr_33081 = state_33076;
(statearr_33081[(10)] = inst_33046);

return statearr_33081;
})();
var statearr_33082_33101 = state_33076__$1;
(statearr_33082_33101[(2)] = null);

(statearr_33082_33101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (4))){
var inst_33046 = (state_33076[(10)]);
var state_33076__$1 = state_33076;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33076__$1,(7),inst_33046);
} else {
if((state_val_33077 === (6))){
var inst_33072 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
var statearr_33083_33102 = state_33076__$1;
(statearr_33083_33102[(2)] = inst_33072);

(statearr_33083_33102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (3))){
var inst_33074 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33076__$1,inst_33074);
} else {
if((state_val_33077 === (2))){
var inst_33046 = (state_33076[(10)]);
var inst_33048 = cljs.core.count.call(null,inst_33046);
var inst_33049 = (inst_33048 > (0));
var state_33076__$1 = state_33076;
if(cljs.core.truth_(inst_33049)){
var statearr_33085_33103 = state_33076__$1;
(statearr_33085_33103[(1)] = (4));

} else {
var statearr_33086_33104 = state_33076__$1;
(statearr_33086_33104[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (11))){
var inst_33046 = (state_33076[(10)]);
var inst_33065 = (state_33076[(2)]);
var tmp33084 = inst_33046;
var inst_33046__$1 = tmp33084;
var state_33076__$1 = (function (){var statearr_33087 = state_33076;
(statearr_33087[(11)] = inst_33065);

(statearr_33087[(10)] = inst_33046__$1);

return statearr_33087;
})();
var statearr_33088_33105 = state_33076__$1;
(statearr_33088_33105[(2)] = null);

(statearr_33088_33105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (9))){
var inst_33056 = (state_33076[(8)]);
var state_33076__$1 = state_33076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33076__$1,(11),out,inst_33056);
} else {
if((state_val_33077 === (5))){
var inst_33070 = cljs.core.async.close_BANG_.call(null,out);
var state_33076__$1 = state_33076;
var statearr_33089_33106 = state_33076__$1;
(statearr_33089_33106[(2)] = inst_33070);

(statearr_33089_33106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (10))){
var inst_33068 = (state_33076[(2)]);
var state_33076__$1 = state_33076;
var statearr_33090_33107 = state_33076__$1;
(statearr_33090_33107[(2)] = inst_33068);

(statearr_33090_33107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33077 === (8))){
var inst_33046 = (state_33076[(10)]);
var inst_33055 = (state_33076[(7)]);
var inst_33056 = (state_33076[(8)]);
var inst_33057 = (state_33076[(9)]);
var inst_33060 = (function (){var cs = inst_33046;
var vec__33051 = inst_33055;
var v = inst_33056;
var c = inst_33057;
return ((function (cs,vec__33051,v,c,inst_33046,inst_33055,inst_33056,inst_33057,state_val_33077,c__31699__auto___33098,out){
return (function (p1__33042_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33042_SHARP_);
});
;})(cs,vec__33051,v,c,inst_33046,inst_33055,inst_33056,inst_33057,state_val_33077,c__31699__auto___33098,out))
})();
var inst_33061 = cljs.core.filterv.call(null,inst_33060,inst_33046);
var inst_33046__$1 = inst_33061;
var state_33076__$1 = (function (){var statearr_33091 = state_33076;
(statearr_33091[(10)] = inst_33046__$1);

return statearr_33091;
})();
var statearr_33092_33108 = state_33076__$1;
(statearr_33092_33108[(2)] = null);

(statearr_33092_33108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__31699__auto___33098,out))
;
return ((function (switch__31611__auto__,c__31699__auto___33098,out){
return (function() {
var cljs$core$async$state_machine__31612__auto__ = null;
var cljs$core$async$state_machine__31612__auto____0 = (function (){
var statearr_33093 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33093[(0)] = cljs$core$async$state_machine__31612__auto__);

(statearr_33093[(1)] = (1));

return statearr_33093;
});
var cljs$core$async$state_machine__31612__auto____1 = (function (state_33076){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_33076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e33094){if((e33094 instanceof Object)){
var ex__31615__auto__ = e33094;
var statearr_33095_33109 = state_33076;
(statearr_33095_33109[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33110 = state_33076;
state_33076 = G__33110;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$state_machine__31612__auto__ = function(state_33076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31612__auto____1.call(this,state_33076);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31612__auto____0;
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31612__auto____1;
return cljs$core$async$state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto___33098,out))
})();
var state__31701__auto__ = (function (){var statearr_33096 = f__31700__auto__.call(null);
(statearr_33096[(6)] = c__31699__auto___33098);

return statearr_33096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto___33098,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33112 = arguments.length;
switch (G__33112) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31699__auto___33157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto___33157,out){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto___33157,out){
return (function (state_33136){
var state_val_33137 = (state_33136[(1)]);
if((state_val_33137 === (7))){
var inst_33118 = (state_33136[(7)]);
var inst_33118__$1 = (state_33136[(2)]);
var inst_33119 = (inst_33118__$1 == null);
var inst_33120 = cljs.core.not.call(null,inst_33119);
var state_33136__$1 = (function (){var statearr_33138 = state_33136;
(statearr_33138[(7)] = inst_33118__$1);

return statearr_33138;
})();
if(inst_33120){
var statearr_33139_33158 = state_33136__$1;
(statearr_33139_33158[(1)] = (8));

} else {
var statearr_33140_33159 = state_33136__$1;
(statearr_33140_33159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (1))){
var inst_33113 = (0);
var state_33136__$1 = (function (){var statearr_33141 = state_33136;
(statearr_33141[(8)] = inst_33113);

return statearr_33141;
})();
var statearr_33142_33160 = state_33136__$1;
(statearr_33142_33160[(2)] = null);

(statearr_33142_33160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (4))){
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33136__$1,(7),ch);
} else {
if((state_val_33137 === (6))){
var inst_33131 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33143_33161 = state_33136__$1;
(statearr_33143_33161[(2)] = inst_33131);

(statearr_33143_33161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (3))){
var inst_33133 = (state_33136[(2)]);
var inst_33134 = cljs.core.async.close_BANG_.call(null,out);
var state_33136__$1 = (function (){var statearr_33144 = state_33136;
(statearr_33144[(9)] = inst_33133);

return statearr_33144;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33136__$1,inst_33134);
} else {
if((state_val_33137 === (2))){
var inst_33113 = (state_33136[(8)]);
var inst_33115 = (inst_33113 < n);
var state_33136__$1 = state_33136;
if(cljs.core.truth_(inst_33115)){
var statearr_33145_33162 = state_33136__$1;
(statearr_33145_33162[(1)] = (4));

} else {
var statearr_33146_33163 = state_33136__$1;
(statearr_33146_33163[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (11))){
var inst_33113 = (state_33136[(8)]);
var inst_33123 = (state_33136[(2)]);
var inst_33124 = (inst_33113 + (1));
var inst_33113__$1 = inst_33124;
var state_33136__$1 = (function (){var statearr_33147 = state_33136;
(statearr_33147[(10)] = inst_33123);

(statearr_33147[(8)] = inst_33113__$1);

return statearr_33147;
})();
var statearr_33148_33164 = state_33136__$1;
(statearr_33148_33164[(2)] = null);

(statearr_33148_33164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (9))){
var state_33136__$1 = state_33136;
var statearr_33149_33165 = state_33136__$1;
(statearr_33149_33165[(2)] = null);

(statearr_33149_33165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (5))){
var state_33136__$1 = state_33136;
var statearr_33150_33166 = state_33136__$1;
(statearr_33150_33166[(2)] = null);

(statearr_33150_33166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (10))){
var inst_33128 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33151_33167 = state_33136__$1;
(statearr_33151_33167[(2)] = inst_33128);

(statearr_33151_33167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (8))){
var inst_33118 = (state_33136[(7)]);
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33136__$1,(11),out,inst_33118);
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
});})(c__31699__auto___33157,out))
;
return ((function (switch__31611__auto__,c__31699__auto___33157,out){
return (function() {
var cljs$core$async$state_machine__31612__auto__ = null;
var cljs$core$async$state_machine__31612__auto____0 = (function (){
var statearr_33152 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33152[(0)] = cljs$core$async$state_machine__31612__auto__);

(statearr_33152[(1)] = (1));

return statearr_33152;
});
var cljs$core$async$state_machine__31612__auto____1 = (function (state_33136){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_33136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e33153){if((e33153 instanceof Object)){
var ex__31615__auto__ = e33153;
var statearr_33154_33168 = state_33136;
(statearr_33154_33168[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33169 = state_33136;
state_33136 = G__33169;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$state_machine__31612__auto__ = function(state_33136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31612__auto____1.call(this,state_33136);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31612__auto____0;
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31612__auto____1;
return cljs$core$async$state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto___33157,out))
})();
var state__31701__auto__ = (function (){var statearr_33155 = f__31700__auto__.call(null);
(statearr_33155[(6)] = c__31699__auto___33157);

return statearr_33155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto___33157,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33171 = (function (f,ch,meta33172){
this.f = f;
this.ch = ch;
this.meta33172 = meta33172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33173,meta33172__$1){
var self__ = this;
var _33173__$1 = this;
return (new cljs.core.async.t_cljs$core$async33171(self__.f,self__.ch,meta33172__$1));
});

cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33173){
var self__ = this;
var _33173__$1 = this;
return self__.meta33172;
});

cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33174 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33174 = (function (f,ch,meta33172,_,fn1,meta33175){
this.f = f;
this.ch = ch;
this.meta33172 = meta33172;
this._ = _;
this.fn1 = fn1;
this.meta33175 = meta33175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33176,meta33175__$1){
var self__ = this;
var _33176__$1 = this;
return (new cljs.core.async.t_cljs$core$async33174(self__.f,self__.ch,self__.meta33172,self__._,self__.fn1,meta33175__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33174.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33176){
var self__ = this;
var _33176__$1 = this;
return self__.meta33175;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33174.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33174.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33174.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33174.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33170_SHARP_){
return f1.call(null,(((p1__33170_SHARP_ == null))?null:self__.f.call(null,p1__33170_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33174.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33172","meta33172",776028568,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33171","cljs.core.async/t_cljs$core$async33171",-206640121,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33175","meta33175",128832095,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33174.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33174";

cljs.core.async.t_cljs$core$async33174.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28564__auto__,writer__28565__auto__,opt__28566__auto__){
return cljs.core._write.call(null,writer__28565__auto__,"cljs.core.async/t_cljs$core$async33174");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33174 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33174(f__$1,ch__$1,meta33172__$1,___$2,fn1__$1,meta33175){
return (new cljs.core.async.t_cljs$core$async33174(f__$1,ch__$1,meta33172__$1,___$2,fn1__$1,meta33175));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33174(self__.f,self__.ch,self__.meta33172,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27927__auto__ = ret;
if(cljs.core.truth_(and__27927__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27927__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33171.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33172","meta33172",776028568,null)], null);
});

cljs.core.async.t_cljs$core$async33171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33171";

cljs.core.async.t_cljs$core$async33171.cljs$lang$ctorPrWriter = (function (this__28564__auto__,writer__28565__auto__,opt__28566__auto__){
return cljs.core._write.call(null,writer__28565__auto__,"cljs.core.async/t_cljs$core$async33171");
});

cljs.core.async.__GT_t_cljs$core$async33171 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33171(f__$1,ch__$1,meta33172){
return (new cljs.core.async.t_cljs$core$async33171(f__$1,ch__$1,meta33172));
});

}

return (new cljs.core.async.t_cljs$core$async33171(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33177 = (function (f,ch,meta33178){
this.f = f;
this.ch = ch;
this.meta33178 = meta33178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33179,meta33178__$1){
var self__ = this;
var _33179__$1 = this;
return (new cljs.core.async.t_cljs$core$async33177(self__.f,self__.ch,meta33178__$1));
});

cljs.core.async.t_cljs$core$async33177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33179){
var self__ = this;
var _33179__$1 = this;
return self__.meta33178;
});

cljs.core.async.t_cljs$core$async33177.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33177.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33177.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33177.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33177.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33177.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33178","meta33178",-963844702,null)], null);
});

cljs.core.async.t_cljs$core$async33177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33177";

cljs.core.async.t_cljs$core$async33177.cljs$lang$ctorPrWriter = (function (this__28564__auto__,writer__28565__auto__,opt__28566__auto__){
return cljs.core._write.call(null,writer__28565__auto__,"cljs.core.async/t_cljs$core$async33177");
});

cljs.core.async.__GT_t_cljs$core$async33177 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33177(f__$1,ch__$1,meta33178){
return (new cljs.core.async.t_cljs$core$async33177(f__$1,ch__$1,meta33178));
});

}

return (new cljs.core.async.t_cljs$core$async33177(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33180 = (function (p,ch,meta33181){
this.p = p;
this.ch = ch;
this.meta33181 = meta33181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33182,meta33181__$1){
var self__ = this;
var _33182__$1 = this;
return (new cljs.core.async.t_cljs$core$async33180(self__.p,self__.ch,meta33181__$1));
});

cljs.core.async.t_cljs$core$async33180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33182){
var self__ = this;
var _33182__$1 = this;
return self__.meta33181;
});

cljs.core.async.t_cljs$core$async33180.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33180.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33180.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33180.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33180.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33180.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33180.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33181","meta33181",1982322122,null)], null);
});

cljs.core.async.t_cljs$core$async33180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33180";

cljs.core.async.t_cljs$core$async33180.cljs$lang$ctorPrWriter = (function (this__28564__auto__,writer__28565__auto__,opt__28566__auto__){
return cljs.core._write.call(null,writer__28565__auto__,"cljs.core.async/t_cljs$core$async33180");
});

cljs.core.async.__GT_t_cljs$core$async33180 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33180(p__$1,ch__$1,meta33181){
return (new cljs.core.async.t_cljs$core$async33180(p__$1,ch__$1,meta33181));
});

}

return (new cljs.core.async.t_cljs$core$async33180(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33184 = arguments.length;
switch (G__33184) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31699__auto___33224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto___33224,out){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto___33224,out){
return (function (state_33205){
var state_val_33206 = (state_33205[(1)]);
if((state_val_33206 === (7))){
var inst_33201 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33207_33225 = state_33205__$1;
(statearr_33207_33225[(2)] = inst_33201);

(statearr_33207_33225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (1))){
var state_33205__$1 = state_33205;
var statearr_33208_33226 = state_33205__$1;
(statearr_33208_33226[(2)] = null);

(statearr_33208_33226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (4))){
var inst_33187 = (state_33205[(7)]);
var inst_33187__$1 = (state_33205[(2)]);
var inst_33188 = (inst_33187__$1 == null);
var state_33205__$1 = (function (){var statearr_33209 = state_33205;
(statearr_33209[(7)] = inst_33187__$1);

return statearr_33209;
})();
if(cljs.core.truth_(inst_33188)){
var statearr_33210_33227 = state_33205__$1;
(statearr_33210_33227[(1)] = (5));

} else {
var statearr_33211_33228 = state_33205__$1;
(statearr_33211_33228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (6))){
var inst_33187 = (state_33205[(7)]);
var inst_33192 = p.call(null,inst_33187);
var state_33205__$1 = state_33205;
if(cljs.core.truth_(inst_33192)){
var statearr_33212_33229 = state_33205__$1;
(statearr_33212_33229[(1)] = (8));

} else {
var statearr_33213_33230 = state_33205__$1;
(statearr_33213_33230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (3))){
var inst_33203 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33205__$1,inst_33203);
} else {
if((state_val_33206 === (2))){
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33205__$1,(4),ch);
} else {
if((state_val_33206 === (11))){
var inst_33195 = (state_33205[(2)]);
var state_33205__$1 = state_33205;
var statearr_33214_33231 = state_33205__$1;
(statearr_33214_33231[(2)] = inst_33195);

(statearr_33214_33231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (9))){
var state_33205__$1 = state_33205;
var statearr_33215_33232 = state_33205__$1;
(statearr_33215_33232[(2)] = null);

(statearr_33215_33232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (5))){
var inst_33190 = cljs.core.async.close_BANG_.call(null,out);
var state_33205__$1 = state_33205;
var statearr_33216_33233 = state_33205__$1;
(statearr_33216_33233[(2)] = inst_33190);

(statearr_33216_33233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (10))){
var inst_33198 = (state_33205[(2)]);
var state_33205__$1 = (function (){var statearr_33217 = state_33205;
(statearr_33217[(8)] = inst_33198);

return statearr_33217;
})();
var statearr_33218_33234 = state_33205__$1;
(statearr_33218_33234[(2)] = null);

(statearr_33218_33234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33206 === (8))){
var inst_33187 = (state_33205[(7)]);
var state_33205__$1 = state_33205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33205__$1,(11),out,inst_33187);
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
});})(c__31699__auto___33224,out))
;
return ((function (switch__31611__auto__,c__31699__auto___33224,out){
return (function() {
var cljs$core$async$state_machine__31612__auto__ = null;
var cljs$core$async$state_machine__31612__auto____0 = (function (){
var statearr_33219 = [null,null,null,null,null,null,null,null,null];
(statearr_33219[(0)] = cljs$core$async$state_machine__31612__auto__);

(statearr_33219[(1)] = (1));

return statearr_33219;
});
var cljs$core$async$state_machine__31612__auto____1 = (function (state_33205){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_33205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e33220){if((e33220 instanceof Object)){
var ex__31615__auto__ = e33220;
var statearr_33221_33235 = state_33205;
(statearr_33221_33235[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33236 = state_33205;
state_33205 = G__33236;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$state_machine__31612__auto__ = function(state_33205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31612__auto____1.call(this,state_33205);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31612__auto____0;
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31612__auto____1;
return cljs$core$async$state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto___33224,out))
})();
var state__31701__auto__ = (function (){var statearr_33222 = f__31700__auto__.call(null);
(statearr_33222[(6)] = c__31699__auto___33224);

return statearr_33222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto___33224,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33238 = arguments.length;
switch (G__33238) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto__){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto__){
return (function (state_33301){
var state_val_33302 = (state_33301[(1)]);
if((state_val_33302 === (7))){
var inst_33297 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
var statearr_33303_33341 = state_33301__$1;
(statearr_33303_33341[(2)] = inst_33297);

(statearr_33303_33341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (20))){
var inst_33267 = (state_33301[(7)]);
var inst_33278 = (state_33301[(2)]);
var inst_33279 = cljs.core.next.call(null,inst_33267);
var inst_33253 = inst_33279;
var inst_33254 = null;
var inst_33255 = (0);
var inst_33256 = (0);
var state_33301__$1 = (function (){var statearr_33304 = state_33301;
(statearr_33304[(8)] = inst_33255);

(statearr_33304[(9)] = inst_33256);

(statearr_33304[(10)] = inst_33254);

(statearr_33304[(11)] = inst_33278);

(statearr_33304[(12)] = inst_33253);

return statearr_33304;
})();
var statearr_33305_33342 = state_33301__$1;
(statearr_33305_33342[(2)] = null);

(statearr_33305_33342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (1))){
var state_33301__$1 = state_33301;
var statearr_33306_33343 = state_33301__$1;
(statearr_33306_33343[(2)] = null);

(statearr_33306_33343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (4))){
var inst_33242 = (state_33301[(13)]);
var inst_33242__$1 = (state_33301[(2)]);
var inst_33243 = (inst_33242__$1 == null);
var state_33301__$1 = (function (){var statearr_33307 = state_33301;
(statearr_33307[(13)] = inst_33242__$1);

return statearr_33307;
})();
if(cljs.core.truth_(inst_33243)){
var statearr_33308_33344 = state_33301__$1;
(statearr_33308_33344[(1)] = (5));

} else {
var statearr_33309_33345 = state_33301__$1;
(statearr_33309_33345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (15))){
var state_33301__$1 = state_33301;
var statearr_33313_33346 = state_33301__$1;
(statearr_33313_33346[(2)] = null);

(statearr_33313_33346[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (21))){
var state_33301__$1 = state_33301;
var statearr_33314_33347 = state_33301__$1;
(statearr_33314_33347[(2)] = null);

(statearr_33314_33347[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (13))){
var inst_33255 = (state_33301[(8)]);
var inst_33256 = (state_33301[(9)]);
var inst_33254 = (state_33301[(10)]);
var inst_33253 = (state_33301[(12)]);
var inst_33263 = (state_33301[(2)]);
var inst_33264 = (inst_33256 + (1));
var tmp33310 = inst_33255;
var tmp33311 = inst_33254;
var tmp33312 = inst_33253;
var inst_33253__$1 = tmp33312;
var inst_33254__$1 = tmp33311;
var inst_33255__$1 = tmp33310;
var inst_33256__$1 = inst_33264;
var state_33301__$1 = (function (){var statearr_33315 = state_33301;
(statearr_33315[(14)] = inst_33263);

(statearr_33315[(8)] = inst_33255__$1);

(statearr_33315[(9)] = inst_33256__$1);

(statearr_33315[(10)] = inst_33254__$1);

(statearr_33315[(12)] = inst_33253__$1);

return statearr_33315;
})();
var statearr_33316_33348 = state_33301__$1;
(statearr_33316_33348[(2)] = null);

(statearr_33316_33348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (22))){
var state_33301__$1 = state_33301;
var statearr_33317_33349 = state_33301__$1;
(statearr_33317_33349[(2)] = null);

(statearr_33317_33349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (6))){
var inst_33242 = (state_33301[(13)]);
var inst_33251 = f.call(null,inst_33242);
var inst_33252 = cljs.core.seq.call(null,inst_33251);
var inst_33253 = inst_33252;
var inst_33254 = null;
var inst_33255 = (0);
var inst_33256 = (0);
var state_33301__$1 = (function (){var statearr_33318 = state_33301;
(statearr_33318[(8)] = inst_33255);

(statearr_33318[(9)] = inst_33256);

(statearr_33318[(10)] = inst_33254);

(statearr_33318[(12)] = inst_33253);

return statearr_33318;
})();
var statearr_33319_33350 = state_33301__$1;
(statearr_33319_33350[(2)] = null);

(statearr_33319_33350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (17))){
var inst_33267 = (state_33301[(7)]);
var inst_33271 = cljs.core.chunk_first.call(null,inst_33267);
var inst_33272 = cljs.core.chunk_rest.call(null,inst_33267);
var inst_33273 = cljs.core.count.call(null,inst_33271);
var inst_33253 = inst_33272;
var inst_33254 = inst_33271;
var inst_33255 = inst_33273;
var inst_33256 = (0);
var state_33301__$1 = (function (){var statearr_33320 = state_33301;
(statearr_33320[(8)] = inst_33255);

(statearr_33320[(9)] = inst_33256);

(statearr_33320[(10)] = inst_33254);

(statearr_33320[(12)] = inst_33253);

return statearr_33320;
})();
var statearr_33321_33351 = state_33301__$1;
(statearr_33321_33351[(2)] = null);

(statearr_33321_33351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (3))){
var inst_33299 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33301__$1,inst_33299);
} else {
if((state_val_33302 === (12))){
var inst_33287 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
var statearr_33322_33352 = state_33301__$1;
(statearr_33322_33352[(2)] = inst_33287);

(statearr_33322_33352[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (2))){
var state_33301__$1 = state_33301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33301__$1,(4),in$);
} else {
if((state_val_33302 === (23))){
var inst_33295 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
var statearr_33323_33353 = state_33301__$1;
(statearr_33323_33353[(2)] = inst_33295);

(statearr_33323_33353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (19))){
var inst_33282 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
var statearr_33324_33354 = state_33301__$1;
(statearr_33324_33354[(2)] = inst_33282);

(statearr_33324_33354[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (11))){
var inst_33267 = (state_33301[(7)]);
var inst_33253 = (state_33301[(12)]);
var inst_33267__$1 = cljs.core.seq.call(null,inst_33253);
var state_33301__$1 = (function (){var statearr_33325 = state_33301;
(statearr_33325[(7)] = inst_33267__$1);

return statearr_33325;
})();
if(inst_33267__$1){
var statearr_33326_33355 = state_33301__$1;
(statearr_33326_33355[(1)] = (14));

} else {
var statearr_33327_33356 = state_33301__$1;
(statearr_33327_33356[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (9))){
var inst_33289 = (state_33301[(2)]);
var inst_33290 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33301__$1 = (function (){var statearr_33328 = state_33301;
(statearr_33328[(15)] = inst_33289);

return statearr_33328;
})();
if(cljs.core.truth_(inst_33290)){
var statearr_33329_33357 = state_33301__$1;
(statearr_33329_33357[(1)] = (21));

} else {
var statearr_33330_33358 = state_33301__$1;
(statearr_33330_33358[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (5))){
var inst_33245 = cljs.core.async.close_BANG_.call(null,out);
var state_33301__$1 = state_33301;
var statearr_33331_33359 = state_33301__$1;
(statearr_33331_33359[(2)] = inst_33245);

(statearr_33331_33359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (14))){
var inst_33267 = (state_33301[(7)]);
var inst_33269 = cljs.core.chunked_seq_QMARK_.call(null,inst_33267);
var state_33301__$1 = state_33301;
if(inst_33269){
var statearr_33332_33360 = state_33301__$1;
(statearr_33332_33360[(1)] = (17));

} else {
var statearr_33333_33361 = state_33301__$1;
(statearr_33333_33361[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (16))){
var inst_33285 = (state_33301[(2)]);
var state_33301__$1 = state_33301;
var statearr_33334_33362 = state_33301__$1;
(statearr_33334_33362[(2)] = inst_33285);

(statearr_33334_33362[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33302 === (10))){
var inst_33256 = (state_33301[(9)]);
var inst_33254 = (state_33301[(10)]);
var inst_33261 = cljs.core._nth.call(null,inst_33254,inst_33256);
var state_33301__$1 = state_33301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33301__$1,(13),out,inst_33261);
} else {
if((state_val_33302 === (18))){
var inst_33267 = (state_33301[(7)]);
var inst_33276 = cljs.core.first.call(null,inst_33267);
var state_33301__$1 = state_33301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33301__$1,(20),out,inst_33276);
} else {
if((state_val_33302 === (8))){
var inst_33255 = (state_33301[(8)]);
var inst_33256 = (state_33301[(9)]);
var inst_33258 = (inst_33256 < inst_33255);
var inst_33259 = inst_33258;
var state_33301__$1 = state_33301;
if(cljs.core.truth_(inst_33259)){
var statearr_33335_33363 = state_33301__$1;
(statearr_33335_33363[(1)] = (10));

} else {
var statearr_33336_33364 = state_33301__$1;
(statearr_33336_33364[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__31699__auto__))
;
return ((function (switch__31611__auto__,c__31699__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31612__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31612__auto____0 = (function (){
var statearr_33337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33337[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31612__auto__);

(statearr_33337[(1)] = (1));

return statearr_33337;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31612__auto____1 = (function (state_33301){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_33301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e33338){if((e33338 instanceof Object)){
var ex__31615__auto__ = e33338;
var statearr_33339_33365 = state_33301;
(statearr_33339_33365[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33366 = state_33301;
state_33301 = G__33366;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31612__auto__ = function(state_33301){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31612__auto____1.call(this,state_33301);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31612__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31612__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto__))
})();
var state__31701__auto__ = (function (){var statearr_33340 = f__31700__auto__.call(null);
(statearr_33340[(6)] = c__31699__auto__);

return statearr_33340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto__))
);

return c__31699__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33368 = arguments.length;
switch (G__33368) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33371 = arguments.length;
switch (G__33371) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33374 = arguments.length;
switch (G__33374) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31699__auto___33421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto___33421,out){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto___33421,out){
return (function (state_33398){
var state_val_33399 = (state_33398[(1)]);
if((state_val_33399 === (7))){
var inst_33393 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
var statearr_33400_33422 = state_33398__$1;
(statearr_33400_33422[(2)] = inst_33393);

(statearr_33400_33422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (1))){
var inst_33375 = null;
var state_33398__$1 = (function (){var statearr_33401 = state_33398;
(statearr_33401[(7)] = inst_33375);

return statearr_33401;
})();
var statearr_33402_33423 = state_33398__$1;
(statearr_33402_33423[(2)] = null);

(statearr_33402_33423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (4))){
var inst_33378 = (state_33398[(8)]);
var inst_33378__$1 = (state_33398[(2)]);
var inst_33379 = (inst_33378__$1 == null);
var inst_33380 = cljs.core.not.call(null,inst_33379);
var state_33398__$1 = (function (){var statearr_33403 = state_33398;
(statearr_33403[(8)] = inst_33378__$1);

return statearr_33403;
})();
if(inst_33380){
var statearr_33404_33424 = state_33398__$1;
(statearr_33404_33424[(1)] = (5));

} else {
var statearr_33405_33425 = state_33398__$1;
(statearr_33405_33425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (6))){
var state_33398__$1 = state_33398;
var statearr_33406_33426 = state_33398__$1;
(statearr_33406_33426[(2)] = null);

(statearr_33406_33426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (3))){
var inst_33395 = (state_33398[(2)]);
var inst_33396 = cljs.core.async.close_BANG_.call(null,out);
var state_33398__$1 = (function (){var statearr_33407 = state_33398;
(statearr_33407[(9)] = inst_33395);

return statearr_33407;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33398__$1,inst_33396);
} else {
if((state_val_33399 === (2))){
var state_33398__$1 = state_33398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33398__$1,(4),ch);
} else {
if((state_val_33399 === (11))){
var inst_33378 = (state_33398[(8)]);
var inst_33387 = (state_33398[(2)]);
var inst_33375 = inst_33378;
var state_33398__$1 = (function (){var statearr_33408 = state_33398;
(statearr_33408[(7)] = inst_33375);

(statearr_33408[(10)] = inst_33387);

return statearr_33408;
})();
var statearr_33409_33427 = state_33398__$1;
(statearr_33409_33427[(2)] = null);

(statearr_33409_33427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (9))){
var inst_33378 = (state_33398[(8)]);
var state_33398__$1 = state_33398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33398__$1,(11),out,inst_33378);
} else {
if((state_val_33399 === (5))){
var inst_33375 = (state_33398[(7)]);
var inst_33378 = (state_33398[(8)]);
var inst_33382 = cljs.core._EQ_.call(null,inst_33378,inst_33375);
var state_33398__$1 = state_33398;
if(inst_33382){
var statearr_33411_33428 = state_33398__$1;
(statearr_33411_33428[(1)] = (8));

} else {
var statearr_33412_33429 = state_33398__$1;
(statearr_33412_33429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (10))){
var inst_33390 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
var statearr_33413_33430 = state_33398__$1;
(statearr_33413_33430[(2)] = inst_33390);

(statearr_33413_33430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (8))){
var inst_33375 = (state_33398[(7)]);
var tmp33410 = inst_33375;
var inst_33375__$1 = tmp33410;
var state_33398__$1 = (function (){var statearr_33414 = state_33398;
(statearr_33414[(7)] = inst_33375__$1);

return statearr_33414;
})();
var statearr_33415_33431 = state_33398__$1;
(statearr_33415_33431[(2)] = null);

(statearr_33415_33431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__31699__auto___33421,out))
;
return ((function (switch__31611__auto__,c__31699__auto___33421,out){
return (function() {
var cljs$core$async$state_machine__31612__auto__ = null;
var cljs$core$async$state_machine__31612__auto____0 = (function (){
var statearr_33416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33416[(0)] = cljs$core$async$state_machine__31612__auto__);

(statearr_33416[(1)] = (1));

return statearr_33416;
});
var cljs$core$async$state_machine__31612__auto____1 = (function (state_33398){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_33398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e33417){if((e33417 instanceof Object)){
var ex__31615__auto__ = e33417;
var statearr_33418_33432 = state_33398;
(statearr_33418_33432[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33433 = state_33398;
state_33398 = G__33433;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$state_machine__31612__auto__ = function(state_33398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31612__auto____1.call(this,state_33398);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31612__auto____0;
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31612__auto____1;
return cljs$core$async$state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto___33421,out))
})();
var state__31701__auto__ = (function (){var statearr_33419 = f__31700__auto__.call(null);
(statearr_33419[(6)] = c__31699__auto___33421);

return statearr_33419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto___33421,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33435 = arguments.length;
switch (G__33435) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31699__auto___33501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto___33501,out){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto___33501,out){
return (function (state_33473){
var state_val_33474 = (state_33473[(1)]);
if((state_val_33474 === (7))){
var inst_33469 = (state_33473[(2)]);
var state_33473__$1 = state_33473;
var statearr_33475_33502 = state_33473__$1;
(statearr_33475_33502[(2)] = inst_33469);

(statearr_33475_33502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (1))){
var inst_33436 = (new Array(n));
var inst_33437 = inst_33436;
var inst_33438 = (0);
var state_33473__$1 = (function (){var statearr_33476 = state_33473;
(statearr_33476[(7)] = inst_33437);

(statearr_33476[(8)] = inst_33438);

return statearr_33476;
})();
var statearr_33477_33503 = state_33473__$1;
(statearr_33477_33503[(2)] = null);

(statearr_33477_33503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (4))){
var inst_33441 = (state_33473[(9)]);
var inst_33441__$1 = (state_33473[(2)]);
var inst_33442 = (inst_33441__$1 == null);
var inst_33443 = cljs.core.not.call(null,inst_33442);
var state_33473__$1 = (function (){var statearr_33478 = state_33473;
(statearr_33478[(9)] = inst_33441__$1);

return statearr_33478;
})();
if(inst_33443){
var statearr_33479_33504 = state_33473__$1;
(statearr_33479_33504[(1)] = (5));

} else {
var statearr_33480_33505 = state_33473__$1;
(statearr_33480_33505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (15))){
var inst_33463 = (state_33473[(2)]);
var state_33473__$1 = state_33473;
var statearr_33481_33506 = state_33473__$1;
(statearr_33481_33506[(2)] = inst_33463);

(statearr_33481_33506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (13))){
var state_33473__$1 = state_33473;
var statearr_33482_33507 = state_33473__$1;
(statearr_33482_33507[(2)] = null);

(statearr_33482_33507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (6))){
var inst_33438 = (state_33473[(8)]);
var inst_33459 = (inst_33438 > (0));
var state_33473__$1 = state_33473;
if(cljs.core.truth_(inst_33459)){
var statearr_33483_33508 = state_33473__$1;
(statearr_33483_33508[(1)] = (12));

} else {
var statearr_33484_33509 = state_33473__$1;
(statearr_33484_33509[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (3))){
var inst_33471 = (state_33473[(2)]);
var state_33473__$1 = state_33473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33473__$1,inst_33471);
} else {
if((state_val_33474 === (12))){
var inst_33437 = (state_33473[(7)]);
var inst_33461 = cljs.core.vec.call(null,inst_33437);
var state_33473__$1 = state_33473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33473__$1,(15),out,inst_33461);
} else {
if((state_val_33474 === (2))){
var state_33473__$1 = state_33473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33473__$1,(4),ch);
} else {
if((state_val_33474 === (11))){
var inst_33453 = (state_33473[(2)]);
var inst_33454 = (new Array(n));
var inst_33437 = inst_33454;
var inst_33438 = (0);
var state_33473__$1 = (function (){var statearr_33485 = state_33473;
(statearr_33485[(7)] = inst_33437);

(statearr_33485[(10)] = inst_33453);

(statearr_33485[(8)] = inst_33438);

return statearr_33485;
})();
var statearr_33486_33510 = state_33473__$1;
(statearr_33486_33510[(2)] = null);

(statearr_33486_33510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (9))){
var inst_33437 = (state_33473[(7)]);
var inst_33451 = cljs.core.vec.call(null,inst_33437);
var state_33473__$1 = state_33473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33473__$1,(11),out,inst_33451);
} else {
if((state_val_33474 === (5))){
var inst_33446 = (state_33473[(11)]);
var inst_33437 = (state_33473[(7)]);
var inst_33441 = (state_33473[(9)]);
var inst_33438 = (state_33473[(8)]);
var inst_33445 = (inst_33437[inst_33438] = inst_33441);
var inst_33446__$1 = (inst_33438 + (1));
var inst_33447 = (inst_33446__$1 < n);
var state_33473__$1 = (function (){var statearr_33487 = state_33473;
(statearr_33487[(11)] = inst_33446__$1);

(statearr_33487[(12)] = inst_33445);

return statearr_33487;
})();
if(cljs.core.truth_(inst_33447)){
var statearr_33488_33511 = state_33473__$1;
(statearr_33488_33511[(1)] = (8));

} else {
var statearr_33489_33512 = state_33473__$1;
(statearr_33489_33512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (14))){
var inst_33466 = (state_33473[(2)]);
var inst_33467 = cljs.core.async.close_BANG_.call(null,out);
var state_33473__$1 = (function (){var statearr_33491 = state_33473;
(statearr_33491[(13)] = inst_33466);

return statearr_33491;
})();
var statearr_33492_33513 = state_33473__$1;
(statearr_33492_33513[(2)] = inst_33467);

(statearr_33492_33513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (10))){
var inst_33457 = (state_33473[(2)]);
var state_33473__$1 = state_33473;
var statearr_33493_33514 = state_33473__$1;
(statearr_33493_33514[(2)] = inst_33457);

(statearr_33493_33514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (8))){
var inst_33446 = (state_33473[(11)]);
var inst_33437 = (state_33473[(7)]);
var tmp33490 = inst_33437;
var inst_33437__$1 = tmp33490;
var inst_33438 = inst_33446;
var state_33473__$1 = (function (){var statearr_33494 = state_33473;
(statearr_33494[(7)] = inst_33437__$1);

(statearr_33494[(8)] = inst_33438);

return statearr_33494;
})();
var statearr_33495_33515 = state_33473__$1;
(statearr_33495_33515[(2)] = null);

(statearr_33495_33515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__31699__auto___33501,out))
;
return ((function (switch__31611__auto__,c__31699__auto___33501,out){
return (function() {
var cljs$core$async$state_machine__31612__auto__ = null;
var cljs$core$async$state_machine__31612__auto____0 = (function (){
var statearr_33496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33496[(0)] = cljs$core$async$state_machine__31612__auto__);

(statearr_33496[(1)] = (1));

return statearr_33496;
});
var cljs$core$async$state_machine__31612__auto____1 = (function (state_33473){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_33473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e33497){if((e33497 instanceof Object)){
var ex__31615__auto__ = e33497;
var statearr_33498_33516 = state_33473;
(statearr_33498_33516[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33517 = state_33473;
state_33473 = G__33517;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$state_machine__31612__auto__ = function(state_33473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31612__auto____1.call(this,state_33473);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31612__auto____0;
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31612__auto____1;
return cljs$core$async$state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto___33501,out))
})();
var state__31701__auto__ = (function (){var statearr_33499 = f__31700__auto__.call(null);
(statearr_33499[(6)] = c__31699__auto___33501);

return statearr_33499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto___33501,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33519 = arguments.length;
switch (G__33519) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31699__auto___33589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto___33589,out){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto___33589,out){
return (function (state_33561){
var state_val_33562 = (state_33561[(1)]);
if((state_val_33562 === (7))){
var inst_33557 = (state_33561[(2)]);
var state_33561__$1 = state_33561;
var statearr_33563_33590 = state_33561__$1;
(statearr_33563_33590[(2)] = inst_33557);

(statearr_33563_33590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (1))){
var inst_33520 = [];
var inst_33521 = inst_33520;
var inst_33522 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33561__$1 = (function (){var statearr_33564 = state_33561;
(statearr_33564[(7)] = inst_33521);

(statearr_33564[(8)] = inst_33522);

return statearr_33564;
})();
var statearr_33565_33591 = state_33561__$1;
(statearr_33565_33591[(2)] = null);

(statearr_33565_33591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (4))){
var inst_33525 = (state_33561[(9)]);
var inst_33525__$1 = (state_33561[(2)]);
var inst_33526 = (inst_33525__$1 == null);
var inst_33527 = cljs.core.not.call(null,inst_33526);
var state_33561__$1 = (function (){var statearr_33566 = state_33561;
(statearr_33566[(9)] = inst_33525__$1);

return statearr_33566;
})();
if(inst_33527){
var statearr_33567_33592 = state_33561__$1;
(statearr_33567_33592[(1)] = (5));

} else {
var statearr_33568_33593 = state_33561__$1;
(statearr_33568_33593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (15))){
var inst_33551 = (state_33561[(2)]);
var state_33561__$1 = state_33561;
var statearr_33569_33594 = state_33561__$1;
(statearr_33569_33594[(2)] = inst_33551);

(statearr_33569_33594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (13))){
var state_33561__$1 = state_33561;
var statearr_33570_33595 = state_33561__$1;
(statearr_33570_33595[(2)] = null);

(statearr_33570_33595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (6))){
var inst_33521 = (state_33561[(7)]);
var inst_33546 = inst_33521.length;
var inst_33547 = (inst_33546 > (0));
var state_33561__$1 = state_33561;
if(cljs.core.truth_(inst_33547)){
var statearr_33571_33596 = state_33561__$1;
(statearr_33571_33596[(1)] = (12));

} else {
var statearr_33572_33597 = state_33561__$1;
(statearr_33572_33597[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (3))){
var inst_33559 = (state_33561[(2)]);
var state_33561__$1 = state_33561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33561__$1,inst_33559);
} else {
if((state_val_33562 === (12))){
var inst_33521 = (state_33561[(7)]);
var inst_33549 = cljs.core.vec.call(null,inst_33521);
var state_33561__$1 = state_33561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33561__$1,(15),out,inst_33549);
} else {
if((state_val_33562 === (2))){
var state_33561__$1 = state_33561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33561__$1,(4),ch);
} else {
if((state_val_33562 === (11))){
var inst_33525 = (state_33561[(9)]);
var inst_33529 = (state_33561[(10)]);
var inst_33539 = (state_33561[(2)]);
var inst_33540 = [];
var inst_33541 = inst_33540.push(inst_33525);
var inst_33521 = inst_33540;
var inst_33522 = inst_33529;
var state_33561__$1 = (function (){var statearr_33573 = state_33561;
(statearr_33573[(11)] = inst_33539);

(statearr_33573[(12)] = inst_33541);

(statearr_33573[(7)] = inst_33521);

(statearr_33573[(8)] = inst_33522);

return statearr_33573;
})();
var statearr_33574_33598 = state_33561__$1;
(statearr_33574_33598[(2)] = null);

(statearr_33574_33598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (9))){
var inst_33521 = (state_33561[(7)]);
var inst_33537 = cljs.core.vec.call(null,inst_33521);
var state_33561__$1 = state_33561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33561__$1,(11),out,inst_33537);
} else {
if((state_val_33562 === (5))){
var inst_33525 = (state_33561[(9)]);
var inst_33529 = (state_33561[(10)]);
var inst_33522 = (state_33561[(8)]);
var inst_33529__$1 = f.call(null,inst_33525);
var inst_33530 = cljs.core._EQ_.call(null,inst_33529__$1,inst_33522);
var inst_33531 = cljs.core.keyword_identical_QMARK_.call(null,inst_33522,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33532 = (inst_33530) || (inst_33531);
var state_33561__$1 = (function (){var statearr_33575 = state_33561;
(statearr_33575[(10)] = inst_33529__$1);

return statearr_33575;
})();
if(cljs.core.truth_(inst_33532)){
var statearr_33576_33599 = state_33561__$1;
(statearr_33576_33599[(1)] = (8));

} else {
var statearr_33577_33600 = state_33561__$1;
(statearr_33577_33600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (14))){
var inst_33554 = (state_33561[(2)]);
var inst_33555 = cljs.core.async.close_BANG_.call(null,out);
var state_33561__$1 = (function (){var statearr_33579 = state_33561;
(statearr_33579[(13)] = inst_33554);

return statearr_33579;
})();
var statearr_33580_33601 = state_33561__$1;
(statearr_33580_33601[(2)] = inst_33555);

(statearr_33580_33601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (10))){
var inst_33544 = (state_33561[(2)]);
var state_33561__$1 = state_33561;
var statearr_33581_33602 = state_33561__$1;
(statearr_33581_33602[(2)] = inst_33544);

(statearr_33581_33602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (8))){
var inst_33525 = (state_33561[(9)]);
var inst_33529 = (state_33561[(10)]);
var inst_33521 = (state_33561[(7)]);
var inst_33534 = inst_33521.push(inst_33525);
var tmp33578 = inst_33521;
var inst_33521__$1 = tmp33578;
var inst_33522 = inst_33529;
var state_33561__$1 = (function (){var statearr_33582 = state_33561;
(statearr_33582[(14)] = inst_33534);

(statearr_33582[(7)] = inst_33521__$1);

(statearr_33582[(8)] = inst_33522);

return statearr_33582;
})();
var statearr_33583_33603 = state_33561__$1;
(statearr_33583_33603[(2)] = null);

(statearr_33583_33603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__31699__auto___33589,out))
;
return ((function (switch__31611__auto__,c__31699__auto___33589,out){
return (function() {
var cljs$core$async$state_machine__31612__auto__ = null;
var cljs$core$async$state_machine__31612__auto____0 = (function (){
var statearr_33584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33584[(0)] = cljs$core$async$state_machine__31612__auto__);

(statearr_33584[(1)] = (1));

return statearr_33584;
});
var cljs$core$async$state_machine__31612__auto____1 = (function (state_33561){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_33561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e33585){if((e33585 instanceof Object)){
var ex__31615__auto__ = e33585;
var statearr_33586_33604 = state_33561;
(statearr_33586_33604[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33605 = state_33561;
state_33561 = G__33605;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
cljs$core$async$state_machine__31612__auto__ = function(state_33561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31612__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31612__auto____1.call(this,state_33561);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31612__auto____0;
cljs$core$async$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31612__auto____1;
return cljs$core$async$state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto___33589,out))
})();
var state__31701__auto__ = (function (){var statearr_33587 = f__31700__auto__.call(null);
(statearr_33587[(6)] = c__31699__auto___33589);

return statearr_33587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto___33589,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1502751511666
