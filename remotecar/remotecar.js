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
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// Actions
	this.playBtn = new lib.ProtoBtn();
	this.playBtn.parent = this;
	this.playBtn.setTransform(256,296.5);

	this.timeline.addTween(cjs.Tween.get(this.playBtn).to({_off:true},14).wait(1));

	// Car
	this.myCar = new lib.Symbol1();
	this.myCar.parent = this;
	this.myCar.setTransform(275,179.2);

	this.timeline.addTween(cjs.Tween.get(this.myCar).wait(2).to({scaleX:0.98,scaleY:0.98,y:172},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:164.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:157.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:150.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:143},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:135.8},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:128.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:121.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:114.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:106.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:99.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:92.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,y:85.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(459.9,346.6,142.2,166.9);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;