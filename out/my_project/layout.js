// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
goog.provide('my_project.layout');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.set');
if((typeof my_project !== 'undefined') && (typeof my_project.layout !== 'undefined') && (typeof my_project.layout.artboards !== 'undefined')){
} else {
my_project.layout.artboards = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null));
}
if((typeof my_project !== 'undefined') && (typeof my_project.layout !== 'undefined') && (typeof my_project.layout.layers !== 'undefined')){
} else {
my_project.layout.layers = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof my_project !== 'undefined') && (typeof my_project.layout !== 'undefined') && (typeof my_project.layout.children !== 'undefined')){
} else {
my_project.layout.children = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof my_project !== 'undefined') && (typeof my_project.layout !== 'undefined') && (typeof my_project.layout.selected !== 'undefined')){
} else {
my_project.layout.selected = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof my_project !== 'undefined') && (typeof my_project.layout !== 'undefined') && (typeof my_project.layout.text !== 'undefined')){
} else {
my_project.layout.text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof my_project !== 'undefined') && (typeof my_project.layout !== 'undefined') && (typeof my_project.layout.properties_for_view !== 'undefined')){
} else {
my_project.layout.properties_for_view = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof my_project !== 'undefined') && (typeof my_project.layout !== 'undefined') && (typeof my_project.layout.id !== 'undefined')){
} else {
my_project.layout.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof my_project !== 'undefined') && (typeof my_project.layout !== 'undefined') && (typeof my_project.layout.clipboard !== 'undefined')){
} else {
my_project.layout.clipboard = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof my_project !== 'undefined') && (typeof my_project.layout !== 'undefined') && (typeof my_project.layout.preview_style !== 'undefined')){
} else {
my_project.layout.preview_style = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof my_project !== 'undefined') && (typeof my_project.layout !== 'undefined') && (typeof my_project.layout.preview_on !== 'undefined')){
} else {
my_project.layout.preview_on = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
my_project.layout.toggle_previews = (function my_project$layout$toggle_previews(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.layout.preview_on,cljs.core.not);

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(my_project.layout.preview_on)], 0));
});
my_project.layout.new_id = (function my_project$layout$new_id(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.layout.id,cljs.core.inc);

return cljs.core.deref(my_project.layout.id);
});
my_project.layout.add_layer_BANG_ = (function my_project$layout$add_layer_BANG_(layer_id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(my_project.layout.layers,cljs.core.conj,layer_id);
});
my_project.layout.add_child = (function my_project$layout$add_child(child_id,parent_id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(my_project.layout.children,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [child_id,parent_id], null));
});
my_project.layout.select_layer = (function my_project$layout$select_layer(layer_id){
return cljs.core.reset_BANG_(my_project.layout.selected,cljs.core.PersistentHashSet.createAsIfByAssoc([layer_id]));
});
my_project.layout.update_properties = (function my_project$layout$update_properties(id,props){
return cljs.core.reset_BANG_(my_project.layout.properties_for_view,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(my_project.layout.properties_for_view),id,(function (p1__16047_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__16047_SHARP_,props], 0));
})));
});
my_project.layout.set_preview = (function my_project$layout$set_preview(layer_id,preview_attr,preview_val){
return cljs.core.reset_BANG_(my_project.layout.preview_style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$layer_DASH_id,layer_id,cljs.core.cst$kw$preview_DASH_attribute,preview_attr,cljs.core.cst$kw$preview_DASH_value,preview_val], null));
});
my_project.layout.q_d_property = (function my_project$layout$q_d_property(property,layout){
var temp__5733__auto__ = cljs.core.not_empty((property.cljs$core$IFn$_invoke$arity$1 ? property.cljs$core$IFn$_invoke$arity$1(layout) : property.call(null,layout)));
if(cljs.core.truth_(temp__5733__auto__)){
var p = temp__5733__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),"px"].join('');
} else {
return "initial";
}
});
my_project.layout.default_props = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$min_DASH_width,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$align_DASH_content,cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$min_DASH_height,cljs.core.cst$kw$bottom,cljs.core.cst$kw$top,cljs.core.cst$kw$flex_DASH_grow,cljs.core.cst$kw$width,cljs.core.cst$kw$flex_DASH_wrap,cljs.core.cst$kw$max_DASH_width,cljs.core.cst$kw$flex_DASH_shrink,cljs.core.cst$kw$padding_DASH_right,cljs.core.cst$kw$padding_DASH_top,cljs.core.cst$kw$padding_DASH_left,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$right,cljs.core.cst$kw$display,cljs.core.cst$kw$position,cljs.core.cst$kw$padding_DASH_bottom,cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[null,"stretch","stretch",null,null,null,null,"0",null,"nowrap",null,"0","16","16","16","flex-start",null,"flex","relative","16","auto","row",null,null]);
my_project.layout.q_preview_style = (function my_project$layout$q_preview_style(layer_id){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.deref(my_project.layout.preview_on);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(layer_id,cljs.core.cst$kw$layer_DASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.layout.preview_style)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$preview_DASH_attribute.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.layout.preview_style)),cljs.core.cst$kw$preview_DASH_value.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.layout.preview_style))]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
my_project.layout.q_formatted_properties_for_view = (function my_project$layout$q_formatted_properties_for_view(layer_id){
var layer_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(my_project.layout.properties_for_view),layer_id);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$min_DASH_width,cljs.core.cst$kw$align_DASH_items,cljs.core.cst$kw$align_DASH_content,cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$min_DASH_height,cljs.core.cst$kw$bottom,cljs.core.cst$kw$top,cljs.core.cst$kw$flex_DASH_grow,cljs.core.cst$kw$width,cljs.core.cst$kw$flex_DASH_wrap,cljs.core.cst$kw$max_DASH_width,cljs.core.cst$kw$flex_DASH_shrink,cljs.core.cst$kw$padding_DASH_right,cljs.core.cst$kw$padding_DASH_top,cljs.core.cst$kw$padding_DASH_left,cljs.core.cst$kw$justify_DASH_content,cljs.core.cst$kw$right,cljs.core.cst$kw$display,cljs.core.cst$kw$position,cljs.core.cst$kw$padding_DASH_bottom,cljs.core.cst$kw$align_DASH_self,cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$height,cljs.core.cst$kw$left],[my_project.layout.q_d_property(cljs.core.cst$kw$min_DASH_width,layer_props),cljs.core.cst$kw$align_DASH_items.cljs$core$IFn$_invoke$arity$1(layer_props),cljs.core.cst$kw$align_DASH_content.cljs$core$IFn$_invoke$arity$1(layer_props),my_project.layout.q_d_property(cljs.core.cst$kw$max_DASH_height,layer_props),my_project.layout.q_d_property(cljs.core.cst$kw$min_DASH_height,layer_props),my_project.layout.q_d_property(cljs.core.cst$kw$bottom,layer_props),my_project.layout.q_d_property(cljs.core.cst$kw$top,layer_props),cljs.core.cst$kw$flex_DASH_grow.cljs$core$IFn$_invoke$arity$1(layer_props),my_project.layout.q_d_property(cljs.core.cst$kw$width,layer_props),cljs.core.cst$kw$flex_DASH_wrap.cljs$core$IFn$_invoke$arity$1(layer_props),my_project.layout.q_d_property(cljs.core.cst$kw$max_DASH_width,layer_props),cljs.core.cst$kw$flex_DASH_shrink.cljs$core$IFn$_invoke$arity$1(layer_props),my_project.layout.q_d_property(cljs.core.cst$kw$padding_DASH_right,layer_props),my_project.layout.q_d_property(cljs.core.cst$kw$padding_DASH_top,layer_props),my_project.layout.q_d_property(cljs.core.cst$kw$padding_DASH_left,layer_props),cljs.core.cst$kw$justify_DASH_content.cljs$core$IFn$_invoke$arity$1(layer_props),my_project.layout.q_d_property(cljs.core.cst$kw$right,layer_props),cljs.core.cst$kw$display.cljs$core$IFn$_invoke$arity$1(layer_props),cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(layer_props),my_project.layout.q_d_property(cljs.core.cst$kw$padding_DASH_bottom,layer_props),cljs.core.cst$kw$align_DASH_self.cljs$core$IFn$_invoke$arity$1(layer_props),cljs.core.cst$kw$flex_DASH_direction.cljs$core$IFn$_invoke$arity$1(layer_props),my_project.layout.q_d_property(cljs.core.cst$kw$height,layer_props),my_project.layout.q_d_property(cljs.core.cst$kw$left,layer_props)]),my_project.layout.q_preview_style(layer_id)], 0));
});
my_project.layout.q_properties_for_view = (function my_project$layout$q_properties_for_view(layer_id){
var layer_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(my_project.layout.properties_for_view),layer_id);
return layer_props;
});
my_project.layout.q_selected_QMARK_ = (function my_project$layout$q_selected_QMARK_(layer_id){
return cljs.core.contains_QMARK_(cljs.core.deref(my_project.layout.selected),layer_id);
});
my_project.layout.q_selection = (function my_project$layout$q_selection(){
return cljs.core.first(cljs.core.deref(my_project.layout.selected));
});
my_project.layout.q_layers = (function my_project$layout$q_layers(){
return cljs.core.deref(my_project.layout.layers);
});
my_project.layout.q_children = (function my_project$layout$q_children(){
return cljs.core.deref(my_project.layout.children);
});
my_project.layout.q_artboards = (function my_project$layout$q_artboards(){
return cljs.core.deref(my_project.layout.artboards);
});
my_project.layout.q_children_for_layer = (function my_project$layout$q_children_for_layer(id){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (child){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.second(child))){
return cljs.core.first(child);
} else {
return null;
}
}),cljs.core.deref(my_project.layout.children));
});
my_project.layout.q_where_to_add_layer = (function my_project$layout$q_where_to_add_layer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16049 = arguments.length;
var i__4731__auto___16050 = (0);
while(true){
if((i__4731__auto___16050 < len__4730__auto___16049)){
args__4736__auto__.push((arguments[i__4731__auto___16050]));

var G__16051 = (i__4731__auto___16050 + (1));
i__4731__auto___16050 = G__16051;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return my_project.layout.q_where_to_add_layer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

my_project.layout.q_where_to_add_layer.cljs$core$IFn$_invoke$arity$variadic = (function (text_QMARK_){
if(cljs.core.empty_QMARK_(cljs.core.deref(my_project.layout.selected))){
return (function (){
return my_project.layout.add_layer_BANG_(my_project.layout.new_id());
});
} else {
return (function (){
var parent_id = cljs.core.first(cljs.core.deref(my_project.layout.selected));
var child_id = my_project.layout.new_id();
my_project.layout.add_layer_BANG_(child_id);

my_project.layout.add_child(child_id,parent_id);

my_project.layout.update_properties(child_id,my_project.layout.default_props);

if(cljs.core.truth_(text_QMARK_)){
return my_project.layout.update_properties(child_id,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$is_DASH_text_QMARK_,true], null));
} else {
return null;
}
});
}
});

my_project.layout.q_where_to_add_layer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
my_project.layout.q_where_to_add_layer.cljs$lang$applyTo = (function (seq16048){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16048));
});

my_project.layout.q_option_selected_QMARK_ = (function my_project$layout$q_option_selected_QMARK_(option){
var selected_layer = my_project.layout.q_selection();
var layer_props = my_project.layout.q_properties_for_view(selected_layer);
var current_val_for_layer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(layer_props,cljs.core.first(cljs.core.keys(option)));
var they_match_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_val_for_layer,cljs.core.first(cljs.core.vals(option)));
return they_match_QMARK_;
});
my_project.layout.q_parent_of_child = (function my_project$layout$q_parent_of_child(child_id){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (child){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child_id,cljs.core.first(child))){
return cljs.core.second(child);
} else {
return null;
}
}),cljs.core.deref(my_project.layout.children));
});
my_project.layout.q_all_children = (function my_project$layout$q_all_children(layer_id){
var children = my_project.layout.q_children_for_layer(layer_id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [children,layer_id,(function (){var iter__4523__auto__ = ((function (children){
return (function my_project$layout$q_all_children_$_iter__16052(s__16053){
return (new cljs.core.LazySeq(null,((function (children){
return (function (){
var s__16053__$1 = s__16053;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16053__$1);
if(temp__5735__auto__){
var s__16053__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16053__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16053__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16055 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16054 = (0);
while(true){
if((i__16054 < size__4522__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16054);
cljs.core.chunk_append(b__16055,(my_project.layout.q_all_children.cljs$core$IFn$_invoke$arity$1 ? my_project.layout.q_all_children.cljs$core$IFn$_invoke$arity$1(c) : my_project.layout.q_all_children.call(null,c)));

var G__16056 = (i__16054 + (1));
i__16054 = G__16056;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16055),my_project$layout$q_all_children_$_iter__16052(cljs.core.chunk_rest(s__16053__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16055),null);
}
} else {
var c = cljs.core.first(s__16053__$2);
return cljs.core.cons((my_project.layout.q_all_children.cljs$core$IFn$_invoke$arity$1 ? my_project.layout.q_all_children.cljs$core$IFn$_invoke$arity$1(c) : my_project.layout.q_all_children.call(null,c)),my_project$layout$q_all_children_$_iter__16052(cljs.core.rest(s__16053__$2)));
}
} else {
return null;
}
break;
}
});})(children))
,null,null));
});})(children))
;
return iter__4523__auto__(children);
})()], null);
});
my_project.layout.q_set_of_all_children = (function my_project$layout$q_set_of_all_children(layer_id){
return cljs.core.set(cljs.core.flatten(my_project.layout.q_all_children(layer_id)));
});
my_project.layout.q_child_parent_relations = (function my_project$layout$q_child_parent_relations(layer_id){
var all_children = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16057_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__16057_SHARP_),layer_id);
}),cljs.core.deref(my_project.layout.children));
return all_children;
});
my_project.layout.q_set_of_all_child_parent_relations = (function my_project$layout$q_set_of_all_child_parent_relations(layer_ids){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16058_SHARP_,p2__16059_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__16058_SHARP_,my_project.layout.q_child_parent_relations(p2__16059_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,layer_ids);
});
my_project.layout.q_properties_for_children = (function my_project$layout$q_properties_for_children(layer_ids){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4523__auto__ = (function my_project$layout$q_properties_for_children_$_iter__16060(s__16061){
return (new cljs.core.LazySeq(null,(function (){
var s__16061__$1 = s__16061;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16061__$1);
if(temp__5735__auto__){
var s__16061__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16061__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16061__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16063 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16062 = (0);
while(true){
if((i__16062 < size__4522__auto__)){
var l = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16062);
cljs.core.chunk_append(b__16063,cljs.core.PersistentArrayMap.createAsIfByAssoc([l,my_project.layout.q_properties_for_view(l)]));

var G__16064 = (i__16062 + (1));
i__16062 = G__16064;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16063),my_project$layout$q_properties_for_children_$_iter__16060(cljs.core.chunk_rest(s__16061__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16063),null);
}
} else {
var l = cljs.core.first(s__16061__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([l,my_project.layout.q_properties_for_view(l)]),my_project$layout$q_properties_for_children_$_iter__16060(cljs.core.rest(s__16061__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(layer_ids);
})());
});
my_project.layout.remove_layer = (function my_project$layout$remove_layer(layer_id){
cljs.core.reset_BANG_(my_project.layout.layers,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([layer_id]),cljs.core.deref(my_project.layout.layers)));

cljs.core.reset_BANG_(my_project.layout.children,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__16065_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__16065_SHARP_),layer_id);
}),cljs.core.deref(my_project.layout.children)));

return cljs.core.reset_BANG_(my_project.layout.children,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__16066_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__16066_SHARP_),layer_id);
}),cljs.core.deref(my_project.layout.children)));
});
my_project.layout.remove_layers = (function my_project$layout$remove_layers(layer_id){
var all_layers = my_project.layout.q_set_of_all_children(layer_id);
var seq__16067 = cljs.core.seq(all_layers);
var chunk__16068 = null;
var count__16069 = (0);
var i__16070 = (0);
while(true){
if((i__16070 < count__16069)){
var l = chunk__16068.cljs$core$IIndexed$_nth$arity$2(null,i__16070);
my_project.layout.remove_layer(l);


var G__16071 = seq__16067;
var G__16072 = chunk__16068;
var G__16073 = count__16069;
var G__16074 = (i__16070 + (1));
seq__16067 = G__16071;
chunk__16068 = G__16072;
count__16069 = G__16073;
i__16070 = G__16074;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__16067);
if(temp__5735__auto__){
var seq__16067__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16067__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__16067__$1);
var G__16075 = cljs.core.chunk_rest(seq__16067__$1);
var G__16076 = c__4550__auto__;
var G__16077 = cljs.core.count(c__4550__auto__);
var G__16078 = (0);
seq__16067 = G__16075;
chunk__16068 = G__16076;
count__16069 = G__16077;
i__16070 = G__16078;
continue;
} else {
var l = cljs.core.first(seq__16067__$1);
my_project.layout.remove_layer(l);


var G__16079 = cljs.core.next(seq__16067__$1);
var G__16080 = null;
var G__16081 = (0);
var G__16082 = (0);
seq__16067 = G__16079;
chunk__16068 = G__16080;
count__16069 = G__16081;
i__16070 = G__16082;
continue;
}
} else {
return null;
}
}
break;
}
});
my_project.layout.copy_layers = (function my_project$layout$copy_layers(layer_id){
var all_layers = my_project.layout.q_set_of_all_children(layer_id);
var all_child_parent = my_project.layout.q_set_of_all_child_parent_relations(all_layers);
var all_properties = my_project.layout.q_properties_for_children(all_layers);
return cljs.core.reset_BANG_(my_project.layout.clipboard,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$root,layer_id,cljs.core.cst$kw$relations,all_child_parent,cljs.core.cst$kw$properties,all_properties], null));
});
my_project.layout.new_ids_for_id = (function my_project$layout$new_ids_for_id(ids){
var iter__4523__auto__ = (function my_project$layout$new_ids_for_id_$_iter__16083(s__16084){
return (new cljs.core.LazySeq(null,(function (){
var s__16084__$1 = s__16084;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16084__$1);
if(temp__5735__auto__){
var s__16084__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16084__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16084__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16086 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16085 = (0);
while(true){
if((i__16085 < size__4522__auto__)){
var id = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16085);
cljs.core.chunk_append(b__16086,my_project.layout.new_id());

var G__16087 = (i__16085 + (1));
i__16085 = G__16087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16086),my_project$layout$new_ids_for_id_$_iter__16083(cljs.core.chunk_rest(s__16084__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16086),null);
}
} else {
var id = cljs.core.first(s__16084__$2);
return cljs.core.cons(my_project.layout.new_id(),my_project$layout$new_ids_for_id_$_iter__16083(cljs.core.rest(s__16084__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(ids);
});
my_project.layout.new_layers_for_ids = (function my_project$layout$new_layers_for_ids(ids){
var iter__4523__auto__ = (function my_project$layout$new_layers_for_ids_$_iter__16088(s__16089){
return (new cljs.core.LazySeq(null,(function (){
var s__16089__$1 = s__16089;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16089__$1);
if(temp__5735__auto__){
var s__16089__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16089__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16089__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16091 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16090 = (0);
while(true){
if((i__16090 < size__4522__auto__)){
var id = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16090);
cljs.core.chunk_append(b__16091,my_project.layout.add_layer_BANG_(id));

var G__16092 = (i__16090 + (1));
i__16090 = G__16092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16091),my_project$layout$new_layers_for_ids_$_iter__16088(cljs.core.chunk_rest(s__16089__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16091),null);
}
} else {
var id = cljs.core.first(s__16089__$2);
return cljs.core.cons(my_project.layout.add_layer_BANG_(id),my_project$layout$new_layers_for_ids_$_iter__16088(cljs.core.rest(s__16089__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(ids);
});
my_project.layout.add_properties = (function my_project$layout$add_properties(old_layers,new_layers,properties){
var seq__16094 = cljs.core.seq(new_layers);
var chunk__16095 = null;
var count__16096 = (0);
var i__16097 = (0);
while(true){
if((i__16097 < count__16096)){
var l = chunk__16095.cljs$core$IIndexed$_nth$arity$2(null,i__16097);
var old_id_16098 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__16094,chunk__16095,count__16096,i__16097,l){
return (function (p1__16093_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.val(p1__16093_SHARP_),l);
});})(seq__16094,chunk__16095,count__16096,i__16097,l))
,old_layers);
var p_16099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties,cljs.core.ffirst(old_id_16098));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hello",cljs.core.ffirst(old_id_16098)], 0));

if(cljs.core.truth_(p_16099)){
my_project.layout.update_properties(l,p_16099);
} else {
my_project.layout.update_properties(l,my_project.layout.default_props);
}


var G__16100 = seq__16094;
var G__16101 = chunk__16095;
var G__16102 = count__16096;
var G__16103 = (i__16097 + (1));
seq__16094 = G__16100;
chunk__16095 = G__16101;
count__16096 = G__16102;
i__16097 = G__16103;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__16094);
if(temp__5735__auto__){
var seq__16094__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16094__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__16094__$1);
var G__16104 = cljs.core.chunk_rest(seq__16094__$1);
var G__16105 = c__4550__auto__;
var G__16106 = cljs.core.count(c__4550__auto__);
var G__16107 = (0);
seq__16094 = G__16104;
chunk__16095 = G__16105;
count__16096 = G__16106;
i__16097 = G__16107;
continue;
} else {
var l = cljs.core.first(seq__16094__$1);
var old_id_16108 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__16094,chunk__16095,count__16096,i__16097,l,seq__16094__$1,temp__5735__auto__){
return (function (p1__16093_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.val(p1__16093_SHARP_),l);
});})(seq__16094,chunk__16095,count__16096,i__16097,l,seq__16094__$1,temp__5735__auto__))
,old_layers);
var p_16109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(properties,cljs.core.ffirst(old_id_16108));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hello",cljs.core.ffirst(old_id_16108)], 0));

if(cljs.core.truth_(p_16109)){
my_project.layout.update_properties(l,p_16109);
} else {
my_project.layout.update_properties(l,my_project.layout.default_props);
}


var G__16110 = cljs.core.next(seq__16094__$1);
var G__16111 = null;
var G__16112 = (0);
var G__16113 = (0);
seq__16094 = G__16110;
chunk__16095 = G__16111;
count__16096 = G__16112;
i__16097 = G__16113;
continue;
}
} else {
return null;
}
}
break;
}
});
my_project.layout.paste_layers_into = (function my_project$layout$paste_layers_into(layer_id){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["PASTEY"], 0));

var children_in_clipboard = cljs.core.cst$kw$relations.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.layout.clipboard));
var root_layer = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.layout.clipboard));
var properties = cljs.core.cst$kw$properties.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.layout.clipboard));
var set_of_layers_in_clipboard = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentHashSet.EMPTY,children_in_clipboard));
var new_layer_ids = my_project.layout.new_ids_for_id(set_of_layers_in_clipboard);
var pairs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (children_in_clipboard,root_layer,properties,set_of_layers_in_clipboard,new_layer_ids){
return (function (a,b){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([a,b]);
});})(children_in_clipboard,root_layer,properties,set_of_layers_in_clipboard,new_layer_ids))
,set_of_layers_in_clipboard,new_layer_ids));
var replace_id = ((function (children_in_clipboard,root_layer,properties,set_of_layers_in_clipboard,new_layer_ids,pairs){
return (function (relation){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (children_in_clipboard,root_layer,properties,set_of_layers_in_clipboard,new_layer_ids,pairs){
return (function (i){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pairs,i);
});})(children_in_clipboard,root_layer,properties,set_of_layers_in_clipboard,new_layer_ids,pairs))
,relation);
});})(children_in_clipboard,root_layer,properties,set_of_layers_in_clipboard,new_layer_ids,pairs))
;
var replaced_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(replace_id,children_in_clipboard);
var new_root_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pairs,root_layer);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(my_project.layout.children,cljs.core.into,replaced_ids);

my_project.layout.add_child(new_root_id,layer_id);

return my_project.layout.add_properties(pairs,new_layer_ids,properties);
});
my_project.layout.cut = (function my_project$layout$cut(layer_id){
my_project.layout.copy_layers(layer_id);

return my_project.layout.remove_layers(layer_id);
});
my_project.layout.button = (function my_project$layout$button(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$border_DASH_radius,"8px",cljs.core.cst$kw$padding,"8px",cljs.core.cst$kw$background_DASH_color,"blue",cljs.core.cst$kw$color,"white",cljs.core.cst$kw$font_DASH_weight,"700",cljs.core.cst$kw$text_DASH_align,"center"], null)], null),props], null);
});
my_project.layout.secondary_button = (function my_project$layout$secondary_button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16121 = arguments.length;
var i__4731__auto___16122 = (0);
while(true){
if((i__4731__auto___16122 < len__4730__auto___16121)){
args__4736__auto__.push((arguments[i__4731__auto___16122]));

var G__16123 = (i__4731__auto___16122 + (1));
i__4731__auto___16122 = G__16123;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return my_project.layout.secondary_button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

my_project.layout.secondary_button.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$border_DASH_radius,"8px",cljs.core.cst$kw$padding,"8px",cljs.core.cst$kw$color,"#584563",cljs.core.cst$kw$height,"32px",cljs.core.cst$kw$font_DASH_weight,"700",cljs.core.cst$kw$box_DASH_shadow,"inset 0 0 0 2px #584563",cljs.core.cst$kw$text_DASH_align,"center"], null),cljs.core.cst$kw$on_DASH_click,(function (){
var fexpr__16116 = my_project.layout.q_where_to_add_layer();
return (fexpr__16116.cljs$core$IFn$_invoke$arity$0 ? fexpr__16116.cljs$core$IFn$_invoke$arity$0() : fexpr__16116.call(null));
})], null),(function (){var iter__4523__auto__ = (function my_project$layout$iter__16117(s__16118){
return (new cljs.core.LazySeq(null,(function (){
var s__16118__$1 = s__16118;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16118__$1);
if(temp__5735__auto__){
var s__16118__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16118__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16118__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16120 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16119 = (0);
while(true){
if((i__16119 < size__4522__auto__)){
var child = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16119);
cljs.core.chunk_append(b__16120,child);

var G__16124 = (i__16119 + (1));
i__16119 = G__16124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16120),my_project$layout$iter__16117(cljs.core.chunk_rest(s__16118__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16120),null);
}
} else {
var child = cljs.core.first(s__16118__$2);
return cljs.core.cons(child,my_project$layout$iter__16117(cljs.core.rest(s__16118__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(children);
})()], null);
});

my_project.layout.secondary_button.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
my_project.layout.secondary_button.cljs$lang$applyTo = (function (seq16114){
var G__16115 = cljs.core.first(seq16114);
var seq16114__$1 = cljs.core.next(seq16114);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16115,seq16114__$1);
});

my_project.layout.layer_view = (function my_project$layout$layer_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Well Hey, I'm a layer"], null);
});
my_project.layout.text_view = (function my_project$layout$text_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Well hey, I'm text"], null);
});
my_project.layout.artboard_view = (function my_project$layout$artboard_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Oh boy, I'm an artboard"], null);
});
my_project.layout.container = (function my_project$layout$container(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16134 = arguments.length;
var i__4731__auto___16135 = (0);
while(true){
if((i__4731__auto___16135 < len__4730__auto___16134)){
args__4736__auto__.push((arguments[i__4731__auto___16135]));

var G__16136 = (i__4731__auto___16135 + (1));
i__4731__auto___16135 = G__16136;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return my_project.layout.container.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

my_project.layout.container.cljs$core$IFn$_invoke$arity$variadic = (function (props,cs){
var id = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props);
var selected_QMARK_ = my_project.layout.q_selected_QMARK_(id);
var kids = my_project.layout.q_children_for_layer(id);
var layout = my_project.layout.q_formatted_properties_for_view(id);
var hover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$border_DASH_radius,"0",cljs.core.cst$kw$box_DASH_shadow,((selected_QMARK_)?"0 0 0 2px blue, 0 0 4px blue":"inset 0 0 0 1px lightgray"),cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$z_DASH_index,((selected_QMARK_)?(9999):null)], null),my_project.layout.q_formatted_properties_for_view(id)], 0)),cljs.core.cst$kw$on_DASH_click,((function (id,selected_QMARK_,kids,layout,hover_QMARK_){
return (function (p1__16125_SHARP_){
var G__16129 = p1__16125_SHARP_.stopPropagation();
var fexpr__16128 = my_project.layout.select_layer(id);
return (fexpr__16128.cljs$core$IFn$_invoke$arity$1 ? fexpr__16128.cljs$core$IFn$_invoke$arity$1(G__16129) : fexpr__16128.call(null,G__16129));
});})(id,selected_QMARK_,kids,layout,hover_QMARK_))
,cljs.core.cst$kw$content_DASH_editable,true], null),(function (){var iter__4523__auto__ = ((function (id,selected_QMARK_,kids,layout,hover_QMARK_){
return (function my_project$layout$iter__16130(s__16131){
return (new cljs.core.LazySeq(null,((function (id,selected_QMARK_,kids,layout,hover_QMARK_){
return (function (){
var s__16131__$1 = s__16131;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16131__$1);
if(temp__5735__auto__){
var s__16131__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16131__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16131__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16133 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16132 = (0);
while(true){
if((i__16132 < size__4522__auto__)){
var layer = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16132);
cljs.core.chunk_append(b__16133,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,layer], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,layer], null)));

var G__16137 = (i__16132 + (1));
i__16132 = G__16137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16133),my_project$layout$iter__16130(cljs.core.chunk_rest(s__16131__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16133),null);
}
} else {
var layer = cljs.core.first(s__16131__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,layer], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,layer], null)),my_project$layout$iter__16130(cljs.core.rest(s__16131__$2)));
}
} else {
return null;
}
break;
}
});})(id,selected_QMARK_,kids,layout,hover_QMARK_))
,null,null));
});})(id,selected_QMARK_,kids,layout,hover_QMARK_))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(kids));
})()], null);
});

my_project.layout.container.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
my_project.layout.container.cljs$lang$applyTo = (function (seq16126){
var G__16127 = cljs.core.first(seq16126);
var seq16126__$1 = cljs.core.next(seq16126);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16127,seq16126__$1);
});

my_project.layout.q_is_artboard_QMARK_ = (function my_project$layout$q_is_artboard_QMARK_(id){
return cljs.core.some((function (p1__16138_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__16138_SHARP_);
}),my_project.layout.q_children_for_layer((0)));
});
my_project.layout.outline = (function my_project$layout$outline(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16148 = arguments.length;
var i__4731__auto___16149 = (0);
while(true){
if((i__4731__auto___16149 < len__4730__auto___16148)){
args__4736__auto__.push((arguments[i__4731__auto___16149]));

var G__16150 = (i__4731__auto___16149 + (1));
i__4731__auto___16149 = G__16150;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return my_project.layout.outline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

my_project.layout.outline.cljs$core$IFn$_invoke$arity$variadic = (function (props,cs){
var id = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props);
var selected_QMARK_ = my_project.layout.q_selected_QMARK_(id);
var kids = my_project.layout.q_children_for_layer(id);
var layout = my_project.layout.q_formatted_properties_for_view(id);
var artboard_QMARK_ = my_project.layout.q_is_artboard_QMARK_(id);
var root_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,(0)))?true:false);
var prefix = (cljs.core.truth_(artboard_QMARK_)?"Artboard ":"Layer ");
var name = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,(0)))?"Root":[prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
var bold_QMARK_ = (function (){var or__4131__auto__ = artboard_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return root_QMARK_;
}
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$color,((selected_QMARK_)?"white":"black"),cljs.core.cst$kw$border_DASH_radius,"4px",cljs.core.cst$kw$padding_DASH_left,"8px",cljs.core.cst$kw$z_DASH_index,"1"], null)], 0)),cljs.core.cst$kw$on_DASH_click,((function (id,selected_QMARK_,kids,layout,artboard_QMARK_,root_QMARK_,prefix,name,bold_QMARK_){
return (function (p1__16139_SHARP_){
var G__16143 = p1__16139_SHARP_.stopPropagation();
var fexpr__16142 = my_project.layout.select_layer(id);
return (fexpr__16142.cljs$core$IFn$_invoke$arity$1 ? fexpr__16142.cljs$core$IFn$_invoke$arity$1(G__16143) : fexpr__16142.call(null,G__16143));
});})(id,selected_QMARK_,kids,layout,artboard_QMARK_,root_QMARK_,prefix,name,bold_QMARK_))
], null),((selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$top,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$pointer_DASH_events,cljs.core.cst$kw$height,cljs.core.cst$kw$left],["0","blue","100%","-1","absolute","4px","none","28px","0"])], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"8px 0 8px 8px",cljs.core.cst$kw$font_DASH_weight,(cljs.core.truth_(bold_QMARK_)?"800":null)], null)], null),name], null),(function (){var iter__4523__auto__ = ((function (id,selected_QMARK_,kids,layout,artboard_QMARK_,root_QMARK_,prefix,name,bold_QMARK_){
return (function my_project$layout$iter__16144(s__16145){
return (new cljs.core.LazySeq(null,((function (id,selected_QMARK_,kids,layout,artboard_QMARK_,root_QMARK_,prefix,name,bold_QMARK_){
return (function (){
var s__16145__$1 = s__16145;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16145__$1);
if(temp__5735__auto__){
var s__16145__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16145__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16145__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16147 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16146 = (0);
while(true){
if((i__16146 < size__4522__auto__)){
var layer = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16146);
cljs.core.chunk_append(b__16147,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.outline,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,layer], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,layer], null)));

var G__16151 = (i__16146 + (1));
i__16146 = G__16151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16147),my_project$layout$iter__16144(cljs.core.chunk_rest(s__16145__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16147),null);
}
} else {
var layer = cljs.core.first(s__16145__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.outline,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,layer], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,layer], null)),my_project$layout$iter__16144(cljs.core.rest(s__16145__$2)));
}
} else {
return null;
}
break;
}
});})(id,selected_QMARK_,kids,layout,artboard_QMARK_,root_QMARK_,prefix,name,bold_QMARK_))
,null,null));
});})(id,selected_QMARK_,kids,layout,artboard_QMARK_,root_QMARK_,prefix,name,bold_QMARK_))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(kids));
})()], null);
});

my_project.layout.outline.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
my_project.layout.outline.cljs$lang$applyTo = (function (seq16140){
var G__16141 = cljs.core.first(seq16140);
var seq16140__$1 = cljs.core.next(seq16140);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16141,seq16140__$1);
});

my_project.layout.outline_view = (function my_project$layout$outline_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$bottom,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$top,cljs.core.cst$kw$overflow,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$padding,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$left],["12px","12px","12px","auto","#EFEFEF","240px","8px 16px","absolute","8px","12px"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.outline,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,(0)], null)], null)], null);
});
my_project.layout.property_view = (function my_project$layout$property_view(title,icon,props_to_update){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$width,"32px",cljs.core.cst$kw$height,"20px",cljs.core.cst$kw$background_DASH_color,((my_project.layout.q_option_selected_QMARK_(props_to_update))?"gray":"lightgray"),cljs.core.cst$kw$margin_DASH_right,"4px",cljs.core.cst$kw$border_DASH_radius,"2px",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$align_DASH_items,"center"], null),cljs.core.cst$kw$on_DASH_click,(function (){
return my_project.layout.update_properties(my_project.layout.q_selection(),props_to_update);
}),cljs.core.cst$kw$on_DASH_mouse_DASH_over,(function (){
return my_project.layout.set_preview(my_project.layout.q_selection(),cljs.core.ffirst(props_to_update),cljs.core.second(cljs.core.first(props_to_update)));
}),cljs.core.cst$kw$on_DASH_mouse_DASH_leave,(function (){
return my_project.layout.set_preview(null,null,null);
}),cljs.core.cst$kw$title,title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,["icon-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join('')], null)], null)], null);
});
my_project.layout.self_property_number_view = (function my_project$layout$self_property_number_view(name,property){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_weight,(700)], null)], null),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$min,"0",cljs.core.cst$kw$value,(function (){var or__4131__auto__ = (function (){var G__16154 = my_project.layout.q_properties_for_view(my_project.layout.q_selection());
return (property.cljs$core$IFn$_invoke$arity$1 ? property.cljs$core$IFn$_invoke$arity$1(G__16154) : property.call(null,G__16154));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),cljs.core.cst$kw$on_DASH_change,(function (p1__16152_SHARP_){
return my_project.layout.update_properties(my_project.layout.q_selection(),cljs.core.PersistentArrayMap.createAsIfByAssoc([property,p1__16152_SHARP_.target.value]));
})], null)], null)], null);
});
my_project.layout.self_property_view = (function my_project$layout$self_property_view(name,property){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$align_DASH_items,"baseline",cljs.core.cst$kw$padding_DASH_bottom,"8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding_DASH_right,"8px",cljs.core.cst$kw$color,"#606060",cljs.core.cst$kw$width,"36px",cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$height,"20px",cljs.core.cst$kw$padding,"4px 4px"], null)], null),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,(function (){var or__4131__auto__ = (function (){var G__16157 = my_project.layout.q_properties_for_view(my_project.layout.q_selection());
return (property.cljs$core$IFn$_invoke$arity$1 ? property.cljs$core$IFn$_invoke$arity$1(G__16157) : property.call(null,G__16157));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),cljs.core.cst$kw$placeholder,"Auto",cljs.core.cst$kw$on_DASH_change,(function (p1__16155_SHARP_){
return my_project.layout.update_properties(my_project.layout.q_selection(),cljs.core.PersistentArrayMap.createAsIfByAssoc([property,p1__16155_SHARP_.target.value]));
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$outline,"none",cljs.core.cst$kw$border,"none",cljs.core.cst$kw$border_DASH_radius,"4px",cljs.core.cst$kw$height,"20px",cljs.core.cst$kw$padding,"4px 4px 4px 36px",cljs.core.cst$kw$appearance,"none",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$background,"white"], null)], null)], null)], null);
});
my_project.layout.artboard = (function my_project$layout$artboard(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16170 = arguments.length;
var i__4731__auto___16171 = (0);
while(true){
if((i__4731__auto___16171 < len__4730__auto___16170)){
args__4736__auto__.push((arguments[i__4731__auto___16171]));

var G__16172 = (i__4731__auto___16171 + (1));
i__4731__auto___16171 = G__16172;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return my_project.layout.artboard.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

my_project.layout.artboard.cljs$core$IFn$_invoke$arity$variadic = (function (props,cs){
var id = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(props);
var selected_QMARK_ = my_project.layout.q_selected_QMARK_(id);
var kids = my_project.layout.q_children_for_layer(id);
var layout = my_project.layout.q_formatted_properties_for_view(id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$padding_DASH_bottom,"4px",cljs.core.cst$kw$font_DASH_size,"10px",cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$cursor,"default"], null),cljs.core.cst$kw$on_DASH_click,((function (id,selected_QMARK_,kids,layout){
return (function (p1__16158_SHARP_){
var G__16163 = p1__16158_SHARP_.stopPropagation();
var fexpr__16162 = my_project.layout.select_layer(id);
return (fexpr__16162.cljs$core$IFn$_invoke$arity$1 ? fexpr__16162.cljs$core$IFn$_invoke$arity$1(G__16163) : fexpr__16162.call(null,G__16163));
});})(id,selected_QMARK_,kids,layout))
], null),["Artboard ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$border_DASH_radius,"0",cljs.core.cst$kw$box_DASH_shadow,((selected_QMARK_)?"0 0 0 2px blue, 0 0 4px blue":"0 0 0 1px lightgray"),cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$width,"320px",cljs.core.cst$kw$margin_DASH_right,"100px"], null),my_project.layout.q_formatted_properties_for_view(id)], 0)),cljs.core.cst$kw$on_DASH_click,((function (id,selected_QMARK_,kids,layout){
return (function (p1__16159_SHARP_){
var G__16165 = p1__16159_SHARP_.stopPropagation();
var fexpr__16164 = my_project.layout.select_layer(id);
return (fexpr__16164.cljs$core$IFn$_invoke$arity$1 ? fexpr__16164.cljs$core$IFn$_invoke$arity$1(G__16165) : fexpr__16164.call(null,G__16165));
});})(id,selected_QMARK_,kids,layout))
], null),(function (){var iter__4523__auto__ = ((function (id,selected_QMARK_,kids,layout){
return (function my_project$layout$iter__16166(s__16167){
return (new cljs.core.LazySeq(null,((function (id,selected_QMARK_,kids,layout){
return (function (){
var s__16167__$1 = s__16167;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16167__$1);
if(temp__5735__auto__){
var s__16167__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16167__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16167__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16169 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16168 = (0);
while(true){
if((i__16168 < size__4522__auto__)){
var layer = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16168);
cljs.core.chunk_append(b__16169,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,layer], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,layer], null)));

var G__16173 = (i__16168 + (1));
i__16168 = G__16173;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16169),my_project$layout$iter__16166(cljs.core.chunk_rest(s__16167__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16169),null);
}
} else {
var layer = cljs.core.first(s__16167__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,layer], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,layer], null)),my_project$layout$iter__16166(cljs.core.rest(s__16167__$2)));
}
} else {
return null;
}
break;
}
});})(id,selected_QMARK_,kids,layout))
,null,null));
});})(id,selected_QMARK_,kids,layout))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(kids));
})()], null)], null);
});

my_project.layout.artboard.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
my_project.layout.artboard.cljs$lang$applyTo = (function (seq16160){
var G__16161 = cljs.core.first(seq16160);
var seq16160__$1 = cljs.core.next(seq16160);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16161,seq16160__$1);
});

my_project.layout.artboards_view = (function my_project$layout$artboards_view(){
var id = (0);
var kids = my_project.layout.q_children_for_layer(id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"flex"], null)], null),(function (){var iter__4523__auto__ = ((function (id,kids){
return (function my_project$layout$artboards_view_$_iter__16174(s__16175){
return (new cljs.core.LazySeq(null,((function (id,kids){
return (function (){
var s__16175__$1 = s__16175;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16175__$1);
if(temp__5735__auto__){
var s__16175__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16175__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16175__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16177 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16176 = (0);
while(true){
if((i__16176 < size__4522__auto__)){
var layer = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16176);
cljs.core.chunk_append(b__16177,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.artboard,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,layer], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,layer], null)));

var G__16178 = (i__16176 + (1));
i__16176 = G__16178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16177),my_project$layout$artboards_view_$_iter__16174(cljs.core.chunk_rest(s__16175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16177),null);
}
} else {
var layer = cljs.core.first(s__16175__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.artboard,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,layer], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,layer], null)),my_project$layout$artboards_view_$_iter__16174(cljs.core.rest(s__16175__$2)));
}
} else {
return null;
}
break;
}
});})(id,kids))
,null,null));
});})(id,kids))
;
return iter__4523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(kids));
})()], null);
});
my_project.layout.property_section_title = (function my_project$layout$property_section_title(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_weight,"700",cljs.core.cst$kw$display,"inline"], null)], null),text], null);
});
my_project.layout.property_section_sub_title = (function my_project$layout$property_section_sub_title(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_weight,"400",cljs.core.cst$kw$display,"inline",cljs.core.cst$kw$color,"#606060"], null)], null),text], null);
});
my_project.layout.property_section_header = (function my_project$layout$property_section_header(){
var this$ = reagent.core.current_component();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"8px"], null)], null)], null),reagent.core.children(this$));
});
my_project.layout.property_section_sub_header = (function my_project$layout$property_section_sub_header(){
var this$ = reagent.core.current_component();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_bottom,"4px"], null)], null)], null),reagent.core.children(this$));
});
my_project.layout.property_section_view = (function my_project$layout$property_section_view(){
var this$ = reagent.core.current_component();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$border_DASH_radius,"12px",cljs.core.cst$kw$min_DASH_height,"32px",cljs.core.cst$kw$background_DASH_color,"#EFEFEF",cljs.core.cst$kw$font_DASH_size,"12px",cljs.core.cst$kw$padding,"12px 20px",cljs.core.cst$kw$margin_DASH_bottom,"8px"], null)], null)], null),reagent.core.children(this$));
});
my_project.layout.four_up = (function my_project$layout$four_up(first,second,third,fourth){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$display,"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"33%"], null)], null),first], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$justify_DASH_content,"space-between",cljs.core.cst$kw$display,"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"33%"], null)], null),second], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"33%"], null)], null),third], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$display,"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"33%"], null)], null),fourth], null)], null)], null);
});
my_project.layout.side_properties_view = (function my_project$layout$side_properties_view(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,"12px",cljs.core.cst$kw$right,"12px",cljs.core.cst$kw$bottom,"12px",cljs.core.cst$kw$height,"100px",cljs.core.cst$kw$width,"280px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_title,"Dimensions"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"flex"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"50%",cljs.core.cst$kw$padding_DASH_right,"4px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"W",cljs.core.cst$kw$width], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"Max",cljs.core.cst$kw$max_DASH_width], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"Min",cljs.core.cst$kw$min_DASH_width], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"50%",cljs.core.cst$kw$padding_DASH_left,"4px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"H",cljs.core.cst$kw$height], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"Max",cljs.core.cst$kw$max_DASH_height], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"Min",cljs.core.cst$kw$min_DASH_height], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"50%",cljs.core.cst$kw$padding_DASH_right,"4px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"<->",cljs.core.cst$kw$flex_DASH_grow], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"50%",cljs.core.cst$kw$padding_DASH_left,"4px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,">-<",cljs.core.cst$kw$flex_DASH_shrink], null)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_title,"Position"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_sub_header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_sub_title,"Position Style"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_bottom,"8px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Static","static",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"static"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Relative","relative",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Absolute","absolute",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"absolute"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_sub_header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_sub_title,"Position"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.four_up,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"",cljs.core.cst$kw$top], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"",cljs.core.cst$kw$left], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"",cljs.core.cst$kw$right], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"",cljs.core.cst$kw$bottom], null)], null)], null),(cljs.core.truth_(cljs.core.cst$kw$is_DASH_text_QMARK_.cljs$core$IFn$_invoke$arity$1(my_project.layout.q_properties_for_view(my_project.layout.q_selection())))?new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_title,"Text"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_sub_header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_sub_title,"Font"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"Font",cljs.core.cst$kw$font_DASH_size], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"Style",cljs.core.cst$kw$font_DASH_size], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"Size",cljs.core.cst$kw$font_DASH_size], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"Track",cljs.core.cst$kw$font_DASH_size], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"Lead",cljs.core.cst$kw$font_DASH_size], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"Para",cljs.core.cst$kw$font_DASH_size], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"Indnt",cljs.core.cst$kw$font_DASH_size], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_bottom,"8px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Uppercase","",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_self,"stetch"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Lowcase","",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_self,"stetch"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Titlecase","",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_self,"stetch"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Default","",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_self,"stetch"], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_bottom,"8px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Left","",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_self,"stetch"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Center","",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_self,"stetch"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Right","",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_self,"stetch"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Justify","",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_self,"stetch"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_bottom,"8px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Underline","",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_self,"stetch"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Strikethrough","",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_self,"stetch"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"None","",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_self,"stetch"], null)], null)], null)], null):new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_title,"Layout"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_sub_header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_sub_title,"Direction"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_top,"8px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Row","arrow-r",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex_DASH_direction,"row"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Row-Reverse","arrow-l",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex_DASH_direction,"row-reverse"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Column","arrow-d",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex_DASH_direction,"column"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Column-Reverse","arrow-u",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex_DASH_direction,"column-reverse"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_sub_header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_sub_title,"Wrapping"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_bottom,"8px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"NoWrap","no-wrap",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex_DASH_wrap,"nowrap"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Wrap","wrap",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex_DASH_wrap,"wrap"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Wrap Reverse","wrap-reverse",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex_DASH_wrap,"wrap-reverse"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_sub_header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_sub_title,"Justify Content"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_bottom,"8px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Start","justify-start",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$justify_DASH_content,"flex-start"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"End","justify-end",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$justify_DASH_content,"flex-end"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Center","justify-center",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$justify_DASH_content,"center"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Space Between","justify-space-between",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$justify_DASH_content,"space-between"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Space Around","justify-space-around",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$justify_DASH_content,"space-around"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Space Evenly","justify-space-evenly",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$justify_DASH_content,"space-evenly"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_sub_header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_sub_title,"Align Items"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_bottom,"8px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Start","align-start",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_items,"flex-start"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"End","align-end",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_items,"flex-end"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Center","align-center",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_items,"center"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Stretch","align-stretch",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_items,"stretch"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Baseline","align-baseline",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_items,"baseline"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_sub_header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_sub_title,"Align Content"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_bottom,"8px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Start","flex-start",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_content,"flex-start"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"End","flex-end",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_content,"flex-end"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Center","flex-center",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_content,"center"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Stretch","flex-stretch",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_content,"stretch"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Space Between","flex-space-between",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_content,"space-between"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_view,"Space Around","flex-space-around",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$align_DASH_content,"space-around"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_sub_header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.property_section_sub_title,"Padding"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.four_up,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"",cljs.core.cst$kw$padding_DASH_top], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"",cljs.core.cst$kw$padding_DASH_left], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"",cljs.core.cst$kw$padding_DASH_right], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.self_property_view,"",cljs.core.cst$kw$padding_DASH_bottom], null)], null)], null))], null);
});
my_project.layout.toolbar = (function my_project$layout$toolbar(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_top,"8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (){
var fexpr__16179 = my_project.layout.q_where_to_add_layer();
return (fexpr__16179.cljs$core$IFn$_invoke$arity$0 ? fexpr__16179.cljs$core$IFn$_invoke$arity$0() : fexpr__16179.call(null));
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"120px"], null)], null),"Add Child"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (){
my_project.layout.remove_layers(my_project.layout.q_selection());

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(my_project.layout.layers),cljs.core.deref(my_project.layout.children)], 0));
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"120px"], null)], null),"Delete"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (){
return my_project.layout.copy_layers(my_project.layout.q_selection());
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"120px"], null)], null),"Copy"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (){
return my_project.layout.cut(my_project.layout.q_selection());
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"120px"], null)], null),"Cut"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (){
return my_project.layout.paste_layers_into((function (){var or__4131__auto__ = my_project.layout.q_selection();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})());
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"120px"], null)], null),"Paste"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (){
return my_project.layout.toggle_previews();
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"120px"], null)], null),"Toggle Previews"], null)], null);
});
my_project.layout.main = (function my_project$layout$main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding,"100px",cljs.core.cst$kw$flex_DASH_direction,"column"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.layout.artboards_view], null)], null);
});
