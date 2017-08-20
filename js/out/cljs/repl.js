// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36286){
var map__36287 = p__36286;
var map__36287__$1 = ((((!((map__36287 == null)))?((((map__36287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36287):map__36287);
var m = map__36287__$1;
var n = cljs.core.get.call(null,map__36287__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36287__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36289_36311 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36290_36312 = null;
var count__36291_36313 = (0);
var i__36292_36314 = (0);
while(true){
if((i__36292_36314 < count__36291_36313)){
var f_36315 = cljs.core._nth.call(null,chunk__36290_36312,i__36292_36314);
cljs.core.println.call(null,"  ",f_36315);

var G__36316 = seq__36289_36311;
var G__36317 = chunk__36290_36312;
var G__36318 = count__36291_36313;
var G__36319 = (i__36292_36314 + (1));
seq__36289_36311 = G__36316;
chunk__36290_36312 = G__36317;
count__36291_36313 = G__36318;
i__36292_36314 = G__36319;
continue;
} else {
var temp__4657__auto___36320 = cljs.core.seq.call(null,seq__36289_36311);
if(temp__4657__auto___36320){
var seq__36289_36321__$1 = temp__4657__auto___36320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36289_36321__$1)){
var c__28773__auto___36322 = cljs.core.chunk_first.call(null,seq__36289_36321__$1);
var G__36323 = cljs.core.chunk_rest.call(null,seq__36289_36321__$1);
var G__36324 = c__28773__auto___36322;
var G__36325 = cljs.core.count.call(null,c__28773__auto___36322);
var G__36326 = (0);
seq__36289_36311 = G__36323;
chunk__36290_36312 = G__36324;
count__36291_36313 = G__36325;
i__36292_36314 = G__36326;
continue;
} else {
var f_36327 = cljs.core.first.call(null,seq__36289_36321__$1);
cljs.core.println.call(null,"  ",f_36327);

var G__36328 = cljs.core.next.call(null,seq__36289_36321__$1);
var G__36329 = null;
var G__36330 = (0);
var G__36331 = (0);
seq__36289_36311 = G__36328;
chunk__36290_36312 = G__36329;
count__36291_36313 = G__36330;
i__36292_36314 = G__36331;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36332 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27939__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27939__auto__)){
return or__27939__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36332);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36332)))?cljs.core.second.call(null,arglists_36332):arglists_36332));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36293_36333 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36294_36334 = null;
var count__36295_36335 = (0);
var i__36296_36336 = (0);
while(true){
if((i__36296_36336 < count__36295_36335)){
var vec__36297_36337 = cljs.core._nth.call(null,chunk__36294_36334,i__36296_36336);
var name_36338 = cljs.core.nth.call(null,vec__36297_36337,(0),null);
var map__36300_36339 = cljs.core.nth.call(null,vec__36297_36337,(1),null);
var map__36300_36340__$1 = ((((!((map__36300_36339 == null)))?((((map__36300_36339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36300_36339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36300_36339):map__36300_36339);
var doc_36341 = cljs.core.get.call(null,map__36300_36340__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36342 = cljs.core.get.call(null,map__36300_36340__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36338);

cljs.core.println.call(null," ",arglists_36342);

if(cljs.core.truth_(doc_36341)){
cljs.core.println.call(null," ",doc_36341);
} else {
}

var G__36343 = seq__36293_36333;
var G__36344 = chunk__36294_36334;
var G__36345 = count__36295_36335;
var G__36346 = (i__36296_36336 + (1));
seq__36293_36333 = G__36343;
chunk__36294_36334 = G__36344;
count__36295_36335 = G__36345;
i__36296_36336 = G__36346;
continue;
} else {
var temp__4657__auto___36347 = cljs.core.seq.call(null,seq__36293_36333);
if(temp__4657__auto___36347){
var seq__36293_36348__$1 = temp__4657__auto___36347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36293_36348__$1)){
var c__28773__auto___36349 = cljs.core.chunk_first.call(null,seq__36293_36348__$1);
var G__36350 = cljs.core.chunk_rest.call(null,seq__36293_36348__$1);
var G__36351 = c__28773__auto___36349;
var G__36352 = cljs.core.count.call(null,c__28773__auto___36349);
var G__36353 = (0);
seq__36293_36333 = G__36350;
chunk__36294_36334 = G__36351;
count__36295_36335 = G__36352;
i__36296_36336 = G__36353;
continue;
} else {
var vec__36302_36354 = cljs.core.first.call(null,seq__36293_36348__$1);
var name_36355 = cljs.core.nth.call(null,vec__36302_36354,(0),null);
var map__36305_36356 = cljs.core.nth.call(null,vec__36302_36354,(1),null);
var map__36305_36357__$1 = ((((!((map__36305_36356 == null)))?((((map__36305_36356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36305_36356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36305_36356):map__36305_36356);
var doc_36358 = cljs.core.get.call(null,map__36305_36357__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36359 = cljs.core.get.call(null,map__36305_36357__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36355);

cljs.core.println.call(null," ",arglists_36359);

if(cljs.core.truth_(doc_36358)){
cljs.core.println.call(null," ",doc_36358);
} else {
}

var G__36360 = cljs.core.next.call(null,seq__36293_36348__$1);
var G__36361 = null;
var G__36362 = (0);
var G__36363 = (0);
seq__36293_36333 = G__36360;
chunk__36294_36334 = G__36361;
count__36295_36335 = G__36362;
i__36296_36336 = G__36363;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36307 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36308 = null;
var count__36309 = (0);
var i__36310 = (0);
while(true){
if((i__36310 < count__36309)){
var role = cljs.core._nth.call(null,chunk__36308,i__36310);
var temp__4657__auto___36364__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36364__$1)){
var spec_36365 = temp__4657__auto___36364__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_36365));
} else {
}

var G__36366 = seq__36307;
var G__36367 = chunk__36308;
var G__36368 = count__36309;
var G__36369 = (i__36310 + (1));
seq__36307 = G__36366;
chunk__36308 = G__36367;
count__36309 = G__36368;
i__36310 = G__36369;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36307);
if(temp__4657__auto____$1){
var seq__36307__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36307__$1)){
var c__28773__auto__ = cljs.core.chunk_first.call(null,seq__36307__$1);
var G__36370 = cljs.core.chunk_rest.call(null,seq__36307__$1);
var G__36371 = c__28773__auto__;
var G__36372 = cljs.core.count.call(null,c__28773__auto__);
var G__36373 = (0);
seq__36307 = G__36370;
chunk__36308 = G__36371;
count__36309 = G__36372;
i__36310 = G__36373;
continue;
} else {
var role = cljs.core.first.call(null,seq__36307__$1);
var temp__4657__auto___36374__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36374__$2)){
var spec_36375 = temp__4657__auto___36374__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_36375));
} else {
}

var G__36376 = cljs.core.next.call(null,seq__36307__$1);
var G__36377 = null;
var G__36378 = (0);
var G__36379 = (0);
seq__36307 = G__36376;
chunk__36308 = G__36377;
count__36309 = G__36378;
i__36310 = G__36379;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1502751515324
