// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__8308__auto__ = (((obj == null))?null:obj);
var m__8309__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__8308__auto__)]);
if(!((m__8309__auto__ == null))){
return (m__8309__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8309__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__8309__auto__.call(null,obj));
} else {
var m__8309__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__8309__auto____$1 == null))){
return (m__8309__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8309__auto____$1.cljs$core$IFn$_invoke$arity$1(obj) : m__8309__auto____$1.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__18061 = millis;
if((G__18061 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__18061) : goog.date.UtcDateTime.fromTimestamp.call(null,G__18061));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__8428__auto__ = (function cljs_time$coerce$from_string_$_iter__18062(s__18063){
return (new cljs.core.LazySeq(null,(function (){
var s__18063__$1 = s__18063;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18063__$1);
if(temp__4657__auto__){
var s__18063__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18063__$2)){
var c__8426__auto__ = cljs.core.chunk_first(s__18063__$2);
var size__8427__auto__ = cljs.core.count(c__8426__auto__);
var b__18065 = cljs.core.chunk_buffer(size__8427__auto__);
if((function (){var i__18064 = (0);
while(true){
if((i__18064 < size__8427__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8426__auto__,i__18064);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e18066){if((e18066 instanceof Error)){
var _ = e18066;
return null;
} else {
throw e18066;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__18065,d);

var G__18068 = (i__18064 + (1));
i__18064 = G__18068;
continue;
} else {
var G__18069 = (i__18064 + (1));
i__18064 = G__18069;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18065),cljs_time$coerce$from_string_$_iter__18062(cljs.core.chunk_rest(s__18063__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18065),null);
}
} else {
var f = cljs.core.first(s__18063__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e18067){if((e18067 instanceof Error)){
var _ = e18067;
return null;
} else {
throw e18067;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__18062(cljs.core.rest(s__18063__$2)));
} else {
var G__18070 = cljs.core.rest(s__18063__$2);
s__18063__$1 = G__18070;
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
return iter__8428__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__18071 = date;
var G__18071__$1 = (((G__18071 == null))?null:G__18071.getTime());
if((G__18071__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__18071__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__18072 = obj;
var G__18072__$1 = (((G__18072 == null))?null:cljs_time.coerce.to_date_time(G__18072));
if((G__18072__$1 == null)){
return null;
} else {
return G__18072__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var G__18073 = obj;
var G__18073__$1 = (((G__18073 == null))?null:cljs_time.coerce.to_long(G__18073));
if((G__18073__$1 == null)){
return null;
} else {
return (G__18073__$1 / (1000));
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__18074 = obj;
var G__18074__$1 = (((G__18074 == null))?null:cljs_time.coerce.to_date_time(G__18074));
var G__18074__$2 = (((G__18074__$1 == null))?null:G__18074__$1.getTime());
if((G__18074__$2 == null)){
return null;
} else {
return (new Date(G__18074__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__18075 = obj;
var G__18075__$1 = (((G__18075 == null))?null:cljs_time.coerce.to_date_time(G__18075));
if((G__18075__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(cljs.core.cst$kw$date_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__18075__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
var temp__4655__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__4655__auto__)){
var dt = temp__4655__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__4655__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__4655__auto__)){
var dt = temp__4655__auto__;
var G__18076 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__18076.setHours(dt.getHours());

G__18076.setMinutes(dt.getMinutes());

G__18076.setSeconds(dt.getSeconds());

G__18076.setMilliseconds(dt.getMilliseconds());

return G__18076;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

var G__18077_18088 = cljs_time.coerce.to_date_time;
var G__18078_18089 = "null";
var G__18079_18090 = ((function (G__18077_18088,G__18078_18089){
return (function (_){
return null;
});})(G__18077_18088,G__18078_18089))
;
goog.object.set(G__18077_18088,G__18078_18089,G__18079_18090);

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
var G__18080 = (new goog.date.UtcDateTime());
G__18080.set(local_date__$1);

return G__18080;
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
var G__18081 = (new goog.date.UtcDateTime());
G__18081.setTime(local_date_time__$1.getTime());

return G__18081;
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

var G__18082_18091 = cljs_time.coerce.to_date_time;
var G__18083_18092 = "number";
var G__18084_18093 = ((function (G__18082_18091,G__18083_18092){
return (function (long$){
return cljs_time.coerce.from_long(long$);
});})(G__18082_18091,G__18083_18092))
;
goog.object.set(G__18082_18091,G__18083_18092,G__18084_18093);

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

var G__18085_18094 = cljs_time.coerce.to_date_time;
var G__18086_18095 = "string";
var G__18087_18096 = ((function (G__18085_18094,G__18086_18095){
return (function (string){
return cljs_time.coerce.from_string(string);
});})(G__18085_18094,G__18086_18095))
;
goog.object.set(G__18085_18094,G__18086_18095,G__18087_18096);
