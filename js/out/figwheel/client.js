// Compiled by ClojureScript 1.9.854 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.12";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#js "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e36574){if((e36574 instanceof Error)){
var e = e36574;
return "Error: Unable to stringify";
} else {
throw e36574;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36577 = arguments.length;
switch (G__36577) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36575_SHARP_){
if(typeof p1__36575_SHARP_ === 'string'){
return p1__36575_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36575_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29110__auto__ = [];
var len__29103__auto___36580 = arguments.length;
var i__29104__auto___36581 = (0);
while(true){
if((i__29104__auto___36581 < len__29103__auto___36580)){
args__29110__auto__.push((arguments[i__29104__auto___36581]));

var G__36582 = (i__29104__auto___36581 + (1));
i__29104__auto___36581 = G__36582;
continue;
} else {
}
break;
}

var argseq__29111__auto__ = ((((0) < args__29110__auto__.length))?(new cljs.core.IndexedSeq(args__29110__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29111__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36579){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36579));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29110__auto__ = [];
var len__29103__auto___36584 = arguments.length;
var i__29104__auto___36585 = (0);
while(true){
if((i__29104__auto___36585 < len__29103__auto___36584)){
args__29110__auto__.push((arguments[i__29104__auto___36585]));

var G__36586 = (i__29104__auto___36585 + (1));
i__29104__auto___36585 = G__36586;
continue;
} else {
}
break;
}

var argseq__29111__auto__ = ((((0) < args__29110__auto__.length))?(new cljs.core.IndexedSeq(args__29110__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29111__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36583){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36583));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36587){
var map__36588 = p__36587;
var map__36588__$1 = ((((!((map__36588 == null)))?((((map__36588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36588):map__36588);
var message = cljs.core.get.call(null,map__36588__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36588__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27939__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27939__auto__)){
return or__27939__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27927__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27927__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27927__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31699__auto___36667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto___36667,ch){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto___36667,ch){
return (function (state_36639){
var state_val_36640 = (state_36639[(1)]);
if((state_val_36640 === (7))){
var inst_36635 = (state_36639[(2)]);
var state_36639__$1 = state_36639;
var statearr_36641_36668 = state_36639__$1;
(statearr_36641_36668[(2)] = inst_36635);

(statearr_36641_36668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (1))){
var state_36639__$1 = state_36639;
var statearr_36642_36669 = state_36639__$1;
(statearr_36642_36669[(2)] = null);

(statearr_36642_36669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (4))){
var inst_36592 = (state_36639[(7)]);
var inst_36592__$1 = (state_36639[(2)]);
var state_36639__$1 = (function (){var statearr_36643 = state_36639;
(statearr_36643[(7)] = inst_36592__$1);

return statearr_36643;
})();
if(cljs.core.truth_(inst_36592__$1)){
var statearr_36644_36670 = state_36639__$1;
(statearr_36644_36670[(1)] = (5));

} else {
var statearr_36645_36671 = state_36639__$1;
(statearr_36645_36671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (15))){
var inst_36599 = (state_36639[(8)]);
var inst_36614 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36599);
var inst_36615 = cljs.core.first.call(null,inst_36614);
var inst_36616 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36615);
var inst_36617 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36616)].join('');
var inst_36618 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36617);
var state_36639__$1 = state_36639;
var statearr_36646_36672 = state_36639__$1;
(statearr_36646_36672[(2)] = inst_36618);

(statearr_36646_36672[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (13))){
var inst_36623 = (state_36639[(2)]);
var state_36639__$1 = state_36639;
var statearr_36647_36673 = state_36639__$1;
(statearr_36647_36673[(2)] = inst_36623);

(statearr_36647_36673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (6))){
var state_36639__$1 = state_36639;
var statearr_36648_36674 = state_36639__$1;
(statearr_36648_36674[(2)] = null);

(statearr_36648_36674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (17))){
var inst_36621 = (state_36639[(2)]);
var state_36639__$1 = state_36639;
var statearr_36649_36675 = state_36639__$1;
(statearr_36649_36675[(2)] = inst_36621);

(statearr_36649_36675[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (3))){
var inst_36637 = (state_36639[(2)]);
var state_36639__$1 = state_36639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36639__$1,inst_36637);
} else {
if((state_val_36640 === (12))){
var inst_36598 = (state_36639[(9)]);
var inst_36612 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36598,opts);
var state_36639__$1 = state_36639;
if(cljs.core.truth_(inst_36612)){
var statearr_36650_36676 = state_36639__$1;
(statearr_36650_36676[(1)] = (15));

} else {
var statearr_36651_36677 = state_36639__$1;
(statearr_36651_36677[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (2))){
var state_36639__$1 = state_36639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36639__$1,(4),ch);
} else {
if((state_val_36640 === (11))){
var inst_36599 = (state_36639[(8)]);
var inst_36604 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36605 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36599);
var inst_36606 = cljs.core.async.timeout.call(null,(1000));
var inst_36607 = [inst_36605,inst_36606];
var inst_36608 = (new cljs.core.PersistentVector(null,2,(5),inst_36604,inst_36607,null));
var state_36639__$1 = state_36639;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36639__$1,(14),inst_36608);
} else {
if((state_val_36640 === (9))){
var inst_36599 = (state_36639[(8)]);
var inst_36625 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36626 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36599);
var inst_36627 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36626);
var inst_36628 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36627)].join('');
var inst_36629 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36628);
var state_36639__$1 = (function (){var statearr_36652 = state_36639;
(statearr_36652[(10)] = inst_36625);

return statearr_36652;
})();
var statearr_36653_36678 = state_36639__$1;
(statearr_36653_36678[(2)] = inst_36629);

(statearr_36653_36678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (5))){
var inst_36592 = (state_36639[(7)]);
var inst_36594 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36595 = (new cljs.core.PersistentArrayMap(null,2,inst_36594,null));
var inst_36596 = (new cljs.core.PersistentHashSet(null,inst_36595,null));
var inst_36597 = figwheel.client.focus_msgs.call(null,inst_36596,inst_36592);
var inst_36598 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36597);
var inst_36599 = cljs.core.first.call(null,inst_36597);
var inst_36600 = figwheel.client.autoload_QMARK_.call(null);
var state_36639__$1 = (function (){var statearr_36654 = state_36639;
(statearr_36654[(9)] = inst_36598);

(statearr_36654[(8)] = inst_36599);

return statearr_36654;
})();
if(cljs.core.truth_(inst_36600)){
var statearr_36655_36679 = state_36639__$1;
(statearr_36655_36679[(1)] = (8));

} else {
var statearr_36656_36680 = state_36639__$1;
(statearr_36656_36680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (14))){
var inst_36610 = (state_36639[(2)]);
var state_36639__$1 = state_36639;
var statearr_36657_36681 = state_36639__$1;
(statearr_36657_36681[(2)] = inst_36610);

(statearr_36657_36681[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (16))){
var state_36639__$1 = state_36639;
var statearr_36658_36682 = state_36639__$1;
(statearr_36658_36682[(2)] = null);

(statearr_36658_36682[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (10))){
var inst_36631 = (state_36639[(2)]);
var state_36639__$1 = (function (){var statearr_36659 = state_36639;
(statearr_36659[(11)] = inst_36631);

return statearr_36659;
})();
var statearr_36660_36683 = state_36639__$1;
(statearr_36660_36683[(2)] = null);

(statearr_36660_36683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36640 === (8))){
var inst_36598 = (state_36639[(9)]);
var inst_36602 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36598,opts);
var state_36639__$1 = state_36639;
if(cljs.core.truth_(inst_36602)){
var statearr_36661_36684 = state_36639__$1;
(statearr_36661_36684[(1)] = (11));

} else {
var statearr_36662_36685 = state_36639__$1;
(statearr_36662_36685[(1)] = (12));

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
});})(c__31699__auto___36667,ch))
;
return ((function (switch__31611__auto__,c__31699__auto___36667,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31612__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31612__auto____0 = (function (){
var statearr_36663 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36663[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31612__auto__);

(statearr_36663[(1)] = (1));

return statearr_36663;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31612__auto____1 = (function (state_36639){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_36639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e36664){if((e36664 instanceof Object)){
var ex__31615__auto__ = e36664;
var statearr_36665_36686 = state_36639;
(statearr_36665_36686[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36687 = state_36639;
state_36639 = G__36687;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31612__auto__ = function(state_36639){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31612__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31612__auto____1.call(this,state_36639);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31612__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31612__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto___36667,ch))
})();
var state__31701__auto__ = (function (){var statearr_36666 = f__31700__auto__.call(null);
(statearr_36666[(6)] = c__31699__auto___36667);

return statearr_36666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto___36667,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36688_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36688_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36690 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36690){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36689){if((e36689 instanceof Error)){
var e = e36689;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36690], null));
} else {
var e = e36689;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36690))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36691){
var map__36692 = p__36691;
var map__36692__$1 = ((((!((map__36692 == null)))?((((map__36692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36692):map__36692);
var opts = map__36692__$1;
var build_id = cljs.core.get.call(null,map__36692__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36692,map__36692__$1,opts,build_id){
return (function (p__36694){
var vec__36695 = p__36694;
var seq__36696 = cljs.core.seq.call(null,vec__36695);
var first__36697 = cljs.core.first.call(null,seq__36696);
var seq__36696__$1 = cljs.core.next.call(null,seq__36696);
var map__36698 = first__36697;
var map__36698__$1 = ((((!((map__36698 == null)))?((((map__36698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36698):map__36698);
var msg = map__36698__$1;
var msg_name = cljs.core.get.call(null,map__36698__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36696__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36695,seq__36696,first__36697,seq__36696__$1,map__36698,map__36698__$1,msg,msg_name,_,map__36692,map__36692__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36695,seq__36696,first__36697,seq__36696__$1,map__36698,map__36698__$1,msg,msg_name,_,map__36692,map__36692__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36692,map__36692__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36700){
var vec__36701 = p__36700;
var seq__36702 = cljs.core.seq.call(null,vec__36701);
var first__36703 = cljs.core.first.call(null,seq__36702);
var seq__36702__$1 = cljs.core.next.call(null,seq__36702);
var map__36704 = first__36703;
var map__36704__$1 = ((((!((map__36704 == null)))?((((map__36704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36704):map__36704);
var msg = map__36704__$1;
var msg_name = cljs.core.get.call(null,map__36704__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36702__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36706){
var map__36707 = p__36706;
var map__36707__$1 = ((((!((map__36707 == null)))?((((map__36707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36707.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36707):map__36707);
var on_compile_warning = cljs.core.get.call(null,map__36707__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36707__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36707,map__36707__$1,on_compile_warning,on_compile_fail){
return (function (p__36709){
var vec__36710 = p__36709;
var seq__36711 = cljs.core.seq.call(null,vec__36710);
var first__36712 = cljs.core.first.call(null,seq__36711);
var seq__36711__$1 = cljs.core.next.call(null,seq__36711);
var map__36713 = first__36712;
var map__36713__$1 = ((((!((map__36713 == null)))?((((map__36713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36713):map__36713);
var msg = map__36713__$1;
var msg_name = cljs.core.get.call(null,map__36713__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36711__$1;
var pred__36715 = cljs.core._EQ_;
var expr__36716 = msg_name;
if(cljs.core.truth_(pred__36715.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36716))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36715.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36716))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36707,map__36707__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto__,msg_hist,msg_names,msg){
return (function (state_36805){
var state_val_36806 = (state_36805[(1)]);
if((state_val_36806 === (7))){
var inst_36725 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
if(cljs.core.truth_(inst_36725)){
var statearr_36807_36854 = state_36805__$1;
(statearr_36807_36854[(1)] = (8));

} else {
var statearr_36808_36855 = state_36805__$1;
(statearr_36808_36855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (20))){
var inst_36799 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_36809_36856 = state_36805__$1;
(statearr_36809_36856[(2)] = inst_36799);

(statearr_36809_36856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (27))){
var inst_36795 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_36810_36857 = state_36805__$1;
(statearr_36810_36857[(2)] = inst_36795);

(statearr_36810_36857[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (1))){
var inst_36718 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36805__$1 = state_36805;
if(cljs.core.truth_(inst_36718)){
var statearr_36811_36858 = state_36805__$1;
(statearr_36811_36858[(1)] = (2));

} else {
var statearr_36812_36859 = state_36805__$1;
(statearr_36812_36859[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (24))){
var inst_36797 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_36813_36860 = state_36805__$1;
(statearr_36813_36860[(2)] = inst_36797);

(statearr_36813_36860[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (4))){
var inst_36803 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36805__$1,inst_36803);
} else {
if((state_val_36806 === (15))){
var inst_36801 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_36814_36861 = state_36805__$1;
(statearr_36814_36861[(2)] = inst_36801);

(statearr_36814_36861[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (21))){
var inst_36754 = (state_36805[(2)]);
var inst_36755 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36756 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36755);
var state_36805__$1 = (function (){var statearr_36815 = state_36805;
(statearr_36815[(7)] = inst_36754);

return statearr_36815;
})();
var statearr_36816_36862 = state_36805__$1;
(statearr_36816_36862[(2)] = inst_36756);

(statearr_36816_36862[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (31))){
var inst_36784 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36805__$1 = state_36805;
if(cljs.core.truth_(inst_36784)){
var statearr_36817_36863 = state_36805__$1;
(statearr_36817_36863[(1)] = (34));

} else {
var statearr_36818_36864 = state_36805__$1;
(statearr_36818_36864[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (32))){
var inst_36793 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_36819_36865 = state_36805__$1;
(statearr_36819_36865[(2)] = inst_36793);

(statearr_36819_36865[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (33))){
var inst_36780 = (state_36805[(2)]);
var inst_36781 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36782 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36781);
var state_36805__$1 = (function (){var statearr_36820 = state_36805;
(statearr_36820[(8)] = inst_36780);

return statearr_36820;
})();
var statearr_36821_36866 = state_36805__$1;
(statearr_36821_36866[(2)] = inst_36782);

(statearr_36821_36866[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (13))){
var inst_36739 = figwheel.client.heads_up.clear.call(null);
var state_36805__$1 = state_36805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36805__$1,(16),inst_36739);
} else {
if((state_val_36806 === (22))){
var inst_36760 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36761 = figwheel.client.heads_up.append_warning_message.call(null,inst_36760);
var state_36805__$1 = state_36805;
var statearr_36822_36867 = state_36805__$1;
(statearr_36822_36867[(2)] = inst_36761);

(statearr_36822_36867[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (36))){
var inst_36791 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_36823_36868 = state_36805__$1;
(statearr_36823_36868[(2)] = inst_36791);

(statearr_36823_36868[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (29))){
var inst_36771 = (state_36805[(2)]);
var inst_36772 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36773 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36772);
var state_36805__$1 = (function (){var statearr_36824 = state_36805;
(statearr_36824[(9)] = inst_36771);

return statearr_36824;
})();
var statearr_36825_36869 = state_36805__$1;
(statearr_36825_36869[(2)] = inst_36773);

(statearr_36825_36869[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (6))){
var inst_36720 = (state_36805[(10)]);
var state_36805__$1 = state_36805;
var statearr_36826_36870 = state_36805__$1;
(statearr_36826_36870[(2)] = inst_36720);

(statearr_36826_36870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (28))){
var inst_36767 = (state_36805[(2)]);
var inst_36768 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36769 = figwheel.client.heads_up.display_warning.call(null,inst_36768);
var state_36805__$1 = (function (){var statearr_36827 = state_36805;
(statearr_36827[(11)] = inst_36767);

return statearr_36827;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36805__$1,(29),inst_36769);
} else {
if((state_val_36806 === (25))){
var inst_36765 = figwheel.client.heads_up.clear.call(null);
var state_36805__$1 = state_36805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36805__$1,(28),inst_36765);
} else {
if((state_val_36806 === (34))){
var inst_36786 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36805__$1 = state_36805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36805__$1,(37),inst_36786);
} else {
if((state_val_36806 === (17))){
var inst_36745 = (state_36805[(2)]);
var inst_36746 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36747 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36746);
var state_36805__$1 = (function (){var statearr_36828 = state_36805;
(statearr_36828[(12)] = inst_36745);

return statearr_36828;
})();
var statearr_36829_36871 = state_36805__$1;
(statearr_36829_36871[(2)] = inst_36747);

(statearr_36829_36871[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (3))){
var inst_36737 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36805__$1 = state_36805;
if(cljs.core.truth_(inst_36737)){
var statearr_36830_36872 = state_36805__$1;
(statearr_36830_36872[(1)] = (13));

} else {
var statearr_36831_36873 = state_36805__$1;
(statearr_36831_36873[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (12))){
var inst_36733 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_36832_36874 = state_36805__$1;
(statearr_36832_36874[(2)] = inst_36733);

(statearr_36832_36874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (2))){
var inst_36720 = (state_36805[(10)]);
var inst_36720__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36805__$1 = (function (){var statearr_36833 = state_36805;
(statearr_36833[(10)] = inst_36720__$1);

return statearr_36833;
})();
if(cljs.core.truth_(inst_36720__$1)){
var statearr_36834_36875 = state_36805__$1;
(statearr_36834_36875[(1)] = (5));

} else {
var statearr_36835_36876 = state_36805__$1;
(statearr_36835_36876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (23))){
var inst_36763 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36805__$1 = state_36805;
if(cljs.core.truth_(inst_36763)){
var statearr_36836_36877 = state_36805__$1;
(statearr_36836_36877[(1)] = (25));

} else {
var statearr_36837_36878 = state_36805__$1;
(statearr_36837_36878[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (35))){
var state_36805__$1 = state_36805;
var statearr_36838_36879 = state_36805__$1;
(statearr_36838_36879[(2)] = null);

(statearr_36838_36879[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (19))){
var inst_36758 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36805__$1 = state_36805;
if(cljs.core.truth_(inst_36758)){
var statearr_36839_36880 = state_36805__$1;
(statearr_36839_36880[(1)] = (22));

} else {
var statearr_36840_36881 = state_36805__$1;
(statearr_36840_36881[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (11))){
var inst_36729 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_36841_36882 = state_36805__$1;
(statearr_36841_36882[(2)] = inst_36729);

(statearr_36841_36882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (9))){
var inst_36731 = figwheel.client.heads_up.clear.call(null);
var state_36805__$1 = state_36805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36805__$1,(12),inst_36731);
} else {
if((state_val_36806 === (5))){
var inst_36722 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36805__$1 = state_36805;
var statearr_36842_36883 = state_36805__$1;
(statearr_36842_36883[(2)] = inst_36722);

(statearr_36842_36883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (14))){
var inst_36749 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36805__$1 = state_36805;
if(cljs.core.truth_(inst_36749)){
var statearr_36843_36884 = state_36805__$1;
(statearr_36843_36884[(1)] = (18));

} else {
var statearr_36844_36885 = state_36805__$1;
(statearr_36844_36885[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (26))){
var inst_36775 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36805__$1 = state_36805;
if(cljs.core.truth_(inst_36775)){
var statearr_36845_36886 = state_36805__$1;
(statearr_36845_36886[(1)] = (30));

} else {
var statearr_36846_36887 = state_36805__$1;
(statearr_36846_36887[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (16))){
var inst_36741 = (state_36805[(2)]);
var inst_36742 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36743 = figwheel.client.heads_up.display_exception.call(null,inst_36742);
var state_36805__$1 = (function (){var statearr_36847 = state_36805;
(statearr_36847[(13)] = inst_36741);

return statearr_36847;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36805__$1,(17),inst_36743);
} else {
if((state_val_36806 === (30))){
var inst_36777 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36778 = figwheel.client.heads_up.display_warning.call(null,inst_36777);
var state_36805__$1 = state_36805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36805__$1,(33),inst_36778);
} else {
if((state_val_36806 === (10))){
var inst_36735 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_36848_36888 = state_36805__$1;
(statearr_36848_36888[(2)] = inst_36735);

(statearr_36848_36888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (18))){
var inst_36751 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36752 = figwheel.client.heads_up.display_exception.call(null,inst_36751);
var state_36805__$1 = state_36805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36805__$1,(21),inst_36752);
} else {
if((state_val_36806 === (37))){
var inst_36788 = (state_36805[(2)]);
var state_36805__$1 = state_36805;
var statearr_36849_36889 = state_36805__$1;
(statearr_36849_36889[(2)] = inst_36788);

(statearr_36849_36889[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36806 === (8))){
var inst_36727 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36805__$1 = state_36805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36805__$1,(11),inst_36727);
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
});})(c__31699__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31611__auto__,c__31699__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31612__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31612__auto____0 = (function (){
var statearr_36850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36850[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31612__auto__);

(statearr_36850[(1)] = (1));

return statearr_36850;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31612__auto____1 = (function (state_36805){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_36805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e36851){if((e36851 instanceof Object)){
var ex__31615__auto__ = e36851;
var statearr_36852_36890 = state_36805;
(statearr_36852_36890[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36891 = state_36805;
state_36805 = G__36891;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31612__auto__ = function(state_36805){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31612__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31612__auto____1.call(this,state_36805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31612__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31612__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto__,msg_hist,msg_names,msg))
})();
var state__31701__auto__ = (function (){var statearr_36853 = f__31700__auto__.call(null);
(statearr_36853[(6)] = c__31699__auto__);

return statearr_36853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto__,msg_hist,msg_names,msg))
);

return c__31699__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31699__auto___36920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto___36920,ch){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto___36920,ch){
return (function (state_36906){
var state_val_36907 = (state_36906[(1)]);
if((state_val_36907 === (1))){
var state_36906__$1 = state_36906;
var statearr_36908_36921 = state_36906__$1;
(statearr_36908_36921[(2)] = null);

(statearr_36908_36921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (2))){
var state_36906__$1 = state_36906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36906__$1,(4),ch);
} else {
if((state_val_36907 === (3))){
var inst_36904 = (state_36906[(2)]);
var state_36906__$1 = state_36906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36906__$1,inst_36904);
} else {
if((state_val_36907 === (4))){
var inst_36894 = (state_36906[(7)]);
var inst_36894__$1 = (state_36906[(2)]);
var state_36906__$1 = (function (){var statearr_36909 = state_36906;
(statearr_36909[(7)] = inst_36894__$1);

return statearr_36909;
})();
if(cljs.core.truth_(inst_36894__$1)){
var statearr_36910_36922 = state_36906__$1;
(statearr_36910_36922[(1)] = (5));

} else {
var statearr_36911_36923 = state_36906__$1;
(statearr_36911_36923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (5))){
var inst_36894 = (state_36906[(7)]);
var inst_36896 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36894);
var state_36906__$1 = state_36906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36906__$1,(8),inst_36896);
} else {
if((state_val_36907 === (6))){
var state_36906__$1 = state_36906;
var statearr_36912_36924 = state_36906__$1;
(statearr_36912_36924[(2)] = null);

(statearr_36912_36924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (7))){
var inst_36902 = (state_36906[(2)]);
var state_36906__$1 = state_36906;
var statearr_36913_36925 = state_36906__$1;
(statearr_36913_36925[(2)] = inst_36902);

(statearr_36913_36925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36907 === (8))){
var inst_36898 = (state_36906[(2)]);
var state_36906__$1 = (function (){var statearr_36914 = state_36906;
(statearr_36914[(8)] = inst_36898);

return statearr_36914;
})();
var statearr_36915_36926 = state_36906__$1;
(statearr_36915_36926[(2)] = null);

(statearr_36915_36926[(1)] = (2));


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
});})(c__31699__auto___36920,ch))
;
return ((function (switch__31611__auto__,c__31699__auto___36920,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31612__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31612__auto____0 = (function (){
var statearr_36916 = [null,null,null,null,null,null,null,null,null];
(statearr_36916[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31612__auto__);

(statearr_36916[(1)] = (1));

return statearr_36916;
});
var figwheel$client$heads_up_plugin_$_state_machine__31612__auto____1 = (function (state_36906){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_36906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e36917){if((e36917 instanceof Object)){
var ex__31615__auto__ = e36917;
var statearr_36918_36927 = state_36906;
(statearr_36918_36927[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36928 = state_36906;
state_36906 = G__36928;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31612__auto__ = function(state_36906){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31612__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31612__auto____1.call(this,state_36906);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31612__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31612__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto___36920,ch))
})();
var state__31701__auto__ = (function (){var statearr_36919 = f__31700__auto__.call(null);
(statearr_36919[(6)] = c__31699__auto___36920);

return statearr_36919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto___36920,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto__){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto__){
return (function (state_36934){
var state_val_36935 = (state_36934[(1)]);
if((state_val_36935 === (1))){
var inst_36929 = cljs.core.async.timeout.call(null,(3000));
var state_36934__$1 = state_36934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36934__$1,(2),inst_36929);
} else {
if((state_val_36935 === (2))){
var inst_36931 = (state_36934[(2)]);
var inst_36932 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36934__$1 = (function (){var statearr_36936 = state_36934;
(statearr_36936[(7)] = inst_36931);

return statearr_36936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36934__$1,inst_36932);
} else {
return null;
}
}
});})(c__31699__auto__))
;
return ((function (switch__31611__auto__,c__31699__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31612__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31612__auto____0 = (function (){
var statearr_36937 = [null,null,null,null,null,null,null,null];
(statearr_36937[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31612__auto__);

(statearr_36937[(1)] = (1));

return statearr_36937;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31612__auto____1 = (function (state_36934){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_36934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e36938){if((e36938 instanceof Object)){
var ex__31615__auto__ = e36938;
var statearr_36939_36941 = state_36934;
(statearr_36939_36941[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36942 = state_36934;
state_36934 = G__36942;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31612__auto__ = function(state_36934){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31612__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31612__auto____1.call(this,state_36934);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31612__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31612__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto__))
})();
var state__31701__auto__ = (function (){var statearr_36940 = f__31700__auto__.call(null);
(statearr_36940[(6)] = c__31699__auto__);

return statearr_36940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto__))
);

return c__31699__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36949){
var state_val_36950 = (state_36949[(1)]);
if((state_val_36950 === (1))){
var inst_36943 = cljs.core.async.timeout.call(null,(2000));
var state_36949__$1 = state_36949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36949__$1,(2),inst_36943);
} else {
if((state_val_36950 === (2))){
var inst_36945 = (state_36949[(2)]);
var inst_36946 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36947 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36946);
var state_36949__$1 = (function (){var statearr_36951 = state_36949;
(statearr_36951[(7)] = inst_36945);

return statearr_36951;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36949__$1,inst_36947);
} else {
return null;
}
}
});})(c__31699__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31611__auto__,c__31699__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31612__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31612__auto____0 = (function (){
var statearr_36952 = [null,null,null,null,null,null,null,null];
(statearr_36952[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31612__auto__);

(statearr_36952[(1)] = (1));

return statearr_36952;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31612__auto____1 = (function (state_36949){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_36949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e36953){if((e36953 instanceof Object)){
var ex__31615__auto__ = e36953;
var statearr_36954_36956 = state_36949;
(statearr_36954_36956[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36957 = state_36949;
state_36949 = G__36957;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31612__auto__ = function(state_36949){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31612__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31612__auto____1.call(this,state_36949);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31612__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31612__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31701__auto__ = (function (){var statearr_36955 = f__31700__auto__.call(null);
(statearr_36955[(6)] = c__31699__auto__);

return statearr_36955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto__,figwheel_version,temp__4657__auto__))
);

return c__31699__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36958){
var map__36959 = p__36958;
var map__36959__$1 = ((((!((map__36959 == null)))?((((map__36959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36959):map__36959);
var file = cljs.core.get.call(null,map__36959__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36959__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36959__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36961 = "";
var G__36961__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36961),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36961);
var G__36961__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36961__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36961__$1);
if(cljs.core.truth_((function (){var and__27927__auto__ = line;
if(cljs.core.truth_(and__27927__auto__)){
return column;
} else {
return and__27927__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36961__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36961__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36962){
var map__36963 = p__36962;
var map__36963__$1 = ((((!((map__36963 == null)))?((((map__36963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36963):map__36963);
var ed = map__36963__$1;
var formatted_exception = cljs.core.get.call(null,map__36963__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36963__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36963__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36965_36969 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36966_36970 = null;
var count__36967_36971 = (0);
var i__36968_36972 = (0);
while(true){
if((i__36968_36972 < count__36967_36971)){
var msg_36973 = cljs.core._nth.call(null,chunk__36966_36970,i__36968_36972);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36973);

var G__36974 = seq__36965_36969;
var G__36975 = chunk__36966_36970;
var G__36976 = count__36967_36971;
var G__36977 = (i__36968_36972 + (1));
seq__36965_36969 = G__36974;
chunk__36966_36970 = G__36975;
count__36967_36971 = G__36976;
i__36968_36972 = G__36977;
continue;
} else {
var temp__4657__auto___36978 = cljs.core.seq.call(null,seq__36965_36969);
if(temp__4657__auto___36978){
var seq__36965_36979__$1 = temp__4657__auto___36978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36965_36979__$1)){
var c__28773__auto___36980 = cljs.core.chunk_first.call(null,seq__36965_36979__$1);
var G__36981 = cljs.core.chunk_rest.call(null,seq__36965_36979__$1);
var G__36982 = c__28773__auto___36980;
var G__36983 = cljs.core.count.call(null,c__28773__auto___36980);
var G__36984 = (0);
seq__36965_36969 = G__36981;
chunk__36966_36970 = G__36982;
count__36967_36971 = G__36983;
i__36968_36972 = G__36984;
continue;
} else {
var msg_36985 = cljs.core.first.call(null,seq__36965_36979__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36985);

var G__36986 = cljs.core.next.call(null,seq__36965_36979__$1);
var G__36987 = null;
var G__36988 = (0);
var G__36989 = (0);
seq__36965_36969 = G__36986;
chunk__36966_36970 = G__36987;
count__36967_36971 = G__36988;
i__36968_36972 = G__36989;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36990){
var map__36991 = p__36990;
var map__36991__$1 = ((((!((map__36991 == null)))?((((map__36991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36991):map__36991);
var w = map__36991__$1;
var message = cljs.core.get.call(null,map__36991__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27927__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27927__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27927__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36993 = cljs.core.seq.call(null,plugins);
var chunk__36994 = null;
var count__36995 = (0);
var i__36996 = (0);
while(true){
if((i__36996 < count__36995)){
var vec__36997 = cljs.core._nth.call(null,chunk__36994,i__36996);
var k = cljs.core.nth.call(null,vec__36997,(0),null);
var plugin = cljs.core.nth.call(null,vec__36997,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37003 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36993,chunk__36994,count__36995,i__36996,pl_37003,vec__36997,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37003.call(null,msg_hist);
});})(seq__36993,chunk__36994,count__36995,i__36996,pl_37003,vec__36997,k,plugin))
);
} else {
}

var G__37004 = seq__36993;
var G__37005 = chunk__36994;
var G__37006 = count__36995;
var G__37007 = (i__36996 + (1));
seq__36993 = G__37004;
chunk__36994 = G__37005;
count__36995 = G__37006;
i__36996 = G__37007;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36993);
if(temp__4657__auto__){
var seq__36993__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36993__$1)){
var c__28773__auto__ = cljs.core.chunk_first.call(null,seq__36993__$1);
var G__37008 = cljs.core.chunk_rest.call(null,seq__36993__$1);
var G__37009 = c__28773__auto__;
var G__37010 = cljs.core.count.call(null,c__28773__auto__);
var G__37011 = (0);
seq__36993 = G__37008;
chunk__36994 = G__37009;
count__36995 = G__37010;
i__36996 = G__37011;
continue;
} else {
var vec__37000 = cljs.core.first.call(null,seq__36993__$1);
var k = cljs.core.nth.call(null,vec__37000,(0),null);
var plugin = cljs.core.nth.call(null,vec__37000,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37012 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36993,chunk__36994,count__36995,i__36996,pl_37012,vec__37000,k,plugin,seq__36993__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37012.call(null,msg_hist);
});})(seq__36993,chunk__36994,count__36995,i__36996,pl_37012,vec__37000,k,plugin,seq__36993__$1,temp__4657__auto__))
);
} else {
}

var G__37013 = cljs.core.next.call(null,seq__36993__$1);
var G__37014 = null;
var G__37015 = (0);
var G__37016 = (0);
seq__36993 = G__37013;
chunk__36994 = G__37014;
count__36995 = G__37015;
i__36996 = G__37016;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37018 = arguments.length;
switch (G__37018) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37019_37024 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37020_37025 = null;
var count__37021_37026 = (0);
var i__37022_37027 = (0);
while(true){
if((i__37022_37027 < count__37021_37026)){
var msg_37028 = cljs.core._nth.call(null,chunk__37020_37025,i__37022_37027);
figwheel.client.socket.handle_incoming_message.call(null,msg_37028);

var G__37029 = seq__37019_37024;
var G__37030 = chunk__37020_37025;
var G__37031 = count__37021_37026;
var G__37032 = (i__37022_37027 + (1));
seq__37019_37024 = G__37029;
chunk__37020_37025 = G__37030;
count__37021_37026 = G__37031;
i__37022_37027 = G__37032;
continue;
} else {
var temp__4657__auto___37033 = cljs.core.seq.call(null,seq__37019_37024);
if(temp__4657__auto___37033){
var seq__37019_37034__$1 = temp__4657__auto___37033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37019_37034__$1)){
var c__28773__auto___37035 = cljs.core.chunk_first.call(null,seq__37019_37034__$1);
var G__37036 = cljs.core.chunk_rest.call(null,seq__37019_37034__$1);
var G__37037 = c__28773__auto___37035;
var G__37038 = cljs.core.count.call(null,c__28773__auto___37035);
var G__37039 = (0);
seq__37019_37024 = G__37036;
chunk__37020_37025 = G__37037;
count__37021_37026 = G__37038;
i__37022_37027 = G__37039;
continue;
} else {
var msg_37040 = cljs.core.first.call(null,seq__37019_37034__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37040);

var G__37041 = cljs.core.next.call(null,seq__37019_37034__$1);
var G__37042 = null;
var G__37043 = (0);
var G__37044 = (0);
seq__37019_37024 = G__37041;
chunk__37020_37025 = G__37042;
count__37021_37026 = G__37043;
i__37022_37027 = G__37044;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29110__auto__ = [];
var len__29103__auto___37049 = arguments.length;
var i__29104__auto___37050 = (0);
while(true){
if((i__29104__auto___37050 < len__29103__auto___37049)){
args__29110__auto__.push((arguments[i__29104__auto___37050]));

var G__37051 = (i__29104__auto___37050 + (1));
i__29104__auto___37050 = G__37051;
continue;
} else {
}
break;
}

var argseq__29111__auto__ = ((((0) < args__29110__auto__.length))?(new cljs.core.IndexedSeq(args__29110__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29111__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37046){
var map__37047 = p__37046;
var map__37047__$1 = ((((!((map__37047 == null)))?((((map__37047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37047):map__37047);
var opts = map__37047__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37045){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37045));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37052){if((e37052 instanceof Error)){
var e = e37052;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37052;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37053){
var map__37054 = p__37053;
var map__37054__$1 = ((((!((map__37054 == null)))?((((map__37054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37054):map__37054);
var msg_name = cljs.core.get.call(null,map__37054__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1502751515839
