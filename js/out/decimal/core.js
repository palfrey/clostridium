// Compiled by ClojureScript 1.9.854 {}
goog.provide('decimal.core');
goog.require('cljs.core');
goog.require('decimal.extern.decimaljs');
decimal.core._PLUS_decimal_PLUS_ = Decimal.noConflict();
decimal.core._STAR_decimal_STAR_ = decimal.core._PLUS_decimal_PLUS_;
decimal.core.round_mapping = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"round-ceil","round-ceil",-1313111583),new cljs.core.Keyword(null,"round-floor","round-floor",1997941922),new cljs.core.Keyword(null,"round-half-even","round-half-even",184832489),new cljs.core.Keyword(null,"round-half-down","round-half-down",-2135688817),new cljs.core.Keyword(null,"round-half-ceil","round-half-ceil",-1729228399),new cljs.core.Keyword(null,"round-half-up","round-half-up",1083581490),new cljs.core.Keyword(null,"round-half-floor","round-half-floor",-181037710),new cljs.core.Keyword(null,"round-down","round-down",1697239962),new cljs.core.Keyword(null,"round-up","round-up",-1453708101),new cljs.core.Keyword(null,"euclid","euclid",-532911585)],[(2),(3),(6),(5),(7),(4),(8),(1),(0),(9)]);
decimal.core.modulo_mapping = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"round-up","round-up",-1453708101),(0),new cljs.core.Keyword(null,"round-down","round-down",1697239962),(1),new cljs.core.Keyword(null,"round-floor","round-floor",1997941922),(3),new cljs.core.Keyword(null,"round-half-even","round-half-even",184832489),(6),new cljs.core.Keyword(null,"euclid","euclid",-532911585),(9)], null);
/**
 * Set the global configuration for the decimal constructor.
 * 
 *   Possible options:
 * 
 *   - `precision`: The maximum number of significant digits of
 *  the result of an operation (integer 1 to 1e+9 inclusive,
 *  default: 20).
 *   - `rounding`: The default rounding mode used when rounding
 *  the result of an operation (integer 0 to 8 inclusive,
 *  default: :round-half-up).
 *   - `min-e`: The negative exponent limit, i.e. the exponent value below
 *  which underflow to zero occurs (integer, -9e15 to 0 inclusive, default:
 *  -9e15).
 *   - `max-e`: The positive exponent limit, i.e. the exponent value above
 *  which overflow to Infinity occurs (integer, 0 to 9e15 inclusive, default:
 *  9e15).
 *   - `to-exp-neg`: The negative exponent value at and below which `toString`
 *  returns exponential notation. (integer, -9e15 to 0 inclusive, default: -7)
 *   - `to-exp-pos`: The positive exponent value at and above which `toString`
 *  returns exponential notation. (integer, 0 to 9e15 inclusive, default: 20)
 *   - `modulo`: The modulo mode used when calculating the modulus: `a mod n`.
 *  (integer, 0 to 9 inclusive, default: :round-down)
 *   - `crypto`: The value that determines whether cryptographically-secure
 *  pseudo-random number generation is used. (boolean, default: false)
 * 
 *   **Rounding modes**
 * 
 *   Rounding modes are:
 * 
 *   Keyword           |  Description
 *   ------------------|-------------
 *   :round-up         |  Rounds away from zero
 *   :round-down       |  Rounds towards zero
 *   :round-ceil       |  Rounds towards Infinity
 *   :round-floor      |  Rounds towards -Infinity
 *   :round-half-up    |  Rounds towards nearest neighbour. If equidistant, rounds away from zero
 *   :round-half-down  |  Rounds towards nearest neighbour. If equidistant, rounds towards zero
 *   :round-half-even  |  Rounds towards nearest neighbour. If equidistant, rounds towards even neighbour
 *   :round-half-ceil  |  Rounds towards nearest neighbour. If equidistant, rounds towards Infinity
 *   :round-half-floor |  Rounds towards nearest neighbour. If equidistant, rounds towards -Infinity
 *   :euclid           |  Not a rounding mode, see modulo
 * 
 *   **Modulo modes**
 * 
 *   The modes that are most commonly used for the modulus/remainder operation
 *   are shown in the following table. Although the other rounding modes can be used,
 *   they may not give useful results.
 * 
 *   Keyword           | Description
 *   ------------------|------------
 *   :round-up         | The remainder is positive if the dividend is negative, else is negative
 *   :round-down       | The remainder has the same sign as the dividend. This uses truncating division and matches the behaviour of JavaScript's remainder operator %.
 *   :round-floor      | The remainder has the same sign as the divisor. (This matches Python's % operator)
 *   :round-half-even  | The IEEE 754 remainder function
 *   :euclid           | The remainder is always positive.
 * 
 *   **Other options**
 * 
 *   The underlying library supports more options that and this
 *   function also accepts. You can read more about here:
 *   http://mikemcl.github.io/decimal.js/#Dconfig
 */
decimal.core.config_BANG_ = (function decimal$core$config_BANG_(options){
var opts = ({"precision": new cljs.core.Keyword(null,"precision","precision",-1175707478).cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.precision), "rounding": new cljs.core.Keyword(null,"rounding","rounding",71472412).cljs$core$IFn$_invoke$arity$1(options).call(null,decimal.core.round_mapping,decimal.core._PLUS_decimal_PLUS_.rounding), "modulo": new cljs.core.Keyword(null,"modulo","modulo",-914951273).cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"round-down","round-down",1697239962)).call(null,decimal.core.modulo_mapping,decimal.core._PLUS_decimal_PLUS_.modulo), "minE": new cljs.core.Keyword(null,"min-e","min-e",1587836977).cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.minE), "maxE": new cljs.core.Keyword(null,"max-e","max-e",-1903818860).cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.maxE), "toExpNeg": new cljs.core.Keyword(null,"to-exp-neg","to-exp-neg",-292204214).cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.toExpNeg), "toExpPos": new cljs.core.Keyword(null,"to-exp-pos","to-exp-pos",63178244).cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.toExpPos), "crypto": new cljs.core.Keyword(null,"crypto","crypto",1772582615).cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.crypto)});
decimal.core._STAR_decimal_STAR_.set(opts);

return null;
});
/**
 * The same as `config` but returns an constructor
 *   of decimals that can be used for create new instances
 *   with provided configuration.
 */
decimal.core.config = (function decimal$core$config(options){
var opts = ({"precision": new cljs.core.Keyword(null,"precision","precision",-1175707478).cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.precision), "rounding": new cljs.core.Keyword(null,"rounding","rounding",71472412).cljs$core$IFn$_invoke$arity$1(options).call(null,decimal.core.round_mapping,decimal.core._PLUS_decimal_PLUS_.rounding), "modulo": new cljs.core.Keyword(null,"modulo","modulo",-914951273).cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"round-down","round-down",1697239962)).call(null,decimal.core.modulo_mapping,decimal.core._PLUS_decimal_PLUS_.modulo), "minE": new cljs.core.Keyword(null,"min-e","min-e",1587836977).cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.minE), "maxE": new cljs.core.Keyword(null,"max-e","max-e",-1903818860).cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.maxE), "toExpNeg": new cljs.core.Keyword(null,"to-exp-neg","to-exp-neg",-292204214).cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.toExpNeg), "toExpPos": new cljs.core.Keyword(null,"to-exp-pos","to-exp-pos",63178244).cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.toExpPos), "crypto": new cljs.core.Keyword(null,"crypto","crypto",1772582615).cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.crypto)});
return decimal.core._PLUS_decimal_PLUS_.clone(opts);
});

/**
 * @interface
 */
decimal.core.IDecimal = function(){};

/**
 * return a decimal instance.
 */
decimal.core._decimal = (function decimal$core$_decimal(v){
if((!((v == null))) && (!((v.decimal$core$IDecimal$_decimal$arity$1 == null)))){
return v.decimal$core$IDecimal$_decimal$arity$1(v);
} else {
var x__28622__auto__ = (((v == null))?null:v);
var m__28623__auto__ = (decimal.core._decimal[goog.typeOf(x__28622__auto__)]);
if(!((m__28623__auto__ == null))){
return m__28623__auto__.call(null,v);
} else {
var m__28623__auto____$1 = (decimal.core._decimal["_"]);
if(!((m__28623__auto____$1 == null))){
return m__28623__auto____$1.call(null,v);
} else {
throw cljs.core.missing_protocol.call(null,"IDecimal.-decimal",v);
}
}
}
});

/**
 * Create a new Decimal instance from `v` value.
 */
decimal.core.decimal = (function decimal$core$decimal(v){
return decimal.core._decimal.call(null,v);
});
/**
 * Return true if `v` is a instance of Decimal.
 */
decimal.core.decimal_QMARK_ = (function decimal$core$decimal_QMARK_(v){
return (v instanceof decimal.core._STAR_decimal_STAR_);
});
/**
 * Returns true if the value of this Decimal is a finite
 *   number, otherwise returns false.
 *   The only possible non-finite values of a Decimal are
 *   NaN, Infinity and -Infinity.
 */
decimal.core.finite_QMARK_ = (function decimal$core$finite_QMARK_(v){
return decimal.core._decimal.call(null,v).isFinite();
});
/**
 * Returns true if the value of this Decimal is a whole
 *   number, otherwise returns false.
 */
decimal.core.integer_QMARK_ = (function decimal$core$integer_QMARK_(v){
return decimal.core._decimal.call(null,v).isInt();
});
/**
 * Returns true if the value of this Decimal is NaN,
 *   otherwise returns false.
 */
decimal.core.NaN_QMARK_ = (function decimal$core$NaN_QMARK_(v){
return decimal.core._decimal.call(null,v).isNaN();
});
/**
 * Returns true if the value of this Decimal is negative,
 *   otherwise returns false.
 */
decimal.core.neg_QMARK_ = (function decimal$core$neg_QMARK_(v){
return decimal.core._decimal.call(null,v).isNegative();
});
/**
 * Returns true if the value of this Decimal is negative,
 *   otherwise returns false.
 */
decimal.core.pos_QMARK_ = (function decimal$core$pos_QMARK_(v){
return decimal.core._decimal.call(null,v).isPositive();
});
/**
 * Returns true if the value of this Decimal is zero or
 *   minus zero, otherwise returns false.
 */
decimal.core.zero_QMARK_ = (function decimal$core$zero_QMARK_(v){
return decimal.core._decimal.call(null,v).isZero();
});
/**
 * Returns true if the value of this Decimal is less than
 *   the value of x, otherwise returns false.
 */
decimal.core._LT_ = (function decimal$core$_LT_(var_args){
var G__30039 = arguments.length;
switch (G__30039) {
case 2:
return decimal.core._LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29122__auto__ = [];
var len__29103__auto___30041 = arguments.length;
var i__29104__auto___30042 = (0);
while(true){
if((i__29104__auto___30042 < len__29103__auto___30041)){
args_arr__29122__auto__.push((arguments[i__29104__auto___30042]));

var G__30043 = (i__29104__auto___30042 + (1));
i__29104__auto___30042 = G__30043;
continue;
} else {
}
break;
}

var argseq__29123__auto__ = (new cljs.core.IndexedSeq(args_arr__29122__auto__.slice((2)),(0),null));
return decimal.core._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29123__auto__);

}
});

decimal.core._LT_.cljs$core$IFn$_invoke$arity$2 = (function (v,x){
return decimal.core._decimal.call(null,v).lt(x);
});

decimal.core._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (v,x,more){
while(true){
if(decimal.core._LT_.call(null,v,x)){
if(cljs.core.next.call(null,more)){
var G__30044 = x;
var G__30045 = cljs.core.first.call(null,more);
var G__30046 = cljs.core.next.call(null,more);
v = G__30044;
x = G__30045;
more = G__30046;
continue;
} else {
return decimal.core._LT_.call(null,x,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

decimal.core._LT_.cljs$lang$applyTo = (function (seq30036){
var G__30037 = cljs.core.first.call(null,seq30036);
var seq30036__$1 = cljs.core.next.call(null,seq30036);
var G__30038 = cljs.core.first.call(null,seq30036__$1);
var seq30036__$2 = cljs.core.next.call(null,seq30036__$1);
return decimal.core._LT_.cljs$core$IFn$_invoke$arity$variadic(G__30037,G__30038,seq30036__$2);
});

decimal.core._LT_.cljs$lang$maxFixedArity = (2);

/**
 * Returns true if the value of this Decimal is less than
 *   or equal to the value of x, otherwise returns false.
 */
decimal.core._LT__EQ_ = (function decimal$core$_LT__EQ_(var_args){
var G__30051 = arguments.length;
switch (G__30051) {
case 2:
return decimal.core._LT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29122__auto__ = [];
var len__29103__auto___30053 = arguments.length;
var i__29104__auto___30054 = (0);
while(true){
if((i__29104__auto___30054 < len__29103__auto___30053)){
args_arr__29122__auto__.push((arguments[i__29104__auto___30054]));

var G__30055 = (i__29104__auto___30054 + (1));
i__29104__auto___30054 = G__30055;
continue;
} else {
}
break;
}

var argseq__29123__auto__ = (new cljs.core.IndexedSeq(args_arr__29122__auto__.slice((2)),(0),null));
return decimal.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29123__auto__);

}
});

decimal.core._LT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (v,x){
return decimal.core._decimal.call(null,v).lte(x);
});

decimal.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (v,x,more){
while(true){
if(decimal.core._LT__EQ_.call(null,v,x)){
if(cljs.core.next.call(null,more)){
var G__30056 = x;
var G__30057 = cljs.core.first.call(null,more);
var G__30058 = cljs.core.next.call(null,more);
v = G__30056;
x = G__30057;
more = G__30058;
continue;
} else {
return decimal.core._LT__EQ_.call(null,x,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

decimal.core._LT__EQ_.cljs$lang$applyTo = (function (seq30048){
var G__30049 = cljs.core.first.call(null,seq30048);
var seq30048__$1 = cljs.core.next.call(null,seq30048);
var G__30050 = cljs.core.first.call(null,seq30048__$1);
var seq30048__$2 = cljs.core.next.call(null,seq30048__$1);
return decimal.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__30049,G__30050,seq30048__$2);
});

decimal.core._LT__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns true if the value of this Decimal is greater than
 *   the value of x, otherwise returns false.
 */
decimal.core._GT_ = (function decimal$core$_GT_(var_args){
var G__30063 = arguments.length;
switch (G__30063) {
case 2:
return decimal.core._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29122__auto__ = [];
var len__29103__auto___30065 = arguments.length;
var i__29104__auto___30066 = (0);
while(true){
if((i__29104__auto___30066 < len__29103__auto___30065)){
args_arr__29122__auto__.push((arguments[i__29104__auto___30066]));

var G__30067 = (i__29104__auto___30066 + (1));
i__29104__auto___30066 = G__30067;
continue;
} else {
}
break;
}

var argseq__29123__auto__ = (new cljs.core.IndexedSeq(args_arr__29122__auto__.slice((2)),(0),null));
return decimal.core._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29123__auto__);

}
});

decimal.core._GT_.cljs$core$IFn$_invoke$arity$2 = (function (v,x){
return decimal.core._decimal.call(null,v).gt(x);
});

decimal.core._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (v,x,more){
while(true){
if(decimal.core._GT_.call(null,v,x)){
if(cljs.core.next.call(null,more)){
var G__30068 = x;
var G__30069 = cljs.core.first.call(null,more);
var G__30070 = cljs.core.next.call(null,more);
v = G__30068;
x = G__30069;
more = G__30070;
continue;
} else {
return decimal.core._GT_.call(null,x,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

decimal.core._GT_.cljs$lang$applyTo = (function (seq30060){
var G__30061 = cljs.core.first.call(null,seq30060);
var seq30060__$1 = cljs.core.next.call(null,seq30060);
var G__30062 = cljs.core.first.call(null,seq30060__$1);
var seq30060__$2 = cljs.core.next.call(null,seq30060__$1);
return decimal.core._GT_.cljs$core$IFn$_invoke$arity$variadic(G__30061,G__30062,seq30060__$2);
});

decimal.core._GT_.cljs$lang$maxFixedArity = (2);

/**
 * Returns true if the value of this Decimal is greater than
 *   or equal to the value of x, otherwise returns false.
 */
decimal.core._GT__EQ_ = (function decimal$core$_GT__EQ_(var_args){
var G__30075 = arguments.length;
switch (G__30075) {
case 2:
return decimal.core._GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29122__auto__ = [];
var len__29103__auto___30077 = arguments.length;
var i__29104__auto___30078 = (0);
while(true){
if((i__29104__auto___30078 < len__29103__auto___30077)){
args_arr__29122__auto__.push((arguments[i__29104__auto___30078]));

var G__30079 = (i__29104__auto___30078 + (1));
i__29104__auto___30078 = G__30079;
continue;
} else {
}
break;
}

var argseq__29123__auto__ = (new cljs.core.IndexedSeq(args_arr__29122__auto__.slice((2)),(0),null));
return decimal.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29123__auto__);

}
});

decimal.core._GT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (v,x){
return decimal.core._decimal.call(null,v).gte(x);
});

decimal.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (v,x,more){
while(true){
if(decimal.core._GT__EQ_.call(null,v,x)){
if(cljs.core.next.call(null,more)){
var G__30080 = x;
var G__30081 = cljs.core.first.call(null,more);
var G__30082 = cljs.core.next.call(null,more);
v = G__30080;
x = G__30081;
more = G__30082;
continue;
} else {
return decimal.core._GT__EQ_.call(null,x,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

decimal.core._GT__EQ_.cljs$lang$applyTo = (function (seq30072){
var G__30073 = cljs.core.first.call(null,seq30072);
var seq30072__$1 = cljs.core.next.call(null,seq30072);
var G__30074 = cljs.core.first.call(null,seq30072__$1);
var seq30072__$2 = cljs.core.next.call(null,seq30072__$1);
return decimal.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__30073,G__30074,seq30072__$2);
});

decimal.core._GT__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns true if the value of this Decimal is equal to the
 *   value of x, otherwise returns false.
 */
decimal.core._EQ_ = (function decimal$core$_EQ_(var_args){
var G__30087 = arguments.length;
switch (G__30087) {
case 2:
return decimal.core._EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29122__auto__ = [];
var len__29103__auto___30089 = arguments.length;
var i__29104__auto___30090 = (0);
while(true){
if((i__29104__auto___30090 < len__29103__auto___30089)){
args_arr__29122__auto__.push((arguments[i__29104__auto___30090]));

var G__30091 = (i__29104__auto___30090 + (1));
i__29104__auto___30090 = G__30091;
continue;
} else {
}
break;
}

var argseq__29123__auto__ = (new cljs.core.IndexedSeq(args_arr__29122__auto__.slice((2)),(0),null));
return decimal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29123__auto__);

}
});

decimal.core._EQ_.cljs$core$IFn$_invoke$arity$2 = (function (v,x){
return decimal.core._decimal.call(null,v).eq(x);
});

decimal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (v,x,more){
while(true){
if(decimal.core._GT__EQ_.call(null,v,x)){
if(cljs.core.next.call(null,more)){
var G__30092 = x;
var G__30093 = cljs.core.first.call(null,more);
var G__30094 = cljs.core.next.call(null,more);
v = G__30092;
x = G__30093;
more = G__30094;
continue;
} else {
return decimal.core._GT__EQ_.call(null,x,cljs.core.first.call(null,more));
}
} else {
return false;
}
break;
}
});

decimal.core._EQ_.cljs$lang$applyTo = (function (seq30084){
var G__30085 = cljs.core.first.call(null,seq30084);
var seq30084__$1 = cljs.core.next.call(null,seq30084);
var G__30086 = cljs.core.first.call(null,seq30084__$1);
var seq30084__$2 = cljs.core.next.call(null,seq30084__$1);
return decimal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(G__30085,G__30086,seq30084__$2);
});

decimal.core._EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns 1 if the value of this Decimal is greater than
 *   the value of x, -1 if the value of this Decimal is less
 *   than the value of x, 0 if the value of Decimal is equal
 *   to the value of x and NaN if the value of this Decimal or
 *   the value of x is NaN
 */
decimal.core.cmp = (function decimal$core$cmp(v,x){
return decimal.core._decimal.call(null,v).cmp(x);
});
/**
 * Returns a new Decimal whose value is the value of this
 *   Decimal plus x, rounded to significant digits.
 */
decimal.core.plus = (function decimal$core$plus(v,x){
return decimal.core._decimal.call(null,v).plus(x);
});
/**
 * Returns a new Decimal whose value is the value of this
 *   Decimal minus x, rounded to significant digits.
 */
decimal.core.minus = (function decimal$core$minus(v,x){
return decimal.core._decimal.call(null,v).minus(x);
});
/**
 * Returns a new Decimal whose value is the value of this
 *   Decimal times x, rounded to significant digits using.
 */
decimal.core.mul = (function decimal$core$mul(v,x){
return decimal.core._decimal.call(null,v).times(x);
});
/**
 * Returns a new Decimal whose value is the value of this
 *   Decimal divided by x, rounded to significant digits.
 */
decimal.core.div = (function decimal$core$div(v,x){
return decimal.core._decimal.call(null,v).div(x);
});
/**
 * Return a new Decimal whose value is the integer part
 *   of dividing this Decimal by x, rounded to significant digits.
 */
decimal.core.div_SINGLEQUOTE_ = (function decimal$core$div_SINGLEQUOTE_(v,x){
return decimal.core._decimal.call(null,v).divToInt(x);
});
/**
 * Returns a new Decimal whose value is the maximum.
 */
decimal.core.max = (function decimal$core$max(var_args){
var G__30099 = arguments.length;
switch (G__30099) {
case 1:
return decimal.core.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29122__auto__ = [];
var len__29103__auto___30101 = arguments.length;
var i__29104__auto___30102 = (0);
while(true){
if((i__29104__auto___30102 < len__29103__auto___30101)){
args_arr__29122__auto__.push((arguments[i__29104__auto___30102]));

var G__30103 = (i__29104__auto___30102 + (1));
i__29104__auto___30102 = G__30103;
continue;
} else {
}
break;
}

var argseq__29123__auto__ = (new cljs.core.IndexedSeq(args_arr__29122__auto__.slice((2)),(0),null));
return decimal.core.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29123__auto__);

}
});

decimal.core.max.cljs$core$IFn$_invoke$arity$1 = (function (a){
return decimal.core._decimal.call(null,a);
});

decimal.core.max.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var a__$1 = decimal.core._decimal.call(null,a);
var b__$1 = decimal.core._decimal.call(null,b);
if(decimal.core._GT_.call(null,a__$1,b__$1)){
return a__$1;
} else {
return b__$1;
}
});

decimal.core.max.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,decimal.core.max,decimal.core.max.call(null,a,b),more);
});

decimal.core.max.cljs$lang$applyTo = (function (seq30096){
var G__30097 = cljs.core.first.call(null,seq30096);
var seq30096__$1 = cljs.core.next.call(null,seq30096);
var G__30098 = cljs.core.first.call(null,seq30096__$1);
var seq30096__$2 = cljs.core.next.call(null,seq30096__$1);
return decimal.core.max.cljs$core$IFn$_invoke$arity$variadic(G__30097,G__30098,seq30096__$2);
});

decimal.core.max.cljs$lang$maxFixedArity = (2);

/**
 * Returns a new Decimal whose value is the minimum.
 */
decimal.core.min = (function decimal$core$min(var_args){
var G__30108 = arguments.length;
switch (G__30108) {
case 1:
return decimal.core.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29122__auto__ = [];
var len__29103__auto___30110 = arguments.length;
var i__29104__auto___30111 = (0);
while(true){
if((i__29104__auto___30111 < len__29103__auto___30110)){
args_arr__29122__auto__.push((arguments[i__29104__auto___30111]));

var G__30112 = (i__29104__auto___30111 + (1));
i__29104__auto___30111 = G__30112;
continue;
} else {
}
break;
}

var argseq__29123__auto__ = (new cljs.core.IndexedSeq(args_arr__29122__auto__.slice((2)),(0),null));
return decimal.core.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29123__auto__);

}
});

decimal.core.min.cljs$core$IFn$_invoke$arity$1 = (function (a){
return decimal.core._decimal.call(null,a);
});

decimal.core.min.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var a__$1 = decimal.core._decimal.call(null,a);
var b__$1 = decimal.core._decimal.call(null,b);
if(decimal.core._GT_.call(null,a__$1,b__$1)){
return b__$1;
} else {
return a__$1;
}
});

decimal.core.min.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,decimal.core.min,decimal.core.min.call(null,a,b),more);
});

decimal.core.min.cljs$lang$applyTo = (function (seq30105){
var G__30106 = cljs.core.first.call(null,seq30105);
var seq30105__$1 = cljs.core.next.call(null,seq30105);
var G__30107 = cljs.core.first.call(null,seq30105__$1);
var seq30105__$2 = cljs.core.next.call(null,seq30105__$1);
return decimal.core.min.cljs$core$IFn$_invoke$arity$variadic(G__30106,G__30107,seq30105__$2);
});

decimal.core.min.cljs$lang$maxFixedArity = (2);

decimal.core._SLASH_ = decimal.core.div;
decimal.core._PLUS_ = decimal.core.plus;
decimal.core._ = decimal.core.minus;
decimal.core._STAR_ = decimal.core.mul;
/**
 * Returns a new Decimal whose value is the value of this Decimal
 *   rounded to a whole number in the direction of negative Infinity.
 */
decimal.core.floor = (function decimal$core$floor(v){
return decimal.core._decimal.call(null,v).floor();
});
/**
 * Returns a new Decimal whose value is the value of this Decimal
 *   rounded to a whole number in the direction of positive Infinity.
 */
decimal.core.ceil = (function decimal$core$ceil(v){
return decimal.core._decimal.call(null,v).ceil();
});
/**
 * Returns a new Decimal whose value is the value of this Decimal
 *   rounded to a whole number.
 *   To emulate Math.round, set rounding to 7 (or :round/hanf-ceil).
 */
decimal.core.round = (function decimal$core$round(v){
return decimal.core._decimal.call(null,v).round();
});
/**
 * Returns a new Decimal whose value is the absolute value, i.e.
 *   the magnitude, of the value of this Decimal.
 */
decimal.core.abs = (function decimal$core$abs(v){
return decimal.core._decimal.call(null,v).absoluteValue();
});
/**
 * Returns a new Decimal whose value is the sine of the value
 *   in radians of this Decimal.
 */
decimal.core.sin = (function decimal$core$sin(v){
return decimal.core._decimal.call(null,v).sine();
});
/**
 * Returns a new Decimal whose value is the inverse sine in
 *   radians of the value of this Decimal.
 */
decimal.core.asin = (function decimal$core$asin(v){
return decimal.core._decimal.call(null,v).inverseSine();
});
/**
 * Returns a new Decimal whose value is the hyperbolic sine of
 *   the value in radians of this Decimal.
 */
decimal.core.sinh = (function decimal$core$sinh(v){
return decimal.core._decimal.call(null,v).hyperbolicSine();
});
/**
 * Returns a new Decimal whose value is the inverse hyperbolic
 *   sine in radians of the value of this Decimal.
 */
decimal.core.asinh = (function decimal$core$asinh(v){
return decimal.core._decimal.call(null,v).inverseHyperbolicSine();
});
/**
 * Returns a new Decimal whose value is the cosine of the value
 *   in radians of this Decimal.
 */
decimal.core.cos = (function decimal$core$cos(v){
return decimal.core._decimal.call(null,v).cosine();
});
/**
 * Returns a new Decimal whose value is the inverse cosine
 *   in radians of the value of this Decimal.
 */
decimal.core.acos = (function decimal$core$acos(v){
return decimal.core._decimal.call(null,v).inverseCosine();
});
/**
 * Returns a new Decimal whose value is the hyperbolic cosine
 *   of the value in radians of this Decimal.
 */
decimal.core.cosh = (function decimal$core$cosh(v){
return decimal.core._decimal.call(null,v).hyperbolicCosine();
});
/**
 * Returns a new Decimal whose value is the inverse hyperbolic
 *   cosine in radians of the value of this Decimal.
 */
decimal.core.acosh = (function decimal$core$acosh(v){
return decimal.core._decimal.call(null,v).inverseHyperbolicCosine();
});
/**
 * Returns a new Decimal whose value is the tangent of the value
 *   in radians of this Decimal.
 */
decimal.core.tan = (function decimal$core$tan(v){
return decimal.core._decimal.call(null,v).tangent();
});
/**
 * Returns a new Decimal whose value is the inverse tangent
 *   in radians of the value of this Decimal.
 */
decimal.core.atan = (function decimal$core$atan(v){
return decimal.core._decimal.call(null,v).inverseTangent();
});
/**
 * Returns a new Decimal whose value is the hyperbolic
 *   tangent of the value in radians of this Decimal.
 */
decimal.core.tanh = (function decimal$core$tanh(v){
return decimal.core._decimal.call(null,v).hyperbolicTangent();
});
/**
 * Returns a new Decimal whose value is the inverse hyperbolic
 *   tangent in radians of the value of this Decimal.
 */
decimal.core.atanh = (function decimal$core$atanh(v){
return decimal.core._decimal.call(null,v).inverseHyperbolicTangent();
});
/**
 * Returns a new Decimal whose value is the cube root of this Decimal.
 */
decimal.core.cbrt = (function decimal$core$cbrt(v){
return decimal.core._decimal.call(null,v).cubeRoot();
});
/**
 * Returns a new Decimal whose value is the square root of this Decimal.
 */
decimal.core.sqrt = (function decimal$core$sqrt(v){
return decimal.core._decimal.call(null,v).squareRoot();
});
/**
 * Returns a new Decimal whose value is the base `x` logarithm
 *   of the value of this Decimal.
 *   If x is omitted, the base 10 logarithm of the value of
 *   this Decimal will be returned.
 */
decimal.core.log = (function decimal$core$log(var_args){
var G__30114 = arguments.length;
switch (G__30114) {
case 1:
return decimal.core.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.log.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.log.call(null,v,(10));
});

decimal.core.log.cljs$core$IFn$_invoke$arity$2 = (function (v,x){
return decimal.core._decimal.call(null,v).log(x);
});

decimal.core.log.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new Decimal whose value is the base 2 logarithm of `x`.
 */
decimal.core.log2 = (function decimal$core$log2(x){
return decimal.core._STAR_decimal_STAR_.log2(x);
});
/**
 * Returns a new Decimal whose value is the base 10 logarithm of `x`.
 */
decimal.core.log10 = (function decimal$core$log10(x){
return decimal.core._STAR_decimal_STAR_.log10(x);
});
/**
 * Returns a new Decimal whose value is the value of
 *   this Decimal modulo `x`.
 * 
 *   The value returned, and in particular its sign, is
 *   dependent on the value of the modulo property of this
 *   Decimal's constructor. If it is 1 (default value), the
 *   result will have the same sign as this Decimal, and it
 *   will match that of Javascript's `%` operator (within
 *   the limits of double precision) and `BigDecimal`'s
 *   remainder method.
 * 
 *   See `config!` function docstrings for a description
 *   and available options for `modulo`.
 */
decimal.core.mod = (function decimal$core$mod(v,x){
return decimal.core._decimal.call(null,v).mod(x);
});
/**
 * Returns a new Decimal whose value is the base e (Euler's number,
 *   the base of the natural logarithm) exponential of the value of
 *   this Decimal.
 * 
 *   The `ln` is the invese of this function.
 */
decimal.core.exp = (function decimal$core$exp(v){
return decimal.core._decimal.call(null,v).naturalExponential();
});
/**
 * Returns a new Decimal whose value is the natural logarithm of
 *   the value of this Decimal.
 */
decimal.core.ln = (function decimal$core$ln(v){
return decimal.core._decimal.call(null,v).naturalLogarithm();
});
/**
 * Returns a new Decimal whose value is the square root of the sum
 *   of the squares of the arguments.
 */
decimal.core.hypot = (function decimal$core$hypot(var_args){
var args__29110__auto__ = [];
var len__29103__auto___30117 = arguments.length;
var i__29104__auto___30118 = (0);
while(true){
if((i__29104__auto___30118 < len__29103__auto___30117)){
args__29110__auto__.push((arguments[i__29104__auto___30118]));

var G__30119 = (i__29104__auto___30118 + (1));
i__29104__auto___30118 = G__30119;
continue;
} else {
}
break;
}

var argseq__29111__auto__ = ((((0) < args__29110__auto__.length))?(new cljs.core.IndexedSeq(args__29110__auto__.slice((0)),(0),null)):null);
return decimal.core.hypot.cljs$core$IFn$_invoke$arity$variadic(argseq__29111__auto__);
});

decimal.core.hypot.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return decimal.core._STAR_decimal_STAR_.hypot.apply(decimal.core._STAR_decimal_STAR_,cljs.core.clj__GT_js.call(null,params));
});

decimal.core.hypot.cljs$lang$maxFixedArity = (0);

decimal.core.hypot.cljs$lang$applyTo = (function (seq30116){
return decimal.core.hypot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30116));
});

/**
 * Returns a new Decimal whose value is the value of this Decimal negated.
 */
decimal.core.neg = (function decimal$core$neg(v){
return decimal.core._decimal.call(null,v).negated();
});
/**
 * Returns a new Decimal with a pseudo-random value equal to or greater
 *   than 0 and less than 1.
 *   The return value will have `dp` decimal places (or less if trailing
 *   zeros are produced). If dp is omitted then the default will be used.
 * 
 *   Detailed doc: http://mikemcl.github.io/decimal.js/#Drandom
 */
decimal.core.random = (function decimal$core$random(dp){
return decimal.core._STAR_decimal_STAR_.random(dp);
});
/**
 * Returns the number of decimal places, i.e. the number
 *   of digits after the decimal point, of the value of this Decimal.
 */
decimal.core.decimal_places = (function decimal$core$decimal_places(v){
return decimal.core._decimal.call(null,v).decimalPlaces();
});
/**
 * Returns a new Decimal whose value is the value of this Decimal
 *   truncated to a whole number.
 */
decimal.core.truncate = (function decimal$core$truncate(v){
return decimal.core._decimal.call(null,v).truncated();
});
/**
 * Returns the number of significant digits of the value of this Decimal.
 * 
 *   If `include-zeros` is `true`, then the trailing zeros of the integer
 *   part will be included in the counter of significant digits.
 */
decimal.core.precision = (function decimal$core$precision(var_args){
var G__30121 = arguments.length;
switch (G__30121) {
case 1:
return decimal.core.precision.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.precision.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.precision.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.precision.call(null,v,false);
});

decimal.core.precision.cljs$core$IFn$_invoke$arity$2 = (function (v,include_zeros){
return decimal.core._decimal.call(null,v).precision(cljs.core.boolean$.call(null,include_zeros));
});

decimal.core.precision.cljs$lang$maxFixedArity = 2;

/**
 * Returns the sign of the value of this Decimal.
 */
decimal.core.sign = (function decimal$core$sign(v){
return decimal.core._STAR_decimal_STAR_.sign(v);
});
/**
 * Returns a string representing the value of this Decimal in binary format.
 * 
 *   If `sd` is specified, the return value will use binary exponential notation.
 *   If `sd` is omitted, the return value will be rounded to default significant
 *   digits. If `rm` is omitted, default rounding mode will be used.
 */
decimal.core.to_binary = (function decimal$core$to_binary(var_args){
var G__30124 = arguments.length;
switch (G__30124) {
case 1:
return decimal.core.to_binary.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.to_binary.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return decimal.core.to_binary.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_binary.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.to_binary.call(null,v,undefined,undefined);
});

decimal.core.to_binary.cljs$core$IFn$_invoke$arity$2 = (function (v,sd){
return decimal.core.to_binary.call(null,v,sd,undefined);
});

decimal.core.to_binary.cljs$core$IFn$_invoke$arity$3 = (function (v,sd,rm){
var v__$1 = decimal.core._decimal.call(null,v);
return v__$1.toBinary(sd,rm);
});

decimal.core.to_binary.cljs$lang$maxFixedArity = 3;

/**
 * Returns a string representing the value of this Decimal in
 *   exponential notation rounded using rounding mode `rm` to `dp`
 *   decimal places.
 * 
 *   If the value of this Decimal in exponential notation has fewer
 *   than `dp` fraction digits, the return value will be appended
 *   with zeros accordingly.
 * 
 *   If `dp` is omitted, the number of digits after the decimal
 *   point defaults to the minimum number of digits necessary to
 *   represent the value exactly.
 * 
 *   If `rm` is omitted, rounding mode rounding is used.
 * 
 *   Throws on an invalid `dp` or `rm` value.
 */
decimal.core.to_exponential = (function decimal$core$to_exponential(var_args){
var G__30127 = arguments.length;
switch (G__30127) {
case 1:
return decimal.core.to_exponential.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.to_exponential.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return decimal.core.to_exponential.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_exponential.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.to_exponential.call(null,v,undefined,undefined);
});

decimal.core.to_exponential.cljs$core$IFn$_invoke$arity$2 = (function (v,dp){
return decimal.core.to_exponential.call(null,v,dp,undefined);
});

decimal.core.to_exponential.cljs$core$IFn$_invoke$arity$3 = (function (v,dp,rm){
return decimal.core._decimal.call(null,v).toExponential(dp,rm);
});

decimal.core.to_exponential.cljs$lang$maxFixedArity = 3;

/**
 * Returns a string representing the value of this Decimal in
 *   normal (fixed-point) notation rounded to `dp` decimal places
 *   using rounding mode `rm`.
 * 
 *   If the value of this Decimal in normal notation has fewer
 *   than `dp` fraction digits, the return value will be appended
 *   with zeros accordingly.
 * 
 *   Unlike `Number/toFixed`, which returns exponential notation
 *   if a number is greater or equal to 10^21, this method will
 *   always return normal notation.
 * 
 *   If `dp` is omitted, the return value will be unrounded and
 *   in normal notation. This is unlike `Number/toFixed`, which
 *   returns the value to zero decimal places, but is useful when
 *   because of the current `toExpNeg` or `toExpNeg` values,
 *   toString returns exponential notation.
 * 
 *   If `rm` is omitted, default rounding mode is used.
 * 
 *   Throws on an invalid `dp` or `rm` value.
 */
decimal.core.to_fixed = (function decimal$core$to_fixed(var_args){
var G__30130 = arguments.length;
switch (G__30130) {
case 1:
return decimal.core.to_fixed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.to_fixed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return decimal.core.to_fixed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_fixed.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.to_fixed.call(null,v,undefined,undefined);
});

decimal.core.to_fixed.cljs$core$IFn$_invoke$arity$2 = (function (v,dp){
return decimal.core.to_fixed.call(null,v,dp,undefined);
});

decimal.core.to_fixed.cljs$core$IFn$_invoke$arity$3 = (function (v,dp,rm){
return decimal.core._decimal.call(null,v).toFixed(dp,rm);
});

decimal.core.to_fixed.cljs$lang$maxFixedArity = 3;

/**
 * Returns a string representing the value of this Decimal in
 *   octal notation rounded to `sd` significant digits
 *   using rounding mode `rm`.
 * 
 *   If `sd` is defined, the return value will use binary
 *   exponential notation.
 * 
 *   If `sd` is omitted, the return value will be rounded to
 *   `precision` significant digits.
 * 
 *   If `rm` is omitted, rounding mode `rounding` will be used.
 * 
 *   Throws on an invalid `sd` or `rm` value.
 */
decimal.core.to_octal = (function decimal$core$to_octal(var_args){
var G__30133 = arguments.length;
switch (G__30133) {
case 1:
return decimal.core.to_octal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.to_octal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return decimal.core.to_octal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_octal.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.to_octal.call(null,v,undefined,undefined);
});

decimal.core.to_octal.cljs$core$IFn$_invoke$arity$2 = (function (v,sd){
return decimal.core.to_octal.call(null,v,sd,undefined);
});

decimal.core.to_octal.cljs$core$IFn$_invoke$arity$3 = (function (v,sd,rm){
return decimal.core._decimal.call(null,v).toOctal(sd,rm);
});

decimal.core.to_octal.cljs$lang$maxFixedArity = 3;

/**
 * Returns a string representing the value of this Decimal in
 *   hexadecimal notation rounded to `sd` significant digits
 *   using rounding mode `rm`.
 * 
 *   If `sd` is defined, the return value will use binary
 *   exponential notation.
 * 
 *   If `sd` is omitted, the return value will be rounded to
 *   `precision` significant digits.
 * 
 *   If `rm` is omitted, rounding mode `rounding` will be used.
 * 
 *   Throws on an invalid `sd` or `rm` value.
 */
decimal.core.to_hex = (function decimal$core$to_hex(var_args){
var G__30136 = arguments.length;
switch (G__30136) {
case 1:
return decimal.core.to_hex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.to_hex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return decimal.core.to_hex.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_hex.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.to_hex.call(null,v,undefined,undefined);
});

decimal.core.to_hex.cljs$core$IFn$_invoke$arity$2 = (function (v,sd){
return decimal.core.to_hex.call(null,v,sd,undefined);
});

decimal.core.to_hex.cljs$core$IFn$_invoke$arity$3 = (function (v,sd,rm){
return decimal.core._decimal.call(null,v).toHexadecimal(sd,rm);
});

decimal.core.to_hex.cljs$lang$maxFixedArity = 3;

/**
 * Returns the value of this Decimal converted to a primitive number.
 * 
 *   Type coercion with, for example, JavaScript's unary plus operator will also
 *   work, except that a Decimal with the value minus zero will convert to
 *   positive zero.
 */
decimal.core.to_number = (function decimal$core$to_number(v){
return decimal.core._decimal.call(null,v).toNumber();
});
/**
 * Returns a string representing the value of this Decimal.
 * 
 *   If this Decimal has a positive exponent that is equal to or greater than
 *   `to-exp-pos`, or a negative exponent equal to or less than `to-exp-neg`, then
 *   exponential notation will be returned.
 */
decimal.core.to_string = (function decimal$core$to_string(v){
return decimal.core._decimal.call(null,v).toString();
});
/**
 * As toString, but zero is signed.
 */
decimal.core.value_of = (function decimal$core$value_of(v){
return decimal.core._decimal.call(null,v).valueOf();
});
/**
 * Returns a string representing the value of this Decimal in
 *   rounded to `sd` significant digits using rounding mode `rm`.
 * 
 *   If `sd` is less than the number of digits necessary to represent the integer
 *   part of the value in normal (fixed-point) notation, then exponential notation
 *   is used.
 * 
 *   If `sd` is omitted, the return value is the same as to-string.
 * 
 *   If `rm` is omitted, rounding mode `rounding` will be used.
 * 
 *   Throws on an invalid `sd` or `rm` value.
 */
decimal.core.to_precision = (function decimal$core$to_precision(var_args){
var G__30139 = arguments.length;
switch (G__30139) {
case 1:
return decimal.core.to_precision.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.to_precision.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return decimal.core.to_precision.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_precision.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.to_precision.call(null,v,undefined,undefined);
});

decimal.core.to_precision.cljs$core$IFn$_invoke$arity$2 = (function (v,sd){
return decimal.core.to_precision.call(null,v,sd,undefined);
});

decimal.core.to_precision.cljs$core$IFn$_invoke$arity$3 = (function (v,sd,rm){
return decimal.core._decimal.call(null,v).toPrecision(sd,rm);
});

decimal.core.to_precision.cljs$lang$maxFixedArity = 3;

/**
 * Returns a new Decimal whose value is the value of this Decimal rounded to
 *   `sd` significant digits using rounding mode `rm`.
 * 
 *   If `sd` is omitted, the return value will be rounded to
 *   `precision` significant digits.
 * 
 *   If `rm` is omitted, rounding mode `rounding` will be used.
 * 
 *   Throws on an invalid `sd` or `rm` value.
 */
decimal.core.to_significant_digits = (function decimal$core$to_significant_digits(var_args){
var G__30142 = arguments.length;
switch (G__30142) {
case 1:
return decimal.core.to_significant_digits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.to_significant_digits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return decimal.core.to_significant_digits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_significant_digits.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.to_significant_digits.call(null,v,undefined,undefined);
});

decimal.core.to_significant_digits.cljs$core$IFn$_invoke$arity$2 = (function (v,sd){
return decimal.core.to_significant_digits.call(null,v,sd,undefined);
});

decimal.core.to_significant_digits.cljs$core$IFn$_invoke$arity$3 = (function (v,sd,rm){
return decimal.core._decimal.call(null,v).toSignificantDigits(sd,rm);
});

decimal.core.to_significant_digits.cljs$lang$maxFixedArity = 3;

/**
 * Returns a new Decimal whose value is the value of this Decimal rounded to
 *   `dp` decimal places using rounding mode `rm`.
 * 
 *   If `dp` is omitted, the return value will have the same value as this
 *   Decimal.
 * 
 *   If `rm` is omitted, rounding mode `rounding` will be used.
 * 
 *   Throws on an invalid `dp` or `rm` value.
 */
decimal.core.to_decimal_places = (function decimal$core$to_decimal_places(var_args){
var G__30145 = arguments.length;
switch (G__30145) {
case 1:
return decimal.core.to_decimal_places.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.to_decimal_places.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return decimal.core.to_decimal_places.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_decimal_places.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.to_decimal_places.call(null,v,undefined,undefined);
});

decimal.core.to_decimal_places.cljs$core$IFn$_invoke$arity$2 = (function (v,dp){
return decimal.core.to_decimal_places.call(null,v,dp,undefined);
});

decimal.core.to_decimal_places.cljs$core$IFn$_invoke$arity$3 = (function (v,dp,rm){
return decimal.core._decimal.call(null,v).toDecimalPlaces(dp,rm);
});

decimal.core.to_decimal_places.cljs$lang$maxFixedArity = 3;

/**
 * Returns an array of two Decimals representing the value of this Decimal as a
 *   simple fraction with an integer numerator and an integer denominator. The
 *   denominator will be a positive non-zero value less than or equal to
 *   `max_denominator`.
 * 
 *   If a maximum denominator is omitted, the denominator will be the lowest value
 *   necessary to represent the number exactly.
 * 
 *   Throws on an invalid `max_denominator` value.
 */
decimal.core.to_fraction = (function decimal$core$to_fraction(var_args){
var G__30148 = arguments.length;
switch (G__30148) {
case 1:
return decimal.core.to_fraction.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.to_fraction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_fraction.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.to_fraction.call(null,v,undefined);
});

decimal.core.to_fraction.cljs$core$IFn$_invoke$arity$2 = (function (v,max_denominator){
return cljs.core.js__GT_clj.call(null,decimal.core._decimal.call(null,v).toFraction(max_denominator));
});

decimal.core.to_fraction.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new Decimal whose value is the value of this Decimal raised to the
 *   power x, rounded to precision significant digits using rounding mode
 *   rounding.
 * 
 *   The performance of this method degrades exponentially with increasing digits.
 *   For non-integer exponents in particular, the performance of this method may
 *   not be adequate.
 */
decimal.core.pow = (function decimal$core$pow(v,x){
return decimal.core._decimal.call(null,v).toPower(x);
});
/**
 * Returns a new Decimal whose value is the nearest multiple of `x` to the value
 *   of this Decimal.
 * 
 *   If the value of this Decimal is equidistant from two multiples of `x`, the
 *   rounding mode `rm`, or `rounding` if `rm` is omitted, determines the
 *   direction of the nearest.
 * 
 *   In this context, rounding mode `:round-half-up` is interpreted the same as
 *   rounding mode `:round-up`, and so on, i.e. the rounding is either up, down,
 *   to ceil, to floor or to even.
 * 
 *   The return value will always have the same sign as this Decimal, unless
 *   either this Decimal or `x` is `NaN`, in which case the return value will be
 *   also be `NaN`.
 * 
 *   The return value is not affected by the value of the `precision` setting.
 */
decimal.core.to_nearest = (function decimal$core$to_nearest(var_args){
var G__30151 = arguments.length;
switch (G__30151) {
case 2:
return decimal.core.to_nearest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return decimal.core.to_nearest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_nearest.cljs$core$IFn$_invoke$arity$2 = (function (v,n){
return decimal.core.to_nearest.call(null,v,n,undefined);
});

decimal.core.to_nearest.cljs$core$IFn$_invoke$arity$3 = (function (v,n,rm){
return decimal.core._decimal.call(null,v).toNearest(n,rm);
});

decimal.core.to_nearest.cljs$lang$maxFixedArity = 3;

decimal.core._STAR_decimal_STAR_.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

decimal.core._STAR_decimal_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (v,other){
var v__$1 = this;
return v__$1.eq(other);
});

decimal.core._STAR_decimal_STAR_.prototype.cljs$core$ICloneable$ = cljs.core.PROTOCOL_SENTINEL;

decimal.core._STAR_decimal_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (v){
var v__$1 = this;
var t = decimal.core._STAR_decimal_STAR_;
return (new t(v__$1));
});

decimal.core._STAR_decimal_STAR_.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

decimal.core._STAR_decimal_STAR_.prototype.cljs$core$IDeref$_deref$arity$1 = (function (v){
var v__$1 = this;
return v__$1.toNumber();
});

decimal.core._STAR_decimal_STAR_.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

decimal.core._STAR_decimal_STAR_.prototype.cljs$core$IComparable$_compare$arity$2 = (function (v,other){
var v__$1 = this;
return v__$1.comparedTo(other);
});
decimal.core._STAR_decimal_STAR_.prototype.decimal$core$IDecimal$ = cljs.core.PROTOCOL_SENTINEL;

decimal.core._STAR_decimal_STAR_.prototype.decimal$core$IDecimal$_decimal$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});

goog.object.set(decimal.core.IDecimal,"string",true);

goog.object.set(decimal.core._decimal,"string",(function (v){
return (new decimal.core._STAR_decimal_STAR_(v));
}));

goog.object.set(decimal.core.IDecimal,"number",true);

goog.object.set(decimal.core._decimal,"number",(function (v){
return (new decimal.core._STAR_decimal_STAR_(v));
}));

//# sourceMappingURL=core.js.map?rel=1502751509117
