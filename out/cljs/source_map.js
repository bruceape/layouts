// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__5740){
var vec__5741 = p__5740;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5741,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5741,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__5744 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5744,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5744,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5744,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5744,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5744,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$gcol,gcol,cljs.core.cst$kw$source,(goog.object.get(source_map,"sources")[source]),cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$name,(function (){var temp__5735__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5735__auto__)){
var name__$1 = temp__5735__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__5747 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5747,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5747,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5747,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5747,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5747,(4),null);
var vec__5750 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5750,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5750,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5750,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5750,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5750,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4131__auto__ = col;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__5753 = segmap;
var map__5753__$1 = (((((!((map__5753 == null))))?(((((map__5753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5753):map__5753);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5753__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5753__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5753__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5753__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5753__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__5753,map__5753__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__5753,map__5753__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__5753,map__5753__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__5753,map__5753__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__5753,map__5753__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__5753,map__5753__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__5756 = arguments.length;
switch (G__5756) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__5760 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__5764 = cljs.core.next(segs__$1);
var G__5765 = nrelseg;
var G__5766 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__5764;
relseg__$1 = G__5765;
result__$1 = G__5766;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5760,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5760,(1),null);
var G__5767 = (gline + (1));
var G__5768 = cljs.core.next(lines__$1);
var G__5769 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__5770 = result__$1;
gline = G__5767;
lines__$1 = G__5768;
relseg = G__5769;
result = G__5770;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__5772 = segmap;
var map__5772__$1 = (((((!((map__5772 == null))))?(((((map__5772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5772):map__5772);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5772__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5772__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5772__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5772__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5772__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__5772,map__5772__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__5772,map__5772__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__5771_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__5771_SHARP_,d__$1);
});})(map__5772,map__5772__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__5772,map__5772__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__5775 = arguments.length;
switch (G__5775) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__5779 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__5783 = cljs.core.next(segs__$1);
var G__5784 = nrelseg;
var G__5785 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__5783;
relseg__$1 = G__5784;
result__$1 = G__5785;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5779,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5779,(1),null);
var G__5786 = (gline + (1));
var G__5787 = cljs.core.next(lines__$1);
var G__5788 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__5789 = result__$1;
gline = G__5786;
lines__$1 = G__5787;
relseg = G__5788;
result = G__5789;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__5790){
var vec__5791 = p__5790;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5791,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5791,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5791,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5791,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5791,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__5794){
var vec__5795 = p__5794;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5795,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5795,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5795,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5795,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5795,(4),null);
var seg = vec__5795;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__5795,gcol,sidx,line,col,name,seg,relseg){
return (function (p__5798){
var vec__5799 = p__5798;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5799,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5799,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5799,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5799,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5799,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__5795,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4131__auto__ = cljs.core.cst$kw$preamble_DASH_line_DASH_count.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gcol.cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5733__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
var idx = (function (){var temp__5733__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__5805 = cljs.core.seq(infos);
var chunk__5806 = null;
var count__5807 = (0);
var i__5808 = (0);
while(true){
if((i__5808 < count__5807)){
var info = chunk__5806.cljs$core$IIndexed$_nth$arity$2(null,i__5808);
var segv_6162 = info__GT_segv(info,source_idx,line,col);
var gline_6163 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_6164 = cljs.core.count(cljs.core.deref(lines));
if((gline_6163 > (lc_6164 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__5805,chunk__5806,count__5807,i__5808,segv_6162,gline_6163,lc_6164,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_6163 - (lc_6164 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_6162], null));
});})(seq__5805,chunk__5806,count__5807,i__5808,segv_6162,gline_6163,lc_6164,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__5805,chunk__5806,count__5807,i__5808,segv_6162,gline_6163,lc_6164,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6163], null),cljs.core.conj,segv_6162);
});})(seq__5805,chunk__5806,count__5807,i__5808,segv_6162,gline_6163,lc_6164,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__6165 = seq__5805;
var G__6166 = chunk__5806;
var G__6167 = count__5807;
var G__6168 = (i__5808 + (1));
seq__5805 = G__6165;
chunk__5806 = G__6166;
count__5807 = G__6167;
i__5808 = G__6168;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__5805);
if(temp__5735__auto__){
var seq__5805__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5805__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5805__$1);
var G__6169 = cljs.core.chunk_rest(seq__5805__$1);
var G__6170 = c__4550__auto__;
var G__6171 = cljs.core.count(c__4550__auto__);
var G__6172 = (0);
seq__5805 = G__6169;
chunk__5806 = G__6170;
count__5807 = G__6171;
i__5808 = G__6172;
continue;
} else {
var info = cljs.core.first(seq__5805__$1);
var segv_6173 = info__GT_segv(info,source_idx,line,col);
var gline_6174 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_6175 = cljs.core.count(cljs.core.deref(lines));
if((gline_6174 > (lc_6175 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__5805,chunk__5806,count__5807,i__5808,segv_6173,gline_6174,lc_6175,info,seq__5805__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_6174 - (lc_6175 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_6173], null));
});})(seq__5805,chunk__5806,count__5807,i__5808,segv_6173,gline_6174,lc_6175,info,seq__5805__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__5805,chunk__5806,count__5807,i__5808,segv_6173,gline_6174,lc_6175,info,seq__5805__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6174], null),cljs.core.conj,segv_6173);
});})(seq__5805,chunk__5806,count__5807,i__5808,segv_6173,gline_6174,lc_6175,info,seq__5805__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__6176 = cljs.core.next(seq__5805__$1);
var G__6177 = null;
var G__6178 = (0);
var G__6179 = (0);
seq__5805 = G__6176;
chunk__5806 = G__6177;
count__5807 = G__6178;
i__5808 = G__6179;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__5809_6180 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__5810_6181 = null;
var count__5811_6182 = (0);
var i__5812_6183 = (0);
while(true){
if((i__5812_6183 < count__5811_6182)){
var vec__5985_6184 = chunk__5810_6181.cljs$core$IIndexed$_nth$arity$2(null,i__5812_6183);
var source_idx_6185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5985_6184,(0),null);
var vec__5988_6186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5985_6184,(1),null);
var __6187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5988_6186,(0),null);
var lines_6188__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5988_6186,(1),null);
var seq__5991_6189 = cljs.core.seq(lines_6188__$1);
var chunk__5992_6190 = null;
var count__5993_6191 = (0);
var i__5994_6192 = (0);
while(true){
if((i__5994_6192 < count__5993_6191)){
var vec__6033_6193 = chunk__5992_6190.cljs$core$IIndexed$_nth$arity$2(null,i__5994_6192);
var line_6194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6033_6193,(0),null);
var cols_6195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6033_6193,(1),null);
var seq__6036_6196 = cljs.core.seq(cols_6195);
var chunk__6037_6197 = null;
var count__6038_6198 = (0);
var i__6039_6199 = (0);
while(true){
if((i__6039_6199 < count__6038_6198)){
var vec__6046_6200 = chunk__6037_6197.cljs$core$IIndexed$_nth$arity$2(null,i__6039_6199);
var col_6201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6046_6200,(0),null);
var infos_6202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6046_6200,(1),null);
encode_cols(infos_6202,source_idx_6185,line_6194,col_6201);


var G__6203 = seq__6036_6196;
var G__6204 = chunk__6037_6197;
var G__6205 = count__6038_6198;
var G__6206 = (i__6039_6199 + (1));
seq__6036_6196 = G__6203;
chunk__6037_6197 = G__6204;
count__6038_6198 = G__6205;
i__6039_6199 = G__6206;
continue;
} else {
var temp__5735__auto___6207 = cljs.core.seq(seq__6036_6196);
if(temp__5735__auto___6207){
var seq__6036_6208__$1 = temp__5735__auto___6207;
if(cljs.core.chunked_seq_QMARK_(seq__6036_6208__$1)){
var c__4550__auto___6209 = cljs.core.chunk_first(seq__6036_6208__$1);
var G__6210 = cljs.core.chunk_rest(seq__6036_6208__$1);
var G__6211 = c__4550__auto___6209;
var G__6212 = cljs.core.count(c__4550__auto___6209);
var G__6213 = (0);
seq__6036_6196 = G__6210;
chunk__6037_6197 = G__6211;
count__6038_6198 = G__6212;
i__6039_6199 = G__6213;
continue;
} else {
var vec__6049_6214 = cljs.core.first(seq__6036_6208__$1);
var col_6215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6049_6214,(0),null);
var infos_6216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6049_6214,(1),null);
encode_cols(infos_6216,source_idx_6185,line_6194,col_6215);


var G__6217 = cljs.core.next(seq__6036_6208__$1);
var G__6218 = null;
var G__6219 = (0);
var G__6220 = (0);
seq__6036_6196 = G__6217;
chunk__6037_6197 = G__6218;
count__6038_6198 = G__6219;
i__6039_6199 = G__6220;
continue;
}
} else {
}
}
break;
}


var G__6221 = seq__5991_6189;
var G__6222 = chunk__5992_6190;
var G__6223 = count__5993_6191;
var G__6224 = (i__5994_6192 + (1));
seq__5991_6189 = G__6221;
chunk__5992_6190 = G__6222;
count__5993_6191 = G__6223;
i__5994_6192 = G__6224;
continue;
} else {
var temp__5735__auto___6225 = cljs.core.seq(seq__5991_6189);
if(temp__5735__auto___6225){
var seq__5991_6226__$1 = temp__5735__auto___6225;
if(cljs.core.chunked_seq_QMARK_(seq__5991_6226__$1)){
var c__4550__auto___6227 = cljs.core.chunk_first(seq__5991_6226__$1);
var G__6228 = cljs.core.chunk_rest(seq__5991_6226__$1);
var G__6229 = c__4550__auto___6227;
var G__6230 = cljs.core.count(c__4550__auto___6227);
var G__6231 = (0);
seq__5991_6189 = G__6228;
chunk__5992_6190 = G__6229;
count__5993_6191 = G__6230;
i__5994_6192 = G__6231;
continue;
} else {
var vec__6052_6232 = cljs.core.first(seq__5991_6226__$1);
var line_6233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6052_6232,(0),null);
var cols_6234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6052_6232,(1),null);
var seq__6055_6235 = cljs.core.seq(cols_6234);
var chunk__6056_6236 = null;
var count__6057_6237 = (0);
var i__6058_6238 = (0);
while(true){
if((i__6058_6238 < count__6057_6237)){
var vec__6065_6239 = chunk__6056_6236.cljs$core$IIndexed$_nth$arity$2(null,i__6058_6238);
var col_6240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6065_6239,(0),null);
var infos_6241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6065_6239,(1),null);
encode_cols(infos_6241,source_idx_6185,line_6233,col_6240);


var G__6242 = seq__6055_6235;
var G__6243 = chunk__6056_6236;
var G__6244 = count__6057_6237;
var G__6245 = (i__6058_6238 + (1));
seq__6055_6235 = G__6242;
chunk__6056_6236 = G__6243;
count__6057_6237 = G__6244;
i__6058_6238 = G__6245;
continue;
} else {
var temp__5735__auto___6246__$1 = cljs.core.seq(seq__6055_6235);
if(temp__5735__auto___6246__$1){
var seq__6055_6247__$1 = temp__5735__auto___6246__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6055_6247__$1)){
var c__4550__auto___6248 = cljs.core.chunk_first(seq__6055_6247__$1);
var G__6249 = cljs.core.chunk_rest(seq__6055_6247__$1);
var G__6250 = c__4550__auto___6248;
var G__6251 = cljs.core.count(c__4550__auto___6248);
var G__6252 = (0);
seq__6055_6235 = G__6249;
chunk__6056_6236 = G__6250;
count__6057_6237 = G__6251;
i__6058_6238 = G__6252;
continue;
} else {
var vec__6068_6253 = cljs.core.first(seq__6055_6247__$1);
var col_6254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6068_6253,(0),null);
var infos_6255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6068_6253,(1),null);
encode_cols(infos_6255,source_idx_6185,line_6233,col_6254);


var G__6256 = cljs.core.next(seq__6055_6247__$1);
var G__6257 = null;
var G__6258 = (0);
var G__6259 = (0);
seq__6055_6235 = G__6256;
chunk__6056_6236 = G__6257;
count__6057_6237 = G__6258;
i__6058_6238 = G__6259;
continue;
}
} else {
}
}
break;
}


var G__6260 = cljs.core.next(seq__5991_6226__$1);
var G__6261 = null;
var G__6262 = (0);
var G__6263 = (0);
seq__5991_6189 = G__6260;
chunk__5992_6190 = G__6261;
count__5993_6191 = G__6262;
i__5994_6192 = G__6263;
continue;
}
} else {
}
}
break;
}


var G__6264 = seq__5809_6180;
var G__6265 = chunk__5810_6181;
var G__6266 = count__5811_6182;
var G__6267 = (i__5812_6183 + (1));
seq__5809_6180 = G__6264;
chunk__5810_6181 = G__6265;
count__5811_6182 = G__6266;
i__5812_6183 = G__6267;
continue;
} else {
var temp__5735__auto___6268 = cljs.core.seq(seq__5809_6180);
if(temp__5735__auto___6268){
var seq__5809_6269__$1 = temp__5735__auto___6268;
if(cljs.core.chunked_seq_QMARK_(seq__5809_6269__$1)){
var c__4550__auto___6270 = cljs.core.chunk_first(seq__5809_6269__$1);
var G__6271 = cljs.core.chunk_rest(seq__5809_6269__$1);
var G__6272 = c__4550__auto___6270;
var G__6273 = cljs.core.count(c__4550__auto___6270);
var G__6274 = (0);
seq__5809_6180 = G__6271;
chunk__5810_6181 = G__6272;
count__5811_6182 = G__6273;
i__5812_6183 = G__6274;
continue;
} else {
var vec__6071_6275 = cljs.core.first(seq__5809_6269__$1);
var source_idx_6276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6071_6275,(0),null);
var vec__6074_6277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6071_6275,(1),null);
var __6278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6074_6277,(0),null);
var lines_6279__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6074_6277,(1),null);
var seq__6077_6280 = cljs.core.seq(lines_6279__$1);
var chunk__6078_6281 = null;
var count__6079_6282 = (0);
var i__6080_6283 = (0);
while(true){
if((i__6080_6283 < count__6079_6282)){
var vec__6119_6284 = chunk__6078_6281.cljs$core$IIndexed$_nth$arity$2(null,i__6080_6283);
var line_6285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6119_6284,(0),null);
var cols_6286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6119_6284,(1),null);
var seq__6122_6287 = cljs.core.seq(cols_6286);
var chunk__6123_6288 = null;
var count__6124_6289 = (0);
var i__6125_6290 = (0);
while(true){
if((i__6125_6290 < count__6124_6289)){
var vec__6132_6291 = chunk__6123_6288.cljs$core$IIndexed$_nth$arity$2(null,i__6125_6290);
var col_6292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6132_6291,(0),null);
var infos_6293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6132_6291,(1),null);
encode_cols(infos_6293,source_idx_6276,line_6285,col_6292);


var G__6294 = seq__6122_6287;
var G__6295 = chunk__6123_6288;
var G__6296 = count__6124_6289;
var G__6297 = (i__6125_6290 + (1));
seq__6122_6287 = G__6294;
chunk__6123_6288 = G__6295;
count__6124_6289 = G__6296;
i__6125_6290 = G__6297;
continue;
} else {
var temp__5735__auto___6298__$1 = cljs.core.seq(seq__6122_6287);
if(temp__5735__auto___6298__$1){
var seq__6122_6299__$1 = temp__5735__auto___6298__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6122_6299__$1)){
var c__4550__auto___6300 = cljs.core.chunk_first(seq__6122_6299__$1);
var G__6301 = cljs.core.chunk_rest(seq__6122_6299__$1);
var G__6302 = c__4550__auto___6300;
var G__6303 = cljs.core.count(c__4550__auto___6300);
var G__6304 = (0);
seq__6122_6287 = G__6301;
chunk__6123_6288 = G__6302;
count__6124_6289 = G__6303;
i__6125_6290 = G__6304;
continue;
} else {
var vec__6135_6305 = cljs.core.first(seq__6122_6299__$1);
var col_6306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6135_6305,(0),null);
var infos_6307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6135_6305,(1),null);
encode_cols(infos_6307,source_idx_6276,line_6285,col_6306);


var G__6308 = cljs.core.next(seq__6122_6299__$1);
var G__6309 = null;
var G__6310 = (0);
var G__6311 = (0);
seq__6122_6287 = G__6308;
chunk__6123_6288 = G__6309;
count__6124_6289 = G__6310;
i__6125_6290 = G__6311;
continue;
}
} else {
}
}
break;
}


var G__6312 = seq__6077_6280;
var G__6313 = chunk__6078_6281;
var G__6314 = count__6079_6282;
var G__6315 = (i__6080_6283 + (1));
seq__6077_6280 = G__6312;
chunk__6078_6281 = G__6313;
count__6079_6282 = G__6314;
i__6080_6283 = G__6315;
continue;
} else {
var temp__5735__auto___6316__$1 = cljs.core.seq(seq__6077_6280);
if(temp__5735__auto___6316__$1){
var seq__6077_6317__$1 = temp__5735__auto___6316__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6077_6317__$1)){
var c__4550__auto___6318 = cljs.core.chunk_first(seq__6077_6317__$1);
var G__6319 = cljs.core.chunk_rest(seq__6077_6317__$1);
var G__6320 = c__4550__auto___6318;
var G__6321 = cljs.core.count(c__4550__auto___6318);
var G__6322 = (0);
seq__6077_6280 = G__6319;
chunk__6078_6281 = G__6320;
count__6079_6282 = G__6321;
i__6080_6283 = G__6322;
continue;
} else {
var vec__6138_6323 = cljs.core.first(seq__6077_6317__$1);
var line_6324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6138_6323,(0),null);
var cols_6325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6138_6323,(1),null);
var seq__6141_6326 = cljs.core.seq(cols_6325);
var chunk__6142_6327 = null;
var count__6143_6328 = (0);
var i__6144_6329 = (0);
while(true){
if((i__6144_6329 < count__6143_6328)){
var vec__6151_6330 = chunk__6142_6327.cljs$core$IIndexed$_nth$arity$2(null,i__6144_6329);
var col_6331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6151_6330,(0),null);
var infos_6332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6151_6330,(1),null);
encode_cols(infos_6332,source_idx_6276,line_6324,col_6331);


var G__6333 = seq__6141_6326;
var G__6334 = chunk__6142_6327;
var G__6335 = count__6143_6328;
var G__6336 = (i__6144_6329 + (1));
seq__6141_6326 = G__6333;
chunk__6142_6327 = G__6334;
count__6143_6328 = G__6335;
i__6144_6329 = G__6336;
continue;
} else {
var temp__5735__auto___6337__$2 = cljs.core.seq(seq__6141_6326);
if(temp__5735__auto___6337__$2){
var seq__6141_6338__$1 = temp__5735__auto___6337__$2;
if(cljs.core.chunked_seq_QMARK_(seq__6141_6338__$1)){
var c__4550__auto___6339 = cljs.core.chunk_first(seq__6141_6338__$1);
var G__6340 = cljs.core.chunk_rest(seq__6141_6338__$1);
var G__6341 = c__4550__auto___6339;
var G__6342 = cljs.core.count(c__4550__auto___6339);
var G__6343 = (0);
seq__6141_6326 = G__6340;
chunk__6142_6327 = G__6341;
count__6143_6328 = G__6342;
i__6144_6329 = G__6343;
continue;
} else {
var vec__6154_6344 = cljs.core.first(seq__6141_6338__$1);
var col_6345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6154_6344,(0),null);
var infos_6346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6154_6344,(1),null);
encode_cols(infos_6346,source_idx_6276,line_6324,col_6345);


var G__6347 = cljs.core.next(seq__6141_6338__$1);
var G__6348 = null;
var G__6349 = (0);
var G__6350 = (0);
seq__6141_6326 = G__6347;
chunk__6142_6327 = G__6348;
count__6143_6328 = G__6349;
i__6144_6329 = G__6350;
continue;
}
} else {
}
}
break;
}


var G__6351 = cljs.core.next(seq__6077_6317__$1);
var G__6352 = null;
var G__6353 = (0);
var G__6354 = (0);
seq__6077_6280 = G__6351;
chunk__6078_6281 = G__6352;
count__6079_6282 = G__6353;
i__6080_6283 = G__6354;
continue;
}
} else {
}
}
break;
}


var G__6355 = cljs.core.next(seq__5809_6269__$1);
var G__6356 = null;
var G__6357 = (0);
var G__6358 = (0);
seq__5809_6180 = G__6355;
chunk__5810_6181 = G__6356;
count__5811_6182 = G__6357;
i__5812_6183 = G__6358;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__6157 = ({"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__5802_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5802_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__5803_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__5803_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__5804_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__5804_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))){
var G__6158 = G__6157;
var G__6159_6359 = G__6158;
var G__6160_6360 = "sourcesContent";
var G__6161_6361 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__6159_6359,G__6160_6360,G__6161_6361);

return G__6158;
} else {
return G__6157;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__6362 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6362,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6362,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__6365 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6365,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6365,(1),null);
var G__6371 = cljs.core.next(col_map_seq);
var G__6372 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__6365,col,infos,vec__6362,line,col_map){
return (function (v,p__6368){
var map__6369 = p__6368;
var map__6369__$1 = (((((!((map__6369 == null))))?(((((map__6369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6369):map__6369);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6369__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6369__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__6365,col,infos,vec__6362,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__6371;
new_cols = G__6372;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__6373 = cljs.core.next(line_map_seq);
var G__6374 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__6373;
new_lines = G__6374;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__6375_6647 = cljs.core.seq(reverse_map);
var chunk__6376_6648 = null;
var count__6377_6649 = (0);
var i__6378_6650 = (0);
while(true){
if((i__6378_6650 < count__6377_6649)){
var vec__6513_6651 = chunk__6376_6648.cljs$core$IIndexed$_nth$arity$2(null,i__6378_6650);
var line_6652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6513_6651,(0),null);
var columns_6653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6513_6651,(1),null);
var seq__6516_6654 = cljs.core.seq(columns_6653);
var chunk__6517_6655 = null;
var count__6518_6656 = (0);
var i__6519_6657 = (0);
while(true){
if((i__6519_6657 < count__6518_6656)){
var vec__6550_6658 = chunk__6517_6655.cljs$core$IIndexed$_nth$arity$2(null,i__6519_6657);
var column_6659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6550_6658,(0),null);
var column_info_6660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6550_6658,(1),null);
var seq__6553_6661 = cljs.core.seq(column_info_6660);
var chunk__6554_6662 = null;
var count__6555_6663 = (0);
var i__6556_6664 = (0);
while(true){
if((i__6556_6664 < count__6555_6663)){
var map__6561_6665 = chunk__6554_6662.cljs$core$IIndexed$_nth$arity$2(null,i__6556_6664);
var map__6561_6666__$1 = (((((!((map__6561_6665 == null))))?(((((map__6561_6665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6561_6665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6561_6665):map__6561_6665);
var gline_6667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6561_6666__$1,cljs.core.cst$kw$gline);
var gcol_6668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6561_6666__$1,cljs.core.cst$kw$gcol);
var name_6669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6561_6666__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6667], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__6553_6661,chunk__6554_6662,count__6555_6663,i__6556_6664,seq__6516_6654,chunk__6517_6655,count__6518_6656,i__6519_6657,seq__6375_6647,chunk__6376_6648,count__6377_6649,i__6378_6650,map__6561_6665,map__6561_6666__$1,gline_6667,gcol_6668,name_6669,vec__6550_6658,column_6659,column_info_6660,vec__6513_6651,line_6652,columns_6653,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6668], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_6652,cljs.core.cst$kw$col,column_6659,cljs.core.cst$kw$name,name_6669], null));
});})(seq__6553_6661,chunk__6554_6662,count__6555_6663,i__6556_6664,seq__6516_6654,chunk__6517_6655,count__6518_6656,i__6519_6657,seq__6375_6647,chunk__6376_6648,count__6377_6649,i__6378_6650,map__6561_6665,map__6561_6666__$1,gline_6667,gcol_6668,name_6669,vec__6550_6658,column_6659,column_info_6660,vec__6513_6651,line_6652,columns_6653,inverted))
,cljs.core.sorted_map()));


var G__6670 = seq__6553_6661;
var G__6671 = chunk__6554_6662;
var G__6672 = count__6555_6663;
var G__6673 = (i__6556_6664 + (1));
seq__6553_6661 = G__6670;
chunk__6554_6662 = G__6671;
count__6555_6663 = G__6672;
i__6556_6664 = G__6673;
continue;
} else {
var temp__5735__auto___6674 = cljs.core.seq(seq__6553_6661);
if(temp__5735__auto___6674){
var seq__6553_6675__$1 = temp__5735__auto___6674;
if(cljs.core.chunked_seq_QMARK_(seq__6553_6675__$1)){
var c__4550__auto___6676 = cljs.core.chunk_first(seq__6553_6675__$1);
var G__6677 = cljs.core.chunk_rest(seq__6553_6675__$1);
var G__6678 = c__4550__auto___6676;
var G__6679 = cljs.core.count(c__4550__auto___6676);
var G__6680 = (0);
seq__6553_6661 = G__6677;
chunk__6554_6662 = G__6678;
count__6555_6663 = G__6679;
i__6556_6664 = G__6680;
continue;
} else {
var map__6563_6681 = cljs.core.first(seq__6553_6675__$1);
var map__6563_6682__$1 = (((((!((map__6563_6681 == null))))?(((((map__6563_6681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6563_6681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6563_6681):map__6563_6681);
var gline_6683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6563_6682__$1,cljs.core.cst$kw$gline);
var gcol_6684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6563_6682__$1,cljs.core.cst$kw$gcol);
var name_6685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6563_6682__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6683], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__6553_6661,chunk__6554_6662,count__6555_6663,i__6556_6664,seq__6516_6654,chunk__6517_6655,count__6518_6656,i__6519_6657,seq__6375_6647,chunk__6376_6648,count__6377_6649,i__6378_6650,map__6563_6681,map__6563_6682__$1,gline_6683,gcol_6684,name_6685,seq__6553_6675__$1,temp__5735__auto___6674,vec__6550_6658,column_6659,column_info_6660,vec__6513_6651,line_6652,columns_6653,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6684], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_6652,cljs.core.cst$kw$col,column_6659,cljs.core.cst$kw$name,name_6685], null));
});})(seq__6553_6661,chunk__6554_6662,count__6555_6663,i__6556_6664,seq__6516_6654,chunk__6517_6655,count__6518_6656,i__6519_6657,seq__6375_6647,chunk__6376_6648,count__6377_6649,i__6378_6650,map__6563_6681,map__6563_6682__$1,gline_6683,gcol_6684,name_6685,seq__6553_6675__$1,temp__5735__auto___6674,vec__6550_6658,column_6659,column_info_6660,vec__6513_6651,line_6652,columns_6653,inverted))
,cljs.core.sorted_map()));


var G__6686 = cljs.core.next(seq__6553_6675__$1);
var G__6687 = null;
var G__6688 = (0);
var G__6689 = (0);
seq__6553_6661 = G__6686;
chunk__6554_6662 = G__6687;
count__6555_6663 = G__6688;
i__6556_6664 = G__6689;
continue;
}
} else {
}
}
break;
}


var G__6690 = seq__6516_6654;
var G__6691 = chunk__6517_6655;
var G__6692 = count__6518_6656;
var G__6693 = (i__6519_6657 + (1));
seq__6516_6654 = G__6690;
chunk__6517_6655 = G__6691;
count__6518_6656 = G__6692;
i__6519_6657 = G__6693;
continue;
} else {
var temp__5735__auto___6694 = cljs.core.seq(seq__6516_6654);
if(temp__5735__auto___6694){
var seq__6516_6695__$1 = temp__5735__auto___6694;
if(cljs.core.chunked_seq_QMARK_(seq__6516_6695__$1)){
var c__4550__auto___6696 = cljs.core.chunk_first(seq__6516_6695__$1);
var G__6697 = cljs.core.chunk_rest(seq__6516_6695__$1);
var G__6698 = c__4550__auto___6696;
var G__6699 = cljs.core.count(c__4550__auto___6696);
var G__6700 = (0);
seq__6516_6654 = G__6697;
chunk__6517_6655 = G__6698;
count__6518_6656 = G__6699;
i__6519_6657 = G__6700;
continue;
} else {
var vec__6565_6701 = cljs.core.first(seq__6516_6695__$1);
var column_6702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6565_6701,(0),null);
var column_info_6703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6565_6701,(1),null);
var seq__6568_6704 = cljs.core.seq(column_info_6703);
var chunk__6569_6705 = null;
var count__6570_6706 = (0);
var i__6571_6707 = (0);
while(true){
if((i__6571_6707 < count__6570_6706)){
var map__6576_6708 = chunk__6569_6705.cljs$core$IIndexed$_nth$arity$2(null,i__6571_6707);
var map__6576_6709__$1 = (((((!((map__6576_6708 == null))))?(((((map__6576_6708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6576_6708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6576_6708):map__6576_6708);
var gline_6710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6576_6709__$1,cljs.core.cst$kw$gline);
var gcol_6711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6576_6709__$1,cljs.core.cst$kw$gcol);
var name_6712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6576_6709__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6710], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__6568_6704,chunk__6569_6705,count__6570_6706,i__6571_6707,seq__6516_6654,chunk__6517_6655,count__6518_6656,i__6519_6657,seq__6375_6647,chunk__6376_6648,count__6377_6649,i__6378_6650,map__6576_6708,map__6576_6709__$1,gline_6710,gcol_6711,name_6712,vec__6565_6701,column_6702,column_info_6703,seq__6516_6695__$1,temp__5735__auto___6694,vec__6513_6651,line_6652,columns_6653,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6711], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_6652,cljs.core.cst$kw$col,column_6702,cljs.core.cst$kw$name,name_6712], null));
});})(seq__6568_6704,chunk__6569_6705,count__6570_6706,i__6571_6707,seq__6516_6654,chunk__6517_6655,count__6518_6656,i__6519_6657,seq__6375_6647,chunk__6376_6648,count__6377_6649,i__6378_6650,map__6576_6708,map__6576_6709__$1,gline_6710,gcol_6711,name_6712,vec__6565_6701,column_6702,column_info_6703,seq__6516_6695__$1,temp__5735__auto___6694,vec__6513_6651,line_6652,columns_6653,inverted))
,cljs.core.sorted_map()));


var G__6713 = seq__6568_6704;
var G__6714 = chunk__6569_6705;
var G__6715 = count__6570_6706;
var G__6716 = (i__6571_6707 + (1));
seq__6568_6704 = G__6713;
chunk__6569_6705 = G__6714;
count__6570_6706 = G__6715;
i__6571_6707 = G__6716;
continue;
} else {
var temp__5735__auto___6717__$1 = cljs.core.seq(seq__6568_6704);
if(temp__5735__auto___6717__$1){
var seq__6568_6718__$1 = temp__5735__auto___6717__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6568_6718__$1)){
var c__4550__auto___6719 = cljs.core.chunk_first(seq__6568_6718__$1);
var G__6720 = cljs.core.chunk_rest(seq__6568_6718__$1);
var G__6721 = c__4550__auto___6719;
var G__6722 = cljs.core.count(c__4550__auto___6719);
var G__6723 = (0);
seq__6568_6704 = G__6720;
chunk__6569_6705 = G__6721;
count__6570_6706 = G__6722;
i__6571_6707 = G__6723;
continue;
} else {
var map__6578_6724 = cljs.core.first(seq__6568_6718__$1);
var map__6578_6725__$1 = (((((!((map__6578_6724 == null))))?(((((map__6578_6724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6578_6724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6578_6724):map__6578_6724);
var gline_6726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6578_6725__$1,cljs.core.cst$kw$gline);
var gcol_6727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6578_6725__$1,cljs.core.cst$kw$gcol);
var name_6728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6578_6725__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6726], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__6568_6704,chunk__6569_6705,count__6570_6706,i__6571_6707,seq__6516_6654,chunk__6517_6655,count__6518_6656,i__6519_6657,seq__6375_6647,chunk__6376_6648,count__6377_6649,i__6378_6650,map__6578_6724,map__6578_6725__$1,gline_6726,gcol_6727,name_6728,seq__6568_6718__$1,temp__5735__auto___6717__$1,vec__6565_6701,column_6702,column_info_6703,seq__6516_6695__$1,temp__5735__auto___6694,vec__6513_6651,line_6652,columns_6653,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6727], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_6652,cljs.core.cst$kw$col,column_6702,cljs.core.cst$kw$name,name_6728], null));
});})(seq__6568_6704,chunk__6569_6705,count__6570_6706,i__6571_6707,seq__6516_6654,chunk__6517_6655,count__6518_6656,i__6519_6657,seq__6375_6647,chunk__6376_6648,count__6377_6649,i__6378_6650,map__6578_6724,map__6578_6725__$1,gline_6726,gcol_6727,name_6728,seq__6568_6718__$1,temp__5735__auto___6717__$1,vec__6565_6701,column_6702,column_info_6703,seq__6516_6695__$1,temp__5735__auto___6694,vec__6513_6651,line_6652,columns_6653,inverted))
,cljs.core.sorted_map()));


var G__6729 = cljs.core.next(seq__6568_6718__$1);
var G__6730 = null;
var G__6731 = (0);
var G__6732 = (0);
seq__6568_6704 = G__6729;
chunk__6569_6705 = G__6730;
count__6570_6706 = G__6731;
i__6571_6707 = G__6732;
continue;
}
} else {
}
}
break;
}


var G__6733 = cljs.core.next(seq__6516_6695__$1);
var G__6734 = null;
var G__6735 = (0);
var G__6736 = (0);
seq__6516_6654 = G__6733;
chunk__6517_6655 = G__6734;
count__6518_6656 = G__6735;
i__6519_6657 = G__6736;
continue;
}
} else {
}
}
break;
}


var G__6737 = seq__6375_6647;
var G__6738 = chunk__6376_6648;
var G__6739 = count__6377_6649;
var G__6740 = (i__6378_6650 + (1));
seq__6375_6647 = G__6737;
chunk__6376_6648 = G__6738;
count__6377_6649 = G__6739;
i__6378_6650 = G__6740;
continue;
} else {
var temp__5735__auto___6741 = cljs.core.seq(seq__6375_6647);
if(temp__5735__auto___6741){
var seq__6375_6742__$1 = temp__5735__auto___6741;
if(cljs.core.chunked_seq_QMARK_(seq__6375_6742__$1)){
var c__4550__auto___6743 = cljs.core.chunk_first(seq__6375_6742__$1);
var G__6744 = cljs.core.chunk_rest(seq__6375_6742__$1);
var G__6745 = c__4550__auto___6743;
var G__6746 = cljs.core.count(c__4550__auto___6743);
var G__6747 = (0);
seq__6375_6647 = G__6744;
chunk__6376_6648 = G__6745;
count__6377_6649 = G__6746;
i__6378_6650 = G__6747;
continue;
} else {
var vec__6580_6748 = cljs.core.first(seq__6375_6742__$1);
var line_6749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6580_6748,(0),null);
var columns_6750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6580_6748,(1),null);
var seq__6583_6751 = cljs.core.seq(columns_6750);
var chunk__6584_6752 = null;
var count__6585_6753 = (0);
var i__6586_6754 = (0);
while(true){
if((i__6586_6754 < count__6585_6753)){
var vec__6617_6755 = chunk__6584_6752.cljs$core$IIndexed$_nth$arity$2(null,i__6586_6754);
var column_6756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6617_6755,(0),null);
var column_info_6757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6617_6755,(1),null);
var seq__6620_6758 = cljs.core.seq(column_info_6757);
var chunk__6621_6759 = null;
var count__6622_6760 = (0);
var i__6623_6761 = (0);
while(true){
if((i__6623_6761 < count__6622_6760)){
var map__6628_6762 = chunk__6621_6759.cljs$core$IIndexed$_nth$arity$2(null,i__6623_6761);
var map__6628_6763__$1 = (((((!((map__6628_6762 == null))))?(((((map__6628_6762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6628_6762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6628_6762):map__6628_6762);
var gline_6764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6628_6763__$1,cljs.core.cst$kw$gline);
var gcol_6765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6628_6763__$1,cljs.core.cst$kw$gcol);
var name_6766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6628_6763__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6764], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__6620_6758,chunk__6621_6759,count__6622_6760,i__6623_6761,seq__6583_6751,chunk__6584_6752,count__6585_6753,i__6586_6754,seq__6375_6647,chunk__6376_6648,count__6377_6649,i__6378_6650,map__6628_6762,map__6628_6763__$1,gline_6764,gcol_6765,name_6766,vec__6617_6755,column_6756,column_info_6757,vec__6580_6748,line_6749,columns_6750,seq__6375_6742__$1,temp__5735__auto___6741,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6765], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_6749,cljs.core.cst$kw$col,column_6756,cljs.core.cst$kw$name,name_6766], null));
});})(seq__6620_6758,chunk__6621_6759,count__6622_6760,i__6623_6761,seq__6583_6751,chunk__6584_6752,count__6585_6753,i__6586_6754,seq__6375_6647,chunk__6376_6648,count__6377_6649,i__6378_6650,map__6628_6762,map__6628_6763__$1,gline_6764,gcol_6765,name_6766,vec__6617_6755,column_6756,column_info_6757,vec__6580_6748,line_6749,columns_6750,seq__6375_6742__$1,temp__5735__auto___6741,inverted))
,cljs.core.sorted_map()));


var G__6767 = seq__6620_6758;
var G__6768 = chunk__6621_6759;
var G__6769 = count__6622_6760;
var G__6770 = (i__6623_6761 + (1));
seq__6620_6758 = G__6767;
chunk__6621_6759 = G__6768;
count__6622_6760 = G__6769;
i__6623_6761 = G__6770;
continue;
} else {
var temp__5735__auto___6771__$1 = cljs.core.seq(seq__6620_6758);
if(temp__5735__auto___6771__$1){
var seq__6620_6772__$1 = temp__5735__auto___6771__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6620_6772__$1)){
var c__4550__auto___6773 = cljs.core.chunk_first(seq__6620_6772__$1);
var G__6774 = cljs.core.chunk_rest(seq__6620_6772__$1);
var G__6775 = c__4550__auto___6773;
var G__6776 = cljs.core.count(c__4550__auto___6773);
var G__6777 = (0);
seq__6620_6758 = G__6774;
chunk__6621_6759 = G__6775;
count__6622_6760 = G__6776;
i__6623_6761 = G__6777;
continue;
} else {
var map__6630_6778 = cljs.core.first(seq__6620_6772__$1);
var map__6630_6779__$1 = (((((!((map__6630_6778 == null))))?(((((map__6630_6778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6630_6778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6630_6778):map__6630_6778);
var gline_6780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6630_6779__$1,cljs.core.cst$kw$gline);
var gcol_6781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6630_6779__$1,cljs.core.cst$kw$gcol);
var name_6782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6630_6779__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6780], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__6620_6758,chunk__6621_6759,count__6622_6760,i__6623_6761,seq__6583_6751,chunk__6584_6752,count__6585_6753,i__6586_6754,seq__6375_6647,chunk__6376_6648,count__6377_6649,i__6378_6650,map__6630_6778,map__6630_6779__$1,gline_6780,gcol_6781,name_6782,seq__6620_6772__$1,temp__5735__auto___6771__$1,vec__6617_6755,column_6756,column_info_6757,vec__6580_6748,line_6749,columns_6750,seq__6375_6742__$1,temp__5735__auto___6741,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6781], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_6749,cljs.core.cst$kw$col,column_6756,cljs.core.cst$kw$name,name_6782], null));
});})(seq__6620_6758,chunk__6621_6759,count__6622_6760,i__6623_6761,seq__6583_6751,chunk__6584_6752,count__6585_6753,i__6586_6754,seq__6375_6647,chunk__6376_6648,count__6377_6649,i__6378_6650,map__6630_6778,map__6630_6779__$1,gline_6780,gcol_6781,name_6782,seq__6620_6772__$1,temp__5735__auto___6771__$1,vec__6617_6755,column_6756,column_info_6757,vec__6580_6748,line_6749,columns_6750,seq__6375_6742__$1,temp__5735__auto___6741,inverted))
,cljs.core.sorted_map()));


var G__6783 = cljs.core.next(seq__6620_6772__$1);
var G__6784 = null;
var G__6785 = (0);
var G__6786 = (0);
seq__6620_6758 = G__6783;
chunk__6621_6759 = G__6784;
count__6622_6760 = G__6785;
i__6623_6761 = G__6786;
continue;
}
} else {
}
}
break;
}


var G__6787 = seq__6583_6751;
var G__6788 = chunk__6584_6752;
var G__6789 = count__6585_6753;
var G__6790 = (i__6586_6754 + (1));
seq__6583_6751 = G__6787;
chunk__6584_6752 = G__6788;
count__6585_6753 = G__6789;
i__6586_6754 = G__6790;
continue;
} else {
var temp__5735__auto___6791__$1 = cljs.core.seq(seq__6583_6751);
if(temp__5735__auto___6791__$1){
var seq__6583_6792__$1 = temp__5735__auto___6791__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6583_6792__$1)){
var c__4550__auto___6793 = cljs.core.chunk_first(seq__6583_6792__$1);
var G__6794 = cljs.core.chunk_rest(seq__6583_6792__$1);
var G__6795 = c__4550__auto___6793;
var G__6796 = cljs.core.count(c__4550__auto___6793);
var G__6797 = (0);
seq__6583_6751 = G__6794;
chunk__6584_6752 = G__6795;
count__6585_6753 = G__6796;
i__6586_6754 = G__6797;
continue;
} else {
var vec__6632_6798 = cljs.core.first(seq__6583_6792__$1);
var column_6799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6632_6798,(0),null);
var column_info_6800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6632_6798,(1),null);
var seq__6635_6801 = cljs.core.seq(column_info_6800);
var chunk__6636_6802 = null;
var count__6637_6803 = (0);
var i__6638_6804 = (0);
while(true){
if((i__6638_6804 < count__6637_6803)){
var map__6643_6805 = chunk__6636_6802.cljs$core$IIndexed$_nth$arity$2(null,i__6638_6804);
var map__6643_6806__$1 = (((((!((map__6643_6805 == null))))?(((((map__6643_6805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6643_6805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6643_6805):map__6643_6805);
var gline_6807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6643_6806__$1,cljs.core.cst$kw$gline);
var gcol_6808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6643_6806__$1,cljs.core.cst$kw$gcol);
var name_6809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6643_6806__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6807], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__6635_6801,chunk__6636_6802,count__6637_6803,i__6638_6804,seq__6583_6751,chunk__6584_6752,count__6585_6753,i__6586_6754,seq__6375_6647,chunk__6376_6648,count__6377_6649,i__6378_6650,map__6643_6805,map__6643_6806__$1,gline_6807,gcol_6808,name_6809,vec__6632_6798,column_6799,column_info_6800,seq__6583_6792__$1,temp__5735__auto___6791__$1,vec__6580_6748,line_6749,columns_6750,seq__6375_6742__$1,temp__5735__auto___6741,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6808], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_6749,cljs.core.cst$kw$col,column_6799,cljs.core.cst$kw$name,name_6809], null));
});})(seq__6635_6801,chunk__6636_6802,count__6637_6803,i__6638_6804,seq__6583_6751,chunk__6584_6752,count__6585_6753,i__6586_6754,seq__6375_6647,chunk__6376_6648,count__6377_6649,i__6378_6650,map__6643_6805,map__6643_6806__$1,gline_6807,gcol_6808,name_6809,vec__6632_6798,column_6799,column_info_6800,seq__6583_6792__$1,temp__5735__auto___6791__$1,vec__6580_6748,line_6749,columns_6750,seq__6375_6742__$1,temp__5735__auto___6741,inverted))
,cljs.core.sorted_map()));


var G__6810 = seq__6635_6801;
var G__6811 = chunk__6636_6802;
var G__6812 = count__6637_6803;
var G__6813 = (i__6638_6804 + (1));
seq__6635_6801 = G__6810;
chunk__6636_6802 = G__6811;
count__6637_6803 = G__6812;
i__6638_6804 = G__6813;
continue;
} else {
var temp__5735__auto___6814__$2 = cljs.core.seq(seq__6635_6801);
if(temp__5735__auto___6814__$2){
var seq__6635_6815__$1 = temp__5735__auto___6814__$2;
if(cljs.core.chunked_seq_QMARK_(seq__6635_6815__$1)){
var c__4550__auto___6816 = cljs.core.chunk_first(seq__6635_6815__$1);
var G__6817 = cljs.core.chunk_rest(seq__6635_6815__$1);
var G__6818 = c__4550__auto___6816;
var G__6819 = cljs.core.count(c__4550__auto___6816);
var G__6820 = (0);
seq__6635_6801 = G__6817;
chunk__6636_6802 = G__6818;
count__6637_6803 = G__6819;
i__6638_6804 = G__6820;
continue;
} else {
var map__6645_6821 = cljs.core.first(seq__6635_6815__$1);
var map__6645_6822__$1 = (((((!((map__6645_6821 == null))))?(((((map__6645_6821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6645_6821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6645_6821):map__6645_6821);
var gline_6823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6645_6822__$1,cljs.core.cst$kw$gline);
var gcol_6824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6645_6822__$1,cljs.core.cst$kw$gcol);
var name_6825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6645_6822__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6823], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__6635_6801,chunk__6636_6802,count__6637_6803,i__6638_6804,seq__6583_6751,chunk__6584_6752,count__6585_6753,i__6586_6754,seq__6375_6647,chunk__6376_6648,count__6377_6649,i__6378_6650,map__6645_6821,map__6645_6822__$1,gline_6823,gcol_6824,name_6825,seq__6635_6815__$1,temp__5735__auto___6814__$2,vec__6632_6798,column_6799,column_info_6800,seq__6583_6792__$1,temp__5735__auto___6791__$1,vec__6580_6748,line_6749,columns_6750,seq__6375_6742__$1,temp__5735__auto___6741,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_6824], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_6749,cljs.core.cst$kw$col,column_6799,cljs.core.cst$kw$name,name_6825], null));
});})(seq__6635_6801,chunk__6636_6802,count__6637_6803,i__6638_6804,seq__6583_6751,chunk__6584_6752,count__6585_6753,i__6586_6754,seq__6375_6647,chunk__6376_6648,count__6377_6649,i__6378_6650,map__6645_6821,map__6645_6822__$1,gline_6823,gcol_6824,name_6825,seq__6635_6815__$1,temp__5735__auto___6814__$2,vec__6632_6798,column_6799,column_info_6800,seq__6583_6792__$1,temp__5735__auto___6791__$1,vec__6580_6748,line_6749,columns_6750,seq__6375_6742__$1,temp__5735__auto___6741,inverted))
,cljs.core.sorted_map()));


var G__6826 = cljs.core.next(seq__6635_6815__$1);
var G__6827 = null;
var G__6828 = (0);
var G__6829 = (0);
seq__6635_6801 = G__6826;
chunk__6636_6802 = G__6827;
count__6637_6803 = G__6828;
i__6638_6804 = G__6829;
continue;
}
} else {
}
}
break;
}


var G__6830 = cljs.core.next(seq__6583_6792__$1);
var G__6831 = null;
var G__6832 = (0);
var G__6833 = (0);
seq__6583_6751 = G__6830;
chunk__6584_6752 = G__6831;
count__6585_6753 = G__6832;
i__6586_6754 = G__6833;
continue;
}
} else {
}
}
break;
}


var G__6834 = cljs.core.next(seq__6375_6742__$1);
var G__6835 = null;
var G__6836 = (0);
var G__6837 = (0);
seq__6375_6647 = G__6834;
chunk__6376_6648 = G__6835;
count__6377_6649 = G__6836;
i__6378_6650 = G__6837;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});
