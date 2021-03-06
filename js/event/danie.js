/*
 * 
 * Define Danie
 * 
 */

function Danie(storage) {
	Entity.call(this);
	
	
	// Character stats
	this.name = "Danie";
	
	//this.avatar.combat = new Image();
	
	this.maxHp.base        = 100;
	this.maxSp.base        = 80;
	this.maxLust.base      = 50;
	// Main stats
	this.strength.base     = 20;
	this.stamina.base      = 22;
	this.dexterity.base    = 16;
	this.intelligence.base = 17;
	this.spirit.base       = 15;
	this.libido.base       = 20;
	this.charisma.base     = 18;
	
	this.level = 5;
	this.sexlevel = 3;
	
	this.body.DefFemale();
	this.FirstBreastRow().size.base = 9;
	this.Butt().buttSize.base = 7;
	this.body.SetRace(Race.sheep);
	TF.SetAppendage(this.Appendages(), AppendageType.horn, Race.sheep, Color.gray, 2);
	TF.SetAppendage(this.Back(), AppendageType.tail, Race.sheep, Color.black);
	
	this.SetLevelBonus();
	this.RestFull();
	
	this.flags["Met"] = 0;

	if(storage) this.FromStorage(storage);
}
Danie.prototype = new Entity();
Danie.prototype.constructor = Danie;


Danie.prototype.FromStorage = function(storage) {
	this.Butt().virgin       = parseInt(storage.avirgin) == 1;
	this.FirstVag().virgin   = parseInt(storage.virgin) == 1;
	// Personality stats
	this.subDom.base         = parseFloat(storage.subDom)  || this.subDom.base;
	this.slut.base           = parseFloat(storage.slut)    || this.slut.base;
	this.relation.base       = parseFloat(storage.rel)     || this.relation.base;
	
	// Load flags
	for(var flag in storage.flags)
		this.flags[flag] = parseInt(storage.flags[flag]);
}

Danie.prototype.ToStorage = function() {
	var storage = {
		avirgin : this.Butt().virgin ? 1 : 0,
		virgin  : this.FirstVag().virgin ? 1 : 0
	};
	if(this.subDom.base   != 0) storage.subDom = this.subDom.base;
	if(this.slut.base     != 0) storage.slut   = this.slut.base;
	if(this.relation.base != 0) storage.rel    = this.relation.base;
	storage.flags = this.flags;
	
	return storage;
}


// Schedule
Danie.prototype.IsAtLocation = function(location) {
	return true;
}

// Party interaction
Danie.prototype.Interact = function() {
	Text.Clear();
	Text.AddOutput("Baah Imma sheep.");
	
	
	if(DEBUG) {
		Text.Newline();
		Text.AddOutput(Text.BoldColor("DEBUG: relation: " + danie.relation.Get()));
		Text.Newline();
		Text.AddOutput(Text.BoldColor("DEBUG: subDom: " + danie.subDom.Get()));
		Text.Newline();
		Text.AddOutput(Text.BoldColor("DEBUG: slut: " + danie.slut.Get()));
		Text.Newline();
	}
	
	Gui.NextPrompt(function() {
		PartyInteraction();
	});
}
