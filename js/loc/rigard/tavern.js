





//
// Tavern
//
world.loc.Rigard.Tavern.common.description = function() {
	Text.AddOutput(Text.BoldColor("Placeholder area.") + " You are in the tavern called the Maidens' Bane.");
	Text.Newline();
}

world.loc.Rigard.Tavern.common.links.push(new Link(
	"Slums", true, true,
	function() {
		Text.AddOutput("Go outside? ");
	},
	function() {
		MoveToLocation(world.loc.Rigard.Slums.gate, {minute: 10});
	}
));

world.loc.Rigard.Tavern.common.endDescription = function() {
	Text.AddOutput("Nothing else to see here.<br/>");
}
