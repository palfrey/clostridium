// Compiled by ClojureScript 1.9.229 {:target :nodejs}
goog.provide('clostridium.befunge_test_core');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('clostridium.befunge');
goog.require('cljs.pprint');
clostridium.befunge_test_core.without_extension = (function clostridium$befunge_test_core$without_extension(path){
return clojure.string.join.call(null,".",cljs.core.butlast.call(null,clojure.string.split.call(null,path,/\./)));
});
clostridium.befunge_test_core.extension = (function clostridium$befunge_test_core$extension(path){
return cljs.core.last.call(null,clojure.string.split.call(null,path,/\./));
});
clostridium.befunge_test_core.runPyfungeTests = (function clostridium$befunge_test_core$runPyfungeTests(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.doall.call(null,(function (){var iter__6997__auto__ = (function clostridium$befunge_test_core$runPyfungeTests_$_iter__9817(s__9818){
return (new cljs.core.LazySeq(null,(function (){
var s__9818__$1 = s__9818;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__9818__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var folder = cljs.core.first.call(null,xs__5205__auto__);
var iterys__6993__auto__ = ((function (s__9818__$1,folder,xs__5205__auto__,temp__4657__auto__){
return (function clostridium$befunge_test_core$runPyfungeTests_$_iter__9817_$_iter__9819(s__9820){
return (new cljs.core.LazySeq(null,((function (s__9818__$1,folder,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__9820__$1 = s__9820;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__9820__$1);
if(temp__4657__auto____$1){
var s__9820__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9820__$2)){
var c__6995__auto__ = cljs.core.chunk_first.call(null,s__9820__$2);
var size__6996__auto__ = cljs.core.count.call(null,c__6995__auto__);
var b__9822 = cljs.core.chunk_buffer.call(null,size__6996__auto__);
if((function (){var i__9821 = (0);
while(true){
if((i__9821 < size__6996__auto__)){
var testFile = cljs.core._nth.call(null,c__6995__auto__,i__9821);
var testPath = testFile.getAbsolutePath();
var shortname = [cljs.core.str(folder.getName()),cljs.core.str("-"),cljs.core.str(clostridium.befunge_test_core.without_extension.call(null,testFile.getName()))].join('');
cljs.core.chunk_append.call(null,b__9822,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clostridium.befunge_test_core","deftest","clostridium.befunge_test_core/deftest",-685285885,null)),(function (){var x__7051__auto__ = cljs.core.symbol.call(null,shortname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),(function (){var x__7051__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7051__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"expected__9808__auto__","expected__9808__auto__",-1109596797,null)),(function (){var x__7051__auto__ = clostridium.befunge_test_core.slurp.call(null,[cljs.core.str(clostridium.befunge_test_core.without_extension.call(null,testPath)),cljs.core.str(".expected")].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"trimExpected__9809__auto__","trimExpected__9809__auto__",-792456505,null)),(function (){var x__7051__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","subs","cljs.core/subs",-1092266147,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"expected__9808__auto__","expected__9808__auto__",-1109596797,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__7051__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null)),(function (){var x__7051__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"expected__9808__auto__","expected__9808__auto__",-1109596797,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__9810__auto__","result__9810__auto__",1969578892,null)),(function (){var x__7051__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-out-str","cljs.core/with-out-str",-538618510,null)),(function (){var x__7051__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clostridium.befunge","runBefunge","clostridium.befunge/runBefunge",632389545,null)),(function (){var x__7051__auto__ = clostridium.befunge_test_core.slurp.call(null,testPath);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),(function (){var x__7051__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clostridium.befunge_test_core","is","clostridium.befunge_test_core/is",344924161,null)),(function (){var x__7051__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"trimExpected__9809__auto__","trimExpected__9809__auto__",-792456505,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__9810__auto__","result__9810__auto__",1969578892,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})()))));

var G__9823 = (i__9821 + (1));
i__9821 = G__9823;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9822),clostridium$befunge_test_core$runPyfungeTests_$_iter__9817_$_iter__9819.call(null,cljs.core.chunk_rest.call(null,s__9820__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9822),null);
}
} else {
var testFile = cljs.core.first.call(null,s__9820__$2);
var testPath = testFile.getAbsolutePath();
var shortname = [cljs.core.str(folder.getName()),cljs.core.str("-"),cljs.core.str(clostridium.befunge_test_core.without_extension.call(null,testFile.getName()))].join('');
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clostridium.befunge_test_core","deftest","clostridium.befunge_test_core/deftest",-685285885,null)),(function (){var x__7051__auto__ = cljs.core.symbol.call(null,shortname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),(function (){var x__7051__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7051__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"expected__9808__auto__","expected__9808__auto__",-1109596797,null)),(function (){var x__7051__auto__ = clostridium.befunge_test_core.slurp.call(null,[cljs.core.str(clostridium.befunge_test_core.without_extension.call(null,testPath)),cljs.core.str(".expected")].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"trimExpected__9809__auto__","trimExpected__9809__auto__",-792456505,null)),(function (){var x__7051__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","subs","cljs.core/subs",-1092266147,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"expected__9808__auto__","expected__9808__auto__",-1109596797,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__7051__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null)),(function (){var x__7051__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"expected__9808__auto__","expected__9808__auto__",-1109596797,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__9810__auto__","result__9810__auto__",1969578892,null)),(function (){var x__7051__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-out-str","cljs.core/with-out-str",-538618510,null)),(function (){var x__7051__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clostridium.befunge","runBefunge","clostridium.befunge/runBefunge",632389545,null)),(function (){var x__7051__auto__ = clostridium.befunge_test_core.slurp.call(null,testPath);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})(),(function (){var x__7051__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clostridium.befunge_test_core","is","clostridium.befunge_test_core/is",344924161,null)),(function (){var x__7051__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"trimExpected__9809__auto__","trimExpected__9809__auto__",-792456505,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"result__9810__auto__","result__9810__auto__",1969578892,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7051__auto__);
})()))),clostridium$befunge_test_core$runPyfungeTests_$_iter__9817_$_iter__9819.call(null,cljs.core.rest.call(null,s__9820__$2)));
}
} else {
return null;
}
break;
}
});})(s__9818__$1,folder,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__9818__$1,folder,xs__5205__auto__,temp__4657__auto__))
;
var fs__6994__auto__ = cljs.core.seq.call(null,iterys__6993__auto__.call(null,cljs.core.filter.call(null,((function (s__9818__$1,iterys__6993__auto__,folder,xs__5205__auto__,temp__4657__auto__){
return (function (p1__9807_SHARP_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b98","bf","t98","u98"], null).contains(clostridium.befunge_test_core.extension.call(null,p1__9807_SHARP_.getName()));
});})(s__9818__$1,iterys__6993__auto__,folder,xs__5205__auto__,temp__4657__auto__))
,folder.listFiles())));
if(fs__6994__auto__){
return cljs.core.concat.call(null,fs__6994__auto__,clostridium$befunge_test_core$runPyfungeTests_$_iter__9817.call(null,cljs.core.rest.call(null,s__9818__$1)));
} else {
var G__9824 = cljs.core.rest.call(null,s__9818__$1);
s__9818__$1 = G__9824;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6997__auto__.call(null,cljs.core.filter.call(null,((function (iter__6997__auto__){
return (function (p1__9806_SHARP_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["befunge98"], null).contains(p1__9806_SHARP_.getName());
});})(iter__6997__auto__))
,(new java.io.File("test/pyfunge")).listFiles()));
})()));
});

clostridium.befunge_test_core.runPyfungeTests.cljs$lang$macro = true;

//# sourceMappingURL=befunge_test_core.js.map