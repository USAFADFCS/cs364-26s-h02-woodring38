/*
 * name: Tanner Woodring
 * CS364 - H2
 * Documentation: I used regex101.com to build my regurlar expression and complete this assigment.
 *
 */

//1: match the word "hello"
const regex01 = /hello/

//2: match phone numbers in the format (123) 456-7890
const regex02 = /\(\d{3}\)[ ]\d{3}-\d{4}/

//3: match valid email addresses
const regex03 = /\b\S+@\S+\b/

//4: find all words that startwith a capital letter
const regex04 = /\b[A-Z]\S+\b/

//5: match strings with any one of these characters: ; [, ], {, }, ^ 
const regex05 = /\b\S*[\[\]\^;\{\}]\S*\b/

//6: match dates in the format DD/MM/YYYY
const regex06 = /\b(01|02|03|04|04|06|07|08|09|10|11|12)\/[0|3][0-9]\/\d{4}\b/

//7: find all words that are exactly 4 characters long
const regex07 = /\b\S{4}\b/

//8: to find sequences where any character is repeated three or more times 
const regex08 = /\b.{3,}\b/

//9: match URLs starting with http:// or https://
const regex09 = /\bhttp:\/\/\S+|https:\/\/\S+\b/

//10: Validate a Password
const regex10 = /\b\S*[A-Z]+[a-z]+\d+\S*\b/


