// 나머지 매개변수(rest parameter)

function func (a,b, ...args) {
  console.log(...args)
}

func(1, 2, 3) // 3
func(1, 2, 3, 4, 5, 6, 7) // 3 4 5 6 7