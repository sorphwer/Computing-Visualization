export default class MatrixProvider {
    constructor(col,row){
        this.col=col;
        this.row=row;
        this.data=[];
        for(let i=0;i<row;i++){
            let series = {'index':'Row'+i.toString()}
            for(let j=0;j<col;j++){
                series['Col'+j.toString()]=j;
            }
            this.data.push(series);
        }
    }
    getCurrentValue(){
        return this.data;
    }
} 