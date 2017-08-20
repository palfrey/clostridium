// Compiled by ClojureScript 1.9.854 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__27939__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__27939__auto__)){
return or__27939__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_30599 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_30599){
return (function (){
var _STAR_always_update_STAR_30600 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_30600;
}});})(_STAR_always_update_STAR_30599))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_30599;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__30602 = arguments.length;
switch (G__30602) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__30604_30608 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__30605_30609 = null;
var count__30606_30610 = (0);
var i__30607_30611 = (0);
while(true){
if((i__30607_30611 < count__30606_30610)){
var v_30612 = cljs.core._nth.call(null,chunk__30605_30609,i__30607_30611);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_30612);

var G__30613 = seq__30604_30608;
var G__30614 = chunk__30605_30609;
var G__30615 = count__30606_30610;
var G__30616 = (i__30607_30611 + (1));
seq__30604_30608 = G__30613;
chunk__30605_30609 = G__30614;
count__30606_30610 = G__30615;
i__30607_30611 = G__30616;
continue;
} else {
var temp__4657__auto___30617 = cljs.core.seq.call(null,seq__30604_30608);
if(temp__4657__auto___30617){
var seq__30604_30618__$1 = temp__4657__auto___30617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30604_30618__$1)){
var c__28773__auto___30619 = cljs.core.chunk_first.call(null,seq__30604_30618__$1);
var G__30620 = cljs.core.chunk_rest.call(null,seq__30604_30618__$1);
var G__30621 = c__28773__auto___30619;
var G__30622 = cljs.core.count.call(null,c__28773__auto___30619);
var G__30623 = (0);
seq__30604_30608 = G__30620;
chunk__30605_30609 = G__30621;
count__30606_30610 = G__30622;
i__30607_30611 = G__30623;
continue;
} else {
var v_30624 = cljs.core.first.call(null,seq__30604_30618__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_30624);

var G__30625 = cljs.core.next.call(null,seq__30604_30618__$1);
var G__30626 = null;
var G__30627 = (0);
var G__30628 = (0);
seq__30604_30608 = G__30625;
chunk__30605_30609 = G__30626;
count__30606_30610 = G__30627;
i__30607_30611 = G__30628;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1502751510038
