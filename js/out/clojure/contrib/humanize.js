// Compiled by ClojureScript 1.9.854 {}
goog.provide('clojure.contrib.humanize');
goog.require('cljs.core');
goog.require('clojure.contrib.inflect');
goog.require('clojure.string');
goog.require('cljs_time.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs_time.local');
goog.require('cljs_time.coerce');
clojure.contrib.humanize.num_format = (function clojure$contrib$humanize$num_format(p1__29999_SHARP_,p2__30000_SHARP_){
return goog.string.format(p1__29999_SHARP_,p2__30000_SHARP_);
});
clojure.contrib.humanize.expt = Math.pow;
clojure.contrib.humanize.floor = Math.floor;
clojure.contrib.humanize.round = Math.round;
clojure.contrib.humanize.abs = Math.abs;
clojure.contrib.humanize.log = Math.log;
clojure.contrib.humanize.rounding_const = (1000000);
clojure.contrib.humanize.log10 = (function (){var or__27939__auto__ = Math.log10;
if(cljs.core.truth_(or__27939__auto__)){
return or__27939__auto__;
} else {
return ((function (or__27939__auto__){
return (function (p1__30003_SHARP_){
return (Math.round((clojure.contrib.humanize.rounding_const * (Math.log(p1__30003_SHARP_) / Math.LN10))) / clojure.contrib.humanize.rounding_const);
});
;})(or__27939__auto__))
}
})();
clojure.contrib.humanize.char__GT_int = (function clojure$contrib$humanize$char__GT_int(p1__30005_SHARP_){
return (p1__30005_SHARP_ | (0));
});
/**
 * Converts an integer to a string containing commas. every three digits.
 * For example, 3000 becomes '3,000' and 45000 becomes '45,000'. 
 */
clojure.contrib.humanize.intcomma = (function clojure$contrib$humanize$intcomma(num){
var decimal = clojure.contrib.humanize.abs.call(null,(num | (0)));
var sign = (((num < (0)))?"-":"");
var repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(decimal)].join('');
var repr_len = cljs.core.count.call(null,repr);
var partitioned = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,repr,(0),cljs.core.rem.call(null,repr_len,(3))),cljs.core.map.call(null,((function (decimal,sign,repr,repr_len){
return (function (p1__30006_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__30006_SHARP_);
});})(decimal,sign,repr,repr_len))
,cljs.core.partition.call(null,(3),cljs.core.subs.call(null,repr,cljs.core.rem.call(null,repr_len,(3)))))], null);
var partitioned__$1 = cljs.core.remove.call(null,cljs.core.empty_QMARK_,cljs.core.flatten.call(null,partitioned));
return cljs.core.apply.call(null,cljs.core.str,sign,cljs.core.interpose.call(null,",",partitioned__$1));
});
/**
 * Converts an integer to its ordinal as a string. 1 is '1st', 2 is '2nd',
 * 3 is '3rd', etc.
 */
clojure.contrib.humanize.ordinal = (function clojure$contrib$humanize$ordinal(num){
var ordinals = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["th","st","nd","rd","th","th","th","th","th","th"], null);
var remainder_100 = cljs.core.rem.call(null,num,(100));
var remainder_10 = cljs.core.rem.call(null,num,(10));
if(cljs.core.truth_(clojure.contrib.inflect.in_QMARK_.call(null,remainder_100,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(12),(13)], null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ordinals.call(null,(0)))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ordinals.call(null,remainder_10))].join('');
}
});
clojure.contrib.humanize.logn = (function clojure$contrib$humanize$logn(num,base){
return (clojure.contrib.humanize.round.call(null,clojure.contrib.humanize.log.call(null,num)) / clojure.contrib.humanize.round.call(null,clojure.contrib.humanize.log.call(null,base)));
});
clojure.contrib.humanize.human_pows = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)," googol"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(33)," decillion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30)," nonillion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(27)," octillion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24)," septillion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(21)," sextillion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18)," quintillion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15)," quadrillion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12)," trillion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9)," billion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6)," million"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),""], null)], null);
/**
 * Converts a large integer to a friendly text representation. Works best for
 * numbers over 1 million. For example, 1000000 becomes '1.0 million', 1200000
 * becomes '1.2 million' and '1200000000' becomes '1.2 billion'.  Supports up to
 * decillion (33 digits) and googol (100 digits).
 */
clojure.contrib.humanize.intword = (function clojure$contrib$humanize$intword(var_args){
var args__29110__auto__ = [];
var len__29103__auto___30019 = arguments.length;
var i__29104__auto___30020 = (0);
while(true){
if((i__29104__auto___30020 < len__29103__auto___30019)){
args__29110__auto__.push((arguments[i__29104__auto___30020]));

var G__30021 = (i__29104__auto___30020 + (1));
i__29104__auto___30020 = G__30021;
continue;
} else {
}
break;
}

var argseq__29111__auto__ = ((((1) < args__29110__auto__.length))?(new cljs.core.IndexedSeq(args__29110__auto__.slice((1)),(0),null)):null);
return clojure.contrib.humanize.intword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29111__auto__);
});

clojure.contrib.humanize.intword.cljs$core$IFn$_invoke$arity$variadic = (function (num,p__30009){
var map__30010 = p__30009;
var map__30010__$1 = ((((!((map__30010 == null)))?((((map__30010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30010):map__30010);
var format = cljs.core.get.call(null,map__30010__$1,new cljs.core.Keyword(null,"format","format",-1306924766),"%.1f");
var base_pow = (clojure.contrib.humanize.floor.call(null,clojure.contrib.humanize.log10.call(null,num)) | (0));
var vec__30012 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (base_pow,map__30010,map__30010__$1,format){
return (function (p__30015){
var vec__30016 = p__30015;
var base = cljs.core.nth.call(null,vec__30016,(0),null);
var _ = cljs.core.nth.call(null,vec__30016,(1),null);
return (base_pow >= base);
});})(base_pow,map__30010,map__30010__$1,format))
,clojure.contrib.humanize.human_pows));
var base_pow__$1 = cljs.core.nth.call(null,vec__30012,(0),null);
var suffix = cljs.core.nth.call(null,vec__30012,(1),null);
var value = (num / clojure.contrib.humanize.expt.call(null,(10),base_pow__$1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.contrib.humanize.num_format.call(null,format,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
});

clojure.contrib.humanize.intword.cljs$lang$maxFixedArity = (1);

clojure.contrib.humanize.intword.cljs$lang$applyTo = (function (seq30007){
var G__30008 = cljs.core.first.call(null,seq30007);
var seq30007__$1 = cljs.core.next.call(null,seq30007);
return clojure.contrib.humanize.intword.cljs$core$IFn$_invoke$arity$variadic(G__30008,seq30007__$1);
});

clojure.contrib.humanize.numap = cljs.core.PersistentHashMap.fromArrays([(0),(70),(7),(20),(60),(1),(4),(15),(50),(40),(13),(90),(6),(17),(3),(12),(2),(19),(11),(9),(5),(14),(16),(30),(10),(18),(80),(8)],["","seventy","seven","twenty","sixty","one","four","fifteen","fifty","forty","thirteen","ninety","six","seventeen","three","twelve","two","nineteen","eleven","nine","five","fourteen","sixteen","thirty","ten","eighteen","eighty","eight"]);
/**
 * Takes a number and return a full written string form. For example,
 * 23237897 will be written as "twenty-three million two hundred and
 * thirty-seven thousand eight hundred and ninety-seven".  
 */
clojure.contrib.humanize.numberword = (function clojure$contrib$humanize$numberword(num){
if((num === (0))){
return "zero";
} else {
var digitcnt = (clojure.contrib.humanize.log10.call(null,num) | (0));
var divisible_QMARK_ = ((function (digitcnt){
return (function (num__$1,div){
return (cljs.core.rem.call(null,num__$1,div) === (0));
});})(digitcnt))
;
var n_digit = ((function (digitcnt,divisible_QMARK_){
return (function (num__$1,n){
return clojure.contrib.humanize.char__GT_int.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num__$1)].join('').charAt(n));
});})(digitcnt,divisible_QMARK_))
;
if((digitcnt >= (6))){
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.contrib.humanize.numberword.call(null,((num / (1000000)) | (0))),"million",clojure.contrib.humanize.numberword.call(null,cljs.core.rem.call(null,num,(1000000)))], null));
} else {
if((digitcnt >= (3))){
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.contrib.humanize.numberword.call(null,((num / (1000)) | (0))),"thousand",clojure.contrib.humanize.numberword.call(null,cljs.core.rem.call(null,num,(1000)))], null));
} else {
if((digitcnt >= (2))){
if(cljs.core.truth_(divisible_QMARK_.call(null,num,(100)))){
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.contrib.humanize.numap.call(null,((num / (100)) | (0))),"hundred"], null));
} else {
return clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.contrib.humanize.numap.call(null,((num / (100)) | (0))),"hundred","and",clojure.contrib.humanize.numberword.call(null,cljs.core.rem.call(null,num,(100)))], null));
}
} else {
if((num < (20))){
return clojure.contrib.humanize.numap.call(null,num);
} else {
if(cljs.core.truth_(divisible_QMARK_.call(null,num,(10)))){
return clojure.contrib.humanize.numap.call(null,num);
} else {
return clojure.string.join.call(null,"-",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.contrib.humanize.numap.call(null,((10) * n_digit.call(null,num,(0)))),clojure.contrib.humanize.numap.call(null,n_digit.call(null,num,(1)))], null));

}
}
}
}
}
}
});
/**
 * Format a number of bytes as a human readable filesize (eg. 10 kB). By
 * default, decimal suffixes (kB, MB) are used.  Passing :binary true will use
 * binary suffixes (KiB, MiB) instead.
 */
clojure.contrib.humanize.filesize = (function clojure$contrib$humanize$filesize(var_args){
var args__29110__auto__ = [];
var len__29103__auto___30027 = arguments.length;
var i__29104__auto___30028 = (0);
while(true){
if((i__29104__auto___30028 < len__29103__auto___30027)){
args__29110__auto__.push((arguments[i__29104__auto___30028]));

var G__30029 = (i__29104__auto___30028 + (1));
i__29104__auto___30028 = G__30029;
continue;
} else {
}
break;
}

var argseq__29111__auto__ = ((((1) < args__29110__auto__.length))?(new cljs.core.IndexedSeq(args__29110__auto__.slice((1)),(0),null)):null);
return clojure.contrib.humanize.filesize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29111__auto__);
});

clojure.contrib.humanize.filesize.cljs$core$IFn$_invoke$arity$variadic = (function (bytes,p__30024){
var map__30025 = p__30024;
var map__30025__$1 = ((((!((map__30025 == null)))?((((map__30025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30025):map__30025);
var binary = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"binary","binary",-1802232288),false);
var format = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"format","format",-1306924766),"%.1f");
if((bytes === (0))){
return "0";
} else {
var decimal_sizes = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"KB","KB",-1995214355),new cljs.core.Keyword(null,"MB","MB",-822095316),new cljs.core.Keyword(null,"GB","GB",1529633027),new cljs.core.Keyword(null,"TB","TB",1543563109),new cljs.core.Keyword(null,"PB","PB",-1255943909),new cljs.core.Keyword(null,"EB","EB",-1311440000),new cljs.core.Keyword(null,"ZB","ZB",1556539844),new cljs.core.Keyword(null,"YB","YB",1125554647)], null);
var binary_sizes = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"KiB","KiB",568616254),new cljs.core.Keyword(null,"MiB","MiB",-395924856),new cljs.core.Keyword(null,"GiB","GiB",154798556),new cljs.core.Keyword(null,"TiB","TiB",1016674856),new cljs.core.Keyword(null,"PiB","PiB",2017567873),new cljs.core.Keyword(null,"EiB","EiB",-1332230598),new cljs.core.Keyword(null,"ZiB","ZiB",1819403163),new cljs.core.Keyword(null,"YiB","YiB",866096766)], null);
var units = (cljs.core.truth_(binary)?binary_sizes:decimal_sizes);
var base = (cljs.core.truth_(binary)?(1024):(1000));
var base_pow = (clojure.contrib.humanize.floor.call(null,clojure.contrib.humanize.logn.call(null,bytes,base)) | (0));
var base_pow__$1 = (((base_pow < cljs.core.count.call(null,units)))?base_pow:(cljs.core.count.call(null,units) - (1)));
var suffix = cljs.core.name.call(null,cljs.core.get.call(null,units,base_pow__$1));
var value = (bytes / clojure.contrib.humanize.expt.call(null,base,base_pow__$1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.contrib.humanize.num_format.call(null,format,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
});

clojure.contrib.humanize.filesize.cljs$lang$maxFixedArity = (1);

clojure.contrib.humanize.filesize.cljs$lang$applyTo = (function (seq30022){
var G__30023 = cljs.core.first.call(null,seq30022);
var seq30022__$1 = cljs.core.next.call(null,seq30022);
return clojure.contrib.humanize.filesize.cljs$core$IFn$_invoke$arity$variadic(G__30023,seq30022__$1);
});

/**
 * Truncate a string with suffix (ellipsis by default) if it is
 * longer than specified length.
 */
clojure.contrib.humanize.truncate = (function clojure$contrib$humanize$truncate(var_args){
var G__30031 = arguments.length;
switch (G__30031) {
case 3:
return clojure.contrib.humanize.truncate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return clojure.contrib.humanize.truncate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.contrib.humanize.truncate.cljs$core$IFn$_invoke$arity$3 = (function (string,length,suffix){
var string_len = cljs.core.count.call(null,string);
var suffix_len = cljs.core.count.call(null,suffix);
if((string_len <= length)){
return string;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,string,(0),(length - suffix_len))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
});

clojure.contrib.humanize.truncate.cljs$core$IFn$_invoke$arity$2 = (function (string,length){
return clojure.contrib.humanize.truncate.call(null,string,length,"...");
});

clojure.contrib.humanize.truncate.cljs$lang$maxFixedArity = 3;

/**
 * Converts a list of items to a human readable string
 * with an optional limit.
 */
clojure.contrib.humanize.oxford = (function clojure$contrib$humanize$oxford(var_args){
var args__29110__auto__ = [];
var len__29103__auto___30038 = arguments.length;
var i__29104__auto___30039 = (0);
while(true){
if((i__29104__auto___30039 < len__29103__auto___30038)){
args__29110__auto__.push((arguments[i__29104__auto___30039]));

var G__30040 = (i__29104__auto___30039 + (1));
i__29104__auto___30039 = G__30040;
continue;
} else {
}
break;
}

var argseq__29111__auto__ = ((((1) < args__29110__auto__.length))?(new cljs.core.IndexedSeq(args__29110__auto__.slice((1)),(0),null)):null);
return clojure.contrib.humanize.oxford.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29111__auto__);
});

clojure.contrib.humanize.oxford.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__30035){
var map__30036 = p__30035;
var map__30036__$1 = ((((!((map__30036 == null)))?((((map__30036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30036):map__30036);
var maximum_display = cljs.core.get.call(null,map__30036__$1,new cljs.core.Keyword(null,"maximum-display","maximum-display",125512845),(4));
var truncate_noun = cljs.core.get.call(null,map__30036__$1,new cljs.core.Keyword(null,"truncate-noun","truncate-noun",2088972907),null);
var coll_length = cljs.core.count.call(null,coll);
if((coll_length < (2))){
return clojure.string.join.call(null,coll);
} else {
if((coll_length <= maximum_display)){
var before_last = cljs.core.take.call(null,(coll_length - (1)),coll);
var last_item = cljs.core.last.call(null,coll);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,cljs.core.interpose.call(null,", ",before_last))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", and "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_item)].join('');
} else {
if((coll_length > maximum_display)){
var display_coll = cljs.core.take.call(null,maximum_display,coll);
var remaining = (coll_length - maximum_display);
var last_item = ((cljs.core.empty_QMARK_.call(null,truncate_noun))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(remaining),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.contrib.inflect.pluralize_noun.call(null,remaining,"other"))].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(remaining),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" other "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.contrib.inflect.pluralize_noun.call(null,remaining,truncate_noun))].join(''));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,cljs.core.interpose.call(null,", ",display_coll))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", and "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_item)].join('');
} else {
return coll_length;

}
}
}
});

clojure.contrib.humanize.oxford.cljs$lang$maxFixedArity = (1);

clojure.contrib.humanize.oxford.cljs$lang$applyTo = (function (seq30033){
var G__30034 = cljs.core.first.call(null,seq30033);
var seq30033__$1 = cljs.core.next.call(null,seq30033);
return clojure.contrib.humanize.oxford.cljs$core$IFn$_invoke$arity$variadic(G__30034,seq30033__$1);
});

clojure.contrib.humanize.in_decades = (function clojure$contrib$humanize$in_decades(diff){
return (cljs_time.core.in_years.call(null,diff) / (10));
});
clojure.contrib.humanize.in_centuries = (function clojure$contrib$humanize$in_centuries(diff){
return (cljs_time.core.in_years.call(null,diff) / (100));
});
clojure.contrib.humanize.in_millennia = (function clojure$contrib$humanize$in_millennia(diff){
return (cljs_time.core.in_years.call(null,diff) / (1000));
});
/**
 * Given a datetime or date, return a human-friendly representation
 * of the amount of time elapsed. 
 */
clojure.contrib.humanize.datetime = (function clojure$contrib$humanize$datetime(var_args){
var args__29110__auto__ = [];
var len__29103__auto___30046 = arguments.length;
var i__29104__auto___30047 = (0);
while(true){
if((i__29104__auto___30047 < len__29103__auto___30046)){
args__29110__auto__.push((arguments[i__29104__auto___30047]));

var G__30048 = (i__29104__auto___30047 + (1));
i__29104__auto___30047 = G__30048;
continue;
} else {
}
break;
}

var argseq__29111__auto__ = ((((1) < args__29110__auto__.length))?(new cljs.core.IndexedSeq(args__29110__auto__.slice((1)),(0),null)):null);
return clojure.contrib.humanize.datetime.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29111__auto__);
});

clojure.contrib.humanize.datetime.cljs$core$IFn$_invoke$arity$variadic = (function (then_dt,p__30043){
var map__30044 = p__30043;
var map__30044__$1 = ((((!((map__30044 == null)))?((((map__30044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30044):map__30044);
var now_dt = cljs.core.get.call(null,map__30044__$1,new cljs.core.Keyword(null,"now-dt","now-dt",1406756612),cljs_time.local.local_now.call(null));
var suffix = cljs.core.get.call(null,map__30044__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057),"ago");
var prefix = cljs.core.get.call(null,map__30044__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"in");
var then_dt__$1 = cljs_time.coerce.to_date_time.call(null,then_dt);
var now_dt__$1 = cljs_time.coerce.to_date_time.call(null,now_dt);
var future_time_QMARK_ = cljs_time.core.after_QMARK_.call(null,then_dt__$1,now_dt__$1);
var diff = (cljs.core.truth_(future_time_QMARK_)?cljs_time.core.interval.call(null,now_dt__$1,then_dt__$1):cljs_time.core.interval.call(null,then_dt__$1,now_dt__$1));
if((clojure.contrib.humanize.in_millennia.call(null,diff) >= (1))){
var d__29990__auto__ = clojure.contrib.humanize.in_millennia.call(null,diff);
var t__29991__auto__ = clojure.contrib.inflect.pluralize_noun.call(null,clojure.contrib.humanize.in_millennia.call(null,diff),"millenium");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if((clojure.contrib.humanize.in_centuries.call(null,diff) >= (1))){
var d__29990__auto__ = clojure.contrib.humanize.in_centuries.call(null,diff);
var t__29991__auto__ = clojure.contrib.inflect.pluralize_noun.call(null,clojure.contrib.humanize.in_centuries.call(null,diff),"century");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if((clojure.contrib.humanize.in_decades.call(null,diff) >= (1))){
var d__29990__auto__ = clojure.contrib.humanize.in_decades.call(null,diff);
var t__29991__auto__ = clojure.contrib.inflect.pluralize_noun.call(null,clojure.contrib.humanize.in_decades.call(null,diff),"decade");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if((cljs_time.core.in_years.call(null,diff) >= (1))){
var d__29990__auto__ = cljs_time.core.in_years.call(null,diff);
var t__29991__auto__ = clojure.contrib.inflect.pluralize_noun.call(null,cljs_time.core.in_years.call(null,diff),"year");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if((cljs_time.core.in_months.call(null,diff) >= (1))){
var d__29990__auto__ = cljs_time.core.in_months.call(null,diff);
var t__29991__auto__ = clojure.contrib.inflect.pluralize_noun.call(null,cljs_time.core.in_months.call(null,diff),"month");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if((cljs_time.core.in_weeks.call(null,diff) >= (1))){
var d__29990__auto__ = cljs_time.core.in_weeks.call(null,diff);
var t__29991__auto__ = clojure.contrib.inflect.pluralize_noun.call(null,cljs_time.core.in_weeks.call(null,diff),"week");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if((cljs_time.core.in_days.call(null,diff) >= (1))){
var d__29990__auto__ = cljs_time.core.in_days.call(null,diff);
var t__29991__auto__ = clojure.contrib.inflect.pluralize_noun.call(null,cljs_time.core.in_days.call(null,diff),"day");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if((cljs_time.core.in_hours.call(null,diff) >= (1))){
var d__29990__auto__ = cljs_time.core.in_hours.call(null,diff);
var t__29991__auto__ = clojure.contrib.inflect.pluralize_noun.call(null,cljs_time.core.in_hours.call(null,diff),"hour");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if((cljs_time.core.in_minutes.call(null,diff) >= (1))){
var d__29990__auto__ = cljs_time.core.in_minutes.call(null,diff);
var t__29991__auto__ = clojure.contrib.inflect.pluralize_noun.call(null,cljs_time.core.in_minutes.call(null,diff),"minute");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if((cljs_time.core.in_seconds.call(null,diff) >= (1))){
var d__29990__auto__ = cljs_time.core.in_seconds.call(null,diff);
var t__29991__auto__ = clojure.contrib.inflect.pluralize_noun.call(null,cljs_time.core.in_seconds.call(null,diff),"second");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__29990__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__29991__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" a moment")].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("a moment "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}

}
}
}
}
}
}
}
}
}
}
});

clojure.contrib.humanize.datetime.cljs$lang$maxFixedArity = (1);

clojure.contrib.humanize.datetime.cljs$lang$applyTo = (function (seq30041){
var G__30042 = cljs.core.first.call(null,seq30041);
var seq30041__$1 = cljs.core.next.call(null,seq30041);
return clojure.contrib.humanize.datetime.cljs$core$IFn$_invoke$arity$variadic(G__30042,seq30041__$1);
});

clojure.contrib.humanize.duration_periods = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((((1000) * (60)) * (60)) * (24)) * (365)),"year"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((((1000) * (60)) * (60)) * (24)) * (31)),"month"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((((1000) * (60)) * (60)) * (24)) * (7)),"week"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((1000) * (60)) * (60)) * (24)),"day"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((1000) * (60)) * (60)),"hour"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((1000) * (60)),"minute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),"second"], null)], null);
/**
 * Converts a duration, in milliseconds, to a set of terms describing the duration.
 *   The terms are in descending order, largest period to smallest.
 * 
 *   Each term is a tuple of count and period name, e.g., `[5 "second"]`.
 * 
 *   After seconds are accounted for, remaining milliseconds are ignored.
 */
clojure.contrib.humanize.duration_terms = (function clojure$contrib$humanize$duration_terms(duration_ms){
if(((0) <= duration_ms)){
} else {
throw (new Error("Assert failed: (<= 0 duration-ms)"));
}

var remainder = duration_ms;
var G__30056 = clojure.contrib.humanize.duration_periods;
var vec__30057 = G__30056;
var seq__30058 = cljs.core.seq.call(null,vec__30057);
var first__30059 = cljs.core.first.call(null,seq__30058);
var seq__30058__$1 = cljs.core.next.call(null,seq__30058);
var vec__30060 = first__30059;
var period_ms = cljs.core.nth.call(null,vec__30060,(0),null);
var period_name = cljs.core.nth.call(null,vec__30060,(1),null);
var more_periods = seq__30058__$1;
var terms = cljs.core.PersistentVector.EMPTY;
var remainder__$1 = remainder;
var G__30056__$1 = G__30056;
var terms__$1 = terms;
while(true){
var remainder__$2 = remainder__$1;
var vec__30063 = G__30056__$1;
var seq__30064 = cljs.core.seq.call(null,vec__30063);
var first__30065 = cljs.core.first.call(null,seq__30064);
var seq__30064__$1 = cljs.core.next.call(null,seq__30064);
var vec__30066 = first__30065;
var period_ms__$1 = cljs.core.nth.call(null,vec__30066,(0),null);
var period_name__$1 = cljs.core.nth.call(null,vec__30066,(1),null);
var more_periods__$1 = seq__30064__$1;
var terms__$2 = terms__$1;
if((period_ms__$1 == null)){
return terms__$2;
} else {
if((remainder__$2 < period_ms__$1)){
var G__30069 = remainder__$2;
var G__30070 = more_periods__$1;
var G__30071 = terms__$2;
remainder__$1 = G__30069;
G__30056__$1 = G__30070;
terms__$1 = G__30071;
continue;
} else {
var period_count = ((remainder__$2 / period_ms__$1) | (0));
var next_remainder = cljs.core.mod.call(null,remainder__$2,period_ms__$1);
var G__30072 = next_remainder;
var G__30073 = more_periods__$1;
var G__30074 = cljs.core.conj.call(null,terms__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [period_count,period_name__$1], null));
remainder__$1 = G__30072;
G__30056__$1 = G__30073;
terms__$1 = G__30074;
continue;

}
}
break;
}
});
/**
 * Converts duration, in milliseconds, into a string describing it in terms
 *   of years, months, weeks, days, hours, minutes, and seconds.
 * 
 *   Ex:
 * 
 *   (duration 325100) => "five minutes, twenty-five seconds"
 * 
 *   The months and years periods are not based on actual calendar, so are approximate; this
 *   function works best for shorter periods of time.
 * 
 *   The optional options map allow some control over the result.
 * 
 *   :list-format (default: a function) can be set to a function such as oxford
 * 
 *   :number-format (default: numberword) function used to format period counts
 * 
 *   :short-text (default: "less than a second") 
 */
clojure.contrib.humanize.duration = (function clojure$contrib$humanize$duration(var_args){
var G__30077 = arguments.length;
switch (G__30077) {
case 1:
return clojure.contrib.humanize.duration.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.contrib.humanize.duration.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.contrib.humanize.duration.cljs$core$IFn$_invoke$arity$1 = (function (duration_ms){
return clojure.contrib.humanize.duration.call(null,duration_ms,null);
});

clojure.contrib.humanize.duration.cljs$core$IFn$_invoke$arity$2 = (function (duration_ms,options){
var terms = clojure.contrib.humanize.duration_terms.call(null,duration_ms);
var map__30078 = options;
var map__30078__$1 = ((((!((map__30078 == null)))?((((map__30078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30078):map__30078);
var number_format = cljs.core.get.call(null,map__30078__$1,new cljs.core.Keyword(null,"number-format","number-format",-1955958496),clojure.contrib.humanize.numberword);
var list_format = cljs.core.get.call(null,map__30078__$1,new cljs.core.Keyword(null,"list-format","list-format",-1200142930),((function (terms,map__30078,map__30078__$1,number_format){
return (function (p1__30075_SHARP_){
return clojure.string.join.call(null,", ",p1__30075_SHARP_);
});})(terms,map__30078,map__30078__$1,number_format))
);
var short_text = cljs.core.get.call(null,map__30078__$1,new cljs.core.Keyword(null,"short-text","short-text",-721727681),"less than a second");
if(cljs.core.seq.call(null,terms)){
return list_format.call(null,cljs.core.map.call(null,((function (terms,map__30078,map__30078__$1,number_format,list_format,short_text){
return (function (p__30080){
var vec__30081 = p__30080;
var period_count = cljs.core.nth.call(null,vec__30081,(0),null);
var period_name = cljs.core.nth.call(null,vec__30081,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(number_format.call(null,period_count)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.contrib.inflect.pluralize_noun.call(null,period_count,period_name))].join('');
});})(terms,map__30078,map__30078__$1,number_format,list_format,short_text))
,terms));
} else {
return short_text;
}
});

clojure.contrib.humanize.duration.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=humanize.js.map?rel=1503148883501
