// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
goog.provide('my_project.canvas');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
my_project.canvas.zoom_factor = (2);
if((typeof my_project !== 'undefined') && (typeof my_project.canvas !== 'undefined') && (typeof my_project.canvas.state !== 'undefined')){
} else {
my_project.canvas.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$current_DASH_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$init_DASH_mouse_DASH_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$current_DASH_mouse_DASH_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$current_DASH_zoom,(1),cljs.core.cst$kw$show_DASH_status_QMARK_,false,cljs.core.cst$kw$current_DASH_scroll,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null));
}
my_project.canvas.query_mouse_delta = (function my_project$canvas$query_mouse_delta(){
var initial = cljs.core.cst$kw$init_DASH_mouse_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.canvas.state));
var new$ = cljs.core.cst$kw$current_DASH_mouse_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.canvas.state));
var delta = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.first(initial) - cljs.core.first(new$)) / cljs.core.cst$kw$current_DASH_zoom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.canvas.state))),((cljs.core.second(initial) - cljs.core.second(new$)) / cljs.core.cst$kw$current_DASH_zoom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.canvas.state)))], null);
return delta;
});
my_project.canvas.query_show_status_QMARK_ = (function my_project$canvas$query_show_status_QMARK_(){
return cljs.core.cst$kw$show_DASH_status_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.canvas.state));
});
my_project.canvas.query_pan = (function my_project$canvas$query_pan(){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.cst$kw$pan_DASH_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.canvas.state));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.cst$kw$mouse_DASH_down.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.canvas.state));
} else {
return and__4120__auto__;
}
})())){
return my_project.canvas.query_mouse_delta();
} else {
return null;
}
});
my_project.canvas.query_transform = (function my_project$canvas$query_transform(){
var current_transform = cljs.core.cst$kw$current_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.canvas.state));
var delta = my_project.canvas.query_pan();
var updated_transform = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first(current_transform) - cljs.core.first(delta)),(cljs.core.second(current_transform) - cljs.core.second(delta))], null);
return updated_transform;
});
my_project.canvas.query_scale = (function my_project$canvas$query_scale(){
return cljs.core.cst$kw$current_DASH_zoom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.canvas.state));
});
my_project.canvas.query_mouse_pos = (function my_project$canvas$query_mouse_pos(){
return cljs.core.cst$kw$current_DASH_mouse_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.canvas.state));
});
my_project.canvas.zoom_out = (function my_project$canvas$zoom_out(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.canvas.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_zoom,(cljs.core.cst$kw$current_DASH_zoom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.canvas.state)) / my_project.canvas.zoom_factor));
});
my_project.canvas.zoom_in = (function my_project$canvas$zoom_in(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.canvas.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_zoom,(cljs.core.cst$kw$current_DASH_zoom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.canvas.state)) * my_project.canvas.zoom_factor));
});
my_project.canvas.activate_pan = (function my_project$canvas$activate_pan(e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.canvas.state,cljs.core.assoc,cljs.core.cst$kw$pan_DASH_mode,true);
});
my_project.canvas.center = (function my_project$canvas$center(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_project.canvas.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_zoom,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$current_DASH_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.cst$kw$current_DASH_scroll,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], 0));
});
my_project.canvas.show_status_BANG_ = (function my_project$canvas$show_status_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.canvas.state,cljs.core.assoc,cljs.core.cst$kw$show_DASH_status_QMARK_,true);
});
my_project.canvas.hide_status_BANG_ = (function my_project$canvas$hide_status_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.canvas.state,cljs.core.assoc,cljs.core.cst$kw$show_DASH_status_QMARK_,false);
});
my_project.canvas.deactivate_pan = (function my_project$canvas$deactivate_pan(e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_project.canvas.state,cljs.core.assoc,cljs.core.cst$kw$pan_DASH_mode,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$current_DASH_pos,my_project.canvas.query_transform()], 0));
});
my_project.canvas.mouse_down = (function my_project$canvas$mouse_down(e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_project.canvas.state,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_down,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$current_DASH_mouse_DASH_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null),cljs.core.cst$kw$init_DASH_mouse_DASH_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null)], 0));
});
my_project.canvas.mouse_up = (function my_project$canvas$mouse_up(e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_project.canvas.state,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_down,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$current_DASH_mouse_DASH_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null),cljs.core.cst$kw$current_DASH_pos,my_project.canvas.query_transform()], 0));
});
my_project.canvas.mouse_move = (function my_project$canvas$mouse_move(e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.canvas.state,cljs.core.assoc,cljs.core.cst$kw$current_DASH_mouse_DASH_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null));
});
my_project.canvas.client_bound_rect = (function my_project$canvas$client_bound_rect(cords){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.canvas.state,cljs.core.assoc,cljs.core.cst$kw$client_DASH_bound_DASH_rect,cords);
});
my_project.canvas.key_press = (function my_project$canvas$key_press(e){
var key = e.key;
var repeat_QMARK_ = e.repeat;
var input_QMARK_ = (document.activeElement instanceof HTMLInputElement);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key," ")) && ((!(input_QMARK_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.target,document.body)))){
e.preventDefault();
} else {
}

if(cljs.core.truth_(repeat_QMARK_)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"-")){
my_project.canvas.zoom_out();
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"=")){
my_project.canvas.zoom_in();
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,"9")){
my_project.canvas.center();
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key," ")){
return my_project.canvas.activate_pan(e);
} else {
return null;
}
}
});
my_project.canvas.key_up = (function my_project$canvas$key_up(e){
var key = e.key;
var repeat_QMARK_ = e.repeat;
if(cljs.core.truth_(repeat_QMARK_)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key," ")){
return my_project.canvas.deactivate_pan(e);
} else {
return null;
}
}
});
my_project.canvas.wheel = (function my_project$canvas$wheel(e){
e.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.canvas.state,cljs.core.update,cljs.core.cst$kw$current_DASH_scroll,(function (a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first(a) + e.deltaX),(cljs.core.second(a) + e.deltaY)], null);
}));
});
my_project.canvas.setup = (function my_project$canvas$setup(){
document.addEventListener("mousedown",my_project.canvas.mouse_down);

document.addEventListener("mouseup",my_project.canvas.mouse_up);

document.addEventListener("mousemove",my_project.canvas.mouse_move);

document.addEventListener("keydown",my_project.canvas.key_press);

document.addEventListener("keyup",my_project.canvas.key_up);

document.addEventListener("wheel",my_project.canvas.wheel);

return document.addEventListener("touchmouse",my_project.canvas.wheel);
});
my_project.canvas.teardown = (function my_project$canvas$teardown(){
document.removeEventListener("mousedown",my_project.canvas.mouse_down);

document.removeEventListener("mouseup",my_project.canvas.mouse_up);

document.removeEventListener("mousemove",my_project.canvas.mouse_move);

document.removeEventListener("keydown",my_project.canvas.key_press);

document.removeEventListener("keyup",my_project.canvas.key_up);

return document.removeEventListener("wheel",my_project.canvas.wheel);
});
my_project.canvas.status = (function my_project$canvas$status(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"fixed",cljs.core.cst$kw$top,"0",cljs.core.cst$kw$left,"0"], null)], null),cljs.core.deref(my_project.canvas.state),""], null);
});
my_project.canvas.artboard = (function my_project$canvas$artboard(a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,"200px",cljs.core.cst$kw$height,"200px",cljs.core.cst$kw$background,"blue",cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$left,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(a))),"px"].join(''),cljs.core.cst$kw$top,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(a))),"px"].join('')], null)], null)], null);
});
my_project.canvas.update_relative_position = (function my_project$canvas$update_relative_position(){
var vec__10259 = cljs.core.cst$kw$current_DASH_mouse_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.canvas.state));
var mouse_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10259,(0),null);
var mouse_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10259,(1),null);
var vec__10262 = cljs.core.cst$kw$client_DASH_bound_DASH_rect.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.canvas.state));
var client_bound_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10262,(0),null);
var client_bound_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10262,(1),null);
var scale = my_project.canvas.query_scale();
var relative_position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((mouse_x - client_bound_x) / scale),((mouse_y - client_bound_y) / scale)], null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.canvas.state,cljs.core.assoc,cljs.core.cst$kw$relative_DASH_position,relative_position);
});
my_project.canvas.canvas = (function my_project$canvas$canvas(){
var this$ = reagent.core.current_component();
var vec__10265 = my_project.canvas.query_transform();
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10265,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10265,(1),null);
var vec__10268 = cljs.core.cst$kw$current_DASH_scroll.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.canvas.state));
var tx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10268,(0),null);
var ty1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10268,(1),null);
var vec__10271 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tx - (tx1 / cljs.core.cst$kw$current_DASH_zoom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.canvas.state)))),(ty - (ty1 / cljs.core.cst$kw$current_DASH_zoom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.canvas.state))))], null);
var tx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10271,(0),null);
var ty2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10271,(1),null);
var scale = my_project.canvas.query_scale();
var transform = ["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scale),") ","translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx2),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ty2),"px",")"].join('');
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"checkers1",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,"100vh",cljs.core.cst$kw$width,"100vw",cljs.core.cst$kw$transform,transform], null)], null)], null),reagent.core.children(this$));
});
my_project.canvas.wrap_canvas = cljs.core.with_meta(my_project.canvas.canvas,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_did_DASH_update,(function (p1__10274_SHARP_){
var rect = reagent.core.dom_node(p1__10274_SHARP_).getBoundingClientRect();
var x = rect.x;
var y = rect.y;
my_project.canvas.client_bound_rect(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

return my_project.canvas.update_relative_position();
})], null));
my_project.canvas.main = (function my_project$canvas$main(children){
var this$ = reagent.core.current_component();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"100vh",cljs.core.cst$kw$overflow,"hidden"], null),cljs.core.cst$kw$id,"canvas"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.canvas.wrap_canvas,children], null),(cljs.core.truth_(my_project.canvas.query_show_status_QMARK_())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.canvas.status], null):null)], null);
});
my_project.canvas.setup();
