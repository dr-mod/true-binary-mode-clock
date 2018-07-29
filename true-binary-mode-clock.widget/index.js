style: `
				top: 20px
				right: 20px
				.bit
					height: 25px
					width: 25px
					border-radius: 30%
					display: inline-block
					border: 3px solid #bb
					opacity: 0.8
					margin: 0px 10px 10px 0px
				.active 
					background-color: #dd
				.row
					display: flex
`,
	
update: function(output, domEl) { 	
	var now = new Date();
	this.updateRow(domEl, this.toFixedBinaryString(now.getSeconds()), "seconds"); 
	if (this.lastDisplayed == null || now.getMinutes() !== this.lastDisplayed.getMinutes()) {
		this.updateRow(domEl, this.toFixedBinaryString(now.getMinutes()), "minutes");
		this.updateRow(domEl, this.toFixedBinaryString(now.getHours()), "hours");
	}
	
	this.lastDisplayed = now;
},
 
toFixedBinaryString: function(int) {
	return ("000000" + int.toString(2)).slice(-6)
},

updateRow: function(domEl, data, row) {
	for (var i = data.length; i >= 0; i--) {
		var bit = $(domEl).find(`#${row} >`).eq(i);
		if (parseInt(data.charAt(i))) {
			bit.addClass(this.activeClass);
		} else {
			bit.removeClass(this.activeClass);
		}
	}
},

render: function () {
	return `<span id="hours" class="row">
						<span class="bit"></span>
						<span class="bit"></span>
						<span class="bit"></span>
						<span class="bit"></span>
						<span class="bit"></span>
						<span class="bit"></span>
					</span>
					<span id="minutes" class="row">
						<span class="bit"></span>
						<span class="bit"></span>
						<span class="bit"></span>
						<span class="bit"></span>
						<span class="bit"></span>
						<span class="bit"></span>
					</span>
					<span id="seconds" class="row">
						<span class="bit"></span>
						<span class="bit"></span>
						<span class="bit"></span>
						<span class="bit"></span>
						<span class="bit"></span>
						<span class="bit"></span>
					</span>`;
},

refreshFrequency: 1000,
lastDisplayed: null,
activeClass: "active"