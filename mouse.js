function Mouse() {
	this.name = 'Halliew';
	this.dead = false;
}

Mouse.prototype.die = function() {
	this.dead = true;
};
module.exports = Mouse;