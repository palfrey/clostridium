// Compiled by ClojureScript 1.9.229 {:target :nodejs}
goog.provide('clostridium.befunge_test');
goog.require('cljs.core');
goog.require('doo.runner');
goog.require('clostridium.befunge_test_core');
clostridium.befunge_test.befunge98_clear_stack = (function clostridium$befunge_test$befunge98_clear_stack(){
return cljs.test.test_var.call(null,clostridium$befunge_test$befunge98_clear_stack.cljs$lang$var);
});
clostridium.befunge_test.befunge98_clear_stack.cljs$lang$test = (function (){
var expected__10074__auto__ = "GOOD: n clears the stack\n";
var trimExpected__10075__auto__ = cljs.core.subs.call(null,expected__10074__auto__,(0),(cljs.core.count.call(null,expected__10074__auto__) - (1)));
var result__10076__auto__ = (function (){var sb__7203__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10141_10183 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10142_10184 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10141_10183,_STAR_print_fn_STAR_10142_10184,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__){
return (function (x__7204__auto__){
return sb__7203__auto__.append(x__7204__auto__);
});})(_STAR_print_newline_STAR_10141_10183,_STAR_print_fn_STAR_10142_10184,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__))
;

try{clostridium.befunge.runBefunge.call(null,"123n#v_#v_#v_\"kcats eht sraelc n :DOOG\",,,,,,,,,,,,,,,,,,,,,,,,@\n     >  >  >\"kcats eht raelc ton seod n :DAB\",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,@\n");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10142_10184;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10141_10183;
}
return [cljs.core.str(sb__7203__auto__)].join('');
})();
try{var values__9044__auto__ = (function (){var x__7051__auto__ = trimExpected__10075__auto__;
return cljs.core._conj.call(null,(function (){var x__7051__auto____$1 = result__10076__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto____$1);
})(),x__7051__auto__);
})();
var result__9045__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9044__auto__);
if(cljs.core.truth_(result__9045__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9044__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7051__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__9044__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9045__auto__;
}catch (e10143){var t__9082__auto__ = e10143;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9082__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

clostridium.befunge_test.befunge98_clear_stack.cljs$lang$var = new cljs.core.Var(function(){return clostridium.befunge_test.befunge98_clear_stack;},new cljs.core.Symbol("clostridium.befunge_test","befunge98-clear-stack","clostridium.befunge_test/befunge98-clear-stack",-791861300,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"test/cljs/clostridium/befunge_test.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clostridium.befunge_test","clostridium.befunge_test",284602340,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"befunge98-clear-stack","befunge98-clear-stack",1717837046,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clostridium.befunge_test.befunge98_clear_stack)?clostridium.befunge_test.befunge98_clear_stack.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null));

clostridium.befunge_test.befunge98_fetchchar_skip = (function clostridium$befunge_test$befunge98_fetchchar_skip(){
return cljs.test.test_var.call(null,clostridium$befunge_test$befunge98_fetchchar_skip.cljs$lang$var);
});
clostridium.befunge_test.befunge98_fetchchar_skip.cljs$lang$test = (function (){
var expected__10074__auto__ = "XXXX\n";
var trimExpected__10075__auto__ = cljs.core.subs.call(null,expected__10074__auto__,(0),(cljs.core.count.call(null,expected__10074__auto__) - (1)));
var result__10076__auto__ = (function (){var sb__7203__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10144_10185 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10145_10186 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10144_10185,_STAR_print_fn_STAR_10145_10186,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__){
return (function (x__7204__auto__){
return sb__7203__auto__.append(x__7204__auto__);
});})(_STAR_print_newline_STAR_10144_10185,_STAR_print_fn_STAR_10145_10186,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__))
;

try{clostridium.befunge.runBefunge.call(null,"';'X;#;:::,,,,@\n");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10145_10186;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10144_10185;
}
return [cljs.core.str(sb__7203__auto__)].join('');
})();
try{var values__9044__auto__ = (function (){var x__7051__auto__ = trimExpected__10075__auto__;
return cljs.core._conj.call(null,(function (){var x__7051__auto____$1 = result__10076__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto____$1);
})(),x__7051__auto__);
})();
var result__9045__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9044__auto__);
if(cljs.core.truth_(result__9045__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9044__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7051__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__9044__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9045__auto__;
}catch (e10146){var t__9082__auto__ = e10146;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9082__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

clostridium.befunge_test.befunge98_fetchchar_skip.cljs$lang$var = new cljs.core.Var(function(){return clostridium.befunge_test.befunge98_fetchchar_skip;},new cljs.core.Symbol("clostridium.befunge_test","befunge98-fetchchar-skip","clostridium.befunge_test/befunge98-fetchchar-skip",-1223440765,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"test/cljs/clostridium/befunge_test.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clostridium.befunge_test","clostridium.befunge_test",284602340,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"befunge98-fetchchar-skip","befunge98-fetchchar-skip",620428789,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clostridium.befunge_test.befunge98_fetchchar_skip)?clostridium.befunge_test.befunge98_fetchchar_skip.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null));

clostridium.befunge_test.befunge98_hex_number = (function clostridium$befunge_test$befunge98_hex_number(){
return cljs.test.test_var.call(null,clostridium$befunge_test$befunge98_hex_number.cljs$lang$var);
});
clostridium.befunge_test.befunge98_hex_number.cljs$lang$test = (function (){
var expected__10074__auto__ = "15 14 13 12 11 10 \n";
var trimExpected__10075__auto__ = cljs.core.subs.call(null,expected__10074__auto__,(0),(cljs.core.count.call(null,expected__10074__auto__) - (1)));
var result__10076__auto__ = (function (){var sb__7203__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10147_10187 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10148_10188 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10147_10187,_STAR_print_fn_STAR_10148_10188,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__){
return (function (x__7204__auto__){
return sb__7203__auto__.append(x__7204__auto__);
});})(_STAR_print_newline_STAR_10147_10187,_STAR_print_fn_STAR_10148_10188,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__))
;

try{clostridium.befunge.runBefunge.call(null,"abcdef......@\n");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10148_10188;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10147_10187;
}
return [cljs.core.str(sb__7203__auto__)].join('');
})();
try{var values__9044__auto__ = (function (){var x__7051__auto__ = trimExpected__10075__auto__;
return cljs.core._conj.call(null,(function (){var x__7051__auto____$1 = result__10076__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto____$1);
})(),x__7051__auto__);
})();
var result__9045__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9044__auto__);
if(cljs.core.truth_(result__9045__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9044__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7051__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__9044__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9045__auto__;
}catch (e10149){var t__9082__auto__ = e10149;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9082__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

clostridium.befunge_test.befunge98_hex_number.cljs$lang$var = new cljs.core.Var(function(){return clostridium.befunge_test.befunge98_hex_number;},new cljs.core.Symbol("clostridium.befunge_test","befunge98-hex-number","clostridium.befunge_test/befunge98-hex-number",969864898,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"test/cljs/clostridium/befunge_test.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clostridium.befunge_test","clostridium.befunge_test",284602340,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"befunge98-hex-number","befunge98-hex-number",-1424491108,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clostridium.befunge_test.befunge98_hex_number)?clostridium.befunge_test.befunge98_hex_number.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null));

clostridium.befunge_test.befunge98_iterate_positive = (function clostridium$befunge_test$befunge98_iterate_positive(){
return cljs.test.test_var.call(null,clostridium$befunge_test$befunge98_iterate_positive.cljs$lang$var);
});
clostridium.befunge_test.befunge98_iterate_positive.cljs$lang$test = (function (){
var expected__10074__auto__ = "OKAY\n";
var trimExpected__10075__auto__ = cljs.core.subs.call(null,expected__10074__auto__,(0),(cljs.core.count.call(null,expected__10074__auto__) - (1)));
var result__10076__auto__ = (function (){var sb__7203__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10150_10189 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10151_10190 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10150_10189,_STAR_print_fn_STAR_10151_10190,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__){
return (function (x__7204__auto__){
return sb__7203__auto__.append(x__7204__auto__);
});})(_STAR_print_newline_STAR_10150_10189,_STAR_print_fn_STAR_10151_10190,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__))
;

try{clostridium.befunge.runBefunge.call(null," v         >>\"1 DAB\",,,,,@\n]>2k4++++c-w\n[v         >^\n >2kv\"1-2 DAB\",,,,,,,@\n  > >\"2-2 DAB\",,,,,,,@\n v <              >>\"3 DAB\",,,,,@\n]>n2k;2; ;;1++++3-w\n[v   >>>>>\"4 DAB\";>^;,,,,,@\n >2k#^v^^^\n      >\"YAKO\",,,,@\n\n");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10151_10190;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10150_10189;
}
return [cljs.core.str(sb__7203__auto__)].join('');
})();
try{var values__9044__auto__ = (function (){var x__7051__auto__ = trimExpected__10075__auto__;
return cljs.core._conj.call(null,(function (){var x__7051__auto____$1 = result__10076__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto____$1);
})(),x__7051__auto__);
})();
var result__9045__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9044__auto__);
if(cljs.core.truth_(result__9045__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9044__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7051__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__9044__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9045__auto__;
}catch (e10152){var t__9082__auto__ = e10152;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9082__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

clostridium.befunge_test.befunge98_iterate_positive.cljs$lang$var = new cljs.core.Var(function(){return clostridium.befunge_test.befunge98_iterate_positive;},new cljs.core.Symbol("clostridium.befunge_test","befunge98-iterate-positive","clostridium.befunge_test/befunge98-iterate-positive",2024054286,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"test/cljs/clostridium/befunge_test.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clostridium.befunge_test","clostridium.befunge_test",284602340,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"befunge98-iterate-positive","befunge98-iterate-positive",-368340616,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clostridium.befunge_test.befunge98_iterate_positive)?clostridium.befunge_test.befunge98_iterate_positive.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null));

clostridium.befunge_test.befunge98_iterate_zero = (function clostridium$befunge_test$befunge98_iterate_zero(){
return cljs.test.test_var.call(null,clostridium$befunge_test$befunge98_iterate_zero.cljs$lang$var);
});
clostridium.befunge_test.befunge98_iterate_zero.cljs$lang$test = (function (){
var expected__10074__auto__ = "0 K\n";
var trimExpected__10075__auto__ = cljs.core.subs.call(null,expected__10074__auto__,(0),(cljs.core.count.call(null,expected__10074__auto__) - (1)));
var result__10076__auto__ = (function (){var sb__7203__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10153_10191 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10154_10192 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10153_10191,_STAR_print_fn_STAR_10154_10192,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__){
return (function (x__7204__auto__){
return sb__7203__auto__.append(x__7204__auto__);
});})(_STAR_print_newline_STAR_10153_10191,_STAR_print_fn_STAR_10154_10192,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__))
;

try{clostridium.befunge.runBefunge.call(null,"0k7.0kv'K,@\n@@@@@@@@@@@\n");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10154_10192;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10153_10191;
}
return [cljs.core.str(sb__7203__auto__)].join('');
})();
try{var values__9044__auto__ = (function (){var x__7051__auto__ = trimExpected__10075__auto__;
return cljs.core._conj.call(null,(function (){var x__7051__auto____$1 = result__10076__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto____$1);
})(),x__7051__auto__);
})();
var result__9045__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9044__auto__);
if(cljs.core.truth_(result__9045__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9044__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7051__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__9044__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9045__auto__;
}catch (e10155){var t__9082__auto__ = e10155;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9082__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

clostridium.befunge_test.befunge98_iterate_zero.cljs$lang$var = new cljs.core.Var(function(){return clostridium.befunge_test.befunge98_iterate_zero;},new cljs.core.Symbol("clostridium.befunge_test","befunge98-iterate-zero","clostridium.befunge_test/befunge98-iterate-zero",810027173,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"test/cljs/clostridium/befunge_test.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clostridium.befunge_test","clostridium.befunge_test",284602340,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"befunge98-iterate-zero","befunge98-iterate-zero",1190068307,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clostridium.befunge_test.befunge98_iterate_zero)?clostridium.befunge_test.befunge98_iterate_zero.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null));

clostridium.befunge_test.befunge98_set_delta = (function clostridium$befunge_test$befunge98_set_delta(){
return cljs.test.test_var.call(null,clostridium$befunge_test$befunge98_set_delta.cljs$lang$var);
});
clostridium.befunge_test.befunge98_set_delta.cljs$lang$test = (function (){
var expected__10074__auto__ = "GOOD\n";
var trimExpected__10075__auto__ = cljs.core.subs.call(null,expected__10074__auto__,(0),(cljs.core.count.call(null,expected__10074__auto__) - (1)));
var result__10076__auto__ = (function (){var sb__7203__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10156_10193 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10157_10194 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10156_10193,_STAR_print_fn_STAR_10157_10194,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__){
return (function (x__7204__auto__){
return sb__7203__auto__.append(x__7204__auto__);
});})(_STAR_print_newline_STAR_10156_10193,_STAR_print_fn_STAR_10157_10194,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__))
;

try{clostridium.befunge.runBefunge.call(null,"11x   \"DAB\"#@,,,@#\"BAD\"\n   \"\n    D\n     O\n      O\n       G\n        \"\n         >,,,,@\n");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10157_10194;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10156_10193;
}
return [cljs.core.str(sb__7203__auto__)].join('');
})();
try{var values__9044__auto__ = (function (){var x__7051__auto__ = trimExpected__10075__auto__;
return cljs.core._conj.call(null,(function (){var x__7051__auto____$1 = result__10076__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto____$1);
})(),x__7051__auto__);
})();
var result__9045__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9044__auto__);
if(cljs.core.truth_(result__9045__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9044__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7051__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__9044__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9045__auto__;
}catch (e10158){var t__9082__auto__ = e10158;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9082__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

clostridium.befunge_test.befunge98_set_delta.cljs$lang$var = new cljs.core.Var(function(){return clostridium.befunge_test.befunge98_set_delta;},new cljs.core.Symbol("clostridium.befunge_test","befunge98-set-delta","clostridium.befunge_test/befunge98-set-delta",-1604273808,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"test/cljs/clostridium/befunge_test.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clostridium.befunge_test","clostridium.befunge_test",284602340,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"befunge98-set-delta","befunge98-set-delta",1455140902,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clostridium.befunge_test.befunge98_set_delta)?clostridium.befunge_test.befunge98_set_delta.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null));

clostridium.befunge_test.befunge98_sgml_spaces_wrap = (function clostridium$befunge_test$befunge98_sgml_spaces_wrap(){
return cljs.test.test_var.call(null,clostridium$befunge_test$befunge98_sgml_spaces_wrap.cljs$lang$var);
});
clostridium.befunge_test.befunge98_sgml_spaces_wrap.cljs$lang$test = (function (){
var expected__10074__auto__ = "wrap arounded\n\n";
var trimExpected__10075__auto__ = cljs.core.subs.call(null,expected__10074__auto__,(0),(cljs.core.count.call(null,expected__10074__auto__) - (1)));
var result__10076__auto__ = (function (){var sb__7203__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10159_10195 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10160_10196 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10159_10195,_STAR_print_fn_STAR_10160_10196,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__){
return (function (x__7204__auto__){
return sb__7203__auto__.append(x__7204__auto__);
});})(_STAR_print_newline_STAR_10159_10195,_STAR_print_fn_STAR_10160_10196,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__))
;

try{clostridium.befunge.runBefunge.call(null,"          v  >,v\narounded\"a<  |:<\"wrap\n             @\n\nNOTE:\nno whitespaces\nafter \"wrap\".\n\n");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10160_10196;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10159_10195;
}
return [cljs.core.str(sb__7203__auto__)].join('');
})();
try{var values__9044__auto__ = (function (){var x__7051__auto__ = trimExpected__10075__auto__;
return cljs.core._conj.call(null,(function (){var x__7051__auto____$1 = result__10076__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto____$1);
})(),x__7051__auto__);
})();
var result__9045__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9044__auto__);
if(cljs.core.truth_(result__9045__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9044__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7051__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__9044__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9045__auto__;
}catch (e10161){var t__9082__auto__ = e10161;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9082__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

clostridium.befunge_test.befunge98_sgml_spaces_wrap.cljs$lang$var = new cljs.core.Var(function(){return clostridium.befunge_test.befunge98_sgml_spaces_wrap;},new cljs.core.Symbol("clostridium.befunge_test","befunge98-sgml-spaces-wrap","clostridium.befunge_test/befunge98-sgml-spaces-wrap",1139014642,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"test/cljs/clostridium/befunge_test.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clostridium.befunge_test","clostridium.befunge_test",284602340,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"befunge98-sgml-spaces-wrap","befunge98-sgml-spaces-wrap",-225778920,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clostridium.befunge_test.befunge98_sgml_spaces_wrap)?clostridium.befunge_test.befunge98_sgml_spaces_wrap.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null));

clostridium.befunge_test.befunge98_sgml_spaces_wrap2 = (function clostridium$befunge_test$befunge98_sgml_spaces_wrap2(){
return cljs.test.test_var.call(null,clostridium$befunge_test$befunge98_sgml_spaces_wrap2.cljs$lang$var);
});
clostridium.befunge_test.befunge98_sgml_spaces_wrap2.cljs$lang$test = (function (){
var expected__10074__auto__ = "wrap arounded\n\n";
var trimExpected__10075__auto__ = cljs.core.subs.call(null,expected__10074__auto__,(0),(cljs.core.count.call(null,expected__10074__auto__) - (1)));
var result__10076__auto__ = (function (){var sb__7203__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10162_10197 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10163_10198 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10162_10197,_STAR_print_fn_STAR_10163_10198,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__){
return (function (x__7204__auto__){
return sb__7203__auto__.append(x__7204__auto__);
});})(_STAR_print_newline_STAR_10162_10197,_STAR_print_fn_STAR_10163_10198,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__))
;

try{clostridium.befunge.runBefunge.call(null,"          v  >,v\narounded\"a<  |:<\"wrap       \n             @\n\nNOTE:\nsome whitespaces\nafter \"wrap\".\n\n");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10163_10198;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10162_10197;
}
return [cljs.core.str(sb__7203__auto__)].join('');
})();
try{var values__9044__auto__ = (function (){var x__7051__auto__ = trimExpected__10075__auto__;
return cljs.core._conj.call(null,(function (){var x__7051__auto____$1 = result__10076__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto____$1);
})(),x__7051__auto__);
})();
var result__9045__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9044__auto__);
if(cljs.core.truth_(result__9045__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9044__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7051__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__9044__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9045__auto__;
}catch (e10164){var t__9082__auto__ = e10164;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9082__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

clostridium.befunge_test.befunge98_sgml_spaces_wrap2.cljs$lang$var = new cljs.core.Var(function(){return clostridium.befunge_test.befunge98_sgml_spaces_wrap2;},new cljs.core.Symbol("clostridium.befunge_test","befunge98-sgml-spaces-wrap2","clostridium.befunge_test/befunge98-sgml-spaces-wrap2",54529555,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"test/cljs/clostridium/befunge_test.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clostridium.befunge_test","clostridium.befunge_test",284602340,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"befunge98-sgml-spaces-wrap2","befunge98-sgml-spaces-wrap2",-307821207,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clostridium.befunge_test.befunge98_sgml_spaces_wrap2)?clostridium.befunge_test.befunge98_sgml_spaces_wrap2.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null));

clostridium.befunge_test.befunge98_sgml_spaces_wrap3 = (function clostridium$befunge_test$befunge98_sgml_spaces_wrap3(){
return cljs.test.test_var.call(null,clostridium$befunge_test$befunge98_sgml_spaces_wrap3.cljs$lang$var);
});
clostridium.befunge_test.befunge98_sgml_spaces_wrap3.cljs$lang$test = (function (){
var expected__10074__auto__ = "wrap arounded\n\n";
var trimExpected__10075__auto__ = cljs.core.subs.call(null,expected__10074__auto__,(0),(cljs.core.count.call(null,expected__10074__auto__) - (1)));
var result__10076__auto__ = (function (){var sb__7203__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10165_10199 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10166_10200 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10165_10199,_STAR_print_fn_STAR_10166_10200,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__){
return (function (x__7204__auto__){
return sb__7203__auto__.append(x__7204__auto__);
});})(_STAR_print_newline_STAR_10165_10199,_STAR_print_fn_STAR_10166_10200,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__))
;

try{clostridium.befunge.runBefunge.call(null,"          v  >,v\narounded\"a<  |:<\"wrap       \n             @\n\nNOTE: this message will expand the Funge space.\n\n");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10166_10200;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10165_10199;
}
return [cljs.core.str(sb__7203__auto__)].join('');
})();
try{var values__9044__auto__ = (function (){var x__7051__auto__ = trimExpected__10075__auto__;
return cljs.core._conj.call(null,(function (){var x__7051__auto____$1 = result__10076__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto____$1);
})(),x__7051__auto__);
})();
var result__9045__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9044__auto__);
if(cljs.core.truth_(result__9045__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9044__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7051__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__9044__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9045__auto__;
}catch (e10167){var t__9082__auto__ = e10167;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9082__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

clostridium.befunge_test.befunge98_sgml_spaces_wrap3.cljs$lang$var = new cljs.core.Var(function(){return clostridium.befunge_test.befunge98_sgml_spaces_wrap3;},new cljs.core.Symbol("clostridium.befunge_test","befunge98-sgml-spaces-wrap3","clostridium.befunge_test/befunge98-sgml-spaces-wrap3",-98556707,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"test/cljs/clostridium/befunge_test.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clostridium.befunge_test","clostridium.befunge_test",284602340,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"befunge98-sgml-spaces-wrap3","befunge98-sgml-spaces-wrap3",201276423,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clostridium.befunge_test.befunge98_sgml_spaces_wrap3)?clostridium.befunge_test.befunge98_sgml_spaces_wrap3.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null));

clostridium.befunge_test.befunge98_sgml_spaces_wrap4 = (function clostridium$befunge_test$befunge98_sgml_spaces_wrap4(){
return cljs.test.test_var.call(null,clostridium$befunge_test$befunge98_sgml_spaces_wrap4.cljs$lang$var);
});
clostridium.befunge_test.befunge98_sgml_spaces_wrap4.cljs$lang$test = (function (){
var expected__10074__auto__ = "wrap , arounded\n\n";
var trimExpected__10075__auto__ = cljs.core.subs.call(null,expected__10074__auto__,(0),(cljs.core.count.call(null,expected__10074__auto__) - (1)));
var result__10076__auto__ = (function (){var sb__7203__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10168_10201 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10169_10202 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10168_10201,_STAR_print_fn_STAR_10169_10202,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__){
return (function (x__7204__auto__){
return sb__7203__auto__.append(x__7204__auto__);
});})(_STAR_print_newline_STAR_10168_10201,_STAR_print_fn_STAR_10169_10202,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__))
;

try{clostridium.befunge.runBefunge.call(null,"',a3*1p   v  >,v\narounded\"a<  |:<\"wrap\n             @\n\n");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10169_10202;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10168_10201;
}
return [cljs.core.str(sb__7203__auto__)].join('');
})();
try{var values__9044__auto__ = (function (){var x__7051__auto__ = trimExpected__10075__auto__;
return cljs.core._conj.call(null,(function (){var x__7051__auto____$1 = result__10076__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto____$1);
})(),x__7051__auto__);
})();
var result__9045__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9044__auto__);
if(cljs.core.truth_(result__9045__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9044__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7051__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__9044__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9045__auto__;
}catch (e10170){var t__9082__auto__ = e10170;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9082__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

clostridium.befunge_test.befunge98_sgml_spaces_wrap4.cljs$lang$var = new cljs.core.Var(function(){return clostridium.befunge_test.befunge98_sgml_spaces_wrap4;},new cljs.core.Symbol("clostridium.befunge_test","befunge98-sgml-spaces-wrap4","clostridium.befunge_test/befunge98-sgml-spaces-wrap4",421151217,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"test/cljs/clostridium/befunge_test.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clostridium.befunge_test","clostridium.befunge_test",284602340,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"befunge98-sgml-spaces-wrap4","befunge98-sgml-spaces-wrap4",-1411167973,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clostridium.befunge_test.befunge98_sgml_spaces_wrap4)?clostridium.befunge_test.befunge98_sgml_spaces_wrap4.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null));

clostridium.befunge_test.befunge98_sgml_spaces = (function clostridium$befunge_test$befunge98_sgml_spaces(){
return cljs.test.test_var.call(null,clostridium$befunge_test$befunge98_sgml_spaces.cljs$lang$var);
});
clostridium.befunge_test.befunge98_sgml_spaces.cljs$lang$test = (function (){
var expected__10074__auto__ = "SGML test\n\n";
var trimExpected__10075__auto__ = cljs.core.subs.call(null,expected__10074__auto__,(0),(cljs.core.count.call(null,expected__10074__auto__) - (1)));
var result__10076__auto__ = (function (){var sb__7203__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10171_10203 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10172_10204 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10171_10203,_STAR_print_fn_STAR_10172_10204,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__){
return (function (x__7204__auto__){
return sb__7203__auto__.append(x__7204__auto__);
});})(_STAR_print_newline_STAR_10171_10203,_STAR_print_fn_STAR_10172_10204,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__))
;

try{clostridium.befunge.runBefunge.call(null,"a\"tset     LMGS\">:#,_@\n");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10172_10204;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10171_10203;
}
return [cljs.core.str(sb__7203__auto__)].join('');
})();
try{var values__9044__auto__ = (function (){var x__7051__auto__ = trimExpected__10075__auto__;
return cljs.core._conj.call(null,(function (){var x__7051__auto____$1 = result__10076__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto____$1);
})(),x__7051__auto__);
})();
var result__9045__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9044__auto__);
if(cljs.core.truth_(result__9045__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9044__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7051__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__9044__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9045__auto__;
}catch (e10173){var t__9082__auto__ = e10173;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9082__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

clostridium.befunge_test.befunge98_sgml_spaces.cljs$lang$var = new cljs.core.Var(function(){return clostridium.befunge_test.befunge98_sgml_spaces;},new cljs.core.Symbol("clostridium.befunge_test","befunge98-sgml-spaces","clostridium.befunge_test/befunge98-sgml-spaces",2019387407,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"test/cljs/clostridium/befunge_test.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clostridium.befunge_test","clostridium.befunge_test",284602340,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"befunge98-sgml-spaces","befunge98-sgml-spaces",-1996070447,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clostridium.befunge_test.befunge98_sgml_spaces)?clostridium.befunge_test.befunge98_sgml_spaces.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null));

clostridium.befunge_test.befunge98_storechar_skip = (function clostridium$befunge_test$befunge98_storechar_skip(){
return cljs.test.test_var.call(null,clostridium$befunge_test$befunge98_storechar_skip.cljs$lang$var);
});
clostridium.befunge_test.befunge98_storechar_skip.cljs$lang$test = (function (){
var expected__10074__auto__ = "GOOD: s puts semicolon and ignores it\n";
var trimExpected__10075__auto__ = cljs.core.subs.call(null,expected__10074__auto__,(0),(cljs.core.count.call(null,expected__10074__auto__) - (1)));
var result__10076__auto__ = (function (){var sb__7203__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10174_10205 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10175_10206 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10174_10205,_STAR_print_fn_STAR_10175_10206,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__){
return (function (x__7204__auto__){
return sb__7203__auto__.append(x__7204__auto__);
});})(_STAR_print_newline_STAR_10174_10205,_STAR_print_fn_STAR_10175_10206,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__))
;

try{clostridium.befunge.runBefunge.call(null,"6a*1-sv\"ti serongi dna nolocimes stup s :DOOG\",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,@;v\n,,,,,, ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\"BAD: s puts semicolon but does not ignore it\"<@,,,,,,\n      <@,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\"BAD: s doesn't put semicolon at all\"\n");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10175_10206;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10174_10205;
}
return [cljs.core.str(sb__7203__auto__)].join('');
})();
try{var values__9044__auto__ = (function (){var x__7051__auto__ = trimExpected__10075__auto__;
return cljs.core._conj.call(null,(function (){var x__7051__auto____$1 = result__10076__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto____$1);
})(),x__7051__auto__);
})();
var result__9045__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9044__auto__);
if(cljs.core.truth_(result__9045__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9044__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7051__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__9044__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9045__auto__;
}catch (e10176){var t__9082__auto__ = e10176;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9082__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

clostridium.befunge_test.befunge98_storechar_skip.cljs$lang$var = new cljs.core.Var(function(){return clostridium.befunge_test.befunge98_storechar_skip;},new cljs.core.Symbol("clostridium.befunge_test","befunge98-storechar-skip","clostridium.befunge_test/befunge98-storechar-skip",-791147989,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"test/cljs/clostridium/befunge_test.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clostridium.befunge_test","clostridium.befunge_test",284602340,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"befunge98-storechar-skip","befunge98-storechar-skip",1669272541,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clostridium.befunge_test.befunge98_storechar_skip)?clostridium.befunge_test.befunge98_storechar_skip.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null));

clostridium.befunge_test.befunge98_sysinfo = (function clostridium$befunge_test$befunge98_sysinfo(){
return cljs.test.test_var.call(null,clostridium$befunge_test$befunge98_sysinfo.cljs$lang$var);
});
clostridium.befunge_test.befunge98_sysinfo.cljs$lang$test = (function (){
var expected__10074__auto__ = "GOOD: y seems work for at least some fields\n\n";
var trimExpected__10075__auto__ = cljs.core.subs.call(null,expected__10074__auto__,(0),(cljs.core.count.call(null,expected__10074__auto__) - (1)));
var result__10076__auto__ = (function (){var sb__7203__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10177_10207 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10178_10208 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10177_10207,_STAR_print_fn_STAR_10178_10208,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__){
return (function (x__7204__auto__){
return sb__7203__auto__.append(x__7204__auto__);
});})(_STAR_print_newline_STAR_10177_10207,_STAR_print_fn_STAR_10178_10208,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__))
;

try{clostridium.befunge.runBefunge.call(null,"  v    ;note: \"12y\" actually means pushing 12 (not 1 and 2) and executing \"y\".;\n  7    ;      there are more detailed tests for ignored fields.;\n  8\n  9\n  a\n  b\n  c\n  *\n  *\n  0\n  >y:\\48*\\`\\0\\`!*#v_0a\"13 dna 0 neewteb t'nsi y1 :DAB\">:#,_@  ;1y -- flag (0..31);  v\n      0\"stcelfer y :DAB\">:#,_@                                                      >\n                  $  ;2y -- cell size, ignored;\n                  $  ;3y -- handprint, ignored;\n                  $  ;4y -- version, ignored;\n                  $  ;5y -- operating paradigm, ignored;\n                  $  ;6y -- path separator, ignored;\n                  2  ;7y -- number of dimensions (2);\n                >#-0a\"2 hsup t'ndid )snoisnemid fo #( y7 :DAB\">:#,_@\n                ^ _$$a-\\3v  ;8y, 9y -- IP identifier and team, ignored;\n                         -  ;10y, 11y -- IP position (<3, 10>);\n                       >#*0a\">10 ,3< hsup t'ndid )noitisop( y11 dna y01 :DAB\">:#,_@\n                       ^ _\\1-v  ;12y, 13y -- IP delta (<1, 0>);\n                           >#*0a\">0 ,1< hsup t'ndid )atled( y31 dna y21 :DAB\">:#,_@\n                           ^ _v  ;14y, 15y -- IP storage offset (<0, 0>);\n                            >#*0a\">0 ,0< hsup t'ndid )tesffo egarots( y51 dna y41 :DAB\">:#,_@\n   v                        ^ _\\1-  ;16y, 17y -- least point of Funge space (<1, 0>);\n >#*0a\">0 ,1< hsup t'ndid )tniop tsael( y71 dna y61 :DAB\">:#,_@\n ^ _67*-\\9a*-1-v  ;18y, 19y -- offset to greatest point of Funge space (<91, 42>);\n             >#*0a\">24 ,19< hsup t'ndid )tniop tsetaerg ot tesffo( y91 dna y81 :DAB\">:#,_@\n             ^ _$$v  ;20y, 21y -- date and time, ignored;\n                  1  ;22y -- size of stack stack (1);\n                >#-0a\"1 hsup t'ndid )kcats kcats fo ezis( y22 :DAB\">:#,_@\n                ^ _4v  ;23y -- size of the top of stack stack (4);\n                  >#-0a\"4 hsup t'ndid )SSOT fo ezis( y32 :DAB\">:#,_@\n                  ^ _v  ;24y.. -- arguments and environment variables, ignored;\n                     v<\n                    >_|  ;skip argument list. terminates at third consecutive null.;\n                     ^_v<\n                      >_|  ;skip envvar list. terminates at second consecutive null.;\n                        >abc**v  ;cells pushed by y is end. check for sentinel.;\n                            >#-0a\"dedeen naht sllec erom ro ssel dehsup y :DAB\">:#,_@\n                            ^ _0a\"sdleif emos tsael ta rof krow smees y :DOOG\">:#,_@\n\n");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10178_10208;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10177_10207;
}
return [cljs.core.str(sb__7203__auto__)].join('');
})();
try{var values__9044__auto__ = (function (){var x__7051__auto__ = trimExpected__10075__auto__;
return cljs.core._conj.call(null,(function (){var x__7051__auto____$1 = result__10076__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto____$1);
})(),x__7051__auto__);
})();
var result__9045__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9044__auto__);
if(cljs.core.truth_(result__9045__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9044__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7051__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__9044__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9045__auto__;
}catch (e10179){var t__9082__auto__ = e10179;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9082__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

clostridium.befunge_test.befunge98_sysinfo.cljs$lang$var = new cljs.core.Var(function(){return clostridium.befunge_test.befunge98_sysinfo;},new cljs.core.Symbol("clostridium.befunge_test","befunge98-sysinfo","clostridium.befunge_test/befunge98-sysinfo",-1953084627,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"test/cljs/clostridium/befunge_test.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clostridium.befunge_test","clostridium.befunge_test",284602340,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"befunge98-sysinfo","befunge98-sysinfo",953070295,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clostridium.befunge_test.befunge98_sysinfo)?clostridium.befunge_test.befunge98_sysinfo.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null));

clostridium.befunge_test.befunge98_trampoline = (function clostridium$befunge_test$befunge98_trampoline(){
return cljs.test.test_var.call(null,clostridium$befunge_test$befunge98_trampoline.cljs$lang$var);
});
clostridium.befunge_test.befunge98_trampoline.cljs$lang$test = (function (){
var expected__10074__auto__ = "3 \n";
var trimExpected__10075__auto__ = cljs.core.subs.call(null,expected__10074__auto__,(0),(cljs.core.count.call(null,expected__10074__auto__) - (1)));
var result__10076__auto__ = (function (){var sb__7203__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10180_10209 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10181_10210 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10180_10209,_STAR_print_fn_STAR_10181_10210,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__){
return (function (x__7204__auto__){
return sb__7203__auto__.append(x__7204__auto__);
});})(_STAR_print_newline_STAR_10180_10209,_STAR_print_fn_STAR_10181_10210,sb__7203__auto__,expected__10074__auto__,trimExpected__10075__auto__))
;

try{clostridium.befunge.runBefunge.call(null,"#;v           ; 1.@\n  ># ;2.@;3.@\n");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10181_10210;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10180_10209;
}
return [cljs.core.str(sb__7203__auto__)].join('');
})();
try{var values__9044__auto__ = (function (){var x__7051__auto__ = trimExpected__10075__auto__;
return cljs.core._conj.call(null,(function (){var x__7051__auto____$1 = result__10076__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto____$1);
})(),x__7051__auto__);
})();
var result__9045__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9044__auto__);
if(cljs.core.truth_(result__9045__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9044__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__7051__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),values__9044__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9045__auto__;
}catch (e10182){var t__9082__auto__ = e10182;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("clojure.core","=","clojure.core/=",-1788080406,null),new cljs.core.Symbol(null,"trimExpected__10075__auto__","trimExpected__10075__auto__",-1773217193,null),new cljs.core.Symbol(null,"result__10076__auto__","result__10076__auto__",-214358475,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9082__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

clostridium.befunge_test.befunge98_trampoline.cljs$lang$var = new cljs.core.Var(function(){return clostridium.befunge_test.befunge98_trampoline;},new cljs.core.Symbol("clostridium.befunge_test","befunge98-trampoline","clostridium.befunge_test/befunge98-trampoline",-1235932848,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"test/cljs/clostridium/befunge_test.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clostridium.befunge_test","clostridium.befunge_test",284602340,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"befunge98-trampoline","befunge98-trampoline",1150035462,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clostridium.befunge_test.befunge98_trampoline)?clostridium.befunge_test.befunge98_trampoline.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null));

//# sourceMappingURL=befunge_test.js.map