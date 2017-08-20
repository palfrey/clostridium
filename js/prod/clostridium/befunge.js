// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('clostridium.befunge');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('decimal.core');
clostridium.befunge.toss = (function clostridium$befunge$toss(b){
return cljs.core.first(cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(b));
});
clostridium.befunge.soss = (function clostridium$befunge$soss(b){
return cljs.core.second(cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(b));
});
clostridium.befunge.ross = (function clostridium$befunge$ross(b){
return cljs.core.rest(cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(b));
});
clostridium.befunge.setNewToss = (function clostridium$befunge$setNewToss(b,t){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$stack,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clostridium.befunge.ross(b),t));
});
clostridium.befunge.setNewSoss = (function clostridium$befunge$setNewSoss(b,s){
var nb = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$stack,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(clostridium.befunge.ross(b)),s),clostridium.befunge.toss(b)));
return nb;
});
clostridium.befunge.newTossAndSoss = (function clostridium$befunge$newTossAndSoss(b,t,s){
return clostridium.befunge.setNewToss(clostridium.befunge.setNewSoss(b,s),t);
});
clostridium.befunge.addToStack = (function clostridium$befunge$addToStack(b,item){
return clostridium.befunge.setNewToss(b,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clostridium.befunge.toss(b),item));
});
clostridium.befunge.removeFromStack = (function clostridium$befunge$removeFromStack(b){
var items = clostridium.befunge.toss(b);
if(cljs.core.empty_QMARK_(items)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$b,b,cljs.core.cst$kw$item,(0)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$b,clostridium.befunge.setNewToss(b,cljs.core.pop(items)),cljs.core.cst$kw$item,cljs.core.peek(items)], null);
}
});
clostridium.befunge.removeManyFromStack = (function clostridium$befunge$removeManyFromStack(nb,many){
if((many < (0))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$b,nb,cljs.core.cst$kw$items,cljs.core.PersistentVector.EMPTY], null);
} else {
var items = cljs.core.PersistentVector.EMPTY;
var board = nb;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),many)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$b,board,cljs.core.cst$kw$items,items], null);
} else {
var map__13700 = clostridium.befunge.removeFromStack(board);
var map__13700__$1 = ((((!((map__13700 == null)))?((((map__13700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13700.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13700):map__13700);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13700__$1,cljs.core.cst$kw$b);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13700__$1,cljs.core.cst$kw$item);
var G__13702 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,item);
var G__13703 = b;
items = G__13702;
board = G__13703;
continue;
}
break;
}
}
});
clostridium.befunge.reflect = (function clostridium$befunge$reflect(b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$dir,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13704_SHARP_){
return ((-1) * p1__13704_SHARP_);
}),cljs.core.cst$kw$dir.cljs$core$IFn$_invoke$arity$1(b)));
});
clostridium.befunge.charcode = (function clostridium$befunge$charcode(c){
return c.charCodeAt((0));
});
clostridium.befunge.numberInsts = (function (){var insts = cljs.core.PersistentArrayMap.EMPTY;
var digit = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(digit,(10))){
return insts;
} else {
var G__13705 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(insts,cljs.core.char$((clostridium.befunge.charcode("0") + digit)),((function (insts,digit){
return (function (b){
return clostridium.befunge.addToStack(b,digit);
});})(insts,digit))
);
var G__13706 = (digit + (1));
insts = G__13705;
digit = G__13706;
continue;
}
break;
}
})();
clostridium.befunge.upperCharInsts = (function (){var insts = cljs.core.PersistentArrayMap.EMPTY;
var c = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,(26))){
return insts;
} else {
var G__13707 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(insts,cljs.core.char$((clostridium.befunge.charcode("A") + c)),((function (insts,c){
return (function (b){
return clostridium.befunge.reflect(b);
});})(insts,c))
);
var G__13708 = (c + (1));
insts = G__13707;
c = G__13708;
continue;
}
break;
}
})();
clostridium.befunge.mathop = (function clostridium$befunge$mathop(op){
return (function (b){
var one = clostridium.befunge.removeFromStack(b);
var two = clostridium.befunge.removeFromStack(cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(one));
try{return clostridium.befunge.addToStack(cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(two),(function (){var G__13710 = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(two);
var G__13711 = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(one);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__13710,G__13711) : op.call(null,G__13710,G__13711));
})());
}catch (e13709){if((e13709 instanceof Object)){
var e = e13709;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["math exception",op,cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(two),cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(one)], 0));

throw e;
} else {
throw e13709;

}
}});
});
clostridium.befunge.maxValue = cljs.core.quot((2147483647),(2));
clostridium.befunge.negMaxValue = ((-1) * clostridium.befunge.maxValue);
clostridium.befunge.clipValue = (function clostridium$befunge$clipValue(val){
if(((val < clostridium.befunge.maxValue)) && ((clostridium.befunge.negMaxValue < val))){
return val;
} else {
return (cljs.core.mod((val + clostridium.befunge.maxValue),(clostridium.befunge.maxValue * (2))) - clostridium.befunge.maxValue);
}
});
clostridium.befunge.throw_msg = (function clostridium$befunge$throw_msg(msg){
return throw$(msg);
});
clostridium.befunge.current = (function clostridium$befunge$current(var_args){
var G__13713 = arguments.length;
switch (G__13713) {
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
return clostridium.befunge.current.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(b),cljs.core.reverse(cljs.core.cst$kw$pc.cljs$core$IFn$_invoke$arity$1(b)));
});

clostridium.befunge.current.cljs$core$IFn$_invoke$arity$2 = (function (grid,pc){
if(cljs.core.empty_QMARK_(pc)){
if(cljs.core.seq_QMARK_(grid)){
return clostridium.befunge.throw_msg("Grid still a sequence");
} else {
return grid;
}
} else {
return clostridium.befunge.current.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(grid,clostridium.befunge.clipValue(cljs.core.first(pc))," "),cljs.core.rest(pc));
}
});

clostridium.befunge.current.cljs$lang$maxFixedArity = 2;

clostridium.befunge.orderedPoint = (function clostridium$befunge$orderedPoint(b,order){
var grid = cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(b);
var values = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.char_QMARK_(grid)){
return values;
} else {
var currentKey = cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(order,cljs.core.keys(grid)));
var G__13715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grid,currentKey);
var G__13716 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(values,currentKey);
grid = G__13715;
values = G__13716;
continue;
}
break;
}
});
clostridium.befunge.leastPoint = (function clostridium$befunge$leastPoint(b){
return clostridium.befunge.orderedPoint(b,cljs.core._LT_);
});
clostridium.befunge.greatestPoint = (function clostridium$befunge$greatestPoint(b){
return clostridium.befunge.orderedPoint(b,cljs.core._GT_);
});
clostridium.befunge.step = (function clostridium$befunge$step(var_args){
var G__13720 = arguments.length;
switch (G__13720) {
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
return clostridium.befunge.step.cljs$core$IFn$_invoke$arity$3(pc,dir,(1));
});

clostridium.befunge.step.cljs$core$IFn$_invoke$arity$3 = (function (pc,dir,howMany){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__13717_SHARP_,p2__13718_SHARP_){
return clostridium.befunge.clipValue((p1__13717_SHARP_ + (howMany * p2__13718_SHARP_)));
}),pc,dir);
});

clostridium.befunge.step.cljs$lang$maxFixedArity = 3;

clostridium.befunge.jumpPC = (function clostridium$befunge$jumpPC(grid,pc,dir){
var d = cljs.core.first(dir);
var c = cljs.core.first(pc);
var s = ((function (d,c){
return (function (hm,val){
return clostridium.befunge.step.cljs$core$IFn$_invoke$arity$3(cljs.core.rest(pc),cljs.core.rest(dir),(hm.cljs$core$IFn$_invoke$arity$2 ? hm.cljs$core$IFn$_invoke$arity$2(c,val) : hm.call(null,c,val)));
});})(d,c))
;
var cu = ((function (d,c,s){
return (function (hm,val){
return clostridium.befunge.current.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(grid,val),s(hm,val));
});})(d,c,s))
;
var j = ((function (d,c,s,cu){
return (function (order,choose,howMany){
var items = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(order,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(choose,c),cljs.core.keys(grid)));
var coord = cljs.core.some(((function (items,d,c,s,cu){
return (function (p1__13722_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",cu(howMany,p1__13722_SHARP_))){
return false;
} else {
return p1__13722_SHARP_;
}
});})(items,d,c,s,cu))
,items);
var ret = (((coord == null))?(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(1))))?cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(order,cljs.core.keys(grid))):(function (){var n = ((1) + (function (){var G__13727 = c;
var G__13728 = ((1) + clostridium.befunge.maxValue);
return (howMany.cljs$core$IFn$_invoke$arity$2 ? howMany.cljs$core$IFn$_invoke$arity$2(G__13727,G__13728) : howMany.call(null,G__13727,G__13728));
})());
var init = clostridium.befunge.step.cljs$core$IFn$_invoke$arity$3(pc,dir,n);
return cljs.core.first((clostridium.befunge.jumpPC.cljs$core$IFn$_invoke$arity$3 ? clostridium.befunge.jumpPC.cljs$core$IFn$_invoke$arity$3(grid,init,dir) : clostridium.befunge.jumpPC.call(null,grid,init,dir)));
})()):coord);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clostridium.befunge.step.cljs$core$IFn$_invoke$arity$3(cljs.core.rest(pc),cljs.core.rest(dir),(howMany.cljs$core$IFn$_invoke$arity$2 ? howMany.cljs$core$IFn$_invoke$arity$2(c,ret) : howMany.call(null,c,ret))),ret);
});})(d,c,s,cu))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(-1))){
return j(cljs.core._GT_,cljs.core._GT_,cljs.core.constantly((1)));
} else {
if((d > (0))){
return j(cljs.core._LT_,((function (d,c,s,cu,j){
return (function (p1__13724_SHARP_,p2__13723_SHARP_){
var diff = (p2__13723_SHARP_ - p1__13724_SHARP_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(d,(1))){
} else {
}

return (((0) < diff)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.rem(diff,d),(0)));
});})(d,c,s,cu,j))
,((function (d,c,s,cu,j){
return (function (p1__13726_SHARP_,p2__13725_SHARP_){
var diff = (p2__13725_SHARP_ - p1__13726_SHARP_);
var n = cljs.core.quot(diff,d);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(d,(1))){
} else {
}

return n;
});})(d,c,s,cu,j))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__13729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grid,c);
var G__13730 = cljs.core.rest(pc);
var G__13731 = cljs.core.rest(dir);
return (clostridium.befunge.jumpPC.cljs$core$IFn$_invoke$arity$3 ? clostridium.befunge.jumpPC.cljs$core$IFn$_invoke$arity$3(G__13729,G__13730,G__13731) : clostridium.befunge.jumpPC.call(null,G__13729,G__13730,G__13731));
})(),c);
} else {
return clostridium.befunge.throw_msg("Flying!");

}
}
}
});
clostridium.befunge.updatePCSkipSpace = (function clostridium$befunge$updatePCSkipSpace(b,noJump,dir){
var initial = clostridium.befunge.step.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pc.cljs$core$IFn$_invoke$arity$1(b),dir);
var sp = cljs.core.peek(clostridium.befunge.toss(b));
var spaceValue = clostridium.befunge.charcode(" ");
if(cljs.core.truth_(noJump)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$pc,initial);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clostridium.befunge.current.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(b),cljs.core.reverse(initial))," ")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$pc,initial);
} else {
if(cljs.core.truth_(cljs.core.cst$kw$stringMode.cljs$core$IFn$_invoke$arity$1(b))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sp,spaceValue)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$pc,initial);
} else {
return clostridium.befunge.addToStack(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$pc,cljs.core.reverse(clostridium.befunge.jumpPC(cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(b),cljs.core.reverse(cljs.core.cst$kw$pc.cljs$core$IFn$_invoke$arity$1(b)),cljs.core.reverse(dir)))),spaceValue);
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$pc,cljs.core.reverse(clostridium.befunge.jumpPC(cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(b),cljs.core.reverse(cljs.core.cst$kw$pc.cljs$core$IFn$_invoke$arity$1(b)),cljs.core.reverse(dir))));

}
}
}
});
clostridium.befunge.updatePC = (function clostridium$befunge$updatePC(var_args){
var G__13733 = arguments.length;
switch (G__13733) {
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
return clostridium.befunge.updatePC.cljs$core$IFn$_invoke$arity$2(b,false);
});

clostridium.befunge.updatePC.cljs$core$IFn$_invoke$arity$2 = (function (b,noJump){
return clostridium.befunge.updatePC.cljs$core$IFn$_invoke$arity$3(b,noJump,cljs.core.cst$kw$dir.cljs$core$IFn$_invoke$arity$1(b));
});

clostridium.befunge.updatePC.cljs$core$IFn$_invoke$arity$3 = (function (b,noJump,dir){
var nb = clostridium.befunge.updatePCSkipSpace(b,noJump,dir);
var colonMode = false;
while(true){
if(cljs.core.truth_((function (){var or__7625__auto__ = noJump;
if(cljs.core.truth_(or__7625__auto__)){
return or__7625__auto__;
} else {
return cljs.core.cst$kw$stringMode.cljs$core$IFn$_invoke$arity$1(nb);
}
})())){
return nb;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(";",clostridium.befunge.current.cljs$core$IFn$_invoke$arity$1(nb))){
var G__13735 = clostridium.befunge.updatePCSkipSpace(nb,noJump,dir);
var G__13736 = !(colonMode);
nb = G__13735;
colonMode = G__13736;
continue;
} else {
if(colonMode){
var G__13737 = clostridium.befunge.updatePCSkipSpace(nb,noJump,dir);
var G__13738 = colonMode;
nb = G__13737;
colonMode = G__13738;
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coord),(0))){
return value;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(grid,clostridium.befunge.clipValue(cljs.core.first(coord)),(function (){var G__13739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grid,clostridium.befunge.clipValue(cljs.core.first(coord)));
var G__13740 = cljs.core.rest(coord);
var G__13741 = value;
return (clostridium.befunge.setVal.cljs$core$IFn$_invoke$arity$3 ? clostridium.befunge.setVal.cljs$core$IFn$_invoke$arity$3(G__13739,G__13740,G__13741) : clostridium.befunge.setVal.call(null,G__13739,G__13740,G__13741));
})());
}
});
clostridium.befunge.rotateCCW = (function clostridium$befunge$rotateCCW(b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$dir,(function (){var vec__13742 = cljs.core.cst$kw$dir.cljs$core$IFn$_invoke$arity$1(b);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13742,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13742,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y * (-1)),x], null);
})());
});
clostridium.befunge.rotateCW = (function clostridium$befunge$rotateCW(b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$dir,(function (){var vec__13745 = cljs.core.cst$kw$dir.cljs$core$IFn$_invoke$arity$1(b);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13745,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13745,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(x * (-1))], null);
})());
});
clostridium.befunge.clipChar = (function clostridium$befunge$clipChar(i){
if(cljs.core.char_QMARK_(i)){
return i;
} else {
if((i > (65535))){
return " ";
} else {
if((i < (0))){
return " ";
} else {
return cljs.core.char$(i);

}
}
}
});
clostridium.befunge.runInst = (function clostridium$befunge$runInst(b,inst){
var insts = cljs.core.cst$kw$inst.cljs$core$IFn$_invoke$arity$1(b);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(insts,inst);
if(cljs.core.truth_((function (){var and__7613__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst,"\"");
if(and__7613__auto__){
return cljs.core.cst$kw$stringMode.cljs$core$IFn$_invoke$arity$1(b);
} else {
return and__7613__auto__;
}
})())){
if((!(cljs.core.empty_QMARK_(clostridium.befunge.toss(b)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(clostridium.befunge.clipChar(inst)," ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clostridium.befunge.clipChar(cljs.core.peek(clostridium.befunge.toss(b)))], 0)))){
return b;
} else {
return clostridium.befunge.addToStack(b,clostridium.befunge.charcode(inst));
}
} else {
if((f == null)){
[cljs.core.str.cljs$core$IFn$_invoke$arity$1("No such command '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.cst$kw$pc.cljs$core$IFn$_invoke$arity$1(b)))].join('');

return clostridium.befunge.reflect(b);
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(b) : f.call(null,b));
}
}
});
clostridium.befunge.popMany = (function clostridium$befunge$popMany(st,ct){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ct,(0))){
return st;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(st),(0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var G__13748 = cljs.core.pop(st);
var G__13749 = (ct - (1));
return (clostridium.befunge.popMany.cljs$core$IFn$_invoke$arity$2 ? clostridium.befunge.popMany.cljs$core$IFn$_invoke$arity$2(G__13748,G__13749) : clostridium.befunge.popMany.call(null,G__13748,G__13749));
}
}
});
clostridium.befunge.peekMany = (function clostridium$befunge$peekMany(var_args){
var G__13751 = arguments.length;
switch (G__13751) {
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
return clostridium.befunge.peekMany.cljs$core$IFn$_invoke$arity$3(st,ct,cljs.core.PersistentVector.EMPTY);
});

clostridium.befunge.peekMany.cljs$core$IFn$_invoke$arity$3 = (function (st,ct,items){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ct,(0))){
return items;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(st),(0))){
return clostridium.befunge.peekMany.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,(ct - (1)),cljs.core.cons((0),items));
} else {
return clostridium.befunge.peekMany.cljs$core$IFn$_invoke$arity$3(cljs.core.pop(st),(ct - (1)),cljs.core.cons(cljs.core.peek(st),items));
}
}
});

clostridium.befunge.peekMany.cljs$lang$maxFixedArity = 3;

clostridium.befunge.pushMany = (function clostridium$befunge$pushMany(existing,more){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(existing,more));
});
clostridium.befunge.transfer = (function clostridium$befunge$transfer(src,dest,ct,rev){
var op = (cljs.core.truth_(rev)?cljs.core.reverse:cljs.core.identity);
var newSrc = clostridium.befunge.popMany(src,ct);
var newDest = clostridium.befunge.pushMany(dest,(function (){var G__13753 = clostridium.befunge.peekMany.cljs$core$IFn$_invoke$arity$2(src,ct);
return (op.cljs$core$IFn$_invoke$arity$1 ? op.cljs$core$IFn$_invoke$arity$1(G__13753) : op.call(null,G__13753));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [newSrc,newDest], null);
});
clostridium.befunge.makeFingerprint = (function clostridium$befunge$makeFingerprint(nb){
var map__13756 = clostridium.befunge.removeFromStack(nb);
var map__13756__$1 = ((((!((map__13756 == null)))?((((map__13756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13756):map__13756);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13756__$1,cljs.core.cst$kw$b);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13756__$1,cljs.core.cst$kw$item);
var map__13757 = clostridium.befunge.removeManyFromStack(b,item);
var map__13757__$1 = ((((!((map__13757 == null)))?((((map__13757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13757):map__13757);
var b__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13757__$1,cljs.core.cst$kw$b);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13757__$1,cljs.core.cst$kw$items);
var fingerprint = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__13756,map__13756__$1,b,item,map__13757,map__13757__$1,b__$1,items){
return (function (p1__13754_SHARP_,p2__13755_SHARP_){
return (((256) * p1__13754_SHARP_) + p2__13755_SHARP_);
});})(map__13756,map__13756__$1,b,item,map__13757,map__13757__$1,b__$1,items))
,(0),items);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$b,b__$1,cljs.core.cst$kw$fingerprint,fingerprint], null);
});
clostridium.befunge.initialInstructions = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clostridium.befunge.numberInsts,clostridium.befunge.upperCharInsts,cljs.core.PersistentHashMap.fromArrays([" ","@","`","!","a","\"","b","#","c","$","d","%","e","f","'","g","(",")","*","j","+","k",",","-",".","n","/","p","r","s","t","u","v","w","x","y",":","z","[","{","<","\\","|","]","}",">","^","_"],[(function (b){
return b;
}),(function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$running,false);
}),clostridium.befunge.mathop((function (p1__13760_SHARP_,p2__13761_SHARP_){
if((p1__13760_SHARP_ > p2__13761_SHARP_)){
return (1);
} else {
return (0);
}
})),(function (nb){
var map__13767 = clostridium.befunge.removeFromStack(nb);
var map__13767__$1 = ((((!((map__13767 == null)))?((((map__13767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13767):map__13767);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13767__$1,cljs.core.cst$kw$b);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13767__$1,cljs.core.cst$kw$item);
return clostridium.befunge.addToStack(b,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,(0)))?(1):(0)));
}),(function (b){
return clostridium.befunge.addToStack(b,(10));
}),(function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$stringMode,cljs.core.not(cljs.core.cst$kw$stringMode.cljs$core$IFn$_invoke$arity$1(b)));
}),(function (b){
return clostridium.befunge.addToStack(b,(11));
}),(function (b){
return clostridium.befunge.updatePC.cljs$core$IFn$_invoke$arity$2(b,true);
}),(function (b){
return clostridium.befunge.addToStack(b,(12));
}),(function (b){
return cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(clostridium.befunge.removeFromStack(b));
}),(function (b){
return clostridium.befunge.addToStack(b,(13));
}),clostridium.befunge.mathop(cljs.core.rem),(function (b){
return clostridium.befunge.addToStack(b,(14));
}),(function (b){
return clostridium.befunge.addToStack(b,(15));
}),(function (nb){
var b = clostridium.befunge.updatePC.cljs$core$IFn$_invoke$arity$2(nb,true);
return clostridium.befunge.addToStack(b,clostridium.befunge.charcode(clostridium.befunge.current.cljs$core$IFn$_invoke$arity$1(b)));
}),(function (nb){
var map__13769 = clostridium.befunge.removeManyFromStack(nb,(2));
var map__13769__$1 = ((((!((map__13769 == null)))?((((map__13769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13769):map__13769);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13769__$1,cljs.core.cst$kw$b);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13769__$1,cljs.core.cst$kw$items);
var vec__13770 = items;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13770,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13770,(1),null);
return clostridium.befunge.addToStack(b,clostridium.befunge.charcode(clostridium.befunge.current.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null))));
}),(function (nb){
var map__13774 = clostridium.befunge.makeFingerprint(nb);
var map__13774__$1 = ((((!((map__13774 == null)))?((((map__13774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13774):map__13774);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13774__$1,cljs.core.cst$kw$b);
var fingerprint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13774__$1,cljs.core.cst$kw$fingerprint);
return clostridium.befunge.reflect(b);
}),(function (nb){
var map__13776 = clostridium.befunge.makeFingerprint(nb);
var map__13776__$1 = ((((!((map__13776 == null)))?((((map__13776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13776):map__13776);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13776__$1,cljs.core.cst$kw$b);
var fingerprint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13776__$1,cljs.core.cst$kw$fingerprint);
return clostridium.befunge.reflect(b);
}),clostridium.befunge.mathop(cljs.core._STAR_),(function (nb){
var map__13778 = clostridium.befunge.removeFromStack(nb);
var map__13778__$1 = ((((!((map__13778 == null)))?((((map__13778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13778):map__13778);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13778__$1,cljs.core.cst$kw$b);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13778__$1,cljs.core.cst$kw$item);
var dir = (((item < (0)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__13778,map__13778__$1,b,item){
return (function (p1__13762_SHARP_){
return (p1__13762_SHARP_ * (-1));
});})(map__13778,map__13778__$1,b,item))
,cljs.core.cst$kw$dir.cljs$core$IFn$_invoke$arity$1(b)):cljs.core.cst$kw$dir.cljs$core$IFn$_invoke$arity$1(b));
var newI = (((item < (0)))?cljs.core.dec:cljs.core.inc);
var i = (0);
var b2 = b;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,item)){
return b2;
} else {
var G__13849 = (newI.cljs$core$IFn$_invoke$arity$1 ? newI.cljs$core$IFn$_invoke$arity$1(i) : newI.call(null,i));
var G__13850 = clostridium.befunge.updatePC.cljs$core$IFn$_invoke$arity$3(b2,true,dir);
i = G__13849;
b2 = G__13850;
continue;
}
break;
}
}),clostridium.befunge.mathop(cljs.core._PLUS_),(function (nb){
var nextinst = clostridium.befunge.current.cljs$core$IFn$_invoke$arity$1(clostridium.befunge.updatePC.cljs$core$IFn$_invoke$arity$1(nb));
var map__13780 = clostridium.befunge.removeFromStack(nb);
var map__13780__$1 = ((((!((map__13780 == null)))?((((map__13780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13780):map__13780);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13780__$1,cljs.core.cst$kw$b);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13780__$1,cljs.core.cst$kw$item);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,(0))){
return clostridium.befunge.updatePC.cljs$core$IFn$_invoke$arity$1(b);
} else {
var x = cljs.core.range.cljs$core$IFn$_invoke$arity$1(item);
var ret = b;
while(true){
if(cljs.core.empty_QMARK_(x)){
return ret;
} else {
var G__13851 = cljs.core.rest(x);
var G__13852 = clostridium.befunge.runInst(ret,nextinst);
x = G__13851;
ret = G__13852;
continue;
}
break;
}
}
}),(function (b){
var map__13782 = clostridium.befunge.removeFromStack(b);
var map__13782__$1 = ((((!((map__13782 == null)))?((((map__13782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13782):map__13782);
var b__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13782__$1,cljs.core.cst$kw$b);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13782__$1,cljs.core.cst$kw$item);
var G__13785_13853 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$(item))].join('');
var fexpr__13784_13854 = cljs.core.cst$kw$printfn.cljs$core$IFn$_invoke$arity$1(b__$1);
(fexpr__13784_13854.cljs$core$IFn$_invoke$arity$1 ? fexpr__13784_13854.cljs$core$IFn$_invoke$arity$1(G__13785_13853) : fexpr__13784_13854.call(null,G__13785_13853));

return b__$1;
}),clostridium.befunge.mathop(cljs.core._),(function (b){
var map__13786 = clostridium.befunge.removeFromStack(b);
var map__13786__$1 = ((((!((map__13786 == null)))?((((map__13786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13786):map__13786);
var b__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13786__$1,cljs.core.cst$kw$b);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13786__$1,cljs.core.cst$kw$item);
var G__13789_13855 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(item),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join('');
var fexpr__13788_13856 = cljs.core.cst$kw$printfn.cljs$core$IFn$_invoke$arity$1(b__$1);
(fexpr__13788_13856.cljs$core$IFn$_invoke$arity$1 ? fexpr__13788_13856.cljs$core$IFn$_invoke$arity$1(G__13789_13855) : fexpr__13788_13856.call(null,G__13789_13855));

return b__$1;
}),(function (b){
return clostridium.befunge.setNewToss(b,cljs.core.PersistentVector.EMPTY);
}),clostridium.befunge.mathop(cljs.core.quot),(function (nb){
var map__13790 = clostridium.befunge.removeManyFromStack(nb,(3));
var map__13790__$1 = ((((!((map__13790 == null)))?((((map__13790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13790):map__13790);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13790__$1,cljs.core.cst$kw$b);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13790__$1,cljs.core.cst$kw$items);
var vec__13791 = items;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13791,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13791,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13791,(2),null);
var vec__13794 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.cst$kw$storageOffset.cljs$core$IFn$_invoke$arity$1(b));
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13794,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13794,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$grid,clostridium.befunge.setVal(cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oy,ox], null),clostridium.befunge.clipChar(v)));
}),clostridium.befunge.reflect,(function (nb){
var map__13798 = clostridium.befunge.removeFromStack(clostridium.befunge.updatePC.cljs$core$IFn$_invoke$arity$2(nb,true));
var map__13798__$1 = ((((!((map__13798 == null)))?((((map__13798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13798):map__13798);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13798__$1,cljs.core.cst$kw$b);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13798__$1,cljs.core.cst$kw$item);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$grid,clostridium.befunge.setVal(cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(b),cljs.core.reverse(cljs.core.cst$kw$pc.cljs$core$IFn$_invoke$arity$1(b)),clostridium.befunge.clipChar(item)));
}),clostridium.befunge.reflect,(function (nb){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(clostridium.befunge.ross(nb)),(0))){
return clostridium.befunge.reflect(nb);
} else {
var map__13800 = clostridium.befunge.removeFromStack(nb);
var map__13800__$1 = ((((!((map__13800 == null)))?((((map__13800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13800):map__13800);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13800__$1,cljs.core.cst$kw$b);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13800__$1,cljs.core.cst$kw$item);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,(0))){
return b;
} else {
if((item > (0))){
var vec__13802 = clostridium.befunge.transfer(clostridium.befunge.soss(b),clostridium.befunge.toss(b),item,true);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13802,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13802,(1),null);
return clostridium.befunge.newTossAndSoss(b,t,s);
} else {
if((item < (0))){
var vec__13805 = clostridium.befunge.transfer(clostridium.befunge.toss(b),clostridium.befunge.soss(b),((-1) * item),true);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13805,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13805,(1),null);
return clostridium.befunge.newTossAndSoss(b,t,s);
} else {
return null;
}
}
}
}
}),(function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$dir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
}),(function (nb){
var map__13808 = clostridium.befunge.removeManyFromStack(nb,(2));
var map__13808__$1 = ((((!((map__13808 == null)))?((((map__13808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13808):map__13808);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13808__$1,cljs.core.cst$kw$b);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13808__$1,cljs.core.cst$kw$items);
var vec__13809 = items;
var one = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13809,(0),null);
var two = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13809,(1),null);
if((one < two)){
return clostridium.befunge.rotateCCW(b);
} else {
if((one > two)){
return clostridium.befunge.rotateCW(b);
} else {
return b;
}
}
}),(function (nb){
var map__13813 = clostridium.befunge.removeManyFromStack(nb,(2));
var map__13813__$1 = ((((!((map__13813 == null)))?((((map__13813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13813):map__13813);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13813__$1,cljs.core.cst$kw$b);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13813__$1,cljs.core.cst$kw$items);
var vec__13814 = items;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13814,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13814,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$dir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
}),(function (nb){
var cal = (new Date());
var map__13818 = clostridium.befunge.removeFromStack(nb);
var map__13818__$1 = ((((!((map__13818 == null)))?((((map__13818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13818):map__13818);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13818__$1,cljs.core.cst$kw$b);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13818__$1,cljs.core.cst$kw$item);
var info = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (cal,map__13818,map__13818__$1,b,item){
return (function (p1__13765_SHARP_,p2__13766_SHARP_){
var G__13820 = decimal.core.mul((256),p1__13765_SHARP_);
var G__13821 = decimal.core.decimal(p2__13766_SHARP_);
return (decimal.core._PLUS_.cljs$core$IFn$_invoke$arity$2 ? decimal.core._PLUS_.cljs$core$IFn$_invoke$arity$2(G__13820,G__13821) : decimal.core._PLUS_.call(null,G__13820,G__13821));
});})(cal,map__13818,map__13818__$1,b,item))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.int$,"Clostridium")),(100),(0),clostridium.befunge.charcode("/"),(2),(0),(0)], null),cljs.core.reverse(cljs.core.cst$kw$pc.cljs$core$IFn$_invoke$arity$1(b)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reverse(cljs.core.cst$kw$dir.cljs$core$IFn$_invoke$arity$1(b)),cljs.core.reverse(cljs.core.cst$kw$storageOffset.cljs$core$IFn$_invoke$arity$1(b)),clostridium.befunge.leastPoint(b),clostridium.befunge.greatestPoint(b),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((((256) * (256)) * cljs.core.cst$kw$year.cljs$core$IFn$_invoke$arity$1(cal)) + ((256) * (cljs.core.cst$kw$month.cljs$core$IFn$_invoke$arity$1(cal) + (1)))) + cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(cal)),(((((256) * (256)) * cljs.core.cst$kw$hours.cljs$core$IFn$_invoke$arity$1(cal)) + ((256) * cljs.core.cst$kw$minutes.cljs$core$IFn$_invoke$arity$1(cal))) + cljs.core.cst$kw$seconds.cljs$core$IFn$_invoke$arity$1(cal)),cljs.core.count(cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(b))], null),(function (){var iter__8428__auto__ = ((function (cal,map__13818,map__13818__$1,b,item){
return (function clostridium$befunge$iter__13822(s__13823){
return (new cljs.core.LazySeq(null,((function (cal,map__13818,map__13818__$1,b,item){
return (function (){
var s__13823__$1 = s__13823;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13823__$1);
if(temp__4657__auto__){
var s__13823__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13823__$2)){
var c__8426__auto__ = cljs.core.chunk_first(s__13823__$2);
var size__8427__auto__ = cljs.core.count(c__8426__auto__);
var b__13825 = cljs.core.chunk_buffer(size__8427__auto__);
if((function (){var i__13824 = (0);
while(true){
if((i__13824 < size__8427__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8426__auto__,i__13824);
cljs.core.chunk_append(b__13825,cljs.core.count(x));

var G__13857 = (i__13824 + (1));
i__13824 = G__13857;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13825),clostridium$befunge$iter__13822(cljs.core.chunk_rest(s__13823__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13825),null);
}
} else {
var x = cljs.core.first(s__13823__$2);
return cljs.core.cons(cljs.core.count(x),clostridium$befunge$iter__13822(cljs.core.rest(s__13823__$2)));
}
} else {
return null;
}
break;
}
});})(cal,map__13818,map__13818__$1,b,item))
,null,null));
});})(cal,map__13818,map__13818__$1,b,item))
;
return iter__8428__auto__(cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(b));
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((5),(0))], 0));
var newBoard = clostridium.befunge.setNewToss(nb,clostridium.befunge.pushMany(clostridium.befunge.toss(b),cljs.core.reverse(info)));
if((item > (0))){
var keptItem = cljs.core.peek(clostridium.befunge.popMany(clostridium.befunge.toss(newBoard),(item - (1))));
return clostridium.befunge.addToStack(b,keptItem);
} else {
return newBoard;
}
}),(function (nb){
var map__13826 = clostridium.befunge.removeFromStack(nb);
var map__13826__$1 = ((((!((map__13826 == null)))?((((map__13826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13826):map__13826);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13826__$1,cljs.core.cst$kw$b);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13826__$1,cljs.core.cst$kw$item);
return clostridium.befunge.addToStack(clostridium.befunge.addToStack(b,item),item);
}),(function (b){
return b;
}),clostridium.befunge.rotateCW,(function (nb){
var map__13828 = clostridium.befunge.removeFromStack(nb);
var map__13828__$1 = ((((!((map__13828 == null)))?((((map__13828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13828):map__13828);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13828__$1,cljs.core.cst$kw$b);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13828__$1,cljs.core.cst$kw$item);
var newBoard = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$stack,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stack.cljs$core$IFn$_invoke$arity$1(b),cljs.core.PersistentVector.EMPTY));
var vecConcat = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.concat);
var elementBoard = (((item < (0)))?clostridium.befunge.setNewSoss(newBoard,(function (){var G__13830 = clostridium.befunge.soss(newBoard);
var G__13831 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((-1) * item),(0));
return (vecConcat.cljs$core$IFn$_invoke$arity$2 ? vecConcat.cljs$core$IFn$_invoke$arity$2(G__13830,G__13831) : vecConcat.call(null,G__13830,G__13831));
})()):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,(0)))?newBoard:(((item > (0)))?(function (){var vec__13832 = clostridium.befunge.transfer(clostridium.befunge.soss(newBoard),clostridium.befunge.toss(newBoard),item,false);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13832,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13832,(1),null);
return clostridium.befunge.newTossAndSoss(newBoard,t,s);
})():null)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clostridium.befunge.setNewSoss(elementBoard,(function (){var G__13835 = clostridium.befunge.soss(elementBoard);
var G__13836 = cljs.core.cst$kw$storageOffset.cljs$core$IFn$_invoke$arity$1(elementBoard);
return (vecConcat.cljs$core$IFn$_invoke$arity$2 ? vecConcat.cljs$core$IFn$_invoke$arity$2(G__13835,G__13836) : vecConcat.call(null,G__13835,G__13836));
})()),cljs.core.cst$kw$storageOffset,clostridium.befunge.step.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pc.cljs$core$IFn$_invoke$arity$1(elementBoard),cljs.core.cst$kw$dir.cljs$core$IFn$_invoke$arity$1(elementBoard)));
}),(function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$dir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));
}),(function (b){
var one = clostridium.befunge.removeFromStack(b);
var two = clostridium.befunge.removeFromStack(cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(one));
return clostridium.befunge.addToStack(clostridium.befunge.addToStack(cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(two),cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(one)),cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(two));
}),(function (nb){
var map__13837 = clostridium.befunge.removeFromStack(nb);
var map__13837__$1 = ((((!((map__13837 == null)))?((((map__13837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13837):map__13837);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13837__$1,cljs.core.cst$kw$b);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13837__$1,cljs.core.cst$kw$item);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$dir,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,(0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)));
}),clostridium.befunge.rotateCCW,(function (nb){
var map__13839 = clostridium.befunge.removeFromStack(nb);
var map__13839__$1 = ((((!((map__13839 == null)))?((((map__13839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13839):map__13839);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13839__$1,cljs.core.cst$kw$b);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13839__$1,cljs.core.cst$kw$item);
var vec__13840 = clostridium.befunge.peekMany.cljs$core$IFn$_invoke$arity$2(clostridium.befunge.soss(b),(2));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13840,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13840,(1),null);
var newBoard = clostridium.befunge.setNewSoss(b,clostridium.befunge.popMany(clostridium.befunge.soss(b),(2)));
var vecConcat = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.concat);
var elementBoard = (((item < (0)))?clostridium.befunge.setNewSoss(newBoard,cljs.core.vec(clostridium.befunge.popMany(clostridium.befunge.soss(newBoard),((-1) * item)))):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,(0)))?newBoard:(((item > (0)))?(function (){var vec__13844 = clostridium.befunge.transfer(clostridium.befunge.toss(newBoard),clostridium.befunge.soss(newBoard),item,false);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13844,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13844,(1),null);
return clostridium.befunge.newTossAndSoss(newBoard,t,s);
})():null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(clostridium.befunge.ross(nb)),(0))){
return clostridium.befunge.reflect(nb);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elementBoard,cljs.core.cst$kw$stack,clostridium.befunge.ross(elementBoard)),cljs.core.cst$kw$storageOffset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}
}),(function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$dir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
}),(function (b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$dir,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
}),(function (nb){
var map__13847 = clostridium.befunge.removeFromStack(nb);
var map__13847__$1 = ((((!((map__13847 == null)))?((((map__13847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13847):map__13847);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13847__$1,cljs.core.cst$kw$b);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13847__$1,cljs.core.cst$kw$item);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b,cljs.core.cst$kw$dir,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,(0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)));
})])], 0));
clostridium.befunge.buildGridfromString = (function clostridium$befunge$buildGridfromString(data){
var fixedData = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__13858_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__13858_SHARP_,"\f");
}),data));
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(fixedData,/(?:(?:\r\n)|\n|\r)/);
return cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(lines)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (fixedData,lines){
return (function (p1__13859_SHARP_){
return cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(p1__13859_SHARP_)),cljs.core.vec(p1__13859_SHARP_));
});})(fixedData,lines))
,lines));
});
clostridium.befunge.makeInitial = (function clostridium$befunge$makeInitial(data,print_fn){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$dir,cljs.core.cst$kw$inst,cljs.core.cst$kw$grid,cljs.core.cst$kw$pc,cljs.core.cst$kw$running,cljs.core.cst$kw$stringMode,cljs.core.cst$kw$stack,cljs.core.cst$kw$storageOffset,cljs.core.cst$kw$printfn],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),clostridium.befunge.initialInstructions,clostridium.befunge.buildGridfromString(data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),true,false,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),print_fn]);
});
clostridium.befunge.doInst = (function clostridium$befunge$doInst(b){
var inst = cljs.core.char$(clostridium.befunge.current.cljs$core$IFn$_invoke$arity$1(b));
return clostridium.befunge.updatePC.cljs$core$IFn$_invoke$arity$1(clostridium.befunge.runInst(b,inst));
});
clostridium.befunge.doAndPrint = (function clostridium$befunge$doAndPrint(b){
var ret = clostridium.befunge.doInst(b);
return ret;
});
clostridium.befunge.print_fn = (function clostridium$befunge$print_fn(msg){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));

return cljs.core.flush();
});
clostridium.befunge.runBefunge = (function clostridium$befunge$runBefunge(data){
var b = clostridium.befunge.makeInitial(data,clostridium.befunge.print_fn);
while(true){
if(cljs.core.truth_(cljs.core.cst$kw$running.cljs$core$IFn$_invoke$arity$1(b))){
var G__13860 = clostridium.befunge.doAndPrint(b);
b = G__13860;
continue;
} else {
return null;
}
break;
}
});
