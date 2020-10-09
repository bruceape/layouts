// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
goog.provide('cljs.js');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.env');
goog.require('cljs.spec.alpha');
goog.require('cljs.analyzer');
goog.require('cljs.compiler');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tagged_literals');
goog.require('goog.crypt.base64');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14867 = arguments.length;
var i__4731__auto___14868 = (0);
while(true){
if((i__4731__auto___14868 < len__4730__auto___14867)){
args__4736__auto__.push((arguments[i__4731__auto___14868]));

var G__14869 = (i__4731__auto___14868 + (1));
i__4731__auto___14868 = G__14869;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR__orig_val__14865 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__14866 = cljs.core._STAR_print_err_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14866;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14865;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.js.debug_prn.cljs$lang$applyTo = (function (seq14864){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14864));
});

/**
 * Given a namespace as a symbol return the relative path sans extension
 */
cljs.js.ns__GT_relpath = (function cljs$js$ns__GT_relpath(ns_sym){
return clojure.string.replace(cljs.analyzer.munge_path(ns_sym),".","/");
});
cljs.js.file__GT_ns = (function cljs$js$file__GT_ns(file){
var lib_name = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(file,"/","."),(0),(cljs.core.count(file) - (5)));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge(lib_name));
});
cljs.js.drop_macros_suffix = (function cljs$js$drop_macros_suffix(ns_name){
if(cljs.core.truth_(ns_name)){
if(clojure.string.ends_with_QMARK_(ns_name,"$macros")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns_name,(0),(cljs.core.count(ns_name) - (7)));
} else {
return ns_name;
}
} else {
return null;
}
});
cljs.js.elide_macros_suffix = (function cljs$js$elide_macros_suffix(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.js.drop_macros_suffix(cljs.core.namespace(sym)),cljs.core.name(sym));
});
cljs.js.resolve_symbol = (function cljs$js$resolve_symbol(sym){
if(clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),".")){
return sym;
} else {
return cljs.js.elide_macros_suffix(cljs.analyzer.resolve_symbol(sym));
}
});
cljs.js.read = (function cljs$js$read(eof,rdr){
var _STAR_ns_STAR__orig_val__14870 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__14871 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.js.drop_macros_suffix(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)));
cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__14871;

try{return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$eof,eof,cljs.core.cst$kw$read_DASH_cond,cljs.core.cst$kw$allow,cljs.core.cst$kw$features,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs,null], null), null)], null),rdr);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__14870;
}});
cljs.js.atom_QMARK_ = (function cljs$js$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
cljs.js.valid_name_QMARK_ = (function cljs$js$valid_name_QMARK_(x){
return (((x == null)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string'));
});
cljs.js.valid_opts_QMARK_ = (function cljs$js$valid_opts_QMARK_(x){
return (((x == null)) || (cljs.core.map_QMARK_(x)));
});
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_load_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides a different way to load a library.
 *   Whatever function *load-fn* is bound to will be passed two arguments - a
 *   map and a callback function: The map will have the following keys:
 * 
 *   :name   - the name of the library (a symbol)
 *   :macros - modifier signaling a macros namespace load
 *   :path   - munged relative library path (a string)
 * 
 *   It is up to the implementor to correctly resolve the corresponding .cljs,
 *   .cljc, or .js resource (the order must be respected). If :macros is true
 *   resolution should only consider .clj or .cljc resources (the order must be
 *   respected). Upon resolution the callback should be invoked with a map
 *   containing the following keys:
 * 
 *   :lang       - the language, :clj or :js
 *   :source     - the source of the library (a string)
 *   :file       - optional, the file path, it will be added to AST's :file keyword
 *              (but not in :meta)
 *   :cache      - optional, if a :clj namespace has been precompiled to :js, can
 *              give an analysis cache for faster loads.
 *   :source-map - optional, if a :clj namespace has been precompiled to :js, can
 *              give a V3 source map JSON
 * 
 *   If the resource could not be resolved, the callback should be invoked with
 *   nil.
 */
cljs.js._STAR_load_fn_STAR_ = (function cljs$js$_STAR_load_fn_STAR_(m,cb){
throw (new Error("No *load-fn* set"));
});
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_eval_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides various ways to eval JavaScript
 *   source. Whatever function *eval-fn* is bound to will be passed a map
 *   containing the following keys:
 * 
 *   :source - the source of the library (string)
 *   :name   - used to unique identify the script (symbol)
 *   :cache  - if the source was originally ClojureScript, will be given the
 *          analysis cache.
 * 
 *   The result of evaluation should be the return value.
 */
cljs.js._STAR_eval_fn_STAR_ = (function cljs$js$_STAR_eval_fn_STAR_(m){
throw (new Error("No *eval-fn* set"));
});
}
/**
 * A default JavaScript evaluation function.
 */
cljs.js.js_eval = (function cljs$js$js_eval(p__14872){
var map__14873 = p__14872;
var map__14873__$1 = (((((!((map__14873 == null))))?(((((map__14873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14873):map__14873);
var resource = map__14873__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14873__$1,cljs.core.cst$kw$source);
return eval(source);
});
cljs.js.wrap_error = (function cljs$js$wrap_error(ex){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,ex], null);
});
/**
 * Construct an empty compiler state. Required to invoke analyze, compile,
 * eval and eval-str.
 */
cljs.js.empty_state = (function cljs$js$empty_state(var_args){
var G__14876 = arguments.length;
switch (G__14876) {
case 0:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__14877 = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__14877,((function (G__14877){
return (function (state){
});})(G__14877))
);

return G__14877;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__14878 = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__14878,init);

return G__14878;
});

cljs.js.empty_state.cljs$lang$maxFixedArity = 1;

cljs.js.load_analysis_cache_BANG_ = (function cljs$js$load_analysis_cache_BANG_(state,ns,cache){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns], null),cache);
});
cljs.js.load_source_map_BANG_ = (function cljs$js$load_source_map_BANG_(state,ns,sm_json){
var sm = cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1(JSON.parse(sm_json));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_maps,ns], null),sm);
});
cljs.js.sm_data = (function cljs$js$sm_data(){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$source_DASH_map,cljs.core.sorted_map(),cljs.core.cst$kw$gen_DASH_col,(0),cljs.core.cst$kw$gen_DASH_line,(0)], null));
});
cljs.js.prefix = (function cljs$js$prefix(s,pre){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__14880){
var map__14881 = p__14880;
var map__14881__$1 = (((((!((map__14881 == null))))?(((((map__14881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14881):map__14881);
var opts = map__14881__$1;
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14881__$1,cljs.core.cst$kw$output_DASH_dir);
var asset_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14881__$1,cljs.core.cst$kw$asset_DASH_path);
var source_map_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14881__$1,cljs.core.cst$kw$source_DASH_map_DASH_timestamp);
var t = (new Date()).valueOf();
var mn = (cljs.core.truth_(name)?cljs.core.munge(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):["cljs-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
var smn = (function (){var G__14883 = mn;
if(cljs.core.truth_(name)){
return clojure.string.replace(G__14883,".","/");
} else {
return G__14883;
}
})();
var ts = (new Date()).valueOf();
var out = (function (){var or__4131__auto__ = output_dir;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return asset_path;
}
})();
var src = (function (){var G__14884 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".cljs"].join('');
var G__14884__$1 = ((source_map_timestamp === true)?[G__14884,"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__14884);
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__14884__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__14884__$1;
}
})();
var file = (function (){var G__14885 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".js"].join('');
var G__14885__$1 = ((source_map_timestamp === true)?[G__14885,"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__14885);
if(cljs.core.truth_(out)){
return cljs.js.prefix(G__14885__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__14885__$1;
}
})();
var json = cljs.source_map.encode(cljs.core.PersistentArrayMap.createAsIfByAssoc([src,cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(sm_data)]),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lines,(cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),cljs.core.cst$kw$file,file,cljs.core.cst$kw$sources_DASH_content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([json], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_maps,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(mn)], null),cljs.source_map.invert_reverse_map(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append(["\n//# sourceURL=",file,"\n//# sourceMappingURL=data:application/json;base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__14891 = clojure.string.replace(encodeURIComponent(json),/%([0-9A-F]{2})/,((function (t,mn,smn,ts,out,src,file,json,map__14881,map__14881__$1,opts,output_dir,asset_path,source_map_timestamp){
return (function (p__14892){
var vec__14893 = p__14892;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14893,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14893,(1),null);
return String.fromCharCode(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''));
});})(t,mn,smn,ts,out,src,file,json,map__14881,map__14881__$1,opts,output_dir,asset_path,source_map_timestamp))
);
return goog.crypt.base64.encodeString(G__14891);
})())].join(''));
});
cljs.js.alias_map = (function cljs$js$alias_map(compiler,cljs_ns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__14896){
var vec__14897 = p__14896;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14897,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14897,(1),null);
return cljs.core.symbol_identical_QMARK_(k,v);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs_ns,cljs.core.cst$kw$requires], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs_ns,cljs.core.cst$kw$require_DASH_macros], null))], 0))));
});
cljs.js._STAR_loaded_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
/**
 * Like cljs.core/run!, but for an async procedure, and with the
 *   ability to break prior to processing the entire collection.
 * 
 *   Chains successive calls to the supplied procedure for items in
 *   the collection. The procedure should accept an item from the
 *   collection and a callback of one argument. If the break? predicate,
 *   when applied to the procedure callback value, yields a truthy
 *   result, terminates early calling the supplied cb with the callback
 *   value. Otherwise, when complete, calls cb with nil.
 */
cljs.js.run_async_BANG_ = (function cljs$js$run_async_BANG_(proc,coll,break_QMARK_,cb){
if(cljs.core.seq(coll)){
var G__14900 = cljs.core.first(coll);
var G__14901 = ((function (G__14900){
return (function (res){
if(cljs.core.truth_((break_QMARK_.cljs$core$IFn$_invoke$arity$1 ? break_QMARK_.cljs$core$IFn$_invoke$arity$1(res) : break_QMARK_.call(null,res)))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var G__14902 = proc;
var G__14903 = cljs.core.rest(coll);
var G__14904 = break_QMARK_;
var G__14905 = cb;
return (cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4 ? cljs.js.run_async_BANG_.cljs$core$IFn$_invoke$arity$4(G__14902,G__14903,G__14904,G__14905) : cljs.js.run_async_BANG_.call(null,G__14902,G__14903,G__14904,G__14905));
}
});})(G__14900))
;
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(G__14900,G__14901) : proc.call(null,G__14900,G__14901));
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(null) : cb.call(null,null));
}
});
cljs.js.process_deps = (function cljs$js$process_deps(bound_vars,names,opts,cb){
return cljs.js.run_async_BANG_((function (name,cb__$1){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb__$1);
}),names,cljs.core.cst$kw$error,cb);
});
cljs.js.process_macros_deps = (function cljs$js$process_macros_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(cljs.core.cst$kw$require_DASH_macros.cljs$core$IFn$_invoke$arity$1(cache))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$macros_DASH_ns,true),cljs.core.cst$kw$emit_DASH_constants,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optimize_DASH_constants], 0)),cb);
});
cljs.js.process_libs_deps = (function cljs$js$process_libs_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps(bound_vars,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(cljs.core.cst$kw$requires.cljs$core$IFn$_invoke$arity$1(cache)),cljs.core.vals(cljs.core.cst$kw$imports.cljs$core$IFn$_invoke$arity$1(cache)))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),cb);
});
cljs.js.pre_file_side_effects = (function cljs$js$pre_file_side_effects(st,name,file,opts){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Pre-file side-effects",file], 0));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(st),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$defs], null));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var fexpr__14906 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$core$macros,"null",cljs.core.cst$sym$cljs$core,"null"], null), null);
return (fexpr__14906.cljs$core$IFn$_invoke$arity$1 ? fexpr__14906.cljs$core$IFn$_invoke$arity$1(name) : fexpr__14906.call(null,name));
})());
} else {
return and__4120__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update,cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0));
} else {
return null;
}
});
cljs.js.post_file_side_effects = (function cljs$js$post_file_side_effects(file,opts){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Post-file side-effects",file], 0));
} else {
}

return cljs.core._STAR_unchecked_arrays_STAR_ = false;;
});
cljs.js.require = (function cljs$js$require(var_args){
var G__14908 = arguments.length;
switch (G__14908) {
case 2:
return cljs.js.require.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.require.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.require.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.require.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.require.cljs$core$IFn$_invoke$arity$2 = (function (name,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$3(name,null,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$3 = (function (name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(null,name,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$4 = (function (bound_vars,name,opts,cb){
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,name,null,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,name,reload,opts,cb){
var bound_vars__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$_STAR_compiler_STAR_,cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),bound_vars], 0));
var aname = (function (){var G__14909 = name;
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__14909);
} else {
return G__14909;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reload,reload)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.disj,aname);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reload_DASH_all,reload)){
cljs.core.reset_BANG_(cljs.js._STAR_loaded_STAR_,cljs.core.PersistentHashSet.EMPTY);
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Loading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?" macros":null)," namespace"].join('')], 0));
} else {
}

if((!(cljs.core.contains_QMARK_(cljs.core.deref(cljs.js._STAR_loaded_STAR_),aname)))){
var env = cljs.core.cst$kw$_STAR_env_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
try{var G__14913 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$macros,cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(name)], null);
var G__14914 = ((function (G__14913,env,bound_vars__$1,aname){
return (function (resource){
if(((cljs.core.map_QMARK_(resource)) || ((resource == null)))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.truth_(resource)){
var map__14915 = resource;
var map__14915__$1 = (((((!((map__14915 == null))))?(((((map__14915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14915):map__14915);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14915__$1,cljs.core.cst$kw$lang);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14915__$1,cljs.core.cst$kw$source);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14915__$1,cljs.core.cst$kw$cache);
var source_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14915__$1,cljs.core.cst$kw$source_DASH_map);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14915__$1,cljs.core.cst$kw$file);
var pred__14917 = cljs.core.keyword_identical_QMARK_;
var expr__14918 = lang;
if(cljs.core.truth_((function (){var G__14920 = cljs.core.cst$kw$clj;
var G__14921 = expr__14918;
return (pred__14917.cljs$core$IFn$_invoke$arity$2 ? pred__14917.cljs$core$IFn$_invoke$arity$2(G__14920,G__14921) : pred__14917.call(null,G__14920,G__14921));
})())){
cljs.js.pre_file_side_effects(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,file,opts);

return cljs.js.eval_str_STAR_(bound_vars__$1,source,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cljs_DASH_file,file),((function (pred__14917,expr__14918,map__14915,map__14915__$1,lang,source,cache,source_map,file,G__14913,env,bound_vars__$1,aname){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__14922 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14922) : cb.call(null,G__14922));
}
});})(pred__14917,expr__14918,map__14915,map__14915__$1,lang,source,cache,source_map,file,G__14913,env,bound_vars__$1,aname))
);
} else {
if(cljs.core.truth_((function (){var G__14923 = cljs.core.cst$kw$js;
var G__14924 = expr__14918;
return (pred__14917.cljs$core$IFn$_invoke$arity$2 ? pred__14917.cljs$core$IFn$_invoke$arity$2(G__14923,G__14924) : pred__14917.call(null,G__14923,G__14924));
})())){
return cljs.js.process_macros_deps(bound_vars__$1,cache,opts,((function (pred__14917,expr__14918,map__14915,map__14915__$1,lang,source,cache,source_map,file,G__14913,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
return cljs.js.process_libs_deps(bound_vars__$1,cache,opts,((function (pred__14917,expr__14918,map__14915,map__14915__$1,lang,source,cache,source_map,file,G__14913,env,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var res__$2 = (function (){try{var fexpr__14926_14934 = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
(fexpr__14926_14934.cljs$core$IFn$_invoke$arity$1 ? fexpr__14926_14934.cljs$core$IFn$_invoke$arity$1(resource) : fexpr__14926_14934.call(null,resource));

if(cljs.core.truth_(cache)){
cljs.js.load_analysis_cache_BANG_(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,cache);

cljs.analyzer.register_specs(cache);
} else {
}

if(cljs.core.truth_(source_map)){
return cljs.js.load_source_map_BANG_(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,source_map);
} else {
return null;
}
}catch (e14925){var cause = e14925;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

var G__14927 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14927) : cb.call(null,G__14927));
}
}
});})(pred__14917,expr__14918,map__14915,map__14915__$1,lang,source,cache,source_map,file,G__14913,env,bound_vars__$1,aname))
);
}
});})(pred__14917,expr__14918,map__14915,map__14915__$1,lang,source,cache,source_map,file,G__14913,env,bound_vars__$1,aname))
);
} else {
var G__14928 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14928) : cb.call(null,G__14928));
}
}
} else {
var G__14929 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__14930 = (cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.cst$kw$undeclared_DASH_macros_DASH_ns:cljs.core.cst$kw$undeclared_DASH_ns);
var G__14931 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,name,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(name)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__14930,G__14931) : cljs.analyzer.error_message.call(null,G__14930,G__14931));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14929) : cb.call(null,G__14929));
}
});})(G__14913,env,bound_vars__$1,aname))
;
var fexpr__14912 = cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__14912.cljs$core$IFn$_invoke$arity$2 ? fexpr__14912.cljs$core$IFn$_invoke$arity$2(G__14913,G__14914) : fexpr__14912.call(null,G__14913,G__14914));
}catch (e14910){var cause = e14910;
var G__14911 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14911) : cb.call(null,G__14911));
}} else {
var G__14932 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,true], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14932) : cb.call(null,G__14932));
}
});

cljs.js.require.cljs$lang$maxFixedArity = 5;

cljs.js.patch_alias_map = (function cljs$js$patch_alias_map(compiler,in$,from,to){
var patch = (function (k,add_if_present_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,in$,k], null),(function (m){
var replaced = clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([from,to]),m);
if(cljs.core.truth_((function (){var and__4120__auto__ = add_if_present_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([to]),cljs.core.vals(replaced));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(replaced,from,to);
} else {
return replaced;
}
}));
});
var patch_renames = ((function (patch){
return (function (k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,in$,k], null),((function (patch){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (patch){
return (function (acc,p__14935){
var vec__14936 = p__14935;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14936,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14936,(1),null);
var entry = vec__14936;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(from),cljs.core.namespace(qualified_sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
});})(patch))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(patch))
);
});})(patch))
;
patch(cljs.core.cst$kw$requires,true);

patch(cljs.core.cst$kw$require_DASH_macros,true);

patch(cljs.core.cst$kw$uses,false);

patch(cljs.core.cst$kw$use_DASH_macros,false);

patch_renames(cljs.core.cst$kw$renames);

return patch_renames(cljs.core.cst$kw$rename_DASH_macros);
});
cljs.js.self_require_QMARK_ = (function cljs$js$self_require_QMARK_(deps,opts){
var and__4120__auto__ = cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts) === true;
if(and__4120__auto__){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.analyzer._STAR_cljs_ns_STAR_]),deps);
} else {
return and__4120__auto__;
}
});
cljs.js.load_deps = (function cljs$js$load_deps(var_args){
var G__14941 = arguments.length;
switch (G__14941) {
case 5:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,lib,deps,null,null,cb);
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7 = (function (bound_vars,ana_env,lib,deps,reload,opts,cb){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading dependencies for",lib], 0));
} else {
}

var _STAR_cljs_dep_set_STAR__orig_val__14942 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__14943 = (function (){var lib__$1 = (cljs.core.truth_(cljs.js.self_require_QMARK_(deps,opts))?cljs.core.cst$sym$cljs$user:lib);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib__$1),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib__$1);
})();
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__14943;

try{var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_(((function (bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__14942,_STAR_cljs_dep_set_STAR__temp_val__14943){
return (function (p1__14939_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__14939_SHARP_)));
});})(bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__14942,_STAR_cljs_dep_set_STAR__temp_val__14943))
,deps)))){
var G__14944 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14944) : cb.call(null,G__14944));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$context),cljs.core.cst$kw$def_DASH_emits_DASH_var),cljs.core.cst$kw$ns);
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars__$1,dep,reload,opts_SINGLEQUOTE_,((function (dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__14942,_STAR_cljs_dep_set_STAR__temp_val__14943){
return (function (res){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading result:",res], 0));
} else {
}

if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars__$1,ana_env,lib,cljs.core.next(deps),null,opts,cb);
} else {
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$4(bound_vars__$1,cljs_dep,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__14942,_STAR_cljs_dep_set_STAR__temp_val__14943){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
cljs.js.patch_alias_map(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars__$1,ana_env,lib,cljs.core.next(deps),null,opts,((function (cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__14942,_STAR_cljs_dep_set_STAR__temp_val__14943){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__14945 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,cljs.core.cst$kw$aliased_DASH_loads,cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14945) : cb.call(null,G__14945));
}
});})(cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__14942,_STAR_cljs_dep_set_STAR__temp_val__14943))
);
}
});})(cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__14942,_STAR_cljs_dep_set_STAR__temp_val__14943))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
}
});})(dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__14942,_STAR_cljs_dep_set_STAR__temp_val__14943))
);
} else {
var G__14946 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14946) : cb.call(null,G__14946));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__14942;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 7;

cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var G__14950 = arguments.length;
switch (G__14950) {
case 5:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
var _STAR_cljs_dep_set_STAR__orig_val__14951 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__14952 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dep_DASH_path], null),cljs.core.conj,lib);
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__14952;

try{var compiler = cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars));
var bound_vars__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bound_vars,cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_(((function (compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__14951,_STAR_cljs_dep_set_STAR__temp_val__14952){
return (function (p1__14948_SHARP_){
return (!(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__14948_SHARP_)));
});})(compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__14951,_STAR_cljs_dep_set_STAR__temp_val__14952))
,deps)))){
var G__14953 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" -> ",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dep_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some(cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join('')));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14953) : cb.call(null,G__14953));
} else {
if(cljs.core.seq(deps)){
var dep = cljs.core.first(deps);
try{var G__14957 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,dep,cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(dep)], null);
var G__14958 = ((function (G__14957,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__14951,_STAR_cljs_dep_set_STAR__temp_val__14952){
return (function (resource){
if(((cljs.core.map_QMARK_(resource)) || ((resource == null)))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.not(resource)){
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(dep);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
cljs.js.patch_alias_map(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.cons(cljs_dep,cljs.core.next(deps)),opts,((function (cljs_dep,temp__5733__auto__,G__14957,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__14951,_STAR_cljs_dep_set_STAR__temp_val__14952){
return (function (res){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var G__14959 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res,cljs.core.cst$kw$aliased_DASH_loads,cljs.core.assoc,dep,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14959) : cb.call(null,G__14959));
}
});})(cljs_dep,temp__5733__auto__,G__14957,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__14951,_STAR_cljs_dep_set_STAR__temp_val__14952))
);
} else {
var G__14960 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,(function (){var G__14961 = cljs.core.cst$kw$undeclared_DASH_ns;
var G__14962 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_DASH_sym,dep,cljs.core.cst$kw$js_DASH_provide,cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__14961,G__14962) : cljs.analyzer.error_message.call(null,G__14961,G__14962));
})()));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14960) : cb.call(null,G__14960));
}
} else {
var map__14963 = resource;
var map__14963__$1 = (((((!((map__14963 == null))))?(((((map__14963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14963):map__14963);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14963__$1,cljs.core.cst$kw$name);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14963__$1,cljs.core.cst$kw$lang);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14963__$1,cljs.core.cst$kw$source);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14963__$1,cljs.core.cst$kw$file);
var pred__14965 = cljs.core.keyword_identical_QMARK_;
var expr__14966 = lang;
if(cljs.core.truth_((function (){var G__14968 = cljs.core.cst$kw$clj;
var G__14969 = expr__14966;
return (pred__14965.cljs$core$IFn$_invoke$arity$2 ? pred__14965.cljs$core$IFn$_invoke$arity$2(G__14968,G__14969) : pred__14965.call(null,G__14968,G__14969));
})())){
cljs.js.pre_file_side_effects(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name,file,opts);

return cljs.js.analyze_str_STAR_(bound_vars__$1,source,name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$cljs_DASH_file,file),((function (pred__14965,expr__14966,map__14963,map__14963__$1,name,lang,source,file,G__14957,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__14951,_STAR_cljs_dep_set_STAR__temp_val__14952){
return (function (res){
cljs.js.post_file_side_effects(file,opts);

if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
});})(pred__14965,expr__14966,map__14963,map__14963__$1,name,lang,source,file,G__14957,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__14951,_STAR_cljs_dep_set_STAR__temp_val__14952))
);
} else {
if(cljs.core.truth_((function (){var G__14970 = cljs.core.cst$kw$js;
var G__14971 = expr__14966;
return (pred__14965.cljs$core$IFn$_invoke$arity$2 ? pred__14965.cljs$core$IFn$_invoke$arity$2(G__14970,G__14971) : pred__14965.call(null,G__14970,G__14971));
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars__$1,ana_env,lib,cljs.core.next(deps),opts,cb);
} else {
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(ana_env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
}
}
}
});})(G__14957,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__14951,_STAR_cljs_dep_set_STAR__temp_val__14952))
;
var fexpr__14956 = cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
return (fexpr__14956.cljs$core$IFn$_invoke$arity$2 ? fexpr__14956.cljs$core$IFn$_invoke$arity$2(G__14957,G__14958) : fexpr__14956.call(null,G__14957,G__14958));
}catch (e14954){var cause = e14954;
var G__14955 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not analyze dep ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14955) : cb.call(null,G__14955));
}} else {
var G__14972 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14972) : cb.call(null,G__14972));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__14951;
}});

cljs.js.analyze_deps.cljs$lang$maxFixedArity = 6;

cljs.js.load_macros = (function cljs$js$load_macros(bound_vars,k,macros,lib,reload,reloads,opts,cb){
if(cljs.core.seq(macros)){
var nsym = cljs.core.first(cljs.core.vals(macros));
var k__$1 = (function (){var or__4131__auto__ = (reload.cljs$core$IFn$_invoke$arity$1 ? reload.cljs$core$IFn$_invoke$arity$1(k) : reload.call(null,k));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reloads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nsym], null));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = (function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nsym,cljs.core.name);
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.cst$kw$_STAR_reload_DASH_macros_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.cst$kw$reload;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return null;
}
}
}
})();
var opts_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$macros_DASH_ns,true),cljs.core.cst$kw$context),cljs.core.cst$kw$def_DASH_emits_DASH_var),cljs.core.cst$kw$ns),cljs.core.cst$kw$emit_DASH_constants,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$optimize_DASH_constants], 0));
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,nsym,k__$1,opts_SINGLEQUOTE_,((function (nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res){
if(cljs.core.not(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
var G__14974 = bound_vars;
var G__14975 = k__$1;
var G__14976 = cljs.core.next(macros);
var G__14977 = lib;
var G__14978 = reload;
var G__14979 = reloads;
var G__14980 = opts;
var G__14981 = cb;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__14974,G__14975,G__14976,G__14977,G__14978,G__14979,G__14980,G__14981) : cljs.js.load_macros.call(null,G__14974,G__14975,G__14976,G__14977,G__14978,G__14979,G__14980,G__14981));
} else {
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns(nsym);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([nsym,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
return cljs.js.require.cljs$core$IFn$_invoke$arity$5(bound_vars,cljs_dep,k__$1,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
cljs.js.patch_alias_map(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars),lib,nsym,cljs_dep);

var G__14982 = bound_vars;
var G__14983 = k__$1;
var G__14984 = cljs.core.next(macros);
var G__14985 = lib;
var G__14986 = reload;
var G__14987 = reloads;
var G__14988 = opts;
var G__14989 = ((function (G__14982,G__14983,G__14984,G__14985,G__14986,G__14987,G__14988,cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$2) : cb.call(null,res__$2));
} else {
var G__14990 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(res__$2,cljs.core.cst$kw$aliased_DASH_loads,cljs.core.assoc,nsym,cljs_dep);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14990) : cb.call(null,G__14990));
}
});})(G__14982,G__14983,G__14984,G__14985,G__14986,G__14987,G__14988,cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
;
return (cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8 ? cljs.js.load_macros.cljs$core$IFn$_invoke$arity$8(G__14982,G__14983,G__14984,G__14985,G__14986,G__14987,G__14988,G__14989) : cljs.js.load_macros.call(null,G__14982,G__14983,G__14984,G__14985,G__14986,G__14987,G__14988,G__14989));
}
});})(cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
}
}
});})(nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
var G__14991 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__14991) : cb.call(null,G__14991));
}
});
cljs.js.rewrite_ns_ast = (function cljs$js$rewrite_ns_ast(var_args){
var G__14995 = arguments.length;
switch (G__14995) {
case 2:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2 = (function (ast,smap){
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(ast,smap,false);
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3 = (function (ast,smap,macros_QMARK_){
var vec__14996 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$use_DASH_macros,cljs.core.cst$kw$require_DASH_macros,cljs.core.cst$kw$rename_DASH_macros], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$uses,cljs.core.cst$kw$requires,cljs.core.cst$kw$renames], null));
var uk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14996,(0),null);
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14996,(1),null);
var renk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14996,(2),null);
var rewrite_renames = ((function (vec__14996,uk,rk,renk){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__14996,uk,rk,renk){
return (function (acc,p__14999){
var vec__15000 = p__14999;
var renamed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15000,(0),null);
var qualified_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15000,(1),null);
var entry = vec__15000;
var from = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(qualified_sym));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,from);
if((!((to == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,renamed,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name(qualified_sym)));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,entry], 0));
}
});})(vec__14996,uk,rk,renk))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(vec__14996,uk,rk,renk))
;
var rewrite_deps = ((function (vec__14996,uk,rk,renk,rewrite_renames){
return (function (deps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (vec__14996,uk,rk,renk,rewrite_renames){
return (function (dep){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(smap,dep);
if(cljs.core.truth_(temp__5733__auto__)){
var new_dep = temp__5733__auto__;
return new_dep;
} else {
return dep;
}
});})(vec__14996,uk,rk,renk,rewrite_renames))
),deps);
});})(vec__14996,uk,rk,renk,rewrite_renames))
;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,uk,((function (vec__14996,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__14992_SHARP_){
return clojure.walk.postwalk_replace(smap,p1__14992_SHARP_);
});})(vec__14996,uk,rk,renk,rewrite_renames,rewrite_deps))
),rk,((function (vec__14996,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__14993_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([smap,clojure.walk.postwalk_replace(smap,p1__14993_SHARP_)], 0));
});})(vec__14996,uk,rk,renk,rewrite_renames,rewrite_deps))
),renk,rewrite_renames),cljs.core.cst$kw$deps,rewrite_deps);
});

cljs.js.rewrite_ns_ast.cljs$lang$maxFixedArity = 3;

cljs.js.check_macro_autoload_inferring_missing = (function cljs$js$check_macro_autoload_inferring_missing(p__15004,cenv){
var map__15005 = p__15004;
var map__15005__$1 = (((((!((map__15005 == null))))?(((((map__15005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15005):map__15005);
var ast = map__15005__$1;
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15005__$1,cljs.core.cst$kw$requires);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15005__$1,cljs.core.cst$kw$name);
var namespaces = cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cenv));
var missing_require_macros = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (namespaces,map__15005,map__15005__$1,ast,requires,name){
return (function (p__15007){
var vec__15008 = p__15007;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15008,(0),null);
var full_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15008,(1),null);
var map__15011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,full_ns);
var map__15011__$1 = (((((!((map__15011 == null))))?(((((map__15011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15011):map__15011);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15011__$1,cljs.core.cst$kw$use_DASH_macros);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15011__$1,cljs.core.cst$kw$require_DASH_macros);
var or__4131__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(use_macros));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals(require_macros));
}
});})(namespaces,map__15005,map__15005__$1,ast,requires,name))
),requires);
var ast_SINGLEQUOTE_ = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$require_DASH_macros], null),cljs.core.merge,missing_require_macros);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cenv,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,name,cljs.core.cst$kw$require_DASH_macros], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_require_macros], 0));

return ast_SINGLEQUOTE_;
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var G__15016 = arguments.length;
switch (G__15016) {
case 5:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,ast,opts,cb){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(false,bound_vars,ana_env,ast,opts,cb);
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__15017,opts,cb){
var map__15018 = p__15017;
var map__15018__$1 = (((((!((map__15018 == null))))?(((((map__15018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15018):map__15018);
var ast = map__15018__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15018__$1,cljs.core.cst$kw$op);
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespace side effects for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

if(cljs.core.truth_((function (){var fexpr__15020 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__15020.cljs$core$IFn$_invoke$arity$1 ? fexpr__15020.cljs$core$IFn$_invoke$arity$1(op) : fexpr__15020.call(null,op));
})())){
var check_uses_and_load_macros = ((function (map__15018,map__15018__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res,rewritten_ast){
var env = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
var map__15042 = rewritten_ast;
var map__15042__$1 = (((((!((map__15042 == null))))?(((((map__15042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15042):map__15042);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,cljs.core.cst$kw$uses);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,cljs.core.cst$kw$use_DASH_macros);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,cljs.core.cst$kw$reload);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,cljs.core.cst$kw$reloads);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15042__$1,cljs.core.cst$kw$name);
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :use-macros for",name], 0));
} else {
}

return cljs.js.load_macros(bound_vars,cljs.core.cst$kw$use_DASH_macros,use_macros,name,reload,reloads,opts,((function (env,map__15042,map__15042__$1,uses,use_macros,reload,reloads,name,map__15018,map__15018__$1,ast,op){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var map__15044 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__15044__$1 = (((((!((map__15044 == null))))?(((((map__15044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15044):map__15044);
var rewritten_ast__$1 = map__15044__$1;
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15044__$1,cljs.core.cst$kw$require_DASH_macros);
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processing :require-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

return cljs.js.load_macros(bound_vars,cljs.core.cst$kw$require_DASH_macros,require_macros,name,reload,reloads,opts,((function (map__15044,map__15044__$1,rewritten_ast__$1,require_macros,env,map__15042,map__15042__$1,uses,use_macros,reload,reloads,name,map__15018,map__15018__$1,ast,op){
return (function (res_SINGLEQUOTE_){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_) : cb.call(null,res_SINGLEQUOTE_));
} else {
var map__15046 = cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3(rewritten_ast__$1,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__15046__$1 = (((((!((map__15046 == null))))?(((((map__15046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15046):map__15046);
var rewritten_ast__$2 = map__15046__$1;
var use_macros__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15046__$1,cljs.core.cst$kw$use_DASH_macros);
var res_SINGLEQUOTE___$1 = (function (){try{if(cljs.core.seq(use_macros__$1)){
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking :use-macros for",cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
} else {
}

var _STAR_analyze_deps_STAR__orig_val__15049_15067 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__15050_15068 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__15051_15069 = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__15052_15070 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__15051_15069;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__15052_15070;

try{cljs.analyzer.check_use_macros.cljs$core$IFn$_invoke$arity$2(use_macros__$1,env);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__15050_15068;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__15049_15067;
}} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null);
}catch (e15048){var cause = e15048;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1) : cb.call(null,res_SINGLEQUOTE___$1));
} else {
try{var _STAR_analyze_deps_STAR__orig_val__15055 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__15056 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__15057 = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__15058 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__15057;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__15058;

try{var ast_SINGLEQUOTE_ = cljs.js.check_macro_autoload_inferring_missing(cljs.analyzer.check_rename_macros_inferring_missing(cljs.analyzer.check_use_macros_inferring_missing(rewritten_ast__$2,env),env),env);
var G__15059 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast_SINGLEQUOTE_], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__15059) : cb.call(null,G__15059));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__15056;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__15055;
}}catch (e15053){var cause = e15053;
var G__15054 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__15054) : cb.call(null,G__15054));
}}
}
});})(map__15044,map__15044__$1,rewritten_ast__$1,require_macros,env,map__15042,map__15042__$1,uses,use_macros,reload,reloads,name,map__15018,map__15018__$1,ast,op))
);
}
});})(env,map__15042,map__15042__$1,uses,use_macros,reload,reloads,name,map__15018,map__15018__$1,ast,op))
);
} else {
try{if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking uses"], 0));
} else {
}

cljs.analyzer.check_uses((cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(uses);
} else {
return and__4120__auto__;
}
})())?cljs.analyzer.missing_uses(uses,env):null),env);

var G__15062 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__15062) : cb.call(null,G__15062));
}catch (e15060){var cause = e15060;
var G__15061 = cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__15061) : cb.call(null,G__15061));
}}
}
});})(map__15018,map__15018__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__4120__auto__ = load;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.seq(cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto__;
}
})())){
var map__15063 = ast;
var map__15063__$1 = (((((!((map__15063 == null))))?(((((map__15063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15063):map__15063);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15063__$1,cljs.core.cst$kw$reload);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15063__$1,cljs.core.cst$kw$name);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15063__$1,cljs.core.cst$kw$deps);
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7(bound_vars,ana_env,name,deps,(function (){var or__4131__auto__ = cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reload);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reload);
}
})(),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),((function (map__15063,map__15063__$1,reload,name,deps,map__15018,map__15018__$1,ast,op){
return (function (p1__15013_SHARP_){
return check_uses_and_load_macros(p1__15013_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(p1__15013_SHARP_)));
});})(map__15063,map__15063__$1,reload,name,deps,map__15018,map__15018__$1,ast,op))
);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(load);
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.seq(cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6(bound_vars,ana_env,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$macros_DASH_ns),((function (map__15018,map__15018__$1,ast,op){
return (function (p1__15014_SHARP_){
return check_uses_and_load_macros(p1__15014_SHARP_,cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$aliased_DASH_loads.cljs$core$IFn$_invoke$arity$1(p1__15014_SHARP_)));
});})(map__15018,map__15018__$1,ast,op))
);
} else {
return check_uses_and_load_macros(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null),ast);

}
}
} else {
var G__15065 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,ast], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__15065) : cb.call(null,G__15065));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;

cljs.js.node_side_effects = (function cljs$js$node_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var seq__15071_15091 = cljs.core.seq(deps);
var chunk__15072_15092 = null;
var count__15073_15093 = (0);
var i__15074_15094 = (0);
while(true){
if((i__15074_15094 < count__15073_15093)){
var dep_15095 = chunk__15072_15092.cljs$core$IIndexed$_nth$arity$2(null,i__15074_15094);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15083_15096 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15084_15097 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15085_15098 = true;
var _STAR_print_fn_STAR__temp_val__15086_15099 = ((function (seq__15071_15091,chunk__15072_15092,count__15073_15093,i__15074_15094,_STAR_print_newline_STAR__orig_val__15083_15096,_STAR_print_fn_STAR__orig_val__15084_15097,_STAR_print_newline_STAR__temp_val__15085_15098,sb__4661__auto__,dep_15095){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__15071_15091,chunk__15072_15092,count__15073_15093,i__15074_15094,_STAR_print_newline_STAR__orig_val__15083_15096,_STAR_print_fn_STAR__orig_val__15084_15097,_STAR_print_newline_STAR__temp_val__15085_15098,sb__4661__auto__,dep_15095))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15085_15098;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15086_15099;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_15095)," = require('",dep_15095,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15084_15097;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15083_15096;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__15100 = seq__15071_15091;
var G__15101 = chunk__15072_15092;
var G__15102 = count__15073_15093;
var G__15103 = (i__15074_15094 + (1));
seq__15071_15091 = G__15100;
chunk__15072_15092 = G__15101;
count__15073_15093 = G__15102;
i__15074_15094 = G__15103;
continue;
} else {
var temp__5735__auto___15104 = cljs.core.seq(seq__15071_15091);
if(temp__5735__auto___15104){
var seq__15071_15105__$1 = temp__5735__auto___15104;
if(cljs.core.chunked_seq_QMARK_(seq__15071_15105__$1)){
var c__4550__auto___15106 = cljs.core.chunk_first(seq__15071_15105__$1);
var G__15107 = cljs.core.chunk_rest(seq__15071_15105__$1);
var G__15108 = c__4550__auto___15106;
var G__15109 = cljs.core.count(c__4550__auto___15106);
var G__15110 = (0);
seq__15071_15091 = G__15107;
chunk__15072_15092 = G__15108;
count__15073_15093 = G__15109;
i__15074_15094 = G__15110;
continue;
} else {
var dep_15111 = cljs.core.first(seq__15071_15105__$1);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15087_15112 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15088_15113 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15089_15114 = true;
var _STAR_print_fn_STAR__temp_val__15090_15115 = ((function (seq__15071_15091,chunk__15072_15092,count__15073_15093,i__15074_15094,_STAR_print_newline_STAR__orig_val__15087_15112,_STAR_print_fn_STAR__orig_val__15088_15113,_STAR_print_newline_STAR__temp_val__15089_15114,sb__4661__auto__,dep_15111,seq__15071_15105__$1,temp__5735__auto___15104){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__15071_15091,chunk__15072_15092,count__15073_15093,i__15074_15094,_STAR_print_newline_STAR__orig_val__15087_15112,_STAR_print_fn_STAR__orig_val__15088_15113,_STAR_print_newline_STAR__temp_val__15089_15114,sb__4661__auto__,dep_15111,seq__15071_15105__$1,temp__5735__auto___15104))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15089_15114;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15090_15115;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.munge(ns_name),".",cljs.analyzer.munge_node_lib(dep_15111)," = require('",dep_15111,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15088_15113;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15087_15112;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__15116 = cljs.core.next(seq__15071_15105__$1);
var G__15117 = null;
var G__15118 = (0);
var G__15119 = (0);
seq__15071_15091 = G__15116;
chunk__15072_15092 = G__15117;
count__15073_15093 = G__15118;
i__15074_15094 = G__15119;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.seq(deps);
if(and__4120__auto__){
return emit_nil_result_QMARK_;
} else {
return and__4120__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
cljs.js.global_exports_side_effects = (function cljs$js$global_exports_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var map__15120 = cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars));
var map__15120__$1 = (((((!((map__15120 == null))))?(((((map__15120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15120):map__15120);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15120__$1,cljs.core.cst$kw$js_DASH_dependency_DASH_index);
var seq__15122_15150 = cljs.core.seq(deps);
var chunk__15123_15151 = null;
var count__15124_15152 = (0);
var i__15125_15153 = (0);
while(true){
if((i__15125_15153 < count__15124_15152)){
var dep_15154 = chunk__15123_15151.cljs$core$IIndexed$_nth$arity$2(null,i__15125_15153);
var map__15138_15155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_15154));
var map__15138_15156__$1 = (((((!((map__15138_15155 == null))))?(((((map__15138_15155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15138_15155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15138_15155):map__15138_15155);
var global_exports_15157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15138_15156__$1,cljs.core.cst$kw$global_DASH_exports);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15140_15158 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15141_15159 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15142_15160 = true;
var _STAR_print_fn_STAR__temp_val__15143_15161 = ((function (seq__15122_15150,chunk__15123_15151,count__15124_15152,i__15125_15153,_STAR_print_newline_STAR__orig_val__15140_15158,_STAR_print_fn_STAR__orig_val__15141_15159,_STAR_print_newline_STAR__temp_val__15142_15160,sb__4661__auto__,map__15138_15155,map__15138_15156__$1,global_exports_15157,dep_15154,map__15120,map__15120__$1,js_dependency_index){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__15122_15150,chunk__15123_15151,count__15124_15152,i__15125_15153,_STAR_print_newline_STAR__orig_val__15140_15158,_STAR_print_fn_STAR__orig_val__15141_15159,_STAR_print_newline_STAR__temp_val__15142_15160,sb__4661__auto__,map__15138_15155,map__15138_15156__$1,global_exports_15157,dep_15154,map__15120,map__15120__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15142_15160;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15143_15161;

try{cljs.compiler.emit_global_export(ns_name,global_exports_15157,dep_15154);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15141_15159;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15140_15158;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__15162 = seq__15122_15150;
var G__15163 = chunk__15123_15151;
var G__15164 = count__15124_15152;
var G__15165 = (i__15125_15153 + (1));
seq__15122_15150 = G__15162;
chunk__15123_15151 = G__15163;
count__15124_15152 = G__15164;
i__15125_15153 = G__15165;
continue;
} else {
var temp__5735__auto___15166 = cljs.core.seq(seq__15122_15150);
if(temp__5735__auto___15166){
var seq__15122_15167__$1 = temp__5735__auto___15166;
if(cljs.core.chunked_seq_QMARK_(seq__15122_15167__$1)){
var c__4550__auto___15168 = cljs.core.chunk_first(seq__15122_15167__$1);
var G__15169 = cljs.core.chunk_rest(seq__15122_15167__$1);
var G__15170 = c__4550__auto___15168;
var G__15171 = cljs.core.count(c__4550__auto___15168);
var G__15172 = (0);
seq__15122_15150 = G__15169;
chunk__15123_15151 = G__15170;
count__15124_15152 = G__15171;
i__15125_15153 = G__15172;
continue;
} else {
var dep_15173 = cljs.core.first(seq__15122_15167__$1);
var map__15144_15174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(dep_15173));
var map__15144_15175__$1 = (((((!((map__15144_15174 == null))))?(((((map__15144_15174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15144_15174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15144_15174):map__15144_15174);
var global_exports_15176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15144_15175__$1,cljs.core.cst$kw$global_DASH_exports);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15146_15177 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15147_15178 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15148_15179 = true;
var _STAR_print_fn_STAR__temp_val__15149_15180 = ((function (seq__15122_15150,chunk__15123_15151,count__15124_15152,i__15125_15153,_STAR_print_newline_STAR__orig_val__15146_15177,_STAR_print_fn_STAR__orig_val__15147_15178,_STAR_print_newline_STAR__temp_val__15148_15179,sb__4661__auto__,map__15144_15174,map__15144_15175__$1,global_exports_15176,dep_15173,seq__15122_15167__$1,temp__5735__auto___15166,map__15120,map__15120__$1,js_dependency_index){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(seq__15122_15150,chunk__15123_15151,count__15124_15152,i__15125_15153,_STAR_print_newline_STAR__orig_val__15146_15177,_STAR_print_fn_STAR__orig_val__15147_15178,_STAR_print_newline_STAR__temp_val__15148_15179,sb__4661__auto__,map__15144_15174,map__15144_15175__$1,global_exports_15176,dep_15173,seq__15122_15167__$1,temp__5735__auto___15166,map__15120,map__15120__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15148_15179;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15149_15180;

try{cljs.compiler.emit_global_export(ns_name,global_exports_15176,dep_15173);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15147_15178;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15146_15177;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());


var G__15181 = cljs.core.next(seq__15122_15167__$1);
var G__15182 = null;
var G__15183 = (0);
var G__15184 = (0);
seq__15122_15150 = G__15181;
chunk__15123_15151 = G__15182;
count__15124_15152 = G__15183;
i__15125_15153 = G__15184;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.seq(deps);
if(and__4120__auto__){
return emit_nil_result_QMARK_;
} else {
return and__4120__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
/**
 * Returns a new function that calls f but discards any return value,
 *   returning nil instead, thus avoiding any inadvertent trampoline continuation
 *   if a function happens to be returned.
 */
cljs.js.trampoline_safe = (function cljs$js$trampoline_safe(f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(null),f);
});
cljs.js.analyze_str_STAR_ = (function cljs$js$analyze_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = ({});
var aenv = cljs.analyzer.empty_env();
var the_ns = (function (){var or__4131__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__15187 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15187,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__15187;
}
})();
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
var _STAR_compiler_STAR__orig_val__15188 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR__orig_val__15189 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__15190 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__15191 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__15192 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__15193 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR__orig_val__15194 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_alias_map_STAR__orig_val__15195 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__15196 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__15197 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__15198 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__15199 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__15200 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__15201 = ns;
var _STAR_checked_arrays_STAR__temp_val__15202 = cljs.core.cst$kw$checked_DASH_arrays.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__15203 = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__15204 = (function (){var and__4120__auto__ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.cst$kw$fn_DASH_invoke_DASH_direct.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__15205 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_passes_STAR__temp_val__15206 = cljs.core.cst$kw$_STAR_passes_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_alias_map_STAR__temp_val__15207 = cljs.js.alias_map(cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__15208 = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__15209 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__15210 = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__15211 = cljs.core.cst$kw$cljs_DASH_file.cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__15200;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__15201;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__15202;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__15203;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__15204;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__15205;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__15206;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__15207;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__15208;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__15209;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__15210;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__15211;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.js.read(eof,rdr)], null);
}catch (e15212){var cause = e15212;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__15213 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__15213__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15213,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__15213);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15213__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__15213__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e15214){var cause = e15214;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core.truth_((function (){var G__15216 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__15215 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__15215.cljs$core$IFn$_invoke$arity$1 ? fexpr__15215.cljs$core$IFn$_invoke$arity$1(G__15216) : fexpr__15215.call(null,G__15216));
})())){
var G__15218 = bound_vars__$1;
var G__15219 = aenv__$1;
var G__15220 = ast;
var G__15221 = opts;
var G__15222 = ((function (G__15218,G__15219,G__15220,G__15221,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15188,_STAR_cljs_ns_STAR__orig_val__15189,_STAR_checked_arrays_STAR__orig_val__15190,_STAR_cljs_static_fns_STAR__orig_val__15191,_STAR_fn_invoke_direct_STAR__orig_val__15192,_STAR_ns_STAR__orig_val__15193,_STAR_passes_STAR__orig_val__15194,_STAR_alias_map_STAR__orig_val__15195,_STAR_data_readers_STAR__orig_val__15196,resolve_symbol_orig_val__15197,_STAR_source_map_data_STAR__orig_val__15198,_STAR_cljs_file_STAR__orig_val__15199,_STAR_compiler_STAR__temp_val__15200,_STAR_cljs_ns_STAR__temp_val__15201,_STAR_checked_arrays_STAR__temp_val__15202,_STAR_cljs_static_fns_STAR__temp_val__15203,_STAR_fn_invoke_direct_STAR__temp_val__15204,_STAR_ns_STAR__temp_val__15205,_STAR_passes_STAR__temp_val__15206,_STAR_alias_map_STAR__temp_val__15207,_STAR_data_readers_STAR__temp_val__15208,resolve_symbol_temp_val__15209,_STAR_source_map_data_STAR__temp_val__15210,_STAR_cljs_file_STAR__temp_val__15211,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$analyze_str_STAR__$_analyze_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast)], 0));
}
});})(G__15218,G__15219,G__15220,G__15221,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15188,_STAR_cljs_ns_STAR__orig_val__15189,_STAR_checked_arrays_STAR__orig_val__15190,_STAR_cljs_static_fns_STAR__orig_val__15191,_STAR_fn_invoke_direct_STAR__orig_val__15192,_STAR_ns_STAR__orig_val__15193,_STAR_passes_STAR__orig_val__15194,_STAR_alias_map_STAR__orig_val__15195,_STAR_data_readers_STAR__orig_val__15196,resolve_symbol_orig_val__15197,_STAR_source_map_data_STAR__orig_val__15198,_STAR_cljs_file_STAR__orig_val__15199,_STAR_compiler_STAR__temp_val__15200,_STAR_cljs_ns_STAR__temp_val__15201,_STAR_checked_arrays_STAR__temp_val__15202,_STAR_cljs_static_fns_STAR__temp_val__15203,_STAR_fn_invoke_direct_STAR__temp_val__15204,_STAR_ns_STAR__temp_val__15205,_STAR_passes_STAR__temp_val__15206,_STAR_alias_map_STAR__temp_val__15207,_STAR_data_readers_STAR__temp_val__15208,resolve_symbol_temp_val__15209,_STAR_source_map_data_STAR__temp_val__15210,_STAR_cljs_file_STAR__temp_val__15211,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
;
var fexpr__15217 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__15217.cljs$core$IFn$_invoke$arity$5 ? fexpr__15217.cljs$core$IFn$_invoke$arity$5(G__15218,G__15219,G__15220,G__15221,G__15222) : fexpr__15217.call(null,G__15218,G__15219,G__15220,G__15221,G__15222));
} else {
return ((function (ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15188,_STAR_cljs_ns_STAR__orig_val__15189,_STAR_checked_arrays_STAR__orig_val__15190,_STAR_cljs_static_fns_STAR__orig_val__15191,_STAR_fn_invoke_direct_STAR__orig_val__15192,_STAR_ns_STAR__orig_val__15193,_STAR_passes_STAR__orig_val__15194,_STAR_alias_map_STAR__orig_val__15195,_STAR_data_readers_STAR__orig_val__15196,resolve_symbol_orig_val__15197,_STAR_source_map_data_STAR__orig_val__15198,_STAR_cljs_file_STAR__orig_val__15199,_STAR_compiler_STAR__temp_val__15200,_STAR_cljs_ns_STAR__temp_val__15201,_STAR_checked_arrays_STAR__temp_val__15202,_STAR_cljs_static_fns_STAR__temp_val__15203,_STAR_fn_invoke_direct_STAR__temp_val__15204,_STAR_ns_STAR__temp_val__15205,_STAR_passes_STAR__temp_val__15206,_STAR_alias_map_STAR__temp_val__15207,_STAR_data_readers_STAR__temp_val__15208,resolve_symbol_temp_val__15209,_STAR_source_map_data_STAR__temp_val__15210,_STAR_cljs_file_STAR__temp_val__15211,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (){
return cljs$js$analyze_str_STAR__$_analyze_loop(ast,ns);
});
;})(ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15188,_STAR_cljs_ns_STAR__orig_val__15189,_STAR_checked_arrays_STAR__orig_val__15190,_STAR_cljs_static_fns_STAR__orig_val__15191,_STAR_fn_invoke_direct_STAR__orig_val__15192,_STAR_ns_STAR__orig_val__15193,_STAR_passes_STAR__orig_val__15194,_STAR_alias_map_STAR__orig_val__15195,_STAR_data_readers_STAR__orig_val__15196,resolve_symbol_orig_val__15197,_STAR_source_map_data_STAR__orig_val__15198,_STAR_cljs_file_STAR__orig_val__15199,_STAR_compiler_STAR__temp_val__15200,_STAR_cljs_ns_STAR__temp_val__15201,_STAR_checked_arrays_STAR__temp_val__15202,_STAR_cljs_static_fns_STAR__temp_val__15203,_STAR_fn_invoke_direct_STAR__temp_val__15204,_STAR_ns_STAR__temp_val__15205,_STAR_passes_STAR__temp_val__15206,_STAR_alias_map_STAR__temp_val__15207,_STAR_data_readers_STAR__temp_val__15208,resolve_symbol_temp_val__15209,_STAR_source_map_data_STAR__temp_val__15210,_STAR_cljs_file_STAR__temp_val__15211,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
}
}
} else {
var G__15223 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,last_ast], null);
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(G__15223) : cb__$1.call(null,G__15223));
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__15199;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__15198;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__15197;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__15196;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__15195;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__15194;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__15193;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__15192;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__15191;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__15190;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__15189;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__15188;
}});})(rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,the_ns], 0));
});
/**
 * Analyze ClojureScript source. The compiler state will be populated with
 * the results of analyzes. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false).
 *                        Defaults to false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value, the actual value is not meaningful. If unsuccessful the
 *   map will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.analyze_str = (function cljs$js$analyze_str(var_args){
var G__15225 = arguments.length;
switch (G__15225) {
case 3:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.js.atom_QMARK_(state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_(name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.analyze_str_STAR_(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_passes_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$passes.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.analyzer._STAR_passes_STAR_;
}
})(),cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_,cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.analyze_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_STAR_ = (function cljs$js$eval_STAR_(bound_vars,form,opts,cb){
var the_ns = (function (){var or__4131__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__15227 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15227,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__15227;
}
})();
cljs.js.clear_fns_BANG_();

var _STAR_compiler_STAR__orig_val__15228 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__15229 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__15230 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__15231 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__15232 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__15233 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__15234 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__15235 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__15236 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__15237 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__15238 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__15239 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__15240 = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__15241 = cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_checked_arrays_STAR__temp_val__15242 = cljs.core.cst$kw$checked_DASH_arrays.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__15243 = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__15244 = (function (){var and__4120__auto__ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.cst$kw$fn_DASH_invoke_DASH_direct.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__15245 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_alias_map_STAR__temp_val__15246 = cljs.js.alias_map(cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_data_readers_STAR__temp_val__15247 = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__15248 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__15249 = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__15239;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__15240;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__15241;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__15242;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__15243;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__15244;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__15245;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__15246;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__15247;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__15248;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__15249;

try{var aenv = cljs.analyzer.empty_env();
var aenv__$1 = (function (){var G__15250 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__15250__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15250,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__15250);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15250__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__15250__$1;
}
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e15251){var cause = e15251;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res) : cb.call(null,res));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
var vec__15252 = ((cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$nodejs))?(function (){var map__15255 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
var map__15255__$1 = (((((!((map__15255 == null))))?(((((map__15255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15255):map__15255);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15255__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15255__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$deps,libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15252,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15252,(1),null);
if(cljs.core.truth_((function (){var G__15258 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__15257 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__15257.cljs$core$IFn$_invoke$arity$1 ? fexpr__15257.cljs$core$IFn$_invoke$arity$1(G__15258) : fexpr__15257.call(null,G__15258));
})())){
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6(true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,vec__15252,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__15228,_STAR_eval_fn_STAR__orig_val__15229,_STAR_cljs_ns_STAR__orig_val__15230,_STAR_checked_arrays_STAR__orig_val__15231,_STAR_cljs_static_fns_STAR__orig_val__15232,_STAR_fn_invoke_direct_STAR__orig_val__15233,_STAR_ns_STAR__orig_val__15234,_STAR_alias_map_STAR__orig_val__15235,_STAR_data_readers_STAR__orig_val__15236,resolve_symbol_orig_val__15237,_STAR_source_map_data_STAR__orig_val__15238,_STAR_compiler_STAR__temp_val__15239,_STAR_eval_fn_STAR__temp_val__15240,_STAR_cljs_ns_STAR__temp_val__15241,_STAR_checked_arrays_STAR__temp_val__15242,_STAR_cljs_static_fns_STAR__temp_val__15243,_STAR_fn_invoke_direct_STAR__temp_val__15244,_STAR_ns_STAR__temp_val__15245,_STAR_alias_map_STAR__temp_val__15246,_STAR_data_readers_STAR__temp_val__15247,resolve_symbol_temp_val__15248,_STAR_source_map_data_STAR__temp_val__15249,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(res__$1) : cb.call(null,res__$1));
} else {
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1);
var sb = (new goog.string.StringBuffer());
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15259_15269 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15260_15270 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15261_15271 = true;
var _STAR_print_fn_STAR__temp_val__15262_15272 = ((function (_STAR_print_newline_STAR__orig_val__15259_15269,_STAR_print_fn_STAR__orig_val__15260_15270,_STAR_print_newline_STAR__temp_val__15261_15271,sb__4661__auto__,ns_name,sb,ast,vec__15252,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__15228,_STAR_eval_fn_STAR__orig_val__15229,_STAR_cljs_ns_STAR__orig_val__15230,_STAR_checked_arrays_STAR__orig_val__15231,_STAR_cljs_static_fns_STAR__orig_val__15232,_STAR_fn_invoke_direct_STAR__orig_val__15233,_STAR_ns_STAR__orig_val__15234,_STAR_alias_map_STAR__orig_val__15235,_STAR_data_readers_STAR__orig_val__15236,resolve_symbol_orig_val__15237,_STAR_source_map_data_STAR__orig_val__15238,_STAR_compiler_STAR__temp_val__15239,_STAR_eval_fn_STAR__temp_val__15240,_STAR_cljs_ns_STAR__temp_val__15241,_STAR_checked_arrays_STAR__temp_val__15242,_STAR_cljs_static_fns_STAR__temp_val__15243,_STAR_fn_invoke_direct_STAR__temp_val__15244,_STAR_ns_STAR__temp_val__15245,_STAR_alias_map_STAR__temp_val__15246,_STAR_data_readers_STAR__temp_val__15247,resolve_symbol_temp_val__15248,_STAR_source_map_data_STAR__temp_val__15249,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__15259_15269,_STAR_print_fn_STAR__orig_val__15260_15270,_STAR_print_newline_STAR__temp_val__15261_15271,sb__4661__auto__,ns_name,sb,ast,vec__15252,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__15228,_STAR_eval_fn_STAR__orig_val__15229,_STAR_cljs_ns_STAR__orig_val__15230,_STAR_checked_arrays_STAR__orig_val__15231,_STAR_cljs_static_fns_STAR__orig_val__15232,_STAR_fn_invoke_direct_STAR__orig_val__15233,_STAR_ns_STAR__orig_val__15234,_STAR_alias_map_STAR__orig_val__15235,_STAR_data_readers_STAR__orig_val__15236,resolve_symbol_orig_val__15237,_STAR_source_map_data_STAR__orig_val__15238,_STAR_compiler_STAR__temp_val__15239,_STAR_eval_fn_STAR__temp_val__15240,_STAR_cljs_ns_STAR__temp_val__15241,_STAR_checked_arrays_STAR__temp_val__15242,_STAR_cljs_static_fns_STAR__temp_val__15243,_STAR_fn_invoke_direct_STAR__temp_val__15244,_STAR_ns_STAR__temp_val__15245,_STAR_alias_map_STAR__temp_val__15246,_STAR_data_readers_STAR__temp_val__15247,resolve_symbol_temp_val__15248,_STAR_source_map_data_STAR__temp_val__15249,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15261_15271;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15262_15272;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name)),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15260_15270;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15259_15269;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects(bound_vars__$1,sb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));

var G__15263 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,sb.toString()], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,sb.toString()], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__15263) : cb.call(null,G__15263));
}
});})(ast,vec__15252,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__15228,_STAR_eval_fn_STAR__orig_val__15229,_STAR_cljs_ns_STAR__orig_val__15230,_STAR_checked_arrays_STAR__orig_val__15231,_STAR_cljs_static_fns_STAR__orig_val__15232,_STAR_fn_invoke_direct_STAR__orig_val__15233,_STAR_ns_STAR__orig_val__15234,_STAR_alias_map_STAR__orig_val__15235,_STAR_data_readers_STAR__orig_val__15236,resolve_symbol_orig_val__15237,_STAR_source_map_data_STAR__orig_val__15238,_STAR_compiler_STAR__temp_val__15239,_STAR_eval_fn_STAR__temp_val__15240,_STAR_cljs_ns_STAR__temp_val__15241,_STAR_checked_arrays_STAR__temp_val__15242,_STAR_cljs_static_fns_STAR__temp_val__15243,_STAR_fn_invoke_direct_STAR__temp_val__15244,_STAR_ns_STAR__temp_val__15245,_STAR_alias_map_STAR__temp_val__15246,_STAR_data_readers_STAR__temp_val__15247,resolve_symbol_temp_val__15248,_STAR_source_map_data_STAR__temp_val__15249,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15264_15273 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15265_15274 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15266_15275 = true;
var _STAR_print_fn_STAR__temp_val__15267_15276 = ((function (_STAR_print_newline_STAR__orig_val__15264_15273,_STAR_print_fn_STAR__orig_val__15265_15274,_STAR_print_newline_STAR__temp_val__15266_15275,sb__4661__auto__,ast,vec__15252,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__15228,_STAR_eval_fn_STAR__orig_val__15229,_STAR_cljs_ns_STAR__orig_val__15230,_STAR_checked_arrays_STAR__orig_val__15231,_STAR_cljs_static_fns_STAR__orig_val__15232,_STAR_fn_invoke_direct_STAR__orig_val__15233,_STAR_ns_STAR__orig_val__15234,_STAR_alias_map_STAR__orig_val__15235,_STAR_data_readers_STAR__orig_val__15236,resolve_symbol_orig_val__15237,_STAR_source_map_data_STAR__orig_val__15238,_STAR_compiler_STAR__temp_val__15239,_STAR_eval_fn_STAR__temp_val__15240,_STAR_cljs_ns_STAR__temp_val__15241,_STAR_checked_arrays_STAR__temp_val__15242,_STAR_cljs_static_fns_STAR__temp_val__15243,_STAR_fn_invoke_direct_STAR__temp_val__15244,_STAR_ns_STAR__temp_val__15245,_STAR_alias_map_STAR__temp_val__15246,_STAR_data_readers_STAR__temp_val__15247,resolve_symbol_temp_val__15248,_STAR_source_map_data_STAR__temp_val__15249,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__15264_15273,_STAR_print_fn_STAR__orig_val__15265_15274,_STAR_print_newline_STAR__temp_val__15266_15275,sb__4661__auto__,ast,vec__15252,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__15228,_STAR_eval_fn_STAR__orig_val__15229,_STAR_cljs_ns_STAR__orig_val__15230,_STAR_checked_arrays_STAR__orig_val__15231,_STAR_cljs_static_fns_STAR__orig_val__15232,_STAR_fn_invoke_direct_STAR__orig_val__15233,_STAR_ns_STAR__orig_val__15234,_STAR_alias_map_STAR__orig_val__15235,_STAR_data_readers_STAR__orig_val__15236,resolve_symbol_orig_val__15237,_STAR_source_map_data_STAR__orig_val__15238,_STAR_compiler_STAR__temp_val__15239,_STAR_eval_fn_STAR__temp_val__15240,_STAR_cljs_ns_STAR__temp_val__15241,_STAR_checked_arrays_STAR__temp_val__15242,_STAR_cljs_static_fns_STAR__temp_val__15243,_STAR_fn_invoke_direct_STAR__temp_val__15244,_STAR_ns_STAR__temp_val__15245,_STAR_alias_map_STAR__temp_val__15246,_STAR_data_readers_STAR__temp_val__15247,resolve_symbol_temp_val__15248,_STAR_source_map_data_STAR__temp_val__15249,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15266_15275;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15267_15276;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15265_15274;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15264_15273;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
var G__15268 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)) : cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,src], null)))], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__15268) : cb.call(null,G__15268));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__15238;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__15237;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__15236;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__15235;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__15234;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__15233;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__15232;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__15231;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__15230;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__15229;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__15228;
}});
/**
 * Evaluate a single ClojureScript form. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * form (s-expr)
 *   the ClojureScript source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the result of evalution. If unsuccessful the map will
 *   contain a key :error with an ex-info instance describing the cause of
 *   failure.
 */
cljs.js.eval = (function cljs$js$eval(var_args){
var G__15278 = arguments.length;
switch (G__15278) {
case 3:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$3 = (function (state,form,cb){
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4(state,form,null,cb);
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$4 = (function (state,form,opts,cb){
return cljs.js.eval_STAR_(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_,cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),form,opts,cb);
});

cljs.js.eval.cljs$lang$maxFixedArity = 4;

cljs.js.compile_str_STAR_ = (function cljs$js$compile_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = ({});
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4131__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__15282 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15282,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__15282;
}
})();
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__15283 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__15284 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__15285 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__15286 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__15287 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__15288 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__15289 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__15290 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__15291 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__15292 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__15293 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__15294 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__15295 = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__15296 = ns;
var _STAR_checked_arrays_STAR__temp_val__15297 = cljs.core.cst$kw$checked_DASH_arrays.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__15298 = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__15299 = (function (){var and__4120__auto__ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.cst$kw$fn_DASH_invoke_DASH_direct.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__15300 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_alias_map_STAR__temp_val__15301 = cljs.js.alias_map(cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__15302 = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__15303 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__15304 = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__15294;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__15295;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__15296;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__15297;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__15298;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__15299;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__15300;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__15301;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__15302;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__15303;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__15304;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.js.read(eof,rdr)], null);
}catch (e15305){var cause = e15305;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__15306 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_));
var G__15306__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15306,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__15306);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15306__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__15306__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e15307){var cause = e15307;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
var vec__15308 = ((cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$nodejs))?(function (){var map__15311 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
var map__15311__$1 = (((((!((map__15311 == null))))?(((((map__15311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15311):map__15311);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15311__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15311__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$deps,libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15308,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15308,(1),null);
if(cljs.core.truth_((function (){var G__15314 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__15313 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__15313.cljs$core$IFn$_invoke$arity$1 ? fexpr__15313.cljs$core$IFn$_invoke$arity$1(G__15314) : fexpr__15313.call(null,G__15314));
})())){
var G__15316 = bound_vars__$1;
var G__15317 = aenv__$1;
var G__15318 = ast__$1;
var G__15319 = opts;
var G__15320 = ((function (G__15316,G__15317,G__15318,G__15319,ast,vec__15308,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15283,_STAR_eval_fn_STAR__orig_val__15284,_STAR_cljs_ns_STAR__orig_val__15285,_STAR_checked_arrays_STAR__orig_val__15286,_STAR_cljs_static_fns_STAR__orig_val__15287,_STAR_fn_invoke_direct_STAR__orig_val__15288,_STAR_ns_STAR__orig_val__15289,_STAR_alias_map_STAR__orig_val__15290,_STAR_data_readers_STAR__orig_val__15291,resolve_symbol_orig_val__15292,_STAR_source_map_data_STAR__orig_val__15293,_STAR_compiler_STAR__temp_val__15294,_STAR_eval_fn_STAR__temp_val__15295,_STAR_cljs_ns_STAR__temp_val__15296,_STAR_checked_arrays_STAR__temp_val__15297,_STAR_cljs_static_fns_STAR__temp_val__15298,_STAR_fn_invoke_direct_STAR__temp_val__15299,_STAR_ns_STAR__temp_val__15300,_STAR_alias_map_STAR__temp_val__15301,_STAR_data_readers_STAR__temp_val__15302,resolve_symbol_temp_val__15303,_STAR_source_map_data_STAR__temp_val__15304,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1);
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15321_15330 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15322_15331 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15323_15332 = true;
var _STAR_print_fn_STAR__temp_val__15324_15333 = ((function (_STAR_print_newline_STAR__orig_val__15321_15330,_STAR_print_fn_STAR__orig_val__15322_15331,_STAR_print_newline_STAR__temp_val__15323_15332,sb__4661__auto__,ns_name,G__15316,G__15317,G__15318,G__15319,ast,vec__15308,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15283,_STAR_eval_fn_STAR__orig_val__15284,_STAR_cljs_ns_STAR__orig_val__15285,_STAR_checked_arrays_STAR__orig_val__15286,_STAR_cljs_static_fns_STAR__orig_val__15287,_STAR_fn_invoke_direct_STAR__orig_val__15288,_STAR_ns_STAR__orig_val__15289,_STAR_alias_map_STAR__orig_val__15290,_STAR_data_readers_STAR__orig_val__15291,resolve_symbol_orig_val__15292,_STAR_source_map_data_STAR__orig_val__15293,_STAR_compiler_STAR__temp_val__15294,_STAR_eval_fn_STAR__temp_val__15295,_STAR_cljs_ns_STAR__temp_val__15296,_STAR_checked_arrays_STAR__temp_val__15297,_STAR_cljs_static_fns_STAR__temp_val__15298,_STAR_fn_invoke_direct_STAR__temp_val__15299,_STAR_ns_STAR__temp_val__15300,_STAR_alias_map_STAR__temp_val__15301,_STAR_data_readers_STAR__temp_val__15302,resolve_symbol_temp_val__15303,_STAR_source_map_data_STAR__temp_val__15304,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__15321_15330,_STAR_print_fn_STAR__orig_val__15322_15331,_STAR_print_newline_STAR__temp_val__15323_15332,sb__4661__auto__,ns_name,G__15316,G__15317,G__15318,G__15319,ast,vec__15308,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15283,_STAR_eval_fn_STAR__orig_val__15284,_STAR_cljs_ns_STAR__orig_val__15285,_STAR_checked_arrays_STAR__orig_val__15286,_STAR_cljs_static_fns_STAR__orig_val__15287,_STAR_fn_invoke_direct_STAR__orig_val__15288,_STAR_ns_STAR__orig_val__15289,_STAR_alias_map_STAR__orig_val__15290,_STAR_data_readers_STAR__orig_val__15291,resolve_symbol_orig_val__15292,_STAR_source_map_data_STAR__orig_val__15293,_STAR_compiler_STAR__temp_val__15294,_STAR_eval_fn_STAR__temp_val__15295,_STAR_cljs_ns_STAR__temp_val__15296,_STAR_checked_arrays_STAR__temp_val__15297,_STAR_cljs_static_fns_STAR__temp_val__15298,_STAR_fn_invoke_direct_STAR__temp_val__15299,_STAR_ns_STAR__temp_val__15300,_STAR_alias_map_STAR__temp_val__15301,_STAR_data_readers_STAR__temp_val__15302,resolve_symbol_temp_val__15303,_STAR_source_map_data_STAR__temp_val__15304,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15323_15332;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15324_15333;

try{cljs.compiler.emit(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$2));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15322_15331;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15321_15330;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));
}

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$compile_str_STAR__$_compile_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1)], 0));
}
});})(G__15316,G__15317,G__15318,G__15319,ast,vec__15308,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15283,_STAR_eval_fn_STAR__orig_val__15284,_STAR_cljs_ns_STAR__orig_val__15285,_STAR_checked_arrays_STAR__orig_val__15286,_STAR_cljs_static_fns_STAR__orig_val__15287,_STAR_fn_invoke_direct_STAR__orig_val__15288,_STAR_ns_STAR__orig_val__15289,_STAR_alias_map_STAR__orig_val__15290,_STAR_data_readers_STAR__orig_val__15291,resolve_symbol_orig_val__15292,_STAR_source_map_data_STAR__orig_val__15293,_STAR_compiler_STAR__temp_val__15294,_STAR_eval_fn_STAR__temp_val__15295,_STAR_cljs_ns_STAR__temp_val__15296,_STAR_checked_arrays_STAR__temp_val__15297,_STAR_cljs_static_fns_STAR__temp_val__15298,_STAR_fn_invoke_direct_STAR__temp_val__15299,_STAR_ns_STAR__temp_val__15300,_STAR_alias_map_STAR__temp_val__15301,_STAR_data_readers_STAR__temp_val__15302,resolve_symbol_temp_val__15303,_STAR_source_map_data_STAR__temp_val__15304,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
var fexpr__15315 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__15315.cljs$core$IFn$_invoke$arity$5 ? fexpr__15315.cljs$core$IFn$_invoke$arity$5(G__15316,G__15317,G__15318,G__15319,G__15320) : fexpr__15315.call(null,G__15316,G__15317,G__15318,G__15319,G__15320));
} else {
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15325_15334 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15326_15335 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15327_15336 = true;
var _STAR_print_fn_STAR__temp_val__15328_15337 = ((function (_STAR_print_newline_STAR__orig_val__15325_15334,_STAR_print_fn_STAR__orig_val__15326_15335,_STAR_print_newline_STAR__temp_val__15327_15336,sb__4661__auto__,ast,vec__15308,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15283,_STAR_eval_fn_STAR__orig_val__15284,_STAR_cljs_ns_STAR__orig_val__15285,_STAR_checked_arrays_STAR__orig_val__15286,_STAR_cljs_static_fns_STAR__orig_val__15287,_STAR_fn_invoke_direct_STAR__orig_val__15288,_STAR_ns_STAR__orig_val__15289,_STAR_alias_map_STAR__orig_val__15290,_STAR_data_readers_STAR__orig_val__15291,resolve_symbol_orig_val__15292,_STAR_source_map_data_STAR__orig_val__15293,_STAR_compiler_STAR__temp_val__15294,_STAR_eval_fn_STAR__temp_val__15295,_STAR_cljs_ns_STAR__temp_val__15296,_STAR_checked_arrays_STAR__temp_val__15297,_STAR_cljs_static_fns_STAR__temp_val__15298,_STAR_fn_invoke_direct_STAR__temp_val__15299,_STAR_ns_STAR__temp_val__15300,_STAR_alias_map_STAR__temp_val__15301,_STAR_data_readers_STAR__temp_val__15302,resolve_symbol_temp_val__15303,_STAR_source_map_data_STAR__temp_val__15304,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__15325_15334,_STAR_print_fn_STAR__orig_val__15326_15335,_STAR_print_newline_STAR__temp_val__15327_15336,sb__4661__auto__,ast,vec__15308,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15283,_STAR_eval_fn_STAR__orig_val__15284,_STAR_cljs_ns_STAR__orig_val__15285,_STAR_checked_arrays_STAR__orig_val__15286,_STAR_cljs_static_fns_STAR__orig_val__15287,_STAR_fn_invoke_direct_STAR__orig_val__15288,_STAR_ns_STAR__orig_val__15289,_STAR_alias_map_STAR__orig_val__15290,_STAR_data_readers_STAR__orig_val__15291,resolve_symbol_orig_val__15292,_STAR_source_map_data_STAR__orig_val__15293,_STAR_compiler_STAR__temp_val__15294,_STAR_eval_fn_STAR__temp_val__15295,_STAR_cljs_ns_STAR__temp_val__15296,_STAR_checked_arrays_STAR__temp_val__15297,_STAR_cljs_static_fns_STAR__temp_val__15298,_STAR_fn_invoke_direct_STAR__temp_val__15299,_STAR_ns_STAR__temp_val__15300,_STAR_alias_map_STAR__temp_val__15301,_STAR_data_readers_STAR__temp_val__15302,resolve_symbol_temp_val__15303,_STAR_source_map_data_STAR__temp_val__15304,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15327_15336;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15328_15337;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15326_15335;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15325_15334;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

return ((function (ast,vec__15308,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15283,_STAR_eval_fn_STAR__orig_val__15284,_STAR_cljs_ns_STAR__orig_val__15285,_STAR_checked_arrays_STAR__orig_val__15286,_STAR_cljs_static_fns_STAR__orig_val__15287,_STAR_fn_invoke_direct_STAR__orig_val__15288,_STAR_ns_STAR__orig_val__15289,_STAR_alias_map_STAR__orig_val__15290,_STAR_data_readers_STAR__orig_val__15291,resolve_symbol_orig_val__15292,_STAR_source_map_data_STAR__orig_val__15293,_STAR_compiler_STAR__temp_val__15294,_STAR_eval_fn_STAR__temp_val__15295,_STAR_cljs_ns_STAR__temp_val__15296,_STAR_checked_arrays_STAR__temp_val__15297,_STAR_cljs_static_fns_STAR__temp_val__15298,_STAR_fn_invoke_direct_STAR__temp_val__15299,_STAR_ns_STAR__temp_val__15300,_STAR_alias_map_STAR__temp_val__15301,_STAR_data_readers_STAR__temp_val__15302,resolve_symbol_temp_val__15303,_STAR_source_map_data_STAR__temp_val__15304,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (){
return cljs$js$compile_str_STAR__$_compile_loop(ns);
});
;})(ast,vec__15308,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15283,_STAR_eval_fn_STAR__orig_val__15284,_STAR_cljs_ns_STAR__orig_val__15285,_STAR_checked_arrays_STAR__orig_val__15286,_STAR_cljs_static_fns_STAR__orig_val__15287,_STAR_fn_invoke_direct_STAR__orig_val__15288,_STAR_ns_STAR__orig_val__15289,_STAR_alias_map_STAR__orig_val__15290,_STAR_data_readers_STAR__orig_val__15291,resolve_symbol_orig_val__15292,_STAR_source_map_data_STAR__orig_val__15293,_STAR_compiler_STAR__temp_val__15294,_STAR_eval_fn_STAR__temp_val__15295,_STAR_cljs_ns_STAR__temp_val__15296,_STAR_checked_arrays_STAR__temp_val__15297,_STAR_cljs_static_fns_STAR__temp_val__15298,_STAR_fn_invoke_direct_STAR__temp_val__15299,_STAR_ns_STAR__temp_val__15300,_STAR_alias_map_STAR__temp_val__15301,_STAR_data_readers_STAR__temp_val__15302,resolve_symbol_temp_val__15303,_STAR_source_map_data_STAR__temp_val__15304,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
}
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,name,source,sb,cljs.core.deref(cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

var G__15329 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,sb.toString()], null);
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(G__15329) : cb__$1.call(null,G__15329));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__15293;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__15292;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__15291;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__15290;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__15289;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__15288;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__15287;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__15286;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__15285;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__15284;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__15283;
}});})(rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([the_ns], 0));
});
/**
 * Compile ClojureScript source into JavaScript. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source - used as key in :source-maps
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the compilation result (string). If unsuccessful the map
 *   will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.compile_str = (function cljs$js$compile_str(var_args){
var G__15339 = arguments.length;
switch (G__15339) {
case 3:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.js.atom_QMARK_(state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_(name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.compile_str_STAR_(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))?cljs.js.sm_data():null)], null),source,name,opts,cb);
});

cljs.js.compile_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_str_STAR_ = (function cljs$js$eval_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3(source,(1),name);
var cb__$1 = cljs.js.trampoline_safe(cb);
var eof = ({});
var aenv = cljs.analyzer.empty_env();
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4131__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$sym$cljs$user;
}
})();
var bound_vars__$1 = (function (){var G__15343 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bound_vars,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_,the_ns], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15343,cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_,cljs.js.sm_data());
} else {
return G__15343;
}
})();
var aname = (function (){var G__15344 = name;
if(cljs.core.truth_(cljs.core.cst$kw$macros_DASH_ns.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name(G__15344);
} else {
return G__15344;
}
})();
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Evaluating",name], 0));
} else {
}

cljs.js.clear_fns_BANG_();

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__15345 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__15346 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__15347 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__15348 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__15349 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__15350 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__15351 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__15352 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__15353 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__15354 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__15355 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__15356 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__15357 = cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__15358 = cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__15359 = ns;
var _STAR_checked_arrays_STAR__temp_val__15360 = cljs.core.cst$kw$checked_DASH_arrays.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__15361 = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__15362 = (function (){var and__4120__auto__ = cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.cst$kw$fn_DASH_invoke_DASH_direct.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto__;
}
})();
var _STAR_ns_STAR__temp_val__15363 = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1(ns);
var _STAR_alias_map_STAR__temp_val__15364 = cljs.js.alias_map(cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__15365 = cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__15366 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__15367 = cljs.core.cst$kw$_STAR_sm_DASH_data_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__15368 = cljs.core.cst$kw$cljs_DASH_file.cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__15357;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__15358;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__15359;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__15360;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__15361;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__15362;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__15363;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__15364;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__15365;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__15366;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__15367;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__15368;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.js.read(eof,rdr)], null);
}catch (e15369){var cause = e15369;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res) : cb__$1.call(null,res));
} else {
var form = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__15370 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(aenv,cljs.core.cst$kw$ns,cljs.analyzer.get_namespace.cljs$core$IFn$_invoke$arity$1(ns));
var G__15370__$1 = (cljs.core.truth_(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15370,cljs.core.cst$kw$context,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(opts)):G__15370);
if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15370__$1,cljs.core.cst$kw$def_DASH_emits_DASH_var,true);
} else {
return G__15370__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(aenv__$1,form,null,opts)], null);
}catch (e15371){var cause = e15371;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
var ast = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
var vec__15372 = ((cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$nodejs))?(function (){var map__15375 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast));
var map__15375__$1 = (((((!((map__15375 == null))))?(((((map__15375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15375):map__15375);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15375__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15375__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,cljs.core.cst$kw$deps,libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15372,(0),null);
var ast__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15372,(1),null);
if(cljs.core.truth_((function (){var G__15378 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast__$1);
var fexpr__15377 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns_STAR_,null,cljs.core.cst$kw$ns,null], null), null);
return (fexpr__15377.cljs$core$IFn$_invoke$arity$1 ? fexpr__15377.cljs$core$IFn$_invoke$arity$1(G__15378) : fexpr__15377.call(null,G__15378));
})())){
sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15379_15398 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15380_15399 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15381_15400 = true;
var _STAR_print_fn_STAR__temp_val__15382_15401 = ((function (_STAR_print_newline_STAR__orig_val__15379_15398,_STAR_print_fn_STAR__orig_val__15380_15399,_STAR_print_newline_STAR__temp_val__15381_15400,sb__4661__auto__,ast,ns_SINGLEQUOTE_,vec__15372,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15345,_STAR_eval_fn_STAR__orig_val__15346,_STAR_cljs_ns_STAR__orig_val__15347,_STAR_checked_arrays_STAR__orig_val__15348,_STAR_cljs_static_fns_STAR__orig_val__15349,_STAR_fn_invoke_direct_STAR__orig_val__15350,_STAR_ns_STAR__orig_val__15351,_STAR_alias_map_STAR__orig_val__15352,_STAR_data_readers_STAR__orig_val__15353,resolve_symbol_orig_val__15354,_STAR_source_map_data_STAR__orig_val__15355,_STAR_cljs_file_STAR__orig_val__15356,_STAR_compiler_STAR__temp_val__15357,_STAR_eval_fn_STAR__temp_val__15358,_STAR_cljs_ns_STAR__temp_val__15359,_STAR_checked_arrays_STAR__temp_val__15360,_STAR_cljs_static_fns_STAR__temp_val__15361,_STAR_fn_invoke_direct_STAR__temp_val__15362,_STAR_ns_STAR__temp_val__15363,_STAR_alias_map_STAR__temp_val__15364,_STAR_data_readers_STAR__temp_val__15365,resolve_symbol_temp_val__15366,_STAR_source_map_data_STAR__temp_val__15367,_STAR_cljs_file_STAR__temp_val__15368,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__15379_15398,_STAR_print_fn_STAR__orig_val__15380_15399,_STAR_print_newline_STAR__temp_val__15381_15400,sb__4661__auto__,ast,ns_SINGLEQUOTE_,vec__15372,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15345,_STAR_eval_fn_STAR__orig_val__15346,_STAR_cljs_ns_STAR__orig_val__15347,_STAR_checked_arrays_STAR__orig_val__15348,_STAR_cljs_static_fns_STAR__orig_val__15349,_STAR_fn_invoke_direct_STAR__orig_val__15350,_STAR_ns_STAR__orig_val__15351,_STAR_alias_map_STAR__orig_val__15352,_STAR_data_readers_STAR__orig_val__15353,resolve_symbol_orig_val__15354,_STAR_source_map_data_STAR__orig_val__15355,_STAR_cljs_file_STAR__orig_val__15356,_STAR_compiler_STAR__temp_val__15357,_STAR_eval_fn_STAR__temp_val__15358,_STAR_cljs_ns_STAR__temp_val__15359,_STAR_checked_arrays_STAR__temp_val__15360,_STAR_cljs_static_fns_STAR__temp_val__15361,_STAR_fn_invoke_direct_STAR__temp_val__15362,_STAR_ns_STAR__temp_val__15363,_STAR_alias_map_STAR__temp_val__15364,_STAR_data_readers_STAR__temp_val__15365,resolve_symbol_temp_val__15366,_STAR_source_map_data_STAR__temp_val__15367,_STAR_cljs_file_STAR__temp_val__15368,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15381_15400;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15382_15401;

try{cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1))),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15380_15399;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15379_15398;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

var G__15384 = true;
var G__15385 = bound_vars__$1;
var G__15386 = aenv__$1;
var G__15387 = ast__$1;
var G__15388 = opts;
var G__15389 = ((function (G__15384,G__15385,G__15386,G__15387,G__15388,ast,ns_SINGLEQUOTE_,vec__15372,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15345,_STAR_eval_fn_STAR__orig_val__15346,_STAR_cljs_ns_STAR__orig_val__15347,_STAR_checked_arrays_STAR__orig_val__15348,_STAR_cljs_static_fns_STAR__orig_val__15349,_STAR_fn_invoke_direct_STAR__orig_val__15350,_STAR_ns_STAR__orig_val__15351,_STAR_alias_map_STAR__orig_val__15352,_STAR_data_readers_STAR__orig_val__15353,resolve_symbol_orig_val__15354,_STAR_source_map_data_STAR__orig_val__15355,_STAR_cljs_file_STAR__orig_val__15356,_STAR_compiler_STAR__temp_val__15357,_STAR_eval_fn_STAR__temp_val__15358,_STAR_cljs_ns_STAR__temp_val__15359,_STAR_checked_arrays_STAR__temp_val__15360,_STAR_cljs_static_fns_STAR__temp_val__15361,_STAR_fn_invoke_direct_STAR__temp_val__15362,_STAR_ns_STAR__temp_val__15363,_STAR_alias_map_STAR__temp_val__15364,_STAR_data_readers_STAR__temp_val__15365,resolve_symbol_temp_val__15366,_STAR_source_map_data_STAR__temp_val__15367,_STAR_cljs_file_STAR__temp_val__15368,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$2){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$2))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
} else {
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(ast__$1);
if((node_deps == null)){
} else {
cljs.js.node_side_effects(bound_vars__$1,sb,node_deps,ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects(bound_vars__$1,sb,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,cljs.core.cst$kw$deps.cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(opts));

return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(cljs$js$eval_str_STAR__$_compile_loop,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_SINGLEQUOTE_], 0));
}
});})(G__15384,G__15385,G__15386,G__15387,G__15388,ast,ns_SINGLEQUOTE_,vec__15372,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15345,_STAR_eval_fn_STAR__orig_val__15346,_STAR_cljs_ns_STAR__orig_val__15347,_STAR_checked_arrays_STAR__orig_val__15348,_STAR_cljs_static_fns_STAR__orig_val__15349,_STAR_fn_invoke_direct_STAR__orig_val__15350,_STAR_ns_STAR__orig_val__15351,_STAR_alias_map_STAR__orig_val__15352,_STAR_data_readers_STAR__orig_val__15353,resolve_symbol_orig_val__15354,_STAR_source_map_data_STAR__orig_val__15355,_STAR_cljs_file_STAR__orig_val__15356,_STAR_compiler_STAR__temp_val__15357,_STAR_eval_fn_STAR__temp_val__15358,_STAR_cljs_ns_STAR__temp_val__15359,_STAR_checked_arrays_STAR__temp_val__15360,_STAR_cljs_static_fns_STAR__temp_val__15361,_STAR_fn_invoke_direct_STAR__temp_val__15362,_STAR_ns_STAR__temp_val__15363,_STAR_alias_map_STAR__temp_val__15364,_STAR_data_readers_STAR__temp_val__15365,resolve_symbol_temp_val__15366,_STAR_source_map_data_STAR__temp_val__15367,_STAR_cljs_file_STAR__temp_val__15368,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var fexpr__15383 = cljs.js.trampoline_safe(cljs.js.ns_side_effects);
return (fexpr__15383.cljs$core$IFn$_invoke$arity$6 ? fexpr__15383.cljs$core$IFn$_invoke$arity$6(G__15384,G__15385,G__15386,G__15387,G__15388,G__15389) : fexpr__15383.call(null,G__15384,G__15385,G__15386,G__15387,G__15388,G__15389));
} else {
var env__4381__auto___15402 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cljs.core.cst$kw$_STAR_compiler_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),cljs.core.cst$kw$options,opts);
var env__4381__auto___15403__$1 = ((cljs.core.map_QMARK_(env__4381__auto___15402))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__4381__auto___15402):(((((env__4381__auto___15402 instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__4381__auto___15402)))))?env__4381__auto___15402:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__4381__auto___15402))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__15390_15404 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__15391_15405 = env__4381__auto___15403__$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__15391_15405;

try{sb.append((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15392_15406 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15393_15407 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15394_15408 = true;
var _STAR_print_fn_STAR__temp_val__15395_15409 = ((function (_STAR_print_newline_STAR__orig_val__15392_15406,_STAR_print_fn_STAR__orig_val__15393_15407,_STAR_print_newline_STAR__temp_val__15394_15408,sb__4661__auto__,_STAR_compiler_STAR__orig_val__15390_15404,_STAR_compiler_STAR__temp_val__15391_15405,env__4381__auto___15402,env__4381__auto___15403__$1,ast,ns_SINGLEQUOTE_,vec__15372,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15345,_STAR_eval_fn_STAR__orig_val__15346,_STAR_cljs_ns_STAR__orig_val__15347,_STAR_checked_arrays_STAR__orig_val__15348,_STAR_cljs_static_fns_STAR__orig_val__15349,_STAR_fn_invoke_direct_STAR__orig_val__15350,_STAR_ns_STAR__orig_val__15351,_STAR_alias_map_STAR__orig_val__15352,_STAR_data_readers_STAR__orig_val__15353,resolve_symbol_orig_val__15354,_STAR_source_map_data_STAR__orig_val__15355,_STAR_cljs_file_STAR__orig_val__15356,_STAR_compiler_STAR__temp_val__15357,_STAR_eval_fn_STAR__temp_val__15358,_STAR_cljs_ns_STAR__temp_val__15359,_STAR_checked_arrays_STAR__temp_val__15360,_STAR_cljs_static_fns_STAR__temp_val__15361,_STAR_fn_invoke_direct_STAR__temp_val__15362,_STAR_ns_STAR__temp_val__15363,_STAR_alias_map_STAR__temp_val__15364,_STAR_data_readers_STAR__temp_val__15365,resolve_symbol_temp_val__15366,_STAR_source_map_data_STAR__temp_val__15367,_STAR_cljs_file_STAR__temp_val__15368,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__15392_15406,_STAR_print_fn_STAR__orig_val__15393_15407,_STAR_print_newline_STAR__temp_val__15394_15408,sb__4661__auto__,_STAR_compiler_STAR__orig_val__15390_15404,_STAR_compiler_STAR__temp_val__15391_15405,env__4381__auto___15402,env__4381__auto___15403__$1,ast,ns_SINGLEQUOTE_,vec__15372,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15345,_STAR_eval_fn_STAR__orig_val__15346,_STAR_cljs_ns_STAR__orig_val__15347,_STAR_checked_arrays_STAR__orig_val__15348,_STAR_cljs_static_fns_STAR__orig_val__15349,_STAR_fn_invoke_direct_STAR__orig_val__15350,_STAR_ns_STAR__orig_val__15351,_STAR_alias_map_STAR__orig_val__15352,_STAR_data_readers_STAR__orig_val__15353,resolve_symbol_orig_val__15354,_STAR_source_map_data_STAR__orig_val__15355,_STAR_cljs_file_STAR__orig_val__15356,_STAR_compiler_STAR__temp_val__15357,_STAR_eval_fn_STAR__temp_val__15358,_STAR_cljs_ns_STAR__temp_val__15359,_STAR_checked_arrays_STAR__temp_val__15360,_STAR_cljs_static_fns_STAR__temp_val__15361,_STAR_fn_invoke_direct_STAR__temp_val__15362,_STAR_ns_STAR__temp_val__15363,_STAR_alias_map_STAR__temp_val__15364,_STAR_data_readers_STAR__temp_val__15365,resolve_symbol_temp_val__15366,_STAR_source_map_data_STAR__temp_val__15367,_STAR_cljs_file_STAR__temp_val__15368,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15394_15408;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15395_15409;

try{cljs.compiler.emit(ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15393_15407;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15392_15406;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__15390_15404;
}
return ((function (ast,ns_SINGLEQUOTE_,vec__15372,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15345,_STAR_eval_fn_STAR__orig_val__15346,_STAR_cljs_ns_STAR__orig_val__15347,_STAR_checked_arrays_STAR__orig_val__15348,_STAR_cljs_static_fns_STAR__orig_val__15349,_STAR_fn_invoke_direct_STAR__orig_val__15350,_STAR_ns_STAR__orig_val__15351,_STAR_alias_map_STAR__orig_val__15352,_STAR_data_readers_STAR__orig_val__15353,resolve_symbol_orig_val__15354,_STAR_source_map_data_STAR__orig_val__15355,_STAR_cljs_file_STAR__orig_val__15356,_STAR_compiler_STAR__temp_val__15357,_STAR_eval_fn_STAR__temp_val__15358,_STAR_cljs_ns_STAR__temp_val__15359,_STAR_checked_arrays_STAR__temp_val__15360,_STAR_cljs_static_fns_STAR__temp_val__15361,_STAR_fn_invoke_direct_STAR__temp_val__15362,_STAR_ns_STAR__temp_val__15363,_STAR_alias_map_STAR__temp_val__15364,_STAR_data_readers_STAR__temp_val__15365,resolve_symbol_temp_val__15366,_STAR_source_map_data_STAR__temp_val__15367,_STAR_cljs_file_STAR__temp_val__15368,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (){
return cljs$js$eval_str_STAR__$_compile_loop(ns_SINGLEQUOTE_);
});
;})(ast,ns_SINGLEQUOTE_,vec__15372,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__15345,_STAR_eval_fn_STAR__orig_val__15346,_STAR_cljs_ns_STAR__orig_val__15347,_STAR_checked_arrays_STAR__orig_val__15348,_STAR_cljs_static_fns_STAR__orig_val__15349,_STAR_fn_invoke_direct_STAR__orig_val__15350,_STAR_ns_STAR__orig_val__15351,_STAR_alias_map_STAR__orig_val__15352,_STAR_data_readers_STAR__orig_val__15353,resolve_symbol_orig_val__15354,_STAR_source_map_data_STAR__orig_val__15355,_STAR_cljs_file_STAR__orig_val__15356,_STAR_compiler_STAR__temp_val__15357,_STAR_eval_fn_STAR__temp_val__15358,_STAR_cljs_ns_STAR__temp_val__15359,_STAR_checked_arrays_STAR__temp_val__15360,_STAR_cljs_static_fns_STAR__temp_val__15361,_STAR_fn_invoke_direct_STAR__temp_val__15362,_STAR_ns_STAR__temp_val__15363,_STAR_alias_map_STAR__temp_val__15364,_STAR_data_readers_STAR__temp_val__15365,resolve_symbol_temp_val__15366,_STAR_source_map_data_STAR__temp_val__15367,_STAR_cljs_file_STAR__temp_val__15368,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
}
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map(cljs.env._STAR_compiler_STAR_,aname,source,sb,cljs.core.deref(cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

if((aname instanceof cljs.core.Symbol)){
cljs.analyzer.dump_specs(aname);
} else {
}

var js_source = sb.toString();
var evalm = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$lang,cljs.core.cst$kw$clj,cljs.core.cst$kw$name,name,cljs.core.cst$kw$path,cljs.js.ns__GT_relpath(name),cljs.core.cst$kw$source,js_source,cljs.core.cst$kw$cache,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,aname], null))], null);
var complete = ((function (js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__15345,_STAR_eval_fn_STAR__orig_val__15346,_STAR_cljs_ns_STAR__orig_val__15347,_STAR_checked_arrays_STAR__orig_val__15348,_STAR_cljs_static_fns_STAR__orig_val__15349,_STAR_fn_invoke_direct_STAR__orig_val__15350,_STAR_ns_STAR__orig_val__15351,_STAR_alias_map_STAR__orig_val__15352,_STAR_data_readers_STAR__orig_val__15353,resolve_symbol_orig_val__15354,_STAR_source_map_data_STAR__orig_val__15355,_STAR_cljs_file_STAR__orig_val__15356,_STAR_compiler_STAR__temp_val__15357,_STAR_eval_fn_STAR__temp_val__15358,_STAR_cljs_ns_STAR__temp_val__15359,_STAR_checked_arrays_STAR__temp_val__15360,_STAR_cljs_static_fns_STAR__temp_val__15361,_STAR_fn_invoke_direct_STAR__temp_val__15362,_STAR_ns_STAR__temp_val__15363,_STAR_alias_map_STAR__temp_val__15364,_STAR_data_readers_STAR__temp_val__15365,resolve_symbol_temp_val__15366,_STAR_source_map_data_STAR__temp_val__15367,_STAR_cljs_file_STAR__temp_val__15368,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(res__$1))){
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$1) : cb__$1.call(null,res__$1));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$verbose.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([js_source], 0));
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$value,(cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.js._STAR_eval_fn_STAR_.cljs$core$IFn$_invoke$arity$1(evalm) : cljs.js._STAR_eval_fn_STAR_.call(null,evalm))], null);
}catch (e15396){var cause = e15396;
return cljs.js.wrap_error(cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(aenv,"ERROR",cause));
}})();
return (cb__$1.cljs$core$IFn$_invoke$arity$1 ? cb__$1.cljs$core$IFn$_invoke$arity$1(res__$2) : cb__$1.call(null,res__$2));
}
});})(js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__15345,_STAR_eval_fn_STAR__orig_val__15346,_STAR_cljs_ns_STAR__orig_val__15347,_STAR_checked_arrays_STAR__orig_val__15348,_STAR_cljs_static_fns_STAR__orig_val__15349,_STAR_fn_invoke_direct_STAR__orig_val__15350,_STAR_ns_STAR__orig_val__15351,_STAR_alias_map_STAR__orig_val__15352,_STAR_data_readers_STAR__orig_val__15353,resolve_symbol_orig_val__15354,_STAR_source_map_data_STAR__orig_val__15355,_STAR_cljs_file_STAR__orig_val__15356,_STAR_compiler_STAR__temp_val__15357,_STAR_eval_fn_STAR__temp_val__15358,_STAR_cljs_ns_STAR__temp_val__15359,_STAR_checked_arrays_STAR__temp_val__15360,_STAR_cljs_static_fns_STAR__temp_val__15361,_STAR_fn_invoke_direct_STAR__temp_val__15362,_STAR_ns_STAR__temp_val__15363,_STAR_alias_map_STAR__temp_val__15364,_STAR_data_readers_STAR__temp_val__15365,resolve_symbol_temp_val__15366,_STAR_source_map_data_STAR__temp_val__15367,_STAR_cljs_file_STAR__temp_val__15368,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var temp__5733__auto__ = cljs.core.cst$kw$cache_DASH_source.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
var fexpr__15397 = cljs.js.trampoline_safe(f);
return (fexpr__15397.cljs$core$IFn$_invoke$arity$2 ? fexpr__15397.cljs$core$IFn$_invoke$arity$2(evalm,complete) : fexpr__15397.call(null,evalm,complete));
} else {
return complete(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null));
}
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__15356;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__15355;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__15354;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__15353;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__15352;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__15351;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__15350;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__15349;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__15348;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__15347;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__15346;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__15345;
}});})(rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_STAR_cljs_DASH_ns_STAR_.cljs$core$IFn$_invoke$arity$1(bound_vars__$1)], 0));
});
/**
 * Evalute ClojureScript source given as a string. The parameters:
 * 
 *   state (atom)
 *  the compiler state
 * 
 *   source (string)
 *  the ClojureScript source
 * 
 *   name (symbol or string)
 *  optional, the name of the source - used as key in :source-maps
 * 
 *   opts (map)
 *  compilation options.
 * 
 *  :eval             - eval function to invoke, see *eval-fn*
 *  :load             - library resolution function, see *load-fn*
 *  :source-map       - set to true to generate inline source map information
 *  :cache-source     - optional, a function to run side-effects with the
 *                      compilation result prior to actual evalution. This function
 *                      takes two arguments, the first is the eval map, the source
 *                      will be under :source. The second argument is a callback of
 *                      one argument. If an error occurs an :error key should be
 *                      supplied.
 *  :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                      (if set to true) or the def init value (if false). Default
 *                      is false.
 *  :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                      to aget/aset. Logs for incorrect values if :warn, throws if
 *                      :error. Defaults to false.
 *  :static-fns       - employ static dispatch to specific function arities in
 *                      emitted JavaScript, as opposed to making use of the
 *                      `call` construct. Defaults to false.
 *  :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                      unknown functions, but instead direct invokes via
 *                      `f(a0,a1...)`. Defaults to `false`.
 *  :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                      at the moment.
 *  :ns               - optional, the namespace in which to evaluate the source.
 *  :verbose          - optional, emit details from compiler activity. Defaults to
 *                      false.
 *  :context          - optional, sets the context for the source. Possible values
 *                   are `:expr`, `:statement` and `:return`. Defaults to
 *                    `:expr`.
 * 
 *   cb (function)
 *  callback, will be invoked with a map. If succesful the map will contain
 *  a :value key with the result of evaluation and :ns the current namespace.
 *  If unsuccessful will contain a :error key with an ex-info instance describing
 *  the cause of failure.
 */
cljs.js.eval_str = (function cljs$js$eval_str(var_args){
var G__15411 = arguments.length;
switch (G__15411) {
case 3:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4(state,source,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(state,source,name,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.js.atom_QMARK_(state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_(name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_(cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.eval_str_STAR_(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$_STAR_compiler_STAR_,state,cljs.core.cst$kw$_STAR_data_DASH_readers_STAR_,cljs.tagged_literals._STAR_cljs_data_readers_STAR_,cljs.core.cst$kw$_STAR_analyze_DASH_deps_STAR_,cljs.core.cst$kw$analyze_DASH_deps.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_cljs_DASH_dep_DASH_set_STAR_,cljs.analyzer._STAR_cljs_dep_set_STAR_,cljs.core.cst$kw$_STAR_load_DASH_macros_STAR_,cljs.core.cst$kw$load_DASH_macros.cljs$core$IFn$_invoke$arity$2(opts,true),cljs.core.cst$kw$_STAR_load_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),cljs.core.cst$kw$_STAR_eval_DASH_fn_STAR_,(function (){var or__4131__auto__ = cljs.core.cst$kw$eval.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.eval_str.cljs$lang$maxFixedArity = 5;

if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js.fn_index !== 'undefined')){
} else {
cljs.js.fn_index = cljs.core.volatile_BANG_((0));
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js.fn_refs !== 'undefined')){
} else {
cljs.js.fn_refs = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Clears saved functions.
 */
cljs.js.clear_fns_BANG_ = (function cljs$js$clear_fns_BANG_(){
return cljs.core.vreset_BANG_(cljs.js.fn_refs,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Saves a function, returning a numeric representation.
 */
cljs.js.put_fn = (function cljs$js$put_fn(f){
var n = cljs.js.fn_index.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(cljs.js.fn_index.cljs$core$IDeref$_deref$arity$1(null) + (1)));
cljs.js.fn_refs.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.js.fn_refs.cljs$core$IDeref$_deref$arity$1(null),n,f));

return n;
});
/**
 * Gets a function, given its numeric representation.
 */
cljs.js.get_fn = (function cljs$js$get_fn(n){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.js.fn_refs),n);
});
cljs.js.emit_fn = (function cljs$js$emit_fn(f){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cljs.js.get_fn(",cljs.js.put_fn(f),")"], 0));
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Function,(function (f){
return cljs.js.emit_fn(f);
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Var,(function (f){
return cljs.js.emit_fn(f);
}));
cljs.js.eval_impl = (function cljs$js$eval_impl(var_args){
var G__15414 = arguments.length;
switch (G__15414) {
case 1:
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$1 = (function (form){
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2(form,cljs.core._STAR_ns_STAR_.name);
});

cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2 = (function (form,ns){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var st_15419 = cljs.env._STAR_compiler_STAR_;
cljs.js.eval.cljs$core$IFn$_invoke$arity$4(st_15419,form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$ns,ns,cljs.core.cst$kw$context,cljs.core.cst$kw$expr,cljs.core.cst$kw$def_DASH_emits_DASH_var,true], null),((function (st_15419,result){
return (function (p__15415){
var map__15416 = p__15415;
var map__15416__$1 = (((((!((map__15416 == null))))?(((((map__15416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15416):map__15416);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15416__$1,cljs.core.cst$kw$value);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15416__$1,cljs.core.cst$kw$error);
if(cljs.core.truth_(error)){
throw error;
} else {
return cljs.core.reset_BANG_(result,value);
}
});})(st_15419,result))
);

return cljs.core.deref(result);
});

cljs.js.eval_impl.cljs$lang$maxFixedArity = 2;

cljs.core._STAR_eval_STAR_ = cljs.js.eval_impl;