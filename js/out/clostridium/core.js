// Compiled by ClojureScript 1.9.854 {}
goog.provide('clostridium.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clostridium.befunge');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('clojure.contrib.humanize');
goog.require('cljs.core.async');
goog.require('clostridium.common');
goog.require('clostridium.upload');
goog.require('clojure.string');
clostridium.core.examples = new cljs.core.PersistentArrayMap(null, 4, ["Hello World!","64+\"!dlroW ,olleH\">:#,_@","Quine","01->1# +# :# 0# g# ,# :# 5# 8# *# 4# +# -# _@","99 bottles of beer",clojure.string.join.call(null,"\n",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\"d\"4vv\"take one down, pass it around\"<>",":-2*< v \"e wall\"_v#\\0`1%4./4::_0#%>#4^#","\\4>/|>:#,_$:55+:,\\4%3-!*0\\>:>#,_$$:1+\\1",">>>#@^>$\"ht no \"\\>\\\"reeb fo selttob\">>>"], null)),"Y-test",clojure.string.join.call(null,"\n",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y0\" :sgalF\">:#,_$.a, 0\" :llec rep setyB\">:#,_$.a, 0\" :reterpretnI\">:#,_$.\"V \",,v",".a,0\" :mgidaraP gnitarepO\">:#,_$.a,0\" :rotarepes htaP\">:#,_$,a,0\" :snoisnemiD\"v>",">:#,_$.a,\" :PI\",,,,..'@,\\..\" atled\",,,,,,\\..\" sfo\",,,,\\..a,0\" :xam ,niM\">:#,_v>","$\\..\" -\",,\\..a,0\" :emiT\">:#,_$..a, 0\" :skcatS\">:#,_$.a,.a, 0\" :sgrA\">:#,_$  v>",">:#v_$ :#v_$ 0\" :vnE\">:#,_$ >:#v_a,@                                        >","v,#    <                     ,",">>:#,_v                      >:#,_v","^,a    $<                   ^,a     <"], null))], null);
clostridium.core.on_window_resize = (function clostridium$core$on_window_resize(evt){
var maxwidth = (parseInt(window.getComputedStyle(document.getElementById("content")).width) - (20));
var maxcolumns = Math.floor((maxwidth / (39)));
var firstcolumn = new cljs.core.Keyword(null,"firstcolumn","firstcolumn",1183771042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clostridium.common.app_state));
var lastcolumn = ((firstcolumn + maxcolumns) + (-1));
return cljs.core.swap_BANG_.call(null,clostridium.common.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),maxcolumns);
});
clostridium.core.grid = (function clostridium$core$grid(){
var b = new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clostridium.common.app_state));
var data = new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(b);
var pc = new cljs.core.Keyword(null,"pc","pc",512913453).cljs$core$IFn$_invoke$arity$1(b);
var maxcolumns = new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clostridium.common.app_state));
var firstcolumn = new cljs.core.Keyword(null,"firstcolumn","firstcolumn",1183771042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clostridium.common.app_state));
var lastcolumn = ((firstcolumn + maxcolumns) + (-1));
var validcolumn = ((function (b,data,pc,maxcolumns,firstcolumn,lastcolumn){
return (function (column){
return ((column >= firstcolumn)) && ((column < lastcolumn));
});})(b,data,pc,maxcolumns,firstcolumn,lastcolumn))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"square"], null),goog.string.unescapeEntities("&nbsp;")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"gap"], null))], null),cljs.core.doall.call(null,(function (){var iter__28742__auto__ = ((function (b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function clostridium$core$grid_$_iter__44489(s__44490){
return (new cljs.core.LazySeq(null,((function (b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function (){
var s__44490__$1 = s__44490;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44490__$1);
if(temp__4657__auto__){
var s__44490__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44490__$2)){
var c__28740__auto__ = cljs.core.chunk_first.call(null,s__44490__$2);
var size__28741__auto__ = cljs.core.count.call(null,c__28740__auto__);
var b__44492 = cljs.core.chunk_buffer.call(null,size__28741__auto__);
if((function (){var i__44491 = (0);
while(true){
if((i__44491 < size__28741__auto__)){
var column = cljs.core._nth.call(null,c__28740__auto__,i__44491);
if(cljs.core.truth_(validcolumn.call(null,column))){
cljs.core.chunk_append.call(null,b__44492,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"square column"], null),column], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),goog.string.format("col-%d",column)], null)));

var G__44509 = (i__44491 + (1));
i__44491 = G__44509;
continue;
} else {
var G__44510 = (i__44491 + (1));
i__44491 = G__44510;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44492),clostridium$core$grid_$_iter__44489.call(null,cljs.core.chunk_rest.call(null,s__44490__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44492),null);
}
} else {
var column = cljs.core.first.call(null,s__44490__$2);
if(cljs.core.truth_(validcolumn.call(null,column))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"square column"], null),column], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),goog.string.format("col-%d",column)], null)),clostridium$core$grid_$_iter__44489.call(null,cljs.core.rest.call(null,s__44490__$2)));
} else {
var G__44511 = cljs.core.rest.call(null,s__44490__$2);
s__44490__$1 = G__44511;
continue;
}
}
} else {
return null;
}
break;
}
});})(b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
,null,null));
});})(b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
;
return iter__28742__auto__.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,cljs.core.reverse.call(null,cljs.core.sort_by.call(null,((function (iter__28742__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function (p1__44488_SHARP_){
return cljs.core.count.call(null,cljs.core.keys.call(null,p1__44488_SHARP_));
});})(iter__28742__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
,cljs.core.vals.call(null,data)))))));
})()),cljs.core.doall.call(null,(function (){var iter__28742__auto__ = ((function (b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function clostridium$core$grid_$_iter__44493(s__44494){
return (new cljs.core.LazySeq(null,((function (b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function (){
var s__44494__$1 = s__44494;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44494__$1);
if(temp__4657__auto__){
var s__44494__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44494__$2)){
var c__28740__auto__ = cljs.core.chunk_first.call(null,s__44494__$2);
var size__28741__auto__ = cljs.core.count.call(null,c__28740__auto__);
var b__44496 = cljs.core.chunk_buffer.call(null,size__28741__auto__);
if((function (){var i__44495 = (0);
while(true){
if((i__44495 < size__28741__auto__)){
var row = cljs.core._nth.call(null,c__28740__auto__,i__44495);
cljs.core.chunk_append.call(null,b__44496,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1877104959),"both"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),goog.string.format("split-%d",row)], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"square row"], null),row], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),goog.string.format("row-%d",row)], null))], null),cljs.core.doall.call(null,(function (){var iter__28742__auto__ = ((function (i__44495,row,c__28740__auto__,size__28741__auto__,b__44496,s__44494__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function clostridium$core$grid_$_iter__44493_$_iter__44497(s__44498){
return (new cljs.core.LazySeq(null,((function (i__44495,row,c__28740__auto__,size__28741__auto__,b__44496,s__44494__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function (){
var s__44498__$1 = s__44498;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__44498__$1);
if(temp__4657__auto____$1){
var xs__5205__auto__ = temp__4657__auto____$1;
var column = cljs.core.first.call(null,xs__5205__auto__);
var iterys__28738__auto__ = ((function (s__44498__$1,i__44495,column,xs__5205__auto__,temp__4657__auto____$1,row,c__28740__auto__,size__28741__auto__,b__44496,s__44494__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function clostridium$core$grid_$_iter__44493_$_iter__44497_$_iter__44499(s__44500){
return (new cljs.core.LazySeq(null,((function (s__44498__$1,i__44495,column,xs__5205__auto__,temp__4657__auto____$1,row,c__28740__auto__,size__28741__auto__,b__44496,s__44494__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function (){
var s__44500__$1 = s__44500;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__44500__$1);
if(temp__4657__auto____$2){
var s__44500__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44500__$2)){
var c__28740__auto____$1 = cljs.core.chunk_first.call(null,s__44500__$2);
var size__28741__auto____$1 = cljs.core.count.call(null,c__28740__auto____$1);
var b__44502 = cljs.core.chunk_buffer.call(null,size__28741__auto____$1);
if((function (){var i__44501 = (0);
while(true){
if((i__44501 < size__28741__auto____$1)){
var value = cljs.core._nth.call(null,c__28740__auto____$1,i__44501);
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-")].join('');
if(cljs.core.truth_(validcolumn.call(null,column))){
cljs.core.chunk_append.call(null,b__44502,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,pc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column,row], null)))?"active ":"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("square")].join('')], null),((cljs.core._EQ_.call(null,value," "))?goog.string.unescapeEntities("&nbsp;"):value)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("sq")].join('')], null)));

var G__44512 = (i__44501 + (1));
i__44501 = G__44512;
continue;
} else {
var G__44513 = (i__44501 + (1));
i__44501 = G__44513;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44502),clostridium$core$grid_$_iter__44493_$_iter__44497_$_iter__44499.call(null,cljs.core.chunk_rest.call(null,s__44500__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44502),null);
}
} else {
var value = cljs.core.first.call(null,s__44500__$2);
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-")].join('');
if(cljs.core.truth_(validcolumn.call(null,column))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,pc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column,row], null)))?"active ":"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("square")].join('')], null),((cljs.core._EQ_.call(null,value," "))?goog.string.unescapeEntities("&nbsp;"):value)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("sq")].join('')], null)),clostridium$core$grid_$_iter__44493_$_iter__44497_$_iter__44499.call(null,cljs.core.rest.call(null,s__44500__$2)));
} else {
var G__44514 = cljs.core.rest.call(null,s__44500__$2);
s__44500__$1 = G__44514;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__44498__$1,i__44495,column,xs__5205__auto__,temp__4657__auto____$1,row,c__28740__auto__,size__28741__auto__,b__44496,s__44494__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
,null,null));
});})(s__44498__$1,i__44495,column,xs__5205__auto__,temp__4657__auto____$1,row,c__28740__auto__,size__28741__auto__,b__44496,s__44494__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
;
var fs__28739__auto__ = cljs.core.seq.call(null,iterys__28738__auto__.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data,row),column)));
if(fs__28739__auto__){
return cljs.core.concat.call(null,fs__28739__auto__,clostridium$core$grid_$_iter__44493_$_iter__44497.call(null,cljs.core.rest.call(null,s__44498__$1)));
} else {
var G__44515 = cljs.core.rest.call(null,s__44498__$1);
s__44498__$1 = G__44515;
continue;
}
} else {
return null;
}
break;
}
});})(i__44495,row,c__28740__auto__,size__28741__auto__,b__44496,s__44494__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
,null,null));
});})(i__44495,row,c__28740__auto__,size__28741__auto__,b__44496,s__44494__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
;
return iter__28742__auto__.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cljs.core.get.call(null,data,row))));
})())));

var G__44516 = (i__44495 + (1));
i__44495 = G__44516;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44496),clostridium$core$grid_$_iter__44493.call(null,cljs.core.chunk_rest.call(null,s__44494__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44496),null);
}
} else {
var row = cljs.core.first.call(null,s__44494__$2);
return cljs.core.cons.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clear","clear",1877104959),"both"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),goog.string.format("split-%d",row)], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"square row"], null),row], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),goog.string.format("row-%d",row)], null))], null),cljs.core.doall.call(null,(function (){var iter__28742__auto__ = ((function (row,s__44494__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function clostridium$core$grid_$_iter__44493_$_iter__44503(s__44504){
return (new cljs.core.LazySeq(null,((function (row,s__44494__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function (){
var s__44504__$1 = s__44504;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__44504__$1);
if(temp__4657__auto____$1){
var xs__5205__auto__ = temp__4657__auto____$1;
var column = cljs.core.first.call(null,xs__5205__auto__);
var iterys__28738__auto__ = ((function (s__44504__$1,column,xs__5205__auto__,temp__4657__auto____$1,row,s__44494__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function clostridium$core$grid_$_iter__44493_$_iter__44503_$_iter__44505(s__44506){
return (new cljs.core.LazySeq(null,((function (s__44504__$1,column,xs__5205__auto__,temp__4657__auto____$1,row,s__44494__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function (){
var s__44506__$1 = s__44506;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__44506__$1);
if(temp__4657__auto____$2){
var s__44506__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44506__$2)){
var c__28740__auto__ = cljs.core.chunk_first.call(null,s__44506__$2);
var size__28741__auto__ = cljs.core.count.call(null,c__28740__auto__);
var b__44508 = cljs.core.chunk_buffer.call(null,size__28741__auto__);
if((function (){var i__44507 = (0);
while(true){
if((i__44507 < size__28741__auto__)){
var value = cljs.core._nth.call(null,c__28740__auto__,i__44507);
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-")].join('');
if(cljs.core.truth_(validcolumn.call(null,column))){
cljs.core.chunk_append.call(null,b__44508,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,pc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column,row], null)))?"active ":"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("square")].join('')], null),((cljs.core._EQ_.call(null,value," "))?goog.string.unescapeEntities("&nbsp;"):value)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("sq")].join('')], null)));

var G__44517 = (i__44507 + (1));
i__44507 = G__44517;
continue;
} else {
var G__44518 = (i__44507 + (1));
i__44507 = G__44518;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44508),clostridium$core$grid_$_iter__44493_$_iter__44503_$_iter__44505.call(null,cljs.core.chunk_rest.call(null,s__44506__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44508),null);
}
} else {
var value = cljs.core.first.call(null,s__44506__$2);
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-")].join('');
if(cljs.core.truth_(validcolumn.call(null,column))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,pc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column,row], null)))?"active ":"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("square")].join('')], null),((cljs.core._EQ_.call(null,value," "))?goog.string.unescapeEntities("&nbsp;"):value)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("sq")].join('')], null)),clostridium$core$grid_$_iter__44493_$_iter__44503_$_iter__44505.call(null,cljs.core.rest.call(null,s__44506__$2)));
} else {
var G__44519 = cljs.core.rest.call(null,s__44506__$2);
s__44506__$1 = G__44519;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__44504__$1,column,xs__5205__auto__,temp__4657__auto____$1,row,s__44494__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
,null,null));
});})(s__44504__$1,column,xs__5205__auto__,temp__4657__auto____$1,row,s__44494__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
;
var fs__28739__auto__ = cljs.core.seq.call(null,iterys__28738__auto__.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data,row),column)));
if(fs__28739__auto__){
return cljs.core.concat.call(null,fs__28739__auto__,clostridium$core$grid_$_iter__44493_$_iter__44503.call(null,cljs.core.rest.call(null,s__44504__$1)));
} else {
var G__44520 = cljs.core.rest.call(null,s__44504__$1);
s__44504__$1 = G__44520;
continue;
}
} else {
return null;
}
break;
}
});})(row,s__44494__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
,null,null));
});})(row,s__44494__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
;
return iter__28742__auto__.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,cljs.core.get.call(null,data,row))));
})())),clostridium$core$grid_$_iter__44493.call(null,cljs.core.rest.call(null,s__44494__$2)));
}
} else {
return null;
}
break;
}
});})(b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
,null,null));
});})(b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
;
return iter__28742__auto__.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,data)));
})()))], null);
});
clostridium.core.run_step = (function clostridium$core$run_step(){
cljs.core.swap_BANG_.call(null,clostridium.common.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"b","b",1482224470),clostridium.befunge.doInst.call(null,new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clostridium.common.app_state))));

var boundary = (5);
var column = cljs.core.first.call(null,new cljs.core.Keyword(null,"pc","pc",512913453).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clostridium.common.app_state))));
var maxcolumns = new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clostridium.common.app_state));
var firstcolumn = new cljs.core.Keyword(null,"firstcolumn","firstcolumn",1183771042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clostridium.common.app_state));
var lastcolumn = (maxcolumns + firstcolumn);
if(((column + boundary) > lastcolumn)){
cljs.core.swap_BANG_.call(null,clostridium.common.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"firstcolumn","firstcolumn",1183771042),((column + boundary) - maxcolumns));
} else {
}

if(((column - boundary) < firstcolumn)){
return cljs.core.swap_BANG_.call(null,clostridium.common.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"firstcolumn","firstcolumn",1183771042),(function (){var x__28289__auto__ = (0);
var y__28290__auto__ = (column - boundary);
return ((x__28289__auto__ > y__28290__auto__) ? x__28289__auto__ : y__28290__auto__);
})());
} else {
return null;
}
});
clostridium.core.load_example = (function clostridium$core$load_example(){
return clostridium.upload.load_program.call(null,cljs.core.get.call(null,clostridium.core.examples,new cljs.core.Keyword(null,"example","example",-1755779144).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clostridium.common.app_state))));
});
clostridium.core.info = (function clostridium$core$info(){
var b = new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clostridium.common.app_state));
var pc = new cljs.core.Keyword(null,"pc","pc",512913453).cljs$core$IFn$_invoke$arity$1(b);
var dir = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(b);
var stacks = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(b);
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(b))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"auto-run","auto-run",1958400437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clostridium.common.app_state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"height","height",1025178622),"30px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (b,pc,dir,stacks){
return (function (){
return cljs.core.swap_BANG_.call(null,clostridium.common.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),false);
});})(b,pc,dir,stacks))
], null),"Stop"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"height","height",1025178622),"30px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (b,pc,dir,stacks){
return (function (){
return cljs.core.swap_BANG_.call(null,clostridium.common.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true);
});})(b,pc,dir,stacks))
], null),"Run"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"height","height",1025178622),"30px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),clostridium.core.run_step], null),"Step"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"State: Finished"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Program"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Time per step",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ms-per-step","ms-per-step",-1360573043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clostridium.common.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (b,pc,dir,stacks){
return (function (p1__44521_SHARP_){
return cljs.core.swap_BANG_.call(null,clostridium.common.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"ms-per-step","ms-per-step",-1360573043),p1__44521_SHARP_.target.value);
});})(b,pc,dir,stacks))
], null),cljs.core.doall.call(null,(function (){var iter__28742__auto__ = ((function (b,pc,dir,stacks){
return (function clostridium$core$info_$_iter__44523(s__44524){
return (new cljs.core.LazySeq(null,((function (b,pc,dir,stacks){
return (function (){
var s__44524__$1 = s__44524;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44524__$1);
if(temp__4657__auto__){
var s__44524__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44524__$2)){
var c__28740__auto__ = cljs.core.chunk_first.call(null,s__44524__$2);
var size__28741__auto__ = cljs.core.count.call(null,c__28740__auto__);
var b__44526 = cljs.core.chunk_buffer.call(null,size__28741__auto__);
if((function (){var i__44525 = (0);
while(true){
if((i__44525 < size__28741__auto__)){
var value = cljs.core._nth.call(null,c__28740__auto__,i__44525);
cljs.core.chunk_append.call(null,b__44526,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null),goog.string.format("%d ms",value)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),value], null)));

var G__44561 = (i__44525 + (1));
i__44525 = G__44561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44526),clostridium$core$info_$_iter__44523.call(null,cljs.core.chunk_rest.call(null,s__44524__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44526),null);
}
} else {
var value = cljs.core.first.call(null,s__44524__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null),goog.string.format("%d ms",value)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),value], null)),clostridium$core$info_$_iter__44523.call(null,cljs.core.rest.call(null,s__44524__$2)));
}
} else {
return null;
}
break;
}
});})(b,pc,dir,stacks))
,null,null));
});})(b,pc,dir,stacks))
;
return iter__28742__auto__.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(50),(100),(300),(1000)], null));
})())], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Choose example",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"example","example",-1755779144).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clostridium.common.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (b,pc,dir,stacks){
return (function (p1__44522_SHARP_){
return cljs.core.swap_BANG_.call(null,clostridium.common.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"example","example",-1755779144),p1__44522_SHARP_.target.value);
});})(b,pc,dir,stacks))
], null),cljs.core.doall.call(null,(function (){var iter__28742__auto__ = ((function (b,pc,dir,stacks){
return (function clostridium$core$info_$_iter__44527(s__44528){
return (new cljs.core.LazySeq(null,((function (b,pc,dir,stacks){
return (function (){
var s__44528__$1 = s__44528;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44528__$1);
if(temp__4657__auto__){
var s__44528__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44528__$2)){
var c__28740__auto__ = cljs.core.chunk_first.call(null,s__44528__$2);
var size__28741__auto__ = cljs.core.count.call(null,c__28740__auto__);
var b__44530 = cljs.core.chunk_buffer.call(null,size__28741__auto__);
if((function (){var i__44529 = (0);
while(true){
if((i__44529 < size__28741__auto__)){
var key = cljs.core._nth.call(null,c__28740__auto__,i__44529);
cljs.core.chunk_append.call(null,b__44530,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),key], null),key], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__44562 = (i__44529 + (1));
i__44529 = G__44562;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44530),clostridium$core$info_$_iter__44527.call(null,cljs.core.chunk_rest.call(null,s__44528__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44530),null);
}
} else {
var key = cljs.core.first.call(null,s__44528__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),key], null),key], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),clostridium$core$info_$_iter__44527.call(null,cljs.core.rest.call(null,s__44528__$2)));
}
} else {
return null;
}
break;
}
});})(b,pc,dir,stacks))
,null,null));
});})(b,pc,dir,stacks))
;
return iter__28742__auto__.call(null,cljs.core.keys.call(null,clostridium.core.examples));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"small"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),clostridium.core.load_example], null),"Load example"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clostridium.upload.upload_btn,new cljs.core.Keyword(null,"file-name","file-name",-1654217259).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clostridium.common.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Program Counter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.first.call(null,pc)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Row"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.second.call(null,pc)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Direction"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.first.call(null,dir)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Row"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.second.call(null,dir)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"String Mode"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stringMode","stringMode",-995189163).cljs$core$IFn$_invoke$arity$1(b))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Stack"], null),(((cljs.core._EQ_.call(null,cljs.core.count.call(null,stacks),(1))) && (cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,stacks))))?" (empty)":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__28742__auto__ = ((function (b,pc,dir,stacks){
return (function clostridium$core$info_$_iter__44531(s__44532){
return (new cljs.core.LazySeq(null,((function (b,pc,dir,stacks){
return (function (){
var s__44532__$1 = s__44532;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44532__$1);
if(temp__4657__auto__){
var s__44532__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44532__$2)){
var c__28740__auto__ = cljs.core.chunk_first.call(null,s__44532__$2);
var size__28741__auto__ = cljs.core.count.call(null,c__28740__auto__);
var b__44534 = cljs.core.chunk_buffer.call(null,size__28741__auto__);
if((function (){var i__44533 = (0);
while(true){
if((i__44533 < size__28741__auto__)){
var vec__44535 = cljs.core._nth.call(null,c__28740__auto__,i__44533);
var i = cljs.core.nth.call(null,vec__44535,(0),null);
var stack = cljs.core.nth.call(null,vec__44535,(1),null);
cljs.core.chunk_append.call(null,b__44534,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),clojure.contrib.humanize.ordinal.call(null,(i + (1))),((cljs.core.empty_QMARK_.call(null,stack))?" (empty)":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__28742__auto__ = ((function (i__44533,vec__44535,i,stack,c__28740__auto__,size__28741__auto__,b__44534,s__44532__$2,temp__4657__auto__,b,pc,dir,stacks){
return (function clostridium$core$info_$_iter__44531_$_iter__44538(s__44539){
return (new cljs.core.LazySeq(null,((function (i__44533,vec__44535,i,stack,c__28740__auto__,size__28741__auto__,b__44534,s__44532__$2,temp__4657__auto__,b,pc,dir,stacks){
return (function (){
var s__44539__$1 = s__44539;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__44539__$1);
if(temp__4657__auto____$1){
var s__44539__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44539__$2)){
var c__28740__auto____$1 = cljs.core.chunk_first.call(null,s__44539__$2);
var size__28741__auto____$1 = cljs.core.count.call(null,c__28740__auto____$1);
var b__44541 = cljs.core.chunk_buffer.call(null,size__28741__auto____$1);
if((function (){var i__44540 = (0);
while(true){
if((i__44540 < size__28741__auto____$1)){
var vec__44542 = cljs.core._nth.call(null,c__28740__auto____$1,i__44540);
var j = cljs.core.nth.call(null,vec__44542,(0),null);
var x = cljs.core.nth.call(null,vec__44542,(1),null);
cljs.core.chunk_append.call(null,b__44541,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(j + (1))," - ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),goog.string.format("stack-%d-%d",i,j)], null)));

var G__44563 = (i__44540 + (1));
i__44540 = G__44563;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44541),clostridium$core$info_$_iter__44531_$_iter__44538.call(null,cljs.core.chunk_rest.call(null,s__44539__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44541),null);
}
} else {
var vec__44545 = cljs.core.first.call(null,s__44539__$2);
var j = cljs.core.nth.call(null,vec__44545,(0),null);
var x = cljs.core.nth.call(null,vec__44545,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(j + (1))," - ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),goog.string.format("stack-%d-%d",i,j)], null)),clostridium$core$info_$_iter__44531_$_iter__44538.call(null,cljs.core.rest.call(null,s__44539__$2)));
}
} else {
return null;
}
break;
}
});})(i__44533,vec__44535,i,stack,c__28740__auto__,size__28741__auto__,b__44534,s__44532__$2,temp__4657__auto__,b,pc,dir,stacks))
,null,null));
});})(i__44533,vec__44535,i,stack,c__28740__auto__,size__28741__auto__,b__44534,s__44532__$2,temp__4657__auto__,b,pc,dir,stacks))
;
return iter__28742__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,stack));
})()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),goog.string.format("stack-%d",i)], null)));

var G__44564 = (i__44533 + (1));
i__44533 = G__44564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44534),clostridium$core$info_$_iter__44531.call(null,cljs.core.chunk_rest.call(null,s__44532__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44534),null);
}
} else {
var vec__44548 = cljs.core.first.call(null,s__44532__$2);
var i = cljs.core.nth.call(null,vec__44548,(0),null);
var stack = cljs.core.nth.call(null,vec__44548,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),clojure.contrib.humanize.ordinal.call(null,(i + (1))),((cljs.core.empty_QMARK_.call(null,stack))?" (empty)":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__28742__auto__ = ((function (vec__44548,i,stack,s__44532__$2,temp__4657__auto__,b,pc,dir,stacks){
return (function clostridium$core$info_$_iter__44531_$_iter__44551(s__44552){
return (new cljs.core.LazySeq(null,((function (vec__44548,i,stack,s__44532__$2,temp__4657__auto__,b,pc,dir,stacks){
return (function (){
var s__44552__$1 = s__44552;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__44552__$1);
if(temp__4657__auto____$1){
var s__44552__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44552__$2)){
var c__28740__auto__ = cljs.core.chunk_first.call(null,s__44552__$2);
var size__28741__auto__ = cljs.core.count.call(null,c__28740__auto__);
var b__44554 = cljs.core.chunk_buffer.call(null,size__28741__auto__);
if((function (){var i__44553 = (0);
while(true){
if((i__44553 < size__28741__auto__)){
var vec__44555 = cljs.core._nth.call(null,c__28740__auto__,i__44553);
var j = cljs.core.nth.call(null,vec__44555,(0),null);
var x = cljs.core.nth.call(null,vec__44555,(1),null);
cljs.core.chunk_append.call(null,b__44554,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(j + (1))," - ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),goog.string.format("stack-%d-%d",i,j)], null)));

var G__44565 = (i__44553 + (1));
i__44553 = G__44565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44554),clostridium$core$info_$_iter__44531_$_iter__44551.call(null,cljs.core.chunk_rest.call(null,s__44552__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44554),null);
}
} else {
var vec__44558 = cljs.core.first.call(null,s__44552__$2);
var j = cljs.core.nth.call(null,vec__44558,(0),null);
var x = cljs.core.nth.call(null,vec__44558,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(j + (1))," - ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),goog.string.format("stack-%d-%d",i,j)], null)),clostridium$core$info_$_iter__44531_$_iter__44551.call(null,cljs.core.rest.call(null,s__44552__$2)));
}
} else {
return null;
}
break;
}
});})(vec__44548,i,stack,s__44532__$2,temp__4657__auto__,b,pc,dir,stacks))
,null,null));
});})(vec__44548,i,stack,s__44532__$2,temp__4657__auto__,b,pc,dir,stacks))
;
return iter__28742__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,stack));
})()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),goog.string.format("stack-%d",i)], null)),clostridium$core$info_$_iter__44531.call(null,cljs.core.rest.call(null,s__44532__$2)));
}
} else {
return null;
}
break;
}
});})(b,pc,dir,stacks))
,null,null));
});})(b,pc,dir,stacks))
;
return iter__28742__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,stacks));
})()], null))], null);
});
clostridium.core.console = (function clostridium$core$console(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Console"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"console","console",1228072057).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clostridium.common.app_state)))].join('')], null)], null);
});
clostridium.core.display = (function clostridium$core$display(){
if(cljs.core.truth_((function (){var and__27927__auto__ = new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clostridium.common.app_state)));
if(cljs.core.truth_(and__27927__auto__)){
return new cljs.core.Keyword(null,"auto-run","auto-run",1958400437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clostridium.common.app_state));
} else {
return and__27927__auto__;
}
})())){
var c__31146__auto___44580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31146__auto___44580){
return (function (){
var f__31147__auto__ = (function (){var switch__31125__auto__ = ((function (c__31146__auto___44580){
return (function (state_44573){
var state_val_44574 = (state_44573[(1)]);
if((state_val_44574 === (1))){
var inst_44566 = cljs.core.deref.call(null,clostridium.common.app_state);
var inst_44567 = new cljs.core.Keyword(null,"ms-per-step","ms-per-step",-1360573043).cljs$core$IFn$_invoke$arity$1(inst_44566);
var inst_44568 = cljs.core.async.timeout.call(null,inst_44567);
var state_44573__$1 = state_44573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44573__$1,(2),inst_44568);
} else {
if((state_val_44574 === (2))){
var inst_44570 = (state_44573[(2)]);
var inst_44571 = clostridium.core.run_step.call(null);
var state_44573__$1 = (function (){var statearr_44575 = state_44573;
(statearr_44575[(7)] = inst_44570);

return statearr_44575;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44573__$1,inst_44571);
} else {
return null;
}
}
});})(c__31146__auto___44580))
;
return ((function (switch__31125__auto__,c__31146__auto___44580){
return (function() {
var clostridium$core$display_$_state_machine__31126__auto__ = null;
var clostridium$core$display_$_state_machine__31126__auto____0 = (function (){
var statearr_44576 = [null,null,null,null,null,null,null,null];
(statearr_44576[(0)] = clostridium$core$display_$_state_machine__31126__auto__);

(statearr_44576[(1)] = (1));

return statearr_44576;
});
var clostridium$core$display_$_state_machine__31126__auto____1 = (function (state_44573){
while(true){
var ret_value__31127__auto__ = (function (){try{while(true){
var result__31128__auto__ = switch__31125__auto__.call(null,state_44573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31128__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31128__auto__;
}
break;
}
}catch (e44577){if((e44577 instanceof Object)){
var ex__31129__auto__ = e44577;
var statearr_44578_44581 = state_44573;
(statearr_44578_44581[(5)] = ex__31129__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31127__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44582 = state_44573;
state_44573 = G__44582;
continue;
} else {
return ret_value__31127__auto__;
}
break;
}
});
clostridium$core$display_$_state_machine__31126__auto__ = function(state_44573){
switch(arguments.length){
case 0:
return clostridium$core$display_$_state_machine__31126__auto____0.call(this);
case 1:
return clostridium$core$display_$_state_machine__31126__auto____1.call(this,state_44573);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
clostridium$core$display_$_state_machine__31126__auto__.cljs$core$IFn$_invoke$arity$0 = clostridium$core$display_$_state_machine__31126__auto____0;
clostridium$core$display_$_state_machine__31126__auto__.cljs$core$IFn$_invoke$arity$1 = clostridium$core$display_$_state_machine__31126__auto____1;
return clostridium$core$display_$_state_machine__31126__auto__;
})()
;})(switch__31125__auto__,c__31146__auto___44580))
})();
var state__31148__auto__ = (function (){var statearr_44579 = f__31147__auto__.call(null);
(statearr_44579[(6)] = c__31146__auto___44580);

return statearr_44579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31148__auto__);
});})(c__31146__auto___44580))
);

} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"header"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/palfrey/clostridium"], null),"Clostridium"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"navigation"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clostridium.core.info], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"content"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clostridium.core.grid], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"console"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clostridium.core.console], null)], null)], null);
});
clostridium.core.dev_setup = (function clostridium$core$dev_setup(){
if(goog.DEBUG){
return cljs.core.enable_console_print_BANG_.call(null);
} else {
return null;
}
});
clostridium.core.reload = (function clostridium$core$reload(){
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clostridium.core.display], null),document.getElementById("app"));

window.addEventListener("resize",clostridium.core.on_window_resize);

return clostridium.core.on_window_resize.call(null,null);
});
clostridium.core.main = (function clostridium$core$main(){
clostridium.core.dev_setup.call(null);

clostridium.core.load_example.call(null);

return clostridium.core.reload.call(null);
});
goog.exportSymbol('clostridium.core.main', clostridium.core.main);

//# sourceMappingURL=core.js.map?rel=1503263488585
