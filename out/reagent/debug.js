// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__3740__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__3740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3741__i = 0, G__3741__a = new Array(arguments.length -  0);
while (G__3741__i < G__3741__a.length) {G__3741__a[G__3741__i] = arguments[G__3741__i + 0]; ++G__3741__i;}
  args = new cljs.core.IndexedSeq(G__3741__a,0,null);
} 
return G__3740__delegate.call(this,args);};
G__3740.cljs$lang$maxFixedArity = 0;
G__3740.cljs$lang$applyTo = (function (arglist__3742){
var args = cljs.core.seq(arglist__3742);
return G__3740__delegate(args);
});
G__3740.cljs$core$IFn$_invoke$arity$variadic = G__3740__delegate;
return G__3740;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__3743__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__3743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3744__i = 0, G__3744__a = new Array(arguments.length -  0);
while (G__3744__i < G__3744__a.length) {G__3744__a[G__3744__i] = arguments[G__3744__i + 0]; ++G__3744__i;}
  args = new cljs.core.IndexedSeq(G__3744__a,0,null);
} 
return G__3743__delegate.call(this,args);};
G__3743.cljs$lang$maxFixedArity = 0;
G__3743.cljs$lang$applyTo = (function (arglist__3745){
var args = cljs.core.seq(arglist__3745);
return G__3743__delegate(args);
});
G__3743.cljs$core$IFn$_invoke$arity$variadic = G__3743__delegate;
return G__3743;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
