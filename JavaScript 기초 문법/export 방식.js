// 1. default Export
// 1) name.js
const Name = () => {
}

export default Name

// 2) other file 
// 아무 이름으로 import 가능
import newName from "name.js"
import NameFromOtherModule from "name.js

// 2. named export
// 1) 하나의 파일에서 여러 변수/클래스 등을 export 하는 것이 가능
export const Name1 = () => {
}
export const Name2 = () => {
}

// 2) other file
import {Name1, Name2} from "name.js"
import {newName} from "name.js" // x
// 다른 이름으로 바꾸려면 as 사용
import {Name1 as newName, Name2} from "name.js"
// default export 처럼 가져오려면 * 사용
import * as NameModule from "name.js"
