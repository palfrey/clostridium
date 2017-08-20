// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('clostridium.upload');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('clostridium.befunge');
goog.require('clostridium.common');
clostridium.upload.first_file = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (e){
var target = e.currentTarget;
var file = (target.files[(0)]);
target.value = "";

return file;
}));
clostridium.upload.extract_result = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__17548_SHARP_){
return p1__17548_SHARP_.target.result;
}));
clostridium.upload.upload_reqs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),clostridium.upload.first_file);
clostridium.upload.file_reads = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),clostridium.upload.extract_result);
clostridium.upload.put_upload = (function clostridium$upload$put_upload(e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(clostridium.upload.upload_reqs,e);
});
clostridium.upload.upload_btn = (function clostridium$upload$upload_btn(file_name){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Load file",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$hidden_DASH_xs_DASH_up,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"file",cljs.core.cst$kw$on_DASH_change,clostridium.upload.put_upload], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_upload$fa_DASH_lg], null),(function (){var or__7625__auto__ = file_name;
if(cljs.core.truth_(or__7625__auto__)){
return or__7625__auto__;
} else {
return "";
}
})()], null),(cljs.core.truth_(file_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_times,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clostridium.common.app_state,cljs.core.dissoc,cljs.core.cst$kw$data);
})], null)], null):null)], null);
});
var c__15635__auto___17573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto___17573){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto___17573){
return (function (state_17563){
var state_val_17564 = (state_17563[(1)]);
if((state_val_17564 === (1))){
var state_17563__$1 = state_17563;
var statearr_17565_17574 = state_17563__$1;
(statearr_17565_17574[(2)] = null);

(statearr_17565_17574[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17564 === (2))){
var inst_17551 = (new FileReader());
var state_17563__$1 = (function (){var statearr_17566 = state_17563;
(statearr_17566[(7)] = inst_17551);

return statearr_17566;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17563__$1,(4),clostridium.upload.upload_reqs);
} else {
if((state_val_17564 === (3))){
var inst_17561 = (state_17563[(2)]);
var state_17563__$1 = state_17563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17563__$1,inst_17561);
} else {
if((state_val_17564 === (4))){
var inst_17551 = (state_17563[(7)]);
var inst_17553 = (state_17563[(2)]);
var inst_17554 = inst_17553.name;
var inst_17555 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clostridium.common.app_state,cljs.core.assoc,cljs.core.cst$kw$file_DASH_name,inst_17554);
var inst_17556 = (function (){var reader = inst_17551;
var file = inst_17553;
return ((function (reader,file,inst_17551,inst_17553,inst_17554,inst_17555,state_val_17564,c__15635__auto___17573){
return (function (p1__17549_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(clostridium.upload.file_reads,p1__17549_SHARP_);
});
;})(reader,file,inst_17551,inst_17553,inst_17554,inst_17555,state_val_17564,c__15635__auto___17573))
})();
var inst_17557 = inst_17551.onload = inst_17556;
var inst_17558 = inst_17551.readAsText(inst_17553);
var state_17563__$1 = (function (){var statearr_17567 = state_17563;
(statearr_17567[(8)] = inst_17555);

(statearr_17567[(9)] = inst_17558);

(statearr_17567[(10)] = inst_17557);

return statearr_17567;
})();
var statearr_17568_17575 = state_17563__$1;
(statearr_17568_17575[(2)] = null);

(statearr_17568_17575[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__15635__auto___17573))
;
return ((function (switch__15535__auto__,c__15635__auto___17573){
return (function() {
var clostridium$upload$state_machine__15536__auto__ = null;
var clostridium$upload$state_machine__15536__auto____0 = (function (){
var statearr_17569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17569[(0)] = clostridium$upload$state_machine__15536__auto__);

(statearr_17569[(1)] = (1));

return statearr_17569;
});
var clostridium$upload$state_machine__15536__auto____1 = (function (state_17563){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_17563);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e17570){if((e17570 instanceof Object)){
var ex__15539__auto__ = e17570;
var statearr_17571_17576 = state_17563;
(statearr_17571_17576[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17563);

return cljs.core.cst$kw$recur;
} else {
throw e17570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__17577 = state_17563;
state_17563 = G__17577;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
clostridium$upload$state_machine__15536__auto__ = function(state_17563){
switch(arguments.length){
case 0:
return clostridium$upload$state_machine__15536__auto____0.call(this);
case 1:
return clostridium$upload$state_machine__15536__auto____1.call(this,state_17563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
clostridium$upload$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = clostridium$upload$state_machine__15536__auto____0;
clostridium$upload$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = clostridium$upload$state_machine__15536__auto____1;
return clostridium$upload$state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto___17573))
})();
var state__15637__auto__ = (function (){var statearr_17572 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_17572[(6)] = c__15635__auto___17573);

return statearr_17572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto___17573))
);

clostridium.upload.load_program = (function clostridium$upload$load_program(data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(clostridium.common.app_state,cljs.core.assoc,cljs.core.cst$kw$b,clostridium.befunge.makeInitial(data,clostridium.common.print_js),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$console,"",cljs.core.cst$kw$auto_DASH_run,false,cljs.core.cst$kw$firstcolumn,(0)], 0));
});
var c__15635__auto___17598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto___17598){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto___17598){
return (function (state_17589){
var state_val_17590 = (state_17589[(1)]);
if((state_val_17590 === (1))){
var state_17589__$1 = state_17589;
var statearr_17591_17599 = state_17589__$1;
(statearr_17591_17599[(2)] = null);

(statearr_17591_17599[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17590 === (2))){
var state_17589__$1 = state_17589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17589__$1,(4),clostridium.upload.file_reads);
} else {
if((state_val_17590 === (3))){
var inst_17587 = (state_17589[(2)]);
var state_17589__$1 = state_17589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17589__$1,inst_17587);
} else {
if((state_val_17590 === (4))){
var inst_17580 = (state_17589[(2)]);
var inst_17581 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clostridium.common.app_state,cljs.core.assoc,cljs.core.cst$kw$data,inst_17580);
var inst_17582 = cljs.core.deref(clostridium.common.app_state);
var inst_17583 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(inst_17582);
var inst_17584 = clostridium.upload.load_program(inst_17583);
var state_17589__$1 = (function (){var statearr_17592 = state_17589;
(statearr_17592[(7)] = inst_17584);

(statearr_17592[(8)] = inst_17581);

return statearr_17592;
})();
var statearr_17593_17600 = state_17589__$1;
(statearr_17593_17600[(2)] = null);

(statearr_17593_17600[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__15635__auto___17598))
;
return ((function (switch__15535__auto__,c__15635__auto___17598){
return (function() {
var clostridium$upload$state_machine__15536__auto__ = null;
var clostridium$upload$state_machine__15536__auto____0 = (function (){
var statearr_17594 = [null,null,null,null,null,null,null,null,null];
(statearr_17594[(0)] = clostridium$upload$state_machine__15536__auto__);

(statearr_17594[(1)] = (1));

return statearr_17594;
});
var clostridium$upload$state_machine__15536__auto____1 = (function (state_17589){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_17589);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e17595){if((e17595 instanceof Object)){
var ex__15539__auto__ = e17595;
var statearr_17596_17601 = state_17589;
(statearr_17596_17601[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17589);

return cljs.core.cst$kw$recur;
} else {
throw e17595;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__17602 = state_17589;
state_17589 = G__17602;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
clostridium$upload$state_machine__15536__auto__ = function(state_17589){
switch(arguments.length){
case 0:
return clostridium$upload$state_machine__15536__auto____0.call(this);
case 1:
return clostridium$upload$state_machine__15536__auto____1.call(this,state_17589);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
clostridium$upload$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = clostridium$upload$state_machine__15536__auto____0;
clostridium$upload$state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = clostridium$upload$state_machine__15536__auto____1;
return clostridium$upload$state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto___17598))
})();
var state__15637__auto__ = (function (){var statearr_17597 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_17597[(6)] = c__15635__auto___17598);

return statearr_17597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto___17598))
);

