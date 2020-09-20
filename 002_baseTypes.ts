const numberList: number[] = [12, 4]
const textList: string[] = ["Hello","World"]

/*
 *  Reemplazar los undefined por los tipos correctos
 */ 

const result01: undefined = [...numberList]
const result02: undefined = [...textList]
const result03: undefined = [numberList[0], numberList[1]]
const result04: undefined = [textList[0], numberList[1]]
const result05: undefined = [numberList[0], textList[0]]
const result06: undefined = [numberList, numberList]
const result07: undefined = [textList, textList]
const result08: undefined = [numberList, textList]
const result09: undefined= [numberList, textList, ...numberList, ...textList]