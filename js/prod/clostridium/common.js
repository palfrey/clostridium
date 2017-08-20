// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('clostridium.common');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
if(typeof clostridium.common.app_state !== 'undefined'){
} else {
clostridium.common.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$console,"",cljs.core.cst$kw$auto_DASH_run,false,cljs.core.cst$kw$firstcolumn,(0),cljs.core.cst$kw$example,"Hello World!",cljs.core.cst$kw$ms_DASH_per_DASH_step,(300)], null));
}
clostridium.common.count_return = (function clostridium$common$count_return(string){
var characters = string;
var ret_count = (0);
while(true){
if(cljs.core.empty_QMARK_(characters)){
return ret_count;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(characters),"\n")){
var G__14307 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(characters,(1));
var G__14308 = (ret_count + (1));
characters = G__14307;
ret_count = G__14308;
continue;
} else {
var G__14309 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(characters,(1));
var G__14310 = ret_count;
characters = G__14309;
ret_count = G__14310;
continue;

}
}
break;
}
});
clostridium.common.print_js = (function clostridium$common$print_js(msg){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clostridium.common.app_state,cljs.core.update,cljs.core.cst$kw$console,(function (p1__14311_SHARP_){
var new_console = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14311_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
var returns = clostridium.common.count_return(new_console);
if((returns > (1))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new_console,(clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(new_console,"\n") + (1)));
} else {
return new_console;
}
}));
});
