define("c1",{name:"c1"}),define("c1/sub",{name:"c1/sub"}),define("a",["c","c/sub"],function(e,t){return{c:e,csub:t}}),define("another/minor",{name:"another/minor"}),define("another/c",["./minor"],function(e){return{name:"another/c",minorName:e.name}}),define("another/c/dim",{name:"another/c/dim"}),define("another/c/sub",["./dim"],function(e){return{name:"another/c/sub",dimName:e.name}}),define("b",["c","c/sub"],function(e,t){return{c:e,csub:t}}),define("c2",{name:"c2"}),define("a/sub/one",["c","c/sub"],function(e,t){return{c:e,csub:t}}),require({baseUrl:"./",paths:{a:"a1"},map:{"*":{c:"another/c"},a:{c:"c1"},"a/sub/one":{c:"c2","c/sub":"another/c/sub"}}},["a","b","c","a/sub/one"],function(e,t,n,r){doh.register("mapConfigStar",[function(s){s.is("c1",e.c.name),s.is("c1/sub",e.csub.name),s.is("c2",r.c.name),s.is("another/c/sub",r.csub.name),s.is("another/c/dim",r.csub.dimName),s.is("another/c",t.c.name),s.is("another/minor",t.c.minorName),s.is("another/c/sub",t.csub.name),s.is("another/c",n.name),s.is("another/minor",n.minorName)}]),doh.run()}),define("mapConfigStar-tests",[],function(){});