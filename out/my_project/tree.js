// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
goog.provide('my_project.tree');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
if((typeof my_project !== 'undefined') && (typeof my_project.tree !== 'undefined') && (typeof my_project.tree.layers !== 'undefined')){
} else {
my_project.tree.layers = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof my_project !== 'undefined') && (typeof my_project.tree !== 'undefined') && (typeof my_project.tree.children !== 'undefined')){
} else {
my_project.tree.children = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof my_project !== 'undefined') && (typeof my_project.tree !== 'undefined') && (typeof my_project.tree.selected !== 'undefined')){
} else {
my_project.tree.selected = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof my_project !== 'undefined') && (typeof my_project.tree !== 'undefined') && (typeof my_project.tree.properties_for_view !== 'undefined')){
} else {
my_project.tree.properties_for_view = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof my_project !== 'undefined') && (typeof my_project.tree !== 'undefined') && (typeof my_project.tree.id !== 'undefined')){
} else {
my_project.tree.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
my_project.tree.default_props = cljs.core.PersistentArrayMap.EMPTY;
my_project.tree.new_id = (function my_project$tree$new_id(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.tree.id,cljs.core.inc);

return cljs.core.deref(my_project.tree.id);
});
my_project.tree.add_layer_BANG_ = (function my_project$tree$add_layer_BANG_(layer_id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(my_project.tree.layers,cljs.core.conj,layer_id);
});
my_project.tree.add_child = (function my_project$tree$add_child(child_id,parent_id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(my_project.tree.children,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [child_id,parent_id], null));
});
my_project.tree.select_layer = (function my_project$tree$select_layer(layer_id){
return cljs.core.reset_BANG_(my_project.tree.selected,cljs.core.PersistentHashSet.createAsIfByAssoc([layer_id]));
});
my_project.tree.q_selected_QMARK_ = (function my_project$tree$q_selected_QMARK_(layer_id){
return cljs.core.contains_QMARK_(cljs.core.deref(my_project.tree.selected),layer_id);
});
my_project.tree.q_selection = (function my_project$tree$q_selection(){
return cljs.core.first(cljs.core.deref(my_project.tree.selected));
});
my_project.tree.q_layers = (function my_project$tree$q_layers(){
return cljs.core.deref(my_project.tree.layers);
});
my_project.tree.q_children = (function my_project$tree$q_children(){
return cljs.core.deref(my_project.tree.children);
});
my_project.tree.q_children_for_layer = (function my_project$tree$q_children_for_layer(id){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (child){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.second(child))){
return cljs.core.first(child);
} else {
return null;
}
}),cljs.core.deref(my_project.tree.children));
});
my_project.tree.update_properties = (function my_project$tree$update_properties(id,props){
return cljs.core.reset_BANG_(my_project.tree.properties_for_view,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(my_project.tree.properties_for_view),id,(function (p1__16184_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__16184_SHARP_,props], 0));
})));
});
my_project.tree.q_where_to_add_layer = (function my_project$tree$q_where_to_add_layer(){
if(cljs.core.empty_QMARK_(cljs.core.deref(my_project.tree.selected))){
return (function (){
return my_project.tree.add_layer_BANG_(my_project.tree.new_id());
});
} else {
return (function (){
var parent_id = cljs.core.first(cljs.core.deref(my_project.tree.selected));
var child_id = my_project.tree.new_id();
my_project.tree.add_layer_BANG_(child_id);

my_project.tree.add_child(child_id,parent_id);

return my_project.tree.update_properties(child_id,my_project.tree.default_props);
});
}
});
my_project.tree.q_parent_of_child = (function my_project$tree$q_parent_of_child(child_id){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (child){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child_id,cljs.core.first(child))){
return cljs.core.second(child);
} else {
return null;
}
}),cljs.core.deref(my_project.tree.children));
});
my_project.tree.data = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"sequence",cljs.core.cst$kw$title,"Let\u2019s verify some facts about your home.",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"or/selector",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"sequence",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"contains?"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"contains?"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"contains?"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"questions",cljs.core.cst$kw$title,"Bedrooms"], null)], null)], null);
my_project.tree.toolbar = (function my_project$tree$toolbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding,"20px",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$justify_DASH_content,"end"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var fexpr__16185 = my_project.tree.q_where_to_add_layer();
return (fexpr__16185.cljs$core$IFn$_invoke$arity$0 ? fexpr__16185.cljs$core$IFn$_invoke$arity$0() : fexpr__16185.call(null));
})], null),"Add Node"], null)], null);
});
my_project.tree.root_node = (function my_project$tree$root_node(props){
var id = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props);
var children = my_project.tree.q_children_for_layer(id);
var selected_QMARK_ = my_project.tree.q_selected_QMARK_(id);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,((selected_QMARK_)?"selection":null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"0 0 10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding,"20px 10px 0px 10px",cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$justify_DASH_content,"center"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$min_DASH_width,cljs.core.cst$kw$box_DASH_shadow,cljs.core.cst$kw$color,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$min_DASH_height,cljs.core.cst$kw$background,cljs.core.cst$kw$padding,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius],["200px","inset 0 0 0 2px white,\n                      inset 0 -10px 0px lightgray,\n                      4px 4px 0 0 rgba(0,0,0,.25) ","black","center","58px","white","12px 12px 12px 16px","relative","4px"]),cljs.core.cst$kw$on_DASH_click,((function (id,children,selected_QMARK_){
return (function (p1__16186_SHARP_){
var G__16188 = p1__16186_SHARP_.stopPropagation();
var fexpr__16187 = my_project.tree.select_layer(id);
return (fexpr__16187.cljs$core$IFn$_invoke$arity$1 ? fexpr__16187.cljs$core$IFn$_invoke$arity$1(G__16188) : fexpr__16187.call(null,G__16188));
});})(id,children,selected_QMARK_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$font_DASH_weight,"800",cljs.core.cst$kw$font_DASH_size,"12px",cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$line_DASH_height,"14px",cljs.core.cst$kw$margin_DASH_bottom,"4px"], null)], null),"Root"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$font_DASH_family,"Menlo",cljs.core.cst$kw$font_DASH_style,"italic",cljs.core.cst$kw$font_DASH_size,"10px",cljs.core.cst$kw$line_DASH_height,"12px",cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$text_DASH_transform,"lowercase"], null)], null),"sequence"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$height,"20px",cljs.core.cst$kw$border_DASH_right,"4px solid black",cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,"-20px",cljs.core.cst$kw$margin,"0 auto",cljs.core.cst$kw$width,"4px",cljs.core.cst$kw$left,"0",cljs.core.cst$kw$right,"0"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$align_DASH_items,"flex-start"], null)], null),(function (){var iter__4523__auto__ = ((function (id,children,selected_QMARK_){
return (function my_project$tree$root_node_$_iter__16189(s__16190){
return (new cljs.core.LazySeq(null,((function (id,children,selected_QMARK_){
return (function (){
var s__16190__$1 = s__16190;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16190__$1);
if(temp__5735__auto__){
var s__16190__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16190__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16190__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16192 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16191 = (0);
while(true){
if((i__16191 < size__4522__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16191);
cljs.core.chunk_append(b__16192,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.tree.root_node,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,c], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,c], null)));

var G__16193 = (i__16191 + (1));
i__16191 = G__16193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16192),my_project$tree$root_node_$_iter__16189(cljs.core.chunk_rest(s__16190__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16192),null);
}
} else {
var c = cljs.core.first(s__16190__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.tree.root_node,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,c], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,c], null)),my_project$tree$root_node_$_iter__16189(cljs.core.rest(s__16190__$2)));
}
} else {
return null;
}
break;
}
});})(id,children,selected_QMARK_))
,null,null));
});})(id,children,selected_QMARK_))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(children));
})()], null)], null);
});
my_project.tree.main = (function my_project$tree$main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$justify_DASH_content,"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.tree.root_node,cljs.core.PersistentArrayMap.EMPTY], null)], null);
});
