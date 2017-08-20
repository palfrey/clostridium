// Compiled by ClojureScript 1.9.854 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__29110__auto__ = [];
var len__29103__auto___36399 = arguments.length;
var i__29104__auto___36400 = (0);
while(true){
if((i__29104__auto___36400 < len__29103__auto___36399)){
args__29110__auto__.push((arguments[i__29104__auto___36400]));

var G__36401 = (i__29104__auto___36400 + (1));
i__29104__auto___36400 = G__36401;
continue;
} else {
}
break;
}

var argseq__29111__auto__ = ((((2) < args__29110__auto__.length))?(new cljs.core.IndexedSeq(args__29110__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29111__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__36391_36402 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__36392_36403 = null;
var count__36393_36404 = (0);
var i__36394_36405 = (0);
while(true){
if((i__36394_36405 < count__36393_36404)){
var k_36406 = cljs.core._nth.call(null,chunk__36392_36403,i__36394_36405);
e.setAttribute(cljs.core.name.call(null,k_36406),cljs.core.get.call(null,attrs,k_36406));

var G__36407 = seq__36391_36402;
var G__36408 = chunk__36392_36403;
var G__36409 = count__36393_36404;
var G__36410 = (i__36394_36405 + (1));
seq__36391_36402 = G__36407;
chunk__36392_36403 = G__36408;
count__36393_36404 = G__36409;
i__36394_36405 = G__36410;
continue;
} else {
var temp__4657__auto___36411 = cljs.core.seq.call(null,seq__36391_36402);
if(temp__4657__auto___36411){
var seq__36391_36412__$1 = temp__4657__auto___36411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36391_36412__$1)){
var c__28773__auto___36413 = cljs.core.chunk_first.call(null,seq__36391_36412__$1);
var G__36414 = cljs.core.chunk_rest.call(null,seq__36391_36412__$1);
var G__36415 = c__28773__auto___36413;
var G__36416 = cljs.core.count.call(null,c__28773__auto___36413);
var G__36417 = (0);
seq__36391_36402 = G__36414;
chunk__36392_36403 = G__36415;
count__36393_36404 = G__36416;
i__36394_36405 = G__36417;
continue;
} else {
var k_36418 = cljs.core.first.call(null,seq__36391_36412__$1);
e.setAttribute(cljs.core.name.call(null,k_36418),cljs.core.get.call(null,attrs,k_36418));

var G__36419 = cljs.core.next.call(null,seq__36391_36412__$1);
var G__36420 = null;
var G__36421 = (0);
var G__36422 = (0);
seq__36391_36402 = G__36419;
chunk__36392_36403 = G__36420;
count__36393_36404 = G__36421;
i__36394_36405 = G__36422;
continue;
}
} else {
}
}
break;
}

var seq__36395_36423 = cljs.core.seq.call(null,children);
var chunk__36396_36424 = null;
var count__36397_36425 = (0);
var i__36398_36426 = (0);
while(true){
if((i__36398_36426 < count__36397_36425)){
var ch_36427 = cljs.core._nth.call(null,chunk__36396_36424,i__36398_36426);
e.appendChild(ch_36427);

var G__36428 = seq__36395_36423;
var G__36429 = chunk__36396_36424;
var G__36430 = count__36397_36425;
var G__36431 = (i__36398_36426 + (1));
seq__36395_36423 = G__36428;
chunk__36396_36424 = G__36429;
count__36397_36425 = G__36430;
i__36398_36426 = G__36431;
continue;
} else {
var temp__4657__auto___36432 = cljs.core.seq.call(null,seq__36395_36423);
if(temp__4657__auto___36432){
var seq__36395_36433__$1 = temp__4657__auto___36432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36395_36433__$1)){
var c__28773__auto___36434 = cljs.core.chunk_first.call(null,seq__36395_36433__$1);
var G__36435 = cljs.core.chunk_rest.call(null,seq__36395_36433__$1);
var G__36436 = c__28773__auto___36434;
var G__36437 = cljs.core.count.call(null,c__28773__auto___36434);
var G__36438 = (0);
seq__36395_36423 = G__36435;
chunk__36396_36424 = G__36436;
count__36397_36425 = G__36437;
i__36398_36426 = G__36438;
continue;
} else {
var ch_36439 = cljs.core.first.call(null,seq__36395_36433__$1);
e.appendChild(ch_36439);

var G__36440 = cljs.core.next.call(null,seq__36395_36433__$1);
var G__36441 = null;
var G__36442 = (0);
var G__36443 = (0);
seq__36395_36423 = G__36440;
chunk__36396_36424 = G__36441;
count__36397_36425 = G__36442;
i__36398_36426 = G__36443;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq36388){
var G__36389 = cljs.core.first.call(null,seq36388);
var seq36388__$1 = cljs.core.next.call(null,seq36388);
var G__36390 = cljs.core.first.call(null,seq36388__$1);
var seq36388__$2 = cljs.core.next.call(null,seq36388__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__36389,G__36390,seq36388__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__28889__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28890__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28891__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28892__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28893__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__28889__auto__,prefer_table__28890__auto__,method_cache__28891__auto__,cached_hierarchy__28892__auto__,hierarchy__28893__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__28889__auto__,prefer_table__28890__auto__,method_cache__28891__auto__,cached_hierarchy__28892__auto__,hierarchy__28893__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28893__auto__,method_table__28889__auto__,prefer_table__28890__auto__,method_cache__28891__auto__,cached_hierarchy__28892__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_36444 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: left;")].join('')], null));
el_36444.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_36444.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_36444.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_36444);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__36445,st_map){
var map__36446 = p__36445;
var map__36446__$1 = ((((!((map__36446 == null)))?((((map__36446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36446):map__36446);
var container_el = cljs.core.get.call(null,map__36446__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__36446,map__36446__$1,container_el){
return (function (p__36448){
var vec__36449 = p__36448;
var k = cljs.core.nth.call(null,vec__36449,(0),null);
var v = cljs.core.nth.call(null,vec__36449,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__36446,map__36446__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__36452,dom_str){
var map__36453 = p__36452;
var map__36453__$1 = ((((!((map__36453 == null)))?((((map__36453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36453):map__36453);
var c = map__36453__$1;
var content_area_el = cljs.core.get.call(null,map__36453__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__36455){
var map__36456 = p__36455;
var map__36456__$1 = ((((!((map__36456 == null)))?((((map__36456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36456):map__36456);
var content_area_el = cljs.core.get.call(null,map__36456__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__31699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto__){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto__){
return (function (state_36473){
var state_val_36474 = (state_36473[(1)]);
if((state_val_36474 === (1))){
var inst_36458 = (state_36473[(7)]);
var inst_36458__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_36459 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_36460 = ["10px","10px","100%","68px","1.0"];
var inst_36461 = cljs.core.PersistentHashMap.fromArrays(inst_36459,inst_36460);
var inst_36462 = cljs.core.merge.call(null,inst_36461,style);
var inst_36463 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_36458__$1,inst_36462);
var inst_36464 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_36458__$1,msg);
var inst_36465 = cljs.core.async.timeout.call(null,(300));
var state_36473__$1 = (function (){var statearr_36475 = state_36473;
(statearr_36475[(8)] = inst_36463);

(statearr_36475[(7)] = inst_36458__$1);

(statearr_36475[(9)] = inst_36464);

return statearr_36475;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36473__$1,(2),inst_36465);
} else {
if((state_val_36474 === (2))){
var inst_36458 = (state_36473[(7)]);
var inst_36467 = (state_36473[(2)]);
var inst_36468 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_36469 = ["auto"];
var inst_36470 = cljs.core.PersistentHashMap.fromArrays(inst_36468,inst_36469);
var inst_36471 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_36458,inst_36470);
var state_36473__$1 = (function (){var statearr_36476 = state_36473;
(statearr_36476[(10)] = inst_36467);

return statearr_36476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36473__$1,inst_36471);
} else {
return null;
}
}
});})(c__31699__auto__))
;
return ((function (switch__31611__auto__,c__31699__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__31612__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__31612__auto____0 = (function (){
var statearr_36477 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36477[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__31612__auto__);

(statearr_36477[(1)] = (1));

return statearr_36477;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__31612__auto____1 = (function (state_36473){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_36473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e36478){if((e36478 instanceof Object)){
var ex__31615__auto__ = e36478;
var statearr_36479_36481 = state_36473;
(statearr_36479_36481[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36482 = state_36473;
state_36473 = G__36482;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__31612__auto__ = function(state_36473){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__31612__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__31612__auto____1.call(this,state_36473);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__31612__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__31612__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto__))
})();
var state__31701__auto__ = (function (){var statearr_36480 = f__31700__auto__.call(null);
(statearr_36480[(6)] = c__31699__auto__);

return statearr_36480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto__))
);

return c__31699__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__36484 = arguments.length;
switch (G__36484) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__36486){
var map__36487 = p__36486;
var map__36487__$1 = ((((!((map__36487 == null)))?((((map__36487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36487):map__36487);
var file = cljs.core.get.call(null,map__36487__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36487__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36487__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__27939__auto__ = file;
if(cljs.core.truth_(or__27939__auto__)){
return or__27939__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__36489){
var vec__36490 = p__36489;
var typ = cljs.core.nth.call(null,vec__36490,(0),null);
var line_number = cljs.core.nth.call(null,vec__36490,(1),null);
var line = cljs.core.nth.call(null,vec__36490,(2),null);
var pred__36493 = cljs.core._EQ_;
var expr__36494 = typ;
if(cljs.core.truth_(pred__36493.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__36494))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__36493.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__36494))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__36493.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__36494))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__36496_SHARP_){
return cljs.core.update_in.call(null,p1__36496_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__36497_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__36497_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__36500){
var map__36501 = p__36500;
var map__36501__$1 = ((((!((map__36501 == null)))?((((map__36501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36501):map__36501);
var exception = map__36501__$1;
var message = cljs.core.get.call(null,map__36501__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__36501__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__36501__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__36501__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__36501__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__36501__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__36501__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__36501__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__36501__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__36501__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__36501__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__27927__auto__ = file;
if(cljs.core.truth_(and__27927__auto__)){
return line;
} else {
return and__27927__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__36501,map__36501__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__36498_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36498_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__36501,map__36501__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__36501,map__36501__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__36499_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__36499_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__36499_SHARP_)))].join('');
});})(last_message,map__36501,map__36501__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__36503){
var map__36504 = p__36503;
var map__36504__$1 = ((((!((map__36504 == null)))?((((map__36504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36504):map__36504);
var file = cljs.core.get.call(null,map__36504__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36504__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36504__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__36507 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__36507__$1 = ((((!((map__36507 == null)))?((((map__36507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36507):map__36507);
var head = cljs.core.get.call(null,map__36507__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__36507__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__36507__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__36507__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__36507__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36507__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36507__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__36510){
var map__36511 = p__36510;
var map__36511__$1 = ((((!((map__36511 == null)))?((((map__36511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36511):map__36511);
var warning_data = map__36511__$1;
var file = cljs.core.get.call(null,map__36511__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36511__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36511__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__36511__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__36511__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__27927__auto__ = file;
if(cljs.core.truth_(and__27927__auto__)){
return line;
} else {
return and__27927__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__36511,map__36511__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__36509_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36509_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__36511,map__36511__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__36513 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__36513__$1 = ((((!((map__36513 == null)))?((((map__36513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36513):map__36513);
var head = cljs.core.get.call(null,map__36513__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__36513__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__36513__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__36513__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__36513__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36513__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36513__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__36515){
var map__36516 = p__36515;
var map__36516__$1 = ((((!((map__36516 == null)))?((((map__36516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36516):map__36516);
var warning_data = map__36516__$1;
var message = cljs.core.get.call(null,map__36516__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__36516__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36516__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36516__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36518 = message;
var G__36518__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36518),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36518);
var G__36518__$2 = (cljs.core.truth_((function (){var and__27927__auto__ = line;
if(cljs.core.truth_(and__27927__auto__)){
return column;
} else {
return and__27927__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36518__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__36518__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36518__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__36518__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__36519){
var map__36520 = p__36519;
var map__36520__$1 = ((((!((map__36520 == null)))?((((map__36520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36520):map__36520);
var warning_data = map__36520__$1;
var message = cljs.core.get.call(null,map__36520__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__36520__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36520__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36520__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__36522 = figwheel.client.heads_up.ensure_container.call(null);
var map__36522__$1 = ((((!((map__36522 == null)))?((((map__36522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36522):map__36522);
var content_area_el = cljs.core.get.call(null,map__36522__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__31699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto__){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto__){
return (function (state_36541){
var state_val_36542 = (state_36541[(1)]);
if((state_val_36542 === (1))){
var inst_36524 = (state_36541[(7)]);
var inst_36524__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_36525 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_36526 = ["0.0"];
var inst_36527 = cljs.core.PersistentHashMap.fromArrays(inst_36525,inst_36526);
var inst_36528 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_36524__$1,inst_36527);
var inst_36529 = cljs.core.async.timeout.call(null,(300));
var state_36541__$1 = (function (){var statearr_36543 = state_36541;
(statearr_36543[(7)] = inst_36524__$1);

(statearr_36543[(8)] = inst_36528);

return statearr_36543;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36541__$1,(2),inst_36529);
} else {
if((state_val_36542 === (2))){
var inst_36524 = (state_36541[(7)]);
var inst_36531 = (state_36541[(2)]);
var inst_36532 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_36533 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_36534 = cljs.core.PersistentHashMap.fromArrays(inst_36532,inst_36533);
var inst_36535 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_36524,inst_36534);
var inst_36536 = cljs.core.async.timeout.call(null,(200));
var state_36541__$1 = (function (){var statearr_36544 = state_36541;
(statearr_36544[(9)] = inst_36535);

(statearr_36544[(10)] = inst_36531);

return statearr_36544;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36541__$1,(3),inst_36536);
} else {
if((state_val_36542 === (3))){
var inst_36524 = (state_36541[(7)]);
var inst_36538 = (state_36541[(2)]);
var inst_36539 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_36524,"");
var state_36541__$1 = (function (){var statearr_36545 = state_36541;
(statearr_36545[(11)] = inst_36538);

return statearr_36545;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36541__$1,inst_36539);
} else {
return null;
}
}
}
});})(c__31699__auto__))
;
return ((function (switch__31611__auto__,c__31699__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__31612__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__31612__auto____0 = (function (){
var statearr_36546 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36546[(0)] = figwheel$client$heads_up$clear_$_state_machine__31612__auto__);

(statearr_36546[(1)] = (1));

return statearr_36546;
});
var figwheel$client$heads_up$clear_$_state_machine__31612__auto____1 = (function (state_36541){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_36541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e36547){if((e36547 instanceof Object)){
var ex__31615__auto__ = e36547;
var statearr_36548_36550 = state_36541;
(statearr_36548_36550[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36551 = state_36541;
state_36541 = G__36551;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__31612__auto__ = function(state_36541){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__31612__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__31612__auto____1.call(this,state_36541);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__31612__auto____0;
figwheel$client$heads_up$clear_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__31612__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto__))
})();
var state__31701__auto__ = (function (){var statearr_36549 = f__31700__auto__.call(null);
(statearr_36549[(6)] = c__31699__auto__);

return statearr_36549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto__))
);

return c__31699__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__31699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto__){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto__){
return (function (state_36562){
var state_val_36563 = (state_36562[(1)]);
if((state_val_36563 === (1))){
var inst_36552 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_36562__$1 = state_36562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36562__$1,(2),inst_36552);
} else {
if((state_val_36563 === (2))){
var inst_36554 = (state_36562[(2)]);
var inst_36555 = cljs.core.async.timeout.call(null,(400));
var state_36562__$1 = (function (){var statearr_36564 = state_36562;
(statearr_36564[(7)] = inst_36554);

return statearr_36564;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36562__$1,(3),inst_36555);
} else {
if((state_val_36563 === (3))){
var inst_36557 = (state_36562[(2)]);
var inst_36558 = figwheel.client.heads_up.clear.call(null);
var state_36562__$1 = (function (){var statearr_36565 = state_36562;
(statearr_36565[(8)] = inst_36557);

return statearr_36565;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36562__$1,(4),inst_36558);
} else {
if((state_val_36563 === (4))){
var inst_36560 = (state_36562[(2)]);
var state_36562__$1 = state_36562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36562__$1,inst_36560);
} else {
return null;
}
}
}
}
});})(c__31699__auto__))
;
return ((function (switch__31611__auto__,c__31699__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__31612__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__31612__auto____0 = (function (){
var statearr_36566 = [null,null,null,null,null,null,null,null,null];
(statearr_36566[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__31612__auto__);

(statearr_36566[(1)] = (1));

return statearr_36566;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__31612__auto____1 = (function (state_36562){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_36562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e36567){if((e36567 instanceof Object)){
var ex__31615__auto__ = e36567;
var statearr_36568_36570 = state_36562;
(statearr_36568_36570[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36571 = state_36562;
state_36562 = G__36571;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__31612__auto__ = function(state_36562){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__31612__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__31612__auto____1.call(this,state_36562);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__31612__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__31612__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto__))
})();
var state__31701__auto__ = (function (){var statearr_36569 = f__31700__auto__.call(null);
(statearr_36569[(6)] = c__31699__auto__);

return statearr_36569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto__))
);

return c__31699__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1502751515527
