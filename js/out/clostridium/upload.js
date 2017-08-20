// Compiled by ClojureScript 1.9.854 {}
goog.provide('clostridium.upload');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clostridium.befunge');
goog.require('clostridium.common');
clostridium.upload.first_file = cljs.core.map.call(null,(function (e){
var target = e.currentTarget;
var file = (target.files[(0)]);
target.value = "";

return file;
}));
clostridium.upload.extract_result = cljs.core.map.call(null,(function (p1__44431_SHARP_){
return p1__44431_SHARP_.target.result;
}));
clostridium.upload.upload_reqs = cljs.core.async.chan.call(null,(1),clostridium.upload.first_file);
clostridium.upload.file_reads = cljs.core.async.chan.call(null,(1),clostridium.upload.extract_result);
clostridium.upload.put_upload = (function clostridium$upload$put_upload(e){
return cljs.core.async.put_BANG_.call(null,clostridium.upload.upload_reqs,e);
});
clostridium.upload.upload_btn = (function clostridium$upload$upload_btn(file_name){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Load file",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.hidden-xs-up","input.hidden-xs-up",-444613167),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),clostridium.upload.put_upload], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-upload.fa-lg","i.fa.fa-upload.fa-lg",1001949208)], null),(function (){var or__27939__auto__ = file_name;
if(cljs.core.truth_(or__27939__auto__)){
return or__27939__auto__;
} else {
return "";
}
})()], null),(cljs.core.truth_(file_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-times","i.fa.fa-times",923360983),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,clostridium.common.app_state,cljs.core.dissoc,new cljs.core.Keyword(null,"data","data",-232669377));
})], null)], null):null)], null);
});
var c__31146__auto___44456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31146__auto___44456){
return (function (){
var f__31147__auto__ = (function (){var switch__31125__auto__ = ((function (c__31146__auto___44456){
return (function (state_44446){
var state_val_44447 = (state_44446[(1)]);
if((state_val_44447 === (1))){
var state_44446__$1 = state_44446;
var statearr_44448_44457 = state_44446__$1;
(statearr_44448_44457[(2)] = null);

(statearr_44448_44457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44447 === (2))){
var inst_44434 = (new FileReader());
var state_44446__$1 = (function (){var statearr_44449 = state_44446;
(statearr_44449[(7)] = inst_44434);

return statearr_44449;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44446__$1,(4),clostridium.upload.upload_reqs);
} else {
if((state_val_44447 === (3))){
var inst_44444 = (state_44446[(2)]);
var state_44446__$1 = state_44446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44446__$1,inst_44444);
} else {
if((state_val_44447 === (4))){
var inst_44434 = (state_44446[(7)]);
var inst_44436 = (state_44446[(2)]);
var inst_44437 = inst_44436.name;
var inst_44438 = cljs.core.swap_BANG_.call(null,clostridium.common.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),inst_44437);
var inst_44439 = (function (){var reader = inst_44434;
var file = inst_44436;
return ((function (reader,file,inst_44434,inst_44436,inst_44437,inst_44438,state_val_44447,c__31146__auto___44456){
return (function (p1__44432_SHARP_){
return cljs.core.async.put_BANG_.call(null,clostridium.upload.file_reads,p1__44432_SHARP_);
});
;})(reader,file,inst_44434,inst_44436,inst_44437,inst_44438,state_val_44447,c__31146__auto___44456))
})();
var inst_44440 = inst_44434.onload = inst_44439;
var inst_44441 = inst_44434.readAsText(inst_44436);
var state_44446__$1 = (function (){var statearr_44450 = state_44446;
(statearr_44450[(8)] = inst_44438);

(statearr_44450[(9)] = inst_44440);

(statearr_44450[(10)] = inst_44441);

return statearr_44450;
})();
var statearr_44451_44458 = state_44446__$1;
(statearr_44451_44458[(2)] = null);

(statearr_44451_44458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__31146__auto___44456))
;
return ((function (switch__31125__auto__,c__31146__auto___44456){
return (function() {
var clostridium$upload$state_machine__31126__auto__ = null;
var clostridium$upload$state_machine__31126__auto____0 = (function (){
var statearr_44452 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44452[(0)] = clostridium$upload$state_machine__31126__auto__);

(statearr_44452[(1)] = (1));

return statearr_44452;
});
var clostridium$upload$state_machine__31126__auto____1 = (function (state_44446){
while(true){
var ret_value__31127__auto__ = (function (){try{while(true){
var result__31128__auto__ = switch__31125__auto__.call(null,state_44446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31128__auto__;
}
break;
}
}catch (e44453){if((e44453 instanceof Object)){
var ex__31129__auto__ = e44453;
var statearr_44454_44459 = state_44446;
(statearr_44454_44459[(5)] = ex__31129__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44460 = state_44446;
state_44446 = G__44460;
continue;
} else {
return ret_value__31127__auto__;
}
break;
}
});
clostridium$upload$state_machine__31126__auto__ = function(state_44446){
switch(arguments.length){
case 0:
return clostridium$upload$state_machine__31126__auto____0.call(this);
case 1:
return clostridium$upload$state_machine__31126__auto____1.call(this,state_44446);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
clostridium$upload$state_machine__31126__auto__.cljs$core$IFn$_invoke$arity$0 = clostridium$upload$state_machine__31126__auto____0;
clostridium$upload$state_machine__31126__auto__.cljs$core$IFn$_invoke$arity$1 = clostridium$upload$state_machine__31126__auto____1;
return clostridium$upload$state_machine__31126__auto__;
})()
;})(switch__31125__auto__,c__31146__auto___44456))
})();
var state__31148__auto__ = (function (){var statearr_44455 = f__31147__auto__.call(null);
(statearr_44455[(6)] = c__31146__auto___44456);

return statearr_44455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31148__auto__);
});})(c__31146__auto___44456))
);

clostridium.upload.load_program = (function clostridium$upload$load_program(data){
return cljs.core.swap_BANG_.call(null,clostridium.common.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"b","b",1482224470),clostridium.befunge.makeInitial.call(null,data,clostridium.common.print_js),new cljs.core.Keyword(null,"console","console",1228072057),"",new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),false,new cljs.core.Keyword(null,"firstcolumn","firstcolumn",1183771042),(0));
});
var c__31146__auto___44481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31146__auto___44481){
return (function (){
var f__31147__auto__ = (function (){var switch__31125__auto__ = ((function (c__31146__auto___44481){
return (function (state_44472){
var state_val_44473 = (state_44472[(1)]);
if((state_val_44473 === (1))){
var state_44472__$1 = state_44472;
var statearr_44474_44482 = state_44472__$1;
(statearr_44474_44482[(2)] = null);

(statearr_44474_44482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44473 === (2))){
var state_44472__$1 = state_44472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44472__$1,(4),clostridium.upload.file_reads);
} else {
if((state_val_44473 === (3))){
var inst_44470 = (state_44472[(2)]);
var state_44472__$1 = state_44472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44472__$1,inst_44470);
} else {
if((state_val_44473 === (4))){
var inst_44463 = (state_44472[(2)]);
var inst_44464 = cljs.core.swap_BANG_.call(null,clostridium.common.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),inst_44463);
var inst_44465 = cljs.core.deref.call(null,clostridium.common.app_state);
var inst_44466 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_44465);
var inst_44467 = clostridium.upload.load_program.call(null,inst_44466);
var state_44472__$1 = (function (){var statearr_44475 = state_44472;
(statearr_44475[(7)] = inst_44467);

(statearr_44475[(8)] = inst_44464);

return statearr_44475;
})();
var statearr_44476_44483 = state_44472__$1;
(statearr_44476_44483[(2)] = null);

(statearr_44476_44483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__31146__auto___44481))
;
return ((function (switch__31125__auto__,c__31146__auto___44481){
return (function() {
var clostridium$upload$state_machine__31126__auto__ = null;
var clostridium$upload$state_machine__31126__auto____0 = (function (){
var statearr_44477 = [null,null,null,null,null,null,null,null,null];
(statearr_44477[(0)] = clostridium$upload$state_machine__31126__auto__);

(statearr_44477[(1)] = (1));

return statearr_44477;
});
var clostridium$upload$state_machine__31126__auto____1 = (function (state_44472){
while(true){
var ret_value__31127__auto__ = (function (){try{while(true){
var result__31128__auto__ = switch__31125__auto__.call(null,state_44472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31128__auto__;
}
break;
}
}catch (e44478){if((e44478 instanceof Object)){
var ex__31129__auto__ = e44478;
var statearr_44479_44484 = state_44472;
(statearr_44479_44484[(5)] = ex__31129__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44485 = state_44472;
state_44472 = G__44485;
continue;
} else {
return ret_value__31127__auto__;
}
break;
}
});
clostridium$upload$state_machine__31126__auto__ = function(state_44472){
switch(arguments.length){
case 0:
return clostridium$upload$state_machine__31126__auto____0.call(this);
case 1:
return clostridium$upload$state_machine__31126__auto____1.call(this,state_44472);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
clostridium$upload$state_machine__31126__auto__.cljs$core$IFn$_invoke$arity$0 = clostridium$upload$state_machine__31126__auto____0;
clostridium$upload$state_machine__31126__auto__.cljs$core$IFn$_invoke$arity$1 = clostridium$upload$state_machine__31126__auto____1;
return clostridium$upload$state_machine__31126__auto__;
})()
;})(switch__31125__auto__,c__31146__auto___44481))
})();
var state__31148__auto__ = (function (){var statearr_44480 = f__31147__auto__.call(null);
(statearr_44480[(6)] = c__31146__auto___44481);

return statearr_44480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31148__auto__);
});})(c__31146__auto___44481))
);


//# sourceMappingURL=upload.js.map?rel=1503263488428
