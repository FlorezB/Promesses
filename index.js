// const hello = () => {
//     return new Promise((resolve, reject) => {
        
//         setTimeout(() => {
//             resolve("Hello World")
//         }, 2000)
//     })
// }

// const waitHello = async () => {
//     const result = await hello ()
//     console.log(result)
// }

// waitHello ()




// 02 - Le temps

const tempOfDay = () => {
    const temperature = 15
    return new Promise ((resolve, reject) => {
         setTimeout (() => {
        if (temperature <= 10) {
            resolve ("Il fait froid")
        } else {
            reject ("Il fait chaud")
        }
    }, 4000)
    })
}
   

const waitTemp = async () => {
    try {
        const result = await tempOfDay()
        console.log(result)
      } catch(error) {
        console.log(error)
      }
    }

  waitTemp() 