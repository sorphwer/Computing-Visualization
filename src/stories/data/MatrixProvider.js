export default class MatrixProvider {
    // const data =[
    //     {
    //         'index':0,
    //         0:20,
    //         1:30,
    //     },
    //     {
    //         'index':1,
    //         0:20,
    //         1:30,
    //     }
    // ]
    constructor(col,row){
        this.data=[]
        this.keys=[...Array(row).keys()] 
        for(let i=0;i<col;i++){
            let series = {'index':i}
            for(let j=0;j<row;j++){
                series[j]=0;
            }
            this.data.push(series);
        }
    }
} 