//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
    InitQuestion14,
    InitQuestion15,
    InitQuestion16,
    InitQuestion17,
    InitQuestion18,
    InitQuestion19,
    InitQuestion20,
    InitQuestion21,
    InitQuestion22,
    InitQuestion23,
    InitQuestion24,
    InitQuestion25,
    InitQuestion26,
    InitQuestion27,
    InitQuestion28,
    InitQuestion29,
    InitQuestion30,
    InitQuestion31,
    InitQuestion32,
    InitQuestion33,
    InitQuestion34,
    InitQuestion35,
    InitQuestion36,
    InitQuestion37,
    InitQuestion38,
    InitQuestion39,
    InitQuestion40,
    InitQuestion41,
    InitQuestion42,
    InitQuestion43,
    InitQuestion44,
    InitQuestion45,
    InitQuestion46,
    InitQuestion47,
    InitQuestion48,
    InitQuestion49,
    InitQuestion50,
    InitQuestion51,
    InitQuestion52,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 0;
    var weight = DecodeNumber('f/igkIY7fG0=', 537, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('AIYo37eh1wk=', 896, -1000, 1000),DecodeDecimal('I3zNQHQ78ow=', 896, -1000, 1000),DecodeDecimal('I3zNQHQ78ow=', 896, -1000, 1000));
    question.answers.length = 0;
    question.num = 1;
    question.isSingleAns = true;
    question.shortTextQuestion = "The “fearful physical smell” Winston notices in his apartment refers to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('aUukW+HTlTo=', 898, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "the engine smell in Victory Mansions.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aUukW+HTlTo=', 900, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "the flowers in the canteen.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ezS/yBhBzpk=', 902, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Mrs. Parsons’s house.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hmrnsxiQE6o=', 904, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "the stale air from the broken window.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 1;
    var weight = DecodeNumber('FTM8iRQs5nU=', 906, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('FTM8iRQs5nU=', 906, -1000, 1000),DecodeDecimal('H+9CQzcEYbI=', 906, -1000, 1000),DecodeDecimal('H+9CQzcEYbI=', 906, -1000, 1000));
    question.answers.length = 0;
    question.num = 2;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston buys a diary from:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('knQ2xtCAiFg=', 908, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Mr. Charrington’s antique shop.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('knQ2xtCAiFg=', 910, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "the local Victory Market.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('uyW1ZhJB+8c=', 912, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Parsons’s child.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('a87HfAmWsQU=', 914, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "the Ministry of Truth canteen.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 2;
    var weight = DecodeNumber('wmaVL0jgwlI=', 916, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wmaVL0jgwlI=', 916, -1000, 1000),DecodeDecimal('p5yv874KJIs=', 916, -1000, 1000),DecodeDecimal('p5yv874KJIs=', 916, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = true;
    question.shortTextQuestion = "Parsons’s children accuse someone of:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('wLJwqLZUhog=', 918, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "thoughtcrime.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('wLJwqLZUhog=', 920, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "spying.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('j0Dud4yRVHg=', 922, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "littering.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('d1OUEpsDL8Q=', 924, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "stealing.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 3;
    var weight = DecodeNumber('iyxy+m4s64c=', 926, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('iyxy+m4s64c=', 926, -1000, 1000),DecodeDecimal('fv+qROz/aUM=', 926, -1000, 1000),DecodeDecimal('fv+qROz/aUM=', 926, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = true;
    question.shortTextQuestion = "The Parsons children belong to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('iyxy+m4s64c=', 928, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "the Youth League.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('SbH2yN263xg=', 930, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "the Brotherhood.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hF95/np5rMI=', 932, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "the Minipax program.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xbD+x8NmRsQ=', 934, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "the Spies.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 4;
    var weight = DecodeNumber('W4pQtjy99PE=', 936, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('W4pQtjy99PE=', 936, -1000, 1000),DecodeDecimal('gVU41+dOwIA=', 936, -1000, 1000),DecodeDecimal('gVU41+dOwIA=', 936, -1000, 1000));
    question.answers.length = 0;
    question.num = 5;
    question.isSingleAns = true;
    question.shortTextQuestion = "The telescreen in his flat:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('VCi5WBmTDwQ=', 938, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "has no volume control. ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('VCi5WBmTDwQ=', 940, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "only watches his hallway.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gLvpGwqVyKc=', 942, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "never turns off.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('iH8CDvxm3S4=', 944, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "breaks down often.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 5;
    var weight = DecodeNumber('wMR8b2ew90c=', 946, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('wMR8b2ew90c=', 946, -1000, 1000),DecodeDecimal('hvb6BWGJXTY=', 946, -1000, 1000),DecodeDecimal('hvb6BWGJXTY=', 946, -1000, 1000));
    question.answers.length = 0;
    question.num = 6;
    question.isSingleAns = true;
    question.shortTextQuestion = "Which slogan does Winston reflect on?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('wMR8b2ew90c=', 948, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Freedom is Happiness.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LBZ7rxyf2rw=', 950, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Obedience is Power.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('LBZ7rxyf2rw=', 952, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Unity is Peace.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('Qg8RSrJ/lGA=', 954, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Ignorance is Strength. ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 6;
    var weight = DecodeNumber('1Yg9ELrMrEE=', 956, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1Yg9ELrMrEE=', 956, -1000, 1000),DecodeDecimal('265YC8nYZEs=', 956, -1000, 1000),DecodeDecimal('265YC8nYZEs=', 956, -1000, 1000));
    question.answers.length = 0;
    question.num = 7;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston alters records about:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('1Yg9ELrMrEE=', 958, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "spy reports.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('le7+9A+0kZA=', 960, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "children’s crimes.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fgVII/Mz1uk=', 962, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "weather patterns.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('iBwz/Vei/GE=', 964, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "chocolate rations. ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 7;
    var weight = DecodeNumber('G/Uba61PCwE=', 966, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('G/Uba61PCwE=', 966, -1000, 1000),DecodeDecimal('neIZ4Owsl/Y=', 966, -1000, 1000),DecodeDecimal('neIZ4Owsl/Y=', 966, -1000, 1000));
    question.answers.length = 0;
    question.num = 8;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston thinks of Syme as:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('G/Uba61PCwE=', 968, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "a loyal worshiper.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fgkK5xoTxr4=', 970, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "a secret brotherhood member.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('fgkK5xoTxr4=', 972, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "someone dull.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nlpJ/HtQ2cs=', 974, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "unintentionally dangerous. ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 8;
    var weight = DecodeNumber('7dcxCQJv98I=', 976, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('7dcxCQJv98I=', 976, -1000, 1000),DecodeDecimal('uzB1yXzO2xc=', 976, -1000, 1000),DecodeDecimal('uzB1yXzO2xc=', 976, -1000, 1000));
    question.answers.length = 0;
    question.num = 9;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston thinks Syme will eventually be:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('/h5ukQQYb3M=', 978, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "vaporized. ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/h5ukQQYb3M=', 980, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "made Inner Party.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('1dzLjhRWmYo=', 982, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "outside Oceania.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('kgEqGu+aYe4=', 984, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "sent to the Ministry of Love.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 9;
    var weight = DecodeNumber('HFFSWuArvAY=', 986, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HFFSWuArvAY=', 986, -1000, 1000),DecodeDecimal('sQVk9B/JBnM=', 986, -1000, 1000),DecodeDecimal('sQVk9B/JBnM=', 986, -1000, 1000));
    question.answers.length = 0;
    question.num = 10;
    question.isSingleAns = true;
    question.shortTextQuestion = "What is nearly impossible in Newspeak?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('HFFSWuArvAY=', 988, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Speaking at rallies.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WwUYW06BLYk=', 990, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Writing poetry.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('gTAASOlDXGo=', 992, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Spying on neighbors.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4eJSaqLPPQE=', 994, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Expressing complexity. ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 10;
    var weight = DecodeNumber('5uQArzWPees=', 996, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('5uQArzWPees=', 996, -1000, 1000),DecodeDecimal('jyb53Do4iQQ=', 996, -1000, 1000),DecodeDecimal('jyb53Do4iQQ=', 996, -1000, 1000));
    question.answers.length = 0;
    question.num = 11;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia slips Winston a note that says:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('dKUdiFC/74Y=', 998, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "“I love you.”";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('dKUdiFC/74Y=', 1000, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "“Meet me by the fountain.”";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('J3JgiAELu9g=', 1002, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "“Don’t trust O’Brien.”";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('MSuCuJxUPZk=', 1004, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "“I love Big Brother.”";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 11;
    var weight = DecodeNumber('B1nwrJpNnX4=', 1006, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('B1nwrJpNnX4=', 1006, -1000, 1000),DecodeDecimal('DowvWg3wl5c=', 1006, -1000, 1000),DecodeDecimal('DowvWg3wl5c=', 1006, -1000, 1000));
    question.answers.length = 0;
    question.num = 12;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston’s immediate reaction to the note is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('fOIzKGZYNHQ=', 1008, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "elated. ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('fOIzKGZYNHQ=', 1010, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "fearful.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('SvLtFHs72hY=', 1012, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "indifferent.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('KwQ5+FEwsqY=', 1014, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "suspicious.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 12;
    var weight = DecodeNumber('LuBoQ1x0tAg=', 1016, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('LuBoQ1x0tAg=', 1016, -1000, 1000),DecodeDecimal('LgAfpKi/F90=', 1016, -1000, 1000),DecodeDecimal('LgAfpKi/F90=', 1016, -1000, 1000));
    question.answers.length = 0;
    question.num = 13;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston recalls his mother as:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('LuBoQ1x0tAg=', 1018, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "cruel and distant.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('GN6ZfEI8GQU=', 1020, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "secretly rebellious.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('7m7RvfQD/yQ=', 1022, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "a Party supporter.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('XJw2D6ch3kU=', 1024, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "weak but loving.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 13;
    var weight = DecodeNumber('TS7wDJcVL9Q=', 1026, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('TS7wDJcVL9Q=', 1026, -1000, 1000),DecodeDecimal('afcgJAGklBY=', 1026, -1000, 1000),DecodeDecimal('afcgJAGklBY=', 1026, -1000, 1000));
    question.answers.length = 0;
    question.num = 14;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston believes that to exist truly is to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('TS7wDJcVL9Q=', 1028, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "conform outwardly.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7KjV47z5OWM=', 1030, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "die unnoticed.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hmVBckSxBRE=', 1032, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "think independently.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('hmVBckSxBRE=', 1034, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "serve Big Brother.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 14;
    var weight = DecodeNumber('9b83T+sO00Q=', 1036, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9b83T+sO00Q=', 1036, -1000, 1000),DecodeDecimal('VNX23owib3Y=', 1036, -1000, 1000),DecodeDecimal('VNX23owib3Y=', 1036, -1000, 1000));
    question.answers.length = 0;
    question.num = 15;
    question.isSingleAns = true;
    question.shortTextQuestion = "He visits Mr. Charrington’s shop to:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('XKYBIDav+/Q=', 1038, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "get a map.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XKYBIDav+/Q=', 1040, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "sell his diary.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('sKhhOhc2bps=', 1042, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "report a spy.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('90WbDloAFZA=', 1044, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "purchase pills.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 15;
    var weight = DecodeNumber('vFf5IsdB2BY=', 1046, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('vFf5IsdB2BY=', 1046, -1000, 1000),DecodeDecimal('DNg+zIByzmM=', 1046, -1000, 1000),DecodeDecimal('DNg+zIByzmM=', 1046, -1000, 1000));
    question.answers.length = 0;
    question.num = 16;
    question.isSingleAns = true;
    question.shortTextQuestion = "The prole woman he overhears singing seems:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Fvl63WciCyM=', 1048, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "joyfully oblivious.";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Fvl63WciCyM=', 1050, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "indoctrinated fully.";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('a61w0h3X3g4=', 1052, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "angry at the Party.";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('O2Z17+xlfbM=', 1054, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "suspicious and secretive.";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 16;
    var weight = DecodeNumber('9xYBIQ3zPkE=', 1056, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9xYBIQ3zPkE=', 1056, -1000, 1000),DecodeDecimal('WkcdE6/BAP0=', 1056, -1000, 1000),DecodeDecimal('WkcdE6/BAP0=', 1056, -1000, 1000));
    question.answers.length = 0;
    question.num = 17;
    question.isSingleAns = true;
    question.shortTextQuestion = "During the sudden switch in enemies,  Winston is tasked with:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('9xYBIQ3zPkE=', 1058, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "capturing enemy spies";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Z/n+6ZR6yA4=', 1060, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "burning Party posters";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('8JYN+XhGYK8=', 1062, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "memorizing new slogans";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4enQfvWQsYQ=', 1064, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "rewriting all historical records ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 17;
    var weight = DecodeNumber('BaDdButbfbU=', 1066, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('BaDdButbfbU=', 1066, -1000, 1000),DecodeDecimal('aOpd4YXheTA=', 1066, -1000, 1000),DecodeDecimal('aOpd4YXheTA=', 1066, -1000, 1000));
    question.answers.length = 0;
    question.num = 18;
    question.isSingleAns = true;
    question.shortTextQuestion = "The slogan changes to reflect a new enemy. Who is the new official enemy?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('BaDdButbfbU=', 1068, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Goldstein himself";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('TLOBi2lpdIM=', 1070, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Eastasia ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('TLOBi2lpdIM=', 1072, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Eurasia";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('AJgCezuQxLw=', 1074, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The Brotherhood";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 18;
    var weight = DecodeNumber('bDs9noSRhQg=', 1076, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('bDs9noSRhQg=', 1076, -1000, 1000),DecodeDecimal('mLOeI1ksPEE=', 1076, -1000, 1000),DecodeDecimal('mLOeI1ksPEE=', 1076, -1000, 1000));
    question.answers.length = 0;
    question.num = 19;
    question.isSingleAns = true;
    question.shortTextQuestion = "What do they see from the window that affects them deeply?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('bDs9noSRhQg=', 1078, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Goldstein’s symbol";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('x2+TXMyA6IA=', 1080, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A prole fight";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+RSGGe9J9f0=', 1082, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Children playing with telescreens";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('aAr+xpygTuo=', 1084, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A woman hanging laundry ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 19;
    var weight = DecodeNumber('0hurLzr0QZ4=', 1086, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('0hurLzr0QZ4=', 1086, -1000, 1000),DecodeDecimal('5t3BmhTAns4=', 1086, -1000, 1000),DecodeDecimal('5t3BmhTAns4=', 1086, -1000, 1000));
    question.answers.length = 0;
    question.num = 20;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston considers the prole woman as:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('0hurLzr0QZ4=', 1088, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "an enemy in disguise";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('+dJvXf8ndF0=', 1090, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "a Party loyalist";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('x5zZgqbSKtA=', 1092, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "a hope for the future";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('x5zZgqbSKtA=', 1094, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "a victim of Big Brother";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion21()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 20;
    var weight = DecodeNumber('qirogY3omqo=', 1096, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('qirogY3omqo=', 1096, -1000, 1000),DecodeDecimal('i6hj2IbvJ+s=', 1096, -1000, 1000),DecodeDecimal('i6hj2IbvJ+s=', 1096, -1000, 1000));
    question.answers.length = 0;
    question.num = 21;
    question.isSingleAns = true;
    question.shortTextQuestion = "What emotion overtakes Winston during the meeting?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('qirogY3omqo=', 1098, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Fear of discovery";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('xALa8x4A3cs=', 1100, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Political confusion";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('JBfod6P92kk=', 1102, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Uncontrollable desire ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('JBfod6P92kk=', 1104, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Doubt in Julia";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion22()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 21;
    var weight = DecodeNumber('RXUu33euc4M=', 1106, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('RXUu33euc4M=', 1106, -1000, 1000),DecodeDecimal('p/01f0tgqMs=', 1106, -1000, 1000),DecodeDecimal('p/01f0tgqMs=', 1106, -1000, 1000));
    question.answers.length = 0;
    question.num = 22;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia admits she often:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('/aWk4FPDSzs=', 1108, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Rebels through affairs";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('/aWk4FPDSzs=', 1110, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Reports Thoughtcrime";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ar9FZUyP61M=', 1112, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Sleeps with Inner Party members";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('5osSiYHb2b0=', 1114, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Lies about ration coupons";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion23()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 22;
    var weight = DecodeNumber('jI9IPjF2Ym4=', 1116, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jI9IPjF2Ym4=', 1116, -1000, 1000),DecodeDecimal('ft1M8L7Hmmk=', 1116, -1000, 1000),DecodeDecimal('ft1M8L7Hmmk=', 1116, -1000, 1000));
    question.answers.length = 0;
    question.num = 23;
    question.isSingleAns = true;
    question.shortTextQuestion = "What does the thrush’s song represent to Winston?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('jI9IPjF2Ym4=', 1118, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A sign from O’Brien";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('INFnr1mcsjA=', 1120, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Beauty without purpose ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('INFnr1mcsjA=', 1122, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Political hope";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('q4/pR7cj1Pg=', 1124, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A coded message";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion24()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 23;
    var weight = DecodeNumber('jb6/bw/e3dY=', 1126, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jb6/bw/e3dY=', 1126, -1000, 1000),DecodeDecimal('um89LV7ihdY=', 1126, -1000, 1000),DecodeDecimal('um89LV7ihdY=', 1126, -1000, 1000));
    question.answers.length = 0;
    question.num = 24;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia claims she does not care much for:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('jb6/bw/e3dY=', 1128, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Freedom";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('jeuHk0fvSXY=', 1130, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Big Brother";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('wF5J4AFGh1w=', 1132, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Winston’s past";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('wCSAmovghG8=', 1134, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Politics ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion25()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 24;
    var weight = DecodeNumber('S3zfzUmiubE=', 1136, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('S3zfzUmiubE=', 1136, -1000, 1000),DecodeDecimal('5OypQjw2R6Y=', 1136, -1000, 1000),DecodeDecimal('5OypQjw2R6Y=', 1136, -1000, 1000));
    question.answers.length = 0;
    question.num = 25;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston wakes up from a dream about:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('3DBjRyAfkoA=', 1138, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "His mother and sister ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3DBjRyAfkoA=', 1140, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Julia being arrested";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('hHvDJiXHEo8=', 1142, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "The Ministry of Love";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('wN6hI/lzv40=', 1144, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A prole uprising";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion26()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 25;
    var weight = DecodeNumber('R6vNOG8yRMo=', 1146, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('R6vNOG8yRMo=', 1146, -1000, 1000),DecodeDecimal('3p+wPZ4sFgw=', 1146, -1000, 1000),DecodeDecimal('3p+wPZ4sFgw=', 1146, -1000, 1000));
    question.answers.length = 0;
    question.num = 26;
    question.isSingleAns = true;
    question.shortTextQuestion = "What emotion does Winston feel about betraying his mother as a child?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('R6vNOG8yRMo=', 1148, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Confusion and fear";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('X3YZeStgUXE=', 1150, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Pride and violence";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('4WfZr7ghdns=', 1152, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Shame and guilt ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4WfZr7ghdns=', 1154, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Bitterness and disillusionment";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion27()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 26;
    var weight = DecodeNumber('jtpiv1xmKYU=', 1156, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('jtpiv1xmKYU=', 1156, -1000, 1000),DecodeDecimal('nUR9HRhnojU=', 1156, -1000, 1000),DecodeDecimal('nUR9HRhnojU=', 1156, -1000, 1000));
    question.answers.length = 0;
    question.num = 27;
    question.isSingleAns = true;
    question.shortTextQuestion = "Their hiding spot is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('jtpiv1xmKYU=', 1158, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A secure Ministry office";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('hVn1f0JA+F4=', 1160, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A share of the Ministry basement";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('RnfA9NZmKJw=', 1162, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "An attic in Victory Mansions";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('l1UTDBSsgtE=', 1164, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A room above Charrington’s shop ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion28()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 27;
    var weight = DecodeNumber('3k6+f72Wj0Q=', 1166, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('3k6+f72Wj0Q=', 1166, -1000, 1000),DecodeDecimal('vsavtQBtTXA=', 1166, -1000, 1000),DecodeDecimal('vsavtQBtTXA=', 1166, -1000, 1000));
    question.answers.length = 0;
    question.num = 28;
    question.isSingleAns = true;
    question.shortTextQuestion = "In the shop room, Winston writes:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('3k6+f72Wj0Q=', 1168, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "“Down with Big Brother”";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('0h9+tAJKGnU=', 1170, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A political leaflet";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('ay9Xb3utQjg=', 1172, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A Party slogan";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('X1zePtL5jYM=', 1174, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "“I love Julia” ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion29()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 28;
    var weight = DecodeNumber('mFUmzK7XJBk=', 1176, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('mFUmzK7XJBk=', 1176, -1000, 1000),DecodeDecimal('0vEAmaTFhMk=', 1176, -1000, 1000),DecodeDecimal('0vEAmaTFhMk=', 1176, -1000, 1000));
    question.answers.length = 0;
    question.num = 29;
    question.isSingleAns = true;
    question.shortTextQuestion = "They ignore:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('BO8NQA+P5dw=', 1178, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A news broadcast outside ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BO8NQA+P5dw=', 1180, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A police siren";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('77ihEeYQxlM=', 1182, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Their own heartbeat";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('sOyS4gk8Kz4=', 1184, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The smell of smoke";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion30()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 29;
    var weight = DecodeNumber('pGL2OmvZ2GE=', 1186, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('pGL2OmvZ2GE=', 1186, -1000, 1000),DecodeDecimal('Id/1xcy7piA=', 1186, -1000, 1000),DecodeDecimal('Id/1xcy7piA=', 1186, -1000, 1000));
    question.answers.length = 0;
    question.num = 30;
    question.isSingleAns = true;
    question.shortTextQuestion = "Julia delays a meeting because:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('pGL2OmvZ2GE=', 1188, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "She fears the Thought Police";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('nekwCalc93E=', 1190, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "She’s ill";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('KOAOJVKMwTo=', 1192, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Winston disappeared";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7wiYD+DJTTI=', 1194, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "She’s at work ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion31()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 30;
    var weight = DecodeNumber('k6MKqHK43Lk=', 1196, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('k6MKqHK43Lk=', 1196, -1000, 1000),DecodeDecimal('PiM/XfOvO9o=', 1196, -1000, 1000),DecodeDecimal('PiM/XfOvO9o=', 1196, -1000, 1000));
    question.answers.length = 0;
    question.num = 31;
    question.isSingleAns = true;
    question.shortTextQuestion = "When do they realize they are watched?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('k6MKqHK43Lk=', 1198, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Noticing a new smiley eye";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('bo4h629ZFdg=', 1200, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Spotting a microphone";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('bo4h629ZFdg=', 1202, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Sensing cold air";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('C8VmkP73YjQ=', 1204, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Hearing footsteps upstairs";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion32()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 31;
    var weight = DecodeNumber('VGCKjzDRgSU=', 1206, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('VGCKjzDRgSU=', 1206, -1000, 1000),DecodeDecimal('za5m6kSrM8g=', 1206, -1000, 1000),DecodeDecimal('za5m6kSrM8g=', 1206, -1000, 1000));
    question.answers.length = 0;
    question.num = 32;
    question.isSingleAns = true;
    question.shortTextQuestion = "They hear:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('XEgkLghsBd0=', 1208, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Mr. Charrington’s footsteps ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('XEgkLghsBd0=', 1210, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Parsons’s daughter outside";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('E0ni61y5quM=', 1212, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Goldstein’s speech";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('dDN5Ahb64xg=', 1214, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Telescreen voices from above";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion33()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 32;
    var weight = DecodeNumber('C/2R59DN8I0=', 1216, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('C/2R59DN8I0=', 1216, -1000, 1000),DecodeDecimal('imCiKPCZGYs=', 1216, -1000, 1000),DecodeDecimal('imCiKPCZGYs=', 1216, -1000, 1000));
    question.answers.length = 0;
    question.num = 33;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston calls his confession:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('C/2R59DN8I0=', 1218, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A political act";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('UBikJWZ4dmw=', 1220, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A step to joining the Brotherhood ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('UBikJWZ4dmw=', 1222, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Meaningless writing";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('LZL2qe+b8sY=', 1224, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "A symbol of betrayal";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion34()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 33;
    var weight = DecodeNumber('JTzOLrYImjI=', 1226, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JTzOLrYImjI=', 1226, -1000, 1000),DecodeDecimal('iOgfHUt0Hbo=', 1226, -1000, 1000),DecodeDecimal('iOgfHUt0Hbo=', 1226, -1000, 1000));
    question.answers.length = 0;
    question.num = 34;
    question.isSingleAns = true;
    question.shortTextQuestion = "He believes the Brotherhood is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('JTzOLrYImjI=', 1228, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A Party fabrication";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vjTFsquyqNI=', 1230, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A children's story";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('NqW8F0AWy0w=', 1232, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A warning tool";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('GhcULpKTKM8=', 1234, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Real and active ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion35()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 34;
    var weight = DecodeNumber('Q3XpAHWH6a0=', 1236, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Q3XpAHWH6a0=', 1236, -1000, 1000),DecodeDecimal('BGvRBxp1AO0=', 1236, -1000, 1000),DecodeDecimal('BGvRBxp1AO0=', 1236, -1000, 1000));
    question.answers.length = 0;
    question.num = 35;
    question.isSingleAns = true;
    question.shortTextQuestion = "He visits O’Brien to give him:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('Q3XpAHWH6a0=', 1238, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "A code for Goldstein";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Jmn9Vrdc2fU=', 1240, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "A new Newspeak draft";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('2+aIFWa00Ac=', 1242, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A Party invitation";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('DrwyL6m9MXo=', 1244, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "The confession and ask for Party help ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion36()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 35;
    var weight = DecodeNumber('Aw1L1w2a+Tc=', 1246, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Aw1L1w2a+Tc=', 1246, -1000, 1000),DecodeDecimal('qvI31ik0oPg=', 1246, -1000, 1000),DecodeDecimal('qvI31ik0oPg=', 1246, -1000, 1000));
    question.answers.length = 0;
    question.num = 36;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien tells Winston:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('lRiNBEGcSsI=', 1248, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He’s suspected of thoughtcrime ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('lRiNBEGcSsI=', 1250, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Julia reported him";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('rJOTYxCkiGo=', 1252, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "His paperweight is illegal";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('K/b+SkweutY=', 1254, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He is already watched";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion37()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 36;
    var weight = DecodeNumber('MXeytsn07Ag=', 1256, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('MXeytsn07Ag=', 1256, -1000, 1000),DecodeDecimal('WvsWaQ6VPIA=', 1256, -1000, 1000),DecodeDecimal('WvsWaQ6VPIA=', 1256, -1000, 1000));
    question.answers.length = 0;
    question.num = 37;
    question.isSingleAns = true;
    question.shortTextQuestion = "They toast using:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('MXeytsn07Ag=', 1258, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Sparkling wine";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vmYgFwho5xw=', 1260, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Prole liquor ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('vmYgFwho5xw=', 1262, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Government issue rum";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('oHTUvr+w6rQ=', 1264, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Vivid tea";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion38()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 37;
    var weight = DecodeNumber('9SzWfn+VoO8=', 1266, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('9SzWfn+VoO8=', 1266, -1000, 1000),DecodeDecimal('vYeaFZ3TqEA=', 1266, -1000, 1000),DecodeDecimal('vYeaFZ3TqEA=', 1266, -1000, 1000));
    question.answers.length = 0;
    question.num = 38;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien reveals: ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('9SzWfn+VoO8=', 1268, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He’s a Thought Police officer";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('qpC9B3IbdRE=', 1270, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He supports the Brotherhood ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('qpC9B3IbdRE=', 1272, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He reported them";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('0MJIGkyJDnw=', 1274, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He’s Big Brother in disguise";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion39()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 38;
    var weight = DecodeNumber('NcPOA4oE0Q0=', 1276, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('NcPOA4oE0Q0=', 1276, -1000, 1000),DecodeDecimal('30GxMzTUX3E=', 1276, -1000, 1000),DecodeDecimal('30GxMzTUX3E=', 1276, -1000, 1000));
    question.answers.length = 0;
    question.num = 39;
    question.isSingleAns = true;
    question.shortTextQuestion = "On leaving Charrington’s room, they feel:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('NcPOA4oE0Q0=', 1278, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Suspicious of each other";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('EvtDG2c5iRA=', 1280, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Exhausted and confused";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('v9INGcHmxOU=', 1282, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Anxious and guilty";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('nGo+ib8wjnA=', 1284, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Triumphant and free ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion40()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 39;
    var weight = DecodeNumber('ljp4N031Y14=', 1286, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('ljp4N031Y14=', 1286, -1000, 1000),DecodeDecimal('pwSRwkSj2AI=', 1286, -1000, 1000),DecodeDecimal('pwSRwkSj2AI=', 1286, -1000, 1000));
    question.answers.length = 0;
    question.num = 40;
    question.isSingleAns = true;
    question.shortTextQuestion = "Mr. Charrington reveals:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('ljp4N031Y14=', 1288, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He is fleeing Oceania";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('m23KQzS6uA8=', 1290, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He is a Thought Police agent ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('m23KQzS6uA8=', 1292, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He is a Brotherhood member";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('7S+q74UmuoE=', 1294, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He sympathizes with them";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion41()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 40;
    var weight = DecodeNumber('PUnkUCBdPRM=', 1296, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('PUnkUCBdPRM=', 1296, -1000, 1000),DecodeDecimal('Pjf4WV9qsgU=', 1296, -1000, 1000),DecodeDecimal('Pjf4WV9qsgU=', 1296, -1000, 1000));
    question.answers.length = 0;
    question.num = 41;
    question.isSingleAns = true;
    question.shortTextQuestion = "While separated, Winston feels:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('7U8vQ26Mcp8=', 1298, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Desperate ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('7U8vQ26Mcp8=', 1300, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Calm";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('U4cevwv2pNY=', 1302, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Indifferent";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4HvYsjdbU6M=', 1304, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Relieved";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion42()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 41;
    var weight = DecodeNumber('hyBzc60ctpc=', 1306, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('hyBzc60ctpc=', 1306, -1000, 1000),DecodeDecimal('6hB9AjD48vg=', 1306, -1000, 1000),DecodeDecimal('6hB9AjD48vg=', 1306, -1000, 1000));
    question.answers.length = 0;
    question.num = 42;
    question.isSingleAns = true;
    question.shortTextQuestion = "The guard warns Winston:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('KLLEtLC/2yc=', 1308, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "He will survive only if he obeys ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('KLLEtLC/2yc=', 1310, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "He’ll be released soon";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('9stm2KnWN4A=', 1312, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "He can repent with a confession";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('N6zuw3jU38U=', 1314, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "He will be brainwashed";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion43()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 42;
    var weight = DecodeNumber('UOBd7GF03ww=', 1316, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UOBd7GF03ww=', 1316, -1000, 1000),DecodeDecimal('VlB8Ty166NA=', 1316, -1000, 1000),DecodeDecimal('VlB8Ty166NA=', 1316, -1000, 1000));
    question.answers.length = 0;
    question.num = 43;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien uses what to control Winston?";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('UOBd7GF03ww=', 1318, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Sleep deprivation";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('3GxJNFkQmAM=', 1320, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Torture ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('3GxJNFkQmAM=', 1322, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Threats only";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('IyXZK85cAAM=', 1324, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Love";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion44()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 43;
    var weight = DecodeNumber('zTCL+yux7lU=', 1326, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('zTCL+yux7lU=', 1326, -1000, 1000),DecodeDecimal('GUcfUbHXKao=', 1326, -1000, 1000),DecodeDecimal('GUcfUbHXKao=', 1326, -1000, 1000));
    question.answers.length = 0;
    question.num = 44;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston sees the rats and becomes:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('vjHnyeyYYGU=', 1328, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Terrified ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('vjHnyeyYYGU=', 1330, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Indifferent";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('/jfd0Iky83Q=', 1332, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Amused";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('eLm8qOLmau0=', 1334, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Curious";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion45()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 44;
    var weight = DecodeNumber('f/TtqHHxxFM=', 1336, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('f/TtqHHxxFM=', 1336, -1000, 1000),DecodeDecimal('KKdg0uF9Qtc=', 1336, -1000, 1000),DecodeDecimal('KKdg0uF9Qtc=', 1336, -1000, 1000));
    question.answers.length = 0;
    question.num = 45;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston admits the Party can make him:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('f/TtqHHxxFM=', 1338, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Deny Big Brother";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('l+cwiGq5pnA=', 1340, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Love Big Brother ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('l+cwiGq5pnA=', 1342, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Abolish himself";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('4jCXnTdZD24=', 1344, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Avoid truth";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion46()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 45;
    var weight = DecodeNumber('onuymaJgWwA=', 1346, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('onuymaJgWwA=', 1346, -1000, 1000),DecodeDecimal('5dWqiQP53vE=', 1346, -1000, 1000),DecodeDecimal('5dWqiQP53vE=', 1346, -1000, 1000));
    question.answers.length = 0;
    question.num = 46;
    question.isSingleAns = true;
    question.shortTextQuestion = "O’Brien encourages Winston to accept that:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('onuymaJgWwA=', 1348, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Goldstein is alive";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('LqOvFNrjdUY=', 1350, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Proles will rise";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('v1ej2gguOuw=', 1352, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Julia is lying";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('94w6pXGTrzA=', 1354, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "2 + 2 = 5 ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion47()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 46;
    var weight = DecodeNumber('HIyaSyI2vVw=', 1356, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('HIyaSyI2vVw=', 1356, -1000, 1000),DecodeDecimal('0931xh77vNY=', 1356, -1000, 1000),DecodeDecimal('0931xh77vNY=', 1356, -1000, 1000));
    question.answers.length = 0;
    question.num = 47;
    question.isSingleAns = true;
    question.shortTextQuestion = "In Room 101, Winston sees:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('HIyaSyI2vVw=', 1358, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Big Brother’s photo";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('Spz2OTFzodc=', 1360, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Jumbo rats ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Spz2OTFzodc=', 1362, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A secret door";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('cobAMH5hPz8=', 1364, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Spiders";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion48()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 47;
    var weight = DecodeNumber('1kWQqF2+H0Q=', 1366, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('1kWQqF2+H0Q=', 1366, -1000, 1000),DecodeDecimal('KxYFonFYvCI=', 1366, -1000, 1000),DecodeDecimal('KxYFonFYvCI=', 1366, -1000, 1000));
    question.answers.length = 0;
    question.num = 48;
    question.isSingleAns = true;
    question.shortTextQuestion = "Facing rats, Winston:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('1kWQqF2+H0Q=', 1368, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Holds firm";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zHCdLeZU5sk=', 1370, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Laughs";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('+m38sWr67WA=', 1372, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Defies Big Brother";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('I4+t+B0wonE=', 1374, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Screams for Julia ";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion49()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 48;
    var weight = DecodeNumber('OGJ+l/2H/xU=', 1376, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('OGJ+l/2H/xU=', 1376, -1000, 1000),DecodeDecimal('4bpfDhcpm50=', 1376, -1000, 1000),DecodeDecimal('4bpfDhcpm50=', 1376, -1000, 1000));
    question.answers.length = 0;
    question.num = 49;
    question.isSingleAns = true;
    question.shortTextQuestion = "Their reunion is:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('zavnr8qDneE=', 1378, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Cold and empty ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('zavnr8qDneE=', 1380, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Emotional and resistant";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('Nazl71iCIRQ=', 1382, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Violent";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('xCY+EWqJJLg=', 1384, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Warm and hopeful";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion50()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 49;
    var weight = DecodeNumber('fuPlKDuVXaY=', 1386, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('fuPlKDuVXaY=', 1386, -1000, 1000),DecodeDecimal('G3yCv82O+qk=', 1386, -1000, 1000),DecodeDecimal('G3yCv82O+qk=', 1386, -1000, 1000));
    question.answers.length = 0;
    question.num = 50;
    question.isSingleAns = true;
    question.shortTextQuestion = "Winston now feels:";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('BE6otDI4QxI=', 1388, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Complete indifference ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('BE6otDI4QxI=', 1390, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Hope for rebellion";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('lKGBAtoOu40=', 1392, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "Anger toward O’Brien";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('jmF8Jzzk50E=', 1394, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Deep love for Julia";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion51()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 50;
    var weight = DecodeNumber('1Yg9ELrMrEE=', 947, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('Gu6fkz8lVhM=', 947, -1000, 1000),DecodeDecimal('wMR8b2ew90c=', 947, -1000, 1000),DecodeDecimal('wMR8b2ew90c=', 947, -1000, 1000));
    question.num = 51;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 7 Part 1 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}
/* Code generated function */
function InitQuestion52()
{
    const type = QMAKE_OPENANS;
    const questionIndex = 51;
    var weight = DecodeNumber('GUcfUbHXKao=', 1316, 0, 99999);
    var numOfAnswers = 0;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('UOBd7GF03ww=', 1316, -1000, 1000),DecodeDecimal('VlB8Ty166NA=', 1316, -1000, 1000),DecodeDecimal('VlB8Ty166NA=', 1316, -1000, 1000));
    question.num = 52;
    question.answers.length = 0;
    question.shortTextQuestion = "Summarise Chapter 7 Part 2 (about 100 words)";
    var comment = $('#comment' + questionIndex).val();
    var answer = new Answer(0,0,1,0,comment);
    question.answers.push(answer);
    return question;

}


/* Code generated function */
function ClearQuestion1()
{
    const questionIndex = 0;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion2()
{
    const questionIndex = 1;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion3()
{
    const questionIndex = 2;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion4()
{
    const questionIndex = 3;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion5()
{
    const questionIndex = 4;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion6()
{
    const questionIndex = 5;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion7()
{
    const questionIndex = 6;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion8()
{
    const questionIndex = 7;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion9()
{
    const questionIndex = 8;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion10()
{
    const questionIndex = 9;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion11()
{
    const questionIndex = 10;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion12()
{
    const questionIndex = 11;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion13()
{
    const questionIndex = 12;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion14()
{
    const questionIndex = 13;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion15()
{
    const questionIndex = 14;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion16()
{
    const questionIndex = 15;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion17()
{
    const questionIndex = 16;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion18()
{
    const questionIndex = 17;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion19()
{
    const questionIndex = 18;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion20()
{
    const questionIndex = 19;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion21()
{
    const questionIndex = 20;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion22()
{
    const questionIndex = 21;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion23()
{
    const questionIndex = 22;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion24()
{
    const questionIndex = 23;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion25()
{
    const questionIndex = 24;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion26()
{
    const questionIndex = 25;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion27()
{
    const questionIndex = 26;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion28()
{
    const questionIndex = 27;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion29()
{
    const questionIndex = 28;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion30()
{
    const questionIndex = 29;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion31()
{
    const questionIndex = 30;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion32()
{
    const questionIndex = 31;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion33()
{
    const questionIndex = 32;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion34()
{
    const questionIndex = 33;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion35()
{
    const questionIndex = 34;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion36()
{
    const questionIndex = 35;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion37()
{
    const questionIndex = 36;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion38()
{
    const questionIndex = 37;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion39()
{
    const questionIndex = 38;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion40()
{
    const questionIndex = 39;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion41()
{
    const questionIndex = 40;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion42()
{
    const questionIndex = 41;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion43()
{
    const questionIndex = 42;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion44()
{
    const questionIndex = 43;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion45()
{
    const questionIndex = 44;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion46()
{
    const questionIndex = 45;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion47()
{
    const questionIndex = 46;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion48()
{
    const questionIndex = 47;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion49()
{
    const questionIndex = 48;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion50()
{
    const questionIndex = 49;
    ClearSingleAnswerChoices(questionIndex);

}
/* Code generated function */
function ClearQuestion51()
{
    const questionIndex = 50;
    ClearOpenAns(questionIndex);

}
/* Code generated function */
function ClearQuestion52()
{
    const questionIndex = 51;
    ClearOpenAns(questionIndex);

}






