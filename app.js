for (var x = 1; x <= 100; x++) {
    document.write("</br>");
if (x%3 == 0 ) {
    document.write("Fizz");

}else if (x%5 == 0) {
    document.write("Buzz");

}else if (x%3 == 0 && x%5 == 0) {
    document.write("FizzBuzz");
    
}else if (x%3 != 0 && x%5 != 0) {
    document.write ("$x");
}
else {
    document.write(x);
   
}
}