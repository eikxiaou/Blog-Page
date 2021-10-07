const ADJECTIVE =[
    'venomous',
'decorous',
'gainful',
'sincere',
'tough',
'painstaking',
'dear',
'spiritual',
'unbecoming',
'roomy',
]

const OBJECTS=[
    'sausage',
'blubber',
'pencil',
'cloud',
'moon',
'water',
'computer',
'school',
'network',
]

function genrandomusername(){
    const adj=ADJECTIVE[Math.floor(Math.random()*9)];
    const obj=OBJECTS[Math.floor(Math.random()*9)];
    return `${adj}-${obj}`
}

module.exports={
    genrandomusername
}