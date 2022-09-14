// Gets # from 0 -> num - 1
generateRandomNumber = num => {
	return Math.floor(Math.random() * num)
}
const moonInfo = {
	moonPhase: ['new moon', 'waxing crescent', 'first quarter', 'waxing gibbous', 'full',
	'waning gibbous', 'last quarter', 'waning crescent'],
	moonOmen: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
	advice: [
	'When you’re having a tough time just remember how strong you really are',
	'Remember that people care about you more than you think.',
	'Never stop being yourself no matter what people say',
	'You’ve got a generous soul but be careful about those with bad intentions',
	'Don’t be so hard on yourself. You’ve got this',
	'Your advice helps people more than you realize – keep spreading it',
	'Drop your guard from time to time and show people your true self',
	'Don’t worry so much about people judging you',
	'Don’t listen to the haters – it comes from a place of envy',
	'Think for yourself but don’t overthink things',
	'Don’t allow doubters and naysayers to stop you from going after what you really want'	
	]
}

 // Store the 'wisdom' in an array
let wiseMessage = [];
// Iterate over the object
for(let property in moonInfo) {
	let optionIndex = generateRandomNumber(moonInfo[property].length)


// use the object's properties to customize the message being added to wiseMessage 
switch(property) {
		case 'moonPhase':
			wiseMessage.push(`The moon phase is currently a ${moonInfo[property][optionIndex]}.`)
			break;
		case 'moonOmen':
			wiseMessage.push(`Looks like this moon phase means you will have ${moonInfo[property][optionIndex]}.`)
			break;
		case 'advice':
			wiseMessage.push(`${moonInfo[property][optionIndex]}.`)
			break;
		default:
			wiseMessage.push('There is not enough info.');
			}
}

  function formatWisdom(wisdom) {
    const formatted = wiseMessage.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(wiseMessage);