// Compiled by ClojureScript 1.9.854 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('clostridium.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__44585__delegate = function (x){
if(cljs.core.truth_(clostridium.core.reload)){
return cljs.core.apply.call(null,clostridium.core.reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'clostridium.core/reload' is missing");
}
};
var G__44585 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__44586__i = 0, G__44586__a = new Array(arguments.length -  0);
while (G__44586__i < G__44586__a.length) {G__44586__a[G__44586__i] = arguments[G__44586__i + 0]; ++G__44586__i;}
  x = new cljs.core.IndexedSeq(G__44586__a,0,null);
} 
return G__44585__delegate.call(this,x);};
G__44585.cljs$lang$maxFixedArity = 0;
G__44585.cljs$lang$applyTo = (function (arglist__44587){
var x = cljs.core.seq(arglist__44587);
return G__44585__delegate(x);
});
G__44585.cljs$core$IFn$_invoke$arity$variadic = G__44585__delegate;
return G__44585;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1503263488672
