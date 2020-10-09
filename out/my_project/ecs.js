// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
goog.provide('my_project.ecs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.set');
goog.require('cljs.core.async');
if((typeof my_project !== 'undefined') && (typeof my_project.ecs !== 'undefined') && (typeof my_project.ecs.entity_index !== 'undefined')){
} else {
my_project.ecs.entity_index = (0);
}
if((typeof my_project !== 'undefined') && (typeof my_project.ecs !== 'undefined') && (typeof my_project.ecs.tables !== 'undefined')){
} else {
my_project.ecs.tables = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(20)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(40)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null)], null)], null));
}
if((typeof my_project !== 'undefined') && (typeof my_project.ecs !== 'undefined') && (typeof my_project.ecs.entity_map !== 'undefined')){
} else {
my_project.ecs.entity_map = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
my_project.ecs.add_component_to_entity = (function my_project$ecs$add_component_to_entity(eid,type,cid){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.ecs.entity_map,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid,type], null),cid);

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(my_project.ecs.entity_map)], 0));
});
my_project.ecs.new_entity = (function my_project$ecs$new_entity(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.ecs.entity_index,cljs.core.inc);
});
my_project.ecs.timestamp = (function my_project$ecs$timestamp(){
return window.performance.now();
});
if((typeof my_project !== 'undefined') && (typeof my_project.ecs !== 'undefined') && (typeof my_project.ecs.now !== 'undefined')){
} else {
my_project.ecs.now = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof my_project !== 'undefined') && (typeof my_project.ecs !== 'undefined') && (typeof my_project.ecs.dt !== 'undefined')){
} else {
my_project.ecs.dt = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof my_project !== 'undefined') && (typeof my_project.ecs !== 'undefined') && (typeof my_project.ecs.l !== 'undefined')){
} else {
my_project.ecs.l = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(my_project.ecs.timestamp());
}
if((typeof my_project !== 'undefined') && (typeof my_project.ecs !== 'undefined') && (typeof my_project.ecs.step !== 'undefined')){
} else {
my_project.ecs.step = ((1) / (60));
}
if((typeof my_project !== 'undefined') && (typeof my_project.ecs !== 'undefined') && (typeof my_project.ecs.steps !== 'undefined')){
} else {
my_project.ecs.steps = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof my_project !== 'undefined') && (typeof my_project.ecs !== 'undefined') && (typeof my_project.ecs.frames !== 'undefined')){
} else {
my_project.ecs.frames = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
my_project.ecs.position_system = (function my_project$ecs$position_system(){
var positions = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.ecs.tables));
var pending_pos = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (positions){
return (function (p){
var x = cljs.core.first(p);
var y = cljs.core.second(p);
var newx = (((x < (1000)))?(x + (5)):(0));
var newy = (((y < (800)))?(y + (5)):(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [newx,newy], null);
});})(positions))
,positions);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.ecs.tables,cljs.core.assoc,cljs.core.cst$kw$position,pending_pos);
});
my_project.ecs.sim = (function my_project$ecs$sim(step){
my_project.ecs.position_system();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.ecs.steps,cljs.core.inc);
});
my_project.ecs.render = (function my_project$ecs$render(dt){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.ecs.frames,cljs.core.inc);
});
my_project.ecs.frame = (function my_project$ecs$frame(){
cljs.core.reset_BANG_(my_project.ecs.now,my_project.ecs.timestamp());

cljs.core.reset_BANG_(my_project.ecs.dt,(cljs.core.deref(my_project.ecs.dt) + (function (){var x__4222__auto__ = (1);
var y__4223__auto__ = ((cljs.core.deref(my_project.ecs.now) - cljs.core.deref(my_project.ecs.l)) / (1000));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()));

while(true){
if((cljs.core.deref(my_project.ecs.dt) > my_project.ecs.step)){
my_project.ecs.sim(my_project.ecs.step);

cljs.core.reset_BANG_(my_project.ecs.dt,(cljs.core.deref(my_project.ecs.dt) - my_project.ecs.step));

continue;
} else {
}
break;
}

my_project.ecs.render(cljs.core.deref(my_project.ecs.dt));

cljs.core.reset_BANG_(my_project.ecs.l,cljs.core.deref(my_project.ecs.now));

return window.requestAnimationFrame(my_project.ecs.frame);
});
my_project.ecs.main = (function my_project$ecs$main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,["Steps: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.ecs.steps))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,["Frames: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.ecs.frames))].join('')], null)], null);
});
