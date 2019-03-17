export const compute = (strand1, strand2) => {
	let hammingDistance = 0;

	if(strand1.length === strand2.length) {
		if(strand1 !== strand2) {
			const splitStrand1 = strand1.split('')
			const splitStrand2 = strand2.split('')

			for(let i = 0; i < strand1.length; i++) {
				if(splitStrand1[i] !== splitStrand2[i]) {
					hammingDistance++
				}
			}
		} 
	} else {
		throw 'left and right strands must be of equal length'
	}

	return hammingDistance
}