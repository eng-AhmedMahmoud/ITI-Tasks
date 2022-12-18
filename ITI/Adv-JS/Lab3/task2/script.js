function box (height , width , length ,material , content){
    Object.defineProperties(this,{
        height:{
            value : height,
        },
        width:{
            value : width,
        },
        length:{
            value : length,
        },
        material:{
            value : material,
        },
        content:{
            value : content,
        },
        count :{
            value : content.length
        },
}
);

this.addBook  = function(book){
    this.content.push(book);
    this.count = this.content.length;
}
this.countBooks  = function(){
    console.log(this.count);
}
this.remove = function (bookName) {

    var flag = 0;
    for(let i = 0 ; i<this.content.length ; i++)
    {
        if(bookName == this.content[i].title)
        {
            this.content.splice(i, 1);
            flag = 1;
            this.count = this.content.length;

        }
    }
    if(flag == 0){
        throw "No Book to remove"
    }
}
box.prototype.valueOf = function()
{
    return this.content.length;
}
box.prototype.toString = function()
{
    console.log('height = '+this.height)
    console.log('width = '+this.width)
    console.log('length = '+this.length)
    console.log('material = '+this.material)
    console.log('books = '+this.content.length)
    
    for(let i = 0 ; i<this.content.length ; i++)
    {
        console.log(this.content[i])
    }
}
}

function book(title , numofChapters , author , numofPages , publisher,numofCopies)
{
    Object.defineProperties(this,{
        title:{
            value : title,
        },
        numofChapters:{
            value : numofChapters,
        },
        author:{
            value : author,
        },
        numofPages:{
            value : numofPages,
        },
        publisher:{
            value : publisher,
        },
        numofCopies:{
            value : numofCopies,
        },
    }
);
    book.counter++;

}
    book.counter=0;
    book.getBookCounter = function()
    {
        return book.counter
    };
var book1 = new book("MyBook" , 15 , "john" , 2000,"Johns"  , 3);
var book2 = new book("My New Book 2" , 12 , "Mido" , 2000,"Midos"  , 1);
var book3 = new book("My New Book 3" , 15 , "john2" , 2000,"Johns2"  , 3);
var book4 = new book("My New Book 4" , 12 , "Mido2" , 2000,"Midos4"  , 1);
var book5 = new book("My New Book 5" , 15 , "john3" , 2000,"Johns5"  , 3);
var box1 = new box(10 , 12 , 10 , "wood"  , []);
var box2 = new box(13 , 13 , 13 , "iron"  , []);

box1.addBook(book1);
box1.addBook(book2);
box1.addBook(book3);
box2.addBook(book4);
box2.addBook(book5);

box1.remove("MyBook");


box1.toString();
box2.toString();

console.log(" value of 2 boxes : " ,box1+box2);
 
