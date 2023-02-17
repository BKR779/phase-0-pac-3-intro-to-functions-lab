function shout(string) {
	return string.toUpperCase();
}

function whisper(string) {
	return string.toLowerCase();
}

function logShout(string) {
	console.log(shout("hello"));
}

function logWhisper(string) {
	console.log(whisper("hello"));
}

function sayHiToHeadphonedRoommate(string) {
	if (string === whisper(string.toLowerCase())) {
		return "I can't hear you!";
	} if (string === shout(string.toUpperCase())) {
		return "YES INDEED!";
	} if (string === "Let's have dinner together!") {
		return "I would love to!"
	}
}
console.log(sayHiToHeadphonedRoommate("hello"));
console.log(sayHiToHeadphonedRoommate("HELLO"));
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));