// Compiled by ClojureScript 1.9.854 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__29559__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29559 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29560__i = 0, G__29560__a = new Array(arguments.length -  0);
while (G__29560__i < G__29560__a.length) {G__29560__a[G__29560__i] = arguments[G__29560__i + 0]; ++G__29560__i;}
  args = new cljs.core.IndexedSeq(G__29560__a,0,null);
} 
return G__29559__delegate.call(this,args);};
G__29559.cljs$lang$maxFixedArity = 0;
G__29559.cljs$lang$applyTo = (function (arglist__29561){
var args = cljs.core.seq(arglist__29561);
return G__29559__delegate(args);
});
G__29559.cljs$core$IFn$_invoke$arity$variadic = G__29559__delegate;
return G__29559;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29562__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29562 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29563__i = 0, G__29563__a = new Array(arguments.length -  0);
while (G__29563__i < G__29563__a.length) {G__29563__a[G__29563__i] = arguments[G__29563__i + 0]; ++G__29563__i;}
  args = new cljs.core.IndexedSeq(G__29563__a,0,null);
} 
return G__29562__delegate.call(this,args);};
G__29562.cljs$lang$maxFixedArity = 0;
G__29562.cljs$lang$applyTo = (function (arglist__29564){
var args = cljs.core.seq(arglist__29564);
return G__29562__delegate(args);
});
G__29562.cljs$core$IFn$_invoke$arity$variadic = G__29562__delegate;
return G__29562;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1502751507348
