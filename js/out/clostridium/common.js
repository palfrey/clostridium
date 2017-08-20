// Compiled by ClojureScript 1.9.854 {}
goog.provide('clostridium.common');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
if(typeof clostridium.common.app_state !== 'undefined'){
} else {
clostridium.common.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"console","console",1228072057),"",new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),false,new cljs.core.Keyword(null,"firstcolumn","firstcolumn",1183771042),(0),new cljs.core.Keyword(null,"example","example",-1755779144),"Hello World!",new cljs.core.Keyword(null,"ms-per-step","ms-per-step",-1360573043),(300)], null));
}
clostridium.common.count_return = (function clostridium$common$count_return(string){
var characters = string;
var ret_count = (0);
while(true){
if(cljs.core.empty_QMARK_.call(null,characters)){
return ret_count;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,characters),"\n")){
var G__43893 = cljs.core.subs.call(null,characters,(1));
var G__43894 = (ret_count + (1));
characters = G__43893;
ret_count = G__43894;
continue;
} else {
var G__43895 = cljs.core.subs.call(null,characters,(1));
var G__43896 = ret_count;
characters = G__43895;
ret_count = G__43896;
continue;

}
}
break;
}
});
clostridium.common.print_js = (function clostridium$common$print_js(msg){
return cljs.core.swap_BANG_.call(null,clostridium.common.app_state,cljs.core.update,new cljs.core.Keyword(null,"console","console",1228072057),(function (p1__43897_SHARP_){
var new_console = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43897_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
var returns = clostridium.common.count_return.call(null,new_console);
if((returns > (1))){
return cljs.core.subs.call(null,new_console,(clojure.string.index_of.call(null,new_console,"\n") + (1)));
} else {
return new_console;
}
}));
});

//# sourceMappingURL=common.js.map?rel=1503263219178
