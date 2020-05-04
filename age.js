let age = 20;
console.log('In 10 years, you will be'+ ' '+ (age + 10) + ' '+'years old')
console.log('In 20 years, you will be'+ ' '+ (age + 20) + ' '+'years old')
console.log('In 30 years, you will be'+ ' '+ (age + 30) + ' '+'years old')
console.log('In 40 years, you will be'+ ' '+ (age + 40) + ' '+'years old')
console.log(`In 10 years you will be ${age + 10} years old.`)
//Didn't include the curly brackets on my first try
{
  let foo = 'bar';
  console.log(foo)
}


// foo is not defined, must include within the scope
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
