var mini_map = new Game_mini_map();

function Game_mini_map() {
	
	//Location
	this.X = function() { return FRAME_OF_REFERENCE[0] + canvas.width - 194; };
	this.Y = function() { return FRAME_OF_REFERENCE[1] + 5; };

	//Dimensions
	this.width = 190;
	this.height = 190;

	//Map tiles
	this.map = "No map yet";

	//Recalculates for map zoom level 
	//Subtract 1 for seamless mini-map, 0 for grid
	this.tWidth = function() { return (this. width - 0) / this.map.length; };
	this.tHeight = function() { return (this.width - 0) / this.map.length; };

	//Color code
	this.playerColor = "blue";
	this.allyColor = "green";
	this.enemyColor = "red";

	//Load minimap tiles
	this.loadTiles = function() {

		//Returns all map tiles rendered if map is loaded
		this.map = Game_map_generator.getRenderedTiles();
	}
	//Draw the background/outline.
	this.drawBg = function() {

		//Background/Outline for minimap
		ctx.fillStyle = "#222";
		ctx.fillRect(this.X() - 1, this.Y() - 1, this.width + 1, this.height + 1);
	}
	//Draw player
	this.drawPlayer = function() {

		//Draw player on minimap
		ctx.fillStyle = this.playerColor;
		ctx.fillRect(this.X() + (10 * this.tWidth()), this.Y() + (10 * this.tHeight()), 8, 8);
	}
	//Draw map tiles
	this.drawTiles = function() {

		//Loop for the number of rows
		for (var i = 0; i < this.map.length; i++) {
			//Loop through each tile in row
			if (this.map[i]) { 
				for (var j = 0; j < this.map[i].length; j++) {
					ctx.fillStyle = this.map[i][j];
					ctx.fillRect(this.X() + (j * this.tWidth()), this.Y() + (i * this.tHeight()), this.tWidth(), this.tHeight());
				}
			}
		}
	}
	//Draw minimap
	this.draw = function() {

		//Get Minimap tiles
		this.loadTiles();

		//Draw background
		this.drawBg();

		//Draw tiles
		this.drawTiles();

		//Draw player
		this.drawPlayer();
	};
}