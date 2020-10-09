// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
goog.provide('my_project.rules');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('cljs.tools.reader');
goog.require('cljs.js');
if((typeof my_project !== 'undefined') && (typeof my_project.rules !== 'undefined') && (typeof my_project.rules.id !== 'undefined')){
} else {
my_project.rules.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
my_project.rules.new_id = (function my_project$rules$new_id(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.rules.id,cljs.core.inc);

return cljs.core.deref(my_project.rules.id);
});
my_project.rules.add_sheet_BANG_ = (function my_project$rules$add_sheet_BANG_(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.rules.tables,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sheet_SLASH_by_DASH_id,id], null),"New Sheet");
});
my_project.rules.mouse_up_QMARK_ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Mouse was released",cljs.core.cst$kw$predicate,(function (){
var i = cljs.core.cst$kw$mouse_DASH_clicked_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.rules.tables));
if(cljs.core.truth_(i)){
return true;
} else {
return false;
}
})], null);
my_project.rules.key_down_QMARK_ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Any key is down",cljs.core.cst$kw$predicate,(function (){
var i = cljs.core.cst$kw$Any.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.rules.tables));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.cst$kw$down)){
return true;
} else {
return false;
}
})], null);
my_project.rules.key_pressed_left_QMARK_ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,"Upon pressing the left arrow key",cljs.core.cst$kw$predicate,(function (){
var i = cljs.core.cst$kw$mouse_DASH_clicked_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.rules.tables));
if(cljs.core.truth_(i)){
return true;
} else {
return false;
}
})], null);
if((typeof my_project !== 'undefined') && (typeof my_project.rules !== 'undefined') && (typeof my_project.rules.rule_choices !== 'undefined')){
} else {
my_project.rules.rule_choices = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.rules.mouse_up_QMARK_,my_project.rules.key_pressed_left_QMARK_], null);
}
my_project.rules.add_rule_BANG_ = (function my_project$rules$add_rule_BANG_(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(my_project.rules.tables,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rule_SLASH_by_DASH_id,id], null));
});
my_project.rules.add_rule_to_sheet_BANG_ = (function my_project$rules$add_rule_to_sheet_BANG_(rule_id,sheet_id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.rules.tables,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rule_SLASH_for_DASH_sheet,rule_id], null),sheet_id);
});
my_project.rules.add_condition_BANG_ = (function my_project$rules$add_condition_BANG_(id,name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.rules.tables,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$condition_SLASH_by_DASH_id,id], null),name);
});
my_project.rules.add_condition_to_rule_BANG_ = (function my_project$rules$add_condition_to_rule_BANG_(condition_id,rule_id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.rules.tables,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$condition_SLASH_for_DASH_rule,condition_id], null),rule_id);
});
if((typeof my_project !== 'undefined') && (typeof my_project.rules !== 'undefined') && (typeof my_project.rules.console_table !== 'undefined')){
} else {
my_project.rules.console_table = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
my_project.rules.q_predicate = (function my_project$rules$q_predicate(pred){
return cljs.core.cst$kw$predicate.cljs$core$IFn$_invoke$arity$1(pred);
});
my_project.rules.set_predicate_for_condition = (function my_project$rules$set_predicate_for_condition(condition_id,pred){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.rules.tables,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$predicate_SLASH_for_DASH_condition,condition_id], null),pred);
});
my_project.rules.add_action_BANG_ = (function my_project$rules$add_action_BANG_(id,name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.rules.tables,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_SLASH_by_DASH_id,id], null),name);
});
my_project.rules.add_action_to_rule_BANG_ = (function my_project$rules$add_action_to_rule_BANG_(action_id,rule_id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.rules.tables,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_SLASH_for_DASH_rule,action_id], null),rule_id);
});
my_project.rules.set_action_function = (function my_project$rules$set_action_function(action_id,message){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.rules.tables,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_function_SLASH_for_DASH_action,action_id], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,(function (a){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(my_project.rules.console_table,cljs.core.conj,a);
}),cljs.core.cst$kw$args,message], null));
});
my_project.rules.select_BANG_ = (function my_project$rules$select_BANG_(sheet_id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.rules.tables,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected], null),sheet_id);
});
my_project.rules.delete_condition_BANG_ = (function my_project$rules$delete_condition_BANG_(condition_id){
return null;
});
my_project.rules.delect_action_BANG_ = (function my_project$rules$delect_action_BANG_(action_id){
return null;
});
my_project.rules.delete_rule_BANG_ = (function my_project$rules$delete_rule_BANG_(rule_id){
return null;
});
my_project.rules.delete_sheet_BANG_ = (function my_project$rules$delete_sheet_BANG_(sheet_id){
return null;
});
my_project.rules.dispatch_BANG_ = (function my_project$rules$dispatch_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15424 = arguments.length;
var i__4731__auto___15425 = (0);
while(true){
if((i__4731__auto___15425 < len__4730__auto___15424)){
args__4736__auto__.push((arguments[i__4731__auto___15425]));

var G__15426 = (i__4731__auto___15425 + (1));
i__4731__auto___15425 = G__15426;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return my_project.rules.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

my_project.rules.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (command,args){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ACTION"], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(command,args);
});

my_project.rules.dispatch_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
my_project.rules.dispatch_BANG_.cljs$lang$applyTo = (function (seq15422){
var G__15423 = cljs.core.first(seq15422);
var seq15422__$1 = cljs.core.next(seq15422);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15423,seq15422__$1);
});

my_project.rules.q_sheets = (function my_project$rules$q_sheets(db){
var sheets = (function (){var iter__4523__auto__ = (function my_project$rules$q_sheets_$_iter__15427(s__15428){
return (new cljs.core.LazySeq(null,(function (){
var s__15428__$1 = s__15428;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15428__$1);
if(temp__5735__auto__){
var s__15428__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15428__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__15428__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__15430 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__15429 = (0);
while(true){
if((i__15429 < size__4522__auto__)){
var sheet = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__15429);
cljs.core.chunk_append(b__15430,sheet);

var G__15431 = (i__15429 + (1));
i__15429 = G__15431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15430),my_project$rules$q_sheets_$_iter__15427(cljs.core.chunk_rest(s__15428__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15430),null);
}
} else {
var sheet = cljs.core.first(s__15428__$2);
return cljs.core.cons(sheet,my_project$rules$q_sheets_$_iter__15427(cljs.core.rest(s__15428__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.cst$kw$sheet_SLASH_by_DASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.rules.tables)));
})();
return cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,sheets));
});
my_project.rules.q_sheet_by_id = (function my_project$rules$q_sheet_by_id(id){
var sheet = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(my_project.rules.tables),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sheet_SLASH_by_DASH_id,id], null));
return sheet;
});
my_project.rules.q_rules_for_sheet = (function my_project$rules$q_rules_for_sheet(sheet_id){
var rules = cljs.core.cst$kw$rule_SLASH_for_DASH_sheet.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.rules.tables));
var filtered = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (rules){
return (function (p__15432){
var vec__15433 = p__15432;
var rule_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15433,(0),null);
var r_sheet_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15433,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sheet_id,r_sheet_id);
});})(rules))
,rules);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,filtered);
});
my_project.rules.q_conditions_for_rule = (function my_project$rules$q_conditions_for_rule(rule_id){
var conditions = cljs.core.cst$kw$condition_SLASH_for_DASH_rule.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.rules.tables));
var filtered = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (conditions){
return (function (p__15436){
var vec__15437 = p__15436;
var cond_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15437,(0),null);
var c_rule_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15437,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rule_id,c_rule_id);
});})(conditions))
,conditions);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,filtered);
});
my_project.rules.q_actions_for_rule = (function my_project$rules$q_actions_for_rule(rule_id){
var conditions = cljs.core.cst$kw$action_SLASH_for_DASH_rule.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.rules.tables));
var filtered = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (conditions){
return (function (p__15440){
var vec__15441 = p__15440;
var action_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15441,(0),null);
var c_rule_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15441,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rule_id,c_rule_id);
});})(conditions))
,conditions);
return filtered;
});
my_project.rules.q_predicate_for_condition = (function my_project$rules$q_predicate_for_condition(cond_id){
var predicate = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(my_project.rules.tables),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$predicate_SLASH_for_DASH_condition,cond_id], null));
return predicate;
});
my_project.rules.q_action_function_for_action = (function my_project$rules$q_action_function_for_action(action_id){
var action = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(my_project.rules.tables),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_function_SLASH_for_DASH_action,action_id], null));
return action;
});
my_project.rules.q_rule_active_QMARK_ = (function my_project$rules$q_rule_active_QMARK_(rule_id){
var conditions = my_project.rules.q_conditions_for_rule(rule_id);
var has_stuff = (!(cljs.core.empty_QMARK_(conditions)));
var all = ((has_stuff) && (cljs.core.every_QMARK_(((function (conditions,has_stuff){
return (function (p__15449){
var vec__15450 = p__15449;
var condition_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15450,(0),null);
var rule_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15450,(1),null);
var fexpr__15453 = cljs.core.cst$kw$predicate.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_predicate_for_condition(condition_id));
return (fexpr__15453.cljs$core$IFn$_invoke$arity$0 ? fexpr__15453.cljs$core$IFn$_invoke$arity$0() : fexpr__15453.call(null));
});})(conditions,has_stuff))
,conditions)));
return all;
});
my_project.rules.q_selected = (function my_project$rules$q_selected(){
return cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.rules.tables));
});
if((typeof my_project !== 'undefined') && (typeof my_project.rules !== 'undefined') && (typeof my_project.rules.show_log_message !== 'undefined')){
} else {
my_project.rules.show_log_message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
my_project.rules.hide_log_message_BANG_ = (function my_project$rules$hide_log_message_BANG_(){
return cljs.core.reset_BANG_(my_project.rules.show_log_message,false);
});
my_project.rules.show_log_message_BANG_ = (function my_project$rules$show_log_message_BANG_(){
return cljs.core.reset_BANG_(my_project.rules.show_log_message,true);
});
my_project.rules.q_show_log_message_QMARK_ = (function my_project$rules$q_show_log_message_QMARK_(){
return cljs.core.deref(my_project.rules.show_log_message);
});
if((typeof my_project !== 'undefined') && (typeof my_project.rules !== 'undefined') && (typeof my_project.rules.menu_items !== 'undefined')){
} else {
my_project.rules.menu_items = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(0),cljs.core.cst$kw$name,"Select Condition",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4),(5)], null),cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"System",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$name,"Mouse",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8),(9)], null),cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$name,"Keyboard",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(22),(23),(24),(25),(26),(27)], null),cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(4),cljs.core.cst$kw$name,"Sound",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(5),cljs.core.cst$kw$name,"Display",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(6),cljs.core.cst$kw$name,"Mouse was released",cljs.core.cst$kw$children,null,cljs.core.cst$kw$action,(function (){
var id = my_project.rules.new_id();
my_project.rules.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_project.rules.add_condition_to_rule_BANG_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,my_project.rules.q_selected()], 0));

return my_project.rules.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_project.rules.set_predicate_for_condition,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,my_project.rules.mouse_up_QMARK_], 0));
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(7),cljs.core.cst$kw$name,"Mouse was pressed",cljs.core.cst$kw$children,null,cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(8),cljs.core.cst$kw$name,"Mouse is down",cljs.core.cst$kw$children,null,cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(9),cljs.core.cst$kw$name,"Mouse is up",cljs.core.cst$kw$children,null,cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(10),cljs.core.cst$kw$name,"Select Action",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(12),(13),(14),(15)], null),cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(11),cljs.core.cst$kw$name,"System",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(17),(18),(19),(20),(21)], null),cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(12),cljs.core.cst$kw$name,"Mouse",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(13),cljs.core.cst$kw$name,"Keyboard",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(14),cljs.core.cst$kw$name,"Sound",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(15),cljs.core.cst$kw$name,"Display",cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(16),cljs.core.cst$kw$name,"Log Message",cljs.core.cst$kw$children,null,cljs.core.cst$kw$action,(function (){
return my_project.rules.show_log_message_BANG_();
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(17),cljs.core.cst$kw$name,"Throw Error",cljs.core.cst$kw$children,null,cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(18),cljs.core.cst$kw$name,"Throw Warning",cljs.core.cst$kw$children,null,cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(19),cljs.core.cst$kw$name,"Open New Application",cljs.core.cst$kw$children,null,cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(20),cljs.core.cst$kw$name,"Hide Application",cljs.core.cst$kw$children,null,cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(21),cljs.core.cst$kw$name,"Exit Application",cljs.core.cst$kw$children,null,cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(22),cljs.core.cst$kw$name,"Any key was pressed",cljs.core.cst$kw$children,null,cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(23),cljs.core.cst$kw$name,"Any key was released",cljs.core.cst$kw$children,null,cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(24),cljs.core.cst$kw$name,"Any key is down",cljs.core.cst$kw$children,null,cljs.core.cst$kw$action,(function (){
var id = my_project.rules.new_id();
my_project.rules.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_project.rules.add_condition_to_rule_BANG_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,my_project.rules.q_selected()], 0));

return my_project.rules.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_project.rules.set_predicate_for_condition,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,my_project.rules.key_down_QMARK_], 0));
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(25),cljs.core.cst$kw$name,"A key was pressed",cljs.core.cst$kw$children,null,cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(26),cljs.core.cst$kw$name,"A key was released",cljs.core.cst$kw$children,null,cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,(27),cljs.core.cst$kw$name,"A key is down",cljs.core.cst$kw$children,null,cljs.core.cst$kw$action,(function (){
return cljs.core.List.EMPTY;
})], null)], null));
}
if((typeof my_project !== 'undefined') && (typeof my_project.rules !== 'undefined') && (typeof my_project.rules.menu !== 'undefined')){
} else {
my_project.rules.menu = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
my_project.rules.set_menu_BANG_ = (function my_project$rules$set_menu_BANG_(id){
return cljs.core.reset_BANG_(my_project.rules.menu,id);
});
my_project.rules.q_menu_to_display = (function my_project$rules$q_menu_to_display(){
return cljs.core.deref(my_project.rules.menu);
});
my_project.rules.q_children_for_menu = (function my_project$rules$q_children_for_menu(id){
var menu_items = cljs.core.deref(my_project.rules.menu_items);
var filtered = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (menu_items){
return (function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item));
});})(menu_items))
,menu_items);
return cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(cljs.core.first(filtered));
});
my_project.rules.q_props_for_menu = (function my_project$rules$q_props_for_menu(id){
var menu_items = cljs.core.deref(my_project.rules.menu_items);
var filtered = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (menu_items){
return (function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(item));
});})(menu_items))
,menu_items);
return cljs.core.first(filtered);
});
if((typeof my_project !== 'undefined') && (typeof my_project.rules !== 'undefined') && (typeof my_project.rules.tables !== 'undefined')){
} else {
my_project.rules.tables = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
my_project.rules.timestamp = (function my_project$rules$timestamp(){
return window.performance.now();
});
if((typeof my_project !== 'undefined') && (typeof my_project.rules !== 'undefined') && (typeof my_project.rules.now !== 'undefined')){
} else {
my_project.rules.now = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof my_project !== 'undefined') && (typeof my_project.rules !== 'undefined') && (typeof my_project.rules.dt !== 'undefined')){
} else {
my_project.rules.dt = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof my_project !== 'undefined') && (typeof my_project.rules !== 'undefined') && (typeof my_project.rules.l !== 'undefined')){
} else {
my_project.rules.l = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(my_project.rules.timestamp());
}
if((typeof my_project !== 'undefined') && (typeof my_project.rules !== 'undefined') && (typeof my_project.rules.step !== 'undefined')){
} else {
my_project.rules.step = ((1) / (60));
}
if((typeof my_project !== 'undefined') && (typeof my_project.rules !== 'undefined') && (typeof my_project.rules.steps !== 'undefined')){
} else {
my_project.rules.steps = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof my_project !== 'undefined') && (typeof my_project.rules !== 'undefined') && (typeof my_project.rules.frames !== 'undefined')){
} else {
my_project.rules.frames = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
my_project.rules.position_system = (function my_project$rules$position_system(){
var positions = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.rules.tables));
var pending_pos = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (positions){
return (function (p){
var x = cljs.core.first(p);
var y = cljs.core.second(p);
var newx = (((x < (1000)))?(x + (5)):(0));
var newy = (((y < (800)))?(y + (5)):(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [newx,newy], null);
});})(positions))
,positions);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.rules.tables,cljs.core.assoc,cljs.core.cst$kw$position,pending_pos);
});
my_project.rules.click_system = (function my_project$rules$click_system(){
var clicked = cljs.core.cst$kw$mouse_DASH_clicked_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.rules.tables));
if(cljs.core.truth_(clicked)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.rules.tables,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_clicked_QMARK_,false);
} else {
return null;
}
});
my_project.rules.upon_down = (function my_project$rules$upon_down(){
var i = cljs.core.cst$kw$instant_DASH_mouse.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.rules.tables));
if(cljs.core.truth_(i)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.rules.tables,cljs.core.assoc,cljs.core.cst$kw$instant_DASH_mouse,null);
} else {
return null;
}
});
my_project.rules.key_system = (function my_project$rules$key_system(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_project.rules.tables,cljs.core.assoc,cljs.core.cst$kw$instant_DASH_Enter,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$instant_DASH_ArrowUp,null,cljs.core.cst$kw$instant_DASH_ArrowDown,null,cljs.core.cst$kw$instant_DASH_ArrowRight,null,cljs.core.cst$kw$instant_DASH_ArrowLeft,null], 0));
});
my_project.rules.rule_eval_system = (function my_project$rules$rule_eval_system(){
var seq__15454 = cljs.core.seq(my_project.rules.q_sheets((1)));
var chunk__15455 = null;
var count__15456 = (0);
var i__15457 = (0);
while(true){
if((i__15457 < count__15456)){
var vec__15624 = chunk__15455.cljs$core$IIndexed$_nth$arity$2(null,i__15457);
var sheet_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15624,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15624,(1),null);
var seq__15627_15790 = cljs.core.seq(my_project.rules.q_rules_for_sheet(sheet_id));
var chunk__15628_15791 = null;
var count__15629_15792 = (0);
var i__15630_15793 = (0);
while(true){
if((i__15630_15793 < count__15629_15792)){
var vec__15669_15794 = chunk__15628_15791.cljs$core$IIndexed$_nth$arity$2(null,i__15630_15793);
var rule_id_15795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15669_15794,(0),null);
var __15796__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15669_15794,(1),null);
if(my_project.rules.q_rule_active_QMARK_(rule_id_15795)){
var seq__15672_15797 = cljs.core.seq(my_project.rules.q_actions_for_rule(rule_id_15795));
var chunk__15673_15798 = null;
var count__15674_15799 = (0);
var i__15675_15800 = (0);
while(true){
if((i__15675_15800 < count__15674_15799)){
var vec__15682_15801 = chunk__15673_15798.cljs$core$IIndexed$_nth$arity$2(null,i__15675_15800);
var action_id_15802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15682_15801,(0),null);
var __15803__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15682_15801,(1),null);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_action_function_for_action(action_id_15802)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_action_function_for_action(action_id_15802))], null));


var G__15804 = seq__15672_15797;
var G__15805 = chunk__15673_15798;
var G__15806 = count__15674_15799;
var G__15807 = (i__15675_15800 + (1));
seq__15672_15797 = G__15804;
chunk__15673_15798 = G__15805;
count__15674_15799 = G__15806;
i__15675_15800 = G__15807;
continue;
} else {
var temp__5735__auto___15808 = cljs.core.seq(seq__15672_15797);
if(temp__5735__auto___15808){
var seq__15672_15809__$1 = temp__5735__auto___15808;
if(cljs.core.chunked_seq_QMARK_(seq__15672_15809__$1)){
var c__4550__auto___15810 = cljs.core.chunk_first(seq__15672_15809__$1);
var G__15811 = cljs.core.chunk_rest(seq__15672_15809__$1);
var G__15812 = c__4550__auto___15810;
var G__15813 = cljs.core.count(c__4550__auto___15810);
var G__15814 = (0);
seq__15672_15797 = G__15811;
chunk__15673_15798 = G__15812;
count__15674_15799 = G__15813;
i__15675_15800 = G__15814;
continue;
} else {
var vec__15685_15815 = cljs.core.first(seq__15672_15809__$1);
var action_id_15816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15685_15815,(0),null);
var __15817__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15685_15815,(1),null);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_action_function_for_action(action_id_15816)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_action_function_for_action(action_id_15816))], null));


var G__15818 = cljs.core.next(seq__15672_15809__$1);
var G__15819 = null;
var G__15820 = (0);
var G__15821 = (0);
seq__15672_15797 = G__15818;
chunk__15673_15798 = G__15819;
count__15674_15799 = G__15820;
i__15675_15800 = G__15821;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__15822 = seq__15627_15790;
var G__15823 = chunk__15628_15791;
var G__15824 = count__15629_15792;
var G__15825 = (i__15630_15793 + (1));
seq__15627_15790 = G__15822;
chunk__15628_15791 = G__15823;
count__15629_15792 = G__15824;
i__15630_15793 = G__15825;
continue;
} else {
var temp__5735__auto___15826 = cljs.core.seq(seq__15627_15790);
if(temp__5735__auto___15826){
var seq__15627_15827__$1 = temp__5735__auto___15826;
if(cljs.core.chunked_seq_QMARK_(seq__15627_15827__$1)){
var c__4550__auto___15828 = cljs.core.chunk_first(seq__15627_15827__$1);
var G__15829 = cljs.core.chunk_rest(seq__15627_15827__$1);
var G__15830 = c__4550__auto___15828;
var G__15831 = cljs.core.count(c__4550__auto___15828);
var G__15832 = (0);
seq__15627_15790 = G__15829;
chunk__15628_15791 = G__15830;
count__15629_15792 = G__15831;
i__15630_15793 = G__15832;
continue;
} else {
var vec__15688_15833 = cljs.core.first(seq__15627_15827__$1);
var rule_id_15834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15688_15833,(0),null);
var __15835__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15688_15833,(1),null);
if(my_project.rules.q_rule_active_QMARK_(rule_id_15834)){
var seq__15691_15836 = cljs.core.seq(my_project.rules.q_actions_for_rule(rule_id_15834));
var chunk__15692_15837 = null;
var count__15693_15838 = (0);
var i__15694_15839 = (0);
while(true){
if((i__15694_15839 < count__15693_15838)){
var vec__15701_15840 = chunk__15692_15837.cljs$core$IIndexed$_nth$arity$2(null,i__15694_15839);
var action_id_15841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15701_15840,(0),null);
var __15842__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15701_15840,(1),null);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_action_function_for_action(action_id_15841)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_action_function_for_action(action_id_15841))], null));


var G__15843 = seq__15691_15836;
var G__15844 = chunk__15692_15837;
var G__15845 = count__15693_15838;
var G__15846 = (i__15694_15839 + (1));
seq__15691_15836 = G__15843;
chunk__15692_15837 = G__15844;
count__15693_15838 = G__15845;
i__15694_15839 = G__15846;
continue;
} else {
var temp__5735__auto___15847__$1 = cljs.core.seq(seq__15691_15836);
if(temp__5735__auto___15847__$1){
var seq__15691_15848__$1 = temp__5735__auto___15847__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15691_15848__$1)){
var c__4550__auto___15849 = cljs.core.chunk_first(seq__15691_15848__$1);
var G__15850 = cljs.core.chunk_rest(seq__15691_15848__$1);
var G__15851 = c__4550__auto___15849;
var G__15852 = cljs.core.count(c__4550__auto___15849);
var G__15853 = (0);
seq__15691_15836 = G__15850;
chunk__15692_15837 = G__15851;
count__15693_15838 = G__15852;
i__15694_15839 = G__15853;
continue;
} else {
var vec__15704_15854 = cljs.core.first(seq__15691_15848__$1);
var action_id_15855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15704_15854,(0),null);
var __15856__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15704_15854,(1),null);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_action_function_for_action(action_id_15855)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_action_function_for_action(action_id_15855))], null));


var G__15857 = cljs.core.next(seq__15691_15848__$1);
var G__15858 = null;
var G__15859 = (0);
var G__15860 = (0);
seq__15691_15836 = G__15857;
chunk__15692_15837 = G__15858;
count__15693_15838 = G__15859;
i__15694_15839 = G__15860;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__15861 = cljs.core.next(seq__15627_15827__$1);
var G__15862 = null;
var G__15863 = (0);
var G__15864 = (0);
seq__15627_15790 = G__15861;
chunk__15628_15791 = G__15862;
count__15629_15792 = G__15863;
i__15630_15793 = G__15864;
continue;
}
} else {
}
}
break;
}


var G__15865 = seq__15454;
var G__15866 = chunk__15455;
var G__15867 = count__15456;
var G__15868 = (i__15457 + (1));
seq__15454 = G__15865;
chunk__15455 = G__15866;
count__15456 = G__15867;
i__15457 = G__15868;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__15454);
if(temp__5735__auto__){
var seq__15454__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15454__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__15454__$1);
var G__15869 = cljs.core.chunk_rest(seq__15454__$1);
var G__15870 = c__4550__auto__;
var G__15871 = cljs.core.count(c__4550__auto__);
var G__15872 = (0);
seq__15454 = G__15869;
chunk__15455 = G__15870;
count__15456 = G__15871;
i__15457 = G__15872;
continue;
} else {
var vec__15707 = cljs.core.first(seq__15454__$1);
var sheet_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15707,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15707,(1),null);
var seq__15710_15873 = cljs.core.seq(my_project.rules.q_rules_for_sheet(sheet_id));
var chunk__15711_15874 = null;
var count__15712_15875 = (0);
var i__15713_15876 = (0);
while(true){
if((i__15713_15876 < count__15712_15875)){
var vec__15752_15877 = chunk__15711_15874.cljs$core$IIndexed$_nth$arity$2(null,i__15713_15876);
var rule_id_15878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15752_15877,(0),null);
var __15879__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15752_15877,(1),null);
if(my_project.rules.q_rule_active_QMARK_(rule_id_15878)){
var seq__15755_15880 = cljs.core.seq(my_project.rules.q_actions_for_rule(rule_id_15878));
var chunk__15756_15881 = null;
var count__15757_15882 = (0);
var i__15758_15883 = (0);
while(true){
if((i__15758_15883 < count__15757_15882)){
var vec__15765_15884 = chunk__15756_15881.cljs$core$IIndexed$_nth$arity$2(null,i__15758_15883);
var action_id_15885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15765_15884,(0),null);
var __15886__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15765_15884,(1),null);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_action_function_for_action(action_id_15885)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_action_function_for_action(action_id_15885))], null));


var G__15887 = seq__15755_15880;
var G__15888 = chunk__15756_15881;
var G__15889 = count__15757_15882;
var G__15890 = (i__15758_15883 + (1));
seq__15755_15880 = G__15887;
chunk__15756_15881 = G__15888;
count__15757_15882 = G__15889;
i__15758_15883 = G__15890;
continue;
} else {
var temp__5735__auto___15891__$1 = cljs.core.seq(seq__15755_15880);
if(temp__5735__auto___15891__$1){
var seq__15755_15892__$1 = temp__5735__auto___15891__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15755_15892__$1)){
var c__4550__auto___15893 = cljs.core.chunk_first(seq__15755_15892__$1);
var G__15894 = cljs.core.chunk_rest(seq__15755_15892__$1);
var G__15895 = c__4550__auto___15893;
var G__15896 = cljs.core.count(c__4550__auto___15893);
var G__15897 = (0);
seq__15755_15880 = G__15894;
chunk__15756_15881 = G__15895;
count__15757_15882 = G__15896;
i__15758_15883 = G__15897;
continue;
} else {
var vec__15768_15898 = cljs.core.first(seq__15755_15892__$1);
var action_id_15899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15768_15898,(0),null);
var __15900__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15768_15898,(1),null);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_action_function_for_action(action_id_15899)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_action_function_for_action(action_id_15899))], null));


var G__15901 = cljs.core.next(seq__15755_15892__$1);
var G__15902 = null;
var G__15903 = (0);
var G__15904 = (0);
seq__15755_15880 = G__15901;
chunk__15756_15881 = G__15902;
count__15757_15882 = G__15903;
i__15758_15883 = G__15904;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__15905 = seq__15710_15873;
var G__15906 = chunk__15711_15874;
var G__15907 = count__15712_15875;
var G__15908 = (i__15713_15876 + (1));
seq__15710_15873 = G__15905;
chunk__15711_15874 = G__15906;
count__15712_15875 = G__15907;
i__15713_15876 = G__15908;
continue;
} else {
var temp__5735__auto___15909__$1 = cljs.core.seq(seq__15710_15873);
if(temp__5735__auto___15909__$1){
var seq__15710_15910__$1 = temp__5735__auto___15909__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15710_15910__$1)){
var c__4550__auto___15911 = cljs.core.chunk_first(seq__15710_15910__$1);
var G__15912 = cljs.core.chunk_rest(seq__15710_15910__$1);
var G__15913 = c__4550__auto___15911;
var G__15914 = cljs.core.count(c__4550__auto___15911);
var G__15915 = (0);
seq__15710_15873 = G__15912;
chunk__15711_15874 = G__15913;
count__15712_15875 = G__15914;
i__15713_15876 = G__15915;
continue;
} else {
var vec__15771_15916 = cljs.core.first(seq__15710_15910__$1);
var rule_id_15917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15771_15916,(0),null);
var __15918__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15771_15916,(1),null);
if(my_project.rules.q_rule_active_QMARK_(rule_id_15917)){
var seq__15774_15919 = cljs.core.seq(my_project.rules.q_actions_for_rule(rule_id_15917));
var chunk__15775_15920 = null;
var count__15776_15921 = (0);
var i__15777_15922 = (0);
while(true){
if((i__15777_15922 < count__15776_15921)){
var vec__15784_15923 = chunk__15775_15920.cljs$core$IIndexed$_nth$arity$2(null,i__15777_15922);
var action_id_15924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15784_15923,(0),null);
var __15925__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15784_15923,(1),null);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_action_function_for_action(action_id_15924)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_action_function_for_action(action_id_15924))], null));


var G__15926 = seq__15774_15919;
var G__15927 = chunk__15775_15920;
var G__15928 = count__15776_15921;
var G__15929 = (i__15777_15922 + (1));
seq__15774_15919 = G__15926;
chunk__15775_15920 = G__15927;
count__15776_15921 = G__15928;
i__15777_15922 = G__15929;
continue;
} else {
var temp__5735__auto___15930__$2 = cljs.core.seq(seq__15774_15919);
if(temp__5735__auto___15930__$2){
var seq__15774_15931__$1 = temp__5735__auto___15930__$2;
if(cljs.core.chunked_seq_QMARK_(seq__15774_15931__$1)){
var c__4550__auto___15932 = cljs.core.chunk_first(seq__15774_15931__$1);
var G__15933 = cljs.core.chunk_rest(seq__15774_15931__$1);
var G__15934 = c__4550__auto___15932;
var G__15935 = cljs.core.count(c__4550__auto___15932);
var G__15936 = (0);
seq__15774_15919 = G__15933;
chunk__15775_15920 = G__15934;
count__15776_15921 = G__15935;
i__15777_15922 = G__15936;
continue;
} else {
var vec__15787_15937 = cljs.core.first(seq__15774_15931__$1);
var action_id_15938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15787_15937,(0),null);
var __15939__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15787_15937,(1),null);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_action_function_for_action(action_id_15938)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_action_function_for_action(action_id_15938))], null));


var G__15940 = cljs.core.next(seq__15774_15931__$1);
var G__15941 = null;
var G__15942 = (0);
var G__15943 = (0);
seq__15774_15919 = G__15940;
chunk__15775_15920 = G__15941;
count__15776_15921 = G__15942;
i__15777_15922 = G__15943;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__15944 = cljs.core.next(seq__15710_15910__$1);
var G__15945 = null;
var G__15946 = (0);
var G__15947 = (0);
seq__15710_15873 = G__15944;
chunk__15711_15874 = G__15945;
count__15712_15875 = G__15946;
i__15713_15876 = G__15947;
continue;
}
} else {
}
}
break;
}


var G__15948 = cljs.core.next(seq__15454__$1);
var G__15949 = null;
var G__15950 = (0);
var G__15951 = (0);
seq__15454 = G__15948;
chunk__15455 = G__15949;
count__15456 = G__15950;
i__15457 = G__15951;
continue;
}
} else {
return null;
}
}
break;
}
});
my_project.rules.sim = (function my_project$rules$sim(step){
my_project.rules.rule_eval_system();

my_project.rules.click_system();

my_project.rules.upon_down();

my_project.rules.key_system();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.rules.steps,cljs.core.inc);
});
my_project.rules.render = (function my_project$rules$render(dt){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(my_project.rules.frames,cljs.core.inc);
});
my_project.rules.frame = (function my_project$rules$frame(){
cljs.core.reset_BANG_(my_project.rules.now,my_project.rules.timestamp());

cljs.core.reset_BANG_(my_project.rules.dt,(cljs.core.deref(my_project.rules.dt) + (function (){var x__4222__auto__ = (1);
var y__4223__auto__ = ((cljs.core.deref(my_project.rules.now) - cljs.core.deref(my_project.rules.l)) / (1000));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()));

while(true){
if((cljs.core.deref(my_project.rules.dt) > my_project.rules.step)){
my_project.rules.sim(my_project.rules.step);

cljs.core.reset_BANG_(my_project.rules.dt,(cljs.core.deref(my_project.rules.dt) - my_project.rules.step));

continue;
} else {
}
break;
}

my_project.rules.render(cljs.core.deref(my_project.rules.dt));

cljs.core.reset_BANG_(my_project.rules.l,cljs.core.deref(my_project.rules.now));

return window.requestAnimationFrame(my_project.rules.frame);
});
my_project.rules.mouse_move = (function my_project$rules$mouse_move(e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.rules.tables,cljs.core.assoc,cljs.core.cst$kw$current_DASH_mouse_DASH_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null));
});
my_project.rules.mouse_down = (function my_project$rules$mouse_down(e){
var c = cljs.core.cst$kw$current_DASH_mouse_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.rules.tables));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_project.rules.tables,cljs.core.assoc,cljs.core.cst$kw$instant_DASH_mouse,cljs.core.cst$kw$down,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$current_DASH_mouse_DASH_state,cljs.core.cst$kw$down], 0));
});
my_project.rules.mouse_up = (function my_project$rules$mouse_up(e){
var c = cljs.core.cst$kw$current_DASH_mouse_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.rules.tables));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_project.rules.tables,cljs.core.assoc,cljs.core.cst$kw$instant_DASH_mouse,cljs.core.cst$kw$up,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$current_DASH_mouse_DASH_state,cljs.core.cst$kw$up], 0));
});
my_project.rules.mouse_click = (function my_project$rules$mouse_click(e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_project.rules.tables,cljs.core.assoc,cljs.core.cst$kw$mouse_DASH_clicked_QMARK_,true);
});
my_project.rules.key_pressed = (function my_project$rules$key_pressed(key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_project.rules.tables,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key),cljs.core.cst$kw$down,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["instant-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')),cljs.core.cst$kw$down], 0));
});
my_project.rules.key_unpressed = (function my_project$rules$key_unpressed(key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_project.rules.tables,cljs.core.assoc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key),cljs.core.cst$kw$up,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["instant-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')),cljs.core.cst$kw$up], 0));
});
my_project.rules.key_press = (function my_project$rules$key_press(e){
var key = e.key;
var repeat_QMARK_ = e.repeat;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key," ")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.target,document.body)))){
} else {
}

if(cljs.core.truth_(repeat_QMARK_)){
return null;
} else {
my_project.rules.key_pressed("Any");

var G__15952 = key;
switch (G__15952) {
case "Enter":
return my_project.rules.key_pressed(key);

break;
case "Space":
return my_project.rules.key_pressed(key);

break;
case "ArrowUp":
return my_project.rules.key_pressed(key);

break;
case "ArrowDown":
return my_project.rules.key_pressed(key);

break;
case "ArrowRight":
return my_project.rules.key_pressed(key);

break;
case "ArrowLeft":
return my_project.rules.key_pressed(key);

break;
default:
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["idk"], 0));

}
}
});
my_project.rules.key_up = (function my_project$rules$key_up(e){
var key = e.key;
var repeat_QMARK_ = e.repeat;
if(cljs.core.truth_(repeat_QMARK_)){
return null;
} else {
my_project.rules.key_unpressed("Any");

var G__15954 = key;
switch (G__15954) {
case "Enter":
return my_project.rules.key_unpressed(key);

break;
case "Space":
return my_project.rules.key_unpressed(key);

break;
case "ArrowUp":
return my_project.rules.key_unpressed(key);

break;
case "ArrowDown":
return my_project.rules.key_unpressed(key);

break;
case "ArrowRight":
return my_project.rules.key_unpressed(key);

break;
case "ArrowLeft":
return my_project.rules.key_unpressed(key);

break;
default:
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["idk"], 0));

}
}
});
my_project.rules.rule_choices_view = (function my_project$rules$rule_choices_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(function (){var iter__4523__auto__ = (function my_project$rules$rule_choices_view_$_iter__15956(s__15957){
return (new cljs.core.LazySeq(null,(function (){
var s__15957__$1 = s__15957;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15957__$1);
if(temp__5735__auto__){
var s__15957__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15957__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__15957__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__15959 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__15958 = (0);
while(true){
if((i__15958 < size__4522__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__15958);
cljs.core.chunk_append(b__15959,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,c], null)));

var G__15960 = (i__15958 + (1));
i__15958 = G__15960;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15959),my_project$rules$rule_choices_view_$_iter__15956(cljs.core.chunk_rest(s__15957__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15959),null);
}
} else {
var c = cljs.core.first(s__15957__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,c], null)),my_project$rules$rule_choices_view_$_iter__15956(cljs.core.rest(s__15957__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(my_project.rules.rule_choices);
})()], null);
});
my_project.rules.rule_evaluator = (function my_project$rules$rule_evaluator(){
var seq__15961 = cljs.core.seq(my_project.rules.rule_choices);
var chunk__15962 = null;
var count__15963 = (0);
var i__15964 = (0);
while(true){
if((i__15964 < count__15963)){
var rule = chunk__15962.cljs$core$IIndexed$_nth$arity$2(null,i__15964);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__15967 = cljs.core.cst$kw$predicate.cljs$core$IFn$_invoke$arity$1(rule);
return (fexpr__15967.cljs$core$IFn$_invoke$arity$0 ? fexpr__15967.cljs$core$IFn$_invoke$arity$0() : fexpr__15967.call(null));
})()], 0));


var G__15969 = seq__15961;
var G__15970 = chunk__15962;
var G__15971 = count__15963;
var G__15972 = (i__15964 + (1));
seq__15961 = G__15969;
chunk__15962 = G__15970;
count__15963 = G__15971;
i__15964 = G__15972;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__15961);
if(temp__5735__auto__){
var seq__15961__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15961__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__15961__$1);
var G__15973 = cljs.core.chunk_rest(seq__15961__$1);
var G__15974 = c__4550__auto__;
var G__15975 = cljs.core.count(c__4550__auto__);
var G__15976 = (0);
seq__15961 = G__15973;
chunk__15962 = G__15974;
count__15963 = G__15975;
i__15964 = G__15976;
continue;
} else {
var rule = cljs.core.first(seq__15961__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__15968 = cljs.core.cst$kw$predicate.cljs$core$IFn$_invoke$arity$1(rule);
return (fexpr__15968.cljs$core$IFn$_invoke$arity$0 ? fexpr__15968.cljs$core$IFn$_invoke$arity$0() : fexpr__15968.call(null));
})()], 0));


var G__15977 = cljs.core.next(seq__15961__$1);
var G__15978 = null;
var G__15979 = (0);
var G__15980 = (0);
seq__15961 = G__15977;
chunk__15962 = G__15978;
count__15963 = G__15979;
i__15964 = G__15980;
continue;
}
} else {
return null;
}
}
break;
}
});
my_project.rules.primary_btn_view = (function my_project$rules$primary_btn_view(text,click){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$color,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$_DASH_webkit_DASH_user_DASH_select,cljs.core.cst$kw$background,cljs.core.cst$kw$cursor,cljs.core.cst$kw$padding,cljs.core.cst$kw$appearance,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$user_DASH_select],["#2f80ed","13px","bold","none","#eaf2fd","pointer","10px 32px","none",(0),"8px","none"]),cljs.core.cst$kw$on_DASH_click,click], null),text], null)], null);
});
my_project.rules.rule_view = (function my_project$rules$rule_view(text,id){
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_project.rules.q_selected(),id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$line_DASH_height,cljs.core.cst$kw$box_DASH_shadow,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$_DASH_webkit_DASH_user_DASH_select,cljs.core.cst$kw$background,cljs.core.cst$kw$padding,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$margin_DASH_bottom,cljs.core.cst$kw$user_DASH_select],["16px",((selected_QMARK_)?"0 0 0 2px #2f80ed, 0 4px 12px -4px rgba(0,0,0,.08)":"0 4px 12px -4px rgba(0,0,0,.08)"),"12px","bold","none","white","12px 16px","1px solid rgba(0, 0, 0, 0.08)","20px","4px","none"]),cljs.core.cst$kw$on_DASH_click,((function (selected_QMARK_){
return (function (e){
e.preventDefault();

e.stopPropagation();

return my_project.rules.select_BANG_(id);
});})(selected_QMARK_))
], null),text], null);
});
my_project.rules.condition_view = (function my_project$rules$condition_view(text,id){
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_project.rules.q_selected(),id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$padding,"12px 16px",cljs.core.cst$kw$background,"white",cljs.core.cst$kw$border_DASH_radius,"20px",cljs.core.cst$kw$box_DASH_shadow,((selected_QMARK_)?"0 0 0 2px #2f80ed, 0 4px 12px -4px rgba(0,0,0,.08)":"0 4px 12px -4px rgba(0,0,0,.08)"),cljs.core.cst$kw$border,"1px solid rgba(0, 0, 0, 0.08)",cljs.core.cst$kw$margin_DASH_bottom,"4px",cljs.core.cst$kw$font_DASH_size,"12px",cljs.core.cst$kw$font_DASH_weight,"bold"], null),cljs.core.cst$kw$on_DASH_click,((function (selected_QMARK_){
return (function (e){
e.preventDefault();

e.stopPropagation();

return my_project.rules.select_BANG_(id);
});})(selected_QMARK_))
], null),text], null);
});
my_project.rules.rules_view = (function my_project$rules$rules_view(rule_id){
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_project.rules.q_selected(),rule_id);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$border_DASH_radius,"8px",cljs.core.cst$kw$background,"#c4c4c41a",cljs.core.cst$kw$margin_DASH_top,"16px",cljs.core.cst$kw$padding,"8px 16px 16px 16px",cljs.core.cst$kw$box_DASH_shadow,((selected_QMARK_)?"0 0 0 2px #2f80ed, inset 0 2px 8px rgba(0,0,0,0.08)":"inset 0 2px 8px rgba(0,0,0,0.08)"),cljs.core.cst$kw$display,"flex"], null),cljs.core.cst$kw$on_DASH_click,((function (selected_QMARK_){
return (function (e){
e.preventDefault();

e.stopPropagation();

return my_project.rules.select_BANG_(rule_id);
});})(selected_QMARK_))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flex,"1 0 50%",cljs.core.cst$kw$padding_DASH_right,"4px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$font_DASH_size,"9px",cljs.core.cst$kw$font_DASH_weight,"bold",cljs.core.cst$kw$line_DASH_height,"12px",cljs.core.cst$kw$opacity,"0.5",cljs.core.cst$kw$padding_DASH_bottom,"4px",cljs.core.cst$kw$padding_DASH_left,"16px",cljs.core.cst$kw$text_DASH_transform,"uppercase"], null)], null),["Condition",((my_project.rules.q_rule_active_QMARK_(rule_id))?" Active":null)].join('')], null),(function (){var iter__4523__auto__ = ((function (selected_QMARK_){
return (function my_project$rules$rules_view_$_iter__15981(s__15982){
return (new cljs.core.LazySeq(null,((function (selected_QMARK_){
return (function (){
var s__15982__$1 = s__15982;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15982__$1);
if(temp__5735__auto__){
var s__15982__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15982__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__15982__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__15984 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__15983 = (0);
while(true){
if((i__15983 < size__4522__auto__)){
var vec__15985 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__15983);
var cond_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15985,(0),null);
var rule_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15985,(1),null);
cljs.core.chunk_append(b__15984,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.rules.condition_view,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$2(my_project.rules.q_predicate_for_condition(cond_id),cond_id)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cond_id], null)));

var G__16001 = (i__15983 + (1));
i__15983 = G__16001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15984),my_project$rules$rules_view_$_iter__15981(cljs.core.chunk_rest(s__15982__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15984),null);
}
} else {
var vec__15988 = cljs.core.first(s__15982__$2);
var cond_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15988,(0),null);
var rule_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15988,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.rules.condition_view,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$2(my_project.rules.q_predicate_for_condition(cond_id),cond_id)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cond_id], null)),my_project$rules$rules_view_$_iter__15981(cljs.core.rest(s__15982__$2)));
}
} else {
return null;
}
break;
}
});})(selected_QMARK_))
,null,null));
});})(selected_QMARK_))
;
return iter__4523__auto__(my_project.rules.q_conditions_for_rule(rule_id));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$font_DASH_size,"10px",cljs.core.cst$kw$font_DASH_weight,"bold",cljs.core.cst$kw$padding,"4px",cljs.core.cst$kw$color,"#2f80ed",cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,((function (selected_QMARK_){
return (function (){
return my_project.rules.set_menu_BANG_((0));
});})(selected_QMARK_))
], null),"Add Condition..."], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flex,"1 0 50%",cljs.core.cst$kw$padding_DASH_left,"4px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$font_DASH_size,"9px",cljs.core.cst$kw$font_DASH_weight,"bold",cljs.core.cst$kw$line_DASH_height,"12px",cljs.core.cst$kw$opacity,"0.5",cljs.core.cst$kw$padding_DASH_bottom,"4px",cljs.core.cst$kw$padding_DASH_left,"16px",cljs.core.cst$kw$text_DASH_transform,"uppercase"], null)], null),"Action"], null),(function (){var iter__4523__auto__ = ((function (selected_QMARK_){
return (function my_project$rules$rules_view_$_iter__15991(s__15992){
return (new cljs.core.LazySeq(null,((function (selected_QMARK_){
return (function (){
var s__15992__$1 = s__15992;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15992__$1);
if(temp__5735__auto__){
var s__15992__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15992__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__15992__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__15994 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__15993 = (0);
while(true){
if((i__15993 < size__4522__auto__)){
var vec__15995 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__15993);
var action_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15995,(0),null);
var rule_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15995,(1),null);
cljs.core.chunk_append(b__15994,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.rules.rule_view,["Log Message: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_action_function_for_action(action_id))),"\""].join(''),action_id], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,action_id], null)));

var G__16002 = (i__15993 + (1));
i__15993 = G__16002;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15994),my_project$rules$rules_view_$_iter__15991(cljs.core.chunk_rest(s__15992__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15994),null);
}
} else {
var vec__15998 = cljs.core.first(s__15992__$2);
var action_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15998,(0),null);
var rule_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15998,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.rules.rule_view,["Log Message: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_action_function_for_action(action_id))),"\""].join(''),action_id], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,action_id], null)),my_project$rules$rules_view_$_iter__15991(cljs.core.rest(s__15992__$2)));
}
} else {
return null;
}
break;
}
});})(selected_QMARK_))
,null,null));
});})(selected_QMARK_))
;
return iter__4523__auto__(my_project.rules.q_actions_for_rule(rule_id));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$text_DASH_align,"center",cljs.core.cst$kw$font_DASH_size,"10px",cljs.core.cst$kw$font_DASH_weight,"bold",cljs.core.cst$kw$padding,"4px",cljs.core.cst$kw$color,"#2f80ed",cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,((function (selected_QMARK_){
return (function (){
return my_project.rules.set_menu_BANG_((10));
});})(selected_QMARK_))
], null),"Add Action..."], null)], null)], null);
});
my_project.rules.sheet_view = (function my_project$rules$sheet_view(sheet_id){
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_project.rules.q_selected(),sheet_id);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$border_DASH_radius,"16px",cljs.core.cst$kw$box_DASH_shadow,((selected_QMARK_)?"0 0 0 2px #2f80ed, 0px 12px 24px rgba(0, 0, 0, 0.08)":"0px 12px 24px rgba(0, 0, 0, 0.08)"),cljs.core.cst$kw$border,"1px solid rgba(0, 0, 0, 0.1)",cljs.core.cst$kw$background,"white",cljs.core.cst$kw$padding,"20px 24px 20px 16px",cljs.core.cst$kw$margin_DASH_bottom,"40px",cljs.core.cst$kw$_DASH_webkit_DASH_user_DASH_select,"none",cljs.core.cst$kw$user_DASH_select,"none"], null),cljs.core.cst$kw$on_DASH_click,((function (selected_QMARK_){
return (function (e){
e.preventDefault();

e.stopPropagation();

return my_project.rules.select_BANG_(sheet_id);
});})(selected_QMARK_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_size,"20px",cljs.core.cst$kw$line_DASH_height,"24px",cljs.core.cst$kw$font_DASH_weight,"bold"], null)], null),my_project.rules.q_sheet_by_id(sheet_id)], null),(function (){var iter__4523__auto__ = ((function (selected_QMARK_){
return (function my_project$rules$sheet_view_$_iter__16003(s__16004){
return (new cljs.core.LazySeq(null,((function (selected_QMARK_){
return (function (){
var s__16004__$1 = s__16004;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16004__$1);
if(temp__5735__auto__){
var s__16004__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16004__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16004__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16006 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16005 = (0);
while(true){
if((i__16005 < size__4522__auto__)){
var vec__16007 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16005);
var rule_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16007,(0),null);
var sheet_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16007,(1),null);
cljs.core.chunk_append(b__16006,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.rules.rules_view,rule_id], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,rule_id], null)));

var G__16013 = (i__16005 + (1));
i__16005 = G__16013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16006),my_project$rules$sheet_view_$_iter__16003(cljs.core.chunk_rest(s__16004__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16006),null);
}
} else {
var vec__16010 = cljs.core.first(s__16004__$2);
var rule_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16010,(0),null);
var sheet_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16010,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.rules.rules_view,rule_id], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,rule_id], null)),my_project$rules$sheet_view_$_iter__16003(cljs.core.rest(s__16004__$2)));
}
} else {
return null;
}
break;
}
});})(selected_QMARK_))
,null,null));
});})(selected_QMARK_))
;
return iter__4523__auto__(my_project.rules.q_rules_for_sheet(sheet_id));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$justify_DASH_content,"flex-end",cljs.core.cst$kw$padding_DASH_top,"8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.rules.primary_btn_view,"Add Rule",((function (selected_QMARK_){
return (function (){
return my_project.rules.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_project.rules.add_rule_to_sheet_BANG_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([my_project.rules.new_id(),sheet_id], 0));
});})(selected_QMARK_))
], null)], null)], null);
});
my_project.rules.main_view = (function my_project$rules$main_view(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding,"80px",cljs.core.cst$kw$max_DASH_width,"680px",cljs.core.cst$kw$margin,"0 auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$justify_DASH_content,"flex-end",cljs.core.cst$kw$padding_DASH_bottom,"16px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.rules.primary_btn_view,"Add Sheet",(function (){
return my_project.rules.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_project.rules.add_sheet_BANG_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([my_project.rules.new_id()], 0));
})], null)], null),(function (){var iter__4523__auto__ = (function my_project$rules$main_view_$_iter__16014(s__16015){
return (new cljs.core.LazySeq(null,(function (){
var s__16015__$1 = s__16015;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16015__$1);
if(temp__5735__auto__){
var s__16015__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16015__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16015__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16017 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16016 = (0);
while(true){
if((i__16016 < size__4522__auto__)){
var vec__16018 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16016);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16018,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16018,(1),null);
cljs.core.chunk_append(b__16017,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.rules.sheet_view,k], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)));

var G__16024 = (i__16016 + (1));
i__16016 = G__16024;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16017),my_project$rules$main_view_$_iter__16014(cljs.core.chunk_rest(s__16015__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16017),null);
}
} else {
var vec__16021 = cljs.core.first(s__16015__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16021,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16021,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.rules.sheet_view,k], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,k], null)),my_project$rules$main_view_$_iter__16014(cljs.core.rest(s__16015__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(my_project.rules.q_sheets((1)));
})()], null);
});
my_project.rules.setup = (function my_project$rules$setup(){
document.addEventListener("mousedown",my_project.rules.mouse_down);

document.addEventListener("mouseup",my_project.rules.mouse_up);

document.addEventListener("click",my_project.rules.mouse_click);

document.addEventListener("mousemove",my_project.rules.mouse_move);

document.addEventListener("keydown",my_project.rules.key_press);

document.addEventListener("keyup",my_project.rules.key_up);

return my_project.rules.frame();
});
my_project.rules.teardown = (function my_project$rules$teardown(){
document.removeEventListener("mousedown",my_project.rules.mouse_down);

document.removeEventListener("mouseup",my_project.rules.mouse_up);

document.removeEventListener("click",my_project.rules.mouse_click);

document.removeEventListener("mousemove",my_project.rules.mouse_move);

document.removeEventListener("keydown",my_project.rules.key_press);

return document.removeEventListener("keyup",my_project.rules.key_up);
});
my_project.rules.q_valid_operations_for_type = (function my_project$rules$q_valid_operations_for_type(type){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(i),type);
}),cljs.core.cst$kw$functions.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.rules.tables)));
});
my_project.rules.type_view = (function my_project$rules$type_view(t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_weight,"bold",cljs.core.cst$kw$font_DASH_size,"12px"], null)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(t),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(function (){var iter__4523__auto__ = (function my_project$rules$type_view_$_iter__16025(s__16026){
return (new cljs.core.LazySeq(null,(function (){
var s__16026__$1 = s__16026;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16026__$1);
if(temp__5735__auto__){
var s__16026__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16026__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16026__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16028 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16027 = (0);
while(true){
if((i__16027 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16027);
cljs.core.chunk_append(b__16028,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(i)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)));

var G__16029 = (i__16027 + (1));
i__16027 = G__16029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16028),my_project$rules$type_view_$_iter__16025(cljs.core.chunk_rest(s__16026__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16028),null);
}
} else {
var i = cljs.core.first(s__16026__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(i)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)),my_project$rules$type_view_$_iter__16025(cljs.core.rest(s__16026__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(my_project.rules.q_valid_operations_for_type(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t)));
})()], null)], null);
});
my_project.rules.types_view = (function my_project$rules$types_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(function (){var iter__4523__auto__ = (function my_project$rules$types_view_$_iter__16030(s__16031){
return (new cljs.core.LazySeq(null,(function (){
var s__16031__$1 = s__16031;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16031__$1);
if(temp__5735__auto__){
var s__16031__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16031__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16031__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16033 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16032 = (0);
while(true){
if((i__16032 < size__4522__auto__)){
var t = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16032);
cljs.core.chunk_append(b__16033,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.rules.type_view,t], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,t], null)));

var G__16034 = (i__16032 + (1));
i__16032 = G__16034;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16033),my_project$rules$types_view_$_iter__16030(cljs.core.chunk_rest(s__16031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16033),null);
}
} else {
var t = cljs.core.first(s__16031__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.rules.type_view,t], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,t], null)),my_project$rules$types_view_$_iter__16030(cljs.core.rest(s__16031__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.cst$kw$types.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_project.rules.tables)));
})()], null);
});
my_project.rules.console_view = (function my_project$rules$console_view(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$max_DASH_height,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$top,cljs.core.cst$kw$overflow,cljs.core.cst$kw$_DASH_webkit_DASH_user_DASH_select,cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$width,cljs.core.cst$kw$padding,cljs.core.cst$kw$position,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$user_DASH_select,cljs.core.cst$kw$left],["800px","12px","12px","auto","none","#EFEFEF","240px","8px 16px","absolute","8px","none","12px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_weight,"bold",cljs.core.cst$kw$margin_DASH_bottom,"8px"], null)], null),"Log"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4523__auto__ = (function my_project$rules$console_view_$_iter__16035(s__16036){
return (new cljs.core.LazySeq(null,(function (){
var s__16036__$1 = s__16036;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16036__$1);
if(temp__5735__auto__){
var s__16036__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16036__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16036__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16038 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16037 = (0);
while(true){
if((i__16037 < size__4522__auto__)){
var line = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16037);
cljs.core.chunk_append(b__16038,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,line], null));

var G__16039 = (i__16037 + (1));
i__16037 = G__16039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16038),my_project$rules$console_view_$_iter__16035(cljs.core.chunk_rest(s__16036__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16038),null);
}
} else {
var line = cljs.core.first(s__16036__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,line], null),my_project$rules$console_view_$_iter__16035(cljs.core.rest(s__16036__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.reverse(cljs.core.deref(my_project.rules.console_table)));
})()], null)], null);
});
my_project.rules.menu_item = (function my_project$rules$menu_item(id){
var props = my_project.rules.q_props_for_menu(id);
var action = cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(props);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$padding,"16px 0",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$cursor,"pointer",cljs.core.cst$kw$font_DASH_size,"12px",cljs.core.cst$kw$border_DASH_top,"1px solid rgba(0, 0, 0, 0.1)",cljs.core.cst$kw$justify_DASH_content,"space-between"], null),cljs.core.cst$kw$on_DASH_click,((function (props,action){
return (function (e){
if(cljs.core.truth_(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(props))){
return my_project.rules.set_menu_BANG_(id);
} else {
my_project.rules.set_menu_BANG_(null);

return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
}
});})(props,action))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(props)], null),(cljs.core.truth_(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(props))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,["icon-","caret-r"].join('')], null)], null):null)], null);
});
my_project.rules.rule_selection_view = (function my_project$rules$rule_selection_view(){
var title = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(my_project.rules.q_props_for_menu(my_project.rules.q_menu_to_display()));
var showing_QMARK_ = my_project.rules.q_menu_to_display();
if(cljs.core.truth_(showing_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$box_DASH_shadow,cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$top,cljs.core.cst$kw$width,cljs.core.cst$kw$background,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$padding,cljs.core.cst$kw$right,cljs.core.cst$kw$position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$margin_DASH_bottom,cljs.core.cst$kw$height,cljs.core.cst$kw$left],["0px 12px 24px rgba(0, 0, 0, 0.08)","translateX(-50%)","0","200px","420px","white","999999","20px 24px 20px 16px","0","absolute","1px solid rgba(0, 0, 0, 0.1)","16px","40px","400px","50vw"])], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$padding_DASH_bottom,"16px",cljs.core.cst$kw$justify_DASH_content,"space-between"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_size,"20px",cljs.core.cst$kw$line_DASH_height,"24px",cljs.core.cst$kw$font_DASH_weight,"bold"], null)], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$font_DASH_weight,"bold",cljs.core.cst$kw$padding,"4px",cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$font_DASH_size,"10px",cljs.core.cst$kw$color,"#2f80ed",cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,((function (title,showing_QMARK_){
return (function (e){
return my_project.rules.set_menu_BANG_(null);
});})(title,showing_QMARK_))
], null),"Close"], null)], null),(function (){var iter__4523__auto__ = ((function (title,showing_QMARK_){
return (function my_project$rules$rule_selection_view_$_iter__16040(s__16041){
return (new cljs.core.LazySeq(null,((function (title,showing_QMARK_){
return (function (){
var s__16041__$1 = s__16041;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__16041__$1);
if(temp__5735__auto__){
var s__16041__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16041__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16041__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16043 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16042 = (0);
while(true){
if((i__16042 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16042);
cljs.core.chunk_append(b__16043,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.rules.menu_item,i], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)));

var G__16044 = (i__16042 + (1));
i__16042 = G__16044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16043),my_project$rules$rule_selection_view_$_iter__16040(cljs.core.chunk_rest(s__16041__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16043),null);
}
} else {
var i = cljs.core.first(s__16041__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.rules.menu_item,i], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null)),my_project$rules$rule_selection_view_$_iter__16040(cljs.core.rest(s__16041__$2)));
}
} else {
return null;
}
break;
}
});})(title,showing_QMARK_))
,null,null));
});})(title,showing_QMARK_))
;
return iter__4523__auto__(my_project.rules.q_children_for_menu(my_project.rules.q_menu_to_display()));
})()], null);
} else {
return null;
}
});
my_project.rules.log_message_view = (function my_project$rules$log_message_view(){
var title = "Log Message";
var message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return ((function (title,message){
return (function (){
if(cljs.core.truth_(my_project.rules.q_show_log_message_QMARK_())){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$box_DASH_shadow,cljs.core.cst$kw$transform,cljs.core.cst$kw$bottom,cljs.core.cst$kw$top,cljs.core.cst$kw$width,cljs.core.cst$kw$background,cljs.core.cst$kw$z_DASH_index,cljs.core.cst$kw$padding,cljs.core.cst$kw$right,cljs.core.cst$kw$position,cljs.core.cst$kw$border,cljs.core.cst$kw$border_DASH_radius,cljs.core.cst$kw$margin_DASH_bottom,cljs.core.cst$kw$height,cljs.core.cst$kw$left],["0px 12px 24px rgba(0, 0, 0, 0.08)","translateX(-50%)","0","200px","420px","white","999999","20px 24px 20px 16px","0","absolute","1px solid rgba(0, 0, 0, 0.1)","16px","40px","320px","50vw"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"20px",cljs.core.cst$kw$line_DASH_height,"24px",cljs.core.cst$kw$padding_DASH_bottom,"16px",cljs.core.cst$kw$font_DASH_weight,"bold"], null)], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_size,"12px",cljs.core.cst$kw$font_DASH_weight,"Bold",cljs.core.cst$kw$padding_DASH_bottom,"8px",cljs.core.cst$kw$display,"block"], null)], null),"Message"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Enter your message...",cljs.core.cst$kw$value,cljs.core.deref(message),cljs.core.cst$kw$on_DASH_change,((function (title,message){
return (function (e){
return cljs.core.reset_BANG_(message,e.target.value);
});})(title,message))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$display,"block",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$padding,"8px",cljs.core.cst$kw$border_DASH_radius,"4px",cljs.core.cst$kw$font_DASH_size,"12px",cljs.core.cst$kw$line_DASH_height,"24px",cljs.core.cst$kw$border,"1px solid lightgray"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$bottom,(0),cljs.core.cst$kw$left,(0),cljs.core.cst$kw$right,(0),cljs.core.cst$kw$padding,"20px 24px",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$justify_DASH_content,"flex-end"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.rules.primary_btn_view,"Done",((function (title,message){
return (function (){
var id = my_project.rules.new_id();
my_project.rules.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_project.rules.add_action_to_rule_BANG_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,my_project.rules.q_selected()], 0));

my_project.rules.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(my_project.rules.set_action_function,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,cljs.core.deref(message)], 0));

my_project.rules.hide_log_message_BANG_();

return cljs.core.reset_BANG_(message,"");
});})(title,message))
], null)], null)], null);
} else {
return null;
}
});
;})(title,message))
});
my_project.rules.main = (function my_project$rules$main(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [my_project.rules.main_view], null)], null);
});
my_project.rules.setup();
