const reverse = (str) => {
    let word = str.split(' ');
    word.reverse();
    str = word.join(' ');
    return str;
}
console.log(reverse('I love my India')); // ‘India my love I’
console.log(reverse('Oh my Oh')); // ‘Oh my Oh’