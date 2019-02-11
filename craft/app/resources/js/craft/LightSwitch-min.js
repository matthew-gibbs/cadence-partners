Craft.LightSwitch=Garnish.Base.extend({settings:null,$outerContainer:null,$innerContainer:null,$input:null,small:!1,on:null,dragger:null,dragStartMargin:null,init:function(t,n){this.$outerContainer=$(t),this.$outerContainer.data("lightswitch")&&(Garnish.log("Double-instantiating a lightswitch on an element"),this.$outerContainer.data("lightswitch").destroy()),this.$outerContainer.data("lightswitch",this),this.small=this.$outerContainer.hasClass("small"),this.setSettings(n,Craft.LightSwitch.defaults),this.$innerContainer=this.$outerContainer.find(".lightswitch-container:first"),this.$input=this.$outerContainer.find("input:first"),this.$input.prop("disabled")||(this.on=this.$outerContainer.hasClass("on"),this.$outerContainer.attr({role:"checkbox","aria-checked":this.on?"true":"false"}),this.addListener(this.$outerContainer,"mousedown","_onMouseDown"),this.addListener(this.$outerContainer,"keydown","_onKeyDown"),this.dragger=new Garnish.BaseDrag(this.$outerContainer,{axis:Garnish.X_AXIS,ignoreHandleSelector:null,onDragStart:$.proxy(this,"_onDragStart"),onDrag:$.proxy(this,"_onDrag"),onDragStop:$.proxy(this,"_onDragStop")}))},turnOn:function(){this.$outerContainer.addClass("dragging");var t={};t["margin-"+Craft.left]=0,this.$innerContainer.velocity("stop").velocity(t,Craft.LightSwitch.animationDuration,$.proxy(this,"_onSettle")),this.$input.val("1"),this.$outerContainer.addClass("on"),this.$outerContainer.attr("aria-checked","true"),this.on!==(this.on=!0)&&this.onChange()},turnOff:function(){this.$outerContainer.addClass("dragging");var t={};t["margin-"+Craft.left]=this._getOffMargin(),this.$innerContainer.velocity("stop").velocity(t,Craft.LightSwitch.animationDuration,$.proxy(this,"_onSettle")),this.$input.val(""),this.$outerContainer.removeClass("on"),this.$outerContainer.attr("aria-checked","false"),this.on!==(this.on=!1)&&this.onChange()},toggle:function(t){this.on?this.turnOff():this.turnOn()},onChange:function(){this.trigger("change"),this.settings.onChange(),this.$outerContainer.trigger("change")},_onMouseDown:function(){this.addListener(Garnish.$doc,"mouseup","_onMouseUp")},_onMouseUp:function(){this.removeListener(Garnish.$doc,"mouseup"),this.dragger.dragging||this.toggle()},_onKeyDown:function(t){switch(t.keyCode){case Garnish.SPACE_KEY:this.toggle(),t.preventDefault();break;case Garnish.RIGHT_KEY:"ltr"==Craft.orientation?this.turnOn():this.turnOff(),t.preventDefault();break;case Garnish.LEFT_KEY:"ltr"==Craft.orientation?this.turnOff():this.turnOn(),t.preventDefault();break}},_getMargin:function(){return parseInt(this.$innerContainer.css("margin-"+Craft.left))},_onDragStart:function(){this.$outerContainer.addClass("dragging"),this.dragStartMargin=this._getMargin()},_onDrag:function(){var t;t="ltr"==Craft.orientation?this.dragStartMargin+this.dragger.mouseDistX:this.dragStartMargin-this.dragger.mouseDistX,t<this._getOffMargin()?t=this._getOffMargin():t>0&&(t=0),this.$innerContainer.css("margin-"+Craft.left,t)},_onDragStop:function(){this._getMargin()>this._getOffMargin()/2?this.turnOn():this.turnOff()},_onSettle:function(){this.$outerContainer.removeClass("dragging")},destroy:function(){this.base(),this.dragger.destroy()},_getOffMargin:function(){return this.small?-9:-11}},{animationDuration:100,defaults:{onChange:$.noop}});