// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.local');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('goog.date.DateTime');
/**
 * Map of local formatters for parsing and printing.
 */
cljs_time.local._STAR_local_formatters_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18100){
var vec__18101 = p__18100;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18101,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18101,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f)),cljs.core.cst$kw$fmt_SLASH_formatter))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parser], null),((function (vec__18101,k,f){
return (function (p1__18099_SHARP_){
return cljs_time.core.to_default_time_zone(p1__18099_SHARP_);
});})(vec__18101,k,f))
):f)], null);
}),cljs_time.format.formatters));
/**
 * Returns a DateTime for the current instant in the default time zone.
 */
cljs_time.local.local_now = (function cljs_time$local$local_now(){
return cljs_time.core.time_now();
});

/**
 * @interface
 */
cljs_time.local.ILocalCoerce = function(){};

/**
 * convert `obj` to a local goog.date
 *                           DateTime instance retaining time fields.
 */
cljs_time.local.to_local_date_time = (function cljs_time$local$to_local_date_time(obj){
if((!((obj == null))) && (!((obj.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 == null)))){
return obj.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1(obj);
} else {
var x__8308__auto__ = (((obj == null))?null:obj);
var m__8309__auto__ = (cljs_time.local.to_local_date_time[goog.typeOf(x__8308__auto__)]);
if(!((m__8309__auto__ == null))){
return (m__8309__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8309__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__8309__auto__.call(null,obj));
} else {
var m__8309__auto____$1 = (cljs_time.local.to_local_date_time["_"]);
if(!((m__8309__auto____$1 == null))){
return (m__8309__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8309__auto____$1.cljs$core$IFn$_invoke$arity$1(obj) : m__8309__auto____$1.call(null,obj));
} else {
throw cljs.core.missing_protocol("ILocalCoerce.to-local-date-time",obj);
}
}
}
});

/**
 * Coerce to date-time in the default time zone retaining time fields.
 */
cljs_time.local.as_local_date_time_from_time_zone = (function cljs_time$local$as_local_date_time_from_time_zone(obj){
return cljs_time.coerce.to_local_date_time(cljs_time.coerce.to_date_time(obj));
});
/**
 * Coerce to date-time in the default time zone.
 */
cljs_time.local.as_local_date_time_to_time_zone = (function cljs_time$local$as_local_date_time_to_time_zone(obj){
return cljs_time.core.to_default_time_zone(cljs_time.coerce.to_date_time(obj));
});
/**
 * Return local DateTime instance from string using
 *   formatters in *local-formatters*, returning first
 *   which parses.
 */
cljs_time.local.from_local_string = (function cljs_time$local$from_local_string(s){
return cljs.core.first((function (){var iter__8428__auto__ = (function cljs_time$local$from_local_string_$_iter__18104(s__18105){
return (new cljs.core.LazySeq(null,(function (){
var s__18105__$1 = s__18105;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18105__$1);
if(temp__4657__auto__){
var s__18105__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18105__$2)){
var c__8426__auto__ = cljs.core.chunk_first(s__18105__$2);
var size__8427__auto__ = cljs.core.count(c__8426__auto__);
var b__18107 = cljs.core.chunk_buffer(size__8427__auto__);
if((function (){var i__18106 = (0);
while(true){
if((i__18106 < size__8427__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8426__auto__,i__18106);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e18108){if((e18108 instanceof Error)){
var _ = e18108;
return null;
} else {
throw e18108;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__18107,d);

var G__18110 = (i__18106 + (1));
i__18106 = G__18110;
continue;
} else {
var G__18111 = (i__18106 + (1));
i__18106 = G__18111;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18107),cljs_time$local$from_local_string_$_iter__18104(cljs.core.chunk_rest(s__18105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18107),null);
}
} else {
var f = cljs.core.first(s__18105__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e18109){if((e18109 instanceof Error)){
var _ = e18109;
return null;
} else {
throw e18109;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$local$from_local_string_$_iter__18104(cljs.core.rest(s__18105__$2)));
} else {
var G__18112 = cljs.core.rest(s__18105__$2);
s__18105__$1 = G__18112;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8428__auto__(cljs.core.vals(cljs_time.local._STAR_local_formatters_STAR_));
})());
});
goog.object.set(cljs_time.local.ILocalCoerce,"null",true);

var G__18113_18122 = cljs_time.local.to_local_date_time;
var G__18114_18123 = "null";
var G__18115_18124 = ((function (G__18113_18122,G__18114_18123){
return (function (_){
return null;
});})(G__18113_18122,G__18114_18123))
;
goog.object.set(G__18113_18122,G__18114_18123,G__18115_18124);

Date.prototype.cljs_time$local$ILocalCoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone(cljs_time.coerce.to_date_time(date__$1));
});

goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone(date_time__$1);
});

goog.object.set(cljs_time.local.ILocalCoerce,"number",true);

var G__18116_18125 = cljs_time.local.to_local_date_time;
var G__18117_18126 = "number";
var G__18118_18127 = ((function (G__18116_18125,G__18117_18126){
return (function (long$){
return cljs_time.local.as_local_date_time_from_time_zone(long$);
});})(G__18116_18125,G__18117_18126))
;
goog.object.set(G__18116_18125,G__18117_18126,G__18118_18127);

goog.object.set(cljs_time.local.ILocalCoerce,"string",true);

var G__18119_18128 = cljs_time.local.to_local_date_time;
var G__18120_18129 = "string";
var G__18121_18130 = ((function (G__18119_18128,G__18120_18129){
return (function (string){
return cljs_time.local.from_local_string(string);
});})(G__18119_18128,G__18120_18129))
;
goog.object.set(G__18119_18128,G__18120_18129,G__18121_18130);
/**
 * Format obj as local time using the local formatter corresponding
 *   to format-key.
 */
cljs_time.local.format_local_time = (function cljs_time$local$format_local_time(obj,format_key){
var temp__4657__auto__ = cljs_time.local.to_local_date_time(obj);
if(cljs.core.truth_(temp__4657__auto__)){
var dt = temp__4657__auto__;
var temp__4657__auto____$1 = (format_key.cljs$core$IFn$_invoke$arity$1 ? format_key.cljs$core$IFn$_invoke$arity$1(cljs_time.local._STAR_local_formatters_STAR_) : format_key.call(null,cljs_time.local._STAR_local_formatters_STAR_));
if(cljs.core.truth_(temp__4657__auto____$1)){
var fmt = temp__4657__auto____$1;
return cljs_time.format.unparse(fmt,dt);
} else {
return null;
}
} else {
return null;
}
});
