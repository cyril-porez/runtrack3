

function tri(numbers, order) {

    if (order == 'asc') {
        for (let i = 0; i < numbers.length; i++) {
        
            if (numbers[i] > numbers[i + 1]) {
                let temp 
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp   
                
                tri(numbers, 'asc')
            }   
        }
        return (numbers)  
    }

    else if (order == 'desc') {
        for (let i = 0; i < numbers.length; i++) {
        
            if (numbers[i] < numbers[i + 1]) {
                let temp 
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp   
                
                tri(numbers, 'desc')
            }   
        }
        return (numbers)  

    }
    
   
}

const arr = [5, 85, 5, 45, 26]
console.log(tri(arr, 'desc'))
