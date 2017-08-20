// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
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
var x__28622__auto__ = (((obj == null))?null:obj);
var m__28623__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__28622__auto__)]);
if(!((m__28623__auto__ == null))){
return m__28623__auto__.call(null,obj);
} else {
var m__28623__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__28623__auto____$1 == null))){
return m__28623__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__29864 = millis;
if((G__29864 == null)){
return null;
} else {
return goog.date.UtcDateTime.fromTimestamp.call(null,G__29864);
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first.call(null,(function (){var iter__28742__auto__ = (function cljs_time$coerce$from_string_$_iter__29865(s__29866){
return (new cljs.core.LazySeq(null,(function (){
var s__29866__$1 = s__29866;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29866__$1);
if(temp__4657__auto__){
var s__29866__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29866__$2)){
var c__28740__auto__ = cljs.core.chunk_first.call(null,s__29866__$2);
var size__28741__auto__ = cljs.core.count.call(null,c__28740__auto__);
var b__29868 = cljs.core.chunk_buffer.call(null,size__28741__auto__);
if((function (){var i__29867 = (0);
while(true){
if((i__29867 < size__28741__auto__)){
var f = cljs.core._nth.call(null,c__28740__auto__,i__29867);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e29869){if((e29869 instanceof Error)){
var _ = e29869;
return null;
} else {
throw e29869;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__29868,d);

var G__29871 = (i__29867 + (1));
i__29867 = G__29871;
continue;
} else {
var G__29872 = (i__29867 + (1));
i__29867 = G__29872;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29868),cljs_time$coerce$from_string_$_iter__29865.call(null,cljs.core.chunk_rest.call(null,s__29866__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29868),null);
}
} else {
var f = cljs.core.first.call(null,s__29866__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e29870){if((e29870 instanceof Error)){
var _ = e29870;
return null;
} else {
throw e29870;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$coerce$from_string_$_iter__29865.call(null,cljs.core.rest.call(null,s__29866__$2)));
} else {
var G__29873 = cljs.core.rest.call(null,s__29866__$2);
s__29866__$1 = G__29873;
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
return iter__28742__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
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
var G__29874 = date;
var G__29874__$1 = (((G__29874 == null))?null:G__29874.getTime());
if((G__29874__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long.call(null,G__29874__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__29875 = obj;
var G__29875__$1 = (((G__29875 == null))?null:cljs_time.coerce.to_date_time.call(null,G__29875));
if((G__29875__$1 == null)){
return null;
} else {
return G__29875__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var G__29876 = obj;
var G__29876__$1 = (((G__29876 == null))?null:cljs_time.coerce.to_long.call(null,G__29876));
if((G__29876__$1 == null)){
return null;
} else {
return (G__29876__$1 / (1000));
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__29877 = obj;
var G__29877__$1 = (((G__29877 == null))?null:cljs_time.coerce.to_date_time.call(null,G__29877));
var G__29877__$2 = (((G__29877__$1 == null))?null:G__29877__$1.getTime());
if((G__29877__$2 == null)){
return null;
} else {
return (new Date(G__29877__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__29878 = obj;
var G__29878__$1 = (((G__29878 == null))?null:cljs_time.coerce.to_date_time.call(null,G__29878));
if((G__29878__$1 == null)){
return null;
} else {
return cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__29878__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
var temp__4655__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
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
var temp__4655__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4655__auto__)){
var dt = temp__4655__auto__;
var G__29879 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__29879.setHours(dt.getHours());

G__29879.setMinutes(dt.getMinutes());

G__29879.setSeconds(dt.getSeconds());

G__29879.setMilliseconds(dt.getMilliseconds());

return G__29879;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

goog.object.set(cljs_time.coerce.to_date_time,"null",(function (_){
return null;
}));

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date.call(null,date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
var G__29880 = (new goog.date.UtcDateTime());
G__29880.set(local_date__$1);

return G__29880;
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
var G__29881 = (new goog.date.UtcDateTime());
G__29881.setTime(local_date_time__$1.getTime());

return G__29881;
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

goog.object.set(cljs_time.coerce.to_date_time,"number",(function (long$){
return cljs_time.coerce.from_long.call(null,long$);
}));

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

goog.object.set(cljs_time.coerce.to_date_time,"string",(function (string){
return cljs_time.coerce.from_string.call(null,string);
}));

//# sourceMappingURL=coerce.js.map?rel=1503148883254
