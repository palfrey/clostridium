// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('clostridium.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clostridium.befunge');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('clojure.contrib.humanize');
goog.require('cljs.core.async');
goog.require('clostridium.common');
goog.require('clostridium.upload');
goog.require('clojure.string');
clostridium.core.examples = new cljs.core.PersistentArrayMap(null, 4, ["Hello World!","64+\"!dlroW ,olleH\">:#,_@","Quine","01->1# +# :# 0# g# ,# :# 5# 8# *# 4# +# -# _@","99 bottles of beer",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\"d\"4vv\"take one down, pass it around\"<>",":-2*< v \"e wall\"_v#\\0`1%4./4::_0#%>#4^#","\\4>/|>:#,_$:55+:,\\4%3-!*0\\>:>#,_$$:1+\\1",">>>#@^>$\"ht no \"\\>\\\"reeb fo selttob\">>>"], null)),"Y-test",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y0\" :sgalF\">:#,_$.a, 0\" :llec rep setyB\">:#,_$.a, 0\" :reterpretnI\">:#,_$.\"V \",,v",".a,0\" :mgidaraP gnitarepO\">:#,_$.a,0\" :rotarepes htaP\">:#,_$,a,0\" :snoisnemiD\"v>",">:#,_$.a,\" :PI\",,,,..'@,\\..\" atled\",,,,,,\\..\" sfo\",,,,\\..a,0\" :xam ,niM\">:#,_v>","$\\..\" -\",,\\..a,0\" :emiT\">:#,_$..a, 0\" :skcatS\">:#,_$.a,.a, 0\" :sgrA\">:#,_$  v>",">:#v_$ :#v_$ 0\" :vnE\">:#,_$ >:#v_a,@                                        >","v,#    <                     ,",">>:#,_v                      >:#,_v","^,a    $<                   ^,a     <"], null))], null);
clostridium.core.on_window_resize = (function clostridium$core$on_window_resize(evt){
var maxwidth = ((function (){var G__18335 = (function (){var G__18336 = document.getElementById("content");
return window.getComputedStyle(G__18336);
})().width;
return parseInt(G__18335);
})() - (20));
var maxcolumns = (function (){var G__18337 = (maxwidth / (39));
return Math.floor(G__18337);
})();
var firstcolumn = cljs.core.cst$kw$firstcolumn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clostridium.common.app_state));
var lastcolumn = ((firstcolumn + maxcolumns) + (-1));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clostridium.common.app_state,cljs.core.assoc,cljs.core.cst$kw$max_DASH_columns,maxcolumns);
});
clostridium.core.grid = (function clostridium$core$grid(){
var b = cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clostridium.common.app_state));
var data = cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(b);
var pc = cljs.core.cst$kw$pc.cljs$core$IFn$_invoke$arity$1(b);
var maxcolumns = cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clostridium.common.app_state));
var firstcolumn = cljs.core.cst$kw$firstcolumn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clostridium.common.app_state));
var lastcolumn = ((firstcolumn + maxcolumns) + (-1));
var validcolumn = ((function (b,data,pc,maxcolumns,firstcolumn,lastcolumn){
return (function (column){
return ((column >= firstcolumn)) && ((column < lastcolumn));
});})(b,data,pc,maxcolumns,firstcolumn,lastcolumn))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"square"], null),goog.string.unescapeEntities("&nbsp;")], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"gap"], null))], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__8428__auto__ = ((function (b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function clostridium$core$grid_$_iter__18339(s__18340){
return (new cljs.core.LazySeq(null,((function (b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function (){
var s__18340__$1 = s__18340;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18340__$1);
if(temp__4657__auto__){
var s__18340__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18340__$2)){
var c__8426__auto__ = cljs.core.chunk_first(s__18340__$2);
var size__8427__auto__ = cljs.core.count(c__8426__auto__);
var b__18342 = cljs.core.chunk_buffer(size__8427__auto__);
if((function (){var i__18341 = (0);
while(true){
if((i__18341 < size__8427__auto__)){
var column = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8426__auto__,i__18341);
if(cljs.core.truth_(validcolumn(column))){
cljs.core.chunk_append(b__18342,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"square column"], null),column], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,goog.string.format("col-%d",column)], null)));

var G__18359 = (i__18341 + (1));
i__18341 = G__18359;
continue;
} else {
var G__18360 = (i__18341 + (1));
i__18341 = G__18360;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18342),clostridium$core$grid_$_iter__18339(cljs.core.chunk_rest(s__18340__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18342),null);
}
} else {
var column = cljs.core.first(s__18340__$2);
if(cljs.core.truth_(validcolumn(column))){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"square column"], null),column], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,goog.string.format("col-%d",column)], null)),clostridium$core$grid_$_iter__18339(cljs.core.rest(s__18340__$2)));
} else {
var G__18361 = cljs.core.rest(s__18340__$2);
s__18340__$1 = G__18361;
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
return iter__8428__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (iter__8428__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function (p1__18338_SHARP_){
return cljs.core.count(cljs.core.keys(p1__18338_SHARP_));
});})(iter__8428__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
,cljs.core.vals(data)))))));
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__8428__auto__ = ((function (b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function clostridium$core$grid_$_iter__18343(s__18344){
return (new cljs.core.LazySeq(null,((function (b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function (){
var s__18344__$1 = s__18344;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18344__$1);
if(temp__4657__auto__){
var s__18344__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18344__$2)){
var c__8426__auto__ = cljs.core.chunk_first(s__18344__$2);
var size__8427__auto__ = cljs.core.count(c__8426__auto__);
var b__18346 = cljs.core.chunk_buffer(size__8427__auto__);
if((function (){var i__18345 = (0);
while(true){
if((i__18345 < size__8427__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8426__auto__,i__18345);
cljs.core.chunk_append(b__18346,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clear,"both"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,goog.string.format("split-%d",row)], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"square row"], null),row], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,goog.string.format("row-%d",row)], null))], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__8428__auto__ = ((function (i__18345,row,c__8426__auto__,size__8427__auto__,b__18346,s__18344__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function clostridium$core$grid_$_iter__18343_$_iter__18347(s__18348){
return (new cljs.core.LazySeq(null,((function (i__18345,row,c__8426__auto__,size__8427__auto__,b__18346,s__18344__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function (){
var s__18348__$1 = s__18348;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__18348__$1);
if(temp__4657__auto____$1){
var xs__5205__auto__ = temp__4657__auto____$1;
var column = cljs.core.first(xs__5205__auto__);
var iterys__8424__auto__ = ((function (s__18348__$1,i__18345,column,xs__5205__auto__,temp__4657__auto____$1,row,c__8426__auto__,size__8427__auto__,b__18346,s__18344__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function clostridium$core$grid_$_iter__18343_$_iter__18347_$_iter__18349(s__18350){
return (new cljs.core.LazySeq(null,((function (s__18348__$1,i__18345,column,xs__5205__auto__,temp__4657__auto____$1,row,c__8426__auto__,size__8427__auto__,b__18346,s__18344__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function (){
var s__18350__$1 = s__18350;
while(true){
var temp__4657__auto____$2 = cljs.core.seq(s__18350__$1);
if(temp__4657__auto____$2){
var s__18350__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__18350__$2)){
var c__8426__auto____$1 = cljs.core.chunk_first(s__18350__$2);
var size__8427__auto____$1 = cljs.core.count(c__8426__auto____$1);
var b__18352 = cljs.core.chunk_buffer(size__8427__auto____$1);
if((function (){var i__18351 = (0);
while(true){
if((i__18351 < size__8427__auto____$1)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8426__auto____$1,i__18351);
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-")].join('');
if(cljs.core.truth_(validcolumn(column))){
cljs.core.chunk_append(b__18352,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column,row], null)))?"active ":"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("square")].join('')], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value," "))?goog.string.unescapeEntities("&nbsp;"):value)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("sq")].join('')], null)));

var G__18362 = (i__18351 + (1));
i__18351 = G__18362;
continue;
} else {
var G__18363 = (i__18351 + (1));
i__18351 = G__18363;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18352),clostridium$core$grid_$_iter__18343_$_iter__18347_$_iter__18349(cljs.core.chunk_rest(s__18350__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18352),null);
}
} else {
var value = cljs.core.first(s__18350__$2);
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-")].join('');
if(cljs.core.truth_(validcolumn(column))){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column,row], null)))?"active ":"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("square")].join('')], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value," "))?goog.string.unescapeEntities("&nbsp;"):value)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("sq")].join('')], null)),clostridium$core$grid_$_iter__18343_$_iter__18347_$_iter__18349(cljs.core.rest(s__18350__$2)));
} else {
var G__18364 = cljs.core.rest(s__18350__$2);
s__18350__$1 = G__18364;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__18348__$1,i__18345,column,xs__5205__auto__,temp__4657__auto____$1,row,c__8426__auto__,size__8427__auto__,b__18346,s__18344__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
,null,null));
});})(s__18348__$1,i__18345,column,xs__5205__auto__,temp__4657__auto____$1,row,c__8426__auto__,size__8427__auto__,b__18346,s__18344__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
;
var fs__8425__auto__ = cljs.core.seq(iterys__8424__auto__(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,row),column)));
if(fs__8425__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8425__auto__,clostridium$core$grid_$_iter__18343_$_iter__18347(cljs.core.rest(s__18348__$1)));
} else {
var G__18365 = cljs.core.rest(s__18348__$1);
s__18348__$1 = G__18365;
continue;
}
} else {
return null;
}
break;
}
});})(i__18345,row,c__8426__auto__,size__8427__auto__,b__18346,s__18344__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
,null,null));
});})(i__18345,row,c__8426__auto__,size__8427__auto__,b__18346,s__18344__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
;
return iter__8428__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,row))));
})())));

var G__18366 = (i__18345 + (1));
i__18345 = G__18366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18346),clostridium$core$grid_$_iter__18343(cljs.core.chunk_rest(s__18344__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18346),null);
}
} else {
var row = cljs.core.first(s__18344__$2);
return cljs.core.cons(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clear,"both"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,goog.string.format("split-%d",row)], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"square row"], null),row], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,goog.string.format("row-%d",row)], null))], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__8428__auto__ = ((function (row,s__18344__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function clostridium$core$grid_$_iter__18343_$_iter__18353(s__18354){
return (new cljs.core.LazySeq(null,((function (row,s__18344__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function (){
var s__18354__$1 = s__18354;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__18354__$1);
if(temp__4657__auto____$1){
var xs__5205__auto__ = temp__4657__auto____$1;
var column = cljs.core.first(xs__5205__auto__);
var iterys__8424__auto__ = ((function (s__18354__$1,column,xs__5205__auto__,temp__4657__auto____$1,row,s__18344__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function clostridium$core$grid_$_iter__18343_$_iter__18353_$_iter__18355(s__18356){
return (new cljs.core.LazySeq(null,((function (s__18354__$1,column,xs__5205__auto__,temp__4657__auto____$1,row,s__18344__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn){
return (function (){
var s__18356__$1 = s__18356;
while(true){
var temp__4657__auto____$2 = cljs.core.seq(s__18356__$1);
if(temp__4657__auto____$2){
var s__18356__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__18356__$2)){
var c__8426__auto__ = cljs.core.chunk_first(s__18356__$2);
var size__8427__auto__ = cljs.core.count(c__8426__auto__);
var b__18358 = cljs.core.chunk_buffer(size__8427__auto__);
if((function (){var i__18357 = (0);
while(true){
if((i__18357 < size__8427__auto__)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8426__auto__,i__18357);
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-")].join('');
if(cljs.core.truth_(validcolumn(column))){
cljs.core.chunk_append(b__18358,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column,row], null)))?"active ":"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("square")].join('')], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value," "))?goog.string.unescapeEntities("&nbsp;"):value)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("sq")].join('')], null)));

var G__18367 = (i__18357 + (1));
i__18357 = G__18367;
continue;
} else {
var G__18368 = (i__18357 + (1));
i__18357 = G__18368;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18358),clostridium$core$grid_$_iter__18343_$_iter__18353_$_iter__18355(cljs.core.chunk_rest(s__18356__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18358),null);
}
} else {
var value = cljs.core.first(s__18356__$2);
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-")].join('');
if(cljs.core.truth_(validcolumn(column))){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column,row], null)))?"active ":"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("square")].join('')], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value," "))?goog.string.unescapeEntities("&nbsp;"):value)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("sq")].join('')], null)),clostridium$core$grid_$_iter__18343_$_iter__18353_$_iter__18355(cljs.core.rest(s__18356__$2)));
} else {
var G__18369 = cljs.core.rest(s__18356__$2);
s__18356__$1 = G__18369;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__18354__$1,column,xs__5205__auto__,temp__4657__auto____$1,row,s__18344__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
,null,null));
});})(s__18354__$1,column,xs__5205__auto__,temp__4657__auto____$1,row,s__18344__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
;
var fs__8425__auto__ = cljs.core.seq(iterys__8424__auto__(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,row),column)));
if(fs__8425__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8425__auto__,clostridium$core$grid_$_iter__18343_$_iter__18353(cljs.core.rest(s__18354__$1)));
} else {
var G__18370 = cljs.core.rest(s__18354__$1);
s__18354__$1 = G__18370;
continue;
}
} else {
return null;
}
break;
}
});})(row,s__18344__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
,null,null));
});})(row,s__18344__$2,temp__4657__auto__,b,data,pc,maxcolumns,firstcolumn,lastcolumn,validcolumn))
;
return iter__8428__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,row))));
})())),clostridium$core$grid_$_iter__18343(cljs.core.rest(s__18344__$2)));
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
return iter__8428__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(data)));
})())], 0))], null);
});
clostridium.core.run_step = (function clostridium$core$run_step(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clostridium.common.app_state,cljs.core.assoc,cljs.core.cst$kw$b,clostridium.befunge.doInst(cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clostridium.common.app_state))));

var boundary = (5);
var column = cljs.core.first(cljs.core.cst$kw$pc.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clostridium.common.app_state))));
var maxcolumns = cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clostridium.common.app_state));
var firstcolumn = cljs.core.cst$kw$firstcolumn.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clostridium.common.app_state));
var lastcolumn = (maxcolumns + firstcolumn);
if(((column + boundary) > lastcolumn)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clostridium.common.app_state,cljs.core.assoc,cljs.core.cst$kw$firstcolumn,((column + boundary) - maxcolumns));
} else {
}

if(((column - boundary) < firstcolumn)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clostridium.common.app_state,cljs.core.assoc,cljs.core.cst$kw$firstcolumn,(function (){var x__7975__auto__ = (0);
var y__7976__auto__ = (column - boundary);
return ((x__7975__auto__ > y__7976__auto__) ? x__7975__auto__ : y__7976__auto__);
})());
} else {
return null;
}
});
clostridium.core.load_example = (function clostridium$core$load_example(){
return clostridium.upload.load_program(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clostridium.core.examples,cljs.core.cst$kw$example.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clostridium.common.app_state))));
});
clostridium.core.info = (function clostridium$core$info(){
var b = cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clostridium.common.app_state));
var pc = cljs.core.cst$kw$pc.cljs$core$IFn$_invoke$arity$1(b);
var dir = cljs.core.cst$kw$dir.cljs$core$IFn$_invoke$arity$1(b);
var stacks = cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(b);
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(cljs.core.truth_(cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(b))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(cljs.core.truth_(cljs.core.cst$kw$auto_DASH_run.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clostridium.common.app_state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"60px",cljs.core.cst$kw$height,"30px"], null),cljs.core.cst$kw$on_DASH_click,((function (b,pc,dir,stacks){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clostridium.common.app_state,cljs.core.assoc,cljs.core.cst$kw$auto_DASH_run,false);
});})(b,pc,dir,stacks))
], null),"Stop"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"60px",cljs.core.cst$kw$height,"30px"], null),cljs.core.cst$kw$on_DASH_click,((function (b,pc,dir,stacks){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clostridium.common.app_state,cljs.core.assoc,cljs.core.cst$kw$auto_DASH_run,true);
});})(b,pc,dir,stacks))
], null),"Run"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"60px",cljs.core.cst$kw$height,"30px"], null),cljs.core.cst$kw$on_DASH_click,clostridium.core.run_step], null),"Step"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"State: Finished"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Program"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Time per step",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$ms_DASH_per_DASH_step.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clostridium.common.app_state)),cljs.core.cst$kw$on_DASH_change,((function (b,pc,dir,stacks){
return (function (p1__18371_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clostridium.common.app_state,cljs.core.assoc,cljs.core.cst$kw$ms_DASH_per_DASH_step,p1__18371_SHARP_.target.value);
});})(b,pc,dir,stacks))
], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__8428__auto__ = ((function (b,pc,dir,stacks){
return (function clostridium$core$info_$_iter__18373(s__18374){
return (new cljs.core.LazySeq(null,((function (b,pc,dir,stacks){
return (function (){
var s__18374__$1 = s__18374;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18374__$1);
if(temp__4657__auto__){
var s__18374__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18374__$2)){
var c__8426__auto__ = cljs.core.chunk_first(s__18374__$2);
var size__8427__auto__ = cljs.core.count(c__8426__auto__);
var b__18376 = cljs.core.chunk_buffer(size__8427__auto__);
if((function (){var i__18375 = (0);
while(true){
if((i__18375 < size__8427__auto__)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8426__auto__,i__18375);
cljs.core.chunk_append(b__18376,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null),goog.string.format("%d ms",value)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,value], null)));

var G__18411 = (i__18375 + (1));
i__18375 = G__18411;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18376),clostridium$core$info_$_iter__18373(cljs.core.chunk_rest(s__18374__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18376),null);
}
} else {
var value = cljs.core.first(s__18374__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null),goog.string.format("%d ms",value)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,value], null)),clostridium$core$info_$_iter__18373(cljs.core.rest(s__18374__$2)));
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
return iter__8428__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(50),(100),(300),(1000)], null));
})())], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Choose example",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.cst$kw$example.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clostridium.common.app_state)),cljs.core.cst$kw$on_DASH_change,((function (b,pc,dir,stacks){
return (function (p1__18372_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clostridium.common.app_state,cljs.core.assoc,cljs.core.cst$kw$example,p1__18372_SHARP_.target.value);
});})(b,pc,dir,stacks))
], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__8428__auto__ = ((function (b,pc,dir,stacks){
return (function clostridium$core$info_$_iter__18377(s__18378){
return (new cljs.core.LazySeq(null,((function (b,pc,dir,stacks){
return (function (){
var s__18378__$1 = s__18378;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18378__$1);
if(temp__4657__auto__){
var s__18378__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18378__$2)){
var c__8426__auto__ = cljs.core.chunk_first(s__18378__$2);
var size__8427__auto__ = cljs.core.count(c__8426__auto__);
var b__18380 = cljs.core.chunk_buffer(size__8427__auto__);
if((function (){var i__18379 = (0);
while(true){
if((i__18379 < size__8427__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8426__auto__,i__18379);
cljs.core.chunk_append(b__18380,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,key], null),key], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null)));

var G__18412 = (i__18379 + (1));
i__18379 = G__18412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18380),clostridium$core$info_$_iter__18377(cljs.core.chunk_rest(s__18378__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18380),null);
}
} else {
var key = cljs.core.first(s__18378__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,key], null),key], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null)),clostridium$core$info_$_iter__18377(cljs.core.rest(s__18378__$2)));
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
return iter__8428__auto__(cljs.core.keys(clostridium.core.examples));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"small"], null),cljs.core.cst$kw$on_DASH_click,clostridium.core.load_example], null),"Load example"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clostridium.upload.upload_btn,cljs.core.cst$kw$file_DASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clostridium.common.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Program Counter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.first(pc)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Row"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.second(pc)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Direction"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Column"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.first(dir)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Row"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.second(dir)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"String Mode"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$stringMode.cljs$core$IFn$_invoke$arity$1(b))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Stack"], null),(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(stacks),(1))) && (cljs.core.empty_QMARK_(cljs.core.first(stacks))))?" (empty)":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__8428__auto__ = ((function (b,pc,dir,stacks){
return (function clostridium$core$info_$_iter__18381(s__18382){
return (new cljs.core.LazySeq(null,((function (b,pc,dir,stacks){
return (function (){
var s__18382__$1 = s__18382;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18382__$1);
if(temp__4657__auto__){
var s__18382__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18382__$2)){
var c__8426__auto__ = cljs.core.chunk_first(s__18382__$2);
var size__8427__auto__ = cljs.core.count(c__8426__auto__);
var b__18384 = cljs.core.chunk_buffer(size__8427__auto__);
if((function (){var i__18383 = (0);
while(true){
if((i__18383 < size__8427__auto__)){
var vec__18385 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8426__auto__,i__18383);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18385,(0),null);
var stack = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18385,(1),null);
cljs.core.chunk_append(b__18384,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,clojure.contrib.humanize.ordinal((i + (1))),((cljs.core.empty_QMARK_(stack))?" (empty)":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__8428__auto__ = ((function (i__18383,vec__18385,i,stack,c__8426__auto__,size__8427__auto__,b__18384,s__18382__$2,temp__4657__auto__,b,pc,dir,stacks){
return (function clostridium$core$info_$_iter__18381_$_iter__18388(s__18389){
return (new cljs.core.LazySeq(null,((function (i__18383,vec__18385,i,stack,c__8426__auto__,size__8427__auto__,b__18384,s__18382__$2,temp__4657__auto__,b,pc,dir,stacks){
return (function (){
var s__18389__$1 = s__18389;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__18389__$1);
if(temp__4657__auto____$1){
var s__18389__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18389__$2)){
var c__8426__auto____$1 = cljs.core.chunk_first(s__18389__$2);
var size__8427__auto____$1 = cljs.core.count(c__8426__auto____$1);
var b__18391 = cljs.core.chunk_buffer(size__8427__auto____$1);
if((function (){var i__18390 = (0);
while(true){
if((i__18390 < size__8427__auto____$1)){
var vec__18392 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8426__auto____$1,i__18390);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18392,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18392,(1),null);
cljs.core.chunk_append(b__18391,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,(j + (1))," - ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,goog.string.format("stack-%d-%d",i,j)], null)));

var G__18413 = (i__18390 + (1));
i__18390 = G__18413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18391),clostridium$core$info_$_iter__18381_$_iter__18388(cljs.core.chunk_rest(s__18389__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18391),null);
}
} else {
var vec__18395 = cljs.core.first(s__18389__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18395,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18395,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,(j + (1))," - ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,goog.string.format("stack-%d-%d",i,j)], null)),clostridium$core$info_$_iter__18381_$_iter__18388(cljs.core.rest(s__18389__$2)));
}
} else {
return null;
}
break;
}
});})(i__18383,vec__18385,i,stack,c__8426__auto__,size__8427__auto__,b__18384,s__18382__$2,temp__4657__auto__,b,pc,dir,stacks))
,null,null));
});})(i__18383,vec__18385,i,stack,c__8426__auto__,size__8427__auto__,b__18384,s__18382__$2,temp__4657__auto__,b,pc,dir,stacks))
;
return iter__8428__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,stack));
})()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,goog.string.format("stack-%d",i)], null)));

var G__18414 = (i__18383 + (1));
i__18383 = G__18414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18384),clostridium$core$info_$_iter__18381(cljs.core.chunk_rest(s__18382__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18384),null);
}
} else {
var vec__18398 = cljs.core.first(s__18382__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18398,(0),null);
var stack = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18398,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,clojure.contrib.humanize.ordinal((i + (1))),((cljs.core.empty_QMARK_(stack))?" (empty)":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__8428__auto__ = ((function (vec__18398,i,stack,s__18382__$2,temp__4657__auto__,b,pc,dir,stacks){
return (function clostridium$core$info_$_iter__18381_$_iter__18401(s__18402){
return (new cljs.core.LazySeq(null,((function (vec__18398,i,stack,s__18382__$2,temp__4657__auto__,b,pc,dir,stacks){
return (function (){
var s__18402__$1 = s__18402;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__18402__$1);
if(temp__4657__auto____$1){
var s__18402__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18402__$2)){
var c__8426__auto__ = cljs.core.chunk_first(s__18402__$2);
var size__8427__auto__ = cljs.core.count(c__8426__auto__);
var b__18404 = cljs.core.chunk_buffer(size__8427__auto__);
if((function (){var i__18403 = (0);
while(true){
if((i__18403 < size__8427__auto__)){
var vec__18405 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8426__auto__,i__18403);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18405,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18405,(1),null);
cljs.core.chunk_append(b__18404,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,(j + (1))," - ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,goog.string.format("stack-%d-%d",i,j)], null)));

var G__18415 = (i__18403 + (1));
i__18403 = G__18415;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18404),clostridium$core$info_$_iter__18381_$_iter__18401(cljs.core.chunk_rest(s__18402__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18404),null);
}
} else {
var vec__18408 = cljs.core.first(s__18402__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18408,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18408,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,(j + (1))," - ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,goog.string.format("stack-%d-%d",i,j)], null)),clostridium$core$info_$_iter__18381_$_iter__18401(cljs.core.rest(s__18402__$2)));
}
} else {
return null;
}
break;
}
});})(vec__18398,i,stack,s__18382__$2,temp__4657__auto__,b,pc,dir,stacks))
,null,null));
});})(vec__18398,i,stack,s__18382__$2,temp__4657__auto__,b,pc,dir,stacks))
;
return iter__8428__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,stack));
})()], null))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,goog.string.format("stack-%d",i)], null)),clostridium$core$info_$_iter__18381(cljs.core.rest(s__18382__$2)));
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
return iter__8428__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,stacks));
})()], null))], null);
});
clostridium.core.console = (function clostridium$core$console(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Console"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pre,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$console.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clostridium.common.app_state)))].join('')], null)], null);
});
clostridium.core.display = (function clostridium$core$display(){
if(cljs.core.truth_((function (){var and__7613__auto__ = cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clostridium.common.app_state)));
if(cljs.core.truth_(and__7613__auto__)){
return cljs.core.cst$kw$auto_DASH_run.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clostridium.common.app_state));
} else {
return and__7613__auto__;
}
})())){
var c__15635__auto___18430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15635__auto___18430){
return (function (){
var f__15636__auto__ = (function (){var switch__15535__auto__ = ((function (c__15635__auto___18430){
return (function (state_18423){
var state_val_18424 = (state_18423[(1)]);
if((state_val_18424 === (1))){
var inst_18416 = cljs.core.deref(clostridium.common.app_state);
var inst_18417 = cljs.core.cst$kw$ms_DASH_per_DASH_step.cljs$core$IFn$_invoke$arity$1(inst_18416);
var inst_18418 = cljs.core.async.timeout(inst_18417);
var state_18423__$1 = state_18423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18423__$1,(2),inst_18418);
} else {
if((state_val_18424 === (2))){
var inst_18420 = (state_18423[(2)]);
var inst_18421 = clostridium.core.run_step();
var state_18423__$1 = (function (){var statearr_18425 = state_18423;
(statearr_18425[(7)] = inst_18420);

return statearr_18425;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18423__$1,inst_18421);
} else {
return null;
}
}
});})(c__15635__auto___18430))
;
return ((function (switch__15535__auto__,c__15635__auto___18430){
return (function() {
var clostridium$core$display_$_state_machine__15536__auto__ = null;
var clostridium$core$display_$_state_machine__15536__auto____0 = (function (){
var statearr_18426 = [null,null,null,null,null,null,null,null];
(statearr_18426[(0)] = clostridium$core$display_$_state_machine__15536__auto__);

(statearr_18426[(1)] = (1));

return statearr_18426;
});
var clostridium$core$display_$_state_machine__15536__auto____1 = (function (state_18423){
while(true){
var ret_value__15537__auto__ = (function (){try{while(true){
var result__15538__auto__ = switch__15535__auto__(state_18423);
if(cljs.core.keyword_identical_QMARK_(result__15538__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15538__auto__;
}
break;
}
}catch (e18427){if((e18427 instanceof Object)){
var ex__15539__auto__ = e18427;
var statearr_18428_18431 = state_18423;
(statearr_18428_18431[(5)] = ex__15539__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18423);

return cljs.core.cst$kw$recur;
} else {
throw e18427;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15537__auto__,cljs.core.cst$kw$recur)){
var G__18432 = state_18423;
state_18423 = G__18432;
continue;
} else {
return ret_value__15537__auto__;
}
break;
}
});
clostridium$core$display_$_state_machine__15536__auto__ = function(state_18423){
switch(arguments.length){
case 0:
return clostridium$core$display_$_state_machine__15536__auto____0.call(this);
case 1:
return clostridium$core$display_$_state_machine__15536__auto____1.call(this,state_18423);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
clostridium$core$display_$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$0 = clostridium$core$display_$_state_machine__15536__auto____0;
clostridium$core$display_$_state_machine__15536__auto__.cljs$core$IFn$_invoke$arity$1 = clostridium$core$display_$_state_machine__15536__auto____1;
return clostridium$core$display_$_state_machine__15536__auto__;
})()
;})(switch__15535__auto__,c__15635__auto___18430))
})();
var state__15637__auto__ = (function (){var statearr_18429 = (f__15636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15636__auto__.cljs$core$IFn$_invoke$arity$0() : f__15636__auto__.call(null));
(statearr_18429[(6)] = c__15635__auto___18430);

return statearr_18429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15637__auto__);
});})(c__15635__auto___18430))
);

} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"header"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/palfrey/clostridium"], null),"Clostridium"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"navigation"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clostridium.core.info], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"content"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clostridium.core.grid], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"console"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clostridium.core.console], null)], null)], null);
});
clostridium.core.dev_setup = (function clostridium$core$dev_setup(){
if(goog.DEBUG){
return cljs.core.enable_console_print_BANG_();
} else {
return null;
}
});
clostridium.core.reload = (function clostridium$core$reload(){
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clostridium.core.display], null),document.getElementById("app"));

window.addEventListener("resize",clostridium.core.on_window_resize);

return clostridium.core.on_window_resize(null);
});
clostridium.core.main = (function clostridium$core$main(){
clostridium.core.dev_setup();

clostridium.core.load_example();

return clostridium.core.reload();
});
goog.exportSymbol('clostridium.core.main', clostridium.core.main);
