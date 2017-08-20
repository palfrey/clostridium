// Compiled by ClojureScript 1.9.854 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27939__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27939__auto__){
return or__27939__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27939__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__27939__auto__)){
return or__27939__auto__;
} else {
var or__27939__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__27939__auto____$1)){
return or__27939__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34869_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34869_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34870 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34871 = null;
var count__34872 = (0);
var i__34873 = (0);
while(true){
if((i__34873 < count__34872)){
var n = cljs.core._nth.call(null,chunk__34871,i__34873);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34874 = seq__34870;
var G__34875 = chunk__34871;
var G__34876 = count__34872;
var G__34877 = (i__34873 + (1));
seq__34870 = G__34874;
chunk__34871 = G__34875;
count__34872 = G__34876;
i__34873 = G__34877;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34870);
if(temp__4657__auto__){
var seq__34870__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34870__$1)){
var c__28773__auto__ = cljs.core.chunk_first.call(null,seq__34870__$1);
var G__34878 = cljs.core.chunk_rest.call(null,seq__34870__$1);
var G__34879 = c__28773__auto__;
var G__34880 = cljs.core.count.call(null,c__28773__auto__);
var G__34881 = (0);
seq__34870 = G__34878;
chunk__34871 = G__34879;
count__34872 = G__34880;
i__34873 = G__34881;
continue;
} else {
var n = cljs.core.first.call(null,seq__34870__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34882 = cljs.core.next.call(null,seq__34870__$1);
var G__34883 = null;
var G__34884 = (0);
var G__34885 = (0);
seq__34870 = G__34882;
chunk__34871 = G__34883;
count__34872 = G__34884;
i__34873 = G__34885;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34895_34903 = cljs.core.seq.call(null,deps);
var chunk__34896_34904 = null;
var count__34897_34905 = (0);
var i__34898_34906 = (0);
while(true){
if((i__34898_34906 < count__34897_34905)){
var dep_34907 = cljs.core._nth.call(null,chunk__34896_34904,i__34898_34906);
topo_sort_helper_STAR_.call(null,dep_34907,(depth + (1)),state);

var G__34908 = seq__34895_34903;
var G__34909 = chunk__34896_34904;
var G__34910 = count__34897_34905;
var G__34911 = (i__34898_34906 + (1));
seq__34895_34903 = G__34908;
chunk__34896_34904 = G__34909;
count__34897_34905 = G__34910;
i__34898_34906 = G__34911;
continue;
} else {
var temp__4657__auto___34912 = cljs.core.seq.call(null,seq__34895_34903);
if(temp__4657__auto___34912){
var seq__34895_34913__$1 = temp__4657__auto___34912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34895_34913__$1)){
var c__28773__auto___34914 = cljs.core.chunk_first.call(null,seq__34895_34913__$1);
var G__34915 = cljs.core.chunk_rest.call(null,seq__34895_34913__$1);
var G__34916 = c__28773__auto___34914;
var G__34917 = cljs.core.count.call(null,c__28773__auto___34914);
var G__34918 = (0);
seq__34895_34903 = G__34915;
chunk__34896_34904 = G__34916;
count__34897_34905 = G__34917;
i__34898_34906 = G__34918;
continue;
} else {
var dep_34919 = cljs.core.first.call(null,seq__34895_34913__$1);
topo_sort_helper_STAR_.call(null,dep_34919,(depth + (1)),state);

var G__34920 = cljs.core.next.call(null,seq__34895_34913__$1);
var G__34921 = null;
var G__34922 = (0);
var G__34923 = (0);
seq__34895_34903 = G__34920;
chunk__34896_34904 = G__34921;
count__34897_34905 = G__34922;
i__34898_34906 = G__34923;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34899){
var vec__34900 = p__34899;
var seq__34901 = cljs.core.seq.call(null,vec__34900);
var first__34902 = cljs.core.first.call(null,seq__34901);
var seq__34901__$1 = cljs.core.next.call(null,seq__34901);
var x = first__34902;
var xs = seq__34901__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34900,seq__34901,first__34902,seq__34901__$1,x,xs,get_deps__$1){
return (function (p1__34886_SHARP_){
return clojure.set.difference.call(null,p1__34886_SHARP_,x);
});})(vec__34900,seq__34901,first__34902,seq__34901__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34924 = cljs.core.seq.call(null,provides);
var chunk__34925 = null;
var count__34926 = (0);
var i__34927 = (0);
while(true){
if((i__34927 < count__34926)){
var prov = cljs.core._nth.call(null,chunk__34925,i__34927);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34928_34936 = cljs.core.seq.call(null,requires);
var chunk__34929_34937 = null;
var count__34930_34938 = (0);
var i__34931_34939 = (0);
while(true){
if((i__34931_34939 < count__34930_34938)){
var req_34940 = cljs.core._nth.call(null,chunk__34929_34937,i__34931_34939);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34940,prov);

var G__34941 = seq__34928_34936;
var G__34942 = chunk__34929_34937;
var G__34943 = count__34930_34938;
var G__34944 = (i__34931_34939 + (1));
seq__34928_34936 = G__34941;
chunk__34929_34937 = G__34942;
count__34930_34938 = G__34943;
i__34931_34939 = G__34944;
continue;
} else {
var temp__4657__auto___34945 = cljs.core.seq.call(null,seq__34928_34936);
if(temp__4657__auto___34945){
var seq__34928_34946__$1 = temp__4657__auto___34945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34928_34946__$1)){
var c__28773__auto___34947 = cljs.core.chunk_first.call(null,seq__34928_34946__$1);
var G__34948 = cljs.core.chunk_rest.call(null,seq__34928_34946__$1);
var G__34949 = c__28773__auto___34947;
var G__34950 = cljs.core.count.call(null,c__28773__auto___34947);
var G__34951 = (0);
seq__34928_34936 = G__34948;
chunk__34929_34937 = G__34949;
count__34930_34938 = G__34950;
i__34931_34939 = G__34951;
continue;
} else {
var req_34952 = cljs.core.first.call(null,seq__34928_34946__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34952,prov);

var G__34953 = cljs.core.next.call(null,seq__34928_34946__$1);
var G__34954 = null;
var G__34955 = (0);
var G__34956 = (0);
seq__34928_34936 = G__34953;
chunk__34929_34937 = G__34954;
count__34930_34938 = G__34955;
i__34931_34939 = G__34956;
continue;
}
} else {
}
}
break;
}

var G__34957 = seq__34924;
var G__34958 = chunk__34925;
var G__34959 = count__34926;
var G__34960 = (i__34927 + (1));
seq__34924 = G__34957;
chunk__34925 = G__34958;
count__34926 = G__34959;
i__34927 = G__34960;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34924);
if(temp__4657__auto__){
var seq__34924__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34924__$1)){
var c__28773__auto__ = cljs.core.chunk_first.call(null,seq__34924__$1);
var G__34961 = cljs.core.chunk_rest.call(null,seq__34924__$1);
var G__34962 = c__28773__auto__;
var G__34963 = cljs.core.count.call(null,c__28773__auto__);
var G__34964 = (0);
seq__34924 = G__34961;
chunk__34925 = G__34962;
count__34926 = G__34963;
i__34927 = G__34964;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34924__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34932_34965 = cljs.core.seq.call(null,requires);
var chunk__34933_34966 = null;
var count__34934_34967 = (0);
var i__34935_34968 = (0);
while(true){
if((i__34935_34968 < count__34934_34967)){
var req_34969 = cljs.core._nth.call(null,chunk__34933_34966,i__34935_34968);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34969,prov);

var G__34970 = seq__34932_34965;
var G__34971 = chunk__34933_34966;
var G__34972 = count__34934_34967;
var G__34973 = (i__34935_34968 + (1));
seq__34932_34965 = G__34970;
chunk__34933_34966 = G__34971;
count__34934_34967 = G__34972;
i__34935_34968 = G__34973;
continue;
} else {
var temp__4657__auto___34974__$1 = cljs.core.seq.call(null,seq__34932_34965);
if(temp__4657__auto___34974__$1){
var seq__34932_34975__$1 = temp__4657__auto___34974__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34932_34975__$1)){
var c__28773__auto___34976 = cljs.core.chunk_first.call(null,seq__34932_34975__$1);
var G__34977 = cljs.core.chunk_rest.call(null,seq__34932_34975__$1);
var G__34978 = c__28773__auto___34976;
var G__34979 = cljs.core.count.call(null,c__28773__auto___34976);
var G__34980 = (0);
seq__34932_34965 = G__34977;
chunk__34933_34966 = G__34978;
count__34934_34967 = G__34979;
i__34935_34968 = G__34980;
continue;
} else {
var req_34981 = cljs.core.first.call(null,seq__34932_34975__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34981,prov);

var G__34982 = cljs.core.next.call(null,seq__34932_34975__$1);
var G__34983 = null;
var G__34984 = (0);
var G__34985 = (0);
seq__34932_34965 = G__34982;
chunk__34933_34966 = G__34983;
count__34934_34967 = G__34984;
i__34935_34968 = G__34985;
continue;
}
} else {
}
}
break;
}

var G__34986 = cljs.core.next.call(null,seq__34924__$1);
var G__34987 = null;
var G__34988 = (0);
var G__34989 = (0);
seq__34924 = G__34986;
chunk__34925 = G__34987;
count__34926 = G__34988;
i__34927 = G__34989;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34990_34994 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34991_34995 = null;
var count__34992_34996 = (0);
var i__34993_34997 = (0);
while(true){
if((i__34993_34997 < count__34992_34996)){
var ns_34998 = cljs.core._nth.call(null,chunk__34991_34995,i__34993_34997);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34998);

var G__34999 = seq__34990_34994;
var G__35000 = chunk__34991_34995;
var G__35001 = count__34992_34996;
var G__35002 = (i__34993_34997 + (1));
seq__34990_34994 = G__34999;
chunk__34991_34995 = G__35000;
count__34992_34996 = G__35001;
i__34993_34997 = G__35002;
continue;
} else {
var temp__4657__auto___35003 = cljs.core.seq.call(null,seq__34990_34994);
if(temp__4657__auto___35003){
var seq__34990_35004__$1 = temp__4657__auto___35003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34990_35004__$1)){
var c__28773__auto___35005 = cljs.core.chunk_first.call(null,seq__34990_35004__$1);
var G__35006 = cljs.core.chunk_rest.call(null,seq__34990_35004__$1);
var G__35007 = c__28773__auto___35005;
var G__35008 = cljs.core.count.call(null,c__28773__auto___35005);
var G__35009 = (0);
seq__34990_34994 = G__35006;
chunk__34991_34995 = G__35007;
count__34992_34996 = G__35008;
i__34993_34997 = G__35009;
continue;
} else {
var ns_35010 = cljs.core.first.call(null,seq__34990_35004__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35010);

var G__35011 = cljs.core.next.call(null,seq__34990_35004__$1);
var G__35012 = null;
var G__35013 = (0);
var G__35014 = (0);
seq__34990_34994 = G__35011;
chunk__34991_34995 = G__35012;
count__34992_34996 = G__35013;
i__34993_34997 = G__35014;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__27939__auto__ = goog.require__;
if(cljs.core.truth_(or__27939__auto__)){
return or__27939__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35015__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35015 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35016__i = 0, G__35016__a = new Array(arguments.length -  0);
while (G__35016__i < G__35016__a.length) {G__35016__a[G__35016__i] = arguments[G__35016__i + 0]; ++G__35016__i;}
  args = new cljs.core.IndexedSeq(G__35016__a,0,null);
} 
return G__35015__delegate.call(this,args);};
G__35015.cljs$lang$maxFixedArity = 0;
G__35015.cljs$lang$applyTo = (function (arglist__35017){
var args = cljs.core.seq(arglist__35017);
return G__35015__delegate(args);
});
G__35015.cljs$core$IFn$_invoke$arity$variadic = G__35015__delegate;
return G__35015;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35018 = cljs.core._EQ_;
var expr__35019 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35018.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35019))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35018,expr__35019){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35018,expr__35019))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35018,expr__35019){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35021){if((e35021 instanceof Error)){
var e = e35021;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35021;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35018,expr__35019))
} else {
if(cljs.core.truth_(pred__35018.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35019))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35018.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__35019))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35018.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35019))){
return ((function (pred__35018,expr__35019){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35022){if((e35022 instanceof Error)){
var e = e35022;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35022;

}
}})());
});
;})(pred__35018,expr__35019))
} else {
return ((function (pred__35018,expr__35019){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35018,expr__35019))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35023,callback){
var map__35024 = p__35023;
var map__35024__$1 = ((((!((map__35024 == null)))?((((map__35024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35024):map__35024);
var file_msg = map__35024__$1;
var request_url = cljs.core.get.call(null,map__35024__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35024,map__35024__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35024,map__35024__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto__){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto__){
return (function (state_35048){
var state_val_35049 = (state_35048[(1)]);
if((state_val_35049 === (7))){
var inst_35044 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
var statearr_35050_35067 = state_35048__$1;
(statearr_35050_35067[(2)] = inst_35044);

(statearr_35050_35067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (1))){
var state_35048__$1 = state_35048;
var statearr_35051_35068 = state_35048__$1;
(statearr_35051_35068[(2)] = null);

(statearr_35051_35068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (4))){
var inst_35028 = (state_35048[(7)]);
var inst_35028__$1 = (state_35048[(2)]);
var state_35048__$1 = (function (){var statearr_35052 = state_35048;
(statearr_35052[(7)] = inst_35028__$1);

return statearr_35052;
})();
if(cljs.core.truth_(inst_35028__$1)){
var statearr_35053_35069 = state_35048__$1;
(statearr_35053_35069[(1)] = (5));

} else {
var statearr_35054_35070 = state_35048__$1;
(statearr_35054_35070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (6))){
var state_35048__$1 = state_35048;
var statearr_35055_35071 = state_35048__$1;
(statearr_35055_35071[(2)] = null);

(statearr_35055_35071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (3))){
var inst_35046 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35048__$1,inst_35046);
} else {
if((state_val_35049 === (2))){
var state_35048__$1 = state_35048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35048__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35049 === (11))){
var inst_35040 = (state_35048[(2)]);
var state_35048__$1 = (function (){var statearr_35056 = state_35048;
(statearr_35056[(8)] = inst_35040);

return statearr_35056;
})();
var statearr_35057_35072 = state_35048__$1;
(statearr_35057_35072[(2)] = null);

(statearr_35057_35072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (9))){
var inst_35032 = (state_35048[(9)]);
var inst_35034 = (state_35048[(10)]);
var inst_35036 = inst_35034.call(null,inst_35032);
var state_35048__$1 = state_35048;
var statearr_35058_35073 = state_35048__$1;
(statearr_35058_35073[(2)] = inst_35036);

(statearr_35058_35073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (5))){
var inst_35028 = (state_35048[(7)]);
var inst_35030 = figwheel.client.file_reloading.blocking_load.call(null,inst_35028);
var state_35048__$1 = state_35048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35048__$1,(8),inst_35030);
} else {
if((state_val_35049 === (10))){
var inst_35032 = (state_35048[(9)]);
var inst_35038 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35032);
var state_35048__$1 = state_35048;
var statearr_35059_35074 = state_35048__$1;
(statearr_35059_35074[(2)] = inst_35038);

(statearr_35059_35074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (8))){
var inst_35034 = (state_35048[(10)]);
var inst_35028 = (state_35048[(7)]);
var inst_35032 = (state_35048[(2)]);
var inst_35033 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35034__$1 = cljs.core.get.call(null,inst_35033,inst_35028);
var state_35048__$1 = (function (){var statearr_35060 = state_35048;
(statearr_35060[(9)] = inst_35032);

(statearr_35060[(10)] = inst_35034__$1);

return statearr_35060;
})();
if(cljs.core.truth_(inst_35034__$1)){
var statearr_35061_35075 = state_35048__$1;
(statearr_35061_35075[(1)] = (9));

} else {
var statearr_35062_35076 = state_35048__$1;
(statearr_35062_35076[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__31699__auto__))
;
return ((function (switch__31611__auto__,c__31699__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31612__auto__ = null;
var figwheel$client$file_reloading$state_machine__31612__auto____0 = (function (){
var statearr_35063 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35063[(0)] = figwheel$client$file_reloading$state_machine__31612__auto__);

(statearr_35063[(1)] = (1));

return statearr_35063;
});
var figwheel$client$file_reloading$state_machine__31612__auto____1 = (function (state_35048){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_35048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e35064){if((e35064 instanceof Object)){
var ex__31615__auto__ = e35064;
var statearr_35065_35077 = state_35048;
(statearr_35065_35077[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35078 = state_35048;
state_35048 = G__35078;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31612__auto__ = function(state_35048){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31612__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31612__auto____1.call(this,state_35048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31612__auto____0;
figwheel$client$file_reloading$state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31612__auto____1;
return figwheel$client$file_reloading$state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto__))
})();
var state__31701__auto__ = (function (){var statearr_35066 = f__31700__auto__.call(null);
(statearr_35066[(6)] = c__31699__auto__);

return statearr_35066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto__))
);

return c__31699__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35079,callback){
var map__35080 = p__35079;
var map__35080__$1 = ((((!((map__35080 == null)))?((((map__35080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35080):map__35080);
var file_msg = map__35080__$1;
var namespace = cljs.core.get.call(null,map__35080__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35080,map__35080__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35080,map__35080__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35082){
var map__35083 = p__35082;
var map__35083__$1 = ((((!((map__35083 == null)))?((((map__35083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35083):map__35083);
var file_msg = map__35083__$1;
var namespace = cljs.core.get.call(null,map__35083__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35085){
var map__35086 = p__35085;
var map__35086__$1 = ((((!((map__35086 == null)))?((((map__35086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35086):map__35086);
var file_msg = map__35086__$1;
var namespace = cljs.core.get.call(null,map__35086__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27927__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27927__auto__){
var or__27939__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27939__auto__)){
return or__27939__auto__;
} else {
var or__27939__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27939__auto____$1)){
return or__27939__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27927__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35088,callback){
var map__35089 = p__35088;
var map__35089__$1 = ((((!((map__35089 == null)))?((((map__35089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35089):map__35089);
var file_msg = map__35089__$1;
var request_url = cljs.core.get.call(null,map__35089__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35089__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31699__auto___35139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto___35139,out){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto___35139,out){
return (function (state_35124){
var state_val_35125 = (state_35124[(1)]);
if((state_val_35125 === (1))){
var inst_35098 = cljs.core.seq.call(null,files);
var inst_35099 = cljs.core.first.call(null,inst_35098);
var inst_35100 = cljs.core.next.call(null,inst_35098);
var inst_35101 = files;
var state_35124__$1 = (function (){var statearr_35126 = state_35124;
(statearr_35126[(7)] = inst_35101);

(statearr_35126[(8)] = inst_35099);

(statearr_35126[(9)] = inst_35100);

return statearr_35126;
})();
var statearr_35127_35140 = state_35124__$1;
(statearr_35127_35140[(2)] = null);

(statearr_35127_35140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35125 === (2))){
var inst_35107 = (state_35124[(10)]);
var inst_35101 = (state_35124[(7)]);
var inst_35106 = cljs.core.seq.call(null,inst_35101);
var inst_35107__$1 = cljs.core.first.call(null,inst_35106);
var inst_35108 = cljs.core.next.call(null,inst_35106);
var inst_35109 = (inst_35107__$1 == null);
var inst_35110 = cljs.core.not.call(null,inst_35109);
var state_35124__$1 = (function (){var statearr_35128 = state_35124;
(statearr_35128[(10)] = inst_35107__$1);

(statearr_35128[(11)] = inst_35108);

return statearr_35128;
})();
if(inst_35110){
var statearr_35129_35141 = state_35124__$1;
(statearr_35129_35141[(1)] = (4));

} else {
var statearr_35130_35142 = state_35124__$1;
(statearr_35130_35142[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35125 === (3))){
var inst_35122 = (state_35124[(2)]);
var state_35124__$1 = state_35124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35124__$1,inst_35122);
} else {
if((state_val_35125 === (4))){
var inst_35107 = (state_35124[(10)]);
var inst_35112 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35107);
var state_35124__$1 = state_35124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35124__$1,(7),inst_35112);
} else {
if((state_val_35125 === (5))){
var inst_35118 = cljs.core.async.close_BANG_.call(null,out);
var state_35124__$1 = state_35124;
var statearr_35131_35143 = state_35124__$1;
(statearr_35131_35143[(2)] = inst_35118);

(statearr_35131_35143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35125 === (6))){
var inst_35120 = (state_35124[(2)]);
var state_35124__$1 = state_35124;
var statearr_35132_35144 = state_35124__$1;
(statearr_35132_35144[(2)] = inst_35120);

(statearr_35132_35144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35125 === (7))){
var inst_35108 = (state_35124[(11)]);
var inst_35114 = (state_35124[(2)]);
var inst_35115 = cljs.core.async.put_BANG_.call(null,out,inst_35114);
var inst_35101 = inst_35108;
var state_35124__$1 = (function (){var statearr_35133 = state_35124;
(statearr_35133[(12)] = inst_35115);

(statearr_35133[(7)] = inst_35101);

return statearr_35133;
})();
var statearr_35134_35145 = state_35124__$1;
(statearr_35134_35145[(2)] = null);

(statearr_35134_35145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__31699__auto___35139,out))
;
return ((function (switch__31611__auto__,c__31699__auto___35139,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31612__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31612__auto____0 = (function (){
var statearr_35135 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35135[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31612__auto__);

(statearr_35135[(1)] = (1));

return statearr_35135;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31612__auto____1 = (function (state_35124){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_35124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e35136){if((e35136 instanceof Object)){
var ex__31615__auto__ = e35136;
var statearr_35137_35146 = state_35124;
(statearr_35137_35146[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35147 = state_35124;
state_35124 = G__35147;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31612__auto__ = function(state_35124){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31612__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31612__auto____1.call(this,state_35124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31612__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31612__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto___35139,out))
})();
var state__31701__auto__ = (function (){var statearr_35138 = f__31700__auto__.call(null);
(statearr_35138[(6)] = c__31699__auto___35139);

return statearr_35138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto___35139,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35148,opts){
var map__35149 = p__35148;
var map__35149__$1 = ((((!((map__35149 == null)))?((((map__35149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35149):map__35149);
var eval_body = cljs.core.get.call(null,map__35149__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35149__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27927__auto__ = eval_body;
if(cljs.core.truth_(and__27927__auto__)){
return typeof eval_body === 'string';
} else {
return and__27927__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35151){var e = e35151;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35152_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35152_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35153){
var vec__35154 = p__35153;
var k = cljs.core.nth.call(null,vec__35154,(0),null);
var v = cljs.core.nth.call(null,vec__35154,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35157){
var vec__35158 = p__35157;
var k = cljs.core.nth.call(null,vec__35158,(0),null);
var v = cljs.core.nth.call(null,vec__35158,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35164,p__35165){
var map__35166 = p__35164;
var map__35166__$1 = ((((!((map__35166 == null)))?((((map__35166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35166):map__35166);
var opts = map__35166__$1;
var before_jsload = cljs.core.get.call(null,map__35166__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35166__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35166__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35167 = p__35165;
var map__35167__$1 = ((((!((map__35167 == null)))?((((map__35167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35167):map__35167);
var msg = map__35167__$1;
var files = cljs.core.get.call(null,map__35167__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35167__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35167__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31700__auto__ = (function (){var switch__31611__auto__ = ((function (c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35321){
var state_val_35322 = (state_35321[(1)]);
if((state_val_35322 === (7))){
var inst_35181 = (state_35321[(7)]);
var inst_35182 = (state_35321[(8)]);
var inst_35183 = (state_35321[(9)]);
var inst_35184 = (state_35321[(10)]);
var inst_35189 = cljs.core._nth.call(null,inst_35182,inst_35184);
var inst_35190 = figwheel.client.file_reloading.eval_body.call(null,inst_35189,opts);
var inst_35191 = (inst_35184 + (1));
var tmp35323 = inst_35181;
var tmp35324 = inst_35182;
var tmp35325 = inst_35183;
var inst_35181__$1 = tmp35323;
var inst_35182__$1 = tmp35324;
var inst_35183__$1 = tmp35325;
var inst_35184__$1 = inst_35191;
var state_35321__$1 = (function (){var statearr_35326 = state_35321;
(statearr_35326[(11)] = inst_35190);

(statearr_35326[(7)] = inst_35181__$1);

(statearr_35326[(8)] = inst_35182__$1);

(statearr_35326[(9)] = inst_35183__$1);

(statearr_35326[(10)] = inst_35184__$1);

return statearr_35326;
})();
var statearr_35327_35410 = state_35321__$1;
(statearr_35327_35410[(2)] = null);

(statearr_35327_35410[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (20))){
var inst_35224 = (state_35321[(12)]);
var inst_35232 = figwheel.client.file_reloading.sort_files.call(null,inst_35224);
var state_35321__$1 = state_35321;
var statearr_35328_35411 = state_35321__$1;
(statearr_35328_35411[(2)] = inst_35232);

(statearr_35328_35411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (27))){
var state_35321__$1 = state_35321;
var statearr_35329_35412 = state_35321__$1;
(statearr_35329_35412[(2)] = null);

(statearr_35329_35412[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (1))){
var inst_35173 = (state_35321[(13)]);
var inst_35170 = before_jsload.call(null,files);
var inst_35171 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35172 = (function (){return ((function (inst_35173,inst_35170,inst_35171,state_val_35322,c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35161_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35161_SHARP_);
});
;})(inst_35173,inst_35170,inst_35171,state_val_35322,c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35173__$1 = cljs.core.filter.call(null,inst_35172,files);
var inst_35174 = cljs.core.not_empty.call(null,inst_35173__$1);
var state_35321__$1 = (function (){var statearr_35330 = state_35321;
(statearr_35330[(14)] = inst_35170);

(statearr_35330[(15)] = inst_35171);

(statearr_35330[(13)] = inst_35173__$1);

return statearr_35330;
})();
if(cljs.core.truth_(inst_35174)){
var statearr_35331_35413 = state_35321__$1;
(statearr_35331_35413[(1)] = (2));

} else {
var statearr_35332_35414 = state_35321__$1;
(statearr_35332_35414[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (24))){
var state_35321__$1 = state_35321;
var statearr_35333_35415 = state_35321__$1;
(statearr_35333_35415[(2)] = null);

(statearr_35333_35415[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (39))){
var inst_35274 = (state_35321[(16)]);
var state_35321__$1 = state_35321;
var statearr_35334_35416 = state_35321__$1;
(statearr_35334_35416[(2)] = inst_35274);

(statearr_35334_35416[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (46))){
var inst_35316 = (state_35321[(2)]);
var state_35321__$1 = state_35321;
var statearr_35335_35417 = state_35321__$1;
(statearr_35335_35417[(2)] = inst_35316);

(statearr_35335_35417[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (4))){
var inst_35218 = (state_35321[(2)]);
var inst_35219 = cljs.core.List.EMPTY;
var inst_35220 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35219);
var inst_35221 = (function (){return ((function (inst_35218,inst_35219,inst_35220,state_val_35322,c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35162_SHARP_){
var and__27927__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35162_SHARP_);
if(cljs.core.truth_(and__27927__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35162_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35162_SHARP_)));
} else {
return and__27927__auto__;
}
});
;})(inst_35218,inst_35219,inst_35220,state_val_35322,c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35222 = cljs.core.filter.call(null,inst_35221,files);
var inst_35223 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35224 = cljs.core.concat.call(null,inst_35222,inst_35223);
var state_35321__$1 = (function (){var statearr_35336 = state_35321;
(statearr_35336[(12)] = inst_35224);

(statearr_35336[(17)] = inst_35218);

(statearr_35336[(18)] = inst_35220);

return statearr_35336;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35337_35418 = state_35321__$1;
(statearr_35337_35418[(1)] = (16));

} else {
var statearr_35338_35419 = state_35321__$1;
(statearr_35338_35419[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (15))){
var inst_35208 = (state_35321[(2)]);
var state_35321__$1 = state_35321;
var statearr_35339_35420 = state_35321__$1;
(statearr_35339_35420[(2)] = inst_35208);

(statearr_35339_35420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (21))){
var inst_35234 = (state_35321[(19)]);
var inst_35234__$1 = (state_35321[(2)]);
var inst_35235 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35234__$1);
var state_35321__$1 = (function (){var statearr_35340 = state_35321;
(statearr_35340[(19)] = inst_35234__$1);

return statearr_35340;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35321__$1,(22),inst_35235);
} else {
if((state_val_35322 === (31))){
var inst_35319 = (state_35321[(2)]);
var state_35321__$1 = state_35321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35321__$1,inst_35319);
} else {
if((state_val_35322 === (32))){
var inst_35274 = (state_35321[(16)]);
var inst_35279 = inst_35274.cljs$lang$protocol_mask$partition0$;
var inst_35280 = (inst_35279 & (64));
var inst_35281 = inst_35274.cljs$core$ISeq$;
var inst_35282 = (cljs.core.PROTOCOL_SENTINEL === inst_35281);
var inst_35283 = (inst_35280) || (inst_35282);
var state_35321__$1 = state_35321;
if(cljs.core.truth_(inst_35283)){
var statearr_35341_35421 = state_35321__$1;
(statearr_35341_35421[(1)] = (35));

} else {
var statearr_35342_35422 = state_35321__$1;
(statearr_35342_35422[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (40))){
var inst_35296 = (state_35321[(20)]);
var inst_35295 = (state_35321[(2)]);
var inst_35296__$1 = cljs.core.get.call(null,inst_35295,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35297 = cljs.core.get.call(null,inst_35295,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35298 = cljs.core.not_empty.call(null,inst_35296__$1);
var state_35321__$1 = (function (){var statearr_35343 = state_35321;
(statearr_35343[(20)] = inst_35296__$1);

(statearr_35343[(21)] = inst_35297);

return statearr_35343;
})();
if(cljs.core.truth_(inst_35298)){
var statearr_35344_35423 = state_35321__$1;
(statearr_35344_35423[(1)] = (41));

} else {
var statearr_35345_35424 = state_35321__$1;
(statearr_35345_35424[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (33))){
var state_35321__$1 = state_35321;
var statearr_35346_35425 = state_35321__$1;
(statearr_35346_35425[(2)] = false);

(statearr_35346_35425[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (13))){
var inst_35194 = (state_35321[(22)]);
var inst_35198 = cljs.core.chunk_first.call(null,inst_35194);
var inst_35199 = cljs.core.chunk_rest.call(null,inst_35194);
var inst_35200 = cljs.core.count.call(null,inst_35198);
var inst_35181 = inst_35199;
var inst_35182 = inst_35198;
var inst_35183 = inst_35200;
var inst_35184 = (0);
var state_35321__$1 = (function (){var statearr_35347 = state_35321;
(statearr_35347[(7)] = inst_35181);

(statearr_35347[(8)] = inst_35182);

(statearr_35347[(9)] = inst_35183);

(statearr_35347[(10)] = inst_35184);

return statearr_35347;
})();
var statearr_35348_35426 = state_35321__$1;
(statearr_35348_35426[(2)] = null);

(statearr_35348_35426[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (22))){
var inst_35238 = (state_35321[(23)]);
var inst_35242 = (state_35321[(24)]);
var inst_35237 = (state_35321[(25)]);
var inst_35234 = (state_35321[(19)]);
var inst_35237__$1 = (state_35321[(2)]);
var inst_35238__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35237__$1);
var inst_35239 = (function (){var all_files = inst_35234;
var res_SINGLEQUOTE_ = inst_35237__$1;
var res = inst_35238__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35238,inst_35242,inst_35237,inst_35234,inst_35237__$1,inst_35238__$1,state_val_35322,c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35163_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35163_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35238,inst_35242,inst_35237,inst_35234,inst_35237__$1,inst_35238__$1,state_val_35322,c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35240 = cljs.core.filter.call(null,inst_35239,inst_35237__$1);
var inst_35241 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35242__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35241);
var inst_35243 = cljs.core.not_empty.call(null,inst_35242__$1);
var state_35321__$1 = (function (){var statearr_35349 = state_35321;
(statearr_35349[(23)] = inst_35238__$1);

(statearr_35349[(24)] = inst_35242__$1);

(statearr_35349[(25)] = inst_35237__$1);

(statearr_35349[(26)] = inst_35240);

return statearr_35349;
})();
if(cljs.core.truth_(inst_35243)){
var statearr_35350_35427 = state_35321__$1;
(statearr_35350_35427[(1)] = (23));

} else {
var statearr_35351_35428 = state_35321__$1;
(statearr_35351_35428[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (36))){
var state_35321__$1 = state_35321;
var statearr_35352_35429 = state_35321__$1;
(statearr_35352_35429[(2)] = false);

(statearr_35352_35429[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (41))){
var inst_35296 = (state_35321[(20)]);
var inst_35300 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35301 = cljs.core.map.call(null,inst_35300,inst_35296);
var inst_35302 = cljs.core.pr_str.call(null,inst_35301);
var inst_35303 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35302)].join('');
var inst_35304 = figwheel.client.utils.log.call(null,inst_35303);
var state_35321__$1 = state_35321;
var statearr_35353_35430 = state_35321__$1;
(statearr_35353_35430[(2)] = inst_35304);

(statearr_35353_35430[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (43))){
var inst_35297 = (state_35321[(21)]);
var inst_35307 = (state_35321[(2)]);
var inst_35308 = cljs.core.not_empty.call(null,inst_35297);
var state_35321__$1 = (function (){var statearr_35354 = state_35321;
(statearr_35354[(27)] = inst_35307);

return statearr_35354;
})();
if(cljs.core.truth_(inst_35308)){
var statearr_35355_35431 = state_35321__$1;
(statearr_35355_35431[(1)] = (44));

} else {
var statearr_35356_35432 = state_35321__$1;
(statearr_35356_35432[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (29))){
var inst_35238 = (state_35321[(23)]);
var inst_35242 = (state_35321[(24)]);
var inst_35237 = (state_35321[(25)]);
var inst_35274 = (state_35321[(16)]);
var inst_35234 = (state_35321[(19)]);
var inst_35240 = (state_35321[(26)]);
var inst_35270 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35273 = (function (){var all_files = inst_35234;
var res_SINGLEQUOTE_ = inst_35237;
var res = inst_35238;
var files_not_loaded = inst_35240;
var dependencies_that_loaded = inst_35242;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35238,inst_35242,inst_35237,inst_35274,inst_35234,inst_35240,inst_35270,state_val_35322,c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35272){
var map__35357 = p__35272;
var map__35357__$1 = ((((!((map__35357 == null)))?((((map__35357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35357.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35357):map__35357);
var namespace = cljs.core.get.call(null,map__35357__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35238,inst_35242,inst_35237,inst_35274,inst_35234,inst_35240,inst_35270,state_val_35322,c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35274__$1 = cljs.core.group_by.call(null,inst_35273,inst_35240);
var inst_35276 = (inst_35274__$1 == null);
var inst_35277 = cljs.core.not.call(null,inst_35276);
var state_35321__$1 = (function (){var statearr_35359 = state_35321;
(statearr_35359[(28)] = inst_35270);

(statearr_35359[(16)] = inst_35274__$1);

return statearr_35359;
})();
if(inst_35277){
var statearr_35360_35433 = state_35321__$1;
(statearr_35360_35433[(1)] = (32));

} else {
var statearr_35361_35434 = state_35321__$1;
(statearr_35361_35434[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (44))){
var inst_35297 = (state_35321[(21)]);
var inst_35310 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35297);
var inst_35311 = cljs.core.pr_str.call(null,inst_35310);
var inst_35312 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35311)].join('');
var inst_35313 = figwheel.client.utils.log.call(null,inst_35312);
var state_35321__$1 = state_35321;
var statearr_35362_35435 = state_35321__$1;
(statearr_35362_35435[(2)] = inst_35313);

(statearr_35362_35435[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (6))){
var inst_35215 = (state_35321[(2)]);
var state_35321__$1 = state_35321;
var statearr_35363_35436 = state_35321__$1;
(statearr_35363_35436[(2)] = inst_35215);

(statearr_35363_35436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (28))){
var inst_35240 = (state_35321[(26)]);
var inst_35267 = (state_35321[(2)]);
var inst_35268 = cljs.core.not_empty.call(null,inst_35240);
var state_35321__$1 = (function (){var statearr_35364 = state_35321;
(statearr_35364[(29)] = inst_35267);

return statearr_35364;
})();
if(cljs.core.truth_(inst_35268)){
var statearr_35365_35437 = state_35321__$1;
(statearr_35365_35437[(1)] = (29));

} else {
var statearr_35366_35438 = state_35321__$1;
(statearr_35366_35438[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (25))){
var inst_35238 = (state_35321[(23)]);
var inst_35254 = (state_35321[(2)]);
var inst_35255 = cljs.core.not_empty.call(null,inst_35238);
var state_35321__$1 = (function (){var statearr_35367 = state_35321;
(statearr_35367[(30)] = inst_35254);

return statearr_35367;
})();
if(cljs.core.truth_(inst_35255)){
var statearr_35368_35439 = state_35321__$1;
(statearr_35368_35439[(1)] = (26));

} else {
var statearr_35369_35440 = state_35321__$1;
(statearr_35369_35440[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (34))){
var inst_35290 = (state_35321[(2)]);
var state_35321__$1 = state_35321;
if(cljs.core.truth_(inst_35290)){
var statearr_35370_35441 = state_35321__$1;
(statearr_35370_35441[(1)] = (38));

} else {
var statearr_35371_35442 = state_35321__$1;
(statearr_35371_35442[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (17))){
var state_35321__$1 = state_35321;
var statearr_35372_35443 = state_35321__$1;
(statearr_35372_35443[(2)] = recompile_dependents);

(statearr_35372_35443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (3))){
var state_35321__$1 = state_35321;
var statearr_35373_35444 = state_35321__$1;
(statearr_35373_35444[(2)] = null);

(statearr_35373_35444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (12))){
var inst_35211 = (state_35321[(2)]);
var state_35321__$1 = state_35321;
var statearr_35374_35445 = state_35321__$1;
(statearr_35374_35445[(2)] = inst_35211);

(statearr_35374_35445[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (2))){
var inst_35173 = (state_35321[(13)]);
var inst_35180 = cljs.core.seq.call(null,inst_35173);
var inst_35181 = inst_35180;
var inst_35182 = null;
var inst_35183 = (0);
var inst_35184 = (0);
var state_35321__$1 = (function (){var statearr_35375 = state_35321;
(statearr_35375[(7)] = inst_35181);

(statearr_35375[(8)] = inst_35182);

(statearr_35375[(9)] = inst_35183);

(statearr_35375[(10)] = inst_35184);

return statearr_35375;
})();
var statearr_35376_35446 = state_35321__$1;
(statearr_35376_35446[(2)] = null);

(statearr_35376_35446[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (23))){
var inst_35238 = (state_35321[(23)]);
var inst_35242 = (state_35321[(24)]);
var inst_35237 = (state_35321[(25)]);
var inst_35234 = (state_35321[(19)]);
var inst_35240 = (state_35321[(26)]);
var inst_35245 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35247 = (function (){var all_files = inst_35234;
var res_SINGLEQUOTE_ = inst_35237;
var res = inst_35238;
var files_not_loaded = inst_35240;
var dependencies_that_loaded = inst_35242;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35238,inst_35242,inst_35237,inst_35234,inst_35240,inst_35245,state_val_35322,c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35246){
var map__35377 = p__35246;
var map__35377__$1 = ((((!((map__35377 == null)))?((((map__35377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35377):map__35377);
var request_url = cljs.core.get.call(null,map__35377__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35238,inst_35242,inst_35237,inst_35234,inst_35240,inst_35245,state_val_35322,c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35248 = cljs.core.reverse.call(null,inst_35242);
var inst_35249 = cljs.core.map.call(null,inst_35247,inst_35248);
var inst_35250 = cljs.core.pr_str.call(null,inst_35249);
var inst_35251 = figwheel.client.utils.log.call(null,inst_35250);
var state_35321__$1 = (function (){var statearr_35379 = state_35321;
(statearr_35379[(31)] = inst_35245);

return statearr_35379;
})();
var statearr_35380_35447 = state_35321__$1;
(statearr_35380_35447[(2)] = inst_35251);

(statearr_35380_35447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (35))){
var state_35321__$1 = state_35321;
var statearr_35381_35448 = state_35321__$1;
(statearr_35381_35448[(2)] = true);

(statearr_35381_35448[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (19))){
var inst_35224 = (state_35321[(12)]);
var inst_35230 = figwheel.client.file_reloading.expand_files.call(null,inst_35224);
var state_35321__$1 = state_35321;
var statearr_35382_35449 = state_35321__$1;
(statearr_35382_35449[(2)] = inst_35230);

(statearr_35382_35449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (11))){
var state_35321__$1 = state_35321;
var statearr_35383_35450 = state_35321__$1;
(statearr_35383_35450[(2)] = null);

(statearr_35383_35450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (9))){
var inst_35213 = (state_35321[(2)]);
var state_35321__$1 = state_35321;
var statearr_35384_35451 = state_35321__$1;
(statearr_35384_35451[(2)] = inst_35213);

(statearr_35384_35451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (5))){
var inst_35183 = (state_35321[(9)]);
var inst_35184 = (state_35321[(10)]);
var inst_35186 = (inst_35184 < inst_35183);
var inst_35187 = inst_35186;
var state_35321__$1 = state_35321;
if(cljs.core.truth_(inst_35187)){
var statearr_35385_35452 = state_35321__$1;
(statearr_35385_35452[(1)] = (7));

} else {
var statearr_35386_35453 = state_35321__$1;
(statearr_35386_35453[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (14))){
var inst_35194 = (state_35321[(22)]);
var inst_35203 = cljs.core.first.call(null,inst_35194);
var inst_35204 = figwheel.client.file_reloading.eval_body.call(null,inst_35203,opts);
var inst_35205 = cljs.core.next.call(null,inst_35194);
var inst_35181 = inst_35205;
var inst_35182 = null;
var inst_35183 = (0);
var inst_35184 = (0);
var state_35321__$1 = (function (){var statearr_35387 = state_35321;
(statearr_35387[(7)] = inst_35181);

(statearr_35387[(8)] = inst_35182);

(statearr_35387[(9)] = inst_35183);

(statearr_35387[(10)] = inst_35184);

(statearr_35387[(32)] = inst_35204);

return statearr_35387;
})();
var statearr_35388_35454 = state_35321__$1;
(statearr_35388_35454[(2)] = null);

(statearr_35388_35454[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (45))){
var state_35321__$1 = state_35321;
var statearr_35389_35455 = state_35321__$1;
(statearr_35389_35455[(2)] = null);

(statearr_35389_35455[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (26))){
var inst_35238 = (state_35321[(23)]);
var inst_35242 = (state_35321[(24)]);
var inst_35237 = (state_35321[(25)]);
var inst_35234 = (state_35321[(19)]);
var inst_35240 = (state_35321[(26)]);
var inst_35257 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35259 = (function (){var all_files = inst_35234;
var res_SINGLEQUOTE_ = inst_35237;
var res = inst_35238;
var files_not_loaded = inst_35240;
var dependencies_that_loaded = inst_35242;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35238,inst_35242,inst_35237,inst_35234,inst_35240,inst_35257,state_val_35322,c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35258){
var map__35390 = p__35258;
var map__35390__$1 = ((((!((map__35390 == null)))?((((map__35390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35390):map__35390);
var namespace = cljs.core.get.call(null,map__35390__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35390__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35238,inst_35242,inst_35237,inst_35234,inst_35240,inst_35257,state_val_35322,c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35260 = cljs.core.map.call(null,inst_35259,inst_35238);
var inst_35261 = cljs.core.pr_str.call(null,inst_35260);
var inst_35262 = figwheel.client.utils.log.call(null,inst_35261);
var inst_35263 = (function (){var all_files = inst_35234;
var res_SINGLEQUOTE_ = inst_35237;
var res = inst_35238;
var files_not_loaded = inst_35240;
var dependencies_that_loaded = inst_35242;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35238,inst_35242,inst_35237,inst_35234,inst_35240,inst_35257,inst_35259,inst_35260,inst_35261,inst_35262,state_val_35322,c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35238,inst_35242,inst_35237,inst_35234,inst_35240,inst_35257,inst_35259,inst_35260,inst_35261,inst_35262,state_val_35322,c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35264 = setTimeout(inst_35263,(10));
var state_35321__$1 = (function (){var statearr_35392 = state_35321;
(statearr_35392[(33)] = inst_35257);

(statearr_35392[(34)] = inst_35262);

return statearr_35392;
})();
var statearr_35393_35456 = state_35321__$1;
(statearr_35393_35456[(2)] = inst_35264);

(statearr_35393_35456[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (16))){
var state_35321__$1 = state_35321;
var statearr_35394_35457 = state_35321__$1;
(statearr_35394_35457[(2)] = reload_dependents);

(statearr_35394_35457[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (38))){
var inst_35274 = (state_35321[(16)]);
var inst_35292 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35274);
var state_35321__$1 = state_35321;
var statearr_35395_35458 = state_35321__$1;
(statearr_35395_35458[(2)] = inst_35292);

(statearr_35395_35458[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (30))){
var state_35321__$1 = state_35321;
var statearr_35396_35459 = state_35321__$1;
(statearr_35396_35459[(2)] = null);

(statearr_35396_35459[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (10))){
var inst_35194 = (state_35321[(22)]);
var inst_35196 = cljs.core.chunked_seq_QMARK_.call(null,inst_35194);
var state_35321__$1 = state_35321;
if(inst_35196){
var statearr_35397_35460 = state_35321__$1;
(statearr_35397_35460[(1)] = (13));

} else {
var statearr_35398_35461 = state_35321__$1;
(statearr_35398_35461[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (18))){
var inst_35228 = (state_35321[(2)]);
var state_35321__$1 = state_35321;
if(cljs.core.truth_(inst_35228)){
var statearr_35399_35462 = state_35321__$1;
(statearr_35399_35462[(1)] = (19));

} else {
var statearr_35400_35463 = state_35321__$1;
(statearr_35400_35463[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (42))){
var state_35321__$1 = state_35321;
var statearr_35401_35464 = state_35321__$1;
(statearr_35401_35464[(2)] = null);

(statearr_35401_35464[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (37))){
var inst_35287 = (state_35321[(2)]);
var state_35321__$1 = state_35321;
var statearr_35402_35465 = state_35321__$1;
(statearr_35402_35465[(2)] = inst_35287);

(statearr_35402_35465[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (8))){
var inst_35181 = (state_35321[(7)]);
var inst_35194 = (state_35321[(22)]);
var inst_35194__$1 = cljs.core.seq.call(null,inst_35181);
var state_35321__$1 = (function (){var statearr_35403 = state_35321;
(statearr_35403[(22)] = inst_35194__$1);

return statearr_35403;
})();
if(inst_35194__$1){
var statearr_35404_35466 = state_35321__$1;
(statearr_35404_35466[(1)] = (10));

} else {
var statearr_35405_35467 = state_35321__$1;
(statearr_35405_35467[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});})(c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31611__auto__,c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31612__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31612__auto____0 = (function (){
var statearr_35406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35406[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31612__auto__);

(statearr_35406[(1)] = (1));

return statearr_35406;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31612__auto____1 = (function (state_35321){
while(true){
var ret_value__31613__auto__ = (function (){try{while(true){
var result__31614__auto__ = switch__31611__auto__.call(null,state_35321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31614__auto__;
}
break;
}
}catch (e35407){if((e35407 instanceof Object)){
var ex__31615__auto__ = e35407;
var statearr_35408_35468 = state_35321;
(statearr_35408_35468[(5)] = ex__31615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35469 = state_35321;
state_35321 = G__35469;
continue;
} else {
return ret_value__31613__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31612__auto__ = function(state_35321){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31612__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31612__auto____1.call(this,state_35321);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31612__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31612__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31612__auto__;
})()
;})(switch__31611__auto__,c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31701__auto__ = (function (){var statearr_35409 = f__31700__auto__.call(null);
(statearr_35409[(6)] = c__31699__auto__);

return statearr_35409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31701__auto__);
});})(c__31699__auto__,map__35166,map__35166__$1,opts,before_jsload,on_jsload,reload_dependents,map__35167,map__35167__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31699__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35472,link){
var map__35473 = p__35472;
var map__35473__$1 = ((((!((map__35473 == null)))?((((map__35473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35473):map__35473);
var file = cljs.core.get.call(null,map__35473__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35473,map__35473__$1,file){
return (function (p1__35470_SHARP_,p2__35471_SHARP_){
if(cljs.core._EQ_.call(null,p1__35470_SHARP_,p2__35471_SHARP_)){
return p1__35470_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35473,map__35473__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35476){
var map__35477 = p__35476;
var map__35477__$1 = ((((!((map__35477 == null)))?((((map__35477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35477):map__35477);
var match_length = cljs.core.get.call(null,map__35477__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35477__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35475_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35475_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35479_SHARP_,p2__35480_SHARP_){
return cljs.core.assoc.call(null,p1__35479_SHARP_,cljs.core.get.call(null,p2__35480_SHARP_,key),p2__35480_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35481 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35481);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35481);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35482,p__35483){
var map__35484 = p__35482;
var map__35484__$1 = ((((!((map__35484 == null)))?((((map__35484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35484):map__35484);
var on_cssload = cljs.core.get.call(null,map__35484__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35485 = p__35483;
var map__35485__$1 = ((((!((map__35485 == null)))?((((map__35485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35485):map__35485);
var files_msg = map__35485__$1;
var files = cljs.core.get.call(null,map__35485__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1502751513942
