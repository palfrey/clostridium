// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.format');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.internal.core');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.date');
goog.require('goog.date.duration');
goog.require('goog.string');
goog.require('goog.string.format');
cljs_time.format.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
cljs_time.format.days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], null);
cljs_time.format.abbreviate = (function cljs_time$format$abbreviate(n,s){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),n);
});
/**
 * **Note: not all formatters have been implemented yet.**
 * 
 *   The pattern syntax is mostly compatible with java.text.SimpleDateFormat -
 *   time zone names cannot be parsed and a few more symbols are supported. All
 *   ASCII letters are reserved as pattern letters, which are defined as follows:
 * 
 *  Symbol  Meaning                      Presentation  Examples
 *  ------  -------                      ------------  -------
 *  G       era                          text          AD
 *  C       century of era (>=0)         number        20
 *  Y       year of era (>=0)            year          1996
 * 
 *  x       weekyear                     year          1996
 *  w       week of weekyear             number        27
 *  e       day of week                  number        2
 *  E       day of week                  text          Tuesday; Tue
 * 
 *  y       year                         year          1996
 *  D       day of year                  number        189
 *  M       month of year                month         July; Jul; 07
 *  d       day of month                 number        10
 * 
 *  a       halfday of day               text          PM
 *  K       hour of halfday (0~11)       number        0
 *  h       clockhour of halfday (1~12)  number        12
 * 
 *  H       hour of day (0~23)           number        0
 *  k       clockhour of day (1~24)      number        24
 *  m       minute of hour               number        30
 *  s       second of minute             number        55
 *  S       fraction of second           number        978
 *  a       meridiem                     text          am; pm
 *  A       meridiem                     text          AM; PM
 * 
 *  z       time zone                    text          Pacific Standard Time; PST
 *  Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles
 * 
 *  '       escape for text              delimiter
 *  ''      single quote                 literal       '
 * 
 *   The count of pattern letters determine the format.
 * 
 *   **Text:** If the number of pattern letters is 4 or more, the full form is used;
 *   otherwise a short or abbreviated form is used if available.
 * 
 *   **Number:** The minimum number of digits. Shorter numbers are zero-padded to this
 *   amount.
 * 
 *   **Year:** Numeric presentation for year and weekyear fields are handled
 *   specially. For example, if the count of 'y' is 2, the year will be displayed
 *   as the zero-based year of the century, which is two digits.
 * 
 *   **Month:** 3 or over, use text, otherwise use number.
 * 
 *   **Zone:** 'Z' outputs offset without a colon, 'ZZ' outputs the offset with a
 *   colon, 'ZZZ' or more outputs the zone id.
 * 
 *   **Zone names:** Time zone names ('z') cannot be parsed.
 * 
 *   Any characters in the pattern that are not in the ranges of ['a'..'z'] and
 *   ['A'..'Z'] will be treated as quoted text. For instance, characters like ':',
 *   '.', ' ', '#' and '?' will appear in the resulting time text even they are
 *   not embraced within single quotes.
 */
cljs_time.format.date_formatters = (function (){var d = (function (p1__17865_SHARP_){
return p1__17865_SHARP_.getDate();
});
var M = ((function (d){
return (function (p1__17866_SHARP_){
return (p1__17866_SHARP_.getMonth() + (1));
});})(d))
;
var y = ((function (d,M){
return (function (p1__17867_SHARP_){
return p1__17867_SHARP_.getYear();
});})(d,M))
;
var h = ((function (d,M,y){
return (function (p1__17868_SHARP_){
var hr = cljs.core.mod(p1__17868_SHARP_.getHours(),(12));
if((hr === (0))){
return (12);
} else {
return hr;
}
});})(d,M,y))
;
var a = ((function (d,M,y,h){
return (function (p1__17869_SHARP_){
if((p1__17869_SHARP_.getHours() < (12))){
return "am";
} else {
return "pm";
}
});})(d,M,y,h))
;
var A = ((function (d,M,y,h,a){
return (function (p1__17870_SHARP_){
if((p1__17870_SHARP_.getHours() < (12))){
return "AM";
} else {
return "PM";
}
});})(d,M,y,h,a))
;
var H = ((function (d,M,y,h,a,A){
return (function (p1__17871_SHARP_){
return p1__17871_SHARP_.getHours();
});})(d,M,y,h,a,A))
;
var m = ((function (d,M,y,h,a,A,H){
return (function (p1__17872_SHARP_){
return p1__17872_SHARP_.getMinutes();
});})(d,M,y,h,a,A,H))
;
var s = ((function (d,M,y,h,a,A,H,m){
return (function (p1__17873_SHARP_){
return p1__17873_SHARP_.getSeconds();
});})(d,M,y,h,a,A,H,m))
;
var S = ((function (d,M,y,h,a,A,H,m,s){
return (function (p1__17874_SHARP_){
return p1__17874_SHARP_.getMilliseconds();
});})(d,M,y,h,a,A,H,m,s))
;
var Z = ((function (d,M,y,h,a,A,H,m,s,S){
return (function (p1__17875_SHARP_){
return p1__17875_SHARP_.getTimezoneOffsetString();
});})(d,M,y,h,a,A,H,m,s,S))
;
var doy = ((function (d,M,y,h,a,A,H,m,s,S,Z){
return (function (p1__17876_SHARP_){
return p1__17876_SHARP_.getDayOfYear();
});})(d,M,y,h,a,A,H,m,s,S,Z))
;
var dow = ((function (d,M,y,h,a,A,H,m,s,S,Z,doy){
return (function (p1__17877_SHARP_){
return p1__17877_SHARP_.getDay();
});})(d,M,y,h,a,A,H,m,s,S,Z,doy))
;
return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","ww","MMM","YYYY","e","ss","DDD","SSS","dow","YY","M","mm","S","MM","EEE","Z","H","DD","dd","a","hh","dth","yyyy","A","EEEE","h","xxxx","m","yy","D","MMMM"],[d,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__17889_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(H(p1__17889_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,s,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__17893_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(p1__17893_SHARP_.getWeekNumber());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__17884_SHARP_){
return cljs_time.format.abbreviate((3),(function (){var G__17894 = (M(p1__17884_SHARP_) - (1));
return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1(G__17894) : cljs_time.format.months.call(null,G__17894));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,y,dow,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__17891_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(s(p1__17891_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__17892_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2(S(p1__17892_SHARP_),(3));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__17880_SHARP_){
var G__17895 = dow(p1__17880_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__17895) : cljs_time.format.days.call(null,G__17895));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__17887_SHARP_){
return cljs.core.mod(y(p1__17887_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,M,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__17890_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(m(p1__17890_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,S,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__17883_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(M(p1__17883_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__17881_SHARP_){
return cljs_time.format.abbreviate((3),(function (){var G__17896 = dow(p1__17881_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__17896) : cljs_time.format.days.call(null,G__17896));
})());
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,Z,H,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__17878_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(d(p1__17878_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,a,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__17888_SHARP_){
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1(h(p1__17888_SHARP_));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__17879_SHARP_){
var d__$1 = d(p1__17879_SHARP_);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17897 = d__$1;
switch (G__17897) {
case (1):
return "st";

break;
case (2):
return "nd";

break;
case (3):
return "rd";

break;
case (21):
return "st";

break;
case (22):
return "nd";

break;
case (23):
return "rd";

break;
case (31):
return "st";

break;
default:
return "th";

}
})())].join('');
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,y,A,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__17882_SHARP_){
var G__17898 = dow(p1__17882_SHARP_);
return (cljs_time.format.days.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.days.cljs$core$IFn$_invoke$arity$1(G__17898) : cljs_time.format.days.call(null,G__17898));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,h,y,m,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__17886_SHARP_){
return cljs.core.mod(y(p1__17886_SHARP_),(100));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
,doy,((function (d,M,y,h,a,A,H,m,s,S,Z,doy,dow){
return (function (p1__17885_SHARP_){
var G__17899 = (M(p1__17885_SHARP_) - (1));
return (cljs_time.format.months.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.months.cljs$core$IFn$_invoke$arity$1(G__17899) : cljs_time.format.months.call(null,G__17899));
});})(d,M,y,h,a,A,H,m,s,S,Z,doy,dow))
]);
})();
cljs_time.format.timezone_adjustment = (function cljs_time$format$timezone_adjustment(d,timezone_string){
var vec__17902 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(timezone_string,/Z|(?:([-+])(\d{2})(?::?(\d{2}))?)$/);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17902,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17902,(1),null);
var hh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17902,(2),null);
var mm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17902,(3),null);
if(cljs.core.truth_((function (){var and__7613__auto__ = sign;
if(cljs.core.truth_(and__7613__auto__)){
var and__7613__auto____$1 = hh;
if(cljs.core.truth_(and__7613__auto____$1)){
return mm;
} else {
return and__7613__auto____$1;
}
} else {
return and__7613__auto__;
}
})())){
var sign_17912__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"-"))?cljs_time.core.plus:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sign,"+"))?cljs_time.core.minus:null));
var vec__17905_17913 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sign_17912__$1,vec__17902,_,sign,hh,mm){
return (function (p1__17901_SHARP_){
return parseInt(p1__17901_SHARP_,(10));
});})(sign_17912__$1,vec__17902,_,sign,hh,mm))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hh,mm], null));
var hh_17914__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17905_17913,(0),null);
var mm_17915__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17905_17913,(1),null);
var adjusted_17916 = (function (){var G__17908 = (function (){var G__17910 = d;
var G__17911 = cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(hh_17914__$1);
return (sign_17912__$1.cljs$core$IFn$_invoke$arity$2 ? sign_17912__$1.cljs$core$IFn$_invoke$arity$2(G__17910,G__17911) : sign_17912__$1.call(null,G__17910,G__17911));
})();
var G__17909 = cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(mm_17915__$1);
return (sign_17912__$1.cljs$core$IFn$_invoke$arity$2 ? sign_17912__$1.cljs$core$IFn$_invoke$arity$2(G__17908,G__17909) : sign_17912__$1.call(null,G__17908,G__17909));
})();
d.setTime(adjusted_17916.getTime());
} else {
}

return d;
});
cljs_time.format.date_parsers = (function (){var parse_int = (function (p1__17917_SHARP_){
return parseInt(p1__17917_SHARP_,(10));
});
var assoc_fn = ((function (parse_int){
return (function (kw){
return ((function (parse_int){
return (function (p1__17918_SHARP_,p2__17919_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17918_SHARP_,kw,parse_int(p2__17919_SHARP_));
});
;})(parse_int))
});})(parse_int))
;
var y = assoc_fn(cljs.core.cst$kw$years);
var d = assoc_fn(cljs.core.cst$kw$days);
var M = ((function (parse_int,assoc_fn,y,d){
return (function (p1__17920_SHARP_,p2__17921_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17920_SHARP_,cljs.core.cst$kw$months,(parse_int(p2__17921_SHARP_) - (1)));
});})(parse_int,assoc_fn,y,d))
;
var h = ((function (parse_int,assoc_fn,y,d,M){
return (function (p1__17922_SHARP_,p2__17923_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17922_SHARP_,cljs.core.cst$kw$hours,cljs.core.mod(parse_int(p2__17923_SHARP_),(12)));
});})(parse_int,assoc_fn,y,d,M))
;
var a = ((function (parse_int,assoc_fn,y,d,M,h){
return (function (p__17930,x){
var map__17931 = p__17930;
var map__17931__$1 = ((((!((map__17931 == null)))?((((map__17931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17931):map__17931);
var date = map__17931__$1;
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,cljs.core.cst$kw$hours);
if(cljs.core.truth_((function (){var G__17934 = clojure.string.lower_case(x);
var fexpr__17933 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["p",null,"pm",null], null), null);
return (fexpr__17933.cljs$core$IFn$_invoke$arity$1 ? fexpr__17933.cljs$core$IFn$_invoke$arity$1(G__17934) : fexpr__17933.call(null,G__17934));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(date,cljs.core.cst$kw$hours,(function (){var hours__$1 = ((12) + hours);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hours__$1,(24))){
return (0);
} else {
return hours__$1;
}
})());
} else {
return date;
}
});})(parse_int,assoc_fn,y,d,M,h))
;
var H = assoc_fn(cljs.core.cst$kw$hours);
var m = assoc_fn(cljs.core.cst$kw$minutes);
var s = assoc_fn(cljs.core.cst$kw$seconds);
var S = assoc_fn(cljs.core.cst$kw$millis);
var MMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (p1__17925_SHARP_,p2__17924_SHARP_){
var full = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S){
return (function (m__$1){
return cljs.core.re_seq(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17924_SHARP_)].join('')),m__$1);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
,cljs_time.format.months));
return M(p1__17925_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs_time.internal.core.index_of(cljs_time.format.months,full) + (1)))].join(''));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S))
;
var MMMM = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM){
return (function (p1__17926_SHARP_,p2__17927_SHARP_){
return M(p1__17926_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs_time.internal.core.index_of(cljs_time.format.months,p2__17927_SHARP_) + (1)))].join(''));
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM))
;
var skip = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM){
return (function() { 
var G__17935__delegate = function (x,args){
return x;
};
var G__17935 = function (x,var_args){
var args = null;
if (arguments.length > 1) {
var G__17936__i = 0, G__17936__a = new Array(arguments.length -  1);
while (G__17936__i < G__17936__a.length) {G__17936__a[G__17936__i] = arguments[G__17936__i + 1]; ++G__17936__i;}
  args = new cljs.core.IndexedSeq(G__17936__a,0,null);
} 
return G__17935__delegate.call(this,x,args);};
G__17935.cljs$lang$maxFixedArity = 1;
G__17935.cljs$lang$applyTo = (function (arglist__17937){
var x = cljs.core.first(arglist__17937);
var args = cljs.core.rest(arglist__17937);
return G__17935__delegate(x,args);
});
G__17935.cljs$core$IFn$_invoke$arity$variadic = G__17935__delegate;
return G__17935;
})()
;})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM))
;
var tz = ((function (parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip){
return (function (p1__17928_SHARP_,p2__17929_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17928_SHARP_,cljs.core.cst$kw$time_DASH_zone,p2__17929_SHARP_);
});})(parse_int,assoc_fn,y,d,M,h,a,H,m,s,S,MMM,MMMM,skip))
;
return cljs.core.PersistentHashMap.fromArrays(["d","HH","ZZ","s","MMM","YYYY","ss","DDD","SSS","dow","YY","M","mm","S","MM","Y","EEE","Z","H","E","DD","dd","a","hh","dth","y","yyyy","A","EEEE","h","m","yy","D","MMMM"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.months))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),MMM], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{3})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",S], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:\\d{2})|(?:\\b\\d{1,2}\\b))",M], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((?:(?:\\+|-)\\d{2}:?\\d{2})|Z+)",tz], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",H], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs_time.format.abbreviate,(3)),cljs_time.format.days))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})(?:st|nd|rd|th)",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(am|pm|a|p|AM|PM|A|P)",a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.days)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),skip], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,2})",m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{2,4})",y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(\\d{1,3})",d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs_time.format.months)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),MMMM], null)]);
})();
cljs_time.format.date_setters = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$years,(function (p1__17938_SHARP_,p2__17939_SHARP_){
return p1__17938_SHARP_.setYear(p2__17939_SHARP_);
}),cljs.core.cst$kw$months,(function (p1__17940_SHARP_,p2__17941_SHARP_){
return p1__17940_SHARP_.setMonth(p2__17941_SHARP_);
}),cljs.core.cst$kw$days,(function (p1__17942_SHARP_,p2__17943_SHARP_){
return p1__17942_SHARP_.setDate(p2__17943_SHARP_);
}),cljs.core.cst$kw$hours,(function (p1__17944_SHARP_,p2__17945_SHARP_){
return p1__17944_SHARP_.setHours(p2__17945_SHARP_);
}),cljs.core.cst$kw$minutes,(function (p1__17946_SHARP_,p2__17947_SHARP_){
return p1__17946_SHARP_.setMinutes(p2__17947_SHARP_);
}),cljs.core.cst$kw$seconds,(function (p1__17948_SHARP_,p2__17949_SHARP_){
return p1__17948_SHARP_.setSeconds(p2__17949_SHARP_);
}),cljs.core.cst$kw$millis,(function (p1__17950_SHARP_,p2__17951_SHARP_){
return p1__17950_SHARP_.setMilliseconds(p2__17951_SHARP_);
}),cljs.core.cst$kw$time_DASH_zone,cljs_time.format.timezone_adjustment], null);
cljs_time.format.parser_sort_order_pred = (function cljs_time$format$parser_sort_order_pred(parser){
return cljs_time.internal.core.index_of(new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, ["YYYY","YY","Y","yyyy","yy","y","d","dd","D","DD","DDD","dth","M","MM","MMM","MMMM","dow","h","H","m","s","S","hh","HH","mm","ss","a","A","SSS","Z","ZZ"], null),parser);
});
cljs_time.format.date_format_pattern = cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(")|(",cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.keys(cljs_time.format.date_formatters))))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''));
cljs_time.format.old_string_replace = (function cljs_time$format$old_string_replace(s,match,replacement){
return s.replace((new RegExp(match.source,"g")),replacement);
});
cljs_time.format.date_parse_pattern = (function cljs_time$format$date_parse_pattern(formatter){
return cljs.core.re_pattern(cljs_time.format.old_string_replace(cljs_time.format.old_string_replace(formatter,/'([^']+)'/,"$1"),cljs_time.format.date_format_pattern,(function (p1__17952_SHARP_){
return cljs.core.first((cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(p1__17952_SHARP_) : cljs_time.format.date_parsers.call(null,p1__17952_SHARP_)));
})));
});
cljs_time.format.parser_fn = (function cljs_time$format$parser_fn(fmts){
return (function (s){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs_time.format.parser_sort_order_pred,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.nfirst(cljs.core.re_seq(cljs_time.format.date_parse_pattern(fmts),s)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.re_seq(cljs_time.format.date_format_pattern,fmts)))));
});
});
cljs_time.format.formatter_fn = (function cljs_time$format$formatter_fn(fmts,formatters){
return (function() { 
var G__17964__delegate = function (date,p__17954){
var vec__17955 = p__17954;
var formatter_overrides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17955,(0),null);
var a = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$c,(0)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.format.old_string_replace(fmts,/'([^']+)'/,((function (a,vec__17955,formatter_overrides){
return (function (x,s){
if((cljs.core.seq(s)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.first(x))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.last(x)))){
var map__17958 = cljs.core.deref(a);
var map__17958__$1 = ((((!((map__17958 == null)))?((((map__17958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17958):map__17958);
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17958__$1,cljs.core.cst$kw$c);
var k = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("&&&&"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$replace,k], null),cljs.core.constantly(s));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$c], null),cljs.core.inc);

return k;
} else {
return x;
}
});})(a,vec__17955,formatter_overrides))
),cljs.core.re_pattern((function (){var G__17960 = cljs_time.format.date_format_pattern.source;
if(cljs.core.truth_(cljs.core.cst$kw$replace.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(a)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(")|(",cljs.core.keys(cljs.core.cst$kw$replace.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(a))))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17960)].join('');
} else {
return G__17960;
}
})()),((function (a,vec__17955,formatter_overrides){
return (function (p1__17953_SHARP_){
var fexpr__17962 = (function (){var fexpr__17963 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([formatters,formatter_overrides,cljs.core.cst$kw$replace.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(a))], 0));
return (fexpr__17963.cljs$core$IFn$_invoke$arity$1 ? fexpr__17963.cljs$core$IFn$_invoke$arity$1(p1__17953_SHARP_) : fexpr__17963.call(null,p1__17953_SHARP_));
})();
return (fexpr__17962.cljs$core$IFn$_invoke$arity$1 ? fexpr__17962.cljs$core$IFn$_invoke$arity$1(date) : fexpr__17962.call(null,date));
});})(a,vec__17955,formatter_overrides))
], null);
};
var G__17964 = function (date,var_args){
var p__17954 = null;
if (arguments.length > 1) {
var G__17965__i = 0, G__17965__a = new Array(arguments.length -  1);
while (G__17965__i < G__17965__a.length) {G__17965__a[G__17965__i] = arguments[G__17965__i + 1]; ++G__17965__i;}
  p__17954 = new cljs.core.IndexedSeq(G__17965__a,0,null);
} 
return G__17964__delegate.call(this,date,p__17954);};
G__17964.cljs$lang$maxFixedArity = 1;
G__17964.cljs$lang$applyTo = (function (arglist__17966){
var date = cljs.core.first(arglist__17966);
var p__17954 = cljs.core.rest(arglist__17966);
return G__17964__delegate(date,p__17954);
});
G__17964.cljs$core$IFn$_invoke$arity$variadic = G__17964__delegate;
return G__17964;
})()
;
});
cljs_time.format.formatter = (function cljs_time$format$formatter(var_args){
var G__17968 = arguments.length;
switch (G__17968) {
case 1:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmts){
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2(fmts,cljs_time.core.utc);
});

cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmts,dtz){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$format_DASH_str,fmts,cljs.core.cst$kw$formatters,cljs_time.format.date_formatters], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$cljs_DASH_time$format_SLASH_formatter], null));
});

cljs_time.format.formatter.cljs$lang$maxFixedArity = 2;

cljs_time.format.formatter_local = (function cljs_time$format$formatter_local(fmts){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$format_DASH_str,fmts,cljs.core.cst$kw$formatters,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ZZ",cljs.core.constantly("")], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$cljs_DASH_time$format_SLASH_formatter], null));
});
cljs_time.format.not_implemented = (function cljs_time$format$not_implemented(sym){
return (function (){
throw cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$not_DASH_implemented,cljs.core.cst$kw$message,cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s not implemented yet",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0))], null));
});
});
/**
 * Return a copy of a formatter that uses the given default year.
 */
cljs_time.format.with_default_year = (function cljs_time$format$with_default_year(f,default_year){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$default_DASH_year,default_year);
});
/**
 * Map of ISO 8601 and a single RFC 822 formatters that can be used
 * for parsing and, in most cases, printing.
 * 
 * Note: due to current implementation limitations, timezone information
 * cannot be kept. Although the correct offset will be applied to UTC
 * time if supplied.
 */
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$date_DASH_element_DASH_parser,cljs.core.cst$kw$hour_DASH_minute,cljs.core.cst$kw$t_DASH_time,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date,cljs.core.cst$kw$date,cljs.core.cst$kw$hour,cljs.core.cst$kw$time_DASH_no_DASH_ms,cljs.core.cst$kw$weekyear_DASH_week_DASH_day,cljs.core.cst$kw$week_DASH_date_DASH_time,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second_DASH_fraction,cljs.core.cst$kw$basic_DASH_date_DASH_time,cljs.core.cst$kw$date_DASH_time,cljs.core.cst$kw$basic_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$date_DASH_parser,cljs.core.cst$kw$basic_DASH_week_DASH_date,cljs.core.cst$kw$basic_DASH_t_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$local_DASH_time,cljs.core.cst$kw$date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$year_DASH_month_DASH_day,cljs.core.cst$kw$date_DASH_opt_DASH_time,cljs.core.cst$kw$rfc822,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second_DASH_ms,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date_DASH_time,cljs.core.cst$kw$ordinal_DASH_date,cljs.core.cst$kw$hour_DASH_minute_DASH_second_DASH_fraction,cljs.core.cst$kw$date_DASH_hour_DASH_minute,cljs.core.cst$kw$time,cljs.core.cst$kw$basic_DASH_week_DASH_date_DASH_time,cljs.core.cst$kw$weekyear,cljs.core.cst$kw$basic_DASH_time,cljs.core.cst$kw$hour_DASH_minute_DASH_second,cljs.core.cst$kw$ordinal_DASH_date_DASH_time,cljs.core.cst$kw$ordinal_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$hour_DASH_minute_DASH_second_DASH_ms,cljs.core.cst$kw$time_DASH_parser,cljs.core.cst$kw$date_DASH_time_DASH_parser,cljs.core.cst$kw$year,cljs.core.cst$kw$t_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_week_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_date,cljs.core.cst$kw$weekyear_DASH_week,cljs.core.cst$kw$local_DASH_date,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$year_DASH_month,cljs.core.cst$kw$local_DASH_date_DASH_opt_DASH_time,cljs.core.cst$kw$week_DASH_date,cljs.core.cst$kw$date_DASH_hour,cljs.core.cst$kw$time_DASH_element_DASH_parser,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second,cljs.core.cst$kw$week_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$mysql,cljs.core.cst$kw$basic_DASH_t_DASH_time],[cljs_time.format.not_implemented(cljs.core.cst$sym$dateElementParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmssZ"),cljs_time.format.not_implemented(cljs.core.cst$sym$dateParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmssZ"),cljs_time.format.not_implemented(cljs.core.cst$sym$localTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.not_implemented(cljs.core.cst$sym$dateOptionalTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$timeParser),cljs_time.format.not_implemented(cljs.core.cst$sym$dateTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww"),cljs_time.format.not_implemented(cljs.core.cst$sym$localDateParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM"),cljs_time.format.not_implemented(cljs.core.cst$sym$localDateOptionalTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH"),cljs_time.format.not_implemented(cljs.core.cst$sym$timeElementParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmss.SSSZ")]);
cljs_time.format.parsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$date_DASH_element_DASH_parser,null,cljs.core.cst$kw$date_DASH_parser,null,cljs.core.cst$kw$local_DASH_time,null,cljs.core.cst$kw$date_DASH_opt_DASH_time,null,cljs.core.cst$kw$time_DASH_parser,null,cljs.core.cst$kw$date_DASH_time_DASH_parser,null,cljs.core.cst$kw$local_DASH_date,null,cljs.core.cst$kw$local_DASH_date_DASH_opt_DASH_time,null,cljs.core.cst$kw$time_DASH_element_DASH_parser,null], null), null);
cljs_time.format.printers = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs_time.format.formatters)),cljs_time.format.parsers);
cljs_time.format.part_splitter_regex = /(?:(?!(?:\+|-)\d{2}):(?!\d{2}$))|[^\w:]+|.[TW]|'[^']+'/;

/**
 * @interface
 */
cljs_time.format.IDateMap = function(){};

cljs_time.format.date_map = (function cljs_time$format$date_map(date){
if((!((date == null))) && (!((date.cljs_time$format$IDateMap$date_map$arity$1 == null)))){
return date.cljs_time$format$IDateMap$date_map$arity$1(date);
} else {
var x__8308__auto__ = (((date == null))?null:date);
var m__8309__auto__ = (cljs_time.format.date_map[goog.typeOf(x__8308__auto__)]);
if(!((m__8309__auto__ == null))){
return (m__8309__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8309__auto__.cljs$core$IFn$_invoke$arity$1(date) : m__8309__auto__.call(null,date));
} else {
var m__8309__auto____$1 = (cljs_time.format.date_map["_"]);
if(!((m__8309__auto____$1 == null))){
return (m__8309__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8309__auto____$1.cljs$core$IFn$_invoke$arity$1(date) : m__8309__auto____$1.call(null,date));
} else {
throw cljs.core.missing_protocol("IDateMap.date-map",date);
}
}
}
});

goog.date.Date.prototype.cljs_time$format$IDateMap$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$format$IDateMap$date_map$arity$1 = (function (date){
var date__$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$years,(0),cljs.core.cst$kw$months,(0),cljs.core.cst$kw$days,(1)], null);
});

goog.date.DateTime.prototype.cljs_time$format$IDateMap$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$format$IDateMap$date_map$arity$1 = (function (date){
var date__$1 = this;
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$years,(0),cljs.core.cst$kw$months,(0),cljs.core.cst$kw$days,(1),cljs.core.cst$kw$hours,(0),cljs.core.cst$kw$minutes,(0),cljs.core.cst$kw$seconds,(0),cljs.core.cst$kw$millis,(0)], null);
});

goog.date.UtcDateTime.prototype.cljs_time$format$IDateMap$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$format$IDateMap$date_map$arity$1 = (function (date){
var date__$1 = this;
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$years,(0),cljs.core.cst$kw$months,(0),cljs.core.cst$kw$days,(1),cljs.core.cst$kw$hours,(0),cljs.core.cst$kw$minutes,(0),cljs.core.cst$kw$seconds,(0),cljs.core.cst$kw$millis,(0),cljs.core.cst$kw$time_DASH_zone,null], null);
});
cljs_time.format.parse_STAR_ = (function cljs_time$format$parse_STAR_(constructor$,p__17972,s){
var map__17973 = p__17972;
var map__17973__$1 = ((((!((map__17973 == null)))?((((map__17973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17973):map__17973);
var fmt = map__17973__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17973__$1,cljs.core.cst$kw$format_DASH_str);
var default_year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17973__$1,cljs.core.cst$kw$default_DASH_year);
if(cljs.core.seq(s)){
} else {
throw (new Error("Assert failed: (seq s)"));
}

var min_parts = cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,cljs_time.format.part_splitter_regex));
var parse_fn = cljs_time.format.parser_fn(format_str);
var parse_seq = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parse_fn,min_parts,map__17973,map__17973__$1,fmt,format_str,default_year){
return (function (p__17975){
var vec__17976 = p__17975;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17976,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17976,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,cljs.core.second((cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.date_parsers.cljs$core$IFn$_invoke$arity$1(b) : cljs_time.format.date_parsers.call(null,b)))], null);
});})(parse_fn,min_parts,map__17973,map__17973__$1,fmt,format_str,default_year))
,(parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(s) : parse_fn.call(null,s))));
if((cljs.core.count(parse_seq) >= min_parts)){
var d = (new constructor$((0),(0),(0),(0),(0),(0),(0)));
var empty = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs_time.format.date_map(d),cljs.core.cst$kw$years,(function (){var or__7625__auto__ = default_year;
if(cljs.core.truth_(or__7625__auto__)){
return or__7625__auto__;
} else {
return (0);
}
})());
var setters = cljs.core.select_keys(cljs_time.format.date_setters,cljs.core.keys(empty));
cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(((function (d,empty,setters,parse_fn,parse_seq,min_parts,map__17973,map__17973__$1,fmt,format_str,default_year){
return (function (p1__17970_SHARP_,p2__17971_SHARP_){
return (p1__17970_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__17970_SHARP_.cljs$core$IFn$_invoke$arity$2(d,p2__17971_SHARP_) : p1__17970_SHARP_.call(null,d,p2__17971_SHARP_));
});})(d,empty,setters,parse_fn,parse_seq,min_parts,map__17973,map__17973__$1,fmt,format_str,default_year))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([setters,cljs_time.internal.core.valid_date_QMARK_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (d,empty,setters,parse_fn,parse_seq,min_parts,map__17973,map__17973__$1,fmt,format_str,default_year){
return (function (date,p__17979){
var vec__17980 = p__17979;
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17980,(0),null);
var do_parse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17980,(1),null);
return (do_parse.cljs$core$IFn$_invoke$arity$2 ? do_parse.cljs$core$IFn$_invoke$arity$2(date,part) : do_parse.call(null,date,part));
});})(d,empty,setters,parse_fn,parse_seq,min_parts,map__17973,map__17973__$1,fmt,format_str,default_year))
,empty,parse_seq))], 0));

return d;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("The parser could not match the input string.",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$parser_DASH_no_DASH_match], null));
}
});
/**
 * Returns a DateTime instance in the UTC time zone obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse = (function cljs_time$format$parse(var_args){
var G__17984 = arguments.length;
switch (G__17984) {
case 2:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.UtcDateTime,fmt,s);
});

cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__8428__auto__ = (function cljs_time$format$iter__17985(s__17986){
return (new cljs.core.LazySeq(null,(function (){
var s__17986__$1 = s__17986;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17986__$1);
if(temp__4657__auto__){
var s__17986__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17986__$2)){
var c__8426__auto__ = cljs.core.chunk_first(s__17986__$2);
var size__8427__auto__ = cljs.core.count(c__8426__auto__);
var b__17988 = cljs.core.chunk_buffer(size__8427__auto__);
if((function (){var i__17987 = (0);
while(true){
if((i__17987 < size__8427__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8426__auto__,i__17987);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e17989){var _ = e17989;
return null;
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__17988,d);

var G__17992 = (i__17987 + (1));
i__17987 = G__17992;
continue;
} else {
var G__17993 = (i__17987 + (1));
i__17987 = G__17993;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17988),cljs_time$format$iter__17985(cljs.core.chunk_rest(s__17986__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17988),null);
}
} else {
var f = cljs.core.first(s__17986__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e17990){var _ = e17990;
return null;
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__17985(cljs.core.rest(s__17986__$2)));
} else {
var G__17994 = cljs.core.rest(s__17986__$2);
s__17986__$1 = G__17994;
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
});

cljs_time.format.parse.cljs$lang$maxFixedArity = 2;

/**
 * Returns a local DateTime instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local = (function cljs_time$format$parse_local(var_args){
var G__17996 = arguments.length;
switch (G__17996) {
case 2:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.DateTime,fmt,s);
});

cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__8428__auto__ = (function cljs_time$format$iter__17997(s__17998){
return (new cljs.core.LazySeq(null,(function (){
var s__17998__$1 = s__17998;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__17998__$1);
if(temp__4657__auto__){
var s__17998__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17998__$2)){
var c__8426__auto__ = cljs.core.chunk_first(s__17998__$2);
var size__8427__auto__ = cljs.core.count(c__8426__auto__);
var b__18000 = cljs.core.chunk_buffer(size__8427__auto__);
if((function (){var i__17999 = (0);
while(true){
if((i__17999 < size__8427__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8426__auto__,i__17999);
var d = (function (){try{return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e18001){if((e18001 instanceof Error)){
var _ = e18001;
return null;
} else {
throw e18001;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__18000,d);

var G__18004 = (i__17999 + (1));
i__17999 = G__18004;
continue;
} else {
var G__18005 = (i__17999 + (1));
i__17999 = G__18005;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18000),cljs_time$format$iter__17997(cljs.core.chunk_rest(s__17998__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18000),null);
}
} else {
var f = cljs.core.first(s__17998__$2);
var d = (function (){try{return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e18002){if((e18002 instanceof Error)){
var _ = e18002;
return null;
} else {
throw e18002;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__17997(cljs.core.rest(s__17998__$2)));
} else {
var G__18006 = cljs.core.rest(s__17998__$2);
s__17998__$1 = G__18006;
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
});

cljs_time.format.parse_local.cljs$lang$maxFixedArity = 2;

/**
 * Returns a local Date instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local_date = (function cljs_time$format$parse_local_date(var_args){
var G__18008 = arguments.length;
switch (G__18008) {
case 2:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.format.parse_STAR_(goog.date.Date,fmt,s);
});

cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__8428__auto__ = (function cljs_time$format$iter__18009(s__18010){
return (new cljs.core.LazySeq(null,(function (){
var s__18010__$1 = s__18010;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18010__$1);
if(temp__4657__auto__){
var s__18010__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18010__$2)){
var c__8426__auto__ = cljs.core.chunk_first(s__18010__$2);
var size__8427__auto__ = cljs.core.count(c__8426__auto__);
var b__18012 = cljs.core.chunk_buffer(size__8427__auto__);
if((function (){var i__18011 = (0);
while(true){
if((i__18011 < size__8427__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8426__auto__,i__18011);
var d = (function (){try{return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e18013){if((e18013 instanceof Error)){
var _ = e18013;
return null;
} else {
throw e18013;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__18012,d);

var G__18016 = (i__18011 + (1));
i__18011 = G__18016;
continue;
} else {
var G__18017 = (i__18011 + (1));
i__18011 = G__18017;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18012),cljs_time$format$iter__18009(cljs.core.chunk_rest(s__18010__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18012),null);
}
} else {
var f = cljs.core.first(s__18010__$2);
var d = (function (){try{return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e18014){if((e18014 instanceof Error)){
var _ = e18014;
return null;
} else {
throw e18014;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__18009(cljs.core.rest(s__18010__$2)));
} else {
var G__18018 = cljs.core.rest(s__18010__$2);
s__18010__$1 = G__18018;
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
});

cljs_time.format.parse_local_date.cljs$lang$maxFixedArity = 2;

/**
 * Returns a string representing the given DateTime instance in UTC and in the
 * form determined by the given formatter.
 */
cljs_time.format.unparse = (function cljs_time$format$unparse(p__18019,dt){
var map__18020 = p__18019;
var map__18020__$1 = ((((!((map__18020 == null)))?((((map__18020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18020):map__18020);
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18020__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18020__$1,cljs.core.cst$kw$formatters);
if(!((dt == null))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error("Assert failed: (instance? goog.date.DateTime dt)"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.format.old_string_replace,(function (){var fexpr__18022 = cljs_time.format.formatter_fn(format_str,formatters);
return (fexpr__18022.cljs$core$IFn$_invoke$arity$1 ? fexpr__18022.cljs$core$IFn$_invoke$arity$1(dt) : fexpr__18022.call(null,dt));
})());
});
/**
 * Returns a string representing the given local DateTime instance in the
 *   form determined by the given formatter.
 */
cljs_time.format.unparse_local = (function cljs_time$format$unparse_local(p__18023,dt){
var map__18024 = p__18023;
var map__18024__$1 = ((((!((map__18024 == null)))?((((map__18024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18024):map__18024);
var fmt = map__18024__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18024__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18024__$1,cljs.core.cst$kw$formatters);
if(!((dt == null))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error("Assert failed: (instance? goog.date.DateTime dt)"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.format.old_string_replace,(function (){var G__18027 = dt;
var G__18028 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ZZ",cljs.core.constantly("")], 0));
var fexpr__18026 = cljs_time.format.formatter_fn(format_str,formatters);
return (fexpr__18026.cljs$core$IFn$_invoke$arity$2 ? fexpr__18026.cljs$core$IFn$_invoke$arity$2(G__18027,G__18028) : fexpr__18026.call(null,G__18027,G__18028));
})());
});
/**
 * Returns a string representing the given local Date instance in the form
 *   determined by the given formatter.
 */
cljs_time.format.unparse_local_date = (function cljs_time$format$unparse_local_date(p__18029,dt){
var map__18030 = p__18029;
var map__18030__$1 = ((((!((map__18030 == null)))?((((map__18030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18030):map__18030);
var fmt = map__18030__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18030__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18030__$1,cljs.core.cst$kw$formatters);
if(!((dt == null))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.Date)){
} else {
throw (new Error("Assert failed: (instance? goog.date.Date dt)"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.format.old_string_replace,(function (){var G__18033 = dt;
var G__18034 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs_time.format.date_formatters,"Z",cljs.core.constantly(""),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ZZ",cljs.core.constantly("")], 0));
var fexpr__18032 = cljs_time.format.formatter_fn(format_str,formatters);
return (fexpr__18032.cljs$core$IFn$_invoke$arity$2 ? fexpr__18032.cljs$core$IFn$_invoke$arity$2(G__18033,G__18034) : fexpr__18032.call(null,G__18033,G__18034));
})());
});
/**
 * Shows how a given DateTime, or by default the current time, would be
 * formatted with each of the available printing formatters.
 */
cljs_time.format.show_formatters = (function cljs_time$format$show_formatters(var_args){
var G__18036 = arguments.length;
switch (G__18036) {
case 0:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1(cljs_time.core.now());
});

cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1 = (function (dt){
var seq__18037 = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs_time.format.printers));
var chunk__18038 = null;
var count__18039 = (0);
var i__18040 = (0);
while(true){
if((i__18040 < count__18039)){
var p = chunk__18038.cljs$core$IIndexed$_nth$arity$2(null,i__18040);
var fmt_18042 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,cljs_time.format.unparse(fmt_18042,dt)], 0))], 0));

var G__18043 = seq__18037;
var G__18044 = chunk__18038;
var G__18045 = count__18039;
var G__18046 = (i__18040 + (1));
seq__18037 = G__18043;
chunk__18038 = G__18044;
count__18039 = G__18045;
i__18040 = G__18046;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__18037);
if(temp__4657__auto__){
var seq__18037__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18037__$1)){
var c__8459__auto__ = cljs.core.chunk_first(seq__18037__$1);
var G__18047 = cljs.core.chunk_rest(seq__18037__$1);
var G__18048 = c__8459__auto__;
var G__18049 = cljs.core.count(c__8459__auto__);
var G__18050 = (0);
seq__18037 = G__18047;
chunk__18038 = G__18048;
count__18039 = G__18049;
i__18040 = G__18050;
continue;
} else {
var p = cljs.core.first(seq__18037__$1);
var fmt_18051 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,cljs_time.format.unparse(fmt_18051,dt)], 0))], 0));

var G__18052 = cljs.core.next(seq__18037__$1);
var G__18053 = null;
var G__18054 = (0);
var G__18055 = (0);
seq__18037 = G__18052;
chunk__18038 = G__18053;
count__18039 = G__18054;
i__18040 = G__18055;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs_time.format.show_formatters.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
cljs_time.format.Mappable = function(){};

/**
 * Returns a map representation of the given instant.
 *                        It will contain the following keys: :years, :months,
 *                        :days, :hours, :minutes and :seconds.
 */
cljs_time.format.instant__GT_map = (function cljs_time$format$instant__GT_map(instant){
if((!((instant == null))) && (!((instant.cljs_time$format$Mappable$instant__GT_map$arity$1 == null)))){
return instant.cljs_time$format$Mappable$instant__GT_map$arity$1(instant);
} else {
var x__8308__auto__ = (((instant == null))?null:instant);
var m__8309__auto__ = (cljs_time.format.instant__GT_map[goog.typeOf(x__8308__auto__)]);
if(!((m__8309__auto__ == null))){
return (m__8309__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8309__auto__.cljs$core$IFn$_invoke$arity$1(instant) : m__8309__auto__.call(null,instant));
} else {
var m__8309__auto____$1 = (cljs_time.format.instant__GT_map["_"]);
if(!((m__8309__auto____$1 == null))){
return (m__8309__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8309__auto____$1.cljs$core$IFn$_invoke$arity$1(instant) : m__8309__auto____$1.call(null,instant));
} else {
throw cljs.core.missing_protocol("Mappable.instant->map",instant);
}
}
}
});

/**
 * Accepts a Period or Interval and outputs an absolute duration time
 *   in form of "1 day", "2 hours", "20 minutes", "2 days 1 hour
 *   15 minutes" etc.
 */
cljs_time.format.unparse_duration = (function cljs_time$format$unparse_duration(duration){
var G__18056 = cljs_time.core.in_millis(duration);
return goog.date.duration.format(G__18056);
});
cljs_time.format.to_map = (function cljs_time$format$to_map(years,months,days,hours,minutes,seconds,millis){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$years,years,cljs.core.cst$kw$months,months,cljs.core.cst$kw$days,days,cljs.core.cst$kw$hours,hours,cljs.core.cst$kw$minutes,minutes,cljs.core.cst$kw$seconds,seconds,cljs.core.cst$kw$millis,millis], null);
});
goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){
var dt__$1 = this;
return cljs_time.format.to_map(dt__$1.getYear(),(dt__$1.getMonth() + (1)),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds(),dt__$1.getMilliseconds());
});

cljs_time.core.Period.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Period.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period(m__$1);
});

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period(m__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
var G__18057 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1));
var G__18057__$1 = (((G__18057 instanceof cljs.core.Keyword))?G__18057.fqn:null);
switch (G__18057__$1) {
case "cljs-time.core/period":
return m__$1;

break;
case "cljs-time.core/interval":
return cljs_time.core.__GT_period(m__$1);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18057__$1)].join('')));

}
});
