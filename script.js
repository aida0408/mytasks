// const findSquares = num => {
//   const  upNum = Math.ceil(num / 2)
//    const downNum = Math.floor(num / 2)
//         return num(${Math.pow(upNum, 2) - ${Math.pow(downNum, 2))
//
//
//
// }
//
//
//
// console.log (findSquares (9))
// console.log( findSquares (5))
// console.log (findSquares (7))


// function maskify(cc) {
//     if (cc.length < 5){
//         return cc
//     }
//     let part1 = cc.slice(0, -4).split('').map(item => "#").join('')
//     const part2 = cc.slice(-4)
//     return part1 + part2
// }
//
// console.log(maskify("4556364607935616"))
// console.log(maskify("1"))


// 1. Выведите столбец чисел от 1 до 50.
// for (let i = 1; i <= 50; i++)
//     console.log(i)

// 2. Создайте переменную с пустым массивом, заполните массив
// 10-ю элементами X с помощью цикла.

// let array = [];
// for (let i = 0; i < 10; i++) {
//     array[i] = 'x';
// }
// console.log(array)


// 3. Вам дан массив с элементами [5, 3, 1, 2, 7].
// С помощью цикла for выведите все эти элементы в консоль.
// let arr = [5, 3, 1, 2, 7]
// for  (let i = 0; i < 10; i++){
//     arr[i]
// }
// console.log(arr)

// 4. Вам дан массив с элементами [5, 2, 1, 2].
// С помощью цикла for найдите произведение элементов этого массива.
// let array = [5, 2, 1, 2]
// let num = 1
// for ( let i = 0; i < array.length; i++){
//     num = num * array[i]
// }
// console.log(num)



// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
// for ( let i = 0; i <= 100; i++){
//     if (i % 2 === 0 )
//
//         console.log(i)
// }



// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// let sum = 0
// for ( let i = 1; i <= 100; i++ ){
//     sum = sum + i
// }
// console.log(sum)




// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите сумму элементов этого
// массива. Запишите ее в переменную result.

// let array = [2, 4, 5, 6, 8]
// let result = 0
// for ( let i = 0; i < array.length; i++){
// result= result + array[i]
// }
// console.log(result)



// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора
// if выведите на экран столбец тех элементов массива, которые больше 3-х,
// но меньше 10.

// let array = [3, 4, 6, 12, 3, 5]
// for (let i = 0; i < array.length; i++){
//     if ( array[i] > 3 && array[i] < 10){
//         console.log(array[i] )
//     }
// }



// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.

// let array = [15, 12, -19, -27,]
// let sum = 0
// for ( let i = 0; i < array.length; i++){
//     if ( array[i] > 0){
//         sum = sum + array[i]
//     }
// }
// console.log(sum)



// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20].
// С помощью цикла for и оператора if проверьте есть ли в массиве
// элемент со значением, равным 4. Если есть - выведите на экран
// 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// let arr = [5, 1, 3, 7, 6, 15, 3, 20]
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] === 4){
//         console.log('Есть!')
//     }

// }
// console.log(arr[i])


// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000].
// Выведите на экран только те числа из массива, которые
// начинаются на цифру 1, 2 или 5.



// let arr = [10, 20, 30, 40, 135, 2000];
//
// for (let i = 0; i < arr.length; i++) {
//     let num = String(arr[i]);
//     let sum = num[0];
//     if (sum == 1 || sum == 2 || sum == 5) {
//         console.log(num);
//     }
// }

// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9].
// С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.




// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму квадратов элементов этого массива.
// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
// 17. Создайте переменную с пустым массивом, заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.
// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].Создайте цикл, который выводит нечетные числа, которые больше 10.
// 20. Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.