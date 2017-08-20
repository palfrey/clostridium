// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('clojure.contrib.humanize');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.contrib.inflect');
goog.require('clojure.string');
goog.require('cljs_time.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs_time.local');
goog.require('cljs_time.coerce');
clojure.contrib.humanize.num_format = (function clojure$contrib$humanize$num_format(p1__18233_SHARP_,p2__18234_SHARP_){
return goog.string.format(p1__18233_SHARP_,p2__18234_SHARP_);
});
clojure.contrib.humanize.expt = Math.pow;
clojure.contrib.humanize.floor = Math.floor;
clojure.contrib.humanize.round = Math.round;
clojure.contrib.humanize.abs = Math.abs;
clojure.contrib.humanize.log = Math.log;
clojure.contrib.humanize.rounding_const = (1000000);
clojure.contrib.humanize.log10 = (function (){var or__7625__auto__ = Math.log10;
if(cljs.core.truth_(or__7625__auto__)){
return or__7625__auto__;
} else {
return ((function (or__7625__auto__){
return (function (p1__18237_SHARP_){
return (Math.round((clojure.contrib.humanize.rounding_const * (Math.log(p1__18237_SHARP_) / Math.LN10))) / clojure.contrib.humanize.rounding_const);
});
;})(or__7625__auto__))
}
})();
clojure.contrib.humanize.char__GT_int = (function clojure$contrib$humanize$char__GT_int(p1__18239_SHARP_){
return (p1__18239_SHARP_ | (0));
});
/**
 * Converts an integer to a string containing commas. every three digits.
 * For example, 3000 becomes '3,000' and 45000 becomes '45,000'. 
 */
clojure.contrib.humanize.intcomma = (function clojure$contrib$humanize$intcomma(num){
var decimal__$1 = (function (){var G__18241 = (num | (0));
return (clojure.contrib.humanize.abs.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.abs.cljs$core$IFn$_invoke$arity$1(G__18241) : clojure.contrib.humanize.abs.call(null,G__18241));
})();
var sign = (((num < (0)))?"-":"");
var repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(decimal__$1)].join('');
var repr_len = cljs.core.count(repr);
var partitioned = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(repr,(0),cljs.core.rem(repr_len,(3))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (decimal__$1,sign,repr,repr_len){
return (function (p1__18240_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__18240_SHARP_);
});})(decimal__$1,sign,repr,repr_len))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(repr,cljs.core.rem(repr_len,(3)))))], null);
var partitioned__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.flatten(partitioned));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,sign,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",partitioned__$1));
});
/**
 * Converts an integer to its ordinal as a string. 1 is '1st', 2 is '2nd',
 * 3 is '3rd', etc.
 */
clojure.contrib.humanize.ordinal = (function clojure$contrib$humanize$ordinal(num){
var ordinals = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["th","st","nd","rd","th","th","th","th","th","th"], null);
var remainder_100 = cljs.core.rem(num,(100));
var remainder_10 = cljs.core.rem(num,(10));
if(cljs.core.truth_(clojure.contrib.inflect.in_QMARK_(remainder_100,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(12),(13)], null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),cljs.core.str.cljs$core$IFn$_invoke$arity$1((ordinals.cljs$core$IFn$_invoke$arity$1 ? ordinals.cljs$core$IFn$_invoke$arity$1((0)) : ordinals.call(null,(0))))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num),cljs.core.str.cljs$core$IFn$_invoke$arity$1((ordinals.cljs$core$IFn$_invoke$arity$1 ? ordinals.cljs$core$IFn$_invoke$arity$1(remainder_10) : ordinals.call(null,remainder_10)))].join('');
}
});
clojure.contrib.humanize.logn = (function clojure$contrib$humanize$logn(num,base){
return ((function (){var G__18242 = (clojure.contrib.humanize.log.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.log.cljs$core$IFn$_invoke$arity$1(num) : clojure.contrib.humanize.log.call(null,num));
return (clojure.contrib.humanize.round.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.round.cljs$core$IFn$_invoke$arity$1(G__18242) : clojure.contrib.humanize.round.call(null,G__18242));
})() / (function (){var G__18243 = (clojure.contrib.humanize.log.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.log.cljs$core$IFn$_invoke$arity$1(base) : clojure.contrib.humanize.log.call(null,base));
return (clojure.contrib.humanize.round.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.round.cljs$core$IFn$_invoke$arity$1(G__18243) : clojure.contrib.humanize.round.call(null,G__18243));
})());
});
clojure.contrib.humanize.human_pows = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100)," googol"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(33)," decillion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30)," nonillion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(27)," octillion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24)," septillion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(21)," sextillion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18)," quintillion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15)," quadrillion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12)," trillion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9)," billion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6)," million"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),""], null)], null);
/**
 * Converts a large integer to a friendly text representation. Works best for
 * numbers over 1 million. For example, 1000000 becomes '1.0 million', 1200000
 * becomes '1.2 million' and '1200000000' becomes '1.2 billion'.  Supports up to
 * decillion (33 digits) and googol (100 digits).
 */
clojure.contrib.humanize.intword = (function clojure$contrib$humanize$intword(var_args){
var args__8796__auto__ = [];
var len__8789__auto___18257 = arguments.length;
var i__8790__auto___18258 = (0);
while(true){
if((i__8790__auto___18258 < len__8789__auto___18257)){
args__8796__auto__.push((arguments[i__8790__auto___18258]));

var G__18259 = (i__8790__auto___18258 + (1));
i__8790__auto___18258 = G__18259;
continue;
} else {
}
break;
}

var argseq__8797__auto__ = ((((1) < args__8796__auto__.length))?(new cljs.core.IndexedSeq(args__8796__auto__.slice((1)),(0),null)):null);
return clojure.contrib.humanize.intword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8797__auto__);
});

clojure.contrib.humanize.intword.cljs$core$IFn$_invoke$arity$variadic = (function (num,p__18246){
var map__18247 = p__18246;
var map__18247__$1 = ((((!((map__18247 == null)))?((((map__18247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18247.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18247):map__18247);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18247__$1,cljs.core.cst$kw$format,"%.1f");
var base_pow = ((function (){var G__18252 = (clojure.contrib.humanize.log10.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.log10.cljs$core$IFn$_invoke$arity$1(num) : clojure.contrib.humanize.log10.call(null,num));
return (clojure.contrib.humanize.floor.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.floor.cljs$core$IFn$_invoke$arity$1(G__18252) : clojure.contrib.humanize.floor.call(null,G__18252));
})() | (0));
var vec__18249 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (base_pow,map__18247,map__18247__$1,format){
return (function (p__18253){
var vec__18254 = p__18253;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18254,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18254,(1),null);
return (base_pow >= base);
});})(base_pow,map__18247,map__18247__$1,format))
,clojure.contrib.humanize.human_pows));
var base_pow__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18249,(0),null);
var suffix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18249,(1),null);
var value = (num / (clojure.contrib.humanize.expt.cljs$core$IFn$_invoke$arity$2 ? clojure.contrib.humanize.expt.cljs$core$IFn$_invoke$arity$2((10),base_pow__$1) : clojure.contrib.humanize.expt.call(null,(10),base_pow__$1)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.contrib.humanize.num_format(format,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
});

clojure.contrib.humanize.intword.cljs$lang$maxFixedArity = (1);

clojure.contrib.humanize.intword.cljs$lang$applyTo = (function (seq18244){
var G__18245 = cljs.core.first(seq18244);
var seq18244__$1 = cljs.core.next(seq18244);
return clojure.contrib.humanize.intword.cljs$core$IFn$_invoke$arity$variadic(G__18245,seq18244__$1);
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
var digitcnt = ((clojure.contrib.humanize.log10.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.log10.cljs$core$IFn$_invoke$arity$1(num) : clojure.contrib.humanize.log10.call(null,num)) | (0));
var divisible_QMARK_ = ((function (digitcnt){
return (function (num__$1,div){
return (cljs.core.rem(num__$1,div) === (0));
});})(digitcnt))
;
var n_digit = ((function (digitcnt,divisible_QMARK_){
return (function (num__$1,n){
return clojure.contrib.humanize.char__GT_int([cljs.core.str.cljs$core$IFn$_invoke$arity$1(num__$1)].join('').charAt(n));
});})(digitcnt,divisible_QMARK_))
;
if((digitcnt >= (6))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18260 = ((num / (1000000)) | (0));
return (clojure.contrib.humanize.numberword.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.numberword.cljs$core$IFn$_invoke$arity$1(G__18260) : clojure.contrib.humanize.numberword.call(null,G__18260));
})(),"million",(function (){var G__18261 = cljs.core.rem(num,(1000000));
return (clojure.contrib.humanize.numberword.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.numberword.cljs$core$IFn$_invoke$arity$1(G__18261) : clojure.contrib.humanize.numberword.call(null,G__18261));
})()], null));
} else {
if((digitcnt >= (3))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18262 = ((num / (1000)) | (0));
return (clojure.contrib.humanize.numberword.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.numberword.cljs$core$IFn$_invoke$arity$1(G__18262) : clojure.contrib.humanize.numberword.call(null,G__18262));
})(),"thousand",(function (){var G__18263 = cljs.core.rem(num,(1000));
return (clojure.contrib.humanize.numberword.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.numberword.cljs$core$IFn$_invoke$arity$1(G__18263) : clojure.contrib.humanize.numberword.call(null,G__18263));
})()], null));
} else {
if((digitcnt >= (2))){
if(cljs.core.truth_(divisible_QMARK_(num,(100)))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18264 = ((num / (100)) | (0));
return (clojure.contrib.humanize.numap.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.numap.cljs$core$IFn$_invoke$arity$1(G__18264) : clojure.contrib.humanize.numap.call(null,G__18264));
})(),"hundred"], null));
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18265 = ((num / (100)) | (0));
return (clojure.contrib.humanize.numap.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.numap.cljs$core$IFn$_invoke$arity$1(G__18265) : clojure.contrib.humanize.numap.call(null,G__18265));
})(),"hundred","and",(function (){var G__18266 = cljs.core.rem(num,(100));
return (clojure.contrib.humanize.numberword.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.numberword.cljs$core$IFn$_invoke$arity$1(G__18266) : clojure.contrib.humanize.numberword.call(null,G__18266));
})()], null));
}
} else {
if((num < (20))){
return (clojure.contrib.humanize.numap.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.numap.cljs$core$IFn$_invoke$arity$1(num) : clojure.contrib.humanize.numap.call(null,num));
} else {
if(cljs.core.truth_(divisible_QMARK_(num,(10)))){
return (clojure.contrib.humanize.numap.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.numap.cljs$core$IFn$_invoke$arity$1(num) : clojure.contrib.humanize.numap.call(null,num));
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18267 = ((10) * n_digit(num,(0)));
return (clojure.contrib.humanize.numap.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.numap.cljs$core$IFn$_invoke$arity$1(G__18267) : clojure.contrib.humanize.numap.call(null,G__18267));
})(),(function (){var G__18268 = n_digit(num,(1));
return (clojure.contrib.humanize.numap.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.numap.cljs$core$IFn$_invoke$arity$1(G__18268) : clojure.contrib.humanize.numap.call(null,G__18268));
})()], null));

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
var args__8796__auto__ = [];
var len__8789__auto___18275 = arguments.length;
var i__8790__auto___18276 = (0);
while(true){
if((i__8790__auto___18276 < len__8789__auto___18275)){
args__8796__auto__.push((arguments[i__8790__auto___18276]));

var G__18277 = (i__8790__auto___18276 + (1));
i__8790__auto___18276 = G__18277;
continue;
} else {
}
break;
}

var argseq__8797__auto__ = ((((1) < args__8796__auto__.length))?(new cljs.core.IndexedSeq(args__8796__auto__.slice((1)),(0),null)):null);
return clojure.contrib.humanize.filesize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8797__auto__);
});

clojure.contrib.humanize.filesize.cljs$core$IFn$_invoke$arity$variadic = (function (bytes,p__18271){
var map__18272 = p__18271;
var map__18272__$1 = ((((!((map__18272 == null)))?((((map__18272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18272):map__18272);
var binary = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18272__$1,cljs.core.cst$kw$binary,false);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18272__$1,cljs.core.cst$kw$format,"%.1f");
if((bytes === (0))){
return "0";
} else {
var decimal_sizes = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$B,cljs.core.cst$kw$KB,cljs.core.cst$kw$MB,cljs.core.cst$kw$GB,cljs.core.cst$kw$TB,cljs.core.cst$kw$PB,cljs.core.cst$kw$EB,cljs.core.cst$kw$ZB,cljs.core.cst$kw$YB], null);
var binary_sizes = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$B,cljs.core.cst$kw$KiB,cljs.core.cst$kw$MiB,cljs.core.cst$kw$GiB,cljs.core.cst$kw$TiB,cljs.core.cst$kw$PiB,cljs.core.cst$kw$EiB,cljs.core.cst$kw$ZiB,cljs.core.cst$kw$YiB], null);
var units = (cljs.core.truth_(binary)?binary_sizes:decimal_sizes);
var base = (cljs.core.truth_(binary)?(1024):(1000));
var base_pow = ((function (){var G__18274 = clojure.contrib.humanize.logn(bytes,base);
return (clojure.contrib.humanize.floor.cljs$core$IFn$_invoke$arity$1 ? clojure.contrib.humanize.floor.cljs$core$IFn$_invoke$arity$1(G__18274) : clojure.contrib.humanize.floor.call(null,G__18274));
})() | (0));
var base_pow__$1 = (((base_pow < cljs.core.count(units)))?base_pow:(cljs.core.count(units) - (1)));
var suffix = cljs.core.name(cljs.core.get.cljs$core$IFn$_invoke$arity$2(units,base_pow__$1));
var value = (bytes / (clojure.contrib.humanize.expt.cljs$core$IFn$_invoke$arity$2 ? clojure.contrib.humanize.expt.cljs$core$IFn$_invoke$arity$2(base,base_pow__$1) : clojure.contrib.humanize.expt.call(null,base,base_pow__$1)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.contrib.humanize.num_format(format,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
});

clojure.contrib.humanize.filesize.cljs$lang$maxFixedArity = (1);

clojure.contrib.humanize.filesize.cljs$lang$applyTo = (function (seq18269){
var G__18270 = cljs.core.first(seq18269);
var seq18269__$1 = cljs.core.next(seq18269);
return clojure.contrib.humanize.filesize.cljs$core$IFn$_invoke$arity$variadic(G__18270,seq18269__$1);
});

/**
 * Truncate a string with suffix (ellipsis by default) if it is
 * longer than specified length.
 */
clojure.contrib.humanize.truncate = (function clojure$contrib$humanize$truncate(var_args){
var G__18279 = arguments.length;
switch (G__18279) {
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
var string_len = cljs.core.count(string);
var suffix_len = cljs.core.count(suffix);
if((string_len <= length)){
return string;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(0),(length - suffix_len))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
});

clojure.contrib.humanize.truncate.cljs$core$IFn$_invoke$arity$2 = (function (string,length){
return clojure.contrib.humanize.truncate.cljs$core$IFn$_invoke$arity$3(string,length,"...");
});

clojure.contrib.humanize.truncate.cljs$lang$maxFixedArity = 3;

/**
 * Converts a list of items to a human readable string
 * with an optional limit.
 */
clojure.contrib.humanize.oxford = (function clojure$contrib$humanize$oxford(var_args){
var args__8796__auto__ = [];
var len__8789__auto___18286 = arguments.length;
var i__8790__auto___18287 = (0);
while(true){
if((i__8790__auto___18287 < len__8789__auto___18286)){
args__8796__auto__.push((arguments[i__8790__auto___18287]));

var G__18288 = (i__8790__auto___18287 + (1));
i__8790__auto___18287 = G__18288;
continue;
} else {
}
break;
}

var argseq__8797__auto__ = ((((1) < args__8796__auto__.length))?(new cljs.core.IndexedSeq(args__8796__auto__.slice((1)),(0),null)):null);
return clojure.contrib.humanize.oxford.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8797__auto__);
});

clojure.contrib.humanize.oxford.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__18283){
var map__18284 = p__18283;
var map__18284__$1 = ((((!((map__18284 == null)))?((((map__18284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18284):map__18284);
var maximum_display = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18284__$1,cljs.core.cst$kw$maximum_DASH_display,(4));
var truncate_noun = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18284__$1,cljs.core.cst$kw$truncate_DASH_noun,null);
var coll_length = cljs.core.count(coll);
if((coll_length < (2))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(coll);
} else {
if((coll_length <= maximum_display)){
var before_last = cljs.core.take.cljs$core$IFn$_invoke$arity$2((coll_length - (1)),coll);
var last_item = cljs.core.last(coll);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",before_last))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", and "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_item)].join('');
} else {
if((coll_length > maximum_display)){
var display_coll = cljs.core.take.cljs$core$IFn$_invoke$arity$2(maximum_display,coll);
var remaining = (coll_length - maximum_display);
var last_item = ((cljs.core.empty_QMARK_(truncate_noun))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(remaining),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.contrib.inflect.pluralize_noun(remaining,"other"))].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(remaining),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" other "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.contrib.inflect.pluralize_noun(remaining,truncate_noun))].join(''));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",display_coll))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", and "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_item)].join('');
} else {
return coll_length;

}
}
}
});

clojure.contrib.humanize.oxford.cljs$lang$maxFixedArity = (1);

clojure.contrib.humanize.oxford.cljs$lang$applyTo = (function (seq18281){
var G__18282 = cljs.core.first(seq18281);
var seq18281__$1 = cljs.core.next(seq18281);
return clojure.contrib.humanize.oxford.cljs$core$IFn$_invoke$arity$variadic(G__18282,seq18281__$1);
});

clojure.contrib.humanize.in_decades = (function clojure$contrib$humanize$in_decades(diff){
return (cljs_time.core.in_years(diff) / (10));
});
clojure.contrib.humanize.in_centuries = (function clojure$contrib$humanize$in_centuries(diff){
return (cljs_time.core.in_years(diff) / (100));
});
clojure.contrib.humanize.in_millennia = (function clojure$contrib$humanize$in_millennia(diff){
return (cljs_time.core.in_years(diff) / (1000));
});
/**
 * Given a datetime or date, return a human-friendly representation
 * of the amount of time elapsed. 
 */
clojure.contrib.humanize.datetime = (function clojure$contrib$humanize$datetime(var_args){
var args__8796__auto__ = [];
var len__8789__auto___18294 = arguments.length;
var i__8790__auto___18295 = (0);
while(true){
if((i__8790__auto___18295 < len__8789__auto___18294)){
args__8796__auto__.push((arguments[i__8790__auto___18295]));

var G__18296 = (i__8790__auto___18295 + (1));
i__8790__auto___18295 = G__18296;
continue;
} else {
}
break;
}

var argseq__8797__auto__ = ((((1) < args__8796__auto__.length))?(new cljs.core.IndexedSeq(args__8796__auto__.slice((1)),(0),null)):null);
return clojure.contrib.humanize.datetime.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8797__auto__);
});

clojure.contrib.humanize.datetime.cljs$core$IFn$_invoke$arity$variadic = (function (then_dt,p__18291){
var map__18292 = p__18291;
var map__18292__$1 = ((((!((map__18292 == null)))?((((map__18292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18292):map__18292);
var now_dt = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18292__$1,cljs.core.cst$kw$now_DASH_dt,cljs_time.local.local_now());
var suffix = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18292__$1,cljs.core.cst$kw$suffix,"ago");
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18292__$1,cljs.core.cst$kw$prefix,"in");
var then_dt__$1 = cljs_time.coerce.to_date_time(then_dt);
var now_dt__$1 = cljs_time.coerce.to_date_time(now_dt);
var future_time_QMARK_ = cljs_time.core.after_QMARK_(then_dt__$1,now_dt__$1);
var diff = (cljs.core.truth_(future_time_QMARK_)?cljs_time.core.interval(now_dt__$1,then_dt__$1):cljs_time.core.interval(then_dt__$1,now_dt__$1));
if((clojure.contrib.humanize.in_millennia(diff) >= (1))){
var d__18224__auto__ = clojure.contrib.humanize.in_millennia(diff);
var t__18225__auto__ = clojure.contrib.inflect.pluralize_noun(clojure.contrib.humanize.in_millennia(diff),"millenium");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if((clojure.contrib.humanize.in_centuries(diff) >= (1))){
var d__18224__auto__ = clojure.contrib.humanize.in_centuries(diff);
var t__18225__auto__ = clojure.contrib.inflect.pluralize_noun(clojure.contrib.humanize.in_centuries(diff),"century");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if((clojure.contrib.humanize.in_decades(diff) >= (1))){
var d__18224__auto__ = clojure.contrib.humanize.in_decades(diff);
var t__18225__auto__ = clojure.contrib.inflect.pluralize_noun(clojure.contrib.humanize.in_decades(diff),"decade");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if((cljs_time.core.in_years(diff) >= (1))){
var d__18224__auto__ = cljs_time.core.in_years(diff);
var t__18225__auto__ = clojure.contrib.inflect.pluralize_noun(cljs_time.core.in_years(diff),"year");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if((cljs_time.core.in_months(diff) >= (1))){
var d__18224__auto__ = cljs_time.core.in_months(diff);
var t__18225__auto__ = clojure.contrib.inflect.pluralize_noun(cljs_time.core.in_months(diff),"month");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if((cljs_time.core.in_weeks(diff) >= (1))){
var d__18224__auto__ = cljs_time.core.in_weeks(diff);
var t__18225__auto__ = clojure.contrib.inflect.pluralize_noun(cljs_time.core.in_weeks(diff),"week");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if((cljs_time.core.in_days(diff) >= (1))){
var d__18224__auto__ = cljs_time.core.in_days(diff);
var t__18225__auto__ = clojure.contrib.inflect.pluralize_noun(cljs_time.core.in_days(diff),"day");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if((cljs_time.core.in_hours(diff) >= (1))){
var d__18224__auto__ = cljs_time.core.in_hours(diff);
var t__18225__auto__ = clojure.contrib.inflect.pluralize_noun(cljs_time.core.in_hours(diff),"hour");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if((cljs_time.core.in_minutes(diff) >= (1))){
var d__18224__auto__ = cljs_time.core.in_minutes(diff);
var t__18225__auto__ = clojure.contrib.inflect.pluralize_noun(cljs_time.core.in_minutes(diff),"minute");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}
} else {
if((cljs_time.core.in_seconds(diff) >= (1))){
var d__18224__auto__ = cljs_time.core.in_seconds(diff);
var t__18225__auto__ = clojure.contrib.inflect.pluralize_noun(cljs_time.core.in_seconds(diff),"second");
if(cljs.core.truth_(future_time_QMARK_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(d__18224__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t__18225__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
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

clojure.contrib.humanize.datetime.cljs$lang$applyTo = (function (seq18289){
var G__18290 = cljs.core.first(seq18289);
var seq18289__$1 = cljs.core.next(seq18289);
return clojure.contrib.humanize.datetime.cljs$core$IFn$_invoke$arity$variadic(G__18290,seq18289__$1);
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
var G__18303 = clojure.contrib.humanize.duration_periods;
var vec__18304 = G__18303;
var seq__18305 = cljs.core.seq(vec__18304);
var first__18306 = cljs.core.first(seq__18305);
var seq__18305__$1 = cljs.core.next(seq__18305);
var vec__18307 = first__18306;
var period_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18307,(0),null);
var period_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18307,(1),null);
var more_periods = seq__18305__$1;
var terms = cljs.core.PersistentVector.EMPTY;
var remainder__$1 = remainder;
var G__18303__$1 = G__18303;
var terms__$1 = terms;
while(true){
var remainder__$2 = remainder__$1;
var vec__18310 = G__18303__$1;
var seq__18311 = cljs.core.seq(vec__18310);
var first__18312 = cljs.core.first(seq__18311);
var seq__18311__$1 = cljs.core.next(seq__18311);
var vec__18313 = first__18312;
var period_ms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18313,(0),null);
var period_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18313,(1),null);
var more_periods__$1 = seq__18311__$1;
var terms__$2 = terms__$1;
if((period_ms__$1 == null)){
return terms__$2;
} else {
if((remainder__$2 < period_ms__$1)){
var G__18316 = remainder__$2;
var G__18317 = more_periods__$1;
var G__18318 = terms__$2;
remainder__$1 = G__18316;
G__18303__$1 = G__18317;
terms__$1 = G__18318;
continue;
} else {
var period_count = ((remainder__$2 / period_ms__$1) | (0));
var next_remainder = cljs.core.mod(remainder__$2,period_ms__$1);
var G__18319 = next_remainder;
var G__18320 = more_periods__$1;
var G__18321 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(terms__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [period_count,period_name__$1], null));
remainder__$1 = G__18319;
G__18303__$1 = G__18320;
terms__$1 = G__18321;
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
var G__18324 = arguments.length;
switch (G__18324) {
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
return clojure.contrib.humanize.duration.cljs$core$IFn$_invoke$arity$2(duration_ms,null);
});

clojure.contrib.humanize.duration.cljs$core$IFn$_invoke$arity$2 = (function (duration_ms,options){
var terms = clojure.contrib.humanize.duration_terms(duration_ms);
var map__18325 = options;
var map__18325__$1 = ((((!((map__18325 == null)))?((((map__18325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18325.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18325):map__18325);
var number_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18325__$1,cljs.core.cst$kw$number_DASH_format,clojure.contrib.humanize.numberword);
var list_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18325__$1,cljs.core.cst$kw$list_DASH_format,((function (terms,map__18325,map__18325__$1,number_format){
return (function (p1__18322_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",p1__18322_SHARP_);
});})(terms,map__18325,map__18325__$1,number_format))
);
var short_text = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18325__$1,cljs.core.cst$kw$short_DASH_text,"less than a second");
if(cljs.core.seq(terms)){
var G__18327 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (terms,map__18325,map__18325__$1,number_format,list_format,short_text){
return (function (p__18328){
var vec__18329 = p__18328;
var period_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18329,(0),null);
var period_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18329,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((number_format.cljs$core$IFn$_invoke$arity$1 ? number_format.cljs$core$IFn$_invoke$arity$1(period_count) : number_format.call(null,period_count))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.contrib.inflect.pluralize_noun(period_count,period_name))].join('');
});})(terms,map__18325,map__18325__$1,number_format,list_format,short_text))
,terms);
return (list_format.cljs$core$IFn$_invoke$arity$1 ? list_format.cljs$core$IFn$_invoke$arity$1(G__18327) : list_format.call(null,G__18327));
} else {
return short_text;
}
});

clojure.contrib.humanize.duration.cljs$lang$maxFixedArity = 2;

