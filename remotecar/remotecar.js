(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


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
	this.myCar.setTransform(275,179.2);

	this.timeline.addTween(cjs.Tween.get(this.myCar).wait(1).to({x:600},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:578.7,y:164.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:556.9,y:150.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:534.6,y:136.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:512,y:123.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:488.9,y:111.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:465.4,y:100.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:441.4,y:90.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:417,y:81.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:392,y:73.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:366.5,y:68.5},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:340.6,y:65.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:314.6,y:66.6},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:289.2,y:72.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:257.6,y:85},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:231.1,y:105.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:241.1,y:134.3},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:273.6,y:144.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:307.6,y:142.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:349.7,y:138.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:392.1,y:139.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:434.2,y:144},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:476.1,y:150.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:517.7,y:158.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:559,y:168.4},0).wait(1).to({scaleX:1,scaleY:1,x:600,y:179.2},0).wait(1));

	// Nav
	this.playBtn = new lib.ProtoBtn();
	this.playBtn.parent = this;
	this.playBtn.setTransform(600,294.5,1,1.684);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996666").s().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	this.shape.setTransform(600,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.playBtn}]}).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(600,200,1200,400);
// library properties:
lib.properties = {
	width: 1200,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;