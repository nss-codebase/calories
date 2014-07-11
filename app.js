var prompt = require('sync-prompt').prompt;

var weight = prompt('Weight: ');
var gender = prompt('Gender: ');

weight = parseInt(weight);
var foods = [];
var total = 0;

var option = prompt('(f)ood or (q)uit: ');
while(option != 'q'){
  var food = prompt('Food: ');
  var calories = prompt('Calories: ');

  total += parseInt(calories);
  foods.push(food);
  option = prompt('(f)ood or (q)uit: ');
}

weight += gender === 'f' ? total/3000 : total/4000;
console.log('You ate these foods: ' + foods + '. You now weigh ' + weight.toFixed(1) + 'lbs');

