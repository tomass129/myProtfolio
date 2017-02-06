(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



// stage content:
(lib.mobileDisplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPCCIAAgKQANAAAHgGQAGgEAAgHQAAgGgTgaIglg4IgpA4QgTAZAAAFQAAAHAGAGQAGAFANABIAAAKIhVAAIAAgKQALgCAHgGQALgIAZghIA3hIIgxhHQgVgfgMgHQgLgIgSAAIAAgLIB6AAIAAALQgLAAgFAEQgEAEAAAGQAAAHAJAOIAKAOIARAeIAVgeQAVgcAAgHQAAgGgFgEQgFgEgLAAIAAgLIBYAAIAAALQgOABgKAGQgOAKgYAgIgjAwIBABcQAYAiAKAHQALAHAQABIAAAKg");
	this.shape.setTransform(342.3,1860.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiHDEIAAgLIAHAAQAPAAALgGQAGgDADgHQADgHAAgcIAAj0QAAgZgCgIQgDgGgFgEQgEgDgJAAQgGAAgLAEIgEgJIBQggIALAAIAAA8QAUgiAVgOQATgOAWAAQAnAAAaAfQAgAlAAA9QAABCgnArQgfAlgwgBQgUABgQgHQgLgEgOgNIAABPQAAAbAEAHQACAHAJAFQAHAEAVAAIAAALgAgJiSQgKAEgYAaIAABhQAAAeADAKQADAQAQANQAQAMAWAAQAdAAARgVQAXgdAAg0QAAg7gbghQgRgVgagBQgNAAgMAIg");
	this.shape_1.setTransform(312.2,1866.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhcCHQgfg3AAhNQAAhBAUgvQATgwAhgXQAagTAaAAQAsAAAjAtQAsA5AABfQAABBgTAvQgTAvgeAWQgeAUgbABQg3gBgkhAgAghiiQgUAXgHAzQgIAyAAAwQAABPAUAyQAQAqAgABQAOAAARgOQAQgOAJghQANgwAAhYQAAhCgOgrQgKghgQgNQgMgKgQAAQgTAAgPASg");
	this.shape_2.setTransform(284.3,1854.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah+DEIAAgLQBkhaAog6QApg5AAgwQAAgkgXgYQgWgYgeABQgcAAgXAQQgXAQgKAgIgLAAQAHg0AegcQAdgcAsAAQAuAAAfAeQAfAeAAApQAAAdgNAdQgVAtgvAzQhGBNgRAQIBjAAQAeAAANgCQAMgCAKgHQAKgHAHgNIALAAIgbBKg");
	this.shape_3.setTransform(254.7,1854.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhxDIIAAgLQAmAAAfgRQAggQAdgpQAdgqALgxQgsAcgjAAQgpAAgcgfQgdgeAAg1QAAgxAdgoQAjgwA4AAQAuAAAiAnQApAwAABIQAAA+gfA4QggA3g4AlQgtAeg2AAgAgzieQgSAXgBAsQAAA8AaAhQASAYAaAAQANAAARgGQATgGANgMQAGgjgBgXQAAgbgJggQgJgggSgRQgQgQgWgBQgYAAgUAXg");
	this.shape_4.setTransform(226.2,1854.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhEDEIAAgLQAcAAAHgEQAIgEAEgHQADgHAAgjIAAjOQAAgqgDgMQgDgJgEgEQgGgEgHgBQgKAAgUAJIgDgJIBcgtIAJAAIAAFDQABAgACAJQACAIAJAEQAJAEAZAAIAAALg");
	this.shape_5.setTransform(197.2,1854.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPCCIAAgKQANAAAHgGQAGgEAAgHQAAgGgTgaIglg4IgpA4QgTAZAAAFQAAAHAGAGQAGAFANABIAAAKIhVAAIAAgKQALgCAHgGQALgIAZghIA3hIIgxhHQgVgfgMgHQgLgIgSAAIAAgLIB6AAIAAALQgLAAgFAEQgEAEAAAGQAAAHAJAOIAKAOIARAeIAVgeQAVgcAAgHQAAgGgFgEQgFgEgLAAIAAgLIBYAAIAAALQgOABgKAGQgOAKgYAgIgjAwIBABcQAYAiAKAHQALAHAQABIAAAKg");
	this.shape_6.setTransform(168.3,1860.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhcCHQgfg3AAhNQAAhBAUgvQATgwAhgXQAagTAaAAQAsAAAjAtQAsA5AABfQAABBgTAvQgTAvgeAWQgeAUgbABQg3gBgkhAgAghiiQgUAXgHAzQgIAyAAAwQAABPAUAyQAQAqAgABQAOAAARgOQAQgOAJghQANgwAAhYQAAhCgOgrQgKghgQgNQgMgKgQAAQgTAAgPASg");
	this.shape_7.setTransform(139.3,1854.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhVClQgZgcAAggQAAgZASgZQARgaAqgdQgugmgNgWQgNgWAAgZQAAgmAdgaQAcgcAwAAQAuAAAcAaQAcAZAAAgQAAAWgPAWQgPAXgxAeQAyAlAQAWQAWAeAAAfQAAApgfAdQgfAdgxAAQg3gBgegigAg3A1QgLAYAAAaQAAAlAUAWQAUAWAdAAQAfAAASgSQATgQAAgZQAAgUgLgQQgUgfg8gwQgYATgLAYgAguimQgSARAAAXQAAAOAHAPQAIAPAOANIAtAnQAigfAJgRQAJgSAAgXQAAgegRgQQgQgRgdAAQgcAAgSAQg");
	this.shape_8.setTransform(110.4,1854.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhcCHQgfg3AAhNQAAhBAUgvQATgwAhgXQAagTAaAAQAsAAAjAtQAsA5AABfQAABBgTAvQgTAvgeAWQgeAUgbABQg3gBgkhAgAghiiQgUAXgHAzQgIAyAAAwQAABPAUAyQAQAqAgABQAOAAARgOQAQgOAJghQANgwAAhYQAAhCgOgrQgKghgQgNQgMgKgQAAQgTAAgPASg");
	this.shape_9.setTransform(81.3,1854.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhEDEIAAgLQAcAAAHgEQAJgEACgHQAEgHAAgjIAAjOQAAgqgEgMQgCgJgEgEQgGgEgHgBQgLAAgTAJIgDgJIBcgtIAJAAIAAFDQABAgACAJQACAIAJAEQAJAEAZAAIAAALg");
	this.shape_10.setTransform(52.2,1854.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPCCIAAgKQANAAAHgGQAGgEAAgHQAAgGgTgaIglg4IgpA4QgTAZAAAFQAAAHAGAGQAGAFANABIAAAKIhVAAIAAgKQALgCAHgGQALgIAZghIA3hIIgxhHQgVgfgMgHQgLgIgSAAIAAgLIB6AAIAAALQgLAAgFAEQgEAEAAAGQAAAHAJAOIAKAOIARAeIAVgeQAVgcAAgHQAAgGgFgEQgFgEgLAAIAAgLIBYAAIAAALQgOABgKAGQgOAKgYAgIgjAwIBABcQAYAiAKAHQALAHAQABIAAAKg");
	this.shape_11.setTransform(313.3,1711.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiHDEIAAgLIAHAAQAPABAMgHQAFgDADgHQADgHAAgcIAAj1QAAgYgCgHQgDgHgFgDQgEgEgJAAQgGAAgLAEIgEgJIBQghIALAAIAAA9QAUgiAVgNQASgOAXgBQAnABAaAeQAgAmAAA7QAABDgnAsQgfAjgwABQgUgBgQgGQgLgEgOgNIAABQQAAAaAEAIQADAGAIAFQAHAEAVAAIAAALgAgJiTQgKAFgYAaIAABgQAAAfADAKQADAQAQANQAPANAXAAQAcAAASgXQAXgcAAg0QAAg8gaggQgTgWgYABQgOAAgMAGg");
	this.shape_12.setTransform(283.2,1717.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhcCGQgfg2AAhNQAAhBAUgvQATgwAhgXQAagTAaAAQAsABAjAsQAsA4AABgQAABBgTAwQgTAugeAVQgeAVgbAAQg3AAgkhBgAghijQgUAYgHAyQgIAzAAAwQAABPAUAzQAQAqAgAAQAOgBARgNQAQgOAJggQANgxAAhXQAAhCgOgtQgKgggQgOQgMgJgQAAQgTAAgPARg");
	this.shape_13.setTransform(255.3,1705.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhcCGQgfg2AAhNQAAhBAUgvQATgwAhgXQAagTAaAAQAsABAjAsQAsA4AABgQAABBgTAwQgTAugeAVQgeAVgbAAQg3AAgkhBgAghijQgUAYgHAyQgIAzAAAwQAABPAUAzQAQAqAgAAQAOgBARgNQAQgOAJggQANgxAAhXQAAhCgOgtQgKgggQgOQgMgJgQAAQgTAAgPARg");
	this.shape_14.setTransform(226.3,1705.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhVClQgZgcAAggQAAgZASgaQARgYAqgeQguglgNgXQgNgXAAgYQAAgmAdgbQAcgbAwAAQAuABAcAZQAcAZAAAgQAAAWgPAWQgPAWgxAfQAyAlAQAXQAWAcAAAhQAAAogfAcQgfAdgxAAQg3AAgegigAg3A1QgLAXAAAcQAAAkAUAWQAUAWAdAAQAfAAASgRQATgRAAgZQAAgVgLgQQgUgdg8gxQgYATgLAYgAguilQgSAQAAAXQAAAPAHAOQAIAPAOAOIAtAmQAigfAJgSQAJgRAAgXQAAgdgRgRQgQgRgdAAQgcAAgSARg");
	this.shape_15.setTransform(197.4,1705.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAPCCIAAgKQANAAAHgGQAGgEAAgHQAAgGgTgaIglg4IgpA4QgTAZAAAFQAAAHAGAGQAGAFANABIAAAKIhVAAIAAgKQALgCAHgGQALgIAZghIA3hIIgxhHQgVgfgMgHQgLgIgSAAIAAgLIB6AAIAAALQgLAAgFAEQgEAEAAAGQAAAHAJAOIAKAOIARAeIAVgeQAVgcAAgHQAAgGgFgEQgFgEgLAAIAAgLIBYAAIAAALQgOABgKAGQgOAKgYAgIgjAwIBABcQAYAiAKAHQALAHAQABIAAAKg");
	this.shape_16.setTransform(168.3,1711.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhcCGQgfg2AAhNQAAhBAUgvQATgwAhgXQAagTAaAAQAsABAjAsQAsA4AABgQAABBgTAwQgTAugeAVQgeAVgbAAQg3AAgkhBgAghijQgUAYgHAyQgIAzAAAwQAABPAUAzQAQAqAgAAQAOgBARgNQAQgOAJggQANgxAAhXQAAhCgOgtQgKgggQgOQgMgJgQAAQgTAAgPARg");
	this.shape_17.setTransform(139.3,1705.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhVClQgZgcAAggQAAgZASgaQARgYAqgeQguglgNgXQgNgXAAgYQAAgmAdgbQAcgbAwAAQAuABAcAZQAcAZAAAgQAAAWgPAWQgPAWgxAfQAyAlAQAXQAWAcAAAhQAAAogfAcQgfAdgxAAQg3AAgegigAg3A1QgLAXAAAcQAAAkAUAWQAUAWAdAAQAfAAASgRQATgRAAgZQAAgVgLgQQgUgdg8gxQgYATgLAYgAguilQgSAQAAAXQAAAPAHAOQAIAPAOAOIAtAmQAigfAJgSQAJgRAAgXQAAgdgRgRQgQgRgdAAQgcAAgSARg");
	this.shape_18.setTransform(110.4,1705.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhcCGQgfg2AAhNQAAhBAUgvQATgwAhgXQAagTAaAAQAsABAjAsQAsA4AABgQAABBgTAwQgTAugeAVQgeAVgbAAQg3AAgkhBgAghijQgUAYgHAyQgIAzAAAwQAABPAUAzQAQAqAgAAQAOgBARgNQAQgOAJggQANgxAAhXQAAhCgOgtQgKgggQgOQgMgJgQAAQgTAAgPARg");
	this.shape_19.setTransform(81.3,1705.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhEDEIAAgLQAcAAAHgEQAJgFACgGQAEgHAAgiIAAjPQAAgqgEgMQgCgJgEgEQgGgFgHABQgLgBgTAKIgDgJIBcguIAJAAIAAFEQABAgACAHQACAJAJADQAJAFAZAAIAAALg");
	this.shape_20.setTransform(52.2,1705.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000099").s().p("EhUXCMoMAAAkZPMCovAAAMAAAEZPg");
	this.shape_21.setTransform(540,900);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0033FF").s().p("EhUXCWAMAAAkr/MCovAAAMAAAEr/g");
	this.shape_22.setTransform(540,960);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(540,960,1080,1920);
// library properties:
lib.properties = {
	width: 1080,
	height: 1920,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;