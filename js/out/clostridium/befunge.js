// Compiled by ClojureScript 1.9.854 {}
goog.provide('clostridium.befunge');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('decimal.core');
clostridium.befunge.toss = (function clostridium$befunge$toss(b){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(b));
});
clostridium.befunge.soss = (function clostridium$befunge$soss(b){
return cljs.core.second.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(b));
});
clostridium.befunge.ross = (function clostridium$befunge$ross(b){
return cljs.core.rest.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(b));
});
clostridium.befunge.setNewToss = (function clostridium$befunge$setNewToss(b,t){
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,clostridium.befunge.ross.call(null,b),t));
});
clostridium.befunge.setNewSoss = (function clostridium$befunge$setNewSoss(b,s){
var nb = cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.rest.call(null,clostridium.befunge.ross.call(null,b)),s),clostridium.befunge.toss.call(null,b)));
return nb;
});
clostridium.befunge.newTossAndSoss = (function clostridium$befunge$newTossAndSoss(b,t,s){
return clostridium.befunge.setNewToss.call(null,clostridium.befunge.setNewSoss.call(null,b,s),t);
});
clostridium.befunge.addToStack = (function clostridium$befunge$addToStack(b,item){
return clostridium.befunge.setNewToss.call(null,b,cljs.core.conj.call(null,clostridium.befunge.toss.call(null,b),item));
});
clostridium.befunge.removeFromStack = (function clostridium$befunge$removeFromStack(b){
var items = clostridium.befunge.toss.call(null,b);
if(cljs.core.empty_QMARK_.call(null,items)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"b","b",1482224470),b,new cljs.core.Keyword(null,"item","item",249373802),(0)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"b","b",1482224470),clostridium.befunge.setNewToss.call(null,b,cljs.core.pop.call(null,items)),new cljs.core.Keyword(null,"item","item",249373802),cljs.core.peek.call(null,items)], null);
}
});
clostridium.befunge.removeManyFromStack = (function clostridium$befunge$removeManyFromStack(nb,many){
if((many < (0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"b","b",1482224470),nb,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY], null);
} else {
var items = cljs.core.PersistentVector.EMPTY;
var board = nb;
while(true){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,items),many)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"b","b",1482224470),board,new cljs.core.Keyword(null,"items","items",1031954938),items], null);
} else {
var map__44295 = clostridium.befunge.removeFromStack.call(null,board);
var map__44295__$1 = ((((!((map__44295 == null)))?((((map__44295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44295):map__44295);
var b = cljs.core.get.call(null,map__44295__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var item = cljs.core.get.call(null,map__44295__$1,new cljs.core.Keyword(null,"item","item",249373802));
var G__44297 = cljs.core.conj.call(null,items,item);
var G__44298 = b;
items = G__44297;
board = G__44298;
continue;
}
break;
}
}
});
clostridium.befunge.reflect = (function clostridium$befunge$reflect(b){
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"dir","dir",1734754661),cljs.core.map.call(null,(function (p1__44299_SHARP_){
return ((-1) * p1__44299_SHARP_);
}),new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(b)));
});
clostridium.befunge.charcode = (function clostridium$befunge$charcode(c){
return c.charCodeAt((0));
});
clostridium.befunge.numberInsts = (function (){var insts = cljs.core.PersistentArrayMap.EMPTY;
var digit = (0);
while(true){
if(cljs.core._EQ_.call(null,digit,(10))){
return insts;
} else {
var G__44300 = cljs.core.assoc.call(null,insts,cljs.core.char$.call(null,(clostridium.befunge.charcode.call(null,"0") + digit)),((function (insts,digit){
return (function (b){
return clostridium.befunge.addToStack.call(null,b,digit);
});})(insts,digit))
);
var G__44301 = (digit + (1));
insts = G__44300;
digit = G__44301;
continue;
}
break;
}
})();
clostridium.befunge.upperCharInsts = (function (){var insts = cljs.core.PersistentArrayMap.EMPTY;
var c = (0);
while(true){
if(cljs.core._EQ_.call(null,c,(26))){
return insts;
} else {
var G__44302 = cljs.core.assoc.call(null,insts,cljs.core.char$.call(null,(clostridium.befunge.charcode.call(null,"A") + c)),((function (insts,c){
return (function (b){
return clostridium.befunge.reflect.call(null,b);
});})(insts,c))
);
var G__44303 = (c + (1));
insts = G__44302;
c = G__44303;
continue;
}
break;
}
})();
clostridium.befunge.mathop = (function clostridium$befunge$mathop(op){
return (function (b){
var one = clostridium.befunge.removeFromStack.call(null,b);
var two = clostridium.befunge.removeFromStack.call(null,new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(one));
try{return clostridium.befunge.addToStack.call(null,new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(two),op.call(null,new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(two),new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(one)));
}catch (e44304){if((e44304 instanceof Object)){
var e = e44304;
cljs.core.println.call(null,"math exception",op,new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(two),new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(one));

throw e;
} else {
throw e44304;

}
}});
});
clostridium.befunge.maxValue = cljs.core.quot.call(null,(2147483647),(2));
clostridium.befunge.negMaxValue = ((-1) * clostridium.befunge.maxValue);
clostridium.befunge.clipValue = (function clostridium$befunge$clipValue(val){
if(((val < clostridium.befunge.maxValue)) && ((clostridium.befunge.negMaxValue < val))){
return val;
} else {
return (cljs.core.mod.call(null,(val + clostridium.befunge.maxValue),(clostridium.befunge.maxValue * (2))) - clostridium.befunge.maxValue);
}
});
clostridium.befunge.throw_msg = (function clostridium$befunge$throw_msg(msg){
return throw$(msg);
});
clostridium.befunge.current = (function clostridium$befunge$current(var_args){
var G__44306 = arguments.length;
switch (G__44306) {
case 1:
return clostridium.befunge.current.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clostridium.befunge.current.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clostridium.befunge.current.cljs$core$IFn$_invoke$arity$1 = (function (b){
return clostridium.befunge.current.call(null,new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(b),cljs.core.reverse.call(null,new cljs.core.Keyword(null,"pc","pc",512913453).cljs$core$IFn$_invoke$arity$1(b)));
});

clostridium.befunge.current.cljs$core$IFn$_invoke$arity$2 = (function (grid,pc){
if(cljs.core.empty_QMARK_.call(null,pc)){
if(cljs.core.seq_QMARK_.call(null,grid)){
return clostridium.befunge.throw_msg.call(null,"Grid still a sequence");
} else {
return grid;
}
} else {
return clostridium.befunge.current.call(null,cljs.core.get.call(null,grid,clostridium.befunge.clipValue.call(null,cljs.core.first.call(null,pc))," "),cljs.core.rest.call(null,pc));
}
});

clostridium.befunge.current.cljs$lang$maxFixedArity = 2;

clostridium.befunge.orderedPoint = (function clostridium$befunge$orderedPoint(b,order){
var grid = new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(b);
var values = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.char_QMARK_.call(null,grid)){
return values;
} else {
var currentKey = cljs.core.first.call(null,cljs.core.sort.call(null,order,cljs.core.keys.call(null,grid)));
var G__44308 = cljs.core.get.call(null,grid,currentKey);
var G__44309 = cljs.core.conj.call(null,values,currentKey);
grid = G__44308;
values = G__44309;
continue;
}
break;
}
});
clostridium.befunge.leastPoint = (function clostridium$befunge$leastPoint(b){
return clostridium.befunge.orderedPoint.call(null,b,cljs.core._LT_);
});
clostridium.befunge.greatestPoint = (function clostridium$befunge$greatestPoint(b){
return clostridium.befunge.orderedPoint.call(null,b,cljs.core._GT_);
});
clostridium.befunge.step = (function clostridium$befunge$step(var_args){
var G__44313 = arguments.length;
switch (G__44313) {
case 2:
return clostridium.befunge.step.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clostridium.befunge.step.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clostridium.befunge.step.cljs$core$IFn$_invoke$arity$2 = (function (pc,dir){
return clostridium.befunge.step.call(null,pc,dir,(1));
});

clostridium.befunge.step.cljs$core$IFn$_invoke$arity$3 = (function (pc,dir,howMany){
return cljs.core.map.call(null,(function (p1__44310_SHARP_,p2__44311_SHARP_){
return clostridium.befunge.clipValue.call(null,(p1__44310_SHARP_ + (howMany * p2__44311_SHARP_)));
}),pc,dir);
});

clostridium.befunge.step.cljs$lang$maxFixedArity = 3;

clostridium.befunge.jumpPC = (function clostridium$befunge$jumpPC(grid,pc,dir){
var d = cljs.core.first.call(null,dir);
var c = cljs.core.first.call(null,pc);
var s = ((function (d,c){
return (function (hm,val){
return clostridium.befunge.step.call(null,cljs.core.rest.call(null,pc),cljs.core.rest.call(null,dir),hm.call(null,c,val));
});})(d,c))
;
var cu = ((function (d,c,s){
return (function (hm,val){
return clostridium.befunge.current.call(null,cljs.core.get.call(null,grid,val),s.call(null,hm,val));
});})(d,c,s))
;
var j = ((function (d,c,s,cu){
return (function (order,choose,howMany){
var items = cljs.core.sort.call(null,order,cljs.core.filter.call(null,cljs.core.partial.call(null,choose,c),cljs.core.keys.call(null,grid)));
var coord = cljs.core.some.call(null,((function (items,d,c,s,cu){
return (function (p1__44315_SHARP_){
if(cljs.core._EQ_.call(null," ",cu.call(null,howMany,p1__44315_SHARP_))){
return false;
} else {
return p1__44315_SHARP_;
}
});})(items,d,c,s,cu))
,items);
var ret = (((coord == null))?(((cljs.core._EQ_.call(null,d,(-1))) || (cljs.core._EQ_.call(null,d,(1))))?cljs.core.first.call(null,cljs.core.sort.call(null,order,cljs.core.keys.call(null,grid))):(function (){var n = ((1) + howMany.call(null,c,((1) + clostridium.befunge.maxValue)));
var init = clostridium.befunge.step.call(null,pc,dir,n);
return cljs.core.first.call(null,clostridium.befunge.jumpPC.call(null,grid,init,dir));
})()):coord);
return cljs.core.conj.call(null,clostridium.befunge.step.call(null,cljs.core.rest.call(null,pc),cljs.core.rest.call(null,dir),howMany.call(null,c,ret)),ret);
});})(d,c,s,cu))
;
if(cljs.core._EQ_.call(null,d,(-1))){
return j.call(null,cljs.core._GT_,cljs.core._GT_,cljs.core.constantly.call(null,(1)));
} else {
if((d > (0))){
return j.call(null,cljs.core._LT_,((function (d,c,s,cu,j){
return (function (p1__44317_SHARP_,p2__44316_SHARP_){
var diff = (p2__44316_SHARP_ - p1__44317_SHARP_);
if(cljs.core.not_EQ_.call(null,d,(1))){
} else {
}

return (((0) < diff)) && (cljs.core._EQ_.call(null,cljs.core.rem.call(null,diff,d),(0)));
});})(d,c,s,cu,j))
,((function (d,c,s,cu,j){
return (function (p1__44319_SHARP_,p2__44318_SHARP_){
var diff = (p2__44318_SHARP_ - p1__44319_SHARP_);
var n = cljs.core.quot.call(null,diff,d);
if(cljs.core.not_EQ_.call(null,d,(1))){
} else {
}

return n;
});})(d,c,s,cu,j))
);
} else {
if(cljs.core._EQ_.call(null,d,(0))){
return cljs.core.conj.call(null,clostridium.befunge.jumpPC.call(null,cljs.core.get.call(null,grid,c),cljs.core.rest.call(null,pc),cljs.core.rest.call(null,dir)),c);
} else {
return clostridium.befunge.throw_msg.call(null,"Flying!");

}
}
}
});
clostridium.befunge.updatePCSkipSpace = (function clostridium$befunge$updatePCSkipSpace(b,noJump,dir){
var initial = clostridium.befunge.step.call(null,new cljs.core.Keyword(null,"pc","pc",512913453).cljs$core$IFn$_invoke$arity$1(b),dir);
var sp = cljs.core.peek.call(null,clostridium.befunge.toss.call(null,b));
var spaceValue = clostridium.befunge.charcode.call(null," ");
if(cljs.core.truth_(noJump)){
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"pc","pc",512913453),initial);
} else {
if(cljs.core.not_EQ_.call(null,clostridium.befunge.current.call(null,new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(b),cljs.core.reverse.call(null,initial))," ")){
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"pc","pc",512913453),initial);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"stringMode","stringMode",-995189163).cljs$core$IFn$_invoke$arity$1(b))){
if(cljs.core._EQ_.call(null,sp,spaceValue)){
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"pc","pc",512913453),initial);
} else {
return clostridium.befunge.addToStack.call(null,cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.reverse.call(null,clostridium.befunge.jumpPC.call(null,new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(b),cljs.core.reverse.call(null,new cljs.core.Keyword(null,"pc","pc",512913453).cljs$core$IFn$_invoke$arity$1(b)),cljs.core.reverse.call(null,dir)))),spaceValue);
}
} else {
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.reverse.call(null,clostridium.befunge.jumpPC.call(null,new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(b),cljs.core.reverse.call(null,new cljs.core.Keyword(null,"pc","pc",512913453).cljs$core$IFn$_invoke$arity$1(b)),cljs.core.reverse.call(null,dir))));

}
}
}
});
clostridium.befunge.updatePC = (function clostridium$befunge$updatePC(var_args){
var G__44321 = arguments.length;
switch (G__44321) {
case 1:
return clostridium.befunge.updatePC.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clostridium.befunge.updatePC.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clostridium.befunge.updatePC.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clostridium.befunge.updatePC.cljs$core$IFn$_invoke$arity$1 = (function (b){
return clostridium.befunge.updatePC.call(null,b,false);
});

clostridium.befunge.updatePC.cljs$core$IFn$_invoke$arity$2 = (function (b,noJump){
return clostridium.befunge.updatePC.call(null,b,noJump,new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(b));
});

clostridium.befunge.updatePC.cljs$core$IFn$_invoke$arity$3 = (function (b,noJump,dir){
var nb = clostridium.befunge.updatePCSkipSpace.call(null,b,noJump,dir);
var colonMode = false;
while(true){
if(cljs.core.truth_((function (){var or__27939__auto__ = noJump;
if(cljs.core.truth_(or__27939__auto__)){
return or__27939__auto__;
} else {
return new cljs.core.Keyword(null,"stringMode","stringMode",-995189163).cljs$core$IFn$_invoke$arity$1(nb);
}
})())){
return nb;
} else {
if(cljs.core._EQ_.call(null,";",clostridium.befunge.current.call(null,nb))){
var G__44323 = clostridium.befunge.updatePCSkipSpace.call(null,nb,noJump,dir);
var G__44324 = !(colonMode);
nb = G__44323;
colonMode = G__44324;
continue;
} else {
if(colonMode){
var G__44325 = clostridium.befunge.updatePCSkipSpace.call(null,nb,noJump,dir);
var G__44326 = colonMode;
nb = G__44325;
colonMode = G__44326;
continue;
} else {
return nb;
}
}
}
break;
}
});

clostridium.befunge.updatePC.cljs$lang$maxFixedArity = 3;

clostridium.befunge.setVal = (function clostridium$befunge$setVal(grid,coord,value){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,coord),(0))){
return value;
} else {
return cljs.core.assoc.call(null,grid,clostridium.befunge.clipValue.call(null,cljs.core.first.call(null,coord)),clostridium.befunge.setVal.call(null,cljs.core.get.call(null,grid,clostridium.befunge.clipValue.call(null,cljs.core.first.call(null,coord))),cljs.core.rest.call(null,coord),value));
}
});
clostridium.befunge.rotateCCW = (function clostridium$befunge$rotateCCW(b){
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"dir","dir",1734754661),(function (){var vec__44327 = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(b);
var x = cljs.core.nth.call(null,vec__44327,(0),null);
var y = cljs.core.nth.call(null,vec__44327,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y * (-1)),x], null);
})());
});
clostridium.befunge.rotateCW = (function clostridium$befunge$rotateCW(b){
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"dir","dir",1734754661),(function (){var vec__44330 = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(b);
var x = cljs.core.nth.call(null,vec__44330,(0),null);
var y = cljs.core.nth.call(null,vec__44330,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(x * (-1))], null);
})());
});
clostridium.befunge.clipChar = (function clostridium$befunge$clipChar(i){
if(cljs.core.char_QMARK_.call(null,i)){
return i;
} else {
if((i > (65535))){
return " ";
} else {
if((i < (0))){
return " ";
} else {
return cljs.core.char$.call(null,i);

}
}
}
});
clostridium.befunge.runInst = (function clostridium$befunge$runInst(b,inst){
var insts = new cljs.core.Keyword(null,"inst","inst",645962501).cljs$core$IFn$_invoke$arity$1(b);
var f = cljs.core.get.call(null,insts,inst);
if(cljs.core.truth_((function (){var and__27927__auto__ = cljs.core.not_EQ_.call(null,inst,"\"");
if(and__27927__auto__){
return new cljs.core.Keyword(null,"stringMode","stringMode",-995189163).cljs$core$IFn$_invoke$arity$1(b);
} else {
return and__27927__auto__;
}
})())){
if((!(cljs.core.empty_QMARK_.call(null,clostridium.befunge.toss.call(null,b)))) && (cljs.core._EQ_.call(null,clostridium.befunge.clipChar.call(null,inst)," ",clostridium.befunge.clipChar.call(null,cljs.core.peek.call(null,clostridium.befunge.toss.call(null,b)))))){
return b;
} else {
return clostridium.befunge.addToStack.call(null,b,clostridium.befunge.charcode.call(null,inst));
}
} else {
if((f == null)){
[cljs.core.str.cljs$core$IFn$_invoke$arity$1("No such command '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.seq.call(null,new cljs.core.Keyword(null,"pc","pc",512913453).cljs$core$IFn$_invoke$arity$1(b)))].join('');

return clostridium.befunge.reflect.call(null,b);
} else {
return f.call(null,b);
}
}
});
clostridium.befunge.popMany = (function clostridium$befunge$popMany(st,ct){
if(cljs.core._EQ_.call(null,ct,(0))){
return st;
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,st),(0))){
return cljs.core.PersistentVector.EMPTY;
} else {
return clostridium.befunge.popMany.call(null,cljs.core.pop.call(null,st),(ct - (1)));
}
}
});
clostridium.befunge.peekMany = (function clostridium$befunge$peekMany(var_args){
var G__44334 = arguments.length;
switch (G__44334) {
case 2:
return clostridium.befunge.peekMany.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clostridium.befunge.peekMany.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clostridium.befunge.peekMany.cljs$core$IFn$_invoke$arity$2 = (function (st,ct){
return clostridium.befunge.peekMany.call(null,st,ct,cljs.core.PersistentVector.EMPTY);
});

clostridium.befunge.peekMany.cljs$core$IFn$_invoke$arity$3 = (function (st,ct,items){
if(cljs.core._EQ_.call(null,ct,(0))){
return items;
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,st),(0))){
return clostridium.befunge.peekMany.call(null,cljs.core.PersistentVector.EMPTY,(ct - (1)),cljs.core.cons.call(null,(0),items));
} else {
return clostridium.befunge.peekMany.call(null,cljs.core.pop.call(null,st),(ct - (1)),cljs.core.cons.call(null,cljs.core.peek.call(null,st),items));
}
}
});

clostridium.befunge.peekMany.cljs$lang$maxFixedArity = 3;

clostridium.befunge.pushMany = (function clostridium$befunge$pushMany(existing,more){
return cljs.core.vec.call(null,cljs.core.concat.call(null,existing,more));
});
clostridium.befunge.transfer = (function clostridium$befunge$transfer(src,dest,ct,rev){
var op = (cljs.core.truth_(rev)?cljs.core.reverse:cljs.core.identity);
var newSrc = clostridium.befunge.popMany.call(null,src,ct);
var newDest = clostridium.befunge.pushMany.call(null,dest,op.call(null,clostridium.befunge.peekMany.call(null,src,ct)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [newSrc,newDest], null);
});
clostridium.befunge.makeFingerprint = (function clostridium$befunge$makeFingerprint(nb){
var map__44338 = clostridium.befunge.removeFromStack.call(null,nb);
var map__44338__$1 = ((((!((map__44338 == null)))?((((map__44338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44338):map__44338);
var b = cljs.core.get.call(null,map__44338__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var item = cljs.core.get.call(null,map__44338__$1,new cljs.core.Keyword(null,"item","item",249373802));
var map__44339 = clostridium.befunge.removeManyFromStack.call(null,b,item);
var map__44339__$1 = ((((!((map__44339 == null)))?((((map__44339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44339):map__44339);
var b__$1 = cljs.core.get.call(null,map__44339__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var items = cljs.core.get.call(null,map__44339__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var fingerprint = cljs.core.reduce.call(null,((function (map__44338,map__44338__$1,b,item,map__44339,map__44339__$1,b__$1,items){
return (function (p1__44336_SHARP_,p2__44337_SHARP_){
return (((256) * p1__44336_SHARP_) + p2__44337_SHARP_);
});})(map__44338,map__44338__$1,b,item,map__44339,map__44339__$1,b__$1,items))
,(0),items);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"b","b",1482224470),b__$1,new cljs.core.Keyword(null,"fingerprint","fingerprint",598613022),fingerprint], null);
});
clostridium.befunge.initialInstructions = cljs.core.merge.call(null,clostridium.befunge.numberInsts,clostridium.befunge.upperCharInsts,cljs.core.PersistentHashMap.fromArrays([" ","@","`","!","a","\"","b","#","c","$","d","%","e","f","'","g","(",")","*","j","+","k",",","-",".","n","/","p","r","s","t","u","v","w","x","y",":","z","[","{","<","\\","|","]","}",">","^","_"],[(function (b){
return b;
}),(function (b){
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"running","running",1554969103),false);
}),clostridium.befunge.mathop.call(null,(function (p1__44342_SHARP_,p2__44343_SHARP_){
if((p1__44342_SHARP_ > p2__44343_SHARP_)){
return (1);
} else {
return (0);
}
})),(function (nb){
var map__44349 = clostridium.befunge.removeFromStack.call(null,nb);
var map__44349__$1 = ((((!((map__44349 == null)))?((((map__44349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44349):map__44349);
var b = cljs.core.get.call(null,map__44349__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var item = cljs.core.get.call(null,map__44349__$1,new cljs.core.Keyword(null,"item","item",249373802));
return clostridium.befunge.addToStack.call(null,b,((cljs.core._EQ_.call(null,item,(0)))?(1):(0)));
}),(function (b){
return clostridium.befunge.addToStack.call(null,b,(10));
}),(function (b){
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"stringMode","stringMode",-995189163),cljs.core.not.call(null,new cljs.core.Keyword(null,"stringMode","stringMode",-995189163).cljs$core$IFn$_invoke$arity$1(b)));
}),(function (b){
return clostridium.befunge.addToStack.call(null,b,(11));
}),(function (b){
return clostridium.befunge.updatePC.call(null,b,true);
}),(function (b){
return clostridium.befunge.addToStack.call(null,b,(12));
}),(function (b){
return new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(clostridium.befunge.removeFromStack.call(null,b));
}),(function (b){
return clostridium.befunge.addToStack.call(null,b,(13));
}),clostridium.befunge.mathop.call(null,cljs.core.rem),(function (b){
return clostridium.befunge.addToStack.call(null,b,(14));
}),(function (b){
return clostridium.befunge.addToStack.call(null,b,(15));
}),(function (nb){
var b = clostridium.befunge.updatePC.call(null,nb,true);
return clostridium.befunge.addToStack.call(null,b,clostridium.befunge.charcode.call(null,clostridium.befunge.current.call(null,b)));
}),(function (nb){
var map__44351 = clostridium.befunge.removeManyFromStack.call(null,nb,(2));
var map__44351__$1 = ((((!((map__44351 == null)))?((((map__44351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44351):map__44351);
var b = cljs.core.get.call(null,map__44351__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var items = cljs.core.get.call(null,map__44351__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var vec__44352 = items;
var y = cljs.core.nth.call(null,vec__44352,(0),null);
var x = cljs.core.nth.call(null,vec__44352,(1),null);
return clostridium.befunge.addToStack.call(null,b,clostridium.befunge.charcode.call(null,clostridium.befunge.current.call(null,new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null))));
}),(function (nb){
var map__44356 = clostridium.befunge.makeFingerprint.call(null,nb);
var map__44356__$1 = ((((!((map__44356 == null)))?((((map__44356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44356):map__44356);
var b = cljs.core.get.call(null,map__44356__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var fingerprint = cljs.core.get.call(null,map__44356__$1,new cljs.core.Keyword(null,"fingerprint","fingerprint",598613022));
return clostridium.befunge.reflect.call(null,b);
}),(function (nb){
var map__44358 = clostridium.befunge.makeFingerprint.call(null,nb);
var map__44358__$1 = ((((!((map__44358 == null)))?((((map__44358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44358):map__44358);
var b = cljs.core.get.call(null,map__44358__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var fingerprint = cljs.core.get.call(null,map__44358__$1,new cljs.core.Keyword(null,"fingerprint","fingerprint",598613022));
return clostridium.befunge.reflect.call(null,b);
}),clostridium.befunge.mathop.call(null,cljs.core._STAR_),(function (nb){
var map__44360 = clostridium.befunge.removeFromStack.call(null,nb);
var map__44360__$1 = ((((!((map__44360 == null)))?((((map__44360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44360):map__44360);
var b = cljs.core.get.call(null,map__44360__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var item = cljs.core.get.call(null,map__44360__$1,new cljs.core.Keyword(null,"item","item",249373802));
var dir = (((item < (0)))?cljs.core.map.call(null,((function (map__44360,map__44360__$1,b,item){
return (function (p1__44344_SHARP_){
return (p1__44344_SHARP_ * (-1));
});})(map__44360,map__44360__$1,b,item))
,new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(b)):new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(b));
var newI = (((item < (0)))?cljs.core.dec:cljs.core.inc);
var i = (0);
var b2 = b;
while(true){
if(cljs.core._EQ_.call(null,i,item)){
return b2;
} else {
var G__44421 = newI.call(null,i);
var G__44422 = clostridium.befunge.updatePC.call(null,b2,true,dir);
i = G__44421;
b2 = G__44422;
continue;
}
break;
}
}),clostridium.befunge.mathop.call(null,cljs.core._PLUS_),(function (nb){
var nextinst = clostridium.befunge.current.call(null,clostridium.befunge.updatePC.call(null,nb));
var map__44362 = clostridium.befunge.removeFromStack.call(null,nb);
var map__44362__$1 = ((((!((map__44362 == null)))?((((map__44362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44362):map__44362);
var b = cljs.core.get.call(null,map__44362__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var item = cljs.core.get.call(null,map__44362__$1,new cljs.core.Keyword(null,"item","item",249373802));
if(cljs.core._EQ_.call(null,item,(0))){
return clostridium.befunge.updatePC.call(null,b);
} else {
var x = cljs.core.range.call(null,item);
var ret = b;
while(true){
if(cljs.core.empty_QMARK_.call(null,x)){
return ret;
} else {
var G__44423 = cljs.core.rest.call(null,x);
var G__44424 = clostridium.befunge.runInst.call(null,ret,nextinst);
x = G__44423;
ret = G__44424;
continue;
}
break;
}
}
}),(function (b){
var map__44364 = clostridium.befunge.removeFromStack.call(null,b);
var map__44364__$1 = ((((!((map__44364 == null)))?((((map__44364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44364):map__44364);
var b__$1 = cljs.core.get.call(null,map__44364__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var item = cljs.core.get.call(null,map__44364__$1,new cljs.core.Keyword(null,"item","item",249373802));
new cljs.core.Keyword(null,"printfn","printfn",1637001951).cljs$core$IFn$_invoke$arity$1(b__$1).call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,item))].join(''));

return b__$1;
}),clostridium.befunge.mathop.call(null,cljs.core._),(function (b){
var map__44366 = clostridium.befunge.removeFromStack.call(null,b);
var map__44366__$1 = ((((!((map__44366 == null)))?((((map__44366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44366):map__44366);
var b__$1 = cljs.core.get.call(null,map__44366__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var item = cljs.core.get.call(null,map__44366__$1,new cljs.core.Keyword(null,"item","item",249373802));
new cljs.core.Keyword(null,"printfn","printfn",1637001951).cljs$core$IFn$_invoke$arity$1(b__$1).call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(item),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join(''));

return b__$1;
}),(function (b){
return clostridium.befunge.setNewToss.call(null,b,cljs.core.PersistentVector.EMPTY);
}),clostridium.befunge.mathop.call(null,cljs.core.quot),(function (nb){
var map__44368 = clostridium.befunge.removeManyFromStack.call(null,nb,(3));
var map__44368__$1 = ((((!((map__44368 == null)))?((((map__44368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44368):map__44368);
var b = cljs.core.get.call(null,map__44368__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var items = cljs.core.get.call(null,map__44368__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var vec__44369 = items;
var y = cljs.core.nth.call(null,vec__44369,(0),null);
var x = cljs.core.nth.call(null,vec__44369,(1),null);
var v = cljs.core.nth.call(null,vec__44369,(2),null);
var vec__44372 = cljs.core.map.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"storageOffset","storageOffset",-2082392296).cljs$core$IFn$_invoke$arity$1(b));
var ox = cljs.core.nth.call(null,vec__44372,(0),null);
var oy = cljs.core.nth.call(null,vec__44372,(1),null);
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"grid","grid",402978600),clostridium.befunge.setVal.call(null,new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oy,ox], null),clostridium.befunge.clipChar.call(null,v)));
}),clostridium.befunge.reflect,(function (nb){
var map__44376 = clostridium.befunge.removeFromStack.call(null,clostridium.befunge.updatePC.call(null,nb,true));
var map__44376__$1 = ((((!((map__44376 == null)))?((((map__44376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44376):map__44376);
var b = cljs.core.get.call(null,map__44376__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var item = cljs.core.get.call(null,map__44376__$1,new cljs.core.Keyword(null,"item","item",249373802));
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"grid","grid",402978600),clostridium.befunge.setVal.call(null,new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(b),cljs.core.reverse.call(null,new cljs.core.Keyword(null,"pc","pc",512913453).cljs$core$IFn$_invoke$arity$1(b)),clostridium.befunge.clipChar.call(null,item)));
}),clostridium.befunge.reflect,(function (nb){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,clostridium.befunge.ross.call(null,nb)),(0))){
return clostridium.befunge.reflect.call(null,nb);
} else {
var map__44378 = clostridium.befunge.removeFromStack.call(null,nb);
var map__44378__$1 = ((((!((map__44378 == null)))?((((map__44378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44378.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44378):map__44378);
var b = cljs.core.get.call(null,map__44378__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var item = cljs.core.get.call(null,map__44378__$1,new cljs.core.Keyword(null,"item","item",249373802));
if(cljs.core._EQ_.call(null,item,(0))){
return b;
} else {
if((item > (0))){
var vec__44380 = clostridium.befunge.transfer.call(null,clostridium.befunge.soss.call(null,b),clostridium.befunge.toss.call(null,b),item,true);
var s = cljs.core.nth.call(null,vec__44380,(0),null);
var t = cljs.core.nth.call(null,vec__44380,(1),null);
return clostridium.befunge.newTossAndSoss.call(null,b,t,s);
} else {
if((item < (0))){
var vec__44383 = clostridium.befunge.transfer.call(null,clostridium.befunge.toss.call(null,b),clostridium.befunge.soss.call(null,b),((-1) * item),true);
var t = cljs.core.nth.call(null,vec__44383,(0),null);
var s = cljs.core.nth.call(null,vec__44383,(1),null);
return clostridium.befunge.newTossAndSoss.call(null,b,t,s);
} else {
return null;
}
}
}
}
}),(function (b){
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
}),(function (nb){
var map__44386 = clostridium.befunge.removeManyFromStack.call(null,nb,(2));
var map__44386__$1 = ((((!((map__44386 == null)))?((((map__44386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44386):map__44386);
var b = cljs.core.get.call(null,map__44386__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var items = cljs.core.get.call(null,map__44386__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var vec__44387 = items;
var one = cljs.core.nth.call(null,vec__44387,(0),null);
var two = cljs.core.nth.call(null,vec__44387,(1),null);
if((one < two)){
return clostridium.befunge.rotateCCW.call(null,b);
} else {
if((one > two)){
return clostridium.befunge.rotateCW.call(null,b);
} else {
return b;
}
}
}),(function (nb){
var map__44391 = clostridium.befunge.removeManyFromStack.call(null,nb,(2));
var map__44391__$1 = ((((!((map__44391 == null)))?((((map__44391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44391):map__44391);
var b = cljs.core.get.call(null,map__44391__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var items = cljs.core.get.call(null,map__44391__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var vec__44392 = items;
var x = cljs.core.nth.call(null,vec__44392,(0),null);
var y = cljs.core.nth.call(null,vec__44392,(1),null);
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
}),(function (nb){
var cal = (new Date());
var map__44396 = clostridium.befunge.removeFromStack.call(null,nb);
var map__44396__$1 = ((((!((map__44396 == null)))?((((map__44396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44396):map__44396);
var b = cljs.core.get.call(null,map__44396__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var item = cljs.core.get.call(null,map__44396__$1,new cljs.core.Keyword(null,"item","item",249373802));
var info = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),cljs.core.reduce.call(null,((function (cal,map__44396,map__44396__$1,b,item){
return (function (p1__44347_SHARP_,p2__44348_SHARP_){
return decimal.core._PLUS_.call(null,decimal.core.mul.call(null,(256),p1__44347_SHARP_),decimal.core.decimal.call(null,p2__44348_SHARP_));
});})(cal,map__44396,map__44396__$1,b,item))
,cljs.core.map.call(null,cljs.core.int$,"Clostridium")),(100),(0),clostridium.befunge.charcode.call(null,"/"),(2),(0),(0)], null),cljs.core.reverse.call(null,new cljs.core.Keyword(null,"pc","pc",512913453).cljs$core$IFn$_invoke$arity$1(b)),cljs.core.reverse.call(null,new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(b)),cljs.core.reverse.call(null,new cljs.core.Keyword(null,"storageOffset","storageOffset",-2082392296).cljs$core$IFn$_invoke$arity$1(b)),clostridium.befunge.leastPoint.call(null,b),clostridium.befunge.greatestPoint.call(null,b),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((((256) * (256)) * new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(cal)) + ((256) * (new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(cal) + (1)))) + new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cal)),(((((256) * (256)) * new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(cal)) + ((256) * new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(cal))) + new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(cal)),cljs.core.count.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(b))], null),(function (){var iter__28742__auto__ = ((function (cal,map__44396,map__44396__$1,b,item){
return (function clostridium$befunge$iter__44398(s__44399){
return (new cljs.core.LazySeq(null,((function (cal,map__44396,map__44396__$1,b,item){
return (function (){
var s__44399__$1 = s__44399;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__44399__$1);
if(temp__4657__auto__){
var s__44399__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44399__$2)){
var c__28740__auto__ = cljs.core.chunk_first.call(null,s__44399__$2);
var size__28741__auto__ = cljs.core.count.call(null,c__28740__auto__);
var b__44401 = cljs.core.chunk_buffer.call(null,size__28741__auto__);
if((function (){var i__44400 = (0);
while(true){
if((i__44400 < size__28741__auto__)){
var x = cljs.core._nth.call(null,c__28740__auto__,i__44400);
cljs.core.chunk_append.call(null,b__44401,cljs.core.count.call(null,x));

var G__44425 = (i__44400 + (1));
i__44400 = G__44425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44401),clostridium$befunge$iter__44398.call(null,cljs.core.chunk_rest.call(null,s__44399__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44401),null);
}
} else {
var x = cljs.core.first.call(null,s__44399__$2);
return cljs.core.cons.call(null,cljs.core.count.call(null,x),clostridium$befunge$iter__44398.call(null,cljs.core.rest.call(null,s__44399__$2)));
}
} else {
return null;
}
break;
}
});})(cal,map__44396,map__44396__$1,b,item))
,null,null));
});})(cal,map__44396,map__44396__$1,b,item))
;
return iter__28742__auto__.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(b));
})(),cljs.core.repeat.call(null,(5),(0)));
var newBoard = clostridium.befunge.setNewToss.call(null,nb,clostridium.befunge.pushMany.call(null,clostridium.befunge.toss.call(null,b),cljs.core.reverse.call(null,info)));
if((item > (0))){
var keptItem = cljs.core.peek.call(null,clostridium.befunge.popMany.call(null,clostridium.befunge.toss.call(null,newBoard),(item - (1))));
return clostridium.befunge.addToStack.call(null,b,keptItem);
} else {
return newBoard;
}
}),(function (nb){
var map__44402 = clostridium.befunge.removeFromStack.call(null,nb);
var map__44402__$1 = ((((!((map__44402 == null)))?((((map__44402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44402):map__44402);
var b = cljs.core.get.call(null,map__44402__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var item = cljs.core.get.call(null,map__44402__$1,new cljs.core.Keyword(null,"item","item",249373802));
return clostridium.befunge.addToStack.call(null,clostridium.befunge.addToStack.call(null,b,item),item);
}),(function (b){
return b;
}),clostridium.befunge.rotateCW,(function (nb){
var map__44404 = clostridium.befunge.removeFromStack.call(null,nb);
var map__44404__$1 = ((((!((map__44404 == null)))?((((map__44404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44404):map__44404);
var b = cljs.core.get.call(null,map__44404__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var item = cljs.core.get.call(null,map__44404__$1,new cljs.core.Keyword(null,"item","item",249373802));
var newBoard = cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(b),cljs.core.PersistentVector.EMPTY));
var vecConcat = cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat);
var elementBoard = (((item < (0)))?clostridium.befunge.setNewSoss.call(null,newBoard,vecConcat.call(null,clostridium.befunge.soss.call(null,newBoard),cljs.core.repeat.call(null,((-1) * item),(0)))):((cljs.core._EQ_.call(null,item,(0)))?newBoard:(((item > (0)))?(function (){var vec__44406 = clostridium.befunge.transfer.call(null,clostridium.befunge.soss.call(null,newBoard),clostridium.befunge.toss.call(null,newBoard),item,false);
var s = cljs.core.nth.call(null,vec__44406,(0),null);
var t = cljs.core.nth.call(null,vec__44406,(1),null);
return clostridium.befunge.newTossAndSoss.call(null,newBoard,t,s);
})():null)));
return cljs.core.assoc.call(null,clostridium.befunge.setNewSoss.call(null,elementBoard,vecConcat.call(null,clostridium.befunge.soss.call(null,elementBoard),new cljs.core.Keyword(null,"storageOffset","storageOffset",-2082392296).cljs$core$IFn$_invoke$arity$1(elementBoard))),new cljs.core.Keyword(null,"storageOffset","storageOffset",-2082392296),clostridium.befunge.step.call(null,new cljs.core.Keyword(null,"pc","pc",512913453).cljs$core$IFn$_invoke$arity$1(elementBoard),new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(elementBoard)));
}),(function (b){
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));
}),(function (b){
var one = clostridium.befunge.removeFromStack.call(null,b);
var two = clostridium.befunge.removeFromStack.call(null,new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(one));
return clostridium.befunge.addToStack.call(null,clostridium.befunge.addToStack.call(null,new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(two),new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(one)),new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(two));
}),(function (nb){
var map__44409 = clostridium.befunge.removeFromStack.call(null,nb);
var map__44409__$1 = ((((!((map__44409 == null)))?((((map__44409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44409):map__44409);
var b = cljs.core.get.call(null,map__44409__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var item = cljs.core.get.call(null,map__44409__$1,new cljs.core.Keyword(null,"item","item",249373802));
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"dir","dir",1734754661),((cljs.core._EQ_.call(null,item,(0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)));
}),clostridium.befunge.rotateCCW,(function (nb){
var map__44411 = clostridium.befunge.removeFromStack.call(null,nb);
var map__44411__$1 = ((((!((map__44411 == null)))?((((map__44411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44411):map__44411);
var b = cljs.core.get.call(null,map__44411__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var item = cljs.core.get.call(null,map__44411__$1,new cljs.core.Keyword(null,"item","item",249373802));
var vec__44412 = clostridium.befunge.peekMany.call(null,clostridium.befunge.soss.call(null,b),(2));
var y = cljs.core.nth.call(null,vec__44412,(0),null);
var x = cljs.core.nth.call(null,vec__44412,(1),null);
var newBoard = clostridium.befunge.setNewSoss.call(null,b,clostridium.befunge.popMany.call(null,clostridium.befunge.soss.call(null,b),(2)));
var vecConcat = cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat);
var elementBoard = (((item < (0)))?clostridium.befunge.setNewSoss.call(null,newBoard,cljs.core.vec.call(null,clostridium.befunge.popMany.call(null,clostridium.befunge.soss.call(null,newBoard),((-1) * item)))):((cljs.core._EQ_.call(null,item,(0)))?newBoard:(((item > (0)))?(function (){var vec__44416 = clostridium.befunge.transfer.call(null,clostridium.befunge.toss.call(null,newBoard),clostridium.befunge.soss.call(null,newBoard),item,false);
var t = cljs.core.nth.call(null,vec__44416,(0),null);
var s = cljs.core.nth.call(null,vec__44416,(1),null);
return clostridium.befunge.newTossAndSoss.call(null,newBoard,t,s);
})():null)));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,clostridium.befunge.ross.call(null,nb)),(0))){
return clostridium.befunge.reflect.call(null,nb);
} else {
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,elementBoard,new cljs.core.Keyword(null,"stack","stack",-793405930),clostridium.befunge.ross.call(null,elementBoard)),new cljs.core.Keyword(null,"storageOffset","storageOffset",-2082392296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}
}),(function (b){
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
}),(function (b){
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
}),(function (nb){
var map__44419 = clostridium.befunge.removeFromStack.call(null,nb);
var map__44419__$1 = ((((!((map__44419 == null)))?((((map__44419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44419):map__44419);
var b = cljs.core.get.call(null,map__44419__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var item = cljs.core.get.call(null,map__44419__$1,new cljs.core.Keyword(null,"item","item",249373802));
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"dir","dir",1734754661),((cljs.core._EQ_.call(null,item,(0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)));
})]));
clostridium.befunge.buildGridfromString = (function clostridium$befunge$buildGridfromString(data){
var fixedData = cljs.core.apply.call(null,cljs.core.str,cljs.core.remove.call(null,(function (p1__44426_SHARP_){
return cljs.core._EQ_.call(null,p1__44426_SHARP_,"\f");
}),data));
var lines = clojure.string.split.call(null,fixedData,/(?:(?:\r\n)|\n|\r)/);
return cljs.core.zipmap.call(null,cljs.core.range.call(null,cljs.core.count.call(null,lines)),cljs.core.map.call(null,((function (fixedData,lines){
return (function (p1__44427_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.range.call(null,cljs.core.count.call(null,p1__44427_SHARP_)),cljs.core.vec.call(null,p1__44427_SHARP_));
});})(fixedData,lines))
,lines));
});
clostridium.befunge.makeInitial = (function clostridium$befunge$makeInitial(data,print_fn){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"inst","inst",645962501),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"pc","pc",512913453),new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"stringMode","stringMode",-995189163),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"storageOffset","storageOffset",-2082392296),new cljs.core.Keyword(null,"printfn","printfn",1637001951)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),clostridium.befunge.initialInstructions,clostridium.befunge.buildGridfromString.call(null,data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),true,false,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),print_fn]);
});
clostridium.befunge.doInst = (function clostridium$befunge$doInst(b){
var inst = cljs.core.char$.call(null,clostridium.befunge.current.call(null,b));
return clostridium.befunge.updatePC.call(null,clostridium.befunge.runInst.call(null,b,inst));
});
clostridium.befunge.doAndPrint = (function clostridium$befunge$doAndPrint(b){
var ret = clostridium.befunge.doInst.call(null,b);
return ret;
});
clostridium.befunge.print_fn = (function clostridium$befunge$print_fn(msg){
cljs.core.print.call(null,msg);

return cljs.core.flush.call(null);
});
clostridium.befunge.runBefunge = (function clostridium$befunge$runBefunge(data){
var b = clostridium.befunge.makeInitial.call(null,data,clostridium.befunge.print_fn);
while(true){
if(cljs.core.truth_(new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(b))){
var G__44428 = clostridium.befunge.doAndPrint.call(null,b);
b = G__44428;
continue;
} else {
return null;
}
break;
}
});

//# sourceMappingURL=befunge.js.map?rel=1503263488321
