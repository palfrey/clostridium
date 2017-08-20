// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs_time.local');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('goog.date.DateTime');
/**
 * Map of local formatters for parsing and printing.
 */
cljs_time.local._STAR_local_formatters_STAR_ = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__29885){
var vec__29886 = p__29885;
var k = cljs.core.nth.call(null,vec__29886,(0),null);
var f = cljs.core.nth.call(null,vec__29886,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,f)),new cljs.core.Keyword("fmt","formatter","fmt/formatter",-483947944)))?cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),((function (vec__29886,k,f){
return (function (p1__29884_SHARP_){
return cljs_time.core.to_default_time_zone.call(null,p1__29884_SHARP_);
});})(vec__29886,k,f))
):f)], null);
}),cljs_time.format.formatters));
/**
 * Returns a DateTime for the current instant in the default time zone.
 */
cljs_time.local.local_now = (function cljs_time$local$local_now(){
return cljs_time.core.time_now.call(null);
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
var x__28622__auto__ = (((obj == null))?null:obj);
var m__28623__auto__ = (cljs_time.local.to_local_date_time[goog.typeOf(x__28622__auto__)]);
if(!((m__28623__auto__ == null))){
return m__28623__auto__.call(null,obj);
} else {
var m__28623__auto____$1 = (cljs_time.local.to_local_date_time["_"]);
if(!((m__28623__auto____$1 == null))){
return m__28623__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalCoerce.to-local-date-time",obj);
}
}
}
});

/**
 * Coerce to date-time in the default time zone retaining time fields.
 */
cljs_time.local.as_local_date_time_from_time_zone = (function cljs_time$local$as_local_date_time_from_time_zone(obj){
return cljs_time.coerce.to_local_date_time.call(null,cljs_time.coerce.to_date_time.call(null,obj));
});
/**
 * Coerce to date-time in the default time zone.
 */
cljs_time.local.as_local_date_time_to_time_zone = (function cljs_time$local$as_local_date_time_to_time_zone(obj){
return cljs_time.core.to_default_time_zone.call(null,cljs_time.coerce.to_date_time.call(null,obj));
});
/**
 * Return local DateTime instance from string using
 *   formatters in *local-formatters*, returning first
 *   which parses.
 */
cljs_time.local.from_local_string = (function cljs_time$local$from_local_string(s){
return cljs.core.first.call(null,(function (){var iter__28742__auto__ = (function cljs_time$local$from_local_string_$_iter__29889(s__29890){
return (new cljs.core.LazySeq(null,(function (){
var s__29890__$1 = s__29890;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29890__$1);
if(temp__4657__auto__){
var s__29890__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29890__$2)){
var c__28740__auto__ = cljs.core.chunk_first.call(null,s__29890__$2);
var size__28741__auto__ = cljs.core.count.call(null,c__28740__auto__);
var b__29892 = cljs.core.chunk_buffer.call(null,size__28741__auto__);
if((function (){var i__29891 = (0);
while(true){
if((i__29891 < size__28741__auto__)){
var f = cljs.core._nth.call(null,c__28740__auto__,i__29891);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e29893){if((e29893 instanceof Error)){
var _ = e29893;
return null;
} else {
throw e29893;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__29892,d);

var G__29895 = (i__29891 + (1));
i__29891 = G__29895;
continue;
} else {
var G__29896 = (i__29891 + (1));
i__29891 = G__29896;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29892),cljs_time$local$from_local_string_$_iter__29889.call(null,cljs.core.chunk_rest.call(null,s__29890__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29892),null);
}
} else {
var f = cljs.core.first.call(null,s__29890__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e29894){if((e29894 instanceof Error)){
var _ = e29894;
return null;
} else {
throw e29894;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$local$from_local_string_$_iter__29889.call(null,cljs.core.rest.call(null,s__29890__$2)));
} else {
var G__29897 = cljs.core.rest.call(null,s__29890__$2);
s__29890__$1 = G__29897;
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
return iter__28742__auto__.call(null,cljs.core.vals.call(null,cljs_time.local._STAR_local_formatters_STAR_));
})());
});
goog.object.set(cljs_time.local.ILocalCoerce,"null",true);

goog.object.set(cljs_time.local.to_local_date_time,"null",(function (_){
return null;
}));

Date.prototype.cljs_time$local$ILocalCoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone.call(null,cljs_time.coerce.to_date_time.call(null,date__$1));
});

goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$local$ILocalCoerce$to_local_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return cljs_time.local.as_local_date_time_from_time_zone.call(null,date_time__$1);
});

goog.object.set(cljs_time.local.ILocalCoerce,"number",true);

goog.object.set(cljs_time.local.to_local_date_time,"number",(function (long$){
return cljs_time.local.as_local_date_time_from_time_zone.call(null,long$);
}));

goog.object.set(cljs_time.local.ILocalCoerce,"string",true);

goog.object.set(cljs_time.local.to_local_date_time,"string",(function (string){
return cljs_time.local.from_local_string.call(null,string);
}));
/**
 * Format obj as local time using the local formatter corresponding
 *   to format-key.
 */
cljs_time.local.format_local_time = (function cljs_time$local$format_local_time(obj,format_key){
var temp__4657__auto__ = cljs_time.local.to_local_date_time.call(null,obj);
if(cljs.core.truth_(temp__4657__auto__)){
var dt = temp__4657__auto__;
var temp__4657__auto____$1 = format_key.call(null,cljs_time.local._STAR_local_formatters_STAR_);
if(cljs.core.truth_(temp__4657__auto____$1)){
var fmt = temp__4657__auto____$1;
return cljs_time.format.unparse.call(null,fmt,dt);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=local.js.map?rel=1503148883297
