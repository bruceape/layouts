// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ecmascript5,cljs.core.cst$kw$ecmascript5_DASH_strict,cljs.core.cst$kw$ecmascript6,cljs.core.cst$kw$ecmascript6_DASH_strict,cljs.core.cst$kw$ecmascript_DASH_2015,cljs.core.cst$kw$ecmascript6_DASH_typed,cljs.core.cst$kw$ecmascript_DASH_2016,cljs.core.cst$kw$ecmascript_DASH_2017,cljs.core.cst$kw$ecmascript_DASH_next], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__6856 = s;
var map__6856__$1 = (((((!((map__6856 == null))))?(((((map__6856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6856):map__6856);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6856__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6856__$1,cljs.core.cst$kw$info);
var d = (0);
var G__6859 = info;
var map__6860 = G__6859;
var map__6860__$1 = (((((!((map__6860 == null))))?(((((map__6860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6860):map__6860);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6860__$1,cljs.core.cst$kw$shadow);
var d__$1 = d;
var G__6859__$1 = G__6859;
while(true){
var d__$2 = d__$1;
var map__6864 = G__6859__$1;
var map__6864__$1 = (((((!((map__6864 == null))))?(((((map__6864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6864):map__6864);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6864__$1,cljs.core.cst$kw$shadow);
if(cljs.core.truth_(shadow__$1)){
var G__6866 = (d__$2 + (1));
var G__6867 = shadow__$1;
d__$1 = G__6866;
G__6859__$1 = G__6867;
continue;
} else {
if(cljs.core.truth_((cljs.compiler.find_ns_starts_with.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.find_ns_starts_with.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)) : cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name))))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__6868){
var map__6869 = p__6868;
var map__6869__$1 = (((((!((map__6869 == null))))?(((((map__6869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6869):map__6869);
var name_var = map__6869__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6869__$1,cljs.core.cst$kw$name);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6869__$1,cljs.core.cst$kw$info);
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__6871 = info;
var map__6871__$1 = (((((!((map__6871 == null))))?(((((map__6871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6871):map__6871);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6871__$1,cljs.core.cst$kw$ns);
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6871__$1,cljs.core.cst$kw$fn_DASH_scope);
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.cst$kw$name),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__6873 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__6873) : cljs.compiler.munge.call(null,G__6873));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__6875 = arguments.length;
switch (G__6875) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(name_var);
var field = cljs.core.cst$kw$field.cljs$core$IFn$_invoke$arity$1(name_var);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(name_var);
if((!((cljs.core.cst$kw$fn_DASH_self_DASH_name.cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__6876 = new cljs.core.Var(function(){return cljs.core.munge_str;},cljs.core.cst$sym$cljs$core_SLASH_munge_DASH_str,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$munge_DASH_str,"cljs/core.cljs",17,1,11478,11478,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__6876.cljs$core$IFn$_invoke$arity$1 ? fexpr__6876.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__6876.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__6878 = cp;
switch (G__6878) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__6880_6884 = cljs.core.seq(s);
var chunk__6881_6885 = null;
var count__6882_6886 = (0);
var i__6883_6887 = (0);
while(true){
if((i__6883_6887 < count__6882_6886)){
var c_6888 = chunk__6881_6885.cljs$core$IIndexed$_nth$arity$2(null,i__6883_6887);
sb.append(cljs.compiler.escape_char(c_6888));


var G__6889 = seq__6880_6884;
var G__6890 = chunk__6881_6885;
var G__6891 = count__6882_6886;
var G__6892 = (i__6883_6887 + (1));
seq__6880_6884 = G__6889;
chunk__6881_6885 = G__6890;
count__6882_6886 = G__6891;
i__6883_6887 = G__6892;
continue;
} else {
var temp__5735__auto___6893 = cljs.core.seq(seq__6880_6884);
if(temp__5735__auto___6893){
var seq__6880_6894__$1 = temp__5735__auto___6893;
if(cljs.core.chunked_seq_QMARK_(seq__6880_6894__$1)){
var c__4550__auto___6895 = cljs.core.chunk_first(seq__6880_6894__$1);
var G__6896 = cljs.core.chunk_rest(seq__6880_6894__$1);
var G__6897 = c__4550__auto___6895;
var G__6898 = cljs.core.count(c__4550__auto___6895);
var G__6899 = (0);
seq__6880_6884 = G__6896;
chunk__6881_6885 = G__6897;
count__6882_6886 = G__6898;
i__6883_6887 = G__6899;
continue;
} else {
var c_6900 = cljs.core.first(seq__6880_6894__$1);
sb.append(cljs.compiler.escape_char(c_6900));


var G__6901 = cljs.core.next(seq__6880_6894__$1);
var G__6902 = null;
var G__6903 = (0);
var G__6904 = (0);
seq__6880_6884 = G__6901;
chunk__6881_6885 = G__6902;
count__6882_6886 = G__6903;
i__6883_6887 = G__6904;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__6905 = cljs.core.get_global_hierarchy;
return (fexpr__6905.cljs$core$IFn$_invoke$arity$0 ? fexpr__6905.cljs$core$IFn$_invoke$arity$0() : fexpr__6905.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),cljs.core.cst$kw$op,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__6906_6913 = ast;
var map__6906_6914__$1 = (((((!((map__6906_6913 == null))))?(((((map__6906_6913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6906_6913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6906_6913):map__6906_6913);
var env_6915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6906_6914__$1,cljs.core.cst$kw$env);
if(cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env_6915))){
var map__6908_6916 = env_6915;
var map__6908_6917__$1 = (((((!((map__6908_6916 == null))))?(((((map__6908_6916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6908_6916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6908_6916):map__6908_6916);
var line_6918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6908_6917__$1,cljs.core.cst$kw$line);
var column_6919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6908_6917__$1,cljs.core.cst$kw$column);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__6908_6916,map__6908_6917__$1,line_6918,column_6919,map__6906_6913,map__6906_6914__$1,env_6915){
return (function (m){
var minfo = (function (){var G__6910 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gcol,cljs.core.cst$kw$gen_DASH_col.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$gline,cljs.core.cst$kw$gen_DASH_line.cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__6912 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__6911 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$binding,null,cljs.core.cst$kw$var,null,cljs.core.cst$kw$js_DASH_var,null,cljs.core.cst$kw$local,null], null), null);
return (fexpr__6911.cljs$core$IFn$_invoke$arity$1 ? fexpr__6911.cljs$core$IFn$_invoke$arity$1(G__6912) : fexpr__6911.call(null,G__6912));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__6910,cljs.core.cst$kw$name,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__6910;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source_DASH_map,(line_6918 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__6908_6916,map__6908_6917__$1,line_6918,column_6919,map__6906_6913,map__6906_6914__$1,env_6915){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_6919)?(column_6919 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__6908_6916,map__6908_6917__$1,line_6918,column_6919,map__6906_6913,map__6906_6914__$1,env_6915){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__6908_6916,map__6908_6917__$1,line_6918,column_6919,map__6906_6913,map__6906_6914__$1,env_6915))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__6908_6916,map__6908_6917__$1,line_6918,column_6919,map__6906_6913,map__6906_6914__$1,env_6915))
,cljs.core.sorted_map()));
});})(map__6908_6916,map__6908_6917__$1,line_6918,column_6919,map__6906_6913,map__6906_6914__$1,env_6915))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__6928 = arguments.length;
switch (G__6928) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___6935 = arguments.length;
var i__4731__auto___6936 = (0);
while(true){
if((i__4731__auto___6936 < len__4730__auto___6935)){
args_arr__4751__auto__.push((arguments[i__4731__auto___6936]));

var G__6937 = (i__4731__auto___6936 + (1));
i__4731__auto___6936 = G__6937;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_6938 = (function (){var G__6929 = a;
if((!(typeof a === 'string'))){
return G__6929.toString();
} else {
return G__6929;
}
})();
var temp__5739__auto___6939 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___6939 == null)){
} else {
var sm_data_6940 = temp__5739__auto___6939;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_6940,cljs.core.update,cljs.core.cst$kw$gen_DASH_col,((function (sm_data_6940,temp__5739__auto___6939,s_6938){
return (function (p1__6920_SHARP_){
return (p1__6920_SHARP_ + s_6938.length);
});})(sm_data_6940,temp__5739__auto___6939,s_6938))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_6938], 0));

}
}
}
}

return null;
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__6930 = cljs.core.seq(xs);
var chunk__6931 = null;
var count__6932 = (0);
var i__6933 = (0);
while(true){
if((i__6933 < count__6932)){
var x = chunk__6931.cljs$core$IIndexed$_nth$arity$2(null,i__6933);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__6941 = seq__6930;
var G__6942 = chunk__6931;
var G__6943 = count__6932;
var G__6944 = (i__6933 + (1));
seq__6930 = G__6941;
chunk__6931 = G__6942;
count__6932 = G__6943;
i__6933 = G__6944;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__6930);
if(temp__5735__auto__){
var seq__6930__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6930__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6930__$1);
var G__6945 = cljs.core.chunk_rest(seq__6930__$1);
var G__6946 = c__4550__auto__;
var G__6947 = cljs.core.count(c__4550__auto__);
var G__6948 = (0);
seq__6930 = G__6945;
chunk__6931 = G__6946;
count__6932 = G__6947;
i__6933 = G__6948;
continue;
} else {
var x = cljs.core.first(seq__6930__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__6949 = cljs.core.next(seq__6930__$1);
var G__6950 = null;
var G__6951 = (0);
var G__6952 = (0);
seq__6930 = G__6949;
chunk__6931 = G__6950;
count__6932 = G__6951;
i__6933 = G__6952;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq6922){
var G__6923 = cljs.core.first(seq6922);
var seq6922__$1 = cljs.core.next(seq6922);
var G__6924 = cljs.core.first(seq6922__$1);
var seq6922__$2 = cljs.core.next(seq6922__$1);
var G__6925 = cljs.core.first(seq6922__$2);
var seq6922__$3 = cljs.core.next(seq6922__$2);
var G__6926 = cljs.core.first(seq6922__$3);
var seq6922__$4 = cljs.core.next(seq6922__$3);
var G__6927 = cljs.core.first(seq6922__$4);
var seq6922__$5 = cljs.core.next(seq6922__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6923,G__6924,G__6925,G__6926,G__6927,seq6922__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__6953){
var map__6954 = p__6953;
var map__6954__$1 = (((((!((map__6954 == null))))?(((((map__6954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6954):map__6954);
var m = map__6954__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6954__$1,cljs.core.cst$kw$gen_DASH_line);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$gen_DASH_line,(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$gen_DASH_col,(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__6963 = arguments.length;
switch (G__6963) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___6969 = arguments.length;
var i__4731__auto___6970 = (0);
while(true){
if((i__4731__auto___6970 < len__4730__auto___6969)){
args_arr__4751__auto__.push((arguments[i__4731__auto___6970]));

var G__6971 = (i__4731__auto___6970 + (1));
i__4731__auto___6970 = G__6971;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__6964_6972 = cljs.core.seq(xs);
var chunk__6965_6973 = null;
var count__6966_6974 = (0);
var i__6967_6975 = (0);
while(true){
if((i__6967_6975 < count__6966_6974)){
var x_6976 = chunk__6965_6973.cljs$core$IIndexed$_nth$arity$2(null,i__6967_6975);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_6976);


var G__6977 = seq__6964_6972;
var G__6978 = chunk__6965_6973;
var G__6979 = count__6966_6974;
var G__6980 = (i__6967_6975 + (1));
seq__6964_6972 = G__6977;
chunk__6965_6973 = G__6978;
count__6966_6974 = G__6979;
i__6967_6975 = G__6980;
continue;
} else {
var temp__5735__auto___6981 = cljs.core.seq(seq__6964_6972);
if(temp__5735__auto___6981){
var seq__6964_6982__$1 = temp__5735__auto___6981;
if(cljs.core.chunked_seq_QMARK_(seq__6964_6982__$1)){
var c__4550__auto___6983 = cljs.core.chunk_first(seq__6964_6982__$1);
var G__6984 = cljs.core.chunk_rest(seq__6964_6982__$1);
var G__6985 = c__4550__auto___6983;
var G__6986 = cljs.core.count(c__4550__auto___6983);
var G__6987 = (0);
seq__6964_6972 = G__6984;
chunk__6965_6973 = G__6985;
count__6966_6974 = G__6986;
i__6967_6975 = G__6987;
continue;
} else {
var x_6988 = cljs.core.first(seq__6964_6982__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_6988);


var G__6989 = cljs.core.next(seq__6964_6982__$1);
var G__6990 = null;
var G__6991 = (0);
var G__6992 = (0);
seq__6964_6972 = G__6989;
chunk__6965_6973 = G__6990;
count__6966_6974 = G__6991;
i__6967_6975 = G__6992;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
});

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq6957){
var G__6958 = cljs.core.first(seq6957);
var seq6957__$1 = cljs.core.next(seq6957);
var G__6959 = cljs.core.first(seq6957__$1);
var seq6957__$2 = cljs.core.next(seq6957__$1);
var G__6960 = cljs.core.first(seq6957__$2);
var seq6957__$3 = cljs.core.next(seq6957__$2);
var G__6961 = cljs.core.first(seq6957__$3);
var seq6957__$4 = cljs.core.next(seq6957__$3);
var G__6962 = cljs.core.first(seq6957__$4);
var seq6957__$5 = cljs.core.next(seq6957__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6958,G__6959,G__6960,G__6961,G__6962,seq6957__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__6993_6997 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6994_6998 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6995_6999 = true;
var _STAR_print_fn_STAR__temp_val__6996_7000 = ((function (_STAR_print_newline_STAR__orig_val__6993_6997,_STAR_print_fn_STAR__orig_val__6994_6998,_STAR_print_newline_STAR__temp_val__6995_6999,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__6993_6997,_STAR_print_fn_STAR__orig_val__6994_6998,_STAR_print_newline_STAR__temp_val__6995_6999,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6995_6999;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6996_7000;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6994_6998;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6993_6997;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__7001 = cljs.core.get_global_hierarchy;
return (fexpr__7001.cljs$core$IFn$_invoke$arity$0 ? fexpr__7001.cljs$core$IFn$_invoke$arity$0() : fexpr__7001.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__7002 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7002,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7002,(1),null);
var G__7005 = ns;
var G__7006 = name;
var G__7007 = ((function (G__7005,G__7006,vec__7002,ns,name){
return (function (){
var G__7008 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__7008) : cljs.compiler.emit_constant.call(null,G__7008));
});})(G__7005,G__7006,vec__7002,ns,name))
;
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__7005,G__7006,G__7007) : cljs.compiler.emit_record_value.call(null,G__7005,G__7006,G__7007));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__7009 = cljs.core.keys(x);
var G__7010 = cljs.core.vals(x);
var G__7011 = cljs.compiler.emit_constants_comma_sep;
var G__7012 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__7009,G__7010,G__7011,G__7012) : cljs.compiler.emit_map.call(null,G__7009,G__7010,G__7011,G__7012));
} else {
if(cljs.analyzer.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return (cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x) : cljs.compiler.emit_constant_STAR_.call(null,x));

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__7013 = ((function (m){
return (function (){
return cljs.compiler.emit_constant_no_meta(v);
});})(m))
;
var G__7014 = ((function (G__7013,m){
return (function (){
return cljs.compiler.emit_constant_no_meta(m);
});})(G__7013,m))
;
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__7013,G__7014) : cljs.compiler.emit_with_meta.call(null,G__7013,G__7014));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$constant,x,cljs.core.cst$kw$type,cljs.core.type(x),cljs.core.cst$kw$clojure$error_SLASH_phase,cljs.core.cst$kw$compilation], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__7015 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7015,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7015,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7015,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5733__auto__ = (function (){var and__4120__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
var G__7018 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__7018) : x.call(null,G__7018));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5733__auto__ = (function (){var and__4120__auto__ = cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4120__auto__)){
var G__7019 = cljs.core.cst$kw$cljs$analyzer_SLASH_constant_DASH_table.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__7019) : x.call(null,G__7019));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",date.getTime(),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__7021 = items;
var G__7022 = ((function (G__7021,items){
return (function (p1__7020_SHARP_){
return ((function (G__7021,items){
return (function (){
return cljs.compiler.emit_constant(p1__7020_SHARP_);
});
;})(G__7021,items))
});})(G__7021,items))
;
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__7021,G__7022) : cljs.compiler.emit_js_object.call(null,G__7021,G__7022));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$no_DASH_op,(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__7024){
var map__7025 = p__7024;
var map__7025__$1 = (((((!((map__7025 == null))))?(((((map__7025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7025):map__7025);
var ast = map__7025__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7025__$1,cljs.core.cst$kw$info);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7025__$1,cljs.core.cst$kw$env);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7025__$1,cljs.core.cst$kw$form);
var temp__5733__auto__ = cljs.core.cst$kw$const_DASH_expr.cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,cljs.core.cst$kw$env,env));
} else {
var map__7027 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__7027__$1 = (((((!((map__7027 == null))))?(((((map__7027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7027):map__7027);
var cenv = map__7027__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7027__$1,cljs.core.cst$kw$options);
var var_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_module_DASH_index,cljs.core.name(var_name),cljs.core.cst$kw$name], null));
var or__4131__auto__ = js_module_name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(cljs.core.cst$kw$binding_DASH_form_QMARK_.cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__7029 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var G__7031 = cljs.core.cst$kw$language_DASH_out.cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__7031) : cljs.compiler.es5_GT__EQ_.call(null,G__7031));
})();
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4120__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__7029,cljs.analyzer.es5_allowed);
} else {
return G__7029;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$js_DASH_namespaces,(function (){var or__4131__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__7032 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$sym$js_SLASH__DASH_Infinity)){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__7032,reserved);
} else {
return G__7032;
}
})();
var env__6848__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__7033_7034 = cljs.core.cst$kw$module_DASH_type.cljs$core$IFn$_invoke$arity$1(js_module);
var G__7033_7035__$1 = (((G__7033_7034 instanceof cljs.core.Keyword))?G__7033_7034.fqn:null);
switch (G__7033_7035__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__4120__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$var,(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$binding,(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_var,(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$local,(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$the_DASH_var,(function (p__7037){
var map__7038 = p__7037;
var map__7038__$1 = (((((!((map__7038 == null))))?(((((map__7038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7038):map__7038);
var arg = map__7038__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7038__$1,cljs.core.cst$kw$env);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7038__$1,cljs.core.cst$kw$var);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7038__$1,cljs.core.cst$kw$sym);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7038__$1,cljs.core.cst$kw$meta);
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__7040 = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(var$);
var map__7040__$1 = (((((!((map__7040 == null))))?(((((map__7040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7040):map__7040);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7040__$1,cljs.core.cst$kw$name);
var env__6848__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$with_DASH_meta,(function (p__7042){
var map__7043 = p__7042;
var map__7043__$1 = (((((!((map__7043 == null))))?(((((map__7043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7043):map__7043);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7043__$1,cljs.core.cst$kw$expr);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7043__$1,cljs.core.cst$kw$meta);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7043__$1,cljs.core.cst$kw$env);
var env__6848__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_(((function (keys__$1){
return (function (p1__7045_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__7045_SHARP_),cljs.core.cst$kw$const);
});})(keys__$1))
,keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__7046 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__7046) : comma_sep.call(null,G__7046));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__7047 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__7047) : comma_sep.call(null,G__7047));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__7048){
var map__7049 = p__7048;
var map__7049__$1 = (((((!((map__7049 == null))))?(((((map__7049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7049):map__7049);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7049__$1,cljs.core.cst$kw$env);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7049__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7049__$1,cljs.core.cst$kw$vals);
var env__6848__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (p__7051){
var map__7052 = p__7051;
var map__7052__$1 = (((((!((map__7052 == null))))?(((((map__7052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7052):map__7052);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7052__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7052__$1,cljs.core.cst$kw$env);
var env__6848__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_(((function (items__$1){
return (function (p1__7054_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__7054_SHARP_),cljs.core.cst$kw$const);
});})(items__$1))
,items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__7055 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__7055) : comma_sep.call(null,G__7055));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (p__7056){
var map__7057 = p__7056;
var map__7057__$1 = (((((!((map__7057 == null))))?(((((map__7057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7057):map__7057);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7057__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7057__$1,cljs.core.cst$kw$env);
var env__6848__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___7081 = cljs.core.seq(items);
if(temp__5735__auto___7081){
var items_7082__$1 = temp__5735__auto___7081;
var vec__7059_7083 = items_7082__$1;
var seq__7060_7084 = cljs.core.seq(vec__7059_7083);
var first__7061_7085 = cljs.core.first(seq__7060_7084);
var seq__7060_7086__$1 = cljs.core.next(seq__7060_7084);
var vec__7062_7087 = first__7061_7085;
var k_7088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7062_7087,(0),null);
var v_7089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7062_7087,(1),null);
var r_7090 = seq__7060_7086__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_7088),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_7089) : emit_js_object_val.call(null,v_7089)));

var seq__7065_7091 = cljs.core.seq(r_7090);
var chunk__7066_7092 = null;
var count__7067_7093 = (0);
var i__7068_7094 = (0);
while(true){
if((i__7068_7094 < count__7067_7093)){
var vec__7075_7095 = chunk__7066_7092.cljs$core$IIndexed$_nth$arity$2(null,i__7068_7094);
var k_7096__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7075_7095,(0),null);
var v_7097__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7075_7095,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_7096__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_7097__$1) : emit_js_object_val.call(null,v_7097__$1)));


var G__7098 = seq__7065_7091;
var G__7099 = chunk__7066_7092;
var G__7100 = count__7067_7093;
var G__7101 = (i__7068_7094 + (1));
seq__7065_7091 = G__7098;
chunk__7066_7092 = G__7099;
count__7067_7093 = G__7100;
i__7068_7094 = G__7101;
continue;
} else {
var temp__5735__auto___7102__$1 = cljs.core.seq(seq__7065_7091);
if(temp__5735__auto___7102__$1){
var seq__7065_7103__$1 = temp__5735__auto___7102__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7065_7103__$1)){
var c__4550__auto___7104 = cljs.core.chunk_first(seq__7065_7103__$1);
var G__7105 = cljs.core.chunk_rest(seq__7065_7103__$1);
var G__7106 = c__4550__auto___7104;
var G__7107 = cljs.core.count(c__4550__auto___7104);
var G__7108 = (0);
seq__7065_7091 = G__7105;
chunk__7066_7092 = G__7106;
count__7067_7093 = G__7107;
i__7068_7094 = G__7108;
continue;
} else {
var vec__7078_7109 = cljs.core.first(seq__7065_7103__$1);
var k_7110__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7078_7109,(0),null);
var v_7111__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7078_7109,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_7110__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_7111__$1) : emit_js_object_val.call(null,v_7111__$1)));


var G__7112 = cljs.core.next(seq__7065_7103__$1);
var G__7113 = null;
var G__7114 = (0);
var G__7115 = (0);
seq__7065_7091 = G__7112;
chunk__7066_7092 = G__7113;
count__7067_7093 = G__7114;
i__7068_7094 = G__7115;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_object,(function (p__7116){
var map__7117 = p__7116;
var map__7117__$1 = (((((!((map__7117 == null))))?(((((map__7117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7117):map__7117);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7117__$1,cljs.core.cst$kw$keys);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7117__$1,cljs.core.cst$kw$vals);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7117__$1,cljs.core.cst$kw$env);
var env__6848__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js_DASH_array,(function (p__7119){
var map__7120 = p__7119;
var map__7120__$1 = (((((!((map__7120 == null))))?(((((map__7120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7120):map__7120);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7120__$1,cljs.core.cst$kw$items);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7120__$1,cljs.core.cst$kw$env);
var env__6848__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$quote,(function (p__7122){
var map__7123 = p__7122;
var map__7123__$1 = (((((!((map__7123 == null))))?(((((map__7123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7123):map__7123);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7123__$1,cljs.core.cst$kw$expr);
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$const,(function (p__7125){
var map__7126 = p__7125;
var map__7126__$1 = (((((!((map__7126 == null))))?(((((map__7126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7126):map__7126);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7126__$1,cljs.core.cst$kw$form);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7126__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__6848__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__7128 = cljs.analyzer.unwrap_quote(expr);
var map__7128__$1 = (((((!((map__7128 == null))))?(((((map__7128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7128):map__7128);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7128__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7128__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7128__$1,cljs.core.cst$kw$const_DASH_expr);
var or__4131__auto__ = (function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$const);
if(and__4120__auto__){
var and__4120__auto____$1 = form;
if(cljs.core.truth_(and__4120__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!((const_expr == null)));
if(and__4120__auto__){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return and__4120__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__7130 = cljs.analyzer.unwrap_quote(expr);
var map__7130__$1 = (((((!((map__7130 == null))))?(((((map__7130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7130):map__7130);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7130__$1,cljs.core.cst$kw$op);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7130__$1,cljs.core.cst$kw$form);
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7130__$1,cljs.core.cst$kw$const_DASH_expr);
var or__4131__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$const)) && (((form === false) || ((form == null)))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = (!((const_expr == null)));
if(and__4120__auto__){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return and__4120__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4131__auto__ = (function (){var fexpr__7133 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null);
return (fexpr__7133.cljs$core$IFn$_invoke$arity$1 ? fexpr__7133.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__7133.call(null,tag));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$if,(function (p__7134){
var map__7135 = p__7134;
var map__7135__$1 = (((((!((map__7135 == null))))?(((((map__7135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7135):map__7135);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7135__$1,cljs.core.cst$kw$test);
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7135__$1,cljs.core.cst$kw$then);
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7135__$1,cljs.core.cst$kw$else);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7135__$1,cljs.core.cst$kw$env);
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7135__$1,cljs.core.cst$kw$unchecked);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4131__auto__ = unchecked;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$case,(function (p__7137){
var map__7138 = p__7137;
var map__7138__$1 = (((((!((map__7138 == null))))?(((((map__7138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7138):map__7138);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7138__$1,cljs.core.cst$kw$test);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7138__$1,cljs.core.cst$kw$nodes);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7138__$1,cljs.core.cst$kw$default);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7138__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env),cljs.core.cst$kw$expr)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__7140_7176 = cljs.core.seq(nodes);
var chunk__7141_7177 = null;
var count__7142_7178 = (0);
var i__7143_7179 = (0);
while(true){
if((i__7143_7179 < count__7142_7178)){
var map__7160_7180 = chunk__7141_7177.cljs$core$IIndexed$_nth$arity$2(null,i__7143_7179);
var map__7160_7181__$1 = (((((!((map__7160_7180 == null))))?(((((map__7160_7180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7160_7180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7160_7180):map__7160_7180);
var ts_7182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7160_7181__$1,cljs.core.cst$kw$tests);
var map__7161_7183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7160_7181__$1,cljs.core.cst$kw$then);
var map__7161_7184__$1 = (((((!((map__7161_7183 == null))))?(((((map__7161_7183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7161_7183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7161_7183):map__7161_7183);
var then_7185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7161_7184__$1,cljs.core.cst$kw$then);
var seq__7164_7186 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$test,ts_7182));
var chunk__7165_7187 = null;
var count__7166_7188 = (0);
var i__7167_7189 = (0);
while(true){
if((i__7167_7189 < count__7166_7188)){
var test_7190 = chunk__7165_7187.cljs$core$IIndexed$_nth$arity$2(null,i__7167_7189);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_7190,":");


var G__7191 = seq__7164_7186;
var G__7192 = chunk__7165_7187;
var G__7193 = count__7166_7188;
var G__7194 = (i__7167_7189 + (1));
seq__7164_7186 = G__7191;
chunk__7165_7187 = G__7192;
count__7166_7188 = G__7193;
i__7167_7189 = G__7194;
continue;
} else {
var temp__5735__auto___7195 = cljs.core.seq(seq__7164_7186);
if(temp__5735__auto___7195){
var seq__7164_7196__$1 = temp__5735__auto___7195;
if(cljs.core.chunked_seq_QMARK_(seq__7164_7196__$1)){
var c__4550__auto___7197 = cljs.core.chunk_first(seq__7164_7196__$1);
var G__7198 = cljs.core.chunk_rest(seq__7164_7196__$1);
var G__7199 = c__4550__auto___7197;
var G__7200 = cljs.core.count(c__4550__auto___7197);
var G__7201 = (0);
seq__7164_7186 = G__7198;
chunk__7165_7187 = G__7199;
count__7166_7188 = G__7200;
i__7167_7189 = G__7201;
continue;
} else {
var test_7202 = cljs.core.first(seq__7164_7196__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_7202,":");


var G__7203 = cljs.core.next(seq__7164_7196__$1);
var G__7204 = null;
var G__7205 = (0);
var G__7206 = (0);
seq__7164_7186 = G__7203;
chunk__7165_7187 = G__7204;
count__7166_7188 = G__7205;
i__7167_7189 = G__7206;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_7185);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_7185);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__7207 = seq__7140_7176;
var G__7208 = chunk__7141_7177;
var G__7209 = count__7142_7178;
var G__7210 = (i__7143_7179 + (1));
seq__7140_7176 = G__7207;
chunk__7141_7177 = G__7208;
count__7142_7178 = G__7209;
i__7143_7179 = G__7210;
continue;
} else {
var temp__5735__auto___7211 = cljs.core.seq(seq__7140_7176);
if(temp__5735__auto___7211){
var seq__7140_7212__$1 = temp__5735__auto___7211;
if(cljs.core.chunked_seq_QMARK_(seq__7140_7212__$1)){
var c__4550__auto___7213 = cljs.core.chunk_first(seq__7140_7212__$1);
var G__7214 = cljs.core.chunk_rest(seq__7140_7212__$1);
var G__7215 = c__4550__auto___7213;
var G__7216 = cljs.core.count(c__4550__auto___7213);
var G__7217 = (0);
seq__7140_7176 = G__7214;
chunk__7141_7177 = G__7215;
count__7142_7178 = G__7216;
i__7143_7179 = G__7217;
continue;
} else {
var map__7168_7218 = cljs.core.first(seq__7140_7212__$1);
var map__7168_7219__$1 = (((((!((map__7168_7218 == null))))?(((((map__7168_7218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7168_7218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7168_7218):map__7168_7218);
var ts_7220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7168_7219__$1,cljs.core.cst$kw$tests);
var map__7169_7221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7168_7219__$1,cljs.core.cst$kw$then);
var map__7169_7222__$1 = (((((!((map__7169_7221 == null))))?(((((map__7169_7221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7169_7221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7169_7221):map__7169_7221);
var then_7223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7169_7222__$1,cljs.core.cst$kw$then);
var seq__7172_7224 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$test,ts_7220));
var chunk__7173_7225 = null;
var count__7174_7226 = (0);
var i__7175_7227 = (0);
while(true){
if((i__7175_7227 < count__7174_7226)){
var test_7228 = chunk__7173_7225.cljs$core$IIndexed$_nth$arity$2(null,i__7175_7227);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_7228,":");


var G__7229 = seq__7172_7224;
var G__7230 = chunk__7173_7225;
var G__7231 = count__7174_7226;
var G__7232 = (i__7175_7227 + (1));
seq__7172_7224 = G__7229;
chunk__7173_7225 = G__7230;
count__7174_7226 = G__7231;
i__7175_7227 = G__7232;
continue;
} else {
var temp__5735__auto___7233__$1 = cljs.core.seq(seq__7172_7224);
if(temp__5735__auto___7233__$1){
var seq__7172_7234__$1 = temp__5735__auto___7233__$1;
if(cljs.core.chunked_seq_QMARK_(seq__7172_7234__$1)){
var c__4550__auto___7235 = cljs.core.chunk_first(seq__7172_7234__$1);
var G__7236 = cljs.core.chunk_rest(seq__7172_7234__$1);
var G__7237 = c__4550__auto___7235;
var G__7238 = cljs.core.count(c__4550__auto___7235);
var G__7239 = (0);
seq__7172_7224 = G__7236;
chunk__7173_7225 = G__7237;
count__7174_7226 = G__7238;
i__7175_7227 = G__7239;
continue;
} else {
var test_7240 = cljs.core.first(seq__7172_7234__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_7240,":");


var G__7241 = cljs.core.next(seq__7172_7234__$1);
var G__7242 = null;
var G__7243 = (0);
var G__7244 = (0);
seq__7172_7224 = G__7241;
chunk__7173_7225 = G__7242;
count__7174_7226 = G__7243;
i__7175_7227 = G__7244;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_7223);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_7223);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__7245 = cljs.core.next(seq__7140_7212__$1);
var G__7246 = null;
var G__7247 = (0);
var G__7248 = (0);
seq__7140_7176 = G__7245;
chunk__7141_7177 = G__7246;
count__7142_7178 = G__7247;
i__7143_7179 = G__7248;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$throw,(function (p__7249){
var map__7250 = p__7249;
var map__7250__$1 = (((((!((map__7250 == null))))?(((((map__7250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7250):map__7250);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7250__$1,cljs.core.cst$kw$exception);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7250__$1,cljs.core.cst$kw$env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__7255 = env;
var G__7256 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__7255,G__7256) : cljs.compiler.resolve_type.call(null,G__7255,G__7256));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__7257 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7257,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7257,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__7257,fstr,rstr,ret_t,axstr){
return (function (p1__7252_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__7252_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__7252_SHARP_));
});})(idx,vec__7257,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__7260 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__7260,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__7260;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__7263 = env;
var G__7264 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__7263,G__7264) : cljs.compiler.resolve_type.call(null,G__7263,G__7264));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__7265_SHARP_){
return cljs.compiler.resolve_type(env,p1__7265_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__7266 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__7267 = cljs.core.seq(vec__7266);
var first__7268 = cljs.core.first(seq__7267);
var seq__7267__$1 = cljs.core.next(seq__7267);
var p = first__7268;
var first__7268__$1 = cljs.core.first(seq__7267__$1);
var seq__7267__$2 = cljs.core.next(seq__7267__$1);
var ts = first__7268__$1;
var first__7268__$2 = cljs.core.first(seq__7267__$2);
var seq__7267__$3 = cljs.core.next(seq__7267__$2);
var n = first__7268__$2;
var xs = seq__7267__$3;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__4120__auto__){
var and__4120__auto____$1 = ts;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__7269 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__7270 = cljs.core.seq(vec__7269);
var first__7271 = cljs.core.first(seq__7270);
var seq__7270__$1 = cljs.core.next(seq__7270);
var p = first__7271;
var first__7271__$1 = cljs.core.first(seq__7270__$1);
var seq__7270__$2 = cljs.core.next(seq__7270__$1);
var ts = first__7271__$1;
var xs = seq__7270__$2;
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__4120__auto__){
var and__4120__auto____$1 = ts;
if(cljs.core.truth_(and__4120__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__7273 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$closure_DASH_warnings,cljs.core.cst$kw$check_DASH_types], null));
var fexpr__7272 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$warning,null,cljs.core.cst$kw$error,null], null), null);
return (fexpr__7272.cljs$core$IFn$_invoke$arity$1 ? fexpr__7272.cljs$core$IFn$_invoke$arity$1(G__7273) : fexpr__7272.call(null,G__7273));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__7276 = arguments.length;
switch (G__7276) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__7284 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__7274_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__7274_SHARP_);
} else {
return p1__7274_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var seq__7285 = cljs.core.seq(vec__7284);
var first__7286 = cljs.core.first(seq__7285);
var seq__7285__$1 = cljs.core.next(seq__7285);
var x = first__7286;
var ys = seq__7285__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__7287 = cljs.core.seq(ys);
var chunk__7288 = null;
var count__7289 = (0);
var i__7290 = (0);
while(true){
if((i__7290 < count__7289)){
var next_line = chunk__7288.cljs$core$IIndexed$_nth$arity$2(null,i__7290);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__7296 = seq__7287;
var G__7297 = chunk__7288;
var G__7298 = count__7289;
var G__7299 = (i__7290 + (1));
seq__7287 = G__7296;
chunk__7288 = G__7297;
count__7289 = G__7298;
i__7290 = G__7299;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__7287);
if(temp__5735__auto__){
var seq__7287__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7287__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__7287__$1);
var G__7300 = cljs.core.chunk_rest(seq__7287__$1);
var G__7301 = c__4550__auto__;
var G__7302 = cljs.core.count(c__4550__auto__);
var G__7303 = (0);
seq__7287 = G__7300;
chunk__7288 = G__7301;
count__7289 = G__7302;
i__7290 = G__7303;
continue;
} else {
var next_line = cljs.core.first(seq__7287__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__7304 = cljs.core.next(seq__7287__$1);
var G__7305 = null;
var G__7306 = (0);
var G__7307 = (0);
seq__7287 = G__7304;
chunk__7288 = G__7305;
count__7289 = G__7306;
i__7290 = G__7307;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__7291_7308 = cljs.core.seq(docs__$2);
var chunk__7292_7309 = null;
var count__7293_7310 = (0);
var i__7294_7311 = (0);
while(true){
if((i__7294_7311 < count__7293_7310)){
var e_7312 = chunk__7292_7309.cljs$core$IIndexed$_nth$arity$2(null,i__7294_7311);
if(cljs.core.truth_(e_7312)){
print_comment_lines(e_7312);
} else {
}


var G__7313 = seq__7291_7308;
var G__7314 = chunk__7292_7309;
var G__7315 = count__7293_7310;
var G__7316 = (i__7294_7311 + (1));
seq__7291_7308 = G__7313;
chunk__7292_7309 = G__7314;
count__7293_7310 = G__7315;
i__7294_7311 = G__7316;
continue;
} else {
var temp__5735__auto___7317 = cljs.core.seq(seq__7291_7308);
if(temp__5735__auto___7317){
var seq__7291_7318__$1 = temp__5735__auto___7317;
if(cljs.core.chunked_seq_QMARK_(seq__7291_7318__$1)){
var c__4550__auto___7319 = cljs.core.chunk_first(seq__7291_7318__$1);
var G__7320 = cljs.core.chunk_rest(seq__7291_7318__$1);
var G__7321 = c__4550__auto___7319;
var G__7322 = cljs.core.count(c__4550__auto___7319);
var G__7323 = (0);
seq__7291_7308 = G__7320;
chunk__7292_7309 = G__7321;
count__7293_7310 = G__7322;
i__7294_7311 = G__7323;
continue;
} else {
var e_7324 = cljs.core.first(seq__7291_7318__$1);
if(cljs.core.truth_(e_7324)){
print_comment_lines(e_7324);
} else {
}


var G__7325 = cljs.core.next(seq__7291_7318__$1);
var G__7326 = null;
var G__7327 = (0);
var G__7328 = (0);
seq__7291_7308 = G__7325;
chunk__7292_7309 = G__7326;
count__7293_7310 = G__7327;
i__7294_7311 = G__7328;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),cljs.core.cst$kw$options);
var and__4120__auto__ = cljs.core.some(((function (opts){
return (function (p1__7330_SHARP_){
return goog.string.startsWith(p1__7330_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = opts;
if(cljs.core.truth_(and__4120__auto____$1)){
var and__4120__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$optimizations.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$none);
if(and__4120__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$closure_DASH_defines,cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$def,(function (p__7331){
var map__7332 = p__7331;
var map__7332__$1 = (((((!((map__7332 == null))))?(((((map__7332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7332):map__7332);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7332__$1,cljs.core.cst$kw$doc);
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7332__$1,cljs.core.cst$kw$jsdoc);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7332__$1,cljs.core.cst$kw$test);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7332__$1,cljs.core.cst$kw$init);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7332__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7332__$1,cljs.core.cst$kw$env);
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7332__$1,cljs.core.cst$kw$export);
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7332__$1,cljs.core.cst$kw$var);
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7332__$1,cljs.core.cst$kw$var_DASH_ast);
if(cljs.core.truth_((function (){var or__4131__auto__ = init;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,cljs.core.cst$kw$jsdoc.cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5733__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5733__auto__)){
var define = temp__5733__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$op,cljs.core.cst$kw$the_DASH_var,cljs.core.cst$kw$env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$context,cljs.core.cst$kw$expr)], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__4120__auto__){
return test;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__7334){
var map__7335 = p__7334;
var map__7335__$1 = (((((!((map__7335 == null))))?(((((map__7335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7335):map__7335);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7335__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7335__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7335__$1,cljs.core.cst$kw$env);
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__7337_7361 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__7338_7362 = null;
var count__7339_7363 = (0);
var i__7340_7364 = (0);
while(true){
if((i__7340_7364 < count__7339_7363)){
var vec__7347_7365 = chunk__7338_7362.cljs$core$IIndexed$_nth$arity$2(null,i__7340_7364);
var i_7366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7347_7365,(0),null);
var param_7367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7347_7365,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_7367);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__7368 = seq__7337_7361;
var G__7369 = chunk__7338_7362;
var G__7370 = count__7339_7363;
var G__7371 = (i__7340_7364 + (1));
seq__7337_7361 = G__7368;
chunk__7338_7362 = G__7369;
count__7339_7363 = G__7370;
i__7340_7364 = G__7371;
continue;
} else {
var temp__5735__auto___7372 = cljs.core.seq(seq__7337_7361);
if(temp__5735__auto___7372){
var seq__7337_7373__$1 = temp__5735__auto___7372;
if(cljs.core.chunked_seq_QMARK_(seq__7337_7373__$1)){
var c__4550__auto___7374 = cljs.core.chunk_first(seq__7337_7373__$1);
var G__7375 = cljs.core.chunk_rest(seq__7337_7373__$1);
var G__7376 = c__4550__auto___7374;
var G__7377 = cljs.core.count(c__4550__auto___7374);
var G__7378 = (0);
seq__7337_7361 = G__7375;
chunk__7338_7362 = G__7376;
count__7339_7363 = G__7377;
i__7340_7364 = G__7378;
continue;
} else {
var vec__7350_7379 = cljs.core.first(seq__7337_7373__$1);
var i_7380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7350_7379,(0),null);
var param_7381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7350_7379,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_7381);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__7382 = cljs.core.next(seq__7337_7373__$1);
var G__7383 = null;
var G__7384 = (0);
var G__7385 = (0);
seq__7337_7361 = G__7382;
chunk__7338_7362 = G__7383;
count__7339_7363 = G__7384;
i__7340_7364 = G__7385;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__7353_7386 = cljs.core.seq(params);
var chunk__7354_7387 = null;
var count__7355_7388 = (0);
var i__7356_7389 = (0);
while(true){
if((i__7356_7389 < count__7355_7388)){
var param_7390 = chunk__7354_7387.cljs$core$IIndexed$_nth$arity$2(null,i__7356_7389);
cljs.compiler.emit(param_7390);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_7390,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__7391 = seq__7353_7386;
var G__7392 = chunk__7354_7387;
var G__7393 = count__7355_7388;
var G__7394 = (i__7356_7389 + (1));
seq__7353_7386 = G__7391;
chunk__7354_7387 = G__7392;
count__7355_7388 = G__7393;
i__7356_7389 = G__7394;
continue;
} else {
var temp__5735__auto___7395 = cljs.core.seq(seq__7353_7386);
if(temp__5735__auto___7395){
var seq__7353_7396__$1 = temp__5735__auto___7395;
if(cljs.core.chunked_seq_QMARK_(seq__7353_7396__$1)){
var c__4550__auto___7397 = cljs.core.chunk_first(seq__7353_7396__$1);
var G__7398 = cljs.core.chunk_rest(seq__7353_7396__$1);
var G__7399 = c__4550__auto___7397;
var G__7400 = cljs.core.count(c__4550__auto___7397);
var G__7401 = (0);
seq__7353_7386 = G__7398;
chunk__7354_7387 = G__7399;
count__7355_7388 = G__7400;
i__7356_7389 = G__7401;
continue;
} else {
var param_7402 = cljs.core.first(seq__7353_7396__$1);
cljs.compiler.emit(param_7402);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_7402,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__7403 = cljs.core.next(seq__7353_7396__$1);
var G__7404 = null;
var G__7405 = (0);
var G__7406 = (0);
seq__7353_7386 = G__7403;
chunk__7354_7387 = G__7404;
count__7355_7388 = G__7405;
i__7356_7389 = G__7406;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__7357_7407 = cljs.core.seq(params);
var chunk__7358_7408 = null;
var count__7359_7409 = (0);
var i__7360_7410 = (0);
while(true){
if((i__7360_7410 < count__7359_7409)){
var param_7411 = chunk__7358_7408.cljs$core$IIndexed$_nth$arity$2(null,i__7360_7410);
cljs.compiler.emit(param_7411);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_7411,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__7412 = seq__7357_7407;
var G__7413 = chunk__7358_7408;
var G__7414 = count__7359_7409;
var G__7415 = (i__7360_7410 + (1));
seq__7357_7407 = G__7412;
chunk__7358_7408 = G__7413;
count__7359_7409 = G__7414;
i__7360_7410 = G__7415;
continue;
} else {
var temp__5735__auto___7416 = cljs.core.seq(seq__7357_7407);
if(temp__5735__auto___7416){
var seq__7357_7417__$1 = temp__5735__auto___7416;
if(cljs.core.chunked_seq_QMARK_(seq__7357_7417__$1)){
var c__4550__auto___7418 = cljs.core.chunk_first(seq__7357_7417__$1);
var G__7419 = cljs.core.chunk_rest(seq__7357_7417__$1);
var G__7420 = c__4550__auto___7418;
var G__7421 = cljs.core.count(c__4550__auto___7418);
var G__7422 = (0);
seq__7357_7407 = G__7419;
chunk__7358_7408 = G__7420;
count__7359_7409 = G__7421;
i__7360_7410 = G__7422;
continue;
} else {
var param_7423 = cljs.core.first(seq__7357_7417__$1);
cljs.compiler.emit(param_7423);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_7423,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__7424 = cljs.core.next(seq__7357_7417__$1);
var G__7425 = null;
var G__7426 = (0);
var G__7427 = (0);
seq__7357_7407 = G__7424;
chunk__7358_7408 = G__7425;
count__7359_7409 = G__7426;
i__7360_7410 = G__7427;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__7428 = cljs.core.seq(params);
var chunk__7429 = null;
var count__7430 = (0);
var i__7431 = (0);
while(true){
if((i__7431 < count__7430)){
var param = chunk__7429.cljs$core$IIndexed$_nth$arity$2(null,i__7431);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__7432 = seq__7428;
var G__7433 = chunk__7429;
var G__7434 = count__7430;
var G__7435 = (i__7431 + (1));
seq__7428 = G__7432;
chunk__7429 = G__7433;
count__7430 = G__7434;
i__7431 = G__7435;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__7428);
if(temp__5735__auto__){
var seq__7428__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7428__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__7428__$1);
var G__7436 = cljs.core.chunk_rest(seq__7428__$1);
var G__7437 = c__4550__auto__;
var G__7438 = cljs.core.count(c__4550__auto__);
var G__7439 = (0);
seq__7428 = G__7436;
chunk__7429 = G__7437;
count__7430 = G__7438;
i__7431 = G__7439;
continue;
} else {
var param = cljs.core.first(seq__7428__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__7440 = cljs.core.next(seq__7428__$1);
var G__7441 = null;
var G__7442 = (0);
var G__7443 = (0);
seq__7428 = G__7440;
chunk__7429 = G__7441;
count__7430 = G__7442;
i__7431 = G__7443;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__7444){
var map__7445 = p__7444;
var map__7445__$1 = (((((!((map__7445 == null))))?(((((map__7445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7445):map__7445);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7445__$1,cljs.core.cst$kw$body);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7445__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7445__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7445__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7445__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7445__$1,cljs.core.cst$kw$recurs);
var env__6848__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__7447){
var map__7448 = p__7447;
var map__7448__$1 = (((((!((map__7448 == null))))?(((((map__7448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7448):map__7448);
var f = map__7448__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7448__$1,cljs.core.cst$kw$body);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7448__$1,cljs.core.cst$kw$fixed_DASH_arity);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7448__$1,cljs.core.cst$kw$variadic_QMARK_);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7448__$1,cljs.core.cst$kw$type);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7448__$1,cljs.core.cst$kw$name);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7448__$1,cljs.core.cst$kw$params);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7448__$1,cljs.core.cst$kw$env);
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7448__$1,cljs.core.cst$kw$recurs);
var env__6848__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_7458__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_7459 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_7458__$1);
var delegate_name_7460 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_7459),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_7460," = function (");

var seq__7450_7461 = cljs.core.seq(params);
var chunk__7451_7462 = null;
var count__7452_7463 = (0);
var i__7453_7464 = (0);
while(true){
if((i__7453_7464 < count__7452_7463)){
var param_7465 = chunk__7451_7462.cljs$core$IIndexed$_nth$arity$2(null,i__7453_7464);
cljs.compiler.emit(param_7465);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_7465,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__7466 = seq__7450_7461;
var G__7467 = chunk__7451_7462;
var G__7468 = count__7452_7463;
var G__7469 = (i__7453_7464 + (1));
seq__7450_7461 = G__7466;
chunk__7451_7462 = G__7467;
count__7452_7463 = G__7468;
i__7453_7464 = G__7469;
continue;
} else {
var temp__5735__auto___7470 = cljs.core.seq(seq__7450_7461);
if(temp__5735__auto___7470){
var seq__7450_7471__$1 = temp__5735__auto___7470;
if(cljs.core.chunked_seq_QMARK_(seq__7450_7471__$1)){
var c__4550__auto___7472 = cljs.core.chunk_first(seq__7450_7471__$1);
var G__7473 = cljs.core.chunk_rest(seq__7450_7471__$1);
var G__7474 = c__4550__auto___7472;
var G__7475 = cljs.core.count(c__4550__auto___7472);
var G__7476 = (0);
seq__7450_7461 = G__7473;
chunk__7451_7462 = G__7474;
count__7452_7463 = G__7475;
i__7453_7464 = G__7476;
continue;
} else {
var param_7477 = cljs.core.first(seq__7450_7471__$1);
cljs.compiler.emit(param_7477);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_7477,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__7478 = cljs.core.next(seq__7450_7471__$1);
var G__7479 = null;
var G__7480 = (0);
var G__7481 = (0);
seq__7450_7461 = G__7478;
chunk__7451_7462 = G__7479;
count__7452_7463 = G__7480;
i__7453_7464 = G__7481;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_7459," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_7482 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_7482,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_7460,".call(this,");

var seq__7454_7483 = cljs.core.seq(params);
var chunk__7455_7484 = null;
var count__7456_7485 = (0);
var i__7457_7486 = (0);
while(true){
if((i__7457_7486 < count__7456_7485)){
var param_7487 = chunk__7455_7484.cljs$core$IIndexed$_nth$arity$2(null,i__7457_7486);
cljs.compiler.emit(param_7487);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_7487,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__7488 = seq__7454_7483;
var G__7489 = chunk__7455_7484;
var G__7490 = count__7456_7485;
var G__7491 = (i__7457_7486 + (1));
seq__7454_7483 = G__7488;
chunk__7455_7484 = G__7489;
count__7456_7485 = G__7490;
i__7457_7486 = G__7491;
continue;
} else {
var temp__5735__auto___7492 = cljs.core.seq(seq__7454_7483);
if(temp__5735__auto___7492){
var seq__7454_7493__$1 = temp__5735__auto___7492;
if(cljs.core.chunked_seq_QMARK_(seq__7454_7493__$1)){
var c__4550__auto___7494 = cljs.core.chunk_first(seq__7454_7493__$1);
var G__7495 = cljs.core.chunk_rest(seq__7454_7493__$1);
var G__7496 = c__4550__auto___7494;
var G__7497 = cljs.core.count(c__4550__auto___7494);
var G__7498 = (0);
seq__7454_7483 = G__7495;
chunk__7455_7484 = G__7496;
count__7456_7485 = G__7497;
i__7457_7486 = G__7498;
continue;
} else {
var param_7499 = cljs.core.first(seq__7454_7493__$1);
cljs.compiler.emit(param_7499);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_7499,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__7500 = cljs.core.next(seq__7454_7493__$1);
var G__7501 = null;
var G__7502 = (0);
var G__7503 = (0);
seq__7454_7483 = G__7500;
chunk__7455_7484 = G__7501;
count__7456_7485 = G__7502;
i__7457_7486 = G__7503;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_7459,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_7459,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$name,name_7458__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_7459,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_7460,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_7459,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fn,(function (p__7507){
var map__7508 = p__7507;
var map__7508__$1 = (((((!((map__7508 == null))))?(((((map__7508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7508):map__7508);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7508__$1,cljs.core.cst$kw$variadic_QMARK_);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7508__$1,cljs.core.cst$kw$name);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7508__$1,cljs.core.cst$kw$env);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7508__$1,cljs.core.cst$kw$methods);
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7508__$1,cljs.core.cst$kw$max_DASH_fixed_DASH_arity);
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7508__$1,cljs.core.cst$kw$recur_DASH_frames);
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7508__$1,cljs.core.cst$kw$loop_DASH_lets);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__7508,map__7508__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__7504_SHARP_){
var and__4120__auto__ = p1__7504_SHARP_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref(cljs.core.cst$kw$flag.cljs$core$IFn$_invoke$arity$1(p1__7504_SHARP_));
} else {
return and__4120__auto__;
}
});})(map__7508,map__7508__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),cljs.core.cst$kw$name,name));
}
} else {
var name_7561__$1 = (function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_7562 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_7561__$1);
var maxparams_7563 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,methods$));
var mmap_7564 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_7561__$1,mname_7562,maxparams_7563,loop_locals,map__7508,map__7508__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_7562),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_7561__$1,mname_7562,maxparams_7563,loop_locals,map__7508,map__7508__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_7565 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_7561__$1,mname_7562,maxparams_7563,mmap_7564,loop_locals,map__7508,map__7508__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__7505_SHARP_){
return cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__7505_SHARP_)));
});})(name_7561__$1,mname_7562,maxparams_7563,mmap_7564,loop_locals,map__7508,map__7508__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq(mmap_7564));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_7562," = null;");

var seq__7510_7566 = cljs.core.seq(ms_7565);
var chunk__7511_7567 = null;
var count__7512_7568 = (0);
var i__7513_7569 = (0);
while(true){
if((i__7513_7569 < count__7512_7568)){
var vec__7520_7570 = chunk__7511_7567.cljs$core$IIndexed$_nth$arity$2(null,i__7513_7569);
var n_7571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7520_7570,(0),null);
var meth_7572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7520_7570,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_7571," = ");

if(cljs.core.truth_(cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(meth_7572))){
cljs.compiler.emit_variadic_fn_method(meth_7572);
} else {
cljs.compiler.emit_fn_method(meth_7572);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__7573 = seq__7510_7566;
var G__7574 = chunk__7511_7567;
var G__7575 = count__7512_7568;
var G__7576 = (i__7513_7569 + (1));
seq__7510_7566 = G__7573;
chunk__7511_7567 = G__7574;
count__7512_7568 = G__7575;
i__7513_7569 = G__7576;
continue;
} else {
var temp__5735__auto___7577 = cljs.core.seq(seq__7510_7566);
if(temp__5735__auto___7577){
var seq__7510_7578__$1 = temp__5735__auto___7577;
if(cljs.core.chunked_seq_QMARK_(seq__7510_7578__$1)){
var c__4550__auto___7579 = cljs.core.chunk_first(seq__7510_7578__$1);
var G__7580 = cljs.core.chunk_rest(seq__7510_7578__$1);
var G__7581 = c__4550__auto___7579;
var G__7582 = cljs.core.count(c__4550__auto___7579);
var G__7583 = (0);
seq__7510_7566 = G__7580;
chunk__7511_7567 = G__7581;
count__7512_7568 = G__7582;
i__7513_7569 = G__7583;
continue;
} else {
var vec__7523_7584 = cljs.core.first(seq__7510_7578__$1);
var n_7585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7523_7584,(0),null);
var meth_7586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7523_7584,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_7585," = ");

if(cljs.core.truth_(cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(meth_7586))){
cljs.compiler.emit_variadic_fn_method(meth_7586);
} else {
cljs.compiler.emit_fn_method(meth_7586);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__7587 = cljs.core.next(seq__7510_7578__$1);
var G__7588 = null;
var G__7589 = (0);
var G__7590 = (0);
seq__7510_7566 = G__7587;
chunk__7511_7567 = G__7588;
count__7512_7568 = G__7589;
i__7513_7569 = G__7590;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_7562," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_7563),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$var_args], null)):maxparams_7563)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_7563));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__7526_7591 = cljs.core.seq(ms_7565);
var chunk__7527_7592 = null;
var count__7528_7593 = (0);
var i__7529_7594 = (0);
while(true){
if((i__7529_7594 < count__7528_7593)){
var vec__7536_7595 = chunk__7527_7592.cljs$core$IIndexed$_nth$arity$2(null,i__7529_7594);
var n_7596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7536_7595,(0),null);
var meth_7597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7536_7595,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(meth_7597))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_7598 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_7598," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_7599 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_7598," = new cljs.core.IndexedSeq(",a_7599,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_7596,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_7563)),(((cljs.core.count(maxparams_7563) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_7598,");"], 0));
} else {
var pcnt_7600 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_7597));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_7600,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_7596,".call(this",(((pcnt_7600 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_7600,maxparams_7563)),null,(1),null)),(2),null))),");");
}


var G__7601 = seq__7526_7591;
var G__7602 = chunk__7527_7592;
var G__7603 = count__7528_7593;
var G__7604 = (i__7529_7594 + (1));
seq__7526_7591 = G__7601;
chunk__7527_7592 = G__7602;
count__7528_7593 = G__7603;
i__7529_7594 = G__7604;
continue;
} else {
var temp__5735__auto___7605 = cljs.core.seq(seq__7526_7591);
if(temp__5735__auto___7605){
var seq__7526_7606__$1 = temp__5735__auto___7605;
if(cljs.core.chunked_seq_QMARK_(seq__7526_7606__$1)){
var c__4550__auto___7607 = cljs.core.chunk_first(seq__7526_7606__$1);
var G__7608 = cljs.core.chunk_rest(seq__7526_7606__$1);
var G__7609 = c__4550__auto___7607;
var G__7610 = cljs.core.count(c__4550__auto___7607);
var G__7611 = (0);
seq__7526_7591 = G__7608;
chunk__7527_7592 = G__7609;
count__7528_7593 = G__7610;
i__7529_7594 = G__7611;
continue;
} else {
var vec__7539_7612 = cljs.core.first(seq__7526_7606__$1);
var n_7613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7539_7612,(0),null);
var meth_7614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7539_7612,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(meth_7614))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_7615 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_7615," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_7616 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_7615," = new cljs.core.IndexedSeq(",a_7616,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_7613,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_7563)),(((cljs.core.count(maxparams_7563) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_7615,");"], 0));
} else {
var pcnt_7617 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_7614));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_7617,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_7613,".call(this",(((pcnt_7617 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_7617,maxparams_7563)),null,(1),null)),(2),null))),");");
}


var G__7618 = cljs.core.next(seq__7526_7606__$1);
var G__7619 = null;
var G__7620 = (0);
var G__7621 = (0);
seq__7526_7591 = G__7618;
chunk__7527_7592 = G__7619;
count__7528_7593 = G__7620;
i__7529_7594 = G__7621;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_7622 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$self__,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_7565)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_7622,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_7562,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_7562,".cljs$lang$applyTo = ",cljs.core.some(((function (name_7561__$1,mname_7562,maxparams_7563,mmap_7564,ms_7565,loop_locals,map__7508,map__7508__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__7506_SHARP_){
var vec__7542 = p1__7506_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7542,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7542,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_7561__$1,mname_7562,maxparams_7563,mmap_7564,ms_7565,loop_locals,map__7508,map__7508__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_7565),".cljs$lang$applyTo;");
} else {
}

var seq__7545_7623 = cljs.core.seq(ms_7565);
var chunk__7546_7624 = null;
var count__7547_7625 = (0);
var i__7548_7626 = (0);
while(true){
if((i__7548_7626 < count__7547_7625)){
var vec__7555_7627 = chunk__7546_7624.cljs$core$IIndexed$_nth$arity$2(null,i__7548_7626);
var n_7628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7555_7627,(0),null);
var meth_7629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7555_7627,(1),null);
var c_7630 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_7629));
if(cljs.core.truth_(cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(meth_7629))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_7562,".cljs$core$IFn$_invoke$arity$variadic = ",n_7628,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_7562,".cljs$core$IFn$_invoke$arity$",c_7630," = ",n_7628,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__7631 = seq__7545_7623;
var G__7632 = chunk__7546_7624;
var G__7633 = count__7547_7625;
var G__7634 = (i__7548_7626 + (1));
seq__7545_7623 = G__7631;
chunk__7546_7624 = G__7632;
count__7547_7625 = G__7633;
i__7548_7626 = G__7634;
continue;
} else {
var temp__5735__auto___7635 = cljs.core.seq(seq__7545_7623);
if(temp__5735__auto___7635){
var seq__7545_7636__$1 = temp__5735__auto___7635;
if(cljs.core.chunked_seq_QMARK_(seq__7545_7636__$1)){
var c__4550__auto___7637 = cljs.core.chunk_first(seq__7545_7636__$1);
var G__7638 = cljs.core.chunk_rest(seq__7545_7636__$1);
var G__7639 = c__4550__auto___7637;
var G__7640 = cljs.core.count(c__4550__auto___7637);
var G__7641 = (0);
seq__7545_7623 = G__7638;
chunk__7546_7624 = G__7639;
count__7547_7625 = G__7640;
i__7548_7626 = G__7641;
continue;
} else {
var vec__7558_7642 = cljs.core.first(seq__7545_7636__$1);
var n_7643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7558_7642,(0),null);
var meth_7644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7558_7642,(1),null);
var c_7645 = cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(meth_7644));
if(cljs.core.truth_(cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(meth_7644))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_7562,".cljs$core$IFn$_invoke$arity$variadic = ",n_7643,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_7562,".cljs$core$IFn$_invoke$arity$",c_7645," = ",n_7643,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__7646 = cljs.core.next(seq__7545_7636__$1);
var G__7647 = null;
var G__7648 = (0);
var G__7649 = (0);
seq__7545_7623 = G__7646;
chunk__7546_7624 = G__7647;
count__7547_7625 = G__7648;
i__7548_7626 = G__7649;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_7562,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$do,(function (p__7650){
var map__7651 = p__7650;
var map__7651__$1 = (((((!((map__7651 == null))))?(((((map__7651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7651):map__7651);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7651__$1,cljs.core.cst$kw$statements);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7651__$1,cljs.core.cst$kw$ret);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7651__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__7653_7657 = cljs.core.seq(statements);
var chunk__7654_7658 = null;
var count__7655_7659 = (0);
var i__7656_7660 = (0);
while(true){
if((i__7656_7660 < count__7655_7659)){
var s_7661 = chunk__7654_7658.cljs$core$IIndexed$_nth$arity$2(null,i__7656_7660);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_7661);


var G__7662 = seq__7653_7657;
var G__7663 = chunk__7654_7658;
var G__7664 = count__7655_7659;
var G__7665 = (i__7656_7660 + (1));
seq__7653_7657 = G__7662;
chunk__7654_7658 = G__7663;
count__7655_7659 = G__7664;
i__7656_7660 = G__7665;
continue;
} else {
var temp__5735__auto___7666 = cljs.core.seq(seq__7653_7657);
if(temp__5735__auto___7666){
var seq__7653_7667__$1 = temp__5735__auto___7666;
if(cljs.core.chunked_seq_QMARK_(seq__7653_7667__$1)){
var c__4550__auto___7668 = cljs.core.chunk_first(seq__7653_7667__$1);
var G__7669 = cljs.core.chunk_rest(seq__7653_7667__$1);
var G__7670 = c__4550__auto___7668;
var G__7671 = cljs.core.count(c__4550__auto___7668);
var G__7672 = (0);
seq__7653_7657 = G__7669;
chunk__7654_7658 = G__7670;
count__7655_7659 = G__7671;
i__7656_7660 = G__7672;
continue;
} else {
var s_7673 = cljs.core.first(seq__7653_7667__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_7673);


var G__7674 = cljs.core.next(seq__7653_7667__$1);
var G__7675 = null;
var G__7676 = (0);
var G__7677 = (0);
seq__7653_7657 = G__7674;
chunk__7654_7658 = G__7675;
count__7655_7659 = G__7676;
i__7656_7660 = G__7677;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$try,(function (p__7678){
var map__7679 = p__7678;
var map__7679__$1 = (((((!((map__7679 == null))))?(((((map__7679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7679):map__7679);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7679__$1,cljs.core.cst$kw$body);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7679__$1,cljs.core.cst$kw$env);
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7679__$1,cljs.core.cst$kw$catch);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7679__$1,cljs.core.cst$kw$name);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7679__$1,cljs.core.cst$kw$finally);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$const,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote(finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__7681,is_loop){
var map__7682 = p__7681;
var map__7682__$1 = (((((!((map__7682 == null))))?(((((map__7682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7682):map__7682);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7682__$1,cljs.core.cst$kw$body);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7682__$1,cljs.core.cst$kw$bindings);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7682__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__7684_7698 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__7685_7699 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$statement,context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR__orig_val__7684_7698,context,map__7682,map__7682__$1,expr,bindings,env){
return (function (binding){
var name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__7684_7698,context,map__7682,map__7682__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__7685_7699;

try{var seq__7686_7700 = cljs.core.seq(bindings);
var chunk__7687_7701 = null;
var count__7688_7702 = (0);
var i__7689_7703 = (0);
while(true){
if((i__7689_7703 < count__7688_7702)){
var map__7694_7704 = chunk__7687_7701.cljs$core$IIndexed$_nth$arity$2(null,i__7689_7703);
var map__7694_7705__$1 = (((((!((map__7694_7704 == null))))?(((((map__7694_7704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7694_7704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7694_7704):map__7694_7704);
var binding_7706 = map__7694_7705__$1;
var init_7707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7694_7705__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_7706);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_7707,";");


var G__7708 = seq__7686_7700;
var G__7709 = chunk__7687_7701;
var G__7710 = count__7688_7702;
var G__7711 = (i__7689_7703 + (1));
seq__7686_7700 = G__7708;
chunk__7687_7701 = G__7709;
count__7688_7702 = G__7710;
i__7689_7703 = G__7711;
continue;
} else {
var temp__5735__auto___7712 = cljs.core.seq(seq__7686_7700);
if(temp__5735__auto___7712){
var seq__7686_7713__$1 = temp__5735__auto___7712;
if(cljs.core.chunked_seq_QMARK_(seq__7686_7713__$1)){
var c__4550__auto___7714 = cljs.core.chunk_first(seq__7686_7713__$1);
var G__7715 = cljs.core.chunk_rest(seq__7686_7713__$1);
var G__7716 = c__4550__auto___7714;
var G__7717 = cljs.core.count(c__4550__auto___7714);
var G__7718 = (0);
seq__7686_7700 = G__7715;
chunk__7687_7701 = G__7716;
count__7688_7702 = G__7717;
i__7689_7703 = G__7718;
continue;
} else {
var map__7696_7719 = cljs.core.first(seq__7686_7713__$1);
var map__7696_7720__$1 = (((((!((map__7696_7719 == null))))?(((((map__7696_7719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7696_7719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7696_7719):map__7696_7719);
var binding_7721 = map__7696_7720__$1;
var init_7722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7696_7720__$1,cljs.core.cst$kw$init);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_7721);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_7722,";");


var G__7723 = cljs.core.next(seq__7686_7713__$1);
var G__7724 = null;
var G__7725 = (0);
var G__7726 = (0);
seq__7686_7700 = G__7723;
chunk__7687_7701 = G__7724;
count__7688_7702 = G__7725;
i__7689_7703 = G__7726;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__7684_7698;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$let,(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$loop,(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$recur,(function (p__7727){
var map__7728 = p__7727;
var map__7728__$1 = (((((!((map__7728 == null))))?(((((map__7728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7728):map__7728);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7728__$1,cljs.core.cst$kw$frame);
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7728__$1,cljs.core.cst$kw$exprs);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7728__$1,cljs.core.cst$kw$env);
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(frame);
var n__4607__auto___7730 = cljs.core.count(exprs);
var i_7731 = (0);
while(true){
if((i_7731 < n__4607__auto___7730)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_7731) : temps.call(null,i_7731))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_7731) : exprs.call(null,i_7731)),";");

var G__7732 = (i_7731 + (1));
i_7731 = G__7732;
continue;
} else {
}
break;
}

var n__4607__auto___7733 = cljs.core.count(exprs);
var i_7734 = (0);
while(true){
if((i_7734 < n__4607__auto___7733)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_7734) : params.call(null,i_7734)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_7734) : temps.call(null,i_7734)),";");

var G__7735 = (i_7734 + (1));
i_7734 = G__7735;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$letfn,(function (p__7736){
var map__7737 = p__7736;
var map__7737__$1 = (((((!((map__7737 == null))))?(((((map__7737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7737):map__7737);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7737__$1,cljs.core.cst$kw$body);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7737__$1,cljs.core.cst$kw$bindings);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7737__$1,cljs.core.cst$kw$env);
var context = cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__7739_7751 = cljs.core.seq(bindings);
var chunk__7740_7752 = null;
var count__7741_7753 = (0);
var i__7742_7754 = (0);
while(true){
if((i__7742_7754 < count__7741_7753)){
var map__7747_7755 = chunk__7740_7752.cljs$core$IIndexed$_nth$arity$2(null,i__7742_7754);
var map__7747_7756__$1 = (((((!((map__7747_7755 == null))))?(((((map__7747_7755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7747_7755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7747_7755):map__7747_7755);
var binding_7757 = map__7747_7756__$1;
var init_7758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7747_7756__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_7757)," = ",init_7758,";");


var G__7759 = seq__7739_7751;
var G__7760 = chunk__7740_7752;
var G__7761 = count__7741_7753;
var G__7762 = (i__7742_7754 + (1));
seq__7739_7751 = G__7759;
chunk__7740_7752 = G__7760;
count__7741_7753 = G__7761;
i__7742_7754 = G__7762;
continue;
} else {
var temp__5735__auto___7763 = cljs.core.seq(seq__7739_7751);
if(temp__5735__auto___7763){
var seq__7739_7764__$1 = temp__5735__auto___7763;
if(cljs.core.chunked_seq_QMARK_(seq__7739_7764__$1)){
var c__4550__auto___7765 = cljs.core.chunk_first(seq__7739_7764__$1);
var G__7766 = cljs.core.chunk_rest(seq__7739_7764__$1);
var G__7767 = c__4550__auto___7765;
var G__7768 = cljs.core.count(c__4550__auto___7765);
var G__7769 = (0);
seq__7739_7751 = G__7766;
chunk__7740_7752 = G__7767;
count__7741_7753 = G__7768;
i__7742_7754 = G__7769;
continue;
} else {
var map__7749_7770 = cljs.core.first(seq__7739_7764__$1);
var map__7749_7771__$1 = (((((!((map__7749_7770 == null))))?(((((map__7749_7770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7749_7770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7749_7770):map__7749_7770);
var binding_7772 = map__7749_7771__$1;
var init_7773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7749_7771__$1,cljs.core.cst$kw$init);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_7772)," = ",init_7773,";");


var G__7774 = cljs.core.next(seq__7739_7764__$1);
var G__7775 = null;
var G__7776 = (0);
var G__7777 = (0);
seq__7739_7751 = G__7774;
chunk__7740_7752 = G__7775;
count__7741_7753 = G__7776;
i__7742_7754 = G__7777;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invoke,(function (p__7780){
var map__7781 = p__7780;
var map__7781__$1 = (((((!((map__7781 == null))))?(((((map__7781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7781):map__7781);
var expr = map__7781__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7781__$1,cljs.core.cst$kw$fn);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7781__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7781__$1,cljs.core.cst$kw$env);
var info = cljs.core.cst$kw$info.cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4120__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not(cljs.core.cst$kw$dynamic.cljs$core$IFn$_invoke$arity$1(info));
if(and__4120__auto____$1){
return cljs.core.cst$kw$fn_DASH_var.cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var protocol = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4120__auto__ = protocol;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = tag;
if(cljs.core.truth_(and__4120__auto____$1)){
var or__4131__auto__ = (function (){var and__4120__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto____$2){
var and__4120__auto____$3 = protocol;
if(cljs.core.truth_(and__4120__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,cljs.core.cst$sym$not_DASH_native);
} else {
return and__4120__auto____$3;
}
} else {
return and__4120__auto____$2;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto____$2 = (function (){var or__4131__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return cljs.core.cst$kw$protocol_DASH_inline.cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4120__auto____$2)){
var or__4131__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
var and__4120__auto____$3 = (!(cljs.core.set_QMARK_(tag)));
if(and__4120__auto____$3){
var and__4120__auto____$4 = cljs.core.not((function (){var fexpr__7791 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$sym$clj,"null",cljs.core.cst$sym$boolean,"null",cljs.core.cst$sym$object,"null",cljs.core.cst$sym$any,"null",cljs.core.cst$sym$js,"null",cljs.core.cst$sym$number,"null",cljs.core.cst$sym$clj_DASH_or_DASH_nil,"null",cljs.core.cst$sym$array,"null",cljs.core.cst$sym$string,"null",cljs.core.cst$sym$function,"null",cljs.core.cst$sym$clj_DASH_nil,"null"], null), null);
return (fexpr__7791.cljs$core$IFn$_invoke$arity$1 ? fexpr__7791.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__7791.call(null,tag));
})());
if(and__4120__auto____$4){
var temp__5735__auto__ = cljs.core.cst$kw$protocols.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,tag));
if(cljs.core.truth_(temp__5735__auto__)){
var ps = temp__5735__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__4120__auto____$4;
}
} else {
return and__4120__auto____$3;
}
}
} else {
return and__4120__auto____$2;
}
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info),cljs.core.cst$sym$cljs$core_SLASH_not)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(expr))),cljs.core.cst$sym$boolean)));
var ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$js)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$Math)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.cst$sym$goog);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$cljs$core_SLASH_Keyword,cljs.analyzer.infer_tag(env,f));
if(or__4131__auto__){
return or__4131__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f__$1),cljs.core.cst$kw$const)) && ((cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__7783 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = cljs.core.cst$kw$variadic_QMARK_.cljs$core$IFn$_invoke$arity$1(info);
var mps = cljs.core.cst$kw$method_DASH_params.cljs$core$IFn$_invoke$arity$1(info);
var mfa = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (arity > mfa);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7781,map__7781__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7781,map__7781__$1,expr,f,args,env){
return (function (p1__7778_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__7778_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7781,map__7781__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7781,map__7781__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_fixed_DASH_arity,mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7781,map__7781__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,cljs.core.cst$kw$name,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$info], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7781,map__7781__$1,expr,f,args,env){
return (function (p1__7779_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__7779_SHARP_,cljs.core.cst$kw$shadow),cljs.core.cst$kw$fn_DASH_self_DASH_name);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7781,map__7781__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7781,map__7781__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7783,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7783,(1),null);
var env__6848__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_7796 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_7796,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_7797 = cljs.core.cst$kw$max_DASH_fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_7797,args)),(((mfa_7797 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_7797,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = js_QMARK_;
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__4120__auto__){
var G__7795 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__7794 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$var,null,cljs.core.cst$kw$js_DASH_var,null,cljs.core.cst$kw$local,null], null), null);
return (fexpr__7794.cljs$core$IFn$_invoke$arity$1 ? fexpr__7794.cljs$core$IFn$_invoke$arity$1(G__7795) : fexpr__7794.call(null,G__7795));
} else {
return and__4120__auto__;
}
})())){
var fprop_7798 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_7798," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_7798,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_7798," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_7798,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$new,(function (p__7799){
var map__7800 = p__7799;
var map__7800__$1 = (((((!((map__7800 == null))))?(((((map__7800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7800):map__7800);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7800__$1,cljs.core.cst$kw$class);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7800__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7800__$1,cljs.core.cst$kw$env);
var env__6848__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set_BANG_,(function (p__7802){
var map__7803 = p__7802;
var map__7803__$1 = (((((!((map__7803 == null))))?(((((map__7803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7803):map__7803);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7803__$1,cljs.core.cst$kw$target);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7803__$1,cljs.core.cst$kw$val);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7803__$1,cljs.core.cst$kw$env);
var env__6848__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target," = ",val);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__7805 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__7805__$1 = (((((!((map__7805 == null))))?(((((map__7805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7805):map__7805);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7805__$1,cljs.core.cst$kw$options);
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7805__$1,cljs.core.cst$kw$js_DASH_dependency_DASH_index);
var map__7806 = options;
var map__7806__$1 = (((((!((map__7806 == null))))?(((((map__7806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7806):map__7806);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7806__$1,cljs.core.cst$kw$target);
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7806__$1,cljs.core.cst$kw$optimizations);
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_);
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$cljs$core$_STAR_loaded_DASH_libs_STAR_));
var vec__7807 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nodejs,target)){
var map__7812 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__7812__$1 = (((((!((map__7812 == null))))?(((((map__7812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7812):map__7812);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7812__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7812__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7807,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7807,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__7814_7834 = cljs.core.seq(libs_to_load);
var chunk__7815_7835 = null;
var count__7816_7836 = (0);
var i__7817_7837 = (0);
while(true){
if((i__7817_7837 < count__7816_7836)){
var lib_7838 = chunk__7815_7835.cljs$core$IIndexed$_nth$arity$2(null,i__7817_7837);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_7838)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_7838),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_7838),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_7838),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_7838),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_7838,cljs.core.cst$sym$goog)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_7838),"');");
}

}
}
}


var G__7839 = seq__7814_7834;
var G__7840 = chunk__7815_7835;
var G__7841 = count__7816_7836;
var G__7842 = (i__7817_7837 + (1));
seq__7814_7834 = G__7839;
chunk__7815_7835 = G__7840;
count__7816_7836 = G__7841;
i__7817_7837 = G__7842;
continue;
} else {
var temp__5735__auto___7843 = cljs.core.seq(seq__7814_7834);
if(temp__5735__auto___7843){
var seq__7814_7844__$1 = temp__5735__auto___7843;
if(cljs.core.chunked_seq_QMARK_(seq__7814_7844__$1)){
var c__4550__auto___7845 = cljs.core.chunk_first(seq__7814_7844__$1);
var G__7846 = cljs.core.chunk_rest(seq__7814_7844__$1);
var G__7847 = c__4550__auto___7845;
var G__7848 = cljs.core.count(c__4550__auto___7845);
var G__7849 = (0);
seq__7814_7834 = G__7846;
chunk__7815_7835 = G__7847;
count__7816_7836 = G__7848;
i__7817_7837 = G__7849;
continue;
} else {
var lib_7850 = cljs.core.first(seq__7814_7844__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_7850)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,cljs.core.cst$kw$none)))))){
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$reload.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_7850),cljs.core.cst$kw$reload);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_7850),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_7850),cljs.core.cst$kw$reload_DASH_all);
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_7850),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_7850,cljs.core.cst$sym$goog)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_7850),"');");
}

}
}
}


var G__7851 = cljs.core.next(seq__7814_7844__$1);
var G__7852 = null;
var G__7853 = (0);
var G__7854 = (0);
seq__7814_7834 = G__7851;
chunk__7815_7835 = G__7852;
count__7816_7836 = G__7853;
i__7817_7837 = G__7854;
continue;
}
} else {
}
}
break;
}

var seq__7818_7855 = cljs.core.seq(node_libs);
var chunk__7819_7856 = null;
var count__7820_7857 = (0);
var i__7821_7858 = (0);
while(true){
if((i__7821_7858 < count__7820_7857)){
var lib_7859 = chunk__7819_7856.cljs$core$IIndexed$_nth$arity$2(null,i__7821_7858);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_7859)," = require('",lib_7859,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__7860 = seq__7818_7855;
var G__7861 = chunk__7819_7856;
var G__7862 = count__7820_7857;
var G__7863 = (i__7821_7858 + (1));
seq__7818_7855 = G__7860;
chunk__7819_7856 = G__7861;
count__7820_7857 = G__7862;
i__7821_7858 = G__7863;
continue;
} else {
var temp__5735__auto___7864 = cljs.core.seq(seq__7818_7855);
if(temp__5735__auto___7864){
var seq__7818_7865__$1 = temp__5735__auto___7864;
if(cljs.core.chunked_seq_QMARK_(seq__7818_7865__$1)){
var c__4550__auto___7866 = cljs.core.chunk_first(seq__7818_7865__$1);
var G__7867 = cljs.core.chunk_rest(seq__7818_7865__$1);
var G__7868 = c__4550__auto___7866;
var G__7869 = cljs.core.count(c__4550__auto___7866);
var G__7870 = (0);
seq__7818_7855 = G__7867;
chunk__7819_7856 = G__7868;
count__7820_7857 = G__7869;
i__7821_7858 = G__7870;
continue;
} else {
var lib_7871 = cljs.core.first(seq__7818_7865__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_7871)," = require('",lib_7871,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__7872 = cljs.core.next(seq__7818_7865__$1);
var G__7873 = null;
var G__7874 = (0);
var G__7875 = (0);
seq__7818_7855 = G__7872;
chunk__7819_7856 = G__7873;
count__7820_7857 = G__7874;
i__7821_7858 = G__7875;
continue;
}
} else {
}
}
break;
}

var seq__7822_7876 = cljs.core.seq(global_exports_libs);
var chunk__7823_7877 = null;
var count__7824_7878 = (0);
var i__7825_7879 = (0);
while(true){
if((i__7825_7879 < count__7824_7878)){
var lib_7880 = chunk__7823_7877.cljs$core$IIndexed$_nth$arity$2(null,i__7825_7879);
var map__7830_7881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_7880));
var map__7830_7882__$1 = (((((!((map__7830_7881 == null))))?(((((map__7830_7881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7830_7881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7830_7881):map__7830_7881);
var global_exports_7883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7830_7882__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emit_global_export(ns_name,global_exports_7883,lib_7880);


var G__7884 = seq__7822_7876;
var G__7885 = chunk__7823_7877;
var G__7886 = count__7824_7878;
var G__7887 = (i__7825_7879 + (1));
seq__7822_7876 = G__7884;
chunk__7823_7877 = G__7885;
count__7824_7878 = G__7886;
i__7825_7879 = G__7887;
continue;
} else {
var temp__5735__auto___7888 = cljs.core.seq(seq__7822_7876);
if(temp__5735__auto___7888){
var seq__7822_7889__$1 = temp__5735__auto___7888;
if(cljs.core.chunked_seq_QMARK_(seq__7822_7889__$1)){
var c__4550__auto___7890 = cljs.core.chunk_first(seq__7822_7889__$1);
var G__7891 = cljs.core.chunk_rest(seq__7822_7889__$1);
var G__7892 = c__4550__auto___7890;
var G__7893 = cljs.core.count(c__4550__auto___7890);
var G__7894 = (0);
seq__7822_7876 = G__7891;
chunk__7823_7877 = G__7892;
count__7824_7878 = G__7893;
i__7825_7879 = G__7894;
continue;
} else {
var lib_7895 = cljs.core.first(seq__7822_7889__$1);
var map__7832_7896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_7895));
var map__7832_7897__$1 = (((((!((map__7832_7896 == null))))?(((((map__7832_7896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7832_7896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7832_7896):map__7832_7896);
var global_exports_7898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7832_7897__$1,cljs.core.cst$kw$global_DASH_exports);
cljs.compiler.emit_global_export(ns_name,global_exports_7898,lib_7895);


var G__7899 = cljs.core.next(seq__7822_7889__$1);
var G__7900 = null;
var G__7901 = (0);
var G__7902 = (0);
seq__7822_7876 = G__7899;
chunk__7823_7877 = G__7900;
count__7824_7878 = G__7901;
i__7825_7879 = G__7902;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns_STAR_,(function (p__7903){
var map__7904 = p__7903;
var map__7904__$1 = (((((!((map__7904 == null))))?(((((map__7904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7904):map__7904);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7904__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7904__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7904__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7904__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7904__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7904__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7904__$1,cljs.core.cst$kw$deps);
cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_env.cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$ns,(function (p__7906){
var map__7907 = p__7906;
var map__7907__$1 = (((((!((map__7907 == null))))?(((((map__7907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7907):map__7907);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7907__$1,cljs.core.cst$kw$name);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7907__$1,cljs.core.cst$kw$requires);
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7907__$1,cljs.core.cst$kw$uses);
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7907__$1,cljs.core.cst$kw$require_DASH_macros);
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7907__$1,cljs.core.cst$kw$reloads);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7907__$1,cljs.core.cst$kw$env);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7907__$1,cljs.core.cst$kw$deps);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$sym$cljs$core)){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(cljs.core.cst$kw$emit_DASH_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,cljs.core.cst$kw$require.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,cljs.core.cst$kw$use.cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deftype,(function (p__7909){
var map__7910 = p__7909;
var map__7910__$1 = (((((!((map__7910 == null))))?(((((map__7910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7910):map__7910);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7910__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7910__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7910__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7910__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7910__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__7912_7936 = cljs.core.seq(protocols);
var chunk__7913_7937 = null;
var count__7914_7938 = (0);
var i__7915_7939 = (0);
while(true){
if((i__7915_7939 < count__7914_7938)){
var protocol_7940 = chunk__7913_7937.cljs$core$IIndexed$_nth$arity$2(null,i__7915_7939);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7940)),"}");


var G__7941 = seq__7912_7936;
var G__7942 = chunk__7913_7937;
var G__7943 = count__7914_7938;
var G__7944 = (i__7915_7939 + (1));
seq__7912_7936 = G__7941;
chunk__7913_7937 = G__7942;
count__7914_7938 = G__7943;
i__7915_7939 = G__7944;
continue;
} else {
var temp__5735__auto___7945 = cljs.core.seq(seq__7912_7936);
if(temp__5735__auto___7945){
var seq__7912_7946__$1 = temp__5735__auto___7945;
if(cljs.core.chunked_seq_QMARK_(seq__7912_7946__$1)){
var c__4550__auto___7947 = cljs.core.chunk_first(seq__7912_7946__$1);
var G__7948 = cljs.core.chunk_rest(seq__7912_7946__$1);
var G__7949 = c__4550__auto___7947;
var G__7950 = cljs.core.count(c__4550__auto___7947);
var G__7951 = (0);
seq__7912_7936 = G__7948;
chunk__7913_7937 = G__7949;
count__7914_7938 = G__7950;
i__7915_7939 = G__7951;
continue;
} else {
var protocol_7952 = cljs.core.first(seq__7912_7946__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_7952)),"}");


var G__7953 = cljs.core.next(seq__7912_7946__$1);
var G__7954 = null;
var G__7955 = (0);
var G__7956 = (0);
seq__7912_7936 = G__7953;
chunk__7913_7937 = G__7954;
count__7914_7938 = G__7955;
i__7915_7939 = G__7956;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__7916_7957 = cljs.core.seq(fields__$1);
var chunk__7917_7958 = null;
var count__7918_7959 = (0);
var i__7919_7960 = (0);
while(true){
if((i__7919_7960 < count__7918_7959)){
var fld_7961 = chunk__7917_7958.cljs$core$IIndexed$_nth$arity$2(null,i__7919_7960);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_7961," = ",fld_7961,";");


var G__7962 = seq__7916_7957;
var G__7963 = chunk__7917_7958;
var G__7964 = count__7918_7959;
var G__7965 = (i__7919_7960 + (1));
seq__7916_7957 = G__7962;
chunk__7917_7958 = G__7963;
count__7918_7959 = G__7964;
i__7919_7960 = G__7965;
continue;
} else {
var temp__5735__auto___7966 = cljs.core.seq(seq__7916_7957);
if(temp__5735__auto___7966){
var seq__7916_7967__$1 = temp__5735__auto___7966;
if(cljs.core.chunked_seq_QMARK_(seq__7916_7967__$1)){
var c__4550__auto___7968 = cljs.core.chunk_first(seq__7916_7967__$1);
var G__7969 = cljs.core.chunk_rest(seq__7916_7967__$1);
var G__7970 = c__4550__auto___7968;
var G__7971 = cljs.core.count(c__4550__auto___7968);
var G__7972 = (0);
seq__7916_7957 = G__7969;
chunk__7917_7958 = G__7970;
count__7918_7959 = G__7971;
i__7919_7960 = G__7972;
continue;
} else {
var fld_7973 = cljs.core.first(seq__7916_7967__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_7973," = ",fld_7973,";");


var G__7974 = cljs.core.next(seq__7916_7967__$1);
var G__7975 = null;
var G__7976 = (0);
var G__7977 = (0);
seq__7916_7957 = G__7974;
chunk__7917_7958 = G__7975;
count__7918_7959 = G__7976;
i__7919_7960 = G__7977;
continue;
}
} else {
}
}
break;
}

var seq__7920_7978 = cljs.core.seq(pmasks);
var chunk__7921_7979 = null;
var count__7922_7980 = (0);
var i__7923_7981 = (0);
while(true){
if((i__7923_7981 < count__7922_7980)){
var vec__7930_7982 = chunk__7921_7979.cljs$core$IIndexed$_nth$arity$2(null,i__7923_7981);
var pno_7983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7930_7982,(0),null);
var pmask_7984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7930_7982,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_7983,"$ = ",pmask_7984,";");


var G__7985 = seq__7920_7978;
var G__7986 = chunk__7921_7979;
var G__7987 = count__7922_7980;
var G__7988 = (i__7923_7981 + (1));
seq__7920_7978 = G__7985;
chunk__7921_7979 = G__7986;
count__7922_7980 = G__7987;
i__7923_7981 = G__7988;
continue;
} else {
var temp__5735__auto___7989 = cljs.core.seq(seq__7920_7978);
if(temp__5735__auto___7989){
var seq__7920_7990__$1 = temp__5735__auto___7989;
if(cljs.core.chunked_seq_QMARK_(seq__7920_7990__$1)){
var c__4550__auto___7991 = cljs.core.chunk_first(seq__7920_7990__$1);
var G__7992 = cljs.core.chunk_rest(seq__7920_7990__$1);
var G__7993 = c__4550__auto___7991;
var G__7994 = cljs.core.count(c__4550__auto___7991);
var G__7995 = (0);
seq__7920_7978 = G__7992;
chunk__7921_7979 = G__7993;
count__7922_7980 = G__7994;
i__7923_7981 = G__7995;
continue;
} else {
var vec__7933_7996 = cljs.core.first(seq__7920_7990__$1);
var pno_7997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7933_7996,(0),null);
var pmask_7998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7933_7996,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_7997,"$ = ",pmask_7998,";");


var G__7999 = cljs.core.next(seq__7920_7990__$1);
var G__8000 = null;
var G__8001 = (0);
var G__8002 = (0);
seq__7920_7978 = G__7999;
chunk__7921_7979 = G__8000;
count__7922_7980 = G__8001;
i__7923_7981 = G__8002;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$defrecord,(function (p__8003){
var map__8004 = p__8003;
var map__8004__$1 = (((((!((map__8004 == null))))?(((((map__8004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8004):map__8004);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8004__$1,cljs.core.cst$kw$t);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8004__$1,cljs.core.cst$kw$fields);
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8004__$1,cljs.core.cst$kw$pmasks);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8004__$1,cljs.core.cst$kw$body);
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8004__$1,cljs.core.cst$kw$protocols);
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$__meta,cljs.core.cst$sym$__extmap,cljs.core.cst$sym$__hash], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__8006_8030 = cljs.core.seq(protocols);
var chunk__8007_8031 = null;
var count__8008_8032 = (0);
var i__8009_8033 = (0);
while(true){
if((i__8009_8033 < count__8008_8032)){
var protocol_8034 = chunk__8007_8031.cljs$core$IIndexed$_nth$arity$2(null,i__8009_8033);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_8034)),"}");


var G__8035 = seq__8006_8030;
var G__8036 = chunk__8007_8031;
var G__8037 = count__8008_8032;
var G__8038 = (i__8009_8033 + (1));
seq__8006_8030 = G__8035;
chunk__8007_8031 = G__8036;
count__8008_8032 = G__8037;
i__8009_8033 = G__8038;
continue;
} else {
var temp__5735__auto___8039 = cljs.core.seq(seq__8006_8030);
if(temp__5735__auto___8039){
var seq__8006_8040__$1 = temp__5735__auto___8039;
if(cljs.core.chunked_seq_QMARK_(seq__8006_8040__$1)){
var c__4550__auto___8041 = cljs.core.chunk_first(seq__8006_8040__$1);
var G__8042 = cljs.core.chunk_rest(seq__8006_8040__$1);
var G__8043 = c__4550__auto___8041;
var G__8044 = cljs.core.count(c__4550__auto___8041);
var G__8045 = (0);
seq__8006_8030 = G__8042;
chunk__8007_8031 = G__8043;
count__8008_8032 = G__8044;
i__8009_8033 = G__8045;
continue;
} else {
var protocol_8046 = cljs.core.first(seq__8006_8040__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_8046)),"}");


var G__8047 = cljs.core.next(seq__8006_8040__$1);
var G__8048 = null;
var G__8049 = (0);
var G__8050 = (0);
seq__8006_8030 = G__8047;
chunk__8007_8031 = G__8048;
count__8008_8032 = G__8049;
i__8009_8033 = G__8050;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__8010_8051 = cljs.core.seq(fields__$1);
var chunk__8011_8052 = null;
var count__8012_8053 = (0);
var i__8013_8054 = (0);
while(true){
if((i__8013_8054 < count__8012_8053)){
var fld_8055 = chunk__8011_8052.cljs$core$IIndexed$_nth$arity$2(null,i__8013_8054);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_8055," = ",fld_8055,";");


var G__8056 = seq__8010_8051;
var G__8057 = chunk__8011_8052;
var G__8058 = count__8012_8053;
var G__8059 = (i__8013_8054 + (1));
seq__8010_8051 = G__8056;
chunk__8011_8052 = G__8057;
count__8012_8053 = G__8058;
i__8013_8054 = G__8059;
continue;
} else {
var temp__5735__auto___8060 = cljs.core.seq(seq__8010_8051);
if(temp__5735__auto___8060){
var seq__8010_8061__$1 = temp__5735__auto___8060;
if(cljs.core.chunked_seq_QMARK_(seq__8010_8061__$1)){
var c__4550__auto___8062 = cljs.core.chunk_first(seq__8010_8061__$1);
var G__8063 = cljs.core.chunk_rest(seq__8010_8061__$1);
var G__8064 = c__4550__auto___8062;
var G__8065 = cljs.core.count(c__4550__auto___8062);
var G__8066 = (0);
seq__8010_8051 = G__8063;
chunk__8011_8052 = G__8064;
count__8012_8053 = G__8065;
i__8013_8054 = G__8066;
continue;
} else {
var fld_8067 = cljs.core.first(seq__8010_8061__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_8067," = ",fld_8067,";");


var G__8068 = cljs.core.next(seq__8010_8061__$1);
var G__8069 = null;
var G__8070 = (0);
var G__8071 = (0);
seq__8010_8051 = G__8068;
chunk__8011_8052 = G__8069;
count__8012_8053 = G__8070;
i__8013_8054 = G__8071;
continue;
}
} else {
}
}
break;
}

var seq__8014_8072 = cljs.core.seq(pmasks);
var chunk__8015_8073 = null;
var count__8016_8074 = (0);
var i__8017_8075 = (0);
while(true){
if((i__8017_8075 < count__8016_8074)){
var vec__8024_8076 = chunk__8015_8073.cljs$core$IIndexed$_nth$arity$2(null,i__8017_8075);
var pno_8077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8024_8076,(0),null);
var pmask_8078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8024_8076,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_8077,"$ = ",pmask_8078,";");


var G__8079 = seq__8014_8072;
var G__8080 = chunk__8015_8073;
var G__8081 = count__8016_8074;
var G__8082 = (i__8017_8075 + (1));
seq__8014_8072 = G__8079;
chunk__8015_8073 = G__8080;
count__8016_8074 = G__8081;
i__8017_8075 = G__8082;
continue;
} else {
var temp__5735__auto___8083 = cljs.core.seq(seq__8014_8072);
if(temp__5735__auto___8083){
var seq__8014_8084__$1 = temp__5735__auto___8083;
if(cljs.core.chunked_seq_QMARK_(seq__8014_8084__$1)){
var c__4550__auto___8085 = cljs.core.chunk_first(seq__8014_8084__$1);
var G__8086 = cljs.core.chunk_rest(seq__8014_8084__$1);
var G__8087 = c__4550__auto___8085;
var G__8088 = cljs.core.count(c__4550__auto___8085);
var G__8089 = (0);
seq__8014_8072 = G__8086;
chunk__8015_8073 = G__8087;
count__8016_8074 = G__8088;
i__8017_8075 = G__8089;
continue;
} else {
var vec__8027_8090 = cljs.core.first(seq__8014_8084__$1);
var pno_8091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8027_8090,(0),null);
var pmask_8092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8027_8090,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_8091,"$ = ",pmask_8092,";");


var G__8093 = cljs.core.next(seq__8014_8084__$1);
var G__8094 = null;
var G__8095 = (0);
var G__8096 = (0);
seq__8014_8072 = G__8093;
chunk__8015_8073 = G__8094;
count__8016_8074 = G__8095;
i__8017_8075 = G__8096;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__8097){
var map__8098 = p__8097;
var map__8098__$1 = (((((!((map__8098 == null))))?(((((map__8098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8098):map__8098);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8098__$1,cljs.core.cst$kw$target);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8098__$1,cljs.core.cst$kw$field);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8098__$1,cljs.core.cst$kw$method);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8098__$1,cljs.core.cst$kw$args);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8098__$1,cljs.core.cst$kw$env);
var env__6848__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$host_DASH_field,(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$host_DASH_call,(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$js,(function (p__8100){
var map__8101 = p__8100;
var map__8101__$1 = (((((!((map__8101 == null))))?(((((map__8101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8101):map__8101);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8101__$1,cljs.core.cst$kw$op);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8101__$1,cljs.core.cst$kw$env);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8101__$1,cljs.core.cst$kw$code);
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8101__$1,cljs.core.cst$kw$segs);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8101__$1,cljs.core.cst$kw$args);
if(cljs.core.truth_((function (){var and__4120__auto__ = code;
if(cljs.core.truth_(and__4120__auto__)){
var G__8103 = clojure.string.trim(code);
var G__8104 = "/*";
return goog.string.startsWith(G__8103,G__8104);
} else {
return and__4120__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__6848__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$return,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expr,cljs.core.cst$kw$context.cljs$core$IFn$_invoke$arity$1(env__6848__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__8109 = cljs.core.seq(table);
var chunk__8110 = null;
var count__8111 = (0);
var i__8112 = (0);
while(true){
if((i__8112 < count__8111)){
var vec__8119 = chunk__8110.cljs$core$IIndexed$_nth$arity$2(null,i__8112);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8119,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8119,(1),null);
var ns_8125 = cljs.core.namespace(sym);
var name_8126 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type,cljs.core.cst$kw$clojure$error_SLASH_phase,cljs.core.cst$kw$compilation], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__8127 = seq__8109;
var G__8128 = chunk__8110;
var G__8129 = count__8111;
var G__8130 = (i__8112 + (1));
seq__8109 = G__8127;
chunk__8110 = G__8128;
count__8111 = G__8129;
i__8112 = G__8130;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__8109);
if(temp__5735__auto__){
var seq__8109__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8109__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__8109__$1);
var G__8131 = cljs.core.chunk_rest(seq__8109__$1);
var G__8132 = c__4550__auto__;
var G__8133 = cljs.core.count(c__4550__auto__);
var G__8134 = (0);
seq__8109 = G__8131;
chunk__8110 = G__8132;
count__8111 = G__8133;
i__8112 = G__8134;
continue;
} else {
var vec__8122 = cljs.core.first(seq__8109__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8122,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8122,(1),null);
var ns_8135 = cljs.core.namespace(sym);
var name_8136 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$invalid_DASH_constant_DASH_type,cljs.core.cst$kw$clojure$error_SLASH_phase,cljs.core.cst$kw$compilation], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__8137 = cljs.core.next(seq__8109__$1);
var G__8138 = null;
var G__8139 = (0);
var G__8140 = (0);
seq__8109 = G__8137;
chunk__8110 = G__8138;
count__8111 = G__8139;
i__8112 = G__8140;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__8142 = arguments.length;
switch (G__8142) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.core.cst$kw$cljs$analyzer_SLASH_externs.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_8147 = cljs.core.first(ks);
var vec__8143_8148 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_8147);
var top_8149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8143_8148,(0),null);
var prefix_SINGLEQUOTE__8150 = vec__8143_8148;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$prototype,k_8147)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__8150) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_8149)) || (cljs.core.contains_QMARK_(known_externs,top_8149)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__8150)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_8149);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__8150)),";");
}
} else {
}

var m_8151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_8147);
if(cljs.core.empty_QMARK_(m_8151)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__8150,m_8151,top_level,known_externs);
}

var G__8152 = cljs.core.next(ks);
ks = G__8152;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;

