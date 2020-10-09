// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
goog.provide('my_project.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('clojure.edn');
goog.require('my_project.layout');
goog.require('my_project.canvas');
goog.require('my_project.tree');
goog.require('my_project.ecs');
goog.require('my_project.rules');
my_project.core.main = (function my_project$core$main(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.canvas.main,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.main], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$top,"24px",cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$z_DASH_index,(9999)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.outline_view], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$top,"24px",cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$z_DASH_index,(9999)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.side_properties_view], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$justify_DASH_content,"center"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.toolbar], null)], null)], null),document.getElementById("app"));
});
goog.exportSymbol('my_project.core.main', my_project.core.main);
my_project.core.main();
