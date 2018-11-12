// https://leetcode.com/problems/max-increase-to-keep-city-skyline/description/

var maxIncreaseKeepingSkyline = function(grid) {

	const sideView = grid.map(row => Math.max(...row));
	const bottomView = grid.map((z, i) => {
		let max = -1;
		grid.forEach(r => max = r[i] > max ? r[i] : max);
		return max;
	});

	let count = 0;

	grid.forEach((row, rowIndex) => {
		row.forEach((num, i) => {
			if (bottomView[i] <= sideView[rowIndex]) {
				count += (bottomView[i] - num);
			} else {
				count += (sideView[rowIndex] - num);
			}
		});
	});

	return count;
};