export default function (uniqueNumber, descriptrion) {
	var shortKebabDescription = descriptrion
		.toLowerCase()
		.split(' ')
		.splice(0, 2)
		.join('-')
	return `${uniqueNumber}-${shortKebabDescription}`
}