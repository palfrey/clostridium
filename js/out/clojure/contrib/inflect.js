// Compiled by ClojureScript 1.9.854 {}
goog.provide('clojure.contrib.inflect');
goog.require('cljs.core');
goog.require('clojure.string');
clojure.contrib.inflect.in_QMARK_ = (function clojure$contrib$inflect$in_QMARK_(x,coll){

return cljs.core.some.call(null,(function (p1__29900_SHARP_){
return cljs.core._EQ_.call(null,x,p1__29900_SHARP_);
}),coll);
});
clojure.contrib.inflect.pluralize_noun_rules = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
clojure.contrib.inflect.pluralize_noun_exceptions = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
clojure.contrib.inflect.pluralize_noun = (function clojure$contrib$inflect$pluralize_noun(count,noun){

new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((0) <= count)], null)], null);

var singular_QMARK_ = (count === (1));
if(singular_QMARK_){
return noun;
} else {
return cljs.core.some.call(null,((function (singular_QMARK_){
return (function (p__29901){
var vec__29902 = p__29901;
var cond_QMARK_ = cljs.core.nth.call(null,vec__29902,(0),null);
var result_fn = cljs.core.nth.call(null,vec__29902,(1),null);
if(cljs.core.truth_(cond_QMARK_.call(null,noun))){
return result_fn.call(null,noun);
} else {
return null;
}
});})(singular_QMARK_))
,cljs.core.deref.call(null,clojure.contrib.inflect.pluralize_noun_rules));
}
});
/**
 * Adds a rule for pluralizing. The singular form of the noun is passed to the cond?
 *   predicate and if that return a truthy value, the singular form is passed
 *   to the result-fn to generate the plural form.
 * 
 *   The rule description is for documentation only, it is ignored and may be nil.
 */
clojure.contrib.inflect.add_pluralize_noun_rule = (function clojure$contrib$inflect$add_pluralize_noun_rule(rule_description,cond_QMARK_,result_fn){
return cljs.core.swap_BANG_.call(null,clojure.contrib.inflect.pluralize_noun_rules,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cond_QMARK_,result_fn], null));
});
/**
 * Adds some number of exception cases.
 * 
 * exceptions is a map from singular form to plural form.
 * 
 * The exception description is for documentation only, it is ignored and may be nil.
 */
clojure.contrib.inflect.add_pluralize_noun_exceptions = (function clojure$contrib$inflect$add_pluralize_noun_exceptions(execption_description,exceptions){
return cljs.core.swap_BANG_.call(null,clojure.contrib.inflect.pluralize_noun_exceptions,cljs.core.into,exceptions);
});
clojure.contrib.inflect.add_pluralize_noun_rule.call(null,"For irregular nouns, use the exceptions.",(function (noun){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,clojure.contrib.inflect.pluralize_noun_exceptions),noun);
}),(function (noun){
return cljs.core.deref.call(null,clojure.contrib.inflect.pluralize_noun_exceptions).call(null,noun);
}));
clojure.contrib.inflect.add_pluralize_noun_rule.call(null,"For nouns ending within consonant + y, suffixes `ies' ",(function (noun){
return (clojure.string.ends_with_QMARK_.call(null,noun,"y")) && (!(cljs.core.boolean$.call(null,clojure.contrib.inflect.in_QMARK_.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,noun)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","e","i","o","u"], null)))));
}),(function (noun){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,cljs.core.butlast.call(null,noun))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ies")].join('');
}));
clojure.contrib.inflect.add_pluralize_noun_rule.call(null,"For nouns ending with ss, x, z, ch or sh, suffixes `es.'",(function (noun){
return cljs.core.some.call(null,(function (p1__29905_SHARP_){
return clojure.string.ends_with_QMARK_.call(null,noun,p1__29905_SHARP_);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ss","x","z","ch","sh"], null));
}),(function (noun){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(noun),cljs.core.str.cljs$core$IFn$_invoke$arity$1("es")].join('');
}));
clojure.contrib.inflect.add_pluralize_noun_rule.call(null,"For nouns ending with `f', suffixes `ves'",(function (noun){
return (clojure.string.ends_with_QMARK_.call(null,noun,"f")) && (!(clojure.string.ends_with_QMARK_.call(null,noun,"ff")));
}),(function (noun){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,cljs.core.butlast.call(null,noun))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ves")].join('');
}));
clojure.contrib.inflect.add_pluralize_noun_rule.call(null,"For nouns ending with `fe', suffixes `ves'",(function (noun){
return clojure.string.ends_with_QMARK_.call(null,noun,"fe");
}),(function (noun){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,cljs.core.butlast.call(null,cljs.core.butlast.call(null,noun)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ves")].join('');
}));
clojure.contrib.inflect.add_pluralize_noun_rule.call(null,"Always append `s' at the end of noun.",(function (noun){
return true;
}),(function (noun){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(noun),cljs.core.str.cljs$core$IFn$_invoke$arity$1("s")].join('');
}));
clojure.contrib.inflect.add_pluralize_noun_exceptions.call(null,"Irregular nouns ending in en",cljs.core.PersistentHashMap.fromArrays(["mouse","tooth","child","goose","foot","man","person","woman","louse","ox"],["mice","teeth","children","geese","feet","men","people","women","lice","oxen"]));
clojure.contrib.inflect.add_pluralize_noun_exceptions.call(null,"Irregular nouns ending in f",new cljs.core.PersistentArrayMap(null, 5, ["chef","chefs","cliff","cliffs","ref","refs","roof","roofs","chief","chiefs"], null));
clojure.contrib.inflect.add_pluralize_noun_exceptions.call(null,"Irregular nouns ending in o-es",cljs.core.PersistentHashMap.fromArrays(["cactus","hero","tornado","zero","torpedo","banjo","mosquito","flamingo","buffalo","negro","echo","tomato","volcano","tuxedo","mango","potato"],["cactuses","heroes","tornadoes","zeroes","torpedoes","banjoes","mosquitoes","flamingoes","buffaloes","negroes","echoes","tomatoes","volcanoes","tuxedoes","mangoes","potatoes"]));
clojure.contrib.inflect.add_pluralize_noun_exceptions.call(null,"Nouns with identical singular and plural forms.",cljs.core.PersistentHashMap.fromArrays(["sheep","salmon","pike","trout","plankton","moose","duck","squid","buffalo","bison","deer","swine","fish"],["sheep","salmon","pike","trout","plankton","moose","duck","squid","buffalo","bison","deer","swine","fish"]));
clojure.contrib.inflect.add_pluralize_noun_exceptions.call(null,"Special cases",new cljs.core.PersistentArrayMap(null, 1, ["millenium","millennia"], null));

//# sourceMappingURL=inflect.js.map?rel=1503148883328
