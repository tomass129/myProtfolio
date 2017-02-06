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
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ADLBkQgXgTgKgfIgEgSQAHAAAFgDQADgCAHgJQAFgHAFgBIAJgCIAEgBQArABAdAGIATAFQgBADABADQACAEAHAHIAHAMIABABIgvgCIgegJQgQgEgNAFIABAGQATAAAPAFIAWAHIA7ADQALAAAEABIAOADQAGABAEgCQAGADALgCQAHAAABgDIACgDQAIgDAFgFQAJgIAFgRQAFgQAEgPQgBAXgEAOQgCAJgHATIgKAYQgEAKgGAIQgLAPgYAGQgVAGgiAAQhHAAghgcgAEKBsQAVABArAGIAXABQAKAAAEgCQACgDAAgEQAAgEgDgBIghACQgPAAgTgDIgpgGQgNgCgHAEIACAFIAEAAQAMAAAKAGgAj3B/QgPAAgHgDIgGgEIgSgHQgPgGgLgBQgBAFgEgBQAAAEAJACQAMADAKAGIADACQgdgCgUgGQgxgPgTgmIgIgPIgMgOQgDgGAAgJIABgQIgBgVQgBgOADgJQADgLALgLQANgNAPgGQAOgFAdgEQAcgEAVgCIAcgBIANAAQAjABAbAKIAFACIACAGQADAHgBAFIAHgBQACgEAAgGQAGAEAFAFQAMANAEAYIAAACQABAGAAAbQgPgDgKAEIACAGQAKgBANADIAAAQQgNAAgTgCIghgEQgQgBgeAAQAAgJAEgMIAFgOIALAAIAfgEIALgBQALgDACgBIgCgFQgPgCgbACIgTACQAFgdgNgOQgLgNgagBQgWgCgZAHQgcAIgIAQQgEAGgFAPIgIAMIgIAMQgEAHAAAUQgBAMADAGQAEAGANAHIAWAIQAHAMgBAEQASACANgBIACgIQATABASgDQATgEAGgLQACgEABgIIAAgIIA2ACIABAEIAxABIAHgBIgBAYQgDAUgKANQgOATgcAIQgPAFgfABgAkCBMQADACAHAAQAHABACADIAlAEIABADIAeABQAHAAACgDIgCgFQgHAAgjgGIgYgEQgQgDgJgBQgBAEgEgBgACkAHIATgBIgGAIQgEAEgIABIgBgMgAEgAFQgggHg9ACIgfAAQABgOACgHIAAgBQADgLAHgMQAGgLAIgMIAHgLIAJgKIAAAmQAEACADgFIACgEQAPAGAQADQAQADAgACIAXABIgCAPIgBALQgBAHgCAFIgIAOIgQgEgAEdg2QgLgBgRgEIgcgFQgJgCgEADIAAgkIACgCQARgOAegHQASgEAXgBIACAAQA/gCAkAWQALAGADAIIACAHQgGgDgLgCQgagFgaAFQgQADgIAJQgDAEgFAOIgBAFIgcACIgIAAg");
	this.shape.setTransform(-0.1,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003333").s().p("AlRBRQAMgngHgfQgDgJgBgFIgBgLQAAgHgCgEQgGgLgPgEQgHADgDAGQgDAGABAHQgKACgJAFQgDAhAFASIAGATIAGAMIABACIgWgJQgNgGgEgGQgDgHABgMQAAgTAEgJIAIgLIAIgMQAFgOAEgHQAIgQAcgIQAZgGAWABQAaABALANQANAPgFAdIgWAAIgagDQgQgCgKAEIACAFIAoAEQAQACANAAIgFAPQgEAMAAAJIgLAAQgNAAgGADIACAFIAcABIAAAIQgBAHgCAFQgGAKgTAEQgMADgNAAIgMgBgAlrBEIABgPIgFgOQgCgGAAgKIAAgQIAFAEIAEAJIACAJIAFALQACAHgCAPQAAANgBACIgBAAQgFAAgDgJgAF7BAIAEgKQADgGAAgMQAAgQgCgIQgFgMgBgFIABgSQABgMgIgFQgFgCgFACQgGADgDAFIgIAXIgBAOIAAAzQAAAHABAFQgKgGgUAAIgMgBIgBgBIgHgLQgHgHgCgFQgBgCABgDIAcAJQAKAEADgEQgCgGgMgFIgZgIIAIgQQACgEABgGIABgMIACgOQARAAALgDQAJgDAHgDIgCgGQgNAAgZACIgBAAIABgFQAFgOADgFQAIgIAQgDQAagFAaAEQALACAGAEQAEACACADQAEAGABANQABAdgEAaQgEAQgFAPQgFARgJAJQgFAEgIADIAAgGgAlXAyIAAgLIgGgOIgCgKIgGgLIgFgLQgDgKAGgJQACgDADAAQACABAAAHIAEAGQACADAAAGQgBAGABACIAEAHQACAFAAAMIgBAiQgDgDABgHgAFoAlQgBgGACgDIAEgHIABgJIAAgkQADAAAAAFIAAAsIgBAIIgEAGQgCADABADIgDACIAAgKgAl+AbIAAgeIAEAAIAAAiQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgCgCAAgFgAFhAPIAAgPQAAgBAAgBQAAAAABgBQAAgBAAAAQAAAAABgBIABACIABACIAAAEQAAAIgCAEg");
	this.shape_1.setTransform(1.5,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF66").s().p("AhuBNIgDgBIAjABQAKABAFgDQADgCABgEQACgEgCgDQgIACgRAAIgVABIgHAAIgFgCQgHgDgHABIgBACQgSgMgGgKQgDgGgCgKQALADAOACQALACAiABIACAEIARABQAKABAFgDIgBgGIgCAAQAFgIAAgNQgCgSAAgJIACgQIAAgHIATACQAHAFAEAFIADAEQAGAKABAZQAAAZgFAJQgEAGgNAMIgRAMIgHAEIgIADQgIACgIAAQgMAAgNgGgABTA8IgCgBQgGgDgNgIIgGgDIAAgBIgEgNIBQACIACADQAQADAQgDIgCgGQgGABgKgDIgQgEIgNgBIhDgBIgCAAIgFgSIgCgEQAIAAAGAEQAjAFAjgIQARgCAJgIIgCgFIgOgBQgbAJgYACIgSAAIgQgEQgGgBgEABQgFgUADgQIACAAIABABQAcAOAQgBIACAEIA2ABQAIAAACgDIgCgFQgggBgQgCIgPgDIgfgJIAMgFQATgGAJgMQADgFACgGQALAEAMAIIADACQAcAUAJAcQADANABAZQABAZgIAJQgDAEgFACQgLAFgSAAIgKAAQgVAAgLgDgAArAmIgKgEQgFgCgDgEQgCgDgBgHIgBgLIgDgNIgEgOIAAgJQAAgFADgGIAMgBIgBABQgCAaANAmIgDABIACAFIAEAAIAAADIACAGIgBgBgAheAZQgRgDgSgBIgRgDIgSgHIgDgYQgDgRAFgKQAGgNAWgEIAHgBIABAAIAGACQAcAJAaAEQAGAIgCAVQgDAVAFAWgAhxgLIgdACQgJAAgEADIACAFIAoABIAIAAIAEgCIAKgDQAGgBACgDIgCgFIgUgBQgBADgHABg");
	this.shape_2.setTransform(1.5,6.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660066").s().p("Ah5C0IAAAAIgagIIgDgBQAAgcgBgGIAAgBIASABQASABAPgDQAPgDAVgKIAGgDIAIgDIAHgDIAPgGQAYgHAwgBIAPAAQAAAKgGAIQAGAGAIgBQADgKgBgOIAZAAQANAFAdgBQARAAAMgFIAUAAQgIALgFALQgIAMgDALIiKADQgWAAgIACQgNADgVALQgWAMgLADQgOAFgVAAIgMgBgAknAhQACgIANgiIAMgcQAHgQAIgJQAKgLAQgIIAdgLQAEgPAKgLQAPgSAkgPIACAEQACAFgDAPIAAAEQgNABgMAIQAFAIgKAIIgHAFQgEADgCADQgDAFgCALIgCATQAOAKAWAGIAHACIAEAGQAGAFALAEIgCAAIgHABIgSgGQgbgKgNgNQgIAHgGACIgOADQgIABgFADQgFAEgFAOIgIAbIgEgCIgJgCIgKAAQgBADgEAAIABAFIAPADIAEABIACACIADABIgBADQgIAYgCASIgOgBIgcACQACgYADgOgAEDAfIABgbQAAghgPgQQgLgLgXgHQgBgOgCgHIgHACIAAAPIgNgDIACgEQAEgJgGgQQgIgZgOgMQgQgMgUABQABAGAHAEIAMAGQAOAGAIAOQAJANgCAPQgOAQgjAAIgQAAIgCgLQgCgQgJgCQgHgDgNAJQgXANglAEIgNABIgngBIgCAAQgrgDgpgRQgMgFgGADQgGADgDAQQgBARACAMQgSgHgMgIQAJgHgCgKQAGAAAFgKQAIgNACgCIAKgIIAEgDQABAEAFACQAAgFAFgQQAFgNgDgIIgDgFQA/gWBAgCQBJgBBCAXQAbALAJAPQAEAHABAJIAXAGQAmALARAMQAbAVAHAiQACALAAAPIAAAZIABATQgYABgSAEIAAgMgAgOAIQgFgFgGgDQAbABAagCQgDAEAAAGIgRABIgWgCgABxgrIABgLIAYgBQARgBAKgCIABAAQgNAOgRAMQgNgIgKgDg");
	this.shape_3.setTransform(0.5,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkiFFQAAgDgEgCIgGgBIgDgBIgCgCQgLgGgLgDQgKgDAAgDQAEAAACgEQALABAPAFIASAIIAGADQAGAEAPAAIAAABIACAEQgBADgHAAgAE+EyQgrgGgWgBQgLgHgPABIgBgGQAGgEANACIApAHQAUADAOAAIAigCQADABAAAEQAAAEgDACQgEADgJAAIgXgBgAjVEYIgCgEIglgDQgCgEgHgBQgGAAgEgBIgCgFQAEABABgEQAJAAAQAEIAYADQAjAHAHAAIACAFQgBADgIAAgAlvELQABgFgHgLIgBgCIgFgLIgHgUQgEgSADgiQAIgFAKgCQgBgGAEgGQADgHAGgCQAQADAFALQACAFABAGIABALQAAAGADAKQAIAegMAnIgDAIIgLABIgUgBgAltDKQgBAKACAFIAFAOIAAAPQACAKAGAAQACgDAAgNQABgOgCgIIgEgKIgDgJIgDgJIgFgFIAAARgAlkCXQgFAJADAKIAFAMIAFALIADAKIAFAOIAAAMQAAAGADAEIABgjQAAgLgDgGIgDgGQgBgDABgHQAAgGgCgDIgFgGQAAgGgCgCIAAAAQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAgBABgAl6DNQAAAFABACQABAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBIAAgjIgDAAgAFjD+QgEACgGgBIgNgDQgFgCgLAAIg6gCIgXgIQgPgEgSAAIgCgGQANgGARAFIAdAJIAwABIALABQAUAAALAHQgCgFAAgHIAAgzIABgQIAJgXQADgFAFgCQAGgDAFADQAIAEgBAMIgBATQABAFAEAMQACAIAAAQQAAAMgCAGIgEAKIgBAGIgBADQgCAEgGAAIgHAAQgHAAgEgBgAFyC/IgBAJIgFAGQgBADAAAGIAAAKIADgCQgBgDADgDIAEgGIABgIIAAgtQAAgFgDAAgAFlCxIAAAQIABAAQADgDAAgJIgBgFIAAgCIgCgBQAAAAAAAAQgBABAAAAQAAABAAAAQAAABAAABgAjVDlIgCgEIg2gCIgcgBIgBgFQAGgDANAAIAKAAQAeAAAQACIAhAEQAUACANAAIABAFIgBACIgIABgAh4DaIgegKIgHgCQgOgDgKAAIgCgGQALgEAPADIADABIAaAIIABAAIACABQAfAJAhgEQgBgGACgEQABgGAFgDQAEgEALgCQAvgGAogEQANgBAGADIAJAIIAJAGQADADACAGQADADAIABIAkAFQAJABAGgBQAIgBAFgEIAGgIIgTAAIgIAAIgCgHIAKAAIAeAAQA9gDAhAIIAQAFIAZAJQAMAEABAGQgCAEgKgDIgdgKIgTgFQgdgGgqgCIgFACIgJACQgFABgFAHQgGAJgDACQgFADgHAAIgDAAIgQgDQgNgCgTgBQgMgBgEgCQgFgBgCgEQgDgEACgEQgJAAgDgHQgBgEgCgCQgCgCgFABIhiAOQgIABgCADQgBACAAAFQABAFgBACQgCAFgKgBQgkABgUgGgAkECyQgMAAgQgDIgpgEIgBgFQAKgEAPACIAaADIAWAAIAUgCQAbgCAOACIACAEQgCACgLADIgLABIgeADIgMAAgAAvCOQAFgHABgLIgBgEIgEgRIgCgHIAAgCIgEAAIgCgFIADgCQgNgnACgZIABgBIgMABQgZADgcgCIgTgCIAAAHIgCAPQAAAJACAUQAAANgFAIIACAAIABAGQgFADgKgBIgRgBIgCgEQgigBgLgCQgOgCgLgEIgFgBQgEgGAEgHIACABIASAHIARADQASABARADIAfAEQgFgWADgWQACgVgGgIQgagFgcgIIgGgCQgLgEgFgEIgEgGIgHgCQgXgGgOgKIADgTQABgLADgEQACgEAEgCIAIgGQAKgIgGgHQAMgJANAAIAAgFQADgOgCgGIgCgEQgHgFgSgBQgYgCgFgJQgDgHAFgRQAFgTgCgpQgogKgTgIQgPgHgOgLIgDALQgCAFgDACQgEABgFgCIgJgDIgMgBQgGgBgEgEQgDgCgBgIQgEgeAFgUQACgKAHAAIAGACQADABAHABIAKACQAJAEAGAMQADAJAAANIAAAGQAFAEAKAFQAmAWAWACQANABAEAEQADAEAAAMIABAxQAAAQgHAGQAGADAKACIARADQATACAHAKIACAEQADAIgEANQgGAQAAAFQgEgBgCgFIgDAEIgLAHQgCACgHANQgGAKgGAAQACALgIAGQALAJASAGQgCgMACgRQACgQAHgDQAFgCAMAEQApARArADIACAAIAoABIAMgBQAlgEAXgNQANgIAHACQAJACADARIABALIAQgBQAjAAAPgQQABgPgJgNQgIgNgOgHIgMgGQgHgEgBgFQAVgCAPAMQAOAMAIAZQAGAQgEAJIgCAEQgGAJgQAEIgBAAQgKACgRAAIgXABIgCALQgCAGgDAFQgJALgTAGIgMAEIAfAKIAPACQAQADAgABIACAFQgCADgIAAIg2gBIgCgEQgQABgcgOIgBgBIgCAAQgDAQAFAUQAEgBAGABIAQADIASAAQAYgBAbgJIAOABIACAFQgJAIgRADQgjAIgjgFQgGgEgIgCIACAGIAFASIACAAIBDABIANABIAQAEQAKACAGAAIACAGQgQADgQgDIgCgDIhQgDIAEANIAAACIACAOQABAOgDALIgCAAQgGAAgFgGgAEbCSQghgCgQgEQgPgDgQgFIgBAEQgDAFgFgCIAAgmIAAiOIAAgQIAHgBQACAGABAOIAAAFIgBB8IAAAkQAFgDAIABIAcAGQARADALACQAMABAZgDIABAAQAZgCANAAIABAGQgHAEgJACQgLADgQAAIgXgBgAhKCMIgjgBIgIAAQgCgFgLgCIgCgEQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAIABgCQAHgBAHADIAFACIAHAAIAVgBQARAAAIgCQACADgCAEQgBAEgDACQgEACgGAAIgFgBgAjEByIgDgGIgCgGQgCgGABgKIABgQQAAgIgDgLIgDgMQgDgRACgiIAGgCQAEAHAAALIgBATQABAIAEAPQACAHgBAQQAAAQACAJIAFAQIABAFQAAAFgDAEIgHACQABgFgCgHgAiVA+IgCgFQAEgEAJAAIAdgCQAHgBABgCIAUABIACAFQgCADgGABIgKACIgEADIgIABgAjkA5IgHgBIgDgBIgDgCIgEgCIgIgBIgBAAIgDgBIgCgCIgDgBIgPgDIgCgFQAEAAABgDIAKAAIAJACIAEACIAGACIAKACIAGAEIAGACQAEACgBADQAAADgFAAIgDAAgADqAfIgUgBIgBgFIAFgCIAAgBIAUABIACAGIgDACg");
	this.shape_4.setTransform(1.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-43.2,-32.6,86.6,65.2), null);


(lib.RealBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9901").s("#000099").ss(2,1,1).rr(-60,-16,120,32,4);
	this.shape.setTransform(0,0,1,1.027,0,13.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC028").s("#000067").ss(3,1,1).rr(-60,-16,120,32,4);
	this.shape_1.setTransform(0,0,1,1.027,0,13.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF660A").s("#000099").ss(2,1,1).rr(-60,-16,120,32,4);
	this.shape_2.setTransform(0,0,1,1.027,0,13.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-17,128,34);


(lib.ProtoBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Text
	this.btnLabel = new cjs.Text("", "italic bold 16px 'Arial'", "#003366");
	this.btnLabel.name = "btnLabel";
	this.btnLabel.textAlign = "center";
	this.btnLabel.lineHeight = 20;
	this.btnLabel.parent = this;
	this.btnLabel.setTransform(1.1,-7);

	this.timeline.addTween(cjs.Tween.get(this.btnLabel).wait(1));

	// Skin
	this.instance = new lib.RealBtn();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.111,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ProtoBtn, new cjs.Rectangle(-71.6,-17.6,143.3,35.2), null);


// stage content:
(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Stage1:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var stageHeight = stage.canvas.height;
		var stageWidth = stage.canvas.width;
		var isPlaying = false;
		
		this.playBtn.addEventListener("click", playClicked.bind(this));
		function playClicked() {
			this.gotoAndPlay("Stage1");
			isPlaying = true;
		}
		
		            function tick(event) {
		                if (key.isPressed('up') || key.isPressed('w')) {
		                    this.gotoAndPlay("Stage1");
		                }
		                if (key.isPressed('down') || key.isPressed('s')) {
		                    myActor.moveDown(event.delta);
		                }
		                if (key.isPressed('left') || key.isPressed('a')) {
		                    myActor.moveLeft(event.delta);
		                }
		                if (key.isPressed('right') || key.isPressed('d')) {
		                    myActor.moveRight(event.delta);
		                }
		            }
	}
	this.frame_26 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(26).call(this.frame_26).wait(1));

	// Car
	this.myCar = new lib.Symbol1();
	this.myCar.parent = this;
	this.myCar.setTransform(600,179.2);

	this.timeline.addTween(cjs.Tween.get(this.myCar).wait(1).to({scaleX:0.98,scaleY:0.98,x:578.7,y:164.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:556.9,y:150.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:534.6,y:136.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:512,y:123.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:488.9,y:111.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:465.4,y:100.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:441.4,y:90.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:417,y:81.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:392,y:73.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:366.5,y:68.5},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:340.6,y:65.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:314.6,y:66.6},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:289.2,y:72.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:257.6,y:85},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:231.1,y:105.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:241.1,y:134.3},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:273.6,y:144.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:307.6,y:142.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:344.4,y:138.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:381.5,y:138.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:418.4,y:142.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:455.2,y:147.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:491.7,y:153.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:528.1,y:161.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:564.2,y:169.6},0).wait(1).to({scaleX:1,scaleY:1,x:600,y:179.2},0).wait(1));

	// Nav
	this.playBtn = new lib.ProtoBtn();
	this.playBtn.parent = this;
	this.playBtn.setTransform(600,294.5,1,1.684);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGA2IAAgEQAFAAADgDQADgBAAgDQAAgDgIgLIgOgXIgRAXQgJALABACQgBADADACQADACAFABIAAAEIgjAAIAAgEIAHgDQAFgEALgOIAWgdIgUgdQgJgNgFgDQgEgDgIAAIAAgFIAzAAIAAAFQgFAAgCABQgBABAAAAQAAABgBAAQAAABAAABQAAAAAAABQAAADAEAFIAEAGIAGAMIAJgMQAJgLAAgDQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQgCgCgFAAIAAgFIAkAAIAAAFQgFAAgFADQgFAEgKANIgOAUIAaAlQAKAOAEADQAFADAGABIAAAEg");
	this.shape.setTransform(363.1,375.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag3BRIAAgEIACAAQAHgBAEgCQADgBABgDQABgDABgMIAAhkQAAgLgBgCQgBgEgDgBQgBgBgEAAIgIABIAAgDIAhgOIAEAAIAAAZQAIgOAJgFQAHgGAJAAQARAAAKANQANAPAAAZQAAAbgPASQgOAPgTAAQgIAAgHgCQgEgDgGgEIAAAgQAAALABADQACADADACQADACAIAAIAAAEgAgDg8QgFACgJALIAAAnQAAAMABAEQABAHAHAGQAGAFAJAAQAMAAAHgKQAJgMAAgUQABgYgLgOQgIgJgKAAQgGAAgEADg");
	this.shape_1.setTransform(350.6,378.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmA4QgNgXAAggQABgaAIgUQAIgTANgKQALgIALABQASAAAOASQATAXgBAoQAAAagHAUQgIATgNAJQgMAJgLAAQgWAAgQgbgAgNhDQgJAKgCAVQgDAVAAATQAAAhAHAUQAIASAMAAQAGAAAHgGQAHgFADgOQAFgUABgjQgBgcgFgSQgFgNgGgGQgFgEgGAAQgIAAgGAHg");
	this.shape_2.setTransform(339.1,373.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmA4QgMgXAAggQgBgaAJgUQAIgTANgKQALgIAKABQATAAAOASQASAXAAAoQABAagJAUQgHATgNAJQgMAJgLAAQgWAAgQgbgAgNhDQgIAKgDAVQgEAVAAATQABAhAHAUQAIASAMAAQAGAAAHgGQAHgFADgOQAGgUAAgjQAAgcgGgSQgEgNgHgGQgFgEgHAAQgGAAgHAHg");
	this.shape_3.setTransform(327.1,373.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANBRIAAgqIhCAAIAAgPIBJhoIANAAIAABnIAVAAIAAAQIgVAAIAAAqgAgqAXIA3AAIAAhOg");
	this.shape_4.setTransform(314.8,373.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAGA2IAAgEQAGAAACgDQADgBAAgDQAAgDgHgLIgQgXIgRAXQgIALAAACQABADACACQADACAFABIAAAEIgjAAIAAgEIAHgDQAFgEAKgOIAXgdIgVgdQgIgNgFgDQgFgDgHAAIAAgFIAyAAIAAAFQgEAAgCABQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAADAEAFIAEAGIAHAMIAJgMQAIgLAAgDQAAgBAAAAQAAgBgBgBQAAAAAAAAQgBgBAAAAQgCgCgEAAIAAgFIAkAAIAAAFQgGAAgEADQgGAEgKANIgPAUIAbAlQAKAOAEADQAFADAGABIAAAEg");
	this.shape_5.setTransform(303.1,375.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjBEQgKgLAAgNQAAgLAHgLQAHgKASgMQgTgPgFgJQgGgKAAgKQAAgPAMgLQAMgLATAAQATAAAMAKQALAKAAANQAAAKgGAIQgGAKgUANQAUAOAHAKQAJALAAAOQAAARgNAMQgNALgUABQgWAAgNgPgAgWAWQgFAKAAAKQAAAQAJAJQAIAJAMAAQAMAAAIgHQAHgIAAgKQAAgIgEgGQgIgNgZgUQgJAIgFAKgAgShEQgIAHAAAJQAAAHADAFQADAHAGAFIASAQQAOgNAEgHQAEgIAAgJQAAgMgHgHQgHgHgMAAQgLAAgHAHg");
	this.shape_6.setTransform(291.1,373.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbBIQgWgVAAgiQAAgUAIgUQAJgSAQgQQAPgPAOgFQAPgEAMAAIAHAAIAAADQgQACgJAFQgKAFgJAJQgJAJgHAMQgFAMgFAQQARgMAQAAQAQAAANAOQALAMAAAUQAAAUgMARQgPATgXABQgQgBgLgKgAgKgHQgFABgKAGQgCAPAAAKQAAALAEANQAFANAHAIQAHAGAHAAQAKAAAIgKQAJgKAAgRQAAgUgJgPQgIgNgNAAQgEAAgGACg");
	this.shape_7.setTransform(279.1,373.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBRIAuiOIgqAAQgNAAgGADQgKAGgGALIgDgCIAPglIBUAAIAAAEIg0Cdg");
	this.shape_8.setTransform(267,373.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66CC99").s().p("Eg7/AfQMAAAg+fMB3/AAAMAAAA+fg");
	this.shape_9.setTransform(626.9,200);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AglA4QgNgXAAggQgBgaAJgUQAIgTAOgKQAKgIAKABQATAAAOASQASAXABAoQAAAagJAUQgHATgNAJQgMAJgLAAQgWAAgPgbgAgNhDQgIAKgEAVQgDAVAAATQAAAhAJAUQAHASAMAAQAGAAAHgGQAHgFADgOQAGgUgBgjQABgcgGgSQgEgNgHgGQgFgEgHAAQgGAAgHAHg");
	this.shape_10.setTransform(56.1,373.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AglA4QgNgXgBggQAAgaAJgUQAIgTAOgKQAKgIAKABQATAAAPASQASAXAAAoQgBAagHAUQgJATgMAJQgMAJgLAAQgXAAgOgbgAgNhDQgJAKgDAVQgCAVAAATQgBAhAJAUQAGASANAAQAGAAAHgGQAGgFAEgOQAFgUAAgjQAAgcgFgSQgFgNgGgGQgFgEgHAAQgHAAgGAHg");
	this.shape_11.setTransform(44.1,373.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AgnBMQgGgFAAgGQAAgDACgCQADgDAEAAIAGABIAHAEQAJAHAJAAQANAAAKgKQALgLAAgPQAAgPgKgMQgJgLgPgHQgNgFgWgBIAeg+IA4AAIgJAUIgvAAIgKAVQAeAFASATQAQAPAAAVQAAAMgFALQgFALgIAHQgIAIgJAFQgNAGgOAAQgOAAgHgFg");
	this.shape_12.setTransform(31.8,373.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AgbBRIAAgEQALAAADgCQAEgCABgDQABgCAAgPIAAhVQAAgRgBgFQgBgEgCgCQgCgCgDAAQgFAAgHAFIgCgFIAmgSIADAAIAACFQAAAOACADQABADADABQAEACAKABIAAAEg");
	this.shape_13.setTransform(20,373.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#996666").s().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	this.shape_14.setTransform(600,200);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66CC99").s().p("Eg7/AfQMAAAg+fMB3/AAAMAAAA+fg");
	this.shape_15.setTransform(600,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.playBtn}]}).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600,200,1200,400);
// library properties:
lib.properties = {
	width: 1200,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;